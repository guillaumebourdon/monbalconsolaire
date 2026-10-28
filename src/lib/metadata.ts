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

/**
 * Aligne og:url sur le canonical de la page.
 *
 * Next.js remplace l'objet `openGraph` du layout par celui de la page (pas de
 * fusion profonde) et ne déduit jamais og:url du canonical : sans ce helper,
 * chaque page héritait de og:url = accueil. On reprend donc les valeurs Open
 * Graph par défaut, celles de la page, puis on force url = canonical.
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
  return {
    ...meta,
    openGraph: { ...SITE_OPEN_GRAPH, ...meta.openGraph, url } as Metadata['openGraph'],
  };
}
