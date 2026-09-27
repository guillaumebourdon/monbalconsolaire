import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';

export const metadata: Metadata = {
  title: 'Kit solaire avec batterie 2026 : comparatif stockage',
  description: 'Comparatif des kits solaires plug-and-play avec batterie en 2026 : Sunology PLAY MAX, Beem Battery, EcoFlow PowerStream. Prix, capacité, rentabilité.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/kit-solaire-batterie-2026',
  },
};

const faqData = [
  { question: 'Faut-il une batterie avec un kit solaire de balcon ?', answer: 'Non, ce n\'est pas indispensable. Sans batterie, vous consommez l\'électricité en temps réel (talon de consommation : frigo, box, veilles). Une batterie permet de stocker pour le soir mais coûte 100 à 1 400€ supplémentaires (100€ seulement entre le PLAY et le PLAY MAX), ce qui allonge le ROI si vous êtes présent en journée.' },
  { question: 'Quelle est la batterie la moins chère pour un kit solaire ?', answer: 'La Sunology VAULT (700 Wh) coûte 499€ seule, mais le plus accessible est le PLAY MAX : station 450 Wc + VAULT pour 699€, soit 100€ de plus que le kit PLAY sans batterie. C\'est la solution de stockage complète (panneau inclus) la plus abordable du marché plug-and-play.' },
  { question: 'Combien d\'heures d\'autonomie offre une batterie solaire ?', answer: 'La VAULT de Sunology (700 Wh) offre environ 5 heures d\'autonomie pour le talon de consommation (frigo + box + veilles). La STOREY (2,2 kWh) peut couvrir une soirée complète.' },
  { question: 'Une batterie solaire est-elle rentable ?', answer: 'C\'est moins évident qu\'un kit seul. L\'investissement supplémentaire (100-1 400€) ne se rentabilise que si vous augmentez significativement votre taux d\'autoconsommation. En pratique, le gain supplémentaire est de 30-60€/an, soit un ROI de 8 à 20+ ans sur la batterie seule.' },
];

export default function BatteriePage() {
  return (
    <>
      <SchemaArticle title="Kit solaire avec batterie 2026 : comparatif stockage" description="Comparatif des solutions de stockage solaire plug-and-play en 2026." url="https://monbalconsolaire.fr/comparatif/kit-solaire-batterie-2026" datePublished="2026-03-31" dateModified="2026-06-20" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kits avec batterie' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kits avec batterie' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Kit solaire avec batterie 2026 : comparatif stockage plug-and-play</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Stocker l&apos;énergie solaire pour le soir, c&apos;est tentant. Mais est-ce vraiment rentable ? Comparatif des solutions de stockage Sunology, Beem et EcoFlow.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>31 mars 2026</span><span>&middot;</span><span>10 min de lecture</span></div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
            <span className="text-stone text-sm mt-0.5">&#x2139;</span>
            <p className="text-xs text-stone leading-relaxed">
              <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
            </p>
          </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Pour la majorité des utilisateurs, <strong>un kit sans batterie est le meilleur investissement</strong>. Le talon de consommation (frigo, box, veilles) absorbe une grande partie de la production en journée. Ajoutez une batterie uniquement si vous êtes souvent absent la journée et que vous consommez principalement le soir.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Avec ou sans batterie : le calcul honnête</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Sans batterie, vous autoconsommez environ 30 à 50% de votre production solaire en temps réel (c&apos;est le talon de consommation : frigo, box internet, appareils en veille, chargeurs). Le reste est injecté gratuitement sur le réseau — vous ne le perdez pas, mais vous ne le valorisez pas non plus.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec une batterie, votre taux d&apos;autoconsommation passe à 60-80%. Le gain est réel mais modeste :</p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2">Sans batterie (kit seul)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Investissement : <span className="font-mono font-medium">599€</span> (PLAY 500 Wc)</p>
                    <p>Autoconsommation : <span className="font-mono font-medium">~40%</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-green">~40€</span></p>
                    <p>ROI : <span className="font-mono font-medium">12,5 ans</span></p>
                    <p>Éco. sur 25 ans : <span className="font-mono font-medium text-green">~1 500€</span></p>
                  </div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">Avec batterie (kit + VAULT)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Investissement : <span className="font-mono font-medium">699€</span> (PLAY MAX 450 Wc)</p>
                    <p>Autoconsommation : <span className="font-mono font-medium">~70%</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-amber-dark">~62€</span></p>
                    <p>ROI : <span className="font-mono font-medium">9,7 ans</span></p>
                    <p>Éco. sur 25 ans : <span className="font-mono font-medium text-amber-dark">~2 360€</span></p>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Dans ce scénario (foyer peu présent en journée, 1 200 kWh/kWc, PR 0,85, 0,1940 €/kWh, +3,3 %/an), la batterie ajoute ~22€/an d&apos;économies pour un surcoût de seulement 100€ depuis que le PLAY MAX est passé à 699€ : le ROI tombe de <span className="data-highlight">12,5 à 9,7 ans</span>. Si vous êtes présent en journée (85 % d&apos;autoconsommation sans batterie), l&apos;écart s&apos;inverse légèrement : 6,5 ans pour le PLAY seul contre 7,4 ans pour le PLAY MAX.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparatif des solutions de stockage</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Solution</th>
                    <th className="text-center p-3">Capacité</th>
                    <th className="text-center p-3">Prix</th>
                    <th className="text-center p-3">Prix/kWh</th>
                    <th className="text-center p-3">Autonomie*</th>
                    <th className="text-center p-3 rounded-tr-xl">Type</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Sunology VAULT', '700 Wh', '499€', '713€/kWh', '~5h', 'Nomade + plug-and-play', true],
                      ['Sunology STOREY', '2,2 kWh', '1 390€', '632€/kWh', '~15h', 'Fixe plug-and-play', false],
                      ['Beem Battery', '2,2 kWh', '~5 500€**', '2 500€/kWh', '~15h', 'Fixe plug-and-play', false],
                      ['EcoFlow PowerStream (arr\u00eat\u00e9)', '2 kWh', '~1 800\u20ac***', '900\u20ac/kWh', '~13h', 'Modulaire', false],
                      ['Bluetti Balco 260', '2,56 kWh', '849\u20ac****', '332\u20ac/kWh', '~17h', 'Tout-en-un (sans panneaux)', false],
                    ].map(([n, c, p, r, a, t, best], i) => {
                      const thumbMap: Record<string, { src: string; href: string }> = {
                        'EcoFlow PowerStream (arr\u00eat\u00e9)': { src: '/images/produits/ecoflow-powerstream-2.webp', href: '/avis/ecoflow-powerstream' },
                        'Bluetti Balco 260': { src: '/images/produits/bluetti-balco-260-front.webp', href: '/avis/bluetti-balco-260' },
                      };
                      const thumb = thumbMap[n as string];
                      return (
                      <tr key={i} className={`border-b border-border-light ${best ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold"><div className="flex items-center gap-3">{thumb && <ProductThumb src={thumb.src} alt={n as string} href={thumb.href} size="sm" />}<span>{n} {best && <span className="badge-green ml-2 text-[10px]">Meilleur prix</span>}</span></div></td>
                        <td className="text-center p-3 font-mono text-sm">{c}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{p}</td>
                        <td className="text-center p-3 font-mono text-sm">{r}</td>
                        <td className="text-center p-3">{a}</td>
                        <td className="text-center p-3 text-xs">{t}</td>
                      </tr>
                    );})}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">* Autonomie estim&eacute;e pour un talon de consommation de 140W. ** Prix du bundle kit + batterie Beem (6 190&euro; - 690&euro; pour le kit seul estim&eacute;). *** Prix du bundle batterie + micro-onduleur EcoFlow, sans panneau. **** Bluetti Balco 260 : prix du bo&icirc;tier seul, panneaux non inclus.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre sélection détaillée</h2>
              <div className="space-y-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4"><ProductThumb src="/images/produits/sunology-play-max-1.webp" alt="Sunology PLAY MAX" href="/avis/sunology-play-max" size="lg" /><div><div className="badge-green mb-2">Meilleur rapport qualité/prix</div><h3 className="font-bold text-xl">Sunology PLAY MAX</h3><p className="text-sm text-stone">Station 450 Wc + batterie VAULT 700 Wh · Plug-and-play</p></div></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-green">699 €</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le PLAY MAX est le kit + batterie le plus accessible du marché : une station Sunology de 450 Wc avec la batterie VAULT (700 Wh) intégrée pour 699€ (contre 1 179€ auparavant), soit 100€ de plus que le PLAY sans batterie. La VAULT est amovible (3,7 kg, IP65, utilisable en camping/pique-nique) et offre ~5 heures d&apos;autonomie sur le talon de consommation.</p>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points forts</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Le bundle le moins cher du marché</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Batterie amovible : utilisable en extérieur (4 ports de connexion)</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Installation identique au PLAY (batterie intégrée à la station)</li>
                  </ul>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points faibles</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> 700 Wh = seulement ~5h d&apos;autonomie (ne couvre pas une nuit complète)</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Onduleur plafonné à 450 W et cellules Li-ion (pas LFP)</li>
                  </ul>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-amber mb-2">Plus de capacité</div><h3 className="font-bold text-xl">Sunology STOREY</h3><p className="text-sm text-stone">Batterie fixe 2,2 kWh · Compatible PLAY2</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">1 390 €</div><div className="text-xs text-stone">(batterie seule)</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">La STOREY est la solution fixe de Sunology : 2,2 kWh de capacité, branchée sur une prise, elle stocke le surplus solaire pour une utilisation le soir et la nuit. C&apos;est 3x la capacité de la VAULT, avec une gestion plus intelligente de la charge/décharge.</p>
                  <p className="text-sm text-charcoal-light mt-2"><strong>Le calcul :</strong> kit PLAY 500&nbsp;W (ex-PLAY&nbsp;2, 599€) + STOREY (1 390€) = 1 989€ au total. Avec notre m&eacute;thodologie (510&nbsp;kWh/an, 95&nbsp;% d&apos;autoconsommation, Lyon sud), ~94€/an d&apos;économies la premi&egrave;re ann&eacute;e&nbsp;: ROI d&apos;environ 16 ans. C&apos;est rentable sur 25 ans (~3 565€ cumul&eacute;s) mais loin d&apos;un kit seul.</p>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4"><ProductThumb src="/images/produits/ecoflow-powerstream-2.webp" alt="EcoFlow PowerStream" href="/avis/ecoflow-powerstream" size="lg" /><div><div className="badge-amber mb-2">Arr&ecirc;t&eacute;</div><h3 className="font-bold text-xl">EcoFlow PowerStream</h3><p className="text-sm text-stone">Syst&egrave;me modulaire batterie + micro-onduleur</p></div></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">~1 800 &euro;</div><div className="text-xs text-stone">(sans panneau)</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le PowerStream d&apos;EcoFlow est une approche diff&eacute;rente : un micro-onduleur intelligent qui g&egrave;re la charge/d&eacute;charge automatiquement selon votre consommation en temps r&eacute;el. Compatible avec les batteries portables EcoFlow (DELTA, RIVER). Le syst&egrave;me est modulaire mais le co&ucirc;t total est &eacute;lev&eacute;. <strong>Mise &agrave; jour 27/09/2026&nbsp;:</strong> le PowerStream n&apos;est plus vendu par EcoFlow France, qui propose d&eacute;sormais la gamme STREAM (voir notre <Link href="/avis/ecoflow-powerstream" className="text-green hover:underline">avis PowerStream</Link> pour les alternatives).</p>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4"><ProductThumb src="/images/produits/bluetti-balco-260-front.webp" alt="Bluetti Balco 260" href="/avis/bluetti-balco-260" size="lg" /><div><div className="badge-amber mb-2">Tout-en-un</div><h3 className="font-bold text-xl">Bluetti Balco 260</h3><p className="text-sm text-stone">Onduleur SiC + batterie LFP 2,56 kWh int&eacute;gr&eacute;s &middot; IP65</p></div></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">849 &euro;</div><div className="text-xs text-stone">(sans panneaux)</div></div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4 leading-relaxed">Le Balco 260 de Bluetti int&egrave;gre onduleur, batterie et 4 MPPT dans un seul bo&icirc;tier IP65. La batterie de 2,56&nbsp;kWh est extensible jusqu&apos;&agrave; 15&nbsp;kWh. C&apos;est le meilleur prix/kWh du march&eacute; (332&nbsp;&euro;/kWh), mais les panneaux ne sont pas inclus. <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Lire notre avis complet &rarr;</Link></p>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points forts</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Meilleur prix/kWh du march&eacute; (332&nbsp;&euro;/kWh)</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Secours &eacute;lectrique 1&nbsp;200&nbsp;W en cas de coupure</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Extensible jusqu&apos;&agrave; 15&nbsp;kWh</li>
                  </ul>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points faibles</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Panneaux non inclus (co&ucirc;t total &gt;1&nbsp;100&nbsp;&euro;)</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> App Bluetti historiquement faible (refonte en cours)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict : avec ou sans batterie ?</h2>
              <div className="space-y-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-1">Pour 80% des gens → Kit seul (sans batterie)</h4>
                  <p className="text-sm text-charcoal-light">Le meilleur ROI, de loin. Commencez par un <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">kit Sunology PLAY (599€) ou Beem On 500 Wc (429€)</Link>. Vous pouvez toujours ajouter une batterie plus tard si le besoin se fait sentir.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-1">Pour les absents la journée → PLAY MAX (699€)</h4>
                  <p className="text-sm text-charcoal-light">Si vous travaillez en journée et consommez principalement le soir, le bundle PLAY MAX avec la VAULT offre un bon compromis prix/capacité.</p>
                </div>
                <div className="card-lg">
                  <h4 className="font-bold mb-1">Pour les enthousiastes → STOREY (1 989€ avec kit)</h4>
                  <p className="text-sm text-charcoal-light">Si maximiser l&apos;autoconsommation est votre priorité et que le budget n&apos;est pas un problème, la STOREY offre la meilleure capacité de stockage du marché plug-and-play.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Calculez d&apos;abord ce qu&apos;un kit seul peut vous faire économiser</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes économies →</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
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
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/guide/batterie-solaire-balcon-guide" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide : comment choisir la bonne capacité de batterie</h4>
                  <p className="text-xs text-charcoal-light mt-1">Seuils 700 Wh, 2 kWh, 5 kWh — le calcul ROI honnête selon votre profil</p>
                </Link>
                <Link href="/avis/sunology-play-max" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY MAX</h4>
                  <p className="text-xs text-charcoal-light mt-1">Kit + batterie intégrée</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation expliquée</h4>
                  <p className="text-xs text-charcoal-light mt-1">Talon, surplus, injection</p>
                </Link>
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Bluetti Balco 260</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le tout-en-un onduleur + batterie 2,56&nbsp;kWh</p>
                </Link>
                <Link href="/avis/jackery-solarvault-3-pro" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Jackery SolarVault 3 Pro</h4>
                  <p className="text-xs text-charcoal-light mt-1">Stockage LFP 2,52&nbsp;kWh &agrave; 839&nbsp;&euro; en promo</p>
                </Link>
                <Link href="/avis/zendure-solarflow-mix" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow Mix</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le tout-en-un r&eacute;sidentiel 8-50&nbsp;kWh, 4&nbsp;kW, IA Zenki</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
                <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleure batterie solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Zendure vs Bluetti Balco vs EcoFlow &mdash; tableau prix/kWh et verdict par profil</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> comparatif indépendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
