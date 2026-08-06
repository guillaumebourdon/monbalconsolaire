import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';

export const metadata: Metadata = {
  title: 'Batteries portables et balcon fixe 2026 : Bluetti Balco 260, EcoFlow, Jackery',
  description: 'Comparatif batteries portables (EcoFlow, Bluetti, Jackery) et batteries balcon fixe 2026 (Bluetti Balco 260, Zendure SolarFlow). Prix mis &agrave; jour ao&ucirc;t 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/batteries-portables-solaires-comparatif',
  },
};

const faqData = [
  {
    question: 'Quelle est la différence entre une batterie portable et une batterie solaire fixe ?',
    answer: 'Une batterie portable (type EcoFlow, Bluetti, Jackery) est une unité tout-en-un transportable avec prises CA, USB et ports voiture. Elle peut être rechargée sur secteur ou avec un panneau solaire. Une batterie solaire fixe (type Sunology VAULT, Beem Battery) est dédiée à l\'autoconsommation domestique : elle stocke l\'excédent solaire pour la maison, branchée en permanence. Les portables sont plus flexibles, les fixes sont optimisées pour l\'usage quotidien.',
  },
  {
    question: 'Peut-on recharger une batterie portable avec un kit solaire de balcon ?',
    answer: 'Oui, mais il faut vérifier la compatibilité. La plupart des batteries portables acceptent 200-800 W d\'entrée solaire via prise MC4 ou Anderson. Avec un panneau 300-450 W bien orienté, vous rechargez une batterie 1 kWh en 3-5 heures de plein soleil. Attention : les kits Sunology, Beem et Sunethic sont conçus pour injecter dans votre réseau domestique, pas pour recharger une batterie portable. Il faut des panneaux dédiés (Jackery SolarSaga, EcoFlow 400W, etc.).',
  },
  {
    question: 'Quelle capacité choisir pour un usage balcon ?',
    answer: 'Pour un usage balcon (backup coupure de courant, soutien ponctuel), une capacité de 1 à 1,5 kWh suffit largement : elle alimente un frigo pendant 24h ou une box internet + lumières pendant 2-3 jours. Pour un usage plus intensif (télétravail en coupure, recharger un vélo électrique), visez 2 kWh+. Au-delà de 3 kWh, on est dans du stockage domestique semi-fixe, mieux servi par une Sunology VAULT ou Beem Battery.',
  },
  {
    question: 'Les batteries LiFePO4 sont-elles vraiment plus durables ?',
    answer: 'Oui, nettement. Les batteries LiFePO4 (lithium fer phosphate) acceptent 3 000 à 6 000 cycles de charge-décharge contre 500 à 1 000 pour les anciennes lithium-ion NMC. En usage quotidien, ça fait la différence entre 5 ans et 15-20 ans de durée de vie. Les modèles récents (EcoFlow DELTA 2, Bluetti AC180, Anker SOLIX) sont quasi tous en LiFePO4. Évitez les modèles "EcoFlow RIVER 2" ou "Jackery Explorer 1000 v1" qui sont encore en NMC.',
  },
  {
    question: 'Quelle marque est la plus fiable en 2026 ?',
    answer: 'Les trois leaders — EcoFlow, Bluetti, Jackery — ont tous des SAV français opérationnels et des taux de panne inférieurs à 2%. EcoFlow a l\'écosystème le plus complet (panneaux, batteries additionnelles, onduleurs PowerStream). Bluetti offre généralement le meilleur rapport capacité/prix. Jackery reste la référence du nomade avec un design compact et une interface simple. Anker SOLIX est un nouveau venu sérieux (support Anker légendaire).',
  },
  {
    question: 'Combien de temps tient une batterie portable en backup pour un appartement ?',
    answer: 'Ça dépend de votre consommation. Exemple concret avec une EcoFlow DELTA 2 (1 kWh) : frigo moderne (~50 W) + box internet (~20 W) + quelques LED = 100 W en continu, soit 10 heures d\'autonomie. Un micro-ondes ou un chauffage vide la batterie en 1-2h. En coupure de courant courte (jusqu\'à 8-12h), une batterie 1-1,5 kWh couvre l\'essentiel. Pour une journée entière avec télétravail, prévoyez 2-3 kWh.',
  },
];

const batteries = [
  {
    num: 1,
    nom: 'EcoFlow DELTA 2',
    marque: 'EcoFlow',
    prix: '569-699 €',
    capacite: '1 024 Wh',
    puissance: '1 800 W',
    note: '9/10',
    entree_solaire: '500 W max',
    cycles: '3 000+',
    poids: '12 kg',
    points_forts: [
      'Charge ultra-rapide (80% en 50 minutes)',
      'Extensible jusqu\'à 3 kWh avec batterie additionnelle',
      'Application mobile très complète',
      'Technologie LiFePO4 (3 000 cycles)',
    ],
    points_faibles: [
      'Prix élevé',
      'Un peu encombrant pour du vrai nomade',
    ],
    verdict: 'Notre choix n°1 pour un usage domestique. Excellent compromis capacité/fiabilité.',
  },
  {
    num: 2,
    nom: 'Bluetti AC180',
    marque: 'Bluetti',
    prix: '549-699 €',
    capacite: '1 152 Wh',
    puissance: '1 800 W',
    note: '8,5/10',
    entree_solaire: '500 W max',
    cycles: '3 500+',
    poids: '16 kg',
    points_forts: [
      'Meilleur rapport capacité/prix (1 152 Wh pour 549 €)',
      'Mode Turbo Boost 2 700 W (cafetière, micro-ondes)',
      'Charge rapide 80% en 45 minutes',
      'LiFePO4 3 500 cycles',
    ],
    points_faibles: [
      'Plus lourd que l\'EcoFlow DELTA 2',
      'Application mobile perfectible',
    ],
    verdict: 'Le meilleur rapport qualité/prix. Un peu moins élégant mais redoutablement efficace.',
  },
  {
    num: 3,
    nom: 'Jackery Explorer 1000 Plus',
    marque: 'Jackery',
    prix: '799-999 €',
    capacite: '1 264 Wh',
    puissance: '2 000 W',
    note: '8,5/10',
    entree_solaire: '800 W max',
    cycles: '4 000+',
    poids: '14 kg',
    points_forts: [
      'Design le plus compact du comparatif',
      'Extensible jusqu\'à 5 kWh avec batteries add.',
      'Entrée solaire jusqu\'à 800 W (très rapide)',
      'LiFePO4 4 000 cycles',
    ],
    points_faibles: [
      'Prix premium',
      'Moins d\'options via app mobile',
    ],
    verdict: 'Le choix design et évolutif. Parfait si vous voulez pouvoir étendre plus tard.',
  },
  {
    num: 4,
    nom: 'Anker SOLIX C1000',
    marque: 'Anker',
    prix: '649-799 €',
    capacite: '1 056 Wh',
    puissance: '1 800 W',
    note: '8/10',
    entree_solaire: '600 W max',
    cycles: '3 000+',
    poids: '12,9 kg',
    points_forts: [
      'Nouveau venu, finitions premium',
      'Mode silencieux en charge secteur',
      'App mobile Anker (très bien faite)',
      '11 prises différentes',
    ],
    points_faibles: [
      'Marque moins installée sur ce segment',
      'SAV parfois plus lent',
    ],
    verdict: 'Prometteur. Si vous aimez l\'écosystème Anker (chargeurs, etc.), c\'est cohérent.',
  },
  {
    num: 5,
    nom: 'EcoFlow RIVER 3',
    marque: 'EcoFlow',
    prix: '249-349 €',
    capacite: '245 Wh',
    puissance: '600 W',
    note: '7,5/10',
    entree_solaire: '220 W max',
    cycles: '3 000+',
    poids: '3,4 kg',
    points_forts: [
      'Le plus léger et compact',
      'Prix accessible',
      'Parfait pour backup ponctuel (box, frigo mini)',
      'LiFePO4',
    ],
    points_faibles: [
      'Capacité limitée (2-3h pour 100 W de conso)',
      'Pas adapté à un usage intensif',
    ],
    verdict: 'Le choix "entrée de gamme" ou secondaire. À prendre en complément d\'une plus grosse.',
  },
  {
    num: 6,
    nom: 'Bluetti AC70',
    marque: 'Bluetti',
    prix: '449-549 €',
    capacite: '768 Wh',
    puissance: '1 000 W',
    note: '7,5/10',
    entree_solaire: '500 W max',
    cycles: '3 000+',
    poids: '10 kg',
    points_forts: [
      'Bon prix pour sa capacité',
      'Taille intermédiaire polyvalente',
      'LiFePO4',
    ],
    points_faibles: [
      'Puissance limitée à 1 000 W (pas de micro-ondes, chauffage)',
      'Moins d\'options que l\'AC180',
    ],
    verdict: 'Le bon compromis si vous voulez du Bluetti sans aller jusqu\'au haut de gamme.',
  },
];

const cas_usage = [
  {
    titre: 'Backup ponctuel (coupures de courant)',
    reco: 'EcoFlow RIVER 3 (245 Wh) ou Bluetti AC70 (768 Wh)',
    explication: 'Pour 1 à 4 heures de coupure, pas besoin de gros. 245 Wh suffisent pour frigo + box + LED pendant ~2h. Budget 300-500 €.',
  },
  {
    titre: 'Télétravail pendant une coupure',
    reco: 'EcoFlow DELTA 2 (1 024 Wh) ou Bluetti AC180 (1 152 Wh)',
    explication: 'Pour faire tourner ordinateur + écran + box + lumière pendant 8-10h, comptez 1 kWh. Budget 549-699 €.',
  },
  {
    titre: 'Usage nomade (van, bateau, camping)',
    reco: 'Jackery Explorer 1000 Plus',
    explication: 'Compact, design, robustement construit. Son entrée solaire 800 W permet de recharger vite avec un panneau portable. Budget 799-999 €.',
  },
  {
    titre: 'Stockage solaire balcon fixe',
    reco: 'Bluetti Balco 260 (2 560 Wh) — le nouveau choix 2026',
    explication: 'Pour stocker l\'excédent d\'un kit solaire de balcon, une batterie fixe est bien plus efficace qu\'une portable. Le Balco 260 à 889 € offre 2,56 kWh avec 96,1 % de rendement. Extensible, garantie 5 ans.',
  },
];

export default function BatteriesPortablesPage() {
  return (
    <>
      <SchemaArticle
        title="Batteries portables et balcon fixe 2026 : Bluetti Balco 260, EcoFlow, Jackery"
        description="Comparatif batteries portables et batteries balcon fixe 2026, prix mis &agrave; jour ao&ucirc;t 2026."
        url="https://monbalconsolaire.fr/blog/batteries-portables-solaires-comparatif"
        datePublished="2026-04-21"
        dateModified="2026-08-06"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Accessoires', href: '/accessoires' }, { label: 'Batteries portables' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Accessoires', href: '/accessoires' }, { label: 'Batteries portables' }]} />
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="badge-amber inline-block">Comparatif 2026</div>
              <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-green text-white">Mis &agrave; jour ao&ucirc;t 2026</div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Batteries portables et balcon fixe 2026 : comparatif complet (Bluetti Balco 260, EcoFlow, Jackery)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Deux familles, deux usages. Les <strong>batteries portables</strong> (EcoFlow, Bluetti, Jackery) pour le backup et le nomade. Les <strong>batteries balcon fixe</strong> (Bluetti Balco 260, Zendure SolarFlow) pour stocker l&apos;&eacute;nergie solaire au quotidien. Prix mis &agrave; jour ao&ucirc;t 2026.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>21 avril 2026</span>
              <span>&middot;</span>
              <span>Mis &agrave; jour ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>12 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed mb-3">
              <strong>Batteries portables :</strong> l&apos;<strong>EcoFlow DELTA 2</strong> (569-699 &euro;) reste notre choix n&deg;1 en backup domestique. La <strong>Bluetti AC180</strong> (549-699 &euro;) offre le meilleur rapport capacit&eacute;/prix. Pour le nomade, la <strong>Jackery Explorer 1000 Plus</strong> (799-999 &euro;) est la r&eacute;f&eacute;rence compacte.
            </p>
            <p className="text-charcoal-light text-sm leading-relaxed">
              <strong>Batterie balcon fixe (nouveau) :</strong> le <strong>Bluetti Balco 260</strong> (889 &euro;, 2,56 kWh) est la nouveaut&eacute; qui change la donne depuis juillet 2026 &mdash; meilleur prix/Wh du march&eacute;, extensible, garantie 5 ans. &agrave; pr&eacute;f&eacute;rer au Zendure SolarFlow si vous partez sur du stockage fix&eacute;.
            </p>
          </div>

          <div className="space-y-10">
            {/* Pourquoi une batterie portable */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Batterie portable ou batterie solaire fixe : que choisir ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant de parler des modèles, clarifions une confusion très fréquente. Il existe <strong>deux familles distinctes</strong> de batteries :
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">🔋 Batterie portable (ce comparatif)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                    Unité tout-en-un avec prises, poignée, écran. Transportable. Rechargeable sur secteur, panneau solaire, voiture.
                  </p>
                  <p className="text-xs text-stone">
                    <strong>Usages :</strong> backup coupure, camping, van, chantier, extérieur.
                  </p>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <div className="flex items-center gap-2 mb-2">
                    <ProductThumb src="/images/produits/bluetti-balco-260-front.webp" alt="Bluetti Balco 260" href="/avis/bluetti-balco-260" size="sm" />
                    <ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="sm" />
                    <ProductThumb src="/images/produits/ecoflow-powerstream-2.webp" alt="EcoFlow PowerStream" href="/avis/ecoflow-powerstream" size="sm" />
                  </div>
                  <h3 className="font-bold text-base mb-2">&#127968; Batterie solaire fixe (balcon)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                    Bo&icirc;tier branch&eacute; en permanence sur votre kit solaire de balcon. Stocke l&apos;exc&eacute;dent pour le soir. Pas transportable, mais bien plus efficace pour l&apos;autoconsommation.
                  </p>
                  <p className="text-xs text-stone">
                    <strong>Exemples :</strong> <Link href="/avis/bluetti-balco-260" className="text-green hover:underline font-semibold">Bluetti Balco 260</Link> (nouveau, 889 &euro;), Zendure SolarFlow, EcoFlow PowerStream. <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">Voir le comparatif d&eacute;di&eacute;</Link>.
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Cet article compare les <strong>batteries portables</strong>. Si vous cherchez à optimiser l&apos;autoconsommation d&apos;un kit solaire de balcon (Sunology, Beem), orientez-vous vers les batteries fixes — elles sont plus adaptées.
              </p>
            </section>

            {/* Batteries balcon fixe — Bluetti Balco 260 */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Batteries balcon fixe 2026 : Bluetti Balco 260 et alternatives</h2>
              <div className="bg-amber-pale/20 border border-amber/20 rounded-xl p-4 mb-5">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Juillet 2026 :</strong> Bluetti lance le <strong>Balco 260</strong>, sa premi&egrave;re batterie balcon fixe (2,56 kWh, 889 &euro;). Elle s&apos;impose d&apos;embl&eacute;e comme le meilleur rapport capacit&eacute;/prix du march&eacute; des batteries fix&eacute;es, devant le Zendure SolarFlow et l&apos;EcoFlow PowerStream.
                </p>
              </div>

              {/* Mini tableau comparatif fixe */}
              <div className="overflow-x-auto -mx-5 md:mx-0 mb-6">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Batterie fixe balcon</th>
                      <th className="text-center p-3">Capacit&eacute;</th>
                      <th className="text-center p-3">Entr&eacute;e solaire</th>
                      <th className="text-center p-3">Prix</th>
                      <th className="text-center p-3 rounded-tr-xl">Garantie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-pale/30 border-b border-border-light">
                      <td className="p-3 font-semibold">
                        <span className="text-xs bg-amber text-white font-bold px-2 py-0.5 rounded-full mr-2">Nouveau</span>
                        Bluetti Balco 260
                      </td>
                      <td className="text-center p-3 font-mono text-xs">2 560 Wh</td>
                      <td className="text-center p-3 font-mono text-xs">2 400 W</td>
                      <td className="text-center p-3 font-mono text-xs text-green font-bold">889 &euro;</td>
                      <td className="text-center p-3 text-xs font-semibold">5 ans</td>
                    </tr>
                    <tr className="bg-white border-b border-border-light">
                      <td className="p-3 font-semibold">Zendure SolarFlow 800</td>
                      <td className="text-center p-3 font-mono text-xs">960 Wh</td>
                      <td className="text-center p-3 font-mono text-xs">800 W</td>
                      <td className="text-center p-3 font-mono text-xs">&agrave; partir de 599 &euro;</td>
                      <td className="text-center p-3 text-xs">2 ans</td>
                    </tr>
                    <tr className="bg-cream/50 border-b border-border-light">
                      <td className="p-3 font-semibold">EcoFlow PowerStream</td>
                      <td className="text-center p-3 font-mono text-xs">jusqu&apos;&agrave; 2 000 Wh</td>
                      <td className="text-center p-3 font-mono text-xs">600 W</td>
                      <td className="text-center p-3 font-mono text-xs">&agrave; partir de 799 &euro;</td>
                      <td className="text-center p-3 text-xs">2 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Balco 260 carte d&eacute;tail */}
              <div className="card-lg border-l-4 border-l-green">
                <div className="flex items-start gap-4 mb-4 flex-wrap">
                  <div className="shrink-0">
                    <ProductThumb src="/images/produits/bluetti-balco-260-front.webp" alt="Bluetti Balco 260" href="/avis/bluetti-balco-260" size="md" />
                  </div>
                  <div>
                    <span className="badge-amber text-xs mb-2 inline-block">Nouveau juillet 2026</span>
                    <h3 className="font-bold text-lg">Bluetti Balco 260 — notre avis</h3>
                    <p className="text-xs text-stone mt-1">2 560 Wh &middot; LiFePO4 &middot; Garantie 5 ans &middot; Rendement 96,1&nbsp;%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-pale/30 rounded-lg p-3">
                    <p className="text-xs font-semibold text-green mb-2">&#10003; Ce qu&apos;on aime</p>
                    <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                      <li>&bull; 2,56 kWh pour 889 &euro; &mdash; meilleur prix/Wh du march&eacute;</li>
                      <li>&bull; Extensible jusqu&apos;&agrave; 15,36 kWh (5 batteries BC-260 additionnelles)</li>
                      <li>&bull; Rendement 96,1 % &mdash; quasi pas de pertes</li>
                      <li>&bull; Garantie 5 ans (contre 2 ans pour la concurrence)</li>
                      <li>&bull; Installation sans &eacute;lectricien, prise standard</li>
                    </ul>
                  </div>
                  <div className="bg-amber-pale/30 rounded-lg p-3">
                    <p className="text-xs font-semibold text-amber-dark mb-2">&#9888;&#65039; Les limites</p>
                    <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                      <li>&bull; Non portable &mdash; solution fix&eacute;e au balcon</li>
                      <li>&bull; N&eacute;cessite des panneaux solaires d&eacute;di&eacute;s (16-60 V DC)</li>
                      <li>&bull; Produit r&eacute;cent &mdash; retours long terme &agrave; confirmer</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="font-mono font-bold text-green text-xl">889 &euro;</div>
                    <div className="text-xs text-stone">Prix de lancement (PPC 1 399 &euro;)</div>
                  </div>
                  <Link href="/avis/bluetti-balco-260" className="btn-primary text-sm">
                    Lire notre avis complet &rarr;
                  </Link>
                </div>
              </div>
              <p className="text-xs text-stone mt-3">
                &#8594; Comparatif complet des kits avec batterie : <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">batteries balcon fixe 2026</Link>.
              </p>
            </section>

            {/* Tableau comparatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau comparatif rapide — batteries portables</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Modèle</th>
                      <th className="text-center p-3">Capacité</th>
                      <th className="text-center p-3">Puissance</th>
                      <th className="text-center p-3">Poids</th>
                      <th className="text-center p-3">Prix</th>
                      <th className="text-center p-3 rounded-tr-xl">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batteries.map((b, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{b.nom}</td>
                        <td className="text-center p-3 font-mono text-xs">{b.capacite}</td>
                        <td className="text-center p-3 font-mono text-xs">{b.puissance}</td>
                        <td className="text-center p-3 text-xs">{b.poids}</td>
                        <td className="text-center p-3 font-mono text-xs">{b.prix}</td>
                        <td className="text-center p-3">
                          <span className="text-xs font-bold text-green">{b.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Les 6 batteries en détail */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 6 batteries portables en d&eacute;tail</h2>
              <div className="space-y-6">
                {batteries.map((b) => (
                  <div key={b.num} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-lg bg-amber text-white flex items-center justify-center font-bold text-sm">{b.num}</span>
                          <h3 className="font-bold text-lg">{b.nom}</h3>
                        </div>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">
                          {b.marque} &middot; {b.capacite} &middot; {b.puissance}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-green text-lg">{b.prix}</div>
                        <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">
                          Note : {b.note}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-2 mb-4 pb-3 border-b border-border-light text-xs">
                      <div>
                        <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Entrée solaire</span>
                        <div className="font-mono font-semibold">{b.entree_solaire}</div>
                      </div>
                      <div>
                        <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Cycles</span>
                        <div className="font-mono font-semibold">{b.cycles}</div>
                      </div>
                      <div>
                        <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Poids</span>
                        <div className="font-mono font-semibold">{b.poids}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <div className="bg-green-pale/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-green mb-2">✓ Points forts</p>
                        <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                          {b.points_forts.map((p, i) => (
                            <li key={i}>&bull; {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-amber-pale/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-dark mb-2">⚠️ Points faibles</p>
                        <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                          {b.points_faibles.map((p, i) => (
                            <li key={i}>&bull; {p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-cream/60 rounded-lg p-3">
                      <p className="text-xs font-semibold text-charcoal mb-1">💡 Notre verdict</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{b.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quelle batterie selon usage */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quelle batterie pour quel usage ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le bon choix dépend entièrement de ce que vous allez en faire. Voici les 4 profils d&apos;usage les plus fréquents :
              </p>
              <div className="space-y-3">
                {cas_usage.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{c.titre}</h4>
                    <p className="text-xs text-amber font-semibold mb-2">→ Notre reco : {c.reco}</p>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Critères de choix */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 critères à vérifier avant d&apos;acheter</h2>
              <div className="space-y-3">
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">1. Technologie de batterie (LiFePO4 obligatoire)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Les LiFePO4 acceptent 3 000-6 000 cycles, durée de vie 10-15 ans. Les NMC (ancienne génération) : 500-1 000 cycles, 3-5 ans. La différence est énorme sur le long terme.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">2. Puissance en sortie (watts)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Indique ce que vous pouvez brancher. Moins de 1 000 W = pas de micro-ondes, cafetière, chauffage. 1 800 W+ = la plupart des appareils domestiques fonctionnent.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">3. Capacité utile (Wh vs kWh)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    1 kWh = 1 000 Wh = environ 10 heures pour 100 W de consommation continue. Pour estimer : une box internet consomme ~15 W, un frigo moderne ~50 W (en moyenne sur 24h), une LED ~5 W, un ordinateur portable ~60 W.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">4. Vitesse de charge secteur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Essentielle pour recharger rapidement avant une coupure annoncée ou un départ. Les meilleures batteries se rechargent à 80% en 45-60 minutes. Les anciens modèles prennent 6-8 heures.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">5. Entrée solaire maximale</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si vous comptez coupler la batterie à un panneau solaire portable, vérifiez l&apos;entrée max (200-800 W). Une entrée 800 W permet de recharger une batterie 1 kWh en 2-3h de plein soleil.
                  </p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Vous avez un kit solaire de balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Une batterie portable n&apos;est pas la solution la plus efficace pour stocker l&apos;excédent solaire. Calculez d&apos;abord votre production pour choisir la bonne stratégie.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-amber">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-amber text-white font-bold px-2 py-0.5 rounded-full">Nouveau</span>
                    <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Bluetti Balco 260</h4>
                  </div>
                  <p className="text-xs text-charcoal-light">2,56 kWh fix&eacute; au balcon &mdash; 889 &euro; au lancement, meilleur prix/Wh du march&eacute;</p>
                </Link>
                <Link href="/guide/batterie-solaire-balcon-guide" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide : quelle capacit&eacute; de batterie pour votre balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">700 Wh, 2 kWh, 5 kWh &mdash; le guide complet pour ne pas se tromper</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Sunology VAULT, Beem Battery : les solutions fixes pour optimiser l&apos;autoconsommation</p>
                </Link>
                <Link href="/blog/mini-kits-solaires-amazon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mini kits solaires Amazon &lt; 300 €</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les kits portables à petit budget pour tester le solaire</p>
                </Link>
                <Link href="/avis/jackery-solarvault-3-pro" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Jackery SolarVault 3 Pro</h4>
                  <p className="text-xs text-charcoal-light mt-1">Batterie LFP 2,52&nbsp;kWh + onduleur &agrave; 839&nbsp;&euro; en promo</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire : comment ça marche</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe du talon, surplus et stockage expliqué simplement</p>
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
                      <span className="text-stone group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Note :</strong> prix indicatifs constat&eacute;s en ao&ucirc;t 2026 (sites fabricants, Amazon, Cdiscount). Ils varient selon les promotions. Prix batteries portables : -15 &agrave; -25 % par rapport &agrave; avril 2026. Prix Bluetti Balco 260 : 889 &euro; (prix de lancement jusqu&apos;au 30 sept. 2026, PPC 1 399 &euro;).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
