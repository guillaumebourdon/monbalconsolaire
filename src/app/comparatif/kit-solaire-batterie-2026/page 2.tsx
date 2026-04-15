import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Kit solaire avec batterie 2026 : comparatif stockage plug-and-play',
  description: 'Comparatif des kits solaires plug-and-play avec batterie en 2026 : Sunology PLAY MAX, Beem Battery, EcoFlow PowerStream. Prix, capacité, rentabilité.',
};

const faqData = [
  { question: 'Faut-il une batterie avec un kit solaire de balcon ?', answer: 'Non, ce n\'est pas indispensable. Sans batterie, vous consommez l\'électricité en temps réel (talon de consommation : frigo, box, veilles). Une batterie permet de stocker pour le soir mais coûte 500 à 1 400€ supplémentaires, ce qui allonge significativement le ROI.' },
  { question: 'Quelle est la batterie la moins chère pour un kit solaire ?', answer: 'La Sunology VAULT (700 Wh) est la plus accessible à ~580€ seule, ou 1 179€ en bundle avec le kit PLAY MAX. C\'est la solution de stockage la plus abordable du marché plug-and-play.' },
  { question: 'Combien d\'heures d\'autonomie offre une batterie solaire ?', answer: 'La VAULT de Sunology (700 Wh) offre environ 5 heures d\'autonomie pour le talon de consommation (frigo + box + veilles). La STOREY (2,2 kWh) peut couvrir une soirée complète.' },
  { question: 'Une batterie solaire est-elle rentable ?', answer: 'C\'est moins évident qu\'un kit seul. L\'investissement supplémentaire (500-1400€) ne se rentabilise que si vous augmentez significativement votre taux d\'autoconsommation. En pratique, le gain supplémentaire est de 30-60€/an, soit un ROI de 8 à 20+ ans sur la batterie seule.' },
];

export default function BatteriePage() {
  return (
    <>
      <SchemaArticle title="Kit solaire avec batterie 2026 : comparatif stockage" description="Comparatif des solutions de stockage solaire plug-and-play en 2026." url="https://monbalconsolaire.fr/comparatif/kit-solaire-batterie-2026" datePublished="2026-03-31" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kits avec batterie' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Kit solaire avec batterie 2026 : comparatif stockage plug-and-play</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Stocker l&apos;énergie solaire pour le soir, c&apos;est tentant. Mais est-ce vraiment rentable ? Comparatif des solutions de stockage Sunology, Beem et EcoFlow.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>31 mars 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
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
                  <h4 className="font-bold text-green mb-2">Sans batterie (kit seul)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Investissement : <span className="font-mono font-medium">599€</span></p>
                    <p>Autoconsommation : <span className="font-mono font-medium">~40%</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-green">~97€</span></p>
                    <p>ROI : <span className="font-mono font-medium">4,3 ans</span></p>
                    <p>Éco. sur 25 ans : <span className="font-mono font-medium text-green">~2 400€</span></p>
                  </div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">Avec batterie (kit + VAULT)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Investissement : <span className="font-mono font-medium">1 179€</span></p>
                    <p>Autoconsommation : <span className="font-mono font-medium">~70%</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-amber-dark">~135€</span></p>
                    <p>ROI : <span className="font-mono font-medium">6,1 ans</span></p>
                    <p>Éco. sur 25 ans : <span className="font-mono font-medium text-amber-dark">~3 375€</span></p>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">La batterie ajoute ~38€/an d&apos;économies supplémentaires, pour un surcoût de 580€. Le ROI de la batterie seule est donc de <span className="data-highlight">~15 ans</span>. C&apos;est rentable sur la durée de vie, mais beaucoup moins intéressant que le kit seul.</p>
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
                      ['Sunology VAULT', '700 Wh', '~580€', '829€/kWh', '~5h', 'Nomade + plug-and-play', true],
                      ['Sunology STOREY', '2,2 kWh', '1 390€', '632€/kWh', '~15h', 'Fixe plug-and-play', false],
                      ['Beem Battery', '2,2 kWh', '~5 500€**', '2 500€/kWh', '~15h', 'Fixe plug-and-play', false],
                      ['EcoFlow PowerStream', '2 kWh', '~1 800€***', '900€/kWh', '~13h', 'Modulaire', false],
                    ].map(([n, c, p, r, a, t, best], i) => (
                      <tr key={i} className={`border-b border-border-light ${best ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{n} {best && <span className="badge-green ml-2 text-[10px]">Meilleur prix</span>}</td>
                        <td className="text-center p-3 font-mono text-sm">{c}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{p}</td>
                        <td className="text-center p-3 font-mono text-sm">{r}</td>
                        <td className="text-center p-3">{a}</td>
                        <td className="text-center p-3 text-xs">{t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">* Autonomie estimée pour un talon de consommation de 140W. ** Prix du bundle kit + batterie Beem (6 190€ - 690€ pour le kit seul estimé). *** Prix du bundle batterie + micro-onduleur EcoFlow, sans panneau.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre sélection détaillée</h2>
              <div className="space-y-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-green mb-2">Meilleur rapport qualité/prix</div><h3 className="font-bold text-xl">Sunology PLAY MAX</h3><p className="text-sm text-stone">Kit 450W + batterie VAULT 700 Wh — Plug-and-play</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-green">1 179 €</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le PLAY MAX est le bundle le plus accessible du marché : le kit PLAY2 (450W) + la batterie nomade VAULT (700 Wh) pour 1 179€. La VAULT est compacte, portable (utilisable en camping/pique-nique), et offre ~5 heures d&apos;autonomie sur le talon de consommation.</p>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points forts</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Le bundle le moins cher du marché</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Batterie nomade : utilisable en extérieur (4 ports USB/AC)</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Installation identique au PLAY2 (1 min + branchement batterie)</li>
                  </ul>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points faibles</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> 700 Wh = seulement ~5h d&apos;autonomie (ne couvre pas une nuit complète)</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> La batterie ne communique pas avec le panneau (pas de gestion intelligente)</li>
                  </ul>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-amber mb-2">Plus de capacité</div><h3 className="font-bold text-xl">Sunology STOREY</h3><p className="text-sm text-stone">Batterie fixe 2,2 kWh — Compatible PLAY2</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">1 390 €</div><div className="text-xs text-stone">(batterie seule)</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">La STOREY est la solution fixe de Sunology : 2,2 kWh de capacité, branchée sur une prise, elle stocke le surplus solaire pour une utilisation le soir et la nuit. C&apos;est 3x la capacité de la VAULT, avec une gestion plus intelligente de la charge/décharge.</p>
                  <p className="text-sm text-charcoal-light mt-2"><strong>Le calcul :</strong> kit PLAY2 (599€) + STOREY (1 390€) = 1 989€ au total. Avec ~160€/an d&apos;économies (autoconsommation ~75%), le ROI est de ~12 ans. C&apos;est rentable sur 25 ans mais loin d&apos;un kit seul.</p>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-amber mb-2">Modulaire</div><h3 className="font-bold text-xl">EcoFlow PowerStream</h3><p className="text-sm text-stone">Système modulaire batterie + micro-onduleur</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">~1 800 €</div><div className="text-xs text-stone">(sans panneau)</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le PowerStream d&apos;EcoFlow est une approche différente : un micro-onduleur intelligent qui gère la charge/décharge automatiquement selon votre consommation en temps réel. Compatible avec les batteries portables EcoFlow (DELTA, RIVER). Le système est modulaire mais le coût total est élevé.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict : avec ou sans batterie ?</h2>
              <div className="space-y-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-1">Pour 80% des gens → Kit seul (sans batterie)</h4>
                  <p className="text-sm text-charcoal-light">Le meilleur ROI, de loin. Commencez par un <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">kit Sunology PLAY2 ou Beem On à 599€</Link>. Vous pouvez toujours ajouter une batterie plus tard si le besoin se fait sentir.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-1">Pour les absents la journée → PLAY MAX (1 179€)</h4>
                  <p className="text-sm text-charcoal-light">Si vous travaillez en journée et consommez principalement le soir, le bundle PLAY MAX avec la VAULT offre un bon compromis prix/capacité.</p>
                </div>
                <div className="card-lg">
                  <h4 className="font-bold mb-1">Pour les enthousiastes → STOREY (1 989€ avec kit)</h4>
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
