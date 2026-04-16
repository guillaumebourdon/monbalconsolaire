import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tout savoir sur le solaire de balcon - MonBalconSolaire',
  description: 'Guides pratiques, analyses chiffrees, reglementation : tout ce qu il faut savoir sur le solaire de balcon.',
};

const guides = [
  { slug: '/guide/panneau-solaire-balcon-debutant', title: 'Panneau solaire balcon : le guide complet pour d\u00e9butants', badge: 'Guide essentiel', readTime: '15 min' },
  { slug: '/guide/panneau-solaire-balcon-locataire', title: 'Panneau solaire balcon locataire : droits, r\u00e8gles et astuces', badge: 'Locataires', readTime: '8 min' },
  { slug: '/guide/installer-kit-solaire-balcon', title: 'Comment installer un kit solaire sur un balcon : guide pas \u00e0 pas', badge: 'Installation', readTime: '8 min' },
  { slug: '/guide/orientation-panneau-solaire-balcon', title: 'Quelle orientation pour un panneau solaire de balcon ?', badge: 'Orientation', readTime: '8 min' },
  { slug: '/guide/reglementation-panneau-solaire-balcon-2026', title: 'Panneau solaire balcon : ru00e9glementation 2026 complu00e8te', badge: 'Ru00e9glementation', readTime: '9 min' },
];

const articles = [
  { slug: '/blog/combien-rapporte-panneau-solaire-balcon', title: 'Combien rapporte un panneau solaire de balcon ? Calcul r\u00e9el', badge: 'Analyse chiffr\u00e9e', readTime: '10 min' },
  { slug: '/blog/prix-electricite-2026-solaire', title: 'Prix de l\u2019\u00e9lectricit\u00e9 2026 : pourquoi le solaire devient incontournable', badge: 'Analyse', readTime: '7 min' },
  { slug: '/blog/panneau-solaire-hiver-production', title: 'Panneau solaire en hiver : combien \u00e7a produit vraiment ?', badge: 'Donn\u00e9es r\u00e9elles', readTime: '7 min' },
  { slug: '/blog/autoconsommation-solaire-comment-ca-marche', title: 'Autoconsommation solaire : comment \u00e7a marche concr\u00e8tement ?', badge: 'Comprendre', readTime: '8 min' },
  { slug: '/blog/accessoires-kit-solaire-balcon', title: '5 accessoires indispensables pour votre kit solaire de balcon', badge: '\u00c9quipement', readTime: '6 min' },
];

export default function ToutSavoirPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-8">
          <div className="badge-green mb-4 inline-block">Ressources</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Tout savoir sur le solaire de balcon</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">Guides pratiques, analyses chiffr&eacute;es, r&eacute;glementation : toutes les r&eacute;ponses &agrave; vos questions.</p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <a href="#guides" className="px-5 py-2.5 bg-green text-white text-sm font-semibold rounded-xl hover:bg-green-dark transition-colors">Guides pratiques (4)</a>
          <a href="#articles" className="px-5 py-2.5 bg-amber-pale text-amber-dark text-sm font-semibold rounded-xl hover:bg-amber-light/30 transition-colors">Articles &amp; analyses (5)</a>
        </div>

        <div id="guides" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-green rounded-full"></div>
            <h2 className="font-extrabold text-2xl">Guides pratiques</h2>
            <span className="text-xs text-stone bg-cream-dark px-2 py-1 rounded-lg">{guides.length} guides</span>
          </div>
          <div className="space-y-4 mb-14">
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
        </div>

        <div id="articles" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-amber rounded-full"></div>
            <h2 className="font-extrabold text-2xl">Articles et analyses</h2>
            <span className="text-xs text-stone bg-cream-dark px-2 py-1 rounded-lg">{articles.length} articles</span>
          </div>
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
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Pr&ecirc;t &agrave; passer au solaire ?</p>
          <p className="text-sm text-charcoal-light mb-4">Calculez vos &eacute;conomies en 30 secondes.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
