import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: '300W vs 400W vs 500W : quelle puissance de panneau solaire choisir ?',
  description: 'Comparatif des puissances 300W, 400W et 500W pour un panneau solaire de balcon. Production, prix, ROI, profil adapte : le guide complet 2026.',
};

const faqData = [
  { question: 'Quelle puissance choisir pour un balcon ?', answer: 'Pour un balcon standard (8-15 m2), un kit de 400 a 500W offre le meilleur compromis rentabilite/espace. Les 300W conviennent aux tres petits balcons ou aux budgets serres. Au-dela de 500W, il faut un espace plus grand et verifier la norme NF C 15-100 (900W max par circuit).' },
  { question: 'Un kit 500W produit-il plus qu\'un kit 300W ?', answer: 'Oui, proportionnellement. Un 500W produit environ 1,67 fois plus qu\'un 300W (a orientation egale). En Ile-de-France : ~600 kWh/an pour un 500W contre ~360 kWh/an pour un 300W. Mais le prix au watt est souvent meilleur sur les 300W d\'entree de gamme.' },
  { question: 'Peut-on cumuler plusieurs kits ?', answer: 'Oui, jusqu\'a 900W total par circuit de prise (norme NF C 15-100). Au-dela, il faut une ligne dediee depuis le tableau. Concretement : 2 kits 400W = 800W (ok), 2 kits 500W = 1000W (ligne dediee requise).' },
  { question: 'Le rendement est-il identique entre un 300W et un 500W ?', answer: 'Non. Les panneaux recents (2024-2026) affichent un rendement de 20-23% quel que soit la puissance totale. Le 500W n\'est pas plus "rentable au watt" par principe. La difference vient surtout de la taille du panneau (plus de surface = plus de watts).' },
  { question: 'Faut-il privilegier un gros kit ou plusieurs petits ?', answer: 'Un gros kit (500W) est plus simple a installer mais plus encombrant. Plusieurs petits (2 x 300W) offrent plus de flexibilite d\'orientation et d\'installation modulaire. A budget egal, le gros kit est souvent plus rentable au watt.' },
];

export default function PuissanceComparatif() {
  return (
    <>
      <SchemaArticle title="300W vs 400W vs 500W : quelle puissance choisir pour son balcon ?" description="Comparatif des puissances de panneaux solaires plug-and-play." url="https://monbalconsolaire.fr/comparatif/300w-vs-400w-vs-500w-puissance" datePublished="2026-04-19" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Quel kit choisir', href: '/quel-kit-choisir' }, { label: 'Puissance 300W vs 400W vs 500W' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif puissance</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">300W vs 400W vs 500W : quelle puissance choisir pour son balcon ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">300, 400 ou 500 watts ? Plus de puissance ne signifie pas toujours plus de rentabilite. Analyse des 3 paliers les plus vendus en 2026 : prix, production reelle, profil adapte.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>19 avril 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed"><strong>300W</strong> : budget serr&eacute;, petit balcon (moins de 8m&sup2;). <strong>400-500W</strong> : le sweet spot pour la majorit&eacute; des balcons fran&ccedil;ais. <strong>Au-del&agrave; de 500W</strong> : v&eacute;rifier l&apos;espace et la norme NF C 15-100 (900W max par circuit). Le ROI est g&eacute;n&eacute;ralement meilleur en 400-500W.</p>
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
                      ['Prix moyen', '280-350 \u20ac', '500-600 \u20ac', '600-750 \u20ac'],
                      ['Prix au watt', '~1,00 \u20ac/W', '~1,30 \u20ac/W', '~1,30 \u20ac/W'],
                      ['Production Paris (sud)', '~360 kWh/an', '~480 kWh/an', '~600 kWh/an'],
                      ['Production Marseille (sud)', '~480 kWh/an', '~640 kWh/an', '~800 kWh/an'],
                      ['\u00c9conomies annuelles', '~70-95 \u20ac', '~95-125 \u20ac', '~115-155 \u20ac'],
                      ['ROI moyen', '3-4 ans', '4-5 ans', '4-5 ans'],
                      ['Dimensions panneau', '~82 x 69 cm (x4)', '~175 x 100 cm', '~180 x 110 cm'],
                      ['Poids', '~15 kg total', '~20 kg', '~22 kg'],
                      ['Exemple de kit', 'Beem Kit 300W', 'Sunology PLAY 2 (450W)', 'Sunethic F500'],
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
              <p className="text-xs text-stone mt-2">Estimations bas&eacute;es sur une orientation sud, inclinaison 30&deg;, aucun ombrage. Variables selon r&eacute;gion, orientation et consommation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le 300W : pour qui ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le 300W est la puissance d&apos;entr&eacute;e de gamme. Souvent vendu sous forme de plusieurs mini-panneaux (4 x 75W par exemple), il offre une grande flexibilit&eacute; d&apos;installation.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h4 className="font-bold text-green mb-2">&#9989; Points forts</h4>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Prix d&apos;entr&eacute;e tr&egrave;s bas (&lt; 350&euro;)</li>
                    <li>ROI le plus rapide (3 &agrave; 4 ans)</li>
                    <li>Modulaire : facile &agrave; r&eacute;partir sur un balcon</li>
                    <li>L&eacute;ger (15 kg), id&eacute;al pour balcons fragiles</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-amber-dark mb-2">&#10060; Points faibles</h4>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Production limit&eacute;e (~360 kWh/an &agrave; Paris)</li>
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
              <p className="text-charcoal-light leading-relaxed mb-4">C&apos;est la puissance la plus vendue en France en 2026. Le Sunology PLAY 2 (450W) et le Beem On (460W) dominent ce segment. C&apos;est le <strong>meilleur compromis rentabilit&eacute;/encombrement</strong> pour un balcon standard.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h4 className="font-bold text-green mb-2">&#9989; Points forts</h4>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Meilleur rapport &eacute;conomies/prix</li>
                    <li>Un seul panneau = installation ultra simple</li>
                    <li>Leaders du march&eacute; (support, app, suivi)</li>
                    <li>Garanties longues (25 ans produit)</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-amber-dark mb-2">&#10060; Points faibles</h4>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Prix plus &eacute;lev&eacute; (500-600&euro;)</li>
                    <li>Panneau volumineux (~175 x 100 cm)</li>
                    <li>Besoin d&apos;un balcon d&eacute;gag&eacute;</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Le 400-450W convient : <strong>majorit&eacute; des balcons fran&ccedil;ais, foyers cherchant un bon compromis, premi&egrave;re installation</strong>. Voir nos avis <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY 2</Link> et <Link href="/avis/beem-on-460w" className="text-green hover:underline">Beem On 460W</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le 500W : pour qui ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Les kits 500W repoussent la limite de production d&apos;un seul panneau. Sunethic F500 (500W) est la r&eacute;f&eacute;rence de ce segment.</p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h4 className="font-bold text-green mb-2">&#9989; Points forts</h4>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Production maximale sur 1 panneau</li>
                    <li>&Eacute;conomies annuelles les plus &eacute;lev&eacute;es</li>
                    <li>Souvent bifacial (bonus 10-30%)</li>
                    <li>Micro-onduleur plus robuste</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-amber-dark mb-2">&#10060; Points faibles</h4>
                  <ul className="text-sm text-charcoal-light space-y-2">
                    <li>Prix le plus &eacute;lev&eacute; (600-750&euro;)</li>
                    <li>Panneau tr&egrave;s grand et lourd (22 kg)</li>
                    <li>Plus difficile &agrave; installer seul</li>
                    <li>Cumul limit&eacute; (2 x 500W = 1000W)</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Le 500W convient : <strong>grands balcons ou terrasses, foyers &agrave; forte consommation diurne</strong>. Voir notre <Link href="/avis/sunethic-f500" className="text-green hover:underline">avis Sunethic F500</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Au-del&agrave; de 500W : les options</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Deux options pour aller plus loin :</p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Cumuler 2 kits</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Jusqu&apos;&agrave; 900W par circuit (NF C 15-100). Deux kits 400W (800W) = OK. Au-del&agrave; : ligne d&eacute;di&eacute;e requise.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Passer &agrave; un kit avec batterie</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Type Sunology PLAY MAX ou EcoFlow PowerStream. Utile si vous consommez peu en journ&eacute;e. Voir notre <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">comparatif batteries solaires</Link>.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">Pour la r&eacute;glementation 900W : <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">voir notre guide r&eacute;glementation 2026</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="space-y-3">
                {[
                  { profil: 'Petit budget (< 400€)', reco: '300W modulaire', detail: 'Le Beem Kit 300W est le meilleur choix. ROI en 3-4 ans.' },
                  { profil: 'Balcon standard 10 m²', reco: '400-450W', detail: 'Sunology PLAY 2 ou Beem On : 1 panneau, installation en 2 min.' },
                  { profil: 'Grand balcon ou terrasse', reco: '500W ou 2 x 400W', detail: 'Maximisez la production sans d\u00e9passer les 900W du circuit.' },
                  { profil: 'Consommation le soir', reco: 'Kit avec batterie', detail: 'PLAY MAX (450W + 700Wh) ou EcoFlow PowerStream.' },
                  { profil: 'Locataire', reco: '400-450W', detail: 'Un seul panneau se d\u00e9monte en 1 minute pour le d\u00e9m\u00e9nagement.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h4 className="font-bold text-sm mb-1">{p.profil}</h4>
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
                <Link href="/avis/beem-kit-300w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem Kit 300W</h4>
                  <p className="text-xs text-charcoal-light mt-1">La meilleure option petit budget</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le leader du marché français</p>
                </Link>
                <Link href="/avis/sunethic-f500" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunethic F500</h4>
                  <p className="text-xs text-charcoal-light mt-1">Made in France, 500W bifacial</p>
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
