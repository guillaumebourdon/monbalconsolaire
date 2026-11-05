/**
 * Catalogue produits : SOURCE UNIQUE des prix, puissances et disponibilités.
 *
 * Règles (voir CLAUDE.md) :
 * - Un prix ou une puissance ne s'écrit pas en dur dans une page : importer PRODUCTS / priceLabel().
 * - Chaque valeur est vérifiée sur la fiche officielle du fabricant (ou du marchand cité) le jour
 *   indiqué dans `verifiedOn`. Si le marchand bloque la vérification, on garde la dernière valeur
 *   vérifiée et sa date, sans l'inventer.
 * - `outofstock` et `discontinued` : jamais recommandés par le calculateur ni en CTA principal.
 */

export type Availability = 'instock' | 'preorder' | 'outofstock' | 'discontinued';

export type Product = {
  id: string;
  name: string;
  brand: string;
  /** Puissance crête des panneaux fournis (Wc). 0 si vendu sans panneaux. */
  powerWc: number;
  /** Puissance AC du micro-onduleur / de la sortie (W), si utile. */
  inverterW?: number;
  /** Capacité de batterie (kWh), si le produit en a une. */
  batteryKwh?: number;
  /** Prix TTC constaté sur la page officielle, en euros. */
  priceEur: number;
  /** Précision sur le prix (« sans panneaux », « à partir de », prix promo et sa fin…). */
  priceNote?: string;
  availability: Availability;
  /** Texte de disponibilité tel qu'affiché par le marchand (ex. date d'expédition). */
  availabilityNote?: string;
  /** Date de vérification du prix et de la disponibilité (AAAA-MM-JJ). */
  verifiedOn: string;
  /** Page marchande officielle (sans tracking) utilisée pour la vérification. */
  url: string;
  /** Page d'avis du site. */
  reviewSlug?: string;
  /** Photo produit dans public/images/produits. */
  image?: string;
  /** Produit qui remplace celui-ci (produits arrêtés). */
  successorId?: string;
};

const CATALOG = {
  'sunology-play': {
    id: 'sunology-play',
    name: 'Sunology PLAY',
    brand: 'Sunology',
    powerWc: 515,
    priceEur: 599,
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://sunology.eu/products/play-kit-solaire-plug-play',
    reviewSlug: '/avis/sunology-play-2',
    image: '/images/produits/sunology-play-2-1.webp',
  },
  'sunology-play-max': {
    id: 'sunology-play-max',
    name: 'Sunology PLAY MAX',
    brand: 'Sunology',
    powerWc: 460,
    batteryKwh: 0.7,
    priceEur: 1179,
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://sunology.eu/products/playmax-station-solaire-batterie',
    reviewSlug: '/avis/sunology-play-max',
    image: '/images/produits/sunology-play-max-1.webp',
    priceNote: '1 079 € en promotion jusqu’au 4 décembre 2026',
  },
  'sunology-go': {
    id: 'sunology-go',
    name: 'Sunology GO',
    brand: 'Sunology',
    powerWc: 270,
    priceEur: 349,
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://sunology.eu/products/kit-solaire-1-station-go-balcon-garde-corps',
    reviewSlug: '/avis/sunology-go',
    inverterW: 300,
    availabilityNote: 'en stock, mais la fiche produit redirige vers l’accueil Sunology au 05/11/2026',
  },
  'sunology-city': {
    id: 'sunology-city',
    name: 'Sunology CITY',
    brand: 'Sunology',
    powerWc: 300,
    priceEur: 599,
    priceNote: 'dernier prix relevé sur sunology.eu, octobre 2025',
    availability: 'discontinued',
    availabilityNote: 'stocks épuisés (copie d’archive du 11/10/2025)',
    verifiedOn: '2026-11-05',
    url: 'https://web.archive.org/web/20251011005637/https://sunology.eu/products/city-kit-solaire-balcon-appartement',
    reviewSlug: '/avis/sunology-city',
    successorId: 'sunology-go',
  },
  'beem-on-500w': {
    id: 'beem-on-500w',
    name: 'Beem On 500 Wc',
    brand: 'Beem Energy',
    powerWc: 500,
    priceEur: 429,
    availability: 'preorder',
    availabilityNote: 'expédition à partir de décembre 2026',
    verifiedOn: '2026-11-05',
    url: 'https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge',
    reviewSlug: '/avis/beem-on-500w',
    image: '/images/produits/beem-on-500-1.webp',
  },
  'beem-on-460w': {
    id: 'beem-on-460w',
    name: 'Beem On 460W (extension)',
    brand: 'Beem Energy',
    powerWc: 460,
    priceEur: 429,
    priceNote: 'dernier prix relevé (extension), plus au catalogue Beem',
    availability: 'discontinued',
    verifiedOn: '2026-11-05',
    url: 'https://beemenergy.fr/products/beem-on-station-solaire-pret-a-brancher?variant=54387872170369',
    reviewSlug: '/avis/beem-on-460w',
    successorId: 'beem-on-500w',
  },
  'beem-kit-300w': {
    id: 'beem-kit-300w',
    name: 'Beem Kit 300W',
    brand: 'Beem Energy',
    powerWc: 300,
    priceEur: 199,
    availability: 'outofstock',
    verifiedOn: '2026-11-05',
    url: 'https://beemenergy.fr/products/kit-beem',
    reviewSlug: '/avis/beem-kit-300w',
    image: '/images/produits/beem-kit-300-1.webp',
    availabilityNote: 'aucune variante disponible sur beemenergy.fr au 05/11/2026',
  },
  'sunethic-f500': {
    id: 'sunethic-f500',
    name: 'Sunethic F500',
    brand: 'Sunethic',
    powerWc: 500,
    priceEur: 690,
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://www.sunethic.fr/product/station-solaire-sunethic-f500/',
    reviewSlug: '/avis/sunethic-f500',
    image: '/images/produits/sunethic-f500-2.webp',
  },
  'zendure-solarflow-800-plus': {
    id: 'zendure-solarflow-800-plus',
    name: 'Zendure SolarFlow 800 Plus',
    brand: 'Zendure',
    powerWc: 0,
    inverterW: 800,
    batteryKwh: 1.92,
    priceEur: 539,
    priceNote: 'sans panneaux (pack 2 × 500 W bifaciaux : 719 €)',
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://zendure.fr/products/solarflow-800-plus',
    reviewSlug: '/avis/zendure-solarflow',
    image: '/images/produits/zendure-solarflow-front.webp',
  },
  'zendure-solarflow-mix': {
    id: 'zendure-solarflow-mix',
    name: 'Zendure SolarFlow Mix',
    brand: 'Zendure',
    powerWc: 0,
    priceEur: 1999,
    priceNote: 'à partir de',
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://zendure.fr/products/solarflow-mix-series',
    reviewSlug: '/avis/zendure-solarflow-mix',
  },
  'anker-solix-rs40p': {
    id: 'anker-solix-rs40p',
    name: 'Anker SOLIX RS40P',
    brand: 'Anker SOLIX',
    powerWc: 910,
    inverterW: 800,
    priceEur: 799,
    availability: 'discontinued',
    verifiedOn: '2026-07-17',
    url: 'https://www.ankersolix.com/fr',
    reviewSlug: '/avis/anker-solix-rs40p',
    priceNote: 'dernier prix relevé le 17/07/2026',
    availabilityNote: 'plus vendu sur la boutique Anker SOLIX France au 05/11/2026',
  },
  'hoymiles-hms-800w-2t': {
    id: 'hoymiles-hms-800w-2t',
    name: 'Hoymiles HMS-800W-2T',
    brand: 'Hoymiles',
    powerWc: 0,
    inverterW: 800,
    priceEur: 169,
    priceNote: 'prix constaté chez Wattuneed (169,40 €)',
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://www.wattuneed.com/fr/onduleurs-et-convertisseurs/27196-micro-onduleur-hoymiles-hms-800w-2t-800-w-0768563818981.html',
    reviewSlug: '/avis/hoymiles-hms-800w',
  },
  'bluetti-balco-260': {
    id: 'bluetti-balco-260',
    name: 'Bluetti Balco 260',
    brand: 'Bluetti',
    powerWc: 0,
    batteryKwh: 2.56,
    priceEur: 789,
    priceNote: 'sans panneaux (pack 2 × 450 W : 1 079 €)',
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://fr.bluettipower.eu/products/bluetti-balco-260',
    reviewSlug: '/avis/bluetti-balco-260',
    image: '/images/produits/bluetti-balco-260-front.webp',
  },
  'jackery-solarvault-3-pro': {
    id: 'jackery-solarvault-3-pro',
    name: 'Jackery SolarVault 3 Pro',
    brand: 'Jackery',
    powerWc: 0,
    batteryKwh: 2.52,
    priceEur: 719,
    priceNote: 'sans panneaux (pack 2 × 450 W : 959 €)',
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://fr.jackery.com/products/solarvault-3-pro',
    reviewSlug: '/avis/jackery-solarvault-3-pro',
    image: '/images/produits/jackery-solarvault-3-pro-1.webp',
  },
  'dualsun-preasy': {
    id: 'dualsun-preasy',
    name: 'DualSun PREASY',
    brand: 'DualSun',
    powerWc: 420,
    priceEur: 870,
    availability: 'instock',
    verifiedOn: '2026-05-15',
    url: 'https://dualsun.com/produits/dualsun-preasy/',
    reviewSlug: '/avis/dualsun-preasy',
    priceNote: 'dernier prix relevé chez un revendeur le 15/05/2026 ; DualSun ne vend que sur devis',
    availabilityNote: 'sur devis uniquement (aucun prix affiché sur dualsun.com au 05/11/2026)',
  },
  'ecoflow-stream-ultra': {
    id: 'ecoflow-stream-ultra',
    name: 'EcoFlow STREAM Ultra',
    brand: 'EcoFlow',
    powerWc: 0,
    inverterW: 800,
    batteryKwh: 1.92,
    priceEur: 659,
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://fr.ecoflow.com/products/stream-ultra-pro',
    reviewSlug: '/avis/ecoflow-stream-ultra',
    priceNote: 'seul, sans panneaux',
  },
  'ecoflow-powerstream': {
    id: 'ecoflow-powerstream',
    name: 'EcoFlow PowerStream',
    brand: 'EcoFlow',
    powerWc: 0,
    inverterW: 800,
    priceEur: 0,
    availability: 'discontinued',
    verifiedOn: '2026-11-05',
    url: 'https://fr.ecoflow.com/',
    reviewSlug: '/avis/ecoflow-powerstream',
    image: '/images/produits/ecoflow-powerstream-2.webp',
    successorId: 'ecoflow-stream-ultra',
  },
  'allpowers-bs2500-pro': {
    id: 'allpowers-bs2500-pro',
    name: 'ALLPOWERS BS2500 PRO',
    brand: 'ALLPOWERS',
    powerWc: 0,
    inverterW: 800,
    batteryKwh: 2.6,
    priceEur: 999,
    availability: 'instock',
    verifiedOn: '2026-11-05',
    url: 'https://iallpowers.eu/fr/products/bs2500',
    reviewSlug: '/avis/allpowers-bs2500-pro',
  },
} satisfies Record<string, Product>;

export type ProductId = keyof typeof CATALOG;
export const PRODUCTS: Record<ProductId, Product> = CATALOG;

export function getProduct(id: ProductId): Product {
  return PRODUCTS[id];
}

/** Prix formaté « 1 099 € » (espace insécable), précédé de la précision éventuelle « à partir de ». */
export function priceLabel(id: ProductId, opts: { withNote?: boolean } = {}): string {
  const p: Product = PRODUCTS[id];
  const amount = `${p.priceEur.toLocaleString('fr-FR').replace(/ /g, ' ')} €`;
  if (opts.withNote && p.priceNote === 'à partir de') return `à partir de ${amount}`;
  return amount;
}

/** Date de vérification au format « 5 novembre 2026 ». */
export function verifiedLabel(id: ProductId): string {
  return new Date(`${PRODUCTS[id].verifiedOn}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' });
}

export const SCHEMA_AVAILABILITY: Record<Availability, 'InStock' | 'PreOrder' | 'OutOfStock' | 'Discontinued'> = {
  instock: 'InStock',
  preorder: 'PreOrder',
  outofstock: 'OutOfStock',
  discontinued: 'Discontinued',
};

/** Le produit peut-il être recommandé (calculateur, CTA principal) ? */
export function isBuyable(id: ProductId): boolean {
  const a = PRODUCTS[id].availability;
  return a === 'instock' || a === 'preorder';
}

/** Libellé de disponibilité court pour badge (null si en stock). */
export function availabilityBadge(id: ProductId): string | null {
  const p: Product = PRODUCTS[id];
  switch (p.availability) {
    case 'preorder':
      return `Précommande${p.availabilityNote ? ` – ${p.availabilityNote}` : ''}`;
    case 'outofstock':
      return 'En rupture de stock';
    case 'discontinued':
      return 'Arrêté';
    default:
      return null;
  }
}

/** Prix court pour les cartes et index : « 429 € (précommande) », « Arrêté », « 199 € (rupture) ». */
export function cardPriceLabel(id: ProductId): string {
  const p: Product = PRODUCTS[id];
  if (p.availability === 'discontinued') return 'Arrêté';
  if (p.availabilityNote?.startsWith('sur devis')) return 'Sur devis';
  const base = p.priceNote === 'à partir de' ? `dès ${priceLabel(id)}` : priceLabel(id);
  if (p.availability === 'outofstock') return `${base} (rupture)`;
  if (p.availability === 'preorder') return `${base} (précommande)`;
  return base;
}

/** Correspondance page d'avis → produit du catalogue. */
export const REVIEW_PRODUCT: Record<string, ProductId> = Object.fromEntries(
  (Object.values(PRODUCTS) as Product[])
    .filter((p) => p.reviewSlug)
    .map((p) => [p.reviewSlug!.replace('/avis/', ''), p.id as ProductId]),
);
