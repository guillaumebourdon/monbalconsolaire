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
  { slug: 'combien-panneaux-solaires-balcon', title: 'Combien de panneaux solaires sur un balcon ? R\u00e8gles et limites', excerpt: 'Limite 800 Wc, nombre de panneaux selon la puissance, s\u00e9rie ou parall\u00e8le : ce que la r\u00e9glementation fran\u00e7aise impose concr\u00e8tement.', badge: 'R\u00e9glementation', date: '26 juin 2026', readTime: '9 min' },
  { slug: 'kit-solaire-balcon-avis-2026', title: 'Kit solaire balcon : avis et retours d\u2019exp\u00e9rience 2026', excerpt: 'Trustpilot, forums, Reddit : synth\u00e8se des vrais retours utilisateurs sur Sunology, Beem, Zendure, EcoFlow.', badge: 'Avis utilisateurs', date: '20 juin 2026', readTime: '12 min' },
  { slug: 'micro-onduleur-solaire-fonctionnement', title: 'Micro-onduleur solaire : comment \u00e7a marche et lequel choisir ?', excerpt: 'Fonctionnement, comparatif Hoymiles vs APsystems vs Enphase, quel mod\u00e8le dans chaque kit, crit\u00e8res de choix et prix.', badge: 'Guide technique', date: '6 juin 2026', readTime: '10 min' },
  { slug: 'entretien-nettoyage-panneau-solaire-balcon', title: 'Entretien et nettoyage d\u2019un panneau solaire de balcon', excerpt: 'Fr\u00e9quence, produits, erreurs \u00e0 \u00e9viter, impact sur la production. Guide pratique avec checklist saisonni\u00e8re.', badge: 'Guide pratique', date: '4 juin 2026', readTime: '9 min' },
  { slug: 'bilan-6-mois-kit-solaire', title: 'Bilan apr\u00e8s 6 mois avec un kit solaire de balcon', excerpt: 'Production r\u00e9elle mois par mois, \u00e9conomies constat\u00e9es, probl\u00e8mes rencontr\u00e9s. Retour d\u2019exp\u00e9rience honn\u00eate.', badge: 'Retour d\u2019exp\u00e9rience', date: '27 mai 2026', readTime: '10 min' },
  { slug: 'panneau-solaire-est-ouest', title: 'Panneau solaire balcon est/ouest : production et rentabilit\u00e9', excerpt: 'Votre balcon est orient\u00e9 est ou ouest ? 80 % du potentiel sud, ROI 8-10 ans, et un avantage cach\u00e9 en autoconsommation.', badge: 'Orientation', date: '22 mai 2026', readTime: '10 min' },
  { slug: 'prises-connectees-suivi-solaire', title: 'Meilleures prises connect\u00e9es pour suivi solaire 2026', excerpt: 'Tapo P110, Shelly Plug S, Meross : comparatif des prises pour mesurer la production de votre kit solaire.', badge: 'S\u00e9lection 2026', date: '20 mai 2026', readTime: '8 min' },
  { slug: 'kit-solaire-pluie-grele', title: 'Kit solaire balcon : que faire quand il pleut ou gr\u00eale ?', excerpt: 'Production sous la pluie, r\u00e9sistance \u00e0 la gr\u00eale, neige, assurance. R\u00e9ponses concr\u00e8tes et chiffr\u00e9es.', badge: 'Guide pratique', date: '18 mai 2026', readTime: '9 min' },
  { slug: 'panneau-solaire-produit-moins-que-prevu', title: 'Mon panneau solaire produit moins que pr\u00e9vu : que faire ?', excerpt: 'Diagnostic en 7 points : ombre, orientation, salissure, hiver, Linky. Solutions concr\u00e8tes par ordre de co\u00fbt.', badge: 'Diagnostic', date: '12 mai 2026', readTime: '11 min' },
  { slug: 'talon-consommation-solaire', title: 'Talon de consommation : comment le calculer et l\'effacer avec le solaire', excerpt: 'Le bruit de fond \u00e9lectrique de votre foyer co\u00fbte 300-900 \u20ac/an. Voici comment le mesurer et le couvrir avec un kit solaire.', badge: 'Comprendre', date: '10 mai 2026', readTime: '10 min' },
  { slug: 'panneau-solaire-ombre-optimiser-production', title: 'Panneau solaire et ombre : comment optimiser la production', excerpt: 'Ombre partielle, arbre, mur voisin : quel impact et comment maximiser la production de votre kit.', badge: 'Optimisation', date: '6 mai 2026', readTime: '10 min' },
  { slug: 'panneau-solaire-balcon-nord', title: 'Panneau solaire balcon nord : est-ce rentable en 2026 ?', excerpt: 'Analyse honn\u00eate avec chiffres par ville, seuls cas o\u00f9 \u00e7a reste int\u00e9ressant, et alternatives.', badge: 'Rentabilit\u00e9', date: '24 avril 2026', readTime: '10 min' },
  { slug: 'lampes-solaires-balcon-2026', title: 'Lampes solaires balcon : 10 mod\u00e8les s\u00e9lectionn\u00e9s (2026)', excerpt: 'Guirlandes, appliques, projecteurs, lanternes : la s\u00e9lection des meilleures lampes solaires.', badge: 'S\u00e9lection 2026', date: '22 avril 2026', readTime: '10 min' },
  { slug: 'batteries-portables-solaires-comparatif', title: 'Batteries portables solaires 2026 : EcoFlow, Bluetti, Jackery compar\u00e9s', excerpt: '6 mod\u00e8les compar\u00e9s en d\u00e9tail : capacit\u00e9, puissance, usages r\u00e9els.', badge: 'Comparatif 2026', date: '21 avril 2026', readTime: '10 min' },
  { slug: 'mini-kits-solaires-amazon', title: 'Mini kits solaires Amazon < 300 euros : notre s\u00e9lection 2026', excerpt: 'Analyse honn\u00eate des mini kits disponibles sur Amazon : pi\u00e8ges \u00e0 \u00e9viter et 5 mod\u00e8les qui valent le coup.', badge: 'S\u00e9lection Amazon', date: '20 avril 2026', readTime: '9 min' },
  { slug: 'kit-solaire-plug-and-play-arnaque', title: 'Kit solaire plug-and-play : arnaque ou bon investissement ?', excerpt: 'Analyse honn\u00eate du march\u00e9 en 2026 : vraies arnaques, id\u00e9es re\u00e7ues, ROI r\u00e9el.', badge: 'Analyse', date: '19 avril 2026', readTime: '10 min' },
  { slug: 'accessoires-kit-solaire-balcon', title: '8 accessoires indispensables pour votre kit solaire de balcon', excerpt: 'Prise connect\u00e9e, rallonge \u00e9tanche, prot\u00e8ge-surtension : les accessoires qui am\u00e9liorent votre installation.', badge: '\u00c9quipement', date: '4 avril 2026', readTime: '8 min' },
  { slug: 'autoconsommation-solaire-comment-ca-marche', title: 'Autoconsommation solaire : comment \u00e7a marche concr\u00e8tement ?', excerpt: 'Le principe expliqu\u00e9 simplement : talon de consommation, surplus, compteur Linky.', badge: 'Comprendre', date: '3 avril 2026', readTime: '8 min' },
  { slug: 'panneau-solaire-hiver-production', title: 'Panneau solaire en hiver : combien \u00e7a produit vraiment ?', excerpt: 'Donn\u00e9es de production mois par mois pour 3 villes.', badge: 'Donn\u00e9es r\u00e9elles', date: '31 mars 2026', readTime: '7 min' },
  { slug: 'prix-electricite-2026-solaire', title: 'Prix de l\'\u00e9lectricit\u00e9 2026 : pourquoi le solaire devient incontournable', excerpt: '\u00c9volution du tarif EDF, fin de l\'ARENH, projections 2030.', badge: 'Analyse', date: '30 mars 2026', readTime: '7 min' },
  { slug: 'combien-rapporte-panneau-solaire-balcon', title: 'Combien rapporte un panneau solaire de balcon ? Calcul r\u00e9el', excerpt: 'Chiffres r\u00e9els de production et d\'\u00e9conomies pour 7 villes fran\u00e7aises.', badge: 'Analyse chiffr\u00e9e', date: '21 mars 2026', readTime: '10 min' },
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
