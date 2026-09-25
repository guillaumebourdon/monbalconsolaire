import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Multi-panneaux solaires balcon : s&eacute;rie ou parall&egrave;le ? C&acirc;blage et disjoncteur',
  description: 'Comment brancher 2 panneaux sur un balcon : s&eacute;rie interdit, parall&egrave;le DC ou AC, micro-onduleur double-MPPT, c&acirc;bles MC4, disjoncteur 16A — guide pratique 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/multi-panneaux-serie-parallele',
  },
};

const faqData = [
  {
    question: 'Peut-on brancher deux panneaux en s&eacute;rie sur un balcon ?',
    answer: 'Non. En s&eacute;rie, les tensions s\'additionnent : 2 panneaux de 40V DC = 80V DC. Cette tension ne peut pas &ecirc;tre inject&eacute;e sur une prise 230V avec un simple micro-onduleur plug-and-play. Les kits balcon fonctionnent tous en parall&egrave;le (DC ou AC). La s&eacute;rie DC est r&eacute;serv&eacute;e aux onduleurs string des installations toiture.',
  },
  {
    question: 'Quelle est la diff&eacute;rence entre un micro-onduleur mono et double-MPPT ?',
    answer: 'Un micro-onduleur simple (1 entr&eacute;e) g&egrave;re un seul panneau. Un double-MPPT (APsystems EZ1-H, Hoymiles HMS-800) a 2 entr&eacute;es DC ind&eacute;pendantes : chaque panneau est optimis&eacute; s&eacute;par&eacute;ment, m&ecirc;me si l\'un est &agrave; l\'ombre. C\'est la solution id&eacute;ale pour 2 panneaux sur un seul bo&icirc;tier avec une seule prise.',
  },
  {
    question: 'Peut-on brancher 2 micro-onduleurs sur la m&ecirc;me prise ?',
    answer: 'Non, pas sur la m&ecirc;me prise. Chaque micro-onduleur se branche sur sa propre prise 16A. Si vous utilisez une multiprise, elle doit &ecirc;tre &eacute;tanche (IP44 minimum), c&acirc;bl&eacute;e en dur sur un circuit d&eacute;di&eacute;, et la somme des puissances AC ne doit pas d&eacute;passer 800W (limite plug-and-play).',
  },
  {
    question: 'Quel disjonteur faut-il pour 2 panneaux solaires ?',
    answer: 'Un disjoncteur 16A sur circuit d&eacute;di&eacute; suffit pour 600-800W inject&eacute;s. La norme NF C 15-100 impose un circuit ind&eacute;pendant pour les productions locales. En pratique, votre tableau &eacute;lectrique doit disposer d\'un disjoncteur 16A libre, ou vous devez en faire installer un par un &eacute;lectricien.',
  },
  {
    question: 'Les c&acirc;bles MC4 sont-ils standard entre toutes les marques ?',
    answer: 'Oui et non. Les connecteurs MC4 sont standardis&eacute;s m&eacute;caniquement (ils s\'embo&icirc;tent) mais les normes &eacute;lectriques peuvent diff&eacute;rer l&eacute;g&egrave;rement entre fabricants. En pratique, les c&acirc;bles fournis avec les kits sont compatibles. Pour une extension, utilisez des c&acirc;bles MC4 certifi&eacute;s TUV/UL, section 4mm&sup2; minimum pour les modules jusqu&apos;&agrave; 500W.',
  },
  {
    question: 'Que se passe-t-il si un panneau est &agrave; l\'ombre quand ils sont en parall&egrave;le DC ?',
    answer: 'Avec un micro-onduleur &agrave; double-MPPT ind&eacute;pendant (EZ1-H, HMS-800), le panneau ombrag&eacute; est g&eacute;r&eacute; s&eacute;par&eacute;ment : sa production baisse mais n&apos;affecte pas l&apos;autre panneau. Avec un micro-onduleur &agrave; MPPT partag&eacute;, l&apos;ombre tire les deux panneaux vers le bas. Avec 2 micro-onduleurs s&eacute;par&eacute;s, l&apos;ind&eacute;pendance est totale.',
  },
];

export default function MultiPanneauxSeriePage() {
  return (
    <>
      <SchemaArticle
        title="Multi-panneaux solaires balcon : s&eacute;rie ou parall&egrave;le ? C&acirc;blage et disjoncteur"
        description="Comment brancher 2 panneaux sur un balcon : s&eacute;rie, parall&egrave;le DC ou AC, micro-onduleur double-MPPT, c&acirc;bles MC4, disjoncteur 16A."
        url="https://monbalconsolaire.fr/blog/multi-panneaux-serie-parallele"
        datePublished="2026-09-25"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Multi-panneaux : s&eacute;rie ou parall&egrave;le ?' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Multi-panneaux : s&eacute;rie ou parall&egrave;le ?' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">C&acirc;blage &amp; technique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Multi-panneaux solaires sur balcon&nbsp;: s&eacute;rie ou parall&egrave;le&nbsp;? Le guide du c&acirc;blage
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Vous avez un ou deux panneaux et vous vous demandez comment les brancher correctement&nbsp;? S&eacute;rie vs parall&egrave;le DC vs parall&egrave;le AC, micro-onduleur double-MPPT, c&acirc;bles MC4, disjoncteur&nbsp;: voici les r&egrave;gles concr&egrave;tes pour une installation plug-and-play l&eacute;gale et performante.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>25 septembre 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="space-y-10">

            {/* Section 1 — La règle de base */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La r&egrave;gle de base&nbsp;: s&eacute;rie interdit sur prise 230V</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un panneau solaire de 400 Wc d&eacute;livre environ 30&ndash;40V en courant continu (DC). Si vous en branchez deux en s&eacute;rie, les tensions s&apos;additionnent&nbsp;: vous obtenez 60&ndash;80V DC. Cette tension est incompatible avec les micro-onduleurs plug-and-play con&ccedil;us pour des modules DC de 20&ndash;50V.
              </p>
              <div className="card bg-red-50 border-l-4 border-l-red-400 mb-4">
                <p className="text-sm font-semibold mb-1">&#10060; Ce qu&apos;on ne fait jamais sur balcon</p>
                <p className="text-sm text-charcoal-light">
                  Brancher 2 panneaux en s&eacute;rie DC (borne + d&apos;un panneau sur borne &minus; de l&apos;autre). La tension DC r&eacute;sultante est trop &eacute;lev&eacute;e pour une prise 230V et pour les micro-onduleurs plug-and-play. C&apos;est r&eacute;serv&eacute; aux installations toiture avec onduleur string.
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Pour un balcon, il existe deux approches l&eacute;gales&nbsp;: le parall&egrave;le DC (via un micro-onduleur bi-entr&eacute;e) ou le parall&egrave;le AC (deux micro-onduleurs ind&eacute;pendants). On vous explique les deux.
              </p>
            </section>

            {/* Section 2 — Parallèle DC (micro-onduleur double MPPT) */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Option 1&nbsp;&mdash; Le parall&egrave;le DC avec micro-onduleur double-MPPT</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est la solution la plus propre pour 2 panneaux&nbsp;: un seul micro-onduleur g&egrave;re les deux modules DC. Les micro-onduleurs double-MPPT ont <strong>deux entr&eacute;es DC ind&eacute;pendantes</strong>, chacune avec son propre r&eacute;gulateur de puissance maximale (MPPT).
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Mod&egrave;le</th>
                      <th className="text-center p-3">Puissance AC</th>
                      <th className="text-center p-3">Entr&eacute;es DC</th>
                      <th className="text-center p-3">Panels max</th>
                      <th className="text-center p-3 rounded-tr-xl">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['APsystems EZ1-H', '960 VA (bridable 800W)', '2 MPPT ind.', '2 &times; 500 Wc max', '~199&nbsp;&euro;'],
                      ['Hoymiles HMS-800-2T', '800 VA', '2 MPPT ind.', '2 &times; 430 Wc max', '~196&nbsp;&euro;'],
                      ['APsystems DS3-D', '730 VA', '2 MPPT ind.', '2 &times; 380 Wc max', '~160&nbsp;&euro;'],
                      ['Hoymiles HMS-600-2T', '600 VA', '2 MPPT ind.', '2 &times; 330 Wc max', '~165&nbsp;&euro;'],
                    ].map(([model, ac, inputs, panels, price], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'} ${i === 0 ? 'bg-green-pale/30 font-semibold' : ''}`}>
                        <td className="p-3 font-mono text-xs">{model}</td>
                        <td className="text-center p-3 font-mono text-xs" dangerouslySetInnerHTML={{ __html: ac }} />
                        <td className="text-center p-3 text-xs">{inputs}</td>
                        <td className="text-center p-3 text-xs" dangerouslySetInnerHTML={{ __html: panels }} />
                        <td className="text-center p-3 text-xs font-semibold" dangerouslySetInnerHTML={{ __html: price }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-2 text-green">&#10003; Avantages</h3>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&#10003; Un seul bo&icirc;tier, une seule prise murale</li>
                    <li>&#10003; Chaque panneau optimis&eacute; ind&eacute;pendamment (ombre partielle g&eacute;r&eacute;e)</li>
                    <li>&#10003; C&acirc;blage plus simple : 2 c&acirc;bles MC4+ et 2 MC4&minus; vers le micro-onduleur</li>
                    <li>&#10003; Monitoring par panneau via l&apos;app (EMA pour APsystems)</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2 text-amber-dark">&#9888;&#65039; Points d&apos;attention</h3>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&#9888;&#65039; Les deux panneaux doivent &ecirc;tre de puissance proche (±10%)</li>
                    <li>&#9888;&#65039; V&eacute;rifier la tension d&apos;entr&eacute;e max du micro-onduleur (g&eacute;n. 60V DC)</li>
                    <li>&#9888;&#65039; C&acirc;ble d&apos;extension MC4 n&eacute;cessaire si panneaux &eacute;loign&eacute;s</li>
                  </ul>
                </div>
              </div>

              <p className="text-charcoal-light leading-relaxed text-sm">
                <strong>Le Beem On 500 Wc</strong> et le <strong>Sunethic F500</strong> utilisent l&apos;APsystems EZ1-H en configuration bi-panneaux. L&apos;avis complet du micro-onduleur Hoymiles HMS-800W est disponible sur notre page d&eacute;di&eacute;e&nbsp;: <Link href="/avis/hoymiles-hms-800w" className="text-green font-semibold hover:underline">avis Hoymiles HMS-800W</Link>.
              </p>
            </section>

            {/* Section 3 — Parallèle AC (2 micro-onduleurs séparés) */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Option 2&nbsp;&mdash; Le parall&egrave;le AC avec 2 micro-onduleurs ind&eacute;pendants</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Chaque panneau a son propre micro-onduleur. Les sorties AC 230V des deux micro-onduleurs se raccordent <strong>en parall&egrave;le sur le circuit &eacute;lectrique</strong> de la maison. C&apos;est ce que font tous les kits mono-panneau quand on en achète deux.
              </p>

              <div className="card bg-cream border border-border-light my-6">
                <h3 className="font-bold text-sm mb-3">Sch&eacute;ma de principe</h3>
                <div className="font-mono text-xs text-charcoal-light space-y-1 bg-charcoal/5 p-4 rounded-lg overflow-x-auto">
                  <div>Panneau A &#10132; Micro-onduleur A &#10132; Prise AC 230V &#10132; Tableau &eacute;lectrique</div>
                  <div>Panneau B &#10132; Micro-onduleur B &#10132; Prise AC 230V &#10132; Tableau &eacute;lectrique (m&ecirc;me circuit)</div>
                  <div className="mt-2 text-green font-semibold">&#10003; Les deux AC 230V se somment automatiquement dans le circuit</div>
                </div>
              </div>

              <p className="text-charcoal-light leading-relaxed mb-4">
                Cette configuration est la plus flexible&nbsp;: vous pouvez ajouter un panneau &agrave; tout moment. Elle est aussi la plus r&eacute;siliente&nbsp;: si un micro-onduleur tombe en panne, l&apos;autre continue de produire.
              </p>

              <div className="card bg-amber-pale/40 border-l-4 border-l-amber">
                <p className="text-sm font-semibold mb-1">&#9888;&#65039; Limite des 800 Wc totaux</p>
                <p className="text-sm text-charcoal-light">
                  Deux micro-onduleurs inject&eacute;s sur le m&ecirc;me circuit ne doivent pas d&eacute;passer 800W AC cumul&eacute;s dans le cadre plug-and-play. Deux kits de 400W = 800W total&nbsp;: c&apos;est la limite. Deux kits de 500W = 1&nbsp;000W&nbsp;: hors cadre, circuit d&eacute;di&eacute; obligatoire. Notre article <Link href="/blog/combien-panneaux-solaires-balcon" className="text-green font-semibold hover:underline">combien de panneaux sur un balcon</Link> d&eacute;taille la r&egrave;glementation.
                </p>
              </div>
            </section>

            <AffiliateCTA
              productName="Beem On 500 Wc"
              merchantName="Beem Energy"
              affiliateUrl="https://www.beemenergy.fr/products/beem-on-500wc"
              label="Voir le kit Beem On 500 Wc"
              variant="inline"
              position="mid-article"
              price="429 €"
            />

            {/* Section 4 — Les câbles MC4 */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les c&acirc;bles MC4&nbsp;: choix et longueur</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les connecteurs MC4 sont le standard universel des branchements DC en photovolta&iuml;que. Chaque panneau dispose de 2 c&acirc;bles&nbsp;: un positif (rouge, marquage &laquo;&nbsp;+&nbsp;&raquo;) et un n&eacute;gatif (noir, marquage &laquo;&nbsp;&minus;&nbsp;&raquo;). Ils s&apos;encliquettent dans les connecteurs correspondants du micro-onduleur.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[420px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Situation</th>
                      <th className="text-center p-3">Section</th>
                      <th className="text-center p-3">Longueur max</th>
                      <th className="text-center p-3 rounded-tr-xl">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Kit standard (fourni)', '4&nbsp;mm&sup2;', '1&ndash;2&nbsp;m', 'Suffisant dans 90% des cas'],
                      ['Extension panneau proche', '4&nbsp;mm&sup2;', 'jusqu&apos;&agrave; 5&nbsp;m', 'Pertes &lt;1% sur 5&nbsp;m'],
                      ['Extension panneau &eacute;loign&eacute;', '6&nbsp;mm&sup2;', 'jusqu&apos;&agrave; 10&nbsp;m', 'Section plus grande = moins de pertes'],
                      ['Liaison inter-panneaux (parall&egrave;le DC)', '4&nbsp;mm&sup2;', '1&ndash;3&nbsp;m', 'C&acirc;ble Y MC4 possible'],
                    ].map(([situation, section, length, note], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 text-xs" dangerouslySetInnerHTML={{ __html: situation }} />
                        <td className="text-center p-3 font-mono text-xs" dangerouslySetInnerHTML={{ __html: section }} />
                        <td className="text-center p-3 font-mono text-xs" dangerouslySetInnerHTML={{ __html: length }} />
                        <td className="p-3 text-xs text-stone" dangerouslySetInnerHTML={{ __html: note }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-charcoal-light leading-relaxed text-sm">
                Les c&acirc;bles MC4 certifi&eacute;s TUV sont pr&eacute;vus pour l&apos;ext&eacute;rieur (UV, pluie, temp&eacute;ratures de &minus;40&deg;C &agrave; +90&deg;C). N&apos;utilisez jamais de c&acirc;bles &eacute;lectriques standard (secteur) pour les liaisons DC&nbsp;: les tensions et les conditions d&apos;exposition diff&egrave;rent.
              </p>
            </section>

            {/* Section 5 — Le disjoncteur */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le disjoncteur&nbsp;: quelle protection pour votre installation&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La norme NF&nbsp;C&nbsp;15-100 impose qu&apos;une production locale (kit solaire injectant sur le r&eacute;seau int&eacute;rieur) soit raccord&eacute;e &agrave; un <strong>circuit d&eacute;di&eacute; prot&eacute;g&eacute; par un disjoncteur 16A</strong> dans le tableau &eacute;lectrique. Ce circuit est distinct des prises et &eacute;clairages existants.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="card border-l-4 border-l-green text-center">
                  <div className="text-2xl font-extrabold text-green mb-1">16A</div>
                  <div className="text-xs text-stone">Calibre disjoncteur</div>
                  <div className="text-xs text-charcoal-light mt-1">Protection standard 3&nbsp;680W max</div>
                </div>
                <div className="card border-l-4 border-l-green text-center">
                  <div className="text-2xl font-extrabold text-green mb-1">1</div>
                  <div className="text-xs text-stone">Circuit d&eacute;di&eacute;</div>
                  <div className="text-xs text-charcoal-light mt-1">S&eacute;par&eacute; du reste de l&apos;installation</div>
                </div>
                <div className="card border-l-4 border-l-green text-center">
                  <div className="text-2xl font-extrabold text-green mb-1">800W</div>
                  <div className="text-xs text-stone">Injection max</div>
                  <div className="text-xs text-charcoal-light mt-1">Cadre plug-and-play France</div>
                </div>
              </div>

              <p className="text-charcoal-light leading-relaxed mb-4">
                Dans la pratique, la plupart des installations balcon utilisent une <strong>prise murale existante</strong> si elle est sur un circuit d&eacute;di&eacute; (ex&nbsp;: la prise du balcon sur circuit ext&eacute;rieur). L&apos;id&eacute;al reste quand m&ecirc;me de faire installer une prise d&eacute;di&eacute;e par un &eacute;lectricien, surtout pour 2 panneaux cumulant 600&ndash;800W.
              </p>

              <div className="card bg-green-pale/30 border-l-4 border-l-green">
                <h3 className="font-bold text-sm mb-2 text-green">&#9889; Pour 2 micro-onduleurs s&eacute;par&eacute;s</h3>
                <p className="text-sm text-charcoal-light mb-2">
                  Chaque micro-onduleur se branche sur une prise distincte. Les deux prises peuvent &ecirc;tre sur le m&ecirc;me circuit 16A (les 2 puissances AC se cumulent, ex&nbsp;: 400W + 400W = 800W). Elles ne peuvent <strong>pas</strong> &ecirc;tre sur une m&ecirc;me multiprise d&eacute;prise (risque de surcharge). Une bo&icirc;te de d&eacute;rivation &eacute;tanche IP44 install&eacute;e sur le circuit est la solution professionnelle.
                </p>
              </div>
            </section>

            {/* Section 6 — Kits tout-en-un */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les kits plug-and-play avec 2 panneaux&nbsp;: d&eacute;j&agrave; c&acirc;bl&eacute;s</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous achetez un kit 2 panneaux d&apos;une marque comme Beem, Sunology ou Sunethic, le c&acirc;blage est d&eacute;j&agrave; pr&eacute;vu. Les fabricants fournissent soit&nbsp;:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-charcoal-light text-sm">
                  <span className="text-green mt-0.5">&#10003;</span>
                  <span><strong>1 micro-onduleur double-MPPT</strong> (APsystems EZ1-H ou HMS-800) + 2 panneaux + 1 c&acirc;ble AC vers prise. Solution tout-en-un pour 2 &times; 400&ndash;500 Wc.</span>
                </li>
                <li className="flex items-start gap-2 text-charcoal-light text-sm">
                  <span className="text-green mt-0.5">&#10003;</span>
                  <span><strong>2 micro-onduleurs mono-panneau</strong> + 2 panneaux + 2 c&acirc;bles AC ind&eacute;pendants. Chaque panneau est autonome. Courant sur les kits 2 &times; 300 Wc d&apos;entr&eacute;e de gamme.</span>
                </li>
              </ul>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Consultez notre comparatif pour savoir quel kit choisir selon votre balcon&nbsp;: <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green font-semibold hover:underline">meilleur kit solaire balcon 2026</Link>. Pour les profils avec ombre partielle, notre guide <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green font-semibold hover:underline">optimiser sa production avec de l&apos;ombre</Link> est compl&eacute;mentaire.
              </p>
            </section>

            <AffiliateCTA
              productName="Sunology PLAY 2"
              merchantName="Sunology"
              affiliateUrl="https://www.sunology.fr/products/sunology-play-2"
              label="Voir le kit Sunology PLAY 2 (2 panneaux)"
              variant="inline"
              position="after-pros"
              price="à partir de 649 €"
            />

            {/* Section 7 — Erreurs à éviter */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">5 erreurs &agrave; &eacute;viter absolument</h2>
              <div className="space-y-3">
                {[
                  {
                    titre: 'Brancher en s&eacute;rie DC',
                    detail: 'La tension r&eacute;sultante (80V+) endommage le micro-onduleur plug-and-play et peut d&eacute;clencher un arc &eacute;lectrique. Hors cadre l&eacute;gal.',
                  },
                  {
                    titre: 'Utiliser une multiprise standard pour 2 micro-onduleurs',
                    detail: 'Une multiprise plastique domestique n&apos;est pas con&ccedil;ue pour une injection continue 24h/24. Risque de surchauffe. Seule une bo&icirc;te de d&eacute;rivation &eacute;tanche IP44 fix&eacute;e en dur est admissible.',
                  },
                  {
                    titre: 'M&eacute;langer des marques de connecteurs MC4',
                    detail: 'Les connecteurs MC4 sont m&eacute;caniquement compatibles mais ne sont pas certifi&eacute;s crois&eacute;s entre marques. Risque de micro-arc sur la dur&eacute;e. Utilisez toujours la m&ecirc;me marque de connecteur.',
                  },
                  {
                    titre: 'D&eacute;passer 800 Wc sans circuit d&eacute;di&eacute;',
                    detail: '2 panneaux de 500 Wc = 1&nbsp;000 Wc. Hors cadre plug-and-play. Obligation d&apos;un circuit d&eacute;di&eacute; et d&apos;une d&eacute;claration Enedis compl&egrave;te (ex-CACSI). Voir notre guide r&eacute;glementation.',
                  },
                  {
                    titre: 'N&eacute;gliger la protection DC',
                    detail: 'Pour les installations DIY multi-panneaux, un fusible DC 10A entre le panneau et le micro-onduleur est recommand&eacute; pour prot&eacute;ger le c&acirc;blage en cas de court-circuit. Les kits marques l&apos;int&egrave;grent souvent d&eacute;j&agrave;.',
                  },
                ].map((item, i) => (
                  <div key={i} className="card border-l-4 border-l-red-400">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500 font-bold text-sm mt-0.5">&#10007;</span>
                      <div>
                        <p className="font-semibold text-sm" dangerouslySetInnerHTML={{ __html: item.titre }} />
                        <p className="text-xs text-charcoal-light mt-1" dangerouslySetInnerHTML={{ __html: item.detail }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8 — Pour aller plus loin */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour aller plus loin&nbsp;: DIY vs kit marque</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous partez de z&eacute;ro, ach&eacute;ter un <strong>kit complet d&apos;une marque</strong> (Beem, Sunology, Sunethic, Anker Solix) est quasi toujours plus simple et plus s&eacute;curis&eacute; qu&apos;assembler soi-m&ecirc;me ses panneaux et micro-onduleur. Le c&acirc;blage est pr&eacute;calcul&eacute;, les garanties sont coordonn&eacute;es et le SAV existe.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le DIY (achat s&eacute;par&eacute; de panneaux + micro-onduleur) a du sens si vous voulez une puissance sp&eacute;cifique non disponible en kit, ou si vous souhaitez ajouter un troisi&egrave;me panneau &agrave; une installation existante (en v&eacute;rifiant la limite des 800 Wc). Dans ce cas, <Link href="/avis/hoymiles-hms-800w" className="text-green font-semibold hover:underline">le Hoymiles HMS-800W</Link> est le choix de r&eacute;f&eacute;rence pour 2 panneaux en DIY.
              </p>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Pour comprendre comment votre micro-onduleur travaille en d&eacute;tail&nbsp;: <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="text-green font-semibold hover:underline">fonctionnement d&apos;un micro-onduleur solaire</Link>.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-3">
                {faqData.map((item, i) => (
                  <details key={i} className="card" {...(i === 0 ? { open: true } : {})}>
                    <summary className="cursor-pointer font-semibold text-sm pr-4" dangerouslySetInnerHTML={{ __html: item.question }} />
                    <p className="mt-3 text-sm text-charcoal-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </details>
                ))}
              </div>
            </section>

            {/* Articles liés */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Articles li&eacute;s</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/blog/micro-onduleur-solaire-fonctionnement', label: 'Comment fonctionne un micro-onduleur&nbsp;?', badge: 'Blog' },
                  { href: '/blog/combien-panneaux-solaires-balcon', label: 'Combien de panneaux sur un balcon&nbsp;?', badge: 'R&eacute;glementation' },
                  { href: '/blog/panneau-solaire-ombre-optimiser-production', label: 'Optimiser sa production avec de l&apos;ombre', badge: 'Blog' },
                  { href: '/guide/installer-kit-solaire-balcon', label: 'Installer son kit solaire balcon', badge: 'Guide' },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="card border-l-4 border-l-green hover:shadow-md transition-shadow">
                    <div className="badge-green text-xs mb-2 inline-block" dangerouslySetInnerHTML={{ __html: link.badge }} />
                    <p className="font-semibold text-sm" dangerouslySetInnerHTML={{ __html: link.label }} />
                  </Link>
                ))}
              </div>
            </section>

            <NewsletterBanner />

            {/* Footer */}
            <footer className="text-xs text-stone border-t border-border-light pt-6 space-y-2">
              <p>
                <strong>M&eacute;thodologie&nbsp;:</strong> Les informations de c&acirc;blage sont bas&eacute;es sur les documentations techniques des fabricants (APsystems, Hoymiles, Sunology) et la norme NF&nbsp;C&nbsp;15-100. Les prix des micro-onduleurs sont indicatifs (sept. 2026).
              </p>
              <p>
                <strong>Transparence affilié&nbsp;:</strong> Certains liens de cet article sont des liens affiliés. Si vous achetez via ces liens, nous percevons une commission sans surcoût pour vous. Cela ne biaise pas nos recommandations techniques.
              </p>
            </footer>

          </div>
        </div>
      </article>
    </>
  );
}
