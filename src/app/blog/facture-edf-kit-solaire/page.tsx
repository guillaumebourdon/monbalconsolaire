import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Facture EDF avec un kit solaire balcon : comment la lire et mesurer ses &eacute;conomies',
  description: 'Kit solaire et facture EDF : ce qui change (et ce qui ne change pas), comment mesurer vos &eacute;conomies r&eacute;elles, Linky et surplus gratuit. Guide factuel 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/facture-edf-kit-solaire',
  },
};

const faqData = [
  {
    question: 'Est-ce que ma facture EDF baisse automatiquement avec un kit solaire plug-and-play ?',
    answer: 'Non, pas automatiquement au sens propre. EDF ne sait pas que vous avez un kit solaire — il n\'y a pas de compteur de production côté fournisseur pour une installation CACSI (sans injection valorisée). Votre facture reflète uniquement ce que vous soutirez du réseau. Si votre kit produit pendant que vous consommez, vous soutirez moins, donc la facture baisse. Mais l\'économie n\'est visible qu\'en comparant deux factures similaires (mêmes mois, même comportement de consommation).',
  },
  {
    question: 'Peut-on revendre son surplus à EDF avec un kit balcon plug-and-play ?',
    answer: 'Non. Un kit plug-and-play (CACSI — Convention d\'Autoconsommation Sans Injection valorisée) injecte le surplus gratuitement dans le réseau. Il n\'y a pas de contrat de rachat. Pour revendre, il faudrait une installation ≥ 3 kWc installée par un professionnel RGE avec convention EDF OA — soit un investissement de 3 000 à 8 000 €. Les tarifs de rachat EDF OA en 2026 sont de 1,1 c€/kWh, ce qui est tellement bas que le rachat n\'est pas rentable de toute façon.',
  },
  {
    question: 'Comment savoir combien j\'économise réellement avec mon kit solaire ?',
    answer: 'La méthode la plus fiable est une prise connectée (Tapo P110, Shelly Plug S) sur la sortie du micro-onduleur. Elle mesure les kWh produits en temps réel. Multipliez par 0,1940 €/kWh (tarif EDF base 2026) et par votre taux d\'autoconsommation estimé (85 % sans batterie, 95 % avec batterie). Les apps natives des kits (Beem, Sunology, EcoFlow) donnent aussi une production cumulée, mais sans ajustement fin pour l\'autoconsommation.',
  },
  {
    question: 'Que voit mon compteur Linky quand mon kit produit ?',
    answer: 'Le Linky a deux index : le soutirage (ce que vous consommez depuis le réseau) et l\'injection (ce que vous envoyez sur le réseau). Quand votre kit produit plus que votre consommation instantanée, l\'excédent est injecté gratuitement — l\'index injection monte, mais ça ne vous rapporte rien. Quand votre kit produit moins que votre consommation, le Linky enregistre le soutirage normalement. Ce qui change sur votre facture, c\'est uniquement l\'index soutirage — moins il monte, moins vous payez.',
  },
  {
    question: 'Mon abonnement EDF change-t-il avec un kit solaire ?',
    answer: 'Non. Aucun changement d\'abonnement n\'est nécessaire ni obligatoire pour une installation plug-and-play ≤ 3 kVA. Vous gardez votre contrat, votre puissance souscrite, votre option tarifaire (Base, HP/HC, Tempo). Il n\'y a pas de démarche auprès d\'EDF. La seule obligation administrative est la déclaration CACSI auprès d\'Enedis, qui prend 5 minutes en ligne et ne coûte rien.',
  },
  {
    question: 'Pourquoi mon économie mensuelle varie-t-elle autant ?',
    answer: 'Parce que la production solaire est saisonnière et dépend de l\'ensoleillement. En juillet, un kit 800 Wc à Lyon peut produire 120 kWh (soit ~23 € d\'économies), contre 25 kWh en décembre (soit ~5 €). De plus, l\'autoconsommation dépend de votre comportement : si vous êtes absent en journée, une partie de la production est injectée gratuitement. En été, une partie de la production coïncide avec des moments où vous n\'êtes pas là — l\'économie réelle est moindre qu\'en hiver quand vous chauffez le matin et le soir.',
  },
];

export default function FactureEdfKitSolairePage() {
  return (
    <>
      <SchemaArticle
        title="Facture EDF avec un kit solaire balcon : comment la lire et mesurer ses économies"
        description="Ce qui change sur votre facture EDF avec un kit solaire plug-and-play, comment mesurer vos économies réelles et comprendre le rôle du Linky."
        url="https://monbalconsolaire.fr/blog/facture-edf-kit-solaire"
        datePublished="2026-08-25"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Facture EDF et kit solaire' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Facture EDF et kit solaire' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Comprendre</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Comment lire sa facture EDF avec un kit solaire balcon
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre kit est install&eacute;, il produit. Mais quand vous regardez votre facture EDF, vous ne voyez rien de sp&eacute;cial. Pas de ligne &laquo;&nbsp;production solaire&nbsp;&raquo;, pas de remise automatique. Voici <strong>ce qui se passe vraiment</strong>, comment mesurer vos &eacute;conomies r&eacute;elles, et ce que lit (ou ne lit pas) votre compteur Linky.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>25 ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>8 min de lecture</span>
            </div>
          </div>

          {/* Encadré résumé */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">&#128161; Ce que vous devez savoir en 4 points</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>EDF ne sait pas</strong> que vous avez un kit solaire — aucune ligne sp&eacute;ciale n&apos;appara&icirc;t sur votre facture</li>
              <li>&bull; <strong>Vous &eacute;conomisez</strong> en consommant moins depuis le r&eacute;seau — l&apos;index soutirage du Linky monte moins vite</li>
              <li>&bull; <strong>Le surplus</strong> inject&eacute; dans le r&eacute;seau est gratuit — vous ne le vendez pas, vous ne le remboursez pas non plus</li>
              <li>&bull; <strong>Pour mesurer</strong> vos &eacute;conomies r&eacute;elles : une prise connect&eacute;e ou l&apos;app de votre kit (production &times; 0,1940 &euro;/kWh)</li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Section 1 : la facture EDF ne change pas d'aspect */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Votre facture EDF n&apos;a pas l&apos;air de changer</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est le premier &eacute;tonnement de tous les propri&eacute;taires de kit solaire plug-and-play&nbsp;: la facture EDF ne mentionne pas le solaire. Pas de ligne &laquo;&nbsp;cr&eacute;dit production&nbsp;&raquo;, pas de remboursement, pas de mention de votre installation.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La raison est simple&nbsp;: <strong>EDF ne sait pas que vous produisez de l&apos;&eacute;lectricit&eacute;</strong>. Votre kit plug-and-play fonctionne en <strong>CACSI</strong> (Convention d&apos;Autoconsommation Sans Injection valoaris&eacute;e). Cela signifie que vous avez sign&eacute; une convention avec Enedis (le gestionnaire du r&eacute;seau) pour injecter votre surplus gratuitement — mais EDF, lui, n&apos;est pas concern&eacute;.
              </p>
              <div className="card-lg bg-green-pale/30 border-green/10 mb-4">
                <p className="text-sm font-semibold text-green mb-2">La m&eacute;canique exacte</p>
                <ol className="text-sm text-charcoal-light space-y-1.5 leading-relaxed list-decimal list-inside">
                  <li>Votre kit produit du courant alternatif (via le micro-onduleur)</li>
                  <li>Ce courant est inject&eacute; directement dans votre tableau &eacute;lectrique</li>
                  <li>Il est consomm&eacute; <strong>en priorit&eacute;</strong> par vos appareils allum&eacute;s &agrave; ce moment</li>
                  <li>S&apos;il y a un exc&eacute;dent, il part sur le r&eacute;seau EDF via le Linky — gratuitement</li>
                  <li>S&apos;il y a un d&eacute;ficit (votre kit ne suffit pas), vous soutirez le reste du r&eacute;seau normalement</li>
                </ol>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                R&eacute;sultat&nbsp;: votre facture EDF baisse parce que vous consommez <em>moins depuis le r&eacute;seau</em>, pas parce qu&apos;EDF vous rembourse quoi que ce soit.
              </p>
            </section>

            {/* Section 2 : structure d'une facture EDF */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La structure d&apos;une facture EDF (rappel)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Pour comprendre o&ugrave; se cachent vos &eacute;conomies, revenons aux deux composantes principales d&apos;une facture EDF&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Composante</th>
                      <th className="text-left p-3">Ce que c&apos;est</th>
                      <th className="text-left p-3 rounded-tr-xl">Impact du solaire</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Abonnement', 'Montant fixe mensuel selon votre puissance souscrite (6, 9 ou 12 kVA)', 'Aucun — vous gardez le même abonnement'],
                      ['Consommation', 'Volume (kWh) soutiré du réseau × tarif (0,1952 €/kWh en base 2026)', 'C\'est ici que ça joue — vous soutirez moins de kWh'],
                      ['Taxes fixes', 'CSPE, TDCFE, TCFE, TVA', 'Aucun impact direct (proportionnel à la consommation pour certaines)'],
                    ].map(([comp, desc, impact], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{comp}</td>
                        <td className="p-3 text-xs text-charcoal-light">{desc}</td>
                        <td className="p-3 text-xs font-bold text-green">{impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-2">
                <strong>Ce qui compte vraiment&nbsp;:</strong> chaque kWh produit par votre kit et consomm&eacute; imm&eacute;diatement par vos appareils, c&apos;est un kWh que vous n&apos;achetez pas &agrave; EDF. &Agrave; 0,1940&nbsp;&euro;/kWh (notre r&eacute;f&eacute;rence constante), c&apos;est l&apos;&eacute;conomie directe.
              </p>
            </section>

            {/* Section 3 : le rôle du Linky */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le r&ocirc;le du Linky&nbsp;: soutirage et injection</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Votre compteur Linky mesure deux flux distincts depuis la d&eacute;claration CACSI (ou depuis son installation si vous en avez un r&eacute;cent)&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">&#8595; Index soutirage (A14)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Ce que vous consommez depuis le r&eacute;seau EDF. C&apos;est cet index qui d&eacute;termine votre facture. <strong>Avec un kit solaire, il monte moins vite</strong> — et c&apos;est tout ce que voit EDF.
                  </p>
                  <p className="text-xs text-stone">Visible sur votre facture EDF (kWh consomm&eacute;s)</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">&#8593; Index injection (A10)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Ce que vous injectez sur le r&eacute;seau. Survient quand votre kit produit plus que votre consommation instantan&eacute;e. <strong>N&apos;appara&icirc;t pas sur votre facture EDF</strong> — vous ne &ecirc;tes pas pay&eacute;, mais vous ne devez rien non plus.
                  </p>
                  <p className="text-xs text-stone">Consultable dans votre espace Enedis en ligne</p>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm font-semibold mb-2">&#128308; Le mythe du &laquo;&nbsp;compteur qui tourne &agrave; l&apos;envers&nbsp;&raquo;</p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Ce n&apos;est plus possible depuis le Linky. Avant sa g&eacute;n&eacute;ralisation, les vieux compteurs &agrave; disque tournaient effectivement &agrave; l&apos;envers en cas d&apos;injection, cr&eacute;ant une r&eacute;duction involontaire de la facture. Le Linky distingue les deux flux — <strong>injection et soutirage sont compt&eacute;s s&eacute;par&eacute;ment</strong>. Vous ne b&eacute;n&eacute;ficiez que de ce que vous consommez vous-m&ecirc;me.
                </p>
              </div>
            </section>

            {/* Section 4 : mesurer ses économies */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment mesurer vos &eacute;conomies r&eacute;elles</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Puisque la facture EDF ne vous donne pas directement vos &eacute;conomies solaires, il faut les calculer autrement. Trois m&eacute;thodes, de la plus pr&eacute;cise &agrave; la plus approximative&nbsp;:
              </p>
              <div className="space-y-4 mb-6">
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 text-white bg-green">1</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Prise connect&eacute;e &mdash; la m&eacute;thode la plus fiable</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">
                        Une Tapo P110 (~15&nbsp;&euro;) ou une Shelly Plug S (~15&nbsp;&euro;) branch&eacute;e sur la prise de sortie du micro-onduleur mesure exactement les kWh produits. Multipliez par votre taux d&apos;autoconsommation (85&nbsp;% sans batterie) et par 0,1940&nbsp;&euro;/kWh. Exemple&nbsp;: 80 kWh produits &times; 85&nbsp;% &times; 0,1940&nbsp;&euro; = <strong>13,17&nbsp;&euro; d&apos;&eacute;conomies</strong>. Notre article sur les <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline">meilleures prises connect&eacute;es pour le suivi solaire</Link> compare les mod&egrave;les disponibles.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 text-white bg-green">2</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">L&apos;app de votre kit &mdash; pratique mais approximatif</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">
                        Beem, Sunology et EcoFlow proposent des apps qui affichent la production cumul&eacute;e. Ces chiffres sont g&eacute;n&eacute;ralement fiables (&plusmn;5&nbsp;%). Les apps calculent m&ecirc;me parfois une &eacute;conomie estim&eacute;e en &euro;, mais sans conna&icirc;tre votre taux d&apos;autoconsommation r&eacute;el. Prenez ces estimations comme un ordre de grandeur, pas une v&eacute;rit&eacute; absolue.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 text-white bg-amber">3</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Comparer deux factures &mdash; la m&eacute;thode la moins fiable</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">
                        Comparer la facture de juillet 2026 (avec kit) &agrave; celle de juillet 2025 (sans kit) para&icirc;t logique, mais c&apos;est tr&egrave;glingant. La m&eacute;t&eacute;o varie, les habitudes changent, les tarifs EDF &eacute;voluent. Cette comparaison peut vous donner un ordre de grandeur, mais sous-estimez ou surestimez facilement vos &eacute;conomies de 30&nbsp;%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-lg bg-green-pale/30 border-green/10">
                <p className="text-sm font-semibold text-green mb-2">Exemple concret &mdash; kit 800 Wc, juillet 2026, Lyon</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { val: '120 kWh', label: 'Production juillet' },
                    { val: '102 kWh', label: 'Autoconsomm&eacute;s (85&nbsp;%)' },
                    { val: '18 kWh', label: 'Inject&eacute;s gratuits' },
                    { val: '19,79 &euro;', label: 'Economies r&eacute;elles' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-extrabold text-amber-dark" dangerouslySetInnerHTML={{ __html: item.val }} />
                      <p className="text-xs text-stone mt-1" dangerouslySetInnerHTML={{ __html: item.label }} />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-stone mt-4 leading-relaxed">
                  Les 18 kWh inject&eacute;s gratuits repr&eacute;sentent 3,49&nbsp;&euro; &laquo;&nbsp;perdus&nbsp;&raquo; — l&apos;&eacute;conomie th&eacute;orique (si tout &eacute;tait autoconsomm&eacute;) aurait &eacute;t&eacute; 23,28&nbsp;&euro;. Le taux d&apos;autoconsommation est le facteur cl&eacute; de votre rentabilit&eacute; r&eacute;elle.
                </p>
              </div>
            </section>

            {/* Section 5 : pourquoi les économies varient */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi vos &eacute;conomies varient d&apos;un mois &agrave; l&apos;autre</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Beaucoup de propri&eacute;taires de kit solaire sont surpris par la variabilit&eacute; des &eacute;conomies mensuelles. La raison tient &agrave; deux facteurs qui se combinent&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Production saisonni&egrave;re</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; D&eacute;cembre (Lyon)&nbsp;: ~25 kWh &rarr; ~4,9&nbsp;&euro;</li>
                    <li>&bull; Mars&nbsp;: ~60 kWh &rarr; ~11,6&nbsp;&euro;</li>
                    <li>&bull; Juin&nbsp;: ~110 kWh &rarr; ~21,3&nbsp;&euro;</li>
                    <li>&bull; Juillet&nbsp;: ~120 kWh &rarr; ~23,3&nbsp;&euro;</li>
                    <li>&bull; Pour un kit 800 Wc plein sud</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Autoconsommation selon pr&eacute;sence</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; T&eacute;l&eacute;travail &agrave; la maison&nbsp;: autoconso 90&ndash;95&nbsp;%</li>
                    <li>&bull; Hors domicile en journ&eacute;e&nbsp;: autoconso 60&ndash;70&nbsp;%</li>
                    <li>&bull; Vacances d&apos;&eacute;t&eacute;&nbsp;: autoconso &lt;20&nbsp;%</li>
                    <li>&bull; Avec batterie&nbsp;: autoconso 90&ndash;95&nbsp;% quelle que soit la pr&eacute;sence</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-3">
                Le paradoxe de l&apos;&eacute;t&eacute;&nbsp;: c&apos;est quand votre kit produit le plus (juillet, ao&ucirc;t) que vous &ecirc;tes souvent le moins pr&eacute;sent (vacances). Une partie de la production estivale est inject&eacute;e gratuitement. C&apos;est pour cela qu&apos;une <Link href="/guide/batterie-solaire-balcon-guide" className="text-green hover:underline font-semibold">batterie solaire de balcon</Link> am&eacute;liore significativement le taux d&apos;autoconsommation.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Pour maximiser vos &eacute;conomies, lisez notre guide sur <Link href="/guide/optimiser-autoconsommation-solaire" className="text-green hover:underline font-semibold">comment optimiser l&apos;autoconsommation solaire</Link>.
              </p>
            </section>

            {/* Section 6 : pas de changement de contrat */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pas de changement de contrat EDF n&eacute;cessaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Contrairement &agrave; une id&eacute;e re&ccedil;ue r&eacute;pandue sur les forums, <strong>vous n&apos;avez pas &agrave; pr&eacute;venir EDF</strong> pour installer un kit plug-and-play. Votre seule obligation est la d&eacute;claration CACSI aupr&egrave;s d&apos;Enedis (gratuite, en ligne, ~5 minutes). Notre guide sur la <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline font-semibold">d&eacute;claration CACSI Enedis</Link> d&eacute;taille chaque &eacute;tape.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Ce que vous gardez</h4>
                  <ul className="text-xs text-charcoal-light space-y-1 leading-relaxed">
                    <li>&#10003; Votre contrat EDF actuel (Base, HP/HC, Tempo)</li>
                    <li>&#10003; Votre puissance souscrite (6, 9 ou 12 kVA)</li>
                    <li>&#10003; Votre tarif actuel</li>
                    <li>&#10003; Votre abonnement mensuel au m&ecirc;me montant</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Ce qui change</h4>
                  <ul className="text-xs text-charcoal-light space-y-1 leading-relaxed">
                    <li>&#10003; Votre consommation nette (index soutirage du Linky monte moins vite)</li>
                    <li>&#10003; Votre facture de consommation (partie variable uniquement)</li>
                    <li>&#10003; Un index injection appara&icirc;t chez Enedis (mais pas sur la facture EDF)</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Ce qui ne change pas du tout</h4>
                  <ul className="text-xs text-charcoal-light space-y-1 leading-relaxed">
                    <li>&#10007; Pas de remboursement EDF pour le surplus inject&eacute;</li>
                    <li>&#10007; Pas de ligne &laquo;&nbsp;cr&eacute;dit solaire&nbsp;&raquo; sur la facture</li>
                    <li>&#10007; Pas de r&eacute;duction d&apos;abonnement</li>
                    <li>&#10007; Pas de changement de compteur (le Linky existant suffit)</li>
                  </ul>
                </div>
              </div>
            </section>

            <AffiliateCTA
              productName="Tapo P110"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/dp/B08LPC3FG2?tag=monbalconsolai-21"
              label="Prise Tapo P110 pour mesurer sa production"
              variant="secondary"
              position="mid-article"
            />

            {/* Section 7 : calculer son ROI via la facture */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment estimer son ROI &agrave; partir de la facture</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avec les donn&eacute;es de votre facture et les chiffres de production de votre kit, vous pouvez estimer votre retour sur investissement de fa&ccedil;on pragmatique. Voici la m&eacute;thode standard que nous utilisons (d&eacute;taill&eacute;e dans notre <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link>)&nbsp;:
              </p>
              <div className="card-lg bg-green-pale/30 border-green/10 mb-6">
                <p className="text-sm font-semibold text-green mb-3">Formule de calcul ROI simplifi&eacute;e</p>
                <div className="space-y-2 text-sm text-charcoal-light">
                  <p><strong>1.</strong> Production annuelle estim&eacute;e (PVGIS ou app du kit) &times; taux d&apos;autoconsommation</p>
                  <p><strong>2.</strong> &times; tarif EDF base (0,1940&nbsp;&euro;/kWh en 2026)</p>
                  <p><strong>3.</strong> = &eacute;conomies ann&eacute;es 1</p>
                  <p><strong>4.</strong> Appliquer l&apos;inflation tarifaire (3,3&nbsp;%/an, source CRE) sur 25 ans</p>
                  <p><strong>5.</strong> Diviser le prix du kit par les &eacute;conomies actualis&eacute;es = ROI en ann&eacute;es</p>
                </div>
                <p className="text-xs text-stone mt-3">Exemple&nbsp;: kit 600&nbsp;&euro;, 820 kWh/an, 85&nbsp;% autoconso &rarr; 137&nbsp;&euro;/an &rarr; ROI ~4,4 ans (sans inflation). Avec inflation 3,3&nbsp;%/an&nbsp;: ROI ~3,8 ans.</p>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Pour un calcul pr&eacute;cis selon votre d&eacute;partement, votre orientation et votre budget, utilisez notre <Link href="/calculateur" className="text-green hover:underline font-semibold">calculateur de rentabilit&eacute;</Link> — il int&egrave;gre les donn&eacute;es PVGIS par commune et la formule standard.
              </p>
            </section>

            {/* Section 8 : option HP/HC et solaire */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Option HP/HC et solaire&nbsp;: est-ce compatible&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous &ecirc;tes en option Heures Pleines / Heures Creuses (HP/HC), votre kit solaire produit principalement en <strong>heures pleines</strong> (journ&eacute;e, 6h&ndash;22h), ce qui est exactement quand le kWh co&ucirc;te le plus cher. C&apos;est une bonne nouvelle.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Tarif</th>
                      <th className="text-left p-3">Prix/kWh TTC</th>
                      <th className="text-left p-3">Production solaire</th>
                      <th className="text-left p-3 rounded-tr-xl">Economie par kWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Base (2026)', '0,1952 €', '~100 % sur ce tarif', '0,1952 €'],
                      ['HP/HC — Heures pleines', '0,2065 €', '~90 % de la production', '0,2065 €'],
                      ['HP/HC — Heures creuses', '0,1579 €', '~10 % (tôt le matin)', '0,1579 €'],
                    ].map(([tarif, prix, prod, eco], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{tarif}</td>
                        <td className="p-3 text-xs text-charcoal-light">{prix}</td>
                        <td className="p-3 text-xs text-charcoal-light">{prod}</td>
                        <td className="p-3 text-xs font-bold text-green">{eco}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-2">
                En option HP/HC, chaque kWh solaire autoconsomm&eacute; vous &eacute;vite de payer 0,2065&nbsp;&euro; au lieu de 0,1952&nbsp;&euro;. C&apos;est un gain suppl&eacute;mentaire de ~6&nbsp;% par rapport &agrave; l&apos;option Base. Si vous &ecirc;tes en HP/HC et t&eacute;l&eacute;travaillez, c&apos;est la combinaison id&eacute;ale.
              </p>
            </section>

            {/* CTA calculateur */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Calculez vos &eacute;conomies r&eacute;elles</p>
              <p className="text-sm text-charcoal-light mb-4">
                5 questions, r&eacute;sultat imm&eacute;diat&nbsp;: production estim&eacute;e, ROI honn&ecirc;te et recommandation de kit selon votre situation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Lancer le calculateur &rarr;
              </Link>
            </div>

            {/* FAQ */}
            <section className="mb-4">
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
                <Link href="/blog/linky-panneau-solaire-injection" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Linky et panneau solaire&nbsp;: injection, index, surplus (2026)</h4>
                  <p className="text-xs text-charcoal-light mt-1">Que voit vraiment le Linky&nbsp;? Index injection vs soutirage, mythe du compteur &agrave; l&apos;envers, surplus gratuit EDF expliqu&eacute; clairement.</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire&nbsp;: comment &ccedil;a marche concr&egrave;tement&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe expliqu&eacute; simplement&nbsp;: talon de consommation, surplus, compteur Linky.</p>
                </Link>
                <Link href="/blog/revendre-surplus-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon&nbsp;: peut-on revendre son surplus &agrave; EDF&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">La r&eacute;ponse est non — les kits balcon fonctionnent en CACSI, pas en EDF OA.</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation&nbsp;: comment le calculer et l&apos;effacer avec le solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le bruit de fond &eacute;lectrique de votre foyer co&ucirc;te 300&ndash;900&nbsp;&euro;/an. Voici comment le couvrir avec un kit solaire.</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> Enedis (convention CACSI, fonctionnement Linky), EDF (grille tarifaire Tarif Bleu ao&ucirc;t 2026, 0,1952&nbsp;&euro;/kWh base 6 kVA), CRE (R&eacute;f&eacute;rence inflation tarifaire 3,3&nbsp;%/an), Selectra (comparatif tarifs HP/HC vs Base 2026). Tarif utilis&eacute; dans nos calculs&nbsp;: 0,1940&nbsp;&euro;/kWh (r&eacute;f&eacute;rence constante MonBalconSolaire pour coh&eacute;rence entre articles).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.{' '}
                <span className="italic">Contenu &agrave; vocation informative. Les tarifs EDF peuvent &eacute;voluer.</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
