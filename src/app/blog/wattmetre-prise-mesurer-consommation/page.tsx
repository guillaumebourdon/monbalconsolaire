import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import {
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateROIYears,
  AUTOCONSO_STANDARD,
  KWH_PRICE_LABEL,
} from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Wattmètre prise : mesurer son talon avant un kit solaire',
  description: 'Wattmètre prise : mesurer la consommation de vos appareils et votre talon avant d’acheter un kit solaire. Méthode 24 h, sélection, alternative Linky.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/wattmetre-prise-mesurer-consommation',
  },
};

// ─── Exemple chiffré (formule centralisée lib/pricing.ts) ───
// Kit hypothétique 450 Wc à 400 €, Lyon, plein sud.
// Taux d'autoconsommation estimés avec un profil de production en cloche
// (crête ~380 W par beau temps, ~250 W par temps moyen) face à un talon constant.
const KIT = { kitPriceEur: 400, kitPowerWc: 450 };
const PROD_KWH = calculateProductionKwh(KIT);
const AUTOCONSO_TALON_150 = 0.6;
const SAVINGS_STANDARD = Math.round(calculateFirstYearSavings(KIT));
const SAVINGS_TALON_150 = Math.round(calculateFirstYearSavings({ ...KIT, autoconsoOverride: AUTOCONSO_TALON_150 }));
const ROI_STANDARD = calculateROIYears(KIT);
const ROI_TALON_150 = calculateROIYears({ ...KIT, autoconsoOverride: AUTOCONSO_TALON_150 });
const INJECTED_KWH_TALON_150 = Math.round(PROD_KWH * (1 - AUTOCONSO_TALON_150));
const fmt = (n: number) => n.toLocaleString('fr-FR');

const AMAZON_TAG = 'monbalconsolai-21';
const amz = (asin: string) => `https://www.amazon.fr/dp/${asin}?tag=${AMAZON_TAG}`;

const faqData = [
  {
    question: 'Comment fonctionne un wattmètre prise ?',
    answer: 'Il se branche entre la prise murale et l’appareil. Il mesure en continu la tension et le courant qui traversent la prise, en déduit la puissance active (en watts) et l’intègre dans le temps pour afficher une consommation en kWh. La plupart affichent aussi un coût si vous saisissez votre tarif (0,1940 €/kWh au tarif réglementé Base).',
  },
  {
    question: 'Un wattmètre est-il précis pour mesurer les veilles ?',
    answer: 'Pas toujours. Beaucoup de modèles d’entrée de gamme ont un seuil de mesure de plusieurs watts : l’Otio CC 5000, par exemple, annonce une plage de 4 à 3 680 W, donc une veille de 2 W s’affichera 0. Le Brennenstuhl PM 231 E annonce une plage dès 0,2 W avec une précision de ±1 % ou ±0,2 W. Pour les veilles, vérifiez la plage basse dans la fiche technique.',
  },
  {
    question: 'Quelle puissance maximale peut mesurer un wattmètre prise ?',
    answer: 'En France, une prise standard est protégée en 16 A, soit 3 680 W sous 230 V. La plupart des wattmètres sont donnés pour 3 500 à 3 680 W. Au-delà (plaque de cuisson, chauffe-eau, borne de recharge), l’appareil est raccordé en direct au tableau et ne peut pas être mesuré à la prise.',
  },
  {
    question: 'Wattmètre ou compteur Linky : lequel pour mesurer son talon ?',
    answer: 'Les deux sont complémentaires. Le Linky (ou sa courbe de charge sur l’espace Enedis) donne le talon global du logement, tous appareils confondus. Le wattmètre dit quels appareils le composent. Commencez par le Linky pour le chiffre total, puis le wattmètre pour trouver ce que vous pouvez réduire.',
  },
  {
    question: 'Faut-il un wattmètre connecté ou un modèle à écran ?',
    answer: 'Pour mesurer ses appareils avant un achat, un modèle à écran à 15-25 € suffit. Une prise connectée (Tapo P110, Shelly) devient intéressante si vous voulez des courbes horaires sur plusieurs jours, ou la réutiliser ensuite pour suivre la production du kit solaire.',
  },
  {
    question: 'Pourquoi mesurer son talon avant d’acheter un kit solaire ?',
    answer: 'Parce que sans batterie, seule la production consommée au même instant fait baisser la facture. Le surplus est injecté sur le réseau sans rémunération. Si votre talon diurne est de 150 W et que votre kit produit 380 W à midi, 230 W partent gratuitement. Connaître son talon permet de choisir la bonne puissance et d’éviter de payer des panneaux qui travaillent pour le réseau.',
  },
];

type Wattmetre = {
  nom: string;
  type: string;
  plage: string;
  pointFort: string;
  limite: string;
  prix: string;
  asin: string;
};

const produits: Wattmetre[] = [
  {
    nom: 'Brennenstuhl PM 231 E (version FR, réf. 1506601)',
    type: 'Écran',
    plage: '0,2 à 3 600 W, ±1 % ou ±0,2 W',
    pointFort: 'Le plus précis sur les veilles, affiche facteur de puissance et courant',
    limite: 'Vérifiez la référence : la 1506600 est en prise allemande (Schuko), pas au format français',
    prix: '~20-26 €',
    asin: 'B00DZ872B4',
  },
  {
    nom: 'Chacon EcoWatt 550',
    type: 'Écran',
    plage: 'Jusqu’à 3 500 W',
    pointFort: 'Double tarif HP/HC, puissance max enregistrée, tension et intensité',
    limite: 'Précision basse puissance non communiquée par le fabricant',
    prix: '~20 €',
    asin: 'B00D7BN16Y',
  },
  {
    nom: 'Chacon EcoWatt 570',
    type: 'Écran',
    plage: '16 A (voir fiche)',
    pointFort: 'Le moins cher de la sélection, double tarif, affichage CO₂',
    limite: 'Précision basse puissance non communiquée',
    prix: '~13-15 €',
    asin: 'B01827SLIU',
  },
  {
    nom: 'Otio CC 5000',
    type: 'Écran',
    plage: '4 à 3 680 W',
    pointFort: 'Simple, affiche coût et durée de fonctionnement',
    limite: 'Aveugle sous 4 W : inutilisable pour traquer les petites veilles',
    prix: '~19 €',
    asin: 'B005L81XV6',
  },
  {
    nom: 'Tapo P110 (FR)',
    type: 'Connectée WiFi',
    plage: '16 A (3 680 W)',
    pointFort: 'Historique heure par heure dans l’app, réutilisable pour suivre la production du kit',
    limite: 'Nécessite WiFi 2,4 GHz et un compte TP-Link',
    prix: '~12-15 €',
    asin: 'B09J1497Y4',
  },
  {
    nom: 'Tapo P110M (FR, Matter)',
    type: 'Connectée WiFi + Matter',
    plage: '16 A (3 680 W)',
    pointFort: 'Mêmes mesures que la P110, compatible Apple Home via Matter',
    limite: 'Plus chère que la P110 pour un usage de mesure identique',
    prix: '~25-30 €',
    asin: 'B0CJCBN43P',
  },
];

export default function WattmetrePrisePage() {
  return (
    <>
      <SchemaArticle
        title="Wattm&egrave;tre prise : mesurer son talon de consommation avant d'acheter un kit solaire"
        description="Comment utiliser un wattm&egrave;tre prise pour mesurer la consommation de ses appareils et son talon avant d'acheter un kit solaire de balcon."
        url="https://monbalconsolaire.fr/blog/wattmetre-prise-mesurer-consommation"
        datePublished="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Wattmètre prise' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Wattmètre prise' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avant d&apos;acheter</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Wattm&egrave;tre prise : mesurer son talon de consommation avant d&apos;acheter un kit solaire
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Avant de choisir entre un kit de 300, 450 ou 800 Wc, il y a un chiffre &agrave; conna&icirc;tre : votre <strong>talon de consommation</strong> en journ&eacute;e. Un wattm&egrave;tre &agrave; <strong>15-25 &euro;</strong> et une soir&eacute;e de mesures suffisent pour l&apos;obtenir. Voici la m&eacute;thode, les pi&egrave;ges de pr&eacute;cision, et les mod&egrave;les que nous avons analys&eacute;s.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>27 septembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong className="text-green">{'✓'} Le talon d&eacute;cide de la bonne puissance.</strong> Sans batterie, tout ce que le kit produit au-del&agrave; de votre consommation instantan&eacute;e part sur le r&eacute;seau, gratuitement.</li>
              <li><strong className="text-green">{'✓'} Le Linky donne le total, le wattm&egrave;tre donne le d&eacute;tail.</strong> Les deux se compl&egrave;tent.</li>
              <li><strong className="text-green">{'✓'} Attention &agrave; la plage basse.</strong> Certains wattm&egrave;tres ne mesurent rien sous 4-5 W : inutiles pour les veilles.</li>
              <li><strong className="text-green">{'✓'} 3 680 W max</strong> (16 A) : les gros appareils raccord&eacute;s au tableau ne se mesurent pas &agrave; la prise.</li>
              <li><strong className="text-green">{'✓'} Notre choix :</strong> Brennenstuhl PM 231 E version FR pour la pr&eacute;cision, Tapo P110 si vous voulez des courbes et la r&eacute;utiliser apr&egrave;s l&apos;achat du kit.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi mesurer avant d&apos;acheter un kit solaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire de balcon sans batterie n&apos;&eacute;conomise que l&apos;&eacute;lectricit&eacute; <strong>consomm&eacute;e au moment o&ugrave; elle est produite</strong>. Le reste est inject&eacute; sur le r&eacute;seau via votre Linky, sans r&eacute;mun&eacute;ration en autoconsommation sans vente (<Link href="/blog/linky-panneau-solaire-injection" className="text-green hover:underline">comment le Linky compte l&apos;injection</Link>). Or en journ&eacute;e, quand personne n&apos;est &agrave; la maison, ce qui consomme, c&apos;est votre <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline">talon de consommation</Link> : frigo, cong&eacute;lateur, box, VMC, veilles.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Notre m&eacute;thodologie standard retient {Math.round(AUTOCONSO_STANDARD * 100)}&nbsp;% d&apos;autoconsommation. C&apos;est r&eacute;aliste pour un foyer dont le talon diurne est d&eacute;j&agrave; &eacute;lev&eacute; ou qui d&eacute;cale ses usages. Avec un petit talon et un logement vide en journ&eacute;e, c&apos;est optimiste. Exemple simple :
              </p>

              <div className="card-lg bg-cream/40 mb-4">
                <h3 className="font-bold mb-3">Exemple : talon de 150 W face &agrave; un kit de 450 Wc</h3>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; Kit 450 Wc &agrave; 400 &euro; (hypoth&egrave;se), Lyon, plein sud : <strong className="font-mono">{fmt(PROD_KWH)} kWh/an</strong> produits.</li>
                  <li>&bull; &Agrave; midi par beau temps, le kit d&eacute;livre environ <strong>380 W</strong>. Votre talon en consomme 150 : <strong>230 W partent sur le r&eacute;seau</strong>, soit 60&nbsp;% de la production &agrave; cet instant.</li>
                  <li>&bull; Le matin et en fin d&apos;apr&egrave;s-midi, quand le kit produit moins de 150 W, tout est consomm&eacute;.</li>
                  <li>&bull; Sur l&apos;ann&eacute;e, sans autre usage en journ&eacute;e, on tombe autour de <strong>60&nbsp;% d&apos;autoconsommation</strong> au lieu de {Math.round(AUTOCONSO_STANDARD * 100)}&nbsp;% : environ <strong className="font-mono">{fmt(INJECTED_KWH_TALON_150)} kWh/an</strong> donn&eacute;s au r&eacute;seau.</li>
                </ul>
              </div>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Sc&eacute;nario (kit 450 Wc, 400 &euro;)</th>
                      <th className="text-center p-2.5 font-semibold">Autoconso.</th>
                      <th className="text-center p-2.5 font-semibold">&Eacute;conomie an 1</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Retour sur invest.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-green-pale/20">
                      <td className="p-2.5 font-semibold">M&eacute;thodologie standard</td>
                      <td className="text-center p-2.5 font-mono">{Math.round(AUTOCONSO_STANDARD * 100)} %</td>
                      <td className="text-center p-2.5 font-mono">{SAVINGS_STANDARD} &euro;</td>
                      <td className="text-center p-2.5 font-mono">{ROI_STANDARD.toLocaleString('fr-FR')} ans</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-2.5 font-semibold">Talon 150 W, logement vide en journ&eacute;e</td>
                      <td className="text-center p-2.5 font-mono">~{Math.round(AUTOCONSO_TALON_150 * 100)} %</td>
                      <td className="text-center p-2.5 font-mono">{SAVINGS_TALON_150} &euro;</td>
                      <td className="text-center p-2.5 font-mono">{ROI_TALON_150.toLocaleString('fr-FR')} ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Le kit reste rentable, mais il rapporte pr&egrave;s d&apos;un tiers de moins que pr&eacute;vu. Avec un talon diurne de 300 W, l&apos;&eacute;cart dispara&icirc;t presque : quasiment toute la production est consomm&eacute;e. D&apos;o&ugrave; l&apos;int&eacute;r&ecirc;t de mesurer <strong>avant</strong> de choisir entre un kit de 300, 450 ou 800 Wc (<Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="text-green hover:underline">comparatif des puissances</Link>).
              </p>
              <p className="text-xs text-stone mt-3">
                Calcul : formule du site (productible Lyon 1 200 kWh/kWc, PR 0,85, tarif {KWH_PRICE_LABEL}, inflation 3,3&nbsp;%/an). Le taux de 60&nbsp;% est une estimation obtenue avec un profil de production en cloche face &agrave; un talon constant ; il varie selon la saison et vos habitudes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment fonctionne un wattm&egrave;tre prise</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le wattm&egrave;tre s&apos;intercale entre la prise murale et l&apos;appareil. Il mesure la tension et le courant, calcule la <strong>puissance active</strong> en watts, puis cumule l&apos;&eacute;nergie en kWh. Les bons mod&egrave;les affichent aussi le facteur de puissance, utile pour les appareils &eacute;lectroniques (box, chargeurs) dont la puissance apparente (VA) est sup&eacute;rieure &agrave; la puissance r&eacute;ellement factur&eacute;e.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Limite haute : 3 680 W</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Une prise domestique est prot&eacute;g&eacute;e en 16 A, soit 3 680 W sous 230 V. Les wattm&egrave;tres sont donn&eacute;s pour 3 500 &agrave; 3 680 W. Plaques, four encastr&eacute;, chauffe-eau et radiateurs raccord&eacute;s au mur ne passent pas par une prise : ils ne se mesurent qu&apos;au Linky.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Limite basse : le vrai pi&egrave;ge pour le talon</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le talon est fait de petites puissances : une veille de TV &agrave; 1 W, un chargeur &agrave; vide &agrave; 0,5 W, une box &agrave; 10-15 W. Or beaucoup de wattm&egrave;tres bon march&eacute; ont un seuil de d&eacute;tection de plusieurs watts. L&apos;Otio CC 5000 annonce une plage de <strong>4 &agrave; 3 680 W</strong> : en dessous, il affiche 0. Le Brennenstuhl PM 231 E descend &agrave; <strong>0,2 W</strong> avec une pr&eacute;cision de &plusmn;1&nbsp;% ou &plusmn;0,2 W. Pour les veilles, c&apos;est ce chiffre qu&apos;il faut chercher dans la fiche technique.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Autoconsommation du wattm&egrave;tre</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le wattm&egrave;tre consomme lui-m&ecirc;me un peu (moins de 0,5 W pour le PM 231 E selon Brennenstuhl), mais cette consommation n&apos;est pas compt&eacute;e dans la mesure de l&apos;appareil branch&eacute;.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">M&eacute;thode de mesure pas &agrave; pas</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">1. Relevez le talon global au Linky</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un soir, &eacute;teignez lumi&egrave;res, TV, ordinateur et cuisson. Faites d&eacute;filer l&apos;&eacute;cran du Linky avec la touche + jusqu&apos;&agrave; la puissance apparente instantan&eacute;e (en VA). C&apos;est votre talon approximatif, l&eacute;g&egrave;rement sur&eacute;valu&eacute; car en VA et non en W. Pour un chiffre plus fiable, voir la courbe de charge plus bas.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">2. Mesurez les appareils permanents sur 24 h</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Frigo et cong&eacute;lateur fonctionnent par cycles (compresseur qui d&eacute;marre et s&apos;arr&ecirc;te) : une lecture instantan&eacute;e ne veut rien dire. Laissez le wattm&egrave;tre branch&eacute; 24 h, relevez les kWh et divisez par 24 pour obtenir la puissance moyenne. Exemple : 0,8 kWh en 24 h = 33 W en moyenne.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">3. Mesurez les veilles une par une</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Box internet, d&eacute;codeur TV, multiprise du salon (TV + barre de son + console), micro-ondes, imprimante. Une lecture de quelques minutes suffit, l&apos;appareil &eacute;tant &eacute;teint en veille. Mesurez la multiprise enti&egrave;re plut&ocirc;t que chaque appareil : c&apos;est plus rapide.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">4. Faites la somme et comparez au Linky</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">La somme de vos mesures doit approcher le talon du Linky. S&apos;il manque 50 W ou plus, cherchez un appareil raccord&eacute; en direct : VMC, chaudi&egrave;re, pompe de circulation, ballon d&apos;eau chaude.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">5. Isolez le talon de journ&eacute;e</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">C&apos;est lui qui compte pour le solaire. Si vous t&eacute;l&eacute;travaillez, ajoutez l&apos;ordinateur et l&apos;&eacute;cran. Si un chauffe-eau est programm&eacute; en heures creuses la nuit, il ne compte pas dans le talon diurne.</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">
                Avec ce chiffre, entrez dans notre <Link href="/calculateur" className="text-green hover:underline">calculateur</Link> un profil de pr&eacute;sence r&eacute;aliste : il vous dira si le kit est rentable pour votre situation, ou non.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">S&eacute;lection de wattm&egrave;tres analys&eacute;s</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Tous les mod&egrave;les ci-dessous sont au format de prise fran&ccedil;ais (type E), sauf mention. Prix constat&eacute;s sur Amazon en septembre 2026, susceptibles de varier.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Mod&egrave;le</th>
                      <th className="text-center p-2.5 font-semibold">Type</th>
                      <th className="text-center p-2.5 font-semibold">Plage annonc&eacute;e</th>
                      <th className="text-left p-2.5 font-semibold">Point fort</th>
                      <th className="text-left p-2.5 font-semibold">Limite</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produits.map((p, i) => (
                      <tr key={p.asin} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">
                          <a href={amz(p.asin)} target="_blank" rel="sponsored noopener" className="text-green hover:underline">{p.nom}</a>
                        </td>
                        <td className="text-center p-2.5">{p.type}</td>
                        <td className="text-center p-2.5 font-mono">{p.plage}</td>
                        <td className="p-2.5">{p.pointFort}</td>
                        <td className="p-2.5 text-amber-dark">{p.limite}</td>
                        <td className="text-center p-2.5 font-mono">{p.prix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Notre choix pour mesurer le talon : Brennenstuhl PM 231 E (FR)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">C&apos;est le seul de la s&eacute;lection dont le fabricant publie une plage basse (0,2 W) et une pr&eacute;cision chiffr&eacute;e. Il affiche aussi le facteur de puissance. Pi&egrave;ge : la r&eacute;f&eacute;rence 1506600, la plus visible sur Amazon, est en prise allemande Schuko et plusieurs acheteurs signalent qu&apos;elle ne se branche pas sur une prise fran&ccedil;aise avec terre. Prenez la <strong>1506601</strong>.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">&Agrave; &eacute;viter pour les veilles : Otio CC 5000</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Correct pour mesurer un frigo ou un lave-linge, mais sa plage d&eacute;marre &agrave; 4 W : une veille de 2 W s&apos;affiche 0. Pour traquer le talon, c&apos;est pr&eacute;cis&eacute;ment ce qu&apos;on cherche.</p>
                </div>
              </div>
            </section>

            <div className="my-8">
              <AffiliateCTA
                productName="Brennenstuhl PM 231 E (FR)"
                merchantName="Amazon"
                affiliateUrl={amz('B00DZ872B4')}
                label="Voir le Brennenstuhl PM 231 E version FR sur Amazon"
                variant="primary"
                position="after-selection"
              />
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Wattm&egrave;tre &agrave; &eacute;cran ou prise connect&eacute;e ?</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Crit&egrave;re</th>
                      <th className="text-center p-2.5 font-semibold">Wattm&egrave;tre &agrave; &eacute;cran</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Prise connect&eacute;e (Tapo, Shelly)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light"><td className="p-2.5 font-semibold">Lecture</td><td className="text-center p-2.5">Sur l&apos;&eacute;cran, sur place</td><td className="text-center p-2.5">Dans l&apos;app, &agrave; distance</td></tr>
                    <tr className="border-b border-border-light bg-cream/50"><td className="p-2.5 font-semibold">Historique</td><td className="text-center p-2.5">Cumul kWh uniquement</td><td className="text-center p-2.5">Courbes heure/jour/mois</td></tr>
                    <tr className="border-b border-border-light"><td className="p-2.5 font-semibold">Installation</td><td className="text-center p-2.5">Aucune</td><td className="text-center p-2.5">App + WiFi 2,4 GHz + compte</td></tr>
                    <tr className="border-b border-border-light bg-cream/50"><td className="p-2.5 font-semibold">Infos &eacute;lectriques</td><td className="text-center p-2.5">Tension, courant, cos &phi; (selon mod&egrave;le)</td><td className="text-center p-2.5">Puissance et &eacute;nergie surtout</td></tr>
                    <tr className="border-b border-border-light"><td className="p-2.5 font-semibold">Apr&egrave;s l&apos;achat du kit</td><td className="text-center p-2.5">Reste un outil de diagnostic</td><td className="text-center p-2.5">Suit la production du kit au quotidien</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Pour une campagne de mesure ponctuelle, l&apos;&eacute;cran suffit. Si vous &ecirc;tes presque d&eacute;cid&eacute; &agrave; acheter un kit, une <strong>Tapo P110</strong> est plus rentable : elle mesure vos appareils aujourd&apos;hui et la production du panneau demain. Nous d&eacute;taillons ce second usage dans notre <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline">comparatif des prises connect&eacute;es pour le suivi solaire</Link>. Attention : de nombreuses Shelly vendues sur Amazon.fr sont au format allemand (type F) ; v&eacute;rifiez la fiche avant d&apos;acheter.
              </p>
            </section>

            <div className="my-8">
              <AffiliateCTA
                productName="Tapo P110 (FR)"
                merchantName="Amazon"
                affiliateUrl={amz('B09J1497Y4')}
                label="Voir la Tapo P110 (FR) sur Amazon"
                variant="secondary"
                position="after-connected"
              />
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;alternative gratuite : les donn&eacute;es du Linky</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Pour le talon global, vous avez d&eacute;j&agrave; un instrument de mesure gratuit : votre compteur Linky.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Courbe de charge sur l&apos;espace client Enedis (gratuit)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Dans votre espace client Enedis, activez l&apos;enregistrement de la courbe de charge : le Linky enregistre alors votre puissance moyenne toutes les 30 minutes. Les donn&eacute;es arrivent en J+1. Regardez les valeurs entre 2 h et 5 h du matin : c&apos;est votre talon nocturne. En semaine entre 10 h et 16 h, logement vide, c&apos;est votre talon diurne, celui qui compte pour le solaire.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Ecojoko (bo&icirc;tier + cl&eacute; TIC)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Une cl&eacute; branch&eacute;e sur la prise TIC du Linky relaie les mesures toutes les 5 &agrave; 10 secondes vers un afficheur et une app, avec estimation du talon et r&eacute;partition par cat&eacute;gories d&apos;appareils. Plus confortable que la courbe Enedis, mais nettement plus cher qu&apos;un wattm&egrave;tre. <a href={amz('B0H6JXJHPL')} target="_blank" rel="sponsored noopener" className="text-green hover:underline">Voir Ecojoko sur Amazon</a>.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Lixee ZLinky (domotique)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Module qui se branche sur la prise TIC du Linky et transmet les donn&eacute;es en Zigbee 3.0 vers Home Assistant, Jeedom ou une box compatible. La version V2 est certifi&eacute;e &laquo;&nbsp;Linky Ready&nbsp;&raquo;. Environ 50-60 &euro;, r&eacute;serv&eacute; &agrave; ceux qui ont d&eacute;j&agrave; une installation domotique Zigbee. <a href={amz('B0DKLDR69T')} target="_blank" rel="sponsored noopener" className="text-green hover:underline">Voir le ZLinky V2 sur Amazon</a>.</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">
                Ce que le Linky ne dit pas : <strong>quels appareils</strong> composent ce talon. Pour savoir si vous pouvez le r&eacute;duire (vieux cong&eacute;lateur, multiprise en veille), le wattm&egrave;tre reste indispensable.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Vous avez votre talon ? Testez la rentabilit&eacute;</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur croise votre d&eacute;partement, votre orientation et votre pr&eacute;sence en journ&eacute;e. Si le kit n&apos;est pas rentable pour vous, il vous le dit.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma rentabilit&eacute; &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les erreurs &agrave; &eacute;viter</h2>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Lire le frigo en instantan&eacute;.</strong> Compresseur &agrave; l&apos;arr&ecirc;t : 1 W. En marche : 80 W. Seule la moyenne sur 24 h compte.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Faire confiance &agrave; un &laquo;&nbsp;0 W&nbsp;&raquo;.</strong> Sur un wattm&egrave;tre dont la plage d&eacute;marre &agrave; 4-5 W, une veille de 3 W n&apos;appara&icirc;t pas.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Confondre talon de nuit et talon de jour.</strong> Le solaire produit en journ&eacute;e : c&apos;est le talon diurne qui fixe l&apos;autoconsommation.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Brancher un gros appareil au-del&agrave; de 16 A.</strong> Radiateur d&apos;appoint de 2 000 W : oui. Rien au-dessus de 3 680 W, et jamais de wattm&egrave;tre derri&egrave;re une multiprise d&eacute;j&agrave; charg&eacute;e.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Acheter une r&eacute;f&eacute;rence en prise allemande.</strong> Brennenstuhl 1506600, beaucoup de Shelly : v&eacute;rifiez &laquo;&nbsp;type E&nbsp;&raquo; ou &laquo;&nbsp;FR&nbsp;&raquo; dans le titre.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Dimensionner le kit sur la facture annuelle.</strong> 4 000 kWh/an ne disent rien de ce qui tourne &agrave; midi un mardi.</li>
              </ul>
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

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation : le calculer et l&apos;effacer</h4>
                  <p className="text-xs text-charcoal-light mt-1">Composition d&apos;un talon type et puissance de kit adapt&eacute;e</p>
                </Link>
                <Link href="/blog/prises-connectees-suivi-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleures prises connect&eacute;es pour suivi solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Tapo P110, Shelly, Meross : suivre la production de votre kit</p>
                </Link>
                <Link href="/blog/linky-panneau-solaire-injection" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Linky et panneau solaire : comprendre l&apos;injection</h4>
                  <p className="text-xs text-charcoal-light mt-1">Index soutirage, index injection et lecture de l&apos;&eacute;cran</p>
                </Link>
                <Link href="/guide/checklist-avant-achat-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Checklist avant d&apos;acheter un kit solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les v&eacute;rifications &agrave; faire avant de commander</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> produits analys&eacute;s sur fiches techniques fabricants (Brennenstuhl, Chacon, Otio, TP-Link, Lixee, Ecojoko) et fiches Amazon.fr ; prix constat&eacute;s septembre 2026. Exemple chiffr&eacute; calcul&eacute; avec la formule centralis&eacute;e du site : tarif {KWH_PRICE_LABEL}, inflation 3,3&nbsp;%/an, PR 0,85, r&eacute;f&eacute;rence Lyon plein sud. Donn&eacute;es Linky : Enedis. Nous n&apos;avons pas eu ces appareils en main : analyse sur documentation et retours utilisateurs.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
              <p className="text-xs text-stone leading-relaxed mt-2">
                <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s (Amazon). Si vous achetez via ces liens, nous touchons une petite commission, sans surco&ucirc;t pour vous. Cela n&apos;influence pas notre s&eacute;lection.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
