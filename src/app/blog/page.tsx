import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog solaire balcon - MonBalconSolaire',
  description: 'Articles, analyses et donnees sur le solaire de balcon en France.',
};

const articles = [
  { slug: 'combien-rapporte-panneau-solaire-balcon', title: 'Combien rapporte un panneau solaire de balcon ? Calcul reel', excerpt: 'Chiffres reels de production et d economies pour 7 villes francaises.', badge: 'Analyse chiffree', date: '21 mars 2026', readTime: '10 min' },
  { slug: 'prix-electricite-2026-solaire', title: 'Prix de l electricite 2026 : pourquoi le solaire devient incontournable', excerpt: 'Evolution du tarif EDF, fin de l ARENH, projections 2030.', badge: 'Analyse', date: '30 mars 2026', readTime: '7 min' },
  { slug: 'panneau-solaire-hiver-production', title: 'Panneau solaire en hiver : combien ca produit vraiment ?', excerpt: 'Donnees de production mois par mois pour 3 villes.', badge: 'Donnees reelles', date: '31 mars 2026', readTime: '7 min' },
  { slug: 'autoconsommation-solaire-comment-ca-marche', title: 'Autoconsommation solaire : comment ca marche concretement ?', excerpt: 'Le principe explique simplement : talon de consommation, surplus, compteur Linky.', badge: 'Comprendre', date: '3 avril 2026', readTime: '8 min' },
  { slug: 'accessoires-kit-solaire-balcon', title: '5 accessoires indispensables pour votre kit solaire de balcon', excerpt: 'Prise connectee, rallonge etanche, protege-surtension : les accessoires qui ameliorent votre installation.', badge: 'Equipement', date: '4 avril 2026', readTime: '6 min' },
];

export default function BlogIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-amber mb-4 inline-block">Blog</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Blog MonBalconSolaire</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Analyses, donnees et conseils sur le solaire de balcon en France.</p>
        <div className="space-y-6">
          {articles.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="badge-amber mb-3">{a.badge}</div>
              <h2 className="font-bold text-xl group-hover:text-green transition-colors mb-2">{a.title}</h2>
              <p className="text-sm text-charcoal-light mb-3">{a.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-stone"><span>{a.date}</span><span>&middot;</span><span>{a.readTime} de lecture</span></div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire l&apos;article &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
