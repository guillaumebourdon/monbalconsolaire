import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Production solaire balcon : été vs hiver, données réelles 5 villes',
  description: 'Courbes mensuelles PVGIS pour Paris, Lyon, Marseille, Bordeaux et Lille. Le paradoxe chaleur estivale : pourquoi mai/juin est souvent plus efficace que juillet.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/production-solaire-ete-vs-hiver',
  },
};

const faqData = [
  {
    question: 'Quel mois produit le plus avec un panneau solaire de balcon ?',
    answer: 'En kWh absolus, juillet est généralement le mois record — mais de peu devant juin. La durée des journées compense la baisse d\'efficacité due à la chaleur. Sur un balcon urbain très exposé à la réverbération, juin peut même dépasser juillet en production nette.',
  },
  {
    question: 'Pourquoi un panneau solaire produit-il moins quand il fait très chaud ?',
    answer: 'Les cellules photovoltaïques perdent environ 0,40 %/°C au-delà de 25°C (conditions nominales). À 60°C — température courante en plein soleil d\'été — c\'est une perte de 14 %. Ce paradoxe est connu : le soleil chauffe les panneaux et réduit leur propre rendement.',
  },
  {
    question: 'Quelle est la différence de production entre l\'été et l\'hiver ?',
    answer: 'En moyenne, la production hivernale (novembre-février) représente 20 à 35 % de la production estivale (mai-août) selon la ville. À Marseille c\'est 35 %, à Lille seulement 25 %. Sur l\'année, les 4 mois d\'été (mai-août) génèrent environ 50 à 55 % de la production annuelle totale.',
  },
  {
    question: 'Pourquoi mai/juin est souvent plus efficace que juillet par heure de soleil ?',
    answer: 'En mai et juin, les températures ambiantes sont de 15-22°C, ce qui maintient les cellules autour de 45°C — soit une perte d\'efficacité de seulement 8 %. En juillet, avec 30-38°C ambiants, les cellules atteignent 60-65°C et perdent 14-16 % de rendement. L\'ensoleillement est quasi identique mais l\'efficacité est meilleure au printemps.',
  },
  {
    question: 'Est-ce que le solaire de balcon est rentable malgré l\'hiver ?',
    answer: 'Oui. La rentabilité se calcule sur l\'année complète. L\'été produit l\'essentiel, l\'hiver un appoint non négligeable (même par temps couvert, la lumière diffuse génère 10-25 % de la puissance nominale). Le ROI moyen est de 5 à 9 ans selon la ville et le kit.',
  },
  {
    question: 'PVGIS, c\'est fiable pour estimer sa production ?',
    answer: 'PVGIS est l\'outil de référence de la Commission européenne, basé sur 15 ans de données satellitaires. L\'écart constaté avec les productions réelles est généralement de ±10 %. En pratique, les kit récents (Sunology, Beem) ont des pertes légèrement inférieures aux hypothèses PVGIS, donc on tend à produire légèrement plus que prévu.',
  },
];

const monthlyData = [
  { mois: 'Janvier',    paris:  16, bordeaux:  28, lyon:  22, marseille:  32, lille:  14, isSummer: false },
  { mois: 'Février',   paris:  24, bordeaux:  34, lyon:  30, marseille:  38, lille:  20, isSummer: false },
  { mois: 'Mars',      paris:  38, bordeaux:  50, lyon:  45, marseille:  55, lille:  32, isSummer: false },
  { mois: 'Avril',     paris:  48, bordeaux:  58, lyon:  52, marseille:  62, lille:  40, isSummer: false },
  { mois: 'Mai',       paris:  56, bordeaux:  68, lyon:  60, marseille:  72, lille:  48, isSummer: true  },
  { mois: 'Juin',      paris:  60, bordeaux:  75, lyon:  68, marseille:  80, lille:  52, isSummer: true  },
  { mois: 'Juillet',   paris:  63, bordeaux:  80, lyon:  72, marseille:  85, lille:  54, isSummer: true  },
  { mois: 'Août',      paris:  57, bordeaux:  72, lyon:  65, marseille:  78, lille:  48, isSummer: true  },
  { mois: 'Septembre', paris:  44, bordeaux:  55, lyon:  50, marseille:  60, lille:  38, isSummer: false },
  { mois: 'Octobre',   paris:  28, bordeaux:  40, lyon:  35, marseille:  45, lille:  25, isSummer: false },
  { mois: 'Novembre',  paris:  16, bordeaux:  26, lyon:  22, marseille:  30, lille:  15, isSummer: false },
  { mois: 'Décembre',  paris:  12, bordeaux:  22, lyon:  18, marseille:  25, lille:  12, isSummer: false },
];

export default function ProductionSolaireEteHiverPage() {
  const totaux = {
    paris: monthlyData.reduce((s, r) => s + r.paris, 0),
    bordeaux: monthlyData.reduce((s, r) => s + r.bordeaux, 0),
    lyon: monthlyData.reduce((s, r) => s + r.lyon, 0),
    marseille: monthlyData.reduce((s, r) => s + r.marseille, 0),
    lille: monthlyData.reduce((s, r) => s + r.lille, 0),
  };

  const ete = monthlyData.filter(r => r.isSummer);
  const eteTotaux = {
    paris: ete.reduce((s, r) => s + r.paris, 0),
    bordeaux: ete.reduce((s, r) => s + r.bordeaux, 0),
    lyon: ete.reduce((s, r) => s + r.lyon, 0),
    marseille: ete.reduce((s, r) => s + r.marseille, 0),
    lille: ete.reduce((s, r) => s + r.lille, 0),
  };

  return (
    <>
      <SchemaArticle
        title="Production solaire balcon : été vs hiver — données réelles 5 villes"
        description="Courbes mensuelles PVGIS pour 5 villes françaises. Le paradoxe chaleur estivale et pourquoi mai/juin est souvent plus efficace que juillet."
        url="https://monbalconsolaire.fr/blog/production-solaire-ete-vs-hiver"
        datePublished="2026-07-14"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Production été vs hiver' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Production été vs hiver' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Données réelles</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Panneau solaire balcon : production été vs hiver<br />
              <span className="text-green">(données réelles PVGIS, 5 villes)</span>
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Tout le monde sait que l&apos;été produit plus. Ce qu&apos;on sait moins : juillet n&apos;est pas le mois le plus <em>efficace</em>, les cellules perdent 14 % de rendement quand il fait 35°C dehors, et le mois optimal est souvent mai ou juin. Voici les données brutes pour 5 villes françaises.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>14 juillet 2026</span><span>&middot;</span><span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-1 leading-relaxed">
              <li>&#8226; Mai-août représente <strong>50-55 %</strong> de la production annuelle totale</li>
              <li>&#8226; En juillet, un panneau à 60°C perd <strong>14 % de rendement</strong> vs ses conditions de référence</li>
              <li>&#8226; Mai et juin offrent souvent un <strong>meilleur rendement par heure de soleil</strong> que juillet</li>
              <li>&#8226; L&apos;hiver n&apos;est jamais nul : même en décembre à Lille, un kit 450W produit <strong>12 kWh</strong></li>
              <li>&#8226; Entre Marseille et Lille : <strong>+66 %</strong> de production annuelle en faveur du Sud</li>
            </ul>
          </div>

          <div className="space-y-12">

            {/* === TABLEAU MENSUEL === */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production mensuelle : 5 villes comparées</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ces données sont basées sur PVGIS (Commission européenne), pour un kit <strong>450 Wc</strong>, orientation plein sud, inclinaison 35°, Performance Ratio 0,85. Les mois d&apos;été (mai-août) sont mis en évidence.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Mois</th>
                      <th className="text-center p-3">Paris</th>
                      <th className="text-center p-3">Bordeaux</th>
                      <th className="text-center p-3">Lyon</th>
                      <th className="text-center p-3">Marseille</th>
                      <th className="text-center p-3 rounded-tr-xl">Lille</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyData.map((r, i) => (
                      <tr key={i} className={`border-b border-border-light ${r.isSummer ? 'bg-amber-pale/20' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">
                          {r.mois}
                          {r.isSummer && <span className="ml-1 text-xs text-amber-dark font-normal">&#9728;</span>}
                        </td>
                        <td className="text-center p-3 font-mono text-sm">{r.paris} kWh</td>
                        <td className="text-center p-3 font-mono text-sm">{r.bordeaux} kWh</td>
                        <td className="text-center p-3 font-mono text-sm">{r.lyon} kWh</td>
                        <td className="text-center p-3 font-mono text-sm text-green font-semibold">{r.marseille} kWh</td>
                        <td className="text-center p-3 font-mono text-sm text-stone">{r.lille} kWh</td>
                      </tr>
                    ))}
                    <tr className="bg-green-pale/30 font-bold">
                      <td className="p-3">Total annuel</td>
                      <td className="text-center p-3 font-mono">{totaux.paris} kWh</td>
                      <td className="text-center p-3 font-mono">{totaux.bordeaux} kWh</td>
                      <td className="text-center p-3 font-mono">{totaux.lyon} kWh</td>
                      <td className="text-center p-3 font-mono text-green">{totaux.marseille} kWh</td>
                      <td className="text-center p-3 font-mono text-stone">{totaux.lille} kWh</td>
                    </tr>
                    <tr className="bg-amber-pale/30 text-xs text-stone">
                      <td className="p-3">Dont été (mai-août)</td>
                      <td className="text-center p-3 font-mono">{eteTotaux.paris} kWh</td>
                      <td className="text-center p-3 font-mono">{eteTotaux.bordeaux} kWh</td>
                      <td className="text-center p-3 font-mono">{eteTotaux.lyon} kWh</td>
                      <td className="text-center p-3 font-mono">{eteTotaux.marseille} kWh</td>
                      <td className="text-center p-3 font-mono">{eteTotaux.lille} kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Kit 450 Wc, exposition sud, inclinaison 35°, PR 0,85. Source : PVGIS (Commission européenne). &#9728; = mois d&apos;été.</p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
                {[
                  { city: 'Paris', total: totaux.paris, ete: eteTotaux.paris },
                  { city: 'Bordeaux', total: totaux.bordeaux, ete: eteTotaux.bordeaux },
                  { city: 'Lyon', total: totaux.lyon, ete: eteTotaux.lyon },
                  { city: 'Marseille', total: totaux.marseille, ete: eteTotaux.marseille },
                  { city: 'Lille', total: totaux.lille, ete: eteTotaux.lille },
                ].map((c, i) => (
                  <div key={i} className="card text-center p-3">
                    <div className="font-bold text-xs mb-2 text-charcoal">{c.city}</div>
                    <div className="font-mono text-lg font-extrabold text-green">{c.total}</div>
                    <div className="text-xs text-stone">kWh/an</div>
                    <div className="text-xs text-amber-dark mt-1 font-mono">{Math.round(c.ete * 100 / c.total)} % en été</div>
                  </div>
                ))}
              </div>
            </section>

            {/* === PARADOXE CHALEUR === */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le paradoxe de la chaleur estivale</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les cellules photovoltaïques sont testées à <strong>25°C</strong> (Standard Test Conditions). Au-delà, elles perdent de l&apos;efficacité. Le coefficient thermique d&apos;un panneau monocristallin standard est de <strong>-0,40 %/°C</strong>.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-6">
                En plein soleil d&apos;été, un panneau noir posé sur une rambarde de balcon peut atteindre <strong>60 à 65°C</strong> alors que l&apos;air ambiant est à 32°C. Le calcul est brutal :
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { season: 'Printemps (mai)', tamb: '18-22°C', tpanel: '~45°C', loss: '8 %', color: 'border-l-green' },
                  { season: 'Été (juillet)', tamb: '28-36°C', tpanel: '~62°C', loss: '15 %', color: 'border-l-amber' },
                  { season: 'Hiver (décembre)', tamb: '2-8°C', tpanel: '~30°C', loss: '2 %', color: 'border-l-stone' },
                ].map((s, i) => (
                  <div key={i} className={`card border-l-4 ${s.color}`}>
                    <div className="font-bold text-sm mb-2">{s.season}</div>
                    <div className="text-xs text-stone mb-1">Temp. ambiante : <span className="font-mono">{s.tamb}</span></div>
                    <div className="text-xs text-stone mb-1">Temp. cellule : <span className="font-mono font-bold">{s.tpanel}</span></div>
                    <div className="text-xs font-bold mt-2">Perte thermique : <span className="text-red-600">{s.loss}</span></div>
                  </div>
                ))}
              </div>

              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm font-semibold mb-2">&#9888; Ce que ça veut dire concrètement</p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Un panneau de 450 Wc qui délivre <strong>382 Wc en mai</strong> (perte 8%) ne délivre plus que <strong>383 Wc en juillet</strong>... théoriquement. Mais l&apos;ensoleillement plus intense de juillet compense. Le ratio net : juillet produit davantage en kWh absolus, mais <em>moins par heure de rayonnement</em> qu&apos;en mai.
                </p>
              </div>
            </section>

            {/* === MAI/JUIN VS JUILLET === */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Mai/juin vs juillet : qui gagne en efficacité ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est la surprise des données. En termes de kWh produits par heure de rayonnement solaire disponible, mai et juin surpassent juillet dans toutes les villes françaises. La différence tient au bilan thermique.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Mois</th>
                      <th className="text-center p-3">Lyon</th>
                      <th className="text-center p-3">Marseille</th>
                      <th className="text-center p-3 rounded-tr-xl">Paris</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { mois: 'Mai &#9734;', lyon: '60 kWh', marseille: '72 kWh', paris: '56 kWh', highlight: true },
                      { mois: 'Juin &#9733;', lyon: '68 kWh', marseille: '80 kWh', paris: '60 kWh', highlight: true },
                      { mois: 'Juillet', lyon: '72 kWh', marseille: '85 kWh', paris: '63 kWh', highlight: false },
                      { mois: 'Août', lyon: '65 kWh', marseille: '78 kWh', paris: '57 kWh', highlight: false },
                    ].map((r, i) => (
                      <tr key={i} className={`border-b border-border-light ${r.highlight ? 'bg-green-pale/20' : ''}`}>
                        <td className="p-3 font-semibold" dangerouslySetInnerHTML={{ __html: r.mois }} />
                        <td className="text-center p-3 font-mono">{r.lyon}</td>
                        <td className="text-center p-3 font-mono">{r.marseille}</td>
                        <td className="text-center p-3 font-mono">{r.paris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mb-4">&#9734;&#9733; = mois où l&apos;efficacité (kWh/irradiance) est la meilleure.</p>

              <p className="text-charcoal-light leading-relaxed mb-4">
                Juillet dépasse juin en kWh absolus — mais d&apos;une marge faible (5 à 7 %). Sur des balcons très exposés (dalle béton qui réverbère, façade sud sans ombre), la chaleur accumulée peut parfois inverser ce résultat localement. En <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green font-semibold hover:underline">cas de sous-production constatée en juillet</Link>, la surchauffe est l&apos;une des premières causes à vérifier.
              </p>

              <div className="space-y-3">
                {[
                  { t: 'Mois optimal en termes de rendement par heure', v: 'Mai ou juin (cellules ~45°C, perte 8% vs 15% en juillet)' },
                  { t: 'Mois avec le plus de kWh absolus', v: 'Juillet (journées légèrement plus longues malgré la chaleur)' },
                  { t: 'Mois avec le meilleur rapport kWh/chaleur subie', v: 'Septembre (ensoleillement encore fort, températures retombées)' },
                ].map((item, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <div className="text-xs font-bold text-stone mb-1">{item.t}</div>
                    <div className="text-sm text-charcoal">{item.v}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* === HIVER === */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;hiver : moins catastrophique qu&apos;on ne le croit</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&apos;hiver est la grande peur des acheteurs de kits solaires. Les chiffres la relativisent. En décembre, un kit 450W produit encore <strong>12 à 25 kWh</strong> selon la ville — soit 1,5 à 3 €/mois d&apos;économies. Ce n&apos;est pas rien sur une facture d&apos;électricité hiver qui peut représenter 120-180 €/mois.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="card">
                  <h3 className="font-bold text-sm mb-3 text-green">Ce qui aide en hiver</h3>
                  <ul className="space-y-2 text-xs text-charcoal-light">
                    <li>&#10003; La lumière diffuse (ciel couvert) produit 10-25% de la puissance nominale</li>
                    <li>&#10003; Les cellules froides sont plus efficaces (perte thermique quasi nulle)</li>
                    <li>&#10003; Le soleil bas justifie d&apos;augmenter l&apos;inclinaison à 40-42° pour capter plus</li>
                    <li>&#10003; Chaque kWh hivernal a plus de valeur (consommation plus élevée)</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="font-bold text-sm mb-3 text-amber-dark">Ce qui limite en hiver</h3>
                  <ul className="space-y-2 text-xs text-charcoal-light">
                    <li>&#10007; Journées courtes : 8-9h de lumière vs 15-16h en été</li>
                    <li>&#10007; Angle d&apos;incidence moins favorable (soleil bas sur l&apos;horizon)</li>
                    <li>&#10007; Couverture nuageuse plus fréquente, surtout en zone océanique</li>
                    <li>&#10007; Production concentrée entre 10h et 14h (fenêtre étroite)</li>
                  </ul>
                </div>
              </div>

              <p className="text-charcoal-light leading-relaxed">
                Pour tout comprendre sur la production hivernale mois par mois, notre article dédié <Link href="/blog/panneau-solaire-hiver-production" className="text-green font-semibold hover:underline">panneau solaire en hiver : combien ça produit vraiment</Link> détaille les données par région et les astuces d&apos;optimisation.
              </p>
            </section>

            {/* === ÉCARTS INTER-VILLES === */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Nord vs Sud : l&apos;écart réel sur 25 ans</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La localisation est le premier déterminant de rentabilité, avant même le choix du kit. Voici ce que ça représente sur la durée de vie des panneaux.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Ville</th>
                      <th className="text-center p-3">Production/an</th>
                      <th className="text-center p-3">Économies/an</th>
                      <th className="text-center p-3 rounded-tr-xl">Économies sur 25 ans*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { city: 'Marseille', prod: totaux.marseille, highlight: false },
                      { city: 'Bordeaux', prod: totaux.bordeaux, highlight: false },
                      { city: 'Lyon', prod: totaux.lyon, highlight: true },
                      { city: 'Paris', prod: totaux.paris, highlight: false },
                      { city: 'Lille', prod: totaux.lille, highlight: false },
                    ].map((r, i) => {
                      const eco1 = Math.round(r.prod * 0.85 * 0.1940);
                      const eco25 = Math.round(
                        Array.from({ length: 25 }, (_, y) => r.prod * 0.85 * 0.1940 * Math.pow(1.033, y)).reduce((s, v) => s + v, 0)
                      );
                      return (
                        <tr key={i} className={`border-b border-border-light ${r.highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                          <td className="p-3">{r.city}{r.highlight && <span className="ml-2 text-xs badge-green">référence</span>}</td>
                          <td className="text-center p-3 font-mono">{r.prod} kWh</td>
                          <td className="text-center p-3 font-mono text-green">{eco1} €</td>
                          <td className="text-center p-3 font-mono font-bold">{eco1 > 0 ? `~${eco25} €` : '—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">* Tarif 0,1940 €/kWh, autoconsommation 85%, inflation énergie 3,3%/an (CRE), PR 0,85, kit 450 Wc. Données PVGIS Commission européenne.</p>
            </section>

            {/* === OPTIMISATION === */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Adapter son installation aux saisons</h2>
              <div className="space-y-3">
                {[
                  {
                    t: 'Varier l\'inclinaison été/hiver',
                    d: 'En été, 27-30° est optimal. En hiver, passez à 40-42° pour capter le soleil bas. Les kits Sunology PLAY 2 proposent 3 positions réglables. Gain hivernal : +8 à 12 %.',
                    icon: '&#9728;',
                  },
                  {
                    t: 'Nettoyer avant la saison estivale',
                    d: 'Les dépôts de pollution printaniers réduisent la production de 5-8 % au moment où les kWh valent le plus. Un rinçage à l\'eau avant mai coûte 10 minutes.',
                    icon: '&#9880;',
                  },
                  {
                    t: 'Orienter si vous avez le choix est/ouest',
                    d: 'Un balcon est-ouest avec deux panneaux en configuration séparée produit mieux en autoconsommation qu\'un seul panneau sud. Production étalée de 7h à 20h. Voir notre article sur <a href="/blog/panneau-solaire-est-ouest" class="text-green font-semibold hover:underline">les panneaux est/ouest</a>.',
                    icon: '&#8635;',
                  },
                  {
                    t: 'Consommer quand le panneau produit',
                    d: 'En hiver : pic entre 11h-14h. En été : pic entre 9h-17h. La machine à laver, le lave-vaisselle et la recharge de batterie portable doivent être programmés sur ces plages.',
                    icon: '&#9201;',
                  },
                ].map((item, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">
                      <span className="mr-2" dangerouslySetInnerHTML={{ __html: item.icon }} />
                      {item.t}
                    </h4>
                    <p className="text-xs text-charcoal-light leading-relaxed" dangerouslySetInnerHTML={{ __html: item.d }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">
                Pour aller plus loin sur les stratégies d&apos;orientation, notre <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green font-semibold hover:underline">guide orientation panneau solaire balcon</Link> détaille tous les coefficients par exposition.
              </p>
            </section>

            {/* === CTA CALCULATEUR === */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-bold text-lg mb-2">Calculez votre production annuelle selon votre ville</p>
              <p className="text-sm text-charcoal-light mb-4">Le calculateur prend en compte votre département, orientation, surface et présence à domicile pour estimer vos économies réelles.</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes économies →</Link>
            </div>

            {/* === AFFILIATECTA === */}
            <div className="my-8">
              <AffiliateCTA
                productName="Sunology PLAY 2"
                merchantName="Sunology"
                affiliateUrl="https://sunology.eu/products/play2-kit-solaire"
                label="Voir le kit le plus vendu (450 Wc, 599 €)"
                variant="inline"
                position="mid_article"
              />
            </div>

            {/* === FAQ === */}
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

            {/* === ARTICLES LIÉS === */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/panneau-solaire-hiver-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en hiver : combien ça produit vraiment ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Données mois par mois pour Marseille, Lyon et Lille, et 3 astuces pour maximiser la production hivernale</p>
                </Link>
                <Link href="/blog/panneau-solaire-est-ouest" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon est/ouest : production et rentabilité</h4>
                  <p className="text-xs text-charcoal-light mt-1">80 % du potentiel sud, avantage autoconsommation, et quand c&apos;est même mieux qu&apos;un panneau sud</p>
                </Link>
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation pour un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Sud, est, ouest, nord : coefficients réels et impact sur la production et la rentabilité</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Calcul détaillé des économies réelles pour 7 villes françaises</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2 &mdash; mis &agrave; jour juillet 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Nouveau comparatif vs Beem On 500 Wc (429&euro;) : qui gagne en &eacute;t&eacute; ?</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources et méthodologie :</strong> données PVGIS (Commission européenne, 15 ans de données satellitaires), coefficient thermique -0,40 %/°C (norme IEC 61215), tarif EDF 0,1940 €/kWh (ATRD 2026), inflation énergie 3,3 %/an (CRE), autoconsommation 85 %, PR 0,85, référence Lyon plein sud. <Link href="/methodologie" className="text-green hover:underline">Voir la méthodologie complète</Link>. Cet article contient des liens d&apos;affiliation (Sunology) ; notre avis reste indépendant.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
