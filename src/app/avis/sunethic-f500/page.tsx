import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

const PRODUCT_URL = 'https://www.sunethic.fr/product/station-solaire-sunethic-f500/';

export const metadata: Metadata = {
  title: 'Avis Sunethic 2026 : le F500 Made in France vaut-il 690 € ?',
  description: 'Avis Sunethic : 4,7/5 sur Trustpilot (1 234 avis), SAV, garanties réelles. Le F500 français à 690 € face à Sunology et Beem : ROI 7,4 ans, notre verdict.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/sunethic-f500',
  },
};

const faqData = [
  { question: 'Sunethic, c\'est une marque fiable ?', answer: 'Sunethic est une SAS française basée à Avignon (Vaucluse), société à mission fondée par Thomas Cautier, à l\'actionnariat familial. En octobre 2026, elle affiche 4,7/5 sur Trustpilot pour 1 234 avis (86 % de 5 étoiles). Les avis sont sollicités par la marque, comme chez la plupart des vendeurs en ligne. Les critiques récurrentes portent sur des délais de livraison et quelques e-mails restés sans réponse, pas sur la qualité du matériel.' },
  { question: 'Le Sunethic F500 est-il vraiment fabriqué en France ?', answer: 'Le panneau, oui : c\'est un module Voltec Solar de 500 Wc, assemblé à Dinsheim-sur-Bruche (Alsace). Le micro-onduleur, non : c\'est un APsystems EZ1, fabricant non français. Sunethic ne fabrique pas les panneaux lui-même : la marque conçoit et assemble les stations, et revend des modules français. « Panneau Made in France » est donc exact, « kit 100 % français » ne l\'est pas.' },
  { question: 'Combien coûte le Sunethic F500 en 2026 ?', answer: '690 € TTC sur sunethic.fr (prix vérifié le 12 octobre 2026), livraison offerte, paiement en 3 ou 4 fois sans frais possible. Cela fait 1,38 €/Wc, contre 1,20 €/Wc pour le Sunology PLAY (599 €) et 0,86 €/Wc pour le Beem On 500 Wc (429 €).' },
  { question: 'Quelle garantie offre Sunethic ?', answer: '25 ans sur le panneau et sur le micro-onduleur (pièces), plus 30 ans fabricant sur le panneau en parallèle. Câbles, connecteurs et gestionnaire de suivi : 2 ans. Points à connaître dans les conditions : réclamation écrite sous 15 jours après la découverte du défaut, main-d\'œuvre et déplacement exclus, et Sunethic peut remplacer un panneau par un modèle reconditionné.' },
  { question: 'Sunethic F500 vs Sunology PLAY : lequel choisir ?', answer: 'Même puissance (500 Wc), donc même production estimée : 510 kWh/an à Lyon plein sud. Le Sunethic coûte 91 € de plus (690 € vs 599 €), d\'où un retour sur investissement de 7,4 ans contre 6,5 ans. Choisissez Sunethic si le panneau français compte pour vous, Sunology sinon. Si seul le prix compte, le Beem On 500 Wc (429 €, 4,8 ans) est loin devant.' },
  { question: 'Le F500 est-il rentable en moins de 6 ans comme l\'annonce Sunethic ?', answer: 'Pas avec notre méthode standard. À Lyon, exposition sud, tarif 0,1940 €/kWh, 85 % d\'autoconsommation et inflation de 3,3 %/an, on obtient 7,4 ans (8,2 ans sans inflation). Moins de 6 ans est atteignable dans le Sud avec un fort taux d\'autoconsommation, pas dans le cas moyen.' },
];

const specs = [
  ['Puissance', '500 Wc (1 panneau)'],
  ['Panneau', 'Voltec Solar 500 Wc, assemblé en Alsace'],
  ['Dimensions panneau', '1,87 m × 1,17 m'],
  ['Micro-onduleur', 'APsystems EZ1 « duo » 960 VA, Wi-Fi (une entrée utilisée)'],
  ['Support', 'Inclinaison réglable, livré pré-monté'],
  ['Câble', 'Prise secteur 5 m inclus (rallonges 10 m / 20 m en option)'],
  ['Suivi', 'Application de production APsystems (gratuite)'],
  ['Évolutivité', 'Extension E500 (550 €) pour passer à 1 000 Wc'],
  ['Garantie', '25 ans panneau + micro-onduleur (Sunethic), 30 ans fabricant panneau, 2 ans câbles'],
  ['Poids', 'Non communiqué sur la fiche produit'],
  ['Prix', '690 € TTC, livraison offerte'],
];

const comparatif = [
  { name: 'Sunethic F500', power: '500 Wc', price: '690 €', wc: '1,38 €', roi: '7,4 ans', origin: 'France (Voltec)', href: null, highlight: true },
  { name: 'Sunology PLAY', power: '500 Wc', price: '599 €', wc: '1,20 €', roi: '6,5 ans', origin: 'Hors France', href: '/avis/sunology-play-2', highlight: false },
  { name: 'Beem On 500 Wc', power: '500 Wc', price: '429 €', wc: '0,86 €', roi: '4,8 ans', origin: 'Hors France', href: '/avis/beem-on-500w', highlight: false },
];

export default function SunethicAvisPage() {
  return (
    <>
      <SchemaArticle title="Avis Sunethic : la marque et le kit F500 Made in France analysés" description="Avis sur la marque Sunethic (Trustpilot, SAV, garanties) et analyse du kit solaire F500 500 Wc à 690 €." url="https://monbalconsolaire.fr/avis/sunethic-f500" datePublished="2026-03-27" dateModified="2026-10-12" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Sunethic F500" brand="Sunethic" description="Station solaire plug-and-play 500 Wc avec panneau Voltec Solar assemblé en France, micro-onduleur APsystems EZ1, garantie 25 ans." price={690} ratingValue={7.5} ratingCount={1} url="https://monbalconsolaire.fr/avis/sunethic-f500" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunethic F500' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunethic F500' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Avis Sunethic : la marque et le kit F500 Made in France analys&eacute;s (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Sunethic est l&apos;une des rares marques &agrave; vendre un kit plug-and-play avec un panneau fabriqu&eacute; en France. La marque est tr&egrave;s bien not&eacute;e, mais son F500 co&ucirc;te 690&nbsp;&euro;, soit 261&nbsp;&euro; de plus qu&apos;un Beem On de m&ecirc;me puissance. Qui est derri&egrave;re Sunethic, que disent les clients, et le surco&ucirc;t se justifie-t-il&nbsp;? Notre analyse, chiffres &agrave; l&apos;appui.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>27 mars 2026 &middot; Mis &agrave; jour le 12 octobre 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <div className="card-lg bg-cream/50 border-border mb-8">
            <p className="text-sm font-bold mb-2">En bref</p>
            <ul className="text-sm text-charcoal-light space-y-1">
              <li><strong>La marque&nbsp;:</strong> PME d&apos;Avignon, soci&eacute;t&eacute; &agrave; mission, 4,7/5 sur Trustpilot (1&nbsp;234 avis). Fiable, avec quelques retards de livraison signal&eacute;s.</li>
              <li><strong>Le F500&nbsp;:</strong> panneau Voltec Solar fran&ccedil;ais, micro-onduleur APsystems (non fran&ccedil;ais), 690&nbsp;&euro;.</li>
              <li><strong>Rentabilit&eacute;&nbsp;:</strong> 7,4 ans &agrave; Lyon, contre 6,5 ans (Sunology PLAY) et 4,8 ans (Beem On 500 Wc).</li>
              <li><strong>Pour qui&nbsp;:</strong> ceux qui paient volontiers ~90 &agrave; 260&nbsp;&euro; de plus pour un panneau fran&ccedil;ais.</li>
            </ul>
          </div>

          <ProductHero
            brand="Sunethic"
            name="F500"
            power="500 Wc"
            price="690 €"
            score="7.5/10"
            tagline="Panneau français Voltec Solar, marque bien notée, mais le prix au Wc le plus élevé du segment 500 Wc."
            affiliateUrl={PRODUCT_URL}
            affiliateLabel="Voir sur le site du fabricant"
            accentColor="green"
            image="/images/produits/sunethic-f500-2.webp"
            imageAlt="Sunethic F500 - panneau solaire 500 Wc Made in France"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 12/10/2026 sur sunethic.fr &middot; Peut varier selon les promos</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Sunethic&nbsp;: que vaut la marque&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Quand on tape &laquo;&nbsp;avis Sunethic&nbsp;&raquo;, on cherche souvent &agrave; savoir si l&apos;entreprise est s&eacute;rieuse avant de commander 690&nbsp;&euro; de mat&eacute;riel en ligne. Voici ce qu&apos;on a pu v&eacute;rifier.</p>

              <h3 className="text-lg font-bold mb-2">Qui est derri&egrave;re Sunethic&nbsp;?</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">Sunethic est une SAS au capital de 30&nbsp;000&nbsp;&euro;, bas&eacute;e &agrave; Avignon (Vaucluse), fond&eacute;e par Thomas Cautier sur un projet lanc&eacute; en 2022. C&apos;est une <strong>soci&eacute;t&eacute; &agrave; mission</strong> (statut loi PACTE) &agrave; l&apos;actionnariat 100&nbsp;% familial, sans fonds d&apos;investissement selon la marque. Sunethic <strong>ne fabrique pas ses panneaux</strong>&nbsp;: elle con&ccedil;oit des stations et des kits &agrave; partir de modules Voltec Solar (fabricant alsacien) pour ses gammes F et T, et SunPower/Longi pour sa gamme E. Elle vend aussi des batteries Anker et Zendure et propose des installations en toiture par des pros RGE.</p>

              <h3 className="text-lg font-bold mb-2">Avis clients&nbsp;: ce que dit Trustpilot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
                {[
                  { v: '4,7/5', l: 'Note Trustpilot' },
                  { v: '1 234', l: 'Avis au total' },
                  { v: '86 %', l: 'Avis 5 étoiles' },
                  { v: '186', l: 'Avis sur 12 mois' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">Relev&eacute; le 12 octobre 2026. Le site de Sunethic affiche &laquo;&nbsp;4,8&nbsp;&raquo;&nbsp;; Trustpilot indique 4,7 aujourd&apos;hui. Deux nuances&nbsp;: la marque <strong>sollicite activement les avis</strong> (invitations envoy&eacute;es aux clients, pratique courante qui gonfle m&eacute;caniquement les notes), et elle dit r&eacute;pondre &agrave; 100&nbsp;% des avis n&eacute;gatifs, g&eacute;n&eacute;ralement sous 24&nbsp;h.</p>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Ce que les clients saluent</h4>
                  <p className="text-xs text-charcoal-light">Solidit&eacute; des panneaux et des supports, conseil avant achat, SAV joignable et aide &agrave; distance pendant l&apos;installation.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Ce qui revient dans les critiques</h4>
                  <p className="text-xs text-charcoal-light">Retards de livraison (jusqu&apos;&agrave; 3 semaines sur une batterie), e-mails rest&eacute;s sans r&eacute;ponse, notices d&apos;accessoires tiers (Shelly, Anker) peu claires ou en anglais, quelques pannes de micro-onduleur r&eacute;gl&eacute;es par &eacute;change.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">Garantie et SAV&nbsp;: ce qu&apos;il faut lire</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">Sur la gamme F, Sunethic garantit le panneau et le micro-onduleur <strong>25 ans</strong> (pi&egrave;ces), en plus de la garantie fabricant de 30 ans sur le panneau. Mais les conditions de garantie contiennent trois clauses &agrave; conna&icirc;tre&nbsp;: r&eacute;clamation <strong>&eacute;crite sous 15 jours</strong> apr&egrave;s la d&eacute;couverte du d&eacute;faut, main-d&apos;&oelig;uvre et d&eacute;placement exclus, et possibilit&eacute; pour Sunethic de remplacer un panneau d&eacute;fectueux par un panneau <strong>d&apos;occasion ou r&eacute;par&eacute;</strong>. C&acirc;bles et connecteurs&nbsp;: 2 ans seulement.</p>
              <p className="text-charcoal-light leading-relaxed">Contact SAV&nbsp;: sav@sunethic.fr, t&eacute;l&eacute;phone 04 12 30 01 00 (lundi-vendredi, 9h30-13h et 14h-17h30). Livraison offerte, annonc&eacute;e sous 15 jours. Avant tout achat de kit, quelle que soit la marque, notre <Link href="/guide/checklist-avant-achat-kit-solaire" className="text-green hover:underline">checklist avant achat</Link> et notre article sur les <Link href="/blog/kit-solaire-plug-and-play-arnaque" className="text-green hover:underline">arnaques au kit solaire plug-and-play</Link> restent utiles&nbsp;: Sunethic n&apos;en fait pas partie.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation du Sunethic F500</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le F500 est l&apos;entr&eacute;e de gamme des stations &laquo;&nbsp;F&nbsp;&raquo; de Sunethic&nbsp;: un panneau Voltec Solar de 500 Wc sur un support inclinable, livr&eacute; d&eacute;j&agrave; mont&eacute;, &agrave; brancher sur une prise. Sur le segment 500 Wc, il fait face au <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY</Link> (599&nbsp;&euro;) et au <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (429&nbsp;&euro;). Son seul vrai diff&eacute;renciateur est l&apos;origine du panneau.</p>
              <p className="text-charcoal-light leading-relaxed">D&eacute;tail technique int&eacute;ressant&nbsp;: le micro-onduleur APsystems EZ1 a deux entr&eacute;es, dont une seule est utilis&eacute;e. Sunethic vend une extension E500 sans micro-onduleur &agrave; 550&nbsp;&euro; pour passer &agrave; 1&nbsp;000 Wc plus tard. Le F500 est donc pens&eacute; comme une premi&egrave;re &eacute;tape &eacute;volutive.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map(([k, v], i) => (
                      <tr key={i} className="border-b border-border-light">
                        <td className="py-2 pr-4 font-semibold whitespace-nowrap">{k}</td>
                        <td className="py-2 text-charcoal-light">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2">Source&nbsp;: fiche produit sunethic.fr, consult&eacute;e le 12/10/2026.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Un panneau réellement fabriqué en France', d: 'Le module Voltec Solar est assemblé à Dinsheim-sur-Bruche (Alsace). C\'est rare dans le plug-and-play, où la quasi-totalité des panneaux viennent d\'Asie. Nuance : l\'origine des cellules n\'est pas documentée publiquement, et le micro-onduleur n\'est pas français.' },
                  { t: 'Une marque bien notée et joignable', d: '4,7/5 sur Trustpilot avec 1 234 avis, un SAV par e-mail et téléphone, des réponses publiques aux avis négatifs. Pour un achat en ligne de 690 €, c\'est rassurant.' },
                  { t: '25 ans de garantie sur le micro-onduleur', d: 'Sunethic couvre le micro-onduleur 25 ans pièces, comme le panneau, en plus des 30 ans de garantie fabricant sur le module Voltec Solar. Une durée longue, sous réserve des conditions détaillées plus haut.' },
                  { t: 'Évolutif à 1 000 Wc sans changer d\'onduleur', d: 'Le micro-onduleur 960 VA accepte un second panneau. L\'extension E500 (550 €) double la puissance pour moins cher qu\'un second kit complet.' },
                  { t: 'Livré monté, prêt à brancher', d: 'Support inclinable préassemblé, câble de 5 m inclus, livraison offerte. Pas de bricolage lourd pour une pose au sol ou en terrasse.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunethic F500" merchantName="Sunethic" affiliateUrl={PRODUCT_URL} label="Voir le F500 sur le site officiel" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Le prix au Wc le plus élevé du segment 500 Wc', d: 'À 690 €, le F500 coûte 91 € de plus que le Sunology PLAY et 261 € de plus que le Beem On 500 Wc, pour la même production. Résultat : 7,4 ans de retour sur investissement, contre 6,5 et 4,8 ans.' },
                  { t: '« Made in France » à nuancer', d: 'Seul le panneau est français. Le micro-onduleur est un APsystems EZ1, comme chez de nombreux concurrents. L\'argument carbone reste réel sur le panneau (le composant le plus lourd), mais le kit n\'est pas 100 % français.' },
                  { t: 'Une promesse de rentabilité optimiste', d: 'Sunethic annonce une « rentabilité en moins de 6 ans ». Avec notre méthode standard (Lyon, sud, 0,1940 €/kWh), on obtient 7,4 ans. Moins de 6 ans suppose un très bon ensoleillement et une autoconsommation élevée.' },
                  { t: 'Des clauses de garantie restrictives', d: 'Réclamation écrite sous 15 jours, main-d\'œuvre exclue, remplacement possible par du matériel d\'occasion. La durée affichée est longue, les conditions moins généreuses.' },
                  { t: 'Panneau grand format', d: '1,87 × 1,17 m : c\'est un panneau de toiture. Sur un petit balcon ou un garde-corps étroit, il peut ne pas tenir. Le poids n\'est pas indiqué sur la fiche produit.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunethic F500" merchantName="Sunethic" affiliateUrl={PRODUCT_URL} label="Vérifier le prix actuel chez Sunethic" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Sunethic F500 vs concurrence 500 Wc</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-3">Kit</th>
                      <th className="py-2 pr-3">Puissance</th>
                      <th className="py-2 pr-3">Prix</th>
                      <th className="py-2 pr-3">&euro;/Wc</th>
                      <th className="py-2 pr-3">ROI</th>
                      <th className="py-2">Origine panneau</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((c, i) => (
                      <tr key={i} className={`border-b border-border-light ${c.highlight ? 'bg-green-pale/30 font-semibold' : ''}`}>
                        <td className="py-2 pr-3">{c.href ? <Link href={c.href} className="text-green hover:underline">{c.name}</Link> : c.name}</td>
                        <td className="py-2 pr-3 font-mono">{c.power}</td>
                        <td className="py-2 pr-3 font-mono">{c.price}</td>
                        <td className="py-2 pr-3 font-mono">{c.wc}</td>
                        <td className="py-2 pr-3 font-mono">{c.roi}</td>
                        <td className="py-2">{c.origin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2">ROI calcul&eacute; pour Lyon, exposition sud, 510 kWh/an pour les trois kits. Voir aussi notre <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">comparatif des meilleurs kits 2026</Link>.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce kit soit fait pour vous&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et votre exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le Sunethic F500 &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; et production</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
                {[
                  { v: '510 kWh', l: 'Production / an' },
                  { v: '84 €', l: 'Économies an 1' },
                  { v: '7,4 ans', l: 'Retour sur invest.' },
                  { v: '3 190 €', l: 'Économies 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed">Sur 25 ans, le F500 &eacute;conomise environ 3&nbsp;190&nbsp;&euro; pour 690&nbsp;&euro; investis, soit un gain net d&apos;environ 2&nbsp;500&nbsp;&euro;. Sans inflation du tarif, le retour sur investissement passe &agrave; 8,2 ans. Si vous ajoutez l&apos;extension E500 (550&nbsp;&euro;, soit 1&nbsp;240&nbsp;&euro; au total pour 1&nbsp;000 Wc), le ROI descend &agrave; 6,7 ans, &agrave; condition de consommer 85&nbsp;% des 1&nbsp;020 kWh produits. Pour savoir quelle puissance vous convient, lisez notre <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="text-green hover:underline">comparatif 300 W vs 400 W vs 500 W</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Votre critère principal est le prix : le Beem On 500 Wc produit autant pour 261 € de moins',
                  'Votre balcon est étroit : le panneau mesure 1,87 × 1,17 m',
                  'Vous voulez un kit 100 % français : le micro-onduleur ne l\'est pas',
                  'Vous êtes exposé nord ou très ombragé : le surcoût ne sera jamais amorti',
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
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>Sur la marque&nbsp;:</strong> Sunethic est une PME s&eacute;rieuse, bien not&eacute;e et joignable. Les critiques portent sur la logistique (d&eacute;lais, r&eacute;ponses aux e-mails), pas sur le mat&eacute;riel. Lisez simplement les conditions de garantie avant d&apos;acheter.</p>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>Sur le F500&nbsp;:</strong> c&apos;est un bon kit, avec un panneau fabriqu&eacute; en France et une garantie de 25 ans sur le micro-onduleur. Mais financi&egrave;rement, il ne gagne contre personne&nbsp;: 7,4 ans de ROI contre 6,5 ans pour le Sunology PLAY et 4,8 ans pour le Beem On 500 Wc. Vous payez l&apos;origine du panneau, pas de la production en plus.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale&nbsp;: <span className="text-amber-dark text-xl font-extrabold">7.5/10</span></strong> &mdash; Le bon choix si le panneau fran&ccedil;ais est un crit&egrave;re pour vous. Sinon, le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> fait le m&ecirc;me travail pour bien moins cher. <a href={PRODUCT_URL} target="_blank" rel="sponsored noopener" className="text-green hover:underline">Voir le F500 chez Sunethic</a>.</p>
            </section>

            <AffiliateCTA productName="Sunethic F500" merchantName="Sunethic" affiliateUrl={PRODUCT_URL} label="Voir l'offre actuelle sur Sunethic" variant="box" position="footer-box" price="690 €" />

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
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY (500 Wc)</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;alternative fran&ccedil;aise &agrave; 599&nbsp;&euro;</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">M&ecirc;me puissance, 429&nbsp;&euro;</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
                <Link href="/guide/checklist-avant-achat-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Checklist avant d&apos;acheter un kit solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les points &agrave; v&eacute;rifier avant de commander</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie&nbsp;:</strong> kit analys&eacute; &agrave; partir de la fiche produit et des conditions de garantie Sunethic, des mentions l&eacute;gales de l&apos;entreprise et des avis Trustpilot (relev&eacute;s le 12/10/2026). ROI calcul&eacute; avec tarif 0,1940 &euro;/kWh, inflation 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;% (95&nbsp;% avec batterie), Performance Ratio 0,85, Lyon sud, sur 25 ans. &Eacute;conomies&nbsp;: 84 &euro;/an, ROI 7,4 ans, 3&nbsp;190 &euro; sur 25 ans.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence&nbsp;:</strong> avis ind&eacute;pendant. Certains liens peuvent &ecirc;tre affili&eacute;s&nbsp;: si vous achetez via ces liens, nous pouvons percevoir une commission, sans surco&ucirc;t pour vous. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
