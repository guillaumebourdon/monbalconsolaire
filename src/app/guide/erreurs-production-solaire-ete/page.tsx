import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Kit solaire balcon en été : 5 erreurs qui tuent votre production',
  description: 'Ventilation, ombre saisonnière, surchauffe onduleur, nettoyage, mauvais angle : 5 erreurs fréquentes qui coûtent jusqu\'à 35 % de production en juillet-août.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/erreurs-production-solaire-ete',
  },
};

const faqData = [
  {
    question: 'Pourquoi mon panneau solaire produit moins en plein été qu\'en mai ?',
    answer: 'Deux raisons principales. D\'abord la chaleur : une cellule solaire perd 0,4 % de puissance par degré au-dessus de 25 °C (température de test standard). En juillet, la surface d\'un panneau peut atteindre 65-70 °C, soit une perte de 16-18 %. Ensuite les ombres saisonnières : en été, le soleil est plus haut et des obstacles qui ne gênaient pas en hiver (garde-corps, volet, végétaux en feuilles) peuvent masquer le panneau plusieurs heures par jour.',
  },
  {
    question: 'À quelle température un panneau solaire arrête-t-il de fonctionner ?',
    answer: 'Le panneau lui-même ne s\'arrête jamais — mais sa puissance chute continûment avec la chaleur. C\'est le micro-onduleur qui peut déclencher une protection thermique entre 55 et 65 °C. Quand cela arrive, la production tombe à zéro jusqu\'au refroidissement. C\'est pourquoi l\'onduleur ne doit jamais être exposé en plein soleil.',
  },
  {
    question: 'Quel est le meilleur angle d\'inclinaison pour un panneau solaire en été ?',
    answer: 'En France, l\'angle optimal annuel est de 35°. En été (juin-août), le soleil culmine très haut dans le ciel (60-68° à Lyon). Un angle plus faible de 20-25° est alors plus performant, avec un gain de 8-12 % par rapport à l\'angle fixe de 35°. Si votre support est réglable (Sunology, Beem), vérifiez le manuel : certains proposent une position "été" explicite.',
  },
  {
    question: 'Combien perd-on de production en laissant un panneau sale tout l\'été ?',
    answer: 'La perte dépend du type de salissure. Le pollen de printemps (mars-juin) coûte 10-15 %. La poussière urbaine accumulée sur 3-4 mois : 5-10 %. Les fientes d\'oiseaux sur une cellule entière : jusqu\'à 25-30 %. Un nettoyage en mai-juin avant la saison haute, avec de l\'eau claire le matin, récupère l\'essentiel de ce manque à gagner.',
  },
  {
    question: 'Mon micro-onduleur est brûlant au toucher, est-ce normal ?',
    answer: 'Chaud au toucher, oui — c\'est normal, c\'est une conversion électrique. Brûlant à 60 °C+, non, surtout si le boîtier est en plein soleil sur un garde-corps métallique chauffé à blanc. Dans ce cas, déplacez l\'onduleur à l\'ombre (en dessous de la rambarde, côté intérieur) ou ajoutez un écran thermique. Un onduleur qui surchauffe déclenche sa protection thermique et coupe la production.',
  },
  {
    question: 'Dois-je nettoyer mon panneau l\'été ou attendre l\'automne ?',
    answer: 'Nettoyez en mai-juin pour effacer le pollen, puis observez en juillet-août. Si le panneau est visible depuis votre balcon et que vous voyez un film blanc ou des fientes, nettoyez. Utilisez de l\'eau claire le matin tôt (panneau encore froid), sans jet haute pression, avec un chiffon microfibre doux. Un panneau chaud et sec est fragile : évitez de verser de l\'eau froide dessus à 14 h en plein soleil.',
  },
];

export default function GuideErreursProdSolEte() {
  return (
    <>
      <SchemaArticle
        title="Kit solaire balcon en été : 5 erreurs qui tuent votre production"
        description="Ventilation, ombre saisonnière, surchauffe onduleur, nettoyage, mauvais angle : 5 erreurs fréquentes qui coûtent jusqu'à 35 % de production en juillet-août."
        url="https://monbalconsolaire.fr/guide/erreurs-production-solaire-ete"
        datePublished="2026-07-21"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Guides', href: '/guide' }, { label: 'Erreurs production été' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Erreurs production été' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon en &eacute;t&eacute;&nbsp;: 5 erreurs qui tuent votre production
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              L&rsquo;&eacute;t&eacute; devrait &ecirc;tre la saison d&rsquo;or du solaire. Pourtant, beaucoup d&rsquo;utilisateurs constatent une d&eacute;ception en juillet-ao&ucirc;t&nbsp;: moins de kWh que pr&eacute;vu, parfois moins qu&rsquo;en mai. Ces 5 erreurs fréquentes expliquent pourquoi&nbsp;&mdash; et comment les corriger.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>21 juillet 2026</span><span>&middot;</span><span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Ce que vous allez apprendre</h2>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Pourquoi la chaleur r&eacute;duit la production m&ecirc;me en plein soleil (et combien)</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Les ombres saisonni&egrave;res qui n&rsquo;existaient pas en hiver et arrivent en &eacute;t&eacute;</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Pourquoi le micro-onduleur peut couper la production &agrave; 14 h</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> L&rsquo;impact r&eacute;el d&rsquo;un panneau encrassé de pollen</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Le bon angle d&rsquo;inclinaison pour juillet-ao&ucirc;t (pas le m&ecirc;me qu&rsquo;en hiver)</li>
            </ul>
          </div>

          <div className="space-y-12">

            {/* Intro contexte */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&rsquo;&eacute;t&eacute; n&rsquo;est pas toujours la saison la plus productive</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Contre-intuitif&nbsp;: les mois de mai et juin sont souvent <strong>plus productifs que juillet-ao&ucirc;t</strong> pour un kit solaire de balcon. Les jours sont longs, le soleil haut, mais la chaleur excessive fait chuter le rendement des cellules. Ajoutez les ombres saisonni&egrave;res, un onduleur surchauff&eacute; et un panneau encrassé de pollen&nbsp;&mdash; la perte cumul&eacute;e peut atteindre <strong>25 &agrave; 35 % de production</strong>.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ces pertes ne sont pas une fatalit&eacute;. Chacune des 5 erreurs ci-dessous est &eacute;vitable, souvent sans d&eacute;penser un euro.
              </p>
              <div className="card bg-green-pale/30 border-green/10 my-6">
                <p className="text-sm text-green-dark">
                  <strong>Donn&eacute;e PVGIS (Lyon, orientation sud, 35&deg;)&nbsp;:</strong> juin produit en moyenne 10&nbsp;% <em>de plus</em> que juillet, malgr&eacute; des journ&eacute;es plus courtes. La chaleur co&ucirc;te plus que les minutes de soleil suppl&eacute;mentaires en juillet ne rapportent.
                </p>
              </div>
            </section>

            {/* Erreur 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-amber text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0">1</span>
                <h2 className="text-2xl font-extrabold">Panneau sans ventilation : la perte invisible</h2>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Toutes les cellules solaires monocristallines ont un <strong>coefficient de temp&eacute;rature n&eacute;gatif</strong>&nbsp;: environ &minus;0,35 &agrave; &minus;0,45&nbsp;%/&deg;C au-dessus de la temp&eacute;rature de test standard (25&nbsp;&deg;C). En clair&nbsp;: chaque degr&eacute; suppl&eacute;mentaire r&eacute;duit la puissance.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Temp&eacute;rature cellule</th>
                      <th className="text-center p-3">Perte vs 25&nbsp;&deg;C (STC)</th>
                      <th className="text-center p-3">Production r&eacute;elle (kit 450&nbsp;W)</th>
                      <th className="text-center p-3 rounded-tr-xl">Situation typique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['25 °C', '0 %', '450 W', 'Conditions labo (STC)', false],
                      ['45 °C', '−7 %', '418 W', 'Jour de printemps ensoleillé', false],
                      ['55 °C', '−11 %', '401 W', 'Été, panneau bien ventilé', false],
                      ['65 °C', '−16 %', '378 W', 'Été, panneau mal ventilé', true],
                      ['70 °C', '−18 %', '369 W', 'Été, panneau sur surface sombre', true],
                    ].map(([temp, perte, prod, situation, warn], i) => (
                      <tr key={i} className={`border-b border-border-light ${warn ? 'bg-amber-pale/20' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold font-mono">{temp}</td>
                        <td className="text-center p-3 font-mono text-sm font-medium text-red-600">{perte}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{prod}</td>
                        <td className="p-3 text-sm text-charcoal-light">{situation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mb-4">Coefficient de temp&eacute;rature typ. &minus;0,40&nbsp;%/&deg;C. Calcul sur la plage 25-70&nbsp;&deg;C.</p>

              <h3 className="font-bold text-lg mb-3">Ce qu&rsquo;il faut faire</h3>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> Toujours laisser <strong>au minimum 10&nbsp;cm d&rsquo;air</strong> entre le panneau et toute surface (tablette, sol de balcon, garde-corps)</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> Ne jamais poser le panneau &agrave; plat &mdash; m&ecirc;me inclin&eacute; &agrave; 10&deg;, la convection naturelle refroidit les cellules</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> &Eacute;viter les surfaces sombres (dalle bitume, m&eacute;tal peint en noir) qui r&eacute;irradient la chaleur</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> En cas de canicule, un l&eacute;ger jet d&rsquo;eau sur la face arri&egrave;re le matin pr&eacute;serve le rendement (ne jamais mouiller les connexions)</li>
              </ul>
            </section>

            {/* Erreur 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-amber text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0">2</span>
                <h2 className="text-2xl font-extrabold">L&rsquo;ombre saisonni&egrave;re oubli&eacute;e</h2>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La trajectoire solaire change radicalement entre d&eacute;cembre et juillet. En &eacute;t&eacute;, le soleil culmine &agrave; <strong>60&ndash;68&deg; de hauteur</strong> dans le ciel &agrave; midi (selon la latitude). En hiver, il ne monte qu&rsquo;&agrave; 20&ndash;22&deg;. R&eacute;sultat&nbsp;: les ombres sont courtes en &eacute;t&eacute;, mais elles viennent de directions diff&eacute;rentes &mdash; et des obstacles in&eacute;dits entrent en jeu.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  {
                    title: 'Le garde-corps du balcon sup&eacute;rieur',
                    desc: 'En hiver, son ombre porte loin et touche peu votre panneau. En &eacute;t&eacute;, ombre courte mais d&rsquo;angle diff&eacute;rent &mdash; peut masquer le coin sup&eacute;rieur du panneau en milieu de matin&eacute;e.',
                    color: 'border-l-amber',
                  },
                  {
                    title: 'Les v&eacute;g&eacute;taux en feuilles',
                    desc: 'Un arbre transparent en janvier devient une ombre dense en juillet. La perte peut passer de 5&nbsp;% (hiver) &agrave; 35&nbsp;% (&eacute;t&eacute;) selon le feuillage.',
                    color: 'border-l-amber',
                  },
                  {
                    title: 'Les volets et stores',
                    desc: 'Ouverts en hiver, souvent abaiss&eacute;s &agrave; demi en &eacute;t&eacute; pour se prot&eacute;ger de la chaleur. S&rsquo;ils d&eacute;bordent sur la surface du panneau&nbsp;: perte imm&eacute;diate.',
                    color: 'border-l-amber',
                  },
                  {
                    title: 'L&rsquo;immeuble en face (angle rasant)',
                    desc: 'En hiver, le soleil bas frappe frontalement. En &eacute;t&eacute;, son angle &eacute;lev&eacute; cr&eacute;e une ombre rasante sur le panneau &agrave; certaines heures que vous n&rsquo;aviez pas anticip&eacute;es.',
                    color: 'border-l-amber',
                  },
                ].map((item, i) => (
                  <div key={i} className={`card border-l-4 ${item.color}`}>
                    <h3 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-xs text-charcoal-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-lg mb-3">Ce qu&rsquo;il faut faire</h3>
              <p className="text-charcoal-light leading-relaxed mb-3">
                Observez votre panneau <strong>en juillet entre 10 h et 14 h</strong>&nbsp;: c&rsquo;est la fen&ecirc;tre de production maximale. V&eacute;rifiez qu&rsquo;aucune ombre ne touche la surface. Si oui, ajustez la position du panneau&nbsp;: quelques centim&egrave;tres peuvent suffire.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Pour aller plus loin&nbsp;: <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green underline underline-offset-2">notre guide complet sur l&rsquo;ombre et l&rsquo;optimisation de production</Link> d&eacute;taille les solutions selon chaque type d&rsquo;obstruction.
              </p>
            </section>

            {/* Erreur 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-amber text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0">3</span>
                <h2 className="text-2xl font-extrabold">Micro-onduleur en plein soleil&nbsp;: la coupure thermique</h2>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le panneau n&rsquo;est qu&rsquo;une partie du syst&egrave;me. Le micro-onduleur (APsystems, Hoymiles, TSUN selon les marques) est le composant &eacute;lectronique qui convertit le courant continu du panneau en courant alternatif inject&eacute; dans votre prise. Il a une plage de fonctionnement stricte&nbsp;: g&eacute;n&eacute;ralement <strong>0 &agrave; 55-65&nbsp;&deg;C am&eacute;biante</strong>.
              </p>
              <div className="card bg-amber-pale/30 border-amber/10 my-6">
                <p className="text-sm font-semibold text-amber-dark mb-2">Ce qui se passe quand l&rsquo;onduleur surchauffe</p>
                <p className="text-sm text-charcoal-light">
                  La protection thermique se d&eacute;clenche automatiquement. L&rsquo;onduleur coupe la production et red&eacute;marre quand la temp&eacute;rature redescend. En pratique, sur un garde-corps m&eacute;tallique expos&eacute; plein sud l&rsquo;apr&egrave;s-midi, l&rsquo;onduleur peut couper entre <strong>13 h et 16 h</strong>&nbsp;&mdash; pr&eacute;cis&eacute;ment les 3 heures les plus productives de la journ&eacute;e.
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le sympt&ocirc;me est simple&nbsp;: votre application affiche z&eacute;ro production sur ces cr&eacute;neaux, alors qu&rsquo;il fait grand soleil. Pas de panique&nbsp;&mdash; aucun d&eacute;g&acirc;t, mais une perte &eacute;vitable.
              </p>

              <h3 className="font-bold text-lg mb-3">Ce qu&rsquo;il faut faire</h3>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> Repositionner l&rsquo;onduleur <strong>&agrave; l&rsquo;ombre</strong> : fixez-le c&ocirc;t&eacute; int&eacute;rieur du garde-corps (jamais c&ocirc;t&eacute; rue en plein soleil)</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> V&eacute;rifier que le bo&icirc;tier est <strong>d&eacute;gag&eacute;</strong> : pas de plastique pos&eacute; dessus, pas de câble en train d&rsquo;&eacute;touffer la ventilation naturelle</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> Si repositionnement impossible, fabriquer un &eacute;cran thermique simple (plaque alu peinte en blanc ou en argent) &agrave; 5 cm au-dessus de l&rsquo;onduleur</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Pour comprendre le fonctionnement technique des onduleurs&nbsp;: <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="text-green underline underline-offset-2">notre article sur le micro-onduleur solaire</Link> d&eacute;taille les plages op&eacute;rationnelles par marque.
              </p>
            </section>

            {/* Erreur 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-amber text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0">4</span>
                <h2 className="text-2xl font-extrabold">N&eacute;gliger le nettoyage de printemps</h2>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La saison des pollens s&rsquo;&eacute;tend de mars &agrave; juin selon les r&eacute;gions. Un panneau qui n&rsquo;a pas &eacute;t&eacute; nettoy&eacute; depuis l&rsquo;hiver arrive en juillet avec un <strong>film de pollen, poussière et pollution</strong> accumul&eacute; sur 4 &agrave; 6 mois. Le r&eacute;sultat est une perte de rendement mesurable&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Type de salissure</th>
                      <th className="text-center p-3">P&eacute;riode</th>
                      <th className="text-center p-3">Perte production</th>
                      <th className="text-center p-3 rounded-tr-xl">Priorit&eacute;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Pollen (couche visible)', 'Mars–juin', '10–15 %', 'Haute', true],
                      ['Poussière urbaine (4 mois)', 'Toute année', '5–10 %', 'Moyenne', false],
                      ['Crème solaire (projections)', 'Juillet–août', '3–8 %', 'Moyenne', false],
                      ['Fientes d’oiseaux (une cellule)', 'Variable', '20–30 %', 'Très haute', true],
                      ['Cumul non nettoyé 6 mois', 'Hiver → été', '15–25 %', 'Critique', true],
                    ].map(([type, periode, perte, prio, warn], i) => (
                      <tr key={i} className={`border-b border-border-light ${warn ? 'bg-amber-pale/20' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 text-sm">{type}</td>
                        <td className="text-center p-3 text-xs text-charcoal-light">{periode}</td>
                        <td className="text-center p-3 font-mono text-sm font-semibold text-red-600">{perte}</td>
                        <td className="text-center p-3"><span className={`text-xs font-semibold ${warn ? 'text-amber-dark' : 'text-charcoal-light'}`}>{prio}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-bold text-lg mb-3">Le bon protocole de nettoyage &eacute;t&eacute;</h3>
              <ul className="space-y-2 text-charcoal-light text-sm">
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> <strong>Moment&nbsp;:</strong> le matin t&ocirc;t (7 h&ndash;9 h), panneau encore froid &mdash; jamais en milieu de journ&eacute;e</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> <strong>Outil&nbsp;:</strong> eau claire + chiffon microfibre doux. Pas de Kärcher, pas de vinaigre, pas de produit &agrave; vitres</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> <strong>Fr&eacute;quence&nbsp;:</strong> un nettoyage en mai-juin suffit dans la plupart des cas. Inspectez visuellement en juillet</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> <strong>Fientes&nbsp;:</strong> laissez tremper &agrave; l&rsquo;eau ti&egrave;de 10 minutes avant de frotter doucement avec une &eacute;ponge non abrasive</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed mt-4">
                <Link href="/blog/entretien-nettoyage-panneau-solaire-balcon" className="text-green underline underline-offset-2">Notre guide complet entretien et nettoyage</Link> couvre la checklist saisonni&egrave;re et les erreurs fr&eacute;quentes (Kärcher, vinaigre, nettoyage &agrave; chaud).
              </p>
            </section>

            {/* Erreur 5 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-amber text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0">5</span>
                <h2 className="text-2xl font-extrabold">Conserver l&rsquo;angle hivernal en &eacute;t&eacute;</h2>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&rsquo;angle d&rsquo;inclinaison optimal d&rsquo;un panneau solaire n&rsquo;est pas fixe tout au long de l&rsquo;ann&eacute;e. En France m&eacute;tropolitaine, l&rsquo;angle annuel optimal (qui maximise la production sur 12 mois) est de <strong>35&deg;</strong>. Mais en &eacute;t&eacute;, quand le soleil culmine tr&egrave;s haut, un angle plus faible est nettement plus performant.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">P&eacute;riode</th>
                      <th className="text-center p-3">Angle optimal</th>
                      <th className="text-center p-3">Gain vs 35&deg; fixe</th>
                      <th className="text-center p-3 rounded-tr-xl">Hauteur solaire midi (Lyon)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Hiver (déc–fév)', '45–50°', '+12 %', '22–26°', false],
                      ['Printemps (mars–mai)', '35°', 'Référence', '45–60°', false],
                      ['Été (juin–août)', '20–25°', '+8–12 %', '62–68°', true],
                      ['Automne (sept–nov)', '35–40°', '+4–6 %', '30–50°', false],
                    ].map(([periode, angle, gain, hauteur, highlight], i) => (
                      <tr key={i} className={`border-b border-border-light ${highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 text-sm">{periode}</td>
                        <td className="text-center p-3 font-mono text-sm font-bold text-green">{angle}</td>
                        <td className="text-center p-3 font-mono text-sm">{gain}</td>
                        <td className="text-center p-3 text-xs text-charcoal-light">{hauteur}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mb-4">Source&nbsp;: PVGIS, Commission europ&eacute;enne. Latitude Lyon (~45,7&deg;N). Orientation plein sud.</p>

              <h3 className="font-bold text-lg mb-3">Ce qu&rsquo;il faut faire</h3>
              <ul className="space-y-2 text-charcoal-light text-sm mb-4">
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> V&eacute;rifiez si votre support est r&eacute;glable (Sunology PLAY 2 et City, Beem On&nbsp;: oui, plusieurs positions pr&eacute;d&eacute;finies)</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> Si oui, passer en <strong>position "basse"</strong> (20&ndash;25&deg;) d&egrave;s juin. Remonter &agrave; 35&deg; en septembre</li>
                <li className="flex gap-2"><span className="text-green font-bold mt-0.5">&#10003;</span> Si votre support est fixe, n&rsquo;investissez pas dans un remplacement&nbsp;: le gain annuel (8&ndash;12&nbsp;% sur 3 mois &eacute;t&eacute;) repr&eacute;sente 2&ndash;4&nbsp;% sur l&rsquo;ann&eacute;e, soit environ 4&ndash;8&nbsp;&euro; pour un kit 450&nbsp;W</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed">
                Notre guide sur <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green underline underline-offset-2">l&rsquo;orientation et l&rsquo;inclinaison optimale</Link> d&eacute;taille les coefficients par orientation et les gains r&eacute;els.
              </p>
            </section>

            {/* Bilan cumulé */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que co&ucirc;tent ces erreurs cumul&eacute;es</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Chaque erreur prise seule est g&eacute;rable. C&rsquo;est la combinaison qui fait mal. Un kit 450&nbsp;W th&eacute;oriquement capable de produire <strong>80&ndash;90&nbsp;kWh en juillet-ao&ucirc;t</strong> peut descendre &agrave; 55&ndash;60&nbsp;kWh dans le pire cas&nbsp;:
              </p>
              <div className="card-lg bg-cream border border-border-light my-6">
                <div className="space-y-3">
                  {[
                    { erreur: 'Panneau mal ventilé (65 °C)', perte: '−16 %', kWh: '−14 kWh' },
                    { erreur: 'Ombre saisonnière 2 h/jour', perte: '−12 %', kWh: '−11 kWh' },
                    { erreur: 'Onduleur surchauffé (coupure 13 h–16 h)', perte: '−10 %', kWh: '−9 kWh' },
                    { erreur: 'Panneau sale (pollen + 4 mois)', perte: '−12 %', kWh: '−11 kWh' },
                    { erreur: 'Angle hivernal (35° au lieu de 22°)', perte: '−9 %', kWh: '−8 kWh' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 py-2 border-b border-border-light last:border-0">
                      <span className="text-sm text-charcoal-light flex-1">{row.erreur}</span>
                      <span className="font-mono text-sm font-bold text-red-600 whitespace-nowrap">{row.perte}</span>
                      <span className="font-mono text-xs text-stone whitespace-nowrap">{row.kWh}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 pt-3 border-t-2 border-charcoal/20">
                    <span className="text-sm font-bold">Perte totale cumul&eacute;e (d&eacute;cimale)</span>
                    <span className="font-mono text-base font-extrabold text-red-700">−45 %</span>
                    <span className="font-mono text-sm font-bold text-red-700">−40 kWh</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-stone mb-4">
                Note&nbsp;: les pertes ne sont pas simplement additives (effets multiplicatifs). En pratique, la perte r&eacute;elle cumul&eacute;e est de 30&ndash;40&nbsp;% pour l&rsquo;ensemble des erreurs &mdash; ce qui repr&eacute;sente <strong>8&ndash;12&nbsp;&euro; de manque &agrave; gagner</strong> en juillet-ao&ucirc;t seuls.
              </p>

              <h3 className="font-bold text-lg mb-3">Checklist de v&eacute;rification estivale (5 min)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Panneau inclin&eacute; avec 10 cm d\'air libre sous le cadre',
                  'Onduleur situ&eacute; c&ocirc;t&eacute; ombre (pas en plein soleil)',
                  'Aucune ombre visible entre 10 h et 14 h',
                  'Surface du panneau propre (pas de film jaune ou blanc)',
                  'Angle r&eacute;gl&eacute; en position "&eacute;t&eacute;" si support r&eacute;glable',
                  'Application v&eacute;rifi&eacute;e : production r&eacute;elle &agrave; 12 h > 80&nbsp;% de la puissance cr&ecirc;te',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm text-charcoal-light card py-3">
                    <span className="text-green font-bold text-base mt-0.5">&#10003;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </section>

            {/* CTA calculateur */}
            <div className="card-lg bg-green text-white text-center my-4">
              <p className="text-xl font-extrabold mb-2">Votre production &eacute;t&eacute; est-elle optimale&nbsp;?</p>
              <p className="text-sm text-white/80 mb-4">Calculez la production attendue selon votre d&eacute;partement et orientation, et comparez avec votre production r&eacute;elle.</p>
              <Link href="/calculateur" className="inline-block bg-white text-green font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors">
                Lancer le calculateur &rarr;
              </Link>
            </div>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-3">
                {faqData.map((item, i) => (
                  <details key={i} className="card group" {...(i === 0 ? { open: true } : {})}>
                    <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{item.question}</span>
                      <span className="text-green text-xl font-bold flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-charcoal-light text-sm leading-relaxed mt-3">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Articles liés */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Articles li&eacute;s</h2>
              <div className="space-y-4">
                {[
                  {
                    href: '/blog/entretien-nettoyage-panneau-solaire-balcon',
                    badge: 'Blog',
                    title: 'Entretien et nettoyage d’un panneau solaire de balcon',
                    desc: 'Fréquence, produits, erreurs à éviter, impact sur la production. Checklist saisonnière.',
                  },
                  {
                    href: '/blog/panneau-solaire-ombre-optimiser-production',
                    badge: 'Blog',
                    title: 'Panneau solaire et ombre : optimiser la production',
                    desc: 'Ombre partielle, arbre, mur voisin : quel impact réel et solutions concrètes.',
                  },
                  {
                    href: '/guide/orientation-panneau-solaire-balcon',
                    badge: 'Guide',
                    title: 'Quelle orientation pour un panneau solaire de balcon ?',
                    desc: 'Sud, est, ouest, nord : coefficients réels, inclinaison optimale, cas concrets.',
                  },
                  {
                    href: '/blog/production-solaire-ete-vs-hiver',
                    badge: 'Blog',
                    title: 'Production solaire : été vs hiver (données réelles)',
                    desc: 'Courbes mensuelles PVGIS pour 5 villes. Pourquoi mai/juin bat souvent juillet.',
                  },
                ].map((a, i) => (
                  <Link key={i} href={a.href} className="card block border-l-4 border-l-green hover:shadow-brand transition-shadow">
                    <div className="badge-green mb-2 inline-block text-xs">{a.badge}</div>
                    <p className="font-bold text-sm mb-1">{a.title}</p>
                    <p className="text-xs text-charcoal-light">{a.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

          </div>

          <NewsletterBanner />

          <footer className="mt-10 pt-8 border-t border-border-light text-xs text-stone space-y-2">
            <p><strong>M&eacute;thodologie&nbsp;:</strong> productions calcul&eacute;es avec PVGIS (Commission europ&eacute;enne), latitude Lyon 45,7&deg;N, tarif EDF 0,1940&nbsp;&euro;/kWh, coefficient de pertes 0,85, autoconsommation 85&nbsp;%. Coefficient de temp&eacute;rature &minus;0,40&nbsp;%/&deg;C (typ. monocristallin).</p>
            <p><strong>Transparence&nbsp;:</strong> MonBalconSolaire est un site &eacute;ditorial ind&eacute;pendant. Certains liens vers des produits sont des liens affili&eacute;s. Cela ne modifie ni notre m&eacute;thodologie ni nos recommandations.</p>
          </footer>
        </div>
      </article>
    </>
  );
}
