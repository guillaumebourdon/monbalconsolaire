import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Linky et panneau solaire : injection, index, surplus (2026)',
  description: 'Que voit vraiment le Linky avec un kit solaire ? Index injection vs soutirage, compteur qui tourne à l’envers (mythe), surplus gratuit pour EDF : tout expliqué.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/linky-panneau-solaire-injection',
  },
};

const faqData = [
  {
    question: 'Le Linky voit-il la production de mes panneaux solaires ?',
    answer: 'Non. Le Linky ne voit pas votre production brute. Il mesure uniquement ce qui entre ou sort de votre logement via le réseau Enedis : l’électricité que vous tirez du réseau (soutirage) et l’électricité que vous injectez dessus (surplus). Ce que vous autoconsommez directement n’apparaît jamais sur le Linky.',
  },
  {
    question: 'C’est quoi l’index injection sur le Linky ?',
    answer: 'L’index injection (parfois noté « index 2 » ou « EJPHN inj » sur certains modèles) est le compteur du surplus que vous envoyez sur le réseau. Il s’incrémente uniquement quand votre panneau produit plus que ce que vous consommez à l’instant T. En autoconsommation sans accord de revente (CACSI), cet index est relevé par Enedis mais vous n’êtes pas payé.',
  },
  {
    question: 'Le compteur Linky tourne-t-il à l’envers avec le solaire ?',
    answer: 'Non. C’est un mythe hérité des vieux compteurs électromécaniques à disque. Ces anciens compteurs physiques reculaient effectivement lors de l’injection — ce qui était illégal. Le Linky est un compteur numérique bidirectionnel : il compte séparément ce qui entre et ce qui sort. Pas de rotation, pas de recul, pas d’astuce.',
  },
  {
    question: 'Mon surplus part gratuitement chez EDF ?',
    answer: 'En pratique, oui. Si vous avez une convention CACSI (autoconsommation sans injection), votre surplus est injecté sur le réseau sans compensation. Si vous avez signé un contrat de revente avec EDF OA, vous êtes payé 1,1 c€/kWh depuis l’arrêté du 1er juin 2026 — soit environ 15-25 €/an pour un kit 400 W. Dans les deux cas, le surplus a peu de valeur : l’objectif est d’autoconsommer un maximum.',
  },
  {
    question: 'Faut-il déclarer son kit solaire à Enedis ?',
    answer: 'Oui, c’est obligatoire dès que le kit est branché sur une prise du logement. La déclaration CACSI se fait gratuitement en ligne sur enedis.fr/raccordement-photovoltaique en environ 10 minutes. Sans déclaration, vous êtes hors la loi même si l’installation est physiquement sécurisée. Voir notre guide détaillé sur la déclaration CACSI.',
  },
  {
    question: 'Comment lire les index injection et soutirage sur le Linky ?',
    answer: 'Appuyez sur le bouton « + » du Linky pour faire défiler les écrans. L’index soutirage (votre consommation réseau) s’affiche en premier. L’index injection apparaît ensuite, souvent noté « EAIT » (Energie Active Injectée Totale). Vous pouvez aussi tout voir dans l’application « Enedis à mes côtés » ou sur l’espace client enedis.fr.',
  },
];

export default function LinkyPanneauSolaireInjectionPage() {
  return (
    <>
      <SchemaArticle
        title="Linky et panneau solaire : injection, index, surplus (2026)"
        description="Que voit vraiment le Linky avec un kit solaire ? Index injection vs soutirage, surplus gratuit EDF, CACSI Enedis : tout compris en 10 minutes."
        url="https://monbalconsolaire.fr/blog/linky-panneau-solaire-injection"
        datePublished="2026-07-24"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Linky et panneau solaire' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Linky et panneau solaire' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Comprendre</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Linky et panneau solaire : tout comprendre sur l&apos;injection, les index et le surplus
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              &laquo;&nbsp;Est-ce que mon Linky va tourner &agrave; l&apos;envers&nbsp;?&nbsp;&raquo; &laquo;&nbsp;Mon surplus part-il gratuitement chez EDF&nbsp;?&nbsp;&raquo; &laquo;&nbsp;C&apos;est quoi l&apos;index injection&nbsp;?&nbsp;&raquo; Ce sont les trois questions que pose chaque d&eacute;butant. R&eacute;ponses factuelles, sans jargon.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>24 juillet 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; Le Linky <strong>ne voit pas votre production</strong> &mdash; il voit uniquement ce qui entre ou sort de votre r&eacute;seau domestique</li>
              <li>&bull; <strong>Index soutirage</strong> : ce que vous tirez du r&eacute;seau EDF &middot; <strong>Index injection</strong> : votre surplus envoy&eacute; sur le r&eacute;seau</li>
              <li>&bull; Le mythe du &laquo;&nbsp;compteur qui tourne &agrave; l&apos;envers&nbsp;&raquo; ne s&apos;applique pas au Linky (num&eacute;rique et bidirectionnel)</li>
              <li>&bull; En CACSI, le surplus part sur le r&eacute;seau <strong>gratuitement</strong> &mdash; sans compensation</li>
              <li>&bull; La d&eacute;claration <strong>CACSI Enedis est obligatoire</strong>, gratuite, 10 minutes en ligne</li>
            </ul>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que le Linky voit (et ce qu&apos;il ne voit pas)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le compteur Linky est install&eacute; sur le branchement de votre logement au r&eacute;seau Enedis. Il mesure les &eacute;changes &agrave; cet unique point d&apos;interface. Cons&eacute;quence directe&nbsp;: <strong>il ignore compl&egrave;tement ce qui se passe &agrave; l&apos;int&eacute;rieur</strong> de votre logement.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-2 text-green">Ce que le Linky voit &#10003;</h3>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>&bull; L&apos;&eacute;lectricit&eacute; que vous tirez du r&eacute;seau EDF (<strong>soutirage</strong>)</li>
                    <li>&bull; Le surplus que vous injectez sur le r&eacute;seau (<strong>injection</strong>)</li>
                    <li>&bull; Votre puissance instantan&eacute;e appel&eacute;e (en VA)</li>
                    <li>&bull; Les d&eacute;passements de puissance contract&eacute;e</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2 text-amber-dark">Ce que le Linky ne voit pas &#10007;</h3>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>&bull; La production brute de vos panneaux</li>
                    <li>&bull; Ce que vous autoconsommez directement</li>
                    <li>&bull; La puissance de votre micro-onduleur</li>
                    <li>&bull; Votre taux d&apos;autoconsommation r&eacute;el</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Concr&egrave;tement&nbsp;: si votre panneau produit 300&nbsp;W et que vous consommez 250&nbsp;W &agrave; cet instant, le Linky enregistre un <strong>surplus de 50&nbsp;W inject&eacute;</strong> sur le r&eacute;seau. Les 250&nbsp;W autoconsomm&eacute;s sont &laquo;&nbsp;invisibles&nbsp;&raquo; pour lui. C&apos;est en cela que le solaire de balcon est si int&eacute;ressant&nbsp;: <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="text-green hover:underline font-semibold">l&apos;autoconsommation directe n&apos;est pas tax&eacute;e, ni mesur&eacute;e, ni comptabilis&eacute;e</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Index soutirage vs index injection : la diff&eacute;rence</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le Linky dispose de deux compteurs ind&eacute;pendants qui tournent chacun dans un sens&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Index</th>
                      <th className="text-left p-3">Ce qu&apos;il mesure</th>
                      <th className="text-left p-3">S&apos;affiche quand&hellip;</th>
                      <th className="text-left p-3 rounded-tr-xl">Label sur le Linky</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-bold">Soutirage</td>
                      <td className="p-3">Electricit&eacute; tir&eacute;e du r&eacute;seau EDF</td>
                      <td className="p-3">Votre conso &gt; votre production</td>
                      <td className="p-3 font-mono text-xs">EAST / index 1</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-bold">Injection</td>
                      <td className="p-3">Surplus envoy&eacute; sur le r&eacute;seau</td>
                      <td className="p-3">Votre production &gt; votre conso</td>
                      <td className="p-3 font-mono text-xs">EAIT / index 2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Bonne nouvelle pour l&apos;autoconsommation&nbsp;:</strong> en milieu de journ&eacute;e ensoleil&eacute;e, votre index soutirage <strong>ne tourne plus</strong> (ou tr&egrave;s peu). Votre facture EDF baisse m&eacute;caniquement. L&apos;index injection, lui, peut tourner si vous produisez plus que vous ne consommez &mdash; mais sans compensation financi&egrave;re en CACSI. C&apos;est pour &ccedil;a que l&apos;objectif est de <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline">dimensionner le kit sur votre talon de consommation</Link>, pas de maximiser l&apos;injection.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le mythe du compteur qui tourne &agrave; l&apos;envers</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Cette id&eacute;e circule encore dans les forums solaires. Elle vient d&apos;une r&eacute;alit&eacute; ancienne&nbsp;: les vieux compteurs &eacute;lectrom&eacute;caniques &agrave; disque tournant. Quand ces compteurs recevaient un flux &eacute;lectrique inverse (injection), le disque reculait physiquement &mdash; et le compteur affichait moins. Les utilisateurs &eacute;conomisaient ainsi sur leur facture &agrave; la fois par autoconsommation <em>et</em> par r&eacute;duction de l&apos;index.
              </p>
              <div className="space-y-3 mb-4">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Avec un vieux compteur &eacute;lectrom&eacute;canique (avant Linky)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le disque reculait lors de l&apos;injection &rarr; l&apos;index baissait &rarr; la facture &eacute;tait r&eacute;duite &laquo;&nbsp;&agrave; l&apos;envers&nbsp;&raquo;. Ill&eacute;gal selon la r&eacute;glementation Enedis, mais techniquement possible. C&apos;est cette pratique que &laquo;&nbsp;l&apos;envers&nbsp;&raquo; d&eacute;signe.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Avec le Linky (num&eacute;rique)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Pas de disque. Pas de mouvement. Deux compteurs num&eacute;riques ind&eacute;pendants. L&apos;index soutirage ne recule jamais lors de l&apos;injection &mdash; Linky enregistre l&apos;injection s&eacute;par&eacute;ment, dans l&apos;index injection. Le mythe ne s&apos;applique pas.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                En clair&nbsp;: avec le Linky, vous n&apos;avez <strong>rien &agrave; gagner &agrave; injecter du surplus</strong> (sauf revente tr&egrave;s mal r&eacute;mun&eacute;r&eacute;e). Votre gain vient exclusivement de l&apos;autoconsommation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le surplus&nbsp;: gratuit pour EDF ou pay&eacute; ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Deux sc&eacute;narios selon votre situation administrative&nbsp;:
              </p>
              <div className="space-y-4 mb-6">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">Sc&eacute;nario 1 &mdash; CACSI (le cas de 95&nbsp;% des kits balcon)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                    Vous avez d&eacute;clar&eacute; votre kit en <strong>Convention d&apos;Autoconsommation Sans Injection</strong>. Votre surplus est inject&eacute; sur le r&eacute;seau mais vous n&apos;&ecirc;tes <strong>pas r&eacute;mun&eacute;r&eacute;</strong>. L&apos;index injection est relev&eacute; par Enedis mais ne donne lieu &agrave; aucun paiement.
                  </p>
                  <p className="text-xs text-stone">Vos &eacute;conomies viennent <em>uniquement</em> de l&apos;autoconsommation &rarr; kWh non achet&eacute;s &agrave; EDF.</p>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">Sc&eacute;nario 2 &mdash; Contrat de revente EDF OA</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                    Vous avez sign&eacute; un contrat de vente de surplus avec <strong>EDF OA</strong>. D&egrave;s lors, chaque kWh inject&eacute; est pay&eacute; au tarif en vigueur&nbsp;: <strong>1,1&nbsp;c&euro;/kWh</strong> depuis l&apos;arr&ecirc;t&eacute; du 1er juin 2026 pour les nouvelles installations.
                  </p>
                  <p className="text-xs text-stone">
                    Pour un kit 400&nbsp;W &agrave; Paris (sud)&nbsp;: production annuelle &asymp; 415&nbsp;kWh &rarr; autoconso 85&nbsp;% = 353&nbsp;kWh autoconsomm&eacute;s + 62&nbsp;kWh inject&eacute;s &rarr; <strong>revente&nbsp;: 0,68&nbsp;&euro;/an</strong>. A peine rentable.
                  </p>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Verdict&nbsp;:</strong> avec 1,1&nbsp;c&euro;/kWh de tarif de rachat contre 19,4&nbsp;c&euro;/kWh de tarif EDF base, chaque kWh autoconsomm&eacute; vaut <strong>17&times; plus</strong> qu&apos;un kWh revendu. Ne cherchez pas &agrave; maximiser l&apos;injection &mdash; maximisez l&apos;autoconsommation. C&apos;est l&agrave; que se construit la <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="text-green hover:underline">rentabilit&eacute; r&eacute;elle du kit</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">La d&eacute;claration CACSI Enedis&nbsp;: obligatoire, gratuite, simple</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Toute installation raccord&eacute;e au r&eacute;seau &mdash; m&ecirc;me via une simple prise &mdash; doit faire l&apos;objet d&apos;une d&eacute;claration aupr&egrave;s d&apos;Enedis. C&apos;est la loi depuis le d&eacute;cret du 6 octobre 2021, toujours en vigueur en 2026.
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { step: '1', title: 'Rendez-vous sur enedis.fr/raccordement-photovoltaique', desc: 'Section « Autoconsommation sans injection ». Aucun compte n’est nécessaire pour commencer le formulaire.' },
                  { step: '2', title: 'Renseignez les infos de l’installation', desc: 'Puissance crête du kit (ex : 400 Wc), type de kit (mono ou bifacial), marque du micro-onduleur. Tout figure sur la fiche technique de votre kit.' },
                  { step: '3', title: 'Validez et téléchargez la convention CACSI', desc: 'Enedis vous envoie une attestation de dépôt par e-mail sous 48h. Conservez-la : elle prouve votre conformité légale.' },
                ].map((s) => (
                  <div key={s.step} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                        <p className="text-xs text-charcoal-light leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Pour les kits pr&eacute;assembl&eacute;s en usine de moins de 3&nbsp;kVA, <strong>aucune validation Consuel n&apos;est requise</strong>. La proc&eacute;dure est 100&nbsp;% en ligne et gratuite. D&eacute;tail complet dans notre <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline font-semibold">guide CACSI pas &agrave; pas</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment lire les index sur votre Linky</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Votre Linky affiche plusieurs valeurs acc&egrave;s par le bouton &laquo;&nbsp;+&nbsp;&raquo;. Voici comment s&apos;y retrouver&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Affichage Linky</th>
                      <th className="text-left p-3">Signification</th>
                      <th className="text-left p-3 rounded-tr-xl">Utile pour&hellip;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['EAST (kWh)', 'Energie Active Soutirée Totale = votre consommation totale depuis l’installation', 'Suivre vos économies sur le long terme'],
                      ['EAIT (kWh)', 'Energie Active Injectée Totale = surplus total injecté depuis l’installation', 'Vérifier que le kit produit bien du surplus'],
                      ['SINSTI (VA)', 'Puissance instantanée appelée (en Volt-Ampères)', 'Mesurer votre talon de consommation'],
                      ['PREF (A)', 'Puissance maximale contractée (en ampères)', 'Contrôler votre abonnement (3, 6, 9, 12 kVA)'],
                    ].map(([a, b, c], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-mono font-bold text-xs">{a}</td>
                        <td className="p-3 text-xs text-charcoal-light">{b}</td>
                        <td className="p-3 text-xs text-stone">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Si votre Linky n&apos;affiche pas EAIT, c&apos;est normal avant d&eacute;claration CACSI&nbsp;: Enedis active l&apos;index injection uniquement apr&egrave;s r&eacute;ception de votre d&eacute;claration. Vous pouvez aussi tout visualiser depuis l&apos;app <strong>Enedis &agrave; mes c&ocirc;t&eacute;s</strong> (iOS/Android).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Que se passe-t-il si je ne d&eacute;clare pas mon kit ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est la question qu&apos;on ne pose pas assez franchement. Voici la r&eacute;alit&eacute;&nbsp;:
              </p>
              <div className="space-y-3 mb-4">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Court terme (1-2 ans)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Tr&egrave;s peu de risques concrets. Enedis ne surveille pas activement les kits non d&eacute;clar&eacute;s. Votre installation fonctionne, le Linky tourne normalement.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">En cas de sinistre (incendie, surtension)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Votre assurance habitation peut refuser de couvrir le sinistre si l&apos;installation non d&eacute;clar&eacute;e est en cause. Le risque est l&agrave;, m&ecirc;me si le kit est physiquement s&eacute;curis&eacute;.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Lors d&apos;une vente immobili&egrave;re ou d&apos;un contr&ocirc;le</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un diagnostic &eacute;lectrique peut r&eacute;v&eacute;ler l&apos;installation. La d&eacute;claration CACSI est alors exig&eacute;e, voire une mise en conformit&eacute;.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                <strong>Notre position&nbsp;:</strong> la d&eacute;claration CACSI prend 10 minutes, co&ucirc;te z&eacute;ro euro et vous met en conformit&eacute; l&eacute;gale. Pas de raison de ne pas le faire. Voir notre <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">guide r&eacute;glementation 2026</Link> pour le contexte complet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">La compensation triphas&eacute;e&nbsp;: le bonus cach&eacute; du Linky</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous &ecirc;tes en triphas&eacute; (rarer en appartement, fr&eacute;quent en maison), le Linky fait une <strong>compensation de phase</strong>&nbsp;: il calcule la somme alg&eacute;brique des productions et consommations sur les trois phases. Un panneau branch&eacute; sur la phase 1 peut compenser une consommation sur la phase 2 ou 3.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                En monophas&eacute; (le cas de quasi tous les appartements), ce point ne s&apos;applique pas. Votre kit branch&eacute; sur n&apos;importe quelle prise compense toute la consommation du logement, car il n&apos;y a qu&apos;une phase.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien allez-vous &eacute;conomiser concr&egrave;tement&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur intègre la r&eacute;partition autoconsommation&nbsp;/ injection selon votre profil de consommation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes &eacute;conomies &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire&nbsp;: comment &ccedil;a marche concr&egrave;tement&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe complet&nbsp;: talon, surplus, compteur &mdash; sans jargon</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation&nbsp;: comment le calculer et l&apos;effacer</h4>
                  <p className="text-xs text-charcoal-light mt-1">Lire le SINSTI sur le Linky et dimensionner le kit dessus</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis&nbsp;: guide pas &agrave; pas</h4>
                  <p className="text-xs text-charcoal-light mt-1">Proc&eacute;dure compl&egrave;te pour d&eacute;clarer votre kit en 10 minutes</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, limite 800&nbsp;W, CACSI&nbsp;: ce que dit la loi</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

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

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> Enedis, documentation technique Linky (janvier 2026), arr&ecirc;t&eacute; tarifaire EDF OA du 1er juin 2026, d&eacute;cret n&deg; 2021-1301 du 6 octobre 2021 relatif &agrave; l&apos;autoconsommation. Tarif EDF base&nbsp;: 0,1940 &euro;/kWh.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
