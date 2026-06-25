import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';

export const metadata: Metadata = {
  title: 'Sunology vs Beem 2026 : quel kit solaire choisir ?',
  description: 'Comparaison détaillée Sunology PLAY2 vs Beem On 460W : prix, puissance, installation, app, garantie. Quel kit solaire plug-and-play choisir en 2026 ?',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/sunology-vs-beem',
  },
};

const faqData = [
  { question: 'Sunology ou Beem : lequel est le moins cher ?', answer: 'Beem a pris l\'avantage en 2026 : le Beem On 500 Wc est \u00e0 429\u20ac contre 599\u20ac pour le Sunology PLAY2. C\'est 170\u20ac de moins pour 50 Wc de plus. Beem propose aussi le Kit 300W \u00e0 299\u20ac.' },
  { question: 'Quel kit produit le plus d\'\u00e9lectricit\u00e9 ?', answer: 'Le Beem On 500 Wc produit plus gr\u00e2ce \u00e0 ses 500 Wc contre 450 Wc pour le Sunology PLAY2, soit environ 510 vs 520 kWh/an. La diff\u00e9rence de production est faible, mais le prix est tr\u00e8s diff\u00e9rent (429\u20ac vs 599\u20ac).' },
  { question: 'Lequel s\'installe le plus rapidement ?', answer: 'Le Sunology PLAY2 s\'installe en 1 minute (châssis pré-assemblé en usine). Le Beem On nécessite environ 5 minutes d\'assemblage. Les deux sont très simples.' },
  { question: 'Quelle est la meilleure app de suivi ?', answer: 'Sunology STREAM et Beem App offrent des fonctionnalités similaires (production en temps réel, historique, économies). La différence : Sunology utilise le WiFi intégré au micro-onduleur, Beem nécessite un boîtier Beembox séparé (inclus).' },
];

export default function SunologyVsBeemPage() {
  return (
    <>
      <SchemaArticle title="Sunology vs Beem 2026 : quel kit solaire choisir ?" description="Comparaison détaillée Sunology PLAY2 vs Beem On 460W." url="https://monbalconsolaire.fr/comparatif/sunology-vs-beem" datePublished="2026-03-24" dateModified="2026-06-20" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Sunology vs Beem' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Sunology vs Beem' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Sunology vs Beem : quel kit solaire choisir en 2026 ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Les deux leaders français du solaire plug-and-play s&apos;affrontent. PLAY2 contre Beem On : on compare tout, point par point.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>Mis &agrave; jour le 20 juin 2026</span><span>&middot;</span><span>10 min de lecture</span></div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
            <span className="text-stone text-sm mt-0.5">&#x2139;</span>
            <p className="text-xs text-stone leading-relaxed">
              <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
            </p>
          </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict rapide</h2>
            <p className="text-charcoal-light text-sm leading-relaxed"><strong>Sunology PLAY2</strong> (599&euro;) pour ceux qui veulent l&apos;installation la plus simple (1 min, z&eacute;ro outil) et un suivi WiFi natif. <strong>Beem On 500 Wc</strong> (429&euro;) pour le meilleur rapport qualit&eacute;-prix du march&eacute; : 170&euro; de moins pour 50 Wc de plus. Le nouveau Beem On change la donne.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th><th className="text-center p-3"><div className="flex flex-col items-center gap-2"><ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY 2" href="/avis/sunology-play-2" size="sm" />Sunology PLAY2</div></th><th className="text-center p-3 rounded-tr-xl"><div className="flex flex-col items-center gap-2"><ProductThumb src="/images/produits/beem-on-500-1.png" alt="Beem On 500 Wc" href="/avis/beem-on-500w" size="sm" />Beem On 500 Wc</div></th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Prix', '599 \u20ac', '429 \u20ac'],
                      ['Puissance', '450 Wc', '500 Wc'],
                      ['Technologie', 'N-Type TOPCon bifacial', 'TOPCon bifacial'],
                      ['Dimensions', '176 x 113 cm', '195 x 113 cm'],
                      ['Poids', '24,1 kg', '27,6 kg'],
                      ['Installation', '1 minute', '5 minutes'],
                      ['Micro-onduleur', 'TSUN 450W WiFi', '550W + Beembox'],
                      ['App de suivi', 'STREAM (WiFi natif)', 'Beem App (via Beembox)'],
                      ['Garantie', '25 ans + 30 ans perf.', '25 ans'],
                      ['Certification CE', 'Kit complet', 'Panneau seul'],
                      ['Batterie compatible', 'VAULT 700Wh (option)', 'Beem Battery (option)'],
                      ['Paiement fractionn\u00e9', 'Non', '10x sans frais'],
                      ['Aide d\u00e9marches', 'Non', 'Option Beem ZEN (49\u20ac)'],
                      ['Trustpilot', '4,6/5 (3 000+ avis)', '4,7/5 (1 200+ avis)'],
                      ['\u20ac/Wc', '1,33 \u20ac', '0,86 \u20ac'],
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
                  { t: 'Prix imbattable : 429\u20ac vs 599\u20ac', d: 'Le Beem On 500 Wc co\u00fbte 170\u20ac de moins que le PLAY2 pour 50 Wc de plus. Le ratio \u20ac/Wc est de 0,86\u20ac contre 1,33\u20ac. C\'est le changement majeur de 2026.' },
                  { t: 'Paiement en 10x sans frais', d: 'Beem propose le paiement fractionn\u00e9 en 10x sans frais. Pour 429\u20ac, \u00e7a fait ~43\u20ac/mois. D\u00e8s le premier mois, le kit produit plus que la mensualit\u00e9.' },
                  { t: 'Option Beem ZEN', d: 'Pour 49\u20ac de plus, Beem prend en charge toutes vos d\u00e9marches administratives : d\u00e9claration CACSI Enedis, convention d\'autoconsommation. Sunology vous laisse faire vous-m\u00eame.' },
                  { t: 'Gamme plus large', d: 'Beem propose le Kit 300W \u00e0 299\u20ac (entr\u00e9e de gamme), le Beem On 500 Wc \u00e0 429\u20ac (best-seller), et le Beem On Max pour les grandes surfaces. Sunology a le PLAY2 et le CITY mais pas d\'offre sous 500\u20ac.' },
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
                  <div className="flex items-start gap-4 mb-3">
                    <ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY 2" href="/avis/sunology-play-2" size="lg" />
                    <h4 className="font-bold text-green mb-2">Choisissez Sunology si :</h4>
                  </div>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>→ Vous voulez l&apos;installation la plus rapide</li>
                    <li>→ Vous préférez le WiFi natif sans boîtier</li>
                    <li>→ Vous avez un petit balcon (panneau plus compact)</li>
                    <li>→ La certification CE complète vous rassure</li>
                  </ul>
                  <a href="https://sunology.eu/products/play2-kit-solaire" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4 text-xs">Voir le Sunology PLAY2 &rarr;</a>
                </div>
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <div className="flex items-start gap-4 mb-3">
                    <ProductThumb src="/images/produits/beem-on-500-1.png" alt="Beem On 500 Wc" href="/avis/beem-on-500w" size="lg" />
                    <h4 className="font-bold text-green mb-2">Choisissez Beem si :</h4>
                  </div>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>&rarr; Le prix est votre priorit&eacute; (429&euro; vs 599&euro;)</li>
                    <li>&rarr; Vous voulez le meilleur ratio &euro;/Wc (0,86&euro;)</li>
                    <li>&rarr; Vous voulez payer en 10x sans frais</li>
                    <li>&rarr; Vous pr&eacute;f&eacute;rez qu&apos;on s&apos;occupe des d&eacute;marches (ZEN)</li>
                  </ul>
                  <a href="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4 text-xs">Voir le Beem On 500 Wc &rarr;</a>
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
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Sunology ou Beem : lequel est le plus rentable chez vous ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur compare les kits selon votre département et votre orientation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes économies →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le leader du marché français</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le meilleur rapport qualit&eacute;-prix &agrave; 429&nbsp;&euro;</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
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
