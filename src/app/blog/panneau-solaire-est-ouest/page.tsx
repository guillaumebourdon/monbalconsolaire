import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { withCanonicalOg } from '@/lib/metadata';
import {
  AUTOCONSO_STANDARD,
  KWH_PRICE_LABEL,
  KWH_PRICE_SHORT,
  KWH_INFLATION_LABEL,
  PANEL_DEGRADATION_LABEL,
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateROIYears,
  calculateTotalSavings25Years,
  type CalcInput,
} from '@/lib/pricing';
import { productibleSite } from '@/lib/rentabilite-departements';
import { DEPARTMENTS } from '@/data/departments';
import { PRODUCTS, priceLabel, type ProductId } from '@/data/products';

// Chiffres calculés avec pricing.ts (méthode du site) et les prix de data/products.ts.
const EO = 0.8; // coefficient est/ouest
const fr = (n: number) => n.toLocaleString('fr-FR');
const productible = (code: string) => productibleSite(DEPARTMENTS.find((d) => d.code === code)!.irradiation);
const PLAY = PRODUCTS['sunology-play'];
function sim(id: ProductId, opts: { code?: string; orientation?: number } = {}) {
  const p = PRODUCTS[id];
  const input: CalcInput = {
    kitPriceEur: p.priceEur,
    kitPowerWc: p.powerWc,
    productibleKwhPerKwc: opts.code ? productible(opts.code) : undefined,
    orientationCoef: opts.orientation,
  };
  return {
    prod: calculateProductionKwh(input),
    eco: Math.round(calculateFirstYearSavings(input)),
    roi: calculateROIYears(input),
    total25: calculateTotalSavings25Years(input),
  };
}
const VILLES = [
  { ville: 'Marseille', code: '13' },
  { ville: 'Lyon', code: '69' },
  { ville: 'Paris', code: '75' },
  { ville: 'Lille', code: '59' },
].map((v) => ({ ...v, sud: sim('sunology-play', { code: v.code }), eo: sim('sunology-play', { code: v.code, orientation: EO }) }));
const lyonSud = sim('sunology-play');
const lyonEo = sim('sunology-play', { orientation: EO });
const marseilleEo = VILLES[0].eo;
const eoRois = VILLES.map((v) => v.eo.roi);
const sudRois = VILLES.map((v) => v.sud.roi);
const eoTotals = VILLES.map((v) => v.eo.total25);
const sudTotals = VILLES.map((v) => v.sud.total25);
const round50 = (n: number) => Math.round(n / 50) * 50;
const KITS_EO: { id: ProductId; label: string }[] = [
  { id: 'beem-kit-300w', label: 'Beem Kit 300W (rupture)' },
  { id: 'sunology-go', label: 'Sunology GO (270 W)' },
  { id: 'sunology-play', label: `Sunology PLAY (${PLAY.powerWc} W)` },
  { id: 'beem-on-500w', label: 'Beem On 500 Wc (précommande)' },
  { id: 'sunethic-f500', label: 'Sunethic F500' },
];
const kitsEo = KITS_EO.map((k) => ({ ...k, ...sim(k.id, { orientation: EO }) }));
const beemKitEo = kitsEo[0];
const beemOnEo = kitsEo[3];

export const metadata: Metadata = withCanonicalOg({
  title: 'Panneau solaire balcon est/ouest : production et rentabilit\u00e9 2026',
  description: 'Votre balcon est orient\u00e9 est ou ouest ? Combien produit un kit solaire, quel ROI attendre, et quel kit choisir. Chiffres r\u00e9els et comparaison avec le sud.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/panneau-solaire-est-ouest',
  },
});

const faqData = [
  {
    question: 'Un panneau solaire orient\u00e9 est ou ouest est-il rentable ?',
    answer: `Oui. Vous perdez environ 20 % de production par rapport au sud, mais le kit reste rentable : pour un ${PLAY.name} (${priceLabel('sunology-play')}), ROI de ${fr(Math.min(...eoRois))} à ${fr(Math.max(...eoRois))} ans selon la ville au lieu de ${fr(Math.min(...sudRois))} à ${fr(Math.max(...sudRois))} ans plein sud. Sur 25 ans, vous économisez environ ${fr(round50(Math.min(...eoTotals)))} à ${fr(round50(Math.max(...eoTotals)))} € au lieu de ${fr(round50(Math.min(...sudTotals)))} à ${fr(round50(Math.max(...sudTotals)))} €. C'est moins optimal mais loin d'être inutile.`,
  },
  {
    question: 'Est ou ouest : lequel est le mieux ?',
    answer: 'Ça d\u00e9pend de vos habitudes. Est = production le matin (6h-13h), id\u00e9al si vous \u00eates chez vous le matin ou si votre talon est fort au petit-d\u00e9jeuner. Ouest = production l\'apr\u00e8s-midi (13h-20h), id\u00e9al pour les actifs qui rentrent en fin de journ\u00e9e. En termes de kWh annuels, les deux sont \u00e9quivalents (\u00e0 2-3 % pr\u00e8s).',
  },
  {
    question: 'Combien produit un kit 500 Wc orient\u00e9 est ou ouest ?',
    answer: `En orientation est ou ouest à Lyon (1 200 kWh/kWc), un ${PLAY.name} (${PLAY.powerWc} W) produit environ ${fr(lyonEo.prod)} kWh/an (contre ${fr(lyonSud.prod)} kWh plein sud), soit 20 % de moins. À Marseille, vous êtes à ${fr(marseilleEo.prod)} kWh, presque autant qu'un kit plein sud à Lyon.`,
  },
  {
    question: 'Faut-il une batterie si mon balcon est est/ouest ?',
    answer: 'C\'est moins n\u00e9cessaire qu\'en orientation sud. Un panneau sud produit beaucoup \u00e0 midi quand vous n\'\u00eates pas l\u00e0 — d\'o\u00f9 le besoin de stocker. Un panneau est/ouest produit plus \u00e9tal\u00e9 sur la journ\u00e9e, ce qui colle mieux avec la consommation r\u00e9elle. Le taux d\'autoconsommation naturel est souvent meilleur (50-60 % vs 40-50 % en sud).',
  },
  {
    question: 'Peut-on mettre deux panneaux, un est et un ouest ?',
    answer: 'Oui, si vous avez un balcon traversant ou une terrasse avec deux expositions. C\'est m\u00eame la configuration id\u00e9ale en autoconsommation : production le matin ET le soir, avec un creux \u00e0 midi. Chaque panneau doit avoir son propre micro-onduleur (les kits Sunology PLAY (ex-PLAY 2) et Beem On ont un onduleur par panneau, donc c\'est compatible).',
  },
  {
    question: 'Mon balcon est nord-est ou nord-ouest, c\'est pareil ?',
    answer: 'Non. Nord-est et nord-ouest perdent 35 % de production par rapport au sud (coef 0,65). C\'est la zone grise : un kit de 300 Wc autour de 200 \u20ac (comme le Beem Kit 300W, en rupture au 5 novembre 2026) peut encore \u00eatre rentable (\u00e0 v\u00e9rifier avec le calculateur), mais un kit \u00e0 600 \u20ac+ aura un ROI trop long. V\u00e9rifiez avec notre calculateur.',
  },
];

export default function PanneauSolaireEstOuestPage() {
  return (
    <>
      <SchemaArticle
        title="Panneau solaire balcon est/ouest : production et rentabilit\u00e9"
        description="Guide complet pour les balcons orient\u00e9s est ou ouest."
        url="https://monbalconsolaire.fr/blog/panneau-solaire-est-ouest"
        datePublished="2026-05-22"
        dateModified="2026-11-05"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Panneau solaire est/ouest' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Panneau solaire est/ouest' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Orientation</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Panneau solaire balcon est/ouest : production et rentabilit&eacute; 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre balcon n&apos;est pas orient&eacute; sud ? <strong>Pas de panique.</strong> Un balcon est ou ouest perd 15-20 % de production par rapport au sud, mais reste rentable. Mieux : la production est mieux r&eacute;partie sur la journ&eacute;e, ce qui am&eacute;liore l&apos;autoconsommation. Voici les chiffres r&eacute;els.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>22 mai 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Est ou ouest = 80 % du potentiel sud</strong>. Vous perdez 20 %, pas 50 %.</li>
              <li>&bull; <strong>ROI : {fr(Math.min(...eoRois))}-{fr(Math.max(...eoRois))} ans</strong> au lieu de {fr(Math.min(...sudRois))}-{fr(Math.max(...sudRois))} ans (sud) pour un {PLAY.name}. Toujours rentable sur 25 ans.</li>
              <li>&bull; <strong>Avantage cach&eacute;</strong> : production mieux r&eacute;partie = meilleure autoconsommation naturelle.</li>
              <li>&bull; <strong>Est = matin, Ouest = apr&egrave;s-midi</strong>. Choisissez selon votre pr&eacute;sence.</li>
              <li>&bull; <strong>Nord-est / nord-ouest = 65 %</strong>. Rentabilit&eacute; limit&eacute;e, &agrave; calculer au cas par cas.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production : est/ouest vs sud, les vrais chiffres</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Voici la production annuelle d&apos;un <strong>{PLAY.name} ({PLAY.powerWc}&nbsp;W)</strong> selon l&apos;orientation, pour 4 villes :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Ville</th>
                      <th className="p-3 text-right font-bold">Sud (100 %)</th>
                      <th className="p-3 text-right font-bold">Est/Ouest (80 %)</th>
                      <th className="p-3 text-right font-bold">Perte</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VILLES.map((v) => [v.ville, fr(v.sud.prod), fr(v.eo.prod), `-${v.sud.prod - v.eo.prod} kWh`]).map(([ville, sud, eo, perte], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{ville}</td>
                        <td className="p-3 text-right font-mono text-green">{sud} kWh</td>
                        <td className="p-3 text-right font-mono text-amber-dark">{eo} kWh</td>
                        <td className="p-3 text-right font-mono text-stone">{perte}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Kit {PLAY.powerWc}&nbsp;W, inclinaison 30&deg;, Performance Ratio 0,85. Source : productible PVGIS du d&eacute;partement, recal&eacute; sur la r&eacute;f&eacute;rence du site (Lyon 1 200 kWh/kWc). Coefficient est/ouest = 0,80.
              </p>
              <div className="card border-l-4 border-l-green mt-4">
                <h3 className="font-bold text-sm mb-1 text-green">Le point positif qu&apos;on oublie</h3>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  Un panneau est/ouest &agrave; Marseille ({fr(marseilleEo.prod)} kWh) produit <strong>presque autant qu&apos;un panneau sud &agrave; Lyon</strong> ({fr(lyonSud.prod)} kWh). Dans le sud de la France, un balcon est/ouest reste tr&egrave;s correct.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; : quel ROI en est/ouest ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Calculons pour un <strong>{PLAY.name} (ex-PLAY 2, {PLAY.powerWc}&nbsp;W, {priceLabel('sunology-play')})</strong> &agrave; Lyon, orientation est/ouest :
              </p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production</strong> : {PLAY.powerWc}&nbsp;W &times; 1 200 &times; 0,85 &times; 0,80 = <strong className="font-mono">{fr(lyonEo.prod)} kWh/an</strong></li>
                  <li>&bull; <strong>Autoconsommation</strong> : {Math.round(AUTOCONSO_STANDARD * 100)} % (foyer attentif) = <strong className="font-mono">{fr(Math.round(lyonEo.prod * AUTOCONSO_STANDARD))} kWh valoris&eacute;s</strong></li>
                  <li>&bull; <strong>&Eacute;conomies ann&eacute;e 1</strong> : {fr(Math.round(lyonEo.prod * AUTOCONSO_STANDARD))} &times; {KWH_PRICE_SHORT.replace(' €', '')} = <strong className="font-mono">{lyonEo.eco} &euro;/an</strong></li>
                  <li>&bull; <strong>ROI (inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL})</strong> : <strong className="font-mono text-amber-dark">{fr(lyonEo.roi)} ans</strong></li>
                  <li>&bull; <strong>Sur 25 ans</strong> : <strong className="font-mono text-green">~{fr(round50(lyonEo.total25))} &euro; d&apos;&eacute;conomies cumul&eacute;es</strong></li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Compar&eacute; au m&ecirc;me kit plein sud (ROI {fr(lyonSud.roi)} ans, {fr(round50(lyonSud.total25))} &euro; sur 25 ans), vous perdez ~{fr(Math.round((lyonEo.roi - lyonSud.roi) * 10) / 10)} an de ROI et ~{fr(round50(lyonSud.total25 - lyonEo.total25))} &euro; sur 25 ans. C&apos;est moins optimal, mais c&apos;est <strong>toujours pr&egrave;s de {fr(round50(lyonEo.total25 - PLAY.priceEur))} &euro; de b&eacute;n&eacute;fice net</strong> apr&egrave;s remboursement du kit.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Kit</th>
                      <th className="p-3 text-right font-bold">Prix</th>
                      <th className="p-3 text-right font-bold">&Eacute;co/an (E/O)</th>
                      <th className="p-3 text-right font-bold">ROI (E/O)</th>
                      <th className="p-3 text-right font-bold">25 ans</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kitsEo.map((k) => [k.label, priceLabel(k.id), `${k.eco} \u20ac`, `${fr(k.roi)} ans`, `${fr(k.total25)} \u20ac`]).map(([kit, prix, eco, roi, total], i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/20 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-3">{kit}</td>
                        <td className="p-3 text-right font-mono">{prix}</td>
                        <td className="p-3 text-right font-mono text-green">{eco}</td>
                        <td className="p-3 text-right font-mono">{roi}</td>
                        <td className="p-3 text-right font-mono text-green">{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Lyon, est/ouest (coef 0,80), autoconsommation 85 %, inflation 3,3 %/an, PR 0,85. <Link href="/methodologie" className="text-green hover:underline">M&eacute;thodologie</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Est vs Ouest : lequel choisir ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base text-amber-dark mb-2">Orientation Est</h3>
                  <p className="text-sm text-charcoal-light mb-3">Production concentr&eacute;e le <strong>matin (6h-13h)</strong>.</p>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>{'\u2713'} Id&eacute;al si vous &ecirc;tes chez vous le matin</li>
                    <li>{'\u2713'} Couvre le talon matinal (caf&eacute;, grille-pain, lave-linge)</li>
                    <li>{'\u2713'} Moins d&apos;ombre l&apos;apr&egrave;s-midi (immeuble en face c&ocirc;t&eacute; ouest)</li>
                    <li>{'\u2717'} Production nulle en soir&eacute;e</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base text-green mb-2">Orientation Ouest</h3>
                  <p className="text-sm text-charcoal-light mb-3">Production concentr&eacute;e l&apos;<strong>apr&egrave;s-midi (13h-20h)</strong>.</p>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>{'\u2713'} Id&eacute;al si vous rentrez en fin de journ&eacute;e</li>
                    <li>{'\u2713'} Couvre le pic de conso du soir (cuisine, TV, lumi&egrave;res)</li>
                    <li>{'\u2713'} Production l&apos;&eacute;t&eacute; jusqu&apos;&agrave; 20h-21h</li>
                    <li>{'\u2717'} Production nulle le matin</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                <strong>En termes de kWh annuels, est et ouest sont quasiment identiques</strong> (&agrave; 2-3 % pr&egrave;s). La diff&eacute;rence est dans la <em>r&eacute;partition horaire</em>, pas dans le volume total.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;avantage cach&eacute; de l&apos;est/ouest : l&apos;autoconsommation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un panneau plein sud produit un pic &agrave; midi. Si vous n&apos;&ecirc;tes pas l&agrave;, ce pic part gratuitement sur le r&eacute;seau. Un panneau est/ouest produit plus &eacute;tal&eacute; — moins de pic, plus de production quand vous consommez r&eacute;ellement.
              </p>
              <div className="card-lg bg-amber-pale/20 border-amber/10">
                <h3 className="font-bold text-sm mb-3">Autoconsommation naturelle selon l&apos;orientation</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="font-mono font-bold text-lg text-amber-dark">40-50 %</div>
                    <div className="text-xs text-stone">Sud (pic &agrave; midi)</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-lg text-green">50-60 %</div>
                    <div className="text-xs text-stone">Est ou Ouest</div>
                  </div>
                  <div>
                    <div className="font-mono font-bold text-lg text-green">65-75 %</div>
                    <div className="text-xs text-stone">Est + Ouest (2 panneaux)</div>
                  </div>
                </div>
                <p className="text-xs text-charcoal-light mt-3">Sans batterie, sans adaptation des habitudes. Source : retours utilisateurs + mod&eacute;lisation PVGIS.</p>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                R&eacute;sultat : en est/ouest, vous <strong>valorisez une plus grande part</strong> de votre production sans effort. Le diff&eacute;rentiel de ROI avec le sud se r&eacute;duit quand on int&egrave;gre ce facteur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel kit choisir pour un balcon est/ouest ?</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Meilleur choix sur le papier : Beem Kit 300W (199 &euro;, actuellement en rupture)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    En est/ouest, le ROI est plus long. Le Beem Kit 300W offre le <strong>meilleur ROI</strong> ({fr(beemKitEo.roi)} ans) car son prix bas compense la perte de production, mais il est en rupture chez Beem (v&eacute;rifi&eacute; le 5 novembre 2026). <Link href="/avis/beem-kit-300w" className="text-green hover:underline">Voir l&apos;avis</Link>.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Alternative : Beem On 500 Wc ({priceLabel('beem-on-500w')})</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si vous voulez plus de production : 500 Wc pour {priceLabel('beem-on-500w')} (0,86 &euro;/Wc), ROI de {fr(beemOnEo.roi)} ans en est/ouest. Attention, il est en pr&eacute;commande chez Beem (exp&eacute;dition &agrave; partir de d&eacute;cembre 2026, v&eacute;rifi&eacute; le 5 novembre 2026). <Link href="/avis/beem-on-500w" className="text-green hover:underline">Voir l&apos;avis</Link>.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">&Agrave; &eacute;viter : kits avec batterie</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    En est/ouest, la batterie est moins utile (production d&eacute;j&agrave; &eacute;tal&eacute;e) et son co&ucirc;t allonge un ROI d&eacute;j&agrave; plus long. Le Zendure SolarFlow 800 Plus (d&egrave;s {priceLabel('zendure-solarflow-800-plus')} sans panneaux) ou le PLAY MAX ({priceLabel('sunology-play-max')}) ne sont pas recommand&eacute;s pour cette orientation.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">3 conseils pour optimiser en est/ouest</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">1. D&eacute;calez vos usages vers les heures de production</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Est : lancez le lave-linge/lave-vaisselle le matin. Ouest : lancez-les en fin d&apos;apr&egrave;s-midi. Programmez le chauffe-eau sur les heures de production. Ça augmente votre autoconsommation de 10-20 %.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">2. Inclinez le panneau &agrave; 20-25&deg; (pas 30-35&deg;)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    En est/ouest, le soleil est plus bas sur l&apos;horizon le matin et le soir. Une inclinaison plus faible (20-25&deg;) capte mieux les rayons rasants. Gain : 3-5 % de production en plus par rapport &agrave; 35&deg;. <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green hover:underline">Guide orientation</Link>.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">3. V&eacute;rifiez les ombres le matin ET le soir</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    En est, v&eacute;rifiez que rien ne bloque le soleil entre 8h et 12h. En ouest, v&eacute;rifiez entre 14h et 19h. Un immeuble en face peut cr&eacute;er une ombre &agrave; des heures diff&eacute;rentes selon la saison. <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green hover:underline">Guide ombre</Link>.
                  </p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Calculez la rentabilit&eacute; exacte pour votre balcon est/ouest</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur int&egrave;gre le coefficient 0,80 pour l&apos;orientation est/ouest. R&eacute;sultat personnalis&eacute; en 30 secondes.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes &eacute;conomies &rarr;
              </Link>
            </div>

            <div className="my-8">
              <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Voir le Beem On 500 Wc (précommande)" variant="box" position="article_bottom" price={priceLabel('beem-on-500w')} />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/production-solaire-ete-vs-hiver" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Production été vs hiver : données PVGIS pour 5 villes</h3>
                  <p className="text-xs text-charcoal-light mt-1">Courbes mensuelles compl&egrave;tes et paradoxe de la chaleur estivale</p>
                </Link>
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation pour un panneau solaire de balcon ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;impact r&eacute;el de chaque orientation sur votre production</p>
                </Link>
                <Link href="/blog/panneau-solaire-balcon-nord" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon nord : est-ce rentable ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;analyse honn&ecirc;te pour les expositions les moins favorables</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation : le calculer et l&apos;effacer</h3>
                  <p className="text-xs text-charcoal-light mt-1">Pourquoi l&apos;est/ouest colle mieux au talon qu&apos;on ne le pense</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic si votre production est/ouest semble trop basse</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">{'\u25BC'}</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> donn&eacute;es PVGIS (Commission europ&eacute;enne), coefficient est/ouest 0,80, PR 0,85, tarif EDF {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL} (moyenne 2012-2026), d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}. Prix v&eacute;rifi&eacute;s le 5 novembre 2026. <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie compl&egrave;te</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
