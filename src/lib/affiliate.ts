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
  manomano: '17547', // ManoMano FR, accepté le 06/11/2026 (cookie 10 jours)
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

/** Lien affilié vers une page de manomano.fr. */
export const manomanoUrl = (destination: string) => awinUrl(AWIN_MERCHANTS.manomano, destination);

/**
 * Fiches ManoMano vérifiées le 06/11/2026 : même référence que nos liens Amazon,
 * prise française type E, vendeur établi, prix proche d'Amazon.
 * Ne pas ajouter de produit sans revérifier la référence exacte (beaucoup de versions type F sur ManoMano).
 */
export const MANOMANO = {
  // Tapo P110(FR), vendeur Sigmadis, 12,95 € le 06/11/2026
  tapoP110: manomanoUrl('https://www.manomano.fr/p/tp-link-tp-link-tapo-prise-connecte-wifi-suivi-de-consommation-prise-intelligente-compatible-avec-alexa-et-google-home-16a-contrler-la-cafetire-la-lampe-le-radiateur-distance-tapo-p110fr-tapo-p110fr-52543055'),
  // Tapo P110M version FR type E, 26,53 € le 06/11/2026
  tapoP110M: manomanoUrl('https://www.manomano.fr/p/tp-link-tapo-matter-prise-connectee-wifi-suivi-de-consommation-16a-type-e-compatible-avec-alexa-google-home-et-smartthings-controler-le-radiateur-le-chauffage-economie-denergie-tapo-p110mfr-82375863'),
  // Shelly Plug PM Gen3 version française, 36,10 € le 06/11/2026
  shellyPlugPMGen3: manomanoUrl('https://www.manomano.fr/p/shelly-plug-pm-gen3-blanc-prise-connectee-francaise-wi-fi-16-a-3680-w-pour-mesure-de-consommation-electrique-aucun-hub-requ-203580758'),
} as const;
