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

/** Sections dont chaque article a une image Open Graph générée (`[slug]/opengraph-image`). */
const ARTICLE_SECTIONS = ['avis', 'blog', 'guide', 'comparatif'] as const;

/** Chemin de l'article si l'URL est une page d'article (/avis/x, /blog/x…), sinon null. */
function articlePath(url: string): string | null {
  const path = url.replace(SITE_URL, '').replace(/\/$/, '');
  const m = path.match(/^\/(avis|blog|guide|comparatif)\/[^/]+$/);
  return m && (ARTICLE_SECTIONS as readonly string[]).includes(m[1]) ? path : null;
}

/** Image Open Graph d'une page : celle de l'article si elle existe, sinon celle du site. */
export function ogImageFor(url: string): string {
  const path = articlePath(url);
  return path ? `${SITE_URL}${path}/opengraph-image` : `${SITE_URL}/opengraph-image`;
}

/**
 * Titre affiché dans l'onglet. Les articles (avis, blog, guide, comparatif) n'ont
 * pas le suffixe « | MonBalconSolaire » (titres trop longs dans Google) ; l'accueil
 * et les pages hub le gardent via le gabarit du layout racine.
 */
function fullTitle(title: Metadata['title'], isArticle: boolean): string | undefined {
  if (!title) return undefined;
  if (typeof title === 'string') return isArticle ? title : `${title} | MonBalconSolaire`;
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
  const isArticle = articlePath(url) !== null;
  const title = fullTitle(meta.title, isArticle);
  const description = meta.description ?? undefined;
  const fromPage = {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
  };
  // Next.js ne fusionne pas les images Open Graph du layout : on les fixe ici.
  const image = ogImageFor(url);
  const images = [{ url: image, width: 1200, height: 630, alt: title ?? SITE_OPEN_GRAPH.title }];
  return {
    ...meta,
    // Articles : titre sans suffixe de marque (gabarit du layout ignoré).
    ...(isArticle && typeof meta.title === 'string' ? { title: { absolute: meta.title } } : {}),
    openGraph: { ...SITE_OPEN_GRAPH, images, ...fromPage, ...meta.openGraph, url } as Metadata['openGraph'],
    twitter: { card: 'summary_large_image', images: [image], ...fromPage, ...meta.twitter } as Metadata['twitter'],
  };
}
