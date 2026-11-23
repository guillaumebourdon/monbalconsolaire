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
  bluetti: '32265', // BLUETTI FR (fr.bluettipower.eu), accepté le 19/11/2026
  // Vatrer : accepté le 18/11/2026. 119703 = « Vatrer Affiliate Program » (profil public ui.awin.com/merchant-profile/119703,
  // listé région US). À CONFIRMER dans Awin › Annonceurs › Mes programmes avant le premier lien : aucun lien Vatrer sur le site.
  vatrer: '119703',
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

/** Lien affilié vers une page de fr.bluettipower.eu. */
export const bluettiUrl = (destination: string) => awinUrl(AWIN_MERCHANTS.bluetti, destination);

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

/**
 * Registre des liens d'achat réutilisés dans les articles (2e passe affiliation, 18/11/2026).
 * Seulement des produits en stock chez le marchand (vérifié le 18/11/2026) :
 * - Zendure SolarFlow Mix et SolarFlow 800 Pro 2 (zendure.fr/products/<handle>.js : available = true, revérifié le 23/11/2026).
 *   PAS le SolarFlow 800 Plus (épuisé sur toutes ses versions, constaté le 20/11 et le 23/11/2026) :
 *   l'entrée `solarflow800Plus` reste pour l'historique mais ne doit plus servir de bouton d'achat.
 *   PAS le SolarFlow 800 Pro (rupture), PAS le Hyper 2000 ni le SolarFlow 800 (indisponibles).
 * - EcoFlow STREAM Ultra (fr.ecoflow.com). PAS le DELTA 2 chez EcoFlow (indisponible le 18/11).
 * - ALLPOWERS BS2500 PRO (iallpowers.fr, même destination que l'avis).
 * - Amazon et ManoMano : uniquement des références déjà présentes et vérifiées dans le dépôt.
 */
export type BuyLink = { product: string; merchant: string; url: string };

export const BUY = {
  // Épuisé chez Zendure au 23/11/2026 : ne plus l'utiliser comme lien d'achat (remplaçant : solarflow800Pro2).
  solarflow800Plus: { product: 'Zendure SolarFlow 800 Plus', merchant: 'Zendure', url: zendureUrl('https://zendure.fr/products/solarflow-800-plus') },
  solarflowMix: { product: 'Zendure SolarFlow Mix', merchant: 'Zendure', url: zendureUrl('https://zendure.fr/products/solarflow-mix-series') },
  streamUltra: { product: 'EcoFlow STREAM Ultra', merchant: 'EcoFlow', url: ecoflowUrl('https://fr.ecoflow.com/products/stream-ultra-pro') },
  balco260: { product: 'Bluetti Balco 260', merchant: 'Bluetti', url: bluettiUrl('https://fr.bluettipower.eu/products/bluetti-balco-260') },
  bs2500Pro: { product: 'ALLPOWERS BS2500 PRO', merchant: 'ALLPOWERS', url: allpowersUrl('https://iallpowers.fr/products/bs2500') },
  // Ajouts du 18/11/2026 (article Black Friday) : fiches en stock vérifiées le jour même.
  solarflow800Pro2: { product: 'Zendure SolarFlow 800 Pro 2', merchant: 'Zendure', url: zendureUrl('https://zendure.fr/products/zendure-solarflow-800-pro2') },
  solarflow1600AcPlus: { product: 'Zendure SolarFlow 1600 AC+', merchant: 'Zendure', url: zendureUrl('https://zendure.fr/products/zendure-solarflow-1600-ac') },
  solarflow2400AcPlus: { product: 'Zendure SolarFlow 2400 AC+', merchant: 'Zendure', url: zendureUrl('https://zendure.fr/products/zendure-solarflow-2400-ac-plus') },
  zendureBlackFriday: { product: 'Zendure Black Friday', merchant: 'Zendure', url: zendureUrl('https://zendure.fr/pages/black-friday') },
  s2000Pro: { product: 'ALLPOWERS S2000 Pro', merchant: 'ALLPOWERS', url: allpowersUrl('https://iallpowers.fr/products/allpowers-s2000-pro-station-electrique-portable-2400w-1451wh') },
  delta3Plus: { product: 'EcoFlow DELTA 3 Plus', merchant: 'EcoFlow', url: ecoflowUrl('https://fr.ecoflow.com/products/delta-3-series-portable-power-station') },
  tapoP110Amazon: { product: 'Tapo P110 (FR)', merchant: 'Amazon', url: 'https://www.amazon.fr/dp/B09J1497Y4?tag=monbalconsola-21' },
  tapoP110ManoMano: { product: 'Tapo P110 (FR)', merchant: 'ManoMano', url: MANOMANO.tapoP110 },
  shellyPlugAmazon: { product: 'Shelly Plug PM Gen3 (FR)', merchant: 'Amazon', url: 'https://www.amazon.fr/dp/B0GSBPYNQB?tag=monbalconsola-21' },
  shellyPlugManoMano: { product: 'Shelly Plug PM Gen3 (FR)', merchant: 'ManoMano', url: MANOMANO.shellyPlugPMGen3 },
  hoymilesAmazon: { product: 'Hoymiles HMS-800W-2T', merchant: 'Amazon', url: 'https://www.amazon.fr/s?k=Hoymiles+HMS-800W-2T&tag=monbalconsola-21' },
  wattmetreAmazon: { product: 'Brennenstuhl PM 231 E (FR)', merchant: 'Amazon', url: 'https://www.amazon.fr/dp/B00DZ872B4?tag=monbalconsola-21' },
} satisfies Record<string, BuyLink>;

/** Lien d'achat correspondant à un nom de produit cité dans un tableau (produits en stock uniquement). */
export function buyFor(name: string): BuyLink | undefined {
  if (/SolarFlow 800 (Plus|\+)/.test(name)) return undefined; // épuisé chez Zendure au 23/11/2026
  if (/800 Pro 2/.test(name)) return BUY.solarflow800Pro2;
  if (/Mix Pro/.test(name)) return undefined; // 4000 Mix Pro : indisponible en ligne
  if (/SolarFlow (3000 |4000 )?Mix|\b(3000|4000) Mix AC\+/.test(name)) return BUY.solarflowMix;
  if (/STREAM Ultra(?! X)/.test(name)) return BUY.streamUltra;
  if (/BS2500/.test(name)) return BUY.bs2500Pro;
  if (/Balco 260/.test(name)) return BUY.balco260;
  return undefined;
}
