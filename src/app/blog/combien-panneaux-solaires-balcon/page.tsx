import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Combien de panneaux solaires sur un balcon ? Règles et limites (2026)',
  description: 'Combien de panneaux sur un balcon ? Pas de plafond légal en France : place, poids, circuit (repère 900 W), rentabilité et démarches fixent la vraie limite.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/combien-panneaux-solaires-balcon',
  },
};

const faqData = [
  {
    question: 'Peut-on mettre 2 panneaux solaires sur son balcon ?',
    answer: 'Oui. Aucun texte français ne limite le nombre de panneaux. Deux panneaux de 300 ou 400 Wc (600 à 800 Wc) restent sous le repère de 900 W par circuit recommandé pour une prise 16 A avec différentiel 30 mA. Deux panneaux de 500 Wc (1 000 Wc) sont possibles si le micro-onduleur plafonne la sortie à 800 W, ou sur un circuit dédié posé par un électricien. Les vraies questions sont ailleurs : la place, le poids sur le garde-corps et surtout votre consommation en journée.',
  },
  {
    question: 'Quelle est la limite légale de puissance pour un kit solaire de balcon ?',
    answer: 'Il n\'y en a pas. Contrairement à l\'Allemagne (800 VA en sortie d\'onduleur depuis 2024), la France ne fixe aucun plafond chiffré pour un kit branché sur prise. La NF C 15-100 (point 551.7.2, depuis le 1er septembre 2025) interdit de raccorder un générateur à un circuit terminal par une prise ; son application aux kits mobiles est une zone grise (« théoriquement non concernés » selon Enerplan). Les 900 W souvent cités sont une recommandation de sécurité (UFC-Que Choisir, fabricants), pas une limite légale. La déclaration CACSI auprès d\'Enedis est obligatoire quelle que soit la puissance.',
  },
  {
    question: 'Faut-il brancher ses panneaux en série ou en parallèle sur un balcon ?',
    answer: 'En plug-and-play balcon, les panneaux ne sont jamais branchés en série (tension trop élevée pour une prise 230V). Chaque panneau est géré par son propre micro-onduleur — les sorties AC 230V de chaque micro-onduleur sont ensuite en parallèle sur le réseau de la maison. Certains micro-onduleurs bi-entrée (APsystems DS3, Hoymiles HM-800) gèrent 2 panneaux en parallèle côté DC avec un seul onduleur.',
  },
  {
    question: 'Faut-il faire une déclaration pour 2 panneaux sur son balcon ?',
    answer: 'Oui. Toute installation raccordée au réseau intérieur doit être déclarée à Enedis via une Convention d\'Autoconsommation Sans Injection (CACSI), gratuite et en ligne, dès le premier panneau. Jusqu\'à 3 kVA la procédure est simplifiée. Déclarez la puissance réelle de l\'ensemble (les 2 panneaux), pas celle d\'un seul.',
  },
  {
    question: 'Plus de panneaux, est-ce toujours plus rentable ?',
    answer: 'Non. Sans batterie, seule l\'électricité consommée au moment où elle est produite vous fait économiser ; le surplus part sur le réseau sans rémunération. Un panneau de 500 Wc produit ~510 kWh/an à Lyon sud (84 €/an à 85 % d\'autoconsommation). 800 Wc produisent ~816 kWh/an, soit 135 €/an si vous autoconsommez toujours 85 %, mais seulement ~95 €/an si votre talon de consommation ne suit pas et que l\'autoconsommation tombe à 60 %.',
  },
  {
    question: 'Un micro-onduleur 800W peut-il gérer 2 panneaux de 400W ?',
    answer: 'Certains modèles oui. Le Hoymiles HM-800 et l\'APsystems DS3-D gèrent chacun 2 entrées DC indépendantes pour 2 panneaux, avec une puissance AC de 800W. C\'est une configuration courante pour un kit 2 panneaux qui reste sous le repère des 900 W par circuit.',
  },
];

export default function CombienPanneauxBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Combien de panneaux solaires sur un balcon ? R&egrave;gles et limites"
        description="Pas de plafond l&eacute;gal en France&nbsp;: place, poids, circuit &eacute;lectrique (rep&egrave;re 900 W), rentabilit&eacute; et d&eacute;marches fixent la vraie limite."
        url="https://monbalconsolaire.fr/blog/combien-panneaux-solaires-balcon"
        datePublished="2026-06-26"
        dateModified="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Combien de panneaux sur un balcon ?' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Combien de panneaux ?' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">R&eacute;glementation</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Combien de panneaux solaires peut-on mettre sur un balcon&nbsp;? R&egrave;gles et limites
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Aucun texte fran&ccedil;ais ne fixe un nombre de panneaux ni un plafond en watts-cr&ecirc;te. Ce qui limite r&eacute;ellement votre kit&nbsp;: la place et le poids, le circuit &eacute;lectrique, votre consommation en journ&eacute;e et quelques d&eacute;marches. On fait le tour, chiffres &agrave; l&apos;appui.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>26 juin 2026 &middot; mis &agrave; jour le 27 septembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="space-y-10">

            {/* Section 1 — Pas de limite légale de 800 Wc */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Non, il n&apos;y a pas de &laquo;&nbsp;limite l&eacute;gale de 800&nbsp;Wc&nbsp;&raquo; en France</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le chiffre de 800&nbsp;W circule partout, souvent attribu&eacute; &agrave; &laquo;&nbsp;l&apos;arr&ecirc;t&eacute; du 9 mai 2017 modifi&eacute;&nbsp;&raquo;. C&apos;est une confusion. Cet arr&ecirc;t&eacute; fixe les <strong>conditions d&apos;achat</strong> de l&apos;&eacute;lectricit&eacute; des installations photovolta&iuml;ques sur b&acirc;timent jusqu&apos;&agrave; 100&nbsp;kWc (tarifs de rachat, obligation d&apos;achat). Il ne dit rien des kits branch&eacute;s sur prise.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les 800&nbsp;W viennent d&apos;<strong>Allemagne</strong>&nbsp;: depuis mai 2024 (Solarpaket&nbsp;I), un <em>Balkonkraftwerk</em> y b&eacute;n&eacute;ficie du r&eacute;gime simplifi&eacute; si l&apos;onduleur injecte au plus <strong>800&nbsp;VA</strong>, avec jusqu&apos;&agrave; 2&nbsp;000&nbsp;Wc de panneaux. C&apos;est une limite de sortie AC, pas de puissance-cr&ecirc;te, et elle ne s&apos;applique pas en France. Les fabricants vendant sur toute l&apos;Europe r&egrave;glent souvent leurs onduleurs &agrave; 800&nbsp;W, d&apos;o&ugrave; la confusion.
              </p>
              <div className="card bg-amber-pale/40 border-l-4 border-l-amber">
                <p className="text-sm font-semibold mb-1">&#9888;&#65039; Ce qui s&apos;applique vraiment en France</p>
                <ul className="text-sm text-charcoal-light space-y-1.5">
                  <li>&bull; <strong>Aucun plafond chiffr&eacute;</strong> pour un kit branch&eacute; sur prise.</li>
                  <li>&bull; <strong>NF&nbsp;C&nbsp;15-100, point 551.7.2</strong> (depuis le 1<sup>er</sup> septembre 2025)&nbsp;: un g&eacute;n&eacute;rateur ne doit pas &ecirc;tre raccord&eacute; &agrave; un circuit terminal par une prise. Pour les kits mobiles, c&apos;est une zone grise (&laquo;&nbsp;th&eacute;oriquement non concern&eacute;s&nbsp;&raquo; selon Enerplan).</li>
                  <li>&bull; <strong>900&nbsp;W sur un circuit 16&nbsp;A d&eacute;di&eacute; avec diff&eacute;rentiel 30&nbsp;mA</strong>&nbsp;: une recommandation de s&eacute;curit&eacute; courante (UFC-Que Choisir, fabricants), pas une limite l&eacute;gale.</li>
                  <li>&bull; <strong>D&eacute;claration CACSI</strong> aupr&egrave;s d&apos;Enedis obligatoire d&egrave;s qu&apos;un kit est branch&eacute;, quelle que soit sa puissance.</li>
                </ul>
                <p className="text-xs text-stone mt-3">
                  D&eacute;tails et sources&nbsp;: <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green font-semibold hover:underline">r&eacute;glementation des panneaux solaires de balcon en 2026</Link>.
                </p>
              </div>
            </section>

            {/* Section 2 — Les 4 vraies limites */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 limites qui d&eacute;cident du nombre de panneaux</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Faute de plafond l&eacute;gal, ce sont des contraintes tr&egrave;s concr&egrave;tes qui fixent la taille de votre installation. Dans la plupart des appartements, la premi&egrave;re qui bloque est la place ou la rentabilit&eacute;, pas l&apos;&eacute;lectricit&eacute;.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: '1. Physique : place, poids, fixation, vent',
                    desc: 'Un panneau de 400-500 Wc mesure environ 1,7-2 m &times; 1,1 m et p&egrave;se 20-25 kg avec son support. Un garde-corps n&apos;est pas con&ccedil;u pour une prise au vent de plusieurs m&egrave;tres carr&eacute;s&nbsp;: fixations adapt&eacute;es au support, pas de panneau en saillie au-dessus du vide sans accroche solide. Sur la plupart des balcons, la place limite &agrave; 1 ou 2 panneaux.',
                  },
                  {
                    title: '2. &Eacute;lectrique : circuit et micro-onduleur',
                    desc: 'Ce qui compte pour le circuit, c&apos;est la puissance inject&eacute;e en AC, pas les Wc des panneaux. Rep&egrave;re courant&nbsp;: 900 W maximum sur un circuit 16 A d&eacute;di&eacute; prot&eacute;g&eacute; par un diff&eacute;rentiel 30 mA. Le micro-onduleur fixe aussi un plafond&nbsp;: un mod&egrave;le 800 W &eacute;cr&ecirc;te la production au-del&agrave;, quelle que soit la surface de panneaux.',
                  },
                  {
                    title: '3. &Eacute;conomique : votre talon de consommation',
                    desc: 'Sans batterie, vous n&apos;&eacute;conomisez que ce que vous consommez au moment o&ugrave; le soleil produit. Au-del&agrave; de votre consommation de fond (frigo, box, veilles), chaque watt suppl&eacute;mentaire part sur le r&eacute;seau sans &ecirc;tre pay&eacute; (la CACSI ne pr&eacute;voit aucune r&eacute;mun&eacute;ration). C&apos;est souvent la limite la plus contraignante.',
                  },
                  {
                    title: '4. Administrative : CACSI, copro, urbanisme',
                    desc: 'D&eacute;claration CACSI obligatoire (proc&eacute;dure simplifi&eacute;e jusqu&apos;&agrave; 3 kVA). En copropri&eacute;t&eacute;, un panneau visible en fa&ccedil;ade peut n&eacute;cessiter un vote en AG. Fix&eacute; en fa&ccedil;ade, il peut relever d&apos;une d&eacute;claration pr&eacute;alable en mairie. Locataire&nbsp;: pas de fixation permanente sans accord du bailleur.',
                  },
                ].map((l, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-2 text-green" dangerouslySetInnerHTML={{ __html: l.title }} />
                    <p className="text-xs text-charcoal-light leading-relaxed" dangerouslySetInnerHTML={{ __html: l.desc }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Pour les d&eacute;marches, voir notre guide <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green font-semibold hover:underline">d&eacute;claration CACSI pas &agrave; pas</Link> et, en immeuble, notre guide <Link href="/guide/panneau-solaire-copropriete" className="text-green font-semibold hover:underline">copropri&eacute;t&eacute;</Link>.
              </p>
            </section>

            {/* Section 3 — Tableau panneaux selon puissance */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Nombre de panneaux selon leur puissance unitaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Voici ce que donnent les configurations courantes par rapport au rep&egrave;re des 900&nbsp;W par circuit. Rappel&nbsp;: c&apos;est la sortie AC du ou des micro-onduleurs qui compte, pas la somme des Wc.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Configuration</th>
                      <th className="text-center p-3">Puissance panneaux</th>
                      <th className="text-center p-3">Rep&egrave;re 900 W / circuit</th>
                      <th className="text-center p-3 rounded-tr-xl">Micro-onduleur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1 panneau 300 Wc', '300 Wc', '✅ En dessous', 'APsystems EZ1, Hoymiles HM-300'],
                      ['1 panneau 400 Wc', '400 Wc', '✅ En dessous', 'APsystems EZ1-M, Hoymiles HM-400'],
                      ['1 panneau 500 Wc', '500 Wc', '✅ En dessous', 'APsystems EZ1-M, Hoymiles HM-600'],
                      ['2 panneaux 300 Wc', '600 Wc', '✅ En dessous', 'APsystems DS3 ou 2× HM-300'],
                      ['2 panneaux 400 Wc', '800 Wc', '✅ En dessous', 'Hoymiles HM-800 ou APsystems DS3'],
                      ['2 panneaux 500 Wc + onduleur 800 W', '1 000 Wc', '✅ Sortie plafonnée à 800 W (écrêtage à midi)', 'Onduleur bi-entrée 800 W'],
                      ['3 panneaux 300 Wc', '900 Wc', '⚠️ Au niveau du repère : circuit dédié conseillé', '3 micro-onduleurs ou onduleur multi-entrées'],
                      ['2 panneaux 500 Wc + 2 onduleurs 500 W', '1 000 Wc', '⚠️ Au-dessus : circuit dédié par un électricien', '2 micro-onduleurs indépendants'],
                    ].map(([config, power, status, onduleur], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'} ${i === 4 ? 'bg-green-pale/30 font-semibold' : ''}`}>
                        <td className="p-3">{config}</td>
                        <td className="text-center p-3 font-mono text-sm">{power}</td>
                        <td className="text-center p-3 text-xs">{status}</td>
                        <td className="p-3 text-xs text-stone">{onduleur}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                En surbrillance&nbsp;: 2 &times; 400 Wc, la configuration la plus puissante qu&apos;on trouve couramment en kit pr&ecirc;t &agrave; brancher. Ce n&apos;est pas un maximum l&eacute;gal, mais au-del&agrave; il faut soit brider l&apos;onduleur, soit un circuit d&eacute;di&eacute;.
              </p>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Pour comprendre les diff&eacute;rences de production entre ces puissances, notre <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="text-green font-semibold hover:underline">comparatif 300W vs 400W vs 500W</Link> d&eacute;taille l&apos;impact r&eacute;el sur le ROI.
              </p>
            </section>

            {/* Section 3 — Série vs Parallèle */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">S&eacute;rie ou parall&egrave;le&nbsp;: comment brancher plusieurs panneaux&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est la question technique la plus fr&eacute;quente. La r&eacute;ponse courte&nbsp;: <strong>sur un balcon plug-and-play, on ne branche jamais en s&eacute;rie</strong>. Voici pourquoi.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-2 text-green">&#9889; Parall&egrave;le DC (micro-onduleur bi-entr&eacute;e)</h3>
                  <p className="text-xs text-charcoal-light mb-2">
                    Deux panneaux branch&eacute;s en parall&egrave;le c&ocirc;t&eacute; DC sur un seul micro-onduleur (ex&nbsp;: Hoymiles HM-800, APsystems DS3). Tension identique, courant additionn&eacute;.
                  </p>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&#10003; Solution compacte (1 seul bo&icirc;tier)</li>
                    <li>&#10003; Une seule prise murale</li>
                    <li>&#10003; Gestion ind&eacute;pendante par MPPT si double-MPPT</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-2 text-green">&#9889; Parall&egrave;le AC (2 micro-onduleurs ind&eacute;pendants)</h3>
                  <p className="text-xs text-charcoal-light mb-2">
                    Chaque panneau a son propre micro-onduleur. Les sorties AC 230V se raccordent en parall&egrave;le sur le m&ecirc;me circuit &eacute;lectrique.
                  </p>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&#10003; Ind&eacute;pendance totale (ombre sur 1 panneau n&apos;impacte pas l&apos;autre)</li>
                    <li>&#10003; Flexibilit&eacute; maximale</li>
                    <li>&#10007; 2 prises murale ou 1 multiprise &eacute;tanche</li>
                  </ul>
                </div>
              </div>
              <div className="card bg-charcoal/5 border-l-4 border-l-stone">
                <h3 className="font-bold text-sm mb-2">&#10060; Ce qu&apos;on ne fait pas&nbsp;: la s&eacute;rie DC</h3>
                <p className="text-xs text-charcoal-light">
                  En s&eacute;rie, la tension s&apos;additionne&nbsp;: 2 panneaux de 40V = 80V. Ce niveau de tension DC ne peut pas &ecirc;tre inject&eacute; directement sur une prise 230V. Il faut un onduleur sp&eacute;cifique (string onduleur) et une installation fix&eacute;e. Hors du cadre plug-and-play balcon.
                </p>
              </div>
            </section>

            {/* Section 4 — AffiliateCTA */}
            <div className="my-6">
              <AffiliateCTA
                productName="Beem On 500 Wc"
                merchantName="Beem Energy"
                affiliateUrl="https://beemenergy.fr/"
                label="Voir le Beem On 500 Wc — 429&nbsp;&euro;"
                variant="inline"
                position="mid-article"
              />
            </div>

            {/* Section 5 — Limite économique */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Plus de panneaux = plus d&apos;&eacute;conomies&nbsp;? Pas forc&eacute;ment</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La production grimpe avec les Wc, mais pas vos &eacute;conomies si votre logement ne consomme pas ce surplus au moment o&ugrave; il est produit. &Agrave; midi, 2 &times; 400 Wc peuvent d&eacute;livrer plusieurs centaines de watts&nbsp;; si votre <Link href="/blog/talon-consommation-solaire" className="text-green font-semibold hover:underline">talon de consommation</Link> est bas, une bonne partie part sur le r&eacute;seau gratuitement.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-3 rounded-tl-xl">Installation</th>
                      <th className="text-center p-3">Production/an</th>
                      <th className="text-center p-3">Autoconsommation</th>
                      <th className="text-center p-3 rounded-tr-xl">&Eacute;conomie an 1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1 × 500 Wc', '510 kWh', '85 %', '84 €'],
                      ['2 × 400 Wc (talon suffisant)', '816 kWh', '85 %', '135 €'],
                      ['2 × 400 Wc (talon bas, hypothèse)', '816 kWh', '60 %', '95 €'],
                    ].map(([inst, prod, auto, eco], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{inst}</td>
                        <td className="text-center p-3 font-mono text-sm">{prod}</td>
                        <td className="text-center p-3 font-mono text-sm">{auto}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{eco}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Dans le cas d&apos;un talon bas, passer de 500 &agrave; 800 Wc ne rapporte qu&apos;environ 11&nbsp;&euro; de plus par an, pour un kit nettement plus cher et encombrant. Avant d&apos;ajouter un second panneau, mesurez votre consommation de fond en journ&eacute;e (une prise connect&eacute;e ou l&apos;appli Linky suffit). Si elle reste faible, un seul panneau bien orient&eacute; ou une batterie seront plus rentables qu&apos;un panneau de plus.
              </p>
              <p className="text-xs text-stone">
                M&eacute;thodologie standard du site&nbsp;: Lyon, exposition sud, 1&nbsp;200 kWh/kWc, performance ratio 0,85, tarif 0,1940&nbsp;&euro;/kWh. La ligne &agrave; 60&nbsp;% est une hypoth&egrave;se illustrative, pas une mesure.
              </p>
            </section>

            {/* Section 6 — Dépasser le repère des 900 W */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Au-del&agrave; de 900&nbsp;W inject&eacute;s&nbsp;: que faire&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Aucune loi ne vous interdit de brancher 2 panneaux de 500 Wc sur deux micro-onduleurs de 500 W. Mais au-del&agrave; de ~900 W inject&eacute;s sur un circuit de prises ordinaire, trois points m&eacute;ritent votre attention&nbsp;:
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: '⚡',
                    title: '&Eacute;chauffement du circuit',
                    desc: 'Le disjoncteur mesure le courant venant du tableau, pas celui inject&eacute; par le kit. Sur un circuit partag&eacute; avec d&apos;autres appareils, les c&acirc;bles peuvent transporter plus que leur calibre sans que rien ne disjoncte. C&apos;est la raison d&apos;&ecirc;tre du rep&egrave;re des 900 W et du circuit d&eacute;di&eacute;.',
                  },
                  {
                    icon: '📋',
                    title: 'D&eacute;claration fid&egrave;le',
                    desc: 'La CACSI doit mentionner la puissance r&eacute;elle de l&apos;ensemble. Si vous ajoutez un panneau apr&egrave;s coup, mettez votre d&eacute;claration &agrave; jour sur le portail Enedis.',
                  },
                  {
                    icon: '🔒',
                    title: 'Assurance',
                    desc: 'En cas de sinistre, l&apos;assureur peut examiner la conformit&eacute; de l&apos;installation. Un circuit d&eacute;di&eacute; pos&eacute; par un &eacute;lectricien (avec facture) et une CACSI &agrave; jour vous mettent en position solide.',
                  },
                ].map((r, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{r.icon} <span dangerouslySetInnerHTML={{ __html: r.title }} /></h4>
                    <p className="text-xs text-charcoal-light" dangerouslySetInnerHTML={{ __html: r.desc }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Pour passer &agrave; une installation plus puissante, les &eacute;tapes (circuit d&eacute;di&eacute;, d&eacute;claration) sont d&eacute;crites dans notre <Link href="/guide/installer-kit-solaire-balcon" className="text-green font-semibold hover:underline">guide d&apos;installation complet</Link>.
              </p>
            </section>

            {/* Section 7 — France vs Allemagne */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">France vs Allemagne&nbsp;: d&apos;o&ugrave; viennent les 800&nbsp;W</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[440px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-3 rounded-tl-xl">Pays</th>
                      <th className="text-center p-3">Plafond de sortie onduleur</th>
                      <th className="text-center p-3 rounded-tr-xl">Puissance panneaux</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Allemagne', '800 VA (Solarpaket I, mai 2024)', 'Jusqu&apos;&agrave; 2 000 Wc'],
                      ['France', 'Aucun plafond chiffr&eacute; (rep&egrave;re 900 W / circuit recommand&eacute;)', 'Aucun plafond chiffr&eacute;'],
                    ].map(([pays, limite, pv], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{pays}</td>
                        <td className="text-center p-3 text-xs" dangerouslySetInnerHTML={{ __html: limite }} />
                        <td className="text-center p-3 text-xs" dangerouslySetInnerHTML={{ __html: pv }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                En France, l&apos;incertitude ne porte pas sur un chiffre mais sur le principe&nbsp;: le point 551.7.2 de la NF&nbsp;C&nbsp;15-100 et son application aux kits sur prise. La fili&egrave;re (Enerplan, SER) demande une clarification&nbsp;; la r&eacute;ponse minist&eacute;rielle du 26 mai 2026 rappelle les risques sans trancher. Aucun &laquo;&nbsp;passage &agrave; 1&nbsp;200 W&nbsp;&raquo; n&apos;est en discussion en France, puisqu&apos;il n&apos;existe pas de seuil &agrave; relever.
              </p>
            </section>

            {/* Section 8 — Meilleures configurations */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les configurations qui ont le plus de sens en 2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Pour un balcon, voici les 3 configurations les plus coh&eacute;rentes, du plus simple au plus productif&nbsp;:
              </p>
              <div className="space-y-4">
                {[
                  {
                    rank: '&#x1F947;',
                    title: '1 panneau 500 Wc — la solution simple',
                    desc: 'Un seul panneau (Beem On 500 Wc &agrave; 429&nbsp;&euro;, Sunethic F500 &agrave; 690&nbsp;&euro;), un seul micro-onduleur, une seule prise. Bien adapt&eacute; &agrave; un talon de consommation modeste&nbsp;: l&apos;essentiel de la production est autoconsomm&eacute;. Retour sur investissement ~4,8 ans pour le Beem On.',
                    prod: '~510 kWh/an &agrave; Lyon sud',
                    economy: '~84&nbsp;&euro;/an',
                  },
                  {
                    rank: '&#x1F948;',
                    title: '2 panneaux 400 Wc — pour un foyer qui consomme en journ&eacute;e',
                    desc: '2 panneaux de 400 Wc avec un micro-onduleur bi-entr&eacute;e Hoymiles HM-800 (ou APsystems DS3). Sous le rep&egrave;re des 900 W par circuit. +60&nbsp;% de production vs un panneau 500 Wc seul, mais l&apos;&eacute;conomie ne suit que si vous consommez ce surplus (t&eacute;l&eacute;travail, ballon, lave-linge programm&eacute; &agrave; midi).',
                    prod: '~816 kWh/an &agrave; Lyon sud',
                    economy: '~135&nbsp;&euro;/an (&agrave; 85&nbsp;%)',
                  },
                  {
                    rank: '&#x1F949;',
                    title: '2 panneaux 300 Wc — pour petits balcons',
                    desc: 'Deux panneaux plus petits si votre balcon est &eacute;troit. Le Beem Kit 300W est con&ccedil;u pour &ccedil;a. Encombrement et poids limit&eacute;s, installation simple.',
                    prod: '~612 kWh/an &agrave; Lyon sud',
                    economy: '~101&nbsp;&euro;/an',
                  },
                ].map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" dangerouslySetInnerHTML={{ __html: c.rank }} />
                      <div className="flex-1">
                        <h3 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: c.title }} />
                        <p className="text-xs text-charcoal-light mb-2" dangerouslySetInnerHTML={{ __html: c.desc }} />
                        <div className="flex gap-4 text-xs">
                          <span className="font-mono text-green" dangerouslySetInnerHTML={{ __html: c.prod }} />
                          <span className="font-mono text-amber-dark" dangerouslySetInnerHTML={{ __html: c.economy }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone mt-3">
                Production&nbsp;: Lyon, exposition sud, 1&nbsp;200&nbsp;kWh/kWc, performance ratio 0,85. &Eacute;conomies de premi&egrave;re ann&eacute;e &agrave; 0,1940&nbsp;&euro;/kWh, autoconsommation 85&nbsp;%&nbsp;; ROI avec inflation du tarif de 3,3&nbsp;%/an.
              </p>
            </section>

            {/* CTA calculateur */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-1">Quelle configuration pour votre balcon&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-3">Le calculateur prend en compte votre d&eacute;partement, orientation et budget pour vous recommander la meilleure option.</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mon ROI &rarr;</Link>
            </div>

            {/* Section 8 — Réglementation complète */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que dit la r&eacute;glementation en pratique</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green font-semibold hover:underline">r&eacute;glementation compl&egrave;te des panneaux solaires de balcon</Link> couvre plusieurs points au-del&agrave; de la seule question de la puissance&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Plafond l&eacute;gal en watts', value: 'Aucun' },
                  { label: 'Rep&egrave;re s&eacute;curit&eacute; (recommandation)', value: '900 W / circuit 16 A' },
                  { label: 'D&eacute;claration Enedis (CACSI)', value: 'Obligatoire' },
                  { label: 'Locataire', value: 'Accord si fixation' },
                  { label: 'AG de copropri&eacute;t&eacute;', value: 'Si visible en fa&ccedil;ade' },
                  { label: 'Norme &eacute;lectrique', value: 'NF C 15-100 (551.7.2)' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-cream rounded-lg border border-border-light">
                    <span className="text-xs text-stone" dangerouslySetInnerHTML={{ __html: item.label }} />
                    <span className="text-xs font-semibold font-mono text-green" dangerouslySetInnerHTML={{ __html: item.value }} />
                  </div>
                ))}
              </div>
            </section>

            {/* AffiliateCTA footer */}
            <div className="my-6">
              <AffiliateCTA
                productName="Beem On 500 Wc"
                merchantName="Beem Energy"
                affiliateUrl="https://beemenergy.fr/"
                label="Voir les kits Beem disponibles"
                variant="box"
                position="footer-box"
              />
            </div>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Articles liés */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/multi-panneaux-serie-parallele" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Multi-panneaux&nbsp;: s&eacute;rie ou parall&egrave;le&nbsp;? C&acirc;blage et disjoncteur</h4>
                  <p className="text-xs text-charcoal-light mt-1">Double-MPPT, c&acirc;bles MC4 et disjoncteur 16A&nbsp;: guide pratique</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, CACSI Enedis, copropri&eacute;t&eacute;, rep&egrave;re des 900 W</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W&nbsp;: quelle puissance choisir&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Production, ROI et recommandation selon votre cas</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comment installer un kit solaire balcon pas &agrave; pas</h4>
                  <p className="text-xs text-charcoal-light mt-1">Guide complet avec les outils et les &eacute;tapes de d&eacute;claration</p>
                </Link>
                <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Micro-onduleur solaire&nbsp;: fonctionnement et choix</h4>
                  <p className="text-xs text-charcoal-light mt-1">Hoymiles, APsystems, Enphase&nbsp;: lequel pour votre installation</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2 vs Beem On 500 Wc (juillet 2026)</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif prix, puissance et ROI pour choisir votre kit 450-500&nbsp;Wc</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> Norme NF&nbsp;C&nbsp;15-100 (AFNOR, version applicable au 1<sup>er</sup> septembre 2025, point 551.7.2)&nbsp;; UFC-Que Choisir (rep&egrave;re des 900 W)&nbsp;; Enerplan&nbsp;; r&eacute;ponse minist&eacute;rielle &agrave; la question &eacute;crite n&deg;&nbsp;6574 (JO du 26 mai 2026)&nbsp;; Enedis (proc&eacute;dure CACSI)&nbsp;; arr&ecirc;t&eacute; du 9 mai 2017 (conditions d&apos;achat, L&eacute;gifrance)&nbsp;; Solarpaket&nbsp;I (Allemagne, 2024). Calculs&nbsp;: m&eacute;thodologie standard du site (Lyon sud, PR 0,85, 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an, autoconsommation 85&nbsp;%). Cet article contient des liens affili&eacute;s&nbsp;: nous per&ccedil;evons une commission si vous achetez via nos liens, sans surco&ucirc;t pour vous.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
