import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { captureLead } from '@/lib/leads';
import { calculatorReportHtml, calculatorReportText } from '@/lib/email-templates';

// Simple rate limit: Map<ip, timestamp[]>
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 10 * 60 * 1000; // 10 min

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(t => now - t < RATE_WINDOW);
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length < 254;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Trop de demandes. Réessayez dans quelques minutes.' }, { status: 429 });
    }

    const body = await request.json();
    const { email, profile, kits, annualProduction, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }); // Silent reject
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // Store lead
    await captureLead(email, 'calculator', profile);

    // Build short profile summary for subject
    const profileSummary = `${profile?.dept || ''} ${profile?.orientation || ''}, ${profile?.presence || ''}`.trim();

    // Send email
    const html = calculatorReportHtml(email, profile, kits || [], annualProduction || 0);
    const text = calculatorReportText(profile, kits || []);

    await sendEmail({
      to: email,
      subject: `Votre rapport solaire personnalisé · ${profileSummary}`,
      html,
      text,
      tags: ['calculator_report'],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[api/email/send-report]', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
