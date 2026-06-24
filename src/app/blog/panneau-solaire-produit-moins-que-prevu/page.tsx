import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Mon panneau solaire produit moins que prévu : que faire ?',
  description: 'Votre kit solaire de balcon ne produit pas autant qu\'espéré ? Diagnostic en 7 points : ombre, orientation, salissure, micro-onduleur, Linky. Solutions concrètes.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/panneau-solaire-produit-moins-que-prevu',
  },
};

const faqData = [
  {
    question: 'Pourquoi mon panneau solaire produit-il moins que prévu ?',
    answer: 'Les causes les plus fréquentes sont : ombre partielle (arbre, mur, garde-corps), mauvaise orientation (pas plein sud), salissure du panneau (poussière, pollen, fientes), période hivernale (jours courts, soleil bas), ou un micro-onduleur bridé. Souvent, c\'est une combinaison de ces facteurs. Vérifiez chaque point dans l\'ordre.',
  },
  {
    question: 'Combien produit vraiment un kit solaire de balcon ?',
    answer: 'Un kit 450 Wc bien orienté (sud) produit 400-650 kWh/an selon votre région. Mais c\'est une moyenne annuelle : en été vous produisez 3 à 4 fois plus qu\'en hiver. Si vous mesurez en décembre-janvier, votre production sera naturellement basse (15-25 kWh/mois) sans que rien ne soit anormal.',
  },
  {
    question: 'Comment vérifier que mon panneau solaire fonctionne correctement ?',
    answer: 'Trois méthodes : (1) L\'app du fabricant (Sunology STREAM, Beem App, MyDualSun) montre la production en temps réel en watts. (2) Votre compteur Linky : comparez la consommation instantanée avec et sans le panneau branché. (3) Une prise wattmètre (15-20 €) entre le panneau et la prise murale pour mesurer la production exacte.',
  },
  {
    question: 'L\'ombre réduit-elle beaucoup la production ?',
    answer: 'Oui, énormément. Une ombre sur 10 % de la surface du panneau peut réduire la production de 30 à 50 % (pas seulement 10 %). C\'est dû au fonctionnement en série des cellules : une cellule ombragée bloque le courant de toute la chaîne. Les panneaux avec optimiseurs (half-cut, bypass diodes) limitent cet effet, mais ne l\'éliminent pas.',
  },
  {
    question: 'Faut-il nettoyer son panneau solaire ?',
    answer: 'Oui, 2 à 4 fois par an selon votre environnement. En ville, la poussière et la pollution réduisent la production de 5 à 15 %. Près d\'arbres, le pollen au printemps et les feuilles en automne peuvent causer 10 à 20 % de pertes. Nettoyez à l\'eau claire (pas de détergent), idéalement le matin quand le panneau est froid.',
  },
  {
    question: 'Mon Linky montre 0 W d\'injection, est-ce normal ?',
    answer: 'Oui, c\'est même le signe que votre kit fonctionne parfaitement ! Si le Linky montre 0 W d\'injection, ça veut dire que vous autoconsommez 100 % de votre production. L\'électricité produite est directement utilisée par vos appareils (frigo, box, veilles) au lieu d\'être injectée sur le réseau. C\'est l\'objectif idéal.',
  },
];

const causes = [
  {
    num: '1',
    titre: 'Ombre partielle (la cause n°1)',
    impact: '30-50 % de perte',
    detail: 'Un garde-corps, un arbre, un mur voisin, même une antenne ou un fil à linge peuvent créer une ombre sur une partie du panneau. Le problème : une ombre sur 10 % de la surface peut réduire la production de 30 à 50 % à cause du fonctionnement en série des cellules.',
    solution: 'Identifiez l\'ombre à différentes heures (matin, midi, après-midi) et différentes saisons. Si possible, déplacez le panneau. Si l\'ombre est inévitable, un panneau avec cellules half-cut ou bypass diodes (tous les kits récents : Sunology PLAY 2, Beem On) limite l\'impact.',
    lien: { href: '/blog/panneau-solaire-ombre-optimiser-production', label: 'Guide complet ombre et production' },
  },
  {
    num: '2',
    titre: 'Mauvaise orientation ou inclinaison',
    impact: '7-55 % de perte',
    detail: 'Un panneau orienté est ou ouest perd ~20 % par rapport au sud. Orienté nord, c\'est 55 % de perte. L\'inclinaison compte aussi : à plat (0°), vous perdez 10-15 % par rapport à l\'angle optimal de 30-35°.',
    solution: 'Vérifiez votre orientation avec la boussole de votre téléphone. L\'idéal est plein sud avec 30-35° d\'inclinaison. Si votre balcon est est/ouest, c\'est correct (80 % du potentiel). Si c\'est nord, la rentabilité est fortement compromise.',
    lien: { href: '/guide/orientation-panneau-solaire-balcon', label: 'Guide orientation et production' },
  },
  {
    num: '3',
    titre: 'Salissure du panneau',
    impact: '5-20 % de perte',
    detail: 'Poussière, pollen, fientes d\'oiseaux, pollution urbaine, feuilles mortes : tout ce qui se dépose sur la vitre du panneau bloque la lumière. En ville, 5-10 % de perte. Près d\'arbres ou en zone industrielle, jusqu\'à 15-20 %.',
    solution: 'Nettoyez 2 à 4 fois par an à l\'eau claire (pas de Kärcher, pas de détergent agressif). Le matin, quand le panneau est froid et la rosée ramollit les dépôts. Un chiffon doux ou une éponge non abrasive suffisent.',
  },
  {
    num: '4',
    titre: 'Période hivernale normale',
    impact: 'Production ÷3 à ÷4',
    detail: 'En décembre-janvier, un panneau produit 3 à 4 fois moins qu\'en juin-juillet. C\'est normal : les jours sont courts (8h de lumière vs 16h), le soleil est bas, et la météo est souvent couverte. Un kit 450 Wc produit ~15-25 kWh/mois en hiver contre 60-80 kWh/mois en été.',
    solution: 'Si vous mesurez en hiver, ne paniquez pas. Comparez votre production aux données moyennes de votre département (notre calculateur utilise les moyennes PVGIS annualisées). Attendez mars-avril pour un bilan représentatif.',
    lien: { href: '/blog/panneau-solaire-hiver-production', label: 'Production hivernale : les données réelles' },
  },
  {
    num: '5',
    titre: 'Micro-onduleur bridé ou en panne',
    impact: '10-100 % de perte',
    detail: 'Le micro-onduleur convertit le courant continu (DC) du panneau en courant alternatif (AC) pour votre prise. S\'il est défaillant, la production chute brutalement. Certains onduleurs sont aussi bridés (ex : le Hoymiles 400 W du DualSun PREASY bride un panneau de 420 Wc).',
    solution: 'Vérifiez la production en temps réel via l\'app de votre kit. Si la courbe montre des chutes brutales ou une production anormalement basse par beau temps (< 50 % de la puissance crête), contactez le SAV du fabricant. Les micro-onduleurs sont garantis 25 ans.',
  },
  {
    num: '6',
    titre: 'Température élevée',
    impact: '5-15 % de perte en été',
    detail: 'Paradoxalement, les panneaux solaires perdent en rendement quand il fait très chaud. Au-delà de 25°C, chaque degré supplémentaire réduit la production de ~0,3-0,4 %. Un panneau à 60°C (courant en été) perd 10-15 % de son rendement nominal.',
    solution: 'Assurez une bonne ventilation derrière le panneau : ne le collez pas contre un mur. Un espace de 5-10 cm permet à l\'air de circuler et limite l\'échauffement. Les panneaux bifaciaux (Sunology PLAY 2, Beem On) gèrent mieux la chaleur.',
  },
  {
    num: '7',
    titre: 'Vous autoconsommez sans le savoir',
    impact: '0 % de perte (faux problème)',
    detail: 'Beaucoup de gens pensent que leur panneau ne produit pas parce que le compteur Linky n\'affiche pas d\'injection. En réalité, c\'est l\'inverse : si votre talon de consommation est supérieur à la production du panneau, toute l\'électricité est consommée instantanément par vos appareils.',
    solution: 'Vérifiez votre production via l\'app du fabricant, pas via le Linky. Le Linky ne montre que le surplus injecté, pas l\'autoconsommation. Si l\'app montre une production normale (ex : 200-350 W à midi par beau temps), tout va bien.',
    lien: { href: '/blog/talon-consommation-solaire', label: 'Comprendre le talon de consommation' },
  },
];

export default function PanneauProduitMoinsPage() {
  return (
    <>
      <SchemaArticle
        title="Mon panneau solaire produit moins que prévu : que faire ?"
        description="Diagnostic et solutions quand un kit solaire de balcon ne produit pas assez."
        url="https://monbalconsolaire.fr/blog/panneau-solaire-produit-moins-que-prevu"
        datePublished="2026-05-12"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Production inférieure aux prévisions' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Production inférieure aux prévisions' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Diagnostic</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Mon panneau solaire produit moins que prévu : que faire ?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Vous avez installé votre kit solaire de balcon, mais les chiffres de production sont décevants ? Avant de paniquer, suivez ce <strong>diagnostic en 7 points</strong>. Dans 80 % des cas, le problème est simple à identifier et à corriger.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>12 mai 2026</span>
              <span>&middot;</span>
              <span>11 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Les 3 questions à se poser d&apos;abord</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong>1. Depuis quand ?</strong> Si c&apos;est depuis l&apos;installation → probable problème d&apos;orientation ou d&apos;ombre. Si c&apos;est récent → salissure, panne, ou simplement l&apos;hiver.</li>
              <li><strong>2. Par rapport à quoi ?</strong> Comparez à la production théorique de votre département (<Link href="/calculateur" className="text-green hover:underline font-semibold">notre calculateur</Link>), pas à une attente floue.</li>
              <li><strong>3. Comment mesurez-vous ?</strong> L&apos;app du kit est fiable. Le Linky seul ne montre que le surplus injecté, pas l&apos;autoconsommation — ce qui donne une fausse impression de faible production.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 7 causes de sous-production (et leurs solutions)</h2>
              <div className="space-y-6">
                {causes.map((c) => (
                  <div key={c.num} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{c.num}</div>
                        <h3 className="font-bold text-base">{c.titre}</h3>
                      </div>
                      <span className="text-xs font-mono font-semibold text-amber-dark bg-amber-pale px-2 py-1 rounded-md">{c.impact}</span>
                    </div>
                    <div className="pl-11">
                      <p className="text-sm text-charcoal-light leading-relaxed mb-3">{c.detail}</p>
                      <div className="bg-green-pale/30 rounded-brand p-3 mb-2">
                        <p className="text-sm text-charcoal-light leading-relaxed"><strong className="text-green">Solution :</strong> {c.solution}</p>
                      </div>
                      {c.lien && (
                        <Link href={c.lien.href} className="text-green text-sm font-semibold hover:underline inline-flex items-center gap-1">
                          {c.lien.label} &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le checklist rapide de diagnostic</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Cochez chaque point dans l&apos;ordre. Si vous trouvez le coupable, inutile d&apos;aller plus loin :
              </p>
              <div className="card-lg bg-cream/40">
                <ol className="text-sm text-charcoal-light space-y-3">
                  {[
                    'Vérifier l\'app : la production instantanée est-elle cohérente par beau temps à midi ? (objectif : 60-80 % de la puissance crête)',
                    'Observer le panneau à 10h, 12h, 15h : y a-t-il de l\'ombre, même partielle ?',
                    'Vérifier l\'orientation avec la boussole du téléphone (sud = 180°, est = 90°, ouest = 270°)',
                    'Vérifier l\'inclinaison : entre 25° et 35° est optimal. À plat = 10-15 % de perte.',
                    'Nettoyer la surface du panneau à l\'eau claire',
                    'Comparer votre production mensuelle aux données PVGIS de votre département',
                    'Si tout est OK mais la production reste basse → contacter le SAV fabricant',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-green/10 text-green flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production attendue par région</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant de conclure que votre panneau sous-performe, vérifiez que vos attentes sont réalistes. Voici la production annuelle moyenne d&apos;un kit 450 Wc en orientation sud :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Région</th>
                      <th className="p-3 text-right font-bold">kWh/an</th>
                      <th className="p-3 text-right font-bold">kWh/mois (été)</th>
                      <th className="p-3 text-right font-bold">kWh/mois (hiver)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Marseille / PACA', '574', '70-80', '20-30'],
                      ['Lyon / Rhône-Alpes', '497', '60-70', '18-25'],
                      ['Bordeaux / Nouvelle-Aquitaine', '490', '60-68', '18-24'],
                      ['Paris / Île-de-France', '429', '52-60', '15-22'],
                      ['Lille / Hauts-de-France', '390', '48-55', '12-18'],
                      ['Strasbourg / Grand Est', '421', '50-58', '14-20'],
                    ].map(([region, annuel, ete, hiver], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{region}</td>
                        <td className="p-3 text-right font-mono text-green">{annuel}</td>
                        <td className="p-3 text-right font-mono">{ete}</td>
                        <td className="p-3 text-right font-mono text-stone">{hiver}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Kit 450 Wc, orientation sud, inclinaison 30°, coefficient de pertes 0,85. Source : PVGIS. <Link href="/calculateur" className="text-green hover:underline">Calculez pour votre département exact</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quand la &laquo; sous-production &raquo; n&apos;en est pas une</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Dans beaucoup de cas, votre panneau fonctionne parfaitement. Voici les faux problèmes les plus courants :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Le Linky montre 0 W d&apos;injection</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    C&apos;est souvent bon signe : votre <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline font-semibold">talon de consommation</Link> absorbe toute la production. Le Linky ne montre que le surplus, pas l&apos;autoconsommation. Vérifiez via l&apos;app du kit.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Production faible en hiver</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Un kit 450 Wc à Paris produit ~15-22 kWh/mois en décembre contre ~60 kWh en juin. <Link href="/blog/panneau-solaire-hiver-production" className="text-green hover:underline font-semibold">C&apos;est normal</Link>. Attendez le printemps pour un bilan représentatif.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Le panneau ne produit pas 450 W</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    450 Wc est la puissance crête dans des conditions de test idéales (1000 W/m² d&apos;ensoleillement, 25°C). En pratique, un panneau produit 60-80 % de sa puissance crête au meilleur de la journée. 300-360 W à midi par beau temps est <strong>excellent</strong> pour un 450 Wc.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Solutions pour améliorer la production</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si votre diagnostic confirme un vrai problème, voici les actions par ordre de coût :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-green">Nettoyer le panneau</h4>
                    <span className="text-xs font-mono text-stone">0 €</span>
                  </div>
                  <p className="text-xs text-charcoal-light leading-relaxed">Eau claire + chiffon doux, 2-4 fois par an. Gain possible : +5-15 %.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-green">Optimiser l&apos;inclinaison</h4>
                    <span className="text-xs font-mono text-stone">0-30 €</span>
                  </div>
                  <p className="text-xs text-charcoal-light leading-relaxed">Ajuster l&apos;angle à 30-35° avec un support ou des cales. Gain possible : +5-15 %. <Link href="/blog/accessoires-kit-solaire-balcon" className="text-green hover:underline">Voir les accessoires</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-green">Déplacer le panneau (moins d&apos;ombre)</h4>
                    <span className="text-xs font-mono text-stone">0 €</span>
                  </div>
                  <p className="text-xs text-charcoal-light leading-relaxed">Testez différents emplacements sur votre balcon/terrasse. Quelques centimètres peuvent suffire pour éviter une ombre récurrente.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-amber-dark">Ajouter une batterie</h4>
                    <span className="text-xs font-mono text-stone">488-900 €</span>
                  </div>
                  <p className="text-xs text-charcoal-light leading-relaxed">Ne produit pas plus, mais valorise mieux la production existante (autoconsommation 45 % → 80 %). Pertinent si votre talon de consommation dépasse la production. <Link href="/avis/zendure-solarflow" className="text-green hover:underline">Voir le Zendure SolarFlow</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-amber-dark">Ajouter un 2ème panneau</h4>
                    <span className="text-xs font-mono text-stone">200-599 €</span>
                  </div>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si votre espace le permet (max 840 Wc recommandés par l&apos;ADEME). Double la production. Rentable si votre consommation le justifie. <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="text-green hover:underline">Comparatif puissances</Link>.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Vérifiez la production théorique de votre département</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur utilise les données PVGIS officielles pour estimer la production de chaque kit selon votre localisation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production théorique &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire et ombre : comment optimiser la production</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le guide complet pour identifier et contourner les ombres</p>
                </Link>
                <Link href="/blog/panneau-solaire-hiver-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en hiver : combien ça produit vraiment ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Données de production mois par mois pour 3 villes</p>
                </Link>
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation pour un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;impact réel de l&apos;orientation sur votre production</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation : comment le calculer</h4>
                  <p className="text-xs text-charcoal-light mt-1">Pourquoi 0 W d&apos;injection au Linky est souvent une bonne nouvelle</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> données PVGIS (Commission européenne), fiches techniques constructeurs, retours utilisateurs forum-photovoltaique.fr et Reddit r/solaire (mai 2026). Tarif EDF base mai 2026 : 0,1940 €/kWh.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
