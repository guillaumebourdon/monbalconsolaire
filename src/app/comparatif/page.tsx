import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparatifs kits solaires balcon 2026',
  description: 'Tous nos comparatifs indépendants de kits solaires plug-and-play pour balcon : Sunology, Beem, Sunethic. Prix, puissance, rentabilité.',
};

const articles = [
  { slug: 'meilleur-kit-solaire-2026', title: 'Meilleur kit solaire plug and play 2026 : comparatif complet', excerpt: 'Sunology PLAY2, Beem On, Beem Kit, Sunethic F500 : tableau comparatif détaillé, points forts/faibles, verdict par profil.', badge: 'Article phare', date: '30 mars 2026', readTime: '12 min' },
  { slug: 'sunology-vs-beem', title: 'Sunology vs Beem : quel kit solaire choisir en 2026 ?', excerpt: 'Les deux leaders français du solaire plug-and-play s\'affrontent. Comparaison point par point : prix, puissance, installation, app.', badge: 'Match direct', date: '30 mars 2026', readTime: '10 min' },
  { slug: 'kit-solaire-petit-budget', title: 'Meilleur kit solaire petit budget : moins de 400€', excerpt: 'Beem Kit 300W, kits Amazon : quelles sont les meilleures options pour débuter dans le solaire sans se ruiner ?', badge: 'Petit budget', date: '30 mars 2026', readTime: '8 min' },
];

const comingSoon = [
  { title: 'Kit solaire avec batterie 2026 : comparatif stockage', desc: 'Sunology PLAY MAX vs Beem Battery vs EcoFlow : quel système de stockage choisir ?' },
];

export default function ComparatifIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-green mb-4 inline-block">Comparatifs</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Comparatifs de kits solaires</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Des comparatifs indépendants, sourcés et transparents pour vous aider à choisir le kit solaire adapté à votre balcon.</p>
        <div className="space-y-6 mb-12">
          {articles.map((a) => (
            <Link key={a.slug} href={`/comparatif/${a.slug}`} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="badge-green mb-3">{a.badge}</div>
              <h2 className="font-bold text-xl group-hover:text-green transition-colors mb-2">{a.title}</h2>
              <p className="text-sm text-charcoal-light mb-3">{a.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-stone"><span>{a.date}</span><span>&middot;</span><span>{a.readTime} de lecture</span></div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire le comparatif &rarr;</span>
            </Link>
          ))}
        </div>
        {comingSoon.length > 0 && (<><h2 className="font-bold text-xl mb-4 text-charcoal">Prochains comparatifs</h2>
        <div className="space-y-4">
          {comingSoon.map((c, i) => (
            <div key={i} className="card bg-cream/50"><h3 className="font-semibold text-sm">{c.title}</h3><p className="text-xs text-stone mt-1">{c.desc}</p><span className="text-xs text-amber-dark font-medium mt-2 inline-block">À venir prochainement</span></div>
          ))}
        </div></>)}
      </div>
    </section>
  );
}
