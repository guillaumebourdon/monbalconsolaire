export function SchemaOrganization() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MonBalconSolaire',
    url: 'https://monbalconsolaire.vercel.app',
    logo: 'https://monbalconsolaire.vercel.app/logo.png',
    description: 'Le guide indépendant des kits solaires pour balcon et appartement en France.',
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: 'Guillaume Bourdon',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Beeleven SASU',
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
    url: 'https://monbalconsolaire.vercel.app',
    description: 'Comparez les meilleurs kits solaires pour balcon, calculez vos économies réelles et passez au solaire sans travaux.',
    publisher: {
      '@type': 'Organization',
      name: 'MonBalconSolaire',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://monbalconsolaire.vercel.app/blog?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
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
    image: image || 'https://monbalconsolaire.vercel.app/og-default.png',
    author: {
      '@type': 'Organization',
      name: 'MonBalconSolaire',
      url: 'https://monbalconsolaire.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MonBalconSolaire',
      logo: {
        '@type': 'ImageObject',
        url: 'https://monbalconsolaire.vercel.app/logo.png',
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
