import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quel kit solaire choisir en 2026 ? Comparatifs et avis',
  description: 'Comparatifs independants et avis detailles des meilleurs kits solaires plug-and-play pour balcon : Sunology, Beem, Sunethic.',
};

const comparatifs = [
  { slug: '/comparatif/meilleur-kit-solaire-2026', title: 'Meilleur kit solaire plug and play 2026 : comparatif complet', excerpt: 'Sunology PLAY2, Beem On, Beem Kit, Sunethic F500 : tableau comparatif, points forts/faibles, verdict par profil.', badge: 'Article phare' },
  { slug: '/comparatif/sunology-vs-beem', title: 'Sunology vs Beem : quel kit choisir en 2026 ?', excerpt: 'Les deux leaders francais s affrontent. Comparaison point par point.', badge: 'Match direct' },
  { slug: '/comparatif/kit-solaire-petit-budget', title: 'Meilleur kit solaire petit budget : moins de 400 euros', excerpt: 'Beem Kit 300W, kits Amazon : les meilleures options pour debuter sans se ruiner.', badge: 'Petit budget' },
  { slug: '/comparatif/kit-solaire-batterie-2026', title: 'Kit solaire avec batterie 2026 : comparatif stockage', excerpt: 'Sunology PLAY MAX, STOREY, EcoFlow PowerStream : faut-il une batterie ?', badge: 'Stockage' },
];

const avis = [
  { slug: '/avis/sunology-play-2', title: 'Sunology PLAY 2', score: '8.5/10', price: '599 euros', badge: 'Choix n 1' },
  { slug: '/avis/beem-on-460w', title: 'Beem On 460W', score: '8/10', price: '599 euros', badge: 'Qualite/prix' },
  { slug: '/avis/sunethic-f500', title: 'Sunethic F500', score: '7.5/10', price: '690 euros', badge: 'Made in France' },
  { slug: '/avis/beem-kit-300w', title: 'Beem Kit 300W', score: '7.5/10', price: '299 euros', badge: 'Petit budget' },
  { slug: '/avis/sunology-play-max', title: 'Sunology PLAY MAX', score: '7/10', price: '1 179 euros', badge: 'Kit + batterie' },
];

export default function QuelKitChoisirPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-12">
          <div className="badge-green mb-4 inline-block">Comparatifs & avis</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Quel kit solaire choisir ?</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">Comparatifs independants et avis detailles pour trouver le kit adapte a votre balcon et a votre budget.</p>
        </div>

        <h2 className="font-extrabold text-2xl mb-6">Comparatifs</h2>
        <div className="space-y-4 mb-12">
          {comparatifs.map((c) => (
            <Link key={c.slug} href={c.slug} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="badge-green mb-3">{c.badge}</div>
              <h3 className="font-bold text-lg group-hover:text-green transition-colors mb-2">{c.title}</h3>
              <p className="text-sm text-charcoal-light">{c.excerpt}</p>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Lire le comparatif &rarr;</span>
            </Link>
          ))}
        </div>

        <h2 className="font-extrabold text-2xl mb-6">Avis et tests</h2>
        <div className="space-y-4 mb-12">
          {avis.map((a) => (
            <Link key={a.slug} href={a.slug} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="badge-amber mb-2">{a.badge}</div>
                  <h3 className="font-bold text-lg group-hover:text-green transition-colors">{a.title}</h3>
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-bold text-green">{a.score}</div>
                  <div className="text-sm text-stone font-mono">{a.price}</div>
                </div>
              </div>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Lire l&apos;avis complet &rarr;</span>
            </Link>
          ))}
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Pas sur de votre choix ?</p>
          <p className="text-sm text-charcoal-light mb-4">Notre calculateur vous recommande le kit adapte a votre situation.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes economies &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
