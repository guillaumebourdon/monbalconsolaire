import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Guirlande solaire balcon : 8 modèles pour l\'hiver (2026)',
  description: 'Guirlande solaire balcon : 8 modèles IP65 sélectionnés (guinguette, Noël, recharge USB) et ce que devient leur autonomie en décembre. Critères et prix.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/guirlande-solaire-balcon',
  },
};

const AMAZON_TAG = 'monbalconsolai-21';
const amazonUrl = (asin: string) => `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}`;

const faqData = [
  {
    question: 'Une guirlande solaire fonctionne-t-elle en hiver sur un balcon ?',
    answer: 'Oui, mais avec une autonomie nettement réduite. En décembre, un panneau posé à plat à Paris reçoit environ 0,84 kWh/m² par jour contre 5,76 en juin (PVGIS), soit près de 7 fois moins, alors que la nuit dure environ 16 heures. Comptez 2 à 5 heures d\'éclairage au lieu de 8 à 12, et parfois rien après plusieurs jours gris. Un modèle avec recharge USB évite les soirées dans le noir.',
  },
  {
    question: 'Une guirlande solaire marche-t-elle sur un balcon exposé nord ?',
    answer: 'Très mal de novembre à février. Sur une façade nord, un panneau vertical reçoit environ 0,23 kWh/m² par jour en décembre à Paris (PVGIS), soit 7 à 8 fois moins que sur une façade sud. Le panneau ne se recharge quasiment qu\'avec la lumière diffuse. Sur un balcon nord, prenez une guirlande USB ou sur secteur, ou une guirlande solaire avec recharge USB que vous rechargerez à l\'intérieur.',
  },
  {
    question: 'Quel indice IP choisir pour une guirlande de balcon ?',
    answer: 'IP44 suffit pour un balcon couvert (protection contre les projections d\'eau). IP65 est préférable pour un balcon ouvert : étanche à la poussière et résistant aux jets d\'eau de toutes directions. Vérifiez que l\'indice concerne à la fois les ampoules et le boîtier du panneau : certains modèles sont IP65 côté panneau mais IP44 côté ampoules.',
  },
  {
    question: 'Blanc chaud ou blanc froid pour une guirlande de Noël ?',
    answer: 'Blanc chaud (2700 à 3000 K) pour une ambiance guinguette ou chalet, c\'est le choix le plus courant sur un balcon. Le blanc froid (6000 K et plus) donne un rendu plus « glacé » qui peut convenir à une déco de Noël, mais paraît vite clinique. Les modèles multicolores sont souvent moins lumineux par LED.',
  },
  {
    question: 'Faut-il rentrer sa guirlande solaire en hiver ?',
    answer: 'Pas obligatoirement si elle est IP65, mais c\'est conseillé en cas de gel prolongé ou si vous ne l\'utilisez pas. Les batteries perdent de la capacité au froid et vieillissent plus vite à force de décharges profondes. Si vous la rangez, rechargez-la à moitié, coupez l\'interrupteur du panneau et stockez-la au sec, hors gel.',
  },
  {
    question: 'Guirlande solaire ou guirlande sur prise : laquelle est la plus économique ?',
    answer: 'Une guirlande LED sur secteur consomme quelques watts. Allumée 6 heures par jour pendant 60 jours (période de Noël), une guirlande de 5 W consomme environ 1,8 kWh, soit environ 0,35 € au tarif de 0,1940 €/kWh. L\'argument du solaire n\'est donc pas l\'économie, mais l\'absence de câble et de prise extérieure.',
  },
];

type Guirlande = {
  num: number;
  nom: string;
  titreAmazon: string;
  asin: string;
  type: string;
  longueur: string;
  batterie: string;
  recharge: string;
  ip: string;
  prix: string;
  avis: string;
  pour: string[];
  contre: string[];
  verdict: string;
};

const guirlandes: Guirlande[] = [
  {
    num: 1,
    nom: 'Lepro guinguette 25 ampoules G40',
    titreAmazon: 'Lepro Guirlande Lumineuse Extérieur Solaire 4 Modes 7.6m, Guirlande Guinguette USB, 25 Ampoules G40, Blanc Chaud 2700K',
    asin: 'B07Y1SV72F',
    type: 'Guinguette',
    longueur: '7,6 m · 25 ampoules',
    batterie: 'Non détaillée par le vendeur',
    recharge: 'Solaire (panneau 3 W) + USB',
    ip: 'Panneau IP65, ampoules IP44',
    prix: '40-50 €',
    avis: '4,2/5 · 4 300+ avis',
    pour: [
      'Panneau annoncé à 3 W / 5,5 V : plus gros que la moyenne des guirlandes solaires',
      'Recharge USB de secours en cas de ciel gris',
      'Blanc chaud 2700 K, ampoules plastique incassables espacées de 25 cm',
      'Le plus gros volume d\'avis de la sélection',
    ],
    contre: [
      'Ampoules seulement IP44 : à éviter sur un balcon très exposé à la pluie battante',
      'Le plus cher de la sélection',
      'Seulement 4 modes',
    ],
    verdict: 'Le choix le plus solide pour une ambiance guinguette qui doit tenir jusqu\'à Noël : panneau plus généreux et recharge USB quand le soleil manque.',
  },
  {
    num: 2,
    nom: 'Cnulenzt guinguette 16 ampoules 8 m',
    titreAmazon: 'Cnulenzt Guirlande Lumineuse Extérieure Solaire, Guinguette 16 Ampoules 8M, Étanche IP65, 8 Modes d\'Éclairage (Blanc Chaud)',
    asin: 'B0CS681YY8',
    type: 'Guinguette',
    longueur: '8 m · 16 ampoules',
    batterie: 'Non communiquée',
    recharge: 'Solaire uniquement',
    ip: 'IP65',
    prix: '20-25 €',
    avis: '4,0/5 · 540+ avis',
    pour: [
      'IP65 annoncé sur l\'ensemble',
      'Prix contenu pour une guinguette de 8 m',
      'Le vendeur précise honnêtement qu\'il s\'agit d\'une lumière d\'ambiance, pas d\'un éclairage principal',
    ],
    contre: [
      'Pas de recharge USB : en décembre, dépend entièrement du soleil',
      'Capacité de batterie non communiquée',
      'Autonomie de 10-12 h annoncée pour une charge complète… rarement atteinte en hiver',
    ],
    verdict: 'Bon rapport prix/étanchéité pour un balcon sud dégagé. Sur un balcon est, ouest ou nord, préférez un modèle avec USB.',
  },
  {
    num: 3,
    nom: 'GlobaLink guinguette solaire + USB-C 11 m',
    titreAmazon: 'GlobaLink Guirlande Guinguette Solaire et Charge Extérieur, 11M 10+1 Leds, 4 Modes, IP65 Etanche 2 en 1',
    asin: 'B0BTYDF5N6',
    type: 'Guinguette',
    longueur: '11 m · 10 ampoules (+1)',
    batterie: 'Non communiquée',
    recharge: 'Solaire + USB-C',
    ip: 'IP65',
    prix: '29-38 €',
    avis: '3,9/5 · 70+ avis',
    pour: [
      'Double recharge solaire / USB-C à vitesse équivalente selon le vendeur (environ 6 h)',
      'IP65 annoncé pour l\'ampoule et le boîtier',
      'Grande longueur (11 m) pour peu d\'ampoules : couvre toute la largeur d\'un balcon',
    ],
    contre: [
      'Seulement 10 ampoules : rendu plus clairsemé',
      'Volume d\'avis encore faible',
      'Prix variable selon les périodes',
    ],
    verdict: 'Alternative au Lepro pour qui veut l\'USB-C et une grande longueur, avec moins d\'ampoules.',
  },
  {
    num: 4,
    nom: 'DeepDream 60 LED globes 11 m (solaire + USB)',
    titreAmazon: 'Guirlande lumineuse solaire avec USB Rechargeable, DeepDream 60 LED 11M Étanche, Blanc Chaud',
    asin: 'B0872RZ2JW',
    type: 'Petites boules',
    longueur: '11 m · 60 LED',
    batterie: '1 800 mAh Ni-MH',
    recharge: 'Solaire + USB',
    ip: 'IP65 (partie USB non étanche)',
    prix: '13-20 €',
    avis: '3,9/5 · 400+ avis',
    pour: [
      'Batterie annoncée (1 800 mAh), ce qui reste rare dans cette gamme',
      'Recharge USB possible sur une batterie externe ou un chargeur',
      'Petit prix',
    ],
    contre: [
      'Batterie Ni-MH : moins dense qu\'un Li-ion, mais plus tolérante au froid',
      'Le vendeur précise que la partie USB n\'est pas étanche',
      'Autonomie de 12-16 h annoncée : valeur de plein été',
    ],
    verdict: 'Le meilleur petit budget avec USB. Idéal pour un garde-corps ou une jardinière de balcon.',
  },
  {
    num: 5,
    nom: 'Dalugo 200 LED fil de cuivre 22 m',
    titreAmazon: 'Dalugo Guirlande lumineuse solaire d\'extérieur - 22 m - 200 LED - Blanc chaud - 8 modes',
    asin: 'B0BZC19G3M',
    type: 'Fil de cuivre (fairy lights)',
    longueur: '22 m · 200 LED',
    batterie: '1 200 mAh',
    recharge: 'Solaire + USB',
    ip: 'IP65 (guirlande et panneau)',
    prix: '17-26 €',
    avis: '4,0/5 · 260+ avis',
    pour: [
      '200 micro-LED sur 22 m : parfait pour habiller un garde-corps ou un sapin',
      'Recharge USB en secours, fonction mémoire du dernier mode',
      'IP65 annoncé pour la guirlande et le panneau',
    ],
    contre: [
      'Autonomie de 20-40 h annoncée : peu crédible pour une batterie de 1 200 mAh, surtout en hiver',
      'Fil de cuivre fin, plus fragile qu\'un câble guinguette',
    ],
    verdict: 'Notre choix pour une déco de Noël sur balcon : longueur généreuse et plan B USB.',
  },
  {
    num: 6,
    nom: 'TryLight 200 LED fil de cuivre 22 m',
    titreAmazon: 'Guirlande lumineuse solaire TryLight - Blanc chaud - 22 m - 200 LED - Fil de cuivre - 8 modes - Étanche - IP65',
    asin: 'B07DBXZBM2',
    type: 'Fil de cuivre (fairy lights)',
    longueur: '22 m · 200 LED',
    batterie: '1 200 mAh',
    recharge: 'Solaire uniquement',
    ip: 'IP65',
    prix: '17-22 €',
    avis: '3,9/5 · 60+ avis',
    pour: [
      'Batterie de 1 200 mAh annoncée',
      'Garantie fabricant de 2 ans mentionnée par le vendeur',
      'Petit prix pour 22 m',
    ],
    contre: [
      'Pas de recharge USB',
      'Peu d\'avis',
      'Autonomie annoncée (8-12 h) valable après une journée d\'été',
    ],
    verdict: 'Équivalent du Dalugo sans USB, avec une garantie plus longue. À réserver aux balcons sud.',
  },
  {
    num: 7,
    nom: 'Lot de 2 guirlandes de Noël 5 m 50 LED',
    titreAmazon: 'Lot de 2 petites guirlandes lumineuses solaires de Noël étanches pour jardin, terrasse, clôture, balustrade, tonnelle, 5 m, 50 LED, blanc chaud',
    asin: 'B0BN54RD74',
    type: 'Guirlande de Noël courte',
    longueur: '2 × 5 m · 2 × 50 LED',
    batterie: 'Non communiquée',
    recharge: 'Solaire uniquement',
    ip: 'IP65',
    prix: '17-34 € le lot',
    avis: '4,1/5 · 80+ avis',
    pour: [
      'Format court adapté à une balustrade de balcon',
      'Deux panneaux indépendants : vous pouvez en placer un du côté le plus ensoleillé',
      'IP65 annoncé',
    ],
    contre: [
      'Pas de recharge USB',
      'Petits panneaux : autonomie hivernale limitée',
      'Capacité de batterie non communiquée',
    ],
    verdict: 'Pratique pour décorer un garde-corps en deux tronçons. Deux panneaux = deux chances de capter le soleil.',
  },
  {
    num: 8,
    nom: 'Auraglow guirlande rétractable 5,5 m (solaire + USB-C + powerbank)',
    titreAmazon: 'Auraglow Guirlande Solaire USB avec Lampe Torche et Batterie, Guinguette rétractable 5,5m, 10 points LED, Rechargeable',
    asin: 'B0B5VH13TJ',
    type: 'Guirlande nomade',
    longueur: '5,5 m · 10 points LED',
    batterie: '2 000 mAh',
    recharge: 'Solaire + USB-C',
    ip: 'IP44',
    prix: '20-25 €',
    avis: '4,2/5 · 70+ avis',
    pour: [
      'Batterie de 2 000 mAh, la plus grosse annoncée de la sélection',
      'Se rentre en 10 secondes : on la recharge à l\'intérieur en USB-C les jours gris',
      'Fait aussi lampe torche et batterie de secours',
    ],
    contre: [
      'Seulement IP44 : à installer sous un balcon couvert',
      'Pensée pour le camping, look moins déco',
      'Courte (5,5 m)',
    ],
    verdict: 'La solution la plus réaliste pour un balcon nord ou très ombragé : on la recharge surtout en USB, le solaire devient un bonus.',
  },
];

const criteres = [
  {
    critere: 'Taille et puissance du panneau',
    pourquoi: 'C\'est lui qui limite tout en hiver. Plus il est grand, mieux la batterie se remplit par ciel gris.',
    viser: 'Puissance affichée (idéalement 2 W et plus) ; méfiance si elle n\'est pas indiquée',
  },
  {
    critere: 'Batterie (mAh et chimie)',
    pourquoi: 'La capacité fixe l\'autonomie maximale. Le Li-ion stocke plus dans moins de place ; le Ni-MH supporte mieux le froid et coûte moins cher à remplacer.',
    viser: '1 200 mAh minimum, 1 800-2 000 mAh pour l\'hiver ; batterie remplaçable = bonus',
  },
  {
    critere: 'Recharge USB de secours',
    pourquoi: 'Après trois jours de brouillard, c\'est la seule façon d\'avoir de la lumière le soir de Noël.',
    viser: 'Indispensable sur un balcon est, ouest ou nord',
  },
  {
    critere: 'Indice IP',
    pourquoi: 'IP44 = projections d\'eau. IP65 = étanche à la poussière et aux jets d\'eau de toutes directions.',
    viser: 'IP65 sur un balcon ouvert ; vérifier ampoules ET boîtier',
  },
  {
    critere: 'Température de couleur',
    pourquoi: 'Le blanc chaud crée l\'ambiance guinguette ; le blanc froid fait vite éclairage de parking.',
    viser: '2700-3000 K (blanc chaud)',
  },
  {
    critere: 'Modes et minuterie',
    pourquoi: 'Le mode fixe consomme plus que les modes clignotants ou « respiration ». Une minuterie évite de vider la batterie à 2 h du matin.',
    viser: 'Mode fixe + mode économique ; mémoire du dernier mode',
  },
];

const irradiation = [
  { position: 'Panneau à plat (sol, rebord)', juin: '5,76', decembre: '0,84', ratio: '÷ 6,9' },
  { position: 'Panneau incliné à 60°, face sud', juin: '4,69', decembre: '1,81', ratio: '÷ 2,6' },
  { position: 'Panneau vertical, face sud (garde-corps)', juin: '2,88', decembre: '1,74', ratio: '÷ 1,7' },
  { position: 'Panneau vertical, face nord', juin: '1,63', decembre: '0,23', ratio: '÷ 7,1' },
];

export default function GuirlandeSolaireBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Guirlande solaire balcon : 8 modèles qui tiennent l'hiver (sélection 2026)"
        description="Sélection de 8 guirlandes solaires pour balcon (guinguette, Noël, recharge USB) et analyse de leur autonomie en hiver à partir des données PVGIS."
        url="https://monbalconsolaire.fr/blog/guirlande-solaire-balcon"
        datePublished="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Accessoires', href: '/accessoires' }, { label: 'Guirlande solaire balcon' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Accessoires', href: '/accessoires' }, { label: 'Guirlande solaire balcon' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">S&eacute;lection 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Guirlande solaire balcon : 8 mod&egrave;les qui tiennent l&apos;hiver (s&eacute;lection 2026)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Guinguette, fil de cuivre, guirlande de No&euml;l : les guirlandes solaires promettent 8 &agrave; 12 heures d&apos;&eacute;clairage. C&apos;est vrai en juin. En d&eacute;cembre, sur un balcon, c&apos;est une autre histoire. Voici ce que disent les chiffres, les crit&egrave;res qui comptent vraiment et 8 mod&egrave;les s&eacute;lectionn&eacute;s sur fiche technique et avis clients.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>27 septembre 2026</span>
              <span>&middot;</span>
              <span>11 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-charcoal-light text-sm leading-relaxed space-y-2">
              <li>&bull; En d&eacute;cembre, un panneau pos&eacute; &agrave; plat re&ccedil;oit <strong>environ 7 fois moins d&apos;&eacute;nergie qu&apos;en juin</strong> (PVGIS, Paris), pour des nuits de 16 heures.</li>
              <li>&bull; Le bon r&eacute;flexe : <strong>panneau redress&eacute; face au sud</strong> (60&deg; &agrave; la verticale), pas pos&eacute; &agrave; plat. En hiver, la verticale sud capte 2 fois plus que l&apos;horizontale.</li>
              <li>&bull; Crit&egrave;res cl&eacute;s : <strong>recharge USB de secours</strong>, batterie &ge; 1 200 mAh, IP65, blanc chaud 2700 K.</li>
              <li>&bull; Notre s&eacute;lection : <strong>Lepro</strong> (guinguette, 40-50 &euro;), <strong>Dalugo</strong> (d&eacute;co de No&euml;l, 17-26 &euro;), <strong>DeepDream</strong> (petit budget avec USB, 13-20 &euro;).</li>
              <li>&bull; Balcon <strong>nord</strong> : oubliez le 100 % solaire de novembre &agrave; f&eacute;vrier. Prenez un mod&egrave;le rechargeable en USB ou une guirlande sur prise.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le probl&egrave;me de l&apos;hiver, en chiffres</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Une guirlande solaire, c&apos;est un petit panneau (souvent quelques centim&egrave;tres carr&eacute;s), une batterie et un capteur cr&eacute;pusculaire. Le panneau remplit la batterie le jour, les LED la vident la nuit. Tout le probl&egrave;me de l&apos;hiver tient dans ce bilan : <strong>moins d&apos;&eacute;nergie entrante, plus d&apos;heures de nuit &agrave; couvrir</strong>.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Nous avons interrog&eacute; PVGIS, l&apos;outil de la Commission europ&eacute;enne qui sert aussi &agrave; nos calculs de production, pour Paris. Voici l&apos;irradiation moyenne re&ccedil;ue par jour, en kWh/m&sup2;, selon la position du panneau :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Position du panneau (Paris)</th>
                      <th className="text-center p-3">Juin</th>
                      <th className="text-center p-3">D&eacute;cembre</th>
                      <th className="text-center p-3 rounded-tr-xl">&Eacute;cart</th>
                    </tr>
                  </thead>
                  <tbody>
                    {irradiation.map((r, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 text-xs font-semibold">{r.position}</td>
                        <td className="text-center p-3 font-mono text-xs">{r.juin}</td>
                        <td className="text-center p-3 font-mono text-xs">{r.decembre}</td>
                        <td className="text-center p-3 font-mono text-xs font-bold text-amber-dark">{r.ratio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[11px] text-stone mt-2 px-5 md:px-0">
                  Source : PVGIS 5.3 (JRC, Commission europ&eacute;enne), irradiation moyenne journali&egrave;re sur le plan du panneau, Paris. Relev&eacute; septembre 2026.
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Trois enseignements. <strong>Un, &agrave; plat, c&apos;est la pire position en hiver</strong> : le soleil de d&eacute;cembre est si bas (environ 18&deg; &agrave; midi &agrave; Paris) qu&apos;il frappe un panneau horizontal en rasant. <strong>Deux, redress&eacute; face au sud, le panneau garde plus de la moiti&eacute; de son &eacute;nergie estivale</strong> : c&apos;est pour cette raison qu&apos;un panneau fix&eacute; verticalement sur un garde-corps sud s&apos;en sort bien. <strong>Trois, au nord, il ne reste presque rien</strong> : 0,23 kWh/m&sup2; par jour, uniquement de la lumi&egrave;re diffuse.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ailleurs en France, l&apos;ordre de grandeur reste le m&ecirc;me. Pour un plan horizontal en d&eacute;cembre, PVGIS donne environ 0,7 kWh/m&sup2;/jour &agrave; Lille, 1,1 &agrave; Lyon et 1,7 &agrave; Marseille, contre 5,6 &agrave; 7,5 en juin. Notre analyse <Link href="/blog/production-solaire-ete-vs-hiver" className="text-green font-semibold hover:underline">production solaire &eacute;t&eacute; vs hiver</Link> d&eacute;taille ces courbes mois par mois pour un vrai kit de balcon.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Traduit en autonomie, un calcul d&apos;ordre de grandeur (le n&ocirc;tre, pas celui des fabricants) : un petit panneau de 1 W expos&eacute; plein sud &agrave; la verticale capte environ 1,7 Wh par jour de d&eacute;cembre, avant les pertes de charge, souvent importantes sur ces r&eacute;gulateurs bon march&eacute;. Une batterie de 1 200 mAh en 1,2 V stocke environ 1,4 Wh. Autrement dit, par une belle journ&eacute;e d&apos;hiver, la batterie se remplit au mieux partiellement. Au nord, avec 7 fois moins de lumi&egrave;re, elle se recharge &agrave; peine.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Il faut ajouter le froid : les batteries rendent moins de capacit&eacute; sous 5 &deg;C, et le Li-ion ne doit pas &ecirc;tre recharg&eacute; en dessous de 0 &deg;C (les bons circuits bloquent alors la charge). R&eacute;sultat r&eacute;aliste en d&eacute;cembre : <strong>2 &agrave; 5 heures d&apos;&eacute;clairage apr&egrave;s une journ&eacute;e claire</strong>, souvent moins apr&egrave;s une journ&eacute;e grise, au lieu des 8 &agrave; 12 heures annonc&eacute;es.
              </p>
            </section>

            <AffiliateCTA
              productName="Lepro guirlande guinguette solaire USB 7,6 m"
              merchantName="Amazon"
              affiliateUrl={amazonUrl('B07Y1SV72F')}
              label="Voir la guinguette Lepro (solaire + USB) sur Amazon"
              variant="secondary"
              position="after-winter"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 6 crit&egrave;res qui comptent pour l&apos;hiver</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le nombre de LED et la longueur font vendre. Pour une guirlande qui doit briller jusqu&apos;au 31 d&eacute;cembre, ce sont d&apos;autres lignes de la fiche technique qu&apos;il faut lire.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-left p-3">Pourquoi c&apos;est important</th>
                      <th className="text-left p-3 rounded-tr-xl">&Agrave; viser</th>
                    </tr>
                  </thead>
                  <tbody>
                    {criteres.map((c, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 text-xs font-semibold align-top">{c.critere}</td>
                        <td className="p-3 text-xs text-charcoal-light align-top">{c.pourquoi}</td>
                        <td className="p-3 text-xs align-top">{c.viser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Un pi&egrave;ge fr&eacute;quent : l&apos;autonomie annonc&eacute;e (&laquo; 20 &agrave; 40 heures &raquo;, &laquo; toute la nuit &raquo;) est mesur&eacute;e en mode clignotant apr&egrave;s une charge compl&egrave;te en plein &eacute;t&eacute;. Elle ne dit rien de d&eacute;cembre. Autre d&eacute;tail : l&apos;indice IP annonc&eacute; ne concerne parfois que le panneau (IP65) et pas les ampoules (IP44). Pour aller plus loin sur l&apos;&eacute;tanch&eacute;it&eacute; et l&apos;&eacute;clairage fonctionnel (appliques, projecteurs), voir notre s&eacute;lection de <Link href="/blog/lampes-solaires-balcon-2026" className="text-green font-semibold hover:underline">lampes solaires pour balcon</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau comparatif des 8 guirlandes</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Mod&egrave;le</th>
                      <th className="text-center p-3">Type</th>
                      <th className="text-center p-3">Batterie</th>
                      <th className="text-center p-3">Recharge</th>
                      <th className="text-center p-3">IP</th>
                      <th className="text-center p-3 rounded-tr-xl">Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guirlandes.map((g, i) => (
                      <tr key={g.asin} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{g.nom}</td>
                        <td className="text-center p-3 text-xs">{g.type}</td>
                        <td className="text-center p-3 font-mono text-xs">{g.batterie}</td>
                        <td className="text-center p-3 text-xs">{g.recharge}</td>
                        <td className="text-center p-3 font-mono text-xs">{g.ip}</td>
                        <td className="text-center p-3 font-mono text-xs">{g.prix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 8 guirlandes s&eacute;lectionn&eacute;es</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Ces guirlandes ont &eacute;t&eacute; <strong>analys&eacute;es et s&eacute;lectionn&eacute;es</strong>, sans manipulation physique, sur leur fiche technique (panneau, batterie, recharge USB, IP), leur note moyenne et le volume d&apos;avis Amazon.fr relev&eacute;s en septembre 2026. Les autonomies cit&eacute;es sont celles des vendeurs.
              </p>
              <div className="space-y-5">
                {guirlandes.map((g) => (
                  <div key={g.asin} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-lg bg-amber text-white flex items-center justify-center font-bold text-sm">{g.num}</span>
                          <h3 className="font-bold text-base">{g.nom}</h3>
                        </div>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">
                          {g.type} &middot; {g.longueur}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-green text-lg">{g.prix}</div>
                        <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">
                          {g.avis}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                      <div className="bg-cream/60 rounded-lg p-2 text-center">
                        <div className="text-[9px] text-stone uppercase tracking-wider">Batterie</div>
                        <div className="font-mono font-semibold text-charcoal mt-1">{g.batterie}</div>
                      </div>
                      <div className="bg-cream/60 rounded-lg p-2 text-center">
                        <div className="text-[9px] text-stone uppercase tracking-wider">Recharge</div>
                        <div className="font-mono font-semibold text-charcoal mt-1">{g.recharge}</div>
                      </div>
                      <div className="bg-cream/60 rounded-lg p-2 text-center">
                        <div className="text-[9px] text-stone uppercase tracking-wider">&Eacute;tanch&eacute;it&eacute;</div>
                        <div className="font-mono font-semibold text-charcoal mt-1">{g.ip}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-green mb-1">Points forts</p>
                        <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                          {g.pour.map((p, i) => (
                            <li key={i}>&#10003; {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-dark mb-1">Points faibles</p>
                        <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                          {g.contre.map((c, i) => (
                            <li key={i}>&#10007; {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-pale/30 rounded-lg p-3 mb-4">
                      <p className="text-xs font-semibold text-green mb-1">Notre avis</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{g.verdict}</p>
                    </div>

                    <a
                      href={amazonUrl(g.asin)}
                      target="_blank"
                      rel="sponsored noopener"
                      className="btn-affiliate w-full justify-center text-sm"
                    >
                      Voir sur Amazon &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Dalugo guirlande solaire 200 LED 22 m"
              merchantName="Amazon"
              affiliateUrl={amazonUrl('B0BZC19G3M')}
              label="Notre choix déco de Noël : Dalugo 200 LED (solaire + USB)"
              variant="secondary"
              position="after-selection"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quand une guirlande USB ou sur prise est simplement meilleure</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Soyons honn&ecirc;tes : le solaire n&apos;est pas toujours la bonne r&eacute;ponse pour une guirlande de No&euml;l. Une guirlande LED sur secteur de 5 W allum&eacute;e 6 heures par soir pendant 60 jours consomme environ 1,8 kWh, soit <strong>environ 0,35 &euro;</strong> au tarif de 0,1940 &euro;/kWh. L&apos;argument du solaire n&apos;est pas l&apos;&eacute;conomie, c&apos;est l&apos;absence de c&acirc;ble.
              </p>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mb-4 pl-5">
                <li>&bull; <strong>Balcon nord ou masqu&eacute; par un immeuble</strong> : le panneau ne recevra presque rien de novembre &agrave; f&eacute;vrier.</li>
                <li>&bull; <strong>Vous avez une prise ext&eacute;rieure</strong> sur le balcon : une guirlande secteur IP44/IP65 brillera tous les soirs, &agrave; heure fixe, avec minuterie.</li>
                <li>&bull; <strong>Vous voulez de la lumi&egrave;re le 24 d&eacute;cembre &agrave; coup s&ucirc;r</strong>, m&ecirc;me apr&egrave;s une semaine de grisaille.</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed">
                Entre les deux, les guirlandes &agrave; batterie rechargeable en USB-C font tr&egrave;s bien l&apos;affaire : on les recharge &agrave; l&apos;int&eacute;rieur tous les deux ou trois jours. Exemple : cette <a href={amazonUrl('B0DX6CDQ8B')} target="_blank" rel="sponsored noopener" className="text-green font-semibold hover:underline">guirlande rechargeable USB-C 10 m (batterie 2 800 mAh, IPX4)</a>, vendue comme guirlande de camping mais utilisable sous un balcon couvert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Bien placer sa guirlande sur le balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La guirlande va o&ugrave; vous voulez. C&apos;est le <strong>panneau</strong> qu&apos;il faut placer intelligemment, surtout en hiver. La plupart des mod&egrave;les ont 3 &agrave; 5 m de c&acirc;ble entre panneau et premi&egrave;re ampoule : de quoi le d&eacute;porter vers le meilleur coin.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">1. Fixez le panneau sur le garde-corps, face au sud</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Utilisez le piquet comme support avec des colliers de serrage, ou la fixation murale fournie. En hiver, un panneau vertical ou tr&egrave;s inclin&eacute; (60&deg; et plus) capte environ 2 fois plus qu&apos;un panneau pos&eacute; &agrave; plat. C&apos;est le m&ecirc;me principe que pour un kit solaire : notre guide sur <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green font-semibold hover:underline">l&apos;orientation d&apos;un panneau solaire de balcon</Link> l&apos;explique en d&eacute;tail.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">2. Traquez l&apos;ombre de d&eacute;cembre, pas celle de juin</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Le soleil d&apos;hiver est bas : le balcon du dessus, une rambarde pleine ou l&apos;immeuble d&apos;en face peuvent masquer le panneau toute la journ&eacute;e alors qu&apos;il est au soleil en &eacute;t&eacute;. Observez votre balcon vers midi en novembre avant de choisir l&apos;emplacement.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">3. Balcon est ou ouest : choisissez le c&ocirc;t&eacute; le plus d&eacute;gag&eacute;</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Vous n&apos;aurez que quelques heures de soleil direct. Placez le panneau &agrave; l&apos;extr&eacute;mit&eacute; du balcon la plus ouverte et misez sur un mod&egrave;le avec recharge USB.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">4. Loin de toute autre source de lumi&egrave;re</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Le capteur cr&eacute;pusculaire est dans le panneau. Pr&egrave;s d&apos;un lampadaire ou d&apos;une fen&ecirc;tre &eacute;clair&eacute;e, la guirlande peut croire qu&apos;il fait jour et ne jamais s&apos;allumer.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">5. Copropri&eacute;t&eacute; et voisinage</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Une guirlande amovible fix&eacute;e par colliers ne pose en g&eacute;n&eacute;ral pas de probl&egrave;me. &Eacute;vitez de percer la fa&ccedil;ade et les modes clignotants tourn&eacute;s vers les fen&ecirc;tres voisines. Le r&egrave;glement de copropri&eacute;t&eacute; peut encadrer l&apos;aspect ext&eacute;rieur des balcons.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Entretien et hivernage</h2>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mb-4 pl-5">
                <li>&bull; <strong>Nettoyez le panneau toutes les 2-3 semaines</strong> avec un chiffon humide : pollution urbaine, pollen et fientes r&eacute;duisent vite une production d&eacute;j&agrave; faible.</li>
                <li>&bull; <strong>Premi&egrave;re charge</strong> : laissez la guirlande charger interrupteur sur OFF pendant une ou deux journ&eacute;es ensoleill&eacute;es (ou en USB) avant la premi&egrave;re utilisation.</li>
                <li>&bull; <strong>Mode fixe ou minuterie</strong> : en hiver, un mode &eacute;conomique ou une coupure &agrave; minuit prolonge la batterie.</li>
                <li>&bull; <strong>Neige</strong> : d&eacute;gagez le panneau, quelques centim&egrave;tres suffisent &agrave; bloquer toute recharge.</li>
                <li>&bull; <strong>Rangement</strong> : si vous la d&eacute;crochez apr&egrave;s les f&ecirc;tes, rechargez la batterie &agrave; moiti&eacute;, coupez l&apos;interrupteur et stockez au sec, hors gel.</li>
                <li>&bull; <strong>Batterie fatigu&eacute;e</strong> apr&egrave;s 2-3 saisons : sur beaucoup de mod&egrave;les, c&apos;est une pile AA ou 18650 standard qu&apos;on remplace pour quelques euros au lieu de jeter la guirlande.</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed">
                Les m&ecirc;mes gestes valent pour un vrai panneau de balcon : voir notre guide <Link href="/blog/entretien-nettoyage-panneau-solaire-balcon" className="text-green font-semibold hover:underline">entretien et nettoyage d&apos;un panneau solaire de balcon</Link>.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre balcon capte-t-il assez de soleil pour un vrai kit ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Une guirlande consomme quelques wattheures. Un kit solaire plug-and-play de 400-800 W peut couvrir une partie de votre consommation toute l&apos;ann&eacute;e. Le calculateur vous dit en 30 secondes si c&apos;est rentable chez vous.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mon potentiel &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
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

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/lampes-solaires-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Lampes solaires pour balcon : 10 mod&egrave;les s&eacute;lectionn&eacute;s</h4>
                  <p className="text-xs text-charcoal-light mt-1">Appliques, projecteurs, lanternes : l&apos;&eacute;clairage fonctionnel en compl&eacute;ment de la guirlande</p>
                </Link>
                <Link href="/accessoires" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Tous nos accessoires solaires pour balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Prises connect&eacute;es, batteries, supports, &eacute;clairage : nos s&eacute;lections</p>
                </Link>
                <Link href="/blog/panneau-solaire-balcon-nord" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon nord : est-ce rentable ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Ce que produit vraiment une fa&ccedil;ade nord, chiffres &agrave; l&apos;appui</p>
                </Link>
                <Link href="/blog/panneau-solaire-hiver-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en hiver : combien &ccedil;a produit vraiment ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Ce qu&apos;un kit de balcon produit de novembre &agrave; f&eacute;vrier</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-3">
                <strong>M&eacute;thodologie :</strong> guirlandes analys&eacute;es et s&eacute;lectionn&eacute;es sur fiche technique, note moyenne et volume d&apos;avis Amazon.fr, sans test physique. Prix constat&eacute;s en septembre 2026 sur Amazon.fr, susceptibles de varier. Irradiation : PVGIS 5.3 (JRC), moyennes journali&egrave;res mensuelles. Estimations d&apos;autonomie hivernale : calculs d&apos;ordre de grandeur de la r&eacute;daction. Tarif &eacute;lectricit&eacute; de r&eacute;f&eacute;rence : 0,1940 &euro;/kWh.
              </p>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence :</strong> les liens vers Amazon sont des liens affili&eacute;s. Si vous achetez via ces liens, MonBalconSolaire touche une petite commission, sans surco&ucirc;t pour vous. Cela n&apos;influence pas notre s&eacute;lection.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
