import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides pratiques solaire de balcon 2026 — Installation et réglementation',
  description: 'Guides pas à pas pour installer un kit solaire sur votre balcon : réglementation 2026, droits des locataires, copropriété, déclaration Enedis, orientation optimale.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide',
  },
};

const articles = [
  {
    slug: 'declaration-cacsi-enedis-panneau-solaire',
    title: 'Declaration CACSI Enedis : le guide pas a pas',
    excerpt: 'La procedure complete pour declarer votre kit a Enedis. Avec modeles de lettres prets a copier.',
    badge: 'Demarches Enedis',
    date: '23 avril 2026',
    readTime: '12 min',
  },
  {
    slug: 'panneau-solaire-copropriete',
    title: 'Panneau solaire en copropriete : regles, votes et astuces',
    excerpt: 'Quand faut-il l\'accord du syndic ? Modele de courrier, vote en AG, cas pratiques.',
    badge: 'Copropriete',
    date: '17 avril 2026',
    readTime: '8 min',
  },
  {
    slug: 'reglementation-panneau-solaire-balcon-2026',
    title: 'Panneau solaire balcon : reglementation 2026 complete',
    excerpt: 'Norme NF C 15-100, CACSI Enedis, copropriete, limite 900W : tout ce que dit la loi.',
    badge: 'Reglementation',
    date: '14 avril 2026',
    readTime: '9 min',
  },
  {
    slug: 'orientation-panneau-solaire-balcon',
    title: 'Quelle orientation pour un panneau solaire de balcon ?',
    excerpt: 'Sud, sud-est, ouest, nord : l\'impact reel de l\'orientation sur votre production.',
    badge: 'Orientation',
    date: '29 mars 2026',
    readTime: '8 min',
  },
  {
    slug: 'installer-kit-solaire-balcon',
    title: 'Comment installer un kit solaire sur un balcon : pas a pas',
    excerpt: 'Le guide d\'installation detaille, etape par etape, avec les outils necessaires.',
    badge: 'Installation',
    date: '28 mars 2026',
    readTime: '8 min',
  },
  {
    slug: 'panneau-solaire-balcon-locataire',
    title: 'Panneau solaire balcon locataire : droits, regles et astuces',
    excerpt: 'Vos droits en tant que locataire, reglementation copropriete, kits adaptes.',
    badge: 'Locataires',
    date: '20 mars 2026',
    readTime: '8 min',
  },
  {
    slug: 'panneau-solaire-balcon-debutant',
    title: 'Panneau solaire balcon : le guide complet pour debutants',
    excerpt: 'Fonctionnement, prix, rentabilite par ville, reglementation, erreurs a eviter.',
    badge: 'Guide essentiel',
    date: '18 mars 2026',
    readTime: '15 min',
  },
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
              <div className="flex items-center gap-4 text-xs text-stone">
                <span>{a.date}</span><span>&middot;</span><span>{a.readTime} de lecture</span>
              </div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire le guide &rarr;</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
