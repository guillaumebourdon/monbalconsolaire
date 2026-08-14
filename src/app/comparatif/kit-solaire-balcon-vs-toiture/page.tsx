import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Kit solaire balcon vs toiture : quelle rentabilité en 2026 ?',
  description: 'Balcon plug-and-play ou installation en toiture ? Comparatif complet : prix, production, ROI réel, aides. Chiffres honnêtes pour choisir la bonne solution.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/kit-solaire-balcon-vs-toiture',
  },
};

const faqData = [
  {
    question: 'Un kit solaire balcon est-il plus rentable qu’une installation en toiture ?',
    answer: 'En termes de ROI, oui : un kit balcon de 500 Wc à 430€ se rentabilise en 4–4,5 ans, contre 8–12 ans pour une installation toiture. En valeur absolue, la toiture génère 5 à 15 fois plus d’économies annuelles (400–1 400€/an vs 50–125€/an). Ce ne sont pas deux concurrents — ce sont deux marchés différents.',
  },
  {
    question: 'Quelles aides existe-t-il pour une installation toiture en 2026 ?',
    answer: 'La prime à l’autoconsommation a été supprimée le 5 juin 2026. MaPrimeRénov’ ne finance pas les panneaux photovoltaïques, sauf dans le cadre d’une rénovation globale avec gain énergétique ≥ 35 %. La TVA réduite à 10 % s’applique sur la main-d’œuvre et les équipements pour les résidences principales. Aucune aide ne s’applique aux kits plug-and-play balcon.',
  },
  {
    question: 'Peut-on installer un kit balcon et une installation toiture en même temps ?',
    answer: 'Oui, et c’est une stratégie cohérente pour les propriétaires : le kit balcon couvre le talon de consommation immédiatement (ROI court), la toiture optimise la production globale sur le long terme. Les deux fonctionnent en parallèle sans conflit technique, sous réserve de déclaration CACSI séparée pour le kit balcon.',
  },
  {
    question: 'Un locataire peut-il installer des panneaux en toiture ?',
    answer: 'Non. L’installation en toiture nécessite l’accord du propriétaire et des travaux permanents. Elle est réservée aux propriétaires. Le kit solaire balcon est la seule solution plug-and-play accessible aux locataires, sans autorisation et sans travaux.',
  },
  {
    question: 'Quelle puissance d’installation toiture pour une maison standard ?',
    answer: 'Pour une maison de 3–4 personnes consommant 4–5 000 kWh/an, une installation de 3 kWc couvre 50–60 % des besoins, 6 kWc couvre pratiquement 100 % ou plus (avec surplus injecté). Le standard du marché résidentiel français en 2026 est 6 kWc.',
  },
  {
    question: 'Faut-il un installateur RGE pour les panneaux en toiture ?',
    answer: 'Oui. L’installation doit être réalisée par un professionnel certifié RGE (Reconnu Garant de l’Environnement). L’installation par soi-même ou par un artisan non certifié entraîne la perte de toutes les aides publiques, y compris la TVA réduite.',
  },
];

export default function ComparatifBalconVsToiturePage() {
  return (
    <>
      <SchemaArticle
        title="Kit solaire balcon vs toiture : quelle rentabilité en 2026 ?"
        description="Balcon plug-and-play ou installation en toiture ? Comparatif complet sur prix, production, ROI réel et aides."
        url="https://monbalconsolaire.fr/comparatif/kit-solaire-balcon-vs-toiture"
        datePublished="2026-08-14"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb
        items={[
          { label: 'Comparatifs', href: '/comparatif' },
          { label: 'Balcon vs toiture' },
        ]}
      />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Comparatifs', href: '/comparatif' },
              { label: 'Balcon vs toiture' },
            ]}
          />

          {/* Header */}
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif ao&ucirc;t 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon vs toiture&nbsp;: quelle diff&eacute;rence de rentabilit&eacute;&nbsp;?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              300–6&nbsp;000&euro; d&apos;investissement d&apos;un c&ocirc;t&eacute;, 6&nbsp;750 à 14&nbsp;000&euro; de l&apos;autre. ROI de 4 ans contre 8–12 ans. Ce ne sont pas deux solutions concurrentes &mdash; ce sont deux march&eacute;s compl&egrave;tement diff&eacute;rents. Voici les chiffres honn&ecirc;tes pour choisir.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>14 ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>

            <div className="card bg-cream/50 border-border-light mt-6 py-3 px-5 flex items-start gap-3">
              <span className="text-stone text-sm mt-0.5">&#x2139;</span>
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> calculs bas&eacute;s sur le tarif EDF 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;%, Performance Ratio 0,85, r&eacute;f&eacute;rence Lyon exposition sud, dur&eacute;e 25 ans. <Link href="/methodologie" className="text-green hover:underline">Voir le d&eacute;tail &rarr;</Link>
              </p>
            </div>
          </div>

          {/* En résumé */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li>&#x2714; <strong>Balcon (plug-and-play) :</strong> 299–6&nbsp;900&euro;, ROI 4&ndash;6 ans, &eacute;conomies 50–150&euro;/an. Id&eacute;al locataire, propri&eacute;taire en appartement.</li>
              <li>&#x2714; <strong>Toiture (installation pro) :</strong> 6&nbsp;750–14&nbsp;000&euro;, ROI 8&ndash;12 ans, &eacute;conomies 460–1&nbsp;400&euro;/an. R&eacute;serv&eacute; aux propri&eacute;taires de maison.</li>
              <li>&#x26A0; <strong>Prime autoconsommation supprim&eacute;e</strong> depuis le 5 juin 2026. MaPrimeR&eacute;nov&apos; ne s&apos;applique pas au photovolta&iuml;que standard.</li>
              <li>&#x2192; Le balcon n&apos;est pas une alternative inf&eacute;rieure &mdash; c&apos;est la <em>seule</em> option pour un appartement, avec un ROI souvent <strong>deux fois plus court</strong>.</li>
            </ul>
          </div>

          {/* Sommaire */}
          <div className="card mb-10">
            <h3 className="font-bold text-sm mb-3 text-stone">Sommaire</h3>
            <ol className="space-y-1 text-sm text-green">
              <li><a href="#balcon" className="hover:underline">1. Le kit solaire balcon (plug-and-play)</a></li>
              <li><a href="#toiture" className="hover:underline">2. L&apos;installation solaire en toiture</a></li>
              <li><a href="#tableau" className="hover:underline">3. Tableau comparatif rentabilit&eacute;</a></li>
              <li><a href="#choisir-balcon" className="hover:underline">4. Quand choisir le balcon ?</a></li>
              <li><a href="#choisir-toiture" className="hover:underline">5. Quand passer &agrave; la toiture ?</a></li>
              <li><a href="#les-deux" className="hover:underline">6. Peut-on faire les deux ?</a></li>
              <li><a href="#faq" className="hover:underline">7. FAQ</a></li>
            </ol>
          </div>

          {/* Section 1 : Balcon */}
          <section id="balcon" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Le kit solaire balcon (plug-and-play)</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Depuis 2022, plus de 220&nbsp;000 foyers fran&ccedil;ais se sont &eacute;quip&eacute;s d&apos;un kit solaire balcon. Le principe&nbsp;: un panneau de 300 &agrave; 800&nbsp;Wc (le plafond l&eacute;gal confirm&eacute; par la DGEC en 2026), un micro-onduleur, une prise 230&nbsp;V. Installation en 1 heure, z&eacute;ro installateur, z&eacute;ro travaux.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-4">
              La d&eacute;claration CACSI aupr&egrave;s d&apos;Enedis est gratuite et se fait en ligne en 10 minutes. Le compteur Linky enregistre l&apos;injection du surplus &mdash; qui n&apos;est pas rachet&eacute; mais qui &eacute;vite tout probl&egrave;me r&eacute;glementaire.
            </p>

            <h3 className="font-bold text-lg mb-3 mt-6">Ce que produit concr&egrave;tement un kit balcon</h3>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Formule appliqu&eacute;e&nbsp;: <em>puissance (kWc) &times; 1&nbsp;100 kWh/kWc/an &times; PR 0,85</em>, ensoleillement r&eacute;f&eacute;rence Lyon sud.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-pale/30">
                    <th className="text-left p-3 font-semibold border border-border-light">Kit</th>
                    <th className="text-right p-3 font-semibold border border-border-light">Prix indicatif</th>
                    <th className="text-right p-3 font-semibold border border-border-light">Production</th>
                    <th className="text-right p-3 font-semibold border border-border-light">&Eacute;conomies/an</th>
                    <th className="text-right p-3 font-semibold border border-border-light">ROI estim&eacute;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-border-light">
                    <td className="p-3 border border-border-light">Beem Kit 300&nbsp;Wc</td>
                    <td className="p-3 text-right border border-border-light">299&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light">~280 kWh/an</td>
                    <td className="p-3 text-right border border-border-light">~46&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light font-semibold text-green">~5 ans</td>
                  </tr>
                  <tr className="bg-green-pale/20 border border-border-light">
                    <td className="p-3 border border-border-light font-semibold">Beem On 500&nbsp;Wc &#x2605; meilleur rapport</td>
                    <td className="p-3 text-right border border-border-light">429&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light">~470 kWh/an</td>
                    <td className="p-3 text-right border border-border-light">~77&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light font-bold text-green">~4,5 ans</td>
                  </tr>
                  <tr className="border border-border-light">
                    <td className="p-3 border border-border-light">Sunology PLAY&nbsp;2</td>
                    <td className="p-3 text-right border border-border-light">599&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light">~420 kWh/an</td>
                    <td className="p-3 text-right border border-border-light">~69&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light font-semibold text-green">~7 ans</td>
                  </tr>
                  <tr className="border border-border-light">
                    <td className="p-3 border border-border-light">Kit double 800&nbsp;Wc (max l&eacute;gal)</td>
                    <td className="p-3 text-right border border-border-light">~750&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light">~750 kWh/an</td>
                    <td className="p-3 text-right border border-border-light">~124&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light font-semibold text-green">~5 ans</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone mb-6">Tarif 0,1940&nbsp;&euro;/kWh &middot; autoconsommation 85&nbsp;% &middot; inflation 3,3&nbsp;%/an &middot; Lyon sud &middot; ROI avec &eacute;volution annuelle du tarif.</p>

            <div className="card bg-green-pale/20 border-l-4 border-l-green mb-4 p-4">
              <p className="text-sm font-semibold mb-1">&#x2714; Avantages du kit balcon</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>&bull; Accessible aux <strong>locataires</strong> sans accord du propri&eacute;taire</li>
                <li>&bull; Z&eacute;ro travaux, z&eacute;ro installateur</li>
                <li>&bull; ROI 4 &agrave; 7 ans &mdash; le plus court du march&eacute; solaire r&eacute;sidentiel</li>
                <li>&bull; D&eacute;m&eacute;nageable (le kit part avec vous)</li>
                <li>&bull; D&eacute;claration CACSI gratuite et simplifi&eacute;e</li>
              </ul>
            </div>
            <div className="card bg-amber-pale/30 border-l-4 border-l-amber mb-6 p-4">
              <p className="text-sm font-semibold mb-1">&#9888; Limites du kit balcon</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>&bull; Plafond l&eacute;gal 800&nbsp;Wc &mdash; impossible de produire davantage</li>
                <li>&bull; &Eacute;conomies maximales ~124&nbsp;&euro;/an : ne couvre pas toute la facture</li>
                <li>&bull; N&eacute;cessite une orientation correcte (pas plein nord)</li>
                <li>&bull; Pas de revente du surplus (uniquement autoconsommation)</li>
              </ul>
            </div>

            <p className="text-charcoal-light leading-relaxed">
              Pour aller plus loin sur les chiffres&nbsp;: <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="text-green hover:underline">Combien rapporte vraiment un panneau solaire de balcon ?</Link>
            </p>
          </section>

          {/* AffiliateCTA balcon */}
          <AffiliateCTA
            productName="Beem On 500 Wc"
            merchantName="Beem Energy"
            affiliateUrl="https://www.beemenergy.fr/products/beem-on-500-wc"
            label="Voir le Beem On 500 Wc"
            variant="inline"
            position="mid-article"
            price="429 €"
          />

          {/* Section 2 : Toiture */}
          <section id="toiture" className="mb-12 mt-10">
            <h2 className="text-2xl font-bold mb-4">2. L&apos;installation solaire en toiture</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Une installation en toiture, c&apos;est un autre projet. L&apos;installateur certifi&eacute; RGE vient poser des panneaux directement sur la charpente ou en surimposition, raccord&eacute;s au tableau &eacute;lectrique via un onduleur centralis&eacute; ou des micro-onduleurs. Production 5 &agrave; 20 fois sup&eacute;rieure &mdash; et investissement 20 &agrave; 50 fois plus &eacute;lev&eacute;.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-4">
              <strong>Prix 2026 constat&eacute;s (source&nbsp;: installateurs certifi&eacute;s, TVA 10&nbsp;% appliqu&eacute;e) :</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-charcoal-light mb-6 space-y-1">
              <li><strong>3 kWc :</strong> environ 6&nbsp;750&nbsp;&euro; TTC</li>
              <li><strong>6 kWc :</strong> environ 10&nbsp;900&nbsp;&euro; TTC (standard march&eacute; r&eacute;sidentiel 2026)</li>
              <li><strong>9 kWc :</strong> environ 14&nbsp;000&nbsp;&euro; TTC</li>
            </ul>
            <p className="text-charcoal-light leading-relaxed mb-4">
              La main-d&apos;&oelig;uvre repr&eacute;sente 20 &agrave; 35&nbsp;% du budget total. L&apos;installateur doit obligatoirement &ecirc;tre certifi&eacute; RGE (Reconnu Garant de l&apos;Environnement) &mdash; sans quoi vous perdez la TVA r&eacute;duite et toutes les aides &eacute;ventuelles.
            </p>

            <h3 className="font-bold text-lg mb-3 mt-6">Ce que produit une installation toiture</h3>
            <p className="text-charcoal-light leading-relaxed mb-4">
              M&ecirc;me formule&nbsp;: <em>kWc &times; 1&nbsp;100 kWh/kWc/an &times; PR 0,85</em>, autoconsommation 85&nbsp;%.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-pale/30">
                    <th className="text-left p-3 font-semibold border border-border-light">Installation</th>
                    <th className="text-right p-3 font-semibold border border-border-light">Prix TTC</th>
                    <th className="text-right p-3 font-semibold border border-border-light">Production</th>
                    <th className="text-right p-3 font-semibold border border-border-light">&Eacute;conomies/an</th>
                    <th className="text-right p-3 font-semibold border border-border-light">ROI estim&eacute;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-border-light">
                    <td className="p-3 border border-border-light">3 kWc (6 panneaux)</td>
                    <td className="p-3 text-right border border-border-light">~6&nbsp;750&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light">~2&nbsp;800 kWh/an</td>
                    <td className="p-3 text-right border border-border-light">~462&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light font-semibold text-amber-dark">~11 ans</td>
                  </tr>
                  <tr className="bg-green-pale/20 border border-border-light">
                    <td className="p-3 border border-border-light font-semibold">6 kWc &#x2605; standard r&eacute;sidentiel</td>
                    <td className="p-3 text-right border border-border-light">~10&nbsp;900&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light">~5&nbsp;600 kWh/an</td>
                    <td className="p-3 text-right border border-border-light">~923&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light font-bold text-amber-dark">~9 ans</td>
                  </tr>
                  <tr className="border border-border-light">
                    <td className="p-3 border border-border-light">9 kWc (grande maison)</td>
                    <td className="p-3 text-right border border-border-light">~14&nbsp;000&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light">~8&nbsp;400 kWh/an</td>
                    <td className="p-3 text-right border border-border-light">~1&nbsp;385&nbsp;&euro;</td>
                    <td className="p-3 text-right border border-border-light font-semibold text-amber-dark">~7,5 ans</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone mb-4">ROI calcul&eacute; avec inflation 3,3&nbsp;%/an sur le tarif EDF. L&apos;autoconsommation r&eacute;elle peut varier selon le profil du foyer &mdash; un 9&nbsp;kWc sur une maison consommant 4&nbsp;500 kWh/an ne valorise que 60&nbsp;% de sa production.</p>

            <div className="bg-amber-pale/30 border border-amber/20 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold mb-2">&#x26A0; Aides toiture 2026&nbsp;: la r&eacute;alit&eacute;</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>&bull; <strong>Prime autoconsommation :</strong> supprim&eacute;e le 5 juin 2026</li>
                <li>&bull; <strong>MaPrimeR&eacute;nov&apos; :</strong> ne finance <em>pas</em> le photovolta&iuml;que (sauf r&eacute;novation globale &ge;&nbsp;35&nbsp;% gain &eacute;nerg&eacute;tique)</li>
                <li>&bull; <strong>TVA r&eacute;duite 10&nbsp;% :</strong> s&apos;applique sur la main-d&apos;&oelig;uvre et le mat&eacute;riel &mdash; seul avantage fiscal r&eacute;el en 2026</li>
              </ul>
            </div>

            <div className="card bg-green-pale/20 border-l-4 border-l-green mb-4 p-4">
              <p className="text-sm font-semibold mb-1">&#x2714; Avantages de la toiture</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>&bull; &Eacute;conomies annuelles 5 &agrave; 15 fois plus &eacute;lev&eacute;es qu&apos;un kit balcon</li>
                <li>&bull; Peut couvrir 50&nbsp;% &agrave; 100&nbsp;% de la facture &eacute;lectrique</li>
                <li>&bull; Valorise la propri&eacute;t&eacute; (DPE am&eacute;lior&eacute;)</li>
                <li>&bull; Compatible avec la revente du surplus (tarif OA inject&eacute; si contrat S17)</li>
              </ul>
            </div>
            <div className="card bg-amber-pale/30 border-l-4 border-l-amber mb-6 p-4">
              <p className="text-sm font-semibold mb-1">&#9888; Limites de la toiture</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>&bull; R&eacute;serv&eacute;e aux propri&eacute;taires de maisons (toiture disponible, accord copropri&eacute;t&eacute; si collectif)</li>
                <li>&bull; ROI 7 &agrave; 12 ans &mdash; capital immobilis&eacute; longtemps</li>
                <li>&bull; Installateur RGE obligatoire (d&eacute;marchage agressif dans ce secteur, vigilance)</li>
                <li>&bull; Aides publiques quasi nulles en 2026</li>
              </ul>
            </div>
          </section>

          {/* Section 3 : Tableau comparatif global */}
          <section id="tableau" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Tableau comparatif global</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-charcoal text-cream">
                    <th className="text-left p-3 font-semibold">Crit&egrave;re</th>
                    <th className="text-center p-3 font-semibold">Balcon plug-and-play</th>
                    <th className="text-center p-3 font-semibold">Toiture (installateur)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light">
                  <tr>
                    <td className="p-3 font-medium">Prix d&apos;entr&eacute;e</td>
                    <td className="p-3 text-center text-green font-bold">299&nbsp;&euro;</td>
                    <td className="p-3 text-center text-charcoal-light">~6&nbsp;750&nbsp;&euro;</td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="p-3 font-medium">Puissance max</td>
                    <td className="p-3 text-center">800&nbsp;Wc (l&eacute;gal)</td>
                    <td className="p-3 text-center text-green font-bold">3 &agrave; 9&nbsp;kWc (illimit&eacute; jusqu&apos;&agrave; 100 kWc)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Production annuelle</td>
                    <td className="p-3 text-center">280&ndash;750 kWh</td>
                    <td className="p-3 text-center text-green font-bold">2&nbsp;800&ndash;8&nbsp;400 kWh</td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="p-3 font-medium">&Eacute;conomies annuelles</td>
                    <td className="p-3 text-center">46&ndash;124&nbsp;&euro;</td>
                    <td className="p-3 text-center text-green font-bold">462&ndash;1&nbsp;385&nbsp;&euro;</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">ROI estim&eacute;</td>
                    <td className="p-3 text-center text-green font-bold">4,5&ndash;7 ans</td>
                    <td className="p-3 text-center">7,5&ndash;12 ans</td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="p-3 font-medium">Installation</td>
                    <td className="p-3 text-center text-green font-bold">Soi-m&ecirc;me, 1h</td>
                    <td className="p-3 text-center">Installateur RGE (1&ndash;2 jours)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Accessible locataire</td>
                    <td className="p-3 text-center text-green font-bold">&#x2714; Oui</td>
                    <td className="p-3 text-center text-red-600">&#x2717; Non</td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="p-3 font-medium">Aides 2026</td>
                    <td className="p-3 text-center text-charcoal-light">Aucune</td>
                    <td className="p-3 text-center">TVA 10&nbsp;% uniquement</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Revente surplus</td>
                    <td className="p-3 text-center text-red-600">&#x2717; Non (CACSI)</td>
                    <td className="p-3 text-center text-green font-bold">&#x2714; Possible (S17)</td>
                  </tr>
                  <tr className="bg-cream/40">
                    <td className="p-3 font-medium">Garantie</td>
                    <td className="p-3 text-center">25 ans panneaux</td>
                    <td className="p-3 text-center">10 ans pose + 25 ans panneaux</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">D&eacute;m&eacute;nagement</td>
                    <td className="p-3 text-center text-green font-bold">&#x2714; Kit d&eacute;pla&ccedil;able</td>
                    <td className="p-3 text-center text-charcoal-light">Fix&eacute; (valorise le bien)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone">Sources&nbsp;: potentielsolaire.com, adekwatts.fr, laprimeenergie.fr, DGEC, Enedis.</p>
          </section>

          {/* Section 4 : Quand choisir le balcon */}
          <section id="choisir-balcon" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Quand choisir le kit balcon ?</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Le kit plug-and-play n&apos;est pas un &laquo;&nbsp;consolation prize&nbsp;&raquo; pour ceux qui ne peuvent pas se payer une toiture. Dans plusieurs situations, c&apos;est objectivement le meilleur choix.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="card border-l-4 border-l-green p-4">
                <p className="font-semibold text-sm mb-2">&#x2714; Vous &ecirc;tes locataire</p>
                <p className="text-sm text-charcoal-light">Le kit part avec vous. Aucune autorisation n&eacute;cessaire tant que l&apos;installation est amovible. La seule solution solaire accessible sans &ecirc;tre propri&eacute;taire.</p>
              </div>
              <div className="card border-l-4 border-l-green p-4">
                <p className="font-semibold text-sm mb-2">&#x2714; Vous habitez en appartement</p>
                <p className="text-sm text-charcoal-light">Pas de toiture individuelle disponible, ou impossible d&apos;obtenir la majorit&eacute; en AG de copropri&eacute;t&eacute;. Le balcon est votre seul espace exploitable.</p>
              </div>
              <div className="card border-l-4 border-l-green p-4">
                <p className="font-semibold text-sm mb-2">&#x2714; Budget limit&eacute; (&lt; 1&nbsp;000&nbsp;&euro;)</p>
                <p className="text-sm text-charcoal-light">L&apos;entr&eacute;e de gamme &agrave; 299&nbsp;&euro; se rentabilise en 5 ans. Impossible de trouver une installation toiture rentable sous 6&nbsp;000&nbsp;&euro;.</p>
              </div>
              <div className="card border-l-4 border-l-green p-4">
                <p className="font-semibold text-sm mb-2">&#x2714; Vous voulez le meilleur ROI</p>
                <p className="text-sm text-charcoal-light">ROI 4,5 ans vs 8&ndash;12 ans pour la toiture. Si vous optimisez le retour sur investissement plut&ocirc;t que le volume d&apos;&eacute;conomies absolues, le balcon gagne.</p>
              </div>
            </div>

            <p className="text-charcoal-light leading-relaxed">
              Lisez notre <Link href="/guide/panneau-solaire-balcon-debutant" className="text-green hover:underline">guide d&eacute;butant complet</Link> et notre <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">comparatif des meilleurs kits 2026</Link> pour trouver le kit adapt&eacute; &agrave; votre situation.
            </p>
          </section>

          {/* CTA calculateur */}
          <div className="card-lg bg-green-pale/20 border border-green/20 text-center mb-10 py-8">
            <p className="font-bold text-lg mb-2">Calculez vos &eacute;conomies personnalis&eacute;es</p>
            <p className="text-sm text-charcoal-light mb-4">D&eacute;partement, orientation, budget&nbsp;: notre simulateur calcule votre ROI exact en 30 secondes.</p>
            <Link href="/calculateur" className="btn-primary inline-block">
              Lancer le calculateur gratuit &rarr;
            </Link>
          </div>

          {/* Section 5 : Quand passer à la toiture */}
          <section id="choisir-toiture" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Quand passer &agrave; la toiture ?</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              La toiture devient le bon choix quand plusieurs conditions sont r&eacute;unies simultan&eacute;ment. Chacune prise isol&eacute;ment ne suffit pas.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 bg-cream/60 rounded-lg border border-border-light">
                <span className="text-green font-bold mt-0.5">1.</span>
                <div>
                  <p className="font-semibold text-sm">Vous &ecirc;tes propri&eacute;taire d&apos;une maison individuelle</p>
                  <p className="text-sm text-charcoal-light">Avec une toiture orient&eacute;e sud, sud-est ou sud-ouest (&gt; 30&deg; de pente). Une orientation plein est ou ouest perd 15&ndash;25&nbsp;% de production.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cream/60 rounded-lg border border-border-light">
                <span className="text-green font-bold mt-0.5">2.</span>
                <div>
                  <p className="font-semibold text-sm">Votre consommation annuelle d&eacute;passe 4&nbsp;000 kWh</p>
                  <p className="text-sm text-charcoal-light">En dessous de ce seuil, une installation 3&nbsp;kWc couvre d&eacute;j&agrave; plus que vos besoins &mdash; le surplus inject&eacute; &agrave; 1,1&nbsp;c&euro;/kWh ne compense pas le prix d&apos;une installation plus grande.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cream/60 rounded-lg border border-border-light">
                <span className="text-green font-bold mt-0.5">3.</span>
                <div>
                  <p className="font-semibold text-sm">Vous avez 8&nbsp;000&nbsp;&euro; minimum disponibles</p>
                  <p className="text-sm text-charcoal-light">Et vous &ecirc;tes pr&ecirc;ts &agrave; immobiliser ce capital 8 &agrave; 12 ans avant retour sur investissement complet.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cream/60 rounded-lg border border-border-light">
                <span className="text-green font-bold mt-0.5">4.</span>
                <div>
                  <p className="font-semibold text-sm">Vous pr&eacute;voyez de rester dans le logement 15+ ans</p>
                  <p className="text-sm text-charcoal-light">La toiture valorise le bien &agrave; la revente, mais l&apos;essentiel des b&eacute;n&eacute;fices s&apos;accumule sur 20&ndash;25 ans. Un d&eacute;m&eacute;nagement &agrave; 7 ans peut couper le b&eacute;n&eacute;fice net &agrave; z&eacute;ro.</p>
                </div>
              </div>
            </div>

            <div className="card bg-amber-pale/30 p-4 mb-6">
              <p className="text-sm font-semibold mb-2">&#9888; &Agrave; &eacute;viter si...</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>&#10007; Vous &ecirc;tes locataire ou en copropri&eacute;t&eacute; sans accord AG</li>
                <li>&#10007; Votre toiture n&eacute;cessite des travaux dans les 5 ans (il faudra d&eacute;poser les panneaux)</li>
                <li>&#10007; Votre budget est inf&eacute;rieur &agrave; 6&nbsp;000&nbsp;&euro; (la toiture ne sera pas rentable)</li>
                <li>&#10007; Vous comptez sur des aides importantes : en 2026, elles sont quasi inexistantes pour le photovolta&iuml;que</li>
              </ul>
            </div>
          </section>

          {/* Section 6 : Les deux */}
          <section id="les-deux" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Peut-on faire les deux ?</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Oui, et c&apos;est m&ecirc;me une strat&eacute;gie coh&eacute;rente pour les propri&eacute;taires de maison avec balcon ou terrasse.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Le kit balcon couvre imm&eacute;diatement le <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline">talon de consommation</Link> (r&eacute;frig&eacute;rateur, box internet, &eacute;lectronique en veille) avec le ROI le plus court du march&eacute;. L&apos;installation toiture optimise la production globale sur le long terme.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Techniquement, il n&apos;y a aucun conflit&nbsp;: le kit balcon fonctionne en CACSI (autoconsommation sans injection factur&eacute;e), l&apos;installation toiture peut &ecirc;tre en autoconsommation avec vente du surplus (contrat S17). Les deux syst&egrave;mes opèrent sur la m&ecirc;me installation &eacute;lectrique sans interf&eacute;rence.
            </p>
            <div className="card bg-green-pale/20 border-l-4 border-l-green p-4 mb-4">
              <p className="text-sm font-semibold mb-2">Strat&eacute;gie double production pour propri&eacute;taires</p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li><strong>Maintenant (budget&nbsp;: 300–700&nbsp;&euro;) :</strong> kit balcon 500–800&nbsp;Wc, ROI 4–6 ans</li>
                <li><strong>Dans 3–5 ans (budget&nbsp;: 8–15 k&euro;) :</strong> installation toiture 6–9 kWc avec devis compar&eacute;s</li>
                <li><strong>R&eacute;sultat :</strong> couverture compl&egrave;te du talon imm&eacute;diate + &eacute;conomies maximales sur 25 ans</li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div className="space-y-3">
              {faqData.map((item, index) => (
                <details key={index} className="card" {...(index === 0 ? { open: true } : {})}>
                  <summary className="cursor-pointer font-semibold text-sm py-1 list-none flex items-center justify-between">
                    {item.question}
                    <span className="text-green text-xs ml-2">&#9660;</span>
                  </summary>
                  <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Articles liés */}
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Articles li&eacute;s</h2>
            <div className="space-y-3">
              <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-shadow group border-l-4 border-l-green">
                <p className="font-semibold text-sm group-hover:text-green transition-colors">Combien rapporte vraiment un panneau solaire de balcon ?</p>
                <p className="text-xs text-charcoal-light mt-1">Chiffres r&eacute;els de production et &eacute;conomies pour 7 villes fran&ccedil;aises.</p>
              </Link>
              <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-shadow group border-l-4 border-l-green">
                <p className="font-semibold text-sm group-hover:text-green transition-colors">Meilleur kit solaire plug and play 2026 : comparatif complet</p>
                <p className="text-xs text-charcoal-light mt-1">Sunology PLAY&nbsp;2, Beem On, Sunethic F500&nbsp;: tableau comparatif, verdict par profil.</p>
              </Link>
              <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-shadow group border-l-4 border-l-green">
                <p className="font-semibold text-sm group-hover:text-green transition-colors">Guide complet solaire balcon pour d&eacute;butants</p>
                <p className="text-xs text-charcoal-light mt-1">Tout savoir avant de se lancer&nbsp;: principes, co&ucirc;ts, production, d&eacute;claration.</p>
              </Link>
              <Link href="/blog/aides-subventions-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-shadow group border-l-4 border-l-green">
                <p className="font-semibold text-sm group-hover:text-green transition-colors">Aides et subventions panneau solaire balcon 2026</p>
                <p className="text-xs text-charcoal-light mt-1">Prime autoconsommation supprim&eacute;e, MaPrimeR&eacute;nov&apos; inapplicable&nbsp;: ce qui reste vraiment.</p>
              </Link>
            </div>
          </section>

          <NewsletterBanner />

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-border-light text-xs text-stone space-y-2">
            <p><strong>M&eacute;thodologie ROI :</strong> tarif EDF 0,1940&nbsp;&euro;/kWh, inflation &eacute;lectrique 3,3&nbsp;%/an (source&nbsp;: CRE), autoconsommation 85&nbsp;%, Performance Ratio 0,85, r&eacute;f&eacute;rence Lyon exposition sud, dur&eacute;e 25 ans. Les prix toiture sont des prix march&eacute; constat&eacute;s en 2026 avec TVA 10&nbsp;% (source&nbsp;: potentielsolaire.com, adekwatts.fr). Les ROI sont des estimations bas&eacute;es sur la m&eacute;thodologie standard&nbsp;: votre situation r&eacute;elle peut varier selon l&apos;orientation, le d&eacute;partement et le profil de consommation.</p>
            <p><strong>Transparence affili&eacute;s :</strong> certains liens de cet article sont affili&eacute;s. Notre comparatif est ind&eacute;pendant&nbsp;: aucun fabricant ou installateur ne conditionne notre analyse. <Link href="/methodologie" className="text-green hover:underline">M&eacute;thodologie compl&egrave;te &rarr;</Link></p>
          </footer>
        </div>
      </article>
    </>
  );
}
