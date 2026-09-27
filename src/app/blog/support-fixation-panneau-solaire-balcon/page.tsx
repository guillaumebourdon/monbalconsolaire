import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import {
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateTotalSavings25Years,
  KWH_PRICE_LABEL,
} from '@/lib/pricing';

const PAGE_URL = 'https://monbalconsolaire.fr/blog/support-fixation-panneau-solaire-balcon';
const AMAZON_TAG = 'monbalconsolai-21';
const amazon = (asin: string) => `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}`;

export const metadata: Metadata = {
  title: 'Support panneau solaire balcon : fixation, sélection 2026',
  description:
    'Support panneau solaire balcon : crochets garde-corps, support inclinable, pose sans perçage. 7 modèles Amazon analysés, sécurité au vent et production.',
  alternates: { canonical: PAGE_URL },
};

// ─── Production selon l'inclinaison (PVGIS, Lyon, plein sud) ─────────────
// Coefficients = production PVGIS à l'angle donné / production PVGIS à 35°
// PVGIS v5.2, Lyon (45,76 N ; 4,84 E), azimut sud, pertes système 14 %.
// E_y (kWh/kWc/an) : 0° = 1 075 ; 15° = 1 204 ; 35° = 1 279 ; 60° = 1 205 ; 90° = 878
const KIT_WC = 500;
const KIT_PRICE = 450;
const TILTS = [
  { angle: '35° (optimum)', label: 'Support inclinable réglé à 30-35°', coef: 1.0 },
  { angle: '15°', label: 'Support inclinable réglé bas', coef: 0.94 },
  { angle: '60°', label: 'Crochet incliné 60° / fort angle', coef: 0.94 },
  { angle: '0° (à plat)', label: 'Posé à plat au sol', coef: 0.84 },
  { angle: '90° (vertical)', label: 'Accroché à plat contre le garde-corps', coef: 0.69 },
].map((t) => {
  const input = { kitPriceEur: KIT_PRICE, kitPowerWc: KIT_WC, orientationCoef: t.coef };
  return {
    ...t,
    kwh: calculateProductionKwh(input),
    savings: Math.round(calculateFirstYearSavings(input)),
    savings25: Math.round(calculateTotalSavings25Years(input)),
  };
});
const OPTIMUM = TILTS[0];
const VERTICAL = TILTS[4];
const GAP_KWH = OPTIMUM.kwh - VERTICAL.kwh;
const GAP_EUR = OPTIMUM.savings - VERTICAL.savings;
const GAP_EUR_25 = OPTIMUM.savings25 - VERTICAL.savings25;
const fmt = (n: number) => n.toLocaleString('fr-FR');

const faqData = [
  {
    question: 'Quel support choisir pour un panneau solaire sur un garde-corps de balcon ?',
    answer:
      'Pour un garde-corps métallique à barreaux ou à main courante (jusqu\'à 50-80 mm de section), des crochets inox ou un support aluminium à crochets (type NuaSol ou LEICKE, 35 à 100 € selon le modèle) suffisent, idéalement avec une version inclinable 25-45°. Pour un garde-corps en verre ou un muret béton, évitez l\'accroche : posez le panneau au sol du balcon sur un support inclinable lesté.',
  },
  {
    question: 'Peut-on fixer un panneau solaire sur un balcon sans percer ?',
    answer:
      'Oui, c\'est même la règle en copropriété et en location : crochets qui s\'emboîtent sur la main courante et se serrent par vis-écrou, sangles, ou support posé au sol et lesté. Aucune de ces solutions ne touche au béton ni à la façade. Percer un garde-corps ou une dalle de balcon, c\'est intervenir sur une partie commune ou sur le bâti : autorisation nécessaire.',
  },
  {
    question: 'Un panneau vertical sur le garde-corps produit-il beaucoup moins ?',
    answer: `Oui, environ 30 % de moins sur l'année qu'un panneau incliné à 35° plein sud (PVGIS, Lyon : 878 contre 1 279 kWh/kWc/an). Pour un kit de 500 Wc, cela représente environ ${GAP_KWH} kWh et ${GAP_EUR} € d'économies en moins la première année. En contrepartie, la production verticale est plus régulière en hiver.`,
  },
  {
    question: 'Un panneau solaire de balcon peut-il tomber avec le vent ?',
    answer:
      'Oui si la fixation est sous-dimensionnée. Un panneau standard pèse 20 à 25 kg et offre 1,7 à 2 m² de prise au vent : par rafale de 100 km/h, la poussée atteint un ordre de grandeur de 50 à 100 kg. Utilisez au moins 2 points d\'accroche serrés mécaniquement (pas seulement posés), ajoutez un câble de sécurité inox, et vérifiez le serrage après chaque tempête.',
  },
  {
    question: 'Faut-il l\'accord de la copropriété pour fixer un panneau sur le balcon ?',
    answer:
      'Si le panneau est visible depuis la rue ou fixé au garde-corps, qui fait généralement partie de l\'aspect extérieur de l\'immeuble, le règlement de copropriété peut l\'interdire ou exiger une autorisation en assemblée générale. Un panneau posé au sol, masqué par un garde-corps plein, pose moins de problèmes. Lisez votre règlement avant d\'acheter.',
  },
  {
    question: 'Mon assurance couvre-t-elle un panneau qui tombe sur un passant ?',
    answer:
      'Votre responsabilité civile (incluse dans l\'assurance habitation) couvre en principe les dommages causés à des tiers, mais l\'assureur peut contester en cas de fixation manifestement non conforme ou de négligence. Déclarez l\'installation à votre assureur et conservez la notice du support et des photos du montage.',
  },
];

type Produit = {
  nom: string;
  asin: string;
  type: string;
  prix: string;
  angle: string;
  compat: string;
  pourQui: string;
  pros: string[];
  cons: string[];
};

const produits: Produit[] = [
  {
    nom: 'NuaSol NuaFix — 1 module (inclinable 25-45°)',
    asin: 'B0C2CSV52Z',
    type: 'Crochets garde-corps + bras inclinables',
    prix: '35-45 €',
    angle: '0° ou 25-45° (selon version)',
    compat: 'Balustrade jusqu\'à 80 mm, tout panneau cadré',
    pourQui: 'Garde-corps métallique standard, un seul panneau, recherche de production',
    pros: [
      'Crochets inox + profilés aluminium AL6005-T5, visserie inox',
      'Version 25-45° : on se rapproche de l\'optimum (35°) sans poser au sol',
      'Prévoit aussi la fixation du micro-onduleur',
      'Prix le plus bas de la sélection pour un support inclinable',
    ],
    cons: [
      'Bien choisir la variante (rond/carré, 0° ou 25-45°) : plusieurs versions sur la même fiche',
      'Panneau incliné vers l\'extérieur = plus de prise au vent, câble de sécurité à ajouter',
      'Notice fabricant allemand, français non garanti',
    ],
  },
  {
    nom: 'NuaSol NuaFix — 2 modules',
    asin: 'B0C2CSJMK2',
    type: 'Crochets garde-corps + bras inclinables',
    prix: '95-105 €',
    angle: '0° ou 25-45°',
    compat: 'Balustrade jusqu\'à 80 × 80 mm',
    pourQui: 'Kits 2 panneaux (800 W) sur un long garde-corps',
    pros: [
      'Même conception que la version 1 module, en kit double',
      'Évite de mélanger deux marques de crochets sur un même garde-corps',
      'Note Amazon très élevée (4,9/5 au moment de l\'analyse, peu d\'avis)',
    ],
    cons: [
      '2 panneaux accrochés = 40-50 kg en porte-à-faux : vérifiez la solidité du garde-corps',
      'Prix doublé par rapport à la version simple',
      'Peu d\'avis clients, recul limité',
    ],
  },
  {
    nom: 'LEICKE support de balcon (0° ou 15-30°)',
    asin: 'B0C8B5YNCV',
    type: 'Support aluminium à crochets en J',
    prix: '50-55 €',
    angle: '0° ou 15-30°',
    compat: 'Balustrades à barreaux verticaux ou lisses horizontales',
    pourQui: 'Alternative à NuaSol, angle modéré',
    pros: [
      'Alliage d\'aluminium, visserie inox, trous pré-percés',
      'Fonctionne avec barreaux verticaux comme horizontaux',
      'Note 4,6/5 au moment de l\'analyse',
    ],
    cons: [
      'Angle max 30° : un peu sous l\'optimum, sans conséquence notable (-1 à -2 %)',
      'Section maximale de main courante peu documentée : mesurez avant',
      'Une version renforcée (B0BXXFZDBN, profilés 5 mm, largeur 92-120 cm) existe autour de 100 €',
    ],
  },
  {
    nom: 'Crochet solaire balcon — main courante jusqu\'à 120 mm',
    asin: 'B0BGDYZBN3',
    type: 'Crochets à rabat + câbles de sécurité',
    prix: '38-42 €',
    angle: 'Vertical (90°)',
    compat: 'Main courante rectangulaire jusqu\'à 120 mm, panneau jusqu\'à 250 × 150 cm',
    pourQui: 'Mains courantes larges (bois, béton fin, profilés épais)',
    pros: [
      'Câbles de sécurité inox et serre-câbles inclus : le point fort de la sélection',
      'Plus de 25 kg de charge par crochet annoncés',
      'Existe en version 50 mm (B0BG7GMBN7) pour les mains courantes fines',
    ],
    cons: [
      'Pose verticale uniquement : environ -30 % de production vs 35°',
      'Mentions fiscales allemandes sur la fiche (TVA 0 %) : le prix français est TTC',
      'Notice et support client en allemand/anglais',
    ],
  },
  {
    nom: 'Lot de 2 crochets inox rectangulaires (jusqu\'à 50 mm)',
    asin: 'B0C3R2N244',
    type: 'Crochets inox simples',
    prix: '15-35 € selon le lot',
    angle: 'Vertical (90°)',
    compat: 'Tube carré/rectangulaire jusqu\'à 50 mm',
    pourQui: 'Petit budget, panneau léger, garde-corps métallique fin',
    pros: [
      'Le moins cher de la sélection',
      'Acier inoxydable, pas de perçage',
      'Suffisant pour un panneau léger bien serré',
    ],
    cons: [
      'Aucun câble de sécurité fourni : à acheter en plus (indispensable côté rue)',
      'Fiche produit très pauvre (pas de charge maximale annoncée)',
      'Prix variable selon le nombre de crochets choisi',
    ],
  },
  {
    nom: 'VEVOR support inclinable 114 cm (0-90°)',
    asin: 'B0DK97Z37B',
    type: 'Support sol / mur inclinable',
    prix: '80-90 €',
    angle: 'Réglable 0 à 90°',
    compat: 'Panneaux 100-400 W (vérifier la longueur pour les 500 W)',
    pourQui: 'Garde-corps en verre ou muret béton : pose au sol du balcon',
    pros: [
      'Réglage libre : on peut viser 30-35°, l\'angle PVGIS optimal',
      'Aluminium anodisé, charge annoncée 120 kg',
      'Aucune fixation sur le garde-corps : la solution la plus neutre en copropriété',
    ],
    cons: [
      'Doit être lesté (dalles, bacs de lestage) : prévoir 20-40 kg de lest',
      'Prend de la place au sol (profondeur ~1 m à 35°)',
      'Le garde-corps plein peut faire de l\'ombre si le panneau est trop bas',
    ],
  },
  {
    nom: 'Support aluminium réglable 0-60° (pieds courts)',
    asin: 'B0C6DR1R1D',
    type: 'Support sol / mur inclinable',
    prix: '43-51 €',
    angle: 'Réglable 0 à 60°',
    compat: 'La plupart des panneaux cadrés',
    pourQui: 'Pose au sol à budget serré',
    pros: [
      'Aluminium AL6005-T5 anodisé, patins caoutchouc fournis',
      'Moitié prix du VEVOR',
      'Utilisable aussi en fixation murale inclinée (si vous avez le droit de percer)',
    ],
    cons: [
      'Le fabricant lui-même déconseille les panneaux trop lourds ou trop grands',
      'Lestage indispensable, rien de fourni pour',
      'Promesse « +25 à 30 % » de la fiche exagérée : c\'est +19 % vs à plat selon PVGIS',
    ],
  },
];

const decision = [
  { garde: 'Barreaudage métal (tubes ≤ 50 mm)', solution: 'Crochets inox ou support à crochets inclinable', produit: 'NuaSol 1 module, LEICKE', vigilance: 'Câble de sécurité, serrage mécanique' },
  { garde: 'Main courante large (60-120 mm, bois ou profilé)', solution: 'Crochets grande ouverture', produit: 'Crochet solaire 120 mm', vigilance: 'Mesurer la section exacte avant achat' },
  { garde: 'Verre (vitrage feuilleté)', solution: 'Pose au sol, support inclinable lesté', produit: 'VEVOR 0-90°, support 0-60°', vigilance: 'Jamais d\'accroche sur le verre' },
  { garde: 'Muret béton / maçonnerie plein', solution: 'Pose au sol surélevée ou crochets sur la lisse si compatible', produit: 'VEVOR, crochet 120 mm', vigilance: 'Ombre du muret, pas de perçage sans accord' },
  { garde: 'Fer forgé ornemental', solution: 'Crochets sur la lisse haute + câble de sécurité', produit: 'NuaSol, crochets inox', vigilance: 'Rouille, soudures anciennes : vérifier la solidité' },
];

export default function SupportFixationPanneauPage() {
  return (
    <>
      <SchemaArticle
        title="Support et fixation panneau solaire balcon : quel système choisir (sélection 2026)"
        description="Crochets garde-corps, supports inclinables, pose sans perçage : 7 supports Amazon analysés, impact de l'inclinaison sur la production et règles de sécurité."
        url={PAGE_URL}
        datePublished="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Support et fixation panneau solaire balcon' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Support et fixation panneau solaire balcon' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">S&eacute;lection 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Support et fixation panneau solaire balcon&nbsp;: quel syst&egrave;me choisir (s&eacute;lection 2026)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Un panneau de 20 &agrave; 25&nbsp;kg accroch&eacute; au-dessus de la rue, ce n&apos;est pas un accessoire d&eacute;co. Le support d&eacute;cide de trois choses&nbsp;: la <strong>s&eacute;curit&eacute;</strong> (chute, vent), la <strong>production</strong> (jusqu&apos;&agrave; 30&nbsp;% d&apos;&eacute;cart selon l&apos;inclinaison) et la <strong>l&eacute;galit&eacute;</strong> (copropri&eacute;t&eacute;, bail). Nous avons analys&eacute; 7 supports disponibles sur Amazon, class&eacute;s par type de garde-corps.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>27 septembre 2026</span>
              <span>&middot;</span>
              <span>12 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong className="text-green">{'✓'} Garde-corps m&eacute;tallique&nbsp;:</strong> support &agrave; crochets inclinable 25-45&deg; (NuaSol, 35-45&nbsp;&euro;). Le meilleur compromis production/prix.</li>
              <li><strong className="text-green">{'✓'} Garde-corps en verre ou b&eacute;ton&nbsp;:</strong> pose au sol sur support inclinable lest&eacute; (VEVOR, 80-90&nbsp;&euro;). Aucune fixation sur le b&acirc;ti.</li>
              <li><strong className="text-green">{'✓'} Vertical ou inclin&eacute;&nbsp;?</strong> Vertical = environ <strong>-30&nbsp;%</strong> de production annuelle (PVGIS Lyon), soit ~{GAP_EUR}&nbsp;&euro;/an de moins pour un kit 500&nbsp;Wc.</li>
              <li><strong className="text-amber-dark">{'⚠'} Non n&eacute;gociable&nbsp;:</strong> 2 points d&apos;accroche serr&eacute;s + c&acirc;ble de s&eacute;curit&eacute; inox d&egrave;s que le panneau surplombe la rue.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 familles de fixation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Tous les supports du march&eacute; entrent dans l&apos;une de ces cat&eacute;gories. Aucune n&apos;est &laquo;&nbsp;la meilleure&nbsp;&raquo;&nbsp;: tout d&eacute;pend de votre garde-corps et de ce que votre r&egrave;glement de copropri&eacute;t&eacute; autorise.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">1. Crochets de garde-corps (vertical)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Des crochets inox s&apos;embo&icirc;tent sur la main courante et sont serr&eacute;s par vis-&eacute;crou. Le panneau pend &agrave; la verticale, c&ocirc;t&eacute; ext&eacute;rieur ou int&eacute;rieur. Simple, discret, 15-40&nbsp;&euro;. Inconv&eacute;nient&nbsp;: la pose verticale co&ucirc;te environ 30&nbsp;% de production.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">2. Support &agrave; crochets inclinable</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">M&ecirc;me accroche, mais des bras en aluminium &eacute;cartent le bas (ou le haut) du panneau pour l&apos;incliner de 15 &agrave; 45&deg;. On r&eacute;cup&egrave;re l&apos;essentiel de la production perdue. Contrepartie&nbsp;: plus de prise au vent et un panneau qui d&eacute;passe davantage du garde-corps.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">3. Support au sol inclinable (lest&eacute;)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Triangle en aluminium pos&eacute; sur la dalle du balcon, r&eacute;glable de 0 &agrave; 60 ou 90&deg;. Rien n&apos;est fix&eacute; au b&acirc;ti, ce qui en fait la solution la plus d&eacute;fendable en copropri&eacute;t&eacute; ou en location. Il faut lester (dalles, bacs) et avoir la place.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">4. Sangles et colliers</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">C&apos;est la m&eacute;thode de Sunology&nbsp;: 4 sangles polyester renforc&eacute;es (100&nbsp;kg de traction chacune selon la marque) et des passants m&eacute;talliques, pour des panneaux all&eacute;g&eacute;s de 13&nbsp;kg. Pertinent avec un kit con&ccedil;u pour. Avec un panneau standard de 25&nbsp;kg et des sangles g&eacute;n&eacute;riques, nous ne le recommandons pas comme fixation unique.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel support selon votre garde-corps</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Garde-corps</th>
                      <th className="text-left p-2.5 font-semibold">Solution</th>
                      <th className="text-left p-2.5 font-semibold">Produits de la s&eacute;lection</th>
                      <th className="text-left p-2.5 rounded-tr-xl font-semibold">Point de vigilance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decision.map((d, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">{d.garde}</td>
                        <td className="p-2.5">{d.solution}</td>
                        <td className="p-2.5 text-green">{d.produit}</td>
                        <td className="p-2.5 text-amber-dark">{d.vigilance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Avant tout achat, mesurez <strong>la section de la main courante</strong> (largeur &times; hauteur), <strong>l&apos;&eacute;cartement des barreaux</strong> et <strong>les dimensions de votre panneau</strong> (un 400-500&nbsp;Wc standard mesure environ 1,7-1,95&nbsp;m &times; 1,13&nbsp;m, cadre de 30-35&nbsp;mm). La compatibilit&eacute; du cadre avec les brides du support se joue souvent au millim&egrave;tre.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre s&eacute;lection de 7 supports</h2>
              <p className="text-sm text-charcoal-light leading-relaxed mb-6">
                Produits analys&eacute;s sur fiche technique et avis clients (nous ne les avons pas eus en main). Prix constat&eacute;s sur Amazon.fr en septembre 2026&nbsp;: ils varient selon la variante et le vendeur.
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
                      <div className="bg-cream rounded-brand p-2"><span className="text-stone">Inclinaison</span><br /><strong>{p.angle}</strong></div>
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
              productName="NuaSol NuaFix 1 module"
              merchantName="Amazon"
              affiliateUrl={amazon('B0C2CSV52Z')}
              label="Voir le support NuaSol inclinable sur Amazon"
              variant="inline"
              position="after-selection"
              price="35-45 €"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Inclinaison&nbsp;: combien perd-on en vertical&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est le vrai arbitrage d&apos;un support. Nous avons interrog&eacute; PVGIS (Commission europ&eacute;enne) pour Lyon, plein sud, puis appliqu&eacute; notre m&eacute;thodologie standard &agrave; un kit de {KIT_WC}&nbsp;Wc (productible 1&nbsp;200&nbsp;kWh/kWc, ratio de performance 0,85, autoconsommation 85&nbsp;%, {KWH_PRICE_LABEL}).
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Inclinaison</th>
                      <th className="text-left p-2.5 font-semibold">Configuration</th>
                      <th className="text-center p-2.5 font-semibold">vs 35&deg;</th>
                      <th className="text-center p-2.5 font-semibold">kWh/an</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">&Eacute;conomie an 1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TILTS.map((t, i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">{t.angle}</td>
                        <td className="p-2.5">{t.label}</td>
                        <td className="text-center p-2.5 font-mono">{Math.round(t.coef * 100)}&nbsp;%</td>
                        <td className="text-center p-2.5 font-mono">{fmt(t.kwh)}</td>
                        <td className="text-center p-2.5 font-mono text-green">{t.savings}&nbsp;&euro;</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="card text-center bg-green-pale/30"><div className="font-mono font-extrabold text-green text-xl">{fmt(OPTIMUM.kwh)}</div><div className="text-[11px] text-stone">kWh/an &agrave; 35&deg;</div></div>
                <div className="card text-center bg-green-pale/30"><div className="font-mono font-extrabold text-green text-xl">{fmt(VERTICAL.kwh)}</div><div className="text-[11px] text-stone">kWh/an en vertical</div></div>
                <div className="card text-center bg-green-pale/30"><div className="font-mono font-extrabold text-green text-xl">{GAP_EUR}&nbsp;&euro;</div><div className="text-[11px] text-stone">d&apos;&eacute;cart la 1re ann&eacute;e</div></div>
                <div className="card text-center bg-green-pale/30"><div className="font-mono font-extrabold text-green text-xl">~{fmt(Math.round(GAP_EUR_25 / 10) * 10)}&nbsp;&euro;</div><div className="text-[11px] text-stone">d&apos;&eacute;cart sur 25 ans</div></div>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                Conclusion honn&ecirc;te&nbsp;: un support inclinable &agrave; 40-100&nbsp;&euro; est rembours&eacute; en 1,5 &agrave; 4 ans par le gain de production, <strong>si</strong> votre balcon est expos&eacute; sud &agrave; ouest et que vous avez le droit d&apos;incliner. Entre 15&deg; et 60&deg;, l&apos;&eacute;cart avec l&apos;optimum reste sous 6&nbsp;%&nbsp;: inutile de chercher l&apos;angle parfait.
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Nuance importante&nbsp;: le vertical produit moins, mais plus r&eacute;guli&egrave;rement. Il capte mieux le soleil bas d&apos;hiver (voir notre <Link href="/blog/bilan-6-mois-kit-solaire" className="text-green hover:underline">bilan 6 mois</Link>). Pour l&apos;impact de l&apos;azimut, consultez notre <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green hover:underline">guide orientation et inclinaison</Link>.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Combien produirait votre balcon&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                D&eacute;partement, orientation, budget&nbsp;: le calculateur estime votre production et votre retour sur investissement.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma rentabilit&eacute; &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">S&eacute;curit&eacute;&nbsp;: vent, poids et chute</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un panneau standard de 400-500&nbsp;Wc p&egrave;se <strong>20 &agrave; 25&nbsp;kg</strong> et pr&eacute;sente 1,7 &agrave; 2&nbsp;m&sup2; de surface. Par rafale de 100&nbsp;km/h, la pression dynamique du vent (&frac12;&rho;v&sup2;) d&eacute;passe 450&nbsp;Pa&nbsp;: la pouss&eacute;e sur le panneau atteint un ordre de grandeur de <strong>50 &agrave; 100&nbsp;kg</strong>, en &agrave;-coups r&eacute;p&eacute;t&eacute;s. C&apos;est cette fatigue, plus que le poids, qui desserre les fixations.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Minimum 2 points d&apos;accroche serr&eacute;s</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un crochet simplement pos&eacute; sur la main courante peut se soulever par vent ascendant. Il doit &ecirc;tre bloqu&eacute; par vis-&eacute;crou ou contre-plaque.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">C&acirc;ble de s&eacute;curit&eacute; inox obligatoire c&ocirc;t&eacute; rue</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Une &eacute;lingue inox reliant le cadre du panneau au garde-corps, ind&eacute;pendante des crochets. Si une fixation c&egrave;de, le panneau reste suspendu au lieu de tomber sur un passant.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Inclinaison = plus de prise au vent</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un panneau inclin&eacute; vers l&apos;ext&eacute;rieur agit comme une voile. Au-del&agrave; du 4e &eacute;tage ou en zone tr&egrave;s vent&eacute;e (littoral, vall&eacute;e du Rh&ocirc;ne), privil&eacute;giez la pose verticale c&ocirc;t&eacute; int&eacute;rieur ou au sol.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Responsabilit&eacute; et assurance</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si le panneau blesse quelqu&apos;un ou ab&icirc;me une voiture, c&apos;est votre responsabilit&eacute; civile qui est engag&eacute;e. D&eacute;clarez l&apos;installation&nbsp;: tout est d&eacute;taill&eacute; dans notre <Link href="/guide/panneau-solaire-assurance-balcon" className="text-green hover:underline">guide assurance panneau solaire de balcon</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Copropri&eacute;t&eacute; et location&nbsp;: ce que vous avez le droit de fixer</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le garde-corps fait en g&eacute;n&eacute;ral partie de l&apos;aspect ext&eacute;rieur de l&apos;immeuble. Beaucoup de r&egrave;glements de copropri&eacute;t&eacute; interdisent d&apos;y fixer quoi que ce soit ou soumettent tout ajout visible &agrave; l&apos;assembl&eacute;e g&eacute;n&eacute;rale. Le syndic peut exiger le d&eacute;montage d&apos;un kit install&eacute; sans autorisation.
              </p>
              <ul className="text-sm text-charcoal-light space-y-2 mb-4">
                <li>&bull; <strong>Le plus d&eacute;fendable&nbsp;:</strong> support au sol, panneau masqu&eacute; par un garde-corps plein, aucune fixation au b&acirc;ti.</li>
                <li>&bull; <strong>Zone grise&nbsp;:</strong> crochets sans per&ccedil;age, panneau c&ocirc;t&eacute; int&eacute;rieur du garde-corps.</li>
                <li>&bull; <strong>Autorisation indispensable&nbsp;:</strong> panneau c&ocirc;t&eacute; rue, per&ccedil;age du garde-corps, de la dalle ou de la fa&ccedil;ade.</li>
              </ul>
              <p className="text-sm text-charcoal-light leading-relaxed">
                D&eacute;marches et mod&egrave;le de demande&nbsp;: <Link href="/guide/panneau-solaire-copropriete" className="text-green hover:underline">panneau solaire en copropri&eacute;t&eacute;</Link>. Locataire&nbsp;: <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline">ce que dit le bail</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Installation en 6 &eacute;tapes</h2>
              <ol className="text-sm text-charcoal-light space-y-2 list-decimal pl-5">
                <li><strong>Mesurer</strong> la main courante, l&apos;&eacute;cartement des barreaux, les dimensions et l&apos;&eacute;paisseur du cadre du panneau.</li>
                <li><strong>V&eacute;rifier</strong> l&apos;&eacute;tat du garde-corps&nbsp;: pas de rouille traversante, pas de jeu dans les scellements.</li>
                <li><strong>Pr&eacute;-assembler</strong> le support au sol du balcon, visserie inox serr&eacute;e &agrave; la main.</li>
                <li><strong>Fixer le panneau</strong> sur le support (brides ou vis dans les trous du cadre), &agrave; deux personnes.</li>
                <li><strong>Accrocher, serrer, s&eacute;curiser</strong>&nbsp;: serrage d&eacute;finitif puis c&acirc;ble de s&eacute;curit&eacute; inox.</li>
                <li><strong>C&acirc;bler</strong> le micro-onduleur et fixer les c&acirc;bles pour qu&apos;ils ne battent pas au vent.</li>
              </ol>
              <p className="text-sm text-charcoal-light leading-relaxed mt-3">
                Le pas-&agrave;-pas complet (branchement, d&eacute;claration Enedis)&nbsp;: <Link href="/guide/installer-kit-solaire-balcon" className="text-green hover:underline">installer un kit solaire de balcon</Link>.
              </p>
            </section>

            <AffiliateCTA
              productName="VEVOR support inclinable 114 cm"
              merchantName="Amazon"
              affiliateUrl={amazon('B0DK97Z37B')}
              label="Voir le support au sol VEVOR 0-90° sur Amazon"
              variant="inline"
              position="after-installation"
              price="80-90 €"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les erreurs &agrave; &eacute;viter</h2>
              <ul className="text-sm text-charcoal-light space-y-2">
                <li><span className="text-amber-dark font-bold">&#10007;</span> Acheter un support &laquo;&nbsp;camping-car&nbsp;&raquo; con&ccedil;u pour des panneaux de 100-200&nbsp;W et y poser un 500&nbsp;Wc de 25&nbsp;kg.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Accrocher quoi que ce soit sur un garde-corps en verre.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Se passer de c&acirc;ble de s&eacute;curit&eacute; parce que &laquo;&nbsp;les crochets ont l&apos;air solides&nbsp;&raquo;.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Utiliser de la visserie acier zingu&eacute;&nbsp;: elle rouille en 2 hivers. Inox uniquement.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Poser au sol sans lest&nbsp;: un panneau inclin&eacute; se soul&egrave;ve d&egrave;s 60-70&nbsp;km/h.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Placer le panneau trop bas derri&egrave;re un muret&nbsp;: l&apos;ombre sur une seule rang&eacute;e de cellules fait chuter toute la production.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Oublier le resserrage&nbsp;: contr&ocirc;le apr&egrave;s chaque temp&ecirc;te et au moins une fois par an.</li>
              </ul>
              <p className="text-sm text-charcoal-light leading-relaxed mt-3">
                Pour le reste de l&apos;&eacute;quipement (prise connect&eacute;e, rallonge, parafoudre), voir notre s&eacute;lection d&apos;<Link href="/blog/accessoires-kit-solaire-balcon" className="text-green hover:underline">accessoires pour kit solaire de balcon</Link>.
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
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation pour un panneau solaire de balcon&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Sud, est, ouest, inclinaison&nbsp;: l&apos;impact r&eacute;el sur la production</p>
                </Link>
                <Link href="/avis/sunology-city" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology CITY</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le kit con&ccedil;u pour le garde-corps, avec fixation int&eacute;gr&eacute;e</p>
                </Link>
                <Link href="/blog/proteger-panneau-solaire-oiseaux-intemperies" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Prot&eacute;ger son panneau solaire des oiseaux et intemp&eacute;ries</h4>
                  <p className="text-xs text-charcoal-light mt-1">Vent, gr&ecirc;le, pigeons&nbsp;: les protections utiles</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <footer className="mt-10 pt-8 border-t border-border-light text-xs text-stone leading-relaxed space-y-2">
              <p>
                <strong>M&eacute;thodologie&nbsp;:</strong> supports analys&eacute;s sur fiches techniques Amazon.fr et avis clients (septembre 2026), sans manipulation physique. Production calcul&eacute;e avec PVGIS v5.2 (Lyon, plein sud, pertes 14&nbsp;%) pour les ratios d&apos;inclinaison, puis m&eacute;thodologie du site&nbsp;: productible 1&nbsp;200&nbsp;kWh/kWc, ratio de performance 0,85, autoconsommation 85&nbsp;%, {KWH_PRICE_LABEL}, inflation 3,3&nbsp;%/an sur 25 ans. Pouss&eacute;e du vent&nbsp;: ordre de grandeur physique, pas un calcul de structure. Donn&eacute;es sangles Sunology&nbsp;: centre d&apos;aide Sunology.{' '}
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
