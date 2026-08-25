import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Revendre surplus solaire à EDF depuis un balcon : possible ? (2026)',
  description: 'Peut-on revendre son surplus à EDF avec un kit balcon ? Non — et à 1,1 c€/kWh, même une installation classique ne s\'y retrouve pas. Calculs et alternatives.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/revendre-surplus-solaire-balcon',
  },
};

const faqData = [
  {
    question: 'Peut-on revendre son surplus solaire à EDF avec un kit de balcon ?',
    answer: 'Non. Les kits plug-and-play ≤ 800 Wc fonctionnent en régime CACSI (autoconsommation sans injection). L\'énergie excédentaire est injectée gratuitement sur le réseau Enedis, sans aucune compensation. Pour revendre, il faut une installation ≥ 3 kWc avec raccordement producteur officiel.',
  },
  {
    question: 'Qu\'est-ce que l\'EDF OA et pourquoi les kits balcon n\'y sont pas éligibles ?',
    answer: 'EDF OA (Obligation d\'Achat) est le dispositif qui oblige EDF à racheter l\'électricité des producteurs. Il s\'applique aux installations de 0 à 9 kWc raccordées officiellement : installateur RGE, passage Consuel, compteur producteur. Un kit plug-and-play branché sur une prise n\'est pas un raccordement producteur — il reste dans le régime de l\'autoconsommation.',
  },
  {
    question: 'Combien rapporte la revente de surplus à EDF en 2026 ?',
    answer: 'Depuis l\'arrêté du 1er juin 2026, le tarif de rachat du surplus est fixé à 1,1 c€/kWh HT. Pour un kit 450 Wc à Lyon, cela représente environ 70-80 kWh de surplus annuel, soit 0,77 à 0,88 €/an. Les économies d\'autoconsommation sur le même kit atteignent 85-90 €/an. La revente rapporte 100 fois moins.',
  },
  {
    question: 'Que devient concrètement le surplus d\'un kit balcon ?',
    answer: 'Quand votre panneau produit plus que vous ne consommez à l\'instant, le surplus est injecté sur le réseau Enedis. Vos voisins consomment votre électricité verte. Vous ne payez pas cette injection, mais vous n\'êtes pas payé non plus. C\'est prévu dans la convention CACSI que vous signez en déclarant votre kit.',
  },
  {
    question: 'La déclaration CACSI est-elle obligatoire même si on ne revend rien ?',
    answer: 'Oui. La CACSI (Convention d\'Autoconsommation Sans Injection) est obligatoire dès que le kit est branché sur une prise du logement, depuis le décret du 6 octobre 2021. Elle se fait gratuitement en ligne sur le site Enedis en 10 minutes. Ne pas la faire expose à des problèmes d\'assurance en cas de sinistre.',
  },
  {
    question: 'Comment valoriser son surplus au lieu de l\'injecter gratuitement ?',
    answer: 'La seule solution efficace est une batterie de stockage. Elle capte le surplus en journée et le restitue le soir. L\'autoconsommation passe de 85 % à 95 %, et chaque kWh stocké vaut 0,194 € au lieu des 0,011 c€ de la revente. Les kits avec batterie (Sunology PLAY MAX, EcoFlow PowerStream, Zendure SolarFlow) rentrent dans cette logique.',
  },
];

export default function RevendreSuplusSolaireBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Revendre surplus solaire à EDF depuis un balcon : possible ? (2026)"
        description="Les kits balcon ne peuvent pas revendre leur surplus à EDF. Et même une installation classique ne s'y retrouve pas à 1,1 c€/kWh. Explications et calculs."
        url="https://monbalconsolaire.fr/blog/revendre-surplus-solaire-balcon"
        datePublished="2026-07-31"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Revendre surplus solaire balcon' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Revendre surplus solaire balcon' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">R&eacute;glementation</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Panneau solaire balcon&nbsp;: peut-on revendre son surplus &agrave; EDF&nbsp;?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              C&apos;est la question que se posent 9 acheteurs sur 10 avant de commander. La r&eacute;ponse est non &mdash; et on va vous expliquer pourquoi. Mais aussi pourquoi, m&ecirc;me si c&apos;&eacute;tait possible, ce ne serait pas int&eacute;ressant.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>31 juillet 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; Les kits balcon &le;&nbsp;800&nbsp;Wc <strong>ne peuvent pas revendre</strong> leur surplus &mdash; r&eacute;gime CACSI uniquement</li>
              <li>&bull; L&apos;EDF OA (revente) concerne les installations &ge;&nbsp;3&nbsp;kWc avec raccordement producteur officiel</li>
              <li>&bull; Tarif de rachat 2026&nbsp;: <strong>1,1&nbsp;c&euro;/kWh</strong> vs 19,4&nbsp;c&euro;/kWh pour l&apos;&eacute;lectricit&eacute; achet&eacute;e &mdash; rapport de 17x</li>
              <li>&bull; Pour un kit 450&nbsp;Wc, la revente rapporterait &asymp;&nbsp;<strong>0,88&nbsp;&euro;/an</strong> vs <strong>88&nbsp;&euro;/an</strong> en autoconsommation</li>
              <li>&bull; Alternative&nbsp;: une batterie pour stocker le surplus et l&apos;utiliser le soir</li>
            </ul>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">La r&eacute;ponse courte&nbsp;: non, c&apos;est impossible</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire plug-and-play branch&eacute; sur une prise de balcon ne peut pas revendre son &eacute;lectricit&eacute; &agrave; EDF. Ce n&apos;est pas une question de volont&eacute; ou de n&eacute;gociation&nbsp;: c&apos;est structurellement impossible dans le cadre r&eacute;glementaire fran&ccedil;ais.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ces kits fonctionnent sous un r&eacute;gime sp&eacute;cifique&nbsp;: la <strong>convention CACSI</strong> (Convention d&apos;Autoconsommation Sans Injection). Le nom est explicit&apos;&nbsp;: &laquo;&nbsp;sans injection&nbsp;&raquo; signifie sans compensation pour l&apos;injection. Votre surplus part sur le r&eacute;seau Enedis, mais vous n&apos;&ecirc;tes pas pay&eacute;.
              </p>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Pourquoi &laquo;&nbsp;sans injection&nbsp;&raquo; alors que de l&apos;&eacute;lectricit&eacute; est inject&eacute;e&nbsp;?</strong> Le terme d&eacute;signe l&apos;absence de r&eacute;mun&eacute;ration pour l&apos;injection, pas l&apos;absence physique du flux. L&apos;&eacute;lectricit&eacute; excédentaire est bien inject&eacute;e sur le r&eacute;seau &mdash; elle n&apos;est juste pas pay&eacute;e. Vos voisins en profitent, vous non.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les deux r&eacute;gimes&nbsp;: CACSI vs EDF OA</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Il existe deux cadres juridiques pour le solaire r&eacute;sidentiel en France. Ils ne se m&eacute;langent pas.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-center p-3">CACSI &mdash; kit balcon</th>
                      <th className="text-center p-3 rounded-tr-xl">EDF OA &mdash; installation toiture</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Puissance', '≤ 800 Wc', '3 000 – 9 000 Wc'],
                      ['Raccordement', 'Prise 230 V domestique', 'Raccordement producteur Enedis'],
                      ['Installateur RGE', 'Non requis', 'Obligatoire'],
                      ['Consuel', 'Non requis', 'Obligatoire (attestation)'],
                      ['Démarche', 'CACSI en ligne, 10 min, gratuit', 'Dossier complet, 2–3 mois'],
                      ['Surplus', 'Injecté gratuitement', 'Racheté 1,1 c€/kWh (2026)'],
                      ['Prime autoconso', 'Non éligible', 'Supprimée en juin 2026'],
                      ['Locataire ?', 'Oui (dans la majorité des cas)', 'Non (autorisation copro requise)'],
                    ].map(([c, cacsi, oa], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c}</td>
                        <td className="text-center p-3">{cacsi}</td>
                        <td className="text-center p-3">{oa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Pour passer du r&eacute;gime CACSI au r&eacute;gime EDF OA, il faudrait multiplier la puissance install&eacute;e par au moins 4 (passer de 800&nbsp;Wc &agrave; 3&nbsp;000&nbsp;Wc minimum), ajouter un raccordement producteur officiel, faire appel &agrave; un installateur certifi&eacute; RGE, obtenir une attestation Consuel. On n&apos;est plus du tout dans le terrain du kit balcon.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul qui tue l&apos;id&eacute;e de revente</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Admettons, par l&apos;absurde, qu&apos;un kit balcon puisse revendre son surplus. Voici ce que &ccedil;a donnerait en chiffres r&eacute;els pour un kit <strong>450&nbsp;Wc &agrave; Lyon, orientation sud</strong>&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-3">Sc&eacute;nario 1 &mdash; Autoconsommation</h3>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <div className="flex justify-between"><span>Production annuelle</span><span className="font-mono font-medium">535 kWh</span></div>
                    <div className="flex justify-between"><span>Autoconsomm&eacute; (85&nbsp;%)</span><span className="font-mono font-medium">455 kWh</span></div>
                    <div className="flex justify-between"><span>Tarif EDF &eacute;vit&eacute;</span><span className="font-mono font-medium">0,1940 &euro;/kWh</span></div>
                    <div className="flex justify-between font-bold text-green pt-2 border-t border-border-light"><span>&Eacute;conomies annuelles</span><span className="font-mono text-xl">88 &euro;/an</span></div>
                  </div>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-3">Sc&eacute;nario 2 &mdash; Revente surplus (si possible)</h3>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <div className="flex justify-between"><span>Surplus inject&eacute; (15&nbsp;%)</span><span className="font-mono font-medium">80 kWh</span></div>
                    <div className="flex justify-between"><span>Tarif de rachat EDF OA</span><span className="font-mono font-medium">0,011 &euro;/kWh</span></div>
                    <div className="flex justify-between"><span>Autoconsomm&eacute; réduit</span><span className="font-mono font-medium">455 kWh</span></div>
                    <div className="flex justify-between font-bold text-amber-dark pt-2 border-t border-border-light"><span>Recette surplus</span><span className="font-mono text-xl">0,88 &euro;/an</span></div>
                  </div>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Conclusion&nbsp;:</strong> l&apos;autoconsommation rapporte <strong>100 fois plus</strong> que la revente du surplus au m&ecirc;me tarif. Chaque kWh autoconsomm&eacute; &eacute;conomise 19,4&nbsp;c&euro;. Chaque kWh revendu rapporte 1,1&nbsp;c&euro;. <strong>L&apos;objectif n&apos;est pas de maximaliser la production &mdash; c&apos;est de maximaliser l&apos;autoconsommation.</strong>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le tarif de rachat EDF OA 2026&nbsp;: un an de changements</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La grille des tarifs de rachat a connu deux &eacute;volutions majeures depuis le d&eacute;but 2026.
              </p>
              <div className="space-y-4 mb-6">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Mars 2025 &mdash; Fin de la vente totale pour &lt;&nbsp;9&nbsp;kWc</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Depuis cette date, les installations &le;&nbsp;9&nbsp;kWc ne peuvent plus vendre la totalit&eacute; de leur production. Seule la <strong>revente du surplus</strong> reste possible. La vente totale subsiste uniquement pour les installations &gt;&nbsp;9&nbsp;kWc.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Juin 2026 &mdash; Nouvel arr&ecirc;t&eacute; tarifaire (S21) + suppression de la prime</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;arr&ecirc;t&eacute; du 1er juin 2026 fixe le tarif de rachat du surplus &agrave; <strong>1,1&nbsp;c&euro;/kWh HT</strong> (index&eacute; +2&nbsp;%/an). En parall&egrave;le, la <strong>prime d&apos;autoconsommation est supprim&eacute;e</strong> pour les nouvelles installations. Fin des deux leviers qui rendaient le raccordement producteur attractif.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                &Agrave; titre de comparaison&nbsp;: en 2020, le tarif de rachat du surplus tournait autour de 6&nbsp;c&euro;/kWh. Aujourd&apos;hui &agrave; 1,1&nbsp;c&euro;/kWh, il ne repr&eacute;sente plus que 5,7&nbsp;% du tarif d&apos;achat EDF. La logique &eacute;conomique du solaire r&eacute;sidentiel s&apos;est enti&egrave;rement pivot&eacute;e vers l&apos;autoconsommation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que dit la loi sur les kits plug-and-play</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline font-semibold">r&eacute;glementation 2026</Link> des kits plug-and-play est relativement claire&nbsp;:
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { label: 'Puissance max', detail: '800 Wc (confirmedée par la DGEC début 2026). Pas de dérogation.' },
                  { label: 'Déclaration', detail: 'CACSI Enedis obligatoire, gratuite, 10 minutes en ligne. Pas de déclaration en mairie dans la plupart des cas.' },
                  { label: 'Raccordement', detail: 'Par prise standard 230 V. Aucun raccordement producteur, donc aucune éligibilité EDF OA.' },
                  { label: 'Consuel', detail: 'Non requis pour les kits préassemblés < 3 kVA. Dès que vous passez par un installateur et demandez un raccordement producteur, c’est obligatoire.' },
                ].map((item, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <div className="font-bold text-xs text-green mt-0.5 shrink-0">{item.label}</div>
                      <p className="text-xs text-charcoal-light leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                En clair&nbsp;: un kit balcon est une installation de confort et d&apos;autoconsommation, pas un outil de production d&apos;&eacute;nergie pour le march&eacute;. La <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">convention CACSI</Link> est le seul cadre pr&eacute;vu, et elle exclut toute r&eacute;mun&eacute;ration du surplus.
              </p>
            </section>

            <AffiliateCTA
              productName="Zendure SolarFlow Mix"
              merchantName="Zendure"
              affiliateUrl="https://www.zendure.com/fr/products/solarflow-mix"
              label="Voir le SolarFlow Mix — stockez votre surplus"
              variant="inline"
              position="mid-article"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Que faire du surplus alors&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous r&eacute;alisez que votre kit produit plus que ce que vous consommez en journ&eacute;e &mdash; et que ce surplus part sur le r&eacute;seau sans compensation &mdash; vous avez deux leviers&nbsp;:
              </p>
              <div className="space-y-4 mb-6">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">Levier 1 &mdash; D&eacute;caler vos appareils &eacute;nergivores</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                    Machine &agrave; laver, lave-vaisselle, chauffe-eau&nbsp;: programmez-les entre 10h et 16h pour consommer quand le panneau produit. Une prise connect&eacute;e (Tapo P110, Shelly) suffit pour automatiser &ccedil;a.
                  </p>
                  <p className="text-xs text-stone">Co&ucirc;t&nbsp;: 15-25 &euro;. Impact&nbsp;: +10 &agrave; 15 points d&apos;autoconsommation.</p>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">Levier 2 &mdash; Ajouter une batterie</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                    Une batterie capture le surplus en journ&eacute;e et le restitue le soir. L&apos;autoconsommation passe de 85&nbsp;% &agrave; 95&nbsp;%. Chaque kWh stock&eacute; vaut 0,194&nbsp;&euro; &mdash; soit <strong>17 fois plus</strong> que si vous pouviez le vendre.
                  </p>
                  <p className="text-xs text-stone">Exemples&nbsp;: <Link href="/avis/zendure-solarflow-mix" className="text-green hover:underline">Zendure SolarFlow Mix</Link>, <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">comparatif kits avec batterie</Link>.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Le deuxi&egrave;me levier est de loin le plus efficace pour les profils qui consomment surtout le soir (travailleurs en pr&eacute;sentiel, enfants scolarisés). Le premier est suffisant pour ceux qui sont pr&eacute;sents en journ&eacute;e (t&eacute;l&eacute;travail, retrait&eacute;s).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Et si j&apos;installe plus de 3&nbsp;kWc pour pouvoir revendre&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La question se pose parfois pour des propri&eacute;taires de maison. La math&eacute;matique, m&ecirc;me dans ce cas, est d&eacute;favorable &agrave; la revente.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card">
                  <h4 className="font-bold text-sm mb-2">Pour une installation 3&nbsp;kWc &agrave; Lyon</h4>
                  <div className="text-xs text-charcoal-light space-y-1">
                    <div>Production annuelle&nbsp;: &asymp; 3&nbsp;570&nbsp;kWh</div>
                    <div>Autoconsomm&eacute; (&asymp; 30&nbsp;%&nbsp;typique)&nbsp;: &asymp; 1&nbsp;071&nbsp;kWh</div>
                    <div>Surplus revendu&nbsp;: &asymp; 2&nbsp;499&nbsp;kWh</div>
                    <div className="font-semibold pt-1">Recette surplus&nbsp;: <span className="font-mono">27,5&nbsp;&euro;/an</span></div>
                    <div className="font-semibold">&Eacute;conomies autoconso&nbsp;: <span className="font-mono">207,8&nbsp;&euro;/an</span></div>
                  </div>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-2">Co&ucirc;t de l&apos;&eacute;ligibilit&eacute; EDF OA</h4>
                  <div className="text-xs text-charcoal-light space-y-1">
                    <div>Installateur RGE obligatoire</div>
                    <div>D&eacute;marches raccordement Enedis&nbsp;: 2-3 mois</div>
                    <div>Attestation Consuel&nbsp;: &asymp; 150&nbsp;&euro;</div>
                    <div>Surco&ucirc;t vs kit plug-and-play&nbsp;: +5&nbsp;000 &agrave; 10&nbsp;000&nbsp;&euro;</div>
                    <div className="font-semibold pt-1">Revente suppl&eacute;mentaire&nbsp;: <span className="font-mono">27,5&nbsp;&euro;/an</span></div>
                  </div>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Verdict&nbsp;:</strong> pour rentabiliser le surco&ucirc;t du raccordement producteur sur la seule revente du surplus, il faudrait <strong>plus de 180 ans</strong> &agrave; 27,5&nbsp;&euro;/an. L&apos;int&eacute;r&ecirc;t d&apos;une installation 3&nbsp;kWc tient tout entier dans l&apos;autoconsommation &mdash; la revente du surplus n&apos;est qu&apos;une miette.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on r&eacute;pond souvent &agrave; cette question</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                En discutant avec des propri&eacute;taires de kits, on entend souvent deux mythes qu&apos;on veut d&eacute;monter.
              </p>
              <div className="space-y-4 mb-4">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Mythe 1 &mdash; &laquo;&nbsp;Le compteur Linky tourne &agrave; l&apos;envers&nbsp;&raquo;</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Faux. Le Linky est num&eacute;rique et bidirectionnel. Il compte s&eacute;par&eacute;ment ce qui entre (soutirage) et ce qui sort (injection). L&apos;index soutirage ne recule jamais. Le mythe du compteur &agrave; l&apos;envers s&apos;appliquait aux anciens compteurs &eacute;lectrom&eacute;caniques &agrave; disque &mdash; ils ont &eacute;t&eacute; remplac&eacute;s. <Link href="/blog/linky-panneau-solaire-injection" className="text-green hover:underline">D&eacute;tail complet ici</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Mythe 2 &mdash; &laquo;&nbsp;EDF est oblig&eacute; de racheter mon &eacute;lectricit&eacute;&nbsp;&raquo;</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Vrai, mais uniquement pour les producteurs &eacute;ligibles &agrave; l&apos;OA (Obligation d&apos;Achat). Un kit balcon n&apos;est pas un producteur au sens de la loi &eacute;lectrique. La CACSI ne cr&eacute;e aucune obligation de rachat pour EDF. L&apos;OA ne s&apos;applique qu&apos;aux installations raccord&eacute;es en producteur avec dossier officiel.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien allez-vous r&eacute;ellement &eacute;conomiser&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur estime votre autoconsommation, vos &eacute;conomies et votre retour sur investissement en 30 secondes.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes &eacute;conomies &rarr;
              </Link>
            </div>

            <section className="mb-10">
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

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire&nbsp;: comment &ccedil;a marche concr&egrave;tement&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe complet&nbsp;: talon, surplus, compteur &mdash; sans jargon technique</p>
                </Link>
                <Link href="/blog/linky-panneau-solaire-injection" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Linky et panneau solaire&nbsp;: injection, index, surplus</h4>
                  <p className="text-xs text-charcoal-light mt-1">Ce que voit exactement le Linky, index EAIT, mythe du compteur &agrave; l&apos;envers</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Limite 800&nbsp;Wc, NF C 15-100, CACSI&nbsp;: ce que dit la loi</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis&nbsp;: guide pas &agrave; pas</h4>
                  <p className="text-xs text-charcoal-light mt-1">Proc&eacute;dure compl&egrave;te pour d&eacute;clarer votre kit en 10 minutes</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits solaires avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Stocker le surplus au lieu de l&apos;injecter gratuitement</p>
                </Link>
                <Link href="/blog/facture-edf-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comment lire sa facture EDF avec un kit solaire balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Ce qui change sur la facture, comment mesurer ses vraies &eacute;conomies et le r&ocirc;le du Linky.</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie&nbsp;:</strong> productions calcul&eacute;es avec PVGIS (Lyon, orientation sud, Performance Ratio 0,85). Tarif EDF base&nbsp;: 0,1940&nbsp;&euro;/kWh. Tarif rachat EDF OA&nbsp;: arr&ecirc;t&eacute; du 1er juin 2026 (1,1&nbsp;c&euro;/kWh HT). Autoconsommation 85&nbsp;% sans batterie, 95&nbsp;% avec batterie (CRE).
                {' '}<Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie compl&egrave;te</Link>.
              </p>
              <p className="text-xs text-stone leading-relaxed mt-2">
                <em>MonBalconSolaire est un site ind&eacute;pendant. Certains liens sont des liens d&apos;affiliation&nbsp;: si vous achetez via nos liens, nous touchons une commission sans surco&ucirc;t pour vous.</em>
              </p>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
