import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Talon de consommation : comment le calculer et l\'effacer avec le solaire',
  description: 'Qu\'est-ce que le talon de consommation, comment le mesurer avec Linky, et comment un kit solaire de balcon peut le couvrir entièrement. Méthode pas à pas.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/talon-consommation-solaire',
  },
};

const faqData = [
  {
    question: 'C\'est quoi le talon de consommation ?',
    answer: 'Le talon de consommation (ou "bruit de fond électrique") est la quantité minimale d\'électricité que votre foyer consomme en permanence, même quand vous dormez ou êtes absent. Il est composé des appareils qui tournent 24h/24 : frigo, congélateur, box internet, VMC, veilles diverses. Un foyer moyen a un talon de 150 à 400 W, soit 1 300 à 3 500 kWh/an.',
  },
  {
    question: 'Comment mesurer mon talon de consommation avec le compteur Linky ?',
    answer: 'Éteignez tous les appareils non essentiels (lumières, TV, ordinateur, plaques, four). Appuyez sur le bouton "+" de votre Linky jusqu\'à voir la puissance instantanée en VA (Volt-Ampère). Cette valeur est votre talon. Par exemple, si vous lisez 250 VA, votre talon est d\'environ 250 W, soit 2 190 kWh/an (250 × 24 × 365 / 1 000).',
  },
  {
    question: 'Un kit solaire de balcon peut-il couvrir le talon ?',
    answer: 'Oui, c\'est même son usage idéal. Un kit de 400-460 W produit en moyenne 150-200 W en continu sur la journée (pas en crête). C\'est pile dans la fourchette du talon moyen. L\'avantage : le talon consomme en permanence, donc chaque watt produit par le panneau est immédiatement autoconsommé, sans perte. C\'est pour ça qu\'un kit solaire couvre d\'abord le talon.',
  },
  {
    question: 'Quelle puissance de kit pour effacer mon talon ?',
    answer: 'Règle simple : un kit de 400-500 W couvre un talon de 150-250 W (le plus courant). Si votre talon dépasse 300 W (congélateur + chauffe-eau + VMC + box), visez 800-840 W avec un setup type Zendure SolarFlow + 2 panneaux. Avec une batterie en plus, vous couvrez aussi la nuit.',
  },
  {
    question: 'Pourquoi le talon est-il important pour la rentabilité solaire ?',
    answer: 'Le talon, c\'est de la consommation garantie 24h/24. Tout watt solaire produit pendant que le talon tourne est automatiquement autoconsommé : il ne part pas sur le réseau gratuitement. Plus votre talon est élevé et stable, plus un kit solaire est rentable. C\'est pour ça qu\'on dit qu\'il faut "dimensionner son kit sur son talon".',
  },
  {
    question: 'Le talon existe-t-il la nuit aussi ?',
    answer: 'Oui, c\'est même là qu\'il est le plus visible : frigo, congélateur, box internet, VMC, veilles. Votre Linky montre la consommation la plus basse entre 2h et 5h du matin. Sans batterie, un panneau solaire ne couvre pas ce talon nocturne. Avec une batterie (Zendure SolarFlow, EcoFlow PowerStream + DELTA), vous stockez le surplus du jour pour alimenter le talon de nuit.',
  },
];

const appareils = [
  { nom: 'Réfrigérateur', puissance: '30-50 W', annuel: '260-440 kWh', permanent: true },
  { nom: 'Congélateur', puissance: '30-60 W', annuel: '260-525 kWh', permanent: true },
  { nom: 'Box internet + TV box', puissance: '15-30 W', annuel: '130-260 kWh', permanent: true },
  { nom: 'VMC', puissance: '15-40 W', annuel: '130-350 kWh', permanent: true },
  { nom: 'Chauffe-eau (cumulus)', puissance: '50-80 W (moyenné)', annuel: '440-700 kWh', permanent: true },
  { nom: 'Veilles (TV, décodeur, micro-ondes, etc.)', puissance: '20-50 W', annuel: '175-440 kWh', permanent: false },
  { nom: 'Chargeurs branchés à vide', puissance: '5-15 W', annuel: '44-130 kWh', permanent: false },
  { nom: 'Éclairage LED (3-5 ampoules)', puissance: '15-25 W', annuel: '50-90 kWh (12h/j)', permanent: false },
];

export default function TalonConsommationPage() {
  return (
    <>
      <SchemaArticle
        title="Talon de consommation : comment le calculer et l'effacer avec le solaire"
        description="Guide complet sur le talon de consommation et comment un kit solaire de balcon peut le couvrir."
        url="https://monbalconsolaire.fr/blog/talon-consommation-solaire"
        datePublished="2026-05-10"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Talon de consommation' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Comprendre</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Talon de consommation : comment le calculer et l&apos;effacer avec le solaire
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le talon de consommation, c&apos;est l&apos;électricité que votre foyer brûle <strong>en permanence</strong>, même quand vous dormez. Frigo, box internet, VMC, veilles : ça tourne 24h/24 et ça vous coûte <strong>300 à 900 € par an</strong> sans que vous le voyiez. Bonne nouvelle : c&apos;est exactement ce qu&apos;un kit solaire de balcon peut couvrir.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>10 mai 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; Le <strong>talon</strong> = consommation minimale permanente de votre foyer (150-400 W)</li>
              <li>&bull; Il représente <strong>30 à 50 %</strong> de votre facture EDF annuelle</li>
              <li>&bull; Vous pouvez le mesurer en 2 minutes avec votre <strong>compteur Linky</strong></li>
              <li>&bull; Un kit solaire de 400-460 W <strong>couvre le talon moyen</strong> pendant les heures ensoleillées</li>
              <li>&bull; Avec une batterie, vous effacez aussi le talon <strong>de nuit</strong></li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Qu&apos;est-ce que le talon de consommation ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le talon de consommation (aussi appelé &laquo; bruit de fond électrique &raquo;) est la <strong>puissance minimale que votre foyer consomme en permanence</strong>. C&apos;est ce que vous consommez à 3h du matin un mardi, quand tout le monde dort et que rien n&apos;est allumé volontairement.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ce talon est composé d&apos;appareils qui tournent <strong>24 heures sur 24, 365 jours par an</strong> : votre réfrigérateur, votre congélateur, votre box internet, votre VMC, votre chauffe-eau, et toutes les veilles de vos appareils électroniques.
              </p>
              <div className="grid md:grid-cols-3 gap-3 my-6">
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-2xl">150-400 W</div>
                  <div className="text-xs text-stone mt-1">Talon moyen d&apos;un foyer</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-2xl">1 300-3 500</div>
                  <div className="text-xs text-stone mt-1">kWh/an consommés en talon</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-2xl">252-679 €</div>
                  <div className="text-xs text-stone mt-1">Coût annuel (0,1940 €/kWh)</div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Autrement dit : <strong>un tiers à la moitié de votre facture EDF</strong> sert à alimenter des appareils que vous n&apos;utilisez même pas activement. C&apos;est de l&apos;argent qui part en silence, et c&apos;est exactement la cible idéale du solaire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les appareils qui composent votre talon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Voici la liste des coupables habituels, avec leur consommation réelle :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Appareil</th>
                      <th className="p-3 text-left font-bold">Puissance</th>
                      <th className="p-3 text-left font-bold">kWh/an</th>
                      <th className="p-3 text-left font-bold">24h/24 ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appareils.map((a, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{a.nom}</td>
                        <td className="p-3 font-mono text-xs">{a.puissance}</td>
                        <td className="p-3 font-mono text-xs">{a.annuel}</td>
                        <td className="p-3">{a.permanent ? <span className="text-amber-dark font-bold">Oui</span> : <span className="text-stone">Variable</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Le calcul rapide :</strong> additionnez les puissances de vos appareils permanents. Si vous avez un frigo (40 W) + congélateur (40 W) + box (20 W) + VMC (25 W) + veilles (30 W) = <strong>155 W de talon</strong>. Ajoutez le chauffe-eau (50-80 W moyennés) et vous êtes à <strong>200-235 W</strong>. C&apos;est le talon typique d&apos;un appartement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Méthode 1 : mesurer avec le compteur Linky</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La méthode la plus fiable et la plus rapide. Tout le monde a un Linky, voici comment faire :
              </p>
              <div className="space-y-4">
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Éteignez tout ce qui n&apos;est pas permanent</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">Lumières, TV, ordinateur, plaques, four, lave-linge, lave-vaisselle. Laissez tourner uniquement ce qui tourne toujours : frigo, congélateur, box, VMC, chauffe-eau.</p>
                    </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Appuyez sur le bouton &laquo; + &raquo; du Linky</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">Appuyez plusieurs fois jusqu&apos;à voir la <strong>puissance instantanée en VA</strong> (Volt-Ampère). C&apos;est votre talon en temps réel.</p>
                    </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Calculez le coût annuel</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">Talon annuel = VA × 24h × 365j / 1 000 = kWh/an. Multipliez par 0,1940 € pour le coût.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-lg bg-cream/40 mt-6">
                <h4 className="font-bold text-sm mb-3">Exemple concret</h4>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; Linky affiche : <strong className="font-mono">220 VA</strong></li>
                  <li>&bull; Consommation annuelle : 220 × 24 × 365 / 1 000 = <strong className="font-mono">1 927 kWh/an</strong></li>
                  <li>&bull; Coût annuel : 1 927 × 0,1940 = <strong className="font-mono text-amber-dark">374 €/an</strong></li>
                  <li>&bull; C&apos;est <strong>374 € par an qui partent en silence</strong>, sans que vous utilisiez activement quoi que ce soit.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Méthode 2 : via l&apos;app Enedis ou Ma Conso+</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous ne voulez pas vous accroupir devant le compteur, l&apos;app <strong>Enedis à mes côtés</strong> (ou le site enedis.fr) montre votre consommation heure par heure. Cherchez la consommation la plus basse, typiquement entre <strong>2h et 5h du matin</strong>. C&apos;est votre talon.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Multipliez cette valeur horaire par 8 760 (heures dans une année) pour obtenir votre talon annuel en kWh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Étape 1 : réduire le talon (gratuit)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant d&apos;investir dans un kit solaire, réduisez d&apos;abord ce qui est inutile. C&apos;est gratuit et immédiat :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Multiprises à interrupteur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Branchez TV + décodeur + console sur une multiprise et coupez-la le soir. Gain : 20-50 W soit <strong>44-110 €/an</strong>. Investissement : 10 €.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Débranchez les chargeurs à vide</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un chargeur branché sans téléphone consomme 0,5-3 W. Avec 5 chargeurs : 15 W inutiles soit <strong>33 €/an</strong>.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Programmez le chauffe-eau</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un chauffe-eau électrique en marche forcée 24h/24 consomme bien plus qu&apos;en heures creuses (6h/jour suffisent). Gain possible : <strong>100-200 €/an</strong>.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Éteignez la box la nuit</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Votre box internet consomme 15-30 W en permanence. Une prise programmable qui la coupe de minuit à 6h économise <strong>10-20 €/an</strong>. Pas énorme, mais c&apos;est gratuit en effort.</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                <strong>Résultat :</strong> en appliquant ces gestes, vous pouvez réduire votre talon de <strong>50 à 100 W</strong>, soit 100-220 €/an d&apos;économies sans investissement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Étape 2 : effacer le talon avec un kit solaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Une fois le talon réduit au minimum incompressible (frigo + congélateur + VMC), un kit solaire de balcon peut <strong>le couvrir entièrement pendant les heures ensoleillées</strong>. Voici pourquoi c&apos;est si efficace :
              </p>
              <div className="card-lg bg-green-pale/30 border-green/10 mb-4">
                <h4 className="font-bold text-sm mb-3 text-green">Pourquoi le talon + le solaire = match parfait</h4>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li><span className="text-green font-bold mr-2">1.</span> Le talon consomme <strong>en continu</strong> → chaque watt produit par le panneau est autoconsommé instantanément</li>
                  <li><span className="text-green font-bold mr-2">2.</span> Pas de surplus perdu → le talon &laquo; absorbe &raquo; toute la production tant que le soleil est là</li>
                  <li><span className="text-green font-bold mr-2">3.</span> Taux d&apos;autoconsommation maximal → 80-100 % de la production est valorisée</li>
                  <li><span className="text-green font-bold mr-2">4.</span> Rentabilité optimale → ROI de 6-8 ans car aucune perte</li>
                </ul>
              </div>

              <h3 className="font-bold text-lg mb-3 mt-8">Quel kit pour quel talon ?</h3>
              <div className="space-y-4">
                <div className="card-lg border-l-4 border-l-green">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h4 className="font-bold text-base">Talon 100-200 W (appartement standard)</h4>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">Frigo + box + veilles</p>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                    Un kit mono-panneau suffit : <Link href="/avis/sunology-play-2" className="text-green hover:underline font-semibold">Sunology PLAY 2</Link> (450 Wc, 599 €) ou <Link href="/avis/beem-on-460w" className="text-green hover:underline font-semibold">Beem On 460W</Link> (599 €). Production moyenne de 150-200 W en journée, pile sur votre talon.
                  </p>
                  <p className="text-xs text-stone">ROI estimé : 6-8 ans · Économies : 80-100 €/an</p>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h4 className="font-bold text-base">Talon 200-350 W (appartement + congélateur/chauffe-eau)</h4>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">Frigo + congélateur + VMC + box + cumulus</p>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                    Visez 800-840 W de panneaux : <Link href="/avis/zendure-solarflow" className="text-green hover:underline font-semibold">Zendure SolarFlow + 2 panneaux 420 W</Link> (~900 €). Avec la batterie 1,92 kWh, vous couvrez aussi une partie du talon de nuit.
                  </p>
                  <p className="text-xs text-stone">ROI estimé : 6-7 ans · Économies : 130-145 €/an</p>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h4 className="font-bold text-base">Talon 350+ W (maison ou tout-électrique)</h4>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">Tout ce qui précède + PAC + domotique</p>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                    Un kit plug-and-play de balcon ne suffira pas seul. Vous pouvez couvrir une partie du talon avec 840 W de panneaux + batterie, mais pour un talon de 400+ W, une installation toiture devient plus pertinente. Notre guide reste focalisé sur le solaire de balcon.
                  </p>
                  <p className="text-xs text-stone">Le solaire de balcon reste utile : il couvre 50-70 % du talon</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le talon de nuit : faut-il une batterie ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Votre talon tourne aussi la nuit. Sans batterie, un panneau solaire ne produit rien entre le coucher et le lever du soleil. Faut-il investir dans du stockage ?
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2 text-green">Sans batterie</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>&bull; Vous couvrez le talon <strong>de jour uniquement</strong> (~10-14h)</li>
                    <li>&bull; Taux d&apos;autoconsommation : 40-50 %</li>
                    <li>&bull; Budget : 299-599 € (1 kit)</li>
                    <li>&bull; ROI : 6-8 ans</li>
                    <li>&bull; <strong>Suffisant pour la plupart des foyers</strong></li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2 text-amber-dark">Avec batterie</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>&bull; Vous couvrez le talon <strong>jour ET nuit</strong></li>
                    <li>&bull; Taux d&apos;autoconsommation : 70-85 %</li>
                    <li>&bull; Budget : 488-900 € (SolarFlow + panneaux)</li>
                    <li>&bull; ROI : 6-7 ans</li>
                    <li>&bull; <strong>Intéressant si talon &gt; 200 W</strong></li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                <strong>Notre recommandation :</strong> si vous êtes absent la journée et consommez surtout le soir/nuit, la batterie fait sens. Si vous êtes souvent chez vous (télétravail, retraite), un kit sans batterie suffit car vous autoconsommez déjà pendant la production.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul complet : combien vous économisez</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons un exemple concret avec un talon mesuré à <strong>200 W</strong> (appartement 3 pièces, Lyon) :
              </p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Talon annuel</strong> : 200 W × 24h × 365j / 1 000 = <strong className="font-mono">1 752 kWh/an</strong></li>
                  <li>&bull; <strong>Coût sans solaire</strong> : 1 752 × 0,1940 = <strong className="font-mono text-amber-dark">340 €/an</strong></li>
                  <li>&bull; <strong>Kit Sunology PLAY 2</strong> (450 Wc, 599 €) → produit 465 kWh/an</li>
                  <li>&bull; <strong>Autoconsommation à 45 %</strong> = 209 kWh valorisés → <strong className="font-mono text-green">41 €/an</strong> d&apos;économies</li>
                  <li>&bull; <strong>Zendure SolarFlow + 2 × 420 W</strong> (900 €) → 870 kWh/an, 80 % autoconsommé</li>
                  <li>&bull; <strong>696 kWh valorisés</strong> → <strong className="font-mono text-green">135 €/an</strong> d&apos;économies</li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Avec le setup Zendure, vous effacez <strong>40 % de votre talon annuel</strong> (696 kWh sur 1 752). Avec la hausse du tarif EDF (+4-5 %/an), les économies passent à 160+ €/an dès la 3ème année.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien coûte votre talon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Calculez vos économies solaires selon votre département et votre exposition.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes économies &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire : comment ça marche</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe technique du talon, du surplus et de l&apos;injection réseau</p>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow 800 Plus</h4>
                  <p className="text-xs text-charcoal-light mt-1">La batterie plug-and-play pour effacer le talon de nuit</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Calcul réel de rentabilité par ville et par kit</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Pourquoi 0 W au Linky est souvent une bonne nouvelle</p>
                </Link>
                <Link href="/blog/panneau-solaire-est-ouest" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Balcon est/ouest : pourquoi c&apos;est mieux pour le talon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Production &eacute;tal&eacute;e = autoconsommation naturelle 50-60 %</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

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

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> données de consommation ADEME, fiches techniques constructeurs, relevés Linky communautaires forum-photovoltaique.fr (mai 2026). Tarif EDF base mai 2026 : 0,1940 €/kWh.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
