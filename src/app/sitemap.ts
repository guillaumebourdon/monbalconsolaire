import { MetadataRoute } from 'next';
import { DEPARTMENTS } from '@/data/departments';

const BASE_URL = 'https://monbalconsolaire.fr';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const departmentPages: MetadataRoute.Sitemap = DEPARTMENTS.map(d => ({
    url: `${BASE_URL}/solaire-balcon/${slugify(d.name)}`,
    lastModified: '2026-05-10',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    // Pages principales
    { url: BASE_URL, lastModified: '2026-05-06', changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/calculateur`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/comment-ca-marche`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/quel-kit-choisir`, lastModified: '2026-05-06', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tout-savoir`, lastModified: '2026-05-06', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/accessoires`, lastModified: '2026-04-22', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/guide-gratuit`, lastModified: '2026-03-17', changeFrequency: 'monthly', priority: 0.7 },

    // Index de sections
    { url: `${BASE_URL}/comparatif`, lastModified: '2026-04-18', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/guide`, lastModified: '2026-05-06', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/avis`, lastModified: '2026-05-06', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: '2026-05-06', changeFrequency: 'daily', priority: 0.7 },

    // Comparatifs
    { url: `${BASE_URL}/comparatif/meilleur-kit-solaire-2026`, lastModified: '2026-06-20', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/comparatif/sunology-vs-beem`, lastModified: '2026-06-20', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/kit-solaire-petit-budget`, lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/kit-solaire-batterie-2026`, lastModified: '2026-06-20', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/300w-vs-400w-vs-500w-puissance`, lastModified: '2026-04-18', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/zendure-vs-sunology-vs-beem`, lastModified: '2026-05-09', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comparatif/meilleur-kit-solaire-terrasse-2026`, lastModified: '2026-05-13', changeFrequency: 'monthly', priority: 0.8 },

    // Guides
    { url: `${BASE_URL}/guide/panneau-solaire-balcon-debutant`, lastModified: '2026-03-18', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/panneau-solaire-balcon-locataire`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/installer-kit-solaire-balcon`, lastModified: '2026-03-28', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/orientation-panneau-solaire-balcon`, lastModified: '2026-03-29', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/reglementation-panneau-solaire-balcon-2026`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/panneau-solaire-copropriete`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/panneau-solaire-assurance-balcon`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/optimiser-autoconsommation-solaire`, lastModified: '2026-05-25', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/guide/declaration-cacsi-enedis-panneau-solaire`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.8 },

    // Avis produits
    { url: `${BASE_URL}/avis/sunology-play-2`, lastModified: '2026-03-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/avis/beem-on-460w`, lastModified: '2026-03-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/avis/sunethic-f500`, lastModified: '2026-03-27', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/beem-kit-300w`, lastModified: '2026-04-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/sunology-play-max`, lastModified: '2026-04-02', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/sunology-city`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/ecoflow-powerstream`, lastModified: '2026-04-28', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/zendure-solarflow`, lastModified: '2026-05-07', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/ikea-solstrale-balcon`, lastModified: '2026-05-23', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/dualsun-preasy`, lastModified: '2026-05-09', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/beem-on-500w`, lastModified: '2026-06-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/avis/bluetti-balco-260`, lastModified: '2026-06-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/avis/jackery-solarvault-3-pro`, lastModified: '2026-06-23', changeFrequency: 'monthly', priority: 0.7 },

    // Blog
    { url: `${BASE_URL}/blog/combien-rapporte-panneau-solaire-balcon`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/prix-electricite-2026-solaire`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-hiver-production`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/autoconsommation-solaire-comment-ca-marche`, lastModified: '2026-04-03', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/accessoires-kit-solaire-balcon`, lastModified: '2026-04-18', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/kit-solaire-plug-and-play-arnaque`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-balcon-nord`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/mini-kits-solaires-amazon`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/batteries-portables-solaires-comparatif`, lastModified: '2026-04-21', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/lampes-solaires-balcon-2026`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-ombre-optimiser-production`, lastModified: '2026-05-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/talon-consommation-solaire`, lastModified: '2026-05-10', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-produit-moins-que-prevu`, lastModified: '2026-05-12', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/bilan-6-mois-kit-solaire`, lastModified: '2026-05-27', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/panneau-solaire-est-ouest`, lastModified: '2026-05-22', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/prises-connectees-suivi-solaire`, lastModified: '2026-05-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/kit-solaire-pluie-grele`, lastModified: '2026-05-18', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/entretien-nettoyage-panneau-solaire-balcon`, lastModified: '2026-06-04', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/micro-onduleur-solaire-fonctionnement`, lastModified: '2026-06-06', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/combien-panneaux-solaires-balcon`, lastModified: '2026-06-26', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog/kit-solaire-balcon-avis-2026`, lastModified: '2026-06-20', changeFrequency: 'monthly', priority: 0.7 },

    // Pages secondaires
    { url: `${BASE_URL}/methodologie`, lastModified: '2026-05-15', changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/codes-promo`, lastModified: '2026-05-18', changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/a-propos`, lastModified: '2026-05-15', changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: '2026-03-17', changeFrequency: 'yearly', priority: 0.1 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: '2026-03-17', changeFrequency: 'yearly', priority: 0.1 },

    // Pages par département (SEO programmatique)
    { url: `${BASE_URL}/solaire-balcon`, lastModified: '2026-05-10', changeFrequency: 'monthly', priority: 0.7 },
    ...departmentPages,
  ];
}
