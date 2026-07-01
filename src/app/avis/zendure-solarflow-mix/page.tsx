import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Zendure SolarFlow Mix avis 2026 : le tout-en-un r\u00e9sidentiel',
  description: 'Avis complet sur le Zendure SolarFlow Mix 2026 : 3 mod\u00e8les, 8-50 kWh LFP, 4 kW bidirectionnel, IA Zenki. Prix, specs, rentabilit\u00e9 et verdict honn\u00eate.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/zendure-solarflow-mix',
  },
};

const faqData = [
  { question: 'Quelle diff\u00e9rence entre les 3 mod\u00e8les SolarFlow Mix ?', answer: 'Le 4000 Mix Pro accepte des panneaux en direct (2 x 4 000 W DC) + un onduleur existant (5 000 W AC), soit 13 kW d\'entr\u00e9e totale. Le 4000 Mix AC+ se branche uniquement sur un onduleur existant (5 kW AC). Le 3000 Mix AC+ est le plus compact (3 kW, non extensible). Tous partagent la batterie LFP 8 kWh de base.' },
  { question: 'Le SolarFlow Mix remplace-t-il le SolarFlow 800 Plus ?', answer: 'Non. Le SolarFlow 800 Plus reste le mod\u00e8le plug-and-play pour balcon (\u00e0 ~488 \u20ac). Le SolarFlow Mix vise les maisons avec toiture ou grosses installations. Ce sont deux gammes compl\u00e9mentaires : le 800 Plus pour d\u00e9buter, le Mix pour passer \u00e0 l\'\u00e9chelle.' },
  { question: 'Peut-on utiliser le SolarFlow Mix en cas de coupure de courant ?', answer: 'Oui. Contrairement au SolarFlow 800 Plus, les mod\u00e8les Mix disposent d\'un mode off-grid. Le 4000 Mix Pro d\u00e9livre jusqu\'\u00e0 3 680 W continus (7,2 kW en cr\u00eate) hors r\u00e9seau. C\'est suffisant pour alimenter un r\u00e9frig\u00e9rateur, \u00e9clairage et box internet pendant plusieurs heures.' },
  { question: 'Combien co\u00fbte le SolarFlow Mix en France ?', answer: 'Le SolarFlow 3000 Mix AC+ d\u00e9marre \u00e0 1 999 \u20ac TTC, le 4000 Mix AC+ \u00e0 2 399 \u20ac et le 4000 Mix Pro \u00e0 2 879 \u20ac. Les batteries d\'extension AB2000S co\u00fbtent environ 400-500 \u20ac par module de 2 kWh suppl\u00e9mentaires.' },
  { question: 'Le SolarFlow Mix est-il rentable pour un appartement avec balcon ?', answer: 'Pas vraiment. \u00c0 partir de 1 999 \u20ac pour 8 kWh, c\'est surdimensionn\u00e9 pour un balcon avec 1-2 panneaux. Le SolarFlow 800 Plus \u00e0 488 \u20ac ou le Bluetti Balco 260 \u00e0 849 \u20ac sont bien plus adapt\u00e9s. Le Mix cible les maisons avec panneaux en toiture et une consommation \u00e9lev\u00e9e (5 000-10 000 kWh/an).' },
  { question: 'Quelle est la dur\u00e9e de vie des batteries SolarFlow Mix ?', answer: 'Les cellules LiFePO4 sont certifi\u00e9es pour 10 000 cycles, soit environ 15 ans d\'utilisation quotidienne. Zendure offre une garantie de 10 ans sur les batteries. Le rendement aller-retour est de 90 %, ce qui signifie que 10 % de l\'\u00e9nergie stock\u00e9e est perdue.' },
];

export default function ZendureSolarFlowMixAvisPage() {
  return (
    <>
      <SchemaArticle title="Zendure SolarFlow Mix avis : le nouveau tout-en-un résidentiel 2026" description="Avis détaillé sur le Zendure SolarFlow Mix en 2026." url="https://monbalconsolaire.fr/avis/zendure-solarflow-mix" datePublished="2026-06-30" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Zendure SolarFlow 4000 Mix Pro" brand="Zendure" description="Batterie résidentielle LFP 8-50 kWh, 4 kW bidirectionnel, double MPPT, IA Zenki, IP65." price={2879} ratingValue={8} ratingCount={1} url="https://monbalconsolaire.fr/avis/zendure-solarflow-mix" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Zendure SolarFlow Mix' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Zendure SolarFlow Mix' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Zendure SolarFlow Mix avis : le tout-en-un r&eacute;sidentiel qui change la donne (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">3&nbsp;mod&egrave;les, 8&nbsp;&agrave;&nbsp;50&nbsp;kWh de stockage LFP, 4&nbsp;kW bidirectionnel, IA embarqu&eacute;e. Zendure quitte le balcon pour viser la maison enti&egrave;re. &Agrave; partir de 1&nbsp;999&nbsp;&euro;.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>30 juin 2026</span><span>&middot;</span><span>11 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Zendure"
            name="SolarFlow 4000 Mix Pro"
            power="8-50 kWh"
            price="2 879 €"
            score="8/10"
            tagline="Le stockage résidentiel complet : 4 kW, 13 kW d'entrée PV, IA Zenki."
            affiliateUrl="https://zendure.fr/products/solarflow-mix-series"
            affiliateLabel="Voir sur Zendure.fr"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 30/06/2026 &middot; Peut varier selon les promos</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation du SolarFlow Mix</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Lanc&eacute;e le 22 avril 2026, la gamme SolarFlow Mix marque un tournant pour Zendure. Apr&egrave;s le succ&egrave;s du <Link href="/avis/zendure-solarflow" className="text-green hover:underline">SolarFlow 800 Plus</Link> sur le segment plug-and-play balcon, la marque chinoise passe &agrave; l&apos;&eacute;chelle r&eacute;sidentielle avec 3 mod&egrave;les capables de g&eacute;rer une maison enti&egrave;re.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le concept&nbsp;: un bo&icirc;tier m&eacute;tallique IP65 tout-en-un qui int&egrave;gre onduleur bidirectionnel, batterie LFP 8&nbsp;kWh et syst&egrave;me de gestion &eacute;nerg&eacute;tique pilot&eacute; par IA. Plus besoin de jongler entre onduleur, batteries s&eacute;par&eacute;es et gateway&nbsp;: tout est dans la bo&icirc;te.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '8-50 kWh', l: 'Capacit\u00e9' },
                  { v: '4 kW', l: 'Sortie AC' },
                  { v: '10 000', l: 'Cycles LFP' },
                  { v: '10 ans', l: 'Garantie' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 3 mod&egrave;les d&eacute;taill&eacute;s</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Zendure d&eacute;cline le Mix en 3 versions pour couvrir diff&eacute;rents profils. Voici le tableau comparatif&nbsp;:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Caract&eacute;ristique</th>
                      <th className="text-left py-2 px-3 font-bold">4000 Mix Pro</th>
                      <th className="text-left py-2 px-3 font-bold">4000 Mix AC+</th>
                      <th className="text-left py-2 px-3 font-bold">3000 Mix AC+</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Sortie AC continue', '4 000 W', '4 000 W', '3 000 W'],
                      ['Entr\u00e9e DC (panneaux)', '2 x 4 000 W MPPT', '\u2014', '\u2014'],
                      ['Entr\u00e9e AC (onduleur PV)', '5 000 W', '5 000 W', '5 000 W'],
                      ['Entr\u00e9e PV totale', '13 000 W', '5 000 W', '5 000 W'],
                      ['Batterie de base', '8 kWh LFP', '8 kWh LFP', '8 kWh LFP'],
                      ['Extensible', 'Jusqu\'\u00e0 50 kWh', 'Jusqu\'\u00e0 50 kWh', 'Non'],
                      ['Mode off-grid', '3 680 W (7,2 kW cr\u00eate)', '3 680 W (7,2 kW cr\u00eate)', '3 000 W'],
                      ['Prix TTC', '2 879 \u20ac', '2 399 \u20ac', '1 999 \u20ac'],
                    ].map(([label, pro, ac, compact], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3 font-semibold text-charcoal whitespace-nowrap">{label}</td>
                        <td className="py-2 px-3 text-charcoal-light">{pro}</td>
                        <td className="py-2 px-3 text-charcoal-light">{ac}</td>
                        <td className="py-2 px-3 text-charcoal-light">{compact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Le 4000 Mix Pro est le seul mod&egrave;le avec entr&eacute;e DC directe pour panneaux sans onduleur.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique (4000 Mix Pro)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Batterie', 'LiFePO4 (LFP), 8 kWh de base'],
                      ['Cycles', '10 000 cycles (15 ans de dur\u00e9e de vie)'],
                      ['Rendement aller-retour', '90 %'],
                      ['Sortie AC', '4 000 W continus, bidirectionnel'],
                      ['Mode off-grid', '3 680 W continus, 7 200 W cr\u00eate'],
                      ['Entr\u00e9e solaire DC', '2 MPPT, 2 x 4 000 W (8 000 W total)'],
                      ['Entr\u00e9e AC (PV-IN)', '5 000 W (compatible tous onduleurs)'],
                      ['Protection', 'IP65, -20\u00b0C \u00e0 55\u00b0C, bo\u00eetier m\u00e9tal'],
                      ['Bruit', '25 dB (quasi silencieux)'],
                      ['Garantie', '10 ans batterie et syst\u00e8me'],
                      ['Gestion \u00e9nerg\u00e9tique', 'HEMS 2.0 + IA Zenki + ZenWave'],
                      ['Extensible', 'Jusqu\'\u00e0 50 kWh par modules 2 kWh'],
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
                  { t: 'Capacit\u00e9 massive : 8 \u00e0 50 kWh', d: 'Avec 8 kWh de base et une extension possible jusqu\'\u00e0 50 kWh, le Mix couvre tous les profils : du foyer de 2 personnes \u00e0 la grande maison. Un foyer de 4 personnes consommant 7 000 kWh/an peut stocker l\'int\u00e9gralit\u00e9 de sa production quotidienne.' },
                  { t: '4 kW bidirectionnel : enfin de la vraie puissance', d: 'Contrairement au SolarFlow 800 Plus (800 W), le Mix d\u00e9livre 4 000 W en continu. Assez pour une plaque \u00e0 induction, un ballon d\'eau chaude ou une pompe \u00e0 chaleur. C\'est un vrai syst\u00e8me r\u00e9sidentiel, pas un gadget.' },
                  { t: 'Mode off-grid int\u00e9gr\u00e9', d: 'En cas de coupure r\u00e9seau, le Mix bascule automatiquement en alimentation autonome (3 680 W continus, 7,2 kW en cr\u00eate). C\'\u00e9tait le gros manque du SolarFlow original. Avec 8 kWh, comptez 10-15 h d\'autonomie pour les appareils essentiels.' },
                  { t: 'IA Zenki : optimisation automatique', d: 'L\'intelligence artificielle embarqu\u00e9e arbitre en temps r\u00e9el entre production solaire, stockage, prix du r\u00e9seau et m\u00e9t\u00e9o. Compatible tarifs dynamiques (ZenWave), elle peut charger la batterie en heures creuses et restituer en heures pleines.' },
                  { t: '13 kW d\'entr\u00e9e PV sur le Mix Pro', d: 'Le mod\u00e8le Pro combine 8 kW DC (2 MPPT) + 5 kW AC, soit 13 kW d\'entr\u00e9e solaire. C\'est assez pour une installation toiture compl\u00e8te de 10-12 panneaux. Aucun concurrent plug-and-play n\'offre autant.' },
                  { t: 'IP65 et silence (25 dB)', d: 'Installation ext\u00e9rieure possible (garage, terrasse, buanderie) gr\u00e2ce au bo\u00eetier m\u00e9tallique IP65 et au fonctionnement quasi silencieux. Op\u00e9rationnel de -20\u00b0C \u00e0 55\u00b0C.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Zendure SolarFlow Mix" merchantName="Zendure" affiliateUrl="https://zendure.fr/products/solarflow-mix-series" label="Voir les 3 mod\u00e8les sur Zendure.fr" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Prix \u00e9lev\u00e9 : \u00e0 partir de 1 999 \u20ac', d: 'M\u00eame le mod\u00e8le le plus abordable (3000 Mix AC+) co\u00fbte 1 999 \u20ac. Le Mix Pro d\u00e9marre \u00e0 2 879 \u20ac. C\'est 4 \u00e0 6 fois le prix d\'un kit balcon classique. Le ROI est plus long (7-10 ans) et d\u00e9pend fortement du profil de consommation.' },
                  { t: 'Surdimensionn\u00e9 pour un simple balcon', d: 'Avec 8 kWh de base et 4 kW de sortie, le Mix est fait pour les maisons avec panneaux en toiture. Pour un balcon avec 1-2 panneaux de 400-500 W, le SolarFlow 800 Plus \u00e0 488 \u20ac reste bien plus adapt\u00e9 et rentable.' },
                  { t: 'Installation plus complexe', d: 'Contrairement aux kits balcon "branchez et c\'est parti", le Mix n\u00e9cessite un raccordement AC au tableau \u00e9lectrique. Pour le mod\u00e8le Pro avec entr\u00e9e DC, il faut aussi c\u00e2bler les panneaux. L\'intervention d\'un \u00e9lectricien est fortement recommand\u00e9e.' },
                  { t: 'Le 3000 Mix AC+ non extensible', d: 'Le mod\u00e8le d\'entr\u00e9e est bloqu\u00e9 \u00e0 8 kWh, sans possibilit\u00e9 d\'ajout de modules suppl\u00e9mentaires. Si vos besoins \u00e9voluent, il faudra passer au 4000 Mix. Dommage pour un syst\u00e8me se voulant modulaire.' },
                  { t: 'Marque encore jeune sur le stockage r\u00e9sidentiel', d: 'Zendure est reconnu sur le plug-and-play balcon mais n\'a pas encore fait ses preuves sur le segment r\u00e9sidentiel haut de gamme. Le recul est limit\u00e9 (lancement avril 2026). Comparativement, Enphase et SolarEdge ont des ann\u00e9es d\'exp\u00e9rience.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Zendure SolarFlow Mix" merchantName="Zendure" affiliateUrl="https://zendure.fr/products/solarflow-mix-series" label="V\u00e9rifier la disponibilit\u00e9" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">SolarFlow Mix vs la concurrence</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Syst&egrave;me</th>
                      <th className="text-left py-2 px-3 font-bold">Capacit&eacute;</th>
                      <th className="text-left py-2 px-3 font-bold">Sortie</th>
                      <th className="text-left py-2 px-3 font-bold">Prix</th>
                      <th className="text-left py-2 px-3 font-bold">&euro;/kWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Zendure 4000 Mix Pro', '8-50 kWh', '4 000 W', '2 879 \u20ac', '360 \u20ac', true],
                      ['Zendure 4000 Mix AC+', '8-50 kWh', '4 000 W', '2 399 \u20ac', '300 \u20ac', false],
                      ['Zendure 3000 Mix AC+', '8 kWh', '3 000 W', '1 999 \u20ac', '250 \u20ac', false],
                      ['Bluetti Balco 260', '2,56 kWh', '1 200 W', '849 \u20ac', '332 \u20ac', false],
                      ['Jackery SolarVault 3 Pro', '2,52 kWh', '800 W', '839 \u20ac', '333 \u20ac', false],
                      ['Zendure SolarFlow 800+', '1,92 kWh', '800 W', '488 \u20ac', '254 \u20ac', false],
                    ].map(([name, cap, power, price, ratio, highlight], i) => (
                      <tr key={i} className={highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3">{name as string}</td>
                        <td className="py-2 px-3">{cap as string}</td>
                        <td className="py-2 px-3">{power as string}</td>
                        <td className="py-2 px-3">{price as string}</td>
                        <td className="py-2 px-3">{ratio as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute;s en juin 2026. Le &euro;/kWh est calcul&eacute; sur la capacit&eacute; de base.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce syst&egrave;me soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement, orientation et consommation.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI solaire &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; et production</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le ROI du SolarFlow Mix d&eacute;pend fortement de la taille de l&apos;installation et du profil de consommation. Voici une estimation pour le 4000 Mix Pro avec 6&nbsp;kWc de panneaux en toiture (m&eacute;thodologie standard&nbsp;: Lyon, sud, PR 0,85, autoconsommation 95% avec batterie).</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '6 120 kWh', l: 'Production/an' },
                  { v: '1 130 \u20ac', l: '\u00c9conomies/an' },
                  { v: '~7,5 ans', l: 'ROI (avec panneaux)' },
                  { v: '~38 000 \u20ac', l: 'Gains sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">Pour un foyer consommant 7&nbsp;000&nbsp;kWh/an avec tarif heures pleines/creuses, l&apos;optimisation IA Zenki peut r&eacute;duire la facture EDF de 70 &agrave; 90&nbsp;%. C&apos;est le sc&eacute;nario id&eacute;al de Zendure, et les chiffres sont plausibles &agrave; condition d&apos;avoir assez de panneaux.</p>
              <p className="text-charcoal-light leading-relaxed">En comparaison, le <Link href="/avis/zendure-solarflow" className="text-green hover:underline">SolarFlow 800 Plus &agrave; 488&nbsp;&euro;</Link> avec 2 panneaux de balcon offre un ROI de ~5,5 ans mais &eacute;conomise seulement ~90&nbsp;&euro;/an. Le Mix joue dans une autre cat&eacute;gorie.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel mod&egrave;le choisir ?</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">4000 Mix Pro &mdash; pour les nouvelles installations</h4>
                  <p className="text-xs text-charcoal-light">Vous installez des panneaux pour la premi&egrave;re fois (toiture ou pergola). Le double MPPT int&eacute;gr&eacute; &eacute;vite d&apos;acheter un onduleur s&eacute;par&eacute;. Budget&nbsp;: 5&nbsp;000-8&nbsp;000&nbsp;&euro; tout compris (batterie + panneaux).</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">4000 Mix AC+ &mdash; pour les installations existantes</h4>
                  <p className="text-xs text-charcoal-light">Vous avez d&eacute;j&agrave; des panneaux avec un onduleur. Le Mix AC+ se branche en parall&egrave;le via le port PV-IN AC. Pas besoin de toucher &agrave; l&apos;existant. Le choix le plus simple en retrofit.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">3000 Mix AC+ &mdash; pour les petits foyers</h4>
                  <p className="text-xs text-charcoal-light">Couple ou foyer de 2 personnes avec 3-4 kWc en toiture. Les 3&nbsp;kW de sortie suffisent pour les usages courants. Attention&nbsp;: non extensible au-del&agrave; de 8&nbsp;kWh.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous avez uniquement un balcon avec 1-2 panneaux (le SolarFlow 800 Plus est bien plus adapt\u00e9)',
                  'Votre budget est inf\u00e9rieur \u00e0 1 500 \u20ac (regardez le Bluetti Balco 260 ou le SolarFlow 800 Plus)',
                  'Vous voulez un syst\u00e8me certifi\u00e9 et \u00e9prouv\u00e9 depuis des ann\u00e9es (gamme trop r\u00e9cente)',
                  'Vous consommez moins de 4 000 kWh/an (le syst\u00e8me sera surdimensionn\u00e9)',
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
              <p className="text-charcoal-light leading-relaxed mb-4">Le SolarFlow Mix est le produit le plus ambitieux de Zendure &agrave; ce jour. Avec 8&nbsp;&agrave;&nbsp;50&nbsp;kWh de stockage LFP, 4&nbsp;kW bidirectionnel et une IA d&apos;optimisation, il se positionne comme une alternative cr&eacute;dible aux syst&egrave;mes Enphase ou SolarEdge &mdash; &agrave; un prix nettement inf&eacute;rieur.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le 4000 Mix Pro est le mod&egrave;le le plus int&eacute;ressant&nbsp;: avec 13&nbsp;kW d&apos;entr&eacute;e PV et le double MPPT, il fait office d&apos;onduleur + batterie + gestionnaire &eacute;nerg&eacute;tique en un seul appareil. &Agrave; 2&nbsp;879&nbsp;&euro;, le &euro;/kWh de 360&nbsp;&euro; est comp&eacute;titif pour du r&eacute;sidentiel.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Les b&eacute;mols&nbsp;: c&apos;est une gamme toute neuve (avril 2026), le recul est nul, et le 3000 Mix AC+ non extensible est un faux pas. Pour les balcons, le <Link href="/avis/zendure-solarflow" className="text-green hover:underline">SolarFlow 800 Plus</Link> reste imbattable. Mais pour les propri&eacute;taires avec panneaux en toiture, le Mix est la proposition la plus compl&egrave;te du march&eacute;.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8/10</span></strong></p>
              <a href="https://zendure.fr/products/solarflow-mix-series" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le SolarFlow Mix sur Zendure.fr &rarr;</a>
            </section>

            <AffiliateCTA productName="Zendure SolarFlow 4000 Mix Pro" merchantName="Zendure" affiliateUrl="https://zendure.fr/products/solarflow-mix-series" label="Voir l'offre actuelle" variant="box" position="footer-box" price="2 879 \u20ac" />

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
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Zendure SolarFlow 800 Plus : avis complet</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le mod&egrave;le plug-and-play balcon &agrave; 488&nbsp;&euro; &mdash; le pr&eacute;d&eacute;cesseur du Mix</p>
                </Link>
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Bluetti Balco 260 : le tout-en-un compact</h4>
                  <p className="text-xs text-charcoal-light mt-1">Onduleur + batterie LFP 2,56&nbsp;kWh &agrave; 849&nbsp;&euro; &mdash; le concurrent direct</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire avec batterie 2026 : comparatif</h4>
                  <p className="text-xs text-charcoal-light mt-1">Tous les syst&egrave;mes de stockage solaire compar&eacute;s</p>
                </Link>
                <Link href="/comparatif/zendure-vs-sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Zendure vs Sunology vs Beem : le match 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet des 3 marques leaders</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI :</strong> ROI calcul&eacute; avec tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 95% (avec batterie), Performance Ratio 0,85, Lyon sud. Installation 6&nbsp;kWc + Mix Pro (8&nbsp;kWh). Co&ucirc;t total estim&eacute; ~8&nbsp;500&nbsp;&euro; (panneaux + syst&egrave;me).</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis ind&eacute;pendant. Les liens vers Zendure sont des liens affili&eacute;s. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
