import { ogImageFor } from '@/lib/metadata';

export function SchemaOrganization() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MonBalconSolaire',
    url: 'https://monbalconsolaire.fr',
    logo: 'https://monbalconsolaire.fr/favicon.png',
    description: 'Le guide indépendant des kits solaires pour balcon et appartement en France.',
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: 'Guillaume Bourdon',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Beeleven SASU',
      legalName: 'Beeleven SASU',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7 rue Curial',
        postalCode: '75019',
        addressLocality: 'Paris',
        addressCountry: 'FR',
      },
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaWebSite() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MonBalconSolaire',
    url: 'https://monbalconsolaire.fr',
    description: 'Comparez les meilleurs kits solaires pour balcon, calculez vos économies réelles et passez au solaire sans travaux.',
    inLanguage: 'fr-FR',
    publisher: {
      '@type': 'Organization',
      name: 'MonBalconSolaire',
      url: 'https://monbalconsolaire.fr',
    },
    // Pas de SearchAction : aucune page du site ne lit un paramètre de recherche dans l'URL.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaArticle({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    // Même image que og:image (route [slug]/opengraph-image pour les articles).
    image: image || ogImageFor(url),
    author: {
      '@type': 'Person',
      name: 'Guillaume Bourdon',
      url: 'https://monbalconsolaire.fr/a-propos',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MonBalconSolaire',
      url: 'https://monbalconsolaire.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://monbalconsolaire.fr/favicon.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaProduct({
  name,
  brand,
  description,
  price,
  currency = 'EUR',
  ratingValue,
  ratingMax = 10,
  reviewAuthor = 'MonBalconSolaire',
  url,
  availability = 'InStock',
  image,
}: {
  name: string;
  brand: string;
  description: string;
  price: number;
  currency?: string;
  ratingValue: number;
  ratingMax?: number;
  reviewAuthor?: string;
  availability?: 'InStock' | 'PreOrder' | 'OutOfStock' | 'Discontinued';
  url: string;
  /** Chemin (/images/produits/…) ou URL absolue de la photo produit. */
  image?: string;
}) {
  // Pas d'aggregateRating : une seule note éditoriale, ce n'est pas un agrégat d'avis clients.
  const imageUrl = image
    ? image.startsWith('http') ? image : `https://monbalconsolaire.fr${image}`
    : ogImageFor(url);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image: imageUrl,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    description,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url,
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue,
        bestRating: ratingMax,
        worstRating: 1,
      },
      author: {
        '@type': 'Organization',
        name: reviewAuthor,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaFAQ({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaBreadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  const allItems = [{ label: 'Accueil', href: '/' }, ...items];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    name: `Fil d'Ariane : ${allItems.map((item) => item.label).join(' > ')}`,
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://monbalconsolaire.fr${item.href}` } : {}),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function SchemaDataset({
  name,
  description,
  url,
  license,
  dateModified,
  temporalCoverage,
  spatialCoverage,
  variableMeasured,
  keywords,
  distribution,
  isBasedOn,
}: {
  name: string;
  description: string;
  url: string;
  license: string;
  dateModified: string;
  temporalCoverage: string;
  spatialCoverage: string;
  variableMeasured: { name: string; unitText?: string; description?: string }[];
  keywords?: string[];
  distribution?: { contentUrl: string; encodingFormat: string };
  isBasedOn?: string[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name,
    description,
    url,
    license,
    dateModified,
    temporalCoverage,
    inLanguage: 'fr-FR',
    isAccessibleForFree: true,
    spatialCoverage: { '@type': 'Place', name: spatialCoverage },
    variableMeasured: variableMeasured.map((v) => ({ '@type': 'PropertyValue', ...v })),
    ...(keywords ? { keywords } : {}),
    ...(isBasedOn ? { isBasedOn } : {}),
    ...(distribution ? { distribution: { '@type': 'DataDownload', ...distribution } } : {}),
    creator: { '@type': 'Organization', name: 'MonBalconSolaire', url: 'https://monbalconsolaire.fr' },
    publisher: { '@type': 'Organization', name: 'MonBalconSolaire', url: 'https://monbalconsolaire.fr' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
