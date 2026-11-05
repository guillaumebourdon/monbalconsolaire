import Link from 'next/link';
import type { Metadata } from 'next';
import { withCanonicalOg } from '@/lib/metadata';
import { PRODUCTS, priceLabel, cardPriceLabel, type ProductId } from '@/data/products';
import { calculateROIYears } from '@/lib/pricing';

export const metadata: Metadata = withCanonicalOg({
  title: 'Avis kits solaires balcon 2026 — Analyses indépendantes et notes',
  description: 'Avis et analyses indépendantes des kits solaires plug-and-play : Sunology, Beem, Zendure, Sunethic, EcoFlow. Notes, specs et verdict.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis',
  },
});

// Prix et disponibilités : src/data/products.ts (vérifiés le 05/11/2026). ROI : lib/pricing.ts (Lyon, sud).
const roi = (id: ProductId) => {
  const p = PRODUCTS[id];
  return calculateROIYears({ kitPriceEur: p.priceEur, kitPowerWc: p.powerWc }).toLocaleString('fr-FR');
};

const reviews = [
  { slug: 'allpowers-bs2500-pro', title: 'ALLPOWERS BS2500 PRO : grosse batterie de balcon, aucun test indépendant', excerpt: `2,6 kWh, onduleur 800 W, secours 2 400 W, ${priceLabel('allpowers-bs2500-pro')} (prix promotionnel constaté le 05/11/2026). Prometteur sur le papier, avis prudent.`, badge: 'Nouveau', score: '6/10', price: cardPriceLabel('allpowers-bs2500-pro') },
  { slug: 'ecoflow-stream-ultra', title: 'EcoFlow STREAM Ultra\u00a0: le successeur tout-en-un du PowerStream', excerpt: `Batterie 1,92\u00a0kWh + micro-onduleur 800\u00a0W intégrés, extensible, sortie secours. ${priceLabel('ecoflow-stream-ultra')} seul (prix promotionnel constaté le 05/11/2026).`, badge: 'Batterie + secours', score: '7.5/10', price: cardPriceLabel('ecoflow-stream-ultra') },
  { slug: 'sunology-go', title: `Sunology GO\u00a0: le kit compact à ${priceLabel('sunology-go')}, au sol ou sur garde-corps`, excerpt: `${PRODUCTS['sunology-go'].powerWc}\u00a0W, ${priceLabel('sunology-go')}, pose au sol ou garde-corps sans perçage. Le kit d\u2019entrée qui remplace le CITY chez Sunology.`, badge: 'Compact', score: '7/10', price: cardPriceLabel('sunology-go') },
  { slug: 'hoymiles-hms-800w', title: 'Hoymiles HMS-800W-2T\u00a0: le micro-onduleur de référence pour kits DIY', excerpt: '2 MPPT indépendants, WiFi intégré sans DTU, rendement 96,7\u00a0%. Environ 170\u00a0€ (Wattuneed, 05/11/2026). Le choix des bricoleurs informés.', badge: 'Micro-onduleur', score: '8.5/10', price: '~170 €' },
  { slug: 'anker-solix-rs40p', title: 'Anker SOLIX RS40P\u00a0: le kit balcon 910\u00a0Wc d\u2019Anker', excerpt: '2\u00d7455\u00a0W IBC N-type, onduleur WiFi 800\u00a0W. Plus vendu sur la boutique Anker SOLIX France au 05/11/2026.', badge: 'Plus vendu en France', score: '7.5/10', price: 'Arrêté (FR)' },
  { slug: 'zendure-solarflow-mix', title: 'Zendure SolarFlow Mix : le tout-en-un résidentiel 2026', excerpt: `3 modèles, stockage LFP extensible, 4\u00a0kW bidirectionnel. Zendure passe du balcon à la maison entière. À partir de ${priceLabel('zendure-solarflow-mix')}.`, badge: 'Premium', score: '8/10', price: cardPriceLabel('zendure-solarflow-mix') },
  { slug: 'jackery-solarvault-3-pro', title: 'Jackery SolarVault 3 Pro : stockage 2,5\u00a0kWh LFP', excerpt: `Batterie LFP 2,52\u00a0kWh + 4\u00a0MPPT pour 4\u00a0000\u00a0W. Garantie 10\u00a0ans. ${priceLabel('jackery-solarvault-3-pro')} seul, 959\u00a0€ avec 2 panneaux de 450\u00a0W (promo constatée le 05/11/2026).`, badge: 'Stockage LFP', score: '8/10', price: cardPriceLabel('jackery-solarvault-3-pro') },
  { slug: 'bluetti-balco-260', title: 'Bluetti Balco 260 : le tout-en-un onduleur + batterie', excerpt: `Onduleur SiC + batterie LFP 2,56 kWh + 4 MPPT dans un seul boîtier IP65. ${priceLabel('bluetti-balco-260')} sans panneaux (promo constatée le 05/11/2026).`, badge: 'Stockage tout-en-un', score: '7/10', price: cardPriceLabel('bluetti-balco-260') },
  { slug: 'beem-on-500w', title: 'Beem On 500 Wc : le meilleur prix au watt, en précommande', excerpt: `${priceLabel('beem-on-500w')} pour 500 Wc bifacial TOPCon, aussi chez Leroy Merlin. Précommande chez Beem, ${PRODUCTS['beem-on-500w'].availabilityNote}.`, badge: 'Qualité/prix', score: '8.5/10', price: cardPriceLabel('beem-on-500w') },
  { slug: 'ikea-solstrale-balcon', title: 'Kit solaire balcon IKEA (STREAM) : disponible en France ?', excerpt: 'En Allemagne, le « STREAM Komplettset » (2 × 500 W + EcoFlow STREAM) est vendu via Svea Solar à 369,90 €. Pas disponible en France au 05/11/2026.', badge: 'Analyse', score: '\u2014', price: 'Non vendu en France' },
  { slug: 'dualsun-preasy', title: 'DualSun PREASY : le challenger Made in France', excerpt: 'Panneau pliable 420 Wc, assemblé en France, design aspect bois. Désormais vendu sur devis uniquement : pas de prix public.', badge: 'Made in France', score: '6.5/10', price: cardPriceLabel('dualsun-preasy') },
  { slug: 'zendure-solarflow', title: 'Zendure SolarFlow 800 Plus : batterie + onduleur, avis', excerpt: `Batterie 1,92 kWh + onduleur 800 W intégrés. ${priceLabel('zendure-solarflow-800-plus')} sans panneaux, 719\u00a0€ en pack 2\u00a0×\u00a0500\u00a0W (promo constatée le 05/11/2026).`, badge: 'Qualité/prix', score: '8.5/10', price: cardPriceLabel('zendure-solarflow-800-plus') },
  { slug: 'sunology-play-2', title: 'Sunology PLAY (ex-PLAY 2) : avis et analyse complète', excerpt: `La version ${PRODUCTS['sunology-play'].powerWc} W du kit le plus vendu de Sunology. ${priceLabel('sunology-play')}, ROI ${roi('sunology-play')} ans (Lyon, sud), installation en quelques minutes.`, badge: 'Choix n\u00b01', score: '8.5/10', price: cardPriceLabel('sunology-play') },
  { slug: 'beem-on-460w', title: 'Beem On 460W : avis (retiré du catalogue)', excerpt: 'Retiré du catalogue Beem en novembre 2026 et remplacé par le Beem On 500 Wc. Notre analyse reste en ligne.', badge: 'Arrêté', score: '8/10', price: cardPriceLabel('beem-on-460w') },
  { slug: 'sunethic-f500', title: 'Sunethic F500 : avis du kit Made in France', excerpt: `Panneau Voltec assemblé en Alsace, 500 Wc, ${priceLabel('sunethic-f500')} (ROI ${roi('sunethic-f500')} ans). Que vaut la marque Sunethic : SAV, garanties, avis clients.`, badge: 'Made in France', score: '7.5/10', price: cardPriceLabel('sunethic-f500') },
  { slug: 'beem-kit-300w', title: 'Beem Kit 300W : avis du kit petit budget', excerpt: `4 panneaux modulaires, ${priceLabel('beem-kit-300w')}, mais en rupture chez Beem au 05/11/2026. Avis négatifs analysés.`, badge: 'En rupture', score: '7.5/10', price: cardPriceLabel('beem-kit-300w') },
  { slug: 'sunology-play-max', title: 'Sunology PLAY MAX : kit + batterie, ça vaut le coup ?', excerpt: `Station ${PRODUCTS['sunology-play-max'].powerWc}\u00a0W + batterie 700 Wh à ${priceLabel('sunology-play-max')} (prix au panier). Stockez le solaire pour le soir.`, badge: 'Kit + batterie', score: '8/10', price: cardPriceLabel('sunology-play-max') },
  { slug: 'ecoflow-powerstream', title: 'EcoFlow PowerStream : analyse complète (arrêté)', excerpt: 'Plus vendu par EcoFlow France (remplacé par la gamme STREAM). Notre analyse et les alternatives.', badge: 'Arrêté', score: '8/10', price: 'Arrêté' },
  { slug: 'sunology-city', title: 'Sunology CITY : le kit pour balcons étroits (arrêté)', excerpt: 'Plus vendu par Sunology (remplacé par le GO). Notre analyse du kit garde-corps et les alternatives actuelles.', badge: 'Arrêté', score: '7.5/10', price: 'Arrêté' },
];

export default function AvisIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-amber mb-4 inline-block">Avis et analyses</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Avis et analyses de kits solaires</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Des avis detailles, sources et honnetes sur les kits solaires plug-and-play les plus populaires en France.</p>
        <div className="space-y-6">
          {reviews.map((r) => (
            <Link key={r.slug} href={`/avis/${r.slug}`} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="badge-green mb-2">{r.badge}</div>
                  <h2 className="font-bold text-xl group-hover:text-green transition-colors">{r.title}</h2>
                  <p className="text-sm text-charcoal-light mt-2 max-w-lg">{r.excerpt}</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-bold text-green">{r.score}</div>
                  <div className="text-sm text-stone font-mono">{r.price}</div>
                </div>
              </div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire l&apos;avis complet &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
