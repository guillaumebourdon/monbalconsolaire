import { MetadataRoute } from 'next';

const BASE_URL = 'https://monbalconsolaire.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Pages principales
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/calculateur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/comment-ca-marche`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/quel-kit-choisir`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tout-savoir`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/accessoires`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/guide-gratuit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Index de sections
    { url: `${BASE_URL}/comparatif`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/avis`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },

    // Comparatifs
    { url: `${BASE_URL}/comparatif/meilleur-kit-solaire-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/comparatif/sunology-vs-beem`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/kit-solaire-petit-budget`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/kit-solaire-batterie-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/300w-vs-400w-vs-500w-puissance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Guides
    { url: `${BASE_URL}/guide/panneau-solaire-balcon-debutant`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/panneau-solaire-balcon-locataire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/installer-kit-solaire-balcon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/orientation-panneau-solaire-balcon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/reglementation-panneau-solaire-balcon-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/panneau-solaire-copropriete`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/declaration-cacsi-enedis-panneau-solaire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Avis produits
    { url: `${BASE_URL}/avis/sunology-play-2`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/avis/beem-on-460w`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/avis/sunethic-f500`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/beem-kit-300w`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/sunology-play-max`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/sunology-city`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/ecoflow-powerstream`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Blog
    { url: `${BASE_URL}/blog/combien-rapporte-panneau-solaire-balcon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/prix-electricite-2026-solaire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-hiver-production`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/autoconsommation-solaire-comment-ca-marche`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/accessoires-kit-solaire-balcon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/kit-solaire-plug-and-play-arnaque`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-balcon-nord`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/mini-kits-solaires-amazon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/batteries-portables-solaires-comparatif`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/lampes-solaires-balcon-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-ombre-optimiser-production`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Pages secondaires
    { url: `${BASE_URL}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ];
}
