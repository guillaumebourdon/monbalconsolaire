/**
 * Stats centralisées du site, calculées à partir du sitemap (aucun chiffre à incrémenter à la main).
 */
import sitemap from '@/app/sitemap';
import { KWH_PRICE_EUR, KWH_PRICE_SINCE } from '@/lib/pricing';

const ARTICLE_PATH = /^https:\/\/monbalconsolaire\.fr\/(avis|blog|guide|comparatif)\/[^/]+$/;
const urls = sitemap().map((e) => e.url);
const articles = urls.filter((u) => ARTICLE_PATH.test(u));
const lastModified = sitemap()
  .map((e) => String(e.lastModified ?? ''))
  .filter(Boolean)
  .sort()
  .pop();

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
function moisAnnee(iso?: string): string {
  if (!iso) return '';
  const [y, m] = iso.split('-');
  return `${MOIS[Number(m) - 1]} ${y}`;
}

export const siteStats = {
  // Guides + blog + comparatifs + avis présents dans le sitemap
  articlesPublies: articles.length,
  // Pages d'avis produit (y compris produits arrêtés et micro-onduleur)
  kitsAnalyses: articles.filter((u) => u.includes('/avis/')).length,
  departementsCouverts: 96, // Couverture France métropolitaine complète
  villesCouvertes: 57, // Villes avec données précises en autocomplétion

  // Dernière mise à jour des données (date la plus récente du sitemap)
  derniereMajStats: moisAnnee(lastModified),

  // Tarif EDF : repris de lib/pricing.ts (source unique)
  prixKwhEDF: KWH_PRICE_EUR,
  dateTarifEDF: KWH_PRICE_SINCE,
};
