'use client';

import { useState } from 'react';
import Link from 'next/link';

type ArticleType = 'comparatif' | 'avis';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  type: ArticleType;
  badge: string;
  tags: string[];
  score?: string;
  price?: string;
  readTime?: string;
  publishedAt: string;
  updatedAt?: string;
}

const ARTICLES: Article[] = [
  {
    slug: '/comparatif/meilleur-kit-solaire-2026',
    title: 'Meilleur kit solaire plug and play 2026 : comparatif complet',
    excerpt: 'Sunology PLAY2, Beem On, Beem Kit, Sunethic F500 : tableau comparatif, points forts/faibles, verdict par profil.',
    type: 'comparatif',
    badge: 'Article phare',
    tags: ['best', 'comparatif'],
    publishedAt: '2026-03-17',
    readTime: '12 min',
  },
  {
    slug: '/comparatif/sunology-vs-beem',
    title: 'Sunology vs Beem : quel kit choisir en 2026 ?',
    excerpt: 'Les deux leaders français s\'affrontent. Comparaison point par point.',
    type: 'comparatif',
    badge: 'Match direct',
    tags: ['marque', 'comparatif'],
    publishedAt: '2026-03-24',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/kit-solaire-petit-budget',
    title: 'Meilleur kit solaire petit budget : moins de 400 €',
    excerpt: 'Beem Kit 300W, kits Amazon : les meilleures options pour débuter.',
    type: 'comparatif',
    badge: 'Petit budget',
    tags: ['budget', 'comparatif'],
    publishedAt: '2026-03-25',
    readTime: '8 min',
  },
  {
    slug: '/comparatif/kit-solaire-batterie-2026',
    title: 'Kit solaire avec batterie 2026 : comparatif stockage',
    excerpt: 'Sunology PLAY MAX, STOREY, EcoFlow : faut-il une batterie ?',
    type: 'comparatif',
    badge: 'Stockage',
    tags: ['stockage', 'comparatif'],
    publishedAt: '2026-03-31',
    readTime: '10 min',
  },
  {
    slug: '/comparatif/300w-vs-400w-vs-500w-puissance',
    title: '300W vs 400W vs 500W : quelle puissance choisir ?',
    excerpt: 'Comparatif des 3 puissances les plus vendues : prix, production, profil adapté.',
    type: 'comparatif',
    badge: 'Puissance',
    tags: ['puissance', 'comparatif'],
    publishedAt: '2026-04-18',
    readTime: '8 min',
  },
  {
    slug: '/avis/sunology-play-2',
    title: 'Sunology PLAY 2',
    excerpt: 'Le leader du marché français. Notre test complet après 3 mois d\'usage.',
    type: 'avis',
    badge: 'Choix n°1',
    tags: ['best', 'marque'],
    publishedAt: '2026-03-19',
    score: '8.5/10',
    price: '599 €',
  },
  {
    slug: '/avis/beem-on-460w',
    title: 'Beem On 460W',
    excerpt: 'Le concurrent direct du PLAY2, avec un excellent rapport qualité/prix.',
    type: 'avis',
    badge: 'Qualité/prix',
    tags: ['marque'],
    publishedAt: '2026-03-26',
    score: '8/10',
    price: '599 €',
  },
  {
    slug: '/avis/sunethic-f500',
    title: 'Sunethic F500',
    excerpt: 'Made in France, éthique, puissant. Meilleure note Trustpilot du marché.',
    type: 'avis',
    badge: 'Made in France',
    tags: ['puissance', 'marque'],
    publishedAt: '2026-03-27',
    score: '7.5/10',
    price: '690 €',
  },
  {
    slug: '/avis/beem-kit-300w',
    title: 'Beem Kit 300W',
    excerpt: 'Le meilleur choix pour découvrir le solaire sans se ruiner.',
    type: 'avis',
    badge: 'Petit budget',
    tags: ['budget'],
    publishedAt: '2026-04-01',
    score: '7.5/10',
    price: '299 €',
  },
  {
    slug: '/avis/sunology-play-max',
    title: 'Sunology PLAY MAX',
    excerpt: 'Kit solaire avec batterie intégrée. Pour ceux qui consomment le soir.',
    type: 'avis',
    badge: 'Kit + batterie',
    tags: ['stockage', 'marque'],
    publishedAt: '2026-04-02',
    score: '7/10',
    price: '1 179 €',
  },
];

const FILTERS = [
  { id: 'all', label: 'Tout voir', emoji: '✨' },
  { id: 'best', label: 'Meilleurs choix', emoji: '⭐' },
  { id: 'budget', label: 'Petit budget', emoji: '💰' },
  { id: 'puissance', label: 'Par puissance', emoji: '⚡' },
  { id: 'stockage', label: 'Avec batterie', emoji: '🔋' },
  { id: 'marque', label: 'Par marque', emoji: '🏷️' },
];

export default function QuelKitChoisirPage() {
  const [filter, setFilter] = useState<string>('all');

  const NOW = new Date('2026-04-22').getTime();
  const NEW_THRESHOLD_DAYS = 14;
  const UPDATED_THRESHOLD_DAYS = 30;

  const isNew = (dateIso: string) => {
    const diff = (NOW - new Date(dateIso).getTime()) / (1000 * 60 * 60 * 24);
    return diff <= NEW_THRESHOLD_DAYS;
  };
  const isUpdated = (dateIso?: string) => {
    if (!dateIso) return false;
    const diff = (NOW - new Date(dateIso).getTime()) / (1000 * 60 * 60 * 24);
    return diff <= UPDATED_THRESHOLD_DAYS;
  };

  const filteredArticles = (filter === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.tags.includes(filter))
  )
    .slice()
    .sort((a, b) => {
      const aDate = Math.max(new Date(a.publishedAt).getTime(), a.updatedAt ? new Date(a.updatedAt).getTime() : 0);
      const bDate = Math.max(new Date(b.publishedAt).getTime(), b.updatedAt ? new Date(b.updatedAt).getTime() : 0);
      return bDate - aDate;
    });

  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-8">
          <div className="badge-green mb-4 inline-block">Comparatifs &amp; avis</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Quel kit solaire choisir ?</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Comparatifs indépendants et avis détaillés pour trouver le kit adapté à votre balcon.
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
                      a.type === 'comparatif' ? 'bg-green text-white' : 'bg-amber text-white'
                    }`}>
                      {a.type === 'comparatif' ? 'Comparatif' : 'Avis produit'}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      a.type === 'comparatif' ? 'bg-green-pale text-green' : 'bg-amber-pale text-amber-dark'
                    }`}>
                      {a.badge}
                    </span>
                    {isNew(a.publishedAt) && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-green text-white animate-pulse">
                        🆕 Nouveau
                      </span>
                    )}
                    {!isNew(a.publishedAt) && isUpdated(a.updatedAt) && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-amber-pale text-amber-dark">
                        ✨ Mis à jour
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg md:text-xl group-hover:text-green transition-colors mb-2 leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{a.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-stone">
                    {a.readTime && <span>⏱ {a.readTime}</span>}
                    {a.price && <span className="font-mono font-semibold text-charcoal">{a.price}</span>}
                  </div>
                </div>

                {a.score && (
                  <div className="text-right flex-shrink-0">
                    <div className="font-mono text-2xl font-bold text-green">{a.score}</div>
                    <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">Note</div>
                  </div>
                )}
              </div>
              <span className="text-green font-semibold text-sm mt-3 inline-block">
                {a.type === 'comparatif' ? 'Lire le comparatif' : 'Lire l\'avis complet'} →
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
          <p className="font-semibold text-lg mb-2">Pas sûr de votre choix ?</p>
          <p className="text-sm text-charcoal-light mb-4">
            Notre calculateur vous recommande le kit adapté à votre situation.
          </p>
          <Link href="/calculateur" className="btn-primary inline-flex">
            Calculer mes économies →
          </Link>
        </div>
      </div>
    </section>
  );
}
