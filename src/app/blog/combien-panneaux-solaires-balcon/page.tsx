import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Combien de panneaux solaires sur un balcon ? R&egrave;gles et limites (2026)',
  description: 'Limite 800 Wc, nombre de panneaux selon la puissance, s&eacute;rie ou parall&egrave;le : tout ce que la r&eacute;glementation fran&ccedil;aise impose pour un kit solaire balcon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/combien-panneaux-solaires-balcon',
  },
};

const faqData = [
  {
    question: 'Peut-on mettre 2 panneaux solaires sur son balcon ?',
    answer: 'Oui, sous conditions. Deux panneaux de 300W (total 600W) sont parfaitement légaux. Deux panneaux de 400W (total 800W) aussi, dans la limite réglementaire. En revanche, deux panneaux de 500W (total 1 000W) dépassent la limite plug-and-play de 800 Wc et nécessitent une installation électrique dédiée par un électricien.',
  },
  {
    question: 'Quelle est la limite légale de puissance pour un kit solaire de balcon ?',
    answer: 'La limite française est de 800 Wc côté panneaux (puissance-crête installée). L\'onduleur peut injecter jusqu\'à 800-900W AC sur le réseau domestique. Au-delà, l\'installation sort du cadre des kits plug-and-play et nécessite une déclaration CACSI Enedis complète et un circuit électrique dédié.',
  },
  {
    question: 'Faut-il brancher ses panneaux en série ou en parallèle sur un balcon ?',
    answer: 'En plug-and-play balcon, les panneaux ne sont jamais branchés en série (tension trop élevée pour une prise 230V). Chaque panneau est géré par son propre micro-onduleur — les sorties AC 230V de chaque micro-onduleur sont ensuite en parallèle sur le réseau de la maison. Certains micro-onduleurs bi-entrée (APsystems DS3, Hoymiles HM-800) gèrent 2 panneaux en parallèle côté DC avec un seul onduleur.',
  },
  {
    question: 'Faut-il faire une déclaration pour 2 panneaux sur son balcon ?',
    answer: 'Oui. Dès lors que votre installation injecte sur le réseau, une information préalable auprès d\'Enedis est recommandée. Si votre installation dépasse 250W et reste sous 3 kWc, la procédure simplifiée (ex-CACSI) s\'applique. Au-delà de 3 kWc, un raccordement avec contrat d\'achat est obligatoire.',
  },
  {
    question: 'La limite de puissance va-t-elle passer à 1 200W en France ?',
    answer: 'Pas dans l\'immédiat. L\'Allemagne a relevé sa limite à 800W en 2024 et débat d\'un passage à 1 200W. En France, les discussions techniques autour de la norme NF C 15-100 v2024 sont en cours, mais aucune décision officielle n\'a été prise. La limite de 800 Wc reste en vigueur en 2026.',
  },
  {
    question: 'Un micro-onduleur 800W peut-il gérer 2 panneaux de 400W ?',
    answer: 'Certains modèles oui. Le Hoymiles HM-800 et l\'APsystems DS3-D gèrent chacun 2 entrées DC indépendantes pour 2 panneaux, avec une puissance AC de 800W. C\'est la configuration idéale pour un kit 2 panneaux restant dans les limites légales.',
  },
];

export default function CombienPanneauxBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Combien de panneaux solaires sur un balcon ? R&egrave;gles et limites"
        description="Limite 800 Wc, nombre de panneaux selon la puissance, s&eacute;rie ou parall&egrave;le : tout ce que la r&eacute;glementation impose."
        url="https://monbalconsolaire.fr/blog/combien-panneaux-solaires-balcon"
        datePublished="2026-06-26"
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
              La limite de 800&nbsp;Wc (puissance-cr&ecirc;te panneaux), le nombre de panneaux selon leur puissance, et la vraie diff&eacute;rence entre s&eacute;rie et parall&egrave;le. Ce que la r&eacute;glementation fran&ccedil;aise impose concr&egrave;tement.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>26 juin 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="space-y-10">

            {/* Section 1 — La limite de 800 Wc */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La limite de 800&nbsp;Wc&nbsp;: d&apos;o&ugrave; vient-elle&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                En France, les kits solaires plug-and-play sont encadr&eacute;s par l&apos;arr&ecirc;t&eacute; du 9 mai 2017 modifi&eacute; en 2024, qui fixe la puissance maximale des installations d&apos;autoconsommation sur prise standard &agrave; <strong>800 Wc c&ocirc;t&eacute; panneaux</strong>. C&apos;est la puissance-cr&ecirc;te des modules photovolta&iuml;ques, pas la puissance AC inject&eacute;e.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&ocirc;t&eacute; sortie onduleur, la norme NF&nbsp;C&nbsp;15-100 autorise l&apos;injection jusqu&apos;&agrave; <span className="data-highlight">3,68 kVA</span> sur un circuit 16A. Mais les kits plug-and-play sont limit&eacute;s &agrave; 800-900W AC par les r&egrave;gles propres &agrave; ce cadre simplifi&eacute;. Au-del&agrave;, vous sortez du r&eacute;gime simplifi&eacute; et avez besoin d&apos;un circuit d&eacute;di&eacute; et d&apos;une d&eacute;claration compl&egrave;te.
              </p>
              <div className="card bg-amber-pale/40 border-l-4 border-l-amber">
                <p className="text-sm font-semibold mb-1">&#9888;&#65039; Ce que dit la r&egrave;gle concr&egrave;tement</p>
                <p className="text-sm text-charcoal-light">
                  800&nbsp;Wc c&ocirc;t&eacute; panneaux. L&apos;onduleur lui-m&ecirc;me est g&eacute;n&eacute;ralement r&eacute;gl&eacute; &agrave; 800W AC en sortie. Certains fabricants &eacute;crivent &laquo;&nbsp;900W&nbsp;&raquo; dans leurs fiches (rendement onduleur inclus), mais la limite l&eacute;gale reste 800&nbsp;Wc c&ocirc;t&eacute; panneaux.
                </p>
              </div>
            </section>

            {/* Section 2 — Tableau panneaux selon puissance */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Nombre de panneaux selon leur puissance unitaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La limite ne fixe pas un nombre de panneaux, mais une puissance totale. Voici ce que &ccedil;a donne selon les puissances courantes du march&eacute; fran&ccedil;ais&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Configuration</th>
                      <th className="text-center p-3">Puissance totale</th>
                      <th className="text-center p-3">Statut l&eacute;gal</th>
                      <th className="text-center p-3 rounded-tr-xl">Micro-onduleur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1 panneau 300 Wc', '300 Wc', '✅ OK', 'APsystems EZ1, Hoymiles HM-300'],
                      ['1 panneau 400 Wc', '400 Wc', '✅ OK', 'APsystems EZ1-M, Hoymiles HM-400'],
                      ['1 panneau 500 Wc', '500 Wc', '✅ OK', 'APsystems EZ1-M, Hoymiles HM-600'],
                      ['2 panneaux 300 Wc', '600 Wc', '✅ OK', 'APsystems DS3 ou 2× HM-300'],
                      ['2 panneaux 400 Wc', '800 Wc', '✅ Limite max', 'Hoymiles HM-800 ou APsystems DS3'],
                      ['2 panneaux 500 Wc', '1 000 Wc', '❌ Hors cadre', 'Circuit dédié obligatoire'],
                      ['3 panneaux 300 Wc', '900 Wc', '❌ Hors cadre', 'Circuit dédié obligatoire'],
                    ].map(([config, power, status, onduleur], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'} ${power === '800 Wc' ? 'bg-green-pale/30 font-semibold' : ''}`}>
                        <td className="p-3">{config}</td>
                        <td className="text-center p-3 font-mono text-sm">{power}</td>
                        <td className="text-center p-3">{status}</td>
                        <td className="p-3 text-xs text-stone">{onduleur}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                La configuration en surbrillance (2 &times; 400 Wc) est le maximum l&eacute;gal pour un branchement plug-and-play sur prise standard.
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
                affiliateUrl="https://www.beem.energy/collections/kits-solaires"
                label="Voir le Beem On 500 Wc — 429&nbsp;&euro;"
                variant="inline"
                position="mid-article"
              />
            </div>

            {/* Section 5 — Ce qui se passe si on dépasse */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">D&eacute;passer la limite&nbsp;: quelles cons&eacute;quences&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Techniquement, rien ne vous emp&ecirc;che de brancher 2 panneaux de 500W. Le disjoncteur ne saute pas. Mais vous sortez du cadre l&eacute;gal des kits plug-and-play, avec trois risques concrets&nbsp;:
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: '📋',
                    title: 'D&eacute;claration invalide',
                    desc: 'Votre d&eacute;claration simplifi&eacute;e aupr&egrave;s d&apos;Enedis n&apos;est plus valable. Vous &ecirc;tes techniquement en installation non d&eacute;clar&eacute;e, ce qui peut poser probl&egrave;me en cas de contr&ocirc;le ou de revente du logement.',
                  },
                  {
                    icon: '🔒',
                    title: 'Couverture assurance incertaine',
                    desc: 'Un sinistre li&eacute; &agrave; votre installation hors normes (incendie, surtension) pourrait &ecirc;tre refus&eacute; par votre assureur habitation. La d&eacute;claration de conformit&eacute; est souvent exig&eacute;e.',
                  },
                  {
                    icon: '⚡',
                    title: 'Risque r&eacute;seau',
                    desc: 'L&apos;injection de puissance sup&eacute;rieure &agrave; 900W sur une prise standard peut provoquer des surtensions locales sur le r&eacute;seau domestique. Peu probable mais non nul selon la qualit&eacute; de votre tableau &eacute;lectrique.',
                  },
                ].map((r, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{r.icon} <span dangerouslySetInnerHTML={{ __html: r.title }} /></h4>
                    <p className="text-xs text-charcoal-light" dangerouslySetInnerHTML={{ __html: r.desc }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Si vous souhaitez d&eacute;passer 800 Wc, la bonne marche &agrave; suivre est d&eacute;crite dans notre <Link href="/guide/installer-kit-solaire-balcon" className="text-green font-semibold hover:underline">guide d&apos;installation complet</Link> — avec les &eacute;tapes pour passer &agrave; une installation d&eacute;di&eacute;e.
              </p>
            </section>

            {/* Section 6 — 1200W en vue ? */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La limite va-t-elle passer &agrave; 1&nbsp;200W en France&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est le sujet des forums solaires depuis 2024. Voici l&apos;&eacute;tat r&eacute;el des discussions&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[440px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-3 rounded-tl-xl">Pays</th>
                      <th className="text-center p-3">Limite actuelle</th>
                      <th className="text-center p-3 rounded-tr-xl">Perspective</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Allemagne', '800 Wc (2024)', '1 200 Wc en discussion'],
                      ['Suisse', '600 Wc', '800 Wc en &eacute;tude'],
                      ['Autriche', '800 Wc', 'Stable'],
                      ['France', '800 Wc (2024)', 'Pas de changement pr&eacute;vu'],
                      ['Pays-Bas', '800 Wc', 'Stable'],
                    ].map(([pays, limite, persp], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{pays}</td>
                        <td className="text-center p-3 font-mono text-sm">{limite}</td>
                        <td className="p-3 text-xs text-stone" dangerouslySetInnerHTML={{ __html: persp }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                En France, la r&eacute;vision de la norme NF&nbsp;C&nbsp;15-100 (version 2024) a cr&eacute;&eacute; de l&apos;incertitude sur le statut des kits plug-and-play. Le march&eacute; a obtenu le maintien du cadre simplifi&eacute; jusqu&apos;&agrave; fin 2025 minimum. Un relev&eacute;ment &agrave; 1&nbsp;200W n&apos;est pas &agrave; l&apos;ordre du jour pour 2026.
              </p>
            </section>

            {/* Section 7 — Maximiser légalement */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Maximiser sa puissance dans les limites l&eacute;gales&nbsp;: les meilleures configurations</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous voulez tirer le maximum du cadre r&eacute;glementaire, voici les 3 configurations qui ont le meilleur sens en 2026&nbsp;:
              </p>
              <div className="space-y-4">
                {[
                  {
                    rank: '&#x1F947;',
                    title: '1 panneau 500 Wc — la solution simple',
                    desc: 'Un seul panneau (Beem On 500 Wc &agrave; 429&nbsp;&euro;, Sunethic F500 &agrave; 690&nbsp;&euro;), un seul micro-onduleur, une seule prise. 62% de la limite l&eacute;gale utilis&eacute;e. Id&eacute;al si vous avez un seul emplacement disponible.',
                    prod: '~530 kWh/an &agrave; Lyon sud',
                    economy: '~103&nbsp;&euro;/an',
                  },
                  {
                    rank: '&#x1F948;',
                    title: '2 panneaux 400 Wc — le maximum l&eacute;gal',
                    desc: 'La configuration optimale&nbsp;: 2 panneaux bifaciaux de 400 Wc avec un micro-onduleur bi-entr&eacute;e Hoymiles HM-800 (ou APsystems DS3). Exactement dans la limite de 800 Wc. Jusqu&apos;&agrave; 40% de production en plus vs un panneau 500W seul.',
                    prod: '~740 kWh/an &agrave; Lyon sud',
                    economy: '~144&nbsp;&euro;/an',
                  },
                  {
                    rank: '&#x1F949;',
                    title: '2 panneaux 300 Wc — pour petits balcons',
                    desc: 'Deux panneaux plus petits si votre balcon est &eacute;troit. Le Beem Kit 300W est con&ccedil;u pour &ccedil;a. Encombrement limit&eacute;, installation simple, dans les clous r&eacute;glementaires.',
                    prod: '~558 kWh/an &agrave; Lyon sud',
                    economy: '~108&nbsp;&euro;/an',
                  },
                ].map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" dangerouslySetInnerHTML={{ __html: c.rank }} />
                      <div className="flex-1">
                        <h3 className="font-bold text-sm mb-1">{c.title}</h3>
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
                Production estim&eacute;e PVGIS, Lyon, orientation sud, inclinaison 35&deg;, PR 0,85. &Eacute;conomies calcul&eacute;es &agrave; 0,1940&nbsp;&euro;/kWh, autoconsommation 85%.
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
                La <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green font-semibold hover:underline">r&eacute;glementation compl&egrave;te des panneaux solaires de balcon</Link> couvre plusieurs points au-del&agrave; de la simple limite de puissance&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Puissance max plug-and-play', value: '800 Wc' },
                  { label: 'D&eacute;claration Enedis', value: 'Recommand&eacute;e d&egrave;s 250W' },
                  { label: 'Contr&ocirc;le du propri&eacute;taire (locataire)', value: 'Non requis &lt; 800 Wc' },
                  { label: 'AG de copropri&eacute;t&eacute;', value: 'Non requise &lt; 3 kWc' },
                  { label: 'Norme &eacute;lectrique', value: 'NF C 15-100' },
                  { label: 'Contrat EDF OA', value: 'Non applicable &lt; 3 kWc simplifi&eacute;' },
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
                affiliateUrl="https://www.beem.energy/collections/kits-solaires"
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
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, CACSI Enedis, copropri&eacute;t&eacute;, limite 800 Wc</p>
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
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> Arr&ecirc;t&eacute; du 9 mai 2017 modifi&eacute; (autoconsommation), norme NF&nbsp;C&nbsp;15-100 v2024, Enedis (proc&eacute;dure CACSI), BDEW (Allemagne). Cet article contient des liens affili&eacute;s&nbsp;: nous per&ccedil;evons une commission si vous achetez via nos liens, sans surco&ucirc;t pour vous.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
