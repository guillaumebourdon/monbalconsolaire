/**
 * Rentabilité d'un kit solaire de balcon par département (96 départements métropolitains).
 * Calcul fait au build, exclusivement via les fonctions de lib/pricing.ts.
 *
 * Données d'entrée : productibles PVGIS par département (src/data/departments.ts),
 * recalés sur la référence prudente du site (Rhône = PVGIS_REFERENCE_LYON),
 * exactement comme la page solaire-balcon/[slug].
 */
import { DEPARTMENTS } from '@/data/departments';
import {
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateROIYears,
  calculateTotalSavings25Years,
  PVGIS_REFERENCE_LYON,
} from '@/lib/pricing';

export const REFERENCE_KIT = {
  name: 'Sunology PLAY',
  brand: 'Sunology',
  powerWc: 500,
  priceEur: 599,
  href: '/avis/sunology-play-2',
};

export const ALTERNATIVE_KIT = {
  name: 'Beem On 500 Wc',
  brand: 'Beem Energy',
  powerWc: 500,
  priceEur: 429,
  href: '/avis/beem-on-500w',
};

/** Valeur PVGIS du Rhône dans data/departments.ts, utilisée pour le recalage sur Lyon. */
export const PVGIS_RHONE = 1300;

/** Productible retenu par le site (kWh/kWc/an) à partir de la valeur PVGIS du département. */
export function productibleSite(pvgisDept: number): number {
  return Math.round((pvgisDept * PVGIS_REFERENCE_LYON) / PVGIS_RHONE);
}

export type DeptRentabilite = {
  code: string;
  name: string;
  region: string;
  pvgis: number;
  productible: number;
  productionKwh: number;
  savingsYear1: number;
  roiYears: number;
  savings25: number;
  netGain25: number;
  roiYearsAlt: number;
  rank: number;
};

function compute(): DeptRentabilite[] {
  const rows = DEPARTMENTS.map((d) => {
    const productible = productibleSite(d.irradiation);
    const base = { kitPowerWc: REFERENCE_KIT.powerWc, productibleKwhPerKwc: productible };
    const ref = { ...base, kitPriceEur: REFERENCE_KIT.priceEur };
    const alt = { ...base, kitPriceEur: ALTERNATIVE_KIT.priceEur };
    const savings25 = calculateTotalSavings25Years(ref);
    return {
      code: d.code,
      name: d.name,
      region: d.region,
      pvgis: d.irradiation,
      productible,
      productionKwh: calculateProductionKwh(ref),
      savingsYear1: Math.round(calculateFirstYearSavings(ref)),
      roiYears: calculateROIYears(ref),
      savings25,
      netGain25: savings25 - REFERENCE_KIT.priceEur,
      roiYearsAlt: calculateROIYears(alt),
      rank: 0,
    };
  });

  rows.sort((a, b) => a.roiYears - b.roiYears || b.productionKwh - a.productionKwh || a.code.localeCompare(b.code));
  // Classement avec ex aequo (même ROI = même rang)
  rows.forEach((r, i) => {
    r.rank = i > 0 && r.roiYears === rows[i - 1].roiYears ? rows[i - 1].rank : i + 1;
  });
  return rows;
}

export const RENTABILITE_DEPARTEMENTS: DeptRentabilite[] = compute();

function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

export function getRentabiliteStats() {
  const rows = RENTABILITE_DEPARTEMENTS;
  const best = rows[0];
  const worst = rows[rows.length - 1];
  const medianRoi = Math.round(median(rows.map((r) => r.roiYears)) * 10) / 10;
  const medianProduction = Math.round(median(rows.map((r) => r.productionKwh)));
  const medianSavings = Math.round(median(rows.map((r) => r.savingsYear1)));
  const medianRoiAlt = Math.round(median(rows.map((r) => r.roiYearsAlt)) * 10) / 10;
  const under7 = rows.filter((r) => r.roiYears < 7).length;
  const over8 = rows.filter((r) => r.roiYears > 8).length;
  const maxRoi = worst.roiYears;
  const minRoi = best.roiYears;
  return {
    best,
    worst,
    medianRoi,
    medianProduction,
    medianSavings,
    medianRoiAlt,
    under7,
    over8,
    minRoi,
    maxRoi,
    roiGapYears: Math.round((maxRoi - minRoi) * 10) / 10,
    productionGapPct: Math.round(((best.productionKwh - worst.productionKwh) / worst.productionKwh) * 100),
    savingsGapYear1: best.savingsYear1 - worst.savingsYear1,
    gain25Gap: best.netGain25 - worst.netGain25,
  };
}

/**
 * Palette séquentielle de la carte : vert foncé (rentabilisé le plus vite)
 * vers ambre clair (le plus lent). Luminosité OKLab strictement croissante.
 */
export const ROI_BINS: { max: number; color: string; label: string }[] = [
  { max: 6, color: '#1F4A2B', label: 'moins de 6 ans' },
  { max: 6.5, color: '#3D7A4A', label: '6 à 6,4 ans' },
  { max: 7, color: '#76A05A', label: '6,5 à 6,9 ans' },
  { max: 7.5, color: '#B9BC5C', label: '7 à 7,4 ans' },
  { max: 8, color: '#EFBF55', label: '7,5 à 7,9 ans' },
  { max: Infinity, color: '#F8DDA2', label: '8 ans et plus' },
];

export function roiColor(roiYears: number): string {
  return (ROI_BINS.find((b) => roiYears < b.max) ?? ROI_BINS[ROI_BINS.length - 1]).color;
}

/** Médiane du ROI par région administrative. */
export function getRentabiliteParRegion() {
  const byRegion = new Map<string, DeptRentabilite[]>();
  for (const r of RENTABILITE_DEPARTEMENTS) {
    byRegion.set(r.region, [...(byRegion.get(r.region) ?? []), r]);
  }
  return [...byRegion.entries()]
    .map(([region, rows]) => ({
      region,
      count: rows.length,
      medianRoi: Math.round(median(rows.map((r) => r.roiYears)) * 10) / 10,
      medianProduction: Math.round(median(rows.map((r) => r.productionKwh))),
      medianSavings: Math.round(median(rows.map((r) => r.savingsYear1))),
      best: rows[0],
      worst: rows[rows.length - 1],
    }))
    .sort((a, b) => a.medianRoi - b.medianRoi || b.medianProduction - a.medianProduction);
}
