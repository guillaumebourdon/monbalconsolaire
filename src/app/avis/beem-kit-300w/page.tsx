import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Kit Beem 300W avis 2026 : 199 €, rupture et avis négatifs',
  description: 'Kit Beem 300W : avis 2026 à 199 €, mais en rupture. Avis négatifs Beem Energy (SAV, production), ROI 3,8 ans et alternatives. Verdict honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/beem-kit-300w',
  },
});

const faqData = [
  { question: 'Le kit Beem 300W vaut-il le coup à 199 € ?', answer: 'Sur le papier, oui : à 199 € (prix affiché sur beemenergy.fr le 12 octobre 2026, contre 299 € auparavant), il revient à 0,66 €/Wc, le ratio le plus bas des kits de marque que nous suivons. Avec ~306 kWh/an en région lyonnaise, le retour sur investissement est atteint en 3,8 ans et les économies cumulées sur 25 ans atteignent 1 914 € (+3,3 %/an d\'inflation CRE). Problème : le kit est affiché « Indisponible » sur le site Beem au 12 octobre 2026.' },
  { question: 'Où acheter le kit Beem 300W ?', answer: 'Le canal principal est le site du fabricant (beemenergy.fr, page Beem Kit), qui affiche le modèle 300W à partir de 199 € mais indisponible au 12 octobre 2026, comme toutes les autres configurations (420W, DUO 600 Wc, MAX 900 Wc). Le revendeur Hello Watt le référence à 299 € TTC avec la mention « Victime de son succès ». Nous n\'avons trouvé aucune offre du Beem Kit chez Amazon.fr, Leroy Merlin, Boulanger ou Castorama. Méfiez-vous des annonces d\'occasion sans facture : la garantie est liée à l\'achat.' },
  { question: 'Quels sont les avis négatifs les plus fréquents sur Beem Energy ?', answer: 'Sur Trustpilot (4,3/5, 1 821 avis au 12 octobre 2026), 8 % des avis sont à 1 ou 2 étoiles. Les reproches récurrents en 2026 : SAV difficile à joindre (téléphone, délais de plusieurs semaines), production réelle inférieure aux promesses (un client cite ~180 kWh/an avec un Beem Kit 300W après 3 ans), pannes ou défauts d\'onduleur/Beembox, remboursements lents. Beem ne répond qu\'à environ 12 % des avis négatifs.' },
  { question: 'Beem Energy est-elle en faillite ? Que devient la garantie ?', answer: 'Non, pas à notre connaissance. Le tribunal de commerce de Nantes a placé Beem Energy en procédure de sauvegarde fin novembre 2025, avec un an pour se redresser. Aucune liquidation ni redressement judiciaire n\'a été annoncé au 12 octobre 2026. La procédure de sauvegarde protège l\'entreprise pendant sa restructuration, mais la garantie (25 ans annoncés) n\'a de valeur que si Beem reste en activité : c\'est le principal risque du kit.' },
  { question: 'Quelle différence entre le Beem Kit 300W, le Beem Kit 420W et le Beem On ?', answer: 'Le Beem Kit 300W compte 4 panneaux de 75 Wc (70 × 70 cm, 5,6 kg chacun) pour 199 €. Le Beem Kit 420W reprend le même format avec 4 panneaux de 105 Wc (80,5 × 80,5 cm, 6,5 kg) pour 359 €. Le Beem On 500 Wc est un panneau unique bifacial à 429 €, avec des expéditions annoncées à partir de décembre 2026. Le Kit est plus souple pour les espaces étroits, le Beem On plus rapide à poser.' },
  { question: 'Le Beem Kit 300W suffit-il pour alimenter un appartement ?', answer: 'Non. 300 W couvrent environ le talon de consommation : frigo, box internet et appareils en veille. En région lyonnaise, ~306 kWh/an représentent environ 6 % d\'une consommation de 5 000 kWh/an. Pour aller plus loin, il faut passer à un kit de 450-500 W ou combiner plusieurs Beem Kit (dans la limite des recommandations de l\'ADEME par circuit).' },
  { question: 'Le Beem Kit 300W est-il compatible avec une batterie ?', answer: 'Oui, Beem indique que les Beem Kit peuvent être associés à sa Beem Battery, vendue séparément. Sur un kit de 300 W, une batterie rallonge fortement le retour sur investissement : le surplus à stocker est faible, la plupart de la production étant consommée en direct par le talon.' },
  { question: 'Les 4 panneaux du Beem Kit sont-ils difficiles à installer ?', answer: 'L\'installation prend environ 45 minutes à 1 heure (Beem annonce « moins d\'une heure »), contre quelques minutes pour les kits mono-panneau. Chaque panneau se fixe individuellement, au mur ou au sol. Ce n\'est pas compliqué, mais un client signale sur Trustpilot une erreur dans le manuel de montage : lisez le guide jusqu\'au bout avant de percer.' },
];

export default function BeemKit300WAvisPage() {
  return (
    <>
      <SchemaArticle title="Kit Beem 300W avis 2026 : prix, disponibilité et avis négatifs" description="Avis complet sur le Beem Kit 300W à 199 € : specs, ROI, disponibilité, avis négatifs Beem Energy et alternatives." url="https://monbalconsolaire.fr/avis/beem-kit-300w" datePublished="2026-04-01" dateModified="2026-10-12" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Beem Kit 300W" brand="Beem Energy" description="Kit solaire plug-and-play modulaire de 4 panneaux de 75 Wc, conçu et assemblé à Nantes." price={199} ratingValue={7.5} ratingCount={1} availability="OutOfStock" url="https://monbalconsolaire.fr/avis/beem-kit-300w" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem Kit 300W' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem Kit 300W' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Kit Beem 300W avis 2026 : le panneau solaire &agrave; 199&nbsp;&euro; vaut-il le coup&nbsp;?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le prix du Beem Kit 300W est pass&eacute; de 299&nbsp;&euro; &agrave; 199&nbsp;&euro;, ce qui en fait le kit de marque le moins cher au watt. Mais il est actuellement indisponible, et les avis n&eacute;gatifs sur Beem Energy (SAV, production) se multiplient. Specs, rentabilit&eacute;, points faibles signal&eacute;s par les clients et alternatives.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>1er avril 2026 &middot; Mis &agrave; jour le 12 octobre 2026</span><span>&middot;</span><span>11 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Beem Energy"
            name="Kit 300W"
            power="300 Wc"
            price="199 €"
            score="7.5/10"
            tagline="Le kit de marque le moins cher au watt, si vous arrivez à le trouver en stock."
            affiliateUrl="https://beemenergy.fr/products/kit-beem"
            affiliateLabel="Vérifier la disponibilité chez Beem"
            accentColor="amber"
            image="/images/produits/beem-kit-300-1.webp"
            imageAlt="Kit Beem 300W - 4 panneaux solaires modulaires de 75 Wc"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 12/10/2026 sur beemenergy.fr (199&nbsp;&euro;, auparavant 299&nbsp;&euro;) &middot; Kit affich&eacute; &laquo;&nbsp;Indisponible&nbsp;&raquo; &agrave; cette date</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi le Beem Kit 300W nous int&eacute;resse</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">&Agrave; <span className="data-highlight">199 &euro;</span>, le Beem Kit 300W est le kit solaire de marque le moins cher du march&eacute; fran&ccedil;ais. Son ratio de <span className="data-highlight">0,66 &euro;/Wc</span> bat d&eacute;sormais le Beem On 500 Wc (0,86 &euro;/Wc), et m&ecirc;me la plupart des kits g&eacute;n&eacute;riques vendus sur Amazon, qui n&apos;ont ni garantie longue ni interlocuteur en France.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le concept est diff&eacute;rent des mono-panneaux comme le <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY2</Link> ou le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> : ici, vous avez 4 petits panneaux monocristallins de 75 Wc chacun, reli&eacute;s entre eux. Cette modularit&eacute; est &agrave; la fois le principal atout et la principale limite du kit.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '300 Wc', l: 'Puissance' },
                  { v: '199 €', l: 'Prix (12/10/2026)' },
                  { v: '0,66 €/Wc', l: 'Prix au watt' },
                  { v: '4 panneaux', l: 'Modulaire' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Prix, disponibilit&eacute; et o&ugrave; acheter le kit Beem 300W (octobre 2026)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Au 12 octobre 2026, la page Beem Kit de <strong>beemenergy.fr</strong> affiche le mod&egrave;le 300W &laquo;&nbsp;&agrave; partir de 199&nbsp;&euro;&nbsp;&raquo;, mais <strong>toutes les configurations sont indisponibles</strong> : 300W, 420W, DUO et MAX. Aucune date de r&eacute;assort n&apos;est indiqu&eacute;e. Les prix affich&eacute;s par Beem :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Configuration</th><th className="text-center p-3">Prix</th><th className="text-center p-3">&euro;/Wc</th><th className="text-center p-3">ROI (Lyon)</th><th className="text-center p-3 rounded-tr-xl">Stock</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Beem Kit SOLO 300 Wc', '199 €', '0,66 €', '3,8 ans', 'Indisponible'],
                      ['Beem Kit SOLO 420 Wc', '359 € (au lieu de 599 €)', '0,85 €', '4,8 ans', 'Indisponible'],
                      ['Beem Kit DUO 600 Wc (2 × 300)', '398 € (au lieu de 449 €)', '0,66 €', '3,8 ans', 'Indisponible'],
                      ['Beem Kit MAX 900 Wc (3 × 300)', '597 € (au lieu de 649 €)', '0,66 €', '3,8 ans', 'Indisponible'],
                    ].map(([c, p, w, roi, s], i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3">{c}</td>
                        <td className="text-center p-3 font-mono text-sm">{p}</td>
                        <td className="text-center p-3 font-mono text-sm">{w}</td>
                        <td className="text-center p-3 font-mono text-sm">{roi}</td>
                        <td className="text-center p-3 text-amber-dark">{s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>Chez les revendeurs :</strong> Hello Watt r&eacute;f&eacute;rence le Beem Kit 300W (version florale, fixation murale) &agrave; 299&nbsp;&euro; TTC, avec la mention &laquo;&nbsp;Victime de son succ&egrave;s&nbsp;&raquo;, donc indisponible lui aussi, et plus cher que chez Beem. Nous n&apos;avons trouv&eacute; <strong>aucune offre du Beem Kit sur Amazon.fr, chez Leroy Merlin, Boulanger ou Castorama</strong>. Brico.be le r&eacute;f&eacute;rence en Belgique.</p>
              <p className="text-charcoal-light leading-relaxed">En clair : le prix de 199&nbsp;&euro; est attractif, mais vous ne pouvez pas l&apos;acheter aujourd&apos;hui. Si vous voulez un petit kit tout de suite, regardez notre <Link href="/comparatif/kit-solaire-petit-budget" className="text-green hover:underline">comparatif des kits solaires petit budget</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique du Beem Kit 300W</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <tbody>
                    {[
                      ['Puissance crête', '300 Wc (4 × 75 Wc)'],
                      ['Cellules', 'Monocristallin PERC, verre trempé, cadre aluminium'],
                      ['Dimensions par panneau', '700 × 700 × 25 mm'],
                      ['Poids par panneau', '5,6 kg (22,4 kg au total)'],
                      ['Tension circuit ouvert', '10,5 V DC'],
                      ['Fixation', 'Au mur (façade, palissade) ou au sol'],
                      ['Garantie de performance', '80 % de la puissance nominale après 23 ans (fiche Beem)'],
                      ['Garantie commerciale annoncée', '25 ans'],
                      ['Normes', 'Marquage CE, EN 61215 et EN 61730'],
                      ['Suivi', 'Application Beem (production en temps réel)'],
                      ['Fabrication', 'Conçu et assemblé à Nantes'],
                      ['Prix', '199 € (beemenergy.fr, 12/10/2026)'],
                    ].map(([k, v], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold w-1/3">{k}</td>
                        <td className="p-3">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Source : fiche produit beemenergy.fr, relev&eacute;e le 12 octobre 2026. Rendement des panneaux et du micro-onduleur non communiqu&eacute;s par Beem sur la page produit.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Le prix au watt le plus bas', d: 'À 199 € et 0,66 €/Wc, c\'est le kit de marque le moins cher que nous suivons. Le ROI est atteint en 3,8 ans en région lyonnaise, le plus rapide de notre sélection, devant le Beem On 500 Wc (4,8 ans).' },
                  { t: 'La modularité', d: 'Les 4 panneaux de 70 × 70 cm se placent indépendamment : contre un mur, sur un garde-corps, dans un angle de balcon. Idéal pour les espaces atypiques où un grand panneau unique ne passerait pas.' },
                  { t: 'Le risque financier minimal', d: 'À 199 €, c\'est un investissement faible pour tester l\'autoconsommation. Le kit reste compatible avec un Beem On ou un second Beem Kit si vous voulez augmenter la puissance plus tard.' },
                  { t: 'Une marque française identifiable', d: 'Beem Energy est basée à Nantes et conçoit et assemble ses kits en France. Vous avez un interlocuteur et une garantie écrite, ce qui n\'est pas le cas des kits sans marque d\'Amazon. Le SAV, en revanche, est critiqué (voir plus bas).' },
                  { t: 'L\'application Beem', d: 'Le suivi de production en temps réel, l\'historique et les économies estimées sont bien conçus. C\'est d\'ailleurs l\'un des rares points salués même dans les avis clients négatifs.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem Kit 300W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-beem" label="Vérifier le stock chez Beem" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Indisponible au moment de notre mise à jour', d: 'Au 12 octobre 2026, toutes les configurations Beem Kit sont affichées « Indisponible » sur beemenergy.fr, sans date de réassort. Le meilleur prix du marché ne sert à rien si le kit ne peut pas être commandé.' },
                  { t: 'Puissance limitée à 300 W', d: 'C\'est suffisant pour le talon de consommation (frigo + box + veilles) mais pas plus. Un Beem On 500 Wc ou un Sunology PLAY2 produit 67 % de plus.' },
                  { t: 'Installation plus longue (~1 h)', d: 'Là où un mono-panneau se pose en quelques minutes, le Beem Kit demande 45 min à 1 h : 4 panneaux à positionner, fixer et câbler entre eux. Pas compliqué, mais plus long.' },
                  { t: 'Esthétique et rendement plus basiques', d: '4 petits panneaux posés côte à côte, c\'est moins net qu\'un grand panneau unique, ce qui peut gêner en copropriété. Pas de gain bifacial, et une garantie de performance à 80 % après 23 ans, contre 25 ans sur le modèle 420W.' },
                  { t: 'SAV Beem Energy critiqué et entreprise en sauvegarde', d: 'Beem Energy est en procédure de sauvegarde depuis fin novembre 2025 (tribunal de commerce de Nantes, un an pour se redresser). Aucune liquidation ni redressement judiciaire annoncé au 12 octobre 2026. Mais les avis clients de 2026 pointent un SAV difficile à joindre, et la garantie 25 ans ne vaut que si l\'entreprise est toujours là pour l\'honorer.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Avis n&eacute;gatifs sur Beem Energy : ce que signalent les clients</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Nous n&apos;avons pas le kit en main : cette synth&egrave;se s&apos;appuie sur les avis publics. Sur <strong>Trustpilot</strong>, Beem affiche <span className="data-highlight">4,3/5</span> pour <span className="data-highlight">1 821 avis</span> (relev&eacute; du 12 octobre 2026) : 79&nbsp;% de 5 &eacute;toiles, mais <strong>8&nbsp;% d&apos;avis &agrave; 1 ou 2 &eacute;toiles</strong>, et Beem ne r&eacute;pond qu&apos;&agrave; environ 12&nbsp;% des avis n&eacute;gatifs. Les reproches qui reviennent le plus en 2026 :</p>
              <div className="space-y-3">
                {[
                  { t: '1. Un SAV difficile à joindre', d: 'C\'est le grief n°1 : téléphone injoignable, réponses qui tardent plusieurs semaines, interventions attendues pendant des mois. Plusieurs avis de juillet à septembre 2026 vont dans ce sens. C\'est cohérent avec une entreprise en restructuration.' },
                  { t: '2. Une production inférieure aux promesses', d: 'Un client indique ~180 kWh/an après 3 ans avec un Beem Kit 300W, contre ~306 kWh/an dans notre estimation lyonnaise. Avec 180 kWh/an, le ROI passerait de 3,8 à 6,2 ans à 199 € (calcul pricing.ts). Ombrage, orientation et inclinaison expliquent souvent l\'écart, mais le simulateur de Beem (5 % d\'inflation/an, 0,20 €/kWh) est plus optimiste que nos hypothèses.' },
                  { t: '3. Pannes d\'onduleur, coupures et bugs d\'application', d: 'Des clients signalent un onduleur en défaut avec un diagnostic à distance qui demande un multimètre, des installations qui disparaissent de l\'application, des mises à jour qui bloquent le système pendant des semaines.' },
                  { t: '4. Remboursements et retours lents', d: 'Remboursements en attente, retour refusé après le délai de 15 jours, colis endommagé sans suivi : ces avis concernent surtout les commandes plus grosses (Beem On, batteries), mais la logique de SAV est la même.' },
                  { t: '5. Notice et conseil commercial', d: 'Un client signale une erreur dans le manuel de montage, un autre un conseil commercial inadapté à sa consommation. Lisez la documentation technique avant de commander et vérifiez la compatibilité de votre support (un client Beem On n\'avait pas été prévenu que son toit en tuiles ne convenait pas).' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4"><strong>Notre lecture :</strong> la majorit&eacute; des clients reste satisfaite, et les avis n&eacute;gatifs concernent toute la gamme Beem, pas seulement le Kit 300W. Mais un SAV qui se d&eacute;grade pendant une proc&eacute;dure de sauvegarde, c&apos;est un signal &agrave; prendre au s&eacute;rieux sur un produit vendu avec une garantie de 25 ans. Si votre production vous semble trop faible, commencez par notre guide <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green hover:underline">panneau solaire qui produit moins que pr&eacute;vu</Link>. Pour comparer les deux marques fran&ccedil;aises, voir <Link href="/comparatif/sunology-vs-beem" className="text-green hover:underline">Sunology vs Beem</Link>.</p>
            </section>

            <AffiliateCTA productName="Beem Kit 300W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-beem" label="Voir la fiche officielle Beem Kit" variant="secondary" position="after-cons" />

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce kit soit fait pour vous&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et votre exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec un kit 300W &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous devez acheter maintenant : le kit est en rupture au 12 octobre 2026',
                  'Vous cherchez une production importante (préférez 450-500 Wc)',
                  'Votre balcon est assez grand pour un panneau unique, plus rapide à poser',
                  'Vous comptez beaucoup sur le SAV : les avis 2026 sur Beem Energy sont mitigés',
                  'Vous voulez du stockage : la Beem Battery est vendue à part et rallonge fortement le ROI d\'un kit de 300 W',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production estim&eacute;e et rentabilit&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec 300 Wc, un Performance Ratio de 0,85 et le prix de 199&nbsp;&euro;, voici nos estimations par r&eacute;gion :</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '306 kWh', l: 'Production/an (Lyon)' },
                  { v: '50 €', l: 'Économies an 1' },
                  { v: '3,8 ans', l: 'Retour sur investissement' },
                  { v: '1 914 €', l: 'Économies sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/40 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-amber text-white">
                    <th className="text-left p-3 rounded-tl-xl">R&eacute;gion</th><th className="text-center p-3">Production/an</th><th className="text-center p-3">&Eacute;conomies/an</th><th className="text-center p-3 rounded-tr-xl">ROI</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Marseille / PACA', '383 kWh', '63 €', '3,0 ans'],
                      ['Lyon / Rhône-Alpes', '306 kWh', '50 €', '3,8 ans'],
                      ['Nantes / Ouest', '306 kWh', '50 €', '3,8 ans'],
                      ['Paris / Île-de-France', '281 kWh', '46 €', '4,1 ans'],
                      ['Lille / Nord', '255 kWh', '42 €', '4,5 ans'],
                    ].map(([r, p, e, roi], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{r}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{p}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{e}</td>
                        <td className="text-center p-3 font-mono text-sm">{roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">ROI calcul&eacute; pour un prix de 199&nbsp;&euro;, tarif 0,1940 &euro;/kWh, inflation 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;%, Performance Ratio 0,85, exposition sud. Productible PVGIS arrondi : Marseille 1 500, Lyon et Nantes 1 200, Paris 1 100, Lille 1 000 kWh/kWc. Au prix revendeur de 299&nbsp;&euro;, le ROI lyonnais passe &agrave; 5,5 ans.</p>
              <p className="text-xs text-stone mt-1">Sur 25 ans (Lyon) : <strong>1 914 &euro;</strong> d&apos;&eacute;conomies cumul&eacute;es (+3,3&nbsp;%/an d&apos;inflation). Le simulateur Beem affiche des chiffres plus &eacute;lev&eacute;s car il retient 5&nbsp;% d&apos;inflation annuelle.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Beem Kit 300W vs la concurrence</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th><th className="text-center p-3 bg-green-dark">Beem Kit 300W</th><th className="text-center p-3">Beem On 500 Wc</th><th className="text-center p-3 rounded-tr-xl">Sunology PLAY</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Prix', '199 €', '429 €', '599 €'],
                      ['Puissance', '300 Wc', '500 Wc', '500 Wc'],
                      ['€/Wc', '0,66 €', '0,86 €', '1,20 €'],
                      ['Format', '4 panneaux', '1 panneau', '1 panneau'],
                      ['Installation', '~1 heure', '5 minutes', '1 minute'],
                      ['Bifacial', 'Non', 'Oui', 'Oui'],
                      ['ROI (Lyon)', '3,8 ans', '4,8 ans', '6,5 ans'],
                      ['Disponibilité (12/10)', 'Indisponible', 'Expéditions à partir de décembre 2026', 'Non vérifiée'],
                      ['Garantie annoncée', '25 ans', '25 ans', '25 ans'],
                    ].map(([c, bk, bo, sp], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c}</td>
                        <td className="text-center p-3 bg-green-pale/30 font-semibold">{bk}</td>
                        <td className="text-center p-3">{bo}</td>
                        <td className="text-center p-3">{sp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">Pour une comparaison d&eacute;taill&eacute;e de tous les kits : <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">voir notre comparatif complet &rarr;</Link></p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui est le Beem Kit 300W&nbsp;?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2">Id&eacute;al pour :</h4>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>&rarr; Tester le solaire &agrave; moindre co&ucirc;t (199&nbsp;&euro;)</li>
                    <li>&rarr; Les petits balcons et espaces atypiques</li>
                    <li>&rarr; Les <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline">locataires</Link> qui veulent limiter le risque</li>
                    <li>&rarr; Ceux qui veulent le ROI le plus court avec un budget minimal</li>
                  </ul>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">Pas id&eacute;al pour :</h4>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>&rarr; Maximiser la production (pr&eacute;f&eacute;rez 450 W et plus)</li>
                    <li>&rarr; L&apos;esth&eacute;tique (4 panneaux s&eacute;par&eacute;s)</li>
                    <li>&rarr; Les press&eacute;s (installation d&apos;1 h, et rupture de stock)</li>
                    <li>&rarr; Ceux qui veulent un SAV irr&eacute;prochable</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">&Agrave; 199&nbsp;&euro;, le Beem Kit 300W devient le kit de marque le plus rentable de notre s&eacute;lection : 0,66&nbsp;&euro;/Wc et un retour sur investissement de 3,8 ans en r&eacute;gion lyonnaise. Pour d&eacute;couvrir l&apos;autoconsommation sans gros budget, le produit reste pertinent.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Trois r&eacute;serves p&egrave;sent pourtant plus lourd qu&apos;au printemps : le kit est <strong>indisponible</strong> au 12 octobre 2026, Beem Energy est en <strong>proc&eacute;dure de sauvegarde</strong> jusqu&apos;&agrave; fin 2026 environ, et les <strong>avis clients n&eacute;gatifs</strong> sur le SAV se multiplient. Si vous pouvez attendre et acceptez ce risque, guettez le r&eacute;assort. Sinon, le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (429&nbsp;&euro;, m&ecirc;me marque, donc m&ecirc;me risque) ou le <Link href="/avis/sunology-go" className="text-green hover:underline">Sunology GO</Link> (349&nbsp;&euro;, 270 W) sont les alternatives les plus proches.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">7.5/10</span></strong> &mdash; Le meilleur rapport prix/puissance pour d&eacute;buter, plomb&eacute; par la disponibilit&eacute; et les incertitudes sur Beem Energy.</p>
              <a href="https://beemenergy.fr/products/kit-beem" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">V&eacute;rifier la disponibilit&eacute; du Beem Kit 300W &rarr;</a>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Combien pouvez-vous &eacute;conomiser avec un kit de 300 W&nbsp;?</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <AffiliateCTA productName="Beem Kit 300W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-beem" label="Vérifier la disponibilité sur Beem" variant="box" position="footer-box" price="199 €" />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/comparatif/sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les deux marques fran&ccedil;aises compar&eacute;es : gamme, prix, garantie, solidit&eacute;</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le panneau unique de Beem &agrave; 429&nbsp;&euro;, exp&eacute;ditions &agrave; partir de d&eacute;cembre 2026</p>
                </Link>
                <Link href="/comparatif/kit-solaire-petit-budget" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits solaires petit budget</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les meilleurs choix sous 400&nbsp;&euro;</p>
                </Link>
                <Link href="/avis/sunology-go" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology GO</h4>
                  <p className="text-xs text-charcoal-light mt-1">349&nbsp;&euro;, 270 W : l&apos;alternative compacte chez Sunology</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W</h4>
                  <p className="text-xs text-charcoal-light mt-1">Quelle puissance choisir pour votre balcon</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie :</strong> produit analys&eacute; (pas test&eacute; physiquement) &agrave; partir de la fiche technique Beem, des prix relev&eacute;s le 12 octobre 2026 et des avis clients publics (Trustpilot). Production et ROI calcul&eacute;s avec notre m&eacute;thode standard (0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an, autoconsommation 85&nbsp;%, PR 0,85, 25 ans).</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis ind&eacute;pendant. Certains liens marchands peuvent &ecirc;tre affili&eacute;s, sans incidence sur notre note. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
