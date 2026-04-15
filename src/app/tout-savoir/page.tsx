import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tout savoir sur le solaire de balcon - MonBalconSolaire',
  description: 'Guides pratiques, analyses chiffrees, reglementation, rentabilite : tout ce qu il faut savoir sur le solaire de balcon en France.',
};

const guides = [
  { slug: '/guide/panneau-solaire-balcon-debutant', title: 'Panneau solaire balcon : le guide complet pour debutants', badge: 'Guide essentiel', readTime: '15 min' },
  { slug: '/guide/panneau-solaire-balcon-locataire', title: 'Panneau solaire balcon locataire : droits, regles et astuces', badge: 'Locataires', readTime: '8 min' },
  { slug: '/guide/installer-kit-solaire-balcon', title: 'Comment installer un kit solaire sur un balcon : guide pas a pas', badge: 'Installation', readTime: '8 min' },
  { slug: '/guide/orientation-panneau-solaire-balcon', title: 'Quelle orientation pour un panneau solaire de balcon ?', badge: 'Orientation', readTime: '8 min' },
];

const articles = [
  { slug: '/blog/combien-rapporte-panneau-solaire-balcon', title: 'Combien rapporte un panneau solaire de balcon ? Calcul reel', badge: 'Analyse chiffree', readTime: '10 min' },
  { slug: '/blog/prix-electricite-2026-solaire', title: 'Prix de l electricite 2026 : pourquoi le solaire devient incontournable', badge: 'Analyse', readTime: '7 min' },
  { slug: '/blog/panneau-solaire-hiver-production', title: 'Panneau solaire en hiver : combien ca produit vraiment ?', badge: 'Donnees reelles', readTime: '7 min' },
  { slug: '/blog/autoconsommation-solaire-comment-ca-marche', title: 'Autoconsommation solaire : comment ca marche concretement ?', badge: 'Comprendre', readTime: '8 min' },
  { slug: '/blog/accessoires-kit-solaire-balcon', title: '5 accessoires indispensables pour votre kit solaire de balcon', badge: 'Equipement', readTime: '6 min' },
];

export default function ToutSavoirPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-12">
          <div className="badge-green mb-4 inline-block">Ressources</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Tout savoir sur le solaire de balcon</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">Guides pratiques, analyses chiffrees, reglementation : toutes les reponses a vos questions.</p>
        </div>

        <h2 className="font-extrabold text-2xl mb-6">Guides pratiques</h2>
        <div className="space-y-4 mb-12">
          {guides.map((g) => (
            <Link key={g.slug} href={g.slug} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="badge-green mb-2">{g.badge}</div>
                  <h3 className="font-bold text-lg group-hover:text-green transition-colors">{g.title}</h3>
                </div>
                <span className="text-xs text-stone hidden md:block">{g.readTime}</span>
              </div>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Lire le guide &rarr;</span>
            </Link>
          ))}
        </div>

        <h2 className="font-extrabold text-2xl mb-6">Articles et analyses</h2>
        <div className="space-y-4 mb-12">
          {articles.map((a) => (
            <Link key={a.slug} href={a.slug} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="badge-amber mb-2">{a.badge}</div>
                  <h3 className="font-bold text-lg group-hover:text-green transition-colors">{a.title}</h3>
                </div>
                <span className="text-xs text-stone hidden md:block">{a.readTime}</span>
              </div>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Lire l&apos;article &rarr;</span>
            </Link>
          ))}
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Pret a passer au solaire ?</p>
          <p className="text-sm text-charcoal-light mb-4">Calculez vos economies en 30 secondes.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes economies &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
