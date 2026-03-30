import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog solaire balcon — MonBalconSolaire',
  description: 'Articles, analyses et donnees sur le solaire de balcon en France. Rentabilite, actualites, prix de l\'electricite, conseils.',
};

const articles = [
  {
    slug: 'combien-rapporte-panneau-solaire-balcon',
    title: 'Combien rapporte un panneau solaire de balcon ? Calcul reel',
    excerpt: 'Chiffres reels de production et d\'economies pour 7 villes francaises. Formule de calcul transparente, donnees PVGIS, 3 scenarios de prix EDF.',
    badge: 'Analyse chiffree',
    date: '30 mars 2026',
    readTime: '10 min',
  },
];

const comingSoon = [
  { title: 'Prix de l\'electricite 2026 : faut-il s\'inquieter ?', desc: 'Analyse de l\'evolution tarifaire et impact sur la rentabilite du solaire.' },
  { title: '5 accessoires indispensables pour votre kit solaire de balcon', desc: 'Wattmetre, rallonge etanche, prise connectee : les complements utiles.' },
  { title: 'Panneau solaire en hiver : combien ca produit vraiment ?', desc: 'Donnees reelles de production hivernale par region.' },
];

export default function BlogIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-amber mb-4 inline-block">Blog</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Blog MonBalconSolaire</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Analyses, donnees et conseils sur le solaire de balcon en France.</p>

        <div className="space-y-6 mb-12">
          {articles.map((a) => (
            <Link key={a.slug} href={`/blog/${a.slug}`} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="badge-amber mb-3">{a.badge}</div>
              <h2 className="font-bold text-xl group-hover:text-green transition-colors mb-2">{a.title}</h2>
              <p className="text-sm text-charcoal-light mb-3">{a.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-stone">
                <span>{a.date}</span><span>&middot;</span><span>{a.readTime} de lecture</span>
              </div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire l&apos;article &rarr;</span>
            </Link>
          ))}
        </div>

        <h2 className="font-bold text-xl mb-4 text-charcoal">Prochains articles</h2>
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
