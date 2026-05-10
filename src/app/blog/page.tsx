import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog solaire de balcon — Analyses, données et conseils pratiques',
  description: 'Rentabilité réelle, production hivernale, prix de l\'électricité, autoconsommation : nos analyses chiffrées et indépendantes sur le solaire de balcon en France.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog',
  },
};

const articles = [
  { slug: 'talon-consommation-solaire', title: 'Talon de consommation : comment le calculer et l\'effacer avec le solaire', excerpt: 'Le bruit de fond electrique de votre foyer coute 300-900 euros/an. Voici comment le mesurer et le couvrir avec un kit solaire.', badge: 'Comprendre', date: '10 mai 2026', readTime: '10 min' },
  { slug: 'panneau-solaire-ombre-optimiser-production', title: 'Panneau solaire et ombre : comment optimiser la production', excerpt: 'Ombre partielle, arbre, mur voisin : quel impact et comment maximiser la production de votre kit.', badge: 'Optimisation', date: '6 mai 2026', readTime: '10 min' },
  { slug: 'panneau-solaire-balcon-nord', title: 'Panneau solaire balcon nord : est-ce rentable en 2026 ?', excerpt: 'Analyse honnete avec chiffres par ville, seuls cas ou ca reste interessant, et alternatives.', badge: 'Rentabilite', date: '24 avril 2026', readTime: '10 min' },
  { slug: 'lampes-solaires-balcon-2026', title: 'Lampes solaires balcon : 10 modeles selectionnes (2026)', excerpt: 'Guirlandes, appliques, projecteurs, lanternes : la selection des meilleures lampes solaires.', badge: 'Selection 2026', date: '22 avril 2026', readTime: '10 min' },
  { slug: 'batteries-portables-solaires-comparatif', title: 'Batteries portables solaires 2026 : EcoFlow, Bluetti, Jackery compares', excerpt: '6 modeles compares en detail : capacite, puissance, usages reels.', badge: 'Comparatif 2026', date: '21 avril 2026', readTime: '10 min' },
  { slug: 'mini-kits-solaires-amazon', title: 'Mini kits solaires Amazon < 300 euros : notre selection 2026', excerpt: 'Analyse honnete des mini kits disponibles sur Amazon : pieges a eviter et 5 modeles qui valent le coup.', badge: 'Selection Amazon', date: '20 avril 2026', readTime: '9 min' },
  { slug: 'kit-solaire-plug-and-play-arnaque', title: 'Kit solaire plug-and-play : arnaque ou bon investissement ?', excerpt: 'Analyse honnete du marche en 2026 : vraies arnaques, idees recues, ROI reel.', badge: 'Analyse', date: '19 avril 2026', readTime: '10 min' },
  { slug: 'accessoires-kit-solaire-balcon', title: '8 accessoires indispensables pour votre kit solaire de balcon', excerpt: 'Prise connectee, rallonge etanche, protege-surtension : les accessoires qui ameliorent votre installation.', badge: 'Equipement', date: '4 avril 2026', readTime: '8 min' },
  { slug: 'autoconsommation-solaire-comment-ca-marche', title: 'Autoconsommation solaire : comment ca marche concretement ?', excerpt: 'Le principe explique simplement : talon de consommation, surplus, compteur Linky.', badge: 'Comprendre', date: '3 avril 2026', readTime: '8 min' },
  { slug: 'panneau-solaire-hiver-production', title: 'Panneau solaire en hiver : combien ca produit vraiment ?', excerpt: 'Donnees de production mois par mois pour 3 villes.', badge: 'Donnees reelles', date: '31 mars 2026', readTime: '7 min' },
  { slug: 'prix-electricite-2026-solaire', title: 'Prix de l electricite 2026 : pourquoi le solaire devient incontournable', excerpt: 'Evolution du tarif EDF, fin de l ARENH, projections 2030.', badge: 'Analyse', date: '30 mars 2026', readTime: '7 min' },
  { slug: 'combien-rapporte-panneau-solaire-balcon', title: 'Combien rapporte un panneau solaire de balcon ? Calcul reel', excerpt: 'Chiffres reels de production et d economies pour 7 villes francaises.', badge: 'Analyse chiffree', date: '21 mars 2026', readTime: '10 min' },
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
