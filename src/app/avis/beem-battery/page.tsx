import Link from 'next/link';
import { BuyName } from '@/components/ui/AffLink';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL, calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, calculateTotalSavings25Years } from '@/lib/pricing';
import { PRODUCTS, SCHEMA_AVAILABILITY, priceLabel } from '@/data/products';

// Tous les chiffres viennent de products.ts (prix) et pricing.ts (calcul) : rien en dur.
const BATTERY = PRODUCTS['beem-battery'];
const BEEM_ON = PRODUCTS['beem-on-500w'];
const fr = (n: number) => n.toLocaleString('fr-FR');
const sim = (price: number, power: number, battery: boolean) => {
  const input = { kitPriceEur: price, kitPowerWc: power, hasBattery: battery };
  return {
    production: calculateProductionKwh(input),
    savings: Math.round(calculateFirstYearSavings(input)),
    roi: calculateROIYears(input),
    total25: calculateTotalSavings25Years(input),
  };
};
const beemOnAlone = sim(BEEM_ON.priceEur, BEEM_ON.powerWc, false);
const beemOnPlusBattery = sim(BEEM_ON.priceEur + BATTERY.priceEur, BEEM_ON.powerWc, true);
const BATTERY_PRICE = priceLabel('beem-battery', { withNote: true });
const BEEM_ON_PRICE = priceLabel('beem-on-500w');
const EUR_PER_KWH_66 = Math.round(BATTERY.priceEur / (BATTERY.batteryKwh ?? 6.6));
const EUR_PER_KWH_10 = Math.round(7390 / 10);
const EUR_PER_KWH_134 = Math.round(9390 / 13.4);
const SURCOUT_X = Math.round((BATTERY.priceEur / BEEM_ON.priceEur) * 10) / 10;
const notRentable = beemOnPlusBattery.roi >= 25;

export const metadata: Metadata = withCanonicalOg({
  title: 'Beem Battery avis 2026 : prix, capacités, pose électricien',
  description: `Avis Beem Battery : 6,6 à 13,4 kWh, ${BATTERY_PRICE}, pose par électricien (pas plug-and-play). Procédure de sauvegarde en cours, ROI calculé.`,
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/beem-battery',
  },
});

const faqData = [
  {
    question: 'Quel est le prix de la Beem Battery ?',
    answer: `${BATTERY_PRICE} pour la version 6,6 kWh (soit ${fr(EUR_PER_KWH_66)} €/kWh), 7 390 € pour la version 10 kWh (${fr(EUR_PER_KWH_10)} €/kWh) et 9 390 € pour la version 13,4 kWh (${fr(EUR_PER_KWH_134)} €/kWh), batterie seule hors pose. Ces chiffres proviennent de médias partenaires (Mac4Ever, Neozone, Tom's Guide) et n'ont pas pu être revérifiés directement sur beemenergy.fr depuis cet environnement (accès réseau bloqué) : demandez un devis à jour avant tout engagement, la vente se fait sur devis et non en un clic comme pour le Beem On.`,
  },
  {
    question: 'La Beem Battery est-elle plug-and-play comme le Beem On ?',
    answer: 'Non, et c’est le point le plus important à comprendre avant d’acheter. Contrairement au Beem On ou au Beem Kit qui se branchent sur une simple prise, la Beem Battery se raccorde en couplage AC au tableau électrique du logement et nécessite l’intervention d’un électricien. Ce n’est pas un produit « sans travaux » : c’est une batterie domestique au sens classique, plus proche d’un Tesla Powerwall que d’une batterie de balcon.',
  },
  {
    question: 'Est-elle compatible avec un kit solaire balcon plug-and-play ?',
    answer: `Techniquement, Beem présente sa batterie comme compatible avec toute installation solaire, y compris d’autres marques. Mais financièrement, l’associer à un petit kit balcon n’a pas de sens : avec notre méthodologie (Lyon, plein sud, PR 0,85, ${KWH_PRICE_LABEL}), un ${BEEM_ON.name} seul (${BEEM_ON_PRICE}) se rentabilise en ${fr(beemOnAlone.roi)} ans. En ajoutant la Beem Battery (${fr(BEEM_ON.priceEur + BATTERY.priceEur)} € au total), l’autoconsommation passe de 85 % à 95 %, mais le surcoût de ${fr(BATTERY.priceEur)} € n’est jamais rentabilisé sur notre horizon de 25 ans : la batterie est largement surdimensionnée pour la production d’un seul panneau de balcon.`,
  },
  {
    question: 'Beem Energy est-elle toujours en procédure de sauvegarde ?',
    answer: 'Oui, à notre connaissance à la date de publication (17 novembre 2026). Le tribunal de commerce de Nantes a ouvert la procédure le 26 novembre 2025, avec une période d’observation d’un an. Cette période a été prolongée de 6 mois à compter du 20 mai 2026 (soit une échéance autour du 20 novembre 2026), et le dossier a été transféré au tribunal de commerce de Saint-Nazaire par un arrêt de la cour d’appel de Rennes du 29 mai 2026. Beem a sécurisé un nouveau financement auprès de ses investisseurs historiques (Alter Equity, 360 Capital, BNP Paribas Développement, Cathay Innovation), montant non communiqué. Aucun plan de sauvegarde ni liquidation n’était publiquement annoncé à la date de cet avis : vérifiez le statut au greffe du tribunal de commerce de Saint-Nazaire ou sur le BODACC avant un engagement de plusieurs milliers d’euros.',
  },
  {
    question: 'Comment acheter la Beem Battery ?',
    answer: 'Via un devis demandé directement sur beemenergy.fr, pas via une commande en ligne directe comme pour le Beem On. Un conseiller évalue votre installation (panneaux existants, tableau électrique, besoin de stockage) avant de confirmer un prix et une date de pose par un électricien partenaire.',
  },
  {
    question: 'Quelle garantie pour la Beem Battery ?',
    answer: 'Les sources concordent sur une garantie équivalente à environ 6 000 cycles à 60 % de capacité résiduelle (SOH), soit une quinzaine d’années d’usage quotidien selon le fabricant. Cette garantie ne vaut que si l’entreprise est toujours en activité pour l’honorer : voir notre point sur la procédure de sauvegarde ci-dessus.',
  },
];

export default function BeemBatteryAvisPage() {
  return (
    <>
      <SchemaArticle title="Beem Battery avis 2026 : prix, capacités, pose électricien" description="Avis indépendant de la batterie domestique Beem Battery : prix, capacités, installation et situation de l'entreprise." url="https://monbalconsolaire.fr/avis/beem-battery" datePublished="2026-11-17" dateModified="2026-11-23" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Beem Battery" brand="Beem Energy" description="Batterie domestique modulaire 6,6 à 13,4 kWh, couplage AC, posée par un électricien partenaire." price={BATTERY.priceEur} availability={SCHEMA_AVAILABILITY[BATTERY.availability]} ratingValue={6} url="https://monbalconsolaire.fr/avis/beem-battery" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem Battery' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem Battery' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Beem Battery avis : la batterie domestique de Beem, vraiment faite pour un balcon&nbsp;?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">La Beem Battery est cit&eacute;e sur des dizaines de pages du site comme option de stockage pour les kits Beem, sans avis d&eacute;di&eacute;. En la regardant de pr&egrave;s&nbsp;: ce n&apos;est pas une batterie de balcon, mais une v&eacute;ritable batterie domestique, avec une installation et un prix qui n&apos;ont rien &agrave; voir avec un Beem On ou un Beem Kit.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>17 novembre 2026 &middot; Mis &agrave; jour le 23 novembre 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Beem Energy"
            name="Battery"
            power="6,6 à 13,4 kWh"
            price={BATTERY_PRICE}
            score="6/10"
            tagline="Batterie domestique modulaire, couplage AC, posée par un électricien. Compatible avec toute installation solaire, pas seulement Beem."
            affiliateUrl="https://beemenergy.fr/"
            affiliateLabel="Voir sur Beem Energy"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix de lancement rapport&eacute;s par des m&eacute;dias partenaires (Mac4Ever, Neozone, Tom&apos;s Guide), novembre 2026 &middot; non revalid&eacute;s par curl ce jour&nbsp;: beemenergy.fr est inaccessible depuis cet environnement (blocage r&eacute;seau). Demandez un devis &agrave; jour avant tout engagement.</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation de la Beem Battery</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Beem Energy, connue pour ses kits plug-and-play <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On</Link> et <Link href="/avis/beem-kit-300w" className="text-green hover:underline">Beem Kit</Link>, vend aussi une batterie domestique bien plus ambitieuse&nbsp;: la Beem Battery. Propos&eacute;e en trois capacit&eacute;s (6,6&nbsp;kWh, 10&nbsp;kWh, 13,4&nbsp;kWh), modulaire par empilement, elle se rapproche davantage d&apos;un Tesla Powerwall que d&apos;une batterie de balcon comme la <Link href="/avis/zendure-solarflow" className="text-green hover:underline">Zendure SolarFlow</Link>.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Diff&eacute;rence structurelle avec le reste du catalogue Beem&nbsp;: elle se raccorde en couplage AC au tableau &eacute;lectrique et n&eacute;cessite un &eacute;lectricien, l&agrave; o&ugrave; le Beem On se branche sur une prise en quelques minutes. Beem la pr&eacute;sente comme compatible avec toute installation solaire existante, pas seulement ses propres panneaux &mdash; un positionnement de batterie domestique g&eacute;n&eacute;raliste, pas d&apos;accessoire de balcon.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '6,6 à 13,4 kWh', l: 'Capacités' },
                  { v: BATTERY_PRICE, l: 'Prix de départ' },
                  { v: '~15 ans', l: 'Durée de vie annoncée' },
                  { v: 'Électricien', l: 'Pose' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-xs text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Capacités', '6,6 kWh / 10 kWh / 13,4 kWh (modules empilables)'],
                      ['Prix (batterie seule)', `5 390 € / 7 390 € / 9 390 €, hors pose`],
                      ['Installation', 'Couplage AC au tableau électrique, par un électricien partenaire Beem'],
                      ['Compatibilité', 'Toute installation solaire (Beem ou autre marque), selon Beem'],
                      ['Garantie annoncée', '≈ 6 000 cycles à 60 % de capacité résiduelle (SOH), ≈ 15 ans d’usage'],
                      ['Vente', 'Sur devis uniquement (pas de commande en ligne directe)'],
                    ].map(([label, value], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3 font-semibold text-charcoal whitespace-nowrap">{label}</td>
                        <td className="py-2 px-3 text-charcoal-light">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Chimie, dimensions et puissance de charge/d&eacute;charge pr&eacute;cises non revérifi&eacute;es directement sur beemenergy.fr dans cet environnement (acc&egrave;s bloqu&eacute;)&nbsp;: nous ne les affichons pas pour &eacute;viter d&apos;avancer un chiffre non confirm&eacute; en premi&egrave;re source.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Une vraie capacité de batterie domestique', d: 'Avec 6,6 à 13,4 kWh, la Beem Battery joue dans la cour des batteries résidentielles sérieuses (type Tesla Powerwall), pas dans celle des petites batteries d’appoint pour balcon.' },
                  { t: `Prix au kWh raisonnable pour la catégorie (${fr(EUR_PER_KWH_134)} à ${fr(EUR_PER_KWH_66)} €/kWh)`, d: 'Une fois la bonne capacité prise en compte (et non les 2,2 kWh longtemps affichés par erreur sur ce site), le prix par kWh stocké est cohérent avec le marché des batteries domestiques AC, bien loin des 2 500 €/kWh qu’on pouvait lire ailleurs.' },
                  { t: 'Compatible avec une installation déjà existante', d: 'Contrairement aux batteries de balcon pensées pour un seul micro-onduleur, Beem annonce une compatibilité large avec toute installation solaire, pas uniquement ses propres kits.' },
                  { t: 'Modularité par capacité', d: 'Trois paliers (6,6 / 10 / 13,4 kWh) permettent d’ajuster le dimensionnement à la consommation réelle du foyer, plutôt qu’un format unique.' },
                  { t: 'Financement institutionnel maintenu malgré la procédure', d: 'Beem a sécurisé un nouveau financement auprès de ses investisseurs historiques (Alter Equity, 360 Capital, BNP Paribas Développement, Cathay Innovation) pendant la procédure de sauvegarde, signe que l’activité n’est pas à l’arrêt.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">{p.t}</h3>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem Battery" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/" label="Demander un devis sur Beem Energy" variant="secondary" position="after-pros" price={BATTERY_PRICE} />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Ce n’est pas un produit « sans travaux »', d: 'Le couplage AC au tableau électrique nécessite un électricien, à l’opposé de l’argument « plug-and-play » qui fait le succès du Beem On et du Beem Kit. Ne confondez pas les deux familles de produits.' },
                  { t: `Totalement surdimensionnée pour un kit de balcon (${SURCOUT_X}x le prix d’un panneau seul)`, d: `Associée à un ${BEEM_ON.name} (${BEEM_ON_PRICE}), la plus petite Beem Battery (${BATTERY_PRICE}) ${notRentable ? 'n’est jamais rentabilisée sur notre horizon de 25 ans' : `allonge le ROI à ${fr(beemOnPlusBattery.roi)} ans`} : un seul panneau ne produit pas assez pour remplir 6,6 kWh de stockage.` },
                  { t: 'Vente sur devis, pas de prix catalogue clair', d: 'Pas de commande en ligne directe comme pour le Beem On : il faut passer par un devis, ce qui complique la comparaison rapide entre offres.' },
                  { t: 'L’entreprise reste sous procédure de sauvegarde', d: 'Ouverte le 26 novembre 2025, la période d’observation a été prolongée jusque vers le 20 novembre 2026 et le dossier transféré au tribunal de commerce de Saint-Nazaire. Aucun plan n’était publié à la date de cet avis : un achat à plusieurs milliers d’euros avec une garantie à 15 ans mérite d’attendre une clarification.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h3 className="font-bold text-sm mb-1">{p.t}</h3>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem Battery" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/" label="V&eacute;rifier l&#39;offre actuelle" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Beem Battery vs les batteries de balcon</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Batterie</th>
                      <th className="text-left py-2 px-3 font-bold">Capacité</th>
                      <th className="text-left py-2 px-3 font-bold">Prix seule</th>
                      <th className="text-left py-2 px-3 font-bold">€/kWh</th>
                      <th className="text-left py-2 px-3 font-bold">Installation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Beem Battery 6,6 kWh', '6,6 kWh', BATTERY_PRICE, `${fr(EUR_PER_KWH_66)} €`, 'Électricien (couplage AC)', true],
                      ['Beem Battery 13,4 kWh', '13,4 kWh', '9 390 €', `${fr(EUR_PER_KWH_134)} €`, 'Électricien (couplage AC)', false],
                      ['Zendure SolarFlow 800 Plus (épuisé)', '1,92 kWh', '539 €', '281 €', 'Plug-and-play', false],
                      ['Zendure SolarFlow 800 Pro 2', '1,92 kWh', '599 €', '312 €', 'Plug-and-play', false],
                      ['Jackery SolarVault 3 Pro', '2,52 kWh', priceLabel('jackery-solarvault-3-pro'), '285 €', 'Plug-and-play', false],
                      ['Sunology VAULT', '0,7 kWh', priceLabel('sunology-vault'), '713 €', 'Plug-and-play', false],
                    ].map(([name, cap, price, eurkwh, install, highlight], i) => (
                      <tr key={i} className={highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3"><BuyName name={name as string} /></td>
                        <td className="py-2 px-3">{cap as string}</td>
                        <td className="py-2 px-3">{price as string}</td>
                        <td className="py-2 px-3">{eurkwh as string}</td>
                        <td className="py-2 px-3">{install as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Comparaison entre deux cat&eacute;gories diff&eacute;rentes&nbsp;: la Beem Battery est une batterie domestique pos&eacute;e par un &eacute;lectricien, les autres sont des batteries de balcon plug-and-play. Prix v&eacute;rifi&eacute;s le 05/11/2026 pour les batteries de balcon (le 23/11/2026 pour le SolarFlow 800 Pro 2&nbsp;; le 800 Plus est &eacute;puis&eacute; chez Zendure &agrave; cette date), le 17/11/2026 (sources tierces) pour la Beem Battery.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Vous avez juste un kit de balcon&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez le vrai ROI de votre configuration, avec ou sans batterie de balcon.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI solaire &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute;&nbsp;: surdimensionn&eacute;e pour un balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec notre m&eacute;thodologie (Lyon, plein sud, PR 0,85, {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}), voici ce que donnerait l&apos;ajout de la plus petite Beem Battery (6,6&nbsp;kWh) &agrave; un <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500&nbsp;Wc</Link>&nbsp;:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: `${fr(beemOnPlusBattery.production)} kWh`, l: 'Production/an (inchangée)' },
                  { v: `${fr(beemOnPlusBattery.savings)} €`, l: 'Économies 1re année' },
                  { v: notRentable ? '> 25 ans' : `${fr(beemOnPlusBattery.roi)} ans`, l: 'ROI estimé' },
                  { v: `${fr(beemOnPlusBattery.total25)} €`, l: 'Gains sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-xs text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">Le Beem On seul se rentabilise en {fr(beemOnAlone.roi)}&nbsp;ans ({fr(beemOnAlone.savings)}&nbsp;&euro; la premi&egrave;re ann&eacute;e). En ajoutant la Beem Battery ({fr(BATTERY.priceEur)}&nbsp;&euro; de plus), l&apos;autoconsommation passe de 85&nbsp;% &agrave; 95&nbsp;%, mais les &eacute;conomies suppl&eacute;mentaires ({fr(beemOnPlusBattery.savings - beemOnAlone.savings)}&nbsp;&euro;/an) sont d&eacute;risoires face au surco&ucirc;t&nbsp;: un seul panneau de 500&nbsp;Wc ne produit tout simplement pas assez pour remplir r&eacute;guli&egrave;rement 6,6&nbsp;kWh de stockage. Notre seuil d&apos;honn&ecirc;tet&eacute; (ROI &gt; 12&nbsp;ans&nbsp;= pas rentable) est largement d&eacute;pass&eacute;&nbsp;: la combinaison n&apos;est pas recommand&eacute;e par notre <Link href="/calculateur" className="text-green hover:underline">calculateur</Link>.</p>
              <p className="text-charcoal-light leading-relaxed">La Beem Battery redevient pertinente dans un sc&eacute;nario tr&egrave;s diff&eacute;rent&nbsp;: une installation en toiture de plusieurs kWc (type <Link href="/comparatif/kit-solaire-balcon-vs-toiture" className="text-green hover:underline">Beem Roof</Link>) qui produit assez pour remplir la batterie chaque jour. Ce n&apos;est pas le cas de figure de ce site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Beem Energy en proc&eacute;dure de sauvegarde&nbsp;: ce qu&apos;il faut savoir</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le 26&nbsp;novembre 2025, le tribunal de commerce de Nantes a plac&eacute; Beem Energy en proc&eacute;dure de sauvegarde, apr&egrave;s une chute de 42&nbsp;% du march&eacute; r&eacute;sidentiel du solaire (&eacute;tude Enedis). La p&eacute;riode d&apos;observation, initialement d&apos;un an, a &eacute;t&eacute; prolong&eacute;e de 6&nbsp;mois &agrave; compter du 20&nbsp;mai 2026 (&eacute;ch&eacute;ance autour du 20&nbsp;novembre 2026), et le dossier a &eacute;t&eacute; transf&eacute;r&eacute; au tribunal de commerce de Saint-Nazaire par un arr&ecirc;t de la cour d&apos;appel de Rennes du 29&nbsp;mai 2026. Beem a par ailleurs s&eacute;curis&eacute; un nouveau financement auprès de ses investisseurs historiques (Alter Equity, 360&nbsp;Capital, BNP Paribas D&eacute;veloppement, Cathay Innovation), montant non communiqu&eacute;.</p>
              <p className="text-charcoal-light leading-relaxed">&Agrave; la date de publication de cet avis (17&nbsp;novembre 2026), aucun plan de sauvegarde ni liquidation n&apos;&eacute;tait publiquement annonc&eacute;. Pour un achat &agrave; plusieurs milliers d&apos;euros reposant sur une garantie de 15&nbsp;ans, v&eacute;rifiez le statut actuel au greffe du tribunal de commerce de Saint-Nazaire ou sur le BODACC avant de signer un devis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous voulez juste stocker le surplus d’un kit de balcon plug-and-play (300-500 W) : la plus petite Beem Battery est largement surdimensionnée et jamais rentable sur cette base',
                  'Vous cherchez une solution « sans travaux » : il faut un électricien pour le couplage AC',
                  'Vous voulez un prix catalogue immédiat : c’est un devis, pas un achat en ligne en un clic',
                  'Le risque entreprise vous préoccupe : la procédure de sauvegarde n’est pas close à ce jour',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La Beem Battery n&apos;est pas un mauvais produit&nbsp;: pour une vraie installation solaire en toiture, avec un prix par kWh coh&eacute;rent avec le march&eacute; des batteries domestiques et une compatibilit&eacute; multi-marques annonc&eacute;e, c&apos;est une option cr&eacute;dible face &agrave; un Tesla Powerwall.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Mais sur ce site, consacr&eacute; aux kits plug-and-play de balcon, elle n&apos;a presque jamais de sens&nbsp;: son installation demande un &eacute;lectricien, sa capacit&eacute; minimale (6,6&nbsp;kWh) d&eacute;passe largement ce qu&apos;un panneau de balcon peut remplir, et son prix n&apos;est pas rentabilis&eacute; par un kit de 300-500&nbsp;W. Ajoutez la proc&eacute;dure de sauvegarde en cours, et c&apos;est un achat &agrave; r&eacute;server &agrave; qui a d&eacute;j&agrave; une installation solaire s&eacute;rieuse en toiture &mdash; apr&egrave;s avoir v&eacute;rifi&eacute; le statut judiciaire de l&apos;entreprise.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">6/10</span></strong></p>
              <a href="https://beemenergy.fr/" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Demander un devis sur Beem Energy &rarr;</a>
            </section>

            <AffiliateCTA productName="Beem Battery" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/" label="Voir l&#39;offre sur Beem Energy" variant="box" position="footer-box" price={BATTERY_PRICE} />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le kit plug-and-play de Beem, sans la batterie</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires avec batterie 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Toutes les solutions de stockage compar&eacute;es</p>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow 800 Plus</h3>
                  <p className="text-xs text-charcoal-light mt-1">Une vraie batterie de balcon, plug-and-play (&eacute;puis&eacute;e chez Zendure au 23/11/2026)</p>
                </Link>
                <Link href="/comparatif/kit-solaire-balcon-vs-toiture" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon vs toiture</h3>
                  <p className="text-xs text-charcoal-light mt-1">Quand une installation en toiture devient pertinente</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI&nbsp;:</strong> ROI calcul&eacute; avec tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85&nbsp;% (95&nbsp;% avec batterie), Performance Ratio 0,85, Lyon sud. Sc&eacute;nario Beem On 500&nbsp;Wc + Beem Battery 6,6&nbsp;kWh&nbsp;: {fr(BEEM_ON.priceEur + BATTERY.priceEur)}&nbsp;&euro;, {fr(beemOnPlusBattery.savings)}&nbsp;&euro; la premi&egrave;re ann&eacute;e, ROI non atteint sur 25&nbsp;ans. Prix Beem Battery&nbsp;: {BATTERY_PRICE} (6,6&nbsp;kWh), sources tierces du 17&nbsp;novembre 2026, non revérifi&eacute;es sur beemenergy.fr (acc&egrave;s bloqu&eacute; depuis cet environnement).</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence&nbsp;:</strong> avis ind&eacute;pendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
