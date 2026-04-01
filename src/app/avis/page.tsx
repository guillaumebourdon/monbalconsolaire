import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avis et tests kits solaires balcon 2026',
  description: 'Avis detailles et tests des kits solaires plug-and-play les plus populaires en France.',
};

const reviews = [
  { slug: 'sunology-play-2', title: 'Sunology PLAY 2 : avis et test complet', excerpt: 'Le kit solaire le plus vendu en France (100 000+ foyers). 450 Wc, 599 euros, installation en 1 minute.', badge: 'Choix n 1', score: '8.5/10', price: '599 euros' },
  { slug: 'beem-on-460w', title: 'Beem On 460W : avis et test complet', excerpt: 'Le concurrent direct du Sunology PLAY2. 460 Wc, 599 euros, meilleur ratio euros/Wc en mono-panneau.', badge: 'Rapport qualite/prix', score: '8/10', price: '599 euros' },
  { slug: 'sunethic-f500', title: 'Sunethic F500 : avis du kit Made in France', excerpt: 'Le kit le plus puissant (500 Wc) et le seul fabrique en France. 690 euros.', badge: 'Made in France', score: '7.5/10', price: '690 euros' },
  { slug: 'beem-kit-300w', title: 'Beem Kit 300W : avis du kit petit budget', excerpt: 'Le kit le moins cher du marche francais. 4 panneaux modulaires, 299 euros, ROI en 2,5 ans.', badge: 'Petit budget', score: '7.5/10', price: '299 euros' },
  { slug: 'sunology-play-max', title: 'Sunology PLAY MAX : kit + batterie, ca vaut le coup ?', excerpt: 'Le bundle PLAY2 + batterie VAULT 700 Wh pour 1 179 euros. Stockez le solaire pour le soir.', badge: 'Kit + batterie', score: '7/10', price: '1 179 euros' },
];

export default function AvisIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-amber mb-4 inline-block">Avis et tests</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Avis et tests de kits solaires</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Des avis detailles, sources et honnetes sur les kits solaires plug-and-play les plus populaires en France.</p>
        <div className="space-y-6">
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
      </div>
    </section>
  );
}
