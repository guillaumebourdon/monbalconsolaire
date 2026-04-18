'use client';

import { useState } from 'react';
import Link from 'next/link';

type ArticleType = 'guide' | 'analyse';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  type: ArticleType;
  badge: string;
  tags: string[];
  readTime: string;
}

const ARTICLES: Article[] = [
  // Guides pratiques
  {
    slug: '/guide/panneau-solaire-balcon-debutant',
    title: 'Panneau solaire balcon : le guide complet pour débutants',
    excerpt: 'Tout ce qu\'il faut savoir avant de se lancer : principes, coûts, production, installation.',
    type: 'guide',
    badge: 'Guide essentiel',
    tags: ['debutant', 'guide'],
    readTime: '15 min',
  },
  {
    slug: '/guide/panneau-solaire-balcon-locataire',
    title: 'Panneau solaire balcon locataire : droits, règles et astuces',
    excerpt: 'Ce que vous pouvez faire en tant que locataire, sans autorisation du propriétaire.',
    type: 'guide',
    badge: 'Locataires',
    tags: ['reglementation', 'guide'],
    readTime: '8 min',
  },
  {
    slug: '/guide/installer-kit-solaire-balcon',
    title: 'Comment installer un kit solaire sur un balcon : pas à pas',
    excerpt: 'Le guide d\'installation détaillé, étape par étape, avec les outils nécessaires.',
    type: 'guide',
    badge: 'Installation',
    tags: ['installation', 'guide'],
    readTime: '8 min',
  },
  {
    slug: '/guide/orientation-panneau-solaire-balcon',
    title: 'Quelle orientation pour un panneau solaire de balcon ?',
    excerpt: 'Sud, sud-est, ouest, nord : l\'impact réel de l\'orientation sur votre production.',
    type: 'guide',
    badge: 'Orientation',
    tags: ['optimisation', 'guide'],
    readTime: '8 min',
  },
  {
    slug: '/guide/reglementation-panneau-solaire-balcon-2026',
    title: 'Panneau solaire balcon : réglementation 2026 complète',
    excerpt: 'Norme NF C 15-100, CACSI Enedis, copropriété, limite 900W : tout ce que dit la loi.',
    type: 'guide',
    badge: 'Réglementation',
    tags: ['reglementation', 'guide'],
    readTime: '9 min',
  },
  {
    slug: '/guide/panneau-solaire-copropriete',
    title: 'Panneau solaire en copropriété : règles, votes et astuces',
    excerpt: 'Quand faut-il l\'accord du syndic ? Modèle de courrier, vote en AG, cas pratiques.',
    type: 'guide',
    badge: 'Copropriété',
    tags: ['reglementation', 'guide'],
    readTime: '8 min',
  },
  // Analyses / blog
  {
    slug: '/blog/combien-rapporte-panneau-solaire-balcon',
    title: 'Combien rapporte un panneau solaire de balcon ? Calcul réel',
    excerpt: 'Analyse chiffrée de la rentabilité selon la région, l\'orientation et le modèle.',
    type: 'analyse',
    badge: 'Analyse chiffrée',
    tags: ['rentabilite'],
    readTime: '10 min',
  },
  {
    slug: '/blog/prix-electricite-2026-solaire',
    title: 'Prix de l\'électricité 2026 : pourquoi le solaire devient incontournable',
    excerpt: 'Les tarifs EDF en 2026, leur évolution, et l\'impact sur votre retour sur investissement.',
    type: 'analyse',
    badge: 'Marché',
    tags: ['rentabilite'],
    readTime: '7 min',
  },
  {
    slug: '/blog/panneau-solaire-hiver-production',
    title: 'Panneau solaire en hiver : combien ça produit vraiment ?',
    excerpt: 'Données réelles de production hivernale, impact du gel, de la neige et des jours courts.',
    type: 'analyse',
    badge: 'Données réelles',
    tags: ['optimisation'],
    readTime: '7 min',
  },
  {
    slug: '/blog/autoconsommation-solaire-comment-ca-marche',
    title: 'Autoconsommation solaire : comment ça marche concrètement ?',
    excerpt: 'Le principe technique expliqué simplement : talon, surplus, injection réseau.',
    type: 'analyse',
    badge: 'Comprendre',
    tags: ['debutant'],
    readTime: '8 min',
  },
  {
    slug: '/blog/accessoires-kit-solaire-balcon',
    title: '5 accessoires indispensables pour votre kit solaire de balcon',
    excerpt: 'Prise connectée, wattmètre, rallonge IP44 : maximisez votre installation.',
    type: 'analyse',
    badge: 'Équipement',
    tags: ['optimisation'],
    readTime: '6 min',
  },
];

const FILTERS = [
  { id: 'all', label: 'Tout voir', emoji: '✨' },
  { id: 'debutant', label: 'Je débute', emoji: '🌱' },
  { id: 'installation', label: 'Installation', emoji: '🔧' },
  { id: 'reglementation', label: 'Réglementation', emoji: '⚖️' },
  { id: 'rentabilite', label: 'Rentabilité', emoji: '💶' },
  { id: 'optimisation', label: 'Optimiser', emoji: '📈' },
];

export default function ToutSavoirPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredArticles = filter === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.tags.includes(filter));

  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-8">
          <div className="badge-green mb-4 inline-block">Ressources</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Tout savoir sur le solaire de balcon
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Guides pratiques, analyses chiffrées, réglementation : toutes les réponses à vos questions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                filter === f.id
                  ? 'bg-green text-white shadow-brand'
                  : 'bg-cream text-charcoal-light hover:bg-cream-dark'
              }`}
            >
              <span className="mr-1.5">{f.emoji}</span>
              {f.label}
            </button>
          ))}
        </div>

        <p className="text-xs text-stone text-center mb-6">
          {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
          {filter !== 'all' && ` dans « ${FILTERS.find(f => f.id === filter)?.label} »`}
        </p>

        <div className="space-y-4 mb-12">
          {filteredArticles.map((a) => (
            <Link
              key={a.slug}
              href={a.slug}
              className="card-lg block hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                      a.type === 'guide' ? 'bg-green text-white' : 'bg-amber text-white'
                    }`}>
                      {a.type === 'guide' ? 'Guide pratique' : 'Analyse'}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      a.type === 'guide' ? 'bg-green-pale text-green' : 'bg-amber-pale text-amber-dark'
                    }`}>
                      {a.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl group-hover:text-green transition-colors mb-2 leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{a.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-stone">
                    <span>⏱ {a.readTime}</span>
                  </div>
                </div>
              </div>
              <span className="text-green font-semibold text-sm mt-3 inline-block">
                {a.type === 'guide' ? 'Lire le guide' : 'Lire l\'analyse'} →
              </span>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="card-lg text-center mb-12">
            <p className="text-charcoal-light">Aucun article ne correspond à ce filtre pour le moment.</p>
            <button
              onClick={() => setFilter('all')}
              className="text-green font-semibold text-sm mt-3 hover:underline"
            >
              Voir tous les articles →
            </button>
          </div>
        )}

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Prêt à passer au solaire ?</p>
          <p className="text-sm text-charcoal-light mb-4">Calculez vos économies en 30 secondes.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">
            Calculer mes économies →
          </Link>
        </div>
      </div>
    </section>
  );
}
