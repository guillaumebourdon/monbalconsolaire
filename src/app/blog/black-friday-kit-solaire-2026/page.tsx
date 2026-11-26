import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { AffLink } from '@/components/ui/AffLink';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { BUY, type BuyLink } from '@/lib/affiliate';
import { PRODUCTS } from '@/data/products';
import { withCanonicalOg } from '@/lib/metadata';
import { BF_ARTICLE_URL, isActiveUntil } from '@/lib/black-friday';
import {
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateROIYears,
  calculateTotalSavings25Years,
  KWH_PRICE_LABEL,
  KWH_INFLATION_LABEL,
  PANEL_DEGRADATION_LABEL,
} from '@/lib/pricing';

// Regénérée toutes les 6 h (comme /codes-promo) : une offre datée bascule seule en « terminée ».
export const revalidate = 21600;

export const metadata: Metadata = withCanonicalOg({
  title: 'Black Friday 2026 kit solaire : les vraies bonnes affaires',
  description: 'Black Friday 2026 : kits solaires, batteries Zendure, EcoFlow, ALLPOWERS comparés à leur prix des 3 derniers mois. Vraies baisses, pièges, sources.',
  alternates: {
    canonical: BF_ARTICLE_URL,
  },
});

const PUBLISHED = '2026-11-18';
const MODIFIED = '2026-11-26';

// ─── Sources des prix de référence (3 derniers mois) ───────────────────────────
// Prix du jour : fiches officielles relevées le 18/11/2026 (Shopify /products/<handle>.js),
// code Zendure AF5E24 testé au panier zendure.fr le 18/11/2026, Amazon.fr relevé le 18/11/2026.
const SRC = {
  wbPro2: { label: 'capture zendure.fr du 02/09/2026 (Wayback Machine)', url: 'https://web.archive.org/web/20260902074918/https://zendure.fr/products/zendure-solarflow-800-pro2' },
  wbPlus: { label: 'capture zendure.fr du 02/09/2026 (Wayback Machine)', url: 'https://web.archive.org/web/20260902074855/https://zendure.fr/products/solarflow-800-plus' },
  wb2400: { label: 'capture zendure.fr du 02/09/2026 (Wayback Machine)', url: 'https://web.archive.org/web/20260902074931/https://zendure.fr/products/zendure-solarflow-2400-ac-plus' },
  tomsguide: { label: 'Tom’s Guide, 26/10/2026 (offres du 9/10 au 1/11)', url: 'https://www.tomsguide.fr/jusqua-719-e-de-remise-sur-les-batteries-solaires-zendure-jusquau-1er-novembre-profitez-en-vite/' },
  wbBs2500: { label: 'capture iallpowers.fr du 08/10/2026 (Wayback Machine)', url: 'https://web.archive.org/web/20261008123615/https://iallpowers.fr/products/bs2500' },
  wbS2000: { label: 'capture iallpowers.fr du 09/10/2026 (Wayback Machine)', url: 'https://web.archive.org/web/20261009105014/https://iallpowers.fr/products/allpowers-s2000-pro-station-electrique-portable-2400w-1451wh' },
  mbsStream: { label: 'notre relevé fr.ecoflow.com du 05/11/2026', url: '/avis/ecoflow-stream-ultra' },
  mbsBs2500: { label: 'notre relevé du 05/11/2026', url: '/avis/allpowers-bs2500-pro' },
  mbsBluetti: { label: 'notre relevé fr.bluettipower.eu du 05/11/2026', url: '/avis/bluetti-balco-260' },
  mbsSunology: { label: 'sunology.eu, relevés du 05/11 et du 18/11/2026', url: '/codes-promo#sunology' },
  mbsSunethic: { label: 'notre relevé sunethic.fr du 05/11/2026', url: '/avis/sunethic-f500' },
  mbsBeem: { label: 'beemenergy.fr, relevés du 05/11 et du 18/11/2026', url: '/avis/beem-on-500w' },
  camelTapo: { label: 'historique camelcamelcamel (11,99 € depuis le 13/10/2026)', url: 'https://fr.camelcamelcamel.com/product/B09J1497Y4' },
  camelBrennenstuhl: { label: 'historique camelcamelcamel (19,63 € le 05/11/2026)', url: 'https://fr.camelcamelcamel.com/product/B00DZ872B4' },
} as const;

type Source = { label: string; url: string };
type Category = 'kit' | 'stockage' | 'station' | 'accessoire';
type PlainLink = { product: string; merchant: string; url: string; plain: true };

type Deal = {
  id: string;
  cat: Category;
  product: string;
  spec: string;
  /** Prix de référence : le plus bas relevé sur les 3 derniers mois (ou prix stable relevé). */
  ref: number;
  refLabel: string;
  refSource: Source;
  /** Plus bas de la période quand une promo antérieure l'a fait descendre sous le prix catalogue. */
  low?: { price: number; label: string };
  /** Prix du jour (18/11/2026), code inclus le cas échéant. */
  bf: number;
  bfNote?: string;
  /** Prix barré affiché par le marchand le 18/11 (pour la section « fausse bonne affaire »). */
  shownStrike?: number;
  /** Prix affiché sur la fiche, avant code (si différent de `bf`). */
  shown?: number;
  /** Fin de l'offre (incluse), AAAA-MM-JJ, si le marchand l'annonce. */
  endsAt?: string;
  endsLabel?: string;
  link: BuyLink | PlainLink;
  /** Date du relevé du prix du jour, si ce n'est pas le 18/11/2026 (JJ/MM/AAAA). */
  seen?: string;
  /** Produit épuisé chez le marchand : date du constat (« 20 novembre »). */
  soldOut?: string;
};

const P = PRODUCTS;
const ZENDURE_CODE = 'AF5E24';
const ZENDURE_CODE_END = '2027-01-04';
const SUNOLOGY_CODE = 'BLACKSUN';
const SUNOLOGY_END = '2026-12-04';
const SUNOLOGY_BF: PlainLink = { product: 'Sunology Black Sun Weeks', merchant: 'Sunology', url: 'https://black-friday.sunology.eu/', plain: true };
const OCTOBRE = 0.89; // Sunology, opération d'octobre 2026 : -11 % dès le premier euro (relevé du 17/10, page /codes-promo)

const DEALS: Deal[] = [
  // ── Kits ──
  {
    id: 'play', cat: 'kit', product: 'Sunology PLAY', spec: '515 Wc, sans batterie',
    ref: P['sunology-play'].priceEur, refLabel: 'prix catalogue', refSource: SRC.mbsSunology,
    low: { price: Math.round(P['sunology-play'].priceEur * OCTOBRE), label: 'environ, en octobre (-11 % sans code)' },
    bf: 499, bfNote: `code ${SUNOLOGY_CODE}`, shown: P['sunology-play'].priceEur, endsAt: SUNOLOGY_END, endsLabel: '4 décembre', link: SUNOLOGY_BF,
  },
  {
    id: 'go', cat: 'kit', product: 'Sunology GO', spec: '270 Wc, sans batterie',
    ref: P['sunology-go'].priceEur, refLabel: 'prix catalogue', refSource: SRC.mbsSunology,
    low: { price: Math.round(P['sunology-go'].priceEur * OCTOBRE), label: 'environ, en octobre (-11 % sans code)' },
    bf: 299, bfNote: `code ${SUNOLOGY_CODE}`, endsAt: SUNOLOGY_END, endsLabel: '4 décembre', link: SUNOLOGY_BF,
  },
  {
    id: 'pro2-pack', cat: 'kit', product: 'Zendure SolarFlow 800 Pro 2 + 2 × 500 W', spec: 'batterie 1,92 kWh + 2 panneaux bifaciaux',
    ref: 1139, refLabel: 'le 2 septembre', refSource: SRC.wbPro2,
    bf: 882.28, bfNote: `avec ${ZENDURE_CODE} (959 € sans code)`, shown: 959, shownStrike: 1379, endsAt: ZENDURE_CODE_END, endsLabel: '4 janvier 2027 (code)', link: BUY.solarflow800Pro2,
  },
  {
    id: 'plus-pack', cat: 'kit', product: 'Zendure SolarFlow 800 Plus + 2 × 500 W', spec: 'batterie 1,92 kWh + 2 panneaux bifaciaux',
    ref: 719, refLabel: 'depuis le 2 septembre au moins', refSource: SRC.wbPlus,
    bf: 661.48, bfNote: `avec ${ZENDURE_CODE} (719 € sans code)`, shown: 719, shownStrike: 999, endsAt: ZENDURE_CODE_END, endsLabel: '4 janvier 2027 (code)',
    // Épuisé chez Zendure (constaté le 20/11 et le 23/11/2026) : le lien mène au remplaçant en stock, le 800 Pro 2.
    link: BUY.solarflow800Pro2,
    soldOut: '20 novembre',
  },
  {
    id: 'beem', cat: 'kit', product: 'Beem On', spec: '500 Wc, sans batterie, en précommande',
    ref: P['beem-on-500w'].priceEur, refLabel: 'prix catalogue', refSource: SRC.mbsBeem,
    bf: P['beem-on-500w'].priceEur, bfNote: 'pas de remise affichée',
    link: { product: 'Beem On 500 Wc', merchant: 'Beem Energy', url: P['beem-on-500w'].url, plain: true },
  },
  {
    id: 'f500', cat: 'kit', product: 'Sunethic F500', spec: '500 Wc, sans batterie',
    ref: P['sunethic-f500'].priceEur, refLabel: 'le 5 novembre', refSource: SRC.mbsSunethic,
    bf: 690, bfNote: 'Black Friday annoncé du 9 au 30 novembre',
    link: { product: 'Sunethic F500', merchant: 'Sunethic', url: P['sunethic-f500'].url, plain: true },
  },
  // ── Batteries et stockage ──
  {
    id: 'pro2', cat: 'stockage', product: 'Zendure SolarFlow 800 Pro 2', spec: '1,92 kWh, sans panneaux',
    ref: 779, refLabel: 'le 2 septembre', refSource: SRC.wbPro2,
    bf: 551.08, bfNote: `avec ${ZENDURE_CODE} (${P['zendure-solarflow-800-pro-2'].priceEur} € sans code)`, shown: P['zendure-solarflow-800-pro-2'].priceEur, shownStrike: 979, endsAt: ZENDURE_CODE_END, endsLabel: '4 janvier 2027 (code)', link: BUY.solarflow800Pro2,
  },
  {
    id: '1600', cat: 'stockage', product: 'Zendure SolarFlow 1600 AC+ + batterie AB2000L', spec: '3,84 kWh au total',
    ref: 959, refLabel: 'en octobre', refSource: SRC.tomsguide,
    bf: 882.28, bfNote: `avec ${ZENDURE_CODE} (959 € sans code)`, shown: 959, shownStrike: 1678, endsAt: ZENDURE_CODE_END, endsLabel: '4 janvier 2027 (code)', link: BUY.solarflow1600AcPlus,
  },
  {
    id: 'plus', cat: 'stockage', product: 'Zendure SolarFlow 800 Plus', spec: '1,92 kWh, sans panneaux',
    ref: P['zendure-solarflow-800-plus'].priceEur, refLabel: 'le 2 septembre et le 5 novembre', refSource: SRC.wbPlus,
    bf: 495.88, bfNote: `avec ${ZENDURE_CODE} (${P['zendure-solarflow-800-plus'].priceEur} € sans code)`, shown: P['zendure-solarflow-800-plus'].priceEur, shownStrike: 599, endsAt: ZENDURE_CODE_END, endsLabel: '4 janvier 2027 (code)',
    // Épuisé chez Zendure (constaté le 20/11 et le 23/11/2026) : le lien mène au remplaçant en stock, le 800 Pro 2.
    link: BUY.solarflow800Pro2,
    soldOut: '20 novembre',
  },
  {
    id: '2400', cat: 'stockage', product: 'Zendure SolarFlow 2400 AC+', spec: '2,4 kWh, sans batterie additionnelle',
    ref: 839, refLabel: 'le 2 septembre et en octobre', refSource: SRC.wb2400,
    bf: 839, bfNote: 'code AF5E24 exclu', shownStrike: 1279, link: BUY.solarflow2400AcPlus,
  },
  {
    id: 'stream', cat: 'stockage', product: 'EcoFlow STREAM Ultra', spec: '1,92 kWh, sans panneaux',
    ref: P['ecoflow-stream-ultra'].priceEur, refLabel: 'le 5 novembre, avant l’opération', refSource: SRC.mbsStream,
    bf: P['ecoflow-stream-ultra'].priceEur, shownStrike: 1299, link: BUY.streamUltra,
  },
  {
    id: 'bs2500', cat: 'stockage', product: 'ALLPOWERS BS2500 PRO', spec: '2,6 kWh, sans panneaux',
    ref: P['allpowers-bs2500-pro'].priceEur, refLabel: 'le 5 novembre', refSource: SRC.mbsBs2500,
    bf: P['allpowers-bs2500-pro'].priceEur, bfNote: '1 149 € le 8 octobre', shownStrike: 1999, link: BUY.bs2500Pro,
  },
  {
    // Ajouté le 20/11/2026 : seul relevé antérieur connu = le nôtre du 05/11 (pas de capture d'archive consultée).
    id: 'balco', cat: 'stockage', product: 'Bluetti Balco 260', spec: '2,56 kWh, sans panneaux (1 019 € avec 2 × 450 W)',
    ref: 789, refLabel: 'le 5 novembre (notre relevé)', refSource: SRC.mbsBluetti,
    bf: P['bluetti-balco-260'].priceEur, bfNote: 'relevé le 20 novembre', shownStrike: 1049, seen: '20/11/2026',
    link: BUY.balco260,
  },
  // ── Stations ──
  {
    id: 's2000', cat: 'station', product: 'ALLPOWERS S2000 Pro', spec: 'station 1 451 Wh, 2 400 W',
    ref: 664, refLabel: 'le 9 octobre', refSource: SRC.wbS2000,
    bf: 599, shownStrike: 1299, link: BUY.s2000Pro,
  },
  // ── Accessoires ──
  {
    id: 'tapo', cat: 'accessoire', product: 'Tapo P110 (FR)', spec: 'prise connectée avec mesure',
    ref: 11.99, refLabel: 'depuis le 13 octobre', refSource: SRC.camelTapo,
    bf: 11.99, shownStrike: 12.9, link: BUY.tapoP110Amazon,
  },
  {
    id: 'brennenstuhl', cat: 'accessoire', product: 'Brennenstuhl PM 231 E (FR)', spec: 'wattmètre',
    ref: 19.63, refLabel: 'le 5 novembre', refSource: SRC.camelBrennenstuhl,
    bf: 20.88, link: BUY.wattmetreAmazon,
  },
];

// ─── Notes des marchands (relevées le 19/11/2026 sur leurs fiches) ─────────────
// Affichées en texte seulement, JAMAIS dans le JSON-LD : Google interdit de baliser
// des avis collectés sur d'autres sites (risque d'action manuelle).
// Pas de note quand le marchand n'en affiche pas pour ce produit (Beem, Sunethic : Trustpilot
// de la boutique seulement ; 800 Pro 2 : 0 avis).
type MerchantRating = { value: string; count: string; where: string };
const SUNOLOGY_RATING: MerchantRating = { value: '4,7', count: 'plus de 2 600 avis', where: 'toutes stations, sunology.eu' };
const RATINGS: Partial<Record<string, MerchantRating>> = {
  play: SUNOLOGY_RATING,
  go: SUNOLOGY_RATING,
  'plus-pack': { value: '4,7', count: '27 avis', where: 'fiche 800 Plus, zendure.fr' },
  plus: { value: '4,7', count: '27 avis', where: 'zendure.fr' },
  '1600': { value: '4,6', count: '21 avis', where: 'fiche 1600 AC+, zendure.fr' },
  '2400': { value: '4,8', count: '103 avis', where: 'zendure.fr' },
  stream: { value: '4,8', count: '145 avis', where: 'fr.ecoflow.com' },
  bs2500: { value: '3,0', count: '1 seul avis', where: 'iallpowers.fr' },
  s2000: { value: '4,3', count: '249 avis', where: 'iallpowers.fr' },
  tapo: { value: '4,5', count: '3 828 avis', where: 'Amazon.fr' },
  balco: { value: '5,0', count: '7 avis', where: 'fr.bluettipower.eu, relevé le 20/11' },
  brennenstuhl: { value: '4,0', count: '28 avis', where: 'Amazon.fr' },
};

// ─── Calculs ───────────────────────────────────────────────────────────────────
const eur = (n: number) => `${n.toLocaleString('fr-FR', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })} €`;
const pct = (from: number, to: number) => Math.round(((to - from) / from) * 100);
const fmtPct = (p: number) => (p === 0 ? '0 %' : `${p > 0 ? '+' : ''}${p} %`);
const D = Object.fromEntries(DEALS.map((d) => [d.id, d])) as Record<string, Deal>;
const realDrop = (d: Deal) => pct(Math.min(d.ref, d.low?.price ?? d.ref), d.bf);

// Rentabilité (méthodologie standard du site : Lyon plein sud, lib/pricing.ts)
type RoiCase = { label: string; detail: string; before: number; after: number; powerWc: number; battery: boolean };
const ROI_CASES: RoiCase[] = [
  { label: 'Sunology PLAY', detail: '515 Wc', before: D.play.ref, after: D.play.bf, powerWc: P['sunology-play'].powerWc, battery: false },
  { label: 'Sunology GO', detail: '270 Wc', before: D.go.ref, after: D.go.bf, powerWc: P['sunology-go'].powerWc, battery: false },
  { label: 'Zendure 800 Pro 2 + 2 × 500 W', detail: '1 000 Wc + 1,92 kWh', before: D['pro2-pack'].ref, after: D['pro2-pack'].bf, powerWc: 1000, battery: true },
  { label: 'Zendure 800 Plus + 2 × 500 W', detail: '1 000 Wc + 1,92 kWh', before: D['plus-pack'].ref, after: D['plus-pack'].bf, powerWc: 1000, battery: true },
  { label: 'Beem On', detail: '500 Wc (précommande)', before: D.beem.ref, after: D.beem.bf, powerWc: P['beem-on-500w'].powerWc, battery: false },
];
const roi = ROI_CASES.map((c) => {
  const base = { kitPowerWc: c.powerWc, hasBattery: c.battery };
  return {
    ...c,
    production: calculateProductionKwh({ ...base, kitPriceEur: c.after }),
    savings1: Math.round(calculateFirstYearSavings({ ...base, kitPriceEur: c.after })),
    roiBefore: calculateROIYears({ ...base, kitPriceEur: c.before }),
    roiAfter: calculateROIYears({ ...base, kitPriceEur: c.after }),
    total25: calculateTotalSavings25Years({ ...base, kitPriceEur: c.after }),
  };
});
const R = Object.fromEntries(roi.map((r) => [r.label, r]));
const fy = (n: number) => n.toLocaleString('fr-FR');
const rPlay = R['Sunology PLAY'];
const rPro2 = R['Zendure 800 Pro 2 + 2 × 500 W'];
const rPlus = R['Zendure 800 Plus + 2 × 500 W'];

const CAT_LABEL: Record<Category, string> = { kit: 'Kits', stockage: 'Batteries', station: 'Stations', accessoire: 'Accessoires' };

const faqData = [
  {
    question: 'Quelle est la date du Black Friday 2026 ?',
    answer: 'Le Black Friday 2026 tombe le vendredi 27 novembre 2026, lendemain de Thanksgiving (jeudi 26 novembre), et le Cyber Monday le lundi 30 novembre 2026. Dans le solaire de balcon, les opérations commencent bien avant : Sunology du 4 novembre au 4 décembre, EcoFlow du 10 au 30 novembre, et le code Zendure AF5E24 court du 2 novembre 2026 au 4 janvier 2027.',
  },
  {
    question: 'Quelles sont les vraies bonnes affaires solaires du Black Friday 2026 ?',
    answer: `Au 18 novembre 2026, comparées à leur prix des trois derniers mois : le Zendure SolarFlow 800 Pro 2 à ${eur(D.pro2.bf)} avec le code AF5E24 (${eur(D.pro2.ref)} le 2 septembre, ${fmtPct(realDrop(D.pro2))}), le même en pack avec 2 panneaux de 500 W à ${eur(D['pro2-pack'].bf)} (${fmtPct(realDrop(D['pro2-pack']))}), le SolarFlow 800 Plus à ${eur(D.plus.bf)} avec le même code (${eur(D.plus.ref)} sans code depuis septembre), le Sunology PLAY à ${eur(D.play.bf)} avec le code BLACKSUN (${eur(D.play.ref)} hors promotion) et la station ALLPOWERS S2000 Pro à ${eur(D.s2000.bf)} (${eur(D.s2000.ref)} le 9 octobre).`,
  },
  {
    question: 'Un prix barré à -50 % est-il une vraie promotion ?',
    answer: `Pas forcément. Le prix barré peut être un prix conseillé ou un ancien prix de lancement. Exemples relevés le 18/11/2026 : l’EcoFlow STREAM Ultra est à ${eur(D.stream.bf)} pour un prix barré de ${eur(D.stream.shownStrike!)}, mais il était déjà à ${eur(D.stream.ref)} le 5 novembre ; le Zendure SolarFlow 2400 AC+ est à ${eur(D['2400'].bf)} pour un prix barré de ${eur(D['2400'].shownStrike!)}, le même prix que le 2 septembre. Comparez toujours au prix payé les semaines précédentes.`,
  },
  {
    question: 'Le code Zendure AF5E24 se cumule-t-il avec les prix Black Friday ?',
    answer: 'Oui. Nous l’avons testé au panier sur zendure.fr le 18 novembre 2026 : -8 % appliqués en plus des prix affichés, par exemple 599 € → 551,08 € pour le SolarFlow 800 Pro 2 seul, 539 € → 495,88 € pour le SolarFlow 800 Plus seul, 719 € → 661,48 € pour le pack 800 Plus + 2 panneaux de 500 W, 959 € → 882,28 € pour le SolarFlow 1600 AC+ avec une batterie AB2000L et 659 € → 606,28 € pour la batterie AB3000L. Le code est refusé sur le SolarFlow 2400 AC+ (testé) et Zendure exclut aussi le 2400 Pro. Valable jusqu’au 4 janvier 2027.',
  },
  {
    question: 'Faut-il attendre le Cyber Monday pour acheter un kit solaire ?',
    answer: 'Rien ne l’indique dans nos relevés : au 26 novembre 2026, les prix Zendure, EcoFlow et ALLPOWERS restent ceux du 18 novembre (aucune baisse supplémentaire confirmée), et les opérations Sunology et EcoFlow couvrent déjà le Cyber Monday (30 novembre). Si le produit voulu est en vraie baisse aujourd’hui, attendre n’apporte rien de garanti.',
  },
  {
    question: 'Quelles garanties pour un kit solaire acheté pendant le Black Friday ?',
    answer: 'Les mêmes que le reste de l’année : garantie légale de conformité de 2 ans auprès du vendeur professionnel, et droit de rétractation de 14 jours pour un achat en ligne (frais de retour parfois à votre charge, lisez les conditions du marchand). Les garanties commerciales des fabricants (panneaux, batterie) ne changent pas pendant les promotions. Un produit en précommande, comme le Beem On, n’est livré qu’à la date annoncée.',
  },
  {
    question: 'Un kit solaire est-il rentable au prix du Black Friday ?',
    answer: `Avec notre méthode standard (Lyon plein sud, ${KWH_PRICE_LABEL}, inflation ${KWH_INFLATION_LABEL}, dégradation ${PANEL_DEGRADATION_LABEL}), le Sunology PLAY à ${eur(rPlay.after)} se rembourse en ${fy(rPlay.roiAfter)} ans au lieu de ${fy(rPlay.roiBefore)} ans à ${eur(rPlay.before)}. Le pack Zendure 800 Pro 2 + 2 panneaux de 500 W passe de ${fy(rPro2.roiBefore)} à ${fy(rPro2.roiAfter)} ans. Le pack 800 Plus + 2 × 500 W reste le plus court : ${fy(rPlus.roiAfter)} ans avec le code AF5E24 (${fy(rPlus.roiBefore)} ans sans), mais il est épuisé sur zendure.fr depuis le 20 novembre 2026.`,
  },
];

// ItemList : les offres en vraie baisse (prix du jour < prix de référence)
// Les produits épuisés (soldOut) sont exclus de la liste.
const TOP = DEALS.filter((d) => !d.soldOut && realDrop(d) < 0 && !('plain' in d.link)).concat(DEALS.filter((d) => !d.soldOut && realDrop(d) < 0 && 'plain' in d.link));
const SECTION: Record<Category, string> = { kit: 'kits', stockage: 'batteries', station: 'stations', accessoire: 'accessoires' };
function SchemaDeals() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Black Friday 2026 : kits et batteries solaires en vraie baisse de prix',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: TOP.length,
    // Pas de type Product ici : ce sont des offres de marchands, pas des fiches vendues sur ce site.
    // Un Product + Offer déclenche les « fiches de marchand » de Google (image obligatoire,
    // avis…) — erreurs Search Console du 19/11/2026. On garde une liste simple vers les sections.
    itemListElement: TOP.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${d.product} : ${d.bf.toFixed(2).replace('.', ',')} € (relevé le ${d.seen ?? '18/11/2026'})`,
      url: `${BF_ARTICLE_URL}#${SECTION[d.cat]}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function Where({ d, position }: { d: Deal; position: string }) {
  if (d.soldOut && !('plain' in d.link)) {
    return (
      <span className="text-stone">
        &Eacute;puis&eacute; &middot; <AffLink item={d.link} position={position}>800 Pro 2 en stock &rarr;</AffLink>
      </span>
    );
  }
  if ('plain' in d.link) {
    return (
      <a href={d.link.url} target="_blank" rel="noopener" className="text-green font-semibold hover:underline">
        {d.link.merchant} &rarr;
      </a>
    );
  }
  return <AffLink item={d.link} position={position}>{d.link.merchant} &rarr;</AffLink>;
}

function SourceLink({ s }: { s: Source }) {
  return s.url.startsWith('/') ? (
    <Link href={s.url} className="text-green hover:underline">{s.label}</Link>
  ) : (
    <a href={s.url} target="_blank" rel="noopener" className="text-green hover:underline">{s.label}</a>
  );
}

function Verdict({ d }: { d: Deal }) {
  const p = realDrop(d);
  const over = d.endsAt && !isActiveUntil(d.endsAt);
  if (d.soldOut) return <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cream text-stone">&Eacute;puis&eacute; le {d.soldOut}</span>;
  if (over) return <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cream text-stone">Offre termin&eacute;e</span>;
  if (p <= -10) return <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-pale text-green">Vraie baisse</span>;
  if (p < 0) return <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-pale text-green">Petite baisse</span>;
  if (p === 0) return <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-pale text-amber-dark">Prix inchang&eacute;</span>;
  return <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-pale text-amber-dark">Plus cher</span>;
}

function DealRow({ d }: { d: Deal }) {
  const p = realDrop(d);
  return (
    <tr className={`border-b border-border-light ${p <= -10 ? 'bg-green-pale/30' : ''}`}>
      <td className="p-2.5 align-top">
        <span className="font-semibold">{d.product}</span>
        <span className="block text-stone">{d.spec}</span>
        {RATINGS[d.id] && (
          <span className="block text-stone">
            &#9733; {RATINGS[d.id]!.value}/5 &middot; {RATINGS[d.id]!.count} ({RATINGS[d.id]!.where})
          </span>
        )}
        <span className="block mt-1"><Verdict d={d} /></span>
      </td>
      <td className="p-2.5 align-top">
        <span className="font-mono whitespace-nowrap">{eur(d.ref)}</span>
        <span className="block text-stone">{d.refLabel}</span>
        {d.low && <span className="block text-stone">{eur(d.low.price)} {d.low.label}</span>}
        <span className="block"><SourceLink s={d.refSource} /></span>
      </td>
      <td className="p-2.5 align-top">
        <span className="font-mono font-bold whitespace-nowrap">{eur(d.bf)}</span>
        {d.bfNote && <span className="block text-stone">{d.bfNote}</span>}
        {d.endsLabel && <span className="block text-stone">jusqu&apos;au {d.endsLabel}</span>}
      </td>
      <td className="p-2.5 align-top text-center font-mono font-bold whitespace-nowrap">
        {fmtPct(pct(d.ref, d.bf))}
        {d.low && <span className="block font-normal text-stone">{fmtPct(p)} vs octobre</span>}
      </td>
      <td className="p-2.5 align-top whitespace-nowrap"><Where d={d} position="bf-table" /></td>
    </tr>
  );
}

function CategoryTable({ cat }: { cat: Category }) {
  const rows = DEALS.filter((d) => d.cat === cat);
  return (
    <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
      <table className="w-full text-xs border-collapse min-w-[640px]">
        <thead>
          <tr className="bg-green text-white">
            <th className="text-left p-2.5 rounded-tl-xl font-semibold">{CAT_LABEL[cat]}</th>
            <th className="text-left p-2.5 font-semibold">Prix habituel (3 mois) et source</th>
            <th className="text-left p-2.5 font-semibold">Prix du 18/11</th>
            <th className="text-center p-2.5 font-semibold">Baisse r&eacute;elle</th>
            <th className="text-left p-2.5 rounded-tr-xl font-semibold">O&ugrave;</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((d) => <DealRow key={d.id} d={d} />)}
        </tbody>
      </table>
    </div>
  );
}

export default function BlackFridayKitSolairePage() {
  const sunologyActive = isActiveUntil(SUNOLOGY_END);
  const ecoflowActive = isActiveUntil('2026-11-30');
  return (
    <>
      <SchemaArticle
        title="Black Friday 2026 : kits solaires et batteries, les vraies bonnes affaires"
        description="Prix Black Friday 2026 des kits solaires de balcon, batteries et stations compar&eacute;s &agrave; leur prix des trois derniers mois, avec sources, rentabilit&eacute; et pi&egrave;ges &agrave; &eacute;viter."
        url={BF_ARTICLE_URL}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Black Friday 2026' }]} />
      <SchemaDeals />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Black Friday 2026' }]} />

          <div className="mb-8">
            <div className="badge-amber mb-4 inline-block">Black Friday 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Black Friday 2026 : kits solaires et batteries, les vraies bonnes affaires
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Les &laquo; -50 % &raquo; s&apos;affichent partout. Nous avons compar&eacute; le prix du jour de {DEALS.length} kits, batteries, stations et accessoires &agrave; leur prix des trois derniers mois, relev&eacute; sur les sites des marques, des archives web et des historiques de prix. R&eacute;sultat : {TOP.length} produits vraiment moins chers, dont {TOP.filter((d) => realDrop(d) <= -10).length} de plus de 10 %, et beaucoup de remises affich&eacute;es qui ne changent rien au prix pay&eacute;.
            </p>
            <div className="mt-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-brand border-2 border-green/20 bg-green-pale/40 px-4 py-2 text-sm">
              <span className="font-bold text-green">Prix v&eacute;rifi&eacute;s le 18 novembre 2026</span>
              <span className="text-stone">Publi&eacute; le 18 novembre 2026 &middot; Mis &agrave; jour le 26 novembre 2026 &middot; prochaine mise &agrave; jour avant le Cyber Monday (30 novembre)</span>
            </div>
          </div>

          {/* Réponse courte */}
          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">La r&eacute;ponse courte</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong className="text-green">✓ Batterie :</strong> le <AffLink item={BUY.solarflow800Pro2} position="bf-reponse">Zendure SolarFlow 800 Pro 2</AffLink> tombe &agrave; <strong>{eur(D.pro2.bf)}</strong> avec le code {ZENDURE_CODE} ({eur(D.pro2.ref)} le 2 septembre, <strong>{fmtPct(realDrop(D.pro2))}</strong>), ou {eur(D['pro2-pack'].bf)} avec 2 panneaux de 500 W ({fmtPct(realDrop(D['pro2-pack']))}).</li>
              <li><strong className="text-green">✓ Kit sans batterie :</strong> le Sunology PLAY &agrave; <strong>{eur(D.play.bf)}</strong> avec le code {SUNOLOGY_CODE} jusqu&apos;au 4 d&eacute;cembre ({eur(D.play.ref)} hors promotion, environ {eur(D.play.low!.price)} en octobre).</li>
              <li><strong className="text-green">✓ Station :</strong> l&apos;<AffLink item={BUY.s2000Pro} position="bf-reponse">ALLPOWERS S2000 Pro</AffLink> &agrave; <strong>{eur(D.s2000.bf)}</strong> ({eur(D.s2000.ref)} le 9 octobre, {fmtPct(realDrop(D.s2000))}).</li>
              <li><strong className="text-amber-dark">⚠ &Eacute;puis&eacute; :</strong> le pack SolarFlow 800 Plus + 2 × 500 W, le plus rentable de notre s&eacute;lection ({eur(D['plus-pack'].bf)} avec le code {ZENDURE_CODE}, retour sur investissement de {fy(rPlus.roiAfter)} ans), est &eacute;puis&eacute; sur zendure.fr depuis le 20 novembre (toujours &eacute;puis&eacute; le 23 novembre). Le pack 800 Pro 2 ci-dessus prend le relais.</li>
              <li><strong className="text-green">✓ Bluetti :</strong> le Balco 260 est pass&eacute; de 789 &euro; le 5 novembre &agrave; <strong>{eur(D.balco.bf)}</strong> le 20 novembre ({fmtPct(realDrop(D.balco))}), sans code.</li>
              <li><strong className="text-amber-dark">✗ Pas de baisse :</strong> SolarFlow 2400 AC+ (code refus&eacute;), EcoFlow STREAM Ultra et ALLPOWERS BS2500 PRO sont au m&ecirc;me prix qu&apos;avant l&apos;op&eacute;ration, malgr&eacute; des prix barr&eacute;s de -34 &agrave; -50 %.</li>
            </ul>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les dates &agrave; retenir</h2>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="card border-l-4 border-l-green"><strong>Black Friday :</strong> vendredi 27 novembre 2026 <span className="text-stone">(lendemain de Thanksgiving)</span></div>
                <div className="card border-l-4 border-l-green"><strong>Cyber Monday :</strong> lundi 30 novembre 2026</div>
                <div className="card border-l-4 border-l-amber"><strong>Sunology :</strong> code {SUNOLOGY_CODE} du 4 novembre au 4 d&eacute;cembre {!sunologyActive && <span className="text-stone">(termin&eacute;)</span>}</div>
                <div className="card border-l-4 border-l-amber"><strong>EcoFlow :</strong> op&eacute;ration du 10 au 30 novembre {!ecoflowActive && <span className="text-stone">(termin&eacute;e)</span>}</div>
                <div className="card border-l-4 border-l-amber"><strong>Zendure :</strong> code {ZENDURE_CODE} (-8 %) du 2 novembre au 4 janvier 2027</div>
                <div className="card border-l-4 border-l-amber"><strong>Sunethic :</strong> promotions annonc&eacute;es du 9 au 30 novembre</div>
                <div className="card border-l-4 border-l-amber"><strong>ALLPOWERS :</strong> &laquo; jusqu&apos;&agrave; -69 % &raquo; affich&eacute;, sans date de fin indiqu&eacute;e</div>
              </div>
            </section>

            {/* Tableau des offres */}
            <section id="tableau">
              <h2 className="text-2xl font-extrabold mb-2">Le tableau des offres : prix habituel contre prix Black Friday</h2>
              <p className="text-charcoal-light leading-relaxed mb-2">
                Le <strong>prix habituel</strong> est le prix le plus bas que nous avons pu documenter sur les trois derniers mois (archive dat&eacute;e de la page du marchand, article de presse dat&eacute; ou notre propre relev&eacute;). La <strong>baisse r&eacute;elle</strong> compare ce prix au prix du jour, code compris. Quand une promotion d&apos;octobre avait d&eacute;j&agrave; fait baisser le prix, nous affichons aussi l&apos;&eacute;cart avec ce prix d&apos;octobre.
              </p>
              {(['kit', 'stockage', 'station', 'accessoire'] as Category[]).map((c) => <CategoryTable key={c} cat={c} />)}
              <p className="text-xs text-stone leading-relaxed">
                Prix TTC relev&eacute;s le 18/11/2026 sur zendure.fr, fr.ecoflow.com, iallpowers.fr, sunology.eu, sunethic.fr, beemenergy.fr et amazon.fr. Codes Zendure test&eacute;s au panier le m&ecirc;me jour. Les notes (&#9733;) sont celles affich&eacute;es par chaque marchand sur sa fiche produit, relev&eacute;es le 19/11/2026 : ce sont les avis de leurs clients, pas les n&ocirc;tres. Les prix changent souvent pendant le Black Friday : v&eacute;rifiez le montant au panier avant de payer.
              </p>
            </section>

            <section id="kits">
              <h2 className="text-2xl font-extrabold mb-4">Kits solaires : Sunology baisse, Zendure aussi sur le 800 Pro 2</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                <strong>Sunology</strong> affiche la baisse la plus simple &agrave; lire sur les kits sans batterie : avec le code {SUNOLOGY_CODE}, le PLAY (515 Wc) passe de {eur(D.play.ref)} &agrave; {eur(D.play.bf)} et le GO (270 Wc) de {eur(D.go.ref)} &agrave; {eur(D.go.bf)}, du 4 novembre au 4 d&eacute;cembre (page officielle de l&apos;op&eacute;ration consult&eacute;e le 18/11). Le PLAY Max passe de 1 179 &euro; &agrave; 1 079 &euro; et la batterie STOREY de 1 390 &euro; &agrave; 1 190 &euro;. Nuance : en octobre, Sunology faisait d&eacute;j&agrave; -11 % sans code ; par rapport &agrave; ce prix-l&agrave;, le PLAY ne gagne qu&apos;environ {eur(D.play.low!.price - D.play.bf)}, et le PLAY Max est un peu plus cher qu&apos;en octobre. Notre analyse : <Link href="/avis/sunology-play-2" className="text-green hover:underline">avis Sunology PLAY</Link>.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&ocirc;t&eacute; <strong>Zendure</strong>, le pack <AffLink item={BUY.solarflow800Pro2} position="bf-kits">SolarFlow 800 Pro 2 + 2 panneaux de 500 W</AffLink> est &agrave; {eur(959)}, contre {eur(D['pro2-pack'].ref)} le 2 septembre, et {eur(D['pro2-pack'].bf)} avec le code {ZENDURE_CODE}. Le pack SolarFlow 800 Plus + 2 × 500 W &eacute;tait affich&eacute; &agrave; 719 &euro;, exactement son prix depuis septembre, et {eur(D['plus-pack'].bf)} avec le code {ZENDURE_CODE} (test&eacute; au panier le 18 novembre) : c&apos;&eacute;tait le kit avec batterie le moins cher que nous suivions (voir la <a href="#rentabilite" className="text-green hover:underline">rentabilit&eacute;</a>). Il est &eacute;puis&eacute; chez Zendure (constat&eacute; le 20 et le 23 novembre 2026) ; le pack 800 Pro 2 ci-dessus est l&apos;alternative en stock.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                <strong>Sunethic</strong> annonce des &laquo; promotions Black Friday &raquo; du 9 au 30 novembre, mais la station F500 (500 Wc) reste &agrave; {eur(D.f500.bf)}, son prix du 5 novembre. <strong>Beem</strong> n&apos;affiche pas de remise sur le Beem On 500 Wc ({eur(D.beem.bf)}, en pr&eacute;commande) au 18 novembre ; le Beem Kit 300 W est toujours en rupture.
              </p>
              <AffiliateCTA productName="Zendure SolarFlow 800 Pro 2" merchantName="Zendure" affiliateUrl={BUY.solarflow800Pro2.url} label={`Voir le SolarFlow 800 Pro 2 (code ${ZENDURE_CODE} au panier)`} variant="secondary" position="bf-after-kits" price={`${eur(D.pro2.bf)} avec le code`} />
            </section>

            <section id="batteries">
              <h2 className="text-2xl font-extrabold mb-4">Batteries et stockage : le code Zendure fait la diff&eacute;rence</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le code <strong>{ZENDURE_CODE}</strong> (-8 %) est le seul levier v&eacute;rifi&eacute; qui baisse vraiment le prix des batteries Zendure : nous l&apos;avons test&eacute; au panier le 18 novembre. Il s&apos;ajoute aux prix affich&eacute;s : SolarFlow 800 Pro 2 seul {eur(P['zendure-solarflow-800-pro-2'].priceEur)} → <strong>{eur(D.pro2.bf)}</strong>, SolarFlow 800 Plus seul {eur(P['zendure-solarflow-800-plus'].priceEur)} → <strong>{eur(D.plus.bf)}</strong> (&eacute;puis&eacute; depuis le 20 novembre), <AffLink item={BUY.solarflow1600AcPlus} position="bf-batteries">SolarFlow 1600 AC+</AffLink> avec une batterie AB2000L {eur(959)} → <strong>{eur(D['1600'].bf)}</strong>, batterie AB3000L 659 &euro; → 606,28 &euro;. Il est refus&eacute; sur le SolarFlow 2400 AC+ (test&eacute;), et Zendure exclut aussi le 2400 Pro.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Sans code, les prix ne bougent pas : le SolarFlow 800 Plus &eacute;tait affich&eacute; &agrave; {eur(D.plus.ref)} le 2 septembre comme le 18 novembre, avant sa rupture, le <AffLink item={BUY.solarflow2400AcPlus} position="bf-batteries">SolarFlow 2400 AC+</AffLink> &agrave; {eur(D['2400'].ref)} le 2 septembre, en octobre et aujourd&apos;hui. L&apos;<AffLink item={BUY.streamUltra} position="bf-batteries">EcoFlow STREAM Ultra</AffLink> est &agrave; {eur(D.stream.bf)}, son prix du 5 novembre, avant le d&eacute;but de l&apos;op&eacute;ration EcoFlow (10 au 30 novembre). L&apos;<AffLink item={BUY.bs2500Pro} position="bf-batteries">ALLPOWERS BS2500 PRO</AffLink> co&ucirc;te {eur(D.bs2500.bf)} : c&apos;est 150 &euro; de moins que le 8 octobre (1 149 &euro;), mais le m&ecirc;me prix que le 5 novembre.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Pour choisir la capacit&eacute; avant de regarder le prix : <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="text-green hover:underline">comparatif des batteries de balcon 2026</Link> et <Link href="/guide/batterie-solaire-balcon-guide" className="text-green hover:underline">guide batterie solaire</Link>.
              </p>
            </section>

            <section id="stations">
              <h2 className="text-2xl font-extrabold mb-4">Stations &eacute;lectriques : une vraie baisse chez ALLPOWERS</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&apos;<AffLink item={BUY.s2000Pro} position="bf-stations">ALLPOWERS S2000 Pro</AffLink> (1 451 Wh, 2 400 W) est &agrave; <strong>{eur(D.s2000.bf)}</strong> contre {eur(D.s2000.ref)} le 9 octobre ({fmtPct(realDrop(D.s2000))}). Le prix barr&eacute; affich&eacute; est de {eur(D.s2000.shownStrike!)} ; le prix r&eacute;ellement pratiqu&eacute; le 9 octobre &eacute;tait de {eur(D.s2000.ref)}. Chez EcoFlow, la <AffLink item={BUY.delta3Plus} position="bf-stations">DELTA 3 Plus</AffLink> (environ 1 kWh, 1 800 W, garantie 5 ans) est &agrave; 799 &euro; pour un prix barr&eacute; de 999 &euro;, mais nous n&apos;avons trouv&eacute; aucun prix ant&eacute;rieur dat&eacute; : impossible de dire s&apos;il s&apos;agit d&apos;une baisse.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Rappel : une station portable n&apos;est pas un kit plug-and-play. Elle stocke et alimente des appareils, mais n&apos;injecte pas dans votre installation comme un SolarFlow ou un STREAM. Pour comparer les deux usages : <Link href="/blog/batteries-portables-solaires-comparatif" className="text-green hover:underline">batteries portables solaires</Link>.
              </p>
            </section>

            <section id="accessoires">
              <h2 className="text-2xl font-extrabold mb-4">Accessoires : prises connect&eacute;es et wattm&egrave;tres, pas de vraie promo</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La <AffLink item={BUY.tapoP110Amazon} position="bf-accessoires">prise Tapo P110 (FR)</AffLink> affiche -7 % sur Amazon ({eur(D.tapo.bf)} au lieu d&apos;un prix conseill&eacute; de 12,90 &euro;), mais elle est &agrave; {eur(D.tapo.ref)} sans interruption depuis le 13 octobre selon camelcamelcamel. Le <AffLink item={BUY.wattmetreAmazon} position="bf-accessoires">wattm&egrave;tre Brennenstuhl PM 231 E</AffLink> est m&ecirc;me un peu plus cher qu&apos;au 5 novembre ({eur(D.brennenstuhl.bf)} contre {eur(D.brennenstuhl.ref)}). La <AffLink item={BUY.shellyPlugAmazon} position="bf-accessoires">Shelly Plug PM Gen3 (FR)</AffLink> est &agrave; 32,35 &euro; sur Amazon : pas d&apos;historique fiable, donc pas de verdict.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Ces deux prises existent aussi chez ManoMano (<AffLink item={BUY.tapoP110ManoMano} position="bf-accessoires">Tapo P110</AffLink>, <AffLink item={BUY.shellyPlugManoMano} position="bf-accessoires">Shelly Plug PM Gen3</AffLink>) : nous n&apos;avons pas pu relever leur prix du jour, comparez au panier. Pour savoir laquelle prendre : <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline">prises connect&eacute;es pour suivre sa production</Link>.
              </p>
            </section>

            <section id="fausse-bonne-affaire">
              <h2 className="text-2xl font-extrabold mb-4">Fausse bonne affaire ? Comment rep&eacute;rer une remise gonfl&eacute;e</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Depuis le 28 mai 2022, une annonce de r&eacute;duction de prix doit prendre comme prix de r&eacute;f&eacute;rence le prix le plus bas pratiqu&eacute; par le vendeur dans les 30 jours pr&eacute;c&eacute;dents (article L112-1-1 du Code de la consommation). Dans les faits, le prix barr&eacute; que vous voyez sur une fiche peut &ecirc;tre un prix conseill&eacute; ou un prix de lancement : seul l&apos;historique dit si le prix a vraiment baiss&eacute;. Ce que nous avons relev&eacute; le 18 novembre :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Produit</th>
                      <th className="text-center p-2.5 font-semibold">Prix barr&eacute; affich&eacute;</th>
                      <th className="text-center p-2.5 font-semibold">Remise affich&eacute;e (sans code)</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Baisse r&eacute;elle (3 mois, code compris)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEALS.filter((d) => d.shownStrike).map((d) => (
                      <tr key={d.id} className="border-b border-border-light">
                        <td className="p-2.5 font-semibold">{d.product}</td>
                        <td className="p-2.5 text-center font-mono">{eur(d.shownStrike!)}</td>
                        <td className="p-2.5 text-center font-mono">{fmtPct(pct(d.shownStrike!, d.shown ?? d.bf))}</td>
                        <td className="p-2.5 text-center font-mono font-bold">{fmtPct(realDrop(d))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="font-bold text-lg mb-3">Les 5 r&eacute;flexes avant de payer</h3>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li><span className="text-amber-dark font-bold">1.</span> <strong>Ignorez le prix barr&eacute;.</strong> Comparez au prix pay&eacute; il y a un mois : historique Amazon (camelcamelcamel, Keepa), archives de la fiche (web.archive.org) ou nos relev&eacute;s dat&eacute;s.</li>
                <li><span className="text-amber-dark font-bold">2.</span> <strong>Comparez la m&ecirc;me configuration.</strong> Avec ou sans panneaux, avec ou sans compteur, avec ou sans batterie additionnelle : un pack &laquo; remis&eacute; &raquo; peut co&ucirc;ter plus cher que les &eacute;l&eacute;ments achet&eacute;s s&eacute;par&eacute;ment.</li>
                <li><span className="text-amber-dark font-bold">3.</span> <strong>Testez le code au panier.</strong> Un code s&eacute;rieux s&apos;affiche dans le r&eacute;capitulatif avant paiement ; s&apos;il n&apos;y est pas, il ne s&apos;applique pas.</li>
                <li><span className="text-amber-dark font-bold">4.</span> <strong>Regardez le prix au kWh stock&eacute;</strong> pour une batterie : {eur(D.pro2.bf)} pour 1,92 kWh, c&apos;est environ {eur(Math.round(D.pro2.bf / 1.92))} par kWh ; {eur(D.bs2500.bf)} pour 2,6 kWh, environ {eur(Math.round(D.bs2500.bf / 2.6))}.</li>
                <li><span className="text-amber-dark font-bold">5.</span> <strong>Faites le calcul de rentabilit&eacute;</strong> avant d&apos;acheter : un kit trop grand pour votre consommation reste une mauvaise affaire, m&ecirc;me &agrave; -30 %. <Link href="/calculateur" className="text-green hover:underline">Notre calculateur</Link> vous le dit.</li>
              </ul>
            </section>

            <section id="rentabilite">
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; au prix Black Friday</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Calcul avec notre m&eacute;thodologie standard : Lyon plein sud, tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85 % sans batterie et 95 % avec. Les packs Zendure avec 2 panneaux de 500 W sont compt&eacute;s &agrave; 1 000 Wc.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Kit</th>
                      <th className="text-center p-2.5 font-semibold">Prix habituel</th>
                      <th className="text-center p-2.5 font-semibold">Prix du 18/11</th>
                      <th className="text-center p-2.5 font-semibold">&Eacute;conomie an 1</th>
                      <th className="text-center p-2.5 font-semibold">Retour sur invest.</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Gain net sur 25 ans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roi.map((r) => (
                      <tr key={r.label} className="border-b border-border-light">
                        <td className="p-2.5"><span className="font-semibold">{r.label}</span><span className="block text-stone">{r.detail}</span></td>
                        <td className="p-2.5 text-center font-mono">{eur(r.before)}</td>
                        <td className="p-2.5 text-center font-mono font-bold">{eur(r.after)}</td>
                        <td className="p-2.5 text-center font-mono">{r.savings1} &euro;</td>
                        <td className="p-2.5 text-center font-mono">{r.roiBefore === r.roiAfter ? `${fy(r.roiAfter)} ans` : `${fy(r.roiBefore)} → ${fy(r.roiAfter)} ans`}</td>
                        <td className="p-2.5 text-center font-mono">{fy(r.total25 - Math.round(r.after))} &euro;</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Ce que disent ces chiffres : la baisse Black Friday raccourcit le retour sur investissement d&apos;environ un an, pas plus. Le premier crit&egrave;re reste la taille du kit face &agrave; votre consommation en journ&eacute;e. Au nord, &agrave; l&apos;ombre ou avec une orientation est-ouest, les dur&eacute;es s&apos;allongent : faites le calcul pour votre d&eacute;partement avec le <Link href="/calculateur" className="text-green hover:underline">calculateur</Link>.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Le bon kit avant la bonne affaire</p>
              <p className="text-sm text-charcoal-light mb-4">
                5 questions, 30 secondes : le calculateur vous recommande la puissance adapt&eacute;e, et vous dit franchement si le kit n&apos;est pas rentable chez vous.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer ma rentabilit&eacute; &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui ne change pas pendant le Black Friday</h2>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li><strong className="text-charcoal">Les garanties :</strong> garantie l&eacute;gale de conformit&eacute; de 2 ans aupr&egrave;s du vendeur, droit de r&eacute;tractation de 14 jours pour un achat en ligne, garanties commerciales du fabricant identiques au reste de l&apos;ann&eacute;e.</li>
                <li><strong className="text-charcoal">Les d&eacute;marches :</strong> un kit de balcon se d&eacute;clare &agrave; Enedis (convention d&apos;autoconsommation) avant d&apos;&ecirc;tre branch&eacute;. Voir notre <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">guide r&eacute;glementation 2026</Link>.</li>
                <li><strong className="text-charcoal">Les d&eacute;lais :</strong> un produit en pr&eacute;commande n&apos;est exp&eacute;di&eacute; qu&apos;&agrave; la date annonc&eacute;e par le marchand, promotion ou pas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">{'▼'}</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; lire avant d&apos;acheter</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/codes-promo" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Codes promo v&eacute;rifi&eacute;s</h3>
                  <p className="text-xs text-charcoal-light mt-1">Sunology, Zendure, EcoFlow, Beem, Sunethic : codes et dates de fin</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet des kits de balcon</p>
                </Link>
                <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleure batterie solaire de balcon</h3>
                  <p className="text-xs text-charcoal-light mt-1">Prix au kWh, autonomie, compatibilit&eacute;</p>
                </Link>
                <Link href="/quel-kit-choisir" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Quel kit solaire choisir ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">La bonne puissance selon votre logement</p>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow 800 Plus</h3>
                  <p className="text-xs text-charcoal-light mt-1">Batterie 1,92 kWh, rentabilit&eacute; et verdict</p>
                </Link>
                <Link href="/avis/ecoflow-stream-ultra" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis EcoFlow STREAM Ultra</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le successeur du PowerStream analys&eacute;</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> prix du jour relev&eacute;s le 18 novembre 2026 sur les fiches officielles (zendure.fr, fr.ecoflow.com, iallpowers.fr, sunology.eu, sunethic.fr, beemenergy.fr) et sur amazon.fr ; code Zendure {ZENDURE_CODE} test&eacute; au panier zendure.fr le m&ecirc;me jour. Prix de r&eacute;f&eacute;rence : captures dat&eacute;es de la Wayback Machine (2 septembre, 8 et 9 octobre 2026), article Tom&apos;s Guide du 26 octobre 2026, historiques camelcamelcamel et nos relev&eacute;s du 5 novembre 2026. Rentabilit&eacute; calcul&eacute;e avec la formule centralis&eacute;e du site (<Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link>). Produits analys&eacute;s sur documentation, pas test&eacute;s physiquement. Nouvelle tentative de v&eacute;rification le 26 novembre 2026 : zendure.fr, fr.ecoflow.com, iallpowers.fr, sunology.eu, sunethic.fr et beemenergy.fr restent inaccessibles depuis cet environnement (m&ecirc;me blocage r&eacute;seau que les entr&eacute;es pr&eacute;c&eacute;dentes depuis le 02/10) ; recherche web compl&eacute;mentaire sans &eacute;l&eacute;ment dat&eacute; contredisant les prix du 18 novembre conserv&eacute;s ci-dessus.
              </p>
              <p className="text-xs text-stone leading-relaxed mt-2">
                <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s (Zendure, EcoFlow, ALLPOWERS, Bluetti et ManoMano via Awin, Amazon). Si vous achetez via ces liens, nous touchons une commission, sans surco&ucirc;t pour vous. Les liens Sunology, Sunethic et Beem ne sont pas affili&eacute;s. Cela n&apos;influence ni la s&eacute;lection ni le verdict : les produits sans baisse r&eacute;elle sont signal&eacute;s comme tels, affili&eacute;s ou non.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
