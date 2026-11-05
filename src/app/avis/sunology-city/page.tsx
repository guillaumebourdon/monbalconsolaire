import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import {
  KWH_PRICE_LABEL,
  KWH_INFLATION_LABEL,
  PANEL_DEGRADATION_LABEL,
  AUTOCONSO_STANDARD,
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateROIYears,
  calculateTotalSavings25Years,
} from '@/lib/pricing';
import { PRODUCTS, priceLabel } from '@/data/products';
import { DEPARTMENTS } from '@/data/departments';
import { productibleSite } from '@/lib/rentabilite-departements';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Sunology CITY avis (arrêté) : quelles alternatives en 2026 ?',
  description: 'Sunology CITY : le kit garde-corps n\'est plus vendu par Sunology (sept. 2026). Notre analyse, où le trouver encore et les alternatives (GO, PLAY, Beem).',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/sunology-city',
  },
});

// ─── Chiffres du CITY : tout vient de products.ts et pricing.ts ───
const CITY = PRODUCTS['sunology-city'];
const PLAY = PRODUCTS['sunology-play'];
const PLAY_MAX = PRODUCTS['sunology-play-max'];
const BEEM_KIT = PRODUCTS['beem-kit-300w'];
const GO = PRODUCTS['sunology-go'];
const CITY_PRICE = priceLabel('sunology-city');
const CITY_W = CITY.powerWc;
const fr = (n: number, d = 0) => n.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/\u202f|\u00a0/g, '\u00a0');
const euroPerWc = (priceEur: number, powerWc: number) => fr(priceEur / powerWc, 2);

const cityInput = { kitPriceEur: CITY.priceEur, kitPowerWc: CITY_W };
const CITY_PROD = calculateProductionKwh(cityInput);
const CITY_KWH_SAVED = Math.round(CITY_PROD * AUTOCONSO_STANDARD);
const CITY_SAVINGS_Y1 = Math.round(calculateFirstYearSavings(cityInput));
const CITY_ROI = calculateROIYears(cityInput);
const CITY_25Y = calculateTotalSavings25Years(cityInput);
const CITY_NET_25Y = CITY_25Y - CITY.priceEur;
const PLAY_ROI = calculateROIYears({ kitPriceEur: PLAY.priceEur, kitPowerWc: PLAY.powerWc });

// Production par ville et orientation : productible du département recalé sur la référence
// du site (comme le calculateur et les pages départementales) × coefficients d'orientation du calculateur.
const ORIENTATION_COEFS = [
  { label: 'Sud', coef: 1.0 },
  { label: 'Sud-est / Sud-ouest', coef: 0.95 },
  { label: 'Est / Ouest', coef: 0.8 },
];
const CITIES = [
  { ville: 'Marseille', code: '13' },
  { ville: 'Lyon', code: '69' },
  { ville: 'Paris', code: '75' },
  { ville: 'Lille', code: '59' },
].map(({ ville, code }) => {
  const dept = DEPARTMENTS.find((d) => d.code === code)!;
  const productible = productibleSite(dept.irradiation);
  return {
    ville,
    prod: ORIENTATION_COEFS.map(({ coef }) =>
      calculateProductionKwh({ kitPriceEur: CITY.priceEur, kitPowerWc: CITY_W, productibleKwhPerKwc: productible, orientationCoef: coef }),
    ),
  };
});
const allSud = CITIES.map((c) => c.prod[0]);
const allEstOuest = CITIES.map((c) => c.prod[2]);

const faqData = [
  {
    question: 'Le Sunology CITY est-il vraiment différent du PLAY (ex-PLAY 2) ?',
    answer: `Oui, sur deux points clés. Le CITY est conçu pour s'accrocher au garde-corps (panneaux verticaux), alors que le PLAY se pose au sol avec ballasts. Le CITY est aussi plus compact que le PLAY actuel (1 800 x 1 134 mm). En contrepartie, sa puissance est bien plus faible : ${CITY_W} W au total (2 panneaux) contre ${PLAY.powerWc} W pour le PLAY.`,
  },
  {
    question: 'Combien produit le Sunology CITY en conditions réelles ?',
    answer: `Avec notre méthode de calcul standard (${CITY_W} Wc, Performance Ratio 0,85), comptez ${fr(Math.min(...allSud))} à ${fr(Math.max(...allSud))} kWh/an en exposition sud de Lille à Marseille, et ${fr(Math.min(...allEstOuest))} à ${fr(Math.max(...allEstOuest))} kWh/an en exposition est ou ouest. Accroché verticalement au garde-corps, il faut retrancher 15 à 20 % : la position verticale n'est pas optimale pour la captation solaire (mais elle est adaptée à la configuration garde-corps).`,
  },
  {
    question: 'Le CITY peut-il s\'installer sur tous les types de garde-corps ?',
    answer: 'Le CITY est conçu pour les garde-corps standards (rambardes métalliques, balustrades). Il s\'accroche avec un système de fixation breveté Sunology, sans perçage. Sur les garde-corps en verre ou les balcons à muret plein, l\'installation devient plus compliquée et nécessite des accessoires supplémentaires.',
  },
  {
    question: 'Quelle est la durée de vie du CITY ?',
    answer: 'La garantie Sunology est de 25 ans sur le panneau (avec 80% de performance garantie), 12 ans sur le micro-onduleur Enphase IQ7. La durée de vie réelle dépasse largement ces durées : les panneaux silicium modernes fonctionnent 30-35 ans avec une dégradation de 0,5% par an.',
  },
  {
    question: 'Faut-il un permis pour installer un CITY sur un garde-corps ?',
    answer: 'Pas de permis nécessaire pour une installation plug-and-play. En revanche, en copropriété, l\'accord du syndic peut être demandé puisque le panneau est visible depuis l\'extérieur (impact esthétique sur la façade). Demandez d\'abord à votre conseil syndical.',
  },
  {
    question: 'Pourquoi choisir un CITY plutôt qu\'un kit Beem ?',
    answer: `Le CITY est mieux adapté au garde-corps grâce à son système de fixation dédié (les Beem sont conçus pour la pose au sol). Mais à puissance équivalente, Beem est bien moins cher : Beem Kit ${BEEM_KIT.powerWc} W à ${priceLabel('beem-kit-300w')} (en rupture de stock au ${new Date(BEEM_KIT.verifiedOn).toLocaleDateString('fr-FR')}) contre ${CITY_PRICE} pour le CITY à son dernier prix relevé (octobre 2025). Et le CITY n'est plus vendu par Sunology : aujourd'hui, la vraie alternative garde-corps de la marque est le GO (${GO.powerWc} W, ${priceLabel('sunology-go')}).`,
  },
];

const points_forts = [
  {
    titre: 'Conçu spécifiquement pour balcons étroits',
    detail: 'Le CITY est le seul kit du marché pensé d\'origine pour la fixation verticale sur garde-corps. Pas besoin de bricoler un support : le système est livré complet.',
  },
  {
    titre: 'Installation sans perçage',
    detail: 'Le système de fixation Sunology s\'accroche au garde-corps avec des serres-joints en aluminium. Démontable en 15 minutes si vous déménagez. Idéal en location.',
  },
  {
    titre: 'Esthétique soignée',
    detail: 'Cadre noir, panneau monochrome, lignes épurées. Le CITY a été pensé pour s\'intégrer visuellement à un balcon urbain, contrairement aux kits "techniques" plus visibles.',
  },
  {
    titre: 'Micro-onduleur Enphase IQ7',
    detail: 'L\'un des micro-onduleurs les plus fiables du marché. Garantie 12 ans, optimisation panneau par panneau, monitoring via app Enphase.',
  },
  {
    titre: 'SAV français réactif',
    detail: 'Sunology est implanté à Lille avec un SAV français. Délai de réponse moyen 24-48h, échange du matériel défaillant sous garantie en 5-10 jours.',
  },
];

const points_faibles = [
  {
    titre: 'Production inférieure au PLAY',
    detail: 'La position verticale capte moins bien le soleil que la position inclinée à 30-40°. La perte est de 15-20% à puissance équivalente. C\'est le compromis assumé.',
  },
  {
    titre: 'Prix au watt très élevé',
    detail: `Au dernier prix relevé, le CITY coûtait ${CITY_PRICE} pour ${CITY_W} W, soit ${euroPerWc(CITY.priceEur, CITY_W)} €/Wc. Un Sunology PLAY (${PLAY.powerWc} W, ${priceLabel('sunology-play')}) est à ${euroPerWc(PLAY.priceEur, PLAY.powerWc)} €/Wc, un Beem Kit à ${euroPerWc(BEEM_KIT.priceEur, BEEM_KIT.powerWc)} €/Wc (en rupture de stock). Vous payez la spécialisation balcon étroit.`,
  },
  {
    titre: 'Pas de batterie compatible directement',
    detail: 'Contrairement au PLAY MAX (kit + batterie VAULT intégrée), le CITY ne propose pas de stockage natif. Si vous voulez stocker l\'excédent, il faut investir séparément (Sunology VAULT additionnel).',
  },
  {
    titre: 'Puissance limitée',
    detail: `Le kit CITY, c'est ${CITY_W} W au total, répartis sur 2 panneaux. Pour produire davantage, il faut multiplier les kits sur plusieurs sections de garde-corps. Pas pratique sur un petit balcon.`,
  },
];

const cas_acheter = [
  {
    profil: 'Vous habitez en ville avec un balcon étroit (< 2 m²)',
    explication: 'Le CITY est fait pour ça. Aucun autre kit du marché n\'est aussi bien adapté à un balcon urbain compact où la pose au sol est impossible.',
  },
  {
    profil: 'Vous êtes locataire et craignez les traces',
    explication: 'Le système sans perçage est idéal pour la location. Démontage en 15 minutes, aucune trace sur le mur ou le sol. Le propriétaire ne peut rien vous reprocher.',
  },
  {
    profil: 'Votre garde-corps est exposé sud à sud-ouest',
    explication: 'L\'exposition est cruciale pour un panneau vertical. Sud direct ou sud-ouest jusqu\'à 17h-18h : production optimale. Au-delà, la rentabilité chute vite.',
  },
];

const cas_pas_acheter = [
  {
    profil: 'Vous avez un balcon spacieux (> 3 m²)',
    explication: `Avec de la place au sol, le Sunology PLAY est bien plus rentable : ${PLAY.powerWc} W à ${priceLabel('sunology-play')} contre ${CITY_W} W à ${CITY_PRICE} pour le CITY, plus de production grâce à l'inclinaison (ROI ${fr(PLAY_ROI, 1)} ans pour le PLAY contre ${fr(CITY_ROI, 1)} ans pour le CITY, méthodologie Lyon sud).`,
  },
  {
    profil: 'Vous êtes orienté est, ouest ou nord',
    explication: 'En exposition non sud, un panneau vertical est encore moins productif qu\'un panneau incliné. Si vous êtes plein est ou ouest, optez plutôt pour un Beem Kit posé au sol.',
  },
  {
    profil: 'Vous voulez stocker l\'excédent',
    explication: `Si la batterie vous intéresse, le PLAY MAX (${priceLabel('sunology-play-max')}${PLAY_MAX.priceNote ? `, ${PLAY_MAX.priceNote}` : ''}) est mieux pensé : station + VAULT 700 Wh intégrée, au lieu d'ajouter une batterie séparée à un CITY.`,
  },
];

export default function SunologyCityPage() {
  return (
    <>
      <SchemaArticle
        title="Sunology CITY avis : le kit pensé pour les balcons étroits"
        description="Avis complet sur le Sunology CITY en 2026."
        url="https://monbalconsolaire.fr/avis/sunology-city"
        datePublished="2026-04-27"
        dateModified="2026-11-05"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Sunology CITY" brand="Sunology" description={`Kit solaire ${CITY_W} W (2 panneaux) conçu pour fixation sur garde-corps de balcon étroit, sans perçage. Produit arrêté.`} price={CITY.priceEur} ratingValue={7.5} availability="Discontinued" url="https://monbalconsolaire.fr/avis/sunology-city" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology CITY' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology CITY' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Sunology CITY avis : le kit pensé pour les balcons étroits (2026)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le CITY est le seul kit solaire plug-and-play du marché conçu spécifiquement pour s&apos;accrocher au garde-corps d&apos;un balcon urbain. Analyse compl&egrave;te : prix, production estim&eacute;e, installation, et les vrais cas où il vaut le coup.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>27 avril 2026 &middot; <strong>Mis &agrave; jour le 5 novembre 2026</strong></span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg border-2 border-amber bg-amber-pale/40 mb-8" role="note">
            <p className="badge-amber inline-block mb-3">Produit arr&ecirc;t&eacute;</p>
            <h2 className="font-extrabold text-lg mb-2">Produit plus commercialis&eacute; par le fabricant (constat&eacute; le 27/09/2026)</h2>
            <p className="text-sm text-charcoal-light leading-relaxed mb-3">
              Le CITY n&apos;appara&icirc;t plus dans le catalogue de la boutique officielle Sunology&nbsp;: son ancienne fiche produit redirige d&eacute;sormais vers la page d&apos;accueil (statut inchang&eacute; au 29/10/2026). Quelques revendeurs tiers l&apos;affichent encore (autour de 570&ndash;600&nbsp;&euro;), parfois en rupture de stock. Si vous en trouvez un, v&eacute;rifiez le stock r&eacute;el et qui assure la garantie avant de commander.
            </p>
            <p className="text-sm font-semibold mb-2">Alternatives actuelles&nbsp;:</p>
            <ul className="text-sm text-charcoal-light space-y-1.5 mb-4">
              <li>&bull; <Link href="/avis/sunology-go" className="text-green hover:underline font-semibold">Sunology GO</Link> (349&nbsp;&euro;, 270&nbsp;W)&nbsp;: le kit compact de Sunology qui s&apos;accroche lui aussi &agrave; la rambarde (ou se pose au sol), pour une puissance plus faible.</li>
              <li>&bull; <Link href="/avis/sunology-play-2" className="text-green hover:underline font-semibold">Sunology PLAY 2</Link>&nbsp;: plus rentable si vous avez la place de le poser au sol.</li>
              <li>&bull; <Link href="/avis/beem-kit-300w" className="text-green hover:underline font-semibold">Beem Kit 300W</Link>&nbsp;: panneaux modulaires, le plus petit budget du march&eacute;.</li>
            </ul>
            <Link href="/avis/sunology-go" className="btn-secondary text-sm inline-flex">Voir le successeur&nbsp;: Sunology GO &rarr;</Link>
          </div>

          <ProductHero
            brand="Sunology"
            name="CITY"
            power={`${CITY_W} W`}
            price={CITY_PRICE}
            score="7,5/10"
            tagline="Le kit pensé pour s'accrocher au garde-corps des balcons urbains."
            affiliateUrl="/avis/sunology-go"
            affiliateLabel="Voir le successeur : Sunology GO"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Dernier prix public relev&eacute; sur sunology.eu&nbsp;: {CITY_PRICE}, d&apos;apr&egrave;s une <a href={CITY.url} className="text-green hover:underline" target="_blank" rel="noopener">copie d&apos;archive du 11/10/2025</a> (&laquo;&nbsp;Stocks &eacute;puis&eacute;s&nbsp;&raquo;) &middot; Produit toujours retir&eacute; de la boutique Sunology (statut v&eacute;rifi&eacute; le 29/10/2026)</p>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le Sunology CITY ({CITY_PRICE} au dernier prix relevé, {CITY_W}&nbsp;W en 2 panneaux) était <strong>le seul vrai choix</strong> pour un balcon étroit où la pose au sol est impossible. Son système de fixation breveté sans perçage et son design soigné en faisaient un produit unique. <strong>Mais</strong> il était cher au watt ({euroPerWc(CITY.priceEur, CITY_W)}&nbsp;&euro;/Wc) et, à exposition équivalente, un Sunology PLAY ou un Beem Kit posé au sol produit 15-20&nbsp;% de plus à puissance égale. <strong>Depuis son retrait du catalogue Sunology</strong>, nous ne le conseillons plus qu&apos;en déstockage sous ~330&nbsp;&euro; (soit ~1,10&nbsp;&euro;/Wc, le niveau des kits actuels), en vérifiant que la garantie est bien assurée. À son ancien prix ({CITY_PRICE}), un kit encore vendu par son fabricant est un bien meilleur achat.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi un kit spécialisé balcon étroit ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La grande majorité des kits solaires plug-and-play du marché — Sunology PLAY 2, Beem On 460W, Sunethic F500 — sont conçus pour être <strong>posés au sol</strong>, sur un support inclinable avec ballasts de lestage. Cette configuration est optimale techniquement (inclinaison 30-40°, captation maximale du soleil) mais nécessite au moins 2 m² de surface plane disponible.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Or, en zone urbaine dense (Paris, Lyon, Marseille, Lille...), de nombreux balcons font moins de 2 m² au sol et sont entièrement occupés par du mobilier (table, chaises, plantes). Pour ces logements, la seule surface disponible est le <strong>garde-corps lui-même</strong> : la rambarde verticale.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Sunology a créé le CITY exactement pour ce cas. C&apos;est un kit de {CITY_W}&nbsp;W au total (2 panneaux) avec un système de fixation breveté qui s&apos;accroche au garde-corps standard sans aucun perçage. Les panneaux sont positionnés <strong>verticalement</strong>, ce qui réduit légèrement la production (-15% vs un panneau incliné), mais permet de poser le solaire là où c&apos;était jusqu&apos;ici impossible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Puissance</td>
                      <td className="p-3 font-mono">{CITY_W} Wc au total</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Panneaux</td>
                      <td className="p-3 font-mono">2</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Prix au watt</td>
                      <td className="p-3 font-mono">{euroPerWc(CITY.priceEur, CITY_W)} &euro;/Wc</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Type de cellules</td>
                      <td className="p-3">Monocristallin (n-type TOPCon)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Micro-onduleur</td>
                      <td className="p-3">Enphase IQ7+ (intégré)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Connexion</td>
                      <td className="p-3">Prise standard 220V (plug-and-play)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Système de fixation</td>
                      <td className="p-3">Brevet Sunology · serres-joints aluminium</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Garantie panneau</td>
                      <td className="p-3">25 ans (80% de performance)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Garantie micro-onduleur</td>
                      <td className="p-3">12 ans</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Dernier prix relev&eacute;</td>
                      <td className="p-3 font-mono font-bold text-green">{CITY_PRICE} (sunology.eu, octobre 2025)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production estimée par exposition</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La production varie fortement selon l&apos;exposition et la latitude. Voici les estimations pour {CITY_W}&nbsp;Wc avec notre m&eacute;thode standard (productible PVGIS du d&eacute;partement recal&eacute; sur notre r&eacute;f&eacute;rence, Performance Ratio 0,85, coefficients d&apos;orientation du <Link href="/calculateur" className="text-green hover:underline">calculateur</Link>&nbsp;: 1 au sud, 0,95 au sud-est/sud-ouest, 0,8 &agrave; l&apos;est/ouest)&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Ville</th>
                      <th className="text-center p-3">Sud</th>
                      <th className="text-center p-3">Sud-est / Sud-ouest</th>
                      <th className="text-center p-3 rounded-tr-xl">Est / Ouest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CITIES.map((c, i) => (
                      <tr key={c.ville} className={`${i < CITIES.length - 1 ? 'border-b border-border-light ' : ''}${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c.ville}</td>
                        {c.prod.map((kwh, j) => (
                          <td key={j} className="text-center p-3 font-mono">{fr(kwh)} kWh/an</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Ces valeurs correspondent &agrave; une pose inclin&eacute;e de r&eacute;f&eacute;rence. Accroch&eacute;s verticalement au garde-corps, les panneaux du CITY produisent environ <strong>15-20&nbsp;% de moins</strong> qu&apos;un panneau de m&ecirc;me puissance pos&eacute; au sol et inclin&eacute; (type Sunology PLAY). C&apos;est le co&ucirc;t cach&eacute; de la sp&eacute;cialisation balcon &eacute;troit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points forts du CITY</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">✓ {p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 points faibles à connaître</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h3 className="font-bold text-sm mb-1 text-amber-dark">⚠️ {p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas sûr que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalisé selon votre département et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec un kit actuel →
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Votre garde-corps n\'est pas droit ou fait + de 12 cm',
                  'Vous voulez du stockage',
                  'Exposition nord',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul de rentabilité</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons notre cas type : Lyon, balcon étroit exposé sud, kit Sunology CITY au dernier prix public relevé ({CITY_PRICE} sur sunology.eu, octobre 2025).
              </p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production annuelle</strong> : {fr(CITY_PROD)} kWh/an ({CITY_W} Wc, Lyon sud, PR 0,85)</li>
                  <li>&bull; <strong>Autoconsommation</strong> : {Math.round(AUTOCONSO_STANDARD * 100)}%</li>
                  <li>&bull; <strong>kWh économisés</strong> : {fr(CITY_KWH_SAVED)} kWh/an</li>
                  <li>&bull; <strong>Économies la première année</strong> : <strong>{fr(CITY_SAVINGS_Y1)} &euro;</strong></li>
                  <li>&bull; <strong>ROI</strong> : <strong>{fr(CITY_ROI, 1)} ans</strong> (tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL})</li>
                  <li>&bull; <strong>Économies sur 25 ans</strong> : <strong>~{fr(CITY_25Y)} &euro;</strong></li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avec l&apos;inflation tarifaire de {KWH_INFLATION_LABEL}, le ROI est atteint en <strong>{fr(CITY_ROI, 1)} ans</strong>. Sur 25 ans, le gain net est d&apos;environ <strong>{fr(CITY_NET_25Y)} &euro;</strong> ({fr(CITY_25Y)} &euro; d&apos;&eacute;conomies moins {CITY_PRICE}). C&apos;est nettement moins rentable qu&apos;un Sunology PLAY (ROI {fr(PLAY_ROI, 1)} ans)&nbsp;: une production modeste ({CITY_W}&nbsp;Wc) pour un prix de kit complet. Et ce calcul suppose une pose inclin&eacute;e&nbsp;: accroch&eacute; verticalement, comptez 15-20&nbsp;% de production en moins, donc un ROI plus long encore.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui c&apos;est le bon choix</h2>
              <div className="space-y-3">
                {cas_acheter.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">✅ {c.profil}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui ce n&apos;est pas le bon choix</h2>
              <div className="space-y-3">
                {cas_pas_acheter.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h3 className="font-bold text-sm mb-1 text-amber-dark">❌ {c.profil}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Le CITY est-il fait pour votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Calculez votre production exacte selon votre département, exposition et type de fixation. Vous saurez en 30 secondes si le CITY est rentable chez vous.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le kit posé au sol de Sunology, plus rentable mais plus encombrant</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleurs kits solaires 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet des kits du marché : Sunology, Beem, Sunethic, DualSun</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide locataire</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le CITY sans perçage est idéal en location, voici ce qu&apos;il faut savoir</p>
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
                <strong>Méthodologie :</strong> ROI calculé avec tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. Données PVGIS, fiches techniques fabricant Sunology, retours utilisateurs Trustpilot et forums spécialisés (avril 2026). Article rédigé sans rémunération de Sunology.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
