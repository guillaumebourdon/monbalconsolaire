import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { captureLead } from '@/lib/leads';
import { pdfBonusHtml } from '@/lib/email-templates';

const rateMap = new Map<string, number[]>();
const BASE_URL = 'https://monbalconsolaire.fr';

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(t => now - t < 600000);
  if (timestamps.length >= 5) return true;
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

async function fetchFileAsBase64(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    return Buffer.from(buffer).toString('base64');
  } catch {
    return null;
  }
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

    // Fetch attachments via HTTP (works in serverless)
    const attachments: Array<{ name: string; content: string }> = [];

    const guideB64 = await fetchFileAsBase64(`${BASE_URL}/guide-7-erreurs-kit-solaire.pdf`);
    if (guideB64) attachments.push({ name: 'guide-7-erreurs-kit-solaire.pdf', content: guideB64 });

    const bonusB64 = await fetchFileAsBase64(`${BASE_URL}/bonus/5-erreurs-bonus.pdf`);
    if (bonusB64) attachments.push({ name: '5-erreurs-bonus.pdf', content: bonusB64 });

    const xlsxB64 = await fetchFileAsBase64(`${BASE_URL}/bonus/simulation-solaire-balcon.xlsx`);
    if (xlsxB64) attachments.push({ name: 'simulation-solaire-balcon.xlsx', content: xlsxB64 });

    const html = pdfBonusHtml(email);

    const result = await sendEmail({
      to: email,
      subject: 'Votre guide "7 erreurs \u00e0 \u00e9viter" + bonus',
      html,
      text: 'Votre guide est en pi\u00e8ce jointe. Calculez votre ROI : https://monbalconsolaire.fr/calculateur',
      tags: ['pdf_guide'],
      attachments,
    });

    if (!result.success) {
      return NextResponse.json({ error: (result as Record<string, unknown>).error || 'Erreur envoi email', attachments: attachments.length }, { status: 502 });
    }
    return NextResponse.json({ success: true, queued: result.queued || false, attachments: attachments.length });
  } catch (error) {
    console.error('[api/email/send-guide]', error);
    return NextResponse.json({ error: `Erreur: ${error instanceof Error ? error.message : 'inconnue'}` }, { status: 500 });
  }
}
