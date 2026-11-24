import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL, calculateROIYears, calculateTotalSavings25Years } from '@/lib/pricing';
import { PRODUCTS, SCHEMA_AVAILABILITY, priceLabel } from '@/data/products';
import { zendureUrl, BUY } from '@/lib/affiliate';
import { AffLink } from '@/components/ui/AffLink';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';
import { BlackFridayCallout } from '@/components/ui/BlackFriday';

const PRO2 = PRODUCTS['zendure-solarflow-800-pro-2'];
const ZENDURE_URL = zendureUrl(PRO2.url);

// PLAY MAX (comparaison) : prix lu dans products.ts, ROI via pricing.ts.
const PLAYMAX_PRICE = priceLabel('sunology-play-max');

// ROI pack 2 × 500 W (959 €) et pack 2 × 450 W (899 €), batterie intégrée (95% autoconsommation).
const PACK500_ROI = calculateROIYears({ kitPriceEur: 959, kitPowerWc: 1000, hasBattery: true }).toLocaleString('fr-FR');
const PACK500_SAVINGS25 = calculateTotalSavings25Years({ kitPriceEur: 959, kitPowerWc: 1000, hasBattery: true }).toLocaleString('fr-FR');
const PACK450_ROI = calculateROIYears({ kitPriceEur: 899, kitPowerWc: 900, hasBattery: true }).toLocaleString('fr-FR');

export const metadata: Metadata = withCanonicalOg({
  title: 'Zendure SolarFlow 800 Pro 2 : avis, prix, ROI 2026',
  description: 'Avis Zendure SolarFlow 800 Pro 2 : batterie 1,92 kWh, onduleur 800 W, sortie de secours 1000 W. Prix, fiche technique et calcul de rentabilité.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/zendure-solarflow-800-pro-2',
  },
});

const faqData = [
  {
    question: 'Quelle est la différence entre le SolarFlow 800 Pro 2 et le 800 Plus (épuisé) ?',
    answer: 'Même batterie (1,92 kWh LiFePO4) et même onduleur 800 W en sortie réseau, mais deux différences concrètes : le 800 Pro 2 dispose de 4 entrées MPPT (660 W max chacune) contre 2 sur le 800 Plus, et surtout d\'une sortie de secours (EPS) jusqu\'à 1000 W en cas de coupure de courant, que le 800 Plus n\'avait pas. Contrepartie : il coûte 599 € seul contre 539 € pour le 800 Plus (prix du 5 novembre 2026, avant sa rupture de stock).',
  },
  {
    question: 'Le SolarFlow 800 Pro 2 fonctionne-t-il en cas de coupure de courant ?',
    answer: 'Oui, partiellement : Zendure annonce une sortie hors réseau (EPS) dédiée, limitée à 1000 W. En cas de coupure, l\'appareil arrête automatiquement d\'injecter sur le réseau (obligation réglementaire anti-îlotage), mais continue d\'alimenter les appareils branchés sur sa prise de secours dédiée, tant que la batterie de 1,92 kWh n\'est pas vide. C\'est la principale amélioration par rapport au 800 Plus, qui s\'arrêtait complètement.',
  },
  {
    question: 'Combien de panneaux solaires peut-on brancher sur le SolarFlow 800 Pro 2 ?',
    answer: 'Le boîtier dispose de 4 entrées MPPT indépendantes (660 W max chacune, tension en circuit ouvert inférieure à 55 V), soit davantage de flexibilité que le 800 Plus (2 entrées). Dans la pratique, Zendure vend le Pro 2 en pack avec 2 panneaux de 500 W ou 2 panneaux de 450 W : c\'est le dimensionnement recommandé pour un balcon, suffisant pour recharger la batterie en une demi-journée ensoleillée.',
  },
  {
    question: 'Faut-il déclarer le SolarFlow 800 Pro 2 à Enedis ?',
    answer: 'Oui, comme tout système connecté au réseau domestique. Réglé en zéro injection (le SolarFlow peut piloter sa sortie avec un compteur, y compris le Smart Meter 3CT-S vendu en option), c\'est la CACSI ; s\'il renvoie du surplus, c\'est la cession gratuite du surplus à Enedis (article L315-5 du Code de l\'énergie). Zendure fournit l\'attestation de conformité dans la documentation.',
  },
  {
    question: 'Quel est le prix du SolarFlow 800 Pro 2 et y a-t-il un code promo ?',
    answer: `Sur zendure.fr (relevé le 23 novembre 2026) : 599 € seul (prix barré 979 €), 959 € en pack avec 2 panneaux de 500 W, 899 € avec 2 panneaux de 450 W, 1 118 € avec une batterie d'extension AB2000L (3,84 kWh au total), 728 € avec le compteur Smart Meter 3CT-S. Le code AF5E24 a fait passer le boîtier seul à 551,08 € au panier (testé le 18 novembre 2026, valable jusqu'au 4 janvier 2027 selon la page officielle, hors modèles AC+).`,
  },
  {
    question: 'Le SolarFlow 800 Pro 2 est-il extensible ?',
    answer: 'Oui, comme le 800 Plus : il accepte jusqu\'à 5 batteries AB2000 supplémentaires en série, pour passer de 1,92 kWh à 11,5 kWh sans changer de boîtier. Utile si vos besoins de stockage augmentent après l\'achat initial.',
  },
];

const points_forts = [
  {
    titre: 'Sortie de secours (EPS) jusqu\'à 1000 W : la vraie nouveauté',
    detail: 'C\'est la différence qui justifie le “Pro” dans le nom. Le 800 Plus n\'avait aucun secours : une coupure de courant arrêtait tout, batterie pleine ou non. Le Pro 2 alimente une prise dédiée jusqu\'à 1000 W pendant une coupure, en continuant de puiser dans sa batterie de 1,92 kWh. Ce n\'est pas un onduleur de secours pour toute la maison, mais de quoi garder le frigo, le routeur ou une lampe allumés.',
  },
  {
    titre: '4 MPPT indépendants, plus flexible pour un balcon',
    detail: 'Contre 2 entrées sur le 800 Plus, le Pro 2 en propose 4 (660 W max chacune). Vous pouvez répartir des panneaux sur des orientations différentes (est/ouest, ou deux angles distincts) sans perdre le rendement d\'un MPPT partagé. Dans les packs vendus par Zendure (2 panneaux de 450 ou 500 W), seules 2 des 4 entrées sont utilisées : de la marge pour agrandir l\'installation plus tard.',
  },
  {
    titre: 'Batterie LiFePO4 48 V, la chimie la plus stable du marché',
    detail: 'Même chimie que le 800 Plus : pas de risque d\'emballement thermique, cyclage quotidien bien supporté. C\'est la référence pour le stockage stationnaire, contrairement aux batteries Li-ion de certains concurrents (Sunology VAULT).',
  },
  {
    titre: 'Extensible jusqu\'à 11,5 kWh',
    detail: 'Jusqu\'à 5 batteries AB2000 supplémentaires en série. Avec une AB2000L (1,92 kWh) ajoutée, vous passez à 3,84 kWh pour 1 118 € au total (23 novembre 2026) : de quoi couvrir aussi une partie de la nuit, pas seulement la soirée.',
  },
  {
    titre: 'App Zendure et pilotage automatique heures pleines/creuses',
    detail: 'L\'application suit la production en temps réel, programme les plages HP/HC et se couple à un compteur tiers (Shelly, ou le Smart Meter 3CT-S maison à 728 € avec le boîtier) pour viser l\'injection zéro. C\'est l\'une des applications les mieux notées du secteur.',
  },
];

const points_faibles = [
  {
    titre: 'Plus cher au kWh stocké que la génération précédente',
    detail: `À 599 € pour 1,92 kWh, le Pro 2 revient à 312 €/kWh, contre 281 €/kWh pour le 800 Plus (539 €, aujourd'hui épuisé). Des concurrents comme le Jackery SolarVault 3 Pro ou le Bluetti Balco 260 descendent à ~285 €/kWh. Le Pro 2 n'est plus la référence absolue du prix au kWh : vous payez la sortie de secours et les 2 MPPT supplémentaires.`,
  },
  {
    titre: 'Sortie de secours plafonnée à 1000 W, pas un onduleur maison',
    detail: 'En cas de coupure, seule la prise dédiée fonctionne (jusqu\'à 1000 W), pas l\'ensemble du logement. Oubliez le chauffage d\'appoint ou la plaque de cuisson sur cette sortie. C\'est un vrai plus par rapport au 800 Plus, mais ça reste un secours ponctuel, pas une installation de secours complète comme un onduleur hybride domestique.',
  },
  {
    titre: 'Autour de 23 kg : toujours un boîtier lourd',
    detail: 'Les fiches constructeur et revendeurs situent le poids entre 22,6 kg (donnée Zendure) et un peu plus avec les accessoires. Vérifiez que votre support de balcon encaisse ce poids en plus des panneaux, comme pour le 800 Plus.',
  },
  {
    titre: 'Toujours vendu sans panneaux en configuration “seul”',
    detail: 'Comme le 800 Plus, le boîtier seul à 599 € n\'inclut aucun panneau : il faut acheter le pack (959 € ou 899 €) ou vos propres panneaux compatibles MC4 (tension en circuit ouvert < 55 V par entrée). Si vous voulez un kit tout-en-un sans réfléchir au câblage, un Sunology PLAY reste plus simple.',
  },
];

const comparaison = [
  {
    produit: 'Zendure SolarFlow 800 Pro 2',
    prix: '599 € (seul, 23/11/2026)',
    stockage: '1,92 kWh',
    sortieAC: '800 W',
    backup: 'Oui (1000 W)',
    poids: '~23 kg',
    note: '8/10',
  },
  {
    produit: 'Zendure SolarFlow 800 Plus (épuisé)',
    prix: '539 € (05/11/2026)',
    stockage: '1,92 kWh',
    sortieAC: '800 W',
    backup: 'Non',
    poids: '21 kg',
    note: '8.5/10',
  },
  {
    produit: 'EcoFlow STREAM Ultra',
    prix: priceLabel('ecoflow-stream-ultra'),
    stockage: '1,92 kWh',
    sortieAC: '800 W',
    backup: 'Oui (2 300 W)',
    poids: '~15 kg',
    note: '7.5/10',
  },
  {
    produit: 'Bluetti Balco 260',
    prix: '729 € (seul)*',
    stockage: '2,56 kWh',
    sortieAC: '800 W réseau + 2 300 W EPS',
    backup: 'Oui (EPS)',
    poids: '~18 kg',
    note: '7.5/10',
  },
  {
    produit: 'Sunology PLAY MAX',
    prix: PLAYMAX_PRICE,
    stockage: '0,7 kWh (VAULT)',
    sortieAC: '450 W',
    backup: 'Non',
    poids: '~25 kg (kit)',
    note: '7/10',
  },
];

export default function ZendureSolarflow800Pro2Page() {
  return (
    <>
      <SchemaArticle
        title="Zendure SolarFlow 800 Pro 2 : avis, prix, ROI 2026"
        description="Avis complet sur le Zendure SolarFlow 800 Pro 2 : batterie 1,92 kWh, onduleur 800 W, sortie de secours, prix et rentabilité."
        url="https://monbalconsolaire.fr/avis/zendure-solarflow-800-pro-2"
        datePublished="2026-11-24"
        dateModified="2026-11-24"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Zendure SolarFlow 800 Pro 2" brand="Zendure" description="Batterie solaire plug-and-play 1,92 kWh avec onduleur 800 W intégré, 4 MPPT, sortie de secours 1000 W, LiFePO4 extensible à 11,5 kWh." price={PRO2.priceEur} availability={SCHEMA_AVAILABILITY[PRO2.availability]} ratingValue={8} url="https://monbalconsolaire.fr/avis/zendure-solarflow-800-pro-2" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Zendure SolarFlow 800 Pro 2' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Zendure SolarFlow 800 Pro 2' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Zendure SolarFlow 800 Pro 2 : avis, prix, ROI 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le <strong>Zendure SolarFlow 800 Pro 2</strong> prend la rel&egrave;ve du 800 Plus, &eacute;puis&eacute; chez Zendure depuis la mi-novembre 2026. M&ecirc;me batterie 1,92&nbsp;kWh, m&ecirc;me onduleur 800&nbsp;W, mais une nouveaut&eacute; de taille&nbsp;: une sortie de secours en cas de coupure. Fiche technique, prix v&eacute;rifi&eacute;s, calcul de rentabilit&eacute; et comparatif honn&ecirc;te avec son pr&eacute;d&eacute;cesseur.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>24 novembre 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <ProductHero
            brand="Zendure"
            name="SolarFlow 800 Pro 2"
            power="800 W + 1,92 kWh (sans panneaux)"
            price="599 €"
            score="8/10"
            tagline="Batterie 1,92 kWh + onduleur 800 W, avec sortie de secours jusqu'à 1000 W : la nouveauté du Pro 2."
            affiliateUrl={ZENDURE_URL}
            affiliateLabel="Voir sur Zendure"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix relev&eacute;s sur zendure.fr le 23 novembre 2026 &middot; en stock</p>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en 30 secondes</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le SolarFlow 800 Pro 2 reprend la formule qui a fait le succ&egrave;s du 800 Plus (batterie 1,92&nbsp;kWh et onduleur 800&nbsp;W int&eacute;gr&eacute;s dans un seul bo&icirc;tier) et corrige son principal d&eacute;faut&nbsp;: l&apos;absence de secours en cas de coupure. Zendure ajoute une sortie d&eacute;di&eacute;e jusqu&apos;&agrave; 1000&nbsp;W et double le nombre d&apos;entr&eacute;es MPPT (4 au lieu de 2). La contrepartie&nbsp;: &agrave; 599&nbsp;&euro; seul, il est 11&nbsp;% plus cher que le 800 Plus &agrave; son prix d&apos;avant rupture (539&nbsp;&euro;), et n&apos;est plus le moins cher au kWh stock&eacute; du march&eacute;.
            </p>
            <p className="text-charcoal-light text-sm leading-relaxed mt-3">
              Pour un balcon&nbsp;: le pack avec 2&nbsp;panneaux de 500&nbsp;W &agrave; 959&nbsp;&euro; reste sous les 5&nbsp;ans de ROI (~{PACK500_ROI}&nbsp;ans) avec notre m&eacute;thodologie standard.
            </p>
          </div>

          <BlackFridayCallout />

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le successeur du 800 Plus, &eacute;puis&eacute; depuis novembre 2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le <Link href="/avis/zendure-solarflow" className="text-green hover:underline">Zendure SolarFlow 800 Plus</Link> a &eacute;t&eacute; notre kit avec batterie pr&eacute;f&eacute;r&eacute; pendant plusieurs mois, gr&acirc;ce &agrave; son rapport prix/stockage in&eacute;gal&eacute;. Il est &eacute;puis&eacute; chez Zendure sur toutes ses versions depuis le 20 novembre 2026 (constat&eacute; &agrave; nouveau le 23 novembre). Le 800 Pro&nbsp;2 prend le relais avec la m&ecirc;me base technique (batterie 1,92&nbsp;kWh LiFePO4, onduleur GaN 800&nbsp;W) et deux am&eacute;liorations concr&egrave;tes&nbsp;: une sortie de secours et 4&nbsp;entr&eacute;es MPPT au lieu de 2.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Caract&eacute;ristique</th>
                      <th className="p-3 text-left font-bold">800 Plus (&eacute;puis&eacute;)</th>
                      <th className="p-3 text-left font-bold">800 Pro 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Batterie</td>
                      <td className="p-3 font-mono">1,92 kWh LiFePO4</td>
                      <td className="p-3 font-mono">1,92 kWh LiFePO4</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Onduleur (sortie r&eacute;seau)</td>
                      <td className="p-3 font-mono">800 W</td>
                      <td className="p-3 font-mono">800 W</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Entr&eacute;es MPPT</td>
                      <td className="p-3 font-mono">2 &times; 750 W</td>
                      <td className="p-3 font-mono font-bold text-green">4 &times; 660 W</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Sortie de secours (EPS)</td>
                      <td className="p-3 font-mono font-semibold text-amber-dark">Non</td>
                      <td className="p-3 font-mono font-bold text-green">Oui, 1000 W</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Prix seul</td>
                      <td className="p-3 font-mono">539 € (05/11/2026)</td>
                      <td className="p-3 font-mono">599 € (23/11/2026)</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Disponibilit&eacute;</td>
                      <td className="p-3 font-mono font-semibold text-amber-dark">&Eacute;puis&eacute; (23/11/2026)</td>
                      <td className="p-3 font-mono font-bold text-green">En stock (23/11/2026)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Capacit&eacute; batterie</td>
                      <td className="p-3 font-mono">1,92 kWh (LiFePO4 48V)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Entr&eacute;e solaire</td>
                      <td className="p-3 font-mono">4 MPPT ind&eacute;pendants, 660 W max chacun (Voc &lt; 55 V)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Sortie AC (r&eacute;seau)</td>
                      <td className="p-3 font-mono">800 W (onduleur bidirectionnel)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Sortie de secours (EPS)</td>
                      <td className="p-3 font-mono">1000 W, prise d&eacute;di&eacute;e, hors r&eacute;seau uniquement</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Extensible</td>
                      <td className="p-3">Jusqu&apos;&agrave; 11,5 kWh (+ 5 batteries AB2000)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Indice de protection</td>
                      <td className="p-3 font-mono">IP65 (ext&eacute;rieur couvert)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Connectivit&eacute;</td>
                      <td className="p-3">Wi-Fi + App Zendure + compatibilit&eacute; SmartMeter (Shelly, 3CT-S)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Dimensions</td>
                      <td className="p-3 font-mono">&sim;393 &times; 236 &times; 276 mm (donn&eacute;e Zendure)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Poids</td>
                      <td className="p-3 font-mono">&sim;23 kg (22,6 kg selon Zendure, jusqu&apos;&agrave; ~26 kg selon certains revendeurs avec accessoires)</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Prix constat&eacute;</td>
                      <td className="p-3 font-mono font-bold text-green">599 € seul, prix barr&eacute; 979 € (zendure.fr, 23/11/2026)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-3">Dimensions, poids et plage MPPT recoup&eacute;s via plusieurs fiches revendeurs (Suisse, Allemagne) et la documentation d&apos;assistance Zendure&nbsp;: zendure.fr &eacute;tant inaccessible depuis notre environnement le 24 novembre 2026, nous n&apos;avons pas pu revalider ces valeurs secondaires par curl ce jour-l&agrave;. Les prix et la disponibilit&eacute; (23/11/2026) restent la donn&eacute;e la plus r&eacute;cente et fiable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le pack pour un balcon&nbsp;: 2 panneaux + le boîtier</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Comme le 800 Plus, le Pro 2 seul est vendu <strong>sans panneaux</strong>. Zendure propose deux packs (prix relev&eacute;s le 23 novembre 2026)&nbsp;:
              </p>
              <div className="space-y-4">
                <div className="card-lg border-l-4 border-l-green">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h3 className="font-bold text-base">Setup balcon recommand&eacute;</h3>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">SolarFlow 800 Pro 2 + 2 panneaux bifaciaux 500 W</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-green text-lg">959 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                    1&nbsp;000&nbsp;W d&apos;entr&eacute;e solaire (face avant), 1,92&nbsp;kWh de stockage, 800&nbsp;W de sortie AC + 1000&nbsp;W de secours. <strong>Production estim&eacute;e&nbsp;:</strong> environ 1&nbsp;020&nbsp;kWh/an en exposition sud &agrave; Lyon (notre m&eacute;thode, sans compter la face arri&egrave;re ni l&apos;&eacute;cr&ecirc;tage &agrave; 800&nbsp;W en plein midi). Avec la batterie, vous autoconsommez 70-95&nbsp;% de cette production au lieu de 40-85&nbsp;% sans stockage.
                  </p>
                </div>

                <div className="card-lg border-l-4 border-l-amber">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h3 className="font-bold text-base">Pack budget</h3>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">SolarFlow 800 Pro 2 + 2 panneaux 450 W</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-green text-lg">899 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    900&nbsp;W d&apos;entr&eacute;e solaire, m&ecirc;me batterie et m&ecirc;me onduleur. 60&nbsp;&euro; de moins que le pack 500&nbsp;W, pour environ 100&nbsp;kWh/an de production en moins.
                  </p>
                </div>

                <div className="card-lg border-l-4 border-l-amber">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h3 className="font-bold text-base">Setup &eacute;volutif</h3>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">+ 1 batterie AB2000L (1,92 kWh suppl&eacute;mentaires)</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-green text-lg">1 118 €*</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    *Boîtier seul + batterie AB2000L, soit 3,84&nbsp;kWh de stockage total (prix relev&eacute; le 23 novembre 2026, panneaux non inclus). Int&eacute;ressant si votre talon de consommation nocturne d&eacute;passe 300-400&nbsp;W.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points forts</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">{p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Zendure SolarFlow 800 Pro 2" merchantName="Zendure" affiliateUrl={ZENDURE_URL} label="Voir l'offre Zendure" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 limites &agrave; conna&icirc;tre</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h3 className="font-bold text-sm mb-1 text-amber-dark">{p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Zendure SolarFlow 800 Pro 2" merchantName="Zendure" affiliateUrl={ZENDURE_URL} label="V&eacute;rifier disponibilit&eacute;" variant="secondary" position="after-cons" />

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce kit soit fait pour vous&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le SolarFlow 800 Pro 2 &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Budget < 850 € (le pack complet)',
                  'Vous cherchez le meilleur prix au kWh stocké (Jackery et Bluetti font mieux)',
                  'Vous voulez un vrai secours pour toute la maison, pas juste une prise',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparatif&nbsp;: 800 Pro 2 vs la concurrence</h2>
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
                Le 800 Pro 2 est le seul de ce comparatif &agrave; combiner batterie int&eacute;gr&eacute;e, onduleur 800&nbsp;W <strong>et</strong> secours, pour moins de 1 000&nbsp;&euro; en pack. Le <AffLink item={BUY.streamUltra} position="comparison">EcoFlow STREAM Ultra</AffLink> offre un secours plus puissant (2 300&nbsp;W) pour un prix proche. Le <strong>Bluetti Balco 260</strong> propose plus de stockage (2,56&nbsp;kWh) pour un prix l&eacute;g&egrave;rement sup&eacute;rieur. Le Sunology PLAY MAX reste l&apos;option la plus simple &agrave; installer, mais avec 2,7&nbsp;fois moins de stockage.
              </p>
              <p className="text-xs text-stone mt-3">* Bluetti Balco 260 : 729&nbsp;&euro; seul (prix barr&eacute; 1 049&nbsp;&euro;), sur fr.bluettipower.eu le 20 novembre 2026.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul de rentabilit&eacute;&nbsp;: ROI de {PACK500_ROI} &agrave; {PACK450_ROI} ans</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons le pack <strong>SolarFlow 800 Pro 2 + 2 panneaux de 500 W</strong> &agrave; 959&nbsp;&euro; (prix du 23 novembre 2026), install&eacute; &agrave; Lyon en exposition sud.
              </p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production annuelle</strong> : 1 020 kWh/an (2 &times; 500 W, sud, Lyon, PR 0,85)</li>
                  <li>&bull; <strong>Autoconsommation avec batterie</strong> : 95%</li>
                  <li>&bull; <strong>Tarif EDF</strong> : {KWH_PRICE_LABEL} (inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL})</li>
                  <li>&bull; <strong>Économies la premi&egrave;re ann&eacute;e</strong> : <strong>194 &euro;</strong></li>
                  <li>&bull; <strong>ROI</strong> : <strong>{PACK500_ROI} ans</strong> pour le pack 2&times;500&nbsp;W &agrave; 959&nbsp;&euro;&nbsp;; <strong>{PACK450_ROI} ans</strong> pour le pack 2&times;450&nbsp;W &agrave; 899&nbsp;&euro;</li>
                  <li>&bull; <strong>Économies sur 25 ans</strong> : <strong>~{PACK500_SAVINGS25} &euro;</strong> (pack 2&times;500&nbsp;W)</li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                &Agrave; titre de comparaison, le pack 800 Plus (719&nbsp;&euro;, prix d&apos;avant rupture du 5 novembre 2026) se remboursait en 3,6&nbsp;ans&nbsp;: le Pro 2 reste sous les 5&nbsp;ans malgr&eacute; la hausse de prix, gr&acirc;ce au m&ecirc;me calcul de production et d&apos;autoconsommation. Ce calcul suppose que vous consommiez 95&nbsp;% de 1 020&nbsp;kWh&nbsp;: utilisez le <Link href="/calculateur" className="text-green hover:underline">calculateur</Link> avec votre propre profil pour affiner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui c&apos;est le bon choix</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Vous vouliez le 800 Plus mais il est &eacute;puis&eacute;</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le Pro 2 est la suite logique&nbsp;: m&ecirc;me batterie, m&ecirc;me onduleur, pour 60&nbsp;&euro; de plus en pack. Vous gagnez en plus un secours et 2 entr&eacute;es MPPT suppl&eacute;mentaires.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Les coupures de courant vous inqui&egrave;tent un peu</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">1000&nbsp;W de secours, c&apos;est assez pour un frigo, une box internet et de l&apos;&eacute;clairage pendant une panne. Pas pour toute la maison, mais pour l&apos;essentiel, oui.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Vous consommez surtout le soir</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Comme avec le 800 Plus, vous stockez le midi et consommez le soir. Le gain reste imm&eacute;diat et mesurable.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui ce n&apos;est pas le bon choix</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Vous cherchez uniquement le meilleur prix au kWh</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le <Link href="/avis/jackery-solarvault-3-pro" className="text-green hover:underline">Jackery SolarVault 3 Pro</Link> et le <Link href="/avis/bluetti-balco-260" className="text-green hover:underline">Bluetti Balco 260</Link> descendent &agrave; ~285&nbsp;&euro;/kWh, contre 312&nbsp;&euro;/kWh ici. Si le prix au kWh est votre seul crit&egrave;re, regardez ces deux-l&agrave; d&apos;abord.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Vous voulez un vrai secours pour toute l&apos;installation</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">1000&nbsp;W sur une seule prise ne remplace pas un onduleur hybride domestique. L&apos;<AffLink item={BUY.streamUltra} position="alternative">EcoFlow STREAM Ultra</AffLink> (2 300&nbsp;W de secours) ou le Bluetti Balco 260 vont plus loin.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Votre budget est serr&eacute;</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le 800 Plus (quand il &eacute;tait en stock) &eacute;tait moins cher pour la m&ecirc;me batterie. Un Beem Kit 300W &agrave; 199&nbsp;&euro; (actuellement en rupture) ou un Sunology PLAY &agrave; 599&nbsp;&euro; restent plus adapt&eacute;s sans besoin de stockage.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Verdict</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Le SolarFlow 800 Pro 2 fait ce qu&apos;on attend d&apos;une bonne it&eacute;ration&nbsp;: il corrige le vrai d&eacute;faut du 800 Plus (l&apos;absence de secours) sans rien perdre sur l&apos;essentiel (m&ecirc;me batterie, m&ecirc;me onduleur). La hausse de prix est mod&eacute;r&eacute;e (+60&nbsp;&euro; en pack) et reste coh&eacute;rente avec ce que vous gagnez.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Ce n&apos;est plus, en revanche, le kit avec batterie le moins cher du march&eacute; au kWh&nbsp;: le Jackery SolarVault 3 Pro et le Bluetti Balco 260 font mieux sur ce seul crit&egrave;re. Si le secours ne vous int&eacute;resse pas, comparez les trois avant d&apos;acheter.
                </p>
                <p className="font-semibold text-lg text-center mt-6 mb-2">Notre verdict : 8/10</p>
                <p className="text-sm text-charcoal-light text-center">
                  Le successeur logique du 800 Plus, avec un vrai plus (le secours) et un compromis assum&eacute; sur le prix au kWh.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien &eacute;conomiseriez-vous avec le SolarFlow 800 Pro 2&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Calculez la production exacte selon votre d&eacute;partement, votre exposition et votre consommation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Zendure SolarFlow 800 Plus : avis (&eacute;puis&eacute;)</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le pr&eacute;d&eacute;cesseur du Pro 2 : m&ecirc;me batterie, pas de secours, moins cher quand il &eacute;tait en stock</p>
                </Link>
                <Link href="/comparatif/zendure-vs-sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Zendure vs Sunology vs Beem : le match 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Prix/Wc, ROI, stockage : les 3 approches compar&eacute;es, 800 Pro 2 inclus</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kits solaires avec batterie 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet de tous les syst&egrave;mes avec stockage du march&eacute; fran&ccedil;ais</p>
                </Link>
                <Link href="/avis/bluetti-balco-260" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Bluetti Balco 260</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le concurrent direct : plus de stockage, secours plus puissant, prix proche</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <AffiliateCTA productName="Zendure SolarFlow 800 Pro 2" merchantName="Zendure" affiliateUrl={ZENDURE_URL} label="Voir le SolarFlow 800 Pro 2 sur Zendure" variant="box" position="footer-box" price="599 €" />

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

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> ROI calcul&eacute; avec tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. Prix et disponibilit&eacute; v&eacute;rifi&eacute;s sur zendure.fr le 23 novembre 2026 (boutons d&apos;achat, prix des packs, code AF5E24)&nbsp;: zendure.fr &eacute;tant inaccessible depuis notre environnement le 24 novembre 2026 (blocage r&eacute;seau constat&eacute; ce jour, comme pour plusieurs articles pr&eacute;c&eacute;dents), nous conservons ces valeurs du 23/11 sans les avoir revalid&eacute;es le jour de la publication. Sp&eacute;cifications secondaires (dimensions, MPPT, sortie de secours) recoup&eacute;es via la documentation d&apos;assistance Zendure et plusieurs fiches revendeurs europ&eacute;ens (Suisse, Allemagne), zendure.fr &eacute;tant inaccessible pour une v&eacute;rification directe. Article r&eacute;dig&eacute; sans r&eacute;mun&eacute;ration de Zendure. <strong>Transparence&nbsp;:</strong> certains liens de cette page sont des liens affili&eacute;s (programme Awin). Si vous achetez via ces liens, nous percevons une commission sans surco&ucirc;t pour vous. Cela n&apos;influence pas nos analyses.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
