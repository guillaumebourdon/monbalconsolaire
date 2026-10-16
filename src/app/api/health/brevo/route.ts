import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Santé de la clé Brevo, appelée chaque matin par le récap quotidien (projet geosignal, /api/cron/recap).
 * L'appel sert aussi la clé : Brevo désactive une clé restée 90 jours sans servir (panne du 11/07 au 16/10/2026).
 * Ne renvoie que ok + code HTTP, jamais d'information du compte.
 */
export async function GET() {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false, status: 0, error: 'BREVO_API_KEY absente' });

  try {
    const res = await fetch('https://api.brevo.com/v3/account', {
      headers: { 'api-key': apiKey, accept: 'application/json' },
      cache: 'no-store',
    });
    let error: string | undefined;
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      error = typeof data?.message === 'string' ? data.message.slice(0, 120) : undefined;
      console.error('[health/brevo]', res.status, error);
    }
    return NextResponse.json({ ok: res.ok, status: res.status, ...(error && { error }) });
  } catch (e) {
    console.error('[health/brevo]', e);
    return NextResponse.json({ ok: false, status: 0, error: 'Brevo injoignable' });
  }
}
