import { NextRequest, NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

// Clé fournie par la variable d'environnement Vercel INDEXNOW_KEY (présente en Production et Preview).
// Le fichier public/<clé>.txt doit contenir la même valeur.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const HOST = 'monbalconsolaire.fr';
const ORIGIN = `https://${HOST}`;
const MAX_URLS = 100;

/** URL absolue normalisée (sans slash final ni paramètres), ou null si hors domaine. */
function normalize(raw: string): string | null {
  try {
    const u = new URL(raw.startsWith('/') ? `${ORIGIN}${raw}` : raw);
    if (u.protocol !== 'https:' || u.host !== HOST) return null;
    const path = u.pathname.replace(/\/$/, '');
    return `${ORIGIN}${path}`;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  if (!INDEXNOW_KEY) {
    return NextResponse.json({ error: 'INDEXNOW_KEY non configurée' }, { status: 503 });
  }
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'urls array is required' }, { status: 400 });
    }
    if (urls.length > MAX_URLS) {
      return NextResponse.json({ error: `${MAX_URLS} URL maximum par appel` }, { status: 400 });
    }

    // Seules les URL https://monbalconsolaire.fr présentes dans le sitemap sont acceptées.
    const allowed = new Set(sitemap().map((entry) => normalize(entry.url)).filter(Boolean) as string[]);
    const accepted: string[] = [];
    const rejected: string[] = [];
    for (const u of urls) {
      const n = typeof u === 'string' ? normalize(u) : null;
      if (n && allowed.has(n)) accepted.push(n);
      else rejected.push(String(u));
    }
    if (accepted.length === 0) {
      return NextResponse.json({ error: 'Aucune URL du sitemap', rejected }, { status: 400 });
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${ORIGIN}/${INDEXNOW_KEY}.txt`,
        urlList: Array.from(new Set(accepted)),
      }),
    });

    return NextResponse.json({
      status: response.status,
      message: response.status === 200 ? 'URLs submitted successfully' : 'Submission received',
      urlCount: accepted.length,
      rejected,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to submit to IndexNow' }, { status: 500 });
  }
}

export async function GET() {
  // Ne pas exposer la clé complète
  return NextResponse.json({ host: HOST });
}
