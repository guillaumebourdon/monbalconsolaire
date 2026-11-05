'use client';

import { useState } from 'react';
import { cardPriceLabel, REVIEW_PRODUCT, PRODUCTS, priceLabel } from '@/data/products';
import { calculateROIYears } from '@/lib/pricing';

const avisPrice = (slug: string) => (REVIEW_PRODUCT[slug] ? cardPriceLabel(REVIEW_PRODUCT[slug]) : '');
const BEEM = PRODUCTS['beem-on-500w'];
const beemRoi = calculateROIYears({ kitPriceEur: BEEM.priceEur, kitPowerWc: BEEM.powerWc }).toLocaleString('fr-FR');
import Link from 'next/link';

type ArticleType = 'comparatif' | 'avis';
type PowerRange = 'moins-400' | '400-500' | 'plus-500';

const POWER_RANGES: { id: PowerRange; label: string }[] = [
  { id: 'moins-400', label: 'Moins de 400 Wc' },
  { id: '400-500', label: '400 à 500 Wc' },
  { id: 'plus-500', label: 'Plus de 500 Wc' },
];

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  type: ArticleType;
  badge: string;
  tags: string[];
  /** Marques analysées dans l'article */
  brands?: string[];
  /** Puissance crête des kits traités (panneaux), si l'article porte sur des kits */
  powers?: PowerRange[];
  score?: string;
  price?: string;
  readTime?: string;
  publishedAt: string;
  updatedAt?: string;
}

const ARTICLES: Article[] = [
  {
    slug: '/comparatif/application-suivi-production-solaire',
    title: 'Applis de suivi solaire : Beem vs Sunology vs EcoFlow vs Zendure vs Shelly',
    excerpt: 'Suivi de production ou pilotage de batterie en HP/HC ? Comparatif des 5 apps les plus utilisées, avec leurs points faibles réels.',
    type: 'comparatif',
    badge: 'Nouveau',
    tags: ['comparatif', 'app', 'suivi'],
    brands: ['Beem', 'Sunology', 'EcoFlow', 'Zendure'],
    publishedAt: '2026-10-30',
    readTime: '9 min',
  },
  {
    slug: '/comparatif/meilleur-micro-onduleur-2026',
    title: 'Meilleur micro-onduleur solaire 2026 : Hoymiles, APsystems, Enphase, Deye',
    excerpt: 'Pour un kit DIY : comparatif des 5 micro-onduleurs les plus vendus. Prix, MPPT, monitoring, garantie, verdict par budget.',
    type: 'comparatif',
    badge: 'Nouveau',
    tags: ['comparatif', 'diy', 'best'],
    brands: ['Hoymiles'],
    publishedAt: '2026-10-16',
    readTime: '11 min',
  },
  {
    slug: '/comparatif/kit-solaire-balcon-vs-toiture',
    title: 'Kit solaire balcon vs toiture : quelle différence de rentabilité ?',
    excerpt: 'Plug-and-play vs toiture (ROI 7–12 ans, 6 750–14 000€). Tableau complet, quand choisir quoi.',
    type: 'comparatif',
    badge: 'DIY vs toiture',
    tags: ['comparatif', 'best'],
    publishedAt: '2026-08-14',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/sunology-play2-vs-beem-on-500w',
    title: 'Sunology PLAY (ex-PLAY 2) vs Beem On 500 Wc : le match 2026',
    excerpt: `PLAY 515 W (ex-PLAY 2, ${priceLabel('sunology-play')}) vs Beem On 500 Wc (${priceLabel('beem-on-500w')}) : 12 critères, ROI comparé, verdict par profil.`,
    type: 'comparatif',
    badge: 'Match 2026',
    tags: ['best', 'comparatif', 'marque'],
    brands: ['Sunology', 'Beem'],
    powers: ['400-500'],
    publishedAt: '2026-07-28',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/meilleure-batterie-solaire-balcon-2026',
    title: 'Meilleure batterie solaire balcon 2026 : Zendure vs Bluetti vs EcoFlow',
    excerpt: 'Comparatif dédié batteries balcon : prix/kWh, autonomie, verdict par profil. Zendure SolarFlow, Bluetti Balco 260, Jackery, EcoFlow PowerStream (arrêté).',
    type: 'comparatif',
    badge: 'Batteries',
    tags: ['stockage', 'comparatif', 'best'],
    brands: ['Zendure', 'Bluetti', 'EcoFlow', 'Jackery'],
    publishedAt: '2026-07-10',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/meilleur-kit-solaire-terrasse-2026',
    title: 'Meilleur kit solaire pour terrasse 2026',
    excerpt: 'Plus d\'espace, pose au sol, multi-panneaux : les meilleurs setups pour terrasse.',
    type: 'comparatif',
    badge: 'Terrasse',
    tags: ['best', 'comparatif'],
    publishedAt: '2026-05-13',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/zendure-vs-sunology-vs-beem',
    title: 'Zendure vs Sunology vs Beem : le match 2026',
    excerpt: 'Stockage à prix cassé vs simplicité absolue vs flexibilité : comparatif complet des 3 approches.',
    type: 'comparatif',
    badge: 'Match 2026',
    tags: ['best', 'comparatif', 'stockage', 'marque'],
    brands: ['Zendure', 'Sunology', 'Beem'],
    publishedAt: '2026-05-09',
    readTime: '12 min',
  },
  {
    slug: '/comparatif/meilleur-kit-solaire-2026',
    title: 'Meilleur kit solaire plug and play 2026 : comparatif complet',
    excerpt: 'Sunology PLAY, Beem On, Beem Kit, Sunethic F500 : tableau comparatif, points forts/faibles, verdict par profil.',
    type: 'comparatif',
    badge: 'Article phare',
    tags: ['best', 'comparatif'],
    brands: ['Sunology', 'Beem', 'Sunethic'],
    powers: ['moins-400', '400-500'],
    publishedAt: '2026-03-17',
    readTime: '12 min',
  },
  {
    slug: '/comparatif/sunology-vs-beem',
    title: 'Sunology vs Beem : quel kit choisir en 2026 ?',
    excerpt: 'Les deux leaders français s\'affrontent. Comparaison point par point.',
    type: 'comparatif',
    badge: 'Match direct',
    tags: ['marque', 'comparatif'],
    brands: ['Sunology', 'Beem'],
    publishedAt: '2026-03-24',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/kit-solaire-petit-budget',
    title: 'Meilleur kit solaire petit budget : moins de 400 €',
    excerpt: 'Sunology GO, Beem On 500 Wc, kits Amazon : les options pour débuter (Beem Kit en rupture).',
    type: 'comparatif',
    badge: 'Petit budget',
    tags: ['budget', 'comparatif'],
    brands: ['Beem'],
    powers: ['moins-400'],
    publishedAt: '2026-03-25',
    readTime: '8 min',
  },
  {
    slug: '/comparatif/kit-solaire-batterie-2026',
    title: 'Kit solaire avec batterie 2026 : comparatif stockage',
    excerpt: 'Sunology PLAY MAX, STOREY, EcoFlow : faut-il une batterie ?',
    type: 'comparatif',
    badge: 'Stockage',
    tags: ['stockage', 'comparatif'],
    brands: ['Sunology', 'EcoFlow'],
    publishedAt: '2026-03-31',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/300w-vs-400w-vs-500w-puissance',
    title: '300W vs 400W vs 500W : quelle puissance choisir ?',
    excerpt: 'Comparatif des 3 puissances les plus vendues : prix, production, profil adapté.',
    type: 'comparatif',
    badge: 'Puissance',
    tags: ['puissance', 'comparatif'],
    powers: ['moins-400', '400-500'],
    publishedAt: '2026-04-18',
    readTime: '8 min',
  },
  {
    slug: '/avis/sunology-play-2',
    title: 'Sunology PLAY (ex-PLAY 2)',
    excerpt: 'Le leader du marché français. Notre analyse complète : prix, production estimée, points faibles.',
    type: 'avis',
    badge: 'Choix n°1',
    tags: ['best', 'marque'],
    brands: ['Sunology'],
    powers: ['400-500'],
    publishedAt: '2026-03-19',
    score: '8.5/10',
    price: avisPrice('sunology-play-2'),
  },
  {
    slug: '/avis/beem-on-500w',
    title: 'Beem On 500 Wc',
    excerpt: `${priceLabel('beem-on-500w')}, ${BEEM.powerWc} Wc : le meilleur prix au watt parmi les kits analysés. ROI ~${beemRoi} ans. En précommande (${BEEM.availabilityNote}).`,
    type: 'avis',
    badge: 'Meilleur rapport qualit\u00e9-prix',
    tags: ['marque', 'best', 'puissance', 'budget'],
    brands: ['Beem'],
    powers: ['400-500'],
    publishedAt: '2026-06-17',
    updatedAt: '2026-08-20',
    score: '8.5/10',
    price: avisPrice('beem-on-500w'),
  },
  {
    slug: '/avis/sunethic-f500',
    title: 'Sunethic F500',
    excerpt: 'Made in France, éthique, puissant. Meilleure note Trustpilot du marché.',
    type: 'avis',
    badge: 'Made in France',
    tags: ['puissance', 'marque'],
    brands: ['Sunethic'],
    powers: ['400-500'],
    publishedAt: '2026-03-27',
    score: '7.5/10',
    price: avisPrice('sunethic-f500'),
  },
  {
    slug: '/avis/beem-kit-300w',
    title: 'Beem Kit 300W',
    excerpt: 'Le moins cher du marché, mais actuellement en rupture de stock.',
    type: 'avis',
    badge: 'Petit budget',
    tags: ['budget'],
    brands: ['Beem'],
    powers: ['moins-400'],
    publishedAt: '2026-04-01',
    score: '7.5/10',
    price: avisPrice('beem-kit-300w'),
  },
  {
    slug: '/avis/sunology-play-max',
    title: 'Sunology PLAY MAX',
    excerpt: 'Kit solaire avec batterie intégrée. Pour ceux qui consomment le soir.',
    type: 'avis',
    badge: 'Kit + batterie',
    tags: ['stockage', 'marque'],
    brands: ['Sunology'],
    powers: ['400-500'],
    publishedAt: '2026-04-02',
    score: '8/10',
    price: avisPrice('sunology-play-max'),
  },
  {
    slug: '/avis/sunology-city',
    title: 'Sunology CITY',
    excerpt: 'Plus vendu par Sunology depuis 2026. Analyse du kit garde-corps et alternatives actuelles.',
    type: 'avis',
    badge: 'Arrêté',
    tags: ['marque', 'compact'],
    brands: ['Sunology'],
    powers: ['400-500'],
    publishedAt: '2026-04-27',
    score: '7,5/10',
    price: avisPrice('sunology-city'),
  },
  {
    slug: '/avis/sunology-go',
    title: 'Sunology GO',
    excerpt: 'Le kit le plus compact de Sunology : 270 W, 349 €, au sol ou sur garde-corps sans percer.',
    type: 'avis',
    badge: 'Compact',
    tags: ['marque', 'compact', 'budget'],
    brands: ['Sunology'],
    powers: ['moins-400'],
    publishedAt: '2026-10-09',
    score: '7/10',
    price: avisPrice('sunology-go'),
  },
  {
    slug: '/avis/ecoflow-powerstream',
    title: 'EcoFlow PowerStream',
    excerpt: 'Plus vendu par EcoFlow France depuis 2026 (remplacé par la gamme STREAM). Analyse et alternatives.',
    type: 'avis',
    badge: 'Arrêté',
    tags: ['stockage', 'marque'],
    brands: ['EcoFlow'],
    publishedAt: '2026-04-28',
    score: '8/10',
    price: avisPrice('ecoflow-powerstream'),
  },
  {
    slug: '/avis/allpowers-bs2500-pro',
    title: 'ALLPOWERS BS2500 PRO',
    excerpt: 'Batterie de balcon 2,6 kWh avec sortie de secours 2 400 W, 999 € en promo. Avis prudent : aucun test indépendant.',
    type: 'avis',
    badge: 'Nouveau',
    tags: ['stockage', 'marque'],
    brands: ['ALLPOWERS'],
    publishedAt: '2026-11-05',
    score: '6/10',
    price: avisPrice('allpowers-bs2500-pro'),
  },
  {
    slug: '/avis/ecoflow-stream-ultra',
    title: 'EcoFlow STREAM Ultra',
    excerpt: 'Successeur du PowerStream : batterie 1,92 kWh + micro-onduleur 800 W intégrés, extensible à 11,52 kWh.',
    type: 'avis',
    badge: 'Nouveau',
    tags: ['stockage', 'marque'],
    brands: ['EcoFlow'],
    publishedAt: '2026-11-03',
    score: '7,5/10',
    price: avisPrice('ecoflow-stream-ultra'),
  },
  {
    slug: '/avis/ikea-solstrale-balcon',
    title: 'Kit solaire balcon IKEA (STREAM)',
    excerpt: 'En Allemagne, « STREAM Komplettset » vendu via Svea Solar (2 × 500 W + EcoFlow STREAM, 369,90 €). Pas disponible en France au 05/11/2026.',
    type: 'avis',
    badge: 'IKEA',
    tags: ['marque'],
    brands: ['IKEA', 'EcoFlow'],
    powers: ['plus-500'],
    publishedAt: '2026-05-23',
    score: '\u2014',
    price: '369,90 \u20ac (DE)',
  },
  {
    slug: '/avis/dualsun-preasy',
    title: 'DualSun PREASY',
    excerpt: 'Panneau pliable 420 Wc assemblé en France, design aspect bois premium. Le challenger Made in France.',
    type: 'avis',
    badge: 'Made in France',
    tags: ['marque'],
    brands: ['DualSun'],
    powers: ['400-500'],
    publishedAt: '2026-05-09',
    score: '6.5/10',
    price: avisPrice('dualsun-preasy'),
  },
  {
    slug: '/avis/zendure-solarflow',
    title: 'Zendure SolarFlow 800 Plus',
    excerpt: `Batterie 1,92 kWh + onduleur 800 W intégrés : ${priceLabel('zendure-solarflow-800-plus')} sans panneaux, 719 € en pack 2 × 500 W (promo constatée le 05/11/2026).`,
    type: 'avis',
    badge: 'Rapport qualité/prix',
    tags: ['stockage', 'budget', 'marque'],
    brands: ['Zendure'],
    powers: ['plus-500'],
    publishedAt: '2026-05-07',
    score: '8.5/10',
    price: avisPrice('zendure-solarflow'),
  },
  {
    slug: '/avis/jackery-solarvault-3-pro',
    title: 'Jackery SolarVault 3 Pro',
    excerpt: `Onduleur + batterie LFP 2,52 kWh, 4 MPPT pour 4 000 W d\u2019entrée solaire, IP65. ${priceLabel('jackery-solarvault-3-pro')} sans panneaux (promo constatée le 05/11/2026).`,
    type: 'avis',
    badge: 'Stockage LFP',
    tags: ['stockage', 'marque'],
    brands: ['Jackery'],
    publishedAt: '2026-06-23',
    score: '7/10',
    price: avisPrice('jackery-solarvault-3-pro'),
  },
  {
    slug: '/avis/hoymiles-hms-800w',
    title: 'Hoymiles HMS-800W-2T',
    excerpt: '2 MPPT indépendants, WiFi intégré sans DTU, 96,7 % rendement. ~119 €. Le micro-onduleur de référence pour les montages DIY balcon.',
    type: 'avis',
    badge: 'DIY',
    tags: ['diy', 'technique'],
    brands: ['Hoymiles'],
    publishedAt: '2026-08-18',
    score: '8.5/10',
    price: avisPrice('hoymiles-hms-800w'),
  },
  {
    slug: '/avis/anker-solix-rs40p',
    title: 'Anker SOLIX RS40P',
    excerpt: '2×455 Wc IBC N-type, onduleur WiFi 800 W. 799 €. La technologie premium d\'une marque mondiale.',
    type: 'avis',
    badge: 'Grande marque',
    tags: ['marque', 'puissance'],
    brands: ['Anker'],
    powers: ['plus-500'],
    publishedAt: '2026-07-17',
    score: '7.5/10',
    price: avisPrice('anker-solix-rs40p'),
  },
  {
    slug: '/avis/zendure-solarflow-mix',
    title: 'Zendure SolarFlow Mix',
    excerpt: '3 mod\u00e8les, 8-50 kWh LFP, 4 kW bidirectionnel, IA Zenki. Le stockage r\u00e9sidentiel complet \u00e0 partir de 1 999 \u20ac.',
    type: 'avis',
    badge: 'Tout-en-un r\u00e9sidentiel',
    tags: ['stockage', 'marque', 'best'],
    brands: ['Zendure'],
    publishedAt: '2026-06-30',
    score: '8/10',
    price: avisPrice('zendure-solarflow-mix'),
  },
  {
    slug: '/avis/bluetti-balco-260',
    title: 'Bluetti Balco 260',
    excerpt: `Tout-en-un onduleur SiC + batterie LFP 2,56 kWh, sortie off-grid 1 200 W. ${priceLabel('bluetti-balco-260')} sans panneaux (promo constatée le 05/11/2026).`,
    type: 'avis',
    badge: 'Tout-en-un',
    tags: ['stockage', 'marque'],
    brands: ['Bluetti'],
    publishedAt: '2026-06-20',
    score: '7/10',
    price: avisPrice('bluetti-balco-260'),
  },
  {
    slug: '/avis/beem-on-460w',
    title: 'Beem On 460W',
    excerpt: 'Retiré du catalogue Beem (novembre 2026), remplacé par le Beem On 500 Wc. Notre analyse reste en ligne.',
    type: 'avis',
    badge: 'Ancien modèle',
    tags: ['marque'],
    brands: ['Beem'],
    powers: ['400-500'],
    publishedAt: '2026-03-26',
    updatedAt: '2026-06-20',
    score: '8/10',
    price: avisPrice('beem-on-460w'),
  },
];

const FILTERS = [
  { id: 'all', label: 'Tout voir', emoji: '✨' },
  { id: 'best', label: 'Meilleurs choix', emoji: '⭐' },
  { id: 'budget', label: 'Petit budget', emoji: '💰' },
  { id: 'puissance', label: 'Par puissance', emoji: '⚡' },
  { id: 'stockage', label: 'Avec batterie', emoji: '🔋' },
  { id: 'marque', label: 'Par marque', emoji: '🏷️' },
];

export default function QuelKitChoisirPage() {
  const [filter, setFilter] = useState<string>('all');
  const [power, setPower] = useState<PowerRange | null>(null);
  const [brand, setBrand] = useState<string | null>(null);

  // Marques classées par nombre d'articles
  const brandCounts = new Map<string, number>();
  ARTICLES.forEach(a => a.brands?.forEach(b => brandCounts.set(b, (brandCounts.get(b) || 0) + 1)));
  const BRANDS = [...brandCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([b]) => b);

  const selectFilter = (id: string) => {
    setFilter(id);
    setPower(null);
    setBrand(null);
  };

  const matches = (a: Article) => {
    if (filter === 'all') return true;
    if (filter === 'puissance') return power ? !!a.powers?.includes(power) : !!a.powers?.length;
    if (filter === 'marque') return brand ? !!a.brands?.includes(brand) : !!a.brands?.length;
    return a.tags.includes(filter);
  };

  const NOW = Date.now();
  const NEW_THRESHOLD_DAYS = 14;
  const UPDATED_THRESHOLD_DAYS = 30;

  const isNew = (dateIso: string) => {
    const diff = (NOW - new Date(dateIso).getTime()) / (1000 * 60 * 60 * 24);
    return diff <= NEW_THRESHOLD_DAYS;
  };
  const isUpdated = (dateIso?: string) => {
    if (!dateIso) return false;
    const diff = (NOW - new Date(dateIso).getTime()) / (1000 * 60 * 60 * 24);
    return diff <= UPDATED_THRESHOLD_DAYS;
  };

  const filteredArticles = ARTICLES.filter(matches)
    .slice()
    .sort((a, b) => {
      const aDate = Math.max(new Date(a.publishedAt).getTime(), a.updatedAt ? new Date(a.updatedAt).getTime() : 0);
      const bDate = Math.max(new Date(b.publishedAt).getTime(), b.updatedAt ? new Date(b.updatedAt).getTime() : 0);
      return bDate - aDate;
    });

  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-8">
          <div className="badge-green mb-4 inline-block">Comparatifs &amp; avis</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Quel kit solaire choisir ?</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Comparatifs ind&eacute;pendants et avis d&eacute;taill&eacute;s pour trouver le kit adapt&eacute; &agrave; votre balcon.
          </p>
          <p className="text-xs text-stone mt-3">
            <span className="inline-flex items-center gap-1.5 bg-amber-pale text-amber-dark font-semibold px-3 py-1 rounded-full">
              &#10003; Prix et disponibilit&eacute;s v&eacute;rifi&eacute;s — mis &agrave; jour ao&ucirc;t 2026
            </span>
          </p>
        </div>

        <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
          <span className="text-stone text-sm mt-0.5">&#8505;</span>
          <p className="text-xs text-stone leading-relaxed">
            <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => selectFilter(f.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                filter === f.id
                  ? 'bg-green text-white shadow-brand'
                  : 'bg-cream text-charcoal-light hover:bg-cream-dark'
              }`}
            >
              <span className="mr-1.5">{f.emoji}</span>
              {f.label}
            </button>
          ))}
        </div>

        {(filter === 'puissance' || filter === 'marque') && (
          <div className="flex flex-wrap justify-center gap-2 -mt-4 mb-8">
            {(filter === 'puissance'
              ? [{ id: null, label: 'Toutes les puissances' }, ...POWER_RANGES]
              : [{ id: null, label: 'Toutes les marques' }, ...BRANDS.map(b => ({ id: b, label: b }))]
            ).map((o) => {
              const active = (filter === 'puissance' ? power : brand) === o.id;
              return (
                <button
                  key={o.label}
                  onClick={() => (filter === 'puissance' ? setPower(o.id as PowerRange | null) : setBrand(o.id))}
                  aria-pressed={active}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 ${
                    active
                      ? 'bg-green-pale text-green border-green/40'
                      : 'bg-white text-charcoal-light border-border-light hover:border-green/30'
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        )}

        {filter === 'all' && (
          <div className="card bg-green-pale/40 border-green/20 mb-6 flex items-start gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-green-dark text-white">Recommandation novembre 2026</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-pale text-amber-dark">Meilleur rapport qualit&eacute;-prix</span>
              </div>
              <p className="font-bold text-base text-charcoal mb-1">
                <Link href="/avis/beem-on-500w" className="hover:text-green transition-colors">
                  {BEEM.name} &mdash; {priceLabel('beem-on-500w')} &bull; {(BEEM.priceEur / BEEM.powerWc).toLocaleString('fr-FR', { maximumFractionDigits: 2 })} &euro;/Wc &bull; ROI ~{beemRoi} ans
                </Link>
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                500 Wc bifacial TOPCon, micro-onduleur int&eacute;gr&eacute;, app Beem, garantie 25 ans syst&egrave;me. La r&eacute;f&eacute;rence &laquo;&thinsp;meilleur prix&thinsp;&raquo; pour un balcon standard, mais en pr&eacute;commande&nbsp;: {BEEM.availabilityNote} (v&eacute;rifi&eacute; le 5 novembre 2026).
              </p>
            </div>
            <Link href="/avis/beem-on-500w" className="btn-primary text-sm flex-shrink-0">
              Voir l&rsquo;avis &rarr;
            </Link>
          </div>
        )}

        <p className="text-xs text-stone text-center mb-6">
          {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
          {filter !== 'all' && ` dans « ${power ? POWER_RANGES.find(r => r.id === power)?.label : brand || FILTERS.find(f => f.id === filter)?.label} »`}
        </p>

        <div className="space-y-4 mb-12">
          {filteredArticles.map((a) => (
            <Link
              key={a.slug}
              href={a.slug}
              className="card-lg block hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                      a.type === 'comparatif' ? 'bg-green text-white' : 'bg-amber text-white'
                    }`}>
                      {a.type === 'comparatif' ? 'Comparatif' : 'Avis produit'}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      a.type === 'comparatif' ? 'bg-green-pale text-green' : 'bg-amber-pale text-amber-dark'
                    }`}>
                      {a.badge}
                    </span>
                    {isNew(a.publishedAt) && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-green text-white animate-pulse">
                        🆕 Nouveau
                      </span>
                    )}
                    {!isNew(a.publishedAt) && isUpdated(a.updatedAt) && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-amber-pale text-amber-dark">
                        ✨ Mis à jour
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg md:text-xl group-hover:text-green transition-colors mb-2 leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{a.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-stone">
                    <span>{new Date(a.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    {a.readTime && <><span>&middot;</span><span>{a.readTime}</span></>}
                    {a.price && <span className="font-mono font-semibold text-charcoal">{a.price}</span>}
                  </div>
                </div>

                {a.score && (
                  <div className="text-right flex-shrink-0">
                    <div className="font-mono text-2xl font-bold text-green">{a.score}</div>
                    <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">Note</div>
                  </div>
                )}
              </div>
              <span className="text-green font-semibold text-sm mt-3 inline-block">
                {a.type === 'comparatif' ? 'Lire le comparatif' : 'Lire l\'avis complet'} →
              </span>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="card-lg text-center mb-12">
            <p className="text-charcoal-light">Aucun article ne correspond à ce filtre pour le moment.</p>
            <button
              onClick={() => selectFilter('all')}
              className="text-green font-semibold text-sm mt-3 hover:underline"
            >
              Voir tous les articles →
            </button>
          </div>
        )}

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Pas sûr de votre choix ?</p>
          <p className="text-sm text-charcoal-light mb-4">
            Notre calculateur vous recommande le kit adapté à votre situation.
          </p>
          <Link href="/calculateur" className="btn-primary inline-flex">
            Calculer mes économies →
          </Link>
        </div>
      </div>
    </section>
  );
}
