import { MetadataRoute } from 'next';

const BASE_URL = 'https://monbalconsolaire.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/calculateur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // Category indexes
    { url: `${BASE_URL}/comparatif`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/avis`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    // Articles
    { url: `${BASE_URL}/comparatif/meilleur-kit-solaire-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/guide/panneau-solaire-balcon-debutant`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/panneau-solaire-balcon-locataire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/avis/sunology-play-2`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog/combien-rapporte-panneau-solaire-balcon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Static pages
    { url: `${BASE_URL}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.1 },
  ];
}
