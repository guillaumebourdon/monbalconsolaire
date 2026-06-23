import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Jackery SolarVault 3 Pro avis 2026 : stockage 2,5 kWh LFP \u00e0 839 \u20ac',
  description: 'Avis d\u00e9taill\u00e9 Jackery SolarVault 3 Pro : batterie LFP 2,52 kWh, 4 MPPT pour 4 000 W, 839 \u20ac en promo Prime Day. Specs, comparatif Bluetti Balco 260, verdict honn\u00eate.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/jackery-solarvault-3-pro',
  },
};

const faqData = [
  { question: 'Le Jackery SolarVault 3 Pro inclut-il des panneaux solaires ?', answer: 'Non. Le SolarVault 3 Pro est un bo\u00eetier onduleur + batterie. Les panneaux solaires sont \u00e0 acheter s\u00e9par\u00e9ment. Il accepte jusqu\u2019\u00e0 4\u00a0000 W d\u2019entr\u00e9e solaire via 4 MPPT ind\u00e9pendants, soit 4 \u00e0 8 panneaux classiques de 400-500 Wc. Jackery propose aussi un pack avec 2 panneaux bifaciaux 500 W \u00e0 1\u00a0139\u00a0\u20ac.' },
  { question: 'Quelle est la capacit\u00e9 de la batterie du SolarVault 3 Pro ?', answer: 'La batterie int\u00e9gr\u00e9e est de 2,52 kWh en LFP (lithium fer phosphate). Elle est extensible jusqu\u2019\u00e0 15,12 kWh avec des modules BP2500 empilables (2,52 kWh chacun, jusqu\u2019\u00e0 5 modules par tour).' },
  { question: 'Le SolarVault 3 Pro est-il \u00e9tanche ?', answer: 'Oui. Il est certifi\u00e9 IP65, donc r\u00e9sistant \u00e0 la pluie et \u00e0 la poussi\u00e8re. Il peut rester en ext\u00e9rieur toute l\u2019ann\u00e9e, y compris sur un balcon expos\u00e9. Il fonctionne de -20\u00b0C \u00e0 55\u00b0C.' },
  { question: 'Jackery SolarVault 3 Pro vs Bluetti Balco 260 : lequel choisir ?', answer: 'Les deux sont tr\u00e8s proches : m\u00eame concept (onduleur + batterie sans panneaux), m\u00eame gamme de prix. Le SolarVault 3 Pro a une batterie l\u00e9g\u00e8rement plus petite (2,52 vs 2,56 kWh) mais accepte plus de solaire (4\u00a0000 W vs 2\u00a0400 W) et int\u00e8gre un syst\u00e8me anti-incendie. Le Balco 260 a un onduleur SiC \u00e0 meilleur rendement (96,1%). En promo, le Jackery est moins cher (839\u00a0\u20ac vs 849\u00a0\u20ac).' },
  { question: 'Peut-on utiliser le SolarVault 3 Pro en cas de coupure de courant ?', answer: 'Non sur le mod\u00e8le Pro de base. Il injecte sur le r\u00e9seau mais n\'a pas de prise de secours off-grid. Si c\'est une priorit\u00e9, orientez-vous vers le SolarVault 3 Pro Max AC (gamme sup\u00e9rieure avec prise de secours) ou le Bluetti Balco 260 qui propose une sortie off-grid 1 200 W \u00e0 849 \u20ac.' },
  { question: 'O\u00f9 acheter le Jackery SolarVault 3 Pro en France ?', answer: 'Sur le site officiel fr.jackery.com et sur Amazon.fr. En juin 2026, Jackery propose des promotions Mid-Year Sale (16-30 juin) et Amazon Prime Day (23-26 juin) avec des r\u00e9ductions significatives.' },
];

export default function JackerySolarVault3ProAvisPage() {
  return (
    <>
      <SchemaArticle title="Jackery SolarVault 3 Pro avis 2026 : stockage 2,5 kWh LFP à 839€" description="Avis détaillé sur le Jackery SolarVault 3 Pro en 2026." url="https://monbalconsolaire.fr/avis/jackery-solarvault-3-pro" datePublished="2026-06-23" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Jackery SolarVault 3 Pro" brand="Jackery" description="Syst&egrave;me de stockage solaire plug-and-play : onduleur + batterie LFP 2,52 kWh + 4 MPPT. IP65, extensible &agrave; 15,12 kWh, gestion IA." price={839} ratingValue={8} url="https://monbalconsolaire.fr/avis/jackery-solarvault-3-pro" />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Jackery SolarVault 3 Pro' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Jackery SolarVault 3 Pro avis : le stockage domestique &agrave; prix cass&eacute; (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Jackery attaque le march&eacute; du stockage solaire de balcon avec le SolarVault 3 Pro : batterie LFP 2,52&nbsp;kWh, 4&nbsp;MPPT, gestion IA et syst&egrave;me anti-incendie. &Agrave; partir de 839&nbsp;&euro; en promo, sans panneaux.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>23 juin 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Jackery"
            name="SolarVault 3 Pro"
            power="4 000 W solaire"
            price="839 &euro;"
            score="8/10"
            tagline="Batterie LFP 2,52 kWh + onduleur + 4 MPPT. Panneaux non inclus."
            affiliateUrl="https://fr.jackery.com/products/solarvault-3-pro"
            affiliateLabel="Voir sur Jackery"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix promo juin 2026 (MSRP 1&nbsp;139&nbsp;&euro;) &middot; Panneaux solaires non inclus</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation du Jackery SolarVault 3 Pro</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Jackery, r&eacute;f&eacute;rence mondiale des stations d&apos;&eacute;nergie portables, se lance sur le march&eacute; du stockage solaire domestique plug-and-play. Le SolarVault 3 Pro combine onduleur, batterie LFP 2,52&nbsp;kWh et 4 trackers MPPT dans un bo&icirc;tier compact IP65. Lanc&eacute; en France en mars 2026 au salon Open Energies de Lyon, il vise directement le <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Bluetti Balco 260</Link>.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">&Agrave; 839&nbsp;&euro; en promotion (MSRP 1&nbsp;139&nbsp;&euro;), c&apos;est le stockage LFP le moins cher du march&eacute; fran&ccedil;ais. Mais comme le Balco 260, les panneaux ne sont pas inclus. Jackery propose un pack avec 2 panneaux bifaciaux 500&nbsp;W &agrave; 1&nbsp;139&nbsp;&euro; (au lieu de 1&nbsp;838&nbsp;&euro;), plus un compteur intelligent offert.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '2,52 kWh', l: 'Batterie LFP' },
                  { v: '839 \u20ac', l: 'Prix promo' },
                  { v: '10 ans', l: 'Garantie' },
                  { v: 'IP65', l: '\u00c9tanch\u00e9it\u00e9' },
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
                      ['Batterie', '2,52 kWh LFP, extensible \u00e0 15,12 kWh'],
                      ['Cycles', '6 000 cycles (80% de capacit\u00e9 r\u00e9siduelle)'],
                      ['Entr\u00e9e solaire', '4 000 W max, 4 canaux MPPT ind\u00e9pendants'],
                      ['Injection r\u00e9seau', '800 W par d\u00e9faut (1 200 W sur circuit d\u00e9di\u00e9)'],
                      ['Sortie off-grid', '1 200 W (secours coupure)'],
                      ['Dimensions', '485 \u00d7 235 \u00d7 282 mm'],
                      ['Poids', '25,5 kg'],
                      ['\u00c9tanch\u00e9it\u00e9', 'IP65 (pluie, poussi\u00e8re)'],
                      ['Temp\u00e9rature', '-20\u00b0C \u00e0 55\u00b0C'],
                      ['Bruit', '< 30 dB (ventilation passive)'],
                      ['Connectivit\u00e9', 'Wi-Fi, Bluetooth, Ethernet'],
                      ['S\u00e9curit\u00e9', 'Extincteur a\u00e9rosol int\u00e9gr\u00e9, 100+ protections'],
                      ['Garantie', '10 ans (dur\u00e9e de vie 15 ans)'],
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
                  { t: 'Le prix le plus bas du march\u00e9 pour du stockage LFP', d: '\u00c0 839\u00a0\u20ac en promo, le SolarVault 3 Pro est le syst\u00e8me batterie + onduleur le moins cher en France. C\u2019est 10\u00a0\u20ac de moins que le Bluetti Balco 260, pour une fiche technique comparable. Le pack avec 2 panneaux 500 W \u00e0 1\u00a0139\u00a0\u20ac est \u00e9galement comp\u00e9titif.' },
                  { t: '4 MPPT pour 4\u00a0000 W d\u2019entr\u00e9e solaire', d: 'C\u2019est le double du Balco 260 (2\u00a0400 W). Vous pouvez connecter 4 \u00e0 8 panneaux sur 4 trackers ind\u00e9pendants, chacun g\u00e9rant jusqu\u2019\u00e0 1\u00a0000 W. Chaque panneau est optimis\u00e9 s\u00e9par\u00e9ment : si un est \u00e0 l\u2019ombre, les autres ne sont pas affect\u00e9s.' },
                  { t: 'Gestion \u00e9nerg\u00e9tique IA int\u00e9gr\u00e9e', d: 'L\u2019app Jackery analyse en temps r\u00e9el production solaire, consommation, \u00e9tat de la batterie et prix de l\u2019\u00e9lectricit\u00e9 pour optimiser automatiquement charge et d\u00e9charge. C\u2019est un vrai diff\u00e9renciateur face \u00e0 la concurrence.' },
                  { t: 'Syst\u00e8me anti-incendie unique sur le march\u00e9', d: 'Le SolarVault 3 Pro int\u00e8gre un extincteur \u00e0 a\u00e9rosol qui s\u2019active automatiquement si la temp\u00e9rature interne d\u00e9passe les seuils critiques. Plus de 100 m\u00e9canismes de protection valid\u00e9s par 1\u00a0000+ tests. Aucun concurrent ne propose \u00e7a.' },
                  { t: 'Extensible jusqu\u2019\u00e0 15,12 kWh', d: 'Avec des modules BP2500 empilables (2,52 kWh chacun), vous pouvez monter jusqu\u2019\u00e0 15,12 kWh par tour. De quoi couvrir une nuit enti\u00e8re ou plus. La batterie LFP supporte 6\u00a0000 cycles, soit plus de 15 ans d\u2019utilisation quotidienne.' },
                  { t: 'Ventilation passive et silence (< 30 dB)', d: 'Pas de ventilateur : le refroidissement est enti\u00e8rement passif. Le bruit est inf\u00e9rieur \u00e0 30 dB, soit moins qu\u2019un chuchotement. Id\u00e9al pour un balcon d\u2019appartement sans nuisance sonore.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Jackery SolarVault 3 Pro" merchantName="Jackery" affiliateUrl="https://fr.jackery.com/products/solarvault-3-pro" label="Voir sur Jackery" variant="secondary" position="after-pros" price="839 &euro;" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Panneaux non inclus : le co\u00fbt total grimpe', d: '\u00c0 839\u00a0\u20ac sans panneaux, ajoutez 200-300\u00a0\u20ac pour 2 panneaux de 500 Wc. Le co\u00fbt total d\u00e9passe 1\u00a0100\u00a0\u20ac, soit 2 \u00e0 3 fois le prix d\u2019un Beem On 500 Wc (429\u00a0\u20ac tout compris). Le pack Jackery \u00e0 1\u00a0139\u00a0\u20ac limite la casse, mais le ticket d\u2019entr\u00e9e reste \u00e9lev\u00e9.' },
                  { t: 'Injection r\u00e9seau limit\u00e9e \u00e0 800 W par d\u00e9faut', d: 'Sur prise classique, l\u2019injection est limit\u00e9e \u00e0 800 W. Pour monter \u00e0 1\u00a0200 W, il faut un circuit d\u00e9di\u00e9 et activer l\u2019option dans l\u2019app. En France, la limite l\u00e9gale est 900 W, donc 800 W est suffisant pour la plupart des cas.' },
                  { t: 'Wi-Fi capricieux selon les premiers tests', d: 'Plusieurs tests (Tom\u2019s Guide, Maison & Domotique) signalent une connexion Wi-Fi parfois instable. L\u2019Ethernet est disponible en alternative, mais c\u2019est un point de vigilance pour un balcon \u00e9loign\u00e9 du routeur.' },
                  { t: 'Rendement un cran en dessous de la concurrence', d: 'Les premiers tests ind\u00e9pendants mesurent environ 15% de pertes \u00e9nerg\u00e9tiques, l\u00e9g\u00e8rement sup\u00e9rieures au Balco 260 et son onduleur SiC (96,1% de rendement). Sur un an, cela repr\u00e9sente quelques dizaines de kWh en moins.' },
                  { t: 'Prix MSRP \u00e9lev\u00e9 (1\u00a0139\u00a0\u20ac) hors promo', d: 'Le prix promo de 839\u00a0\u20ac est attractif, mais le MSRP de 1\u00a0139\u00a0\u20ac est nettement plus cher. Si vous ratez la promo, la proposition de valeur se d\u00e9grade sensiblement face \u00e0 la concurrence.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Jackery SolarVault 3 Pro" merchantName="Jackery" affiliateUrl="https://fr.jackery.com/products/solarvault-3-pro" label="V&eacute;rifier le prix actuel" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">SolarVault 3 Pro vs la concurrence (syst&egrave;mes avec batterie)</h2>
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
                      ['Jackery SolarVault 3 Pro', '2,52 kWh', '839 \u20ac', 'Non inclus', '8/10', true],
                      ['Bluetti Balco 260', '2,56 kWh', '849 \u20ac', 'Non inclus', '7/10', false],
                      ['Zendure SolarFlow', '1,92 kWh', '488 \u20ac', '840 Wc inclus', '8.5/10', false],
                      ['EcoFlow PowerStream', '1-2 kWh', '599 \u20ac+', 'Option', '8/10', false],
                      ['Sunology PLAY MAX', '0,7 kWh', '1 179 \u20ac', '480 Wc inclus', '7/10', false],
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
              <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute;s en juin 2026. Le SolarVault 3 Pro et le Balco 260 n&eacute;cessitent l&apos;achat de panneaux s&eacute;par&eacute;ment.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce syst&egrave;me soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI solaire &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; : un ROI attractif au prix promo</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le SolarVault 3 Pro se rentabilise bien plus vite au prix promo (839&nbsp;&euro;) qu&apos;au MSRP (1&nbsp;139&nbsp;&euro;). Avec une batterie, votre taux d&apos;autoconsommation passe de 85% &agrave; 95%+, ce qui booste les &eacute;conomies r&eacute;elles.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Prenons le pack avec 2 panneaux 500&nbsp;Wc (1&nbsp;139&nbsp;&euro; en promo) :</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '~980 kWh', l: 'Production/an' },
                  { v: '~180 \u20ac', l: '\u00c9conomies/an' },
                  { v: '~6,3 ans', l: 'ROI estim\u00e9' },
                  { v: '~3 300 \u20ac', l: 'Gains sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">C&apos;est meilleur que le <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Bluetti Balco 260</Link> (ROI ~7,3 ans pour 1&nbsp;100&nbsp;&euro;), gr&acirc;ce au prix promo agressif et &agrave; l&apos;entr&eacute;e solaire sup&eacute;rieure. Mais si vous n&apos;avez pas besoin de batterie, un <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc &agrave; 429&nbsp;&euro;</Link> sera rentable 2&times; plus vite.</p>
              <p className="text-charcoal-light leading-relaxed">L&apos;avantage du SolarVault 3 Pro : le secours &eacute;lectrique en cas de coupure (1&nbsp;200&nbsp;W) et la possibilit&eacute; d&apos;&eacute;voluer jusqu&apos;&agrave; 15,12&nbsp;kWh. Si vous &ecirc;tes absent la journ&eacute;e, la batterie stocke le surplus solaire pour le soir.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous cherchez un kit tout-en-un simple et pas cher (pr\u00e9f\u00e9rez le Beem On 500 Wc \u00e0 429\u00a0\u20ac)',
                  'Vous n\u2019avez pas de Wi-Fi stable sur votre balcon (la connectivit\u00e9 sans fil est un point faible)',
                  'Vous achetez au prix MSRP de 1\u00a0139\u00a0\u20ac (attendez une promo, \u00e7a change tout)',
                  'Vous voulez le meilleur rendement onduleur du march\u00e9 (le Bluetti Balco 260 avec SiC fait mieux)',
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
              <p className="text-charcoal-light leading-relaxed mb-4">Le Jackery SolarVault 3 Pro est une excellente surprise. &Agrave; 839&nbsp;&euro; en promo, c&apos;est le syst&egrave;me batterie + onduleur le moins cher du march&eacute; fran&ccedil;ais, avec une fiche technique s&eacute;rieuse : 2,52&nbsp;kWh LFP, 4&nbsp;MPPT pour 4&nbsp;000&nbsp;W d&apos;entr&eacute;e solaire, IP65, gestion IA et un syst&egrave;me anti-incendie unique.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Face au <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Bluetti Balco 260</Link>, le Jackery gagne sur le prix, l&apos;entr&eacute;e solaire (4&nbsp;000 vs 2&nbsp;400&nbsp;W) et la s&eacute;curit&eacute;. Le Bluetti gagne sur le rendement onduleur et le secours &eacute;lectrique plus puissant (bypass 2&nbsp;300&nbsp;W). Les deux sont tr&egrave;s proches.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le b&eacute;mol principal : le rendement l&eacute;g&egrave;rement en retrait et le Wi-Fi capricieux. Mais &agrave; ce prix, c&apos;est difficile de faire mieux. Si vous attendiez qu&apos;un syst&egrave;me de stockage domestique passe sous les 900&nbsp;&euro;, c&apos;est le moment.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8/10</span></strong></p>
              <a href="https://fr.jackery.com/products/solarvault-3-pro" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le Jackery SolarVault 3 Pro &rarr;</a>
            </section>

            <AffiliateCTA productName="Jackery SolarVault 3 Pro" merchantName="Jackery" affiliateUrl="https://fr.jackery.com/products/solarvault-3-pro" label="Voir l&#39;offre sur Jackery" variant="box" position="footer-box" price="839 &euro;" />

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
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Bluetti Balco 260</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le concurrent direct : onduleur SiC + batterie 2,56&nbsp;kWh &agrave; 849&nbsp;&euro;</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Tous les syst&egrave;mes avec stockage compar&eacute;s</p>
                </Link>
                <Link href="/avis/ecoflow-powerstream" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis EcoFlow PowerStream</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le syst&egrave;me modulaire avec batterie et app avanc&eacute;e</p>
                </Link>
                <Link href="/blog/batteries-portables-solaires-comparatif" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Batteries portables solaires : comparatif 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">EcoFlow, Bluetti, Jackery : 6 mod&egrave;les compar&eacute;s</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI :</strong> ROI calcul&eacute; avec tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 95% (avec batterie), Performance Ratio 0,85, Lyon sud, 2&times;500&nbsp;Wc. Production : ~980&nbsp;kWh/an, &eacute;conomies : ~180&nbsp;&euro;/an, ROI ~6,3&nbsp;ans, ~3&nbsp;300&nbsp;&euro; sur 25&nbsp;ans.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis ind&eacute;pendant. Les liens vers Jackery sont des liens affili&eacute;s. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
