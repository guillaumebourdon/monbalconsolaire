import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';
import { ecoflowUrl } from '@/lib/affiliate';

export const metadata: Metadata = withCanonicalOg({
  title: 'EcoFlow STREAM Ultra avis : le successeur du PowerStream',
  description: 'EcoFlow STREAM Ultra : batterie 1,92 kWh + micro-onduleur 800 W, 659 € en promotion. Specs, ROI et alternative au PowerStream arrêté.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/ecoflow-stream-ultra',
  },
});

const faqData = [
  {
    question: 'Quelle différence avec le PowerStream ?',
    answer: 'Le PowerStream était un micro-onduleur nu : il fallait lui adjoindre une station EcoFlow séparée (DELTA 2, RIVER...) pour avoir du stockage, d\'où un coût total élevé (~1 800 € pour seulement 1 kWh). Le STREAM Ultra intègre la batterie LiFePO4 (1,92 kWh) ET le micro-onduleur (800 W) dans un seul boîtier IP65 : c\'est un vrai tout-en-un, plus proche d\'un Zendure SolarFlow que de l\'ancien PowerStream. EcoFlow a retiré le PowerStream de son catalogue France en 2026 au profit de cette gamme STREAM.',
  },
  {
    question: 'Que signifie "extensible jusqu\'à 11,52 kWh" ?',
    answer: 'Le STREAM Ultra part avec 1,92 kWh de batterie intégrée. EcoFlow vend des batteries d\'extension STREAM AC Pro (1,92 kWh chacune) qui se raccordent au boîtier principal : jusqu\'à 5 unités supplémentaires, soit 6 × 1,92 kWh = 11,52 kWh au total. Vous pouvez donc démarrer avec le boîtier seul et augmenter le stockage au fil du temps, sans changer le micro-onduleur.',
  },
  {
    question: 'Faut-il déclarer le STREAM Ultra à Enedis (CACSI) ?',
    answer: 'Oui, comme tout système solaire connecté au réseau. La sortie onduleur du STREAM Ultra est bridée à 800 W, conforme à la recommandation française (pas une limite légale : aucun texte n\'impose 800 W, mais c\'est le seuil retenu par les fabricants pour une installation sans électricien). La déclaration CACSI (Convention d\'Autoconsommation Sans Injection) se fait en ligne auprès d\'Enedis, en 20-30 minutes, gratuitement.',
  },
  {
    question: 'STREAM Ultra ou Zendure SolarFlow : lequel choisir ?',
    answer: 'Même capacité de départ (1,92 kWh) et même puissance d\'onduleur (800 W), mais deux philosophies différentes. Le Zendure SolarFlow 800 Plus (539 € seul, 719 € en pack avec 2 panneaux de 500 W au 5 novembre 2026, prix promotionnel) est moins cher et suffit pour la grande majorité des balcons, avec un ROI de 3,6 ans pour ce pack. Le STREAM Ultra se distingue par sa sortie de secours jusqu\'à 2 300 W (utile en cas de coupure réseau, ce que le SolarFlow ne propose pas) et par l\'application EcoFlow, plus aboutie. Si vous cherchez le meilleur ROI pur, Zendure gagne ; si le backup électrique en cas de coupure compte pour vous, le STREAM Ultra se justifie.',
  },
  {
    question: 'Le STREAM Ultra est-il vendu en France et où l\'acheter ?',
    answer: 'Oui, EcoFlow commercialise la gamme STREAM (dont le STREAM Ultra) sur sa boutique officielle fr.ecoflow.com depuis 2026, en remplacement du PowerStream. Le 5 novembre 2026, fr.ecoflow.com affichait le STREAM Ultra seul à 659 € (prix barré 1 299 €), en stock. Les promotions changent souvent : vérifiez le tarif au moment de commander.',
  },
  {
    question: 'Combien coûte un setup complet avec panneaux ?',
    answer: 'Le 5 novembre 2026, le boîtier STREAM Ultra seul (1,92 kWh + micro-onduleur) était à 659 € sur fr.ecoflow.com (prix barré 1 299 €). Le pack avec 4 panneaux de 500 W était à 1 499 €. En ajoutant vous-même 2 panneaux de 400 W (environ 400 €, estimation), un setup complet tourne autour de 1 060 €, plus cher que le pack Zendure SolarFlow 800 Plus avec 2 panneaux de 500 W (719 € en promotion) pour une capacité équivalente.',
  },
];

const points_forts = [
  {
    titre: 'Vrai tout-en-un (contrairement au PowerStream)',
    detail: 'Batterie LiFePO4 et micro-onduleur 800 W sont intégrés dans le même boîtier IP65. Plus besoin d\'acheter une station EcoFlow séparée comme avec le PowerStream : vous branchez les panneaux, et c\'est prêt.',
  },
  {
    titre: 'Extensible jusqu\'à 11,52 kWh',
    detail: 'Vous démarrez avec 1,92 kWh et ajoutez jusqu\'à 5 batteries d\'extension STREAM AC Pro au fil de vos besoins, sans changer le micro-onduleur ni reconfigurer l\'installation.',
  },
  {
    titre: 'Sortie de secours jusqu\'à 2 300 W',
    detail: 'En plus des 800 W injectés sur le réseau, le boîtier peut délivrer jusqu\'à 2 300 W en bypass pour alimenter des appareils en cas de coupure de courant. Un atout que le Zendure SolarFlow ou le Sunology VAULT n\'offrent pas.',
  },
  {
    titre: '4 MPPT indépendants',
    detail: 'Jusqu\'à 2 000 W d\'entrée solaire répartis sur 4 trackers MPPT (4 × 500 W). Un panneau partiellement ombragé ne pénalise pas la production des trois autres, contrairement à un système à 1 ou 2 MPPT.',
  },
  {
    titre: 'Application EcoFlow héritée du PowerStream',
    detail: 'Suivi en temps réel, programmation horaire (charger en heures creuses, décharger en heures pleines), notifications. L\'app la plus aboutie du secteur grand public, déjà saluée dans notre avis PowerStream.',
  },
];

const points_faibles = [
  {
    titre: 'Un prix très dépendant des promotions',
    detail: 'Le 5 novembre 2026, le STREAM Ultra était à 659 € contre un prix barré de 1 299 € : l\'écart est énorme. Hors promotion, il perd l\'essentiel de son intérêt face au Zendure SolarFlow 800 Plus.',
  },
  {
    titre: 'Panneaux vendus séparément',
    detail: 'Comme pour le PowerStream, le STREAM Ultra est un boîtier batterie + onduleur. Il faut ajouter vos propres panneaux (2 × 400 W conseillés) pour un total d\'environ 1 060 € au prix promotionnel du 5 novembre 2026.',
  },
  {
    titre: 'Recul produit limité en France',
    detail: 'La gamme STREAM est récente sur le marché français (2026) : peu de retours utilisateurs long terme disponibles pour juger de la fiabilité sur plusieurs années, à la différence du Zendure SolarFlow ou du Sunology PLAY.',
  },
  {
    titre: 'Extension coûteuse',
    detail: 'Chaque batterie STREAM AC Pro supplémentaire s\'ajoute à un prix de départ déjà plus élevé que la concurrence. Monter à 11,52 kWh représente un investissement conséquent comparé à une solution résidentielle dédiée.',
  },
];

export default function EcoflowStreamUltraPage() {
  return (
    <>
      <SchemaArticle
        title="EcoFlow STREAM Ultra avis : batterie et micro-onduleur tout-en-un"
        description="Avis complet du STREAM Ultra, successeur du PowerStream chez EcoFlow."
        url="https://monbalconsolaire.fr/avis/ecoflow-stream-ultra"
        datePublished="2026-11-03"
        dateModified="2026-11-05"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="EcoFlow STREAM Ultra" brand="EcoFlow" description="Batterie LiFePO4 1,92 kWh avec micro-onduleur 800 W intégré, extensible à 11,52 kWh, 4 MPPT, sortie secours 2 300 W." price={659} ratingValue={7.5} availability="InStock" url="https://monbalconsolaire.fr/avis/ecoflow-stream-ultra" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'EcoFlow STREAM Ultra' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'EcoFlow STREAM Ultra' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              EcoFlow STREAM Ultra avis : le successeur tout-en-un du PowerStream
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              EcoFlow a retiré le PowerStream de son catalogue France en 2026 au profit de la gamme <strong>STREAM</strong>. Le STREAM Ultra en est le modèle avec stockage&nbsp;: batterie et micro-onduleur 800&nbsp;W réunis dans un seul boîtier, extensible jusqu&apos;à 11,52&nbsp;kWh. Analyse compl&egrave;te des specs, du prix et de la rentabilit&eacute;.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>3 novembre 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg border-2 border-amber bg-amber-pale/40 mb-8" role="note">
            <p className="badge-amber inline-block mb-3">Prix promotionnel</p>
            <h2 className="font-extrabold text-lg mb-2">Prix v&eacute;rifi&eacute; sur fr.ecoflow.com le 5 novembre 2026</h2>
            <p className="text-sm text-charcoal-light leading-relaxed mb-3">
              Le STREAM Ultra seul &eacute;tait affich&eacute; &agrave; <strong>659&nbsp;&euro;</strong> (prix barr&eacute; 1&nbsp;299&nbsp;&euro;), en stock. Aucune date de fin de promotion n&apos;est indiqu&eacute;e&nbsp;: <strong>v&eacute;rifiez le tarif au moment de commander</strong>. Les sp&eacute;cifications viennent des fiches EcoFlow et de comparatifs ind&eacute;pendants (Test-Achats, GIGA.de).
            </p>
          </div>

          <ProductHero
            brand="EcoFlow"
            name="STREAM Ultra"
            power="800 W (sortie) / 2 000 W entrée PV"
            price="659 €"
            score="7.5/10"
            tagline="Batterie 1,92 kWh et micro-onduleur 800 W intégrés dans un seul boîtier, extensible à 11,52 kWh."
            affiliateUrl={ecoflowUrl('https://fr.ecoflow.com/products/stream-ultra-pro')}
            affiliateLabel="Voir le STREAM Ultra sur EcoFlow"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix constat&eacute; sur les boutiques EcoFlow zone euro (Allemagne, Belgique) en octobre 2026 &middot; non reconfirm&eacute; sur fr.ecoflow.com (voir encadr&eacute; ci-dessus)</p>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le STREAM Ultra corrige le principal défaut du PowerStream&nbsp;: il n&apos;impose plus d&apos;acheter une station EcoFlow séparée pour avoir du stockage. Batterie et micro-onduleur sont réunis dans un boîtier unique, extensible jusqu&apos;à 11,52&nbsp;kWh, avec une sortie de secours jusqu&apos;à 2 300&nbsp;W en cas de coupure. <strong>Mais</strong> à capacité et puissance équivalentes, le Zendure SolarFlow 800 Plus reste moins cher (719&nbsp;€ en pack avec 2 panneaux de 500&nbsp;W, contre ~1 060&nbsp;€ pour un STREAM Ultra avec 2 panneaux achet&eacute;s &agrave; part, prix promotionnels du 5 novembre 2026). Le STREAM Ultra se justifie surtout si la sortie de secours ou l&apos;écosystème applicatif EcoFlow compte vraiment pour vous.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">EcoFlow STREAM : une gamme qui remplace le PowerStream</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le <Link href="/avis/ecoflow-powerstream" className="text-green hover:underline font-semibold">PowerStream</Link>, lancé en 2024, était un micro-onduleur intelligent vendu seul (599&nbsp;€) qu&apos;il fallait associer à une station EcoFlow portable (DELTA&nbsp;2, DELTA Pro&hellip;) pour obtenir du stockage. Résultat&nbsp;: un setup complet dépassait facilement 1&nbsp;800&nbsp;€ pour seulement 1&nbsp;kWh de batterie. EcoFlow a retiré ce produit de son catalogue France en 2026.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                À la place, la marque propose la gamme <strong>STREAM</strong>&nbsp;: un micro-onduleur STREAM nu (139&nbsp;€, sans stockage) et des boîtiers avec batterie intégrée, dont le <strong>STREAM Ultra</strong>. Contrairement au PowerStream, le STREAM Ultra embarque directement sa propre batterie LiFePO4&nbsp;: plus besoin d&apos;acheter un accessoire séparé pour stocker l&apos;énergie du midi et la restituer le soir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique du STREAM Ultra</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Capacité batterie (de base)</td>
                      <td className="p-3 font-mono">1,92 kWh (LiFePO4)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Extensible jusqu&apos;à</td>
                      <td className="p-3 font-mono">11,52 kWh (+ 5 batteries STREAM AC Pro)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Entrée solaire (PV) max</td>
                      <td className="p-3 font-mono">2 000 W (4 × 500 W)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">MPPT</td>
                      <td className="p-3 font-mono">4 trackers indépendants</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Sortie onduleur (réseau)</td>
                      <td className="p-3 font-mono">800 W (réglable)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Sortie bypass / secours</td>
                      <td className="p-3 font-mono">jusqu&apos;à 2 300 W</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Connectivité</td>
                      <td className="p-3 text-xs">Wi-Fi + Bluetooth (app EcoFlow)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Indice de protection</td>
                      <td className="p-3 font-mono">IP65</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Cycles de charge annoncés</td>
                      <td className="p-3 font-mono">~6 000 cycles (à 70 % de capacité)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Garantie annoncée</td>
                      <td className="p-3 text-xs">10 ans (gamme STREAM, à reconfirmer en France)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 font-semibold">Prix constaté (hors France)</td>
                      <td className="p-3 font-mono font-bold text-green">659 € en promotion (prix barré 1 299 €, 05/11/2026)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Sp&eacute;cifications recoup&eacute;es sur les boutiques EcoFlow Allemagne/Belgique/Autriche et comparatifs ind&eacute;pendants (Test-Achats, GIGA.de), octobre 2026. &Agrave; reconfirmer sur fr.ecoflow.com.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le grand frère : STREAM Ultra X</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                EcoFlow propose aussi une version plus grande, le <strong>STREAM Ultra X</strong>&nbsp;: 3,84&nbsp;kWh de batterie de base (extensible jusqu&apos;à 23&nbsp;kWh), une entrée solaire portée à 2 800&nbsp;W et une sortie bypass de 2 300&nbsp;W en double prise AC. Constaté à 1 699&nbsp;€ chez un revendeur belge (prix barré depuis 1 999&nbsp;€) en octobre 2026, c&apos;est l&apos;option à considérer si vous visez une autoconsommation maximale sur un grand balcon ou une petite toiture, plutôt qu&apos;un usage balcon classique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points forts du STREAM Ultra</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">✓ {p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="EcoFlow STREAM Ultra" merchantName="EcoFlow" affiliateUrl={ecoflowUrl('https://fr.ecoflow.com/products/stream-ultra-pro')} label="Voir le prix actuel sur EcoFlow" variant="primary" position="after-pros" price="659 €" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 points faibles à connaître</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h3 className="font-bold text-sm mb-1 text-amber-dark">⚠️ {p.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="EcoFlow STREAM Ultra" merchantName="EcoFlow" affiliateUrl={ecoflowUrl('https://fr.ecoflow.com/products/stream-ultra-pro')} label="Comparer avec les autres batteries solaires" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">STREAM Ultra vs concurrence (novembre 2026)</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-charcoal text-cream">
                      <th className="p-3 text-left font-semibold">Critère</th>
                      <th className="p-3 text-center font-semibold">EcoFlow STREAM Ultra</th>
                      <th className="p-3 text-center font-semibold">Zendure SolarFlow</th>
                      <th className="p-3 text-center font-semibold">Bluetti Balco 260</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-white">Prix (boîtier seul)</td>
                      <td className="p-3 text-center bg-amber-pale/30 font-mono font-bold">659 €<span className="block text-xs font-normal text-stone">(promotion)</span></td>
                      <td className="p-3 text-center bg-green-pale/30 font-mono font-bold text-green">539 €<span className="block text-xs font-normal text-stone">(719 € avec 2 panneaux)</span></td>
                      <td className="p-3 text-center bg-cream/50 font-mono">789 €</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-cream/50">Capacité</td>
                      <td className="p-3 text-center bg-amber-pale/30 font-mono">1,92 kWh</td>
                      <td className="p-3 text-center bg-green-pale/30 font-mono">1,92 kWh</td>
                      <td className="p-3 text-center bg-white font-mono"><strong>2,56 kWh</strong></td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-white">Extensible jusqu&apos;à</td>
                      <td className="p-3 text-center bg-amber-pale/30 font-mono"><strong>11,52 kWh</strong></td>
                      <td className="p-3 text-center bg-green-pale/30 text-xs">Non</td>
                      <td className="p-3 text-center bg-cream/50 text-xs">Jusqu&apos;à 15 kWh</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-3 font-semibold bg-cream/50">Sortie secours (bypass)</td>
                      <td className="p-3 text-center bg-amber-pale/30 font-mono"><strong>2 300 W</strong></td>
                      <td className="p-3 text-center bg-green-pale/30 text-xs">Non (injection réseau seule)</td>
                      <td className="p-3 text-center bg-white text-xs">Non</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold bg-white">Cible idéale</td>
                      <td className="p-3 text-center bg-amber-pale/30 text-xs">Backup coupure / éco EcoFlow</td>
                      <td className="p-3 text-center bg-green-pale/30 text-xs">Meilleur ROI pur</td>
                      <td className="p-3 text-center bg-cream/50 text-xs">Gros stockage simple</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Prix EcoFlow, Zendure et Bluetti v&eacute;rifi&eacute;s sur leurs boutiques officielles fran&ccedil;aises le 5 novembre 2026 (prix promotionnels).</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas sûr que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalisé selon votre département et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec un kit actuel →
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">À éviter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous cherchez avant tout le meilleur ROI (préférez le Zendure SolarFlow)',
                  'Vous n\'avez pas besoin d\'une sortie de secours en cas de coupure',
                  'Vous n\'achetez pas pendant une promotion (prix barré 1 299 €)',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilité et production (setup STREAM Ultra + 2 panneaux 400 W)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Setup représentatif&nbsp;: <strong>STREAM Ultra (659 € en promotion) + 2 panneaux 400 W (~400 €, estimation)</strong>, soit environ <strong>1 060 €</strong>, installé à Lyon en exposition sud.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">816 kWh/an</div>
                  <p className="text-xs text-charcoal-light mt-1">Production (800 Wc, sud, Lyon, PR 0,85)</p>
                </div>
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">155 €</div>
                  <p className="text-xs text-charcoal-light mt-1">Économies la 1re année (95 % autoconso avec batterie)</p>
                </div>
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">6,3 ans</div>
                  <p className="text-xs text-charcoal-light mt-1">ROI (tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, dégradation {PANEL_DEGRADATION_LABEL})</p>
                </div>
                <div className="card-lg bg-green-pale/30 border-green/10 text-center">
                  <div className="font-mono text-2xl font-bold text-green">~5 500 €</div>
                  <p className="text-xs text-charcoal-light mt-1">Économies cumulées sur 25 ans</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Un ROI de 6,3 ans est correct pour un système avec batterie et sortie de secours, mais moins performant que le Zendure SolarFlow 800 Plus en pack (3,6 ans au prix promotionnel de 719&nbsp;&euro;, sans backup coupure). Au prix barr&eacute; de 1&nbsp;299&nbsp;&euro;, le m&ecirc;me setup d&eacute;passerait 1&nbsp;700&nbsp;&euro; et 10 ans de ROI. Le STREAM Ultra X (3,84&nbsp;kWh) d&eacute;marre &agrave; 1&nbsp;099&nbsp;&euro; sur fr.ecoflow.com (5 novembre 2026).
              </p>
            </section>

            <div className="card-lg bg-amber-pale/30 border-amber/10 border-l-4 border-l-amber mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">&#9888;&#65039;</span>
                <div>
                  <h3 className="font-bold text-sm text-amber-dark mb-2">Verdict &eacute;ditorial</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    Le STREAM Ultra est un vrai progr&egrave;s par rapport au PowerStream (tout-en-un, plus besoin de station s&eacute;par&eacute;e), mais &agrave; 6,3&nbsp;ans de ROI (au prix promotionnel), il reste moins rentable que le <Link href="/avis/zendure-solarflow" className="text-green hover:underline font-semibold">Zendure SolarFlow 800 Plus</Link> (3,6&nbsp;ans en pack). Il se justifie surtout si la sortie de secours 2 300&nbsp;W ou l&apos;&eacute;cosyst&egrave;me EcoFlow comptent pour vous &mdash; et seulement en promotion.
                  </p>
                </div>
              </div>
            </div>

            <AffiliateCTA productName="EcoFlow STREAM Ultra" merchantName="EcoFlow" affiliateUrl={ecoflowUrl('https://fr.ecoflow.com/products/stream-ultra-pro')} label="Voir le STREAM Ultra sur EcoFlow" variant="box" position="footer-box" price="659 €" />

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
                <Link href="/avis/ecoflow-powerstream" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis EcoFlow PowerStream (arrêté)</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le prédécesseur du STREAM Ultra, retiré du catalogue EcoFlow France en 2026</p>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow</h3>
                  <p className="text-xs text-charcoal-light mt-1">Même capacité (1,92 kWh), meilleur ROI (3,6 ans en pack) mais sans sortie de secours</p>
                </Link>
                <Link href="/avis/allpowers-bs2500-pro" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis ALLPOWERS BS2500 PRO</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;autre batterie avec secours (2 400 W) : 2,6 kWh &agrave; 999 &euro;, mais aucun test ind&eacute;pendant</p>
                </Link>
                <Link href="/comparatif/meilleure-batterie-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleure batterie solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Toutes les solutions de stockage comparées : Zendure, Bluetti, Jackery, EcoFlow</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kit avec ou sans batterie : lequel choisir ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Sunology PLAY MAX, Beem Battery, EcoFlow : la rentabilité du stockage comparée</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> ROI calculé avec tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. Specs recoup&eacute;es sur les boutiques EcoFlow et des comparatifs ind&eacute;pendants&nbsp;; prix v&eacute;rifi&eacute; sur fr.ecoflow.com le 5 novembre 2026 (659&nbsp;&euro;, prix promotionnel). Article r&eacute;dig&eacute; sans r&eacute;mun&eacute;ration d&apos;EcoFlow.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
