import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { captureLead } from '@/lib/leads';
import { promoWelcomeHtml } from '@/lib/email-templates';

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

    await captureLead(email, 'codes_promo');

    await sendEmail({
      to: email,
      subject: 'Bienvenue dans les alertes promo MonBalconSolaire',
      html: promoWelcomeHtml(email),
      text: 'Vous serez pr\u00e9venu\u00b7e d\u00e8s qu\'un bon plan solaire appara\u00eet. Bons plans actuels : https://monbalconsolaire.fr/codes-promo',
      tags: ['codes_promo'],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[api/email/subscribe-promo]', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
