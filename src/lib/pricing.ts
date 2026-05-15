/**
 * Constantes tarifaires et fonctions de calcul ROI centralisées.
 * MODIFIER ICI quand le tarif EDF change — tout le site en dépend.
 */

// ─── Prix de l'électricité ────────────────────────────────
export const KWH_PRICE_EUR = 0.1940;
export const KWH_PRICE_LABEL = '0,1940 \u20ac/kWh';
export const KWH_PRICE_SOURCE = 'Tarif r\u00e9glement\u00e9 EDF, option Base, 6 kVA, mai 2026 (CRE)';
export const KWH_PRICE_UPDATED = '2026-05-14';

// ─── Inflation tarif électricité ──────────────────────────
export const KWH_INFLATION_RATE = 0.033;
export const KWH_INFLATION_LABEL = '3,3% par an';
export const KWH_INFLATION_SOURCE = 'Moyenne historique du tarif r\u00e9glement\u00e9 sur la p\u00e9riode 2012-2026 (CRE / ENGIE)';

// ─── Hypothèses techniques ────────────────────────────────
export const PERFORMANCE_RATIO = 0.85;
export const AUTOCONSO_STANDARD = 0.85;
export const AUTOCONSO_BATTERY = 0.95;
export const ANALYSIS_DURATION_YEARS = 25;

// ─── Productible PVGIS de référence ───────────────────────
export const PVGIS_REFERENCE_LYON = 1200;

// ─── Mise à jour générale du site ─────────────────────────
export const LAST_UPDATED = '15 mai 2026';
export const LAST_UPDATED_ISO = '2026-05-15';

// ─── Fonctions de calcul ──────────────────────────────────

type CalcInput = {
  kitPriceEur: number;
  kitPowerWc: number;
  productibleKwhPerKwc?: number;
  orientationCoef?: number;
  hasBattery?: boolean;
  includeInflation?: boolean;
};

export function calculateProductionKwh(input: CalcInput): number {
  const productible = input.productibleKwhPerKwc ?? PVGIS_REFERENCE_LYON;
  const orientation = input.orientationCoef ?? 1.0;
  const kwc = input.kitPowerWc / 1000;
  return Math.round(kwc * productible * PERFORMANCE_RATIO * orientation);
}

export function calculateFirstYearSavings(input: CalcInput): number {
  const production = calculateProductionKwh(input);
  const autoconso = input.hasBattery ? AUTOCONSO_BATTERY : AUTOCONSO_STANDARD;
  return production * autoconso * KWH_PRICE_EUR;
}

export function calculateROIYears(input: CalcInput): number {
  const firstYearSavings = calculateFirstYearSavings(input);
  if (firstYearSavings <= 0) return ANALYSIS_DURATION_YEARS;
  const includeInflation = input.includeInflation ?? true;

  if (!includeInflation) {
    return Math.round((input.kitPriceEur / firstYearSavings) * 10) / 10;
  }

  let cumulative = 0;
  for (let year = 1; year <= ANALYSIS_DURATION_YEARS; year++) {
    const yearSavings = firstYearSavings * Math.pow(1 + KWH_INFLATION_RATE, year - 1);
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

  if (!includeInflation) {
    return Math.round(firstYearSavings * ANALYSIS_DURATION_YEARS);
  }

  let cumulative = 0;
  for (let year = 1; year <= ANALYSIS_DURATION_YEARS; year++) {
    cumulative += firstYearSavings * Math.pow(1 + KWH_INFLATION_RATE, year - 1);
  }
  return Math.round(cumulative);
}
