/**
 * Constantes tarifaires et fonctions de calcul ROI centralisées.
 * MODIFIER ICI quand le tarif EDF change — tout le site en dépend.
 */

// ─── Prix de l'électricité ────────────────────────────────
// Tarif Bleu EDF option Base 6 kVA, TTC, applicable au 1er ao\u00fbt 2026
// (d\u00e9lib\u00e9ration CRE n\u00b0 2026-147 du 15/07/2026, +2,51 % TTC).
// Source primaire : grille EDF \u00ab Tarif Bleu \u00bb applicable au 1er ao\u00fbt 2026,
// https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/Grille_prix_Tarif_Bleu.pdf
// (20,01 c\u20ac TTC/kWh, v\u00e9rifi\u00e9e le 05/11/2026).
// NE JAMAIS \u00e9crire ce prix en dur dans une page : importer KWH_PRICE_LABEL / KWH_PRICE_EUR.
export const KWH_PRICE_EUR = 0.2001;
export const KWH_PRICE_LABEL = '0,2001 \u20ac/kWh';
/** Variante courte pour les phrases (\u00ab au tarif de 0,2001 \u20ac \u00bb). */
export const KWH_PRICE_SHORT = '0,2001 \u20ac';
export const KWH_PRICE_SOURCE = 'Tarif r\u00e9glement\u00e9 EDF (Tarif Bleu), option Base, 6 kVA, TTC, en vigueur depuis le 1er ao\u00fbt 2026 (d\u00e9lib\u00e9ration CRE n\u00b0 2026-147)';
/** Libell\u00e9 de date \u00e0 utiliser dans les phrases : \u00ab tarif en vigueur depuis le 1er ao\u00fbt 2026 \u00bb. */
export const KWH_PRICE_SINCE = '1er ao\u00fbt 2026';
export const KWH_PRICE_SOURCE_URL = 'https://particulier.edf.fr/content/dam/2-Actifs/Documents/Offres/Grille_prix_Tarif_Bleu.pdf';
export const KWH_PRICE_UPDATED = '2026-11-05';

// ─── Inflation tarif électricité ──────────────────────────
export const KWH_INFLATION_RATE = 0.033;
export const KWH_INFLATION_LABEL = '3,3% par an';
export const KWH_INFLATION_SOURCE = 'Moyenne annuelle du tarif r\u00e9glement\u00e9 Base 6 kVA entre 2012 (0,1263 \u20ac/kWh) et 2026 (0,2001 \u20ac/kWh), soit +58 % en 14 ans';

// \u2500\u2500\u2500 D\u00e9gradation des panneaux \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Perte de production annuelle int\u00e9gr\u00e9e au calcul (ROI et cumul 25 ans) depuis le 05/11/2026.
// R\u00e9f\u00e9rence : m\u00e9diane NREL (Jordan & Kurtz) ~0,5 %/an.
export const PANEL_DEGRADATION_RATE = 0.005;
export const PANEL_DEGRADATION_LABEL = '0,5 % par an';

// ─── Hypothèses techniques ────────────────────────────────
export const PERFORMANCE_RATIO = 0.85;
export const AUTOCONSO_STANDARD = 0.85;
export const AUTOCONSO_BATTERY = 0.95;
export const ANALYSIS_DURATION_YEARS = 25;

// ─── Productible PVGIS de référence ───────────────────────
export const PVGIS_REFERENCE_LYON = 1200;

// ─── Mise à jour générale du site ─────────────────────────
export const LAST_UPDATED = '5 novembre 2026';
export const LAST_UPDATED_ISO = '2026-11-05';

// ─── Fonctions de calcul ──────────────────────────────────

export type CalcInput = {
  kitPriceEur: number;
  kitPowerWc: number;
  productibleKwhPerKwc?: number;
  orientationCoef?: number;
  hasBattery?: boolean;
  includeInflation?: boolean;
  autoconsoOverride?: number;
};

export function calculateProductionKwh(input: CalcInput): number {
  const productible = input.productibleKwhPerKwc ?? PVGIS_REFERENCE_LYON;
  const orientation = input.orientationCoef ?? 1.0;
  const kwc = input.kitPowerWc / 1000;
  return Math.round(kwc * productible * PERFORMANCE_RATIO * orientation);
}

export function calculateFirstYearSavings(input: CalcInput): number {
  const production = calculateProductionKwh(input);
  const autoconso = input.autoconsoOverride ?? (input.hasBattery ? AUTOCONSO_BATTERY : AUTOCONSO_STANDARD);
  return production * autoconso * KWH_PRICE_EUR;
}

/** Facteur appliqu\u00e9 aux \u00e9conomies de l'ann\u00e9e N (1-index\u00e9e) : inflation du kWh \u00d7 d\u00e9gradation des panneaux. */
export function yearFactor(year: number, includeInflation = true): number {
  const inflation = includeInflation ? Math.pow(1 + KWH_INFLATION_RATE, year - 1) : 1;
  return inflation * Math.pow(1 - PANEL_DEGRADATION_RATE, year - 1);
}

export function calculateROIYears(input: CalcInput): number {
  const firstYearSavings = calculateFirstYearSavings(input);
  if (firstYearSavings <= 0) return ANALYSIS_DURATION_YEARS;
  const includeInflation = input.includeInflation ?? true;

  let cumulative = 0;
  for (let year = 1; year <= ANALYSIS_DURATION_YEARS; year++) {
    const yearSavings = firstYearSavings * yearFactor(year, includeInflation);
    cumulative += yearSavings;
    if (cumulative >= input.kitPriceEur) {
      const previousCumulative = cumulative - yearSavings;
      const fraction = (input.kitPriceEur - previousCumulative) / yearSavings;
      return Math.round((year - 1 + fraction) * 10) / 10;
    }
  }
  return ANALYSIS_DURATION_YEARS;
}

export function calculateTotalSavings25Years(input: CalcInput): number {
  const firstYearSavings = calculateFirstYearSavings(input);
  const includeInflation = input.includeInflation ?? true;

  let cumulative = 0;
  for (let year = 1; year <= ANALYSIS_DURATION_YEARS; year++) {
    cumulative += firstYearSavings * yearFactor(year, includeInflation);
  }
  return Math.round(cumulative);
}
