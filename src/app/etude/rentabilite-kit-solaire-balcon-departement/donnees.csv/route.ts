import { RENTABILITE_DEPARTEMENTS, REFERENCE_KIT, ALTERNATIVE_KIT } from '@/lib/rentabilite-departements';

export const dynamic = 'force-static';

/**
 * Jeu de données brut (CSV, séparateur « ; », décimales à virgule pour Excel FR).
 * Licence CC BY 4.0 — source : MonBalconSolaire.fr.
 */
export function GET() {
  const dec = (n: number) => String(n).replace('.', ',');
  const header = [
    'rang',
    'code_departement',
    'departement',
    'region',
    'productible_pvgis_kwh_kwc',
    'productible_retenu_kwh_kwc',
    'production_kwh_an',
    'economies_annee1_eur',
    `roi_annees_${REFERENCE_KIT.priceEur}eur`,
    `roi_annees_${ALTERNATIVE_KIT.priceEur}eur`,
    'economies_cumulees_25ans_eur',
    'gain_net_25ans_eur',
  ];
  const lines = RENTABILITE_DEPARTEMENTS.map((r) =>
    [
      r.rank,
      r.code,
      r.name,
      r.region,
      r.pvgis,
      r.productible,
      r.productionKwh,
      r.savingsYear1,
      dec(r.roiYears),
      dec(r.roiYearsAlt),
      r.savings25,
      r.netGain25,
    ].join(';'),
  );
  const body = '﻿' + [header.join(';'), ...lines].join('\r\n') + '\r\n';
  return new Response(body, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'inline; filename="rentabilite-kit-solaire-balcon-departement-monbalconsolaire.csv"',
      'X-Robots-Tag': 'noindex',
    },
  });
}
