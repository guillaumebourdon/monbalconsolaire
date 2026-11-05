import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';

const DUALSUN_URL = 'https://dualsun.com/produits/dualsun-preasy/';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'DualSun PREASY avis : panneau pliable Made in France',
  description: 'Avis DualSun PREASY : panneau pliable 420 Wc assemblé en France, design bois, vendu sur devis en 2026. Prix relevé, ROI indicatif et verdict honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/dualsun-preasy',
  },
});

const faqData = [
  {
    question: 'Le DualSun PREASY est-il vraiment fabriqué en France ?',
    answer: 'Partiellement. L\'assemblage final est réalisé en France, à l\'usine DualSun de Jujurieux (Ain, près de Lyon). Mais les cellules photovoltaïques sont fabriquées en Chine, comme pour la quasi-totalité des panneaux du marché. C\'est honnête de la part de DualSun de le préciser. L\'assemblage français apporte un contrôle qualité local et un SAV plus réactif.',
  },
  {
    question: 'Pourquoi le PREASY coûte-t-il plus cher que le Sunology PLAY (ex-PLAY 2) ?',
    answer: 'Plusieurs facteurs : l\'assemblage en France (main-d\'œuvre plus coûteuse), le design premium avec châssis aspect bois, la distribution via réseau d\'installateurs (marge intermédiaire), et le boîtier de suivi PREASYBOX inclus. Le Sunology PLAY est vendu en direct, ce qui réduit les coûts. Pour 420 Wc, le PREASY est objectivement trop cher face à un PLAY à 500 Wc pour 599 €.',
  },
  {
    question: 'Le PREASY est-il compatible avec une batterie ?',
    answer: 'Non, pas nativement. Le micro-onduleur Hoymiles intégré convertit en AC et injecte directement sur le réseau domestique. Il n\'y a pas de sortie DC pour alimenter une batterie. Si vous voulez du stockage, il faut un système séparé comme le Zendure SolarFlow ou l\'EcoFlow PowerStream.',
  },
  {
    question: 'Peut-on installer 2 PREASY sur un balcon ?',
    answer: 'Oui, DualSun recommande jusqu\'à 2 PREASY (840 Wc), conformément aux recommandations ADEME et AFNOR. Mais attention : chaque panneau fait 178 × 107 cm déplié et pèse 36 kg. Il faut un balcon spacieux et un garde-corps solide. Budget : ~1 400-1 800 € pour 2 panneaux.',
  },
  {
    question: 'L\'app MyDualSun est-elle bien ?',
    answer: 'Oui, plutôt. L\'app se connecte en Bluetooth au boîtier PREASYBOX, puis transmet les données en WiFi. Vous suivez la production en temps réel, l\'historique jour/semaine/mois, et les économies estimées. C\'est propre et intuitif, comparable à l\'app Sunology STREAM. En revanche, pas de gestion heures pleines/creuses ni de pilotage avancé comme chez Zendure.',
  },
  {
    question: 'Faut-il faire la déclaration CACSI à Enedis ?',
    answer: 'Oui, comme tout système photovoltaïque connecté au réseau. La procédure est la même que pour un Sunology ou Beem : 25 minutes en ligne, gratuit. DualSun fournit l\'attestation de conformité. Votre installateur partenaire peut aussi s\'en charger.',
  },
];

const points_forts = [
  {
    titre: 'Design premium : le plus beau kit du marché',
    detail: 'Le châssis en aluminium avec finition aspect bois est objectivement le plus élégant du marché plug-and-play. Si l\'esthétique compte pour vous (balcon visible, terrasse soignée), le PREASY est le seul qui ne ressemble pas à un panneau industriel posé au sol.',
  },
  {
    titre: 'Assemblé en France (Jujurieux, Ain)',
    detail: 'DualSun est un fabricant français historique (créé en 2010 à Marseille), reconnu pour ses panneaux hybrides SPRING. L\'assemblage en France garantit un contrôle qualité local et un SAV réactif. C\'est un argument de poids pour ceux qui veulent soutenir l\'industrie française.',
  },
  {
    titre: 'Pliable et transportable',
    detail: 'Le PREASY se plie en deux et tient dans un coffre de voiture ou un placard. C\'est le seul kit 420 Wc du marché qui offre cette compacité au rangement. Pratique pour les locataires qui déménagent ou pour ranger le panneau en hiver.',
  },
  {
    titre: 'Bifacial TOPCon : production optimisée',
    detail: 'La technologie bifaciale permet de capter la lumière par les deux faces du panneau (réflexion du sol). Le rendement de 21 % et la technologie TOPCon de type N sont au niveau des meilleurs du marché. En test, le panneau atteint 95 %+ de sa puissance théorique.',
  },
  {
    titre: 'Garanties solides : 25 ans panneau + onduleur',
    detail: 'Le panneau ET le micro-onduleur sont garantis 25 ans, avec une performance garantie à 80 % sur 30 ans. C\'est au niveau de Sunology (25 + 30 ans) et supérieur à la moyenne du marché.',
  },
];

const points_faibles = [
  {
    titre: 'Prix prohibitif : 870-900 € pour 420 Wc',
    detail: 'C\'est LE problème du PREASY. Au lancement, DualSun annonçait 680 € TTC ; chez les revendeurs, nous l\'avons relevé à 870-900 € (15 mai 2026). Au 5 novembre 2026, dualsun.com n\'affiche plus de prix : le PREASY se vend sur devis. Pour comparaison : le Sunology PLAY (ex-PLAY 2) offre 515 W pour 599 €. Le ratio €/Wc du PREASY (2,07 €) est le pire du marché plug-and-play.',
  },
  {
    titre: '36 kg : le plus lourd du marché',
    detail: 'Le PREASY pèse 36 kg, contre 24,8 kg pour le panneau du Sunology PLAY 500 Wc (30 kg avec son châssis) et 26 kg pour le Beem On. C\'est nettement plus lourd. Sur un balcon en étage, c\'est un vrai sujet : il faut monter 36 kg + les ballasts de lestage (30-48 kg d\'eau ou sable). Prévoyez de l\'aide.',
  },
  {
    titre: 'Pas de vente en ligne directe',
    detail: 'Contrairement à Sunology et Beem qui vendent en direct sur leur site, DualSun passe par un réseau d\'installateurs et de revendeurs. Ça ajoute une marge intermédiaire (d\'où le prix élevé) et complique l\'achat. Pas de livraison en 48h comme chez la concurrence.',
  },
  {
    titre: '420 Wc seulement, pas d\'écosystème batterie',
    detail: 'Le PREASY ne propose ni batterie compatible ni système de stockage. La puissance est limitée à 420 Wc par panneau (840 Wc max avec 2). Sunology propose le PLAY MAX avec batterie VAULT, Zendure propose le SolarFlow avec 1,92 kWh. DualSun n\'a rien d\'équivalent en plug-and-play.',
  },
  {
    titre: 'Micro-onduleur Hoymiles 400 W : bridé',
    detail: 'Le micro-onduleur Hoymiles est limité à 400 W de sortie pour un panneau de 420 Wc. Vous perdez donc ~20 W en crête. C\'est un choix de DualSun pour rester sous les seuils réglementaires, alors que le Sunology PLAY associe son panneau 500 Wc à un micro-onduleur MX500 de 500 W, sans bridage de ce type.',
  },
];

const comparaison = [
  ['Prix', '870-900 € (relevé 05/2026, sur devis depuis)', '599 €', 'Arrêté'],
  ['Puissance', '420 Wc', '515 W', '460 Wc'],
  ['€/Wc', '2,07 €', '1,16 €', '—'],
  ['Poids', '36 kg', '24,8 kg (30 kg station)', '~26 kg'],
  ['Installation', '~30 min', '1 minute', '5 minutes'],
  ['Micro-onduleur', 'Hoymiles 400 W', 'MX500 500 W', 'APSystems'],
  ['Technologie', 'TOPCon bifacial', 'Back Contact bifacial', 'TOPCon bifacial'],
  ['Design', 'Aspect bois premium', 'Industriel classique', 'Industriel classique'],
  ['Pliable', 'Oui', 'Non', 'Non'],
  ['Assemblé en France', 'Oui', 'Non', 'Non'],
  ['App', 'MyDualSun', 'STREAM', 'Beem App'],
  ['Batterie compatible', 'Non', 'VAULT (option)', 'Beem Battery (option)'],
  ['Garantie', '25 ans + 30 ans perf.', 'Panneau 30 ans + 30 ans perf., onduleur 25 ans', '25 ans'],
  ['Vente en ligne', 'Non (revendeurs)', 'Oui (direct)', 'Oui (direct)'],
  ['Paiement fractionné', 'Selon revendeur', 'Non', '4x ou 10x sans frais'],
];

export default function DualsunPreasyPage() {
  return (
    <>
      <SchemaArticle
        title="DualSun PREASY avis : le nouveau challenger du marché"
        description="Avis complet sur le DualSun PREASY en 2026."
        url="https://monbalconsolaire.fr/avis/dualsun-preasy"
        datePublished="2026-05-09"
        dateModified="2026-11-05"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="DualSun PREASY" brand="DualSun" description="Panneau solaire pliable plug-and-play 420 Wc, TOPCon bifacial, assemblé en France, châssis aspect bois, micro-onduleur Hoymiles 400 W." price={870} ratingValue={6.5} url="https://monbalconsolaire.fr/avis/dualsun-preasy" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'DualSun PREASY' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'DualSun PREASY' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              DualSun PREASY avis : le nouveau challenger du marché
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              DualSun, fabricant français reconnu pour ses panneaux hybrides, se lance dans le plug-and-play avec le <strong>PREASY</strong>. Un panneau pliable de 420 Wc, assemblé en France, avec un design soigné. Sur le papier, c&apos;est séduisant. Mais à <strong>870-900 €</strong> chez les revendeurs (relevé en mai 2026&nbsp;; vente sur devis depuis), est-ce que ça vaut le coup face à un Sunology PLAY (ex-PLAY 2, 515&nbsp;W) à 599 € ?
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>9 mai 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span>
              <span>&middot;</span>
              <span>11 min de lecture</span>
            </div>
          </div>

          <ProductHero
            brand="DualSun"
            name="PREASY"
            power="420 Wc"
            price="Sur devis"
            score="6.5/10"
            tagline="Le panneau pliable Made in France au design premium. Beau, mais cher."
            affiliateUrl={DUALSUN_URL}
            affiliateLabel="Voir la fiche DualSun (sur devis)"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 15/05/2026 &middot; Peut varier selon les promos</p>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en 30 secondes</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le DualSun PREASY est un <strong>beau produit bien conçu</strong>, avec un vrai savoir-faire français et un design unique sur le marché. Mais le prix est un problème majeur : <strong>870-900 € pour 420 Wc</strong>, c&apos;est 45 % plus cher qu&apos;un Sunology PLAY qui offre 80 Wc de plus. Le PREASY s&apos;adresse à ceux qui veulent absolument du Made in France et un design premium, et qui acceptent de payer ce surcoût. Pour tous les autres, Sunology et Beem restent de meilleurs choix.
            </p>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 border-l-4 border-l-amber mb-6">
            <div className="flex items-start gap-3">
              <span className="text-xl">&#9888;&#65039;</span>
              <div>
                <h3 className="font-bold text-sm text-amber-dark mb-2">Verdict &eacute;ditorial : ROI long</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Avec un ROI de 10,5 ans, le PREASY s&apos;adresse &agrave; un public attach&eacute; &agrave; la production fran&ccedil;aise et au design premium. Si la rentabilit&eacute; est votre crit&egrave;re principal, le Sunology PLAY 515&nbsp;W (6,2 ans) ou le Sunethic F500 (7,3 ans, panneau assembl&eacute; en France) sont de meilleurs choix.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui rend le PREASY différent</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le PREASY n&apos;est pas &laquo; juste un panneau de plus &raquo;. DualSun apporte trois éléments que personne d&apos;autre n&apos;a sur le marché plug-and-play :
              </p>
              <div className="grid md:grid-cols-3 gap-3 my-6">
                <div className="card border-l-4 border-l-amber">
                  <div className="text-2xl mb-2">🪵</div>
                  <h3 className="font-bold text-sm mb-1">Design aspect bois</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Châssis aluminium avec finition bois. Le seul panneau plug-and-play qui ne dénote pas sur une terrasse soignée.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="text-2xl mb-2">🇫🇷</div>
                  <h3 className="font-bold text-sm mb-1">Assemblé en France</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Usine de Jujurieux (Ain). DualSun est un fabricant français depuis 2010, pas un revendeur de produits chinois rebrandés.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="text-2xl mb-2">📐</div>
                  <h3 className="font-bold text-sm mb-1">Pliable en deux</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Se plie et tient dans un coffre de voiture. Idéal pour les locataires qui déménagent ou pour ranger en hiver.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique complète</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Puissance</td>
                      <td className="p-3 font-mono">420 Wc (bifacial)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Technologie cellules</td>
                      <td className="p-3">TOPCon type N, monocristallin, bi-verre</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Rendement</td>
                      <td className="p-3 font-mono">21 %</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Micro-onduleur</td>
                      <td className="p-3">Hoymiles 400 W (WiFi intégré)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Dimensions déplié</td>
                      <td className="p-3 font-mono">178 × 107 cm, hauteur 74 cm</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Poids</td>
                      <td className="p-3 font-mono">36 kg</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Câble secteur</td>
                      <td className="p-3 font-mono">10 m</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Lestage</td>
                      <td className="p-3">2 ballasts de 15 L (eau ou sable)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Connectivité</td>
                      <td className="p-3">Bluetooth + WiFi (app MyDualSun)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Indice protection</td>
                      <td className="p-3 font-mono">IP67</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Normes</td>
                      <td className="p-3 text-xs">IEC 61215, IEC 61730</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Garantie</td>
                      <td className="p-3 text-xs">25 ans panneau + 25 ans onduleur, 30 ans performance</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Assemblage</td>
                      <td className="p-3">France (Jujurieux, Ain)</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Prix constaté</td>
                      <td className="p-3 font-mono font-bold text-amber-dark">870-900 € TTC (revendeurs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points forts du PREASY</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">{p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="DualSun PREASY" merchantName="DualSun" affiliateUrl={DUALSUN_URL} label="Voir la fiche DualSun (vente sur devis)" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points faibles à connaître</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h3 className="font-bold text-sm mb-1 text-amber-dark">{p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas sûr que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalisé selon votre département et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le DualSun PREASY →
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Rentabilité financière prioritaire',
                  'Budget limité',
                  'Pas attaché au Made in France premium',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Face à la concurrence : le tableau qui fait mal</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le PREASY joue dans la même catégorie que le Sunology PLAY (ex-PLAY 2) et l&apos;ancien Beem On 460W (arrêté). Voici comment il se positionne :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[550px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Critère</th>
                      <th className="text-center p-2.5 font-semibold">DualSun PREASY</th>
                      <th className="text-center p-2.5 font-semibold">Sunology PLAY (515 W)</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Beem On 460W</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparaison.map(([c, d, s, b], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-2.5 font-semibold">{c}</td>
                        <td className="text-center p-2.5">{d}</td>
                        <td className="text-center p-2.5">{s}</td>
                        <td className="text-center p-2.5">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Le PREASY perd sur presque tous les critères objectifs : prix, puissance, poids, facilité d&apos;installation. Il ne gagne que sur le design et le Made in France. La question est : combien êtes-vous prêt à payer pour ces deux critères ?
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul de rentabilité (et pourquoi il fait mal)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons le PREASY au dernier prix relevé (870 €, mai 2026), installé à Lyon en exposition sud. C&apos;est un calcul indicatif&nbsp;: le prix réel dépend désormais du devis.
              </p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production annuelle</strong> : 428 kWh/an (420 Wc, sud, Lyon, PR 0,85)</li>
                  <li>&bull; <strong>Autoconsommation sans batterie</strong> : 85%</li>
                  <li>&bull; <strong>Tarif EDF</strong> : {KWH_PRICE_LABEL} (inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL})</li>
                  <li>&bull; <strong>Économies la première année</strong> : <strong>73 &euro;</strong></li>
                  <li>&bull; <strong>ROI</strong> : <strong>10,5 ans</strong></li>
                  <li>&bull; <strong>Économies sur 25 ans</strong> : <strong>~2 580 &euro;</strong></li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                <strong>10,5 ans de ROI.</strong> &Agrave; titre de comparaison :
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-xl">10,5 ans</div>
                  <div className="text-xs text-stone mt-1">DualSun PREASY</div>
                  <div className="text-xs text-stone">(870 &euro;, 420 Wc)</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-green text-xl">6,2 ans</div>
                  <div className="text-xs text-stone mt-1">Sunology PLAY</div>
                  <div className="text-xs text-stone">(599 &euro;, 515 W)</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-green text-xl">3,6 ans</div>
                  <div className="text-xs text-stone mt-1">Zendure SolarFlow 800 Plus + 2 panneaux</div>
                  <div className="text-xs text-stone">(719 &euro; en promotion, 1 000 W + batterie)</div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                Pour moins que le PREASY, le pack Zendure SolarFlow 800 Plus + 2 panneaux de 500&nbsp;W (719&nbsp;&euro; en promotion le 5 novembre 2026) offre plus du double de puissance, du stockage, et un ROI presque 3 fois plus rapide (3,6 ans contre 10,5 ans). C&apos;est difficile à justifier économiquement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui c&apos;est le bon choix</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Vous voulez du Made in France, point final</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si acheter français est votre priorité absolue et que le surcoût ne vous gêne pas, le PREASY est le seul kit plug-and-play assemblé en France par un fabricant historique. Sunethic F500 est aussi français (690 €, 500 Wc), mais DualSun a 15 ans d&apos;expérience dans le solaire.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">L&apos;esthétique est non négociable</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le design aspect bois est unique sur le marché. Si votre panneau est visible depuis votre salon ou celui des voisins, et que l&apos;apparence compte autant que la production, le PREASY est le seul choix défendable.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Vous déménagez souvent</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le design pliable est un vrai atout pour les locataires nomades. Le PREASY se range dans un placard et se transporte dans un coffre de voiture. Aucun autre kit 420 Wc n&apos;offre cette compacité au rangement.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui ce n&apos;est pas le bon choix</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Vous cherchez la rentabilité</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Avec un ROI de 10,5 ans, le PREASY est l&apos;un des kits les moins rentables du marché. Si votre objectif est de réduire votre facture EDF efficacement, prenez un Sunology PLAY 515 W (ROI 6,2 ans) ou un Zendure SolarFlow 800 Plus en pack (ROI 3,6 ans avec batterie, au prix promotionnel).</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Votre budget est limité</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">870-900 € pour 420 Wc sans batterie, c&apos;est objectivement trop. Pour moins cher, le pack Zendure SolarFlow 800 Plus + 2 panneaux de 500 W vous donne 1 000 W + 1,92 kWh de stockage (719 € en promotion le 5 novembre 2026).</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Vous voulez du stockage</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le PREASY n&apos;a pas d&apos;écosystème batterie. Pas de batterie propriétaire, pas de compatibilité avec le Zendure ou l&apos;EcoFlow. Si le stockage vous intéresse, ce n&apos;est pas le bon point d&apos;entrée.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le verdict : beau mais trop cher</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Le DualSun PREASY est un <strong>produit bien conçu par un fabricant sérieux</strong>. Le design est le plus beau du marché, l&apos;assemblage français est un vrai argument, et la qualité de fabrication est au rendez-vous. Mais <strong>le prix tue la proposition de valeur</strong>.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  À 680 € (prix annoncé au lancement), le PREASY serait un concurrent crédible du Sunethic F500 (690 €, 500 Wc). À 870-900 € (prix revendeur relevé en mai 2026), il est hors course face à un Sunology PLAY (515 W) à 599 € qui offre plus de puissance, moins de poids, et une installation en 1 minute.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  <strong>Notre conseil :</strong> si DualSun passe en vente directe et baisse le prix vers 600-650 €, le PREASY deviendra très intéressant. En attendant, c&apos;est un achat de conviction (Made in France, design) plutôt qu&apos;un achat rationnel.
                </p>
                <p className="font-semibold text-lg text-center mt-6 mb-2">Notre verdict : 6.5/10</p>
                <p className="text-sm text-charcoal-light text-center">
                  Excellent produit pénalisé par un prix déconnecté du marché.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Quel kit est vraiment rentable pour votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Comparez les kits selon votre département et votre exposition en 30 secondes.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/sunethic-f500" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunethic F500</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;autre kit Made in France : 500 Wc pour 690 €, plus puissant et moins cher</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le leader du marché : 515 W, 599 €, installation en 1 minute</p>
                </Link>
                <Link href="/comparatif/zendure-vs-sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Zendure vs Sunology vs Beem : le match 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet des 3 systèmes les plus populaires</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <AffiliateCTA productName="DualSun PREASY" merchantName="DualSun" affiliateUrl={DUALSUN_URL} label="Demander un devis sur DualSun" variant="box" position="footer-box" />

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
                <strong>Méthodologie :</strong> ROI calculé avec tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. Données constructeur DualSun, fiche technique officielle PREASY, test Révolution Énergétique (sept. 2024 - jan. 2025), prix constatés chez revendeurs (mai 2026). Article rédigé sans rémunération de DualSun.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
