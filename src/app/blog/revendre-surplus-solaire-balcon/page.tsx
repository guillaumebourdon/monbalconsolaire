import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { withCanonicalOg } from '@/lib/metadata';
import { zendureUrl } from '@/lib/affiliate';
import { KWH_PRICE_EUR, KWH_PRICE_LABEL, KWH_PRICE_SHORT, AUTOCONSO_STANDARD, calculateProductionKwh } from '@/lib/pricing';

// Calculs : méthode du site (Lyon, plein sud, PR 0,85) et tarif de pricing.ts.
const RACHAT_EUR = 0.011; // tarif de rachat du surplus cité (arrêté du 1er juin 2026, 1,1 c€/kWh HT)
const fr = (n: number) => n.toLocaleString('fr-FR');
const prod450 = calculateProductionKwh({ kitPriceEur: 0, kitPowerWc: 450 });
const auto450 = Math.round(prod450 * AUTOCONSO_STANDARD);
const surplus450 = prod450 - auto450;
const eco450 = Math.round(auto450 * KWH_PRICE_EUR);
const vente450 = Math.round(surplus450 * RACHAT_EUR * 100) / 100;
const ratioTarifs = Math.round(KWH_PRICE_EUR / RACHAT_EUR);
const kwhCts = fr(Math.round(KWH_PRICE_EUR * 1000) / 10);
const rachatPct = fr(Math.round((RACHAT_EUR / KWH_PRICE_EUR) * 1000) / 10);
const prod3k = calculateProductionKwh({ kitPriceEur: 0, kitPowerWc: 3000 });
const auto3k = Math.round(prod3k * 0.3);
const surplus3k = prod3k - auto3k;
const vente3k = Math.round(surplus3k * RACHAT_EUR * 10) / 10;
const eco3k = Math.round(auto3k * KWH_PRICE_EUR);
const ansSurcout = Math.floor(5000 / vente3k / 10) * 10;

export const metadata: Metadata = withCanonicalOg({
  title: 'Revendre surplus solaire à EDF depuis un balcon : possible ? (2026)',
  description: 'Peut-on revendre le surplus d\'un kit solaire de balcon à EDF ? Non. CACSI ou cession gratuite à Enedis : ce qui s\'applique, calculs et alternatives.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/revendre-surplus-solaire-balcon',
  },
});

const faqData = [
  {
    question: 'Peut-on revendre son surplus solaire à EDF avec un kit de balcon ?',
    answer: 'Non. Un kit branché sur une prise n\'a pas de contrat d\'achat. Deux déclarations sont possibles : la CACSI (convention d\'autoconsommation sans injection), si le kit est réglé pour ne rien envoyer sur le réseau, ou la cession gratuite du surplus à Enedis (installations de 3 kW maximum en sortie d\'onduleur), si le kit renvoie du surplus. Dans les deux cas, rien n\'est payé. Pour revendre, il faut une installation raccordée comme producteur avec un contrat d\'achat.',
  },
  {
    question: 'Qu\'est-ce que l\'EDF OA et pourquoi les kits balcon n\'y sont pas éligibles ?',
    answer: 'EDF OA (Obligation d\'Achat) est le dispositif qui oblige EDF à racheter l\'électricité des producteurs. Il s\'applique aux installations de 0 à 9 kWc raccordées officiellement : installateur RGE, passage Consuel, compteur producteur. Un kit plug-and-play branché sur une prise n\'est pas un raccordement producteur — il reste dans le régime de l\'autoconsommation.',
  },
  {
    question: 'Combien rapporterait la revente du surplus d\'un kit de balcon ?',
    answer: `Presque rien. Au tarif de rachat du surplus de 1,1 c€/kWh HT cité par l'arrêté du 1er juin 2026, un kit de 450 W à Lyon (${prod450} kWh/an, ${surplus450} kWh de surplus avec ${Math.round(AUTOCONSO_STANDARD * 100)} % d'autoconsommation) rapporterait environ ${fr(vente450)} €/an. Les économies d'autoconsommation sur le même kit atteignent environ ${eco450} €/an au tarif de ${KWH_PRICE_LABEL}.`,
  },
  {
    question: 'Que devient concrètement le surplus d\'un kit balcon ?',
    answer: 'Cela dépend de votre déclaration. Avec la CACSI, vous vous engagez à ne pas injecter : le kit doit être réglé en « zéro injection » (réglage de l\'onduleur, compteur de type Shelly ou boîtier du fabricant, ou batterie qui absorbe le surplus). Si votre kit renvoie du surplus, la bonne démarche est la cession gratuite du surplus à Enedis (Code de l\'énergie, article L315-5) : le surplus part sur le réseau sans rémunération. Dans tous les cas, injecter avant la mise en service par Enedis est interdit.',
  },
  {
    question: 'Une déclaration est-elle obligatoire même si on ne revend rien ?',
    answer: 'Oui. Une déclaration est obligatoire : la CACSI si votre kit ne renvoie rien sur le réseau, ou la cession gratuite du surplus à Enedis s\'il en renvoie. Les deux se font gratuitement en ligne sur Enedis-Connect. Pour la cession, choisissez « injection du surplus » puis « je cède mon surplus à Enedis » ; Enedis établit alors un contrat d\'accès en injection.',
  },
  {
    question: 'Comment valoriser son surplus au lieu de l\'injecter gratuitement ?',
    answer: `En le consommant : décaler les appareils en journée, ou ajouter une batterie qui capte le surplus et le restitue le soir. L'autoconsommation passe de 85 % à 95 % dans notre méthode, et chaque kWh stocké vaut ${KWH_PRICE_SHORT} au lieu de 0,011 € à la revente. Les kits avec batterie (Sunology PLAY MAX, EcoFlow STREAM Ultra, Zendure SolarFlow) rentrent dans cette logique.`,
  },
];

export default function RevendreSuplusSolaireBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Revendre surplus solaire à EDF depuis un balcon : possible ? (2026)"
        description="Peut-on revendre le surplus d'un kit solaire de balcon à EDF ? Non. CACSI ou cession gratuite à Enedis : ce qui s'applique, calculs et alternatives."
        url="https://monbalconsolaire.fr/blog/revendre-surplus-solaire-balcon"
        datePublished="2026-07-31"
        dateModified="2026-11-05"
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
              C&apos;est une question fr&eacute;quente avant de commander. La r&eacute;ponse est non. Voici pourquoi, quelle d&eacute;claration faire pour votre surplus, et pourquoi, m&ecirc;me si c&apos;&eacute;tait possible, la revente ne rapporterait presque rien.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>31 juillet 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; Un kit branch&eacute; sur une prise <strong>ne peut pas revendre</strong> son surplus&nbsp;: pas de contrat d&apos;achat</li>
              <li>&bull; Deux d&eacute;clarations possibles&nbsp;: <strong>CACSI</strong> si le kit est r&eacute;gl&eacute; en z&eacute;ro injection, <strong>cession gratuite du surplus &agrave; Enedis</strong> (3&nbsp;kW maximum) s&apos;il en renvoie</li>
              <li>&bull; L&apos;EDF OA (revente) suppose une installation raccord&eacute;e comme producteur avec contrat d&apos;achat</li>
              <li>&bull; Tarif de rachat 2026&nbsp;: <strong>1,1&nbsp;c&euro;/kWh</strong> vs {kwhCts}&nbsp;c&euro;/kWh pour l&apos;&eacute;lectricit&eacute; achet&eacute;e &mdash; rapport de {ratioTarifs}x</li>
              <li>&bull; Pour un kit 450&nbsp;W, la revente rapporterait &asymp;&nbsp;<strong>{fr(vente450)}&nbsp;&euro;/an</strong> vs <strong>{eco450}&nbsp;&euro;/an</strong> en autoconsommation</li>
              <li>&bull; Alternative&nbsp;: une batterie pour stocker le surplus et l&apos;utiliser le soir</li>
            </ul>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">La r&eacute;ponse courte&nbsp;: non, c&apos;est impossible</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire plug-and-play branch&eacute; sur une prise de balcon ne peut pas revendre son &eacute;lectricit&eacute; &agrave; EDF&nbsp;: il n&apos;a ni raccordement producteur ni contrat d&apos;achat. Il doit en revanche &ecirc;tre d&eacute;clar&eacute; &agrave; Enedis, de l&apos;une de ces deux fa&ccedil;ons&nbsp;:
              </p>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mb-4 pl-5">
                <li>&bull; <strong>La CACSI</strong> (convention d&apos;autoconsommation sans injection)&nbsp;: vous vous engagez &agrave; <strong>ne rien injecter</strong> sur le r&eacute;seau. Enedis indique que cela passe par un dispositif anti-injection, s&apos;il est mis en place, ou par un r&eacute;glage de l&apos;onduleur en &laquo;&nbsp;z&eacute;ro injection&nbsp;&raquo;&nbsp;: compteur de type Shelly ou bo&icirc;tier du fabricant qui pilote l&apos;onduleur, ou batterie qui absorbe le surplus.</li>
                <li>&bull; <strong>La cession gratuite du surplus &agrave; Enedis</strong> (Code de l&apos;&eacute;nergie, article L315-5)&nbsp;: si votre kit renvoie du surplus, ce qui est le cas de la plupart des kits simples sans pilotage, ce surplus est c&eacute;d&eacute; gratuitement au gestionnaire du r&eacute;seau. R&eacute;serv&eacute; aux installations de 3&nbsp;kW maximum en sortie d&apos;onduleur (article D.315-10). Sur Enedis-Connect&nbsp;: &laquo;&nbsp;injection du surplus&nbsp;&raquo; puis &laquo;&nbsp;je c&egrave;de mon surplus &agrave; Enedis&nbsp;&raquo;&nbsp;; Enedis &eacute;tablit un contrat d&apos;acc&egrave;s en injection.</li>
              </ul>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>&Agrave; savoir&nbsp;:</strong> la cession gratuite n&apos;est pas tout &agrave; fait sans frais&nbsp;: le producteur paie la part &laquo;&nbsp;autoproducteur&nbsp;&raquo; du tarif d&apos;utilisation du r&eacute;seau (TURPE). Nous n&apos;avons pas trouv&eacute; de montant officiel publi&eacute;, nous n&apos;en donnons donc pas. Et dans les deux cas, injecter avant la mise en service par Enedis est interdit.
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
                      <th className="text-center p-3">Kit balcon (CACSI ou cession gratuite)</th>
                      <th className="text-center p-3 rounded-tr-xl">EDF OA &mdash; installation toiture</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Puissance', 'Pas de plafond chiffré pour la CACSI ; 3 kW max en sortie d’onduleur pour la cession gratuite', 'Installation dimensionnée pour le toit'],
                      ['Raccordement', 'Prise 230 V domestique', 'Raccordement producteur Enedis'],
                      ['Installateur RGE', 'Non requis', 'Obligatoire'],
                      ['Consuel', 'Dispense possible pour un kit déjà assemblé conforme à la norme NF EN 50549-1-4 (attestation sur l’honneur)', 'Obligatoire (attestation)'],
                      ['Démarche', 'Déclaration en ligne sur Enedis-Connect, gratuite', 'Dossier complet, 2–3 mois'],
                      ['Surplus', 'Aucun (CACSI, zéro injection) ou cédé gratuitement à Enedis', 'Racheté 1,1 c€/kWh (2026)'],
                      ['Prime autoconso', 'Jamais éligible', 'Supprimée (0-100 kWc) pour les demandes de raccordement complètes déposées à partir du 5 juin 2026'],
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
                Pour vendre son surplus, il faudrait une installation raccord&eacute;e comme producteur, pos&eacute;e par un installateur certifi&eacute; RGE, avec attestation Consuel et contrat d&apos;achat. On n&apos;est plus du tout dans le terrain du kit balcon.
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
                    <div className="flex justify-between"><span>Production annuelle</span><span className="font-mono font-medium">{prod450} kWh</span></div>
                    <div className="flex justify-between"><span>Autoconsomm&eacute; ({Math.round(AUTOCONSO_STANDARD * 100)}&nbsp;%)</span><span className="font-mono font-medium">{auto450} kWh</span></div>
                    <div className="flex justify-between"><span>Tarif EDF &eacute;vit&eacute;</span><span className="font-mono font-medium">{KWH_PRICE_LABEL}</span></div>
                    <div className="flex justify-between font-bold text-green pt-2 border-t border-border-light"><span>&Eacute;conomies annuelles</span><span className="font-mono text-xl">{eco450} &euro;/an</span></div>
                  </div>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-3">Sc&eacute;nario 2 &mdash; Revente surplus (si possible)</h3>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <div className="flex justify-between"><span>Surplus inject&eacute; (15&nbsp;%)</span><span className="font-mono font-medium">{surplus450} kWh</span></div>
                    <div className="flex justify-between"><span>Tarif de rachat EDF OA</span><span className="font-mono font-medium">0,011 &euro;/kWh</span></div>
                    <div className="flex justify-between"><span>Autoconsomm&eacute; (inchang&eacute;)</span><span className="font-mono font-medium">{auto450} kWh</span></div>
                    <div className="flex justify-between font-bold text-amber-dark pt-2 border-t border-border-light"><span>Recette surplus</span><span className="font-mono text-xl">{fr(vente450)} &euro;/an</span></div>
                  </div>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Conclusion&nbsp;:</strong> l&apos;autoconsommation rapporte <strong>100 fois plus</strong> que la revente du surplus au m&ecirc;me tarif. Chaque kWh autoconsomm&eacute; &eacute;conomise {kwhCts}&nbsp;c&euro;. Chaque kWh revendu rapporte 1,1&nbsp;c&euro;. <strong>L&apos;objectif n&apos;est pas de maximaliser la production &mdash; c&apos;est de maximaliser l&apos;autoconsommation.</strong>
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
                  <h3 className="font-bold text-sm mb-1">Mars 2025 &mdash; Fin de la vente totale pour &lt;&nbsp;9&nbsp;kWc</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Depuis cette date, les installations &le;&nbsp;9&nbsp;kWc ne peuvent plus vendre la totalit&eacute; de leur production. Seule la <strong>revente du surplus</strong> reste possible. La vente totale subsiste uniquement pour les installations &gt;&nbsp;9&nbsp;kWc.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1">Juin 2026 &mdash; Tarif unique du surplus + suppression de la prime</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;<a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054190669" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">arr&ecirc;t&eacute; du 1er juin 2026</a> (JO du 4 juin 2026) fixe un tarif unique de rachat du surplus de <strong>1,1&nbsp;c&euro;/kWh HT</strong> pour les demandes d&eacute;pos&eacute;es depuis le 5 juin 2026, index&eacute; de 2&nbsp;%/an&nbsp;: il n&apos;y a plus de grille r&eacute;vis&eacute;e chaque trimestre. En parall&egrave;le, la <strong>prime &agrave; l&apos;autoconsommation est supprim&eacute;e</strong> pour les installations de 0 &agrave; 100&nbsp;kWc dont la demande compl&egrave;te de raccordement est d&eacute;pos&eacute;e &agrave; partir du 5 juin 2026 (les demandes ant&eacute;rieures gardent l&apos;ancien r&eacute;gime). Fin des deux leviers qui rendaient le raccordement producteur attractif.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                &Agrave; titre de comparaison&nbsp;: en 2020, le tarif de rachat du surplus tournait autour de 6&nbsp;c&euro;/kWh. Aujourd&apos;hui &agrave; 1,1&nbsp;c&euro;/kWh, il ne repr&eacute;sente plus que {rachatPct}&nbsp;% du tarif d&apos;achat EDF. La logique &eacute;conomique du solaire r&eacute;sidentiel s&apos;est enti&egrave;rement pivot&eacute;e vers l&apos;autoconsommation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que dit la loi sur les kits plug-and-play</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline font-semibold">r&eacute;glementation 2026</Link> des kits plug-and-play est relativement claire&nbsp;:
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { label: 'Puissance max', detail: 'Aucun plafond chiffré en France. 900 W par circuit 16 A (différentiel 30 mA) est un repère de sécurité recommandé, pas une limite légale.' },
                  { label: 'Déclaration', detail: 'Obligatoire et gratuite sur Enedis-Connect : CACSI si le kit est réglé en zéro injection, sinon cession gratuite du surplus à Enedis (3 kW maximum en sortie d’onduleur). Pas de déclaration en mairie dans la plupart des cas.' },
                  { label: 'Raccordement', detail: 'Par prise standard 230 V. Aucun raccordement producteur, donc aucune éligibilité EDF OA.' },
                  { label: 'Consuel', detail: 'Dispense possible pour un kit déjà assemblé et conforme à la norme NF EN 50549-1-4, sur attestation (Enedis). Dès que vous passez par un installateur et demandez un raccordement producteur, c’est obligatoire.' },
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
                En clair&nbsp;: un kit balcon est une installation de confort et d&apos;autoconsommation, pas un outil de production d&apos;&eacute;nergie pour le march&eacute;. Les deux d&eacute;clarations pr&eacute;vues (<Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">CACSI ou cession gratuite du surplus</Link>) excluent toute r&eacute;mun&eacute;ration du surplus.
              </p>
            </section>

            <AffiliateCTA
              productName="Zendure SolarFlow Mix"
              merchantName="Zendure"
              affiliateUrl={zendureUrl('https://zendure.fr/products/solarflow-mix-series')}
              label="Voir le SolarFlow Mix — stockez votre surplus"
              variant="inline"
              position="mid-article"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Que faire du surplus alors&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous r&eacute;alisez que votre kit produit plus que ce que vous consommez en journ&eacute;e &mdash; et que ce surplus est c&eacute;d&eacute; gratuitement au r&eacute;seau (ou bloqu&eacute; par un r&eacute;glage z&eacute;ro injection) &mdash; vous avez deux leviers&nbsp;:
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
                    Une batterie capture le surplus en journ&eacute;e et le restitue le soir. L&apos;autoconsommation passe de 85&nbsp;% &agrave; 95&nbsp;%. Chaque kWh stock&eacute; vaut {KWH_PRICE_SHORT} &mdash; soit <strong>{ratioTarifs} fois plus</strong> que si vous pouviez le vendre.
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
                  <h3 className="font-bold text-sm mb-2">Pour une installation 3&nbsp;kWc &agrave; Lyon</h3>
                  <div className="text-xs text-charcoal-light space-y-1">
                    <div>Production annuelle&nbsp;: &asymp; {fr(prod3k)}&nbsp;kWh</div>
                    <div>Autoconsomm&eacute; (&asymp; 30&nbsp;%&nbsp;typique)&nbsp;: &asymp; {fr(auto3k)}&nbsp;kWh</div>
                    <div>Surplus revendu&nbsp;: &asymp; {fr(surplus3k)}&nbsp;kWh</div>
                    <div className="font-semibold pt-1">Recette surplus&nbsp;: <span className="font-mono">{fr(vente3k)}&nbsp;&euro;/an</span></div>
                    <div className="font-semibold">&Eacute;conomies autoconso&nbsp;: <span className="font-mono">{eco3k}&nbsp;&euro;/an</span></div>
                  </div>
                </div>
                <div className="card">
                  <h3 className="font-bold text-sm mb-2">Co&ucirc;t de l&apos;&eacute;ligibilit&eacute; EDF OA</h3>
                  <div className="text-xs text-charcoal-light space-y-1">
                    <div>Installateur RGE obligatoire</div>
                    <div>D&eacute;marches raccordement Enedis&nbsp;: 2-3 mois</div>
                    <div>Attestation Consuel&nbsp;: &asymp; 150&nbsp;&euro;</div>
                    <div>Surco&ucirc;t vs kit plug-and-play&nbsp;: +5&nbsp;000 &agrave; 10&nbsp;000&nbsp;&euro;</div>
                    <div className="font-semibold pt-1">Revente suppl&eacute;mentaire&nbsp;: <span className="font-mono">{fr(vente3k)}&nbsp;&euro;/an</span></div>
                  </div>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Verdict&nbsp;:</strong> pour rentabiliser le surco&ucirc;t du raccordement producteur sur la seule revente du surplus, il faudrait <strong>plus de {ansSurcout} ans</strong> &agrave; {fr(vente3k)}&nbsp;&euro;/an. L&apos;int&eacute;r&ecirc;t d&apos;une installation 3&nbsp;kWc tient tout entier dans l&apos;autoconsommation &mdash; la revente du surplus n&apos;est qu&apos;une miette.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on r&eacute;pond souvent &agrave; cette question</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Deux id&eacute;es re&ccedil;ues reviennent souvent sur le sujet.
              </p>
              <div className="space-y-4 mb-4">
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2">Mythe 1 &mdash; &laquo;&nbsp;Le compteur Linky tourne &agrave; l&apos;envers&nbsp;&raquo;</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Faux. Le Linky est num&eacute;rique et bidirectionnel. Il compte s&eacute;par&eacute;ment ce qui entre (soutirage) et ce qui sort (injection). L&apos;index soutirage ne recule jamais. Le mythe du compteur &agrave; l&apos;envers s&apos;appliquait aux anciens compteurs &eacute;lectrom&eacute;caniques &agrave; disque &mdash; ils ont &eacute;t&eacute; remplac&eacute;s. <Link href="/blog/linky-panneau-solaire-injection" className="text-green hover:underline">D&eacute;tail complet ici</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2">Mythe 2 &mdash; &laquo;&nbsp;EDF est oblig&eacute; de racheter mon &eacute;lectricit&eacute;&nbsp;&raquo;</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Vrai, mais uniquement pour les producteurs &eacute;ligibles &agrave; l&apos;OA (Obligation d&apos;Achat). Un kit balcon sans contrat d&apos;achat n&apos;y a pas acc&egrave;s&nbsp;: ni la CACSI ni la cession gratuite du surplus ne cr&eacute;ent d&apos;obligation de rachat pour EDF. L&apos;OA ne s&apos;applique qu&apos;aux installations raccord&eacute;es en producteur avec dossier officiel.</p>
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
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire&nbsp;: comment &ccedil;a marche concr&egrave;tement&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le principe complet&nbsp;: talon, surplus, compteur &mdash; sans jargon technique</p>
                </Link>
                <Link href="/blog/linky-panneau-solaire-injection" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Linky et panneau solaire&nbsp;: injection, index, surplus</h3>
                  <p className="text-xs text-charcoal-light mt-1">Ce que voit exactement le Linky, index EAIT, mythe du compteur &agrave; l&apos;envers</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Rep&egrave;re des 900&nbsp;W, NF C 15-100, CACSI&nbsp;: ce que dit la loi</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis&nbsp;: guide pas &agrave; pas</h3>
                  <p className="text-xs text-charcoal-light mt-1">CACSI ou cession gratuite du surplus&nbsp;: la proc&eacute;dure pour d&eacute;clarer votre kit</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kits solaires avec batterie 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Stocker le surplus au lieu de l&apos;injecter gratuitement</p>
                </Link>
                <Link href="/blog/facture-edf-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comment lire sa facture EDF avec un kit solaire balcon</h3>
                  <p className="text-xs text-charcoal-light mt-1">Ce qui change sur la facture, comment mesurer ses vraies &eacute;conomies et le r&ocirc;le du Linky.</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie&nbsp;:</strong> productions calcul&eacute;es avec PVGIS (Lyon, orientation sud, Performance Ratio 0,85). Tarif EDF Base 6 kVA&nbsp;: {KWH_PRICE_LABEL}. Tarif rachat EDF OA&nbsp;: arr&ecirc;t&eacute; du 1er juin 2026 (1,1&nbsp;c&euro;/kWh HT). Autoconsommation 85&nbsp;% sans batterie, 95&nbsp;% avec batterie. D&eacute;clarations&nbsp;: Code de l&apos;&eacute;nergie, articles <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000034095202" target="_blank" rel="noopener noreferrer" className="text-green underline">L315-5</a> et D.315-10&nbsp;; Enedis, <a href="https://www.enedis.fr/autoconsommer-la-totalite-de-lenergie-produite-par-vos-panneaux" target="_blank" rel="noopener noreferrer" className="text-green underline">autoconsommer la totalit&eacute; de sa production</a> et <a href="https://www.enedis.fr/mon-contrat-dobligation-dachat-prend-fin" target="_blank" rel="noopener noreferrer" className="text-green underline">c&eacute;der son surplus</a> (consult&eacute;s le 5 novembre 2026).
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
