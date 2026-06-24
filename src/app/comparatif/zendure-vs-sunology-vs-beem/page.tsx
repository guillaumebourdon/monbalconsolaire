import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Zendure vs Sunology vs Beem 2026 : le match complet',
  description: 'Comparatif Zendure SolarFlow 800 Plus vs Sunology PLAY 2 vs Beem On 500 Wc : prix, stockage, puissance, app, rentabilité. Quel système choisir en 2026 ?',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/zendure-vs-sunology-vs-beem',
  },
};

const faqData = [
  {
    question: 'Zendure, Sunology ou Beem : lequel est le moins cher ?',
    answer: 'Pour un kit complet sans batterie, le Beem On 500 Wc à 429 € (0,86 €/Wc) est le moins cher du marché en juin 2026. Mais si on compare des systèmes avec stockage, le Zendure SolarFlow 800 Plus (~488 € pour 1,92 kWh + onduleur 800 W) est imbattable : le Sunology PLAY MAX (panneau + batterie 700 Wh) coûte 1 179 €, soit 2,4x plus cher pour 2,7x moins de stockage.',
  },
  {
    question: 'Lequel a le meilleur retour sur investissement ?',
    answer: 'Le Zendure SolarFlow 800 Plus + 2 panneaux 420 W (~900 € total) offre un ROI de ~7 ans grâce au stockage qui augmente l\'autoconsommation à 80 %. Le Sunology PLAY 2 seul (599 €) a un ROI de ~7-8 ans aussi, mais sans stockage vous perdez 50 % de production quand vous n\'êtes pas chez vous. Le Beem On 500 Wc (429 €) offre le meilleur ROI sans batterie : ~4,8 ans grâce à son prix agressif.',
  },
  {
    question: 'Peut-on combiner un Sunology ou Beem avec un Zendure SolarFlow ?',
    answer: 'Non directement. Le Sunology PLAY 2 et le Beem On ont un micro-onduleur intégré : l\'énergie sort déjà en AC. Le SolarFlow 800 Plus accepte des panneaux bruts en DC via connecteurs MC4. Ce sont deux approches incompatibles. Si vous voulez du stockage avec un kit Sunology, il faut le PLAY MAX avec la batterie VAULT propriétaire.',
  },
  {
    question: 'Lequel est le plus simple à installer ?',
    answer: 'Le Sunology PLAY 2, sans discussion : châssis pré-assemblé, vous dépliez et branchez en 1 minute. Le Beem On prend ~5 minutes. Le Zendure SolarFlow nécessite d\'acheter les panneaux séparément, de les brancher aux entrées MPPT, et de configurer l\'app — comptez 30-60 minutes pour la première mise en service.',
  },
  {
    question: 'Lequel fonctionne en cas de coupure de courant ?',
    answer: 'Aucun des trois dans leur configuration standard. Le Sunology PLAY 2 et le Beem On injectent directement sur le réseau : si le réseau tombe, ils s\'arrêtent (protection anti-îlotage). Le Zendure SolarFlow 800 Plus n\'a pas de sortie hors réseau (EPS). Seul l\'EcoFlow PowerStream + batterie DELTA offre un vrai backup.',
  },
  {
    question: 'Quelle est la meilleure app de suivi ?',
    answer: 'L\'app Zendure est la plus complète : gestion HP/HC automatique, IA Zenky (sur le Pro), compatibilité Shelly/SmartMeter. L\'app Sunology STREAM est simple et efficace (production temps réel via WiFi natif). L\'app Beem nécessite un boîtier Beembox mais offre des fonctions similaires. Pour le pilotage avancé, Zendure gagne largement.',
  },
];

const tableauComparatif = [
  ['Prix du système', '~488 €', '599 €', '429 €'],
  ['Ce qui est inclus', 'Onduleur 800 W + batterie 1,92 kWh', 'Panneau 450 Wc + onduleur + châssis', 'Panneau 500 Wc + onduleur + support'],
  ['Panneaux inclus', 'Non (à acheter séparément)', 'Oui (1 panneau 450 Wc)', 'Oui (1 panneau 500 Wc)'],
  ['Stockage batterie', '1,92 kWh (LiFePO4)', 'Non (VAULT 700 Wh en option à 580 €)', 'Non (Beem Battery en option)'],
  ['Puissance sortie AC', '800 W', '450 W', '500 W'],
  ['Entrée solaire max', '1 500 W (2 × 750 W MPPT)', '450 W (1 panneau)', '500 W (1 panneau)'],
  ['Rendement onduleur', '95-98 % (GaN)', '96,5 %', '96,5 %'],
  ['Installation', '30-60 min (panneaux séparés)', '1 minute', '5 minutes'],
  ['App de suivi', 'Zendure (HP/HC, IA Zenky)', 'STREAM (WiFi natif)', 'Beem App (via Beembox)'],
  ['Gestion HP/HC', 'Oui (automatique)', 'Non', 'Non'],
  ['Compatible SmartMeter', 'Oui (Shelly)', 'Non', 'Non'],
  ['Extensible', 'Jusqu\'à 11,5 kWh (+ batteries)', 'Non', 'Non'],
  ['Backup coupure réseau', 'Non', 'Non', 'Non'],
  ['Protection', 'IP65', 'IP68 (panneau)', 'IP68 (panneau)'],
  ['Garantie', '10 ans', '25 ans + 30 ans perf.', '25 ans'],
  ['Cycles batterie', '6 000 (LFP)', '—', '—'],
  ['Poids', '21 kg (sans panneaux)', '24,1 kg (tout compris)', '~24 kg (tout compris)'],
  ['Paiement fractionné', 'Non', 'Non', '4x ou 10x sans frais'],
  ['Aide démarches Enedis', 'Non', 'Non', 'Option Beem ZEN (49 €)'],
];

export default function ZendureVsSunologyVsBeemPage() {
  return (
    <>
      <SchemaArticle
        title="Zendure vs Sunology vs Beem : le match 2026"
        description="Comparatif complet des 3 systèmes solaires plug-and-play les plus populaires en 2026."
        url="https://monbalconsolaire.fr/comparatif/zendure-vs-sunology-vs-beem"
        datePublished="2026-05-09"
        dateModified="2026-06-20"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Zendure vs Sunology vs Beem' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Zendure vs Sunology vs Beem' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Zendure vs Sunology vs Beem : le match 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Trois approches radicalement différentes du solaire de balcon. Le <strong>Zendure SolarFlow 800 Plus</strong> mise sur le stockage à prix cassé. Le <strong>Sunology PLAY 2</strong> sur la simplicité absolue. Le <strong>Beem On</strong> sur la flexibilité et le service. On compare tout.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>9 mai 2026</span>
              <span>&middot;</span>
              <span>12 min de lecture</span>
            </div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">n            <span className="text-stone text-sm mt-0.5">ℹ</span>n            <p className="text-xs text-stone leading-relaxed">n              <strong>Transparence :</strong> certains liens de cette page sont affiliés. Notre classement est basé sur le prix, la puissance, la facilité d'installation, la garantie et l'adéquation au profil. Aucun fabricant ne nous paie pour être mieux noté. <a href="/methodologie" className="text-green hover:underline">Voir notre méthodologie →</a>n            </p>n          </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict en 10 secondes</h2>
            <div className="space-y-2 text-sm text-charcoal-light leading-relaxed">
              <p><strong>Zendure SolarFlow 800 Plus</strong> — Le meilleur rapport qualité-prix SI vous voulez du stockage. Batterie 1,92 kWh + onduleur pour ~488 €. Mais panneaux non inclus, installation plus longue.</p>
              <p><strong>Sunology PLAY 2</strong> — Le plus simple. Branchez et oubliez en 1 minute. Idéal si vous ne voulez pas de batterie et voulez juste économiser sur votre facture.</p>
              <p><strong>Beem On 500 Wc</strong> — Le meilleur rapport qualit&eacute;-prix sans batterie. 429 &euro; pour 500 Wc (0,86 &euro;/Wc), ROI ~4,8 ans. Paiement en 10x, option d&eacute;marches Enedis. Le choix pragmatique.</p>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Trois philosophies, un même objectif</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant de plonger dans les specs, comprenons ce qui distingue fondamentalement ces trois acteurs :
              </p>
              <div className="grid md:grid-cols-3 gap-3 my-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Zendure</h4>
                  <p className="text-[11px] text-stone uppercase tracking-wider font-semibold mb-2">Stockage d&apos;abord</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Marque chinoise spécialisée batteries. Vend l&apos;onduleur + batterie, vous achetez les panneaux ailleurs. Approche modulaire, prix agressif sur le stockage.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Sunology</h4>
                  <p className="text-[11px] text-stone uppercase tracking-wider font-semibold mb-2">Simplicité d&apos;abord</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Marque française, pionnière du plug-and-play. Kit tout-en-un prêt en 1 minute. Pas de configuration, pas de choix à faire. Le &laquo; Apple &raquo; du solaire de balcon.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Beem</h4>
                  <p className="text-[11px] text-stone uppercase tracking-wider font-semibold mb-2">Service d&apos;abord</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Marque fran&ccedil;aise, gamme &eacute;tendue (300W &agrave; 500 Wc). Paiement fractionn&eacute;, option d&eacute;marches Enedis. Le meilleur &euro;/Wc du march&eacute; (0,86 &euro;/Wc).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Critère</th>
                      <th className="text-center p-2.5 font-semibold">Zendure SolarFlow</th>
                      <th className="text-center p-2.5 font-semibold">Sunology PLAY 2</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Beem On 500 Wc</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableauComparatif.map(([c, z, s, b], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-2.5 font-semibold">{c}</td>
                        <td className="text-center p-2.5">{z}</td>
                        <td className="text-center p-2.5">{s}</td>
                        <td className="text-center p-2.5">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le vrai comparatif : coût total et rentabilité</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le piège, c&apos;est de comparer les prix affichés. Le Zendure à 488 € semble moins cher que le Sunology à 599 €. Mais le Zendure ne contient pas de panneaux. Comparons des <strong>setups complets</strong> :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-2.5 rounded-tl-xl">Setup complet</th>
                      <th className="text-center p-2.5">Coût total</th>
                      <th className="text-center p-2.5">Stockage</th>
                      <th className="text-center p-2.5">Production/an</th>
                      <th className="text-center p-2.5">Autocons.</th>
                      <th className="text-center p-2.5">Éco./an</th>
                      <th className="text-center p-2.5 rounded-tr-xl">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-green-pale/20 font-semibold">
                      <td className="p-2.5">Zendure + 2 × 420 W</td>
                      <td className="text-center p-2.5 font-mono">~900 €</td>
                      <td className="text-center p-2.5 font-mono">1,92 kWh</td>
                      <td className="text-center p-2.5 font-mono">870 kWh</td>
                      <td className="text-center p-2.5 font-mono">80 %</td>
                      <td className="text-center p-2.5 font-mono text-green">135 €</td>
                      <td className="text-center p-2.5 font-mono text-green">6,7 ans</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-2.5">Sunology PLAY 2</td>
                      <td className="text-center p-2.5 font-mono">599 €</td>
                      <td className="text-center p-2.5 font-mono">—</td>
                      <td className="text-center p-2.5 font-mono">465 kWh</td>
                      <td className="text-center p-2.5 font-mono">45 %</td>
                      <td className="text-center p-2.5 font-mono">41 €</td>
                      <td className="text-center p-2.5 font-mono">14,6 ans</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-2.5">Sunology PLAY MAX</td>
                      <td className="text-center p-2.5 font-mono">1 179 €</td>
                      <td className="text-center p-2.5 font-mono">0,7 kWh</td>
                      <td className="text-center p-2.5 font-mono">465 kWh</td>
                      <td className="text-center p-2.5 font-mono">65 %</td>
                      <td className="text-center p-2.5 font-mono">59 €</td>
                      <td className="text-center p-2.5 font-mono">20,0 ans</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-2.5">Beem On 500 Wc</td>
                      <td className="text-center p-2.5 font-mono">429 €</td>
                      <td className="text-center p-2.5 font-mono">—</td>
                      <td className="text-center p-2.5 font-mono">515 kWh</td>
                      <td className="text-center p-2.5 font-mono">45 %</td>
                      <td className="text-center p-2.5 font-mono">45 €</td>
                      <td className="text-center p-2.5 font-mono text-green">9,5 ans</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-2.5">Beem Kit 300W</td>
                      <td className="text-center p-2.5 font-mono">299 €</td>
                      <td className="text-center p-2.5 font-mono">—</td>
                      <td className="text-center p-2.5 font-mono">310 kWh</td>
                      <td className="text-center p-2.5 font-mono">45 %</td>
                      <td className="text-center p-2.5 font-mono">27 €</td>
                      <td className="text-center p-2.5 font-mono">11,1 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone italic">
                Calculs basés sur : exposition sud, Lyon, tarif EDF base 0,1940 €/kWh (mai 2026). Production = puissance × irradiation × coeff orientation × 0,85.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que Zendure change dans l&apos;équation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Jusqu&apos;à l&apos;arrivée du SolarFlow 800 Plus, le débat solaire de balcon se résumait à &laquo; Sunology ou Beem &raquo;. Zendure introduit une <strong>troisième voie</strong> qui change fondamentalement le calcul :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Le stockage n&apos;est plus un luxe</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Avant le SolarFlow, ajouter du stockage coûtait 580-900 € de plus (VAULT Sunology, DELTA EcoFlow). À 488 € pour 1,92 kWh + onduleur, Zendure rend le stockage plus accessible que la plupart des kits sans batterie. C&apos;est un changement de paradigme.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">L&apos;autoconsommation passe de 45 % à 80 %</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Sans batterie (Sunology, Beem), vous autoconsommez ~45 % de votre production. Le reste est injecté gratuitement sur le réseau. Avec le SolarFlow, la batterie stocke le surplus du midi et le restitue le soir. Résultat : 80 % d&apos;autoconsommation, soit 75 % d&apos;économies en plus par an.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Mais la simplicité a un coût</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le Zendure demande plus d&apos;implication : choisir et acheter les panneaux, les brancher, configurer l&apos;app, comprendre les MPPT. C&apos;est 30-60 min d&apos;installation contre 1-5 min pour Sunology/Beem. Pour certains, cette complexité est rédhibitoire.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="space-y-4">
                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h3 className="font-bold text-base text-green mb-2">Choisissez Zendure SolarFlow si :</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>→ Vous consommez surtout le soir (actifs la journée)</li>
                    <li>→ Vous voulez le meilleur ROI avec stockage (~7 ans)</li>
                    <li>→ Vous êtes à l&apos;aise avec un minimum de configuration</li>
                    <li>→ Vous êtes en tarif heures pleines/creuses (optimisation auto)</li>
                    <li>→ Vous prévoyez d&apos;agrandir le système plus tard</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-green/10">
                    <p className="text-xs text-stone">Budget total : ~900 € (SolarFlow + 2 panneaux 420 W)</p>
                    <Link href="/avis/zendure-solarflow" className="text-green font-semibold text-sm mt-2 inline-block">Lire notre avis complet &rarr;</Link>
                  </div>
                </div>

                <div className="card-lg border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-base text-amber-dark mb-2">Choisissez Sunology PLAY 2 si :</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>→ Vous voulez brancher et oublier (zéro configuration)</li>
                    <li>→ Vous êtes souvent à la maison la journée (télétravail, retraite)</li>
                    <li>→ Vous ne voulez pas de batterie ni de complexité</li>
                    <li>→ Vous avez un petit balcon (panneau plus compact)</li>
                    <li>→ La certification CE complète vous rassure</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-amber/10">
                    <p className="text-xs text-stone">Budget : 599 € tout compris</p>
                    <Link href="/avis/sunology-play-2" className="text-green font-semibold text-sm mt-2 inline-block">Lire notre avis complet &rarr;</Link>
                  </div>
                </div>

                <div className="card-lg border-l-4 border-l-green bg-green-pale/10">
                  <h3 className="font-bold text-base text-green mb-2">Choisissez Beem On 500 Wc si :</h3>
                  <ul className="text-sm text-charcoal-light space-y-1.5">
                    <li>&rarr; Vous voulez le meilleur prix sans batterie (429 &euro;, 0,86 &euro;/Wc)</li>
                    <li>&rarr; Vous voulez payer en 10x sans frais (~43 &euro;/mois)</li>
                    <li>&rarr; Les d&eacute;marches administratives vous stressent (option ZEN)</li>
                    <li>&rarr; Vous cherchez un ROI rapide sans batterie (~4,8 ans)</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-green/10">
                    <p className="text-xs text-stone">Budget : 299-429 &euro; tout compris</p>
                    <Link href="/avis/beem-on-500w" className="text-green font-semibold text-sm mt-2 inline-block">Lire notre avis complet &rarr;</Link>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le cas particulier : &laquo; je veux du stockage &raquo;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si le stockage est votre priorité, le match se joue entre 3 options :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="text-left p-2.5 rounded-tl-xl">Solution</th>
                      <th className="text-center p-2.5">Prix total</th>
                      <th className="text-center p-2.5">Stockage</th>
                      <th className="text-center p-2.5 rounded-tr-xl">€/kWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-green-pale/20 font-semibold">
                      <td className="p-2.5">Zendure SolarFlow 800 Plus</td>
                      <td className="text-center p-2.5 font-mono">488 €</td>
                      <td className="text-center p-2.5 font-mono">1,92 kWh</td>
                      <td className="text-center p-2.5 font-mono text-green">254 €/kWh</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-2.5">Sunology PLAY MAX (VAULT)</td>
                      <td className="text-center p-2.5 font-mono">1 179 €</td>
                      <td className="text-center p-2.5 font-mono">0,7 kWh</td>
                      <td className="text-center p-2.5 font-mono">1 684 €/kWh</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-2.5">EcoFlow PowerStream + DELTA 2</td>
                      <td className="text-center p-2.5 font-mono">1 800 €</td>
                      <td className="text-center p-2.5 font-mono">1 kWh</td>
                      <td className="text-center p-2.5 font-mono">1 800 €/kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Le Zendure divise le coût du stockage par <strong>6 à 7</strong>. Si le stockage vous intéresse, il n&apos;y a pas photo en 2026.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-8">
              <p className="font-semibold text-lg mb-2">Quel système est le plus rentable pour votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur compare les kits pour votre ville et votre orientation exactes.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes économies &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
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

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow 800 Plus</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le test complet du système qui casse les prix du stockage</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le leader français du plug-and-play, testé en conditions réelles</p>
                </Link>
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">429 &euro;, 0,86 &euro;/Wc : le meilleur rapport qualit&eacute;-prix 2026</p>
                </Link>
                <Link href="/comparatif/sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem : le duel</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparaison point par point des deux leaders français</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> données constructeurs, fiches techniques officielles (Zendure, Sunology, Beem), retours utilisateurs forum-photovoltaique.fr et Reddit (juin 2026). Tarif EDF base juin 2026 : 0,1940 €/kWh. Production calculée pour Lyon, exposition sud, coefficient 0,85.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
