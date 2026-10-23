import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'D&eacute;gradation panneau solaire : que reste-t-il apr&egrave;s 25 ans ?',
  description: 'Taux de d&eacute;gradation annuel (PERC, TOPCon, back-contact), garanties de puissance &agrave; 25-30 ans et impact r&eacute;el sur la rentabilit&eacute; d&apos;un kit solaire balcon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/degradation-panneau-solaire-25-ans',
  },
};

const faqData = [
  {
    question: 'Qu&apos;est-ce que la d&eacute;gradation d&apos;un panneau solaire ?',
    answer: 'C&apos;est la perte progressive et normale de puissance d&apos;un panneau au fil des ann&eacute;es, caus&eacute;e par l&apos;exposition aux UV, aux cycles de chaleur/froid et au vieillissement naturel des cellules en silicium. Ce n&apos;est pas une panne : un panneau qui se d&eacute;grade continue de produire, juste un peu moins chaque ann&eacute;e. Les fabricants en tiennent compte dans leur garantie de puissance (g&eacute;n&eacute;ralement 80&nbsp;% garantis &agrave; 25 ou 30 ans).',
  },
  {
    question: 'Quel est le taux de d&eacute;gradation moyen d&apos;un panneau solaire par an ?',
    answer: 'La revue de r&eacute;f&eacute;rence du NREL (laboratoire am&eacute;ricain, Jordan &amp; Kurtz, pr&egrave;s de 2&nbsp;000 mesures de terrain) donne une m&eacute;diane de 0,5&nbsp;%/an, tous types de panneaux confondus. Les fiches constructeurs 2026 situent plut&ocirc;t le PERC autour de 0,45-0,55&nbsp;%/an, le TOPCon autour de 0,30-0,40&nbsp;%/an et le back-contact/HJT autour de 0,25-0,35&nbsp;%/an. &Agrave; ces rythmes, un panneau garde 89 &agrave; 93&nbsp;% de sa puissance initiale apr&egrave;s 25 ans.',
  },
  {
    question: 'Un panneau TOPCon se d&eacute;grade-t-il moins vite qu&apos;un panneau PERC ?',
    answer: 'Oui, dans la plupart des fiches constructeurs 2026. Le TOPCon (type N) subit une perte de d&eacute;gradation li&eacute;e &agrave; la lumi&egrave;re (LID) la premi&egrave;re ann&eacute;e environ deux fois plus faible que le PERC (type P), puis un taux annuel plus bas (0,30-0,40&nbsp;% contre 0,45-0,55&nbsp;%). C&apos;est pour cela que les fabricants qui passent au TOPCon (Beem On 500&nbsp;Wc, DualSun PREASY) allongent souvent leur garantie de puissance jusqu&apos;&agrave; 30 ans.',
  },
  {
    question: 'La garantie de performance &agrave; 25 ans couvre-t-elle vraiment la d&eacute;gradation ?',
    answer: 'Elle garantit un plancher (en g&eacute;n&eacute;ral 80&nbsp;% de la puissance initiale &agrave; 25 ou 30 ans), pas la d&eacute;gradation elle-m&ecirc;me. Si votre panneau descend sous ce seuil avant l&apos;&eacute;ch&eacute;ance, le fabricant doit le remplacer ou vous indemniser au prorata &mdash; en th&eacute;orie. En pratique, cette garantie ne vaut que si l&apos;entreprise existe toujours pour l&apos;honorer : voir notre avis sur la proc&eacute;dure de sauvegarde de Beem Energy, qui illustre bien ce risque.',
  },
  {
    question: 'Comment savoir si mon panneau se d&eacute;grade plus vite que la normale ?',
    answer: 'Comparez votre production du m&ecirc;me mois sur plusieurs ann&eacute;es (juin 2026 vs juin 2027, par exemple), via l&apos;app de suivi de votre kit. Une baisse de 0,3 &agrave; 0,5&nbsp;% par an est normale. Une chute brutale (plus de 5&nbsp;% en un an) ou localis&eacute;e (zone visiblement jaunie, fissure, point chaud au toucher) signale une d&eacute;faillance, pas une d&eacute;gradation normale &mdash; voir notre diagnostic complet si votre panneau produit moins que pr&eacute;vu.',
  },
  {
    question: 'La d&eacute;gradation change-t-elle beaucoup la rentabilit&eacute; d&apos;un kit solaire balcon ?',
    answer: 'Non, l&apos;impact reste mod&eacute;r&eacute;. Pour un kit de 500&nbsp;Wc &agrave; 429&nbsp;&euro; (r&eacute;f&eacute;rence Lyon sud, calcul via pricing.ts), les &eacute;conomies cumul&eacute;es sur 25 ans passent de 3&nbsp;190&nbsp;&euro; (hypoth&egrave;se th&eacute;orique sans d&eacute;gradation) &agrave; 2&nbsp;981-3&nbsp;062&nbsp;&euro; selon la technologie de cellule, soit 4 &agrave; 7&nbsp;% de moins. Le ROI r&eacute;el est donc quasiment identique &agrave; celui annonc&eacute; par nos comparatifs.',
  },
];

export default function DegradationPanneauSolairePage() {
  return (
    <>
      <SchemaArticle
        title="D&eacute;gradation panneau solaire : que reste-t-il apr&egrave;s 25 ans ?"
        description="Taux de d&eacute;gradation annuel (PERC, TOPCon, back-contact), garanties de puissance &agrave; 25-30 ans et impact r&eacute;el sur la rentabilit&eacute; d&apos;un kit solaire balcon."
        url="https://monbalconsolaire.fr/blog/degradation-panneau-solaire-25-ans"
        datePublished="2026-10-23"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'D&eacute;gradation panneau solaire 25 ans' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'D&eacute;gradation panneau solaire 25 ans' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Garanties &amp; dur&eacute;e de vie</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              D&eacute;gradation d&apos;un panneau solaire&nbsp;: que reste-t-il apr&egrave;s 10, 20, 25 ans&nbsp;?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Un panneau solaire ne tombe pas en panne du jour au lendemain &mdash; il perd un peu de puissance chaque ann&eacute;e, de mani&egrave;re pr&eacute;visible. Taux r&eacute;els selon la technologie de cellule (PERC, TOPCon, back-contact), garanties constructeur et impact chiffr&eacute; sur la rentabilit&eacute; de votre kit balcon via <code className="text-sm bg-cream px-1.5 py-0.5 rounded">pricing.ts</code>.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>23 octobre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="space-y-10">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La d&eacute;gradation n&apos;est pas une panne</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un panneau solaire est garanti pour produire de l&apos;&eacute;lectricit&eacute; pendant 25 &agrave; 30 ans, mais pas &agrave; puissance constante. Chaque ann&eacute;e, l&apos;exposition aux UV, les cycles de chauffe et de refroidissement et le vieillissement naturel du silicium lui font perdre une petite fraction de sa puissance initiale &mdash; de l&apos;ordre de 0,3 &agrave; 0,5&nbsp;% par an selon la technologie. C&apos;est un ph&eacute;nom&egrave;ne connu, pris en compte dans la garantie de puissance de tous les fabricants s&eacute;rieux.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Il ne faut pas confondre cette d&eacute;gradation lente et normale avec une <strong>panne</strong> (micro-onduleur, connecteur, cellule d&eacute;faillante) ou avec les variations saisonni&egrave;res de production (hiver vs &eacute;t&eacute;, <Link href="/blog/panneau-solaire-canicule-production" className="text-green hover:underline">effet de la canicule</Link>), qui n&apos;ont rien &agrave; voir avec le vieillissement du panneau et sont totalement r&eacute;versibles d&apos;une saison &agrave; l&apos;autre.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les causes physiques de la d&eacute;gradation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Plusieurs m&eacute;canismes contribuent &agrave; la perte de puissance d&apos;un panneau, &agrave; des vitesses diff&eacute;rentes selon la technologie de cellule&nbsp;:
              </p>
              <div className="space-y-3">
                {[
                  { t: 'LID (Light-Induced Degradation)', d: 'Perte rapide la premi&egrave;re ann&eacute;e d&apos;exposition &agrave; la lumi&egrave;re, li&eacute;e au dopage du silicium. Plus marqu&eacute;e sur les cellules PERC (type P, environ 2&nbsp;&agrave;&nbsp;3&nbsp;%) que sur les cellules N-type comme le TOPCon (environ 1&nbsp;&agrave;&nbsp;1,2&nbsp;%).' },
                  { t: 'PID (Potential-Induced Degradation)', d: 'Fuite de courant entre les cellules et le cadre m&eacute;tallique mis &agrave; la terre, favoris&eacute;e par l&apos;humidit&eacute; et la chaleur. Largement ma&icirc;tris&eacute;e sur les panneaux r&eacute;cents gr&acirc;ce &agrave; de meilleurs encapsulants.' },
                  { t: 'LeTID (Light and elevated Temperature Induced Degradation)', d: 'Sp&eacute;cifique aux cellules PERC, peut ajouter 0,5 &agrave; 1,5&nbsp;% de perte par an pendant les 5 premi&egrave;res ann&eacute;es sur d&apos;anciens lots de fabrication. La production moderne l&apos;a largement att&eacute;nu&eacute;e.' },
                  { t: 'Cycles thermiques et UV', d: 'Le passage r&eacute;p&eacute;t&eacute; du froid nocturne &agrave; la chaleur de midi fatigue les soudures et l&apos;encapsulant en EVA. C&apos;est le m&eacute;canisme dominant de la d&eacute;gradation lente et lin&eacute;aire sur le long terme (apr&egrave;s les 2-3 premi&egrave;res ann&eacute;es).' },
                  { t: 'Micro-fissures et infiltration d&apos;humidit&eacute;', d: 'Choc m&eacute;canique (gr&ecirc;le, manutention), dilatation r&eacute;p&eacute;t&eacute;e du verre&nbsp;: &agrave; terme, l&apos;eau peut s&apos;infiltrer et oxyder les contacts. C&apos;est une cause de d&eacute;gradation acc&eacute;l&eacute;r&eacute;e, pas du vieillissement normal.' },
                ].map((item, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <p className="font-semibold text-sm" dangerouslySetInnerHTML={{ __html: item.t }} />
                    <p className="text-xs text-charcoal-light mt-1" dangerouslySetInnerHTML={{ __html: item.d }} />
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 — taux par technologie */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Taux de d&eacute;gradation par technologie de cellule</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les chiffres ci-dessous combinent la revue de r&eacute;f&eacute;rence du <strong>NREL</strong> (laboratoire am&eacute;ricain de l&apos;&eacute;nergie, Jordan &amp; Kurtz&nbsp;: m&eacute;diane de 0,5&nbsp;%/an sur pr&egrave;s de 2&nbsp;000 mesures de terrain, tous types confondus) et plusieurs fiches constructeurs 2026 qui distinguent les technologies. Les ordres de grandeur convergent, mais il n&apos;existe pas encore assez de donn&eacute;es de terrain sur 25 ans pour le TOPCon et le back-contact r&eacute;cents &mdash; ces technologies ne sont commercialis&eacute;es en volume que depuis quelques ann&eacute;es.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Technologie</th>
                      <th className="text-center p-3">1&egrave;re ann&eacute;e (LID)</th>
                      <th className="text-center p-3">Taux annuel ensuite</th>
                      <th className="text-center p-3">Puissance restante &agrave; 25 ans</th>
                      <th className="text-center p-3 rounded-tr-xl">Exemple sur nos avis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['PERC (type P)', '&minus;2 &agrave; &minus;3 %', '0,45&ndash;0,55 %/an', '&#8776; 86&ndash;89 %', 'Beem Kit 300&nbsp;W'],
                      ['TOPCon (type N)', '&minus;1 &agrave; &minus;1,2 %', '0,30&ndash;0,40 %/an', '&#8776; 90&ndash;93 %', 'Beem On 500&nbsp;Wc, DualSun PREASY'],
                      ['Back-contact / HJT (type N)', '&minus;0,5 &agrave; &minus;1 %', '0,25&ndash;0,35 %/an', '&#8776; 92&ndash;94 %', 'Sunology PLAY'],
                    ].map(([tech, lid, rate, remaining, example], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{tech}</td>
                        <td className="text-center p-3 text-xs" dangerouslySetInnerHTML={{ __html: lid }} />
                        <td className="text-center p-3 font-mono text-xs" dangerouslySetInnerHTML={{ __html: rate }} />
                        <td className="text-center p-3 text-xs font-semibold text-green" dangerouslySetInnerHTML={{ __html: remaining }} />
                        <td className="text-center p-3 text-xs" dangerouslySetInnerHTML={{ __html: example }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                &Agrave; titre de rep&egrave;re, la m&eacute;diane NREL inclut des panneaux PERC et polycristallins plus anciens&nbsp;: les panneaux N-type r&eacute;cents (TOPCon, back-contact) vendus sur les kits balcon actuels devraient, sur le papier, se situer sous cette m&eacute;diane.
              </p>
            </section>

            {/* Section 4 — garanties constructeurs */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Garantie de puissance&nbsp;: ce que promettent (vraiment) les fabricants</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La garantie de performance n&apos;est pas une pr&eacute;diction de d&eacute;gradation&nbsp;: c&apos;est un <strong>plancher contractuel</strong>, g&eacute;n&eacute;ralement plus conservateur que le taux r&eacute;el attendu. Sur les kits que nous avons analys&eacute;s&nbsp;:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-charcoal-light text-sm">
                  <span className="text-green mt-0.5">&#10003;</span>
                  <span><Link href="/avis/sunology-play-2" className="text-green font-semibold hover:underline">Sunology PLAY</Link> (panneau back-contact)&nbsp;: garantie int&eacute;grale 25 ans (panneau, micro-onduleur, ch&acirc;ssis) et garantie de puissance &eacute;tendue &agrave; <strong>30 ans</strong> sur le panneau &mdash; la plus longue du segment balcon.</span>
                </li>
                <li className="flex items-start gap-2 text-charcoal-light text-sm">
                  <span className="text-green mt-0.5">&#10003;</span>
                  <span><Link href="/avis/dualsun-preasy" className="text-green font-semibold hover:underline">DualSun PREASY</Link> (panneau TOPCon)&nbsp;: panneau et micro-onduleur garantis 25 ans, avec une performance garantie &agrave; <strong>80&nbsp;% sur 30 ans</strong>.</span>
                </li>
                <li className="flex items-start gap-2 text-charcoal-light text-sm">
                  <span className="text-amber-dark mt-0.5">&#9888;&#65039;</span>
                  <span><Link href="/avis/beem-kit-300w" className="text-green font-semibold hover:underline">Beem Kit 300W</Link> (panneau PERC)&nbsp;: garantie de performance limit&eacute;e &agrave; <strong>80&nbsp;% apr&egrave;s 23 ans</strong>, contre 25 ans sur le mod&egrave;le 420W de la m&ecirc;me marque &mdash; coh&eacute;rent avec un taux de d&eacute;gradation PERC plus &eacute;lev&eacute;.</span>
                </li>
              </ul>
              <div className="card bg-amber-pale/40 border-l-4 border-l-amber">
                <p className="text-sm font-semibold mb-1">&#9888;&#65039; La garantie ne vaut que si l&apos;entreprise existe encore</p>
                <p className="text-sm text-charcoal-light">
                  Une garantie de 25 ou 30 ans n&apos;a de valeur que si le fabricant est toujours en activit&eacute; pour l&apos;honorer. Le cas de Beem Energy, plac&eacute;e en proc&eacute;dure de sauvegarde par le tribunal de commerce de Nantes fin novembre 2025, illustre ce risque&nbsp;: la garantie &eacute;crite ne remplace pas la p&eacute;rennit&eacute; de l&apos;entreprise qui la porte.
                </p>
              </div>
            </section>

            <AffiliateCTA
              productName="Sunology PLAY"
              merchantName="Sunology"
              affiliateUrl="https://sunology.eu/products/play-kit-solaire-plug-play"
              label="Voir le Sunology PLAY (garantie puissance 30 ans)"
              variant="inline"
              position="mid-article"
              price="599 €"
            />

            {/* Section 5 — impact ROI via pricing.ts */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Impact r&eacute;el sur la rentabilit&eacute; (calcul via pricing.ts)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Nos comparatifs calculent le ROI en supposant une production constante sur 25 ans (comme la quasi-totalit&eacute; des calculateurs en ligne) &mdash; c&apos;est l&apos;hypoth&egrave;se de <code className="text-sm bg-cream px-1.5 py-0.5 rounded">pricing.ts</code>. Pour mesurer l&apos;&eacute;cart r&eacute;el, nous avons recalcul&eacute; les &eacute;conomies cumul&eacute;es d&apos;un kit de r&eacute;f&eacute;rence (500&nbsp;Wc, 429&nbsp;&euro;, Lyon sud, tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an) en appliquant une d&eacute;gradation constante selon chaque technologie.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Hypoth&egrave;se</th>
                      <th className="text-center p-3">Puissance &agrave; 25 ans</th>
                      <th className="text-center p-3">&Eacute;conomies cumul&eacute;es 25 ans</th>
                      <th className="text-center p-3 rounded-tr-xl">&Eacute;cart vs sans d&eacute;gradation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Sans d&eacute;gradation (pricing.ts)', '100 %', '3&nbsp;190&nbsp;&euro;', '&mdash; (r&eacute;f&eacute;rence)', true],
                      ['Back-contact / HJT &mdash; 0,3 %/an', '93 %', '3&nbsp;062&nbsp;&euro;', '&minus;128&nbsp;&euro; (&minus;4,0 %)', false],
                      ['TOPCon &mdash; 0,4 %/an', '91 %', '3&nbsp;021&nbsp;&euro;', '&minus;169&nbsp;&euro; (&minus;5,3 %)', false],
                      ['PERC &mdash; 0,5 %/an', '89 %', '2&nbsp;981&nbsp;&euro;', '&minus;209&nbsp;&euro; (&minus;6,6 %)', false],
                    ].map(([h, power, total, gap, ref], i) => (
                      <tr key={i} className={`border-b border-border-light ${ref ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 text-xs" dangerouslySetInnerHTML={{ __html: h as string }} />
                        <td className="text-center p-3 text-xs">{power as string}</td>
                        <td className="text-center p-3 font-mono text-xs" dangerouslySetInnerHTML={{ __html: total as string }} />
                        <td className="text-center p-3 text-xs" dangerouslySetInnerHTML={{ __html: gap as string }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Conclusion chiffr&eacute;e&nbsp;: la d&eacute;gradation r&eacute;duit les &eacute;conomies totales sur 25 ans de <strong>4 &agrave; 7&nbsp;%</strong> selon la technologie &mdash; un &eacute;cart r&eacute;el mais marginal face au ROI global. Les ann&eacute;es de retour sur investissement annonc&eacute;es dans notre <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green font-semibold hover:underline">comparatif des meilleurs kits 2026</Link> ou via le <Link href="/calculateur" className="text-green font-semibold hover:underline">calculateur de rentabilit&eacute;</Link> restent fiables &agrave; quelques mois pr&egrave;s.
              </p>
            </section>

            {/* Section 6 — signaux d'alerte */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">D&eacute;gradation acc&eacute;l&eacute;r&eacute;e&nbsp;: les vrais signaux d&apos;alerte</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Une baisse de 0,3 &agrave; 0,5&nbsp;% par an ne se remarque pas d&apos;une saison &agrave; l&apos;autre &mdash; elle ne devient visible qu&apos;apr&egrave;s plusieurs ann&eacute;es de suivi. Si votre production chute brutalement, ce n&apos;est pas de la d&eacute;gradation normale. Signes &agrave; surveiller&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-2 text-green">&#10003; D&eacute;gradation normale</h3>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&#10003; Baisse progressive, lin&eacute;aire, sur plusieurs ann&eacute;es</li>
                    <li>&#10003; Uniforme sur toute la surface du panneau</li>
                    <li>&#10003; Coh&eacute;rente avec le taux de la technologie (0,3-0,5 %/an)</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-red-400">
                  <h3 className="font-bold text-sm mb-2 text-red-600">&#10007; D&eacute;faillance &agrave; traiter</h3>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&#10007; Chute brutale (&gt;5 % en un an)</li>
                    <li>&#10007; Zone jaunie, trace d&apos;escargot (&laquo;&nbsp;snail trail&nbsp;&raquo;), fissure visible</li>
                    <li>&#10007; Point localis&eacute; anormalement chaud au toucher</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Si votre kit produit moins que pr&eacute;vu sans explication &eacute;vidente (ombre, orientation, salissure, saison), notre diagnostic en 7 points &mdash; <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green font-semibold hover:underline">panneau solaire qui produit moins que pr&eacute;vu</Link> &mdash; passe en revue les causes les plus fr&eacute;quentes avant de suspecter une d&eacute;faillance.
              </p>
            </section>

            {/* Section 7 — suivre la dégradation */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Suivre la d&eacute;gradation de son kit balcon dans le temps</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La seule mani&egrave;re fiable de rep&eacute;rer une d&eacute;gradation (normale ou acc&eacute;l&eacute;r&eacute;e) est de comparer la production <strong>du m&ecirc;me mois, plusieurs ann&eacute;es de suite</strong>, via l&apos;application de suivi fournie avec le kit (app Beem, Sunology, EcoFlow, Zendure selon votre mod&egrave;le). Comparer juillet 2026 &agrave; ao&ucirc;t 2026 n&apos;a pas de sens&nbsp;: l&apos;ensoleillement et la temp&eacute;rature changent d&apos;un mois &agrave; l&apos;autre, ind&eacute;pendamment du vieillissement du panneau.
              </p>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Attention &agrave; ne pas confondre d&eacute;gradation et effet temp&eacute;rature&nbsp;: un panneau produit aussi moins par forte chaleur, de mani&egrave;re totalement r&eacute;versible (voir <Link href="/blog/panneau-solaire-canicule-production" className="text-green font-semibold hover:underline">panneau solaire et canicule</Link>). Pour isoler la vraie d&eacute;gradation, comparez des mois &agrave; m&eacute;t&eacute;o comparable, sur plusieurs ann&eacute;es.
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
                  { href: '/avis/sunology-play-2', label: 'Avis Sunology PLAY (garantie 30 ans)', badge: 'Avis' },
                  { href: '/avis/dualsun-preasy', label: 'Avis DualSun PREASY (panneau TOPCon)', badge: 'Avis' },
                  { href: '/blog/panneau-solaire-produit-moins-que-prevu', label: 'Mon panneau produit moins que pr&eacute;vu', badge: 'Diagnostic' },
                  { href: '/comparatif/meilleur-kit-solaire-2026', label: 'Meilleur kit solaire balcon 2026', badge: 'Comparatif' },
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
                <strong>M&eacute;thodologie&nbsp;:</strong> taux de d&eacute;gradation issus de la revue NREL (Jordan &amp; Kurtz, m&eacute;diane 0,5&nbsp;%/an sur donn&eacute;es de terrain) et de fiches constructeurs 2026 par technologie de cellule. Garanties produit v&eacute;rifi&eacute;es sur les fiches des mod&egrave;les cit&eacute;s (sunology.eu, dualsun.com, beemenergy.fr). Calculs de rentabilit&eacute; via <code className="bg-cream px-1 py-0.5 rounded">src/lib/pricing.ts</code>&nbsp;: tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an, performance ratio 0,85, r&eacute;f&eacute;rence Lyon sud, sur 25 ans.
              </p>
              <p>
                <strong>Transparence affili&eacute;&nbsp;:</strong> Certains liens de cet article sont des liens affili&eacute;s. Si vous achetez via ces liens, nous percevons une commission sans surco&ucirc;t pour vous. Cela ne biaise pas nos recommandations techniques.
              </p>
            </footer>

          </div>
        </div>
      </article>
    </>
  );
}
