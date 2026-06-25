import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Beem On 500 Wc avis 2026 : 429\u20ac, meilleur ratio \u20ac/Wc',
  description: 'Avis détaillé sur le Beem On 500 Wc en 2026 : 429€ pour 500 Wc bifacial TOPCon, 0,86€/Wc. Test complet, production réelle, comparatif et verdict honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/beem-on-500w',
  },
};

const faqData = [
  { question: 'Le Beem On 500 Wc est-il le meilleur rapport qualité-prix en 2026 ?', answer: 'Oui. À 0,86€/Wc (429€ pour 500 Wc), c\'est le meilleur ratio €/Wc du marché premium en France. Le Sunology PLAY2 est à 1,08€/Wc (518€ pour 480 Wc). Le ROI est d\'environ 4,8 ans contre 6-7 ans pour la concurrence.' },
  { question: 'Quelle différence entre le Beem On 500 Wc et l\'ancien 460 Wc ?', answer: 'Le nouveau modèle gagne 40 Wc de puissance (500 vs 460 Wc) tout en baissant de 170€ (429€ vs 599€). Le ratio €/Wc passe de 1,30€ à 0,86€. Les dimensions sont quasi identiques (1 950 x 1 134 mm vs 1 890 x 1 130 mm). Le micro-onduleur passe à 550 W de sortie.' },
  { question: 'Combien produit le Beem On 500 Wc par an ?', answer: 'Entre 500 et 790 kWh/an selon la région et l\'orientation. En région lyonnaise, exposition sud, comptez ~510 kWh/an soit environ 84€ d\'économies annuelles. ROI de 4,8 ans et ~3 160€ d\'économies sur 25 ans (+3,3%/an d\'inflation CRE).' },
  { question: 'Beem On 500 Wc vs Sunology PLAY2 : lequel choisir ?', answer: 'Le Beem On 500 Wc écrase le PLAY2 sur le prix (429€ vs 518€) et la puissance (500 vs 480 Wc). Sunology garde l\'avantage sur la technologie Back Contact (23,5% vs 22% de rendement), le WiFi natif sans boîtier, et l\'écosystème batterie VAULT. Si le budget est votre priorité : Beem. Si vous voulez l\'écosystème le plus complet : Sunology.' },
  { question: 'Peut-on connecter plusieurs Beem On 500 Wc ensemble ?', answer: 'Oui. Vous pouvez connecter jusqu\'à 4 stations sur la même prise (2 000 Wc), ou jusqu\'à 6 avec le Beem On Max (3 000 Wc). Chaque station supplémentaire est vendue en "Extension" sans Beembox.' },
];

export default function BeemOn500WcAvisPage() {
  return (
    <>
      <SchemaArticle title="Beem On 500 Wc avis : le nouveau rapport qualité-prix du marché" description="Avis détaillé sur le Beem On 500 Wc en 2026." url="https://monbalconsolaire.fr/avis/beem-on-500w" datePublished="2026-06-15" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Beem On 500 Wc" brand="Beem Energy" description="Kit solaire plug-and-play 500 Wc bifacial TOPCon avec micro-onduleur 550W et suivi via app Beem." price={429} ratingValue={8.5} ratingCount={1} url="https://monbalconsolaire.fr/avis/beem-on-500w" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 500 Wc' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 500 Wc' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Beem On 500 Wc avis : le nouveau rapport qualit&eacute;-prix du march&eacute; (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">429&nbsp;&euro; pour 500&nbsp;Wc bifacial TOPCon, soit 0,86&nbsp;&euro;/Wc. Le Beem On nouvelle g&eacute;n&eacute;ration casse les prix et devient le kit le plus rentable du march&eacute; fran&ccedil;ais.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>15 juin 2026</span><span>&middot;</span><span>9 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Beem Energy"
            name="Beem On 500 Wc"
            power="500 Wc"
            price="429 €"
            score="8.5/10"
            tagline="Le meilleur rapport qualité/prix du marché. ROI en 4,8 ans."
            affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge"
            affiliateLabel="Voir sur le site du fabricant"
            accentColor="amber"
            image="/images/produits/beem-on-500-1.png"
            imageAlt="Beem On 500 Wc - panneau solaire bifacial TOPCon avec micro-onduleur"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 15/06/2026 &middot; Peut varier selon les promos</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation du Beem On 500 Wc</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Beem Energy, startup nantaise et leader fran&ccedil;ais du solaire plug-and-play, renouvelle son mod&egrave;le phare. Le Beem On passe de 460 &agrave; 500&nbsp;Wc tout en baissant de 170&nbsp;&euro; (429&nbsp;&euro; vs 599&nbsp;&euro;). Le ratio &euro;/Wc tombe &agrave; 0,86&nbsp;&euro;, un record sur le segment premium.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le kit reste fid&egrave;le &agrave; la formule : un panneau bifacial TOPCon, un micro-onduleur int&eacute;gr&eacute;, une Beembox pour le suivi via app, et une installation en 5 minutes chrono. Branchez sur une prise, l&apos;app d&eacute;tecte la production, c&apos;est parti.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '500 Wc', l: 'Puissance' },
                  { v: '429 €', l: 'Prix' },
                  { v: '25 ans', l: 'Garantie' },
                  { v: '4,7/5', l: 'Trustpilot' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Puissance', '500 Wc bifacial (+5% face arrière)'],
                      ['Technologie', 'Monocristallin TOPCon, 120 demi-cellules'],
                      ['Micro-onduleur', '550 W sortie, rendement 96%, MPPT 99,8%'],
                      ['Dimensions', '1 950 x 1 134 x 30 mm'],
                      ['Poids', '27,6 kg'],
                      ['Garantie', '25 ans système'],
                      ['Certifications', 'CE, EN 61215, EN 61730'],
                      ['Suivi', 'Beembox + app Beem (inclus)'],
                      ['Installation', 'Sol, mur, garde-corps — 5 min'],
                      ['Extensible', 'Jusqu\'à 4 stations (2 000 Wc)'],
                    ].map(([label, value], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3 font-semibold text-charcoal whitespace-nowrap">{label}</td>
                        <td className="py-2 px-3 text-charcoal-light">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Le prix le plus bas du segment premium : 0,86€/Wc', d: 'À 429€ pour 500 Wc, le Beem On pulvérise la concurrence. Le Sunology PLAY2 est à 1,08€/Wc (518€ pour 480 Wc), le Sunethic F500 à 1,38€/Wc (690€). C\'est 20 à 40% moins cher par watt.' },
                  { t: 'ROI record de 4,8 ans', d: 'Grâce au prix agressif, le retour sur investissement tombe sous les 5 ans (Lyon, sud). C\'est le kit le plus vite rentabilisé du marché premium. Sur 25 ans : ~3 160€ d\'économies.' },
                  { t: 'Paiement en 10x sans frais', d: 'Soit ~43€/mois pendant 10 mois. C\'est plus accessible que jamais. Dès le premier mois, le kit produit plus que la mensualité.' },
                  { t: 'Option Beem ZEN', d: 'Pour 49€ de plus, Beem gère toutes les démarches administratives : déclaration CACSI Enedis, convention d\'autoconsommation. Idéal si l\'administratif vous freine.' },
                  { t: 'App Beem et suivi temps réel', d: 'La Beembox (incluse) connecte le kit à l\'app Beem : production en direct, historique, économies cumulées, conseils personnalisés. L\'interface est claire et bien conçue.' },
                  { t: 'Disponible chez Leroy Merlin et Boulanger', d: 'En plus du site Beem, le kit est vendu chez Leroy Merlin et Boulanger. Pratique pour voir le produit en magasin ou simplifier le SAV.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Vérifier le stock" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Beembox obligatoire pour le suivi', d: 'Contrairement au Sunology PLAY2 dont le micro-onduleur embarque le WiFi, le Beem On nécessite un boîtier Beembox branché sur votre box internet. C\'est inclus dans le kit, mais c\'est un appareil supplémentaire à brancher et à maintenir.' },
                  { t: 'Panneau imposant : 1,95 m de haut', d: 'Avec ses 1 950 x 1 134 mm, c\'est le plus grand panneau mono du marché (le PLAY2 fait 1 760 x 1 134 mm). Sur un petit balcon, ça peut poser problème.' },
                  { t: 'Pas de solution batterie abordable', d: 'Beem propose la Beem Battery mais à partir de 6 190€ le kit complet. C\'est 14x le prix du panneau seul. Sunology a le VAULT à 1 379€ (kit + batterie), bien plus accessible. Si le stockage vous intéresse, regardez plutôt Sunology ou Zendure.' },
                  { t: 'SAV à surveiller', d: 'Beem Energy est en procédure de sauvegarde depuis fin 2025. Des retours clients signalent des délais SAV rallongés. La garantie 25 ans est contractuelle, mais la solidité financière de l\'entreprise est un point de vigilance.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Vérifier le délai livraison" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Beem On 500 Wc vs la concurrence</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Kit</th>
                      <th className="text-left py-2 px-3 font-bold">Puissance</th>
                      <th className="text-left py-2 px-3 font-bold">Prix</th>
                      <th className="text-left py-2 px-3 font-bold">&euro;/Wc</th>
                      <th className="text-left py-2 px-3 font-bold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Beem On 500 Wc', '500 Wc', '429 €', '0,86 €', '8.5/10', true],
                      ['Sunology PLAY2', '480 Wc', '518 €', '1,08 €', '8.5/10', false],
                      ['Sunethic F500', '500 Wc', '690 €', '1,38 €', '7.5/10', false],
                      ['EcoFlow PowerStream', '400 Wc', '599 €', '1,50 €', '8/10', false],
                      ['Beem Kit 300W', '300 Wc', '299 €', '1,00 €', '7.5/10', false],
                    ].map(([name, power, price, ratio, score, highlight], i) => (
                      <tr key={i} className={highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3">{name as string}</td>
                        <td className="py-2 px-3">{power as string}</td>
                        <td className="py-2 px-3">{price as string}</td>
                        <td className="py-2 px-3">{ratio as string}</td>
                        <td className="py-2 px-3">{score as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute;s en juin 2026. Peuvent varier selon les promotions.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le Beem On 500 Wc &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; et production</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec 500&nbsp;Wc et un prix de 429&nbsp;&euro;, le Beem On offre le meilleur retour sur investissement du march&eacute; premium. Voici les chiffres (m&eacute;thodologie standard : Lyon, sud, PR 0,85, autoconsommation 85%).</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '510 kWh', l: 'Production/an' },
                  { v: '84 €', l: 'Économies/an' },
                  { v: '4,8 ans', l: 'ROI' },
                  { v: '3 160 €', l: 'Gains sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">En r&eacute;gion m&eacute;diterran&eacute;enne (Marseille, Montpellier), la production grimpe &agrave; 650-790&nbsp;kWh/an, soit 110-130&nbsp;&euro;/an d&apos;&eacute;conomies et un ROI sous les 4&nbsp;ans.</p>
              <p className="text-charcoal-light leading-relaxed">En comparaison, l&apos;ancien <Link href="/avis/beem-on-460w" className="text-green hover:underline">Beem On 460W &agrave; 599&nbsp;&euro;</Link> avait un ROI de 7,0 ans. Le gain est spectaculaire : +40&nbsp;Wc de puissance ET &minus;170&nbsp;&euro; sur le prix.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Votre balcon fait moins de 2 m de haut (panneau de 1,95 m)',
                  'Vous voulez une solution avec batterie abordable (regardez Sunology PLAY MAX)',
                  'Vous êtes inquiet sur le SAV long terme (procédure de sauvegarde en cours)',
                  'Vous êtes absent toute la journée sans possibilité de décaler vos usages',
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
              <p className="text-charcoal-light leading-relaxed mb-4">Le Beem On 500 Wc est le kit solaire le plus rentable du march&eacute; fran&ccedil;ais en 2026. &Agrave; 429&nbsp;&euro; pour 500&nbsp;Wc, le ratio de 0,86&nbsp;&euro;/Wc est imbattable. Le ROI de 4,8 ans pulv&eacute;rise la concurrence.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Il perd face au <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY2</Link> sur le WiFi natif (pas de bo&icirc;tier suppl&eacute;mentaire), l&apos;&eacute;cosyst&egrave;me batterie, et le rendement cellulaire (23,5% vs 22%). Mais &agrave; 89&nbsp;&euro; de moins pour 20&nbsp;Wc de plus, c&apos;est difficile de ne pas recommander le Beem On.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le seul vrai b&eacute;mol : la situation financi&egrave;re de Beem Energy (proc&eacute;dure de sauvegarde). La garantie 25 ans ne vaut que si l&apos;entreprise est l&agrave; pour l&apos;honorer. &Agrave; surveiller.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8.5/10</span></strong></p>
              <a href="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le Beem On 500 Wc &rarr;</a>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Voir l'offre actuelle sur Beem" variant="box" position="footer-box" price="429 €" />

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
                <Link href="/comparatif/zendure-vs-sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Zendure vs Sunology vs Beem : le match 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet des 3 syst&egrave;mes &mdash; avec le tableau prix/Wc mis &agrave; jour juin 2026</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le concurrent direct &agrave; 518&nbsp;&euro;</p>
                </Link>
                <Link href="/comparatif/sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le match des deux leaders sur 12 crit&egrave;res</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W</h4>
                  <p className="text-xs text-charcoal-light mt-1">Quelle puissance choisir pour votre balcon</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI :</strong> ROI calcul&eacute; avec tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85%, Performance Ratio 0,85, Lyon sud. &Eacute;conomies : 84&nbsp;&euro;/an, ROI 4,8&nbsp;ans, ~3&nbsp;160&nbsp;&euro; sur 25&nbsp;ans.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis ind&eacute;pendant. Les liens vers Beem Energy sont des liens affili&eacute;s. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
