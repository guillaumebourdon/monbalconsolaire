import { NextResponse } from 'next/server';

export async function GET() {
  const key = process.env.BREVO_API_KEY;
  return NextResponse.json({
    hasKey: !!key,
    keyPrefix: key ? key.substring(0, 10) + '...' : 'NOT SET',
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV || 'not vercel',
  });
}
