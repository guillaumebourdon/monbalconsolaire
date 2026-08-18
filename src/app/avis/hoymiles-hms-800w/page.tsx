import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Hoymiles HMS-800W-2T avis 2026 : le micro-onduleur de référence pour kits DIY',
  description: 'Avis complet Hoymiles HMS-800W-2T : 2 MPPT indépendants, WiFi intégré, 96,7 % rendement. ~119 €. Le micro-onduleur le plus populaire pour les montages DIY balcon en France.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/hoymiles-hms-800w',
  },
};

const faqData = [
  {
    question: 'Quelle est la diff&eacute;rence entre le HMS-800W-2T et l&rsquo;ancien HM-800W ?',
    answer: 'L\'ancienne gamme HM (ex : HM-800W) n\'intègre pas de WiFi : elle nécessite un DTU (Data Transfer Unit) séparé (~30 €) pour remonter les données à l\'application S-Miles Cloud. La gamme HMS (ex : HMS-800W-2T) intègre le WiFi directement dans le boîtier : aucun DTU nécessaire, connexion directe à votre box. Résultat : le HMS couvre 30 € de DTU économisés, même si son prix catalogue est légèrement plus élevé.',
  },
  {
    question: 'Avec quels panneaux le Hoymiles HMS-800W-2T est-il compatible ?',
    answer: 'Avec la quasi-totalité des panneaux du marché équipés de connecteurs MC4 standard (format universel). Il accepte des modules de 16 à 60 V DC (démarrage à 22 V, max 65 V) et jusqu’à 16 A par entrée, ce qui couvre largement les panneaux 300 à 700 Wc du marché : JA Solar, LONGi, Trina, Risen, Canadian Solar, Jinko, etc. Seuls les kits avec onduleur déjà intégré (Sunology PLAY, Beem On…) ne sont pas compatibles.',
  },
  {
    question: 'Faut-il un DTU séparé avec le HMS-800W-2T ?',
    answer: 'Non. C\'est précisément le point fort de la gamme HMS par rapport à la gamme HM. Le WiFi est intégré dans le boîtier : vous scannez le QR code sur l\'appareil, vous connectez l\'app S-Miles Cloud à votre WiFi domestique, et c\'est tout. Pas d\'accessoire supplémentaire. La limité reste la portée WiFi : si votre balcon est éloigné de la box, un répéteur WiFi peut être nécessaire.',
  },
  {
    question: 'Combien produit un kit DIY avec le Hoymiles HMS-800W-2T ?',
    answer: 'Avec 2 panneaux de 400 Wc (800 Wc total), en région lyonnaise, exposition sud : environ 680 kWh par an en production brute (PR 0,85). Avec 85 % d’autoconsommation, vous valorisez ~578 kWh, soit ~112 €/an économisés au tarif actuel de 0,1940 €/kWh. L\'investissement total DIY (³ 360 €) est récupéré en ~3,2 ans.',
  },
  {
    question: 'La déclaration CACSI est-elle obligatoire avec le HMS-800W-2T ?',
    answer: 'Oui, comme pour tout système connecté au réseau. Le HMS-800W-2T est certifié CE, conforme aux normes VDE-AR-N 4105 et NF C 15-100. La déclaration CACSI à Enedis est gratuite, prend 20 à 30 minutes en ligne, et est valable pour toute la durée de vie de votre installation.',
  },
  {
    question: 'Quelle est la garantie du Hoymiles HMS-800W-2T ?',
    answer: '10 ans de garantie constructeur. C\'est moins que les 25 ans proposés par Enphase sur ses micro-onduleurs, mais comparable à APsystems (10 ans) et nettement au-dessus des onduleurs string bas de gamme. Hoymiles propose une extension de garantie payante jusqu’à 25 ans chez certains revendeurs. En pratique, un micro-onduleur bien refroidi (convection naturelle, sans pièces mobiles) duré facilement 15 à 20 ans.',
  },
];

export default function HoymilesHMS800WAvisPage() {
  return (
    <>
      <SchemaArticle
        title="Hoymiles HMS-800W-2T avis 2026 : micro-onduleur DIY de référence"
        description="Avis complet sur le Hoymiles HMS-800W-2T : 2 MPPT ind&eacute;pendants, WiFi int&eacute;gr&eacute; sans DTU, rendement 96,7&nbsp;%. Le micro-onduleur pr&eacute;f&eacute;r&eacute; des montages DIY balcon en France."
        url="https://monbalconsolaire.fr/avis/hoymiles-hms-800w"
        datePublished="2026-08-18"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct
        name="Hoymiles HMS-800W-2T"
        brand="Hoymiles"
        description="Micro-onduleur monophas&eacute; 800&nbsp;W, 2 entr&eacute;es MPPT ind&eacute;pendantes, WiFi int&eacute;gr&eacute; (sans DTU), IP67. Le choix de r&eacute;f&eacute;rence pour les kits solaires balcon DIY."
        price={119}
        ratingValue={8.5}
        ratingCount={1}
        url="https://monbalconsolaire.fr/avis/hoymiles-hms-800w"
      />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Hoymiles HMS-800W-2T' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Hoymiles HMS-800W-2T' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Hoymiles HMS-800W-2T&nbsp;: avis du micro-onduleur de r&eacute;f&eacute;rence pour les kits DIY
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Vous voulez assembler votre propre kit solaire balcon plutôt qu&rsquo;acheter un kit complet&nbsp;? Le Hoymiles HMS-800W-2T est l&rsquo;onduleur que choisissent la majorit&eacute; des bricoleurs inform&eacute;s en Europe. 2&nbsp;MPPT ind&eacute;pendants, WiFi int&eacute;gr&eacute; sans DTU, 96,7&nbsp;% de rendement, ~119&nbsp;&euro;. On analyse tout, points forts, limites, et comment l&rsquo;int&eacute;grer dans un&nbsp;<Link href="/guide/installer-kit-solaire-balcon" className="text-green hover:underline">montage DIY</Link>&nbsp;rentable.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>18 ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <ProductHero
            brand="Hoymiles"
            name="HMS-800W-2T"
            power="800 W (2 entr&eacute;es MPPT)"
            price="~119 &euro;"
            score="8.5/10"
            tagline="Le micro-onduleur le plus prim&eacute; du march&eacute; DIY europ&eacute;en. WiFi int&eacute;gr&eacute;, 2 MPPT, IP67."
            affiliateUrl="https://www.amazon.fr/dp/B0CJGL65DS"
            affiliateLabel="Voir sur Amazon.fr"
            accentColor="green"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 18/08/2026 &middot; Peut varier selon les promos et revendeurs</p>

          <div className="space-y-10">

            {/* Section 1 — Contexte */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi un micro-onduleur seul plut&ocirc;t qu&rsquo;un kit complet&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="text-green hover:underline">micro-onduleur</Link> seul s&rsquo;adresse &agrave; un profil sp&eacute;cifique&nbsp;: celui qui poss&egrave;de d&eacute;j&agrave; des panneaux, qui en r&eacute;cup&egrave;re gratuitement, ou qui veut ach&eacute;ter les composants s&eacute;par&eacute;ment pour ma&icirc;triser chaque &eacute;tape. Contre-intuitivement, c&rsquo;est souvent l&rsquo;option la plus rentable.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit DIY typique&nbsp;: 2 panneaux 400&nbsp;Wc (JA Solar, LONGi, Trina &mdash; ~80&ndash;120&nbsp;&euro; pi&egrave;ce chez les distributeurs solaires) + 1 HMS-800W-2T (~119&nbsp;&euro;) + c&acirc;bles MC4 et adaptateur schuko (~40&nbsp;&euro;) = <strong>~350&ndash;400&nbsp;&euro; au total</strong>, soit bien en dessous du <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500&nbsp;Wc &agrave; 429&nbsp;&euro;</Link> avec une puissance &eacute;quivalente.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le HMS-800W-2T est le mod&egrave;le le plus vendu de Hoymiles en Europe. Sa r&eacute;putation repose sur une fiabilit&eacute; &eacute;prouv&eacute;e, un rendement parmi les meilleurs du segment, et une communaut&eacute; d&rsquo;utilisateurs tr&egrave;s active sur les forums DIY.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '800 W', l: 'Puissance max sortie' },
                  { v: '96,7 %', l: 'Rendement' },
                  { v: '2 MPPT', l: 'Indépendants' },
                  { v: 'IP67', l: 'Etanchéité' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 — Fiche technique */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique Hoymiles HMS-800W-2T</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {[
                      ['Puissance AC maximale', '800 VA'],
                      ['Nombre d’entrées DC', '2 (2 MPPT indépendants)'],
                      ['Plage de tension DC', '16 – 60 V (démarrage à 22 V, max 65 V)'],
                      ['Courant max par entrée', '16 A'],
                      ['Panneaux compatibles', '200 – 670 Wc (connecteurs MC4)'],
                      ['Rendement max', '96,7 %'],
                      ['Suivi MPPT', '~99,8 %'],
                      ['Tension AC sortie', '230 V / 50 Hz'],
                      ['Communication', 'WiFi 2,4 GHz intégré (sans DTU)'],
                      ['Application', 'S-Miles Cloud (iOS / Android)'],
                      ['Indice de protection', 'IP67'],
                      ['Refroidissement', 'Convection naturelle (passif, silencieux)'],
                      ['Dimensions', '261 × 180 × 35 mm'],
                      ['Poids', '~3,2 kg'],
                      ['Garantie', '10 ans (extension 25 ans disponible)'],
                      ['Certifications', 'CE, VDE-AR-N 4105, NF C 15-100'],
                    ].map(([k, v], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3 font-medium text-charcoal">{k}</td>
                        <td className="py-2 px-3 text-charcoal-light">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 — Points forts */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Ce qu&rsquo;on aime</h2>
              <div className="space-y-4">
                {[
                  {
                    titre: 'WiFi int&eacute;gr&eacute; sans DTU',
                    detail: 'La principale am&eacute;lioration par rapport &agrave; l&rsquo;ancienne gamme HM. Plus besoin d&rsquo;ach&eacute;ter un DTU s&eacute;par&eacute; (~30&nbsp;&euro;). Le HMS se connecte directement &agrave; votre WiFi domestique. Mise en service en moins de 5 minutes via l&rsquo;app S-Miles Cloud.',
                  },
                  {
                    titre: '2 MPPT ind&eacute;pendants — chaque panneau optimis&eacute; s&eacute;par&eacute;ment',
                    detail: 'Chaque entr&eacute;e poss&egrave;de son propre tracker MPPT. R&eacute;sultat&nbsp;: si un panneau est partiellement ombrag&eacute;, seul ce panneau est affect&eacute; &mdash; l&rsquo;autre continue de produire &agrave; son maximum. Essentiel sur les balcons o&ugrave; l&rsquo;ombre des garde-corps ou des vis-&agrave;-vis est fr&eacute;quente.',
                  },
                  {
                    titre: 'Rendement 96,7&nbsp;%',
                    detail: 'Parmi les meilleurs du march&eacute; sur ce segment de prix. Pour comparaison&nbsp;: APsystems DS3 affiche 97,0&nbsp;%, Enphase IQ8+ revendique 97,5&nbsp;%. La diff&eacute;rence en production r&eacute;elle sur une ann&eacute;e est quasi-imperceptible (<&nbsp;5&nbsp;kWh).',
                  },
                  {
                    titre: 'Compatibilit&eacute; quasi-universelle',
                    detail: 'Fonctionne avec tous les panneaux MC4 standards de 200 &agrave; 670&nbsp;Wc. Tension d&rsquo;entr&eacute;e accept&eacute;e jusqu&rsquo;&agrave; 65&nbsp;V DC, ce qui couvre largement les panneaux mono et poly actuels. Vous n&rsquo;&ecirc;tes pas enferm&eacute; dans un &eacute;cosyst&egrave;me propri&eacute;taire.',
                  },
                  {
                    titre: 'IP67 — &eacute;tanche et robuste',
                    detail: 'Certifi&eacute; &eacute;tanche &agrave; la poussi&egrave;re et &agrave; l&rsquo;immersion temporaire. Le bo&icirc;tier en plastique technique r&eacute;siste aux UV, au gel, aux intemp&eacute;ries. Aucune pi&egrave;ce mobile, refroidissement passif silencieux&nbsp;: maintenance nulle sur toute la dur&eacute;e de vie.',
                  },
                  {
                    titre: 'Communaut&eacute; DIY &eacute;norme et retours d&rsquo;exp&eacute;rience abondants',
                    detail: 'Des milliers d&rsquo;installations document&eacute;es sur les forums europ&eacute;ens (Photovoltaikforum.com, Forum-photovoltaique.fr…). Vous trouverez toujours une r&eacute;ponse &agrave; vos questions de montage. Hoymiles est la marque de r&eacute;f&eacute;rence des balconkraftwerk (centrales solaires balcon) en Allemagne, march&eacute; le plus mature en Europe.',
                  },
                ].map((p, i) => (
                  <div key={i} className="border-l-4 border-l-green pl-4 py-2">
                    <div className="font-semibold text-charcoal mb-1" dangerouslySetInnerHTML={{ __html: p.titre }} />
                    <p className="text-sm text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Hoymiles HMS-800W-2T"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/dp/B0CJGL65DS"
              label="Voir le Hoymiles HMS-800W-2T sur Amazon.fr"
              variant="inline"
              position="after-pros"
            />

            {/* Section 4 — Points faibles */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Ce qu&rsquo;on aime moins</h2>
              <div className="space-y-4">
                {[
                  {
                    titre: 'Application S-Miles Cloud correcte, pas exceptionnelle',
                    detail: 'L&rsquo;app Hoymiles fait le job&nbsp;: suivi de production en temps r&eacute;el, historique, alertes. Mais elle est loin derrière l&rsquo;application EcoFlow en termes de fonctionnalit&eacute;s (pas de programmation horaire, pas d&rsquo;int&eacute;gration heures creuses/pleines, pas de pilotage de charges). Pour un pur onduleur sans batterie, c&rsquo;est suffisant.',
                  },
                  {
                    titre: 'Garantie 10 ans seulement (onduleur)',
                    detail: 'Enphase garantit ses micro-onduleurs 25 ans. Hoymiles propose 10 ans de s&eacute;rie, avec une extension payante disponible chez certains revendeurs. En pratique, un micro-onduleur &agrave; convection naturelle dure 15&ndash;20 ans sans souci, mais la garantie papier est un argument commercial faible face &agrave; Enphase.',
                  },
                  {
                    titre: 'Pas de c&acirc;bles ni d&rsquo;adaptateur fournis',
                    detail: 'Le HMS-800W-2T se livre avec les c&acirc;bles MC4 d&rsquo;entr&eacute;e (vers les panneaux), mais pas avec le c&acirc;ble de sortie AC vers la prise. Il faut pr&eacute;voir un c&acirc;ble schuko certifi&eacute; (~15&ndash;25&nbsp;&euro;) ou une sortie directe sur le tableau &eacute;lectrique si vous savez faire. &Agrave; pr&eacute;voir dans le budget.',
                  },
                  {
                    titre: 'Montage DIY = comp&eacute;tences minimales requises',
                    detail: 'Contrairement &agrave; un kit complet (tout est pr&eacute;assembl&eacute;), le montage DIY demande de connecter les c&acirc;bles MC4, de fixer l&rsquo;onduleur &agrave; l&rsquo;arri&egrave;re du panneau, et de bien v&eacute;rifier les polarit&eacute;s. Pas de formation particuli&egrave;re n&eacute;cessaire, mais une heure de lecture des instructions s&rsquo;impose. Pas recommand&eacute; si vous &ecirc;tes d&eacute;butant absolu.',
                  },
                  {
                    titre: 'Port&eacute;e WiFi limit&eacute;e',
                    detail: 'Le module WiFi int&eacute;gr&eacute; couvre typiquement 20&ndash;30&nbsp;m en espace ouvert, moins si vous avez des murs &eacute;pais entre le balcon et la box. Quelques utilisateurs rapportent des probl&egrave;mes de connexion sur les grands appartements. Solution&nbsp;: un r&eacute;p&eacute;teur WiFi (~15&nbsp;&euro;) ou un DTU-Pro en option si la connexion directe est impossible.',
                  },
                ].map((p, i) => (
                  <div key={i} className="border-l-4 border-l-amber pl-4 py-2">
                    <div className="font-semibold text-charcoal mb-1" dangerouslySetInnerHTML={{ __html: p.titre }} />
                    <p className="text-sm text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Hoymiles HMS-800W-2T"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/dp/B0CJGL65DS"
              label="Commander le Hoymiles HMS-800W-2T"
              variant="inline"
              position="after-cons"
            />

            {/* Section 5 — Comparatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">HMS-800W-2T vs APsystems DS3 vs Enphase IQ8+</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Trois &laquo;&nbsp;standards&nbsp;&raquo; du march&eacute; DIY s&rsquo;affrontent sur ce segment. Voici o&ugrave; chaque mod&egrave;le gagne ou perd.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="py-3 px-3 text-left font-semibold">Crit&egrave;re</th>
                      <th className="py-3 px-3 text-center font-semibold bg-green-dark">Hoymiles HMS-800W-2T &#9733;</th>
                      <th className="py-3 px-3 text-center font-semibold">APsystems DS3</th>
                      <th className="py-3 px-3 text-center font-semibold">Enphase IQ8+</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Prix', '~119 €', '~95 €', '~185 €'],
                      ['Puissance max AC', '800 W', '800 W', '300 W/panneau'],
                      ['Panneaux gérés', '2 (2 MPPT)', '2 (2 MPPT)', '1 par unité'],
                      ['WiFi intégré', '✓ (sans DTU)', '✓ (sans DTU)', '✗ (DTU à part ~80 €)'],
                      ['Rendement', '96,7 %', '97,0 %', '97,5 %'],
                      ['IP', 'IP67', 'IP67', 'IP67'],
                      ['Garantie', '10 ans', '10 ans', '25 ans'],
                      ['Application', 'S-Miles Cloud', 'EMA App', 'Enlighten'],
                      ['Compatibilité MC4', 'Universelle', 'Universelle', 'Universelle'],
                      ['Communauté DIY FR', 'Très active', 'Active', 'Moderate'],
                    ].map(([k, v1, v2, v3], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/40' : ''}>
                        <td className="py-2 px-3 font-medium text-charcoal">{k}</td>
                        <td className="py-2 px-3 text-center font-semibold text-green bg-green-pale/30">{v1}</td>
                        <td className="py-2 px-3 text-center text-charcoal-light">{v2}</td>
                        <td className="py-2 px-3 text-center text-charcoal-light">{v3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
                <strong>Verdict rapide&nbsp;:</strong> l&rsquo;APsystems DS3 est l&eacute;g&egrave;rement moins cher mais la communaut&eacute; Hoymiles en France est plus large. L&rsquo;Enphase IQ8+ est la r&eacute;f&eacute;rence premium avec 25 ans de garantie, mais il faut 2 unit&eacute;s pour 2 panneaux + le DTU, soit ~450&nbsp;&euro; vs ~119&nbsp;&euro; pour le HMS. Pour un balcon standard, le rapport qualit&eacute;/prix du Hoymiles est imbattable.
              </p>
            </section>

            {/* CTA Calculateur */}
            <div className="card-lg text-center bg-green/5 border border-green/20">
              <h3 className="text-xl font-bold mb-2">Calculez le ROI de votre kit DIY</h3>
              <p className="text-charcoal-light mb-4 text-sm">
                Entrez votre d&eacute;partement, orientation et surface de balcon pour obtenir vos &eacute;conomies pr&eacute;visionnelles personnalis&eacute;es.
              </p>
              <Link href="/calculateur" className="btn-primary">
                Lancer le calculateur gratuit &rarr;
              </Link>
            </div>

            {/* Section 6 — Rentabilité */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; d&rsquo;un kit DIY avec le Hoymiles HMS-800W-2T</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Calcul de r&eacute;f&eacute;rence&nbsp;: 2 panneaux 400&nbsp;Wc (800&nbsp;Wc total), Lyon, exposition sud, <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green hover:underline">inclinaison 30&deg;</Link>. Tarif EDF 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;%, Performance Ratio 0,85.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '680 kWh', l: 'Production/an' },
                  { v: '578 kWh', l: 'Autoconsommés (85 %)' },
                  { v: '112 €', l: 'Économies année 1' },
                  { v: '~3,2 ans', l: 'ROI (invest. ~360 €)' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green/10 rounded-brand-lg border border-green/20">
                    <div className="font-mono font-bold text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Sur 25 ans, avec inflation tarifaire de 3,3&nbsp;%/an, les &eacute;conomies cumul&eacute;es d&rsquo;un kit DIY 800&nbsp;Wc atteignent <strong>~3&nbsp;800&nbsp;&euro;</strong> pour un investissement initial de ~360&nbsp;&euro;. C&rsquo;est le meilleur ROI accessible sur le march&eacute; du solaire balcon, justement parce que vous &eacute;conomisez la marge commerciale du fabricant de kit.
              </p>
            </section>

            {/* Section 7 — À éviter si */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <ul className="space-y-3">
                {[
                  'Vous &ecirc;tes d&eacute;butant absolu et pr&eacute;f&eacute;rez une solution tout-en-un sans bricolage&nbsp;&rarr; pr&eacute;f&eacute;rez le Sunology PLAY 2 ou le Beem On 500&nbsp;Wc',
                  'Vous n&rsquo;avez pas de panneaux et ne voulez pas chercher des composants s&eacute;par&eacute;ment&nbsp;&rarr; un kit complet sera plus simple',
                  'Vous voulez une garantie de 25 ans sur l&rsquo;onduleur&nbsp;&rarr; Enphase IQ8+ est la seule option (mais budget 4&times; plus &eacute;lev&eacute;)',
                  'Votre balcon est tr&egrave;s &eacute;loign&eacute; de la box et vous ne pouvez pas installer de r&eacute;p&eacute;teur WiFi',
                  'Vous cherchez un syst&egrave;me avec batterie int&eacute;gr&eacute;&nbsp;&rarr; le HMS est un onduleur seul, sans gestion de stockage native',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-charcoal-light text-sm leading-relaxed">
                    <span className="text-red-500 font-bold mt-0.5 shrink-0">&#10007;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 8 — Verdict */}
            <section className="card-lg bg-cream/60 border border-green/20">
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <div className="text-amber-dark text-xl font-extrabold mb-4">8,5/10 &mdash; Le micro-onduleur DIY in&eacute;vitable</div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le Hoymiles HMS-800W-2T n&rsquo;est pas destin&eacute; &agrave; tout le monde&nbsp;: c&rsquo;est un composant pour ceux qui veulent assembler leur propre kit. Dans ce cadre, il est <strong>simplement imbattable rapport qualit&eacute;/prix</strong>. WiFi int&eacute;gr&eacute; (plus de DTU &agrave; ach&eacute;ter), 2 MPPT ind&eacute;pendants pour g&eacute;rer l&rsquo;ombre par panneau, rendement de 96,7&nbsp;%, IP67 pour toutes les intempéries, communaut&eacute; DIY europ&eacute;enne massive pour le support.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Les quelques b&eacute;mols &mdash; app S-Miles moins aboutie qu&rsquo;EcoFlow, garantie 10 ans seulement, c&acirc;ble AC non fourni &mdash; ne remettent pas en question le choix sur ce segment. Si vous savez connecter deux fiches MC4 et configurer un WiFi, le HMS-800W-2T est votre micro-onduleur.
              </p>
              <a
                href="https://www.amazon.fr/dp/B0CJGL65DS"
                target="_blank"
                rel="sponsored noopener"
                className="btn-affiliate"
              >
                Voir le Hoymiles HMS-800W-2T sur Amazon.fr &rarr;
              </a>
            </section>

            <AffiliateCTA
              productName="Hoymiles HMS-800W-2T"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/dp/B0CJGL65DS"
              label="Commander le Hoymiles HMS-800W-2T"
              variant="box"
              position="footer-box"
            />

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-3">
                {faqData.map((item, i) => (
                  <details key={i} className="card-lg" {...(i === 0 ? { open: true } : {})}>
                    <summary className="font-semibold cursor-pointer text-charcoal" dangerouslySetInnerHTML={{ __html: item.question }} />
                    <p className="mt-3 text-charcoal-light text-sm leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Articles liés */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    href: '/blog/micro-onduleur-solaire-fonctionnement',
                    label: 'Blog',
                    title: 'Micro-onduleur solaire&nbsp;: comment &ccedil;a marche et lequel choisir&nbsp;?',
                    desc: 'Fonctionnement, comparatif Hoymiles vs APsystems vs Enphase, crit&egrave;res de choix.',
                  },
                  {
                    href: '/guide/installer-kit-solaire-balcon',
                    label: 'Guide',
                    title: 'Comment installer un kit solaire sur son balcon&nbsp;?',
                    desc: 'Guide pas-&agrave;-pas pour les montages DIY et kits plug-and-play.',
                  },
                  {
                    href: '/avis/ecoflow-powerstream',
                    label: 'Avis',
                    title: 'EcoFlow PowerStream&nbsp;: l&rsquo;alternative syst&egrave;me avec batterie',
                    desc: 'Le micro-onduleur intelligent EcoFlow avec gestion de batterie int&eacute;gr&eacute;e.',
                  },
                  {
                    href: '/comparatif/meilleur-kit-solaire-2026',
                    label: 'Comparatif',
                    title: 'Meilleur kit solaire balcon 2026&nbsp;: notre classement',
                    desc: 'Comparatif complet de tous les kits disponibles en France.',
                  },
                ].map((a, i) => (
                  <Link key={i} href={a.href} className="card-lg border-l-4 border-l-green block hover:shadow-brand-lg transition-shadow">
                    <div className="badge-green mb-1 text-xs">{a.label}</div>
                    <div className="font-semibold text-charcoal text-sm" dangerouslySetInnerHTML={{ __html: a.title }} />
                    <p className="text-xs text-charcoal-light mt-1" dangerouslySetInnerHTML={{ __html: a.desc }} />
                  </Link>
                ))}
              </div>
            </section>

          </div>

          <NewsletterBanner />

          <footer className="mt-10 pt-6 border-t border-stone/20 text-xs text-stone leading-relaxed space-y-2">
            <p>
              <strong>M&eacute;thodologie</strong>&nbsp;: production calcul&eacute;e avec la formule ROI de r&eacute;f&eacute;rence MonBalconSolaire (tarif EDF 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an CRE, autoconsommation 85&nbsp;%, Performance Ratio 0,85, r&eacute;f&eacute;rence Lyon exposition sud, dur&eacute;e 25 ans).
            </p>
            <p>
              <strong>Transparence</strong>&nbsp;: cet article contient des liens affili&eacute;s Amazon. Si vous achetez via ces liens, nous per&ccedil;evons une commission sans surco&ucirc;t pour vous. Cela ne modifie pas nos &eacute;valuations.
            </p>
          </footer>
        </div>
      </article>
    </>
  );
}
