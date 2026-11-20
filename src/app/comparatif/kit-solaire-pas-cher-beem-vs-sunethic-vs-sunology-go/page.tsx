import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';
import { PRODUCTS, priceLabel, availabilityBadge } from '@/data/products';

const PAGE_TITLE = 'Kit solaire pas cher 2026 : Beem vs Sunethic vs Sunology GO';
const PAGE_DESCRIPTION =
  'Le kit solaire balcon le moins cher en 2026 : Beem Kit 300W (199 €, rupture), Sunethic F500 (690 €) et Sunology GO (349 €) comparés. Prix, ROI, verdict.';
const PAGE_URL = 'https://monbalconsolaire.fr/comparatif/kit-solaire-pas-cher-beem-vs-sunethic-vs-sunology-go';

export const metadata: Metadata = withCanonicalOg({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
});

const BEEM = PRODUCTS['beem-kit-300w'];
const SUNETHIC = PRODUCTS['sunethic-f500'];
const GO = PRODUCTS['sunology-go'];

const faqData = [
  {
    question: 'Quel est le kit solaire balcon le moins cher en 2026 ?',
    answer: `Sur le papier, le ${BEEM.name} à ${priceLabel('beem-kit-300w')} est le moins cher et le meilleur ratio €/Wc (0,66 €/Wc) des trois, mais il est en rupture de stock chez Beem (aucune variante disponible, vérifié le 5 novembre 2026). Parmi les deux kits réellement achetables, le ${GO.name} à ${priceLabel('sunology-go')} est à la fois le moins cher à l'achat et celui qui a le meilleur ratio au watt (1,29 €/Wc contre 1,38 €/Wc pour le ${SUNETHIC.name}, qui coûte 690 € mais produit presque deux fois plus). Le GO reste donc le kit le moins cher et disponible immédiatement.`,
  },
  {
    question: 'Le Beem Kit 300W va-t-il revenir en stock ?',
    answer: 'Aucune date de réassort n\'est annoncée par Beem Energy au 20 novembre 2026 : les quatre configurations (300W, 420W, DUO, MAX) affichent toujours « Indisponible » sur beemenergy.fr. Le revendeur Hello Watt référence une version à 299 € (plus cher que le prix catalogue de 199 €), également indisponible. Si vous voulez un kit immédiatement, il faut regarder le Sunology GO ou le Sunethic F500.',
  },
  {
    question: 'Pourquoi le Sunethic F500 coûte-t-il plus cher que le Sunology GO ?',
    answer: 'Parce qu\'il produit presque deux fois plus : 500 Wc contre 270 Wc. Le F500 utilise un panneau Voltec Solar assemblé en Alsace et un micro-onduleur APsystems EZ1, contre un panneau TOPCon compact pour le GO, pensé pour les très petits balcons et les garde-corps. Le F500 n\'est pas vraiment un concurrent « petit budget » : c\'est un kit 500 W au prix le plus élevé de sa catégorie, à comparer plutôt au Sunology PLAY (599 €) ou au Beem On 500 Wc (429 €, en précommande).',
  },
  {
    question: 'Un kit solaire pas cher, c\'est moins fiable ?',
    answer: 'Pas forcément, mais le prix bas ne doit jamais se faire au détriment de la garantie et du SAV. Les trois kits de cette comparaison ont une garantie de 25 ans sur le panneau et un interlocuteur en France. Méfiez-vous plutôt des kits génériques sans marque à 150-250 € sur Amazon : garantie courte ou inexistante, SAV aléatoire, et la puissance annoncée n\'est pas toujours celle livrée.',
  },
  {
    question: 'Avec un petit budget, vaut-il mieux attendre le retour du Beem Kit 300W ?',
    answer: 'Non, sauf si vous n\'êtes pas pressé. Entre le risque d\'attendre sans date de réassort connue et acheter aujourd\'hui, le Sunology GO (349 €, en stock) reste le choix le plus rationnel pour un petit budget disponible immédiatement. Si votre budget peut monter à 429 €, le Beem On 500 Wc (en précommande, livraison à partir de décembre 2026) produit presque deux fois plus pour un surcoût de 80 €.',
  },
  {
    question: 'Quel est le ROI de ces 3 kits solaires pas chers ?',
    answer: `Avec notre méthodologie (Lyon, exposition sud, tarif ${KWH_PRICE_LABEL}, inflation ${KWH_INFLATION_LABEL}, dégradation des panneaux ${PANEL_DEGRADATION_LABEL}) : le ${BEEM.name} (s'il revient en stock) est rentabilisé en 3,7 ans, le ${GO.name} en 6,9 ans, et le ${SUNETHIC.name} en 7,3 ans. Le Beem Kit 300W reste le plus rentable au Wc, mais l'indisponibilité du produit retire tout intérêt à ce chiffre tant qu'il n'est pas en vente.`,
  },
];

type Row = { c: string; beem: string; sunethic: string; go: string };

const rows: Row[] = [
  { c: 'Prix', beem: '199 € (rupture)', sunethic: '690 €', go: '349 €' },
  { c: 'Puissance', beem: '300 Wc (4 × 75 Wc)', sunethic: '500 Wc (1 panneau)', go: '270 Wc (1 panneau)' },
  { c: 'Prix au watt-crête', beem: '0,66 €/Wc', sunethic: '1,38 €/Wc', go: '1,29 €/Wc' },
  { c: 'Disponibilité', beem: 'Indisponible chez Beem', sunethic: 'En stock', go: 'En stock' },
  { c: 'Production estimée (Lyon, sud)', beem: '306 kWh/an', sunethic: '510 kWh/an', go: '275 kWh/an' },
  { c: 'ROI (méthodologie du site)', beem: '3,7 ans', sunethic: '7,3 ans', go: '6,9 ans' },
  { c: 'Pose', beem: '4 panneaux indépendants (mur/sol)', sunethic: '1 panneau, support inclinable', go: 'Sol ou garde-corps, sans percer' },
  { c: 'Origine du panneau', beem: 'Conçu et assemblé à Nantes', sunethic: 'Voltec Solar, Alsace', go: 'Hors France' },
  { c: 'Garantie panneau', beem: '25 ans (80 % à 23 ans)', sunethic: '25-30 ans', go: '25 ans' },
  { c: 'Batterie compatible', beem: 'Beem Battery (non adaptée)', sunethic: 'Non native', go: 'Sunology VAULT (compatibilité non confirmée)' },
];

export default function KitSolairePasCherPage() {
  return (
    <>
      <SchemaArticle
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        datePublished="2026-11-20"
        dateModified="2026-11-20"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kit solaire pas cher' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kit solaire pas cher' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire pas cher 2026&nbsp;: Beem Kit 300W vs Sunethic F500 vs Sunology GO
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              &laquo;&nbsp;Kit solaire balcon pas cher&nbsp;&raquo; m&egrave;ne presque toujours vers ces trois noms&nbsp;: le Beem Kit 300W (le moins cher au watt, mais introuvable), le Sunology GO (compact et disponible) et le Sunethic F500 (plus cher, mais deux fois plus puissant). On compare les trois pour savoir lequel a vraiment le meilleur rapport prix/production aujourd&apos;hui.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>Publi&eacute; le 20 novembre 2026</span>
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
              Le <strong>{BEEM.name}</strong> ({priceLabel('beem-kit-300w')}) reste, sur le papier, le kit de marque le moins cher au watt&nbsp;: 0,66&nbsp;&euro;/Wc, ROI de 3,7&nbsp;ans. Mais il est <strong>indisponible</strong> chez Beem depuis plusieurs semaines, sans date de r&eacute;assort. Entre les deux kits r&eacute;ellement en stock, le <strong>{GO.name}</strong> ({priceLabel('sunology-go')}) est le moins cher &agrave; l&apos;achat et le plus compact (garde-corps ou sol sans percer), tandis que le <strong>{SUNETHIC.name}</strong> (690&nbsp;&euro;) co&ucirc;te plus cher mais produit presque deux fois plus, avec un panneau fran&ccedil;ais.
            </p>
          </div>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-center p-3">Beem Kit 300W</th>
                      <th className="text-center p-3">Sunethic F500</th>
                      <th className="text-center p-3 rounded-tr-xl bg-green-dark">Sunology GO &#9733;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={r.c} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{r.c}</td>
                        <td className="text-center p-3 text-charcoal-light">{r.beem}</td>
                        <td className="text-center p-3 text-charcoal-light">{r.sunethic}</td>
                        <td className="text-center p-3 font-semibold text-green bg-green-pale/30">{r.go}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-4 leading-relaxed">
                Prix Beem Kit 300W v&eacute;rifi&eacute; le 5 novembre 2026 sur beemenergy.fr ({availabilityBadge('beem-kit-300w')}) ; Sunethic F500 v&eacute;rifi&eacute; le 18 novembre 2026 sur sunethic.fr ; Sunology GO v&eacute;rifi&eacute; le 5 novembre 2026 sur sunology.eu. egress r&eacute;seau vers ces trois sites bloqu&eacute; depuis cet environnement le 20 novembre 2026 (m&ecirc;me blocage que les entr&eacute;es pr&eacute;c&eacute;dentes du calendrier) : recherche web compl&eacute;mentaire effectu&eacute;e ce jour (Dealabs, Tom&apos;s Guide, Neozone, HelloWatt, Selectra), aucune offre Black Friday 2026 dat&eacute;e et confirm&eacute;e trouv&eacute;e sp&eacute;cifiquement sur ces trois produits &agrave; cette date : les valeurs v&eacute;rifi&eacute;es ci-dessus sont conserv&eacute;es sans changement. Production et ROI calcul&eacute;s via notre m&eacute;thodologie standard (Lyon, sud, Performance Ratio 0,85, autoconsommation 85&nbsp;%).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Beem Kit 300W&nbsp;: le moins cher au watt, mais introuvable</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                &Agrave; <span className="data-highlight">199&nbsp;&euro;</span> pour 300&nbsp;Wc r&eacute;partis sur 4&nbsp;panneaux modulaires de 75&nbsp;Wc, le Beem Kit 300W affiche le meilleur ratio &euro;/Wc des trois kits (0,66&nbsp;&euro;/Wc) et le ROI le plus court (3,7&nbsp;ans &agrave; Lyon, sud). Le probl&egrave;me&nbsp;: depuis plusieurs semaines, les quatre configurations du Beem Kit (300W, 420W, DUO 600&nbsp;Wc, MAX 900&nbsp;Wc) sont affich&eacute;es &laquo;&nbsp;Indisponible&nbsp;&raquo; sur beemenergy.fr, sans date de r&eacute;assort communiqu&eacute;e. Le revendeur Hello&nbsp;Watt le r&eacute;f&eacute;rence &agrave; 299&nbsp;&euro; (plus cher), &eacute;galement indisponible.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Si vous voulez ce prix d&egrave;s qu&apos;il revient en stock, notre <Link href="/avis/beem-kit-300w" className="text-green hover:underline">avis d&eacute;taill&eacute; du Beem Kit 300W</Link> couvre aussi les avis n&eacute;gatifs sur Beem Energy (SAV, production r&eacute;elle) &agrave; lire avant d&apos;acheter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Sunology GO&nbsp;: le moins cher r&eacute;ellement disponible</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le <span className="data-highlight">{GO.name}</span> ({priceLabel('sunology-go')}) est le seul des trois kits en stock avec un prix sous 400&nbsp;&euro;. Con&ccedil;u pour les tr&egrave;s petits balcons, il se pose au sol avec ballasts ou sur un garde-corps sans percer (cadre de 30&nbsp;mm, fixation jusqu&apos;&agrave; 60&nbsp;mm de diam&egrave;tre). Sa puissance reste modeste (270&nbsp;Wc), et son prix au watt (1,29&nbsp;&euro;/Wc) est plus &eacute;lev&eacute; que celui du Beem Kit &mdash; vous payez la compacit&eacute; et la disponibilit&eacute; immediate, pas le meilleur rapport puissance/prix brut.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                D&eacute;tail &agrave; conna&icirc;tre&nbsp;: la fiche produit du GO redirigeait vers l&apos;accueil de sunology.eu au 5&nbsp;novembre 2026. Notre <Link href="/avis/sunology-go" className="text-green hover:underline">avis complet du Sunology GO</Link> d&eacute;taille la fiche technique, les deux modes de pose et le comparatif avec le PLAY.
              </p>
            </section>

            <AffiliateCTA
              productName="Sunology GO"
              merchantName="Sunology"
              affiliateUrl="https://sunology.eu/"
              label="Voir le Sunology GO sur sunology.eu"
              variant="secondary"
              position="after-go-wins"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Sunethic F500&nbsp;: plus cher, mais pas vraiment un concurrent &laquo;&nbsp;petit budget&nbsp;&raquo;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                &Agrave; <span className="data-highlight">690&nbsp;&euro;</span>, le Sunethic F500 est le plus cher des trois &agrave; l&apos;achat, mais il produit presque deux fois plus que le GO (500&nbsp;Wc contre 270&nbsp;Wc) avec un panneau Voltec Solar assembl&eacute; en Alsace et un micro-onduleur APsystems EZ1. Son ROI (7,3&nbsp;ans) est en fait le plus long des trois&nbsp;: le prix au watt (1,38&nbsp;&euro;/Wc) reste le moins avantageux de la comparaison, m&ecirc;me un peu au-dessus de celui du GO.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Le F500 n&apos;est int&eacute;ressant dans une logique petit budget que si le panneau fran&ccedil;ais compte vraiment pour vous. Sinon, pour une puissance &eacute;quivalente, le Sunology PLAY (599&nbsp;&euro;, 515&nbsp;W) ou le Beem On 500&nbsp;Wc (429&nbsp;&euro;, en pr&eacute;commande) sont moins chers &mdash; voir notre <Link href="/avis/sunethic-f500" className="text-green hover:underline">avis Sunethic F500</Link> pour le d&eacute;tail du comparatif.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-green mb-2">Vous voulez acheter aujourd&apos;hui, budget serr&eacute;</h3>
                  <p className="text-sm text-charcoal-light">Le <strong>Sunology GO</strong> ({priceLabel('sunology-go')}) : seul kit en stock sous 400&nbsp;&euro;, pose au sol ou garde-corps sans percer.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h3 className="font-bold text-amber-dark mb-2">Le prix compte plus que la disponibilit&eacute;</h3>
                  <p className="text-sm text-charcoal-light">Le <strong>Beem Kit 300W</strong> (199&nbsp;&euro;) reste le meilleur ratio &euro;/Wc s&apos;il revient en stock. V&eacute;rifiez beemenergy.fr r&eacute;guli&egrave;rement, sans garantie de date.</p>
                </div>
                <div className="card-lg border-border bg-cream/50">
                  <h3 className="font-bold text-charcoal mb-2">Un panneau fran&ccedil;ais vous int&eacute;resse</h3>
                  <p className="text-sm text-charcoal-light">Le <strong>Sunethic F500</strong> (690&nbsp;&euro;) : plus cher et moins rentable que le PLAY ou le Beem On de m&ecirc;me puissance, mais fabriqu&eacute; en Alsace.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Quelle &eacute;conomie r&eacute;elle pour votre balcon&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur estime la production et le ROI pour votre d&eacute;partement, votre orientation et votre budget.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">ROI d&eacute;taill&eacute; des 3 kits</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avec notre m&eacute;thodologie standard (Lyon, exposition sud, Performance Ratio 0,85, autoconsommation 85&nbsp;%, tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}) : le Beem Kit 300W produit environ 306&nbsp;kWh/an, le Sunethic F500 environ 510&nbsp;kWh/an et le Sunology GO environ 275&nbsp;kWh/an. Le ROI du Beem Kit (3,7&nbsp;ans) reste le plus court des trois tant qu&apos;il n&apos;est pas en vente&nbsp;; entre les deux kits disponibles, le GO (6,9&nbsp;ans) est l&eacute;g&egrave;rement plus rapide &agrave; rentabiliser que le F500 (7,3&nbsp;ans), malgr&eacute; un prix &agrave; l&apos;achat inf&eacute;rieur de moiti&eacute;.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { v: '306 kWh/an', l: 'Production Beem Kit 300W' },
                  { v: '3,7 ans', l: 'ROI Beem Kit 300W (si en stock)' },
                  { v: '275 kWh/an', l: 'Production Sunology GO' },
                  { v: '6,9 ans', l: 'ROI Sunology GO' },
                  { v: '510 kWh/an', l: 'Production Sunethic F500' },
                  { v: '7,3 ans', l: 'ROI Sunethic F500' },
                  { v: '1 845 €', l: 'Cumul 25 ans Beem Kit 300W' },
                  { v: '1 658 €', l: 'Cumul 25 ans Sunology GO' },
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
              productName="Sunology GO"
              merchantName="Sunology"
              affiliateUrl="https://sunology.eu/"
              label="Voir le prix actuel du Sunology GO"
              variant="box"
              position="footer-box"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/beem-kit-300w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Beem Kit 300W&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Prix, rupture de stock et avis n&eacute;gatifs sur Beem Energy</p>
                </Link>
                <Link href="/avis/sunethic-f500" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Sunethic F500&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">La marque, le panneau fran&ccedil;ais et la rentabilit&eacute; r&eacute;elle</p>
                </Link>
                <Link href="/avis/sunology-go" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Sunology GO&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Fiche technique, pose garde-corps et comparatif PLAY/Beem</p>
                </Link>
                <Link href="/comparatif/kit-solaire-petit-budget" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire petit budget&nbsp;: moins de 400&nbsp;&euro;</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le classement complet des kits abordables, Beem On et kits Amazon inclus</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> fiches produits officielles beemenergy.fr (v&eacute;rifi&eacute;e le 5&nbsp;novembre 2026), sunethic.fr (v&eacute;rifi&eacute;e le 18&nbsp;novembre 2026) et sunology.eu (v&eacute;rifi&eacute;e le 5&nbsp;novembre 2026), compl&eacute;t&eacute;es par une recherche web le 20&nbsp;novembre 2026 (Dealabs, Tom&apos;s Guide, Neozone, HelloWatt, Selectra) qui n&apos;a trouv&eacute; aucune offre Black Friday 2026 dat&eacute;e et confirm&eacute;e sur ces trois produits pr&eacute;cis. Acc&egrave;s direct aux trois sites bloqu&eacute; depuis cet environnement le jour de la r&eacute;daction. Produits analys&eacute;s sur fiches techniques, pas test&eacute;s physiquement. Calculs de production et de ROI selon notre <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link> (tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL}, Performance Ratio 0,85, Lyon, sud).
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
