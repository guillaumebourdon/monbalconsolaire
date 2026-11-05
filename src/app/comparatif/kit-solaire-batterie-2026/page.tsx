import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL, calculateFirstYearSavings, calculateROIYears, calculateTotalSavings25Years } from '@/lib/pricing';
import { PRODUCTS, priceLabel } from '@/data/products';

// Scénario « avec / sans batterie » : prix lus dans products.ts, calcul via pricing.ts.
const PLAY = PRODUCTS['sunology-play'];
const MAX = PRODUCTS['sunology-play-max'];
const MAX_OUTPUT_W = 450; // sortie plafonnée du PLAY MAX
const MAX_PRICE = priceLabel('sunology-play-max');
const PLAY_PRICE = priceLabel('sunology-play');
const MAX_PROMO = '1 079 € en promotion jusqu’au 4 décembre 2026';
const EXTRA = MAX.priceEur - PLAY.priceEur;
const fr = (n: number) => n.toLocaleString('fr-FR');
const scen = (price: number, power: number, autoconso: number) => {
  const input = { kitPriceEur: price, kitPowerWc: power, autoconsoOverride: autoconso };
  return { savings: Math.round(calculateFirstYearSavings(input)), roi: calculateROIYears(input), total25: calculateTotalSavings25Years(input) };
};
const absentSans = scen(PLAY.priceEur, PLAY.powerWc, 0.4);
const absentAvec = scen(MAX.priceEur, MAX_OUTPUT_W, 0.7);
const presentSans = scen(PLAY.priceEur, PLAY.powerWc, 0.85);
const presentAvec = scen(MAX.priceEur, MAX_OUTPUT_W, 0.95);

export const metadata: Metadata = withCanonicalOg({
  title: 'Kit solaire avec batterie 2026 : comparatif stockage',
  description: 'Kits solaires plug-and-play avec batterie en 2026 : Sunology PLAY MAX, Zendure, Jackery, Bluetti, EcoFlow STREAM. Prix, capacité, rentabilité.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/kit-solaire-batterie-2026',
  },
});

const faqData = [
  { question: 'Faut-il une batterie avec un kit solaire de balcon ?', answer: `Non, ce n'est pas indispensable. Sans batterie, vous consommez l'électricité en temps réel (talon de consommation : frigo, box, veilles). Une batterie permet de stocker pour le soir mais coûte quelques centaines à 1 400 € supplémentaires (${fr(EXTRA)} € entre le PLAY et le PLAY MAX), ce qui allonge le ROI si vous êtes présent en journée.` },
  { question: 'Quelle est la batterie la moins chère pour un kit solaire ?', answer: `Au kWh stocké, ce sont les batteries de balcon vendues sans panneaux : le Zendure SolarFlow 800 Plus (1,92 kWh) est la moins chère de notre comparatif (voir le tableau). En kit tout compris, le Sunology PLAY MAX (station 460 W + VAULT 700 Wh) coûte ${MAX_PRICE} (${MAX_PROMO}), soit ${fr(EXTRA)} € de plus que le PLAY sans batterie ; la VAULT seule coûtait 499 € (prix relevé en juin 2026).` },
  { question: 'Combien d\'heures d\'autonomie offre une batterie solaire ?', answer: 'La VAULT de Sunology (700 Wh) offre environ 5 heures d\'autonomie pour le talon de consommation (frigo + box + veilles). La STOREY (2,2 kWh) peut couvrir une soirée complète.' },
  { question: 'Une batterie solaire est-elle rentable ?', answer: 'C\'est moins évident qu\'un kit seul. L\'investissement supplémentaire (quelques centaines à 1 400 €) ne se rentabilise que si vous augmentez significativement votre taux d\'autoconsommation. En pratique, le gain supplémentaire est de 30-60€/an, soit un ROI de 8 à 20+ ans sur la batterie seule.' },
];

export default function BatteriePage() {
  return (
    <>
      <SchemaArticle title="Kit solaire avec batterie 2026 : comparatif stockage" description="Comparatif des solutions de stockage solaire plug-and-play en 2026." url="https://monbalconsolaire.fr/comparatif/kit-solaire-batterie-2026" datePublished="2026-03-31" dateModified="2026-11-05" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kits avec batterie' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kits avec batterie' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Kit solaire avec batterie 2026 : comparatif stockage plug-and-play</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Stocker l&apos;énergie solaire pour le soir, c&apos;est tentant. Mais est-ce vraiment rentable ? Comparatif des solutions de stockage Sunology, Beem et EcoFlow.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>31 mars 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span><span>&middot;</span><span>10 min de lecture</span></div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
            <span className="text-stone text-sm mt-0.5">&#x2139;</span>
            <p className="text-xs text-stone leading-relaxed">
              <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
            </p>
          </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Pour la majorité des utilisateurs, <strong>un kit sans batterie est le meilleur investissement</strong>. Le talon de consommation (frigo, box, veilles) absorbe une grande partie de la production en journée. Ajoutez une batterie uniquement si vous êtes souvent absent la journée et que vous consommez principalement le soir.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Avec ou sans batterie : le calcul honnête</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Sans batterie, vous autoconsommez environ 30 à 50% de votre production solaire en temps réel (c&apos;est le talon de consommation : frigo, box internet, appareils en veille, chargeurs). Le reste est injecté gratuitement sur le réseau — vous ne le perdez pas, mais vous ne le valorisez pas non plus.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec une batterie, votre taux d&apos;autoconsommation passe à 60-80%. Le gain est réel mais modeste :</p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-green mb-2">Sans batterie (kit seul)</h3>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Investissement : <span className="font-mono font-medium">{PLAY_PRICE}</span> (PLAY {PLAY.powerWc} W)</p>
                    <p>Autoconsommation : <span className="font-mono font-medium">~40%</span></p>
                    <p>Économies année 1 : <span className="font-mono font-medium text-green">~{absentSans.savings}&nbsp;&euro;</span></p>
                    <p>ROI : <span className="font-mono font-medium">{fr(absentSans.roi)} ans</span></p>
                    <p>Éco. sur 25 ans : <span className="font-mono font-medium text-green">~{fr(absentSans.total25)}&nbsp;&euro;</span></p>
                  </div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h3 className="font-bold text-amber-dark mb-2">Avec batterie (kit + VAULT)</h3>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Investissement : <span className="font-mono font-medium">{MAX_PRICE}</span> (PLAY MAX 460 W)</p>
                    <p>Autoconsommation : <span className="font-mono font-medium">~70%</span></p>
                    <p>Économies année 1 : <span className="font-mono font-medium text-amber-dark">~{absentAvec.savings}&nbsp;&euro;</span></p>
                    <p>ROI : <span className="font-mono font-medium">{fr(absentAvec.roi)} ans</span></p>
                    <p>Éco. sur 25 ans : <span className="font-mono font-medium text-amber-dark">~{fr(absentAvec.total25)}&nbsp;&euro;</span></p>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Dans ce sc&eacute;nario (foyer peu pr&eacute;sent en journ&eacute;e, 1 200 kWh/kWc, PR 0,85, {KWH_PRICE_LABEL}, +{KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL}), la batterie ajoute ~{absentAvec.savings - absentSans.savings}&nbsp;&euro; d&apos;&eacute;conomies la premi&egrave;re ann&eacute;e pour un surco&ucirc;t de {fr(EXTRA)}&nbsp;&euro;&nbsp;: le ROI passe de <span className="data-highlight">{fr(absentSans.roi)} &agrave; {fr(absentAvec.roi)} ans</span>. Si vous &ecirc;tes pr&eacute;sent en journ&eacute;e (85&nbsp;% d&apos;autoconsommation sans batterie, 95&nbsp;% avec), l&apos;&eacute;cart est net&nbsp;: {fr(presentSans.roi)} ans pour le PLAY seul contre {fr(presentAvec.roi)} ans pour le PLAY MAX. Prix v&eacute;rifi&eacute;s le 5 novembre 2026 sur sunology.eu (PLAY MAX {MAX_PRICE}, {MAX_PROMO}).</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparatif des solutions de stockage</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Solution</th>
                    <th className="text-center p-3">Capacité</th>
                    <th className="text-center p-3">Prix</th>
                    <th className="text-center p-3">Prix/kWh</th>
                    <th className="text-center p-3">Autonomie*</th>
                    <th className="text-center p-3 rounded-tr-xl">Type</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Sunology VAULT', '700 Wh', '499€*****', '713€/kWh', '~5h', 'Nomade + plug-and-play', false],
                      ['Sunology STOREY', '2,2 kWh', '1 390€*****', '632€/kWh', '~15h', 'Fixe plug-and-play', false],
                      ['Beem Battery', '2,2 kWh', '~5 500€**', '2 500€/kWh', '~15h', 'Fixe plug-and-play', false],
                      ['Zendure SolarFlow 800 Plus', '1,92 kWh', '539\u20ac***', '281\u20ac/kWh', '~13h', 'Onduleur + batterie (sans panneaux)', true],
                      ['Jackery SolarVault 3 Pro', '2,52 kWh', '719\u20ac***', '285\u20ac/kWh', '~17h', 'Onduleur + batterie (sans panneaux)', false],
                      ['EcoFlow STREAM Ultra', '1,92 kWh', '659\u20ac***', '343\u20ac/kWh', '~13h', 'Onduleur + batterie (sans panneaux)', false],
                      ['Bluetti Balco 260', '2,56 kWh', '789\u20ac***', '308\u20ac/kWh', '~17h', 'Tout-en-un (sans panneaux)', false],
                    ].map(([n, c, p, r, a, t, best], i) => {
                      const thumbMap: Record<string, { src: string; href: string }> = {
                        'Zendure SolarFlow 800 Plus': { src: '/images/produits/zendure-solarflow-front.webp', href: '/avis/zendure-solarflow' },
                        'Jackery SolarVault 3 Pro': { src: '/images/produits/jackery-solarvault-3-pro-1.webp', href: '/avis/jackery-solarvault-3-pro' },
                        'Bluetti Balco 260': { src: '/images/produits/bluetti-balco-260-front.webp', href: '/avis/bluetti-balco-260' },
                      };
                      const thumb = thumbMap[n as string];
                      return (
                      <tr key={i} className={`border-b border-border-light ${best ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold"><div className="flex items-center gap-3">{thumb && <ProductThumb src={thumb.src} alt={n as string} href={thumb.href} size="sm" />}<span>{n} {best && <span className="badge-green ml-2 text-xs">Meilleur prix/kWh</span>}</span></div></td>
                        <td className="text-center p-3 font-mono text-sm">{c}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{p}</td>
                        <td className="text-center p-3 font-mono text-sm">{r}</td>
                        <td className="text-center p-3">{a}</td>
                        <td className="text-center p-3 text-xs">{t}</td>
                      </tr>
                    );})}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">* Autonomie estim&eacute;e pour un talon de consommation de 140W. ** Prix du bundle kit + batterie Beem (6 190&euro; - 690&euro; pour le kit seul estim&eacute;), non rev&eacute;rifi&eacute;. *** Prix du bo&icirc;tier seul (panneaux non inclus) relev&eacute; sur le site du fabricant le 5 novembre 2026, souvent promotionnel (prix barr&eacute;s&nbsp;: Zendure 599&nbsp;&euro;, Jackery 1&nbsp;139&nbsp;&euro;, EcoFlow 1&nbsp;299&nbsp;&euro;, Bluetti 1&nbsp;049&nbsp;&euro;). ***** Prix Sunology relev&eacute;s en juin 2026, non rev&eacute;rifi&eacute;s.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre sélection détaillée</h2>
              <div className="space-y-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4"><ProductThumb src="/images/produits/sunology-play-max-1.webp" alt="Sunology PLAY MAX" href="/avis/sunology-play-max" size="lg" /><div><div className="badge-green mb-2">Kit + batterie tout compris</div><h3 className="font-bold text-xl">Sunology PLAY MAX</h3><p className="text-sm text-stone">Station 460 W + batterie VAULT 700 Wh · Plug-and-play</p></div></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-green">{MAX_PRICE}</div><div className="text-xs text-stone">{MAX_PROMO}</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le PLAY MAX est un kit + batterie tout compris&nbsp;: une station Sunology de 460 W avec la batterie VAULT (700 Wh) int&eacute;gr&eacute;e pour {MAX_PRICE} (v&eacute;rifi&eacute; le 5 novembre 2026), soit {fr(EXTRA)}&nbsp;&euro; de plus que le PLAY sans batterie. Au kWh stock&eacute;, c&apos;est cher&nbsp;: les batteries de balcon sans panneaux du tableau ci-dessus offrent 3 &agrave; 4 fois plus de capacit&eacute; pour un prix proche. La VAULT est amovible (3,7 kg, IP65, utilisable en camping/pique-nique) et offre ~5 heures d&apos;autonomie sur le talon de consommation.</p>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points forts</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Tout compris : panneau, onduleur et batterie dans un seul colis</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Batterie amovible : utilisable en extérieur (4 ports de connexion)</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Installation identique au PLAY (batterie intégrée à la station)</li>
                  </ul>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points faibles</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> 700 Wh = seulement ~5h d&apos;autonomie (ne couvre pas une nuit complète)</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Onduleur plafonné à 450 W et cellules Li-ion (pas LFP)</li>
                  </ul>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-amber mb-2">Plus de capacité</div><h3 className="font-bold text-xl">Sunology STOREY</h3><p className="text-sm text-stone">Batterie fixe 2,2 kWh · Compatible PLAY2</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">1 390 €</div><div className="text-xs text-stone">(batterie seule)</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">La STOREY est la solution fixe de Sunology : 2,2 kWh de capacité, branchée sur une prise, elle stocke le surplus solaire pour une utilisation le soir et la nuit. C&apos;est 3x la capacité de la VAULT, avec une gestion plus intelligente de la charge/décharge.</p>
                  <p className="text-sm text-charcoal-light mt-2"><strong>Le calcul :</strong> kit PLAY 515&nbsp;W (ex-PLAY&nbsp;2, 599€) + STOREY (1 390€) = 1 989€ au total. Avec notre m&eacute;thodologie (525&nbsp;kWh/an, 95&nbsp;% d&apos;autoconsommation, Lyon sud), ~100€ d&apos;économies la premi&egrave;re ann&eacute;e&nbsp;: ROI d&apos;environ 16 ans. C&apos;est rentable sur 25 ans (~3 540€ cumul&eacute;s) mais loin d&apos;un kit seul.</p>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4"><ProductThumb src="/images/produits/ecoflow-powerstream-2.webp" alt="EcoFlow PowerStream" href="/avis/ecoflow-powerstream" size="lg" /><div><div className="badge-amber mb-2">Arr&ecirc;t&eacute;</div><h3 className="font-bold text-xl">EcoFlow PowerStream</h3><p className="text-sm text-stone">Syst&egrave;me modulaire batterie + micro-onduleur</p></div></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-stone">Arr&ecirc;t&eacute;</div><div className="text-xs text-stone">successeur&nbsp;: STREAM Ultra, 659&nbsp;&euro; seul</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le PowerStream d&apos;EcoFlow &eacute;tait une approche diff&eacute;rente : un micro-onduleur intelligent qui g&egrave;re la charge/d&eacute;charge automatiquement selon votre consommation en temps r&eacute;el, mais compatible uniquement avec une batterie portable EcoFlow achet&eacute;e &agrave; part (DELTA, RIVER). <strong>Mise &agrave; jour 03/11/2026&nbsp;:</strong> le PowerStream n&apos;est plus vendu par EcoFlow France, remplac&eacute; par le <Link href="/avis/ecoflow-stream-ultra" className="text-green hover:underline font-semibold">STREAM Ultra</Link>, qui int&egrave;gre directement sa batterie (1,92&nbsp;kWh, extensible &agrave; 11,52&nbsp;kWh) &mdash; voir notre <Link href="/avis/ecoflow-powerstream" className="text-green hover:underline">avis PowerStream</Link>.</p>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4"><ProductThumb src="/images/produits/bluetti-balco-260-front.webp" alt="Bluetti Balco 260" href="/avis/bluetti-balco-260" size="lg" /><div><div className="badge-amber mb-2">Tout-en-un</div><h3 className="font-bold text-xl">Bluetti Balco 260</h3><p className="text-sm text-stone">Onduleur SiC + batterie LFP 2,56 kWh int&eacute;gr&eacute;s &middot; IP65</p></div></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">789 &euro;</div><div className="text-xs text-stone">(sans panneaux, prix promo au 05/11/2026)</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le Balco 260 de Bluetti int&egrave;gre onduleur, batterie et 4 MPPT dans un seul bo&icirc;tier IP65. La batterie de 2,56&nbsp;kWh est extensible jusqu&apos;&agrave; 15&nbsp;kWh. &Agrave; 789&nbsp;&euro; seul (prix promotionnel constat&eacute; le 5 novembre 2026, barr&eacute; 1&nbsp;049&nbsp;&euro;), soit 308&nbsp;&euro;/kWh, il est proche des moins chers au kWh (Zendure SolarFlow 800 Plus&nbsp;: 281&nbsp;&euro;/kWh), mais les panneaux ne sont pas inclus&nbsp;: 1&nbsp;079&nbsp;&euro; en pack avec 2 panneaux de 450&nbsp;W. <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Lire notre avis complet &rarr;</Link></p>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points forts</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Bon prix/kWh (308&nbsp;&euro;/kWh au 5 novembre 2026)</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Secours &eacute;lectrique 1&nbsp;200&nbsp;W en cas de coupure</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Extensible jusqu&apos;&agrave; 15&nbsp;kWh</li>
                  </ul>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points faibles</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Panneaux non inclus (1&nbsp;079&nbsp;&euro; en pack 2 &times; 450&nbsp;W)</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> App Bluetti historiquement faible (refonte en cours)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict : avec ou sans batterie ?</h2>
              <div className="space-y-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-green mb-1">Pour 80% des gens → Kit seul (sans batterie)</h3>
                  <p className="text-sm text-charcoal-light">Le meilleur ROI, de loin. Commencez par un <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">kit Sunology PLAY (599€) ou Beem On 500 Wc (429€, en précommande)</Link>. Vous pouvez toujours ajouter une batterie plus tard si le besoin se fait sentir.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h3 className="font-bold text-amber-dark mb-1">Pour les absents la journée → batterie de balcon ou PLAY MAX ({MAX_PRICE})</h3>
                  <p className="text-sm text-charcoal-light">Si vous travaillez en journée et consommez principalement le soir, une batterie stocke le surplus. Le PLAY MAX est la solution la plus simple (tout compris), mais sa VAULT de 700&nbsp;Wh co&ucirc;te cher au kWh&nbsp;: comparez avec les batteries de balcon du tableau, plus capacitaires.</p>
                </div>
                <div className="card-lg">
                  <h3 className="font-bold mb-1">Pour les enthousiastes → STOREY (1 989€ avec kit)</h3>
                  <p className="text-sm text-charcoal-light">Si maximiser l&apos;autoconsommation est votre priorité et que le budget n&apos;est pas un problème, la STOREY offre la meilleure capacité de stockage du marché plug-and-play.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Calculez d&apos;abord ce qu&apos;un kit seul peut vous faire économiser</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes économies →</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
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
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/guide/batterie-solaire-balcon-guide" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide : comment choisir la bonne capacité de batterie</h3>
                  <p className="text-xs text-charcoal-light mt-1">Seuils 700 Wh, 2 kWh, 5 kWh — le calcul ROI honnête selon votre profil</p>
                </Link>
                <Link href="/avis/sunology-play-max" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY MAX</h3>
                  <p className="text-xs text-charcoal-light mt-1">Kit + batterie intégrée</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation expliquée</h3>
                  <p className="text-xs text-charcoal-light mt-1">Talon, surplus, injection</p>
                </Link>
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Bluetti Balco 260</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le tout-en-un onduleur + batterie 2,56&nbsp;kWh</p>
                </Link>
                <Link href="/avis/jackery-solarvault-3-pro" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Jackery SolarVault 3 Pro</h3>
                  <p className="text-xs text-charcoal-light mt-1">Stockage LFP 2,52&nbsp;kWh &agrave; 719&nbsp;&euro; seul (prix promo au 05/11/2026)</p>
                </Link>
                <Link href="/avis/zendure-solarflow-mix" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow Mix</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le tout-en-un r&eacute;sidentiel 8-50&nbsp;kWh, 4&nbsp;kW, IA Zenki</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
                <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleure batterie solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Zendure vs Bluetti Balco vs EcoFlow &mdash; tableau prix/kWh et verdict par profil</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> comparatif indépendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
