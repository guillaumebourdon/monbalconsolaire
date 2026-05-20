import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'e1e73fac57094269a2a4848ef8f53108';
const HOST = 'monbalconsolaire.fr';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'urls array is required' }, { status: 400 });
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map((u: string) => u.startsWith('http') ? u : `https://${HOST}${u}`),
      }),
    });

    return NextResponse.json({
      status: response.status,
      message: response.status === 200 ? 'URLs submitted successfully' : 'Submission received',
      urlCount: urls.length,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit to IndexNow' }, { status: 500 });
  }
}

export async function GET() {
  // Ne pas exposer la clé complète
  return NextResponse.json({ host: HOST });
}
