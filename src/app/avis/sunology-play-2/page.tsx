import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Sunology PLAY 2 avis 2026 : devenu PLAY 500 W, prix et promo',
  description: 'Sunology PLAY 2 avis : il est devenu le PLAY 500 W, même prix (599 €). Promo, ROI 6,5 ans, app STREAM, avis clients négatifs et verdict.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/sunology-play-2',
  },
};

const AFFILIATE_URL = 'https://sunology.eu/products/play-kit-solaire-plug-play';

const faqData = [
  { question: 'Le Sunology PLAY 2 est-il encore vendu ?', answer: 'Plus sur le site de Sunology. Au 12 octobre 2026, la fiche sunology.eu s\'intitule « Sunology PLAY » et ne propose plus qu\'une seule version : la station 500 W recto-verso à 599 €. Les séries PLAY2 450 W et 460 W (et la série PLAY 480 W) n\'y sont plus listées. Des PLAY2 peuvent encore circuler chez des revendeurs ou en occasion : vérifiez la puissance exacte avant d\'acheter.' },
  { question: 'Quelle différence entre le PLAY 2 et le nouveau PLAY ?', answer: 'Le PLAY2 embarquait un panneau bifacial de 450 Wc (puis 460 Wc sur les derniers lots). Le PLAY actuel passe à un panneau back-contact de 500 Wc (jusqu\'à 650 W cumulés recto-verso selon Sunology) et à un micro-onduleur 16 A au lieu de 14 A. Le prix catalogue reste 599 €, donc le prix par watt baisse de 1,33 €/Wc à 1,20 €/Wc et le ROI de 7,1 à 6,5 ans avec notre méthodologie.' },
  { question: 'Y a-t-il une promo sur le Sunology PLAY 2 / PLAY ?', answer: 'Le prix public est de 599 €. Le 12 octobre 2026, la page produit prévoyait un prix de 533 € (-11 %) réservé aux visiteurs arrivant avec un code promotionnel temporaire ; sans code, c\'est 599 €. À 533 €, le ROI passe de 6,5 à 5,8 ans. Les offres changent souvent : consultez notre page codes promo, datée.' },
  { question: 'Le Sunology PLAY est-il rentable ?', answer: 'Oui, dans une situation standard. À 599 € pour 500 Wc, notre méthodologie (Lyon, plein sud, PR 0,85, autoconsommation 85 %, 0,1940 €/kWh) donne 510 kWh/an, soit environ 84 €/an d\'économies. Le retour sur investissement est de 6,5 ans avec une inflation du tarif de 3,3 %/an (7,1 ans sans inflation), et les économies cumulées atteignent 3 190 € sur 25 ans.' },
  { question: 'Que vaut l\'application STREAM de Sunology ?', answer: 'L\'app STREAM est gratuite et affiche la production et les économies en temps réel : le micro-onduleur se connecte directement au Wi-Fi, sans boîtier. Le Pack STREAM (228 €, optionnel) ajoute la mesure de la consommation via le compteur Linky. Côté avis clients, les plaintes récurrentes portent sur des pertes de connexion Wi-Fi et une production qui disparaît de l\'app : prévoyez un bon signal Wi-Fi 2,4 GHz à l\'emplacement du panneau.' },
  { question: 'Quelle différence entre le PLAY et le PLAY MAX ?', answer: 'Le PLAY MAX ajoute une batterie (699 € sur sunology.eu le 12/10/2026, en 460 W). Le PLAY seul ne stocke pas : l\'électricité est consommée en temps réel, le surplus part sur le réseau sans rémunération. Pour un talon de consommation diurne suffisant, le PLAY seul est plus rentable. Les avis négatifs récents visent d\'ailleurs surtout la Master box du PLAY MAX.' },
];

export default function AvisPage() {
  return (
    <>
      <SchemaArticle title="Sunology PLAY 2 avis : devenu PLAY 500 W, prix, promo et verdict" description="Avis sur le Sunology PLAY 2, devenu PLAY 500 Wc en 2026 : ce qui a changé, prix, promo, rentabilité, app STREAM, avis clients." url="https://monbalconsolaire.fr/avis/sunology-play-2" datePublished="2026-03-19" dateModified="2026-10-12" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Sunology PLAY" brand="Sunology" description="Station solaire plug-and-play 500 Wc (panneau back-contact bifacial, micro-onduleur MX500 500 W Wi-Fi), successeur du PLAY 2. Garantie intégrale 25 ans, garantie de puissance panneau 30 ans." price={599} ratingValue={8.5} ratingCount={1} url="https://monbalconsolaire.fr/avis/sunology-play-2" />
      <SchemaBreadcrumb items={[{ label: "Avis", href: "/avis" }, { label: "Sunology PLAY (ex-PLAY 2)" }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: "Avis", href: "/avis" }, { label: "Sunology PLAY (ex-PLAY 2)" }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Sunology PLAY 2 avis&nbsp;: devenu PLAY 500&nbsp;W, prix, promo et verdict (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Vous cherchez le <strong>Sunology PLAY 2</strong>&nbsp;? Il n&apos;est plus vendu sous ce nom&nbsp;: Sunology l&apos;a remplac&eacute; par le <strong>PLAY</strong>, au m&ecirc;me prix (599&nbsp;&euro;) mais avec un panneau back-contact de <strong>500&nbsp;Wc</strong> au lieu de 450&nbsp;Wc. Ce qui a chang&eacute;, ce que &ccedil;a rapporte, l&apos;app STREAM, ce que reprochent les clients, et pourquoi se m&eacute;fier des PLAY2 encore en circulation.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>19 mars 2026 &middot; <strong>Mis &agrave; jour le 12 octobre 2026</strong></span><span>&middot;</span><span>13 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Sunology"
            name="PLAY (successeur du PLAY 2)"
            trackingName="PLAY"
            power="500 Wc"
            price="599 €"
            score="8.5/10"
            tagline="Le kit tout-en-un le plus simple à poser, désormais en 500 Wc au même prix."
            affiliateUrl={AFFILIATE_URL}
            affiliateLabel="Voir le PLAY sur Sunology"
            accentColor="green"
            image="/images/produits/sunology-play-2-1.webp"
            imageAlt="Station solaire Sunology PLAY sur son châssis intégré (photo génération PLAY 2)"
          />
          <p className="text-xs text-stone mt-2 italic">Prix catalogue v&eacute;rifi&eacute; sur sunology.eu le 12/10/2026 (533&nbsp;&euro; avec code promo temporaire) &middot; Peut varier selon les promotions</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation&nbsp;: du PLAY 2 au PLAY 500&nbsp;W</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le PLAY est la station solaire phare de Sunology, marque nantaise fond&eacute;e en 2019&nbsp;: un panneau, un micro-onduleur et un ch&acirc;ssis pr&eacute;-assembl&eacute;s, livr&eacute;s pr&ecirc;ts &agrave; poser et &agrave; brancher sur une prise. Sunology revendique 130&nbsp;000 foyers &eacute;quip&eacute;s toutes gammes confondues et indique assembler la station dans son usine de Rennes.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Pendant deux ans, le mod&egrave;le vendu s&apos;appelait <strong>PLAY2</strong>&nbsp;: panneau bifacial de 450&nbsp;Wc, puis 460&nbsp;Wc sur les derniers lots. La version 500&nbsp;W a &eacute;t&eacute; lanc&eacute;e en pr&eacute;vente jusqu&apos;au 17&nbsp;ao&ucirc;t 2026 &agrave; 539&nbsp;&euro; (888 exemplaires), puis au tarif normal de 599&nbsp;&euro;. Fin septembre, la fiche sunology.eu listait encore les s&eacute;ries successives (PLAY2 450&nbsp;W, PLAY2 460&nbsp;W, PLAY 480&nbsp;W, PLAY 500&nbsp;W).</p>
              <div className="card border-l-4 border-l-green my-6">
                <h3 className="font-bold text-sm mb-1">PLAY 2 ou PLAY&nbsp;: lequel est en vente au 12 octobre 2026&nbsp;?</h3>
                <p className="text-xs text-charcoal-light leading-relaxed">Sur sunology.eu, <strong>uniquement le PLAY 500&nbsp;W</strong> (r&eacute;f&eacute;rence &laquo;&nbsp;1 station PLAY &ndash; 500W Recto / Verso&nbsp;&raquo;, 599&nbsp;&euro;). Le nom &laquo;&nbsp;PLAY 2&nbsp;&raquo; a disparu du site du fabricant&nbsp;: si vous le voyez encore affich&eacute; ailleurs, c&apos;est soit un stock de l&apos;ancienne g&eacute;n&eacute;ration (450 ou 460&nbsp;Wc), soit une fiche non mise &agrave; jour. Ce qui suit vaut pour les deux&nbsp;: m&ecirc;me concept, m&ecirc;me ch&acirc;ssis, m&ecirc;me app.</p>
              </div>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">&Eacute;volution</th><th className="text-center p-3">PLAY2 (450/460&nbsp;W)</th><th className="text-center p-3 bg-green-dark rounded-tr-xl">PLAY (500&nbsp;W)</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Panneau', 'Bifacial biverre 450 puis 460 Wc', 'Back-contact N-type HIBC, biverre bifacial, 500 Wc'],
                      ['Micro-onduleur', 'Tsun TSOL-MX450, entrée 14 A', 'MX500, 500 W AC, entrée 16 A'],
                      ['Dimensions panneau', '≈ 1,76 × 1,13 m', '1,80 × 1,134 m'],
                      ['Statut (12/10/2026)', 'Retiré de sunology.eu', 'Seule version vendue'],
                      ['Prix catalogue', '599 € (au lancement : 699 €)', '599 €'],
                      ['Prix par watt-crête', '1,33 €/Wc (450) · 1,30 €/Wc (460)', '1,20 €/Wc'],
                      ['Production (Lyon, sud)', '459 kWh/an (450 Wc)', '510 kWh/an'],
                      ['ROI (inflation 3,3 %/an)', '7,1 ans (450 Wc)', '6,5 ans'],
                    ].map(([c, o, n], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c}</td>
                        <td className="text-center p-3">{o}</td>
                        <td className="text-center p-3 bg-green-pale/30 font-medium">{n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card border-l-4 border-l-amber my-6">
                <h3 className="font-bold text-sm mb-1">Attention aux PLAY2 encore en circulation</h3>
                <p className="text-xs text-charcoal-light leading-relaxed">Des distributeurs (grandes surfaces de bricolage, jardineries) ont longtemps vendu des PLAY2 &laquo;&nbsp;460W&nbsp;&raquo;, et on en trouve en occasion&nbsp;: c&apos;est l&apos;ancienne g&eacute;n&eacute;ration. Elle reste un bon produit, mais &agrave; prix &eacute;gal vous payez 40 &agrave; 50&nbsp;Wc de moins. <strong>Comparez le prix par watt-cr&ecirc;te</strong>&nbsp;: un PLAY2 460&nbsp;W n&apos;&eacute;gale le PLAY 500&nbsp;W &agrave; 599&nbsp;&euro; qu&apos;en dessous d&apos;environ 550&nbsp;&euro; (et du PLAY &agrave; 533&nbsp;&euro; avec code promo qu&apos;en dessous d&apos;environ 490&nbsp;&euro;).</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '500 Wc', l: 'Puissance' },
                  { v: '599 €', l: 'Prix catalogue' },
                  { v: '1,20 €/Wc', l: 'Prix par watt' },
                  { v: '25 ans', l: 'Garantie intégrale' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique du Sunology PLAY 500&nbsp;W</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {[
                      ['Puissance crête', '500 Wc (STC)'],
                      ['Technologie', 'Back-contact, 108 demi-cellules N-type HIBC, biverre bifacial, aspect « ultra black »'],
                      ['Rendement module', '24,5 % (245 W/m²)'],
                      ['Gain face arrière annoncé', '5 % minimum, jusqu\'à 30 % en pic (selon l\'albédo)'],
                      ['Dimensions panneau', '1 800 × 1 134 × 30 mm'],
                      ['Poids', '24,8 kg (panneau seul) · 30 kg (station complète)'],
                      ['Micro-onduleur', 'MX500 : 500 W AC, entrée 16–60 V / 16 A max, CEC 96,7 %, IP67, Wi-Fi 2,4 GHz'],
                      ['Certifications onduleur', 'VDE 0126, VDE-AR-N 4105, EN 50549'],
                      ['Châssis', 'Aluminium, inclinaison sol 27/35/42°, mur 48/55/63° (kit mural en option)'],
                      ['Connectique', 'Câble secteur 3 m fourni'],
                      ['Garanties', 'Intégrale 25 ans (panneau, micro-onduleur, châssis) · garantie de puissance panneau 30 ans'],
                      ['Prix', '599 € (sunology.eu, 12/10/2026) · 533 € avec code promo temporaire'],
                    ].map(([k, v], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold w-1/3">{k}</td>
                        <td className="p-3 text-charcoal-light">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Source&nbsp;: page caract&eacute;ristiques et fiche technique Sunology PLAY 500&nbsp;W (&eacute;dition ao&ucirc;t 2026), fiche produit sunology.eu (12/10/2026). Le fabricant du micro-onduleur MX500 n&apos;est pas pr&eacute;cis&eacute; par Sunology. La fiche produit actuelle annonce une garantie int&eacute;grale de 25 ans et une garantie de puissance de 30 ans sur le panneau.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: '50 Wc de plus au même prix', d: 'Le passage de 450 à 500 Wc à 599 € fait baisser le prix par watt de 1,33 à 1,20 €/Wc, et le ROI de 7,1 à 6,5 ans avec notre méthodologie. C\'est l\'évolution la plus utile de cette génération.' },
                  { t: 'Installation la plus simple du marché', d: 'Le châssis est pré-assemblé en usine : on déplie, on leste, on branche. Aucun outil, aucune connaissance technique.' },
                  { t: 'Panneau back-contact soigné', d: 'Les contacts sont reportés à l\'arrière des cellules : pas de grille visible en face avant, meilleur rendement surfacique (24,5 %) et, selon Sunology, moins de pertes en ombrage partiel.' },
                  { t: 'Garanties parmi les plus longues', d: 'Garantie intégrale de 25 ans sur le panneau, le micro-onduleur et le châssis, plus 30 ans de garantie de puissance sur le panneau. Rare sur un kit plug-and-play à ce prix.' },
                  { t: 'Suivi Wi-Fi sans boîtier', d: 'Le micro-onduleur communique directement en Wi-Fi avec l\'app STREAM (gratuite) : production instantanée et historique, sans passerelle à acheter.' },
                  { t: 'Documentation accessible', d: 'Notice, fiche technique, certificat du micro-onduleur, certificat CE et tutoriel Enedis sont téléchargeables sur la page produit : utile pour la déclaration CACSI.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm mt-4">
                Pourquoi une garantie de puissance de 30 ans sur un panneau back-contact ? Notre analyse <Link href="/blog/degradation-panneau-solaire-25-ans" className="text-green font-semibold hover:underline">dégradation d&apos;un panneau solaire après 10, 20, 25 ans</Link> détaille les taux réels par technologie de cellule.
              </p>
            </section>

            <AffiliateCTA productName="Sunology PLAY" merchantName="Sunology" affiliateUrl={AFFILIATE_URL} label="Vérifier le prix du PLAY 500 W" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Encombrant et lourd', d: 'Le panneau mesure 1,80 × 1,13 m et la station pèse 30 kg. Sur un petit balcon, ça prend de la place ; pour un garde-corps étroit, préférez un kit en panneaux plus petits.' },
                  { t: 'Toujours plus cher au watt que Beem', d: 'À 1,20 €/Wc, le PLAY reste nettement au-dessus du Beem On 500 Wc (429 €, 0,86 €/Wc). Vous payez la simplicité, le châssis et les garanties longues.' },
                  { t: 'Pas de batterie', d: 'À 599 €, rien n\'est stocké. Si vous consommez surtout le soir, l\'autoconsommation chute et la rentabilité avec.' },
                  { t: 'Gain bifacial à relativiser', d: 'Sunology annonce jusqu\'à 30 % de gain en pic. En moyenne annuelle, sur un sol ou un mur sombre, le gain réel est de quelques pour cent. Nos calculs ne l\'intègrent pas.' },
                  { t: 'Gammes et noms confus', d: 'PLAY2 450, PLAY2 460, PLAY 480, PLAY 500 : quatre séries au même prix se sont succédé en un an. Chez un revendeur ou en occasion, vérifiez la puissance exacte avant de payer.' },
                  { t: 'SAV critiqué', d: 'Malgré une bonne note globale, les avis négatifs récents reprochent surtout des délais de livraison dépassés et un SAV difficile à joindre en cas de panne (voir plus bas).' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunology PLAY" merchantName="Sunology" affiliateUrl={AFFILIATE_URL} label="Voir l'offre actuelle sur Sunology" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Sunology PLAY vs la concurrence</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th><th className="text-center p-3 bg-green-dark">Sunology PLAY 500&nbsp;W &#9733;</th><th className="text-center p-3">Beem On 500 Wc</th><th className="text-center p-3 rounded-tr-xl">Sunethic F500</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Prix', '599 €', '429 €', '690 €'],
                      ['Puissance', '500 Wc', '500 Wc', '500 Wc'],
                      ['Rapport €/Wc', '1,20 €/Wc', '0,86 €/Wc', '1,38 €/Wc'],
                      ['ROI (méthodologie)', '6,5 ans', '4,8 ans', '7,4 ans'],
                      ['Installation', 'Châssis pré-assemblé', '~5 min', '~10 min'],
                      ['App suivi', 'STREAM (Wi-Fi natif)', 'Beem (Beembox)', 'Non précisé'],
                      ['Garantie', '25 ans intégrale + 30 ans puissance', '25 ans', '25 ans'],
                      ['Made in France', 'Assemblé en France', 'Non', 'Oui'],
                      ['Solidité financière', 'Bonne', '⚠️ Proc. sauvegarde', 'Bonne'],
                    ].map(([c, s, b, su], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c}</td>
                        <td className="text-center p-3 bg-green-pale/30 font-medium">{s}</td>
                        <td className="text-center p-3">{b}</td>
                        <td className="text-center p-3">{su}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 mb-3">&#9733; Notre recommandation pour la simplicit&eacute;. &Agrave; puissance &eacute;gale, le Beem On 500 Wc est 170&nbsp;&euro; moins cher, mais Beem Energy est en proc&eacute;dure de sauvegarde depuis novembre 2025 &mdash; SAV maintenu, risque long terme &agrave; peser.</p>
              <Link href="/comparatif/sunology-play2-vs-beem-on-500w" className="text-green font-semibold text-sm hover:underline">&rarr; Le match d&eacute;taill&eacute; PLAY vs Beem On 500 Wc</Link>
              <p className="text-sm text-charcoal-light mt-2">Et si vous h&eacute;sitez entre les deux marques plut&ocirc;t qu&apos;entre deux kits&nbsp;: <Link href="/comparatif/sunology-vs-beem" className="text-green font-semibold hover:underline">Sunology vs Beem, le comparatif des gammes</Link>.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce kit soit fait pour vous&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et votre exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le Sunology PLAY &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; et production</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Calcul standard du site&nbsp;: Lyon, plein sud, productible 1&nbsp;200&nbsp;kWh/kWc, PR 0,85, 85&nbsp;% d&apos;autoconsommation, 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '510 kWh', l: 'Production/an' },
                  { v: '84 €', l: 'Économies/an' },
                  { v: '6,5 ans', l: 'Retour sur invest.' },
                  { v: '3 190 €', l: 'Économies 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/40 rounded-brand-lg">
                    <div className="font-mono font-bold text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">Soit un gain net d&apos;environ 2&nbsp;591&nbsp;&euro; sur 25 ans. Sans inflation du tarif, le ROI serait de 7,1 ans. <strong>Avec le code promo &agrave; 533&nbsp;&euro;</strong>&nbsp;: ROI 5,8 ans (6,3 ans sans inflation). <strong>Pour un PLAY2 450&nbsp;Wc de stock</strong> au m&ecirc;me prix&nbsp;: 459&nbsp;kWh/an, 76&nbsp;&euro;/an, ROI 7,1 ans, 2&nbsp;871&nbsp;&euro; sur 25 ans (PLAY2 460&nbsp;Wc&nbsp;: 469&nbsp;kWh, 77&nbsp;&euro;/an, 7,0 ans).</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Selon le d&eacute;partement (plein sud, productibles PVGIS recal&eacute;s sur notre r&eacute;f&eacute;rence Lyon)&nbsp;: environ 589&nbsp;kWh/an dans les Bouches-du-Rh&ocirc;ne (ROI 5,7 ans), 439&nbsp;kWh/an &agrave; Paris (7,4 ans), 400&nbsp;kWh/an dans le Nord (8,1 ans). En exposition est ou ouest, comptez environ 20&nbsp;% de moins&nbsp;: 408&nbsp;kWh/an &agrave; Lyon, ROI 7,9 ans.</p>
              <h3 className="font-bold text-base mb-3 mt-6">Retours d&apos;utilisateurs (g&eacute;n&eacute;ration PLAY2 450&nbsp;W)</h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-3">Les retours publics portent encore sur le PLAY2 450&nbsp;W. Pour le PLAY 500&nbsp;W, ajoutez environ 11&nbsp;% &agrave; conditions &eacute;gales.</p>
              <div className="space-y-3 my-4">
                {[
                  { loc: 'Marseille, exposition sud', prod: '650+ kWh/an', comment: 'Au-dessus de l\'estimation. 2,8-3,2 kWh/jour en été, ~1 kWh/jour en hiver.' },
                  { loc: 'Lyon, exposition sud-ouest', prod: '~520 kWh/an', comment: 'Proche de l\'estimation Sunology.' },
                  { loc: 'Région parisienne, exposition est', prod: '~450 kWh/an', comment: 'En dessous, mais l\'exposition est n\'est pas idéale.' },
                  { loc: 'Lot-et-Garonne, plein sud', prod: '~580 kWh/an', comment: 'Inclinaison ajustée selon la saison.' },
                ].map((u, i) => (
                  <div key={i} className="card">
                    <div className="flex justify-between items-start gap-4">
                      <div><span className="font-semibold text-sm">{u.loc}</span><p className="text-xs text-charcoal-light mt-1">{u.comment}</p></div>
                      <span className="font-mono font-medium text-green whitespace-nowrap">{u.prod}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Application STREAM&nbsp;: ce qu&apos;elle fait, ce qu&apos;on lui reproche</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le suivi passe par l&apos;app <strong>STREAM</strong> (iOS et Android), gratuite. Le micro-onduleur se connecte au Wi-Fi du logement (configuration initiale en Bluetooth), puis affiche production et &eacute;conomies en temps r&eacute;el. Sunology indique h&eacute;berger les donn&eacute;es en Irlande.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">En option, le <strong>Pack STREAM</strong> (228&nbsp;&euro;&nbsp;: box STREAM Connect + transmetteur STREAM Link) ajoute la mesure de votre consommation en temps r&eacute;el via le compteur Linky. Utile pour savoir quelle part de la production vous consommez vraiment, mais 228&nbsp;&euro; repr&eacute;sentent presque 3 ans d&apos;&eacute;conomies du kit&nbsp;: une{' '}<Link href="/blog/prises-connectees-suivi-solaire" className="text-green font-semibold hover:underline">prise connect&eacute;e</Link> donne une partie de l&apos;information pour bien moins cher.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Les avis n&eacute;gatifs sur l&apos;app tournent autour du Wi-Fi&nbsp;: production qui n&apos;appara&icirc;t plus, &eacute;carts entre deux panneaux voisins que Sunology attribue &agrave; la qualit&eacute; du signal. Avant d&apos;acheter, v&eacute;rifiez que le Wi-Fi 2,4&nbsp;GHz porte jusqu&apos;&agrave; l&apos;emplacement du panneau. Si l&apos;app d&eacute;croche, le panneau continue de produire&nbsp;: seul le suivi est perdu.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Avis clients Sunology&nbsp;: ce qui revient</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Sur Trustpilot, Sunology affiche <strong>4,6/5 sur environ 3&nbsp;500 avis</strong> (relev&eacute; du 12/10/2026) &mdash; une note &eacute;lev&eacute;e, dans la moyenne haute du secteur. Les avis &agrave; 1-2 &eacute;toiles de juin &agrave; octobre 2026 se concentrent sur quelques points&nbsp;:</p>
              <div className="space-y-3 mb-4">
                {[
                  { t: 'SAV difficile à joindre', d: 'Thème le plus fréquent : e-mails sans réponse, créneaux téléphoniques limités, pièces de remplacement attendues plusieurs mois, rendez-vous technicien manqués.' },
                  { t: 'Délais de livraison dépassés', d: 'Plusieurs commandes livrées en 3 semaines au lieu des 10 jours annoncés, ou sans nouvelles d\'expédition pendant plus de 15 jours.' },
                  { t: 'Pannes surtout sur le PLAY MAX', d: 'Les pannes citées visent majoritairement la Master box et la batterie du PLAY MAX (garantie 2 ans sur la Master box selon les clients). Une panne de micro-onduleur sur un PLAY 2 est aussi rapportée.' },
                  { t: 'Suivi dans l\'app', d: 'Production absente de l\'app STREAM ou incohérente, généralement liée au signal Wi-Fi.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">Sunology r&eacute;pond &agrave; la plupart de ces avis, en g&eacute;n&eacute;ral sous quelques jours. Pour le PLAY seul (sans batterie), nous n&apos;avons pas trouv&eacute; de panne r&eacute;currente document&eacute;e&nbsp;; le risque principal est la lenteur du SAV si un composant l&acirc;che. Pour la version avec batterie, lisez notre <Link href="/avis/sunology-play-max" className="text-green font-semibold hover:underline">avis Sunology PLAY MAX</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Balcon de moins de 1,80 m de large ou garde-corps sans sol exploitable',
                  'Consommation concentrée le soir (pas de batterie)',
                  'Exposition nord ou très ombragée',
                  'Copropriété interdisant les installations visibles en façade',
                  'Budget serré : le Beem On 500 Wc offre la même puissance pour 170 € de moins',
                  'Wi-Fi qui ne porte pas jusqu\'au balcon, si le suivi dans l\'app compte pour vous',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le passage &agrave; 500&nbsp;Wc corrige le principal reproche fait au PLAY2&nbsp;: un prix par watt &eacute;lev&eacute;. &Agrave; 599&nbsp;&euro;, le PLAY rapporte environ 84&nbsp;&euro;/an et se rembourse en 6,5 ans (3&nbsp;190&nbsp;&euro; d&apos;&eacute;conomies sur 25 ans), avec l&apos;installation la plus simple et les garanties les plus longues du segment.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Il reste plus cher au watt que le Beem On 500 Wc, encombrant, et sans stockage. Les avis clients pointent aussi un SAV lent quand il faut le solliciter. Si vous tombez sur un PLAY2 450/460&nbsp;W en magasin ou en occasion, ne l&apos;achetez que s&apos;il est nettement moins cher que le PLAY 500&nbsp;W.</p>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">Pour payer moins cher&nbsp;: voir nos <Link href="/codes-promo" className="text-green font-semibold hover:underline">codes promo et parrainage Sunology</Link> (offres v&eacute;rifi&eacute;es et dat&eacute;es).</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale&nbsp;: <span className="text-amber-dark text-xl font-extrabold">8.5/10</span></strong></p>
              <a href={AFFILIATE_URL} target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le PLAY 500&nbsp;W &rarr;</a>
            </section>

            <AffiliateCTA productName="Sunology PLAY" merchantName="Sunology" affiliateUrl={AFFILIATE_URL} label="Voir l'offre actuelle sur Sunology" variant="box" position="footer-box" price="599 €" />

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
                <Link href="/comparatif/sunology-play2-vs-beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology PLAY vs Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">Deux kits de 500 Wc, 170&nbsp;&euro; d&apos;&eacute;cart&nbsp;: lequel choisir</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le meilleur prix par watt du segment</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W&nbsp;: quelle puissance choisir&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Production, ROI et recommandation par profil</p>
                </Link>
                <Link href="/avis/sunology-play-max" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY MAX</h4>
                  <p className="text-xs text-charcoal-light mt-1">La version avec batterie&nbsp;: quand le stockage vaut le surco&ucirc;t</p>
                </Link>
                <Link href="/avis/sunology-go" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology GO</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le petit frère compact du PLAY, 270&nbsp;W &agrave; 349&nbsp;&euro;</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI&nbsp;:</strong> tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;% (95&nbsp;% avec batterie), Performance Ratio 0,85, Lyon plein sud (1&nbsp;200&nbsp;kWh/kWc), 25 ans. Produit analys&eacute; sur fiche technique et retours d&apos;utilisateurs, pas test&eacute; physiquement. <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.</p>
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>Sources&nbsp;:</strong> sunology.eu (fiche produit PLAY et variantes, page caract&eacute;ristiques, fiche technique PLAY 500&nbsp;W &eacute;dition ao&ucirc;t 2026), Selectra (lancement du PLAY 500&nbsp;W, 7 ao&ucirc;t 2026), Domo-blog (prise en main PLAY 2), Trustpilot Sunology (avis 1-2 &eacute;toiles, juin-octobre 2026). Prix et gamme relev&eacute;s sur sunology.eu le 12/10/2026.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence&nbsp;:</strong> cet avis est ind&eacute;pendant. Les liens vers Sunology sont des liens d&apos;affiliation. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
