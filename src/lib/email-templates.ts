/**
 * HTML email templates — inline CSS for Gmail/Outlook compatibility.
 */

import { getUnsubscribeUrl } from './email';

const BRAND_GREEN = '#3D7A4A';
const BRAND_AMBER = '#E8961A';
const BRAND_CREAM = '#FBF8F1';

function layout(content: string, email: string): string {
  const unsub = getUnsubscribeUrl(email);
  return `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${BRAND_CREAM};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#2C2C28;">
<div style="max-width:600px;margin:0 auto;padding:32px 20px;">
${content}
<div style="margin-top:40px;padding-top:20px;border-top:1px solid #E5E0D4;font-size:12px;color:#8A8A80;line-height:1.6;">
<p>\u2014 Guillaume, MonBalconSolaire</p>
<p>Vous recevez cet email car vous avez utilis\u00e9 notre calculateur ou demand\u00e9 un guide sur monbalconsolaire.fr</p>
<p><a href="${unsub}" style="color:${BRAND_GREEN};">Se d\u00e9sinscrire</a> \u00b7 <a href="https://monbalconsolaire.fr/methodologie" style="color:${BRAND_GREEN};">M\u00e9thodologie</a> \u00b7 <a href="https://monbalconsolaire.fr/politique-confidentialite" style="color:${BRAND_GREEN};">Confidentialit\u00e9</a></p>
</div></div></body></html>`;
}

// ─── Monthly production coefficients (typical France) ─────
const MONTHLY_COEFF = [0.045, 0.06, 0.085, 0.10, 0.115, 0.12, 0.125, 0.115, 0.095, 0.07, 0.045, 0.035];
const MONTHS = ['Janvier', 'F\u00e9vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao\u00fbt', 'Septembre', 'Octobre', 'Novembre', 'D\u00e9cembre'];

type KitRec = { name: string; brand: string; price: number; roi: number; firstYear: number; total25: number; reasons: string[]; affiliateUrl: string; slug: string };

export function calculatorReportHtml(
  email: string,
  profile: { dept: string; orientation: string; surface: string; presence: string; budget: string },
  kits: KitRec[],
  annualProduction: number,
): string {
  const monthlyTable = MONTHS.map((m, i) => {
    const kwh = Math.round(annualProduction * MONTHLY_COEFF[i]);
    return `<tr><td style="padding:6px 12px;border-bottom:1px solid #EDE9DF;">${m}</td><td style="padding:6px 12px;border-bottom:1px solid #EDE9DF;text-align:right;font-family:monospace;color:${BRAND_GREEN};">${kwh} kWh</td></tr>`;
  }).join('');

  const kitCards = kits.map((k, i) => {
    const label = i === 0 ? 'Meilleur choix' : i === 1 ? 'Alternative' : 'Avec stockage';
    const bg = i === 0 ? '#F0F6F1' : '#fff';
    const utmUrl = k.affiliateUrl ? `${k.affiliateUrl}?utm_source=email&utm_medium=calculator_report&utm_campaign=${k.slug.replace('/avis/', '')}` : '';
    return `<div style="background:${bg};border:1px solid #E5E0D4;border-radius:12px;padding:20px;margin-bottom:12px;">
<div style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:${i === 0 ? BRAND_GREEN : BRAND_AMBER};font-weight:700;margin-bottom:8px;">${label}</div>
<div style="font-size:18px;font-weight:800;margin-bottom:4px;">${k.name}</div>
<div style="font-size:13px;color:#8A8A80;margin-bottom:12px;">${k.brand} \u00b7 ${k.price} \u20ac</div>
<div style="font-size:28px;font-weight:800;color:${BRAND_GREEN};margin-bottom:4px;">${k.roi} ans <span style="font-size:14px;color:#8A8A80;">de ROI</span></div>
<div style="font-size:13px;color:#4A4A44;margin-bottom:12px;">${k.firstYear} \u20ac/an d'\u00e9conomies \u00b7 ${k.total25.toLocaleString('fr-FR')} \u20ac sur 25 ans</div>
<ul style="padding-left:16px;margin:0 0 16px;font-size:13px;color:#4A4A44;">${k.reasons.map(r => `<li style="margin-bottom:4px;">${r}</li>`).join('')}</ul>
${utmUrl ? `<a href="${utmUrl}" style="display:inline-block;padding:10px 24px;background:${BRAND_GREEN};color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:14px;">Voir le prix sur ${k.brand} \u2192</a>` : ''}
<div style="margin-top:8px;"><a href="https://monbalconsolaire.fr${k.slug}" style="color:${BRAND_GREEN};font-size:13px;">Lire l'avis complet \u2192</a></div>
</div>`;
  }).join('');

  const content = `
<div style="text-align:center;margin-bottom:24px;">
<div style="font-size:14px;font-weight:800;">MonBalcon<span style="color:${BRAND_AMBER};">Solaire</span></div>
</div>
<h1 style="font-size:24px;font-weight:800;margin:0 0 8px;">Votre rapport solaire personnalis\u00e9</h1>
<p style="font-size:14px;color:#8A8A80;margin:0 0 24px;">Profil : ${profile.dept}, orientation ${profile.orientation}, ${profile.presence}, budget ${profile.budget}</p>
<h2 style="font-size:18px;font-weight:700;margin:24px 0 12px;">Kits recommand\u00e9s pour vous</h2>
${kitCards}
<h2 style="font-size:18px;font-weight:700;margin:32px 0 12px;">Production estim\u00e9e mois par mois</h2>
<table style="width:100%;border-collapse:collapse;font-size:13px;">
<tr style="background:#F0F6F1;"><th style="padding:8px 12px;text-align:left;font-weight:700;">Mois</th><th style="padding:8px 12px;text-align:right;font-weight:700;">Production</th></tr>
${monthlyTable}
<tr style="font-weight:700;background:#F0F6F1;"><td style="padding:8px 12px;">Total annuel</td><td style="padding:8px 12px;text-align:right;color:${BRAND_GREEN};">${annualProduction} kWh</td></tr>
</table>
<div style="background:#FEF6E4;border:1px solid #E8961A33;border-radius:12px;padding:20px;margin-top:24px;">
<h3 style="font-size:15px;font-weight:700;margin:0 0 8px;">Conseils d'installation</h3>
<ul style="padding-left:16px;margin:0;font-size:13px;color:#4A4A44;line-height:1.8;">
<li>Orientez plein sud si possible (coef 1,0). Est/Ouest = 80% du potentiel.</li>
<li>Inclinez \u00e0 30-35\u00b0 pour maximiser la production annuelle.</li>
<li>D\u00e9clarez votre kit \u00e0 Enedis (CACSI) \u2014 gratuit, 25 min en ligne.</li>
<li>D\u00e9calez lave-linge et lave-vaisselle en journ\u00e9e pour maximiser l'autoconsommation.</li>
<li>Nettoyez le panneau 2-4 fois par an \u00e0 l'eau claire.</li>
</ul>
</div>`;

  return layout(content, email);
}

export function calculatorReportText(profile: Record<string, string>, kits: KitRec[]): string {
  return `Votre rapport solaire personnalis\u00e9 \u2014 MonBalconSolaire\n\nProfil : ${profile.dept}, ${profile.orientation}, ${profile.presence}\n\n${kits.map((k, i) => `${i + 1}. ${k.name} (${k.price}\u20ac) \u2014 ROI ${k.roi} ans, ${k.firstYear}\u20ac/an`).join('\n')}\n\nCalculez votre ROI : https://monbalconsolaire.fr/calculateur`;
}

export function pdfBonusHtml(email: string): string {
  const content = `
<div style="text-align:center;margin-bottom:24px;">
<div style="font-size:14px;font-weight:800;">MonBalcon<span style="color:${BRAND_AMBER};">Solaire</span></div>
</div>
<h1 style="font-size:24px;font-weight:800;margin:0 0 8px;">Votre guide "7 erreurs \u00e0 \u00e9viter" est pr\u00eat</h1>
<p style="font-size:14px;color:#4A4A44;line-height:1.6;margin:0 0 24px;">
Merci pour votre inscription ! Vous trouverez le guide en pi\u00e8ce jointe de cet email.
</p>
<div style="background:#F0F6F1;border-radius:12px;padding:20px;margin-bottom:24px;">
<h3 style="font-size:15px;font-weight:700;margin:0 0 8px;">Ce que vous recevez :</h3>
<ul style="padding-left:16px;margin:0;font-size:13px;color:#4A4A44;line-height:1.8;">
<li>\u2705 Guide PDF "7 erreurs \u00e0 \u00e9viter" (12 pages)</li>
<li>\u23f3 Bonus exclusif "5 erreurs suppl\u00e9mentaires" (arrive sous 48h)</li>
<li>\ud83d\udcca Liste des codes promo en cours</li>
</ul>
</div>
<p style="font-size:14px;color:#4A4A44;">En attendant, calculez la rentabilit\u00e9 de votre balcon :</p>
<a href="https://monbalconsolaire.fr/calculateur" style="display:inline-block;padding:12px 28px;background:${BRAND_GREEN};color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:14px;margin-top:8px;">Calculer mes \u00e9conomies \u2192</a>`;
  return layout(content, email);
}

export function promoWelcomeHtml(email: string): string {
  const content = `
<div style="text-align:center;margin-bottom:24px;">
<div style="font-size:14px;font-weight:800;">MonBalcon<span style="color:${BRAND_AMBER};">Solaire</span></div>
</div>
<h1 style="font-size:24px;font-weight:800;margin:0 0 8px;">Bienvenue dans les alertes promo</h1>
<p style="font-size:14px;color:#4A4A44;line-height:1.6;margin:0 0 24px;">
Vous serez pr\u00e9venu\u00b7e d\u00e8s qu'un bon plan solaire appara\u00eet ou qu'on n\u00e9gocie un code exclusif.
</p>
<div style="background:#FEF6E4;border-radius:12px;padding:20px;margin-bottom:24px;">
<h3 style="font-size:15px;font-weight:700;margin:0 0 8px;">Ce que vous recevrez :</h3>
<ul style="padding-left:16px;margin:0;font-size:13px;color:#4A4A44;line-height:1.8;">
<li>Alertes quand un kit passe en promo</li>
<li>Codes exclusifs n\u00e9goci\u00e9s avec les marques (quand disponibles)</li>
<li>Newsletter mensuelle "Solaire balcon" (1x/mois max)</li>
</ul>
</div>
<p style="font-size:14px;color:#4A4A44;">En attendant, voir les bons plans actuels :</p>
<a href="https://monbalconsolaire.fr/codes-promo" style="display:inline-block;padding:12px 28px;background:${BRAND_AMBER};color:#2C2C28;text-decoration:none;border-radius:8px;font-weight:700;font-size:14px;margin-top:8px;">Voir les codes promo \u2192</a>`;
  return layout(content, email);
}
