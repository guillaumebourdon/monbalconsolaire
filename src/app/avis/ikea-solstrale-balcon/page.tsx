import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'IKEA Solstr\u00e5le : le kit solaire IKEA pour balcon (2026)',
  description: 'IKEA lance un kit solaire plug-and-play pour balcon \u00e0 449 \u20ac (EcoFlow Stream). Specs, prix, disponibilit\u00e9 France, comparaison avec Sunology et Beem. Analyse compl\u00e8te.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/ikea-solstrale-balcon',
  },
};

const faqData = [
  {
    question: 'Le kit solaire IKEA pour balcon est-il disponible en France ?',
    answer: 'Non, pas encore (mai 2026). Le kit STREAM est actuellement vendu uniquement en Allemagne, en partenariat avec Svea Solar et EcoFlow. IKEA a annonc\u00e9 vouloir \u00e9tendre \u00e0 d\'autres march\u00e9s, mais aucune date n\'est confirm\u00e9e pour la France. En France, IKEA propose uniquement l\'offre Solstr\u00e5le pour toiture (panneaux sur toit, \u00e0 partir de 6 990 \u20ac).',
  },
  {
    question: 'Quelle est la diff\u00e9rence entre Solstr\u00e5le et le kit balcon IKEA ?',
    answer: 'Solstr\u00e5le est l\'offre IKEA pour panneaux solaires sur toiture en partenariat avec Voltalia (France). Le kit balcon STREAM est une offre s\u00e9par\u00e9e, plug-and-play, pour les balcons et terrasses, en partenariat avec EcoFlow (Allemagne uniquement). Les deux portent la marque IKEA mais sont des produits tr\u00e8s diff\u00e9rents.',
  },
  {
    question: 'Le kit IKEA STREAM vaut-il le coup par rapport \u00e0 Sunology ou Beem ?',
    answer: 'Sur le papier, le STREAM S (449 \u20ac pour 2 panneaux 450 W + micro-onduleur 800 W) est comp\u00e9titif. Mais sans disponibilit\u00e9 France, pas de SAV local, pas de garantie applicable facilement, et pas de d\u00e9claration CACSI simplifi\u00e9e. Si vous pouvez acheter aujourd\'hui, un Sunology PLAY 2 (599 \u20ac) ou un Beem On (599 \u20ac) reste le meilleur choix.',
  },
  {
    question: 'Quel micro-onduleur utilise le kit IKEA ?',
    answer: 'Le kit STREAM utilise un micro-onduleur EcoFlow Stream de 800 W. C\'est un partenariat IKEA \u00d7 EcoFlow. Le mod\u00e8le M inclut m\u00eame la batterie EcoFlow Stream Pro (1,92 kWh, sortie 1 200 W). C\'est techniquement le m\u00eame \u00e9cosyst\u00e8me que l\'EcoFlow PowerStream, rebrand\u00e9 pour IKEA.',
  },
  {
    question: 'Faut-il attendre le kit IKEA ou acheter maintenant ?',
    answer: 'N\'attendez pas. Chaque mois sans kit solaire = 6-12 \u20ac d\'\u00e9conomies perdues. Le kit IKEA n\'a pas de date de lancement France. Et quand il arrivera, il sera comparable aux Sunology/Beem d\u00e9j\u00e0 disponibles. Achetez maintenant et commencez \u00e0 \u00e9conomiser.',
  },
];

export default function IkeaSolstralePage() {
  return (
    <>
      <SchemaArticle
        title="IKEA Solstr\u00e5le : le kit solaire IKEA pour balcon"
        description="Analyse du kit solaire IKEA plug-and-play pour balcon."
        url="https://monbalconsolaire.fr/avis/ikea-solstrale-balcon"
        datePublished="2026-05-23"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'IKEA Solstr\u00e5le balcon' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              IKEA Solstr&aring;le : le kit solaire IKEA pour balcon
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              IKEA se lance dans le solaire de balcon avec un kit plug-and-play &agrave; <strong>449 &euro;</strong> en partenariat avec EcoFlow. Deux panneaux 450 W, micro-onduleur 800 W, et m&ecirc;me une version avec batterie. Sur le papier, c&apos;est s&eacute;duisant. Mais est-ce que &ccedil;a arrive en France ? Et est-ce que &ccedil;a vaut le coup face &agrave; Sunology et Beem ?
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>23 mai 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 border-l-4 border-l-amber mb-10">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{'\u26a0\ufe0f'}</span>
              <div>
                <h3 className="font-bold text-sm text-amber-dark mb-2">Important : pas encore disponible en France</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Le kit solaire IKEA pour balcon (STREAM) est actuellement vendu <strong>uniquement en Allemagne</strong>. Aucune date de lancement France n&apos;est confirm&eacute;e. Cet article analyse le produit pour vous pr&eacute;parer, mais <strong>vous ne pouvez pas l&apos;acheter aujourd&apos;hui en France</strong>. Si vous voulez un kit maintenant, consultez nos <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline font-semibold">alternatives disponibles</Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que propose IKEA</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                IKEA commercialise ses kits sous le nom <strong>STREAM</strong> (ne pas confondre avec Solstr&aring;le, qui est l&apos;offre toiture en France). Deux packs existent :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">STREAM S &mdash; 449 &euro;</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&bull; 2 panneaux rigides 450 W (900 W total)</li>
                    <li>&bull; Micro-onduleur EcoFlow Stream 800 W</li>
                    <li>&bull; C&acirc;bles MC4 pr&eacute;-c&acirc;bl&eacute;s (1,1 m)</li>
                    <li>&bull; Pas de batterie</li>
                    <li>&bull; <strong>0,50 &euro;/Wc</strong> &mdash; imbattable</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">STREAM M &mdash; 1 229 &euro;</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&bull; 2 panneaux rigides 450 W</li>
                    <li>&bull; Micro-onduleur EcoFlow Stream 800 W</li>
                    <li>&bull; <strong>Batterie EcoFlow Stream Pro 1,92 kWh</strong></li>
                    <li>&bull; Sortie AC 1 200 W</li>
                    <li>&bull; App EcoFlow pour le suivi</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-stone mt-3">
                Prix constat&eacute;s en Allemagne (mai 2026). -15 % pour les membres IKEA Family.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {[
                      ['Puissance panneaux', '2 \u00d7 450 W = 900 Wc'],
                      ['Micro-onduleur', 'EcoFlow Stream 800 W'],
                      ['Technologie', 'Panneaux rigides, connecteurs MC4'],
                      ['Batterie (mod\u00e8le M)', '1,92 kWh LiFePO4 (EcoFlow Stream Pro)'],
                      ['Sortie AC', '800 W (S) / 1 200 W (M)'],
                      ['App de suivi', 'EcoFlow App (iOS/Android)'],
                      ['Garantie', 'Garantie IKEA (d\u00e9tails non confirm\u00e9s pour la France)'],
                      ['Disponibilit\u00e9 France', 'Non \u2014 Allemagne uniquement'],
                      ['Prix STREAM S', '449 \u20ac (381 \u20ac avec IKEA Family -15 %)'],
                      ['Prix STREAM M', '1 229 \u20ac (1 045 \u20ac avec IKEA Family)'],
                    ].map(([label, val], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold w-2/5">{label}</td>
                        <td className="p-3 font-mono text-xs">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparaison avec les kits disponibles en France</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-xs border-collapse min-w-[550px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Kit</th>
                      <th className="text-center p-2.5 font-semibold">Prix</th>
                      <th className="text-center p-2.5 font-semibold">Puissance</th>
                      <th className="text-center p-2.5 font-semibold">&euro;/Wc</th>
                      <th className="text-center p-2.5 font-semibold">Batterie</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Dispo FR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['IKEA STREAM S', '449 \u20ac', '900 Wc', '0,50 \u20ac', 'Non', 'Non'],
                      ['IKEA STREAM M', '1 229 \u20ac', '900 Wc', '1,37 \u20ac', '1,92 kWh', 'Non'],
                      ['Sunology PLAY 2', '599 \u20ac', '450 Wc', '1,33 \u20ac', 'Non', 'Oui'],
                      ['Beem On 460W', '599 \u20ac', '460 Wc', '1,30 \u20ac', 'Non', 'Oui'],
                      ['Beem Kit 300W', '299 \u20ac', '300 Wc', '1,00 \u20ac', 'Non', 'Oui'],
                      ['Zendure SolarFlow', '900 \u20ac', '840 W + panneaux', '1,07 \u20ac', '1,92 kWh', 'Oui'],
                    ].map(([kit, prix, puiss, ratio, bat, dispo], i) => (
                      <tr key={i} className={`border-b border-border-light ${i < 2 ? 'bg-amber-pale/10' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">{kit}</td>
                        <td className="text-center p-2.5 font-mono">{prix}</td>
                        <td className="text-center p-2.5 font-mono">{puiss}</td>
                        <td className="text-center p-2.5 font-mono">{ratio}</td>
                        <td className="text-center p-2.5">{bat}</td>
                        <td className={`text-center p-2.5 font-semibold ${dispo === 'Oui' ? 'text-green' : 'text-amber-dark'}`}>{dispo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                Le STREAM S &agrave; 0,50 &euro;/Wc est <strong>le ratio le plus bas du march&eacute;</strong>. Mais c&apos;est 900 Wc (2 panneaux), ce qui n&eacute;cessite plus d&apos;espace qu&apos;un kit mono-panneau. Et surtout : <strong>pas achetable en France</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime (sur le papier)</h2>
              <div className="space-y-3">
                {[
                  { t: 'Prix agressif : 449 \u20ac pour 900 Wc', d: 'C\'est 0,50 \u20ac/Wc, soit 2,5\u00d7 moins cher que Sunology (1,33 \u20ac/Wc). IKEA joue la carte du volume et de la marge faible.' },
                  { t: 'Partenariat EcoFlow = technologie \u00e9prouv\u00e9e', d: 'Le micro-onduleur Stream est bas\u00e9 sur le PowerStream d\'EcoFlow, d\u00e9j\u00e0 test\u00e9 et reconnu. L\'app EcoFlow est la meilleure du march\u00e9.' },
                  { t: 'Version avec batterie 1,92 kWh', d: 'Le STREAM M (1 229 \u20ac) inclut la batterie EcoFlow Stream Pro. C\'est comparable au Zendure SolarFlow (900 \u20ac pour 840 W + 1,92 kWh).' },
                  { t: 'Distribution IKEA = accessibilit\u00e9 grand public', d: 'Acheter un kit solaire chez IKEA rend le produit visible pour des millions de personnes qui n\'auraient jamais visit\u00e9 le site de Sunology.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1 text-green">{p.t}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui nous inqui&egrave;te</h2>
              <div className="space-y-3">
                {[
                  { t: 'Pas disponible en France \u2014 et pas de date', d: 'IKEA dit vouloir s\'\u00e9tendre mais n\'a confirm\u00e9 aucun march\u00e9 ni aucun calendrier. La France a des normes sp\u00e9cifiques (NF C 15-100, CACSI Enedis) qui n\u00e9cessitent une adaptation.' },
                  { t: 'Pas de SAV solaire IKEA en France', d: 'IKEA France n\'a pas de comp\u00e9tence solaire plug-and-play. Solstr\u00e5le (toiture) est g\u00e9r\u00e9 par Voltalia, pas par IKEA directement. Qui g\u00e8rera le SAV du kit balcon ? Pas clair.' },
                  { t: '900 Wc = 2 panneaux = besoin d\'espace', d: 'Le STREAM S inclut 2 panneaux de 450 W. C\'est beaucoup pour un petit balcon. Sur un balcon standard (1-2 m de large), un seul panneau 450 Wc (Sunology, Beem) est souvent le maximum.' },
                  { t: 'Garantie et conformit\u00e9 FR non confirm\u00e9es', d: 'Les certifications CE, la compatibilit\u00e9 avec la d\u00e9claration CACSI Enedis, et les conditions de garantie en France ne sont pas encore connues.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">{p.t}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict : n&apos;attendez pas IKEA</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Le kit IKEA STREAM est <strong>prometteur sur le papier</strong> : prix agressif, technologie EcoFlow, distribution grand public. Mais en mai 2026, <strong>vous ne pouvez pas l&apos;acheter en France</strong>. Et chaque mois d&apos;attente, c&apos;est 6-12 &euro; d&apos;&eacute;conomies perdues.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Les kits <Link href="/avis/sunology-play-2" className="text-green hover:underline font-semibold">Sunology PLAY 2</Link> et <Link href="/avis/beem-on-460w" className="text-green hover:underline font-semibold">Beem On 460W</Link> sont disponibles imm&eacute;diatement, avec SAV fran&ccedil;ais, garantie 25 ans, et d&eacute;claration CACSI simplifi&eacute;e. Si IKEA arrive en France, il sera toujours temps de comparer.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  <strong>On mettra cet article &agrave; jour d&egrave;s que le kit IKEA sera disponible en France.</strong> Inscrivez-vous pour &ecirc;tre pr&eacute;venu.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">En attendant IKEA : les meilleures alternatives</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology PLAY 2</h4>
                      <p className="text-xs text-charcoal-light mt-1">Le plus simple. 450 Wc, 599 &euro;, installation 1 min. Disponible maintenant.</p>
                    </div>
                    <span className="font-mono font-bold text-green">7,1 ans</span>
                  </div>
                </Link>
                <Link href="/avis/beem-kit-300w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm group-hover:text-green transition-colors">Beem Kit 300W</h4>
                      <p className="text-xs text-charcoal-light mt-1">Le moins cher. 299 &euro;, ROI le plus rapide. Id&eacute;al pour tester.</p>
                    </div>
                    <span className="font-mono font-bold text-green">5,5 ans</span>
                  </div>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm group-hover:text-green transition-colors">Zendure SolarFlow</h4>
                      <p className="text-xs text-charcoal-light mt-1">Avec batterie 1,92 kWh. 900 &euro; tout compris. Le rival direct du STREAM M.</p>
                    </div>
                    <span className="font-mono font-bold text-green">5,3 ans</span>
                  </div>
                </Link>
              </div>
            </section>

            <div className="my-8">
              <AffiliateCTA productName="Sunology PLAY 2" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/play2-kit-solaire" label="Voir le Sunology PLAY 2 (disponible)" variant="box" position="article_bottom" price="599 \u20ac" />
            </div>

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
                <strong>M&eacute;thodologie :</strong> informations publiques IKEA Allemagne, fiches techniques EcoFlow, articles presse (T3, Heise, NeozOne, NoteBookCheck). Prix en euros constat&eacute;s en Allemagne (mai 2026). Article ind&eacute;pendant, mis &agrave; jour d&egrave;s que le kit sera disponible en France. <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
