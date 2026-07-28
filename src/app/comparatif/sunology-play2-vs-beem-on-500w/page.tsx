import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';

export const metadata: Metadata = {
  title: 'Sunology PLAY 2 vs Beem On 500 Wc : le match 2026 (12 critères)',
  description: 'Sunology PLAY 2 (599€) vs Beem On 500 Wc (429€) : comparatif complet sur 12 critères. Prix, puissance, ROI, installation, garantie. Quel kit choisir en 2026 ?',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/sunology-play2-vs-beem-on-500w',
  },
};

const faqData = [
  {
    question: 'Le Beem On 500 Wc est-il vraiment meilleur que le Sunology PLAY 2 ?',
    answer: 'Sur le rapport €/Wc, oui sans discussion : 0,86€/Wc contre 1,33€/Wc, soit un ROI de 4,8 ans contre 7,1 ans. Mais Sunology garde des avantages concrets : installation en 1 minute, WiFi natif sans boîtier, certification CE sur l\'ensemble du kit, et une solidité financière sans nuage. Beem Energy est en procédure de sauvegarde depuis fin 2025.',
  },
  {
    question: 'Quelle différence de production entre les deux kits ?',
    answer: 'En région lyonnaise exposition sud, le PLAY 2 produit environ 459 kWh/an (76 € d’économies) et le Beem On 500 Wc environ 510 kWh/an (84 €). L’écart est modéré (+11 % de production) mais l’écart de prix est bien plus grand (−28 %).',
  },
  {
    question: 'Quel kit s\'installe le plus facilement ?',
    answer: 'Le Sunology PLAY 2, sans conteste. Le châssis est pré-assemblé en usine : vous dépliez, lestez et branchez en 1 minute. Le Beem On nécessite environ 5 minutes d\'assemblage et la connexion d\'un boîtier Beembox à votre box internet.',
  },
  {
    question: 'Le risque Beem Energy doit-il freiner l\'achat ?',
    answer: 'C\'est à peser. Beem Energy est en procédure de sauvegarde depuis novembre 2025 : le SAV fonctionne, les livraisons se font, mais la garantie 25 ans dépend de la pérennité de l\'entreprise. Si vous comptez sur le SAV long terme, la solidité de Sunology rassure. Si vous êtes pragmatique sur le prix, le Beem On reste un excellent rapport qualité-prix — d\'autant que le panneau lui-même est solide.',
  },
  {
    question: 'Peut-on passer du PLAY 2 au Beem On 500 Wc ou vice versa ?',
    answer: 'Non, les deux systèmes sont incompatibles : micro-onduleurs, app de suivi et accessoires sont propriétaires. Vous devez choisir un écosystème dès le départ. En extension, le PLAY 2 s\'associe jusqu’à 4 stations Sunology, et le Beem jusqu’à 4 stations Beem.',
  },
  {
    question: 'Quel est le meilleur kit pour un petit balcon ?',
    answer: 'Le Sunology PLAY 2 est plus compact (176 cm de long vs 195 cm). Sur un balcon de 1,80 m de profondeur, le Beem peut être juste. Pour les balcons très étroits (≤ 1,50 m), regardez aussi le Sunology CITY (garde-corps, sans perçage).',
  },
];

export default function SunologyPlay2VsBeemOn500WPage() {
  return (
    <>
      <SchemaArticle
        title="Sunology PLAY 2 vs Beem On 500 Wc : le match 2026 (12 critères)"
        description="Comparatif complet Sunology PLAY 2 vs Beem On 500 Wc sur 12 critères. Prix, puissance, ROI, installation, garantie. Quel kit choisir en 2026 ?"
        url="https://monbalconsolaire.fr/comparatif/sunology-play2-vs-beem-on-500w"
        datePublished="2026-07-28"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb
        items={[
          { label: 'Comparatifs', href: '/comparatif' },
          { label: 'Sunology PLAY 2 vs Beem On 500 Wc' },
        ]}
      />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs
            items={[
              { label: 'Comparatifs', href: '/comparatif' },
              { label: 'Sunology PLAY 2 vs Beem On 500 Wc' },
            ]}
          />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif juillet 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Sunology PLAY&nbsp;2 vs Beem On 500&nbsp;Wc&nbsp;: le nouveau match 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le leader historique &agrave; 599&nbsp;&euro; face au nouveau challenger &agrave; 429&nbsp;&euro;. Avec le Beem On 500&nbsp;Wc, l&apos;écart de prix est devenu trop grand pour ignorer. On compare tout sur 12 crit&egrave;res.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>28 juillet 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>

            <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3 mt-6">
              <span className="text-stone text-sm mt-0.5">&#x2139;</span>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence&nbsp;:</strong> certains liens sont affili&eacute;s. Notre classement repose sur prix, puissance, ROI, installation et garantie. Aucun fabricant ne paie pour &ecirc;tre mieux class&eacute;.{' '}
                <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</Link>
              </p>
            </div>
          </div>

          {/* Verdict rapide */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict en 30 secondes</h2>
            <p className="text-charcoal-light text-sm leading-relaxed mb-2">
              <strong>Beem On 500&nbsp;Wc (429&nbsp;&euro;)</strong> pour le meilleur ROI du march&eacute; : 0,86&nbsp;&euro;/Wc, retour sur investissement en 4,8 ans, 170&nbsp;&euro; de moins pour 50&nbsp;Wc de plus. Si votre seul crit&egrave;re est la rentabilit&eacute;, le choix est simple.
            </p>
            <p className="text-charcoal-light text-sm leading-relaxed">
              <strong>Sunology PLAY&nbsp;2 (599&nbsp;&euro;)</strong> pour la tranquillit&eacute; d&apos;esprit : installation en 1 minute, WiFi natif sans bo&icirc;tier, certification CE sur l&apos;ensemble du kit, et une entreprise solide. Le sur-co&ucirc;t de 170&nbsp;&euro; achète vraiment quelque chose &mdash; surtout si la situation financi&egrave;re de Beem Energy vous inqui&egrave;te.
            </p>
          </div>

          <div className="space-y-10">
            {/* Tableau comparatif 12 critères */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match sur 12 crit&egrave;res</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-center p-3">
                        <div className="flex flex-col items-center gap-2">
                          <ProductThumb
                            src="/images/produits/sunology-play-2-1.webp"
                            alt="Sunology PLAY 2"
                            href="/avis/sunology-play-2"
                            size="sm"
                          />
                          <span>Sunology PLAY&nbsp;2</span>
                        </div>
                      </th>
                      <th className="text-center p-3 rounded-tr-xl">
                        <div className="flex flex-col items-center gap-2">
                          <ProductThumb
                            src="/images/produits/beem-on-500-1.webp"
                            alt="Beem On 500 Wc"
                            href="/avis/beem-on-500w"
                            size="sm"
                          />
                          <span>Beem On 500&nbsp;Wc</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['&#9312; Prix', '599&nbsp;€', '429&nbsp;€ &#9733;'],
                      ['&#9313; Puissance', '450&nbsp;Wc', '500&nbsp;Wc &#9733;'],
                      ['&#9314; Rapport&nbsp;€/Wc', '1,33&nbsp;€', '0,86&nbsp;€ &#9733;'],
                      ['&#9315; Production/an (Lyon sud)', '~459&nbsp;kWh', '~510&nbsp;kWh &#9733;'],
                      ['① Économies/an', '76&nbsp;€', '84&nbsp;€ &#9733;'],
                      ['&#9317; ROI', '7,1 ans', '4,8 ans &#9733;'],
                      ['&#9318; Installation', '1 min &#9733;', '5 min'],
                      ['&#9319; Suivi WiFi', 'Natif (TSUN) &#9733;', 'Via Beembox'],
                      ['&#9320; Dimensions', '176×113 cm &#9733;', '195×113 cm'],
                      ['&#9321; Garantie', '25 ans + 30 perf. &#9733;', '25 ans'],
                      ['&#9322; Certification CE', 'Kit complet &#9733;', 'Panneau seul'],
                      ['&#9323; Solidité financière', 'Bonne &#9733;', '⚠️ Proc. sauvegarde'],
                    ].map(([critere, play2, beem], i) => (
                      <tr
                        key={i}
                        className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}
                      >
                        <td
                          className="p-3 font-semibold"
                          dangerouslySetInnerHTML={{ __html: critere }}
                        />
                        <td
                          className="text-center p-3"
                          dangerouslySetInnerHTML={{ __html: play2 }}
                        />
                        <td
                          className="text-center p-3"
                          dangerouslySetInnerHTML={{ __html: beem }}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2">
                &#9733; Meilleur sur ce crit&egrave;re &mdash; Prix v&eacute;rifi&eacute;s le 28/07/2026. ROI calcul&eacute; avec tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an, autoconsommation 85%, PR 0,85, Lyon sud.
              </p>
            </section>

            {/* Où Sunology gagne */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi choisir le Sunology PLAY&nbsp;2</h2>
              <div className="space-y-3">
                {[
                  {
                    t: 'Installation en 1 minute, zéro outil',
                    d: 'Le châssis est pré-assemblé en usine. Vous dépliez le support, vous remplissez les ballasts d’eau, vous branchez la prise. C’est littéralement tout. Le Beem nécessite 5 minutes d’assemblage et la connexion d’un boîtier Beembox supplémentaire à votre box internet.',
                  },
                  {
                    t: 'WiFi intégré au micro-onduleur',
                    d: 'Le micro-onduleur TSUN du PLAY 2 se connecte directement à votre box en WiFi. Pas de boîtier supplémentaire, pas de fil Ethernet à tirer. L’app STREAM est disponible immédiatement après branchement.',
                  },
                  {
                    t: 'Certification CE sur l’ensemble du kit',
                    d: 'Sunology est le seul fabricant à avoir la certification CE sur le kit complet (panneau + micro-onduleur + châssis). Beem certifie le panneau seul. Ce n’est pas qu’une question administrative : ça couvre votre responsabilité en cas de sinistre.',
                  },
                  {
                    t: 'Panneau plus compact pour les petits balcons',
                    d: '176×113 cm contre 195×113 cm pour le Beem. Sur un balcon de 1,80 m de profondeur, 19 cm de moins ça change tout. Le PLAY 2 passe là où le Beem ne passe pas.',
                  },
                  {
                    t: 'Garantie 25 ans + 30 ans de performance',
                    d: 'Sunology garantit le système 25 ans ET la performance des cellules (>80 % de rendement) pendant 30 ans. Beem garantit 25 ans seulement. Et dans le contexte actuel de Beem Energy (procédure de sauvegarde), la valeur d’une garantie dépend de la pérennité de l’entreprise.',
                  },
                  {
                    t: 'Solidité financière sans nuage',
                    d: 'Sunology est une entreprise rentable avec un bilan sain. Beem Energy est en procédure de sauvegarde depuis novembre 2025. Pour un investissement sur 25 ans, la pérennité du fabricant n’est pas un détail.',
                  },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://sunology.eu/products/play2-kit-solaire"
                  target="_blank"
                  rel="sponsored noopener"
                  className="btn-affiliate inline-flex text-sm"
                >
                  Voir le Sunology PLAY&nbsp;2 &rarr;
                </a>
              </div>
            </section>

            {/* Où Beem gagne */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi choisir le Beem On 500&nbsp;Wc</h2>
              <div className="space-y-3">
                {[
                  {
                    t: '170 € moins cher pour 50 Wc de plus',
                    d: '429 € vs 599 € : l’écart est brutal. Pour chaque euro investi, vous obtenez 1,16 Wc chez Beem contre 0,75 Wc chez Sunology. Sur un investissement à horizon 10 ans, la différence de ROI (4,8 vs 7,1 ans) se traduit par 2 ans et demi de plus à attendre avant de rentrer dans ses frais.',
                  },
                  {
                    t: 'ROI record : 4,8 ans',
                    d: 'C’est le meilleur retour sur investissement du marché premium en France. En exposition sud en région méditerranéenne, ce ROI tombe sous les 3,5 ans. Sur 25 ans, les économies cumulées atteignent ~3 160 € contre ~2 871 € pour le PLAY 2.',
                  },
                  {
                    t: 'Paiement en 10x sans frais',
                    d: 'Soit ~43 €/mois. Dès le premier mois, le kit produit plus que la mensualité. Sunology ne propose pas de paiement fractionné sans frais sur l’ensemble de sa gamme.',
                  },
                  {
                    t: 'Option Beem ZEN (49 €)',
                    d: 'Pour 49 € supplémentaires, Beem prend en charge toutes vos démarches administratives : déclaration CACSI Enedis, convention d’autoconsommation, correspondance avec votre gestionnaire de réseau. Sunology vous laisse gérer seul.',
                  },
                  {
                    t: 'Disponible en magasin',
                    d: 'Le Beem On 500 Wc est vendu chez Leroy Merlin et Boulanger en plus du site Beem. Pratique pour voir le produit avant d’acheter ou simplifier un retour SAV en magasin.',
                  },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge"
                  target="_blank"
                  rel="sponsored noopener"
                  className="btn-affiliate inline-flex text-sm"
                >
                  Voir le Beem On 500&nbsp;Wc &rarr;
                </a>
              </div>
            </section>

            {/* Comparaison ROI chiffrée */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La rentabilit&eacute; en chiffres</h2>
              <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                M&ecirc;me m&eacute;thodologie pour les deux kits : tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85%, Performance Ratio 0,85, Lyon exposition sud.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[420px]">
                  <thead>
                    <tr className="bg-cream border-b-2 border-border">
                      <th className="text-left p-3 font-bold">Indicateur</th>
                      <th className="text-center p-3 font-bold">Sunology PLAY&nbsp;2</th>
                      <th className="text-center p-3 font-bold">Beem On 500&nbsp;Wc</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Prix d’achat', '599 €', '429 €'],
                      ['Production estimée/an', '~459 kWh', '~510 kWh'],
                      ['Autoconsommation (85 %)', '~390 kWh', '~433 kWh'],
                      ['Économies année 1', '76 €', '84 €'],
                      ['ROI (sans inflation)', '~7,9 ans', '~5,1 ans'],
                      ['ROI (avec inflation 3,3 %/an)', '7,1 ans', '4,8 ans'],
                      ['Économies cumulées 10 ans', '~870 €', '~965 €'],
                      ['Économies cumulées 25 ans', '~2 871 €', '~3 160 €'],
                    ].map(([label, play2, beem], i) => (
                      <tr
                        key={i}
                        className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}
                      >
                        <td className="p-3 font-semibold">{label}</td>
                        <td className="text-center p-3">{play2}</td>
                        <td className="text-center p-3 font-medium text-green">{beem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2">
                Le Beem g&eacute;n&egrave;re 289 € de plus sur 25 ans, mais cet avantage net suppose que les deux entreprises soient l&agrave; pour honorer leurs garanties.
              </p>
            </section>

            <AffiliateCTA
              productName="Sunology PLAY 2"
              merchantName="Sunology"
              affiliateUrl="https://sunology.eu/products/play2-kit-solaire"
              label="Voir le PLAY 2 sur Sunology"
              variant="secondary"
              position="mid"
            />

            {/* Recommandation par profil */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <div className="flex items-start gap-4 mb-3">
                    <ProductThumb
                      src="/images/produits/sunology-play-2-1.webp"
                      alt="Sunology PLAY 2"
                      href="/avis/sunology-play-2"
                      size="lg"
                    />
                    <h4 className="font-bold text-green mb-1">Choisissez Sunology si&nbsp;:</h4>
                  </div>
                  <ul className="text-sm text-charcoal-light space-y-1 mb-4">
                    <li>&rarr; Vous voulez l&apos;installation la plus simple (1 min)</li>
                    <li>&rarr; Votre balcon fait moins de 1,85 m de profondeur</li>
                    <li>&rarr; Vous pr&eacute;f&eacute;rez le WiFi natif sans boîtier</li>
                    <li>&rarr; La certification CE kit complet vous importe</li>
                    <li>&rarr; La p&eacute;rennité du SAV sur 25 ans est un crit&egrave;re</li>
                  </ul>
                  <a
                    href="https://sunology.eu/products/play2-kit-solaire"
                    target="_blank"
                    rel="sponsored noopener"
                    className="btn-affiliate inline-flex text-xs"
                  >
                    Voir le Sunology PLAY&nbsp;2 &rarr;
                  </a>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <div className="flex items-start gap-4 mb-3">
                    <ProductThumb
                      src="/images/produits/beem-on-500-1.webp"
                      alt="Beem On 500 Wc"
                      href="/avis/beem-on-500w"
                      size="lg"
                    />
                    <h4 className="font-bold text-amber-dark mb-1">Choisissez Beem si&nbsp;:</h4>
                  </div>
                  <ul className="text-sm text-charcoal-light space-y-1 mb-4">
                    <li>&rarr; Le prix est votre priorit&eacute; (170&nbsp;€ de moins)</li>
                    <li>&rarr; Vous voulez le meilleur ROI du march&eacute; (4,8 ans)</li>
                    <li>&rarr; Vous voulez payer en 10x sans frais</li>
                    <li>&rarr; Vous préf&eacute;rez déléguer les d&eacute;marches (Beem ZEN)</li>
                    <li>&rarr; Vous &ecirc;tes à l&apos;aise avec la situation financière actuelle</li>
                  </ul>
                  <a
                    href="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge"
                    target="_blank"
                    rel="sponsored noopener"
                    className="btn-affiliate inline-flex text-xs"
                  >
                    Voir le Beem On 500&nbsp;Wc &rarr;
                  </a>
                </div>
              </div>
            </section>

            {/* Le point sur la situation Beem */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le point sur la situation Beem Energy</h2>
              <p className="text-charcoal-light leading-relaxed mb-4 text-sm">
                Beem Energy a plac&eacute; en proc&eacute;dure de sauvegarde en novembre 2025. En juillet 2026, l&apos;activit&eacute; continue&nbsp;: commandes traitées, livraisons assurées, SAV opérationnel. La procédure de sauvegarde est un outil de protection de l&apos;entreprise pendant sa restructuration, pas nécessairement un signe de liquidation imminente.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4 text-sm">
                Ce que ça change concrètement&nbsp;: la garantie 25 ans ne vaut que si l&apos;entreprise existe encore dans 25 ans. Sur ce point, Sunology est objectivement plus sûr. Pour un kit à 429&nbsp;€, le risque principal est le remplacement du micro-onduleur ou de la Beembox en cas de défaillance &mdash; sur un matériel fiable, c&apos;est un risque modéré sur 5 ans.
              </p>
              <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                <p className="text-xs text-charcoal-light leading-relaxed">
                  <strong>Notre position&nbsp;:</strong> le Beem On 500&nbsp;Wc reste un excellent achat en juillet 2026. Mais si vous &ecirc;tes du genre &agrave; garder un appareil 15 ans et &agrave; avoir besoin du SAV, Sunology est le choix plus prudent. Si vous &ecirc;tes pragmatique sur le prix et que vous consid&eacute;rez le SAV comme un accessoire, Beem gagne haut la main.
                </p>
              </div>
            </section>

            {/* CTA calculateur */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-8">
              <p className="font-semibold mb-2">Quel kit est le plus rentable pour VOTRE balcon&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur compare Sunology et Beem pour votre ville, votre orientation et votre budget.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes &eacute;conomies &rarr;
              </Link>
            </div>

            <AffiliateCTA
              productName="Beem On 500 Wc"
              merchantName="Beem Energy"
              affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge"
              label="Voir le Beem On 500 Wc"
              variant="secondary"
              position="after-cta"
            />

            {/* FAQ */}
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

            {/* Articles liés */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link
                  href="/avis/sunology-play-2"
                  className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green"
                >
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY&nbsp;2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Test complet, production réelle, verdict &mdash; 8.5/10</p>
                </Link>
                <Link
                  href="/avis/beem-on-500w"
                  className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green"
                >
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500&nbsp;Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le meilleur rapport qualité-prix du marché &agrave; 429&nbsp;€</p>
                </Link>
                <Link
                  href="/comparatif/sunology-vs-beem"
                  className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green"
                >
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem (comparatif général)</h4>
                  <p className="text-xs text-charcoal-light mt-1">Vue d’ensemble des deux &eacute;cosyst&egrave;mes</p>
                </Link>
                <Link
                  href="/comparatif/meilleur-kit-solaire-2026"
                  className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green"
                >
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Sunology, Beem, Sunethic, Anker, Zendure &mdash; le comparatif complet</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2">
                <strong>M&eacute;thodologie ROI&nbsp;:</strong> tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85%, Performance Ratio 0,85, r&eacute;f&eacute;rence Lyon exposition sud.
              </p>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence&nbsp;:</strong> comparatif indépendant. Les liens vers Sunology et Beem sont des liens d&apos;affiliation.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
