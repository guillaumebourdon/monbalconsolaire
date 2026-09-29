import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

const PAGE_URL = 'https://monbalconsolaire.fr/blog/prise-exterieure-etanche-kit-solaire';
const AMAZON_TAG = 'monbalconsolai-21';
const amazon = (asin: string) => `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}`;

export const metadata: Metadata = {
  title: 'Prise extérieure étanche et rallonge pour kit solaire balcon',
  description:
    'IP44, IP66, 30 mA, section de câble H07RN-F : quelle prise et quelle rallonge pour brancher un kit solaire de balcon en sécurité. Sélection Amazon 2026.',
  alternates: { canonical: PAGE_URL },
};

const faqData = [
  {
    question: 'IP44 ou IP66 pour une prise extérieure de kit solaire ?',
    answer:
      'IP44 est le minimum imposé par la norme NF C 15-100 pour une prise extérieure. Suffisant si la prise est abritée (sous un balcon supérieur, un auvent). Dès qu\'elle est directement exposée à la pluie battante (balcon au dernier étage, terrasse découverte), passez à IP65 ou IP66 : le second chiffre (jets d\'eau puissants pour le 5, buse quelle que soit la direction pour le 6) fait toute la différence sur la durée de vie du matériel.',
  },
  {
    question: 'Peut-on brancher un kit solaire de balcon sur une rallonge classique non étanche ?',
    answer:
      'Non, pas à l\'extérieur. Une rallonge domestique en H05VV-F (gaine PVC) n\'est pas conçue pour l\'humidité, les UV ni les écarts de température : la gaine durcit et se fissure en une ou deux saisons, avec un risque réel de court-circuit. Utilisez uniquement du câble H07RN-F (gaine caoutchouc) avec des fiches IP44 minimum, comme sur les rallonges de chantier.',
  },
  {
    question: 'Le disjoncteur différentiel 30 mA est-il obligatoire pour une prise de balcon ?',
    answer:
      'Oui. La norme NF C 15-100 impose une protection différentielle 30 mA sur tout circuit desservant l\'extérieur, sans exception. Dans un logement récent, c\'est généralement déjà le cas pour l\'ensemble du tableau. Dans un immeuble ancien ou si vous ne savez pas comment la prise du balcon est raccordée, un adaptateur différentiel 30 mA portable s\'intercale entre la prise et le kit en attendant une vérification par un électricien.',
  },
  {
    question: 'Peut-on utiliser une multiprise (barrette) à l\'extérieur pour un kit solaire ?',
    answer:
      'Non, sauf modèle explicitement conçu et certifié pour l\'extérieur (IP44 minimum, gaine caoutchouc). Une multiprise d\'intérieur classique n\'est étanche ni aux projections d\'eau ni à l\'humidité ambiante : c\'est l\'une des causes les plus fréquentes de déclenchement intempestif, voire de départ de feu, sur un balcon. Pour brancher plusieurs appareils dehors, utilisez un bloc de prises étanche à clapets (type Powerblock), pas une barrette de bureau.',
  },
  {
    question: 'Faut-il un électricien pour installer une prise étanche en saillie ?',
    answer:
      'Si vous raccordez la prise sur un circuit existant déjà protégé (même ligne qu\'une prise intérieure proche, via un câble extérieur), un bricoleur averti peut le faire. Dès qu\'il faut tirer une nouvelle ligne depuis le tableau, percer une paroi extérieure ou intervenir sur le différentiel, faites appel à un électricien : c\'est une garantie assurance en cas de sinistre, et le coût (100 à 200 € pour une prise simple) reste raisonnable face au risque.',
  },
  {
    question: 'Quelle section de câble pour la rallonge d\'un kit solaire de balcon ?',
    answer:
      'Un micro-onduleur de kit balcon (300 à 800 W) consomme au maximum 3,5 A sous 230 V, très loin des 16 A supportés par une rallonge H07RN-F standard en 1,5 mm². Le 2,5 mm² (gamme "pro", plus cher) n\'apporte aucun bénéfice pour cet usage précis : il est utile si la même rallonge sert aussi à des outils électroportatifs plus puissants.',
  },
];

type Produit = {
  nom: string;
  asin: string;
  type: string;
  prix: string;
  ip: string;
  compat: string;
  pourQui: string;
  pros: string[];
  cons: string[];
};

const produits: Produit[] = [
  {
    nom: 'Prise étanche IP66 double, saillie, avec interrupteur et voyant',
    asin: 'B0CWZ3W54D',
    type: 'Prise murale en saillie',
    prix: '20-30 €',
    ip: 'IP66',
    compat: 'Montage mural extérieur, raccordement sur circuit fixe',
    pourQui: 'Installation permanente près du kit, balcon exposé à la pluie battante',
    pros: [
      'IP66 : résistance aux jets d\'eau dans toutes les directions, pas seulement aux projections',
      'Interrupteur intégré pratique pour couper le kit sans débrancher à la main',
      'Volet de protection verrouillable, double sortie',
      'Corps en plastique renforcé anti-UV',
    ],
    cons: [
      'Pose en saillie sur un circuit fixe : intervention d\'électricien recommandée si aucune ligne n\'existe déjà',
      'Ce n\'est pas un produit « plug-and-play » : hauteur et raccordement doivent respecter la NF C 15-100',
      'Fiche produit parfois peu détaillée sur la certification NF exacte : vérifiez avant achat si vous la faites poser par un professionnel',
    ],
  },
  {
    nom: 'Prise étanche IP66 simple, saillie, économique',
    asin: 'B09YM4YVXV',
    type: 'Prise murale en saillie',
    prix: '15-22 €',
    ip: 'IP66',
    compat: 'Montage mural extérieur',
    pourQui: 'Budget serré, un seul appareil à brancher en permanence',
    pros: [
      'Prix le plus bas de la sélection pour un IP66',
      'Montage simple, couvercle anti-poussière',
      'Suffisant pour un micro-onduleur de kit balcon (charge très inférieure à 16 A)',
    ],
    cons: [
      'Pas d\'interrupteur intégré : il faut débrancher à la main ou couper au disjoncteur',
      'Avis clients et recul limités sur la marque',
      'Notice succincte : mesurez l\'encombrement avant de commander',
    ],
  },
  {
    nom: 'Rallonge H07RN-F 3G1,5 10 m, IP44, gaine caoutchouc',
    asin: 'B00OZ6KT1K',
    type: 'Rallonge simple',
    prix: '15-25 €',
    ip: 'IP44',
    compat: 'Type F (Schuko/Français), 16 A / 3 680 W max',
    pourQui: 'Relier le micro-onduleur du kit à une prise existante, intérieure ou extérieure',
    pros: [
      'Câble caoutchouc H07RN-F : résiste au gel, aux UV et à l\'écrasement, contrairement au PVC classique',
      'Clapet de sécurité sur la prise femelle (IP44)',
      'Section 1,5 mm² largement suffisante pour un kit de 300 à 800 W (3,5 A max)',
      'Le moins cher des modèles H07RN-F véritables (attention aux copies en PVC qui ressemblent au caoutchouc)',
    ],
    cons: [
      'IP44 seulement : évitez de la laisser dans une flaque ou sous un écoulement direct',
      'Longueur fixe de 10 m, pas d\'enrouleur : prévoyez le rangement',
      'Ne remplace pas une protection différentielle si le circuit d\'origine n\'en a pas',
    ],
  },
  {
    nom: 'Rallonge Powerblock 4 prises à clapets, 10 m, IP44, fabrication française',
    asin: 'B00BLH9IYK',
    type: 'Bloc multiprises étanche',
    prix: '55-70 €',
    ip: 'IP44',
    compat: '4 prises 2P+T 16 A/230 V, câble H07RN-F',
    pourQui: 'Brancher plusieurs appareils extérieurs (kit solaire + projecteur + pompe de bassin…)',
    pros: [
      'Bloc à 4 prises à clapets, chacune IP44 individuellement',
      'Câble H07RN-F robuste, résistant aux hydrocarbures, fabrication française',
      'Crochet rabattable pour suspendre le bloc plutôt que de le laisser au sol',
    ],
    cons: [
      'Nettement plus cher qu\'une rallonge simple pour un usage à un seul appareil',
      'Encombrant : pensé pour le chantier, pas pour la discrétion d\'un balcon',
      'Souvent surdimensionné si vous n\'avez qu\'un micro-onduleur à brancher',
    ],
  },
  {
    nom: 'Adaptateur différentiel portable 30 mA, IP54',
    asin: 'B00HZIWBR0',
    type: 'Sécurité électrique',
    prix: '35-45 €',
    ip: 'IP54',
    compat: 'S\'intercale entre n\'importe quelle prise 2P+T et l\'appareil',
    pourQui: 'Circuit dont la protection différentielle n\'est pas confirmée (bâti ancien, ligne ajoutée sans certitude)',
    pros: [
      'Coupe en moins de 30 ms en cas de fuite de courant, indépendamment du tableau',
      'IP54 : utilisable en extérieur abrité',
      'Aucun travaux : se branche directement, bouton test/reset en façade',
    ],
    cons: [
      'Ne remplace pas une vérification du tableau électrique par un professionnel si un doute subsiste',
      'Prix élevé pour un simple adaptateur',
      'À tester régulièrement (bouton test) : un différentiel négligé peut se bloquer en position fermée',
    ],
  },
];

const decision = [
  { situation: 'Prise extérieure déjà présente et protégée près du balcon', solution: 'Rallonge H07RN-F IP44 simple', produit: 'Rallonge 10 m simple' },
  { situation: 'Aucune prise extérieure disponible', solution: 'Prise en saillie IP66 posée par un électricien', produit: 'Prise double ou simple IP66' },
  { situation: 'Protection différentielle du circuit incertaine (bâti ancien)', solution: 'Adaptateur différentiel 30 mA en attendant vérification', produit: 'Adaptateur différentiel portable' },
  { situation: 'Plusieurs appareils extérieurs à alimenter', solution: 'Bloc multiprises étanche à clapets', produit: 'Powerblock 4 prises' },
];

export default function PriseExterieureEtanchePage() {
  return (
    <>
      <SchemaArticle
        title="Prise extérieure étanche et rallonge pour kit solaire de balcon (IP44, IP66)"
        description="IP44 ou IP66, disjoncteur différentiel 30 mA, section de câble H07RN-F : ce qu'il faut savoir pour brancher un kit solaire de balcon en sécurité, avec une sélection Amazon 2026."
        url={PAGE_URL}
        datePublished="2026-09-29"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Prise extérieure étanche et rallonge' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Prise extérieure étanche et rallonge' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">S&eacute;lection 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Prise ext&eacute;rieure &eacute;tanche et rallonge pour kit solaire de balcon&nbsp;: IP44, IP66, ce qu&apos;il faut savoir
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Un micro-onduleur de kit solaire se branche sur une prise ordinaire &mdash; sauf que sur un balcon, cette prise est expos&eacute;e &agrave; la pluie, au gel et aux UV. Une prise ou une rallonge d&apos;int&eacute;rieur classique n&apos;y survit pas longtemps, et le risque n&apos;est pas que mat&eacute;riel&nbsp;: c&apos;est &eacute;lectrique. Voici les r&egrave;gles de s&eacute;curit&eacute; (IP, 30&nbsp;mA, section de c&acirc;ble) et 5 produits analys&eacute;s pour brancher votre kit correctement.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>29 septembre 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong className="text-green">{'✓'} Prise ou rallonge d&apos;ext&eacute;rieur&nbsp;:</strong> IP44 minimum (norme NF&nbsp;C&nbsp;15-100), IP66 si expos&eacute;e directement &agrave; la pluie.</li>
              <li><strong className="text-green">{'✓'} C&acirc;ble&nbsp;:</strong> H07RN-F (gaine caoutchouc) uniquement, jamais de H05VV-F (PVC) &agrave; l&apos;ext&eacute;rieur.</li>
              <li><strong className="text-green">{'✓'} Diff&eacute;rentiel 30&nbsp;mA&nbsp;:</strong> obligatoire par la norme sur tout circuit ext&eacute;rieur. Un adaptateur portable existe si vous avez un doute sur le circuit existant.</li>
              <li><strong className="text-amber-dark">{'⚠'} Non n&eacute;gociable&nbsp;:</strong> jamais de multiprise d&apos;int&eacute;rieur classique dehors, m&ecirc;me quelques heures.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi une prise standard ne suffit pas dehors</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Une prise et une rallonge d&apos;int&eacute;rieur sont con&ccedil;ues pour un environnement sec et &agrave; temp&eacute;rature stable. Sur un balcon, trois facteurs s&apos;y ajoutent&nbsp;: l&apos;humidit&eacute; (pluie, condensation, ruissellement du balcon du dessus), les &eacute;carts thermiques (gel l&apos;hiver, chaleur sous verre l&apos;&eacute;t&eacute;) et les UV, qui rendent le PVC cassant en une ou deux saisons. Le r&eacute;sultat concret&nbsp;: gaine fissur&eacute;e, infiltration d&apos;eau dans la fiche, court-circuit ou disjonction r&eacute;p&eacute;t&eacute;e &mdash; et dans le pire des cas, un risque d&apos;&eacute;lectrocution ou de d&eacute;part de feu.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                La solution n&apos;est pas compliqu&eacute;e&nbsp;: du mat&eacute;riel con&ccedil;u pour l&apos;ext&eacute;rieur, identifiable par son indice de protection IP et son type de c&acirc;ble.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">IP44, IP65, IP66&nbsp;: ce que veulent vraiment dire les indices</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Indice</th>
                      <th className="text-left p-2.5 font-semibold">Protection eau</th>
                      <th className="text-left p-2.5 rounded-tr-xl font-semibold">Usage recommand&eacute;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-2.5 font-semibold">IP44</td>
                      <td className="p-2.5">Projections d&apos;eau dans toutes les directions</td>
                      <td className="p-2.5">Minimum l&eacute;gal, balcon abrit&eacute; (sous un balcon sup&eacute;rieur, auvent)</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-2.5 font-semibold">IP55</td>
                      <td className="p-2.5">Jets d&apos;eau &agrave; la lance, faible pression</td>
                      <td className="p-2.5">Balcon partiellement expos&eacute;</td>
                    </tr>
                    <tr className="border-b border-border-light bg-green-pale/30 font-semibold">
                      <td className="p-2.5">IP66</td>
                      <td className="p-2.5">Jets d&apos;eau puissants, toutes directions</td>
                      <td className="p-2.5">Balcon expos&eacute; &agrave; la pluie battante, dernier &eacute;tage, terrasse</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Le premier chiffre (4, 5 ou 6) concerne la poussi&egrave;re et les corps solides&nbsp;: il est syst&eacute;matiquement au maximum sur ce type de mat&eacute;riel. C&apos;est le second chiffre, celui de l&apos;eau, qui doit guider votre choix selon l&apos;exposition r&eacute;elle de votre balcon.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">S&eacute;curit&eacute; &eacute;lectrique&nbsp;: les 3 r&egrave;gles non n&eacute;gociables</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">1. Disjoncteur diff&eacute;rentiel 30 mA obligatoire</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">La norme NF&nbsp;C&nbsp;15-100 impose une sensibilit&eacute; maximale de 30&nbsp;mA sur tout circuit desservant l&apos;ext&eacute;rieur. Dans un logement r&eacute;cent, c&apos;est d&eacute;j&agrave; le cas pour l&apos;ensemble du tableau. En cas de doute (immeuble ancien, ligne rajout&eacute;e), un adaptateur diff&eacute;rentiel portable s&apos;intercale sans travaux.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">2. C&acirc;ble H07RN-F, jamais H05VV-F</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le H07RN-F (gaine caoutchouc noire, souple m&ecirc;me par grand froid) est le seul c&acirc;ble adapt&eacute; &agrave; un usage ext&eacute;rieur permanent ou r&eacute;current. Le H05VV-F (gaine PVC, souvent blanche ou grise) est r&eacute;serv&eacute; &agrave; l&apos;int&eacute;rieur&nbsp;: il durcit et se fissure aux UV et au gel.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">3. Jamais de multiprise d&apos;int&eacute;rieur dehors</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Une barrette de bureau n&apos;est &eacute;tanche ni &agrave; l&apos;eau ni &agrave; l&apos;humidit&eacute; ambiante. Pour brancher plusieurs appareils ext&eacute;rieurs, utilisez un bloc de prises &eacute;tanche &agrave; clapets (type Powerblock), jamais une multiprise classique m&ecirc;me &laquo;&nbsp;temporairement&nbsp;&raquo;.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quelle solution selon votre situation</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Votre situation</th>
                      <th className="text-left p-2.5 font-semibold">Solution</th>
                      <th className="text-left p-2.5 rounded-tr-xl font-semibold">Produit de la s&eacute;lection</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decision.map((d, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">{d.situation}</td>
                        <td className="p-2.5">{d.solution}</td>
                        <td className="p-2.5 text-green">{d.produit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre s&eacute;lection de 5 produits</h2>
              <p className="text-sm text-charcoal-light leading-relaxed mb-6">
                Produits analys&eacute;s sur fiche technique, normes annonc&eacute;es et positionnement march&eacute; (nous ne les avons pas eus en main). Prix constat&eacute;s tous revendeurs fran&ccedil;ais confondus en septembre 2026&nbsp;: ils varient selon le vendeur sur Amazon.
              </p>
              <div className="space-y-6">
                {produits.map((p, i) => (
                  <div key={p.asin} className="card-lg">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${i === 0 ? 'bg-green text-white' : 'bg-amber-pale text-amber-dark'}`}>{p.type}</span>
                        <h3 className="mt-2 font-bold text-lg">{i + 1}. {p.nom}</h3>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-lg">{p.prix}</div>
                        <div className="text-[10px] text-stone">prix constat&eacute; septembre 2026</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs mb-4">
                      <div className="bg-cream rounded-brand p-2"><span className="text-stone">Protection</span><br /><strong>{p.ip}</strong></div>
                      <div className="bg-cream rounded-brand p-2"><span className="text-stone">Compatibilit&eacute;</span><br /><strong>{p.compat}</strong></div>
                      <div className="bg-cream rounded-brand p-2"><span className="text-stone">Pour qui</span><br /><strong>{p.pourQui}</strong></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <p className="font-bold text-green mb-1">Points forts</p>
                        <ul className="space-y-1 text-charcoal-light">
                          {p.pros.map((x, j) => <li key={j}>{'✓'} {x}</li>)}
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-amber-dark mb-1">Limites</p>
                        <ul className="space-y-1 text-charcoal-light">
                          {p.cons.map((x, j) => <li key={j}>{'✗'} {x}</li>)}
                        </ul>
                      </div>
                    </div>
                    <a
                      href={amazon(p.asin)}
                      target="_blank"
                      rel="sponsored noopener"
                      className="btn-affiliate inline-flex text-sm"
                    >
                      Voir sur Amazon &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Prise étanche IP66 double avec interrupteur"
              merchantName="Amazon"
              affiliateUrl={amazon('B0CWZ3W54D')}
              label="Voir la prise étanche IP66 sur Amazon"
              variant="inline"
              position="after-selection"
              price="20-30 €"
            />

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre balcon est-il adapt&eacute; au solaire&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                D&eacute;partement, orientation, budget&nbsp;: le calculateur estime votre production et votre rentabilit&eacute; avant tout achat.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma rentabilit&eacute; &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Installation en 5 &eacute;tapes</h2>
              <ol className="text-sm text-charcoal-light space-y-2 list-decimal pl-5">
                <li><strong>Identifier</strong> si une prise ext&eacute;rieure existe d&eacute;j&agrave; pr&egrave;s du balcon et si elle est prot&eacute;g&eacute;e par un diff&eacute;rentiel 30&nbsp;mA (demandez &agrave; un &eacute;lectricien en cas de doute).</li>
                <li><strong>Choisir</strong> l&apos;indice IP selon l&apos;exposition r&eacute;elle&nbsp;: abrit&eacute; (IP44) ou pluie battante (IP66).</li>
                <li><strong>Relier</strong> le micro-onduleur du kit &agrave; la prise via une rallonge H07RN-F, sans la faire courir dans une flaque ni la coincer dans une porte ou fen&ecirc;tre.</li>
                <li><strong>Fixer</strong> les connexions en hauteur, jamais au sol du balcon o&ugrave; l&apos;eau stagne.</li>
                <li><strong>V&eacute;rifier</strong> p&eacute;riodiquement l&apos;&eacute;tat des gaines et le bon fonctionnement du diff&eacute;rentiel (bouton test).</li>
              </ol>
              <p className="text-sm text-charcoal-light leading-relaxed mt-3">
                Le pas-&agrave;-pas complet de l&apos;installation (fixation, d&eacute;claration Enedis)&nbsp;: <Link href="/guide/installer-kit-solaire-balcon" className="text-green hover:underline">installer un kit solaire de balcon</Link>. Pour la r&eacute;glementation compl&egrave;te&nbsp;: <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">r&eacute;glementation panneau solaire balcon 2026</Link>.
              </p>
            </section>

            <AffiliateCTA
              productName="Adaptateur différentiel portable 30 mA"
              merchantName="Amazon"
              affiliateUrl={amazon('B00HZIWBR0')}
              label="Voir l'adaptateur différentiel 30 mA sur Amazon"
              variant="box"
              position="footer-box"
              price="35-45 €"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les erreurs &agrave; &eacute;viter</h2>
              <ul className="text-sm text-charcoal-light space-y-2">
                <li><span className="text-amber-dark font-bold">&#10007;</span> Brancher le kit sur une rallonge d&apos;int&eacute;rieur &laquo;&nbsp;en attendant&nbsp;&raquo;, puis oublier de la changer avant l&apos;hiver.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Utiliser une multiprise de bureau &agrave; l&apos;ext&eacute;rieur, m&ecirc;me abrit&eacute;e.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Laisser une connexion au sol du balcon, l&agrave; o&ugrave; l&apos;eau de pluie ruisselle et stagne.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Faire passer le c&acirc;ble sous une porte-fen&ecirc;tre ferm&eacute;e&nbsp;: la gaine s&apos;&eacute;crase et finit par se percer.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Supposer que le circuit est prot&eacute;g&eacute; par un diff&eacute;rentiel 30&nbsp;mA sans v&eacute;rifier, dans un immeuble ancien.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Choisir une section de c&acirc;ble surdimensionn&eacute;e (2,5&nbsp;mm&sup2; &laquo;&nbsp;pro&nbsp;&raquo;) sans besoin r&eacute;el&nbsp;: un kit balcon consomme tr&egrave;s peu de courant.</li>
              </ul>
              <p className="text-sm text-charcoal-light leading-relaxed mt-3">
                Pour le reste de l&apos;&eacute;quipement (fixation, wattm&egrave;tre, suivi de production), voir notre s&eacute;lection d&apos;<Link href="/blog/accessoires-kit-solaire-balcon" className="text-green hover:underline">accessoires pour kit solaire de balcon</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">{'▼'}</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Installer un kit solaire de balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le pas-&agrave;-pas complet, du d&eacute;ballage &agrave; la d&eacute;claration</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, CACSI Enedis, copropri&eacute;t&eacute;, rep&egrave;re 900 W</p>
                </Link>
                <Link href="/blog/support-fixation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Support et fixation panneau solaire balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Crochets, support inclinable, s&eacute;curit&eacute; au vent</p>
                </Link>
                <Link href="/blog/wattmetre-prise-mesurer-consommation" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Wattm&egrave;tre prise&nbsp;: mesurer son talon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Dimensionner son kit avant d&apos;acheter</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <footer className="mt-10 pt-8 border-t border-border-light text-xs text-stone leading-relaxed space-y-2">
              <p>
                <strong>M&eacute;thodologie&nbsp;:</strong> produits analys&eacute;s sur fiches techniques et normes annonc&eacute;es (septembre 2026), sans manipulation physique. Exigences r&eacute;glementaires (IP44 minimum, diff&eacute;rentiel 30&nbsp;mA, c&acirc;ble H07RN-F) sourc&eacute;es sur la norme NF&nbsp;C&nbsp;15-100. Prix constat&eacute;s aupr&egrave;s de plusieurs revendeurs fran&ccedil;ais (Amazon, Leroy Merlin, Castorama et fournisseurs professionnels)&nbsp;: ils varient selon le vendeur et la p&eacute;riode.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
              <p>
                <strong>Transparence affili&eacute;&nbsp;:</strong> les liens Amazon de cet article sont des liens affili&eacute;s. Si vous achetez via ces liens, nous percevons une commission sans surco&ucirc;t pour vous. Cela ne change pas nos recommandations&nbsp;: plusieurs produits cit&eacute;s ont des limites que nous d&eacute;taillons.
              </p>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
