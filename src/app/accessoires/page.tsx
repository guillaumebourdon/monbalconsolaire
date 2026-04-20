'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  badge: string;
  tags: string[];
  readTime: string;
  priceRange?: string;
  publishedAt: string;
  updatedAt?: string;
}

const ARTICLES: Article[] = [
  {
    slug: '/blog/accessoires-kit-solaire-balcon',
    title: '5 accessoires indispensables pour votre kit solaire de balcon',
    excerpt: 'Prise connectée, wattmètre, rallonge étanche, support réglable : les indispensables pour maximiser votre installation.',
    badge: 'Guide essentiel',
    tags: ['essentiels', 'amazon'],
    publishedAt: '2026-04-04',
    updatedAt: '2026-04-18',
    readTime: '6 min',
    priceRange: '15-80 €',
  },
  // Les futurs articles s'ajouteront ici
];

const FILTERS = [
  { id: 'all', label: 'Tout voir', emoji: '✨' },
  { id: 'essentiels', label: 'Essentiels', emoji: '🔌' },
  { id: 'amazon', label: 'Amazon', emoji: '📦' },
  { id: 'batteries', label: 'Batteries portables', emoji: '🔋' },
  { id: 'eclairage', label: 'Éclairage solaire', emoji: '💡' },
];

export default function AccessoiresPage() {
  const [filter, setFilter] = useState<string>('all');

  const NOW = new Date('2026-04-19').getTime();
  const isNew = (dateIso: string) => {
    const diff = (NOW - new Date(dateIso).getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 14;
  };
  const isUpdated = (dateIso?: string) => {
    if (!dateIso) return false;
    const diff = (NOW - new Date(dateIso).getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 30;
  };

  const filteredArticles = (filter === 'all' ? ARTICLES : ARTICLES.filter(a => a.tags.includes(filter)))
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
          <div className="badge-green mb-4 inline-block">Accessoires &amp; compléments</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Accessoires pour votre kit solaire</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Prises connectées, batteries portables, lampes solaires, mini kits Amazon : tout l'équipement complémentaire pour optimiser votre installation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                filter === f.id ? 'bg-green text-white shadow-brand' : 'bg-cream text-charcoal-light hover:bg-cream-dark'
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
            <Link key={a.slug} href={a.slug} className="card-lg block hover:shadow-brand-lg transition-all duration-300 group">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-amber text-white">Accessoires</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-pale text-amber-dark">{a.badge}</span>
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
                  <h3 className="font-bold text-lg md:text-xl group-hover:text-green transition-colors mb-2 leading-tight">{a.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{a.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-stone">
                    <span>⏱ {a.readTime}</span>
                    {a.priceRange && <span className="font-mono font-semibold text-charcoal">{a.priceRange}</span>}
                  </div>
                </div>
              </div>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Lire l'article &rarr;</span>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="card-lg text-center mb-12">
            <p className="text-charcoal-light">Cette catégorie arrive très bientôt.</p>
            <button onClick={() => setFilter('all')} className="text-green font-semibold text-sm mt-3 hover:underline">Voir tous les articles &rarr;</button>
          </div>
        )}

        <div className="card-lg bg-amber-pale/20 border-amber/10 mb-12">
          <h2 className="font-bold text-lg mb-2">💡 À venir cette semaine</h2>
          <ul className="text-sm text-charcoal-light space-y-2">
            <li>• Mini kits solaires Amazon à moins de 300 € : lesquels valent le coup ?</li>
            <li>• Batteries portables solaires (EcoFlow, Bluetti) : comparatif 2026</li>
            <li>• Lampes solaires extérieures pour balcon : 10 modèles sélectionnés</li>
          </ul>
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Votre balcon est-il adapté au solaire ?</p>
          <p className="text-sm text-charcoal-light mb-4">Calculez votre production potentielle avant d'investir dans des accessoires.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
