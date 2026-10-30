/**
 * Liens affiliés Awin (compte éditeur MonBalconSolaire n° 3140099, validé le 30/10/2026).
 * Lien profond : cread.php redirige vers la page marchande avec le cookie de suivi.
 */
export const AWIN_AFFID = '3140099';

/** Identifiants annonceurs Awin (awinmid). */
export const AWIN_MERCHANTS = {
  zendure: '68786', // Zendure EU Marketing (zendure.fr)
} as const;

export function awinUrl(merchantId: string, destination: string): string {
  return `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_AFFID}&ued=${encodeURIComponent(destination)}`;
}

/** Lien affilié vers une page de zendure.fr. */
export const zendureUrl = (destination: string) => awinUrl(AWIN_MERCHANTS.zendure, destination);
