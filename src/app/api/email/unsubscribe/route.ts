import { NextResponse } from 'next/server';
import { verifyUnsubToken } from '@/lib/email';
import { unsubscribeLead } from '@/lib/leads';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token || !verifyUnsubToken(email, token)) {
    return new NextResponse(
      '<html><body style="font-family:sans-serif;text-align:center;padding:60px;"><h1>Lien invalide</h1><p>Ce lien de d\u00e9sinscription est invalide ou a expir\u00e9.</p><a href="https://monbalconsolaire.fr">Retour au site</a></body></html>',
      { status: 400, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
    );
  }

  await unsubscribeLead(email);

  return new NextResponse(
    `<html><body style="font-family:sans-serif;text-align:center;padding:60px;background:#FBF8F1;">
<h1 style="color:#3D7A4A;">D\u00e9sinscription confirm\u00e9e</h1>
<p style="color:#4A4A44;">Vous ne recevrez plus d\u2019emails de MonBalconSolaire.</p>
<p style="margin-top:24px;"><a href="https://monbalconsolaire.fr" style="color:#3D7A4A;">Retour au site</a></p>
</body></html>`,
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}
