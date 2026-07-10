import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';

export const metadata: Metadata = {
  title: 'Meilleure batterie solaire balcon 2026 : comparatif',
  description: 'Comparatif batteries solaires balcon 2026 : Zendure SolarFlow, Bluetti Balco 260, EcoFlow PowerStream. Tableau prix/kWh, autonomie et verdict par profil.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/meilleure-batterie-solaire-balcon-2026',
  },
};

const faqData = [
  {
    question: 'Quelle est la meilleure batterie pour kit solaire de balcon en 2026 ?',
    answer: 'Pour le meilleur rapport prix/kWh, le Zendure SolarFlow (488 €, 1,92 kWh) est imbattable. Pour un système tout-en-un sans prise de tête, le Bluetti Balco 260 (849 €, 2,56 kWh, IP65) est le choix le plus polyvalent. Pour une garantie 10 ans, le Jackery SolarVault 3 Pro (839 € en promo, 2,52 kWh) est excellent.',
  },
  {
    question: 'Faut-il vraiment une batterie avec un kit solaire de balcon ?',
    answer: 'Non, pas nécessairement. Un kit seul (sans batterie) a un ROI de 5 à 7 ans. Ajouter une batterie allonge ce ROI de 8 à 15 ans supplémentaires sur le stockage seul. La batterie est pertinente si vous êtes absent toute la journée et consommez principalement le soir. Pour la majorité des foyers, commencer sans batterie reste le meilleur calcul.',
  },
  {
    question: 'Quelle capacité de batterie choisir pour un balcon ?',
    answer: 'Pour couvrir le talon de consommation nocturne (frigo + box + veilles ≈ 140 W), 1 kWh suffit pour 7 heures, 2 kWh pour 14 heures. En pratique, 2 à 2,5 kWh est la plage optimale pour un balcon avec 1 ou 2 panneaux : vous stockez la production de l’après-midi pour l’utiliser le soir, sans surpayer de la capacité inutilisée.',
  },
  {
    question: 'Quelle est la différence entre Zendure SolarFlow et Bluetti Balco 260 ?',
    answer: 'Ce sont deux approches différentes. Le Zendure SolarFlow est un kit micro-onduleur + batterie 1,92 kWh : vous branchez vos panneaux et injectez sur le réseau domestique. Le Bluetti Balco 260 est un système tout-en-un (onduleur SiC + batterie LFP 2,56 kWh + 4 MPPT) qui peut aussi alimenter directement des appareils en cas de coupure. Le Bluetti est plus cher (849 € vs 488 €) mais plus polyvalent.',
  },
  {
    question: 'La batterie solaire est-elle rentable pour un balcon ?',
    answer: 'La batterie allonge le ROI global. Un kit seul à 600 € est rentabilisé en 5-7 ans. Ajouter une batterie à 849 € améliore les économies d’environ 40 à 50 €/an, soit un ROI sur la batterie seule de 17 à 21 ans. C’est rentable sur 25 ans, mais moins que le kit seul. La batterie est surtout justifiée pour l’indépendance et le confort, pas pour les chiffres purs.',
  },
  {
    question: 'EcoFlow PowerStream est-il adapté au solaire de balcon ?',
    answer: 'Oui, mais le coût total est élevé. Le hub PowerStream seul coûte ~900 €, et une batterie DELTA 2 (1 kWh) ajoute ~750 €. Le bundle complet dépasse 1 600 € sans panneaux. Son avantage : si vous avez déjà une station EcoFlow ou si vous souhaitez une solution polyvalente camping/maison. Sinon, le Zendure SolarFlow ou le Bluetti Balco offrent plus de kWh pour moins cher.',
  },
];

export default function MeilleureBatterieBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Meilleure batterie solaire balcon 2026 : Zendure vs Bluetti vs EcoFlow"
        description="Comparatif complet des batteries solaires d&eacute;di&eacute;es aux kits balcon en 2026."
        url="https://monbalconsolaire.fr/comparatif/meilleure-batterie-solaire-balcon-2026"
        datePublished="2026-07-10"
        dateModified="2026-07-10"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Meilleure batterie balcon 2026' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Meilleure batterie balcon 2026' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Meilleure batterie solaire balcon 2026&nbsp;: Zendure vs Bluetti vs EcoFlow
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Batteries d&eacute;di&eacute;es au stockage balcon, pas les stations portables.
              Tableau prix/kWh, autonomie r&eacute;elle et verdict honn&ecirc;te par profil&nbsp;: budget, tout-en-un, grande capacit&eacute;.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>10 juillet 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>

            <div className="card bg-cream/50 border-border-light mt-6 py-3 px-5 flex items-start gap-3">
              <span className="text-stone text-sm mt-0.5">&#x2139;</span>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence&nbsp;:</strong> certains liens de cette page sont affili&eacute;s. Notre classement repose sur le prix/kWh, la capacit&eacute;, la compatibilit&eacute; et la garantie.
                Aucun fabricant ne nous paie pour &ecirc;tre mieux class&eacute;.{' '}
                <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</Link>
              </p>
            </div>
          </div>

          {/* Résumé rapide */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre s&eacute;lection en bref</h2>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li className="flex gap-2"><span className="text-green font-bold flex-shrink-0">&#10003;</span><span><strong>Budget serr&eacute;</strong> &rarr; <Link href="/avis/zendure-solarflow" className="text-green hover:underline">Zendure SolarFlow</Link> (488&nbsp;&euro;, 1,92&nbsp;kWh, 254&nbsp;&euro;/kWh)</span></li>
              <li className="flex gap-2"><span className="text-green font-bold flex-shrink-0">&#10003;</span><span><strong>Tout-en-un plug-and-play</strong> &rarr; <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Bluetti Balco 260</Link> (849&nbsp;&euro;, 2,56&nbsp;kWh, IP65)</span></li>
              <li className="flex gap-2"><span className="text-green font-bold flex-shrink-0">&#10003;</span><span><strong>Garantie 10 ans</strong> &rarr; <Link href="/avis/jackery-solarvault-3-pro" className="text-green hover:underline">Jackery SolarVault 3 Pro</Link> (839&nbsp;&euro; en promo, 2,52&nbsp;kWh)</span></li>
              <li className="flex gap-2"><span className="text-amber-dark font-bold flex-shrink-0">&#9888;</span><span><strong>Modulaire EcoFlow</strong> &rarr; pertinent uniquement si vous avez d&eacute;j&agrave; une station DELTA</span></li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Section 1 : Pourquoi une batterie dédiée ? */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Batterie balcon vs batterie portable&nbsp;: la diff&eacute;rence</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                On distingue deux cat&eacute;gories&nbsp;: les <strong>stations portables</strong> (EcoFlow RIVER, Bluetti EB3A, Jackery Explorer&hellip;) con&ccedil;ues pour le camping et
                les <strong>batteries d&eacute;di&eacute;es au stockage solaire r&eacute;sidentiel</strong>. Ce comparatif concerne exclusivement la deuxi&egrave;me cat&eacute;gorie&nbsp;:
                des syst&egrave;mes fix&eacute;s ou semi-fixes, con&ccedil;us pour absorber la production de vos panneaux balcon et la restituer automatiquement le soir.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-stone/20 bg-cream/50">
                  <h4 className="font-bold text-sm mb-2 text-stone">&#10007; On exclut</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li>&bull; Stations portables (RIVER, EB3A, Explorer&hellip;)</li>
                    <li>&bull; Sunology VAULT 700&nbsp;Wh (nomade)</li>
                    <li>&bull; Batteries maison haute tension (&gt;10&nbsp;kWh)</li>
                  </ul>
                </div>
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-sm mb-2 text-green">&#10003; On compare</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li>&bull; Zendure SolarFlow (kit onduleur + batterie)</li>
                    <li>&bull; Bluetti Balco 260 (tout-en-un)</li>
                    <li>&bull; Jackery SolarVault 3 Pro</li>
                    <li>&bull; EcoFlow PowerStream + DELTA 2</li>
                    <li>&bull; Sunology STOREY (fixe)</li>
                    <li>&bull; Zendure SolarFlow Mix (r&eacute;sidentiel)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tableau comparatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau comparatif batteries balcon 2026</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Batterie</th>
                      <th className="text-center p-3">Capacit&eacute;</th>
                      <th className="text-center p-3">Prix</th>
                      <th className="text-center p-3">Prix/kWh</th>
                      <th className="text-center p-3">Autonomie*</th>
                      <th className="text-center p-3">Garantie</th>
                      <th className="text-center p-3 rounded-tr-xl">Panneaux</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: 'Zendure SolarFlow',
                        href: '/avis/zendure-solarflow',
                        img: '/images/produits/zendure-solarflow-front.webp',
                        capacity: '1,92 kWh',
                        price: '488 €',
                        pricePerKwh: '254 €/kWh',
                        autonomy: '~13h',
                        warranty: '5 ans',
                        panels: 'Inclus (800 W)',
                        best: true,
                        badge: 'Meilleur prix/kWh',
                      },
                      {
                        name: 'Bluetti Balco 260',
                        href: '/avis/bluetti-balco-260',
                        img: '/images/produits/bluetti-balco-260-front.webp',
                        capacity: '2,56 kWh',
                        price: '849 €',
                        pricePerKwh: '332 €/kWh',
                        autonomy: '~18h',
                        warranty: '5 ans',
                        panels: 'Non inclus',
                        best: false,
                        badge: '',
                      },
                      {
                        name: 'Jackery SolarVault 3 Pro',
                        href: '/avis/jackery-solarvault-3-pro',
                        img: '/images/produits/jackery-solarvault-3-pro-1.webp',
                        capacity: '2,52 kWh',
                        price: '~839 €',
                        pricePerKwh: '333 €/kWh',
                        autonomy: '~18h',
                        warranty: '10 ans',
                        panels: 'Non inclus',
                        best: false,
                        badge: '',
                      },
                      {
                        name: 'Sunology STOREY',
                        href: '/avis/sunology-play-max',
                        img: null,
                        capacity: '2,2 kWh',
                        price: '1 390 €',
                        pricePerKwh: '632 €/kWh',
                        autonomy: '~15h',
                        warranty: '2 ans',
                        panels: 'Non inclus',
                        best: false,
                        badge: '',
                      },
                      {
                        name: 'EcoFlow PowerStream + DELTA 2',
                        href: '/avis/ecoflow-powerstream',
                        img: '/images/produits/ecoflow-powerstream-2.webp',
                        capacity: '1 kWh',
                        price: '~1 800 €',
                        pricePerKwh: '~1 800 €/kWh',
                        autonomy: '~7h',
                        warranty: '5 ans',
                        panels: 'Non inclus',
                        best: false,
                        badge: '',
                      },
                      {
                        name: 'Zendure SolarFlow Mix 3000',
                        href: '/avis/zendure-solarflow-mix',
                        img: null,
                        capacity: '8 kWh',
                        price: '2 039 €',
                        pricePerKwh: '255 €/kWh',
                        autonomy: '~55h',
                        warranty: '10 ans',
                        panels: 'Non inclus',
                        best: false,
                        badge: '',
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-border-light ${row.best ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}
                      >
                        <td className="p-3 font-semibold">
                          <div className="flex items-center gap-3">
                            {row.img && (
                              <ProductThumb src={row.img} alt={row.name} href={row.href} size="sm" />
                            )}
                            <span>
                              <Link href={row.href} className="hover:text-green transition-colors">
                                {row.name}
                              </Link>
                              {row.best && <span className="badge-green ml-2 text-[10px]">{row.badge}</span>}
                            </span>
                          </div>
                        </td>
                        <td className="text-center p-3 font-mono text-sm">{row.capacity}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{row.price}</td>
                        <td className={`text-center p-3 font-mono text-sm ${row.best ? 'text-green font-bold' : ''}`}>{row.pricePerKwh}</td>
                        <td className="text-center p-3 text-sm">{row.autonomy}</td>
                        <td className="text-center p-3 text-sm">{row.warranty}</td>
                        <td className="text-center p-3 text-xs">{row.panels}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                * Autonomie estim&eacute;e pour un talon de consommation de 140&nbsp;W (frigo + box + veilles). Prix TTC France, juillet 2026.
                Zendure SolarFlow Mix 3000 : prix du coffret seul (panneaux et bo&icirc;tier ext&eacute;rieur en sus).
              </p>
            </section>

            {/* Analyse produit par produit */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Analyse d&eacute;taill&eacute;e</h2>
              <div className="space-y-6">

                {/* Zendure SolarFlow */}
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="lg" />
                      <div>
                        <div className="badge-green mb-2">Meilleur rapport qualit&eacute;/prix</div>
                        <h3 className="font-bold text-xl">Zendure SolarFlow</h3>
                        <p className="text-sm text-stone">Micro-onduleur 800&nbsp;W + batterie LFP 1,92&nbsp;kWh &middot; Kit complet</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold text-green">488&nbsp;&euro;</div>
                      <div className="text-xs text-stone">kit complet (panneaux non inclus)</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
                    Le Zendure SolarFlow reste notre r&eacute;f&eacute;rence budget en 2026. Pour 488&nbsp;&euro;, vous obtenez un micro-onduleur 800&nbsp;W et une batterie LFP 1,92&nbsp;kWh&nbsp;:
                    le meilleur prix/kWh du march&eacute; balcon (&agrave; 254&nbsp;&euro;/kWh). La batterie se charge via vos panneaux le jour et d&eacute;charge automatiquement le soir.
                    L&apos;application Zendure permet de programmer des plages horaires et de suivre la production en temps r&eacute;el.
                    <Link href="/avis/zendure-solarflow" className="text-green hover:underline ml-1">Lire notre avis complet &rarr;</Link>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-bold text-sm mb-2">Points forts</h4>
                      <ul className="space-y-1 text-sm text-charcoal-light">
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> Meilleur prix/kWh du march&eacute; (254&nbsp;&euro;/kWh)</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> Kit complet avec micro-onduleur 800&nbsp;W inclus</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> Batterie extensible (jusqu&apos;&agrave; 3 modules)</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> App Zendure fiable et compl&egrave;te</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">Points faibles</h4>
                      <ul className="space-y-1 text-sm text-charcoal-light">
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> 1,92&nbsp;kWh : couvre ~13h de talon (pas la nuit compl&egrave;te)</li>
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Pas IP65 (usage int&eacute;rieur ou abrit&eacute; recommand&eacute;)</li>
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Garantie 5 ans (vs 10 ans pour Jackery)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bluetti Balco 260 */}
                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <ProductThumb src="/images/produits/bluetti-balco-260-front.webp" alt="Bluetti Balco 260" href="/avis/bluetti-balco-260" size="lg" />
                      <div>
                        <div className="badge-amber mb-2">Tout-en-un IP65</div>
                        <h3 className="font-bold text-xl">Bluetti Balco 260</h3>
                        <p className="text-sm text-stone">Onduleur SiC + batterie LFP 2,56&nbsp;kWh + 4 MPPT &middot; IP65</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold text-amber-dark">849&nbsp;&euro;</div>
                      <div className="text-xs text-stone">(panneaux non inclus)</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
                    Le Bluetti Balco 260 est la solution la plus compl&egrave;te du march&eacute; en 2026. Un seul bo&icirc;tier IP65 (47,6&nbsp;&times;&nbsp;26&nbsp;&times;&nbsp;33,6&nbsp;cm, 28,5&nbsp;kg) int&egrave;gre
                    onduleur SiC, batterie LFP 2,56&nbsp;kWh et 4 entr&eacute;es MPPT. Rendement annonc&eacute; de 96,1&nbsp;% et consommation en veille de seulement 4,5&nbsp;W.
                    Il peut alimenter jusqu&apos;&agrave; 2&nbsp;300&nbsp;W en mode bypass et secourir votre logement en cas de coupure.
                    Capacit&eacute; extensible jusqu&apos;&agrave; 15&nbsp;kWh.
                    <Link href="/avis/bluetti-balco-260" className="text-green hover:underline ml-1">Lire notre avis complet &rarr;</Link>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-bold text-sm mb-2">Points forts</h4>
                      <ul className="space-y-1 text-sm text-charcoal-light">
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> IP65 : utilisable en ext&eacute;rieur</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> Secours &eacute;lectrique 2&nbsp;300&nbsp;W en cas de coupure</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> 4 entr&eacute;es MPPT (compatible 4 panneaux ind&eacute;pendants)</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> Rendement 96,1&nbsp;% (meilleur de sa cat&eacute;gorie)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">Points faibles</h4>
                      <ul className="space-y-1 text-sm text-charcoal-light">
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Panneaux non inclus (co&ucirc;t total &gt; 1&nbsp;100&nbsp;&euro;)</li>
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> 28,5&nbsp;kg : installation non triviale</li>
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> App Bluetti en cours d&apos;am&eacute;lioration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Jackery SolarVault 3 Pro */}
                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <ProductThumb src="/images/produits/jackery-solarvault-3-pro-1.webp" alt="Jackery SolarVault 3 Pro" href="/avis/jackery-solarvault-3-pro" size="lg" />
                      <div>
                        <div className="badge-amber mb-2">Garantie 10 ans</div>
                        <h3 className="font-bold text-xl">Jackery SolarVault 3 Pro</h3>
                        <p className="text-sm text-stone">Hub batterie LFP 2,52&nbsp;kWh &middot; 4 MPPT &middot; 4&nbsp;000&nbsp;W</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold text-amber-dark">~839&nbsp;&euro;</div>
                      <div className="text-xs text-stone">(promo Prime Day)</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
                    Le Jackery SolarVault 3 Pro se distingue par sa garantie de 10 ans, la plus longue du march&eacute; balcon.
                    Ses 2,52&nbsp;kWh LFP (4 entr&eacute;es MPPT compatibles jusqu&apos;&agrave; 4&nbsp;000&nbsp;W de panneaux) en font une solution
                    solide pour un balcon avec plusieurs panneaux. En promo, &agrave; 839&nbsp;&euro;, le prix/kWh est quasi-identique au Bluetti Balco (333&nbsp;&euro;/kWh)
                    mais avec une garantie double.
                    <Link href="/avis/jackery-solarvault-3-pro" className="text-green hover:underline ml-1">Lire notre avis complet &rarr;</Link>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-bold text-sm mb-2">Points forts</h4>
                      <ul className="space-y-1 text-sm text-charcoal-light">
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> Garantie 10 ans (meilleure du march&eacute;)</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> 4 MPPT, compatible jusqu&apos;&agrave; 4&nbsp;000&nbsp;W solaire</li>
                        <li className="flex gap-2"><span className="text-green font-bold">+</span> Rapport capacit&eacute;/prix excellent en promo</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">Points faibles</h4>
                      <ul className="space-y-1 text-sm text-charcoal-light">
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Prix variable selon les promos (peut monter &agrave; ~999&nbsp;&euro;)</li>
                        <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> &Eacute;cosyst&egrave;me moins int&eacute;gr&eacute; que Bluetti ou Zendure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* EcoFlow PowerStream */}
                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <ProductThumb src="/images/produits/ecoflow-powerstream-2.webp" alt="EcoFlow PowerStream" href="/avis/ecoflow-powerstream" size="lg" />
                      <div>
                        <div className="badge-amber mb-2">Modulaire</div>
                        <h3 className="font-bold text-xl">EcoFlow PowerStream + DELTA 2</h3>
                        <p className="text-sm text-stone">Micro-onduleur intelligent + batterie DELTA 2 (1&nbsp;kWh)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold text-amber-dark">~1&nbsp;800&nbsp;&euro;</div>
                      <div className="text-xs text-stone">(bundle sans panneaux)</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
                    Le PowerStream d&apos;EcoFlow prend une approche diff&eacute;rente&nbsp;: un hub intelligent qui pilote la charge/d&eacute;charge de n&apos;importe quelle
                    station EcoFlow (DELTA, RIVER) au kWh pr&egrave;s. En 2026, la mise &agrave; jour logicielle permet d&apos;ajuster la puissance inject&eacute;e par paliers d&apos;1&nbsp;W.
                    Pertinent si vous avez d&eacute;j&agrave; une station EcoFlow ou si vous cherchez une solution polyvalente (camping + maison).
                    Sinon, le co&ucirc;t total (&gt;1&nbsp;800&nbsp;&euro; pour seulement 1&nbsp;kWh) est difficile &agrave; justifier face &agrave; Zendure ou Bluetti.
                    <Link href="/avis/ecoflow-powerstream" className="text-green hover:underline ml-1">Lire notre avis complet &rarr;</Link>
                  </p>
                </div>

                {/* Sunology STOREY */}
                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="badge-amber mb-2">Sp&eacute;cifique Sunology</div>
                      <h3 className="font-bold text-xl">Sunology STOREY</h3>
                      <p className="text-sm text-stone">Batterie fixe 2,2&nbsp;kWh &middot; Compatible PLAY2 uniquement</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold text-amber-dark">1&nbsp;390&nbsp;&euro;</div>
                      <div className="text-xs text-stone">(batterie seule)</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
                    La STOREY est la solution fixe de Sunology, con&ccedil;ue sp&eacute;cifiquement pour le PLAY2. 2,2&nbsp;kWh, branchement simple sur prise &eacute;lectrique,
                    gestion int&eacute;gr&eacute;e avec le kit PLAY2. Mais &agrave; 1&nbsp;390&nbsp;&euro; pour 2,2&nbsp;kWh (soit 632&nbsp;&euro;/kWh), c&apos;est de loin le co&ucirc;t par kWh le plus &eacute;lev&eacute; du comparatif.
                    &Agrave; r&eacute;server aux utilisateurs d&eacute;j&agrave; &eacute;quip&eacute;s en Sunology qui veulent rester dans l&apos;&eacute;cosyst&egrave;me.
                  </p>
                </div>

                {/* Zendure SolarFlow Mix */}
                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="badge-amber mb-2">R&eacute;sidentiel</div>
                      <h3 className="font-bold text-xl">Zendure SolarFlow Mix 3000</h3>
                      <p className="text-sm text-stone">Batterie r&eacute;sidentielle 8&nbsp;kWh LFP &middot; Bidirectionnel &middot; IA Zenki</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-2xl font-bold text-amber-dark">2&nbsp;039&nbsp;&euro;</div>
                      <div className="text-xs text-stone">(coffret seul, avril 2026)</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
                    Le SolarFlow Mix est clairement dimensionn&eacute; pour une maison ou un grand appartement (&gt;7&nbsp;000&nbsp;kWh/an).
                    Pour un balcon avec 1 ou 2 panneaux produisant 400 &agrave; 600&nbsp;kWh/an, 8&nbsp;kWh de stockage est surdimensionn&eacute; &mdash;
                    vous ne rempliriez jamais la batterie en une journ&eacute;e. En revanche, le prix/kWh &agrave; 255&nbsp;&euro; reste excellent,
                    et la garantie 10 ans est s&eacute;duisante pour ceux qui prot&egrave;tent d&apos;ores et d&eacute;j&agrave; une installation compl&egrave;te
                    (multi-panneaux toiture ou grande terrasse avec 2&nbsp;kWc+).
                    <Link href="/avis/zendure-solarflow-mix" className="text-green hover:underline ml-1">Notre avis complet &rarr;</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* Calcul ROI honnête */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul ROI honn&ecirc;te</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Une batterie am&eacute;liore le taux d&apos;autoconsommation en passant de ~40&nbsp;% (sans batterie) &agrave; ~75&nbsp;% (avec batterie 2&nbsp;kWh+).
                Mais pour un kit 450&nbsp;W produisant ~460&nbsp;kWh/an &agrave; Lyon, le gain annuel reste modeste&nbsp;:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2 text-sm">Sans batterie</h4>
                  <div className="space-y-1 text-sm text-charcoal-light font-mono">
                    <p>Autoconsommation&nbsp;: 40&nbsp;%</p>
                    <p>&Eacute;conomies/an&nbsp;: <span className="text-green font-bold">~97&nbsp;&euro;</span></p>
                    <p>ROI kit seul&nbsp;: <span className="text-green font-bold">~5,4 ans</span></p>
                  </div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2 text-sm">Kit + Zendure SolarFlow</h4>
                  <div className="space-y-1 text-sm text-charcoal-light font-mono">
                    <p>Autoconsommation&nbsp;: ~65&nbsp;%</p>
                    <p>&Eacute;conomies/an&nbsp;: <span className="text-amber-dark font-bold">~127&nbsp;&euro;</span></p>
                    <p>ROI batterie seule&nbsp;: <span className="text-amber-dark font-bold">~16 ans</span></p>
                  </div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2 text-sm">Kit + Bluetti Balco</h4>
                  <div className="space-y-1 text-sm text-charcoal-light font-mono">
                    <p>Autoconsommation&nbsp;: ~75&nbsp;%</p>
                    <p>&Eacute;conomies/an&nbsp;: <span className="text-amber-dark font-bold">~145&nbsp;&euro;</span></p>
                    <p>ROI batterie seule&nbsp;: <span className="text-amber-dark font-bold">~18 ans</span></p>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                <strong>Conclusion&nbsp;:</strong> la batterie allonge significativement le ROI. Sur 25 ans avec une inflation tarifaire de 3,3&nbsp;%/an (donn&eacute;es CRE),
                le gain cumul&eacute; reste positif, mais la batterie seule met 15 &agrave; 20 ans &agrave; se rentabiliser.
                La justification est avant tout le confort et l&apos;ind&eacute;pendance, pas le calcul pur.
                Lisez notre <Link href="/guide/batterie-solaire-balcon-guide" className="text-green hover:underline">guide complet batterie solaire balcon</Link> pour les d&eacute;tails.
              </p>
            </section>

            {/* Verdict par profil */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Verdict par profil</h2>
              <div className="space-y-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-1">Budget &lt;500&nbsp;&euro; &rarr; Zendure SolarFlow</h4>
                  <p className="text-sm text-charcoal-light">Meilleur prix/kWh du march&eacute;. Kit complet avec micro-onduleur inclus. Id&eacute;al pour un premier pas dans le stockage solaire sans surpayer.</p>
                </div>
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-1">Tout-en-un sans installation complexe &rarr; Bluetti Balco 260</h4>
                  <p className="text-sm text-charcoal-light">Un seul bo&icirc;tier IP65 qui fait tout. Pose en ext&eacute;rieur, 4 MPPT, secours &eacute;lectrique. Le choix le plus polyvalent si le budget permet 849&nbsp;&euro;.</p>
                </div>
                <div className="card-lg">
                  <h4 className="font-bold mb-1">Garantie maximale &rarr; Jackery SolarVault 3 Pro</h4>
                  <p className="text-sm text-charcoal-light">10 ans de garantie, 2,52&nbsp;kWh LFP, ~839&nbsp;&euro; en promo. Pour ceux qui veulent installer et ne plus y penser pendant une d&eacute;cennie.</p>
                </div>
                <div className="card-lg">
                  <h4 className="font-bold mb-1">D&eacute;j&agrave; &eacute;quip&eacute; EcoFlow &rarr; PowerStream</h4>
                  <p className="text-sm text-charcoal-light">Si vous avez une station DELTA ou RIVER, ajoutez simplement le hub PowerStream (~900&nbsp;&euro;) pour transformer votre station en batterie r&eacute;sidentielle.</p>
                </div>
                <div className="card-lg border-stone/20 bg-cream/50">
                  <h4 className="font-bold text-stone mb-1">Maison / grande terrasse &rarr; Zendure SolarFlow Mix</h4>
                  <p className="text-sm text-charcoal-light">Si votre installation d&eacute;passe 1&nbsp;kWc de panneaux ou si vous consommez &gt;5&nbsp;000&nbsp;kWh/an, le Mix 3000 &agrave; 2&nbsp;039&nbsp;&euro; avec 8&nbsp;kWh est la seule solution &agrave; prix/kWh comp&eacute;titif (&lt;260&nbsp;&euro;/kWh).</p>
                </div>
              </div>
            </section>

            {/* CTA calculateur */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-1">Avant d&apos;investir dans une batterie, calculez ce qu&apos;un kit seul vous rapporte</p>
              <p className="text-sm text-charcoal-light mb-3">Notre calculateur compare les ROI kit seul vs kit + batterie selon votre profil</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-1">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

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
                <Link href="/guide/batterie-solaire-balcon-guide" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide&nbsp;: choisir la bonne capacit&eacute; de batterie</h4>
                  <p className="text-xs text-charcoal-light mt-1">Seuils 700&nbsp;Wh, 2&nbsp;kWh, 5&nbsp;kWh &mdash; le calcul ROI par profil</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Bundles complets (kit + batterie) : PLAY MAX, EcoFlow, Beem Battery</p>
                </Link>
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Bluetti Balco 260</h4>
                  <p className="text-xs text-charcoal-light mt-1">Test complet du tout-en-un onduleur + batterie LFP 2,56&nbsp;kWh IP65</p>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le meilleur prix/kWh du march&eacute; balcon &agrave; 254&nbsp;&euro;/kWh</p>
                </Link>
                <Link href="/avis/zendure-solarflow-mix" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow Mix</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le stockage r&eacute;sidentiel 8&ndash;50&nbsp;kWh avec IA Zenki</p>
                </Link>
                <Link href="/avis/sunology-play-max" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY MAX</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le bundle kit + batterie VAULT 700&nbsp;Wh le moins cher du march&eacute;</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie&nbsp;:</strong> tarif &eacute;lectrique 0,1940&nbsp;&euro;/kWh (EDF TRV juillet 2026), inflation 3,3&nbsp;%/an (CRE),
                autoconsommation 85&nbsp;% sans batterie / 95&nbsp;% avec batterie, Performance Ratio 0,85, r&eacute;f&eacute;rence Lyon exposition sud, dur&eacute;e 25 ans.
                Prix TTC constat&eacute;s en juillet 2026 sur les sites officiels des marques.
                Comparatif ind&eacute;pendant&nbsp;&mdash; <Link href="/a-propos" className="text-green hover:underline">en savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
