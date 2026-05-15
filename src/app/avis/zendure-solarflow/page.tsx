import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Zendure SolarFlow avis 2026 : 840 W pour 488 €, trop beau ?',
  description: 'Avis complet sur le Zendure SolarFlow 800 Plus : batterie 1,92 kWh intégrée, 800 W AC, plug-and-play pour 488 €. Test, specs, rentabilité et verdict honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/zendure-solarflow',
  },
};

const faqData = [
  {
    question: 'Quelle est la différence entre SolarFlow 800, 800 Plus et 800 Pro ?',
    answer: 'Le SolarFlow 800 est le micro-onduleur seul (sans batterie intégrée), vendu avec des batteries AB2000 séparées. Le SolarFlow 800 Plus intègre la batterie 1,92 kWh dans le boîtier avec l\'onduleur : c\'est le tout-en-un plug-and-play à ~488 €. Le 800 Pro ajoute l\'IA Zenky pour l\'optimisation automatique heures pleines/creuses et une meilleure gestion multi-batteries. Prix : ~786 €.',
  },
  {
    question: 'Le SolarFlow 800 Plus fonctionne-t-il en cas de coupure de courant ?',
    answer: 'Non. C\'est le principal point faible : le SolarFlow 800 Plus n\'a pas de sortie hors réseau (EPS). En cas de coupure du réseau électrique, le système s\'arrête. Si vous voulez un backup en cas de panne, il faut regarder du côté de l\'EcoFlow PowerStream + batterie DELTA, qui offre cette fonctionnalité.',
  },
  {
    question: 'Combien de panneaux solaires peut-on brancher ?',
    answer: 'Le SolarFlow 800 Plus dispose de 2 entrées MPPT de 750 W chacune, soit 1 500 W max en entrée solaire. En pratique, 2 panneaux de 400-500 W couvrent largement les besoins. Pour un balcon, 2 panneaux de 420 W (840 W total) est la configuration optimale : assez pour remplir la batterie de 1,92 kWh en une demi-journée ensoleillée.',
  },
  {
    question: 'Faut-il faire la déclaration CACSI à Enedis ?',
    answer: 'Oui. Comme tout système connecté au réseau domestique, le SolarFlow nécessite la déclaration CACSI (Convention d\'Autoconsommation Sans Injection). La procédure est la même que pour un Sunology ou Beem : 25 minutes en ligne, gratuit. Zendure fournit l\'attestation de conformité dans la documentation.',
  },
  {
    question: 'La batterie LFP de 1,92 kWh, ça dure combien de temps ?',
    answer: 'Zendure annonce 6 000 cycles à 80 % de capacité résiduelle. Avec un cycle par jour (charge le jour, décharge le soir), ça représente plus de 16 ans d\'utilisation. Sur sa durée de vie, la batterie stockera entre 10 000 et 12 000 kWh au total. La chimie LiFePO4 est la plus fiable du marché : pas de risque d\'emballement thermique, très stable.',
  },
  {
    question: 'L\'application Zendure est-elle bien ?',
    answer: 'Oui, c\'est l\'une des meilleures du marché. Elle permet le suivi de production en temps réel, la programmation heures pleines/creuses, l\'historique de production jour/semaine/mois, et la compatibilité avec les SmartMeters (Shelly, etc.) pour optimiser l\'autoconsommation. L\'IA Zenky (sur le modèle Pro) apprend vos habitudes de consommation pour optimiser automatiquement.',
  },
];

const points_forts = [
  {
    titre: 'Prix imbattable : batterie + onduleur pour ~488 €',
    detail: 'C\'est le point qui change tout. Pour moins de 500 €, vous avez un onduleur 800 W ET une batterie 1,92 kWh intégrée. À titre de comparaison, un Sunology PLAY MAX (panneau + batterie 700 Wh) coûte 1 179 €. Le rapport €/kWh de stockage est sans équivalent sur le marché français.',
  },
  {
    titre: 'Vrai plug-and-play : batterie intégrée dans le boîtier',
    detail: 'Contrairement au SolarFlow 800 classique qui nécessite d\'empiler des batteries séparées, le 800 Plus est un bloc unique de 21 kg. Vous branchez vos panneaux d\'un côté, la prise de l\'autre, et c\'est parti. Pas de câblage complexe entre modules.',
  },
  {
    titre: '6 000 cycles LiFePO4 : 16+ ans de durée de vie',
    detail: 'La chimie Lithium Fer Phosphate (LFP) est la référence pour le stockage stationnaire. 6 000 cycles garantis, c\'est 2 à 3 fois plus que les batteries NMC utilisées par certains concurrents. Et contrairement aux batteries portables EcoFlow, celle-ci est optimisée pour le cyclage quotidien.',
  },
  {
    titre: '2 MPPT indépendants de 750 W chacun',
    detail: 'Vous pouvez brancher 2 panneaux avec des orientations différentes (par ex. un est, un ouest) sans perte de rendement. Chaque MPPT optimise indépendamment son panneau. Puissance totale d\'entrée : 1 500 W, largement dimensionné pour 2 panneaux 400-500 W.',
  },
  {
    titre: 'Extensible jusqu\'à 11,5 kWh',
    detail: 'Le 800 Plus accepte jusqu\'à 5 batteries AB2000 supplémentaires en série. Si vos besoins augmentent, vous pouvez passer de 1,92 kWh à 11,5 kWh sans changer d\'onduleur. Un vrai système évolutif.',
  },
];

const points_faibles = [
  {
    titre: 'Pas de sortie hors réseau (EPS)',
    detail: 'C\'est LE défaut majeur. En cas de coupure de courant, le SolarFlow s\'arrête. Votre batterie chargée ne sert à rien. Si le backup en cas de panne est important pour vous, tournez-vous vers l\'EcoFlow PowerStream + DELTA 2 qui offre cette fonction. Pour la majorité des utilisateurs en France métropolitaine (coupures rares), ce n\'est pas un problème.',
  },
  {
    titre: '800 W max en sortie : pas de gros consommateurs',
    detail: 'Oubliez le chauffage d\'appoint (2 000 W), le four (2 500 W) ou la plaque de cuisson. Le SolarFlow alimente le talon de consommation : frigo, box internet, VMC, veilles, éclairage. C\'est suffisant pour 60-80 % de l\'autoconsommation d\'un appartement, mais ne rêvez pas d\'autonomie totale.',
  },
  {
    titre: '21 kg : pas si léger pour un balcon',
    detail: 'Le boîtier tout-en-un pèse 21 kg. C\'est moins qu\'un EcoFlow PowerStream + DELTA 2 séparés, mais nettement plus lourd qu\'un micro-onduleur classique (3-5 kg). Vérifiez que votre support de balcon peut encaisser ce poids en plus des panneaux.',
  },
  {
    titre: 'Wi-Fi 2,4 GHz uniquement',
    detail: 'Le SolarFlow ne supporte que le Wi-Fi 2,4 GHz, pas le 5 GHz. Si votre box est configurée en 5 GHz uniquement ou si le signal 2,4 GHz est faible sur votre balcon, la connexion peut être capricieuse. Pensez à vérifier la couverture Wi-Fi avant l\'installation.',
  },
];

const comparaison = [
  {
    produit: 'Zendure SolarFlow 800 Plus',
    prix: '~488 €',
    stockage: '1,92 kWh',
    sortieAC: '800 W',
    backup: 'Non',
    poids: '21 kg',
    note: '8.5/10',
  },
  {
    produit: 'EcoFlow PowerStream + DELTA 2',
    prix: '~1 800 €',
    stockage: '1 kWh',
    sortieAC: '800 W',
    backup: 'Oui',
    poids: '3,5 + 12 kg',
    note: '8/10',
  },
  {
    produit: 'Sunology PLAY MAX',
    prix: '1 179 €',
    stockage: '0,7 kWh (VAULT)',
    sortieAC: '400 W',
    backup: 'Non',
    poids: '~25 kg (kit)',
    note: '7/10',
  },
  {
    produit: 'Sunology PLAY 2 (sans batterie)',
    prix: '599 €',
    stockage: 'Aucun',
    sortieAC: '450 W',
    backup: 'Non',
    poids: '~12 kg',
    note: '8.5/10',
  },
];

export default function ZendureSolarflowPage() {
  return (
    <>
      <SchemaArticle
        title="Zendure SolarFlow avis : 840 W pour 488 €, trop beau ?"
        description="Avis complet sur le Zendure SolarFlow 800 Plus en 2026."
        url="https://monbalconsolaire.fr/avis/zendure-solarflow"
        datePublished="2026-05-07"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Zendure SolarFlow 800 Plus" brand="Zendure" description="Batterie solaire plug-and-play 1,92 kWh avec onduleur 800 W intégré, 2 MPPT 750 W, LiFePO4 6000 cycles." price={488} ratingValue={8.5} url="https://monbalconsolaire.fr/avis/zendure-solarflow" />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Zendure SolarFlow' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Zendure SolarFlow avis : 840 W pour 488 €, trop beau ?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Batterie 1,92 kWh + onduleur 800 W intégrés dans un seul boîtier pour moins de 500 €. Le <strong>Zendure SolarFlow 800 Plus</strong> casse les prix du stockage solaire plug-and-play. Mais à ce tarif, où est le piège ? Test complet, calcul de rentabilité et verdict honnête.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>7 mai 2026 &middot; Mis &agrave; jour le 15 mai 2026</span>
              <span>&middot;</span>
              <span>11 min de lecture</span>
            </div>
          </div>

          <ProductHero
            brand="Zendure"
            name="SolarFlow 800 Plus"
            power="840 W (2 panneaux)"
            price="~488 €"
            score="8.5/10"
            tagline="Batterie 1,92 kWh + onduleur 800 W tout-en-un : le meilleur rapport qualité-prix du marché."
            affiliateUrl=""
            affiliateLabel=""
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 15/05/2026 &middot; Peut varier selon les promos</p>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en 30 secondes</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le Zendure SolarFlow 800 Plus est <strong>le meilleur rapport qualité-prix du marché en 2026</strong> pour qui veut du stockage solaire plug-and-play. Pour ~488 €, vous obtenez ce que les concurrents facturent 1 000 à 1 800 € : un onduleur 800 W et une batterie LFP de 1,92 kWh. Le compromis ? <strong>Pas de backup en cas de coupure réseau</strong> et 800 W max en sortie. Pour 80 % des foyers en appartement, c&apos;est largement suffisant.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">488 € pour 1,92 kWh : pourquoi c&apos;est disruptif</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Pour comprendre pourquoi le SolarFlow 800 Plus fait autant parler, il faut regarder ce que coûtait le stockage solaire plug-and-play <strong>avant</strong> son arrivée :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Produit</th>
                      <th className="p-3 text-left font-bold">Prix</th>
                      <th className="p-3 text-left font-bold">Stockage</th>
                      <th className="p-3 text-left font-bold">€/kWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-green-pale/20">
                      <td className="p-3 font-semibold">Zendure SolarFlow 800 Plus</td>
                      <td className="p-3 font-mono">488 €</td>
                      <td className="p-3 font-mono">1,92 kWh</td>
                      <td className="p-3 font-mono font-bold text-green">254 €/kWh</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3">Sunology PLAY MAX (VAULT)</td>
                      <td className="p-3 font-mono">1 179 €</td>
                      <td className="p-3 font-mono">0,7 kWh</td>
                      <td className="p-3 font-mono">1 684 €/kWh</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3">EcoFlow PowerStream + DELTA 2</td>
                      <td className="p-3 font-mono">1 800 €</td>
                      <td className="p-3 font-mono">1 kWh</td>
                      <td className="p-3 font-mono">1 800 €/kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                <strong>254 €/kWh</strong> contre 1 684 €/kWh pour Sunology. Zendure divise le prix du stockage par <strong>6 à 7</strong>. C&apos;est la première fois qu&apos;une batterie plug-and-play avec onduleur intégré passe sous la barre des 300 €/kWh en France, un seuil psychologique qui change complètement le calcul de rentabilité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique complète</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Capacité batterie</td>
                      <td className="p-3 font-mono">1,92 kWh (LiFePO4 48V)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Chimie</td>
                      <td className="p-3">LFP (Lithium Fer Phosphate)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Entrée solaire max</td>
                      <td className="p-3 font-mono">1 500 W (2 MPPT × 750 W)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Sortie AC</td>
                      <td className="p-3 font-mono">800 W (onduleur GaN intégré)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Rendement onduleur</td>
                      <td className="p-3 font-mono">95-98 % (technologie GaN)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Cycles garantis</td>
                      <td className="p-3 font-mono">6 000 cycles (à 80 % capacité)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Extensible</td>
                      <td className="p-3">Jusqu&apos;à 11,5 kWh (+ 5 batteries AB2000)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Indice protection</td>
                      <td className="p-3 font-mono">IP65 (extérieur couvert)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Connectivité</td>
                      <td className="p-3">Wi-Fi 2,4 GHz + App Zendure + Shelly/SmartMeter</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Dimensions</td>
                      <td className="p-3 font-mono">393 × 236 × 242 mm</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Poids</td>
                      <td className="p-3 font-mono">21 kg</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Sortie hors réseau (EPS)</td>
                      <td className="p-3 font-mono font-semibold text-amber-dark">Non</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-semibold">Prix constaté</td>
                      <td className="p-3 font-mono font-bold text-green">~488 € (SolarFlow 800 Plus seul)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le setup optimal pour un balcon : 840 W pour ~900 €</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le SolarFlow 800 Plus est vendu <strong>sans panneaux</strong>. Voici la configuration que nous recommandons pour un balcon standard :
              </p>
              <div className="space-y-4">
                <div className="card-lg border-l-4 border-l-green">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h3 className="font-bold text-base">Setup balcon recommandé</h3>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">SolarFlow 800 Plus + 2 panneaux 420 W</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-green text-lg">~900 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                    2 panneaux 420 W (marque au choix : Trina, JA Solar, Longi — comptez 180-220 € par panneau en connecteur MC4) + le SolarFlow 800 Plus (~488 €). Total : 840 W d&apos;entrée solaire, 1,92 kWh de stockage, 800 W de sortie AC.
                  </p>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    <strong>Production estimée :</strong> 800-950 kWh/an en exposition sud (Lyon). Avec la batterie, vous autoconsommez 70-85 % de cette production au lieu de 40-50 % sans stockage.
                  </p>
                </div>

                <div className="card-lg border-l-4 border-l-amber">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h3 className="font-bold text-base">Setup évolutif (pour plus tard)</h3>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">+ 1 batterie AB2000 supplémentaire</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-green text-lg">+~600 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Si votre consommation le justifie, ajoutez une batterie AB2000 (1,92 kWh) pour passer à 3,84 kWh de stockage total. Vous couvrez alors le soir ET la nuit. Intéressant si votre talon de consommation nocturne dépasse 300-400 W.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points forts du SolarFlow 800 Plus</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1 text-green">{p.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Zendure SolarFlow 800 Plus" merchantName="Zendure" affiliateUrl="" label="Voir l'offre Zendure" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 limites à connaître avant d&apos;acheter</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">{p.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Zendure SolarFlow 800 Plus" merchantName="Zendure" affiliateUrl="" label="Vérifier disponibilité" variant="secondary" position="after-stats" />

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas sûr que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalisé selon votre département et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le Zendure SolarFlow →
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Budget < 800 €',
                  'Vous voulez zéro configuration',
                  'Démontage fréquent prévu',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparatif : SolarFlow vs la concurrence</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Comment se positionne le SolarFlow 800 Plus face aux systèmes avec batterie du marché ?
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-2 text-left font-bold">Produit</th>
                      <th className="p-2 text-left font-bold">Prix</th>
                      <th className="p-2 text-left font-bold">Stockage</th>
                      <th className="p-2 text-left font-bold">Sortie AC</th>
                      <th className="p-2 text-left font-bold">Backup</th>
                      <th className="p-2 text-left font-bold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparaison.map((c, i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/20 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2">{c.produit}</td>
                        <td className="p-2 font-mono">{c.prix}</td>
                        <td className="p-2 font-mono">{c.stockage}</td>
                        <td className="p-2 font-mono">{c.sortieAC}</td>
                        <td className="p-2">{c.backup}</td>
                        <td className="p-2 font-mono text-green">{c.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Le SolarFlow 800 Plus domine en rapport qualité-prix brut. L&apos;EcoFlow PowerStream reste supérieur si vous voulez le backup réseau et la polyvalence de la batterie portable. Le Sunology PLAY 2 reste le choix le plus simple si vous ne voulez pas de batterie du tout.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul de rentabilité : ROI en 6-7 ans</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons le setup recommandé : <strong>SolarFlow 800 Plus + 2 panneaux 420 W</strong>, à environ 900 €, installé à Lyon en exposition sud.
              </p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production annuelle</strong> : 857 kWh/an (2 &times; 420 W, sud, Lyon, PR 0,85)</li>
                  <li>&bull; <strong>Autoconsommation avec batterie</strong> : 95%</li>
                  <li>&bull; <strong>Tarif EDF 2026</strong> : 0,1940 &euro;/kWh (+3,3%/an d&apos;inflation CRE)</li>
                  <li>&bull; <strong>Économies annuelles</strong> : <strong>158 &euro;/an</strong></li>
                  <li>&bull; <strong>ROI</strong> : <strong>5,3 ans</strong></li>
                  <li>&bull; <strong>Économies sur 25 ans</strong> : <strong>5 991 &euro;</strong></li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                <strong>5,3 ans de ROI pour un système avec batterie</strong>, c&apos;est du jamais vu. &Agrave; titre de comparaison, l&apos;EcoFlow PowerStream + DELTA 2 tourne autour de 10,2 ans de ROI, et le Sunology PLAY MAX autour de 11,7 ans.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Avec l&apos;inflation tarifaire de 3,3%/an (CRE), les économies augmentent chaque année. Et la batterie LFP est garantie 6 000 cycles : vous avez <strong>10+ ans de bénéfice net</strong> après remboursement du système. Sur 25 ans : <strong>5 991 &euro;</strong> d&apos;économies cumulées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui c&apos;est le bon choix</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Vous voulez du stockage sans vous ruiner</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le SolarFlow 800 Plus est le premier système qui rend le stockage solaire rentable pour un appartement. Avant, stocker l&apos;énergie solaire en plug-and-play coûtait 1 000-2 000 €. Maintenant, c&apos;est 488 €.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Vous consommez surtout le soir</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si vous travaillez la journée et rentrez le soir, sans batterie vous perdez 50-60 % de votre production solaire. Avec le SolarFlow, vous stockez le midi et consommez le soir. Le gain est immédiat et mesurable.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Vous êtes en heures pleines/creuses</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;app Zendure gère automatiquement les plages HP/HC. En heures pleines (0,27+ €/kWh), le système décharge la batterie. En heures creuses, il recharge depuis le réseau si nécessaire. L&apos;optimisation est automatique.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui ce n&apos;est pas le bon choix</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Vous avez besoin d&apos;un backup en cas de coupure</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le SolarFlow ne fonctionne pas hors réseau. Si la sécurité énergétique est votre priorité, prenez un EcoFlow PowerStream + batterie DELTA : plus cher, mais fonctionnel en cas de panne.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Vous voulez la simplicité absolue d&apos;un kit tout-en-un</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le SolarFlow est vendu sans panneaux : il faut les acheter séparément, choisir la bonne puissance, vérifier les connecteurs MC4. Si vous voulez juste déballer et brancher, un Sunology PLAY 2 reste plus simple.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Votre budget est sous 500 € tout compris</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le SolarFlow seul coûte ~488 €, mais il faut ajouter les panneaux (~400 € pour 2 × 420 W). Budget total réaliste : 850-950 €. Si votre enveloppe est serrée, un Beem Kit 300W à 299 € ou un Sunology PLAY 2 à 599 € sont plus adaptés.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Alors, trop beau pour être vrai ?</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  <strong>Non, ce n&apos;est pas trop beau.</strong> Le Zendure SolarFlow 800 Plus fait exactement ce qu&apos;il promet : du stockage solaire plug-and-play à un prix qui n&apos;existait pas avant. Le &laquo; piège &raquo;, si on peut appeler ça un piège, c&apos;est l&apos;absence de backup hors réseau et la limite à 800 W en sortie.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Pour un appartement avec balcon, c&apos;est <strong>le meilleur investissement solaire en 2026</strong>. Le ROI de moins de 7 ans avec batterie était impensable il y a encore un an. Zendure a changé la donne.
                </p>
                <p className="font-semibold text-lg text-center mt-6 mb-2">Notre verdict : 8.5/10</p>
                <p className="text-sm text-charcoal-light text-center">
                  Le meilleur rapport qualité-prix du marché, avec un compromis assumé sur le backup réseau.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien économiseriez-vous avec le SolarFlow ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Calculez la production exacte selon votre département, votre exposition et votre consommation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/ecoflow-powerstream" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis EcoFlow PowerStream</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le concurrent modulaire avec backup réseau et batterie portable polyvalente</p>
                </Link>
                <Link href="/avis/sunology-play-max" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY MAX</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le kit + batterie tout-en-un de Sunology : plus cher, mais plus simple</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits solaires avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet de tous les systèmes avec stockage du marché français</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <AffiliateCTA productName="Zendure SolarFlow 800 Plus" merchantName="Zendure" affiliateUrl="" label="Voir l'offre actuelle sur Zendure" variant="box" position="footer-box" price="488 €" />

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
                <strong>Méthodologie :</strong> ROI calculé avec tarif 0,1940 &euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. Données constructeur Zendure, fiches techniques officielles, retours utilisateurs forum-photovoltaique.fr et Reddit r/solaire (mai 2026). Article rédigé sans rémunération de Zendure.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
