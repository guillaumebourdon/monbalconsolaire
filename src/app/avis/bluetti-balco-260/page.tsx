import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Bluetti Balco 260 avis 2026 : le tout-en-un onduleur + batterie',
  description: 'Avis détaillé sur le Bluetti Balco 260 : batterie LFP 2,56 kWh + onduleur intégré, 849€ sans panneaux. Test complet, specs, comparatif et verdict honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/bluetti-balco-260',
  },
};

const faqData = [
  { question: 'Le Bluetti Balco 260 inclut-il des panneaux solaires ?', answer: 'Non. Le Balco 260 est un boîtier onduleur + batterie. Les panneaux solaires sont à acheter séparément. Il accepte jusqu\'à 2 400 W d\'entrée solaire via 4 MPPT, soit 4 à 6 panneaux classiques de 400-500 Wc.' },
  { question: 'Quelle est la capacité de la batterie du Balco 260 ?', answer: 'La batterie intégrée est de 2,56 kWh en LFP (lithium fer phosphate). Elle est extensible jusqu\'à 15 kWh avec des modules BC260 supplémentaires empilables.' },
  { question: 'Le Balco 260 est-il étanche ?', answer: 'Oui. Il est certifié IP65, donc résistant à la pluie et à la poussière. Il peut rester en extérieur toute l\'année, y compris sur un balcon exposé. La batterie intègre un chauffage pour fonctionner en hiver.' },
  { question: 'Bluetti Balco 260 vs Zendure SolarFlow : lequel choisir ?', answer: 'Le Zendure SolarFlow reste plus abordable (488€ avec panneaux 840 Wc) et a une app plus mature. Le Balco 260 a une plus grosse batterie (2,56 vs 1,92 kWh) et accepte plus de solaire (2 400 W vs 1 200 W). Si le budget est serré : Zendure. Si vous voulez de la capacité et de l\'évolutivité : Bluetti.' },
  { question: 'Peut-on utiliser le Balco 260 en cas de coupure de courant ?', answer: 'Oui. Le Balco 260 dispose d\'une sortie off-grid de 1 200 W (bypass 2 300 W). En cas de coupure, il peut alimenter directement vos appareils via sa prise de secours, ce que ne font pas les onduleurs classiques plug-and-play.' },
];

export default function BluettiBalco260AvisPage() {
  return (
    <>
      <SchemaArticle title="Bluetti Balco 260 avis : le tout-en-un onduleur + batterie" description="Avis détaillé sur le Bluetti Balco 260 en 2026." url="https://monbalconsolaire.fr/avis/bluetti-balco-260" datePublished="2026-06-20" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Bluetti Balco 260" brand="Bluetti" description="Système solaire balcon tout-en-un : onduleur SiC + batterie LFP 2,56 kWh + 4 MPPT. IP65, extensible à 15 kWh." price={849} ratingValue={7} ratingCount={1} url="https://monbalconsolaire.fr/avis/bluetti-balco-260" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Bluetti Balco 260' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Bluetti Balco 260' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Bluetti Balco 260 avis : le tout-en-un onduleur + batterie (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Bluetti d&eacute;barque sur le march&eacute; du solaire de balcon avec un concept diff&eacute;rent : un bo&icirc;tier unique qui int&egrave;gre onduleur, batterie 2,56&nbsp;kWh et 4&nbsp;MPPT. Panneaux non inclus, &agrave; partir de 849&nbsp;&euro;.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>20 juin 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Bluetti"
            name="Balco 260"
            power="2 400 W solaire"
            price="849 €"
            score="7/10"
            tagline="Tout-en-un onduleur + batterie 2,56 kWh. Panneaux non inclus."
            affiliateUrl="https://fr.bluettipower.eu/pages/bluetti-balco-260"
            affiliateLabel="Voir sur le site Bluetti"
            accentColor="amber"
            image="/images/produits/bluetti-balco-260-front.webp"
            imageAlt="Bluetti Balco 260 - boîtier onduleur + batterie LFP vue de face"
          />
          <p className="text-xs text-stone mt-2 italic">Prix annonc&eacute; en juin 2026 &middot; Panneaux solaires non inclus</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation du Bluetti Balco 260</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Bluetti, g&eacute;ant chinois des stations d&apos;&eacute;nergie portables, arrive sur le solaire de balcon avec une approche originale. L&agrave; o&ugrave; Sunology, Beem ou Zendure vendent des kits &laquo;&nbsp;panneau + onduleur&nbsp;&raquo;, Bluetti propose un bo&icirc;tier tout-en-un qui combine onduleur SiC, batterie LFP 2,56&nbsp;kWh, 4&nbsp;MPPT et secours &eacute;lectrique. Vous branchez vos propres panneaux.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le concept est s&eacute;duisant : un seul appareil compact (47,6 &times; 26 &times; 33,6&nbsp;cm) qui g&egrave;re tout. Mais &agrave; 849&nbsp;&euro; <strong>sans panneaux</strong>, le co&ucirc;t total grimpe vite. Ajoutez 2 panneaux de 500&nbsp;Wc (&sim;200-300&nbsp;&euro;) et vous d&eacute;passez les 1&nbsp;100&nbsp;&euro; pour un syst&egrave;me complet.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '2,56 kWh', l: 'Batterie LFP' },
                  { v: '849 €', l: 'Prix (sans panneaux)' },
                  { v: '10 ans', l: 'Garantie' },
                  { v: 'IP65', l: 'Étanchéité' },
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
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Batterie', '2,56 kWh LFP, extensible à 15 kWh'],
                      ['Entrée solaire', '2 400 W max, 4 canaux MPPT'],
                      ['Injection réseau', '800 W max'],
                      ['Sortie off-grid', '1 200 W (bypass 2 300 W)'],
                      ['Entrée AC', '1 100 W (charge secteur)'],
                      ['Onduleur', 'SiC (carbure de silicium), rendement 96,1%'],
                      ['Dimensions', '476 × 260 × 336,3 mm'],
                      ['Poids', '28,5 kg'],
                      ['Étanchéité', 'IP65 (pluie, poussière)'],
                      ['Chauffage batterie', 'Intégré (fonctionnement hiver)'],
                      ['Garantie', '10 ans'],
                      ['Veille', '4,5 W'],
                    ].map(([label, value], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3 font-semibold text-charcoal whitespace-nowrap">{label}</td>
                        <td className="py-2 px-3 text-charcoal-light">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Vrai tout-en-un : onduleur + batterie + MPPT', d: 'Un seul boîtier remplace micro-onduleur, batterie externe et hub de charge. Moins de câbles, moins de points de défaillance. C\'est l\'approche la plus intégrée du marché.' },
                  { t: 'Batterie 2,56 kWh extensible à 15 kWh', d: 'La batterie LFP de base (2,56 kWh) couvre 3-4h de consommation moyenne. Vous pouvez empiler des modules BC260 pour monter à 15 kWh, de quoi couvrir une nuit entière ou plus.' },
                  { t: 'Secours électrique en cas de coupure', d: 'La sortie off-grid de 1 200 W (bypass 2 300 W) permet d\'alimenter vos appareils en cas de coupure secteur. C\'est un vrai avantage face aux kits classiques qui s\'arrêtent sans réseau.' },
                  { t: '4 MPPT pour 2 400 W d\'entrée solaire', d: 'Vous pouvez connecter 4 à 6 panneaux sur 4 trackers indépendants. Chaque panneau est optimisé séparément : si un est à l\'ombre, les autres ne sont pas affectés.' },
                  { t: 'IP65 avec chauffage batterie intégré', d: 'Le boîtier peut rester dehors toute l\'année. Le chauffage intégré maintient la batterie en température l\'hiver, là où d\'autres systèmes perdent en capacité par grand froid.' },
                  { t: 'Onduleur SiC haut rendement (96,1%)', d: 'Les onduleurs au carbure de silicium ont un meilleur rendement et une durée de vie supérieure aux onduleurs silicium classiques. Moins de pertes de conversion = plus d\'économies.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Bluetti Balco 260" merchantName="Bluetti" affiliateUrl="https://fr.bluettipower.eu/pages/bluetti-balco-260" label="Voir sur Bluetti" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Panneaux non inclus : le coût total grimpe vite', d: 'À 849€ sans panneaux, ajoutez 200-300€ pour 2 panneaux de 500 Wc. Le coût total dépasse 1 100€, soit 2 à 3 fois le prix d\'un kit Beem On 500 Wc (429€ tout compris). La comparaison n\'est pas directe (ici vous avez une batterie), mais le ticket d\'entrée est élevé.' },
                  { t: 'Injection réseau limitée à 800 W', d: 'En France, la limite légale est 900 W. Le Balco 260 s\'arrête à 800 W d\'injection. C\'est suffisant pour la plupart des usages, mais vous n\'exploitez pas le maximum autorisé.' },
                  { t: 'App Bluetti historiquement faible', d: 'L\'application mobile Bluetti a longtemps été un point noir : interface datée, bugs fréquents. Bluetti annonce une refonte complète pour 2026, mais il faudra juger sur pièces. C\'est un point de vigilance.' },
                  { t: 'Arrivée tardive sur un marché mature', d: 'Zendure, EcoFlow et Anker sont sur le segment batterie + solaire depuis 2-3 ans. Bluetti arrive avec un produit solide mais sans écosystème installé en France (réseau de revendeurs, communauté, retours terrain).' },
                  { t: 'Poids de 28,5 kg', d: 'C\'est lourd pour un boîtier de balcon. L\'installation nécessite d\'être deux, surtout en étage. Et contrairement à un panneau plat, la forme compacte rend le transport plus encombrant.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Bluetti Balco 260" merchantName="Bluetti" affiliateUrl="https://fr.bluettipower.eu/pages/bluetti-balco-260" label="Vérifier la disponibilité" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Bluetti Balco 260 vs la concurrence (syst&egrave;mes avec batterie)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Syst&egrave;me</th>
                      <th className="text-left py-2 px-3 font-bold">Batterie</th>
                      <th className="text-left py-2 px-3 font-bold">Prix</th>
                      <th className="text-left py-2 px-3 font-bold">Panneaux</th>
                      <th className="text-left py-2 px-3 font-bold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Bluetti Balco 260', '2,56 kWh', '849 €', 'Non inclus', '7/10', true],
                      ['Zendure SolarFlow', '1,92 kWh', '488 €', '840 Wc inclus', '8.5/10', false],
                      ['EcoFlow PowerStream', '1-2 kWh', '599 €+', 'Option', '8/10', false],
                      ['Sunology PLAY MAX', '0,7 kWh', '1 179 €', '480 Wc inclus', '7/10', false],
                    ].map(([name, battery, price, panels, score, highlight], i) => (
                      <tr key={i} className={highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3">{name as string}</td>
                        <td className="py-2 px-3">{battery as string}</td>
                        <td className="py-2 px-3">{price as string}</td>
                        <td className="py-2 px-3">{panels as string}</td>
                        <td className="py-2 px-3">{score as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute;s en juin 2026. Le Balco 260 n&eacute;cessite l&apos;achat de panneaux s&eacute;par&eacute;ment.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce syst&egrave;me soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI solaire &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; : le calcul est serr&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec le Balco 260, la rentabilit&eacute; d&eacute;pend fortement de votre usage. L&apos;avantage de la batterie : vous stockez le surplus du jour pour le consommer le soir, ce qui booste votre taux d&apos;autoconsommation de 85% &agrave; 95%+.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Prenons un sc&eacute;nario avec 2 panneaux de 500&nbsp;Wc (co&ucirc;t total &sim;1&nbsp;100&nbsp;&euro;) :</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '~820 kWh', l: 'Production/an' },
                  { v: '~150 €', l: 'Économies/an' },
                  { v: '~7,3 ans', l: 'ROI estimé' },
                  { v: '~2 700 €', l: 'Gains sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">Le ROI est plus long qu&apos;un kit sans batterie (4-5 ans pour un <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link>). Mais la batterie permet de consommer plus de sa production, surtout si vous &ecirc;tes absent la journ&eacute;e.</p>
              <p className="text-charcoal-light leading-relaxed">Le vrai avantage du Balco 260 est ailleurs : le secours &eacute;lectrique. En cas de coupure, vous avez 2,56&nbsp;kWh de r&eacute;serve, soit 4-5h de consommation basique. C&apos;est un argument de confort que les kits classiques n&apos;offrent pas.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous cherchez un kit tout-en-un simple et pas cher (préférez le Beem On 500 Wc à 429€)',
                  'Vous n\'avez pas de place pour poser un boîtier de 28,5 kg sur votre balcon',
                  'L\'app mobile est un critère important pour vous (attendre la refonte Bluetti)',
                  'Vous voulez un écosystème éprouvé avec du retour terrain en France (Zendure ou EcoFlow)',
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
              <p className="text-charcoal-light leading-relaxed mb-4">Le Bluetti Balco 260 est un produit int&eacute;ressant sur le papier : tout-en-un, extensible, IP65, secours &eacute;lectrique. Bluetti apporte son exp&eacute;rience des stations d&apos;&eacute;nergie portables au solaire de balcon, et &ccedil;a se voit dans la fiche technique.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Mais &agrave; 849&nbsp;&euro; sans panneaux, le ticket d&apos;entr&eacute;e est &eacute;lev&eacute;. Le <Link href="/avis/zendure-solarflow" className="text-green hover:underline">Zendure SolarFlow</Link> &agrave; 488&nbsp;&euro; avec panneaux inclus reste plus comp&eacute;titif pour la plupart des utilisateurs. Et si vous n&apos;avez pas besoin de batterie, un simple <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc &agrave; 429&nbsp;&euro;</Link> sera rentable 2&times; plus vite.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le Balco 260 s&apos;adresse &agrave; un profil pr&eacute;cis : quelqu&apos;un qui veut du stockage cons&eacute;quent, un secours &eacute;lectrique, et la possibilit&eacute; d&apos;&eacute;voluer jusqu&apos;&agrave; 15&nbsp;kWh. Si c&apos;est votre cas, c&apos;est une option solide. Sinon, la concurrence fait mieux pour moins cher.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">7/10</span></strong></p>
              <a href="https://fr.bluettipower.eu/pages/bluetti-balco-260" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le Bluetti Balco 260 &rarr;</a>
            </section>

            <AffiliateCTA productName="Bluetti Balco 260" merchantName="Bluetti" affiliateUrl="https://fr.bluettipower.eu/pages/bluetti-balco-260" label="Voir l'offre sur Bluetti" variant="box" position="footer-box" price="849 €" />

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
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le concurrent direct &agrave; 488&nbsp;&euro; avec panneaux inclus</p>
                </Link>
                <Link href="/avis/ecoflow-powerstream" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis EcoFlow PowerStream</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le syst&egrave;me modulaire avec batterie et app avanc&eacute;e</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Tous les syst&egrave;mes avec stockage compar&eacute;s</p>
                </Link>
                <Link href="/avis/jackery-solarvault-3-pro" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Jackery SolarVault 3 Pro</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le concurrent &agrave; 839&nbsp;&euro; avec 4&nbsp;000&nbsp;W d&apos;entr&eacute;e solaire</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le kit sans batterie le plus rentable &agrave; 429&nbsp;&euro;</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-terrasse-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire pour terrasse 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet : Bluetti Balco 260, Zendure, EcoFlow &mdash; mise &agrave; jour juillet 2026</p>
                </Link>
                <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleure batterie solaire balcon 2026 : comparatif</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le Balco 260 face &agrave; Zendure SolarFlow, Jackery, EcoFlow PowerStream &mdash; tableau prix/kWh</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI :</strong> ROI calcul&eacute; avec tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 95% (avec batterie), Performance Ratio 0,85, Lyon sud, 2&times;500&nbsp;Wc. &Eacute;conomies : ~150&nbsp;&euro;/an, ROI ~7,3&nbsp;ans, ~2&nbsp;700&nbsp;&euro; sur 25&nbsp;ans.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis ind&eacute;pendant. Les liens vers Bluetti sont des liens affili&eacute;s. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
