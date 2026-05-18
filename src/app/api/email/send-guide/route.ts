import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { sendEmail } from '@/lib/email';
import { captureLead } from '@/lib/leads';
import { pdfBonusHtml } from '@/lib/email-templates';

const rateMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(t => now - t < 600000);
  if (timestamps.length >= 5) return true;
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Trop de demandes.' }, { status: 429 });
    }

    const { email, honeypot } = await request.json();
    if (honeypot) return NextResponse.json({ success: true });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    await captureLead(email, 'pdf_guide');

    // Read PDF from public folder
    const attachments: Array<{ name: string; content: string }> = [];
    try {
      const pdfPath = join(process.cwd(), 'public', 'guide-7-erreurs-kit-solaire.pdf');
      const pdfBuffer = await readFile(pdfPath);
      attachments.push({ name: 'guide-7-erreurs-kit-solaire.pdf', content: pdfBuffer.toString('base64') });
    } catch {
      console.warn('[send-guide] PDF not found, sending without attachment');
    }

    // Try bonus PDF if it exists
    try {
      const bonusPath = join(process.cwd(), 'public', 'bonus', '5-erreurs-bonus.pdf');
      const bonusBuffer = await readFile(bonusPath);
      attachments.push({ name: '5-erreurs-bonus.pdf', content: bonusBuffer.toString('base64') });
    } catch {
      // Bonus not yet produced
    }

    // Try Excel simulation if it exists
    try {
      const xlsxPath = join(process.cwd(), 'public', 'bonus', 'simulation-solaire-balcon.xlsx');
      const xlsxBuffer = await readFile(xlsxPath);
      attachments.push({ name: 'simulation-solaire-balcon.xlsx', content: xlsxBuffer.toString('base64') });
    } catch {
      // Excel not yet produced
    }

    const html = pdfBonusHtml(email);

    await sendEmail({
      to: email,
      subject: 'Votre guide "7 erreurs \u00e0 \u00e9viter" + bonus',
      html,
      text: 'Votre guide est en pi\u00e8ce jointe. Calculez votre ROI : https://monbalconsolaire.fr/calculateur',
      tags: ['pdf_guide'],
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[api/email/send-guide]', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
