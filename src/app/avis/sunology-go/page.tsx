import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Sunology GO avis 2026 : 349 €, 270 W, notre analyse',
  description: 'Sunology GO (349 €, 270 W) : kit compact pour balcon, au sol ou sur garde-corps sans percer. Fiche technique, ROI et comparatif PLAY/Beem.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/sunology-go',
  },
};

const AFFILIATE_URL = 'https://sunology.eu/products/kit-solaire-1-station-go-balcon-garde-corps';

const faqData = [
  {
    question: 'Le Sunology GO est-il rentable ?',
    answer: 'Oui, mais modestement. Avec notre méthodologie (Lyon, plein sud, PR 0,85, autoconsommation 85 %, 0,1940 €/kWh), le GO produit environ 275 kWh/an pour environ 45 €/an d\'économies. Le retour sur investissement est de 7 ans avec l\'inflation tarifaire de 3,3 %/an (CRE), soit 7,7 ans sans inflation. Sur 25 ans, les économies cumulées atteignent 1 720 €. C\'est plus long que le Sunology PLAY (6,5 ans) et le Beem Kit 300W (5,5 ans), car le GO coûte plus cher au watt-crête.',
  },
  {
    question: 'Quelle différence entre le Sunology GO et le Sunology CITY (arrêté) ?',
    answer: 'Le CITY (400 W, 549 €) était conçu exclusivement pour le garde-corps et n\'est plus commercialisé par Sunology depuis 2026. Le GO (270 W, 349 €) le remplace sur ce segment mais avec une puissance plus faible et un prix nettement inférieur. Contrairement au CITY, le GO se pose aussi bien au sol (avec ballasts) que sur un garde-corps, ce qui en fait un kit plus polyvalent, pas un simple remplaçant à l\'identique.',
  },
  {
    question: 'Le GO peut-il se fixer sur un garde-corps sans percer ?',
    answer: 'Oui. Sunology annonce un système de fixation sans perçage, avec un cadre de 30 mm d\'épaisseur, compatible avec les balustrades et rambardes standards. La notice utilisateur mentionne un diamètre de fixation maximal de 60 mm pour la pose sur balcon. Les balcons pleins (muret béton ou paroi vitrée sans rambarde saillante) ne sont pas compatibles : il faut alors la version posée au sol.',
  },
  {
    question: 'Faut-il une autorisation pour installer le GO ?',
    answer: 'Aucun permis n\'est nécessaire : il n\'existe pas de limite légale de puissance en France pour ce type d\'installation plug-and-play. En copropriété, l\'accord du syndic peut être demandé si le panneau est visible depuis l\'extérieur (impact esthétique sur la façade) : mieux vaut vérifier le règlement avant d\'installer. Le Consuel n\'est pas requis car le kit est pré-assemblé et testé en usine, mais une convention d\'autoconsommation sans injection (CACSI) auprès d\'Enedis reste obligatoire, gratuite et réalisable en ligne.',
  },
  {
    question: 'Peut-on ajouter une batterie au GO ?',
    answer: 'Pas nativement. Comme c\'était le cas pour le CITY, le GO ne propose pas de stockage intégré : si vous voulez stocker le surplus pour le consommer le soir, il faut investir séparément dans une batterie Sunology VAULT. Pour un stockage pensé dès le départ, le PLAY MAX (kit + VAULT 700 Wh) est un choix plus cohérent.',
  },
  {
    question: 'Combien de temps pour installer le GO ?',
    answer: 'Sunology annonce environ 16 minutes pour le montage complet. Le kit se branche sur une prise 230 V/16 A standard reliée à la terre ; pour le suivi via l\'application, la station doit rester à moins de 20 m de la box internet (Wi-Fi).',
  },
];

const points_forts = [
  {
    titre: 'Le kit le plus compact du catalogue Sunology',
    detail: '1,26 m² et 15,4 kg seulement (panneau + micro-onduleur), contre 1,80 × 1,13 m et 30 kg pour le PLAY. Idéal quand chaque centimètre de balcon compte.',
  },
  {
    titre: 'Deux configurations de pose',
    detail: 'Au sol avec ballasts, ou sur garde-corps sans perçage (cadre 30 mm, fixation jusqu\'à 60 mm de diamètre). Le GO s\'adapte à des balcons où ni un kit au sol ni un kit garde-corps dédié ne passaient.',
  },
  {
    titre: 'Cellules N-type TOPCon',
    detail: 'Technologie plus récente que le PERC classique, avec un meilleur rendement par forte température — un vrai plus en plein été sur un balcon exposé sud.',
  },
  {
    titre: 'Pas de Consuel, juste une déclaration CACSI',
    detail: 'Comme tous les kits plug-and-play Sunology, le GO est pré-assemblé et testé en usine : aucun contrôle Consuel. Seule la convention d\'autoconsommation sans injection (CACSI) auprès d\'Enedis reste obligatoire, gratuite et en ligne.',
  },
  {
    titre: 'Garantie 25 ans et SAV français',
    detail: 'Alignée sur le reste de la gamme Sunology (Lille). Garantie panneau 25 ans, délai de réponse SAV annoncé de 24-48h.',
  },
  {
    titre: 'Comble le vide laissé par le CITY',
    detail: 'Depuis le retrait du CITY du catalogue, Sunology n\'avait plus d\'offre pensée pour les très petits balcons. Le GO reprend ce rôle, à un prix d\'entrée plus accessible.',
  },
];

const points_faibles = [
  {
    titre: 'Prix au watt-crête élevé',
    detail: 'À 1,29 €/Wc, le GO coûte plus cher au watt que le PLAY (1,20 €/Wc) et nettement plus que le Beem Kit 300W (1,00 €/Wc). Vous payez la compacité et la polyvalence de pose.',
  },
  {
    titre: 'Puissance modeste',
    detail: '270 W, c\'est 46 % de moins que le PLAY (500 W). Cela couvre un talon de consommation limité (frigo, box, veilles) mais ne remplacera pas un kit plus puissant si vous avez la place au sol.',
  },
  {
    titre: 'Pas de batterie compatible nativement',
    detail: 'Comme le CITY avant lui, le GO ne stocke rien par défaut. Il faut une VAULT séparée pour consommer le surplus en soirée, ce qui alourdit vite la facture totale.',
  },
  {
    titre: 'Production réduite en garde-corps',
    detail: 'En position verticale sur rambarde, la perte de captation solaire est de l\'ordre de 15-20 % par rapport à une pose inclinée au sol — le même compromis déjà observé sur le CITY.',
  },
  {
    titre: 'Un seul panneau par kit',
    detail: 'Pour monter en puissance, il faut ajouter des kits ou extensions GO, chacun avec son propre micro-onduleur — moins pratique qu\'un système centralisé type PLAY.',
  },
];

const cas_acheter = [
  {
    profil: 'Votre balcon est trop petit pour un kit posé au sol',
    explication: 'Avec 1,26 m² d\'emprise, le GO se glisse où un PLAY (1,80 × 1,13 m) ne rentre pas, que ce soit au sol ou sur le garde-corps.',
  },
  {
    profil: 'Vous hésitez entre pose au sol et pose garde-corps',
    explication: 'Le GO est l\'un des rares kits Sunology compatible avec les deux configurations. Vous pouvez changer d\'avis après un déménagement sans changer de matériel.',
  },
  {
    profil: 'Vous êtes locataire et voulez une installation réversible',
    explication: 'Sans perçage sur garde-corps, le GO se démonte rapidement en cas de déménagement, sans trace sur le bâti.',
  },
];

const cas_pas_acheter = [
  {
    profil: 'Vous avez la place pour un kit posé au sol classique',
    explication: 'Le Sunology PLAY (500 W, 599 €) produit davantage pour un ROI plus court (6,5 ans vs 7 ans) grâce à son inclinaison optimale.',
  },
  {
    profil: 'Votre budget est serré',
    explication: 'Le Beem Kit 300W (299 €, 300 W) coûte moins cher à l\'achat, produit plus (300 W vs 270 W) et affiche un meilleur ROI (5,5 ans).',
  },
  {
    profil: 'Vous voulez du stockage dès le départ',
    explication: 'Le PLAY MAX (kit + VAULT 700 Wh intégrée) est pensé pour ça. Ajouter une VAULT séparée au GO coûte plus cher qu\'un PLAY MAX tout-en-un.',
  },
];

export default function SunologyGoPage() {
  return (
    <>
      <SchemaArticle
        title="Sunology GO avis : le kit compact à 349 €, au sol ou sur garde-corps"
        description="Avis complet sur le Sunology GO en 2026 : fiche technique, rentabilité, comparatif avec le PLAY et le Beem Kit 300W."
        url="https://monbalconsolaire.fr/avis/sunology-go"
        datePublished="2026-10-09"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct
        name="Sunology GO"
        brand="Sunology"
        description="Kit solaire plug-and-play 270 Wc, compatible pose au sol ou garde-corps sans perçage, cellules N-type TOPCon, micro-onduleur 300 W."
        price={349}
        ratingValue={7}
        ratingCount={1}
        url="https://monbalconsolaire.fr/avis/sunology-go"
      />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology GO' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology GO' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Sunology GO avis : le kit compact à 349 &euro;, au sol ou sur garde-corps (2026)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le GO est le kit le plus petit et le moins cher du catalogue Sunology&nbsp;: 270&nbsp;W, 349&nbsp;&euro;, et surtout une pose possible au sol <strong>ou</strong> sur un garde-corps, sans perçage. Fiche technique, rentabilit&eacute; r&eacute;elle et comparatif avec le PLAY et le Beem Kit 300W.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>9 octobre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <ProductHero
            brand="Sunology"
            name="GO"
            power="270 Wc"
            price="349 €"
            score="7/10"
            tagline="Le kit le plus compact de Sunology, au sol ou sur garde-corps, sans perçage."
            affiliateUrl={AFFILIATE_URL}
            affiliateLabel="Voir le Sunology GO sur sunology.eu"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix constat&eacute; sur sunology.eu et chez le revendeur Hellowatt le 09/10/2026 &middot; Peut varier selon les promotions</p>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le Sunology GO (349 &euro;, 270 W) est le kit le plus accessible et le plus compact de la gamme Sunology. Il comble le vide laiss&eacute; par le <Link href="/avis/sunology-city" className="text-green hover:underline font-semibold">CITY</Link> (d&eacute;sormais arr&ecirc;t&eacute;) en offrant une pose au sol <strong>ou</strong> sur garde-corps, pour un prix plus accessible. <strong>Mais</strong> sa puissance modeste (270 W) et son prix au watt &eacute;lev&eacute; (1,29 &euro;/Wc) en font un choix de niche&nbsp;: tr&egrave;s pertinent pour un balcon vraiment exigu, moins rentable qu&apos;un <Link href="/avis/sunology-play-2" className="text-green hover:underline font-semibold">PLAY</Link> ou qu&apos;un <Link href="/avis/beem-kit-300w" className="text-green hover:underline font-semibold">Beem Kit 300W</Link> dès que vous avez un peu plus de place.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi un kit encore plus compact ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La gamme Sunology s&apos;est jusqu&apos;ici construite autour du <Link href="/avis/sunology-play-2" className="text-green hover:underline">PLAY</Link> (500 W, pose au sol) et de sa version batterie, le PLAY MAX. Le <Link href="/avis/sunology-city" className="text-green hover:underline">CITY</Link> occupait le segment des balcons étroits avec une fixation garde-corps dédiée, avant d&apos;être retiré du catalogue en 2026.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le GO reprend ce rôle de kit d&apos;entrée pour petit espace, mais avec une approche différente&nbsp;: au lieu de se spécialiser uniquement sur le garde-corps comme le CITY, Sunology le présente comme un kit « passe-partout », compatible à la fois avec une pose au sol (ballasts) et une pose sur rambarde (cadre 30 mm, sans perçage). Sa puissance de 270 W et son prix de 349 &euro; en font surtout le ticket d&apos;entrée le plus bas de la marque, sous les 549-599 &euro; du PLAY et du CITY.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '270 Wc', l: 'Puissance' },
                  { v: '349 €', l: 'Prix' },
                  { v: '25 ans', l: 'Garantie' },
                  { v: '15,4 kg', l: 'Poids total' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Puissance panneau</td>
                      <td className="p-3 font-mono">270 Wc</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Micro-onduleur</td>
                      <td className="p-3 font-mono">300 W</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Dimensions panneau</td>
                      <td className="p-3 font-mono">1 435 &times; 880 mm</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Poids total (kit)</td>
                      <td className="p-3 font-mono">15,4 kg</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Type de cellules</td>
                      <td className="p-3">Monocristallin N-type TOPCon</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Pose</td>
                      <td className="p-3">Au sol (ballasts) ou garde-corps (sans perçage, fixation &oslash; max. 60 mm)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Connexion</td>
                      <td className="p-3">Prise 230V/16A standard (plug-and-play)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Installation</td>
                      <td className="p-3">~16 minutes (annoncé fabricant)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Garantie panneau</td>
                      <td className="p-3">25 ans</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Prix de vente</td>
                      <td className="p-3 font-mono font-bold text-green">349 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Sources&nbsp;: fiche produit Sunology (sunology.eu) et revendeur Hellowatt, consult&eacute;es le 09/10/2026.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1 text-green">✓ {p.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunology GO" merchantName="Sunology" affiliateUrl={AFFILIATE_URL} label="Voir le Sunology GO sur sunology.eu" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">⚠️ {p.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunology GO" merchantName="Sunology" affiliateUrl={AFFILIATE_URL} label="Comparer les offres du moment" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Sunology GO vs la concurrence</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Critère</th>
                      <th className="text-center p-3">Sunology GO</th>
                      <th className="text-center p-3">Sunology PLAY</th>
                      <th className="text-center p-3 rounded-tr-xl">Beem Kit 300W</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Prix', '349 €', '599 €', '299 €'],
                      ['Puissance', '270 Wc', '500 Wc', '300 Wc'],
                      ['€/Wc', '1,29 €', '1,20 €', '1,00 €'],
                      ['Pose', 'Sol ou garde-corps', 'Sol ou mur', 'Modulaire (4 panneaux)'],
                      ['Installation', '~16 min', '~1 min', '~1 heure'],
                      ['ROI (Lyon sud)', '7 ans', '6,5 ans', '5,5 ans'],
                      ['Batterie', 'Non (VAULT en option)', 'Non (PLAY MAX avec batterie)', 'Non'],
                      ['Garantie', '25 ans', '25-30 ans', '25 ans'],
                    ].map(([c, go, play, beem], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-green-pale/30' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c}</td>
                        <td className="text-center p-3 font-semibold">{go}</td>
                        <td className="text-center p-3">{play}</td>
                        <td className="text-center p-3">{beem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">Pour comparer tous les kits du marché&nbsp;: <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">voir notre comparatif complet →</Link></p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas sûr que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalisé selon votre département et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le Sunology GO →
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilité et production</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avec notre méthodologie standard (Lyon, plein sud, Performance Ratio 0,85, autoconsommation 85 %, tarif 0,1940 &euro;/kWh, inflation CRE 3,3 %/an), un Sunology GO donne&nbsp;:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '275 kWh', l: 'Production/an' },
                  { v: '45 €', l: 'Économies 1ère année' },
                  { v: '7 ans', l: 'ROI (avec inflation)' },
                  { v: '1 720 €', l: 'Économies sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-bold text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed">
                En orientation est ou ouest (coefficient 0,8), la production tombe à environ 220 kWh/an et le ROI passe à 8,5 ans. En pose sur garde-corps plutôt qu&apos;au sol, attendez-vous à 15-20 % de production en moins (même constat que sur le CITY), car la position verticale capte moins bien le soleil qu&apos;un panneau incliné.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous avez la place pour un kit plus puissant posé au sol',
                  'Votre budget est serré (le Beem Kit 300W est moins cher et plus rentable)',
                  'Vous voulez du stockage batterie dès le départ',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui c&apos;est le bon choix</h2>
              <div className="space-y-3">
                {cas_acheter.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1 text-green">✅ {c.profil}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui ce n&apos;est pas le bon choix</h2>
              <div className="space-y-3">
                {cas_pas_acheter.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ {c.profil}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le Sunology GO remplit bien son rôle de kit d&apos;entrée compact&nbsp;: 349 &euro;, 270 W, et la flexibilité de se poser au sol ou sur un garde-corps sans perçage. C&apos;est le choix logique pour un balcon vraiment exigu où ni un PLAY ni un kit modulaire ne trouveraient leur place.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Mais dès que vous avez un peu plus d&apos;espace, le calcul change&nbsp;: à 1,29 &euro;/Wc, le GO coûte plus cher au watt que le <Link href="/avis/sunology-play-2" className="text-green hover:underline">PLAY</Link> (1,20 &euro;/Wc) et bien plus que le <Link href="/avis/beem-kit-300w" className="text-green hover:underline">Beem Kit 300W</Link> (1,00 &euro;/Wc), avec un ROI plus long (7 ans contre 6,5 et 5,5 ans).
              </p>
              <p className="text-charcoal-light leading-relaxed">
                <strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">7/10</span></strong> — Un bon kit de niche pour les tout petits balcons, pas le meilleur rapport qualité-prix du marché.
              </p>
              <a href={AFFILIATE_URL} target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le Sunology GO &rarr;</a>
            </section>

            <AffiliateCTA productName="Sunology GO" merchantName="Sunology" affiliateUrl={AFFILIATE_URL} label="Voir le prix actuel sur Sunology" variant="box" position="footer-box" price="349 €" />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY (ex-PLAY 2)</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le kit posé au sol de Sunology, plus rentable mais plus encombrant</p>
                </Link>
                <Link href="/avis/sunology-city" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology CITY (arrêté)</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;ancien kit garde-corps que le GO vient remplacer</p>
                </Link>
                <Link href="/avis/beem-kit-300w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem Kit 300W</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le kit petit budget le plus rentable du marché</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleurs kits solaires 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet des kits du marché&nbsp;: Sunology, Beem, Sunethic, DualSun</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> ROI calculé avec tarif 0,1940 &euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud, via <code>src/lib/pricing.ts</code>. Fiche technique sourcée sur sunology.eu et chez le revendeur Hellowatt (09/10/2026). Article rédigé sans rémunération de Sunology.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
