import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';
import { PRODUCTS, priceLabel } from '@/data/products';
import { zendureUrl } from '@/lib/affiliate';

const PAGE_TITLE = 'Kit solaire Leroy Merlin ou IKEA : que choisir en 2026 ?';
const PAGE_DESCRIPTION =
  'IKEA ne vend pas de kit solaire balcon en France. Leroy Merlin, oui : une marketplace à comparer aux marques spécialisées. Prix, ROI, SAV.';
const PAGE_URL = 'https://monbalconsolaire.fr/comparatif/kit-solaire-leroy-merlin-ikea-vs-specialiste';

export const metadata: Metadata = withCanonicalOg({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
});

const BEEM_ON = PRODUCTS['beem-on-500w'];
const PLAY = PRODUCTS['sunology-play'];
const SUNETHIC = PRODUCTS['sunethic-f500'];
const ZENDURE = PRODUCTS['zendure-solarflow-800-pro-2'];

const faqData = [
  {
    question: 'IKEA vend-elle un kit solaire de balcon en France ?',
    answer: 'Non. Le kit IKEA × EcoFlow (« STREAM Komplettset ») est vendu en Allemagne via Svea Solar, pas sur ikea.com/fr. Au 23 novembre 2026, aucune date de lancement en France n’a été annoncée. Pour le détail (prix allemands, contenu des deux sets), voir notre avis dédié.',
  },
  {
    question: 'Leroy Merlin vend-il vraiment des kits solaires de balcon ?',
    answer: 'Leroy Merlin référence des kits « plug and play » dont la fiche mentionne le balcon comme option de pose (au même titre que le sol ou le mur), mais ce n’est pas un fabricant : c’est une marketplace qui réunit des marques connues (Beem, Sunethic) et des marques sans notoriété indépendante (Katezer). Le kit n’est pas pensé balcon en priorité comme le sont le Sunology GO ou le Beem On.',
  },
  {
    question: 'Un kit solaire Leroy Merlin est-il moins cher qu’un kit de marque spécialisée ?',
    answer: 'Pas forcément. Le kit Katezer 420 W / Beem Serenity 420 W est relevé à 399 € sur une fiche Leroy Merlin, mais une autre fiche du même Beem 420 W affiche 549 € : deux vendeurs marketplace, deux prix pour un produit proche. À titre de comparaison, le Beem On 500 Wc coûte 429 € en achat direct chez Beem Energy, pour une puissance supérieure. Il faut comparer le prix au Wc fiche par fiche, pas se fier à un prix « Leroy Merlin » unique.',
  },
  {
    question: 'Quelle garantie sur un kit solaire acheté chez Leroy Merlin ?',
    answer: 'La garantie légale de conformité de 2 ans s’applique à tout achat chez Leroy Merlin, comme chez n’importe quel vendeur en France. Les fiches consultées indiquent en plus une garantie fabricant sur le panneau (25 ans pour le Katezer, 15 ans pour un kit Sunethic 410 W vendu sur la marketplace) : c’est comparable aux marques spécialisées. La vraie différence, c’est l’interlocuteur en cas de problème — le fabricant directement (Beem, Sunology, Sunethic) ou le circuit retour Leroy Merlin, potentiellement plus lent pour un litige technique.',
  },
  {
    question: 'Beem et Sunethic sont-elles vendues à la fois en direct et chez Leroy Merlin ?',
    answer: 'Oui. Sunethic, marque que nous analysons en direct sur sunethic.fr (le F500, 500 W), propose aussi un kit 410 W via la marketplace Leroy Merlin. Beem, elle, a des kits plus anciens (nommés « Serenity ») encore référencés chez des revendeurs alors qu’ils ne figurent plus forcément dans le catalogue actuel de beemenergy.fr. Acheter la même marque via Leroy Merlin ne garantit donc pas le même modèle ni le même prix qu’en achat direct.',
  },
  {
    question: 'Faut-il acheter en direct chez le fabricant ou chez Leroy Merlin ?',
    answer: 'Pour un balcon spécifiquement, l’achat direct chez une marque spécialisée (Sunology, Beem Energy, Sunethic, Zendure) reste le choix par défaut : fixation pensée pour un garde-corps ou un rebord, application de suivi dédiée, SAV identifié. Leroy Merlin peut avoir un intérêt si vous trouvez un prix confirmé et une marque reconnue (Beem, Sunethic) nettement moins chère qu’en direct — ce qui n’était pas le cas sur les fiches consultées le 27 novembre 2026.',
  },
];

export default function LeroyMerlinIkeaPage() {
  return (
    <>
      <SchemaArticle
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        datePublished="2026-11-27"
        dateModified="2026-11-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Leroy Merlin, IKEA ou marque spécialisée' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Leroy Merlin, IKEA ou marque spécialisée' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire Leroy Merlin, IKEA ou marque sp&eacute;cialis&eacute;e&nbsp;: lequel choisir&nbsp;?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              &laquo;&nbsp;Kit solaire balcon Leroy Merlin&nbsp;&raquo; est une recherche fr&eacute;quente, souvent accol&eacute;e &agrave; IKEA. R&eacute;ponse courte&nbsp;: IKEA n&apos;en vend pas en France, et Leroy Merlin n&apos;est pas un fabricant mais une marketplace qui m&eacute;lange marques connues et marques sans historique. On d&eacute;taille ce que &ccedil;a change pour le prix, la garantie et le SAV, face aux marques sp&eacute;cialis&eacute;es du balcon.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>Publi&eacute; le 27 novembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>

            <div className="card bg-cream/50 border-border-light mt-6 py-3 px-5 flex items-start gap-3">
              <span className="text-stone text-sm mt-0.5">&#x2139;</span>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence&nbsp;:</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance et la disponibilit&eacute; r&eacute;elle. <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</Link>
              </p>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict rapide</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              <strong>IKEA</strong> : pas d&apos;offre en France au 27 novembre 2026, donc pas une option aujourd&apos;hui. <strong>Leroy Merlin</strong> : une marketplace, pas un fabricant &mdash; on y trouve des kits de marques connues (Beem, Sunethic) &agrave; des prix qui varient d&apos;une fiche &agrave; l&apos;autre, et des marques sans avis ind&eacute;pendant solide (Katezer). Pour un balcon sp&eacute;cifiquement, une <strong>marque sp&eacute;cialis&eacute;e</strong> achet&eacute;e en direct (Sunology, Beem Energy, Sunethic, Zendure) reste le choix par d&eacute;faut&nbsp;: fixation pens&eacute;e pour un garde-corps, application d&eacute;di&eacute;e, SAV identifi&eacute;.
            </p>
          </div>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">IKEA ne vend pas de kit solaire balcon en France</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                En Allemagne, IKEA propose un kit solaire de balcon avec EcoFlow (&laquo;&nbsp;STREAM Komplettset&nbsp;&raquo;), vendu par Svea Solar. En France, <strong>ikea.com/fr ne le propose pas</strong>, et aucune date de lancement n&apos;a &eacute;t&eacute; communiqu&eacute;e (constat&eacute; le 23 novembre 2026). La recherche &laquo;&nbsp;kit solaire balcon IKEA&nbsp;&raquo; m&egrave;ne donc syst&eacute;matiquement vers un produit qu&apos;on ne peut pas acheter ici.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Notre <Link href="/avis/ikea-solstrale-balcon" className="text-green hover:underline">avis d&eacute;taill&eacute; du kit IKEA STREAM</Link> couvre les prix allemands (TVA 0&nbsp;% sur le photovolta&iuml;que jusqu&apos;au 31&nbsp;d&eacute;cembre 2026, non transposable en France) et le contenu des deux versions (S et L avec batterie).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Leroy Merlin&nbsp;: une marketplace, pas un fabricant</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Leroy Merlin r&eacute;f&eacute;rence plusieurs dizaines de &laquo;&nbsp;kits solaires plug and play&nbsp;&raquo;, vendus par des marques et des vendeurs marketplace diff&eacute;rents, pas fabriqu&eacute;s par Leroy Merlin lui-m&ecirc;me. Trois exemples relev&eacute;s le 27&nbsp;novembre&nbsp;2026&nbsp;:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">Katezer 420&nbsp;W bifacial</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Panneau bifacial, micro-onduleur 600&nbsp;W, fixation balcon/mur/sol incluse, garantie panneau 25&nbsp;ans. Marque sans historique ind&eacute;pendant sur le solaire de balcon. Prix observ&eacute;&nbsp;: 399&nbsp;&euro; (test Que Choisir, achat en promotion).</p>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">&laquo;&nbsp;Beem Serenity&nbsp;&raquo; 420&nbsp;W</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un kit Beem au nom absent du catalogue actuel de beemenergy.fr (qui vend le Beem On 500&nbsp;Wc). Deux fiches Leroy Merlin pour un produit proche affichent 399&nbsp;&euro; et 549&nbsp;&euro; selon le vendeur.</p>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">Sunethic 410&nbsp;W</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">M&ecirc;me marque que le Sunethic F500 analys&eacute; sur ce site, mais un autre mod&egrave;le (410&nbsp;W, garantie 15&nbsp;ans incluant la conformit&eacute; l&eacute;gale). Prix non confirm&eacute; sur la fiche consult&eacute;e.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Deux enseignements&nbsp;: d&apos;abord, le prix &laquo;&nbsp;chez Leroy Merlin&nbsp;&raquo; n&apos;existe pas vraiment &mdash; il faut comparer fiche par fiche, m&ecirc;me pour un produit a priori identique. Ensuite, acheter une marque que vous connaissez (Beem, Sunethic) via la marketplace ne garantit pas le mod&egrave;le ni le prix que vous trouveriez en achat direct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-xs border-collapse min-w-[650px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Kit</th>
                      <th className="text-center p-2.5 font-semibold">Prix</th>
                      <th className="text-center p-2.5 font-semibold">Puissance</th>
                      <th className="text-center p-2.5 font-semibold">Fixation balcon d&eacute;di&eacute;e</th>
                      <th className="text-center p-2.5 font-semibold">App de suivi</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Katezer / Beem Serenity 420W (Leroy Merlin)', '399 € (ou 549 € selon fiche)', '420 Wc', 'Option parmi sol/mur', 'Générique (prise connectée)', '5,2 ans'],
                      ['Beem On 500 Wc (direct)', priceLabel('beem-on-500w'), '500 Wc', 'Oui, pensé balcon', 'App Beem', '4,7 ans'],
                      ['Sunology PLAY (direct)', priceLabel('sunology-play'), '515 W', 'Oui, garde-corps/sol', 'App Sunology', '6,2 ans'],
                      ['Sunethic F500 (direct)', priceLabel('sunethic-f500'), '500 Wc', 'Support inclinable', 'Basique', '7,3 ans'],
                      ['Zendure 800 Pro 2 + 2×500W (direct, avec batterie)', '959 €', '1 000 Wc', 'Oui, garde-corps/sol', 'App Zendure', '4,7 ans'],
                    ].map(([kit, prix, puiss, fix, app, roi], i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 0 ? 'bg-amber-pale/10' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">{kit}</td>
                        <td className="text-center p-2.5 font-mono">{prix}</td>
                        <td className="text-center p-2.5 font-mono">{puiss}</td>
                        <td className="text-center p-2.5">{fix}</td>
                        <td className="text-center p-2.5">{app}</td>
                        <td className="text-center p-2.5 font-mono font-semibold text-green">{roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-4 leading-relaxed">
                Prix Beem On 500&nbsp;Wc, Sunology PLAY, Sunethic F500 et Zendure SolarFlow 800 Pro 2 v&eacute;rifi&eacute;s sur les fiches officielles des marques (05/11, 18/11 et 23/11/2026, <code>src/data/products.ts</code>). Prix Katezer/Beem Serenity relev&eacute;s via recherche web (test Que Choisir, fiches tierces) le 27&nbsp;novembre&nbsp;2026&nbsp;: <strong>leroymerlin.fr est inaccessible depuis cet environnement</strong> (m&ecirc;me blocage r&eacute;seau que la quasi-totalit&eacute; des v&eacute;rifications marchandes depuis le 2&nbsp;octobre, confirm&eacute; par <code>curl</code> ce jour), donc le prix actuel sur site n&apos;a pas pu &ecirc;tre revalid&eacute; directement&nbsp;; &agrave; reconfirmer avant achat. ROI calcul&eacute;s via notre m&eacute;thodologie (Lyon, sud, Performance Ratio 0,85, autoconsommation 85&nbsp;%/95&nbsp;% avec batterie, tarif {KWH_PRICE_LABEL}).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi le prix au watt ne suffit pas sur un balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les kits Leroy Merlin comme le Katezer sont con&ccedil;us pour plusieurs types de pose (sol, mur, balcon), avec un syst&egrave;me de fixation g&eacute;n&eacute;rique. Les kits sp&eacute;cialis&eacute;s balcon (Sunology GO/PLAY, Beem On, Zendure avec panneaux) int&egrave;grent des fixations pens&eacute;es pour un garde-corps ou un rebord &eacute;troit, sans percer. Sur un balcon standard, cette diff&eacute;rence de conception p&egrave;se souvent plus que 50 &agrave; 100&nbsp;&euro; d&apos;&eacute;cart de prix.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                M&ecirc;me logique pour le suivi&nbsp;: une marque sp&eacute;cialis&eacute;e propose une application d&eacute;di&eacute;e (production, historique, parfois pilotage de batterie). Les kits marketplace g&eacute;n&eacute;riques se contentent souvent d&apos;une prise connect&eacute;e tierce (type Smart Life), sans suivi de production int&eacute;gr&eacute;.
              </p>
            </section>

            <AffiliateCTA
              productName="Beem On 500 Wc"
              merchantName="Beem Energy"
              affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge"
              label="Voir le Beem On 500 Wc sur beemenergy.fr"
              price={priceLabel('beem-on-500w')}
              variant="secondary"
              position="after-leroy-merlin-section"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-green mb-2">Vous voulez un kit pens&eacute; pour le balcon</h3>
                  <p className="text-sm text-charcoal-light">Une <strong>marque sp&eacute;cialis&eacute;e</strong> en achat direct (Sunology, Beem On, Zendure)&nbsp;: fixation garde-corps, app d&eacute;di&eacute;e, SAV identifi&eacute;.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h3 className="font-bold text-amber-dark mb-2">Vous tombez sur une promo Leroy Merlin</h3>
                  <p className="text-sm text-charcoal-light">V&eacute;rifiez d&apos;abord qu&apos;il s&apos;agit d&apos;une <strong>marque reconnue</strong> (Beem, Sunethic) et comparez le prix au Wc avec l&apos;achat direct avant de conclure &agrave; une bonne affaire.</p>
                </div>
                <div className="card-lg border-border bg-cream/50">
                  <h3 className="font-bold text-charcoal mb-2">Vous attendez IKEA</h3>
                  <p className="text-sm text-charcoal-light">Pas de date annonc&eacute;e en France. Pas de raison d&apos;attendre&nbsp;: les marques d&eacute;j&agrave; disponibles couvrent les m&ecirc;mes besoins.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Quelle &eacute;conomie r&eacute;elle pour votre balcon&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur estime la production et le ROI pour votre d&eacute;partement, votre orientation et votre budget.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">ROI d&eacute;taill&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avec notre m&eacute;thodologie standard (Lyon, exposition sud, Performance Ratio 0,85, tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL})&nbsp;: le kit Leroy Merlin 420&nbsp;W &agrave; 399&nbsp;&euro; est rentabilis&eacute; en 5,2&nbsp;ans, plus rapidement que le Sunology PLAY (6,2&nbsp;ans) ou le Sunethic F500 (7,3&nbsp;ans), mais moins vite que le Beem On 500&nbsp;Wc ou le pack Zendure avec batterie (4,7&nbsp;ans chacun). Sur le papier, le prix seul ne d&eacute;favorise donc pas Leroy Merlin&nbsp;: c&apos;est la fixation, le suivi et le SAV qui font la diff&eacute;rence.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { v: '428 kWh/an', l: 'Production kit LM 420W' },
                  { v: '5,2 ans', l: 'ROI kit LM 420W (399 €)' },
                  { v: '4,7 ans', l: 'ROI Beem On 500 Wc' },
                  { v: '4,7 ans', l: 'ROI pack Zendure + batterie' },
                  { v: '6,2 ans', l: 'ROI Sunology PLAY' },
                  { v: '7,3 ans', l: 'ROI Sunethic F500' },
                  { v: '2 580 €', l: 'Cumul 25 ans kit LM 420W' },
                  { v: '6 872 €', l: 'Cumul 25 ans pack Zendure' },
                ].map((s) => (
                  <div key={s.l} className="card text-center bg-green-pale/30">
                    <div className="font-mono font-bold text-lg text-green">{s.v}</div>
                    <div className="text-xs text-stone mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={faq.question} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Zendure SolarFlow 800 Pro 2"
              merchantName="Zendure"
              affiliateUrl={zendureUrl('https://zendure.fr/products/zendure-solarflow-800-pro2')}
              label="Voir le Zendure SolarFlow 800 Pro 2 sur zendure.fr"
              price={priceLabel('zendure-solarflow-800-pro-2')}
              variant="box"
              position="footer-box"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/ikea-solstrale-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon IKEA (STREAM)&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Prix allemands, contenu des sets S et L, disponibilit&eacute; en France</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Beem On 500 Wc&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Prix, pr&eacute;commande et rentabilit&eacute;</p>
                </Link>
                <Link href="/avis/sunethic-f500" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Sunethic F500&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le panneau fran&ccedil;ais et sa rentabilit&eacute; r&eacute;elle</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire plug and play 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet des marques sp&eacute;cialis&eacute;es</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> disponibilit&eacute; IKEA v&eacute;rifi&eacute;e sur ikea.com/fr le 23&nbsp;novembre&nbsp;2026 (voir notre avis d&eacute;di&eacute;). Fiches Leroy Merlin (Katezer 420W, &laquo;&nbsp;Beem Serenity&nbsp;&raquo; 420W, Sunethic 410W) identifi&eacute;es par recherche web le 27&nbsp;novembre&nbsp;2026&nbsp;; <strong>leroymerlin.fr est inaccessible depuis cet environnement</strong> (m&ecirc;me blocage r&eacute;seau que la quasi-totalit&eacute; des v&eacute;rifications marchandes du calendrier depuis le 2&nbsp;octobre 2026, confirm&eacute; par <code>curl</code> ce jour)&nbsp;: le prix du Katezer (399&nbsp;&euro;) vient d&apos;un test Que Choisir achet&eacute; en promotion chez Brico D&eacute;p&ocirc;t, et les deux prix du kit Beem (399&nbsp;&euro; et 549&nbsp;&euro;) de deux fiches marketplace distinctes rep&eacute;r&eacute;es via recherche web &mdash; &agrave; reconfirmer sur site avant achat. Prix Beem On 500&nbsp;Wc, Sunology PLAY, Sunethic F500 et Zendure SolarFlow 800 Pro 2 issus de <code>src/data/products.ts</code> (v&eacute;rifi&eacute;s sur les fiches officielles des marques entre le 05/11 et le 23/11/2026). Calculs de production et de ROI selon notre <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link> (tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL}, Performance Ratio 0,85, Lyon, sud). Produits analys&eacute;s sur fiches techniques et avis tiers, pas test&eacute;s physiquement.
              </p>
              <p className="text-xs text-stone leading-relaxed mt-2">
                <strong>Transparence&nbsp;:</strong> certains liens de cette page sont des liens affili&eacute;s. Si vous achetez via ces liens, nous percevons une commission sans surco&ucirc;t pour vous. Cela n&apos;influence pas nos analyses.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
