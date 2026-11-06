import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';
import { allpowersUrl } from '@/lib/affiliate';

const PRODUCT_URL = 'https://iallpowers.fr/products/bs2500';

export const metadata: Metadata = withCanonicalOg({
  title: 'ALLPOWERS BS2500 PRO avis : batterie de balcon 2,6 kWh',
  description: 'ALLPOWERS BS2500 PRO : batterie 2,6 kWh, onduleur 800 W, secours 2 400 W, 999 € en promo. Fiche technique, rentabilité et nos réserves avant d’acheter.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/allpowers-bs2500-pro',
  },
});

const faqData = [
  {
    question: 'Le BS2500 PRO a-t-il été testé de façon indépendante ?',
    answer: 'Pas à notre connaissance au 5 novembre 2026. Le produit est apparu sur la boutique ALLPOWERS France en juin 2026 et nous n\'avons trouvé aucun test indépendant (presse, laboratoire, YouTube sérieux), ni en France ni ailleurs. Cet avis repose donc sur la fiche officielle, nos calculs de rentabilité et les retours clients publiés sur le site de la marque. Nous ne l\'avons pas testé nous-mêmes.',
  },
  {
    question: 'Combien coûte vraiment le BS2500 PRO ?',
    answer: 'Il est affiché à 999 € sur iallpowers.fr au 5 novembre 2026 (Black Friday), avec un « prix normal » barré à 1 999 €. Les panneaux ne sont pas inclus. ALLPOWERS propose des packs avec un, deux ou trois panneaux pliables SP039 de 600 W (1 499 €, 1 999 € et 2 499 €). Pour un balcon, deux panneaux rigides de 400 W achetés séparément (environ 400 €) donnent un ensemble autour de 1 400 €.',
  },
  {
    question: 'Peut-on injecter 2 400 W sur le réseau avec le BS2500 PRO ?',
    answer: 'Techniquement, la fiche indique une injection « 800 W par défaut, réglable de 0 à 2 400 W ». Pour une installation branchée sur une prise, restez à 800 W : c\'est le seuil retenu en France pour les kits plug-and-play sans intervention d\'un électricien. Au-delà, il faut un circuit dédié et un avis d\'électricien. Dans tous les cas, une déclaration à Enedis reste obligatoire : CACSI si l\'appareil est réglé en zéro injection, sinon cession gratuite du surplus.',
  },
  {
    question: 'Quels panneaux brancher sur le BS2500 PRO ?',
    answer: 'Il a deux entrées solaires (double MPPT) de 1 000 W maximum chacune, avec une tension maximale de 100 V et 16 A par entrée. En pratique, un panneau rigide standard de 400 à 500 W par entrée convient : sa tension à vide (environ 37 à 50 V) reste sous la limite. Ne branchez jamais deux panneaux en série sur une même entrée : vous dépasseriez les 100 V.',
  },
  {
    question: 'Le BS2500 PRO fonctionne-t-il en cas de coupure de courant ?',
    answer: 'Oui, c\'est son principal atout. ALLPOWERS annonce une sortie de secours hors réseau de 2 400 W (4 800 W en crête) avec un basculement automatique en moins de 15 ms. De quoi faire tourner un réfrigérateur, une box internet et de l\'éclairage pendant une coupure, dans la limite des 2,6 kWh stockés.',
  },
  {
    question: 'Peut-on agrandir la batterie ?',
    answer: 'Oui. Selon ALLPOWERS, on peut associer jusqu\'à trois BS2500 PRO, soit 7,8 kWh au total, avec un câble de mise en parallèle vendu 35 €. Chaque unité supplémentaire coûte le prix d\'un BS2500 PRO complet : c\'est une solution pour une maison ou un gros consommateur, pas pour un balcon classique.',
  },
];

const points_forts = [
  {
    titre: 'Grosse batterie pour le prix promo',
    detail: '2,6 kWh pour 999 € en promotion, soit environ 384 € par kWh stocké. Au 5 novembre 2026, c\'est pourtant plus cher au kWh que le Bluetti Balco 260 (2,56 kWh à 789 €, 308 €/kWh) et l\'EcoFlow STREAM Ultra (1,92 kWh à 659 €, 343 €/kWh), tous deux en promotion eux aussi.',
  },
  {
    titre: 'Vraie sortie de secours 2 400 W',
    detail: 'En cas de coupure, le boîtier bascule en mode hors réseau en moins de 15 ms (selon ALLPOWERS) et délivre jusqu\'à 2 400 W en onde sinusoïdale pure. Le Zendure SolarFlow et la Beem Battery n\'offrent pas cette fonction.',
  },
  {
    titre: 'Deux entrées solaires indépendantes',
    detail: 'Double MPPT, 1 000 W par entrée : deux panneaux orientés différemment ou ombrés à des moments différents produisent chacun au mieux, sans se pénaliser.',
  },
  {
    titre: 'Pilotage zéro injection possible',
    detail: 'Avec le compteur intelligent ALLPOWERS RS07 (69 € en monophasé) ou un compteur Shelly, le boîtier règle sa sortie pour couvrir votre consommation sans renvoyer d\'électricité gratuite sur le réseau.',
  },
  {
    titre: 'Conçu pour l\'extérieur',
    detail: 'Boîtier IP65, plage de fonctionnement annoncée de -20 °C à +60 °C avec chauffage intégré de la batterie : il peut rester sur un balcon toute l\'année.',
  },
];

const points_faibles = [
  {
    titre: 'Aucun test indépendant',
    detail: 'Produit sorti en juin 2026, sans test presse ni laboratoire à ce jour. Or, sur un autre modèle de la marque (la station S2000 Pro), des testeurs indépendants ont mesuré une capacité et une puissance réelles nettement inférieures aux chiffres annoncés. Rien ne dit que le BS2500 PRO a le même défaut, mais rien ne prouve le contraire.',
  },
  {
    titre: 'Service après-vente à surveiller',
    detail: 'Sur la boutique ALLPOWERS, un acheteur vérifié (avis 3/5 du 12 octobre 2026) signale une application introuvable, un appairage qui ne marche pas, pas de manuel en français et pas de facture reçue. Un seul avis ne fait pas une règle, mais c\'est le seul retour d\'utilisateur que nous ayons trouvé. ALLPOWERS nous a précisé que l\'application peut s\'afficher en français (dans ses réglages) et qu\'un manuel en français est prévu, sans date. À ce jour, le manuel téléchargeable est en anglais.',
  },
  {
    titre: 'Lourd et surdimensionné pour un petit balcon',
    detail: '38,8 kg et 59 cm de haut. Avec 800 Wc de panneaux, la production d\'une belle journée remplit à peine la batterie : les 2,6 kWh ne sont vraiment utiles qu\'avec plus de panneaux ou en secours.',
  },
  {
    titre: 'Prix « normal » à prendre avec recul',
    detail: 'Le prix barré de 1 999 € donne une remise de 50 %. Nous n\'avons jamais vu le produit vendu à ce prix : jugez l\'offre sur le prix payé, pas sur la remise affichée. Garantie de 5 ans, contre 10 ans chez EcoFlow et Zendure.',
  },
];

export default function AllpowersBs2500ProPage() {
  return (
    <>
      <SchemaArticle
        title="ALLPOWERS BS2500 PRO avis : batterie de balcon 2,6 kWh avec secours 2 400 W"
        description="Avis prudent sur la batterie de balcon ALLPOWERS BS2500 PRO : fiche technique, rentabilité et réserves."
        url="https://monbalconsolaire.fr/avis/allpowers-bs2500-pro"
        datePublished="2026-11-05"
        dateModified="2026-11-06"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="ALLPOWERS BS2500 PRO" brand="ALLPOWERS" description="Batterie de balcon LiFePO4 2,6 kWh, onduleur 800 W (réglable jusqu'à 2 400 W), double MPPT 2 × 1 000 W, sortie de secours 2 400 W, IP65." price={999} ratingValue={6} availability="InStock" url="https://monbalconsolaire.fr/avis/allpowers-bs2500-pro" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'ALLPOWERS BS2500 PRO' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'ALLPOWERS BS2500 PRO' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              ALLPOWERS BS2500 PRO avis : une grosse batterie de balcon, mais aucun test indépendant
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Connu pour ses stations portables, ALLPOWERS vend depuis juin 2026 en France une batterie pour balcon&nbsp;: le <strong>BS2500 PRO</strong>, 2,6&nbsp;kWh, onduleur 800&nbsp;W et vraie sortie de secours, affiché &agrave; 999&nbsp;&euro; pour le Black Friday. Sur le papier, c&apos;est l&apos;une des batteries les moins ch&egrave;res au kWh. Voici ce que dit la fiche, ce que &ccedil;a rapporte, et pourquoi nous restons prudents.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>5 novembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg border-2 border-amber bg-amber-pale/40 mb-8" role="note">
            <p className="badge-amber inline-block mb-3">Avis prudent</p>
            <h2 className="font-extrabold text-lg mb-2">Nous n&apos;avons pas test&eacute; ce produit, et personne d&apos;ind&eacute;pendant non plus</h2>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Cet avis s&apos;appuie sur la fiche technique officielle (iallpowers.fr, relev&eacute;e le 05/11/2026), nos calculs de rentabilit&eacute; et le seul retour client que nous ayons trouv&eacute;. Aucun test ind&eacute;pendant du BS2500 PRO n&apos;existait &agrave; cette date. <strong>Les chiffres de capacit&eacute; et de puissance sont ceux annonc&eacute;s par la marque, pas des mesures.</strong> Nous mettrons cet article &agrave; jour d&egrave;s qu&apos;un test s&eacute;rieux sera publi&eacute;.
            </p>
          </div>

          <ProductHero
            brand="ALLPOWERS"
            name="BS2500 PRO"
            power="800 W réseau / 2 400 W secours / 2 × 1 000 W PV"
            price="999 €"
            score="6/10"
            tagline="Batterie 2,6 kWh et onduleur réunis dans un boîtier IP65, avec sortie de secours 2 400 W. Prometteur sur le papier, pas encore prouvé."
            affiliateUrl={allpowersUrl(PRODUCT_URL)}
            affiliateLabel="Voir le BS2500 PRO sur ALLPOWERS"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix relev&eacute; sur iallpowers.fr le 05/11/2026 (offre Black Friday, panneaux non inclus)</p>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              &Agrave; 999&nbsp;&euro;, le BS2500 PRO offre beaucoup sur le papier&nbsp;: 2,6&nbsp;kWh, deux entr&eacute;es solaires, et surtout une sortie de secours de 2&nbsp;400&nbsp;W que peu de batteries de balcon proposent. Avec deux panneaux de 400&nbsp;W, l&apos;ensemble se rembourse en <strong>8,2&nbsp;ans</strong> selon nos calculs. <strong>Mais</strong> aucun test ind&eacute;pendant ne confirme ces chiffres, et le seul retour client trouv&eacute; parle d&apos;application introuvable et de manuel absent en fran&ccedil;ais. Si vous voulez un achat s&ucirc;r, le <Link href="/avis/zendure-solarflow" className="text-green hover:underline font-semibold">Zendure SolarFlow</Link> reste plus rentable et mieux connu. Le BS2500 PRO s&apos;adresse &agrave; ceux qui veulent du secours en cas de coupure et acceptent d&apos;essuyer les pl&acirc;tres.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">ALLPOWERS, des stations portables &agrave; la batterie de balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                ALLPOWERS est une marque chinoise fond&eacute;e en 2010, surtout connue pour ses stations &eacute;lectriques portables (s&eacute;ries R et S) et ses panneaux pliables, vendus en ligne et sur Amazon. Le BS2500 PRO et son grand fr&egrave;re BS5000 PRO (5,2&nbsp;kWh, 1&nbsp;699&nbsp;&euro;) sont ses premiers produits pens&eacute;s pour rester install&eacute;s &agrave; demeure sur un balcon ou une terrasse.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Le principe est le m&ecirc;me que chez Zendure, EcoFlow ou Bluetti&nbsp;: les panneaux se branchent sur le bo&icirc;tier, qui stocke l&apos;&eacute;lectricit&eacute; produite &agrave; midi et la restitue le soir via une prise. La diff&eacute;rence, c&apos;est la sortie de secours de 2&nbsp;400&nbsp;W, qui en fait aussi une alimentation de d&eacute;pannage en cas de coupure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique du BS2500 PRO</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Capacit&eacute; batterie</td>
                      <td className="p-3 font-mono">2,6 kWh (LiFePO4)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Cycles annonc&eacute;s</td>
                      <td className="p-3 font-mono">plus de 6 000 (&agrave; 80 %)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Extensible jusqu&apos;&agrave;</td>
                      <td className="p-3 font-mono">7,8 kWh (3 unit&eacute;s en parall&egrave;le)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Entr&eacute;e solaire</td>
                      <td className="p-3 font-mono">2 MPPT, 2 &times; 1 000 W (100 V, 16 A max par entr&eacute;e)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Sortie r&eacute;seau</td>
                      <td className="p-3 font-mono">800 W par d&eacute;faut (r&eacute;glable 0 &agrave; 2 400 W)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Sortie secours (hors r&eacute;seau)</td>
                      <td className="p-3 font-mono">2 400 W (4 800 W en cr&ecirc;te), bascule &lt; 15 ms</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Recharge secteur</td>
                      <td className="p-3 font-mono">2 400 W</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Compteurs compatibles</td>
                      <td className="p-3 text-xs">ALLPOWERS RS07 (69 &euro; mono, 99 &euro; tri) et Shelly</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Connectivit&eacute;</td>
                      <td className="p-3 text-xs">Wi-Fi + Bluetooth (application ALLPOWERS)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Protection / temp&eacute;ratures</td>
                      <td className="p-3 font-mono">IP65, -20 &agrave; +60 &deg;C</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Poids / dimensions</td>
                      <td className="p-3 font-mono">38,8 kg, 300 &times; 284 &times; 588 mm</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Garantie</td>
                      <td className="p-3 font-mono">5 ans</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-semibold">Prix (sans panneaux)</td>
                      <td className="p-3 font-mono font-bold text-green">999 &euro; (promo, prix barr&eacute; 1 999 &euro;)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Source&nbsp;: fiche officielle iallpowers.fr relev&eacute;e le 05/11/2026. Valeurs annonc&eacute;es par le fabricant, non mesur&eacute;es.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points forts du BS2500 PRO</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">✓ {p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="ALLPOWERS BS2500 PRO" merchantName="ALLPOWERS" affiliateUrl={allpowersUrl(PRODUCT_URL)} label="Voir le prix actuel sur ALLPOWERS" variant="primary" position="after-pros" price="999 €" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points faibles &agrave; conna&icirc;tre</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h3 className="font-bold text-sm mb-1 text-amber-dark">⚠️ {p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone mt-4 italic">
                Tests de la station ALLPOWERS S2000 Pro cit&eacute;s&nbsp;:{' '}
                <a href="https://www.storagereview.com/review/allpowers-s2000-pro-portable-power-station-review" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">StorageReview</a> (environ 920&nbsp;Wh mesur&eacute;s pour 1&nbsp;500&nbsp;Wh annonc&eacute;s) et{' '}
                <a href="https://www.thesolarlab.com/review/allpowers-s2000-pro-review" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">The Solar Lab</a> (onduleur plafonn&eacute; vers 2&nbsp;050&nbsp;W pour 2&nbsp;400&nbsp;W annonc&eacute;s). Ces tests portent sur un autre produit que le BS2500 PRO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">BS2500 PRO vs concurrence (novembre 2026)</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="p-3 text-left font-semibold">Crit&egrave;re</th>
                      <th className="p-3 text-center font-semibold">ALLPOWERS BS2500 PRO</th>
                      <th className="p-3 text-center font-semibold">Zendure SolarFlow</th>
                      <th className="p-3 text-center font-semibold">EcoFlow STREAM Ultra</th>
                      <th className="p-3 text-center font-semibold">Bluetti Balco 260</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-white">Prix</td>
                      <td className="p-3 text-center bg-green-pale/30 font-mono font-bold">999 &euro;<span className="block text-xs font-normal text-stone">(promo, sans panneaux)</span></td>
                      <td className="p-3 text-center bg-white font-mono">539 &euro;<span className="block text-xs text-stone">(719 &euro; avec 2 panneaux)</span></td>
                      <td className="p-3 text-center bg-cream/50 font-mono">659 &euro;<span className="block text-xs text-stone">(promo)</span></td>
                      <td className="p-3 text-center bg-white font-mono">789 &euro;<span className="block text-xs text-stone">(promo)</span></td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-cream/50">Capacit&eacute;</td>
                      <td className="p-3 text-center bg-green-pale/30 font-mono"><strong>2,6 kWh</strong></td>
                      <td className="p-3 text-center bg-white font-mono">1,92 kWh</td>
                      <td className="p-3 text-center bg-cream/50 font-mono">1,92 kWh</td>
                      <td className="p-3 text-center bg-white font-mono">2,56 kWh</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-white">Sortie secours</td>
                      <td className="p-3 text-center bg-green-pale/30 font-mono"><strong>2 400 W</strong></td>
                      <td className="p-3 text-center bg-white text-xs">Non</td>
                      <td className="p-3 text-center bg-cream/50 font-mono">2 300 W</td>
                      <td className="p-3 text-center bg-white text-xs">Non</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-cream/50">Garantie</td>
                      <td className="p-3 text-center bg-green-pale/30 font-mono">5 ans</td>
                      <td className="p-3 text-center bg-white font-mono">10 ans</td>
                      <td className="p-3 text-center bg-cream/50 font-mono">10 ans</td>
                      <td className="p-3 text-center bg-white text-xs">voir avis</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-white">Tests ind&eacute;pendants</td>
                      <td className="p-3 text-center bg-green-pale/30 text-xs">Aucun</td>
                      <td className="p-3 text-center bg-white text-xs">Nombreux</td>
                      <td className="p-3 text-center bg-cream/50 text-xs">Quelques-uns</td>
                      <td className="p-3 text-center bg-white text-xs">Quelques-uns</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold bg-cream/50">Cible id&eacute;ale</td>
                      <td className="p-3 text-center bg-green-pale/30 text-xs">Secours + gros stockage, pr&ecirc;t &agrave; prendre un risque</td>
                      <td className="p-3 text-center bg-white text-xs">Meilleur ROI, achat s&ucirc;r</td>
                      <td className="p-3 text-center bg-cream/50 text-xs">Secours + appli aboutie</td>
                      <td className="p-3 text-center bg-white text-xs">Gros stockage simple</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Prix Zendure, EcoFlow et Bluetti&nbsp;: ceux de nos avis d&eacute;di&eacute;s (octobre-novembre 2026). Prix BS2500 PRO relev&eacute; sur iallpowers.fr le 05/11/2026.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r qu&apos;une batterie soit rentable chez vous&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et votre exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; et production (BS2500 PRO + 2 panneaux 400 W)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ensemble repr&eacute;sentatif&nbsp;: <strong>BS2500 PRO (999&nbsp;&euro;) + 2 panneaux rigides de 400&nbsp;W (environ 400&nbsp;&euro;)</strong>, soit environ <strong>1&nbsp;399&nbsp;&euro;</strong>, install&eacute; &agrave; Lyon, plein sud, sans ombre.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">816 kWh/an</div>
                  <p className="text-xs text-charcoal-light mt-1">Production (800 Wc, sud, Lyon, PR 0,85)</p>
                </div>
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">155 &euro;</div>
                  <p className="text-xs text-charcoal-light mt-1">&Eacute;conomies la 1re ann&eacute;e (95 % autoconsomm&eacute;s)</p>
                </div>
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">8,2 ans</div>
                  <p className="text-xs text-charcoal-light mt-1">Retour sur investissement ({KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL})</p>
                </div>
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">~5 500 &euro;</div>
                  <p className="text-xs text-charcoal-light mt-1">&Eacute;conomies cumul&eacute;es sur 25 ans</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avec le pack officiel (bo&icirc;tier + un panneau pliable SP039 de 600&nbsp;W &agrave; 1&nbsp;499&nbsp;&euro;), la production tombe &agrave; 612&nbsp;kWh/an et le retour sur investissement passe &agrave; <strong>11,2&nbsp;ans</strong>&nbsp;: mieux vaut acheter deux panneaux rigides s&eacute;par&eacute;ment.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Ces 8,2&nbsp;ans supposent que la batterie tient vraiment ses 2,6&nbsp;kWh et ses 6&nbsp;000 cycles, et que la garantie de 5&nbsp;ans couvre les premi&egrave;res ann&eacute;es. C&apos;est moins bien que l&apos;EcoFlow STREAM Ultra (6,3&nbsp;ans dans les m&ecirc;mes conditions, au prix promotionnel de 659&nbsp;&euro;) et que le Zendure SolarFlow 800 Plus en pack avec 2 panneaux de 500&nbsp;W (3,6&nbsp;ans &agrave; 719&nbsp;&euro;).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous voulez un produit déjà testé et éprouvé (préférez le Zendure SolarFlow)',
                  'Vous cherchez le meilleur retour sur investissement pur',
                  'Votre balcon ne supporte pas un appareil de près de 40 kg',
                  'Vous avez besoin d’une application et d’une notice en français irréprochables dès le premier jour',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-amber-pale/30 border-amber/10 border-l-4 border-l-amber mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">&#9888;&#65039;</span>
                <div>
                  <h3 className="font-bold text-sm text-amber-dark mb-2">Notre verdict&nbsp;: 6/10</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Le BS2500 PRO coche beaucoup de cases sur le papier&nbsp;: grosse batterie, double entr&eacute;e solaire, secours 2&nbsp;400&nbsp;W, prix promo agressif. Mais c&apos;est un premier produit de balcon, sans test ind&eacute;pendant et avec une garantie plus courte que la concurrence. Nous ne le d&eacute;conseillons pas, mais nous ne le recommandons pas les yeux ferm&eacute;s&nbsp;: si vous l&apos;achetez, gardez votre preuve d&apos;achat, testez-le pendant les 30 jours de remboursement et v&eacute;rifiez que l&apos;application fonctionne avant de fixer quoi que ce soit.
                  </p>
                </div>
              </div>
            </div>

            <AffiliateCTA productName="ALLPOWERS BS2500 PRO" merchantName="ALLPOWERS" affiliateUrl={allpowersUrl(PRODUCT_URL)} label="Voir le BS2500 PRO sur ALLPOWERS" variant="box" position="footer-box" price="999 €" />

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

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow</h3>
                  <p className="text-xs text-charcoal-light mt-1">La batterie de balcon la plus rentable (3,6 ans en pack), sans sortie de secours</p>
                </Link>
                <Link href="/avis/ecoflow-stream-ultra" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis EcoFlow STREAM Ultra</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;autre batterie avec secours (2 300 W), application plus aboutie</p>
                </Link>
                <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleure batterie solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Toutes les solutions de stockage compar&eacute;es</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis</h3>
                  <p className="text-xs text-charcoal-light mt-1">La d&eacute;marche obligatoire avant de brancher votre installation</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie&nbsp;:</strong> ROI calcul&eacute; avec le tarif {KWH_PRICE_LABEL}, une inflation de {KWH_INFLATION_LABEL}, une d&eacute;gradation des panneaux de {PANEL_DEGRADATION_LABEL}, 95&nbsp;% d&apos;autoconsommation avec batterie, Performance Ratio 0,85, Lyon plein sud. Fiche technique et prix relev&eacute;s sur iallpowers.fr le 05/11/2026. Produit analys&eacute;, pas test&eacute; physiquement. Cet article contient des liens affili&eacute;s ALLPOWERS (via Awin)&nbsp;: nous touchons une commission si vous achetez, sans surco&ucirc;t pour vous, et cela n&apos;a pas influenc&eacute; la note.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
