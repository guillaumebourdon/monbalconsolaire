/**
 * Liens affiliés Awin (compte éditeur MonBalconSolaire n° 3140099, validé le 30/10/2026).
 * Lien profond : cread.php redirige vers la page marchande avec le cookie de suivi.
 */
export const AWIN_AFFID = '3140099';

/** Identifiants annonceurs Awin (awinmid). */
export const AWIN_MERCHANTS = {
  zendure: '68786', // Zendure EU Marketing (zendure.fr)
  ecoflow: '51799', // EcoFlow FR (fr.ecoflow.com), accepté le 05/11/2026
  allpowers: '98667', // ALLPOWERS FR, accepté le 04/11/2026
} as const;

export function awinUrl(merchantId: string, destination: string): string {
  return `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_AFFID}&ued=${encodeURIComponent(destination)}`;
}

/** Lien affilié vers une page de zendure.fr. */
export const zendureUrl = (destination: string) => awinUrl(AWIN_MERCHANTS.zendure, destination);

/** Lien affilié vers une page de fr.ecoflow.com. */
export const ecoflowUrl = (destination: string) => awinUrl(AWIN_MERCHANTS.ecoflow, destination);

/** Lien affilié vers une page ALLPOWERS FR. */
export const allpowersUrl = (destination: string) => awinUrl(AWIN_MERCHANTS.allpowers, destination);
