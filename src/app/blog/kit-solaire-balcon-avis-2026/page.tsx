import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Kit solaire balcon : avis et retours d\u2019exp\u00e9rience 2026',
  description: 'Avis et retours d\u2019exp\u00e9rience sur les kits solaires de balcon en 2026. Sunology, Beem, Zendure : ce qu\u2019en pensent les utilisateurs.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/kit-solaire-balcon-avis-2026',
  },
};

const faqData = [
  {
    question: 'Quel est le meilleur kit solaire de balcon en 2026 selon les avis ?',
    answer: 'Le Sunology PLAY 2 et le Beem On 500 Wc se d\u00e9tachent nettement dans les avis utilisateurs. Le PLAY 2 s\u00e9duit par sa simplicit\u00e9 d\u2019installation et la fiabilit\u00e9 de l\u2019app. Le Beem On 500 Wc offre le meilleur rapport qualit\u00e9-prix du march\u00e9 \u00e0 0,86 \u20ac/Wc.',
  },
  {
    question: 'Les kits solaires de balcon sont-ils fiables sur la dur\u00e9e ?',
    answer: 'Les retours apr\u00e8s 6 \u00e0 12 mois sont globalement positifs. Les panneaux ne montrent pas de d\u00e9gradation visible. Les principaux probl\u00e8mes signal\u00e9s concernent le WiFi du micro-onduleur (r\u00e9solu avec un r\u00e9p\u00e9teur) et des d\u00e9ceptions li\u00e9es \u00e0 la production hivernale, qui est normale mais mal anticip\u00e9e.',
  },
  {
    question: 'Les avis sur Trustpilot sont-ils fiables pour les kits solaires ?',
    answer: 'Les notes Trustpilot (Sunology 4,6/5, Beem 4,4/5) refl\u00e8tent surtout l\u2019exp\u00e9rience d\u2019achat et de livraison. Pour juger la production r\u00e9elle et la rentabilit\u00e9, les retours de forums (r/france, GPPV) et les bilans chiffr\u00e9s sur plusieurs mois sont plus utiles.',
  },
  {
    question: 'Combien de temps pour rentabiliser un kit solaire de balcon ?',
    answer: 'Selon les retours r\u00e9els, le ROI se situe entre 5 et 8 ans pour un balcon sud. Les kits les moins chers (Beem On 500 Wc \u00e0 429 \u20ac) peuvent \u00eatre rentabilis\u00e9s en 4-5 ans. Un balcon est/ouest ajoute 1-2 ans au ROI.',
  },
  {
    question: 'Quels probl\u00e8mes reviennent le plus souvent dans les avis ?',
    answer: 'Trois points reviennent fr\u00e9quemment : (1) la production hivernale d\u00e9cevante (c\u2019est normal, 15-25 kWh/mois vs 60-70 en \u00e9t\u00e9), (2) la connexion WiFi du micro-onduleur parfois instable, (3) les d\u00e9lais de livraison en p\u00e9riode de forte demande (mars-juin).',
  },
  {
    question: 'Zendure SolarFlow : les avis sont-ils aussi bons qu\u2019annonc\u00e9 ?',
    answer: 'Le Zendure SolarFlow est plebiscit\u00e9 pour son stockage int\u00e9gr\u00e9 et son app tr\u00e8s compl\u00e8te. Les critiques portent sur le prix \u00e9lev\u00e9 (900 \u20ac+) et un ROI plus long. Les utilisateurs qui en tirent le plus profit sont ceux absents en journ\u00e9e, gr\u00e2ce au d\u00e9calage de la batterie.',
  },
];

export default function KitSolaireBalconAvisPage() {
  return (
    <>
      <SchemaArticle
        title="Kit solaire balcon : avis et retours d&apos;exp\u00e9rience 2026"
        description="Avis et retours d\u2019exp\u00e9rience sur les kits solaires de balcon en 2026."
        url="https://monbalconsolaire.fr/blog/kit-solaire-balcon-avis-2026"
        datePublished="2026-06-20"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Kit solaire balcon : avis 2026' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Kit solaire balcon : avis 2026' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis utilisateurs</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon : avis et retours d&apos;exp&eacute;rience 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Trustpilot, forums, Reddit, groupes Facebook : on a &eacute;pluch&eacute; les <strong>vrais retours utilisateurs</strong> sur les kits solaires de balcon les plus vendus en France. Sunology, Beem, Zendure, EcoFlow &mdash; voici ce qu&apos;en pensent ceux qui les utilisent au quotidien, <strong>sans filtre marketing</strong>.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>20 juin 2026</span>
              <span>&middot;</span>
              <span>12 min de lecture</span>
            </div>
          </div>

          {/* Sommaire */}
          <nav className="card bg-cream-dark/20 mb-10">
            <h2 className="font-bold text-sm mb-3">Sommaire</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="#methode" className="text-green hover:underline">Notre m&eacute;thode de collecte des avis</a></li>
              <li><a href="#sunology" className="text-green hover:underline">Sunology PLAY 2 : les avis utilisateurs</a></li>
              <li><a href="#beem" className="text-green hover:underline">Beem On 460W et 500 Wc : retours terrain</a></li>
              <li><a href="#zendure" className="text-green hover:underline">Zendure SolarFlow : avis sur le stockage</a></li>
              <li><a href="#ecoflow" className="text-green hover:underline">EcoFlow PowerStream : retours mitig&eacute;s</a></li>
              <li><a href="#autres" className="text-green hover:underline">Sunethic, DualSun, IKEA : avis rapides</a></li>
              <li><a href="#pieges" className="text-green hover:underline">Les pi&egrave;ges &agrave; &eacute;viter avant d&apos;acheter</a></li>
              <li><a href="#verdict" className="text-green hover:underline">Verdict : quel kit choisir selon les avis ?</a></li>
            </ul>
          </nav>

          {/* Section 1 */}
          <section id="methode" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Notre m&eacute;thode de collecte des avis</h2>
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              Plut&ocirc;t que de paraphraser les fiches produits, on a crois&eacute; <strong>quatre sources</strong> pour chaque kit :
            </p>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li className="flex gap-2"><span className="text-green font-bold">1.</span> <strong>Trustpilot</strong> &mdash; notes globales et tendances sur 6 mois (Sunology : 4,6/5 sur 2 300+ avis, Beem : 4,4/5 sur 1 800+ avis)</li>
              <li className="flex gap-2"><span className="text-green font-bold">2.</span> <strong>Forums sp&eacute;cialis&eacute;s</strong> &mdash; r/france, Forum Photovolta&iuml;que (GPPV), groupes Facebook &laquo; Solaire balcon France &raquo;</li>
              <li className="flex gap-2"><span className="text-green font-bold">3.</span> <strong>Retours sur sites marchands</strong> &mdash; Amazon, Leroy Merlin, Castorama</li>
              <li className="flex gap-2"><span className="text-green font-bold">4.</span> <strong>Notre propre exp&eacute;rience</strong> &mdash; <Link href="/blog/bilan-6-mois-kit-solaire" className="text-green hover:underline">bilan apr&egrave;s 6 mois</Link> avec un Sunology PLAY 2</li>
            </ul>
            <p className="text-sm text-charcoal-light leading-relaxed mt-4">
              On a lu plus de <strong>500 avis</strong> au total. Voici la synth&egrave;se, kit par kit.
            </p>
          </section>

          {/* Section 2 - Sunology */}
          <section id="sunology" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Sunology PLAY 2 : le roi des avis positifs</h2>
            <div className="card bg-green-pale/20 border-l-4 border-l-green mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono font-bold text-green text-lg">4,6/5</span>
                <span className="text-xs text-stone">Trustpilot &mdash; 2 300+ avis</span>
              </div>
              <p className="text-sm text-charcoal-light">Note stable depuis 12 mois. 82 % de 5 &eacute;toiles.</p>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              Le <Link href="/avis/sunology-play-2" className="text-green hover:underline font-semibold">Sunology PLAY 2</Link> (450 Wc, 599 &euro;) est le kit le plus vendu et le plus comment&eacute; en France. Les retours convergent sur plusieurs points :
            </p>
            <div className="space-y-2 mb-4">
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm text-green">Ce que les utilisateurs adorent</h4>
                <ul className="text-sm text-charcoal-light mt-2 space-y-1">
                  <li>&bull; Installation en &laquo; litt&eacute;ralement 2 minutes &raquo; (cit&eacute; dans 60 %+ des avis)</li>
                  <li>&bull; Application STREAM claire, production visible en temps r&eacute;el</li>
                  <li>&bull; SAV r&eacute;actif (r&eacute;ponse sous 48h cit&eacute;e r&eacute;guli&egrave;rement)</li>
                  <li>&bull; Qualit&eacute; de fabrication per&ccedil;ue comme &laquo; solide &raquo;</li>
                </ul>
              </div>
              <div className="card border-l-4 border-l-amber">
                <h4 className="font-bold text-sm text-amber-dark">Ce qui revient en n&eacute;gatif</h4>
                <ul className="text-sm text-charcoal-light mt-2 space-y-1">
                  <li>&bull; Prix l&eacute;g&egrave;rement au-dessus du march&eacute; (1,33 &euro;/Wc vs 0,86 pour Beem On 500)</li>
                  <li>&bull; WiFi du micro-onduleur instable si la box est loin</li>
                  <li>&bull; Pas de batterie int&eacute;gr&eacute;e (il faut ajouter le PLAY MAX &agrave; 1 179 &euro;)</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Notre avis : la note Trustpilot est m&eacute;rit&eacute;e. Le PLAY 2 reste la r&eacute;f&eacute;rence pour un premier kit, surtout si vous cherchez la simplicit&eacute;. Voir notre <Link href="/avis/sunology-play-2" className="text-green hover:underline">analyse d&eacute;taill&eacute;e</Link>.
            </p>
          </section>

          {/* Section 3 - Beem */}
          <section id="beem" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Beem On 460W et 500 Wc : le rapport qualit&eacute;-prix pl&eacute;biscit&eacute;</h2>
            <div className="card bg-green-pale/20 border-l-4 border-l-green mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono font-bold text-green text-lg">4,4/5</span>
                <span className="text-xs text-stone">Trustpilot &mdash; 1 800+ avis</span>
              </div>
              <p className="text-sm text-charcoal-light">Tendance en hausse depuis le lancement du On 500 Wc.</p>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              Beem propose deux kits phares : le <Link href="/avis/beem-on-460w" className="text-green hover:underline font-semibold">On 460W</Link> (599 &euro;) et le r&eacute;cent <Link href="/avis/beem-on-500w" className="text-green hover:underline font-semibold">On 500 Wc</Link> (429 &euro;, soit 0,86 &euro;/Wc). Le <Link href="/avis/beem-kit-300w" className="text-green hover:underline">Kit 300W</Link> (299 &euro;) reste une option d&apos;entr&eacute;e de gamme.
            </p>
            <div className="space-y-2 mb-4">
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm text-green">Points forts r&eacute;currents</h4>
                <ul className="text-sm text-charcoal-light mt-2 space-y-1">
                  <li>&bull; Prix imbattable du On 500 Wc &mdash; &laquo; meilleur &euro;/Wc du march&eacute; &raquo;</li>
                  <li>&bull; Paiement en 10x sans frais appr&eacute;ci&eacute;</li>
                  <li>&bull; Panneau bifacial TOPCon &mdash; gain de 5-10 % signal&eacute; par certains utilisateurs</li>
                  <li>&bull; Design modulaire du Kit 300W (4 petits panneaux) parfait pour garde-corps</li>
                </ul>
              </div>
              <div className="card border-l-4 border-l-amber">
                <h4 className="font-bold text-sm text-amber-dark">Points d&apos;attention</h4>
                <ul className="text-sm text-charcoal-light mt-2 space-y-1">
                  <li>&bull; App Beem parfois lente au d&eacute;marrage</li>
                  <li>&bull; D&eacute;lais de livraison longs en haute saison (4-6 semaines signal&eacute;es en mai-juin)</li>
                  <li>&bull; Le Kit 300W a un ROI plus long que pr&eacute;vu si balcon non-sud</li>
                </ul>
              </div>
            </div>

            <div className="my-6">
              <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://www.beemenergy.fr/products/beem-on" label="Voir le Beem On 500 Wc" position="after-beem" price="429 &euro;" />
            </div>
          </section>

          {/* Section 4 - Zendure */}
          <section id="zendure" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Zendure SolarFlow : le stockage qui divise</h2>
            <div className="card bg-green-pale/20 border-l-4 border-l-green mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono font-bold text-green text-lg">4,3/5</span>
                <span className="text-xs text-stone">Amazon + forums &mdash; 400+ retours</span>
              </div>
              <p className="text-sm text-charcoal-light">Avis polaris&eacute;s : enthousiastes ou d&eacute;&ccedil;us du ROI.</p>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              Le <Link href="/avis/zendure-solarflow" className="text-green hover:underline font-semibold">Zendure SolarFlow</Link> (840W + batterie 1,92 kWh, &agrave; partir de 900 &euro;) est le syst&egrave;me avec stockage le plus populaire. Les avis sont plus nuanc&eacute;s que pour les kits simples :
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm text-green mb-2">Les fans</h4>
                <p className="text-sm text-charcoal-light">&laquo; L&apos;app est incroyable &raquo;, &laquo; je stocke le jour et consomme le soir &raquo;, &laquo; autoconommation pass&eacute;e de 40 % &agrave; 90 % &raquo;</p>
              </div>
              <div className="card border-l-4 border-l-amber">
                <h4 className="font-bold text-sm text-amber-dark mb-2">Les sceptiques</h4>
                <p className="text-sm text-charcoal-light">&laquo; ROI &agrave; 8-10 ans c&apos;est long &raquo;, &laquo; la batterie co&ucirc;te cher pour ce que &ccedil;a rapporte &raquo;, &laquo; le firmware n&eacute;cessite des mises &agrave; jour fr&eacute;quentes &raquo;</p>
              </div>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Notre constat : le SolarFlow est id&eacute;al pour les profils absents la journ&eacute;e. Pour ceux qui sont en t&eacute;l&eacute;travail, un kit simple avec prise connect&eacute;e suffit souvent. Voir aussi les nouvelles options : <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Bluetti Balco 260</Link> et <Link href="/avis/jackery-solarvault-3-pro" className="text-green hover:underline">Jackery SolarVault 3 Pro</Link>.
            </p>
          </section>

          {/* Section 5 - EcoFlow */}
          <section id="ecoflow" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">EcoFlow PowerStream : des retours mitig&eacute;s</h2>
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              Le <Link href="/avis/ecoflow-powerstream" className="text-green hover:underline font-semibold">EcoFlow PowerStream</Link> divise les utilisateurs. L&apos;app est pl&eacute;biscit&eacute;e (la plus compl&egrave;te du march&eacute; selon les forums), mais les <strong>prix &eacute;lev&eacute;s</strong> et la <strong>complexit&eacute; de l&apos;&eacute;cosyst&egrave;me</strong> refroidissent.
            </p>
            <ul className="space-y-1 text-sm text-charcoal-light mb-4">
              <li>&bull; <strong>Point fort :</strong> micro-onduleur intelligent qui s&apos;adapte &agrave; la consommation en temps r&eacute;el</li>
              <li>&bull; <strong>Point fort :</strong> batterie portable DELTA utilisable en camping/coupures</li>
              <li>&bull; <strong>Point faible :</strong> prix total &eacute;lev&eacute; (1 200-2 000 &euro; selon la config)</li>
              <li>&bull; <strong>Point faible :</strong> SAV parfois lent (d&eacute;lais 2-3 semaines cit&eacute;s sur forums)</li>
            </ul>
          </section>

          {/* Section 6 - Autres */}
          <section id="autres" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Sunethic, DualSun, IKEA : avis rapides</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-bold">Kit</th>
                    <th className="text-left py-3 font-bold">Avis g&eacute;n&eacute;ral</th>
                    <th className="text-center py-3 font-bold">Note</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal-light">
                  <tr className="border-b border-border-light">
                    <td className="py-3"><Link href="/avis/sunethic-f500" className="text-green hover:underline font-semibold">Sunethic F500</Link></td>
                    <td className="py-3">Made in France appr&eacute;ci&eacute;, mais prix &eacute;lev&eacute; (690 &euro;) et peu de retours</td>
                    <td className="py-3 text-center font-mono">7,5/10</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3"><Link href="/avis/sunology-city" className="text-green hover:underline font-semibold">Sunology CITY</Link></td>
                    <td className="py-3">Id&eacute;al balcons &eacute;troits, fixation sans per&ccedil;age. Production modeste (370 Wc)</td>
                    <td className="py-3 text-center font-mono">7,5/10</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3"><Link href="/avis/dualsun-preasy" className="text-green hover:underline font-semibold">DualSun PREASY</Link></td>
                    <td className="py-3">Design soign&eacute; (aspect bois), mais trop cher et peu de retours</td>
                    <td className="py-3 text-center font-mono">6,5/10</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3"><Link href="/avis/ikea-solstrale-balcon" className="text-green hover:underline font-semibold">IKEA Solstr&aring;le</Link></td>
                    <td className="py-3">Prometteur &agrave; 449 &euro; (avec EcoFlow), mais pas encore disponible en France</td>
                    <td className="py-3 text-center font-mono">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7 - Pieges */}
          <section id="pieges" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Les pi&egrave;ges &agrave; &eacute;viter avant d&apos;acheter</h2>
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              En analysant les avis n&eacute;gatifs, on retrouve les m&ecirc;mes erreurs. Voici les plus fr&eacute;quentes :
            </p>
            <div className="space-y-3">
              <div className="card border-l-4 border-l-amber">
                <h4 className="font-bold text-sm">&#10007; Surestimer la production d&apos;un balcon nord ou est</h4>
                <p className="text-xs text-charcoal-light mt-1">Un balcon nord produit 40-50 % de moins qu&apos;un balcon sud. Beaucoup de d&eacute;ceptions viennent de l&agrave;. Lire notre <Link href="/blog/panneau-solaire-balcon-nord" className="text-green hover:underline">analyse balcon nord</Link>.</p>
              </div>
              <div className="card border-l-4 border-l-amber">
                <h4 className="font-bold text-sm">&#10007; Ignorer l&apos;ombre sur le balcon</h4>
                <p className="text-xs text-charcoal-light mt-1">Un arbre, un mur, un balcon au-dessus : l&apos;ombre r&eacute;duit drastiquement la production. Voir notre guide <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green hover:underline">panneau solaire et ombre</Link>.</p>
              </div>
              <div className="card border-l-4 border-l-amber">
                <h4 className="font-bold text-sm">&#10007; Acheter un kit Amazon sans marque</h4>
                <p className="text-xs text-charcoal-light mt-1">Pas de garantie, pas de SAV, micro-onduleur non certifi&eacute;. Privil&eacute;giez les marques &eacute;tablies. Voir notre <Link href="/blog/kit-solaire-plug-and-play-arnaque" className="text-green hover:underline">analyse des arnaques</Link>.</p>
              </div>
              <div className="card border-l-4 border-l-amber">
                <h4 className="font-bold text-sm">&#10007; N&eacute;gliger l&apos;autoconsommation</h4>
                <p className="text-xs text-charcoal-light mt-1">Sans adapter ses habitudes, on autoconsomme seulement 30-40 % de sa production. Le reste est inject&eacute; gratuitement. Voir <Link href="/guide/optimiser-autoconsommation-solaire" className="text-green hover:underline">comment optimiser</Link>.</p>
              </div>
            </div>
          </section>

          {/* Section 8 - Verdict */}
          <section id="verdict" className="mb-10">
            <h2 className="text-2xl font-extrabold mb-6">Verdict : quel kit choisir selon les avis ?</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-green">
                    <th className="text-left py-3 font-bold">Profil</th>
                    <th className="text-left py-3 font-bold">Kit recommand&eacute;</th>
                    <th className="text-center py-3 font-bold">Prix</th>
                    <th className="text-center py-3 font-bold">Note avis</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal-light">
                  <tr className="border-b border-border-light bg-green-pale/20">
                    <td className="py-3 font-semibold">Meilleur rapport qualit&eacute;-prix</td>
                    <td className="py-3"><Link href="/avis/beem-on-500w" className="text-green hover:underline font-semibold">Beem On 500 Wc</Link></td>
                    <td className="py-3 text-center font-mono">429 &euro;</td>
                    <td className="py-3 text-center font-mono font-bold text-green">8,5/10</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3 font-semibold">La simplicit&eacute; avant tout</td>
                    <td className="py-3"><Link href="/avis/sunology-play-2" className="text-green hover:underline font-semibold">Sunology PLAY 2</Link></td>
                    <td className="py-3 text-center font-mono">599 &euro;</td>
                    <td className="py-3 text-center font-mono font-bold text-green">8,5/10</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3 font-semibold">Stockage int&eacute;gr&eacute;</td>
                    <td className="py-3"><Link href="/avis/zendure-solarflow" className="text-green hover:underline font-semibold">Zendure SolarFlow</Link></td>
                    <td className="py-3 text-center font-mono">900 &euro;</td>
                    <td className="py-3 text-center font-mono font-bold text-green">8,5/10</td>
                  </tr>
                  <tr className="border-b border-border-light">
                    <td className="py-3 font-semibold">Petit budget</td>
                    <td className="py-3"><Link href="/avis/beem-kit-300w" className="text-green hover:underline font-semibold">Beem Kit 300W</Link></td>
                    <td className="py-3 text-center font-mono">299 &euro;</td>
                    <td className="py-3 text-center font-mono font-bold text-green">7,5/10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/40 border-green/10 text-center py-8 mb-6">
              <p className="text-charcoal-light mb-4">Pas s&ucirc;r de votre choix ? Testez notre calculateur.</p>
              <Link href="/calculateur" className="btn-primary">
                Calculer mes &eacute;conomies &rarr;
              </Link>
            </div>

            <div className="my-6">
              <AffiliateCTA productName="Sunology PLAY 2" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/play2-kit-solaire" label="Voir le Sunology PLAY 2" variant="box" position="article_bottom" price="599 &euro;" />
            </div>
          </section>

          {/* Articles lies */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
            <div className="space-y-3">
              <Link href="/blog/bilan-6-mois-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                <h4 className="font-bold text-sm group-hover:text-green transition-colors">Bilan apr&egrave;s 6 mois avec un kit solaire de balcon</h4>
                <p className="text-xs text-charcoal-light mt-1">Production r&eacute;elle mois par mois, &eacute;conomies, probl&egrave;mes</p>
              </Link>
              <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire 2026 : comparatif complet</h4>
                <p className="text-xs text-charcoal-light mt-1">Tableau d&eacute;taill&eacute; de tous les kits du march&eacute;</p>
              </Link>
              <Link href="/blog/kit-solaire-plug-and-play-arnaque" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire plug-and-play : arnaque ou bon investissement ?</h4>
                <p className="text-xs text-charcoal-light mt-1">Les vrais pi&egrave;ges et les marques fiables</p>
              </Link>
              <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide complet solaire balcon pour d&eacute;butants</h4>
                <p className="text-xs text-charcoal-light mt-1">Tout savoir avant de se lancer</p>
              </Link>
            </div>
          </section>

          <NewsletterBanner />

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="card group" open={i === 0}>
                  <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-stone group-open:rotate-180 transition-transform">{'\u25BC'}</span>
                  </summary>
                  <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-10 pt-8 border-t border-border-light">
            <p className="text-xs text-stone leading-relaxed">
              <strong>Sources :</strong> avis Trustpilot (consult&eacute;s le 18 juin 2026), forums r/france et GPPV (fils 2025-2026), retours Amazon v&eacute;rifi&eacute;s. Tarif EDF : 0,1940 &euro;/kWh. Les liens vers les sites marchands sont des liens affili&eacute;s &mdash; cela ne change pas nos avis. <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
