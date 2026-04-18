import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quel kit solaire choisir en 2026 ? Comparatifs et avis',
  description: 'Comparatifs independants et avis detailles des meilleurs kits solaires plug-and-play pour balcon.',
};

const comparatifs = [
  { slug: '/comparatif/meilleur-kit-solaire-2026', title: 'Meilleur kit solaire plug and play 2026 : comparatif complet', excerpt: 'Sunology PLAY2, Beem On, Beem Kit, Sunethic F500 : tableau comparatif, points forts/faibles, verdict par profil.', badge: 'Article phare' },
  { slug: '/comparatif/sunology-vs-beem', title: 'Sunology vs Beem : quel kit choisir en 2026 ?', excerpt: 'Les deux leaders francais s affrontent. Comparaison point par point.', badge: 'Match direct' },
  { slug: '/comparatif/kit-solaire-petit-budget', title: 'Meilleur kit solaire petit budget : moins de 400 euros', excerpt: 'Beem Kit 300W, kits Amazon : les meilleures options pour debuter.', badge: 'Petit budget' },
  { slug: '/comparatif/kit-solaire-batterie-2026', title: 'Kit solaire avec batterie 2026 : comparatif stockage', excerpt: 'Sunology PLAY MAX, STOREY, EcoFlow : faut-il une batterie ?', badge: 'Stockage' },
  { slug: '/comparatif/300w-vs-400w-vs-500w-puissance', title: '300W vs 400W vs 500W : quelle puissance choisir pour son balcon ?', excerpt: 'Comparatif des 3 puissances les plus vendues : prix, production, profil adapté.', badge: 'Puissance' },
];

const avis = [
  { slug: '/avis/sunology-play-2', title: 'Sunology PLAY 2', score: '8.5/10', price: '599 \u20ac', badge: 'Choix n\u00b01' },
  { slug: '/avis/beem-on-460w', title: 'Beem On 460W', score: '8/10', price: '599 \u20ac', badge: 'Qualit\u00e9/prix' },
  { slug: '/avis/sunethic-f500', title: 'Sunethic F500', score: '7.5/10', price: '690 \u20ac', badge: 'Made in France' },
  { slug: '/avis/beem-kit-300w', title: 'Beem Kit 300W', score: '7.5/10', price: '299 \u20ac', badge: 'Petit budget' },
  { slug: '/avis/sunology-play-max', title: 'Sunology PLAY MAX', score: '7/10', price: '1 179 \u20ac', badge: 'Kit + batterie' },
];

export default function QuelKitChoisirPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-8">
          <div className="badge-green mb-4 inline-block">Comparatifs &amp; avis</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Quel kit solaire choisir ?</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">Comparatifs ind&eacute;pendants et avis d&eacute;taill&eacute;s pour trouver le kit adapt&eacute; &agrave; votre balcon.</p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <a href="#comparatifs" className="px-5 py-2.5 bg-green text-white text-sm font-semibold rounded-xl hover:bg-green-dark transition-colors">Comparatifs (4)</a>
          <a href="#avis" className="px-5 py-2.5 bg-amber-pale text-amber-dark text-sm font-semibold rounded-xl hover:bg-amber-light/30 transition-colors">Avis &amp; tests (5)</a>
        </div>

        <div id="comparatifs" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-green rounded-full"></div>
            <h2 className="font-extrabold text-2xl">Comparatifs</h2>
            <span className="text-xs text-stone bg-cream-dark px-2 py-1 rounded-lg">{comparatifs.length} articles</span>
          </div>
          <div className="space-y-4 mb-14">
            {comparatifs.map((c) => (
              <Link key={c.slug} href={c.slug} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
                <div className="badge-green mb-3">{c.badge}</div>
                <h3 className="font-bold text-lg group-hover:text-green transition-colors mb-2">{c.title}</h3>
                <p className="text-sm text-charcoal-light">{c.excerpt}</p>
                <span className="text-green font-semibold text-sm mt-3 inline-block">Lire le comparatif &rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        <div id="avis" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-amber rounded-full"></div>
            <h2 className="font-extrabold text-2xl">Avis et tests</h2>
            <span className="text-xs text-stone bg-cream-dark px-2 py-1 rounded-lg">{avis.length} produits test&eacute;s</span>
          </div>
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
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Pas s&ucirc;r de votre choix ?</p>
          <p className="text-sm text-charcoal-light mb-4">Notre calculateur vous recommande le kit adapt&eacute; &agrave; votre situation.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
