import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Batteries portables solaires 2026 : EcoFlow, Bluetti, Jackery comparés',
  description: 'Comparatif complet des meilleures batteries portables solaires en 2026 : EcoFlow DELTA 2, Bluetti AC180, Jackery Explorer, Anker SOLIX. Capacité, prix, usages réels.',
};

const faqData = [
  {
    question: 'Quelle est la différence entre une batterie portable et une batterie solaire fixe ?',
    answer: 'Une batterie portable (type EcoFlow, Bluetti, Jackery) est une unité tout-en-un transportable avec prises CA, USB et ports voiture. Elle peut être rechargée sur secteur ou avec un panneau solaire. Une batterie solaire fixe (type Sunology VAULT, Beem Battery) est dédiée à l\'autoconsommation domestique : elle stocke l\'excédent solaire pour la maison, branchée en permanence. Les portables sont plus flexibles, les fixes sont optimisées pour l\'usage quotidien.',
  },
  {
    question: 'Peut-on recharger une batterie portable avec un kit solaire de balcon ?',
    answer: 'Oui, mais il faut vérifier la compatibilité. La plupart des batteries portables acceptent 200-800 W d\'entrée solaire via prise MC4 ou Anderson. Avec un panneau 300-450 W bien orienté, vous rechargez une batterie 1 kWh en 3-5 heures de plein soleil. Attention : les kits Sunology, Beem et Sunethic sont conçus pour injecter dans votre réseau domestique, pas pour recharger une batterie portable. Il faut des panneaux dédiés (Jackery SolarSaga, EcoFlow 400W, etc.).',
  },
  {
    question: 'Quelle capacité choisir pour un usage balcon ?',
    answer: 'Pour un usage balcon (backup coupure de courant, soutien ponctuel), une capacité de 1 à 1,5 kWh suffit largement : elle alimente un frigo pendant 24h ou une box internet + lumières pendant 2-3 jours. Pour un usage plus intensif (télétravail en coupure, recharger un vélo électrique), visez 2 kWh+. Au-delà de 3 kWh, on est dans du stockage domestique semi-fixe, mieux servi par une Sunology VAULT ou Beem Battery.',
  },
  {
    question: 'Les batteries LiFePO4 sont-elles vraiment plus durables ?',
    answer: 'Oui, nettement. Les batteries LiFePO4 (lithium fer phosphate) acceptent 3 000 à 6 000 cycles de charge-décharge contre 500 à 1 000 pour les anciennes lithium-ion NMC. En usage quotidien, ça fait la différence entre 5 ans et 15-20 ans de durée de vie. Les modèles récents (EcoFlow DELTA 2, Bluetti AC180, Anker SOLIX) sont quasi tous en LiFePO4. Évitez les modèles "EcoFlow RIVER 2" ou "Jackery Explorer 1000 v1" qui sont encore en NMC.',
  },
  {
    question: 'Quelle marque est la plus fiable en 2026 ?',
    answer: 'Les trois leaders — EcoFlow, Bluetti, Jackery — ont tous des SAV français opérationnels et des taux de panne inférieurs à 2%. EcoFlow a l\'écosystème le plus complet (panneaux, batteries additionnelles, onduleurs PowerStream). Bluetti offre généralement le meilleur rapport capacité/prix. Jackery reste la référence du nomade avec un design compact et une interface simple. Anker SOLIX est un nouveau venu sérieux (support Anker légendaire).',
  },
  {
    question: 'Combien de temps tient une batterie portable en backup pour un appartement ?',
    answer: 'Ça dépend de votre consommation. Exemple concret avec une EcoFlow DELTA 2 (1 kWh) : frigo moderne (~50 W) + box internet (~20 W) + quelques LED = 100 W en continu, soit 10 heures d\'autonomie. Un micro-ondes ou un chauffage vide la batterie en 1-2h. En coupure de courant courte (jusqu\'à 8-12h), une batterie 1-1,5 kWh couvre l\'essentiel. Pour une journée entière avec télétravail, prévoyez 2-3 kWh.',
  },
];

const batteries = [
  {
    num: 1,
    nom: 'EcoFlow DELTA 2',
    marque: 'EcoFlow',
    prix: '749-899 €',
    capacite: '1 024 Wh',
    puissance: '1 800 W',
    note: '9/10',
    entree_solaire: '500 W max',
    cycles: '3 000+',
    poids: '12 kg',
    points_forts: [
      'Charge ultra-rapide (80% en 50 minutes)',
      'Extensible jusqu\'à 3 kWh avec batterie additionnelle',
      'Application mobile très complète',
      'Technologie LiFePO4 (3 000 cycles)',
    ],
    points_faibles: [
      'Prix élevé',
      'Un peu encombrant pour du vrai nomade',
    ],
    verdict: 'Notre choix n°1 pour un usage domestique. Excellent compromis capacité/fiabilité.',
  },
  {
    num: 2,
    nom: 'Bluetti AC180',
    marque: 'Bluetti',
    prix: '699-799 €',
    capacite: '1 152 Wh',
    puissance: '1 800 W',
    note: '8,5/10',
    entree_solaire: '500 W max',
    cycles: '3 500+',
    poids: '16 kg',
    points_forts: [
      'Meilleur rapport capacité/prix (1 152 Wh pour 699 €)',
      'Mode Turbo Boost 2 700 W (cafetière, micro-ondes)',
      'Charge rapide 80% en 45 minutes',
      'LiFePO4 3 500 cycles',
    ],
    points_faibles: [
      'Plus lourd que l\'EcoFlow DELTA 2',
      'Application mobile perfectible',
    ],
    verdict: 'Le meilleur rapport qualité/prix. Un peu moins élégant mais redoutablement efficace.',
  },
  {
    num: 3,
    nom: 'Jackery Explorer 1000 Plus',
    marque: 'Jackery',
    prix: '899-1 099 €',
    capacite: '1 264 Wh',
    puissance: '2 000 W',
    note: '8,5/10',
    entree_solaire: '800 W max',
    cycles: '4 000+',
    poids: '14 kg',
    points_forts: [
      'Design le plus compact du comparatif',
      'Extensible jusqu\'à 5 kWh avec batteries add.',
      'Entrée solaire jusqu\'à 800 W (très rapide)',
      'LiFePO4 4 000 cycles',
    ],
    points_faibles: [
      'Prix premium',
      'Moins d\'options via app mobile',
    ],
    verdict: 'Le choix design et évolutif. Parfait si vous voulez pouvoir étendre plus tard.',
  },
  {
    num: 4,
    nom: 'Anker SOLIX C1000',
    marque: 'Anker',
    prix: '799-899 €',
    capacite: '1 056 Wh',
    puissance: '1 800 W',
    note: '8/10',
    entree_solaire: '600 W max',
    cycles: '3 000+',
    poids: '12,9 kg',
    points_forts: [
      'Nouveau venu, finitions premium',
      'Mode silencieux en charge secteur',
      'App mobile Anker (très bien faite)',
      '11 prises différentes',
    ],
    points_faibles: [
      'Marque moins installée sur ce segment',
      'SAV parfois plus lent',
    ],
    verdict: 'Prometteur. Si vous aimez l\'écosystème Anker (chargeurs, etc.), c\'est cohérent.',
  },
  {
    num: 5,
    nom: 'EcoFlow RIVER 3',
    marque: 'EcoFlow',
    prix: '299-399 €',
    capacite: '245 Wh',
    puissance: '600 W',
    note: '7,5/10',
    entree_solaire: '220 W max',
    cycles: '3 000+',
    poids: '3,4 kg',
    points_forts: [
      'Le plus léger et compact',
      'Prix accessible',
      'Parfait pour backup ponctuel (box, frigo mini)',
      'LiFePO4',
    ],
    points_faibles: [
      'Capacité limitée (2-3h pour 100 W de conso)',
      'Pas adapté à un usage intensif',
    ],
    verdict: 'Le choix "entrée de gamme" ou secondaire. À prendre en complément d\'une plus grosse.',
  },
  {
    num: 6,
    nom: 'Bluetti AC70',
    marque: 'Bluetti',
    prix: '499-599 €',
    capacite: '768 Wh',
    puissance: '1 000 W',
    note: '7,5/10',
    entree_solaire: '500 W max',
    cycles: '3 000+',
    poids: '10 kg',
    points_forts: [
      'Bon prix pour sa capacité',
      'Taille intermédiaire polyvalente',
      'LiFePO4',
    ],
    points_faibles: [
      'Puissance limitée à 1 000 W (pas de micro-ondes, chauffage)',
      'Moins d\'options que l\'AC180',
    ],
    verdict: 'Le bon compromis si vous voulez du Bluetti sans aller jusqu\'au haut de gamme.',
  },
];

const cas_usage = [
  {
    titre: 'Backup ponctuel (coupures de courant)',
    reco: 'EcoFlow RIVER 3 (245 Wh) ou Bluetti AC70 (768 Wh)',
    explication: 'Pour 1 à 4 heures de coupure, pas besoin de gros. 245 Wh suffisent pour frigo + box + LED pendant ~2h. Budget 300-500 €.',
  },
  {
    titre: 'Télétravail pendant une coupure',
    reco: 'EcoFlow DELTA 2 (1 024 Wh) ou Bluetti AC180 (1 152 Wh)',
    explication: 'Pour faire tourner ordinateur + écran + box + lumière pendant 8-10h, comptez 1 kWh. Budget 700-900 €.',
  },
  {
    titre: 'Usage nomade (van, bateau, camping)',
    reco: 'Jackery Explorer 1000 Plus',
    explication: 'Compact, design, robustement construit. Son entrée solaire 800 W permet de recharger vite avec un panneau portable. Budget 900-1 100 €.',
  },
  {
    titre: 'Complément kit solaire balcon',
    reco: 'Sunology VAULT ou Beem Battery (solutions fixes)',
    explication: 'Pour stocker l\'excédent d\'un kit solaire de balcon, les batteries fixes domestiques sont plus adaptées. Les portables demandent du branchement manuel.',
  },
];

export default function BatteriesPortablesPage() {
  return (
    <>
      <SchemaArticle
        title="Batteries portables solaires 2026 : EcoFlow, Bluetti, Jackery comparés"
        description="Comparatif complet des meilleures batteries portables solaires 2026."
        url="https://monbalconsolaire.fr/blog/batteries-portables-solaires-comparatif"
        datePublished="2026-04-21"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Accessoires', href: '/accessoires' }, { label: 'Batteries portables' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Batteries portables solaires : comparatif 2026 (EcoFlow, Bluetti, Jackery)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Ces stations électriques portables cumulent batterie, onduleur et prises tout-en-un. Pour un backup de coupure, un télétravail nomade ou un complément solaire, voici les 6 modèles qui valent vraiment leur prix en 2026.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>21 avril 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Pour la majorité des usages en appartement, <strong>l&apos;EcoFlow DELTA 2</strong> (749-899 €) reste le meilleur choix en 2026 : 1 kWh, LiFePO4, écosystème complet. Si le budget est serré, <strong>la Bluetti AC180</strong> (699 €) offre 12% de capacité en plus pour moins cher. Pour un usage nomade pur (van, camping), <strong>la Jackery Explorer 1000 Plus</strong> reste la référence design et compacte.
            </p>
          </div>

          <div className="space-y-10">
            {/* Pourquoi une batterie portable */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Batterie portable ou batterie solaire fixe : que choisir ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant de parler des modèles, clarifions une confusion très fréquente. Il existe <strong>deux familles distinctes</strong> de batteries :
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">🔋 Batterie portable (ce comparatif)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                    Unité tout-en-un avec prises, poignée, écran. Transportable. Rechargeable sur secteur, panneau solaire, voiture.
                  </p>
                  <p className="text-xs text-stone">
                    <strong>Usages :</strong> backup coupure, camping, van, chantier, extérieur.
                  </p>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">🏠 Batterie solaire fixe</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                    Boîtier mural branché en permanence sur votre kit solaire de balcon. Stocke l&apos;excédent pour le soir.
                  </p>
                  <p className="text-xs text-stone">
                    <strong>Exemples :</strong> Sunology VAULT, Beem Battery. Voir notre <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">comparatif dédié</Link>.
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Cet article compare les <strong>batteries portables</strong>. Si vous cherchez à optimiser l&apos;autoconsommation d&apos;un kit solaire de balcon (Sunology, Beem), orientez-vous vers les batteries fixes — elles sont plus adaptées.
              </p>
            </section>

            {/* Tableau comparatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau comparatif rapide</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Modèle</th>
                      <th className="text-center p-3">Capacité</th>
                      <th className="text-center p-3">Puissance</th>
                      <th className="text-center p-3">Poids</th>
                      <th className="text-center p-3">Prix</th>
                      <th className="text-center p-3 rounded-tr-xl">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batteries.map((b, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{b.nom}</td>
                        <td className="text-center p-3 font-mono text-xs">{b.capacite}</td>
                        <td className="text-center p-3 font-mono text-xs">{b.puissance}</td>
                        <td className="text-center p-3 text-xs">{b.poids}</td>
                        <td className="text-center p-3 font-mono text-xs">{b.prix}</td>
                        <td className="text-center p-3">
                          <span className="text-xs font-bold text-green">{b.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Les 6 batteries en détail */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 6 batteries en détail</h2>
              <div className="space-y-6">
                {batteries.map((b) => (
                  <div key={b.num} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-lg bg-amber text-white flex items-center justify-center font-bold text-sm">{b.num}</span>
                          <h3 className="font-bold text-lg">{b.nom}</h3>
                        </div>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">
                          {b.marque} &middot; {b.capacite} &middot; {b.puissance}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-green text-lg">{b.prix}</div>
                        <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">
                          Note : {b.note}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-2 mb-4 pb-3 border-b border-border-light text-xs">
                      <div>
                        <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Entrée solaire</span>
                        <div className="font-mono font-semibold">{b.entree_solaire}</div>
                      </div>
                      <div>
                        <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Cycles</span>
                        <div className="font-mono font-semibold">{b.cycles}</div>
                      </div>
                      <div>
                        <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Poids</span>
                        <div className="font-mono font-semibold">{b.poids}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <div className="bg-green-pale/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-green mb-2">✓ Points forts</p>
                        <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                          {b.points_forts.map((p, i) => (
                            <li key={i}>&bull; {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-amber-pale/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-dark mb-2">⚠️ Points faibles</p>
                        <ul className="text-xs text-charcoal-light leading-relaxed space-y-1">
                          {b.points_faibles.map((p, i) => (
                            <li key={i}>&bull; {p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-cream/60 rounded-lg p-3">
                      <p className="text-xs font-semibold text-charcoal mb-1">💡 Notre verdict</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{b.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quelle batterie selon usage */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quelle batterie pour quel usage ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le bon choix dépend entièrement de ce que vous allez en faire. Voici les 4 profils d&apos;usage les plus fréquents :
              </p>
              <div className="space-y-3">
                {cas_usage.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{c.titre}</h4>
                    <p className="text-xs text-amber font-semibold mb-2">→ Notre reco : {c.reco}</p>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Critères de choix */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 critères à vérifier avant d&apos;acheter</h2>
              <div className="space-y-3">
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">1. Technologie de batterie (LiFePO4 obligatoire)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Les LiFePO4 acceptent 3 000-6 000 cycles, durée de vie 10-15 ans. Les NMC (ancienne génération) : 500-1 000 cycles, 3-5 ans. La différence est énorme sur le long terme.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">2. Puissance en sortie (watts)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Indique ce que vous pouvez brancher. Moins de 1 000 W = pas de micro-ondes, cafetière, chauffage. 1 800 W+ = la plupart des appareils domestiques fonctionnent.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">3. Capacité utile (Wh vs kWh)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    1 kWh = 1 000 Wh = environ 10 heures pour 100 W de consommation continue. Pour estimer : une box internet consomme ~15 W, un frigo moderne ~50 W (en moyenne sur 24h), une LED ~5 W, un ordinateur portable ~60 W.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">4. Vitesse de charge secteur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Essentielle pour recharger rapidement avant une coupure annoncée ou un départ. Les meilleures batteries se rechargent à 80% en 45-60 minutes. Les anciens modèles prennent 6-8 heures.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">5. Entrée solaire maximale</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si vous comptez coupler la batterie à un panneau solaire portable, vérifiez l&apos;entrée max (200-800 W). Une entrée 800 W permet de recharger une batterie 1 kWh en 2-3h de plein soleil.
                  </p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Vous avez un kit solaire de balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Une batterie portable n&apos;est pas la solution la plus efficace pour stocker l&apos;excédent solaire. Calculez d&apos;abord votre production pour choisir la bonne stratégie.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Sunology VAULT, Beem Battery : les solutions fixes pour optimiser l&apos;autoconsommation</p>
                </Link>
                <Link href="/blog/mini-kits-solaires-amazon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mini kits solaires Amazon &lt; 300 €</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les kits portables à petit budget pour tester le solaire</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire : comment ça marche</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe du talon, surplus et stockage expliqué simplement</p>
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
                      <span className="text-stone group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Note :</strong> prix indicatifs constatés en avril 2026 (sites fabricants, Amazon, Cdiscount). Ils varient selon les promotions. Les liens affiliés seront ajoutés une fois nos inscriptions Amazon Partenaires, EcoFlow et Bluetti validées.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
