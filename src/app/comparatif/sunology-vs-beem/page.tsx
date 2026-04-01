import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Sunology vs Beem 2026 : quel kit solaire choisir ?',
  description: 'Comparaison détaillée Sunology PLAY2 vs Beem On 460W : prix, puissance, installation, app, garantie. Quel kit solaire plug-and-play choisir en 2026 ?',
};

const faqData = [
  { question: 'Sunology ou Beem : lequel est le moins cher ?', answer: 'Les deux sont à 599€ pour leurs modèles phares (PLAY2 et Beem On). Beem propose aussi un kit à 299€ (Beem Kit 300W) pour les petits budgets. Sunology n\'a pas d\'offre d\'entrée de gamme équivalente.' },
  { question: 'Quel kit produit le plus d\'électricité ?', answer: 'Le Beem On produit légèrement plus grâce à ses 460 Wc contre 450 Wc pour le Sunology PLAY2. La différence est minime en pratique : environ 10 kWh/an de plus, soit ~2€/an d\'économies supplémentaires.' },
  { question: 'Lequel s\'installe le plus rapidement ?', answer: 'Le Sunology PLAY2 s\'installe en 1 minute (châssis pré-assemblé en usine). Le Beem On nécessite environ 5 minutes d\'assemblage. Les deux sont très simples.' },
  { question: 'Quelle est la meilleure app de suivi ?', answer: 'Sunology STREAM et Beem App offrent des fonctionnalités similaires (production en temps réel, historique, économies). La différence : Sunology utilise le WiFi intégré au micro-onduleur, Beem nécessite un boîtier Beembox séparé (inclus).' },
];

export default function SunologyVsBeemPage() {
  return (
    <>
      <SchemaArticle title="Sunology vs Beem 2026 : quel kit solaire choisir ?" description="Comparaison détaillée Sunology PLAY2 vs Beem On 460W." url="https://monbalconsolaire.vercel.app/comparatif/sunology-vs-beem" datePublished="2026-03-24" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Sunology vs Beem' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Sunology vs Beem : quel kit solaire choisir en 2026 ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Les deux leaders français du solaire plug-and-play s&apos;affrontent. PLAY2 contre Beem On : on compare tout, point par point.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>24 mars 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict rapide</h2>
            <p className="text-charcoal-light text-sm leading-relaxed"><strong>Sunology PLAY2</strong> pour ceux qui veulent l&apos;installation la plus simple possible (1 min, zéro outil) et un suivi WiFi sans boîtier supplémentaire. <strong>Beem On</strong> pour ceux qui cherchent 10 Wc de plus, un paiement en 10x sans frais, et la prise en charge des démarches Enedis (option Beem ZEN).</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Critère</th><th className="text-center p-3">Sunology PLAY2</th><th className="text-center p-3 rounded-tr-xl">Beem On 460W</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Prix', '599 €', '599 €'],
                      ['Puissance', '450 Wc', '460 Wc'],
                      ['Technologie', 'N-Type TOPCon bifacial', 'TOPCon bifacial'],
                      ['Dimensions', '176 x 113 cm', '189 x 113 cm'],
                      ['Poids', '24,1 kg', '~26 kg'],
                      ['Installation', '1 minute', '5 minutes'],
                      ['Micro-onduleur', 'TSUN 450W WiFi', 'APSystems + Beembox'],
                      ['App de suivi', 'STREAM (WiFi natif)', 'Beem App (via Beembox)'],
                      ['Garantie', '25 ans + 30 ans perf.', '25 ans'],
                      ['Certification CE', 'Kit complet', 'Panneau seul'],
                      ['Batterie compatible', 'VAULT 700Wh (option)', 'Beem Battery (option)'],
                      ['Paiement fractionné', 'Non', '4x ou 10x sans frais'],
                      ['Aide démarches', 'Non', 'Option Beem ZEN'],
                      ['Trustpilot', '4,6/5 (3 000+ avis)', '4,7/5 (1 200+ avis)'],
                      ['€/Wc', '1,33 €', '1,30 €'],
                    ].map(([c, s, b], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c}</td>
                        <td className="text-center p-3">{s}</td>
                        <td className="text-center p-3">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Où Sunology gagne</h2>
              <div className="space-y-3">
                {[
                  { t: 'Installation en 1 minute', d: 'Le châssis est pré-assemblé en usine. Vous dépliez, vous lestez, vous branchez. Aucun outil. Beem nécessite ~5 min d\'assemblage — c\'est rapide aussi, mais Sunology est imbattable sur ce point.' },
                  { t: 'WiFi intégré au micro-onduleur', d: 'Pas de boîtier supplémentaire à brancher chez vous. Le micro-onduleur TSUN se connecte directement à votre WiFi. Beem nécessite une Beembox (incluse) branchée sur votre box internet.' },
                  { t: 'Certification CE sur l\'ensemble du kit', d: 'Sunology est le seul à avoir la certification CE sur le panneau + onduleur + châssis ensemble. Beem certifie le panneau séparément.' },
                  { t: 'Panneau plus compact', d: 'À puissance quasi-égale, le PLAY2 est 13 cm moins long (176 vs 189 cm). Sur un petit balcon, ça peut faire la différence.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Où Beem gagne</h2>
              <div className="space-y-3">
                {[
                  { t: '10 Wc de plus pour le même prix', d: '460 Wc contre 450 Wc. La différence est faible (~10 kWh/an, soit ~2€/an) mais elle existe. Le ratio €/Wc de Beem (1,30€) est légèrement meilleur que celui de Sunology (1,33€).' },
                  { t: 'Paiement en 10x sans frais', d: 'Beem propose le paiement fractionné en 4x ou 10x sans frais. Sunology ne propose pas cette option. Pour 599€, ça fait ~60€/mois sur 10 mois.' },
                  { t: 'Option Beem ZEN', d: 'Pour 49€ de plus, Beem prend en charge toutes vos démarches administratives : déclaration CACSI Enedis, convention d\'autoconsommation. Sunology vous laisse faire vous-même (c\'est simple, mais c\'est un plus pour les moins à l\'aise).' },
                  { t: 'Gamme plus large', d: 'Beem propose le Beem Kit 300W à 299€ (entrée de gamme), le Beem On 460W (milieu de gamme) et le Beem Kit 420W à 599€ (4 panneaux modulaires). Sunology a le PLAY2 et le CITY (balcon) mais pas d\'offre à 299€.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2">Choisissez Sunology si :</h4>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>→ Vous voulez l&apos;installation la plus rapide</li>
                    <li>→ Vous préférez le WiFi natif sans boîtier</li>
                    <li>→ Vous avez un petit balcon (panneau plus compact)</li>
                    <li>→ La certification CE complète vous rassure</li>
                  </ul>
                  <div className="btn-affiliate inline-flex mt-4 text-xs">Voir le Sunology PLAY2 →</div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">Choisissez Beem si :</h4>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>→ Vous voulez payer en 10x sans frais</li>
                    <li>→ Vous préférez qu&apos;on s&apos;occupe des démarches (ZEN)</li>
                    <li>→ Vous cherchez un kit à 299€ pour tester</li>
                    <li>→ Vous voulez le meilleur ratio €/Wc</li>
                  </ul>
                  <div className="btn-affiliate inline-flex mt-4 text-xs">Voir le Beem On →</div>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-8">
              <p className="font-semibold mb-2">Quel kit est le plus rentable pour VOTRE balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur compare les 4 kits pour votre ville et votre orientation.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies →</Link>
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

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> ce comparatif est indépendant. Les liens sont des liens d&apos;affiliation. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
