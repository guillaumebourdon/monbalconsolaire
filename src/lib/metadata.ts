import type { Metadata } from 'next';

export const SITE_URL = 'https://monbalconsolaire.fr';

/** Open Graph par défaut du site (hérité par toutes les pages). */
export const SITE_OPEN_GRAPH = {
  type: 'website',
  locale: 'fr_FR',
  siteName: 'MonBalconSolaire',
  title: 'MonBalconSolaire — Le guide indépendant du solaire de balcon',
  description:
    'Comparez les kits solaires, calculez vos économies réelles et passez au solaire sans travaux.',
} as const;

/** Titre affiché dans l'onglet, tel que le produit le gabarit du layout racine. */
function fullTitle(title: Metadata['title']): string | undefined {
  if (!title) return undefined;
  if (typeof title === 'string') return `${title} | MonBalconSolaire`;
  if ('absolute' in title && title.absolute) return title.absolute;
  if ('default' in title && title.default) return title.default;
  return undefined;
}

/**
 * Aligne l'Open Graph et la carte Twitter sur la page.
 *
 * Next.js remplace l'objet `openGraph` du layout par celui de la page (pas de
 * fusion profonde) et ne déduit jamais og:url du canonical, ni og:title et
 * og:description du titre et de la description : sans ce helper, chaque page
 * héritait de l'URL, du titre et du résumé de l'accueil au partage. On reprend
 * donc les valeurs Open Graph par défaut, puis le titre et la description de la
 * page, puis celles que la page fixe elle-même, et on force url = canonical.
 */
export function withCanonicalOg(meta: Metadata): Metadata {
  const canonical = meta.alternates?.canonical;
  if (!canonical) return meta;
  const url =
    typeof canonical === 'string'
      ? canonical
      : canonical instanceof URL
        ? canonical.toString()
        : canonical.url.toString();
  const title = fullTitle(meta.title);
  const description = meta.description ?? undefined;
  const fromPage = {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
  };
  return {
    ...meta,
    openGraph: { ...SITE_OPEN_GRAPH, ...fromPage, ...meta.openGraph, url } as Metadata['openGraph'],
    twitter: { card: 'summary_large_image', ...fromPage, ...meta.twitter } as Metadata['twitter'],
  };
}
