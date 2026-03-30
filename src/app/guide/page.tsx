import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides solaire balcon 2026',
  description: 'Guides pratiques pour installer un kit solaire sur votre balcon. Réglementation, installation, rentabilité, droits des locataires.',
};

const articles = [
  { slug: 'panneau-solaire-balcon-debutant', title: 'Panneau solaire balcon : le guide complet pour débutants', excerpt: 'Fonctionnement, prix, rentabilité par ville, réglementation, erreurs à éviter. Tout ce qu\'il faut savoir avant de se lancer.', badge: 'Guide essentiel', date: '30 mars 2026', readTime: '15 min' },
  { slug: 'panneau-solaire-balcon-locataire', title: 'Panneau solaire balcon locataire : droits, règles et astuces', excerpt: 'Vos droits en tant que locataire, réglementation copropriété, kits adaptés, et astuces pour maximiser la production en appartement.', badge: 'Locataires', date: '30 mars 2026', readTime: '8 min' },
  { slug: 'installer-kit-solaire-balcon', title: 'Comment installer un kit solaire sur un balcon : guide pas à pas', excerpt: 'De l\'ouverture du carton au premier kWh produit : toutes les étapes, les erreurs de sécurité à éviter, et la déclaration Enedis.', badge: 'Installation', date: '30 mars 2026', readTime: '8 min' },
  { slug: 'orientation-panneau-solaire-balcon', title: 'Quelle orientation pour un panneau solaire de balcon ?', excerpt: 'Sud, est, ouest, nord : impact réel sur la production. Coefficients, astuces d\'optimisation, et comment déterminer l\'orientation de votre balcon.', badge: 'Orientation', date: '30 mars 2026', readTime: '8 min' },
];

const comingSoon = [
  { title: 'Panneau solaire balcon : réglementation 2026 complète', desc: 'Norme NF C 15-100, déclaration Enedis, copropriété : tout ce que dit la loi.' },
];

export default function GuideIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-green mb-4 inline-block">Guides pratiques</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Guides du solaire de balcon</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Tout ce qu&apos;il faut savoir pour installer un kit solaire sur votre balcon : réglementation, installation, droits des locataires, optimisation.</p>
        <div className="space-y-6 mb-12">
          {articles.map((a) => (
            <Link key={a.slug} href={`/guide/${a.slug}`} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="badge-green mb-3">{a.badge}</div>
              <h2 className="font-bold text-xl group-hover:text-green transition-colors mb-2">{a.title}</h2>
              <p className="text-sm text-charcoal-light mb-3">{a.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-stone"><span>{a.date}</span><span>&middot;</span><span>{a.readTime} de lecture</span></div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire le guide &rarr;</span>
            </Link>
          ))}
        </div>
        {comingSoon.length > 0 && (<><h2 className="font-bold text-xl mb-4 text-charcoal">Prochains guides</h2>
        <div className="space-y-4">
          {comingSoon.map((c, i) => (
            <div key={i} className="card bg-cream/50"><h3 className="font-semibold text-sm">{c.title}</h3><p className="text-xs text-stone mt-1">{c.desc}</p><span className="text-xs text-amber-dark font-medium mt-2 inline-block">À venir prochainement</span></div>
          ))}
        </div></>)}
      </div>
    </section>
  );
}
