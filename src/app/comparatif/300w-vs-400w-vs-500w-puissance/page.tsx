import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';

export const metadata: Metadata = withCanonicalOg({
  title: '300W vs 400W vs 500W : quelle puissance pour son balcon ?',
  description: 'Comparatif des puissances 300 W, 400 W et 500 W pour un panneau solaire de balcon : production, prix, ROI et profil adapté. Guide 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/300w-vs-400w-vs-500w-puissance',
  },
});

const faqData = [
  { question: 'Quelle puissance choisir pour un balcon ?', answer: 'Pour un balcon standard (8-15 m2), un kit de 400 a 500W offre le meilleur compromis rentabilite/espace. Les 300W conviennent aux très petits balcons ou aux budgets serres. Au-dela de 500W, il faut un espace plus grand et respecter le repere de 900W par prise recommande par l\'UFC-Que Choisir et les fabricants (la NF C 15-100 ne fixe pas de plafond en watts).' },
  { question: '500W suffisent-ils pour un balcon ?', answer: `Oui, pour la plupart des usages. Un kit 500 Wc produit ~440 kWh/an à Paris (sud) et jusqu'à ~590 kWh/an à Marseille. Cela couvre environ 9 à 12 % de la consommation annuelle moyenne d'un foyer français (4 800 kWh/an), soit 75 à 100 €/an d'économies la première année (85 % d'autoconsommation, ${KWH_PRICE_LABEL}). Un 500W couvre bien le frigo, l\'ordinateur, l\'eclairage LED et la TV durant la journee. Pour la lessive ou la cuisine, la production simultanee ne suffit pas seule. Si vous avez un grand balcon et une bonne orientation, le 500 W (Beem On à 429 €, en précommande au 05/11/2026) est le meilleur rapport prix/puissance.` },
  { question: 'Un kit 500W produit-il plus qu\'un kit 300W ?', answer: 'Oui, proportionnellement. Un 500W produit environ 1,67 fois plus qu\'un 300W (a orientation egale). En Ile-de-France : ~440 kWh/an pour un 500W contre ~265 kWh/an pour un 300W. Mais le prix au watt est souvent meilleur sur les 300W d\'entree de gamme.' },
  { question: 'Peut-on cumuler plusieurs kits ?', answer: 'Oui, en restant idealement sous 900W par circuit de prise : c\'est une recommandation (UFC-Que Choisir, fabricants), pas une limite de la norme NF C 15-100. Au-dela, une ligne dediee depuis le tableau est recommandee. Concretement : 2 kits 400W = 800W (ok), 2 kits 500W = 1000W (ligne dediee recommandee).' },
  { question: 'Le rendement est-il identique entre un 300W et un 500W ?', answer: 'Non. Les panneaux recents (2024-2026) affichent un rendement de 20-23% quel que soit la puissance totale. Le 500W n\'est pas plus "rentable au watt" par principe. La difference vient surtout de la taille du panneau (plus de surface = plus de watts).' },
  { question: 'Faut-il privilegier un gros kit ou plusieurs petits ?', answer: 'Un gros kit (500W) est plus simple a installer mais plus encombrant. Plusieurs petits (2 x 300W) offrent plus de flexibilite d\'orientation et d\'installation modulaire. A budget egal, le gros kit est souvent plus rentable au watt.' },
];

export default function PuissanceComparatif() {
  return (
    <>
      <SchemaArticle title="300W vs 400W vs 500W : quelle puissance choisir pour son balcon ?" description="Comparatif des puissances de panneaux solaires plug-and-play." url="https://monbalconsolaire.fr/comparatif/300w-vs-400w-vs-500w-puissance" datePublished="2026-04-19" dateModified="2026-11-05" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Quel kit choisir', href: '/quel-kit-choisir' }, { label: 'Puissance 300W vs 400W vs 500W' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Quel kit choisir', href: '/quel-kit-choisir' }, { label: 'Puissance 300W vs 400W vs 500W' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif puissance</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">300W vs 400W vs 500W : quelle puissance choisir pour son balcon ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">300, 400 ou 500 watts ? Plus de puissance ne signifie pas toujours plus de rentabilité. Analyse des 3 paliers les plus vendus en 2026 : prix, production reelle, profil adapte.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>19 avril 2026</span><span>&middot;</span><span className="text-green font-medium">Mis &agrave; jour le 5 novembre 2026</span><span>&middot;</span><span>8 min de lecture</span></div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
            <span className="text-stone text-sm mt-0.5">&#x2139;</span>
            <p className="text-xs text-stone leading-relaxed">
              <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
            </p>
          </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed"><strong>300W</strong> : budget serr&eacute;, petit balcon (moins de 8m&sup2;). <strong>400-500W</strong> : le sweet spot pour la majorit&eacute; des balcons fran&ccedil;ais. <strong>Au-del&agrave; de 500W</strong> : v&eacute;rifier l&apos;espace et le rep&egrave;re de 900W par circuit (recommandation, pas une limite de la NF C 15-100). Le ROI est g&eacute;n&eacute;ralement meilleur en 400-500W.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le tableau comparatif</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Comparaison synth&eacute;tique des 3 puissances sur un exemple concret (orientation sud, r&eacute;gion parisienne) :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-center p-3">300W</th>
                      <th className="text-center p-3">400W</th>
                      <th className="text-center p-3 rounded-tr-xl">500W</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Prix moyen', '280-350 \u20ac', '500-600 \u20ac', '429-690 \u20ac'],
                      ['Prix au watt', '~1,00 \u20ac/W', '~1,30 \u20ac/W', '~0,86-1,38 \u20ac/W'],
                      ['Production Paris (sud)', '~264 kWh/an', '~352 kWh/an', '~439 kWh/an'],
                      ['Production Marseille (sud)', '~353 kWh/an', '~471 kWh/an', '~589 kWh/an'],
                      ['\u00c9conomies 1re ann\u00e9e (Paris-Marseille)', '~45-60 \u20ac', '~60-80 \u20ac', '~75-100 \u20ac'],
                      ['ROI (Lyon, sud)', '5,1-6,2 ans', '6,7-7,9 ans', '4,7-7,3 ans'],
                      ['Dimensions panneau', '~82 x 69 cm (x4)', '~175 x 100 cm', '~180 x 110 cm'],
                      ['Poids', '~15 kg total', '~20 kg', '~22 kg'],
                      ['Exemple de kit', 'Beem Kit 300W (en rupture)', 'Sunology PLAY 2 (450-460W, fin de s\u00e9rie)', 'Beem On 500 Wc (429 \u20ac, pr\u00e9commande), Sunethic F500 (690 \u20ac)'],
                    ].map(([label, p300, p400, p500], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{label}</td>
                        <td className="text-center p-3">{p300}</td>
                        <td className="text-center p-3">{p400}</td>
                        <td className="text-center p-3">{p500}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2">Estimations bas&eacute;es sur une orientation sud, inclinaison 30&deg;, aucun ombrage, productible PVGIS recal&eacute; sur notre r&eacute;f&eacute;rence de Lyon, autoconsommation 85&nbsp;%, tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL}. ROI calcul&eacute;s pour les bornes de prix indiqu&eacute;es. Prix v&eacute;rifi&eacute;s le 5 novembre 2026. Variables selon r&eacute;gion, orientation et consommation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le 300W : pour qui ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le 300W est la puissance d&apos;entr&eacute;e de gamme. Souvent vendu sous forme de plusieurs mini-panneaux (4 x 75W par exemple), il offre une grande flexibilit&eacute; d&apos;installation.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h3 className="font-bold text-green mb-2">&#9989; Points forts</h3>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Prix d&apos;entr&eacute;e tr&egrave;s bas (&lt; 350&euro;)</li>
                    <li>ROI court (~3,7 ans pour le Beem Kit 300W &agrave; 199&nbsp;&euro; &agrave; Lyon, mais en rupture au 5 novembre 2026)</li>
                    <li>Modulaire : facile &agrave; r&eacute;partir sur un balcon</li>
                    <li>L&eacute;ger (15 kg), id&eacute;al pour balcons fragiles</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-amber-dark mb-2">&#10060; Points faibles</h3>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Production limit&eacute;e (~264 kWh/an &agrave; Paris)</li>
                    <li>&Eacute;conomies annuelles moindres</li>
                    <li>Plus de c&acirc;blage (plusieurs panneaux)</li>
                    <li>Micro-onduleurs moins puissants</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Le 300W convient : <strong>budget serr&eacute;, tr&egrave;s petit balcon, test avant engagement plus important</strong>. Voir notre <Link href="/avis/beem-kit-300w" className="text-green hover:underline">avis d&eacute;taill&eacute; du Beem Kit 300W</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le 400-450W : le sweet spot</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">C&apos;est longtemps &eacute;t&eacute; la puissance la plus vendue en France, domin&eacute;e par le Sunology PLAY 2 (450W). Depuis ao&ucirc;t 2026, Sunology vend le PLAY dans une version plus puissante (<strong>515&nbsp;W au 5 novembre 2026, au m&ecirc;me prix de 599&nbsp;&euro;</strong>)&nbsp;: les PLAY 2 de 450-460&nbsp;W encore en rayon sont des fins de s&eacute;rie, &agrave; comparer au prix du Wc. Beem a lui aussi fait &eacute;voluer son mod&egrave;le vers le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc &agrave; 429 &euro;</Link> (en pr&eacute;commande, exp&eacute;dition &agrave; partir de d&eacute;cembre 2026), d&eacute;sormais dans la cat&eacute;gorie 500W. C&apos;est le <strong>meilleur compromis rentabilit&eacute;/encombrement</strong> pour un balcon standard.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h3 className="font-bold text-green mb-2">&#9989; Points forts</h3>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Meilleur rapport &eacute;conomies/prix</li>
                    <li>Un seul panneau = installation ultra simple</li>
                    <li>Leaders du march&eacute; (support, app, suivi)</li>
                    <li>Garanties longues (25 ans produit)</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-amber-dark mb-2">&#10060; Points faibles</h3>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Prix plus &eacute;lev&eacute; (500-600&euro;)</li>
                    <li>Panneau volumineux (~175 x 100 cm)</li>
                    <li>Besoin d&apos;un balcon d&eacute;gag&eacute;</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Le 400-450W convient : <strong>majorit&eacute; des balcons fran&ccedil;ais, foyers cherchant un bon compromis, premi&egrave;re installation</strong>. Voir notre avis <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY 2</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le 500W : pour qui ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Les kits 500W repoussent la limite de production d&apos;un seul panneau. Le <strong>Beem On 500 Wc &agrave; 429 &euro;</strong> (0,86 &euro;/Wc, ROI ~4,7 ans &agrave; Lyon plein sud) est la meilleure affaire de ce segment, mais il est en pr&eacute;commande (exp&eacute;dition &agrave; partir de d&eacute;cembre 2026, v&eacute;rifi&eacute; le 5 novembre 2026). Le Sunethic F500 (690 &euro;) reste une alternative Made in France.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h3 className="font-bold text-green mb-2">&#9989; Points forts</h3>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Production maximale sur 1 panneau</li>
                    <li>&Eacute;conomies annuelles les plus &eacute;lev&eacute;es</li>
                    <li>Souvent bifacial (bonus 10-30%)</li>
                    <li>Micro-onduleur plus robuste</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-amber-dark mb-2">&#10060; Points faibles</h3>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Prix variable (429-690&euro; selon marque)</li>
                    <li>Panneau tr&egrave;s grand et lourd (22 kg)</li>
                    <li>Plus difficile &agrave; installer seul</li>
                    <li>Cumul limit&eacute; (2 x 500W = 1000W)</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Le 500W convient : <strong>grands balcons ou terrasses, foyers &agrave; forte consommation diurne</strong>. Voir nos avis <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (meilleur prix) et <Link href="/avis/sunethic-f500" className="text-green hover:underline">Sunethic F500</Link> (Made in France).</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Au-del&agrave; de 500W : les options</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Deux options pour aller plus loin :</p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">Cumuler 2 kits</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Rep&egrave;re recommand&eacute; : 900W par circuit (UFC-Que Choisir, fabricants ; la NF C 15-100 ne fixe pas de plafond). Deux kits 400W (800W) = OK. Au-del&agrave; : ligne d&eacute;di&eacute;e recommand&eacute;e.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">Passer &agrave; un kit avec batterie</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Type Sunology PLAY MAX, Zendure SolarFlow ou Bluetti Balco 260. Utile si vous consommez peu en journ&eacute;e. Voir notre <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">comparatif batteries solaires</Link>.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">Pour la r&eacute;glementation 900W : <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">voir notre guide r&eacute;glementation 2026</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="space-y-3">
                {[
                  { profil: 'Petit budget (< 400€)', reco: 'Kit compact 270-300 W', detail: 'Le Sunology GO (270 W, 349 €) est disponible ; le Beem Kit 300W (199 €) serait plus rentable sur le papier mais il est en rupture de stock chez Beem (vérifié le 5 novembre 2026).' },
                  { profil: 'Balcon standard 10 m²', reco: '450-515 W', detail: 'Sunology PLAY 515 W (ex-PLAY 2) ou Beem On 500 Wc (en précommande) : 1 panneau, installation en 2 min.' },
                  { profil: 'Grand balcon ou terrasse', reco: '500W (Beem On 429\u20ac)', detail: 'Beem On 500 Wc : meilleur prix au Wc \u00e0 0,86 \u20ac/Wc, ROI ~4,7 ans (Lyon, sud), en pr\u00e9commande (exp\u00e9dition \u00e0 partir de d\u00e9cembre 2026).' },
                  { profil: 'Consommation le soir', reco: 'Kit avec batterie', detail: 'PLAY MAX (460 W + 700 Wh), Zendure SolarFlow 800 Plus ou Bluetti Balco 260.' },
                  { profil: 'Locataire', reco: '400-450W', detail: 'Un seul panneau se d\u00e9monte en 1 minute pour le d\u00e9m\u00e9nagement.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-bold text-sm mb-1">{p.profil}</h3>
                        <p className="text-xs text-charcoal-light">{p.detail}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-lg whitespace-nowrap bg-green-pale text-green">{p.reco}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Pas s&ucirc;r de la puissance adapt&eacute;e &agrave; votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur vous recommande la puissance optimale selon votre d&eacute;partement et orientation.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

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
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/combien-panneaux-solaires-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Combien de panneaux peut-on mettre sur un balcon&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Place, circuit (rep&egrave;re 900&nbsp;W), rentabilit&eacute; et branchement s&eacute;rie/parall&egrave;le</p>
                </Link>
                <Link href="/avis/beem-kit-300w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem Kit 300W</h3>
                  <p className="text-xs text-charcoal-light mt-1">La meilleure option petit budget</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le leader du marché français</p>
                </Link>
                <Link href="/avis/sunethic-f500" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunethic F500</h3>
                  <p className="text-xs text-charcoal-light mt-1">Made in France, 500W bifacial</p>
                </Link>
                <Link href="/comparatif/meilleur-micro-onduleur-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur micro-onduleur 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Hoymiles, APsystems, Enphase, Deye : lequel choisir pour un kit DIY</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light"><p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> Donn&eacute;es PVGIS, sp&eacute;cifications fabricants 2026, Norme NF C 15-100. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p></div>
          </div>
        </div>
      </article>
    </>
  );
}
