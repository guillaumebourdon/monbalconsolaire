import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avis & tests kits solaires balcon 2026',
  description: 'Avis détaillés et tests des kits solaires plug-and-play : Sunology PLAY2, Beem On, Sunethic F500. Retours d\'experience et données réelles.',
};

const reviews = [
  {
    slug: 'sunology-play-2',
    title: 'Sunology PLAY 2 : avis et test complet',
    excerpt: 'Le kit solaire le plus vendu en France (100 000+ foyers). 450 Wc, 599\u20ac, installation en 1 minute. Notre verdict : 8.5/10.',
    badge: 'Choix n\u00b01',
    score: '8.5/10',
    price: '599 \u20ac',
  },
];

const comingSoon = [
  { title: 'Beem On 460W : avis et test complet', desc: 'Le concurrent direct du Sunology PLAY2. 460 Wc, 599\u20ac.' },
  { title: 'Beem Kit 300W : avis et test complet', desc: 'L\'entrée de gamme a 299\u20ac. Ideal pour tester le solaire.' },
  { title: 'Sunethic F500 : avis et test complet', desc: 'Le kit Made in France. 500 Wc, 690\u20ac.' },
];

export default function AvisIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-amber mb-4 inline-block">Avis & tests</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Avis et tests de kits solaires</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Des avis détaillés, sources et honnetes sur les kits solaires plug-and-play les plus populaires en France.</p>

        <div className="space-y-6 mb-10">
          {reviews.map((r) => (
            <Link key={r.slug} href={`/avis/${r.slug}`} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="badge-green mb-2">{r.badge}</div>
                  <h2 className="font-bold text-xl group-hover:text-green transition-colors">{r.title}</h2>
                  <p className="text-sm text-charcoal-light mt-2 max-w-lg">{r.excerpt}</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-bold text-green">{r.score}</div>
                  <div className="text-sm text-stone font-mono">{r.price}</div>
                </div>
              </div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire l&apos;avis complet &rarr;</span>
            </Link>
          ))}
        </div>

        <h2 className="font-bold text-xl mb-4 text-charcoal">Prochains tests</h2>
        <div className="space-y-4">
          {comingSoon.map((c, i) => (
            <div key={i} className="card bg-cream/50">
              <h3 className="font-semibold text-sm">{c.title}</h3>
              <p className="text-xs text-stone mt-1">{c.desc}</p>
              <span className="text-xs text-amber-dark font-medium mt-2 inline-block">A venir prochainement</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
