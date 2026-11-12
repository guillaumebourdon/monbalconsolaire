/**
 * Statistiques régionales calculées au build à partir des données versionnées :
 * - PVGIS 5.3 au point de chaque préfecture (src/data/pvgis-prefectures.json) ;
 * - ODRÉ et INSEE (src/data/donnees-locales.json).
 * Gains en euros : tarif réglementé de lib/pricing.ts, identique partout en métropole.
 */
import { DEPARTMENTS, PVGIS_PREFECTURES } from '@/data/departments';
import { REGIONS, type RegionInfo } from '@/data/regions';
import LOCALES from '@/data/donnees-locales.json';
import { productibleSite } from '@/lib/rentabilite-departements';
import { calculateFirstYearSavings, AUTOCONSO_STANDARD, KWH_PRICE_EUR } from '@/lib/pricing';

export const KIT_WC = 800;
export const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export const MOIS_COURT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

type LocalDept = {
  residencesPrincipales: number;
  appartements: number;
  maisons: number;
  partAppartements: number;
  installations?: number;
  puissanceKw?: number;
  installationsPour1000Logements: number | null;
};
type LocalesJson = {
  meta: {
    interrogeLe: string;
    installations: { source: string; url: string; perimetre: string; miseAJourJeu: string };
    logements: { source: string; url: string; annee: number };
  };
  departements: Record<string, LocalDept>;
  regions: Record<string, LocalDept & { installations: number; puissanceKw: number }>;
};
export const DONNEES_LOCALES = LOCALES as unknown as LocalesJson;

export type PrefStat = {
  code: string;
  departement: string;
  prefecture: string;
  e30: number;
  e90: number;
  m30: number[];
  m90: number[];
  /** Écart avec la moyenne des 96 préfectures, en % (30°) */
  ecart30: number;
  ecart90: number;
  /** Gain annuel : production PVGIS × autoconsommation 85 % × tarif réglementé */
  gainPvgis30: number;
  gainPvgis90: number;
  /** Gain annuel avec l'hypothèse prudente du site (productible recalé sur Lyon, PR 0,85) */
  gainPrudent30: number;
  gainPrudent90: number;
  local: LocalDept;
};

const round1 = (n: number) => Math.round(n * 10) / 10;
const mean = (a: number[]) => a.reduce((s, x) => s + x, 0) / a.length;
const gainPvgis = (kwh: number) => Math.round(kwh * AUTOCONSO_STANDARD * KWH_PRICE_EUR);
const gainPrudent = (kwhParKwc: number) =>
  Math.round(calculateFirstYearSavings({ kitPriceEur: 0, kitPowerWc: KIT_WC, productibleKwhPerKwc: productibleSite(kwhParKwc) }));

const ALL = Object.values(PVGIS_PREFECTURES);
export const NATIONAL = {
  e30: Math.round(mean(ALL.map((p) => p.incline30.E_y))),
  e90: Math.round(mean(ALL.map((p) => p.vertical90.E_y))),
  m30: MOIS.map((_, i) => round1(mean(ALL.map((p) => p.incline30.E_m[i])))),
  m90: MOIS.map((_, i) => round1(mean(ALL.map((p) => p.vertical90.E_m[i])))),
  installations: Object.values(DONNEES_LOCALES.regions).reduce((s, r) => s + r.installations, 0),
  residences: Object.values(DONNEES_LOCALES.regions).reduce((s, r) => s + r.residencesPrincipales, 0),
  appartements: Object.values(DONNEES_LOCALES.regions).reduce((s, r) => s + r.appartements, 0),
};
export const NATIONAL_INST_1000 = round1((NATIONAL.installations / NATIONAL.residences) * 1000);
export const NATIONAL_PART_APPART = round1((NATIONAL.appartements / NATIONAL.residences) * 100);
export const NATIONAL_GAIN_PVGIS_30 = gainPvgis(NATIONAL.e30);

export function prefStat(code: string): PrefStat {
  const p = PVGIS_PREFECTURES[code];
  const e30 = p.incline30.E_y;
  const e90 = p.vertical90.E_y;
  return {
    code,
    departement: DEPARTMENTS.find((d) => d.code === code)!.name,
    prefecture: p.prefecture,
    e30,
    e90,
    m30: p.incline30.E_m,
    m90: p.vertical90.E_m,
    ecart30: round1((e30 / NATIONAL.e30 - 1) * 100),
    ecart90: round1((e90 / NATIONAL.e90 - 1) * 100),
    gainPvgis30: gainPvgis(e30),
    gainPvgis90: gainPvgis(e90),
    gainPrudent30: gainPrudent(p.incline30.kWhParKwc),
    gainPrudent90: gainPrudent(p.vertical90.kWhParKwc),
    local: DONNEES_LOCALES.departements[code],
  };
}

export type RegionStats = ReturnType<typeof regionStats>;

export function regionStats(r: RegionInfo) {
  const prefs = DEPARTMENTS.filter((d) => d.region === r.nom)
    .map((d) => prefStat(d.code))
    .sort((a, b) => b.e30 - a.e30);
  const m30 = MOIS.map((_, i) => round1(mean(prefs.map((p) => p.m30[i]))));
  const m90 = MOIS.map((_, i) => round1(mean(prefs.map((p) => p.m90[i]))));
  const e30 = Math.round(mean(prefs.map((p) => p.e30)));
  const e90 = Math.round(mean(prefs.map((p) => p.e90)));
  const best = prefs[0];
  const worst = prefs[prefs.length - 1];
  const idxMax = (a: number[]) => a.indexOf(Math.max(...a));
  const idxMin = (a: number[]) => a.indexOf(Math.min(...a));
  const local = DONNEES_LOCALES.regions[r.code];
  const capitale = prefs.find((p) => p.code === r.chefLieuDept)!;
  const moisVerticalGagnant = MOIS.filter((_, i) => m90[i] > m30[i]);
  const hiver = (a: number[]) => a[10] + a[11] + a[0] + a[1];
  const maxInst = [...prefs].sort((a, b) => (b.local.installations ?? 0) - (a.local.installations ?? 0))[0];
  const maxAppart = [...prefs].sort((a, b) => b.local.partAppartements - a.local.partAppartements)[0];
  const minAppart = [...prefs].sort((a, b) => a.local.partAppartements - b.local.partAppartements)[0];
  // Préfecture où le panneau vertical bat le plus nettement l'incliné en décembre
  const decGain = prefs.map((p) => ({ p, ratio: p.m90[11] / p.m30[11] })).sort((a, b) => b.ratio - a.ratio);
  return {
    region: r,
    prefs,
    capitale,
    best,
    worst,
    e30,
    e90,
    m30,
    m90,
    ecart30: round1((e30 / NATIONAL.e30 - 1) * 100),
    ecart90: round1((e90 / NATIONAL.e90 - 1) * 100),
    ratioVertical: Math.round((e90 / e30) * 100),
    spreadPct: round1((best.e30 / worst.e30 - 1) * 100),
    spreadKwh: best.e30 - worst.e30,
    moisMax30: idxMax(m30),
    moisMin30: idxMin(m30),
    moisMax90: idxMax(m90),
    moisMin90: idxMin(m90),
    rapportEteHiver30: round1(m30[6] / m30[11]),
    rapportEteHiver90: round1(m90[6] / m90[11]),
    partHiver30: round1((hiver(m30) / e30) * 100),
    partHiver90: round1((hiver(m90) / e90) * 100),
    moisVerticalGagnant,
    decGain,
    gainPvgis30: gainPvgis(e30),
    gainPvgis90: gainPvgis(e90),
    rang: 0,
    local,
    instPour1000: local.installationsPour1000Logements as number,
    maxInst,
    maxAppart,
    minAppart,
  };
}

const ALL_STATS = REGIONS.map(regionStats).sort((a, b) => b.e30 - a.e30);
ALL_STATS.forEach((s, i) => (s.rang = i + 1));
const RANG_INST = [...ALL_STATS].sort((a, b) => b.instPour1000 - a.instPour1000).map((s) => s.region.code);
const RANG_APPART = [...ALL_STATS].sort((a, b) => b.local.partAppartements - a.local.partAppartements).map((s) => s.region.code);

export function getRegionStats(slug: string) {
  const s = ALL_STATS.find((x) => x.region.slug === slug);
  if (!s) return undefined;
  return { ...s, rangInst: RANG_INST.indexOf(s.region.code) + 1, rangAppart: RANG_APPART.indexOf(s.region.code) + 1 };
}
export const REGION_STATS = ALL_STATS;
