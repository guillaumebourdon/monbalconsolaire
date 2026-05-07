import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Panneau solaire et ombre : comment optimiser la production (2026)',
  description: 'Ombre partielle, arbre, mur voisin : quel impact sur votre kit solaire de balcon ? Chiffres réels, solutions concrètes et conseils pour maximiser la production.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/panneau-solaire-ombre-optimiser-production',
  },
};

const faqData = [
  {
    question: 'Un panneau solaire fonctionne-t-il à l\'ombre ?',
    answer: 'Oui, mais avec une production très réduite. Un panneau à l\'ombre partielle (30-50 % de la surface) perd 50 à 80 % de sa production selon la technologie utilisée. Un panneau entièrement à l\'ombre ne produit quasiment rien d\'exploitable.',
  },
  {
    question: 'Quelle est la différence entre ombre dure et ombre douce ?',
    answer: 'L\'ombre dure (mur, bâtiment) crée une coupure nette de lumière qui bloque complètement les cellules touchées. L\'ombre douce (nuages, voilage, feuillage léger) réduit la luminosité sans bloquer : la perte est de 20-40 % contre 60-80 % pour l\'ombre dure.',
  },
  {
    question: 'Un micro-onduleur protège-t-il de l\'ombre ?',
    answer: 'Partiellement. Les micro-onduleurs (présents dans les kits Sunology, Beem, Sunethic) isolent le panneau du réseau mais ne résolvent pas le problème interne au panneau. Ce sont les diodes bypass intégrées dans le panneau qui limitent la casse en court-circuitant les cellules ombragées.',
  },
  {
    question: 'Faut-il choisir un panneau demi-cellules (half-cut) ?',
    answer: 'Oui, c\'est un vrai avantage en zone partiellement ombragée. Les panneaux demi-cellules (comme le Sunology PLAY 2 ou le Beem On 460W) divisent le panneau en 2 moitiés indépendantes. Si l\'ombre ne touche qu\'une moitié, l\'autre continue à produire normalement.',
  },
  {
    question: 'Peut-on déplacer un kit plug-and-play pour suivre le soleil ?',
    answer: 'C\'est possible avec un kit sur support mobile (pas fixé au garde-corps). Certains utilisateurs déplacent leur panneau matin/soir pour éviter l\'ombre d\'un mur. C\'est contraignant mais efficace : le gain peut atteindre 15-25 % de production supplémentaire.',
  },
  {
    question: 'L\'ombre d\'un arbre est-elle pire que celle d\'un bâtiment ?',
    answer: 'Pas forcément. Un arbre à feuillage léger (bouleau, olivier) crée une ombre douce qui réduit la production de 20-40 %. Un bâtiment ou un mur crée une ombre dure bien plus pénalisante (60-80 % de perte). En revanche, un arbre très dense (sapin, chêne en été) peut être aussi bloquant qu\'un mur.',
  },
];

const impact_ombre = [
  {
    type: 'Aucune ombre',
    description: 'Panneau plein soleil toute la journée',
    perte: '0 %',
    prod_annuelle: '~ 500 kWh',
    severity: 'green',
  },
  {
    type: 'Ombre douce (nuages, voilage)',
    description: 'Luminosité réduite mais pas de coupure nette',
    perte: '20-40 %',
    prod_annuelle: '~ 300-400 kWh',
    severity: 'amber',
  },
  {
    type: 'Ombre partielle (arbre, balcon voisin)',
    description: '30-50 % de la surface du panneau ombragée',
    perte: '50-70 %',
    prod_annuelle: '~ 150-250 kWh',
    severity: 'amber',
  },
  {
    type: 'Ombre dure (mur, bâtiment)',
    description: 'Coupure franche de lumière sur le panneau',
    perte: '60-80 %',
    prod_annuelle: '~ 100-200 kWh',
    severity: 'red',
  },
  {
    type: 'Ombre totale permanente',
    description: 'Panneau jamais exposé directement',
    perte: '> 90 %',
    prod_annuelle: '< 50 kWh',
    severity: 'red',
  },
];

const solutions = [
  {
    titre: 'Choisir un panneau demi-cellules (half-cut)',
    desc: 'Les panneaux half-cut divisent le panneau en 2 circuits indépendants. Si l\'ombre ne touche qu\'une moitié, l\'autre produit normalement. Tous les kits Sunology et Beem récents utilisent cette technologie.',
    gain: '+20-40 % vs panneau classique ombragé',
    cout: 'Inclus dans le prix',
    difficulte: 'Aucune',
  },
  {
    titre: 'Optimiser le placement du panneau',
    desc: 'Identifiez la zone de votre balcon qui reçoit le plus de soleil direct (souvent le haut du garde-corps ou le rebord). Un décalage de 50 cm peut faire une vraie différence si l\'ombre est rasante.',
    gain: '+10-30 % selon la configuration',
    cout: 'Gratuit',
    difficulte: 'Facile',
  },
  {
    titre: 'Incliner le panneau pour éviter l\'ombre basse',
    desc: 'Un support inclinable (15-35°) permet de positionner le panneau au-dessus de la ligne d\'ombre du garde-corps ou du mur d\'en face. Les supports Sunology et Beem proposent un réglage d\'angle.',
    gain: '+10-20 %',
    cout: '30-80 € (support réglable)',
    difficulte: 'Facile',
  },
  {
    titre: 'Déplacer le panneau selon l\'heure',
    desc: 'Si votre panneau est sur un support mobile (pas fixé), vous pouvez le déplacer matin/soir pour suivre la zone ensoleillée. Contraignant mais efficace pour les balcons avec ombre variable.',
    gain: '+15-25 %',
    cout: 'Gratuit (si support mobile)',
    difficulte: 'Contraignant',
  },
  {
    titre: 'Passer à un kit bifacial',
    desc: 'Les panneaux bifaciaux (Sunology PLAY 2, Beem On) captent aussi la lumière réfléchie par le sol, le mur ou le garde-corps. Ce gain de 5-10 % compense partiellement l\'ombre.',
    gain: '+5-10 % de production totale',
    cout: 'Inclus dans les kits récents',
    difficulte: 'Aucune',
  },
];

const heures_ombre = [
  { situation: 'Balcon sud, aucune obstruction', heures_soleil: '6-8h', qualite: 'Excellent', couleur: 'text-green' },
  { situation: 'Balcon sud, ombre le matin (mur à l\'est)', heures_soleil: '4-6h', qualite: 'Bon', couleur: 'text-green' },
  { situation: 'Balcon sud-est, arbre en face', heures_soleil: '3-5h', qualite: 'Correct', couleur: 'text-amber' },
  { situation: 'Balcon ouest, ombre le matin + début d\'après-midi', heures_soleil: '3-4h', qualite: 'Limite', couleur: 'text-amber' },
  { situation: 'Balcon nord avec réflexion', heures_soleil: '1-2h', qualite: 'Insuffisant', couleur: 'text-amber-dark' },
  { situation: 'Balcon entouré de bâtiments hauts', heures_soleil: '0-2h', qualite: 'Déconseillé', couleur: 'text-amber-dark' },
];

export default function PanneauSolaireOmbrePage() {
  return (
    <>
      <SchemaArticle
        title="Panneau solaire et ombre : comment optimiser la production"
        description="Impact de l'ombre sur un kit solaire de balcon et solutions pour maximiser la production."
        url="https://monbalconsolaire.fr/blog/panneau-solaire-ombre-optimiser-production"
        datePublished="2026-05-06"
      />
      <SchemaFAQ questions={faqData} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Panneau solaire et ombre' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Optimisation</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Panneau solaire et ombre : comment optimiser la production
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Arbre, mur voisin, garde-corps, balcon au-dessus : l&apos;ombre est l&apos;ennemi n°1 de la production solaire. Voici comment la mesurer, la contourner et limiter son impact sur votre kit de balcon.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>6 mai 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          {/* En résumé */}
          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              L&apos;ombre peut réduire la production d&apos;un panneau solaire de <strong>20 % (ombre douce) à plus de 80 % (ombre dure)</strong>. Le problème : une seule cellule ombragée peut pénaliser tout le panneau. Les bonnes nouvelles : les <strong>panneaux demi-cellules</strong> (half-cut) limitent fortement cet effet, et des solutions simples comme <strong>repositionner le panneau</strong> ou <strong>l&apos;incliner</strong> permettent souvent de récupérer 20 à 40 % de production perdue. <strong>Avant d&apos;investir, observez votre balcon pendant 2-3 jours</strong> pour identifier les zones d&apos;ombre.
            </p>
          </div>

          <div className="space-y-10">

            {/* Section 1: Pourquoi l'ombre est si problématique */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi l&apos;ombre est le pire ennemi d&apos;un panneau solaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Contrairement à ce qu&apos;on pourrait croire, un panneau solaire ne perd pas sa production proportionnellement à la surface ombragée. <strong>Une seule cellule ombragée peut faire chuter la production de tout le panneau de 30 à 50 %</strong>.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Pourquoi ? Parce que les cellules d&apos;un panneau sont câblées en série : comme des maillons d&apos;une chaîne. La cellule la plus faible limite le courant de toute la chaîne. C&apos;est le principe du « maillon faible ».
              </p>
              <div className="card-lg bg-amber-pale/20 border-l-4 border-l-amber">
                <p className="font-bold text-sm mb-2 text-amber-dark">Le chiffre qui surprend</p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Un panneau de 450W dont seulement <strong>10 % de la surface est ombragée</strong> peut ne produire que <strong>200W</strong>, soit une perte de 55 %. C&apos;est pour ça que le placement du panneau est aussi important que son orientation.
                </p>
              </div>
            </section>

            {/* Section 2: Types d'ombre */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les deux types d&apos;ombre : douce vs dure</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Toutes les ombres ne se valent pas. Comprendre la différence vous permet d&apos;évaluer le vrai impact sur votre installation.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">Ombre douce</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&bull; Nuages, brume, feuillage léger</li>
                    <li>&bull; Réduit la luminosité <strong>sans coupure nette</strong></li>
                    <li>&bull; Perte : <strong className="font-mono text-amber-dark">20-40 %</strong></li>
                    <li>&bull; Le panneau continue de produire, juste moins</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber-dark">
                  <h3 className="font-bold text-base mb-2">Ombre dure</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&bull; Mur, bâtiment, cheminée, garde-corps</li>
                    <li>&bull; <strong>Coupure franche de lumière</strong> sur le panneau</li>
                    <li>&bull; Perte : <strong className="font-mono text-amber-dark">60-80 %</strong></li>
                    <li>&bull; Les cellules touchées bloquent la chaîne</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Tableau d'impact */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Impact réel de l&apos;ombre sur la production annuelle</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Estimations pour un kit 450W orienté sud en région parisienne (irradiation ~1050 kWh/kWc/an).
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Situation</th>
                      <th className="text-center p-3">Perte estimée</th>
                      <th className="text-center p-3">Production / an</th>
                      <th className="text-center p-3 rounded-tr-xl">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {impact_ombre.map((item, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{item.type}</td>
                        <td className="text-center p-3 font-mono text-xs font-bold text-amber-dark">{item.perte}</td>
                        <td className="text-center p-3 font-mono text-xs">{item.prod_annuelle}</td>
                        <td className="p-3 text-xs text-charcoal-light">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2">
                Estimations basées sur un kit 450W avec micro-onduleur et panneau demi-cellules. La production varie selon la ville, l&apos;orientation et l&apos;inclinaison.
              </p>
            </section>

            {/* Section 4: Comment mesurer l'ombre */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment mesurer l&apos;ombre sur votre balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant d&apos;acheter un kit, prenez 2-3 jours pour observer votre balcon. Voici la méthode simple :
              </p>
              <div className="card-lg bg-cream/50">
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold mb-1">1. Prenez une photo de votre balcon toutes les 2 heures</p>
                    <p className="text-charcoal-light">De 8h à 18h, un jour ensoleillé. Notez les zones d&apos;ombre à chaque prise.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">2. Identifiez la « fenêtre solaire »</p>
                    <p className="text-charcoal-light">C&apos;est la plage horaire pendant laquelle votre emplacement reçoit du soleil direct. <strong>4 heures minimum</strong> pour que le kit soit rentable.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">3. Repérez la meilleure zone</p>
                    <p className="text-charcoal-light">La zone qui reste au soleil le plus longtemps est celle où installer votre panneau. Souvent : le haut du garde-corps ou le rebord extérieur.</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">4. Vérifiez en hiver aussi</p>
                    <p className="text-charcoal-light">Le soleil est plus bas en hiver, donc les ombres sont plus longues. Un balcon ensoleillé en été peut être entièrement ombragé de novembre à février.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Heures de soleil par situation */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Combien d&apos;heures de soleil selon votre configuration</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Configuration du balcon</th>
                      <th className="text-center p-3">Heures de soleil direct</th>
                      <th className="text-center p-3 rounded-tr-xl">Qualité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {heures_ombre.map((item, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{item.situation}</td>
                        <td className="text-center p-3 font-mono text-xs font-bold">{item.heures_soleil}</td>
                        <td className={`text-center p-3 font-mono text-xs font-bold ${item.couleur}`}>{item.qualite}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2">
                Estimations en été (juin-août) pour la moitié nord de la France. En hiver, réduisez de 2-3 heures.
              </p>
              <p className="text-sm text-charcoal-light mt-2">
                → Lire aussi : <Link href="/blog/panneau-solaire-hiver-production" className="text-green font-semibold hover:underline">Panneau solaire en hiver : combien ça produit vraiment ?</Link>
              </p>
            </section>

            {/* Section 6: Solutions */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">5 solutions pour optimiser la production malgré l&apos;ombre</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&apos;ombre n&apos;est pas une fatalité. Voici les leviers concrets, du plus simple au plus contraignant. Commencez par vérifier que votre <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green font-semibold hover:underline">orientation est optimale</Link> : c&apos;est souvent le premier gain à aller chercher.
              </p>
              <div className="space-y-4">
                {solutions.map((s, i) => (
                  <div key={i} className="card-lg border-l-4 border-l-green">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <h3 className="font-bold text-base">{i + 1}. {s.titre}</h3>
                      <span className="font-mono text-xs font-bold text-green bg-green-pale px-2 py-1 rounded-lg whitespace-nowrap">{s.gain}</span>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex gap-4 text-xs text-stone">
                      <span>Coût : <strong className="text-charcoal">{s.cout}</strong></span>
                      <span>Difficulté : <strong className="text-charcoal">{s.difficulte}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: La technologie demi-cellules expliquée */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi les panneaux demi-cellules changent la donne</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La technologie <strong>half-cut</strong> (demi-cellules) est le progrès le plus concret pour les balcons partiellement ombragés. Voici comment ça marche :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Panneau classique</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Toutes les cellules en une seule chaîne. Si une cellule est ombragée, <strong>tout le panneau perd 50-70 %</strong> de sa production.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Panneau demi-cellules (half-cut)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Deux circuits indépendants (haut/bas). Si le bas est ombragé, <strong>le haut continue à produire normalement</strong>. Perte limitée à 30-40 %.
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Tous les kits récents des marques françaises (Sunology PLAY 2, Beem On 460W, Sunethic F500) utilisent la technologie demi-cellules. <strong>C&apos;est un critère essentiel si votre balcon a de l&apos;ombre partielle.</strong> Retrouvez ces modèles dans notre <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green font-semibold hover:underline">comparatif des meilleurs kits solaires 2026</Link>.
              </p>
            </section>

            {/* Section 8: Quand renoncer */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quand faut-il renoncer au solaire de balcon ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Soyons honnêtes : certains balcons ne sont pas adaptés. Voici les seuils à connaître :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">4h+ de soleil direct/jour → Foncez</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Votre kit sera rentable en 4-6 ans. L&apos;ombre partielle est gérable avec les solutions ci-dessus.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">2-4h de soleil direct/jour → Étudiez bien</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">La rentabilité est possible mais plus longue (7-10 ans). Privilégiez un kit petit budget (Beem Kit 300W à 299 €) pour limiter le risque.</p>
                </div>
                <div className="card border-l-4 border-l-amber-dark">
                  <h4 className="font-bold text-sm mb-1">Moins de 2h de soleil direct/jour → Déconseillé</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le retour sur investissement dépassera 12-15 ans. Investissez plutôt dans des ampoules LED ou un thermostat intelligent pour réduire votre facture.</p>
                </div>
              </div>
            </section>

            {/* CTA Calculator */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre balcon reçoit-il assez de soleil ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur estime votre production réelle selon votre département et votre orientation. Résultat en 30 secondes.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production →
              </Link>
            </div>

            {/* Articles liés */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation pour un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;impact réel de l&apos;orientation sur votre production</p>
                </Link>
                <Link href="/blog/panneau-solaire-balcon-nord" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon nord : est-ce rentable ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Analyse honnête avec chiffres par ville</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Calcul réel de rentabilité pour 7 villes</p>
                </Link>
              </div>
            </section>

            {/* Newsletter */}
            <NewsletterBanner />

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Sources */}
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources :</strong> données PVGIS (Joint Research Centre), fiches techniques fabricants 2026 (Sunology, Beem, Sunethic), études sur l&apos;impact de l&apos;ombrage partiel sur les modules photovoltaïques (IEA-PVPS).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
