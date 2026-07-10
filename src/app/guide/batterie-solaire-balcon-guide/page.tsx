import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { ProductThumb } from '@/components/ui/ProductThumb';

export const metadata: Metadata = {
  title: 'Batterie solaire balcon : choisir la bonne capacité (2026)',
  description: 'Quelle capacité de batterie pour votre kit solaire balcon ? Seuils 700 Wh, 2 kWh, 5 kWh, rentabilité réelle et comparatif des solutions disponibles en 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/batterie-solaire-balcon-guide',
  },
};

const faqData = [
  {
    question: 'Faut-il absolument une batterie avec un kit solaire de balcon ?',
    answer: 'Non. Sans batterie, votre kit consomme l\'électricité produite en temps réel (talon de consommation : frigo, box, veilles). La batterie n\'est vraiment utile que si vous êtes absent pendant les heures de production — typiquement les actifs qui travaillent en bureau. Pour un télétravailleur ou retraité présent la journée, le gain est marginal.',
  },
  {
    question: 'Quelle capacité de batterie pour couvrir une soirée ?',
    answer: 'Pour le talon de consommation d\'une soirée standard (frigo + box + TV + éclairage ≈ 200-350 W), une batterie de 1 kWh couvre 3 à 5 heures. Une batterie de 2 kWh couvre une soirée complète. Au-delà, le ROI devient difficile à justifier pour un simple balcon.',
  },
  {
    question: 'La technologie LFP (LiFePO4) est-elle importante ?',
    answer: 'Oui, c\'est essentiel. Les batteries LFP offrent 3 000 à 6 000 cycles contre 500 à 1 000 pour les anciennes Li-ion NMC, plus une sécurité bien supérieure (pas de risque thermique). Toutes les solutions sérieuses du marché balcon 2026 utilisent du LFP.',
  },
  {
    question: 'Combien d\'économies supplémentaires apporte une batterie ?',
    answer: 'Cela dépend de votre profil. Si vous êtes à domicile en journée, le gain est de 5 à 15 €/an (taux d\'autoconsommation de 85% → 95%). Si vous êtes absent toute la journée, le gain peut atteindre 35 à 50 €/an (taux qui passe de 30-40% à 70-80%). La batterie ne se justifie économiquement que dans ce second cas.',
  },
  {
    question: 'Peut-on ajouter une batterie à un kit existant ?',
    answer: 'Oui, si votre onduleur est compatible. Les systèmes Zendure SolarFlow, EcoFlow PowerStream et Bluetti Balco 260 permettent d\'ajouter une batterie. En revanche, les kits simples (Sunology PLAY 2, Beem On) ne sont pas directement compatibles avec une batterie tierce sans changer l\'onduleur.',
  },
  {
    question: 'Le Bluetti Balco 260 est-il extensible ?',
    answer: 'Oui. Le Balco 260 embarque 2,56 kWh de base et peut être étendu jusqu\'à 15 kWh en ajoutant des modules batteries supplémentaires. C\'est une de ses forces principales, même si le coût total grimpe rapidement au-delà du modèle de base à 849 €.',
  },
];

export default function GuideBatterieBalcon() {
  return (
    <>
      <SchemaArticle
        title="Batterie solaire balcon : comment choisir la bonne capacité"
        description="Quelle capacité de batterie pour votre kit solaire balcon ? Seuils 700 Wh, 2 kWh, 5 kWh, rentabilité réelle et comparatif 2026."
        url="https://monbalconsolaire.fr/guide/batterie-solaire-balcon-guide"
        datePublished="2026-07-03"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Guides', href: '/guide' }, { label: 'Batterie solaire balcon' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Batterie solaire balcon' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Batterie solaire balcon&nbsp;: comment choisir la bonne capacit&eacute;
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              700&nbsp;Wh, 2&nbsp;kWh, 5&nbsp;kWh&nbsp;&mdash; les fabricants jouent sur les chiffres. Ce guide vous dit ce qui compte vraiment&nbsp;: votre profil de consommation, le calcul de rentabilit&eacute; honn&ecirc;te, et les solutions disponibles en 2026.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>3 juillet 2026</span><span>&middot;</span><span>12 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Ce que vous allez apprendre</h2>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Pourquoi votre profil de pr&eacute;sence d&eacute;termine tout (et pas la capacit&eacute; en kWh)</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Les 3 seuils de capacit&eacute; : 700&nbsp;Wh, 2&nbsp;kWh, 5&nbsp;kWh &mdash; et &agrave; qui ils s&rsquo;adressent</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Le calcul ROI honn&ecirc;te : batterie vs sans batterie</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Comparatif des solutions disponibles en 2026 (prix, capacit&eacute;, compatibilit&eacute;)</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Les cas o&ugrave; une batterie ne vaut pas l&rsquo;investissement</li>
            </ul>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Kit balcon&nbsp;+ batterie&nbsp;: l&rsquo;&eacute;quation de base</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire plug-and-play produit de l&rsquo;&eacute;lectricit&eacute; pendant les heures d&rsquo;ensoleillement &mdash; typiquement entre 9h et 17h selon la saison. Sans batterie, cette &eacute;lectricit&eacute; est consomm&eacute;e <strong>en temps r&eacute;el</strong>&nbsp;: ce que votre logement ne consomme pas &agrave; cet instant pr&eacute;cis est inject&eacute; gratuitement sur le r&eacute;seau (sans r&eacute;mun&eacute;ration pour un kit &lt;&nbsp;3&nbsp;kWc).
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Une batterie change l&rsquo;&eacute;quation&nbsp;: elle stocke le surplus produit en journ&eacute;e pour vous permettre de l&rsquo;utiliser le soir. En th&eacute;orie, c&rsquo;est int&eacute;ressant. En pratique, <strong>l&rsquo;int&eacute;r&ecirc;t d&eacute;pend enti&egrave;rement de l&rsquo;heure &agrave; laquelle vous consommez de l&rsquo;&eacute;lectricit&eacute;</strong>.
              </p>
              <div className="card bg-green-pale/30 border-green/10 my-6">
                <p className="text-sm text-green-dark">
                  <strong>R&egrave;gle de base&nbsp;:</strong> si vous &ecirc;tes &agrave; domicile pendant les heures de production (9h&mdash;17h), vous consommez d&eacute;j&agrave; la quasi-totalit&eacute; de l&rsquo;&eacute;lectricit&eacute; produite en temps r&eacute;el. Une batterie n&rsquo;apporte qu&rsquo;un gain marginal. Si vous &ecirc;tes absent en journ&eacute;e (bureau, &eacute;tudes), la batterie peut doubler vos &eacute;conomies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comprendre la capacit&eacute;&nbsp;: kWh vs usage r&eacute;el</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                1&nbsp;kWh, c&rsquo;est concr&egrave;tement&nbsp;:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { label: 'Frigo + box + veilles', value: '5 à 7 heures', icon: '🔌' },
                  { label: 'TV (55") + éclairage', value: '3 à 4 heures', icon: '📺' },
                  { label: 'Chargeur PC portable', value: '10 à 12 charges', icon: '💻' },
                ].map((item, i) => (
                  <div key={i} className="card text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-xs text-charcoal-light mb-1">{item.label}</p>
                    <p className="font-bold text-green">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le <strong>talon de consommation</strong> d&rsquo;un appartement typique (frigo, box internet, Livebox, veilles TV, VMC) tourne autour de <span className="data-highlight">150 &agrave; 250&nbsp;W en permanence</span>. C&rsquo;est ce que votre batterie doit alimenter en priorit&eacute;.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Pour en savoir plus sur l&rsquo;autoconsommation, lisez notre guide&nbsp;: <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="text-green hover:underline font-semibold">comment fonctionne l&rsquo;autoconsommation solaire</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Votre profil de pr&eacute;sence&nbsp;: le facteur n&deg;1</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Avant de regarder les capacit&eacute;s en kWh, r&eacute;pondez &agrave; cette question&nbsp;: <strong>o&ugrave; &ecirc;tes-vous entre 10h et 16h&nbsp;?</strong>
              </p>
              <div className="space-y-4">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-2 text-green">Profil A &mdash; Pr&eacute;sent la journ&eacute;e (retrait&eacute;, t&eacute;l&eacute;travailleur, parent au foyer)</h3>
                  <p className="text-xs text-charcoal-light mb-2">
                    Votre talon de consommation (200&ndash;350&nbsp;W) est sup&eacute;rieur &agrave; la production solaire la plupart du temps. Vous autoconsommez d&eacute;j&agrave; 80&ndash;90&nbsp;% de ce que votre panneau produit en temps r&eacute;el.
                  </p>
                  <p className="text-xs font-semibold text-amber-dark">
                    &#10007; Batterie peu utile &mdash; gain suppl&eacute;mentaire&nbsp;: 5&ndash;15&nbsp;&euro;/an seulement
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2 text-amber-dark">Profil B &mdash; Absent en journ&eacute;e (actif en bureau, &eacute;tudiant)</h3>
                  <p className="text-xs text-charcoal-light mb-2">
                    Votre logement ne consomme que 50&ndash;80&nbsp;W en votre absence (frigo, box, veilles). Votre panneau de 450&nbsp;W produit bien plus. Sans batterie, 60&ndash;70&nbsp;% de la production est inject&eacute;e gratuitement sur le r&eacute;seau.
                  </p>
                  <p className="text-xs font-semibold text-green">
                    &#10003; Batterie tr&egrave;s utile &mdash; gain suppl&eacute;mentaire&nbsp;: 35&ndash;50&nbsp;&euro;/an
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2 text-amber-dark">Profil C &mdash; Pr&eacute;sence variable (alternance bureau/t&eacute;l&eacute;travail)</h3>
                  <p className="text-xs text-charcoal-light mb-2">
                    Situation interm&eacute;diaire. Le gain avec batterie est r&eacute;el mais plus mod&eacute;r&eacute; : 15&ndash;30&nbsp;&euro;/an. Le ROI reste long (15&ndash;25&nbsp;ans sur la batterie seule).
                  </p>
                  <p className="text-xs font-semibold text-stone">
                    &mdash; Batterie optionnelle &mdash; ROI d&eacute;pend de la fr&eacute;quence d&rsquo;absence
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 3 seuils de capacit&eacute;</h2>

              <h3 className="font-bold text-lg mb-3">700&nbsp;Wh &mdash; le stockage d&rsquo;entr&eacute;e</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&rsquo;est la capacit&eacute; de la batterie VAULT embarqu&eacute;e dans le <Link href="/avis/sunology-play-max" className="text-green hover:underline font-semibold">Sunology PLAY MAX</Link> (1&nbsp;179&nbsp;&euro; kit complet). 700&nbsp;Wh couvrent 3&nbsp;&agrave;&nbsp;4 heures de talon de consommation. C&rsquo;est suffisant pour passer une soir&eacute;e courte, insuffisant pour une nuit compl&egrave;te.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                <strong>Pour qui&nbsp;:</strong> profil B avec une consommation de soir&eacute;e mod&eacute;r&eacute;e. Budget serr&eacute;. Premi&egrave;re exp&eacute;rience avec le stockage solaire.
              </p>

              <h3 className="font-bold text-lg mb-3 mt-6">2&nbsp;kWh &mdash; le bon &eacute;quilibre</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le seuil recommand&eacute; pour la plupart des profils B. 2&nbsp;kWh couvrent une soir&eacute;e compl&egrave;te (18h&mdash;23h) &agrave; 200&ndash;250&nbsp;W de consommation. C&rsquo;est la capacit&eacute; du&nbsp;:
              </p>
              <div className="flex items-center gap-4 my-4">
                <ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="sm" />
                <ProductThumb src="/images/produits/bluetti-balco-260-1.webp" alt="Bluetti Balco 260" href="/avis/bluetti-balco-260" size="sm" />
              </div>
              <ul className="space-y-2 text-sm text-charcoal-light mb-4">
                <li className="flex gap-2"><span className="text-green">&#8250;</span> <Link href="/avis/zendure-solarflow" className="text-green hover:underline font-semibold">Zendure SolarFlow</Link> &mdash; 1,92&nbsp;kWh + onduleur 800&nbsp;W int&eacute;gr&eacute;. 488&nbsp;&euro; (bo&icirc;tier seul, sans panneaux)</li>
                <li className="flex gap-2"><span className="text-green">&#8250;</span> <Link href="/avis/bluetti-balco-260" className="text-green hover:underline font-semibold">Bluetti Balco 260</Link> &mdash; 2,56&nbsp;kWh + 4&nbsp;MPPT + onduleur SiC. 849&nbsp;&euro; (bo&icirc;tier seul)</li>
                <li className="flex gap-2"><span className="text-green">&#8250;</span> EcoFlow PowerStream + batterie &eacute;tanche &mdash; 2&nbsp;kWh. Kit complet ~2&nbsp;047&nbsp;&euro;</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed mb-4">
                <strong>Pour qui&nbsp;:</strong> profil B classique avec soir&eacute;e active. Meilleur rapport capacit&eacute;/co&ucirc;t du march&eacute;.
              </p>

              <h3 className="font-bold text-lg mb-3 mt-6">5&nbsp;kWh et plus &mdash; le stockage r&eacute;sidentiel</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Au-del&agrave; de 2&nbsp;kWh, on sort du simple &laquo;&nbsp;kit balcon&nbsp;&raquo; pour entrer dans le stockage r&eacute;sidentiel. Le <Link href="/avis/zendure-solarflow-mix" className="text-green hover:underline font-semibold">Zendure SolarFlow Mix</Link> (d&egrave;s 2&nbsp;039&nbsp;&euro; pour le mod&egrave;le 3000 AC+) ou le Bluetti Balco 260 &eacute;tendu (&agrave; 15&nbsp;kWh) entrent dans cette cat&eacute;gorie.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ces syst&egrave;mes visent l&rsquo;autonomie nocturne compl&egrave;te. Ils se justifient si vous avez un ch&acirc;rteau d&rsquo;eau &eacute;lectrique (chauffe-eau, pompe &agrave; chaleur) &agrave; alimenter &mdash; pas pour un appartement standard avec un kit de 450&ndash;900&nbsp;W.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                <strong>Pour qui&nbsp;:</strong> grande maison, multi-panneaux (3&ndash;6&nbsp;kW install&eacute;s), volont&eacute; d&rsquo;ind&eacute;pendance &eacute;nerg&eacute;tique. Pas rentable pour un simple balcon.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul ROI honn&ecirc;te&nbsp;: batterie vs sans batterie</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons un kit de 450&nbsp;W, exposition sud &agrave; Lyon (r&eacute;f&eacute;rence nationale). Production annuelle&nbsp;: environ 500&nbsp;kWh. Tarif EDF&nbsp;: 0,1940&nbsp;&euro;/kWh.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Sc&eacute;nario</th>
                      <th className="text-center p-3">Autoconsommation</th>
                      <th className="text-center p-3">&Eacute;conomies/an</th>
                      <th className="text-center p-3 rounded-tr-xl">ROI batterie seule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Pr&eacute;sent journ&eacute;e &mdash; sans batterie</td>
                      <td className="text-center p-3 font-mono text-sm text-green">85&nbsp;%</td>
                      <td className="text-center p-3 font-mono text-sm text-amber-dark">82&nbsp;&euro;/an</td>
                      <td className="text-center p-3 text-stone text-xs">&mdash;</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Pr&eacute;sent journ&eacute;e &mdash; avec batterie 2&nbsp;kWh</td>
                      <td className="text-center p-3 font-mono text-sm text-green">95&nbsp;%</td>
                      <td className="text-center p-3 font-mono text-sm text-amber-dark">92&nbsp;&euro;/an</td>
                      <td className="text-center p-3 font-mono text-sm text-red-600">+10&nbsp;&euro;/an<br /><span className="text-xs">&gt;50&nbsp;ans &#10007;</span></td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Absent journ&eacute;e &mdash; sans batterie</td>
                      <td className="text-center p-3 font-mono text-sm text-green">30&ndash;40&nbsp;%</td>
                      <td className="text-center p-3 font-mono text-sm text-amber-dark">29&ndash;39&nbsp;&euro;/an</td>
                      <td className="text-center p-3 text-stone text-xs">&mdash;</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Absent journ&eacute;e &mdash; avec batterie 2&nbsp;kWh</td>
                      <td className="text-center p-3 font-mono text-sm text-green">75&ndash;80&nbsp;%</td>
                      <td className="text-center p-3 font-mono text-sm text-amber-dark">73&ndash;78&nbsp;&euro;/an</td>
                      <td className="text-center p-3 font-mono text-sm text-green">+40&nbsp;&euro;/an<br /><span className="text-xs">7&ndash;12&nbsp;ans &#10003;</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mb-6">
                Calcul bas&eacute; sur&nbsp;: 500&nbsp;kWh/an (450&nbsp;W, Lyon sud), 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an (CRE), dur&eacute;e de vie batterie 15&nbsp;ans. Le surco&ucirc;t batterie estim&eacute; : 300&ndash;500&nbsp;&euro; (Zendure SolarFlow vs onduleur simple).
              </p>
              <div className="card bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-amber-dark">
                  <strong>La conclusion honnte&nbsp;:</strong> une batterie n&rsquo;est &eacute;conomiquement viable pour un kit balcon <em>que</em> si vous &ecirc;tes absent pendant les heures de production. Pour tous les autres profils, le ROI de la batterie d&eacute;passe 25&ndash;50&nbsp;ans. C&rsquo;est souvent plus que la dur&eacute;e de vie du produit.
                </p>
              </div>
            </section>

            <AffiliateCTA
              productName="Zendure SolarFlow"
              merchantName="Zendure"
              affiliateUrl="https://www.zendure.com/fr/products/solarflow"
              label="Voir le Zendure SolarFlow"
              variant="inline"
              position="mid_article"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Comparatif des solutions disponibles en 2026</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Solution</th>
                      <th className="text-center p-3">Capacit&eacute;</th>
                      <th className="text-center p-3">Prix</th>
                      <th className="text-center p-3">Panneaux inclus</th>
                      <th className="text-center p-3 rounded-tr-xl">Extensible</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: 'Sunology PLAY MAX',
                        href: '/avis/sunology-play-max',
                        capacity: '700 Wh LFP',
                        price: '1 179 €',
                        panels: 'Oui (450 Wc)',
                        extensible: 'Non',
                        highlight: false,
                      },
                      {
                        name: 'Zendure SolarFlow',
                        href: '/avis/zendure-solarflow',
                        capacity: '1,92 kWh LFP',
                        price: '488 € (boîtier)',
                        panels: 'Non (+ ~400 €)',
                        extensible: 'Oui (+2,4 kWh)',
                        highlight: true,
                      },
                      {
                        name: 'Bluetti Balco 260',
                        href: '/avis/bluetti-balco-260',
                        capacity: '2,56 kWh LFP',
                        price: '849 € (boîtier)',
                        panels: 'Non (+ ~400 €)',
                        extensible: 'Oui (→ 15 kWh)',
                        highlight: true,
                      },
                      {
                        name: 'Jackery SolarVault 3 Pro',
                        href: '/avis/jackery-solarvault-3-pro',
                        capacity: '2,52 kWh LFP',
                        price: '839 € (boîtier)',
                        panels: 'Non (+ ~300 €)',
                        extensible: 'Non',
                        highlight: false,
                      },
                      {
                        name: 'EcoFlow PowerStream + bat.',
                        href: '/avis/ecoflow-powerstream',
                        capacity: '2 kWh LFP',
                        price: '~2 047 € (kit)',
                        panels: 'Oui (2 × 400 W)',
                        extensible: 'Oui',
                        highlight: false,
                      },
                      {
                        name: 'Zendure SolarFlow Mix',
                        href: '/avis/zendure-solarflow-mix',
                        capacity: '8 kWh LFP',
                        price: 'À partir de 2 039 €',
                        panels: 'Non',
                        extensible: 'Oui (→ 50 kWh)',
                        highlight: false,
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-border-light ${row.highlight ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}
                      >
                        <td className="p-3 font-semibold">
                          <Link href={row.href} className="text-green hover:underline">{row.name}</Link>
                          {row.highlight && <span className="ml-2 text-xs bg-green text-white px-1.5 py-0.5 rounded">Recommand&eacute;</span>}
                        </td>
                        <td className="text-center p-3 font-mono text-sm">{row.capacity}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{row.price}</td>
                        <td className="text-center p-3 text-sm">{row.panels}</td>
                        <td className="text-center p-3 text-sm">{row.extensible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-3">
                Tous ces mod&egrave;les utilisent la chimie LFP (LiFePO4), la plus s&ucirc;re et la plus durable. Prix constat&eacute;s en juillet 2026 TTC France.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Technologie LFP&nbsp;: pourquoi c&rsquo;est le seul standard acceptable</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Toutes les solutions list&eacute;es ci-dessus utilisent la chimie <strong>LiFePO4 (LFP)</strong>. Ce n&rsquo;est pas un hasard&nbsp;: c&rsquo;est la seule technologie qui combine s&eacute;curit&eacute;, dur&eacute;e de vie et co&ucirc;t acceptable pour un usage r&eacute;sidentiel.
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="card">
                  <h4 className="font-bold text-sm mb-2 text-green">Dur&eacute;e de vie</h4>
                  <p className="text-xs text-charcoal-light">3&nbsp;000 &agrave; 6&nbsp;000 cycles (contre 500&ndash;1&nbsp;000 pour les Li-ion NMC). Sur une utilisation quotidienne, c&rsquo;est 8 &agrave; 16 ans de vie utile.</p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-2 text-green">S&eacute;curit&eacute;</h4>
                  <p className="text-xs text-charcoal-light">Pas de risque d&rsquo;emballement thermique (&laquo;&nbsp;feu de batterie&nbsp;&raquo;). La chimie LFP est stable m&ecirc;me en cas de surcharge ou de d&eacute;tersion.</p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-2 text-green">Temp&eacute;ratures</h4>
                  <p className="text-xs text-charcoal-light">Fonctionnement de &minus;20&nbsp;&deg;C &agrave; +60&nbsp;&deg;C en d&eacute;charge (v&eacute;rifiez les specs de charge pour les mod&egrave;les ext&eacute;rieurs). Id&eacute;al pour les installations sur balcon expos&eacute;es.</p>
                </div>
              </div>
              <div className="card bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-amber-dark">
                  <strong>Point de vigilance&nbsp;:</strong> certains kits d&rsquo;entr&eacute;e de gamme vendus sur Amazon proposent des batteries &laquo;&nbsp;LifePO4&nbsp;&raquo; avec une garantie de 1 an seulement. M&eacute;fiez-vous&nbsp;: une vraie batterie LFP de qualit&eacute; est garantie minimum 5 ans. En-dessous, c&rsquo;est un signal d&rsquo;alerte sur la qualit&eacute; des cellules.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Peut-on ajouter une batterie &agrave; son kit existant&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La r&eacute;ponse d&eacute;pend de votre onduleur actuel&nbsp;:
              </p>
              <div className="space-y-3">
                <div className="card">
                  <div className="flex items-start gap-3">
                    <span className="text-green font-bold text-lg mt-0.5">&#10003;</span>
                    <div>
                      <h4 className="font-bold text-sm">Zendure SolarFlow, EcoFlow PowerStream, Bluetti Balco 260</h4>
                      <p className="text-xs text-charcoal-light mt-1">Ces syst&egrave;mes sont con&ccedil;us pour accueillir des batteries suppl&eacute;mentaires ou sont disponibles en version &laquo;&nbsp;expansion&nbsp;&raquo;. Vous pouvez commencer sans batterie et en ajouter une plus tard.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-dark font-bold text-lg mt-0.5">&#10007;</span>
                    <div>
                      <h4 className="font-bold text-sm">Sunology PLAY 2, Beem On 500&nbsp;Wc, Sunethic F500</h4>
                      <p className="text-xs text-charcoal-light mt-1">Ces kits utilisent un micro-onduleur standard (Hoymiles, APsystems). Ils ne sont pas directement compatibles avec une batterie externe. Il faudrait changer l&rsquo;onduleur &mdash; ce qui efface l&rsquo;&eacute;conomie initiale du kit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Si vous envisagez d&rsquo;ajouter une batterie un jour, <strong>anticipez ce choix d&egrave;s l&rsquo;achat</strong>. Lisez notre <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline font-semibold">comparatif des kits avec batterie</Link> pour voir les options disponibles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment optimiser l&rsquo;usage de sa batterie</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avoir une batterie ne suffit pas&nbsp;: encore faut-il l&rsquo;utiliser intelligemment. Nos conseils&nbsp;:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: 'Programmez vos appareils &agrave; forte consommation en journ&eacute;e',
                    desc: 'Lave-linge, lave-vaisselle, s&egrave;che-cheveux : utilisez-les entre 10h et 15h pour consommer directement la production solaire et pr&eacute;server la batterie pour le soir.',
                  },
                  {
                    title: 'Ne d&eacute;chargez pas en dessous de 20&nbsp;%',
                    desc: 'Les batteries LFP tol&egrave;rent bien les d&eacute;charges profondes, mais maintenir une charge min de 20&nbsp;% prolonge la dur&eacute;e de vie des cellules.',
                  },
                  {
                    title: 'Utilisez une application de suivi',
                    desc: 'Les syst&egrave;mes Zendure, EcoFlow et Bluetti disposent tous d&rsquo;applications mobiles permettant de planifier les cycles de charge/d&eacute;charge selon vos habitudes.',
                  },
                  {
                    title: 'V&eacute;rifiez la compatibilit&eacute; avec votre tarif HC/HP',
                    desc: 'Si vous avez un contrat heures creuses, certains syst&egrave;mes (Zendure SolarFlow Mix, Bluetti Balco) peuvent se recharger sur le r&eacute;seau la nuit en HC pour s&rsquo;utiliser le matin avant la production solaire.',
                  },
                ].map((tip, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{tip.title}</h4>
                    <p className="text-xs text-charcoal-light" dangerouslySetInnerHTML={{ __html: tip.desc }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Plus de conseils dans notre guide&nbsp;: <Link href="/guide/optimiser-autoconsommation-solaire" className="text-green hover:underline font-semibold">comment optimiser son autoconsommation solaire</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-3">
                {[
                  'Vous &ecirc;tes retrait&eacute; ou t&eacute;l&eacute;travailleur pr&eacute;sent toute la journ&eacute;e &mdash; le gain ne justifie pas l&rsquo;investissement',
                  'Votre kit fait moins de 300&nbsp;W &mdash; la production est trop faible pour remplir utilemet une batterie de 2&nbsp;kWh',
                  'Vous avez un balcon plein nord &mdash; m&ecirc;me avec stockage, la production annuelle reste insuffisante pour un ROI raisonnable',
                  'Vous louez votre logement et risquez de d&eacute;m&eacute;nager dans 2&nbsp;ans &mdash; le ROI d&rsquo;une batterie est de 7&ndash;12&nbsp;ans minimum',
                  'Vous n&rsquo;avez pas encore install&eacute; votre premier kit &mdash; commen&ccedil;ez sans batterie, mesurez votre taux d&rsquo;autoconsommation r&eacute;el pendant 3 mois, puis d&eacute;cidez',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-amber-dark mt-0.5 text-sm font-bold">&#10007;</span>
                    <p className="text-sm text-charcoal-light" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Avec ou sans batterie : quel ROI pour votre situation ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur int&egrave;gre les deux sc&eacute;narios selon votre profil de pr&eacute;sence.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <AffiliateCTA
              productName="Bluetti Balco 260"
              merchantName="Bluetti"
              affiliateUrl="https://www.bluettipower.fr/products/balco-260"
              label="Voir le Bluetti Balco 260"
              variant="box"
              position="footer-box"
            />

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

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Sunology PLAY MAX, Zendure, EcoFlow&nbsp;: le comparatif complet</p>
                </Link>
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Bluetti Balco 260 &mdash; 2,56&nbsp;kWh LFP</h4>
                  <p className="text-xs text-charcoal-light mt-1">Notre analyse d&eacute;taill&eacute;e du syst&egrave;me tout-en-un Bluetti</p>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow &mdash; 1,92&nbsp;kWh pour 488&nbsp;&euro;</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le meilleur rapport qualit&eacute;-prix du stockage balcon</p>
                </Link>
                <Link href="/guide/optimiser-autoconsommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Optimiser son autoconsommation solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">8 astuces pour passer de 40&nbsp;% &agrave; 85&nbsp;% d&rsquo;autoconsommation</p>
                </Link>
                <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleure batterie solaire balcon 2026 : comparatif</h4>
                  <p className="text-xs text-charcoal-light mt-1">Zendure SolarFlow, Bluetti Balco 260, Jackery, EcoFlow &mdash; tableau prix/kWh complet</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie&nbsp;:</strong> calculs ROI bas&eacute;s sur 0,1940&nbsp;&euro;/kWh (tarif EDF r&eacute;glement&eacute; juillet 2026), inflation 3,3&nbsp;%/an (CRE), Performance Ratio 0,85, Lyon exposition sud (r&eacute;f&eacute;rence PVGIS). Taux d&rsquo;autoconsommation&nbsp;: 85&nbsp;% (pr&eacute;sent journ&eacute;e, sans batterie), 95&nbsp;% (pr&eacute;sent journ&eacute;e, avec batterie), 30&ndash;40&nbsp;% (absent journ&eacute;e, sans batterie), 75&ndash;80&nbsp;% (absent journ&eacute;e, avec batterie). Prix constat&eacute;s juillet 2026. Cet article est ind&eacute;pendant &mdash; <Link href="/a-propos" className="text-green hover:underline">en savoir plus sur notre m&eacute;thode</Link>.
              </p>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
