import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';
import { withCanonicalOg } from '@/lib/metadata';
import { zendureUrl } from '@/lib/affiliate';
import { PRODUCTS, priceLabel } from '@/data/products';
import { calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, KWH_PRICE_LABEL, KWH_PRICE_SINCE, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';

// Setups complets : prix vérifiés le 05/11/2026 (src/data/products.ts), calculs via src/lib/pricing.ts
// (Lyon, sud, PR 0,85). Zendure : production plafonnée par la sortie 800 W (2 × 500 W en entrée).
const fr = (n: number) => n.toLocaleString('fr-FR');
const SETUP_DEFS = [
  { label: 'Zendure SolarFlow 800 Plus + 2 × 500 W (pack, sortie 800 W)', price: 719, power: 800, storage: '1,92 kWh', acStd: 0.95, acAbsent: 0.8 },
  { label: 'Sunology PLAY (ex-PLAY 2, 515 W)', price: 599, power: 515, storage: '—', acStd: 0.85, acAbsent: 0.45 },
  { label: 'Sunology PLAY MAX (460 W, sortie 450 W retenue)', price: PRODUCTS['sunology-play-max'].priceEur, power: 450, storage: '0,7 kWh', acStd: 0.95, acAbsent: 0.65 },
  { label: 'Beem On 500 Wc (précommande)', price: 429, power: 500, storage: '—', acStd: 0.85, acAbsent: 0.45 },
  { label: 'Beem Kit 300W (rupture)', price: 199, power: 300, storage: '—', acStd: 0.85, acAbsent: 0.45 },
];
const SETUPS = SETUP_DEFS.map((d) => {
  const base = { kitPriceEur: d.price, kitPowerWc: d.power };
  return {
    ...d,
    production: calculateProductionKwh(base),
    savings: Math.round(calculateFirstYearSavings({ ...base, autoconsoOverride: d.acStd })),
    roiStd: calculateROIYears({ ...base, autoconsoOverride: d.acStd }),
    roiAbsent: calculateROIYears({ ...base, autoconsoOverride: d.acAbsent }),
  };
});
const [ZEN, PLAY, PLAYMAX, BEEM] = SETUPS;

export const metadata: Metadata = withCanonicalOg({
  title: 'Zendure vs Sunology vs Beem 2026 : le match complet',
  description: 'Zendure vs Sunology vs Beem : SolarFlow 800 Plus, PLAY et Beem On 500 Wc comparés (prix/Wc, stockage, app, rentabilité). Lequel choisir en 2026 ?',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/zendure-vs-sunology-vs-beem',
  },
});

const faqData = [
  {
    question: 'Zendure, Sunology ou Beem : lequel est le moins cher ?',
    answer: `Pour un kit complet sans batterie, le Beem On 500 Wc à 429 € (0,86 €/Wc) est le moins cher (prix vérifié le 5 novembre 2026), mais il est en précommande (expédition à partir de décembre 2026). Si on compare des systèmes avec stockage, le Zendure SolarFlow 800 Plus (539 € seul pour 1,92 kWh + onduleur 800 W, prix barré 599 €) est le moins cher au kWh stocké : le Sunology PLAY MAX (panneau 460 W + batterie 700 Wh) coûte ${priceLabel('sunology-play-max')} (1 079 € en promotion jusqu’au 4 décembre 2026), panneau inclus, mais avec 2,7 fois moins de stockage.`,
  },
  {
    question: 'Lequel a le meilleur retour sur investissement ?',
    answer: `Selon notre méthodologie standard (Lyon sud, ${KWH_PRICE_LABEL}, inflation ${KWH_INFLATION_LABEL}, dégradation ${PANEL_DEGRADATION_LABEL}, autoconsommation 85 % sans batterie et 95 % avec), le Zendure SolarFlow 800 Plus vendu en pack avec 2 panneaux bifaciaux de 500 W (719 € sur zendure.fr au 5 novembre 2026, prix promotionnel sans date de fin annoncée) a le meilleur ROI : ~${fr(ZEN.roiStd)} ans (${ZEN.savings} € la première année, production comptée à 800 W, la puissance de sortie maximale). Suivent le Beem On 500 Wc (429 €, en précommande) à ~${fr(BEEM.roiStd)} ans (${BEEM.savings} €/an) et le Sunology PLAY 515 W (ex-PLAY 2, 599 €) à ~${fr(PLAY.roiStd)} ans. Si vous êtes absent toute la journée, l'ordre change : à 45 % d'autoconsommation sans batterie, le Beem On passe à ~${fr(BEEM.roiAbsent)} ans et le PLAY à ~${fr(PLAY.roiAbsent)} ans, alors que le Zendure (80 % d'autoconsommation grâce à sa batterie de 1,92 kWh) reste à ~${fr(ZEN.roiAbsent)} ans.`,
  },
  {
    question: 'Peut-on combiner un Sunology ou Beem avec un Zendure SolarFlow ?',
    answer: 'Non directement. Le Sunology PLAY et le Beem On ont un micro-onduleur intégré : l\'énergie sort déjà en AC. Le SolarFlow 800 Plus accepte des panneaux bruts en DC via connecteurs MC4. Ce sont deux approches incompatibles. Si vous voulez du stockage avec un kit Sunology, il faut le PLAY MAX avec la batterie VAULT propriétaire.',
  },
  {
    question: 'Lequel est le plus simple à installer ?',
    answer: 'Le Sunology PLAY (ex-PLAY 2), sans discussion : châssis pré-assemblé, vous dépliez et branchez en 1 minute. Le Beem On prend ~5 minutes. Le Zendure SolarFlow nécessite des panneaux à part (vendus séparément ou en pack), à brancher aux entrées MPPT, et de configurer l\'app — comptez 30-60 minutes pour la première mise en service.',
  },
  {
    question: 'Lequel fonctionne en cas de coupure de courant ?',
    answer: 'Aucun des trois dans leur configuration standard. Le Sunology PLAY et le Beem On injectent directement sur le réseau : si le réseau tombe, ils s\'arrêtent (protection anti-îlotage). Le Zendure SolarFlow 800 Plus n\'a pas de sortie hors réseau (EPS). L\'EcoFlow PowerStream + batterie DELTA, qui offrait un vrai secours, n\'est plus vendu par EcoFlow France ; son successeur, l\'EcoFlow STREAM Ultra (659 € seul au 5 novembre 2026), dispose d\'une sortie de secours.',
  },
  {
    question: 'Quelle est la meilleure app de suivi ?',
    answer: 'L\'app Zendure est la plus complète : gestion HP/HC automatique, IA Zenky (sur le Pro), compatibilité Shelly/SmartMeter. L\'app Sunology STREAM est simple et efficace (production temps réel via WiFi natif). L\'app Beem nécessite un boîtier Beembox mais offre des fonctions similaires. Pour le pilotage avancé, Zendure gagne largement.',
  },
];

const tableauComparatif = [
  ['Prix du système', '539 €', '599 €', '429 €'],
  ['Prix/Wc', '— (panneaux non inclus)', '1,16 €/Wc', '0,86 €/Wc'],
  ['Disponibilité (05/11/2026)', 'En stock', 'En stock', 'Précommande, expédition à partir de décembre 2026'],
  ['Ce qui est inclus', 'Onduleur 800 W + batterie 1,92 kWh', 'Panneau 515 W + onduleur + châssis', 'Panneau 500 Wc + onduleur + support'],
  ['Panneaux inclus', 'Non (ou pack 2 × 500 W à 719 €, prix promotionnel)', 'Oui (1 panneau 515 W)', 'Oui (1 panneau 500 Wc)'],
  ['Stockage batterie', '1,92 kWh (LiFePO4)', `Non (PLAY MAX 460 W avec VAULT 700 Wh à ${priceLabel('sunology-play-max')})`, 'Non (Beem Battery en option)'],
  ['Puissance sortie AC', '800 W', '500 W', '500 W'],
  ['Entrée solaire max', '1 500 W (2 × 750 W MPPT)', '500 W (1 panneau)', '500 W (1 panneau)'],
  ['Rendement onduleur', '95-98 % (GaN)', '96,7 % (CEC, MX500)', '96,5 %'],
  ['Installation', '30-60 min (panneaux séparés)', '1 minute', '5 minutes'],
  ['App de suivi', 'Zendure (HP/HC, IA Zenky)', 'STREAM (WiFi natif)', 'Beem App (via Beembox)'],
  ['Gestion HP/HC', 'Oui (automatique)', 'Non', 'Non'],
  ['Compatible SmartMeter', 'Oui (Shelly)', 'Non', 'Non'],
  ['Extensible', 'Jusqu\'à 11,5 kWh (+ batteries)', 'Non', 'Non'],
  ['Backup coupure réseau', 'Non', 'Non', 'Non'],
  ['Protection', 'IP65', 'IP68 (panneau)', 'IP68 (panneau)'],
  ['Garantie', '10 ans', '25 ans + 30 ans perf.', '25 ans'],
  ['Cycles batterie', '6 000 (LFP)', '—', '—'],
  ['Poids', '21 kg (sans panneaux)', '24,1 kg (tout compris)', '~24 kg (tout compris)'],
  ['Paiement fractionné', 'Non', 'Non', '4x ou 10x sans frais'],
  ['Aide démarches Enedis', 'Non', 'Non', 'Option Beem ZEN (49 €)'],
];

export default function ZendureVsSunologyVsBeemPage() {
  return (
    <>
      <SchemaArticle
        title="Zendure vs Sunology vs Beem : le match 2026"
        description="Comparatif complet des 3 systèmes solaires plug-and-play les plus populaires en 2026."
        url="https://monbalconsolaire.fr/comparatif/zendure-vs-sunology-vs-beem"
        datePublished="2026-05-09"
        dateModified="2026-11-05"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Zendure vs Sunology vs Beem' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Zendure vs Sunology vs Beem' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Zendure vs Sunology vs Beem : le match 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Trois approches radicalement différentes du solaire de balcon. Le <strong>Zendure SolarFlow 800 Plus</strong> mise sur le stockage à prix cassé. Le <strong>Sunology PLAY 2</strong> sur la simplicité absolue. Le <strong>Beem On 500 Wc</strong> sur le meilleur prix/Wc du march&eacute; (0,86 &euro;/Wc). On compare tout.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>9 mai 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span>
              <span>&middot;</span>
              <span>12 min de lecture</span>
            </div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
            <span className="text-stone text-sm mt-0.5">&#8505;</span>
            <p className="text-xs text-stone leading-relaxed">
              <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
            </p>
          </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict en 10 secondes</h2>
            <div className="space-y-2 text-sm text-charcoal-light leading-relaxed">
              <p><strong>Zendure SolarFlow 800 Plus</strong> — Le meilleur rapport qualit&eacute;-prix SI vous voulez du stockage. Batterie 1,92 kWh + onduleur pour 539 &euro;, ou 719 &euro; en pack avec 2 panneaux de 500 W. Le plus rentable, surtout si vous &ecirc;tes absent en journ&eacute;e (ROI ~{fr(ZEN.roiAbsent)} ans contre ~{fr(BEEM.roiAbsent)} ans pour le Beem On). Mais installation plus longue, et le prix du pack est promotionnel (v&eacute;rifi&eacute; le 5 novembre 2026, sans date de fin annonc&eacute;e).</p>
              <p><strong>Sunology PLAY</strong> (ex-PLAY 2, 515 W, 599 &euro;) — Le plus simple. Branchez et oubliez en 1 minute. Id&eacute;al si vous ne voulez pas de batterie et voulez juste &eacute;conomiser sur votre facture.</p>
              <p><strong>Beem On 500 Wc</strong> — Le meilleur rapport qualit&eacute;-prix sans batterie. 429 &euro; pour 500 Wc (0,86 &euro;/Wc), le plus bas des kits que nous suivons. ROI ~{fr(BEEM.roiStd)} ans (m&eacute;thodologie standard). En pr&eacute;commande&nbsp;: exp&eacute;dition &agrave; partir de d&eacute;cembre 2026. Paiement en 10x, option d&eacute;marches Enedis. Le choix pragmatique.</p>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Trois philosophies, un même objectif</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant de plonger dans les specs, comprenons ce qui distingue fondamentalement ces trois acteurs :
              </p>
              <div className="grid md:grid-cols-3 gap-3 my-6">
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-center gap-2 mb-1"><ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="sm" /><h3 className="font-bold text-sm text-green">Zendure</h3></div>
                  <p className="text-xs text-stone uppercase tracking-wider font-semibold mb-2">Stockage d&apos;abord</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Marque chinoise spécialisée batteries. Vend l&apos;onduleur + batterie, vous achetez les panneaux ailleurs. Approche modulaire, prix agressif sur le stockage.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="flex items-center gap-2 mb-1"><ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY 2" href="/avis/sunology-play-2" size="sm" /><h3 className="font-bold text-sm text-amber-dark">Sunology</h3></div>
                  <p className="text-xs text-stone uppercase tracking-wider font-semibold mb-2">Simplicité d&apos;abord</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Marque française, pionnière du plug-and-play. Kit tout-en-un prêt en 1 minute. Pas de configuration, pas de choix à faire. Le &laquo; Apple &raquo; du solaire de balcon.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-center gap-2 mb-1"><ProductThumb src="/images/produits/beem-on-500-1.webp" alt="Beem On 500 Wc" href="/avis/beem-on-500w" size="sm" /><h3 className="font-bold text-sm text-green">Beem</h3></div>
                  <p className="text-xs text-stone uppercase tracking-wider font-semibold mb-2">Prix/Wc d&apos;abord</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Marque fran&ccedil;aise, gamme &eacute;tendue (300 Wc &agrave; 500 Wc). Le meilleur &euro;/Wc du march&eacute; (0,86 &euro;/Wc). Paiement fractionn&eacute;, option d&eacute;marches Enedis.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Critère</th>
                      <th className="text-center p-2.5 font-semibold"><div className="flex flex-col items-center gap-2"><ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="sm" />Zendure SolarFlow</div></th>
                      <th className="text-center p-2.5 font-semibold"><div className="flex flex-col items-center gap-2"><ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY (ex-PLAY 2)" href="/avis/sunology-play-2" size="sm" />Sunology PLAY (ex-PLAY 2)</div></th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold"><div className="flex flex-col items-center gap-2"><ProductThumb src="/images/produits/beem-on-500-1.webp" alt="Beem On 500 Wc" href="/avis/beem-on-500w" size="sm" />Beem On 500 Wc</div></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableauComparatif.map(([c, z, s, b], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-2.5 font-semibold">{c}</td>
                        <td className="text-center p-2.5">{z}</td>
                        <td className="text-center p-2.5">{s}</td>
                        <td className="text-center p-2.5">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le vrai comparatif : coût total et rentabilité</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le pi&egrave;ge, c&apos;est de comparer les prix affich&eacute;s. Le Zendure seul &agrave; 539 &euro; semble moins cher que le Sunology &agrave; 599 &euro;. Mais le Zendure ne contient pas de panneaux. Comparons des <strong>setups complets</strong> :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-2.5 rounded-tl-xl">Setup complet</th>
                      <th className="text-center p-2.5">Co&ucirc;t total</th>
                      <th className="text-center p-2.5">Stockage</th>
                      <th className="text-center p-2.5">Production/an</th>
                      <th className="text-center p-2.5">Autocons.</th>
                      <th className="text-center p-2.5">&Eacute;co. an 1</th>
                      <th className="text-center p-2.5">ROI standard</th>
                      <th className="text-center p-2.5 rounded-tr-xl">ROI si absent en journ&eacute;e*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SETUPS.map((r, i) => (
                      <tr key={r.label} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/20 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5">{r.label}</td>
                        <td className="text-center p-2.5 font-mono">{fr(r.price)} €</td>
                        <td className="text-center p-2.5 font-mono">{r.storage}</td>
                        <td className="text-center p-2.5 font-mono">{fr(r.production)} kWh</td>
                        <td className="text-center p-2.5 font-mono">{Math.round(r.acStd * 100)} %</td>
                        <td className="text-center p-2.5 font-mono">{r.savings} €</td>
                        <td className="text-center p-2.5 font-mono">{fr(r.roiStd)} ans</td>
                        <td className="text-center p-2.5 font-mono text-stone">{fr(r.roiAbsent)} ans ({Math.round(r.acAbsent * 100)} %)</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone italic">
                <strong>ROI standard</strong> (m&eacute;thodologie du site)&nbsp;: Lyon, exposition sud, 1&nbsp;200&nbsp;kWh/kWc, performance ratio 0,85, tarif EDF base {KWH_PRICE_LABEL} (en vigueur depuis le {KWH_PRICE_SINCE}), inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85&nbsp;% sans batterie et 95&nbsp;% avec batterie.
              </p>
              <p className="text-xs text-stone italic mt-2">
                <strong>*Sc&eacute;nario &laquo;&nbsp;absent en journ&eacute;e&nbsp;&raquo;</strong> (foyer vide de 8h &agrave; 18h, peu de consommation de fond)&nbsp;: autoconsommation 45&nbsp;% sans batterie, 65&nbsp;% avec la batterie 700&nbsp;Wh du PLAY MAX, 80&nbsp;% avec les 1,92&nbsp;kWh du Zendure. Hypoth&egrave;ses indicatives, m&ecirc;mes param&egrave;tres par ailleurs. PLAY MAX&nbsp;: prix courant {priceLabel('sunology-play-max')} sur sunology.eu (1&nbsp;079&nbsp;&euro; en promotion jusqu&apos;au 4 d&eacute;cembre 2026), sortie 450&nbsp;W retenue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que Zendure change dans l&apos;équation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Jusqu&apos;à l&apos;arrivée du SolarFlow 800 Plus, le débat solaire de balcon se résumait à &laquo; Sunology ou Beem &raquo;. Zendure introduit une <strong>troisième voie</strong> qui change fondamentalement le calcul :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Le stockage n&apos;est plus un luxe</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Avant le SolarFlow, ajouter du stockage co&ucirc;tait 500-900 &euro; de plus (VAULT Sunology, DELTA EcoFlow). &Agrave; 539 &euro; pour 1,92 kWh + onduleur, Zendure rend le stockage plus accessible que la plupart des kits sans batterie. C&apos;est un changement de paradigme.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Si vous &ecirc;tes absent en journ&eacute;e, la batterie fait la diff&eacute;rence</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Pour un foyer pr&eacute;sent ou avec une consommation de fond suffisante, un kit de 450-500 Wc sans batterie est autoconsomm&eacute; &agrave; ~85 % (notre hypoth&egrave;se standard)&nbsp;: la batterie n&apos;apporte alors que 10 points&nbsp;: le pack Zendure (4,5 ans) fait &agrave; peine mieux que le Beem On (4,8 ans), pour un budget presque deux fois plus &eacute;lev&eacute;. Si le logement est vide de 8h &agrave; 18h, l&apos;autoconsommation sans batterie peut tomber vers 45 %&nbsp;: le surplus part gratuitement sur le r&eacute;seau. Le SolarFlow stocke ce surplus et le restitue le soir (~80 % d&apos;autoconsommation)&nbsp;: ROI ~5,3 ans, contre ~8,5 ans pour le Beem On et ~12,3 ans pour le PLAY 2 dans ce sc&eacute;nario.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Mais la simplicité a un coût</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le Zendure demande plus d&apos;implication : choisir et acheter les panneaux, les brancher, configurer l&apos;app, comprendre les MPPT. C&apos;est 30-60 min d&apos;installation contre 1-5 min pour Sunology/Beem. Pour certains, cette complexité est rédhibitoire.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="space-y-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <div className="flex items-start gap-4 mb-3">
                    <ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="lg" />
                    <h3 className="font-bold text-base text-green mb-2">Choisissez Zendure SolarFlow si :</h3>
                  </div>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>→ Vous consommez surtout le soir (actifs la journée)</li>
                    <li>→ Vous voulez le meilleur ROI avec stockage (~{fr(ZEN.roiStd)} ans, ~{fr(ZEN.roiAbsent)} ans si absent en journée)</li>
                    <li>→ Vous êtes à l&apos;aise avec un minimum de configuration</li>
                    <li>→ Vous êtes en tarif heures pleines/creuses (optimisation auto)</li>
                    <li>→ Vous prévoyez d&apos;agrandir le système plus tard</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-green/10">
                    <p className="text-xs text-stone">Budget total : 719 € (pack SolarFlow 800 Plus + 2 panneaux bifaciaux 500 W, prix promotionnel zendure.fr au 5 novembre 2026 ; 539 € le SolarFlow seul)</p>
                    <a href={zendureUrl('https://zendure.fr/products/solarflow-800-plus')} target="_blank" rel="sponsored noopener" data-merchant="Zendure" data-product="Zendure SolarFlow 800 Plus" className="btn-affiliate inline-flex mt-2 text-sm">Voir le SolarFlow 800 Plus sur Zendure.fr &rarr;</a>
                    <Link href="/avis/zendure-solarflow" className="text-green font-semibold text-sm mt-2 inline-block">Lire notre avis complet &rarr;</Link>
                  </div>
                </div>

                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <div className="flex items-start gap-4 mb-3">
                    <ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY 2" href="/avis/sunology-play-2" size="lg" />
                    <h3 className="font-bold text-base text-amber-dark mb-2">Choisissez Sunology PLAY si :</h3>
                  </div>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>→ Vous voulez brancher et oublier (zéro configuration)</li>
                    <li>→ Vous êtes souvent à la maison la journée (télétravail, retraite)</li>
                    <li>→ Vous ne voulez pas de batterie ni de complexité</li>
                    <li>→ Vous avez un petit balcon (panneau plus compact)</li>
                    <li>→ La certification CE complète vous rassure</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-amber/10">
                    <p className="text-xs text-stone">Budget : 599 € tout compris</p>
                    <Link href="/avis/sunology-play-2" className="text-green font-semibold text-sm mt-2 inline-block">Lire notre avis complet &rarr;</Link>
                  </div>
                </div>

                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <div className="flex items-start gap-4 mb-3">
                    <ProductThumb src="/images/produits/beem-on-500-1.webp" alt="Beem On 500 Wc" href="/avis/beem-on-500w" size="lg" />
                    <h3 className="font-bold text-base text-green mb-2">Choisissez Beem On 500 Wc si :</h3>
                  </div>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&rarr; Vous voulez le meilleur prix sans batterie (429 &euro;, 0,86 &euro;/Wc)</li>
                    <li>&rarr; Vous voulez payer en 10x sans frais (~43 &euro;/mois)</li>
                    <li>&rarr; Les d&eacute;marches administratives vous stressent (option ZEN)</li>
                    <li>&rarr; Vous cherchez le meilleur prix/Wc (0,86 &euro;/Wc) — ROI ~{fr(BEEM.roiStd)} ans, et pouvez attendre l&apos;exp&eacute;dition (pr&eacute;commande, d&eacute;cembre 2026)</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-green/10">
                    <p className="text-xs text-stone">Budget : 429 &euro; tout compris (le Beem Kit 300W &agrave; 199 &euro; est en rupture)</p>
                    <Link href="/avis/beem-on-500w" className="text-green font-semibold text-sm mt-2 inline-block">Lire notre avis complet &rarr;</Link>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le cas particulier : &laquo; je veux du stockage &raquo;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si le stockage est votre priorité, le match se joue entre 3 options :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-2.5 rounded-tl-xl">Solution</th>
                      <th className="text-center p-2.5">Prix total</th>
                      <th className="text-center p-2.5">Stockage</th>
                      <th className="text-center p-2.5 rounded-tr-xl">€/kWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-green-pale/20 font-semibold">
                      <td className="p-2.5">Zendure SolarFlow 800 Plus</td>
                      <td className="text-center p-2.5 font-mono">539 €</td>
                      <td className="text-center p-2.5 font-mono">1,92 kWh</td>
                      <td className="text-center p-2.5 font-mono text-green">281 €/kWh</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-2.5">Sunology PLAY MAX (VAULT)</td>
                      <td className="text-center p-2.5 font-mono">{priceLabel('sunology-play-max')}</td>
                      <td className="text-center p-2.5 font-mono">0,7 kWh</td>
                      <td className="text-center p-2.5 font-mono">{fr(Math.round(PRODUCTS['sunology-play-max'].priceEur / 0.7))} €/kWh (panneau inclus)</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-2.5">EcoFlow STREAM Ultra (successeur du PowerStream)</td>
                      <td className="text-center p-2.5 font-mono">659 €</td>
                      <td className="text-center p-2.5 font-mono">1,92 kWh</td>
                      <td className="text-center p-2.5 font-mono">343 €/kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Le Zendure divise le coût du stockage par <strong>6 à 7</strong>. Si le stockage vous intéresse, il n&apos;y a pas photo en 2026.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-8">
              <p className="font-semibold text-lg mb-2">Quel système est le plus rentable pour votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur compare les kits pour votre ville et votre orientation exactes.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes économies &rarr;
              </Link>
            </div>

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

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow 800 Plus</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;analyse compl&egrave;te du syst&egrave;me qui casse les prix du stockage</p>
                </Link>
                <Link href="/avis/zendure-solarflow-mix" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow Mix</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le nouveau tout-en-un r&eacute;sidentiel : 8-50&nbsp;kWh, 4&nbsp;kW, &agrave; partir de 1&nbsp;999&nbsp;&euro;</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le leader français du plug-and-play, analysé en détail</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h3>
                  <p className="text-xs text-charcoal-light mt-1">429 &euro;, 0,86 &euro;/Wc : le meilleur rapport qualit&eacute;-prix 2026</p>
                </Link>
                <Link href="/comparatif/application-suivi-production-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Applis de suivi : Beem vs Sunology vs EcoFlow vs Zendure vs Shelly</h3>
                  <p className="text-xs text-charcoal-light mt-1">Quelle appli pour suivre sa production ou piloter sa batterie en heures creuses</p>
                </Link>
                <Link href="/etude/rentabilite-kit-solaire-balcon-departement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Rentabilit&eacute; d&apos;un kit dans les 96 d&eacute;partements</h3>
                  <p className="text-xs text-charcoal-light mt-1">Notre &eacute;tude ouverte, d&eacute;partement par d&eacute;partement (donn&eacute;es PVGIS)</p>
                </Link>
                <Link href="/comparatif/sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem : le duel</h3>
                  <p className="text-xs text-charcoal-light mt-1">Comparaison point par point des deux leaders français</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> données constructeurs, fiches techniques officielles (Zendure, Sunology, Beem), retours utilisateurs forum-photovoltaique.fr et Reddit (juin 2026). Tarif EDF base {KWH_PRICE_LABEL} (en vigueur depuis le {KWH_PRICE_SINCE}). Prix vérifiés le 5 novembre 2026. Production calculée pour Lyon, exposition sud, performance ratio 0,85 ; inflation {KWH_INFLATION_LABEL} ; dégradation {PANEL_DEGRADATION_LABEL} ; autoconsommation 85 % sans batterie, 95 % avec (scénario « absent en journée » : 45 % / 65-80 %).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
