import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Consommation veille kit solaire balcon : combien ça coûte vraiment ?',
  description: 'Micro-onduleur, Beembox, app WiFi : combien consomme votre kit solaire la nuit ? Tableau par kit, impact ROI chiffré et réponse à la question : faut-il débrancher ?',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/consommation-veille-kit-solaire',
  },
};

const faqData = [
  {
    question: 'Le micro-onduleur consomme-t-il de l’électricité la nuit ?',
    answer: 'Oui, mais très peu. Un micro-onduleur en veille absorbe entre 0,3 et 0,5 W côté secteur. Sur une année entière, cela représente 2,6–4,4 kWh, soit 0,50–0,85 € à 0,1940 €/kWh. C’est négligeable comparé à la production annuelle d’un kit 400–500 Wc (350–450 kWh).',
  },
  {
    question: 'Faut-il débrancher son kit solaire la nuit ?',
    answer: 'Pour un kit simple (sans batterie ni hub WiFi permanent), non. Le gain annuel serait inférieur à 1 €. Pour un système avec batterie (EcoFlow, Zendure) dont le hub consomme 2–4 W en continu, une prise connectée avec programmation horaire peut économiser 5–10 €/an, mais ce n’est pas une priorité.',
  },
  {
    question: 'La Beembox consomme-t-elle en permanence ?',
    answer: 'Oui. La Beembox est alimentée 24h/24 pour surveiller votre consommation Linky et synchroniser les données en temps réel. Sa consommation est d’environ 1–2 W. Sur 8 760 h/an, cela fait 8–17 kWh, soit 1,55–3,30 €/an.',
  },
  {
    question: 'Le WiFi du micro-onduleur consomme plus que l’onduleur lui-même ?',
    answer: 'Précisément. Le composant électronique de conversion consomme moins de 20 mW en veille selon les fiches techniques APsystems. Mais le module WiFi maintenu actif pour le monitoring ajoute 0,3–0,5 W. La différence est réelle mais reste anodine en valeur absolue.',
  },
  {
    question: 'Comment mesurer la consommation en veille de son kit ?',
    answer: 'Branchez une prise connectée avec mesure de consommation (Tapo P110, Shelly Plug S, ~15–25 €) entre le kit et la prise murale. Lisez la valeur la nuit — entre 22h et 6h. Vous obtenez la consommation réelle de votre installation. Cette mesure permet aussi de détecter un matériel défaillant qui consommerait anormalement.',
  },
  {
    question: 'La consommation en veille impacte-t-elle le ROI du kit ?',
    answer: 'Marginalement. Pour un kit à 500 € avec une consommation de 1 W en veille, le coût annuel est de 1,70 €. Sur 10 ans, c’est 17 €, soit 3,4 % du prix d’achat. Pour les systèmes avec hub (4 W), le coût cumulé monte à 68 € sur 10 ans — à prendre en compte dans le calcul de rentabilité réel.',
  },
];

const veilleData = [
  {
    kit: 'Sunology PLAY 2',
    onduleur: 'TSUN TSOL-MX450',
    wifi: 'WiFi intégré',
    veilleW: '~0,5 W',
    kwhAn: '4,4 kWh',
    coutAn: '0,85 €',
    note: 'WiFi toujours actif pour monitoring Sunology STREAM',
  },
  {
    kit: 'Beem On 500',
    onduleur: 'APsystems EZ1-H',
    wifi: 'WiFi + Beembox',
    veilleW: '~1,5–2 W',
    kwhAn: '13–17 kWh',
    coutAn: '2,50–3,30 €',
    note: 'Beembox alimentée 24h/24 pour le monitoring Linky',
  },
  {
    kit: 'Sunethic F500',
    onduleur: 'APsystems EZ1-H',
    wifi: 'WiFi intégré',
    veilleW: '~0,5 W',
    kwhAn: '4,4 kWh',
    coutAn: '0,85 €',
    note: 'Même onduleur que Beem, sans box externe',
  },
  {
    kit: 'DualSun PREASY',
    onduleur: 'Hoymiles HMS-400',
    wifi: 'Non (gateway ~60 €)',
    veilleW: '~0,3 W + 1 W (gateway)',
    kwhAn: '11,4 kWh',
    coutAn: '2,21 €',
    note: 'La gateway DTU-Lite consomme ~1 W même sans soleil',
  },
  {
    kit: 'EcoFlow PowerStream',
    onduleur: 'EcoFlow Stream 800',
    wifi: 'WiFi intégré',
    veilleW: '~2–3 W',
    kwhAn: '17–26 kWh',
    coutAn: '3,30–5,05 €',
    note: 'Hub WiFi + port USB chargeur actifs en permanence',
  },
  {
    kit: 'Zendure SolarFlow Mix',
    onduleur: 'Hub SolarFlow',
    wifi: 'WiFi + IA Zenki',
    veilleW: '~3–4 W',
    kwhAn: '26–35 kWh',
    coutAn: '5,05–6,79 €',
    note: 'Système résidentiel : hub actif, IA de gestion énergie',
  },
];

export default function ConsommationVeillePage() {
  return (
    <>
      <SchemaArticle
        title="Consommation veille kit solaire balcon : combien ça coûte vraiment ?"
        description="Micro-onduleur, Beembox, app WiFi : consommation en veille chiffrée par kit, impact ROI et verdict sur le débranchement nocturne."
        url="https://monbalconsolaire.fr/blog/consommation-veille-kit-solaire"
        datePublished="2026-07-07"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Consommation veille kit solaire' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Consommation veille kit solaire' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Question fr&eacute;quente</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon&nbsp;: combien &ccedil;a consomme en veille&nbsp;?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre kit solaire est branch&eacute; sur une prise. La nuit, quand il ne produit plus rien, il continue &agrave; consommer un peu d&apos;&eacute;lectricit&eacute; pour maintenir le WiFi, le monitoring et l&apos;&eacute;lectronique en vie. Combien exactement&nbsp;? Et est-ce que &ccedil;a vaut le coup de le d&eacute;brancher&nbsp;?
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>7 juillet 2026</span>
              <span>&middot;</span>
              <span>8 min de lecture</span>
            </div>
          </div>

          {/* Résumé */}
          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Micro-onduleur seul&nbsp;:</strong> 0,3&ndash;0,5&nbsp;W en veille &mdash; soit 0,50&ndash;0,85&nbsp;&euro;/an</li>
              <li>&bull; <strong>WiFi int&eacute;gr&eacute; (APsystems, TSUN)&nbsp;:</strong> +0,3&ndash;0,5&nbsp;W &mdash; le module WiFi consomme plus que l&apos;onduleur</li>
              <li>&bull; <strong>Gateway externe (Hoymiles DTU)&nbsp;:</strong> +1&nbsp;W suppl&eacute;mentaire 24h/24</li>
              <li>&bull; <strong>Hub syst&egrave;me avec batterie (EcoFlow, Zendure)&nbsp;:</strong> 2&ndash;4&nbsp;W continus</li>
              <li>&bull; <strong>Impact ROI total&nbsp;:</strong> 1&ndash;7&nbsp;&euro;/an selon le syst&egrave;me</li>
              <li>&bull; <strong>D&eacute;brancher la nuit&nbsp;?</strong> Non, sauf pour les hubs &agrave; batterie (gain marginal)</li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Section 1 : Pourquoi ça consomme */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi un kit solaire consomme la nuit&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire plug-and-play reste branch&eacute; sur une prise 230&nbsp;V m&ecirc;me la nuit. Le <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="text-green hover:underline">micro-onduleur</Link> n&apos;injecte plus d&apos;&eacute;lectricit&eacute; &mdash; il n&apos;y a pas de soleil &mdash; mais il reste en <strong>mode veille</strong> pour&nbsp;:
              </p>
              <div className="space-y-3">
                {[
                  { titre: 'Maintenir la connexion WiFi ou Bluetooth', detail: 'Le module radio reste actif pour envoyer des données de télémétrie à l’app, même quand la production est nulle. C’est le principal poste de consommation nocturne.' },
                  { titre: 'Surveiller l’apparition du soleil', detail: 'Le micro-onduleur scrute en permanence la tension DC côté panneau. Dès qu’il détecte une tension suffisante (lever du soleil), il redémarre automatiquement la conversion. Ce processus de veille active consomme quelques dizaines de mW.' },
                  { titre: 'Alimenter la gateway ou le hub de monitoring', detail: 'Les systèmes avec Beembox (Beem), gateway DTU (Hoymiles) ou hub SolarFlow (Zendure) ont un boîtier séparé branché en permanence. C’est lui qui consomme le plus.' },
                ].map((item, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h3 className="font-bold text-sm mb-1">{item.titre}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 : Tableau comparatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau&nbsp;: consommation en veille par kit</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Mesures et donn&eacute;es techniques relev&eacute;es sur fiches fabricants et retours d&apos;utilisateurs (forum-photovoltaique.fr, tests avec prise connect&eacute;e Tapo P110). Tarif&nbsp;: 0,1940&nbsp;&euro;/kWh.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Kit</th>
                      <th className="p-3 text-right font-bold">Veille</th>
                      <th className="p-3 text-right font-bold">kWh/an</th>
                      <th className="p-3 text-right font-bold">Co&ucirc;t/an</th>
                      <th className="p-3 text-left font-bold hidden md:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {veilleData.map((row, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-sm">{row.kit}</td>
                        <td className="p-3 text-right font-mono text-sm text-amber-dark">{row.veilleW}</td>
                        <td className="p-3 text-right font-mono text-sm">{row.kwhAn}</td>
                        <td className="p-3 text-right font-mono font-bold text-sm text-green">{row.coutAn}</td>
                        <td className="p-3 text-xs text-charcoal-light hidden md:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Donn&eacute;es juillet 2026. Les valeurs varient selon la version du firmware et la qualit&eacute; du signal WiFi (un module en recherche active consomme davantage).
              </p>
            </section>

            {/* Section 3 : Impact ROI */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;impact r&eacute;el sur votre ROI</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Mettons les chiffres en perspective. Un kit Sunology PLAY&nbsp;2 ou Beem On produit entre <strong>350 et 480&nbsp;kWh/an</strong> &agrave; Lyon exposition sud. La consommation en veille repr&eacute;sente donc&nbsp;:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Kit simple (0,5 W)', cout: '0,85 €/an', ratio: '0,2–0,3 %', couleur: 'text-green' },
                  { label: 'Kit + Beembox (2 W)', cout: '3,40 €/an', ratio: '1,0–1,5 %', couleur: 'text-amber-dark' },
                  { label: 'Hub batterie (4 W)', cout: '6,79 €/an', ratio: '2,0–3,0 %', couleur: 'text-amber-dark' },
                ].map((item, i) => (
                  <div key={i} className="card-lg text-center">
                    <div className={`text-2xl font-extrabold mb-1 font-mono ${item.couleur}`}>{item.cout}</div>
                    <div className="text-xs text-stone mb-1">{item.label}</div>
                    <div className="text-xs text-charcoal-light font-semibold">= {item.ratio} de la production annuelle perdue</div>
                  </div>
                ))}
              </div>
              <div className="card-lg bg-amber-pale/20 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Sur 10 ans :</strong> entre 8,50&nbsp;&euro; (kit simple) et 68&nbsp;&euro; (hub batterie) de consommation parasite cumul&eacute;e. C&apos;est &agrave; prendre en compte dans le calcul de votre <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline">talon de consommation r&eacute;el</Link>, m&ecirc;me si &ccedil;a ne change pas la conclusion&nbsp;: un kit solaire reste largement rentable.
                </p>
              </div>
            </section>

            {/* Section 4 : Faut-il débrancher */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Faut-il d&eacute;brancher son kit la nuit&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La r&eacute;ponse d&eacute;pend de votre configuration.
              </p>
              <div className="space-y-4">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2 text-green">Kit simple sans batterie (Sunology, Sunethic)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    <strong>Non, inutile.</strong> La consommation nocturne est inf&eacute;rieure &agrave; 1&nbsp;W. Sur une nuit de 10&nbsp;heures, cela fait 10&nbsp;Wh, soit 0,002&nbsp;&euro;. Multiplier par 365&nbsp;: moins d&apos;1&nbsp;&euro;/an. Le fait de d&eacute;brancher et rebrancher r&eacute;guli&egrave;rement fatigue la fiche et la prise beaucoup plus vite que ce gain ne le justifie.
                  </p>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2 text-amber-dark">Kit Beem avec Beembox</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    <strong>Non n&eacute;cessaire.</strong> La Beembox est con&ccedil;ue pour &ecirc;tre branch&eacute;e en permanence&nbsp;&mdash;&nbsp;elle surveille aussi votre consommation Linky la nuit. La d&eacute;brancher casserait l&apos;analyse de talon nocturne qui justifie pr&eacute;cis&eacute;ment l&apos;achat du kit.
                  </p>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2 text-amber-dark">Syst&egrave;mes avec batterie (EcoFlow, Zendure)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    <strong>Optionnel, si vous voulez optimiser.</strong> Le hub consomme 2&ndash;4&nbsp;W sans rien faire la nuit. Une <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline">prise connect&eacute;e programm&eacute;e</Link> (type Tapo P115) peut couper l&apos;alimentation de 23h &agrave; 6h. Gain&nbsp;: 5&ndash;9&nbsp;&euro;/an. L&apos;impact sur l&apos;&eacute;tat de charge de la batterie est nul si elle est d&eacute;j&agrave; pleine le soir.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 : Le micro-onduleur seul */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que consomme le micro-onduleur lui-m&ecirc;me</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les fiches techniques publi&eacute;es par APsystems indiquent une consommation en veille de l&apos;&eacute;lectronique de conversion inf&eacute;rieure &agrave; <strong>20&nbsp;mW</strong> (0,02&nbsp;W). C&apos;est virtuellement z&eacute;ro &mdash; 0,18&nbsp;kWh sur une ann&eacute;e enti&egrave;re.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ce qui consomme davantage, c&apos;est le <strong>module de communication</strong>&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Composant</th>
                      <th className="p-3 text-right font-bold">Consommation veille</th>
                      <th className="p-3 text-left font-bold">D&eacute;tail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['&Eacute;lectronique DC&rarr;AC', '&lt; 0,02 W', 'Fiches techniques APsystems, présence tension secteur uniquement'],
                      ['Module WiFi intégré', '0,3–0,5 W', 'Maintient la connexion pour le monitoring et les mises à jour firmware'],
                      ['Module Bluetooth (EZ1-H)', '0,05–0,1 W', 'En recherche active si l’app est ouverte, sinon minimal'],
                      ['Gateway Hoymiles DTU-Lite', '~1 W', 'Boîtier séparé, branché en permanence sur secteur'],
                      ['Beembox (Beem Energy)', '1–2 W', 'Monitoring Linky + WiFi + synchronisation cloud 24h/24'],
                    ].map(([composant, conso, detail], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold" dangerouslySetInnerHTML={{ __html: composant }} />
                        <td className="p-3 text-right font-mono text-amber-dark" dangerouslySetInnerHTML={{ __html: conso }} />
                        <td className="p-3 text-xs text-charcoal-light">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 : Cas batterie */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le cas particulier des syst&egrave;mes avec batterie</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les kits avec stockage int&egrave;grent un <strong>hub de gestion d&apos;&eacute;nergie</strong> actif en permanence. C&apos;est lui qui d&eacute;cide en temps r&eacute;el d&apos;injecter sur le r&eacute;seau, de charger la batterie ou de restituer le stock. Il ne peut pas s&apos;&eacute;teindre la nuit sans perdre sa r&eacute;activit&eacute; au lever du soleil.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2">EcoFlow PowerStream</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Le micro-onduleur PowerStream maintient un port USB en charge et le WiFi actifs. Consommation totale estim&eacute;e&nbsp;: <strong>2&ndash;3&nbsp;W</strong>. Sur une ann&eacute;e&nbsp;: 17&ndash;26&nbsp;kWh, soit 3,30&ndash;5,05&nbsp;&euro;.
                  </p>
                  <Link href="/avis/ecoflow-powerstream" className="text-green text-xs hover:underline">Notre avis EcoFlow PowerStream &rarr;</Link>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2">Zendure SolarFlow Mix</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Le hub Zendure inclut l&apos;IA Zenki, qui tourne en tache de fond 24h/24. Consommation estim&eacute;e&nbsp;: <strong>3&ndash;4&nbsp;W</strong>. Le plus gourmand du march&eacute;, mais sur un syst&egrave;me &agrave; 1&nbsp;999&nbsp;&euro;+, &ccedil;a reste proportionnel.
                  </p>
                  <Link href="/avis/zendure-solarflow-mix" className="text-green text-xs hover:underline">Notre avis Zendure SolarFlow Mix &rarr;</Link>
                </div>
              </div>
              <div className="card-lg bg-green-pale/20 border-green/10 mt-4">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Perspective&nbsp;:</strong> un syst&egrave;me avec batterie passe l&apos;autoconsommation de ~45&nbsp;% &agrave; ~85&ndash;95&nbsp;%. Le gain annuel est de l&apos;ordre de <strong>200&ndash;350&nbsp;&euro;</strong>. La consommation du hub (5&ndash;7&nbsp;&euro;/an) repr&eacute;sente moins de 3&nbsp;% de ce gain. Le calcul est largement positif. Pour aller plus loin&nbsp;: <Link href="/guide/optimiser-autoconsommation-solaire" className="text-green hover:underline">optimiser son autoconsommation solaire</Link>.
                </p>
              </div>
            </section>

            {/* Section 7 : Mesurer */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment mesurer la consommation r&eacute;elle de votre kit</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La meilleure fa&ccedil;on de le savoir avec certitude&nbsp;: une <strong>prise connect&eacute;e avec mesure de puissance</strong>.
              </p>
              <div className="space-y-3">
                {[
                  { step: '1', titre: 'Branchez une prise connectée entre le kit et la prise murale', detail: 'Tapo P110 (~15€), Shelly Plug S (~25€), Meross MSS310 (~20€). Toutes mesurent la puissance instantanée en watts. Voir notre sélection détaillée.' },
                  { step: '2', titre: 'Lisez la valeur entre 23h et 6h', detail: 'C’est la consommation en veille réelle de votre installation, panneau non-producté. Les variations entre différentes lectures indiquent si le module WiFi se reconnecte périodiquement (pics de 0,8–1 W).' },
                  { step: '3', titre: 'Comparez avec la production de la journée', detail: 'Si votre kit a produit 1,5 kWh dans la journée et consommé 0,004 kWh la nuit (0,5W × 8h), la perte est de 0,3 % — confirmant que c’est négligeable.' },
                ].map((s) => (
                  <div key={s.step} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-green text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{s.step}</div>
                      <div>
                        <h3 className="font-bold text-sm mb-1">{s.titre}</h3>
                        <p className="text-xs text-charcoal-light leading-relaxed">{s.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal-light mt-4">
                Bonus&nbsp;: une prise connect&eacute;e permet aussi de <strong>d&eacute;tecter un mat&eacute;riel d&eacute;faillant</strong> qui consommerait anormalement (&gt;2&nbsp;W pour un kit simple = signe d&apos;un composant en panne). Plus d&apos;infos dans notre comparatif des <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline">prises connect&eacute;es pour suivi solaire</Link>.
              </p>
            </section>

            {/* CTA Calculateur */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Calculez la rentabilit&eacute; r&eacute;elle de votre kit</p>
              <p className="text-sm text-charcoal-light mb-4">
                La consommation en veille est int&eacute;gr&eacute;e dans notre calcul de ROI. Voyez l&apos;estimation nette pour votre d&eacute;partement et votre profil.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Lancer le calculateur &rarr;
              </Link>
            </div>

            {/* Section 8 : Articles liés */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation&nbsp;: comment le calculer et l&apos;effacer avec le solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le bruit de fond &eacute;lectrique de votre foyer co&ucirc;te 300&ndash;900&nbsp;&euro;/an &mdash; la veille de vos appareils incluse</p>
                </Link>
                <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Micro-onduleur solaire&nbsp;: comment &ccedil;a marche et lequel choisir&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif Hoymiles, APsystems, TSUN&nbsp;: leur consommation en veille et leurs sp&eacute;cifications compl&egrave;tes</p>
                </Link>
                <Link href="/blog/prises-connectees-suivi-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleures prises connect&eacute;es pour suivi solaire 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Pour mesurer la consommation en veille et programmer la coupure nocturne</p>
                </Link>
                <Link href="/guide/optimiser-autoconsommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Optimiser son autoconsommation solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">R&eacute;duire le surplus et maximiser ce que vous consommez directement</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            {/* FAQ */}
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
                <strong>Sources&nbsp;:</strong> fiches techniques APsystems EZ1-H (fiche EMEA 2023), forum-photovoltaique.fr (discussions sur la consommation nocturne des micro-onduleurs), mesures utilisateurs avec Tapo P110, documentation Hoymiles DTU-Lite, Zendure SolarFlow Mix. Tarif EDF&nbsp;: 0,1940&nbsp;&euro;/kWh (juillet 2026).{' '}
                <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
