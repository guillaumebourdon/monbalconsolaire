/**
 * Catalogue du calculateur. Prix, puissance et disponibilité viennent de src/data/products.ts.
 * Les produits en rupture ou arrêtés (buyable = false) sont exclus de TOUTES les recommandations.
 */
import { zendureUrl } from '@/lib/affiliate';
import { PRODUCTS, availabilityBadge, isBuyable, type Product, type ProductId } from '@/data/products';

type CalcKitConfig = {
  productId: ProductId;
  /** Nom affiché si différent du catalogue. */
  name?: string;
  trackingName?: string;
  /** Puissance et prix du kit complet si le produit est vendu sans panneaux (pack). */
  power?: number;
  price?: number;
  hasBattery: boolean;
  affiliateUrl: string;
  minWidth: 'narrow' | 'medium' | 'wide';
  editorial?: string;
};

const CALC_KITS: CalcKitConfig[] = [
  // GO : en stock mais sa fiche renvoie vers l'accueil Sunology (05/11/2026) → bouton vers notre avis
  { productId: 'sunology-go', hasBattery: false, affiliateUrl: '', minWidth: 'narrow' },
  { productId: 'beem-kit-300w', hasBattery: false, affiliateUrl: 'https://beemenergy.fr/products/kit-beem', minWidth: 'narrow' },
  { productId: 'sunology-play', name: 'Sunology PLAY (ex-PLAY 2)', trackingName: 'Sunology PLAY', hasBattery: false, affiliateUrl: 'https://sunology.eu/products/play-kit-solaire-plug-play', minWidth: 'medium' },
  { productId: 'beem-on-500w', hasBattery: false, affiliateUrl: 'https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge', minWidth: 'medium' },
  { productId: 'sunethic-f500', hasBattery: false, affiliateUrl: 'https://sunethic.fr/produits', minWidth: 'medium' },
  { productId: 'sunology-play-max', trackingName: 'Sunology PLAYMax', hasBattery: true, affiliateUrl: 'https://sunology.eu/products/playmax-station-solaire-batterie', minWidth: 'medium' },
  // Packs batterie + 2 panneaux (prix du pack vérifié le 05/11/2026 sur le site du fabricant)
  { productId: 'zendure-solarflow-800-plus', name: 'Zendure SolarFlow 800 Plus + 2 × 500 W', power: 1000, price: 719, hasBattery: true, affiliateUrl: zendureUrl('https://zendure.fr/products/solarflow-800-plus'), minWidth: 'wide' },
  { productId: 'bluetti-balco-260', name: 'Bluetti Balco 260 + 2 × 450 W', power: 900, price: 1079, hasBattery: true, affiliateUrl: 'https://fr.bluettipower.eu/products/bluetti-balco-260', minWidth: 'wide' },
  // DualSun PREASY retiré : vendu sur devis uniquement, aucun prix public vérifiable (05/11/2026)
];

export const KITS = CALC_KITS.map((c) => {
  const p: Product = PRODUCTS[c.productId];
  return {
    id: c.productId as string,
    name: c.name ?? p.name,
    trackingName: c.trackingName,
    brand: p.brand,
    power: c.power ?? p.powerWc,
    price: c.price ?? p.priceEur,
    hasBattery: c.hasBattery,
    slug: p.reviewSlug ?? '/avis',
    affiliateUrl: c.affiliateUrl,
    minWidth: c.minWidth,
    editorial: c.editorial,
    availability: p.availability,
    availabilityBadge: availabilityBadge(c.productId),
    buyable: isBuyable(c.productId),
  };
});

