import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Kit solaire balcon IKEA (STREAM) : disponible en France ?',
  description: 'Le kit solaire balcon IKEA × EcoFlow (STREAM Komplettset) est vendu en Allemagne via Svea Solar, pas en France au 5 novembre 2026. Prix et alternatives.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/ikea-solstrale-balcon',
  },
})

const faqData = [
  {
    question: 'Le kit solaire IKEA pour balcon est-il disponible en France ?',
    answer: 'Non. Au 5 novembre 2026, aucune page du site ikea.com/fr ne le propose (la page testée renvoie une erreur et la recherche ne trouve rien). Le kit est vendu en Allemagne sous le nom « STREAM Komplettset », avec Svea Solar comme vendeur et EcoFlow pour le matériel. Aucune date de lancement en France n’est annoncée.',
  },
  {
    question: 'Le kit balcon IKEA s’appelle-t-il Solstråle ?',
    answer: 'Non. Solstråle est le nom de l’offre IKEA de panneaux solaires sur toiture. Le kit balcon vendu en Allemagne s’appelle « STREAM Komplettset » (S ou L). Nous gardons l’ancienne adresse de cette page pour ne pas casser les liens existants.',
  },
  {
    question: 'Combien coûte le kit IKEA STREAM en Allemagne ?',
    answer: 'Le 5 novembre 2026, la boutique Svea Solar affichait le STREAM Komplettset S (2 panneaux de 500 W + micro-onduleur EcoFlow STREAM 800 W) à 369,90 € et le set L (batterie EcoFlow STREAM 5000 de 5,024 kWh + 2 ou 4 panneaux de 500 W) à partir de 1 649,90 €. Ces prix allemands bénéficient d’une TVA à 0 % sur le photovoltaïque jusqu’au 31 décembre 2026 : ils ne sont pas transposables tels quels en France.',
  },
  {
    question: 'Quel micro-onduleur utilise le kit IKEA ?',
    answer: 'Le set S utilise le micro-onduleur EcoFlow STREAM de 800 W. Le set L ajoute une batterie EcoFlow STREAM 5000 (5,024 kWh). C’est le même écosystème que la gamme STREAM vendue en France par EcoFlow, qui a remplacé le PowerStream.',
  },
  {
    question: 'Que choisir en France en attendant ?',
    answer: 'Comparez les kits vendus en France avec un SAV local : notre comparatif des meilleurs kits 2026 les classe par rentabilité et par usage. Il n’y a pas d’urgence à acheter : un kit ne se justifie que s’il correspond à votre balcon et à votre consommation.',
  },
];

export default function IkeaSolstralePage() {
  return (
    <>
      <SchemaArticle
        title="Kit solaire balcon IKEA (STREAM) : disponible en France ?"
        description="Le kit solaire balcon IKEA × EcoFlow (STREAM Komplettset), vendu en Allemagne via Svea Solar : prix, contenu, disponibilité en France."
        url="https://monbalconsolaire.fr/avis/ikea-solstrale-balcon"
        datePublished="2026-05-23"
        dateModified="2026-11-05"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Kit solaire IKEA balcon' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Kit solaire IKEA balcon' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon IKEA (STREAM)&nbsp;: disponible en France&nbsp;?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              En Allemagne, IKEA propose un kit solaire de balcon avec EcoFlow, vendu par Svea Solar sous le nom <strong>STREAM Komplettset</strong>. R&eacute;ponse courte&nbsp;: <strong>il n&apos;est pas vendu en France</strong> au 5 novembre 2026. Ce qu&apos;il contient, ce qu&apos;il co&ucirc;te en Allemagne, et pourquoi ce prix ne se transpose pas tel quel.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>23 mai 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span>
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
                  Le kit solaire IKEA pour balcon (STREAM Komplettset) est vendu <strong>en Allemagne</strong>, par Svea Solar. Au 5 novembre 2026, ikea.com/fr ne le propose pas et aucune date de lancement en France n&apos;est annonc&eacute;e&nbsp;: <strong>vous ne pouvez pas l&apos;acheter en France</strong>. Si vous voulez un kit maintenant, consultez nos <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline font-semibold">alternatives disponibles</Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que propose IKEA en Allemagne</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le nom <strong>Solstr&aring;le</strong> d&eacute;signe l&apos;offre IKEA de panneaux sur toiture&nbsp;; il n&apos;est pas utilis&eacute; pour le kit de balcon. En Allemagne, le kit balcon s&apos;appelle <strong>STREAM Komplettset</strong> et se commande sur la boutique de Svea Solar (IKEA sert d&apos;interm&eacute;diaire). Prix relev&eacute;s le 5 novembre 2026&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">STREAM Komplettset S &mdash; 369,90 &euro;</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&bull; 2 panneaux de 500 W</li>
                    <li>&bull; Micro-onduleur EcoFlow STREAM 800 W</li>
                    <li>&bull; Pas de batterie</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">STREAM Komplettset L &mdash; d&egrave;s 1 649,90 &euro;</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&bull; Batterie EcoFlow STREAM 5000 (5,024 kWh)</li>
                    <li>&bull; 2 ou 4 panneaux de 500 W selon l&apos;option</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-stone mt-3">
                Prix allemands TTC, avec une TVA &agrave; 0&nbsp;% sur le photovolta&iuml;que en Allemagne jusqu&apos;au 31 d&eacute;cembre 2026&nbsp;: en France, le m&ecirc;me mat&eacute;riel achet&eacute; seul supporterait 20&nbsp;% de TVA. Nous n&apos;avons pas v&eacute;rifi&eacute; le set M ni d&apos;&eacute;ventuels prix IKEA Family.
              </p>
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
                      ['IKEA STREAM S (Allemagne, TVA 0 %)', '369,90 \u20ac', '1 000 Wc', '0,37 \u20ac', 'Non', 'Non'],
                      
                      ['Sunology PLAY (ex-PLAY 2)', '599 \u20ac', '515 W', '1,16 \u20ac', 'Non', 'Oui'],
                      ['Beem On 500 Wc', '429 \u20ac', '500 Wc', '0,86 \u20ac', 'Non', 'Pr\u00e9commande'],
                      
                      ['Zendure SolarFlow 800 Plus + 2 \u00d7 500 W', '719 \u20ac (promo)', '1 000 Wc', '0,72 \u20ac', '1,92 kWh', 'Oui'],
                    ].map(([kit, prix, puiss, ratio, bat, dispo], i) => (
                      <tr key={i} className={`border-b border-border-light ${i < 1 ? 'bg-amber-pale/10' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
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
                Le set S affiche un prix au watt tr&egrave;s bas, mais c&apos;est un prix allemand avec une TVA &agrave; 0&nbsp;%, pour 1&nbsp;000&nbsp;Wc (2 panneaux) qui demandent plus de place qu&apos;un kit mono-panneau. Et surtout&nbsp;: <strong>pas achetable en France</strong>. Prix fran&ccedil;ais relev&eacute;s sur les sites des fabricants le 5 novembre 2026.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime (sur le papier)</h2>
              <div className="space-y-3">
                {[
                  { t: 'Prix bas en Allemagne : 369,90 \u20ac pour 1 000 Wc', d: 'Le set S revient \u00e0 0,37 \u20ac/Wc, mais avec la TVA allemande \u00e0 0 % sur le photovolta\u00efque (jusqu\u2019au 31/12/2026). Le m\u00eame calcul n\u2019est pas transposable en France.' },
                  { t: 'Mat\u00e9riel EcoFlow', d: 'Le micro-onduleur est l\u2019EcoFlow STREAM, la gamme qui a remplac\u00e9 le PowerStream. L\u2019app EcoFlow est l\u2019une des plus abouties du march\u00e9.' },
                  { t: 'Version avec grosse batterie', d: 'Le set L (d\u00e8s 1 649,90 \u20ac) ajoute une batterie EcoFlow STREAM 5000 de 5,024 kWh. En France, l\u2019option batterie la plus proche est le Zendure SolarFlow 800 Plus (1,92 kWh, 719 \u20ac en pack avec 2 panneaux, prix promotionnel du 5 novembre 2026).' },
                  { t: 'Distribution IKEA = accessibilit\u00e9 grand public', d: 'Acheter un kit solaire chez IKEA rend le produit visible pour des millions de personnes qui n\'auraient jamais visit\u00e9 le site de Sunology.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">{p.t}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui nous inqui&egrave;te</h2>
              <div className="space-y-3">
                {[
                  { t: 'Pas disponible en France \u2014 et pas de date', d: 'IKEA dit vouloir s\'\u00e9tendre mais n\'a confirm\u00e9 aucun march\u00e9 ni aucun calendrier. La France a ses propres r\u00e8gles (NF C 15-100, d\u00e9claration \u00e0 Enedis) qui demandent une adaptation.' },
                  { t: 'Pas de SAV solaire IKEA en France', d: 'IKEA France n\'a pas de comp\u00e9tence solaire plug-and-play. Solstr\u00e5le (toiture) est g\u00e9r\u00e9 par Voltalia, pas par IKEA directement. Qui g\u00e8rera le SAV du kit balcon ? Pas clair.' },
                  { t: '1 000 Wc = 2 panneaux = besoin d\u2019espace', d: 'Le set S inclut 2 panneaux de 500 W. C\u2019est beaucoup pour un petit balcon. Sur un balcon standard (1-2 m de large), un seul panneau d\u2019environ 500 W (Sunology, Beem) est souvent le maximum.' },
                  { t: 'Garantie et conformit\u00e9 FR non confirm\u00e9es', d: 'Les certifications CE, la compatibilit\u00e9 avec la d\u00e9claration CACSI Enedis, et les conditions de garantie en France ne sont pas encore connues.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h3 className="font-bold text-sm mb-1 text-amber-dark">{p.t}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Le kit IKEA STREAM est <strong>int&eacute;ressant sur le papier</strong>&nbsp;: mat&eacute;riel EcoFlow, prix bas en Allemagne, distribution grand public. Mais au 5 novembre 2026, <strong>il n&apos;est pas vendu en France</strong>, et son prix allemand profite d&apos;une TVA &agrave; 0&nbsp;% qui n&apos;existe pas ici.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Si vous voulez un kit aujourd&apos;hui, comparez les mod&egrave;les vendus en France avec un SAV local dans notre <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline font-semibold">comparatif 2026</Link>. Rien ne presse&nbsp;: un kit ne se justifie que s&apos;il correspond &agrave; votre balcon et &agrave; votre consommation.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  <strong>On mettra cet article &agrave; jour d&egrave;s que le kit IKEA sera disponible en France.</strong> Inscrivez-vous pour &ecirc;tre pr&eacute;venu.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Kits vendus en France aujourd&apos;hui</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm group-hover:text-green transition-colors">Sunology PLAY (ex-PLAY 2)</h3>
                      <p className="text-xs text-charcoal-light mt-1">Le plus simple. 515 W, 599 &euro;, en stock (5 novembre 2026).</p>
                    </div>
                    <span className="font-mono font-bold text-green">ROI 6,2 ans</span>
                  </div>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm group-hover:text-green transition-colors">Beem On 500 Wc</h3>
                      <p className="text-xs text-charcoal-light mt-1">Le moins cher au watt. 429 &euro;, en pr&eacute;commande (exp&eacute;dition &agrave; partir de d&eacute;cembre 2026).</p>
                    </div>
                    <span className="font-mono font-bold text-green">ROI 4,7 ans</span>
                  </div>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm group-hover:text-green transition-colors">Zendure SolarFlow 800 Plus</h3>
                      <p className="text-xs text-charcoal-light mt-1">Avec batterie 1,92 kWh. 719 &euro; en pack avec 2 panneaux de 500 W (prix promotionnel du 5 novembre 2026).</p>
                    </div>
                    <span className="font-mono font-bold text-green">ROI 3,6 ans</span>
                  </div>
                </Link>
              </div>
            </section>

            <div className="my-8">
              <div className="card-lg text-center"><p className="text-sm text-charcoal-light mb-4">Pour choisir parmi les kits vendus en France&nbsp;:</p><Link href="/comparatif/meilleur-kit-solaire-2026" className="btn-primary text-sm inline-flex">Voir le comparatif des kits 2026 &rarr;</Link></div>
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
                <strong>M&eacute;thodologie :</strong> informations publiques IKEA Allemagne, fiches techniques EcoFlow, articles presse (T3, Heise, NeozOne, NoteBookCheck). Prix relev&eacute;s sur la boutique Svea Solar (Allemagne) le 5 novembre 2026&nbsp;; absence en France v&eacute;rifi&eacute;e sur ikea.com/fr le m&ecirc;me jour. Article ind&eacute;pendant, mis &agrave; jour d&egrave;s que le kit sera disponible en France. <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
