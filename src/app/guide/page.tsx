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
    slug: 'batterie-solaire-balcon-guide',
    title: 'Batterie solaire balcon : comment choisir la bonne capacité',
    excerpt: 'Seuils 700 Wh, 2 kWh, 5 kWh, rentabilité réelle et comparatif des solutions disponibles. Le guide pour ne pas se tromper.',
    badge: 'Nouveau',
    date: '3 juillet 2026',
    readTime: '12 min',
  },
  {
    slug: 'panneau-solaire-assurance-balcon',
    title: 'Panneau solaire balcon : que couvre votre assurance ?',
    excerpt: 'Gr\u00eale, vol, chute, responsabilit\u00e9 civile. Ce qu\u2019il faut d\u00e9clarer et ce qui est garanti.',
    badge: 'Assurance',
    date: '3 juin 2026',
    readTime: '8 min',
  },
  {
    slug: 'optimiser-autoconsommation-solaire',
    title: 'Comment optimiser son autoconsommation solaire au quotidien',
    excerpt: '8 astuces class\u00e9es par impact pour passer de 40 % \u00e0 85 % d\u2019autoconsommation, dont 6 gratuites.',
    badge: 'Optimisation',
    date: '25 mai 2026',
    readTime: '10 min',
  },
  {
    slug: 'declaration-cacsi-enedis-panneau-solaire',
    title: 'D\u00e9claration CACSI Enedis : le guide pas \u00e0 pas',
    excerpt: 'La proc\u00e9dure compl\u00e8te pour d\u00e9clarer votre kit \u00e0 Enedis. Avec mod\u00e8les de lettres pr\u00eats \u00e0 copier.',
    badge: 'D\u00e9marches Enedis',
    date: '23 avril 2026',
    readTime: '12 min',
  },
  {
    slug: 'panneau-solaire-copropriete',
    title: 'Panneau solaire en copropri\u00e9t\u00e9 : r\u00e8gles, votes et astuces',
    excerpt: 'Quand faut-il l\'accord du syndic ? Mod\u00e8le de courrier, vote en AG, cas pratiques.',
    badge: 'Copropri\u00e9t\u00e9',
    date: '17 avril 2026',
    readTime: '8 min',
  },
  {
    slug: 'reglementation-panneau-solaire-balcon-2026',
    title: 'Panneau solaire balcon : r\u00e9glementation 2026 compl\u00e8te',
    excerpt: 'Norme NF C 15-100, CACSI Enedis, copropri\u00e9t\u00e9, limite 900W : tout ce que dit la loi.',
    badge: 'R\u00e9glementation',
    date: '14 avril 2026',
    readTime: '9 min',
  },
  {
    slug: 'orientation-panneau-solaire-balcon',
    title: 'Quelle orientation pour un panneau solaire de balcon ?',
    excerpt: 'Sud, sud-est, ouest, nord : l\'impact r\u00e9el de l\'orientation sur votre production.',
    badge: 'Orientation',
    date: '29 mars 2026',
    readTime: '8 min',
  },
  {
    slug: 'installer-kit-solaire-balcon',
    title: 'Comment installer un kit solaire sur un balcon : pas \u00e0 pas',
    excerpt: 'Le guide d\'installation d\u00e9taill\u00e9, \u00e9tape par \u00e9tape, avec les outils n\u00e9cessaires.',
    badge: 'Installation',
    date: '28 mars 2026',
    readTime: '8 min',
  },
  {
    slug: 'panneau-solaire-balcon-locataire',
    title: 'Panneau solaire balcon locataire : droits, r\u00e8gles et astuces',
    excerpt: 'Vos droits en tant que locataire, r\u00e9glementation copropri\u00e9t\u00e9, kits adapt\u00e9s.',
    badge: 'Locataires',
    date: '20 mars 2026',
    readTime: '8 min',
  },
  {
    slug: 'panneau-solaire-balcon-debutant',
    title: 'Panneau solaire balcon : le guide complet pour d\u00e9butants',
    excerpt: 'Fonctionnement, prix, rentabilit\u00e9 par ville, r\u00e9glementation, erreurs \u00e0 \u00e9viter.',
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
