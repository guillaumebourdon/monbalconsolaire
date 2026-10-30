import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';
import { withCanonicalOg } from '@/lib/metadata';

const SUNOLOGY_AFFILIATE_URL = 'https://sunology.eu/products/play-kit-solaire-plug-play';
const BEEM_AFFILIATE_URL = 'https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge';

export const metadata: Metadata = withCanonicalOg({
  title: 'Applis suivi solaire 2026 : Beem vs Sunology vs Zendure',
  description: 'Beem, Sunology STREAM, EcoFlow, Zendure, Shelly : la meilleure app pour suivre sa production solaire, piloter sa batterie en HP/HC et éviter les pièges.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/application-suivi-production-solaire',
  },
});

const faqData = [
  {
    question: 'Quelle est la meilleure app pour suivre sa production solaire ?',
    answer: 'Pour le suivi pur (production en temps réel, historique, économies), l\'app Sunology STREAM et l\'app Beem font le travail sans complexité, la première sans boîtier additionnel. Pour piloter une batterie (plages heures pleines/creuses, seuils de charge, notifications), l\'app EcoFlow est la plus aboutie et l\'app Zendure (avec l\'IA Zenky sur le modèle Pro) suit de près. Shelly n\'est pas une app de marque solaire : c\'est un suivi générique, complémentaire, qui convient surtout si vous voulez agréger plusieurs appareils dans un seul tableau de bord.',
  },
  {
    question: 'Faut-il un boîtier supplémentaire pour suivre sa production ?',
    answer: 'Ça dépend de la marque. Le Sunology PLAY (ex-PLAY 2) n\'a besoin de rien : le micro-onduleur se connecte directement en Wi-Fi à l\'app STREAM. Le Beem On nécessite la Beembox, fournie avec le kit et branchée sur votre box internet. Le Zendure SolarFlow et l\'EcoFlow intègrent leur propre communication sans boîtier séparé. Si vous voulez en plus mesurer votre consommation du logement (pas seulement la production), il faut un accessoire dans tous les cas : Pack STREAM (228 €) côté Sunology, ou un compteur Shelly (Plug S, 1PM ou 3EM) compatible avec plusieurs marques.',
  },
  {
    question: 'L\'app Zendure ou l\'app EcoFlow gère-t-elle les heures pleines/creuses automatiquement ?',
    answer: 'Oui pour les deux, mais avec des nuances. L\'app Zendure programme automatiquement la charge et la décharge de la batterie SolarFlow selon vos plages HP/HC (en heures pleines, le système décharge la batterie ; en heures creuses, il recharge depuis le réseau si nécessaire). L\'app EcoFlow permet de définir des seuils et des plages horaires personnalisées sur ses batteries portables. Le Sunology PLAY MAX (batterie VAULT) et le Beem On n\'ont pas cette fonction dans leur configuration standard : ce sont des systèmes sans pilotage réseau avancé.',
  },
  {
    question: 'Un boîtier Shelly fonctionne-t-il avec n\'importe quel kit solaire de balcon ?',
    answer: 'Pas garanti. Shelly a annoncé une intégration officielle avec l\'EcoFlow PowerStream. Avec un kit Zendure, plusieurs utilisateurs du forum officiel Zendure rapportent des incohérences (le Shelly détecte une production que l\'app Zendure affiche à 0 W) ou des appareils qui n\'apparaissent pas dans la liste malgré un Shelly Cloud correctement configuré. Avec un kit Sunology ou Beem, l\'intérêt est différent : Shelly ne remplace pas le suivi de production du micro-onduleur, il ajoute une mesure de consommation à la prise, moins chère que le Pack STREAM. Vérifiez la compatibilité annoncée par le fabricant de votre kit avant d\'acheter.',
  },
  {
    question: 'Les apps Beem et Sunology sont-elles fiables au quotidien ?',
    answer: 'Dans l\'ensemble oui, mais chacune a son point faible récurrent dans les avis clients. Pour Sunology STREAM, ce sont les pertes de connexion Wi-Fi (production qui disparaît de l\'app si le signal 2,4 GHz ne porte pas jusqu\'au panneau) — le panneau continue de produire, seul l\'affichage est coupé. Pour Beem, des clients signalent des pannes de la Beembox, des installations qui disparaissent de l\'app après une mise à jour, ou des bugs qui nécessitent un diagnostic avec un multimètre. Dans les deux cas, ce sont des problèmes de suivi, pas de production réelle.',
  },
  {
    question: 'Peut-on suivre sa production solaire sans app du fabricant ?',
    answer: 'Oui, avec une prise connectée tierce (Shelly, Tapo P110, Meross) branchée entre le micro-onduleur et la prise murale : elle mesure la puissance instantanée et l\'historique, dans l\'app du fabricant de la prise plutôt que celle du kit solaire. C\'est moins intégré (pas de calcul d\'économies, pas de gestion batterie) mais ça coûte 15 à 30 € contre 228 € pour le Pack STREAM de Sunology. Voir notre comparatif des prises connectées pour le suivi solaire.',
  },
];

const tableauComparatif: [string, string, string, string, string, string][] = [
  ['Boîtier nécessaire', 'Oui (Beembox, incluse)', 'Non (Wi-Fi natif)', 'Non (intégré)', 'Non (intégré)', 'Oui (Plug S / 1PM / 3EM, à acheter)'],
  ['Suivi production temps réel', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui (générique)'],
  ['Historique jour/semaine/mois', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'],
  ['Suivi consommation logement', 'Limité (Linky)', 'En option (Pack STREAM, 228 €)', 'Oui (capteur dédié)', 'Oui (via SmartMeter)', 'Oui (à la prise mesurée)'],
  ['Pilotage batterie HP/HC auto', 'Non', 'Non', 'Oui', 'Oui (+ IA Zenky sur Pro)', 'Non (pas de batterie propre)'],
  ['Compatible multi-marques', 'Non', 'Non', 'Partiel (Shelly 3EM annoncé)', 'Partiel (Shelly, retours mitigés)', 'Oui (générique, selon marque)'],
  ['Coût de l\'app', 'Gratuite (Beembox incluse au kit)', 'Gratuite (boîtier Linky en option)', 'Gratuite (intégrée au kit)', 'Gratuite (intégrée au kit)', 'Gratuite (matériel ~15-60 € à part)'],
  ['Point faible signalé', 'Pannes Beembox, bugs après mise à jour', 'Pertes Wi-Fi si signal faible', 'Aucun suivi gratuit pour compatibilité tierce poussée', 'Pas de backup réseau, données parfois incohérentes avec Shelly', 'Pas de calcul d\'économies ni de gestion batterie'],
];

export default function ApplicationSuiviProductionSolairePage() {
  return (
    <>
      <SchemaArticle
        title="Applis de suivi solaire : Beem vs Sunology vs EcoFlow vs Zendure vs Shelly"
        description="Comparatif des applications de suivi de production solaire des principales marques de kits plug-and-play, et de l'alternative générique Shelly."
        url="https://monbalconsolaire.fr/comparatif/application-suivi-production-solaire"
        datePublished="2026-10-30"
        dateModified="2026-10-30"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Applis de suivi solaire' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Applis de suivi solaire' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Applis de suivi solaire : Beem vs Sunology vs EcoFlow vs Zendure vs Shelly
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Chaque kit solaire de balcon vient avec sa propre application. Certaines se contentent d&apos;afficher la production, d&apos;autres pilotent une batterie heure par heure. On compare les cinq apps les plus utilis&eacute;es en France pour savoir laquelle m&eacute;rite vraiment votre attention.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>30 octobre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>

            <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3 mt-6">
              <span className="text-stone text-sm mt-0.5">&#8505;</span>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur les fonctions r&eacute;elles de chaque app, pas sur une r&eacute;mun&eacute;ration des marques. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
              </p>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict en 10 secondes</h2>
            <div className="space-y-2 text-sm text-charcoal-light leading-relaxed">
              <p><strong>Suivi simple, sans boîtier</strong> → l&apos;app Sunology STREAM : le micro-onduleur parle en Wi-Fi directement, rien à brancher en plus.</p>
              <p><strong>Pilotage de batterie le plus abouti</strong> → l&apos;app EcoFlow : seuils de charge personnalisés, plages horaires, notifications, et un historique détaillé.</p>
              <p><strong>Meilleure gestion heures pleines/creuses automatique</strong> → l&apos;app Zendure (IA Zenky sur le modèle Pro), qui décharge et recharge la batterie SolarFlow selon vos tarifs sans intervention.</p>
              <p><strong>Suivi générique multi-appareils</strong> → Shelly, utile en complément d&apos;un kit si vous voulez tout centraliser, mais sans calcul d&apos;économies ni gestion de batterie.</p>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Cinq apps, cinq philosophies</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant le tableau détaillé, voici ce qui distingue fondamentalement ces cinq applications :
              </p>
              <div className="grid md:grid-cols-2 gap-3 my-6">
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-center gap-2 mb-1"><ProductThumb src="/images/produits/beem-on-500-1.webp" alt="Beem On 500 Wc" href="/avis/beem-on-500w" size="sm" /><h4 className="font-bold text-sm text-green">Beem</h4></div>
                  <p className="text-[11px] text-stone uppercase tracking-wider font-semibold mb-2">Suivi via boîtier dédié</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    La Beembox (incluse) se place après l&apos;onduleur et transmet la production en Wi-Fi à l&apos;app Beem : production en direct, historique, économies estimées. L&apos;un des points les mieux notés par les clients, même négatifs sur le reste.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="flex items-center gap-2 mb-1"><ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY" href="/avis/sunology-play-2" size="sm" /><h4 className="font-bold text-sm text-amber-dark">Sunology</h4></div>
                  <p className="text-[11px] text-stone uppercase tracking-wider font-semibold mb-2">Suivi Wi-Fi natif, sans boîtier</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Le micro-onduleur du PLAY communique directement en Wi-Fi avec l&apos;app STREAM, gratuite. Le Pack STREAM (228 €, optionnel) ajoute la mesure de consommation via Linky. Le point faible : le signal Wi-Fi 2,4 GHz doit porter jusqu&apos;au panneau.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-center gap-2 mb-1"><ProductThumb src="/images/produits/ecoflow-powerstream-2.webp" alt="EcoFlow PowerStream" href="/avis/ecoflow-powerstream" size="sm" /><h4 className="font-bold text-sm text-green">EcoFlow</h4></div>
                  <p className="text-[11px] text-stone uppercase tracking-wider font-semibold mb-2">Pilotage batterie avancé</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    L&apos;app la plus complète du marché grand public selon notre analyse : W produits/consommés en direct, seuils de charge personnalisés, plages horaires, notifications. Pensée pour une batterie portable réutilisable au-delà du solaire.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="flex items-center gap-2 mb-1"><ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="sm" /><h4 className="font-bold text-sm text-amber-dark">Zendure</h4></div>
                  <p className="text-[11px] text-stone uppercase tracking-wider font-semibold mb-2">Automatisation HP/HC</p>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Programmation automatique des plages heures pleines/creuses, historique détaillé, compatibilité SmartMeter annoncée (Shelly). L&apos;IA Zenky, réservée au modèle Pro, apprend les habitudes de consommation du foyer.
                  </p>
                </div>
              </div>
              <div className="card border-l-4 border-l-stone">
                <h4 className="font-bold text-sm mb-1">Shelly : le suivi générique</h4>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  Shelly n&apos;est pas un fabricant de kit solaire : c&apos;est une marque de compteurs et prises connectés (Plug S, 1PM Gen3, 3EM pour le triphasé) qui mesure la puissance à l&apos;endroit où vous les installez, via l&apos;app Shelly Smart Control et un cloud gratuit. EcoFlow a annoncé une intégration officielle avec le PowerStream. Avec un kit Zendure, des utilisateurs du forum officiel rapportent des incohérences entre les deux apps.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-xs border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Critère</th>
                      <th className="text-center p-2.5 font-semibold">Beem</th>
                      <th className="text-center p-2.5 font-semibold">Sunology STREAM</th>
                      <th className="text-center p-2.5 font-semibold">EcoFlow</th>
                      <th className="text-center p-2.5 font-semibold">Zendure</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Shelly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableauComparatif.map(([c, beem, sun, eco, zen, shelly], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-2.5 font-semibold">{c}</td>
                        <td className="text-center p-2.5">{beem}</td>
                        <td className="text-center p-2.5">{sun}</td>
                        <td className="text-center p-2.5">{eco}</td>
                        <td className="text-center p-2.5">{zen}</td>
                        <td className="text-center p-2.5">{shelly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Suivi simple ou pilotage de batterie : deux besoins différents</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La plupart des comparatifs mélangent deux usages pourtant très différents. Le premier, c&apos;est le <strong>suivi</strong> : savoir combien le panneau produit, combien le foyer économise. Le second, c&apos;est le <strong>pilotage</strong> : décider où va l&apos;énergie produite, en particulier quand il y a une batterie.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Vous voulez juste suivre la production ?</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Les apps Beem et Sunology STREAM suffisent largement : production en temps réel, historique par jour/semaine/mois, estimation des économies. Aucune des deux ne gère de batterie, donc aucune ne propose de pilotage avancé — ce n&apos;est pas un défaut, ce n&apos;est juste pas leur rôle sur ces kits sans stockage.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Vous avez une batterie et voulez optimiser le réseau ?</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">C&apos;est là que Zendure et EcoFlow prennent l&apos;avantage. L&apos;app Zendure programme automatiquement la charge et la décharge selon vos heures pleines/creuses. L&apos;app EcoFlow va plus loin dans la personnalisation (seuils de charge, plages horaires sur mesure, notifications), au prix d&apos;une prise en main un peu plus technique.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Vous voulez tout centraliser, plusieurs marques comprises ?</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Un compteur Shelly (Plug S pour le suivi à la prise, 3EM pour le triphasé) remonte dans une seule app, indépendamment de la marque du kit. L&apos;intégration est officielle avec l&apos;EcoFlow PowerStream ; avec Zendure, des utilisateurs signalent des écarts entre les deux apps. Vérifiez la compatibilité annoncée avant d&apos;investir dans le matériel.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-8">
              <p className="font-semibold text-lg mb-2">Quel kit solaire correspond à votre profil ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur recommande 3 kits adaptés à votre ville, votre orientation et votre budget.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes économies &rarr;
              </Link>
            </div>

            <AffiliateCTA productName="Sunology PLAY" merchantName="Sunology" affiliateUrl={SUNOLOGY_AFFILIATE_URL} label="Voir l'app STREAM en action sur le PLAY" variant="secondary" position="after-apps" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les points faibles que les fiches produit ne disent pas</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Aucune de ces apps n&apos;est parfaite. Voici ce qui revient le plus dans les avis clients et les forums spécialisés :
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Sunology STREAM : dépendance au Wi-Fi</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si le signal 2,4 GHz ne porte pas jusqu&apos;au panneau, la production disparaît de l&apos;app. Le panneau continue de produire : seul le suivi est perdu, mais ça peut inquiéter à tort.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Beem : Beembox obligatoire et fragile</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Sans Beembox, pas de suivi dans l&apos;app. Des clients signalent des pannes, des installations qui disparaissent après une mise à jour, et un diagnostic parfois technique (multimètre) en cas de souci.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Zendure : pas de backup réseau</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;app peut tout piloter, mais le SolarFlow 800 Plus n&apos;a pas de sortie hors réseau : en cas de coupure, le système s&apos;arrête quoi que l&apos;app affiche.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Shelly : pas pensé pour le solaire</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Aucun calcul d&apos;économies, aucune gestion de batterie : c&apos;est un compteur générique. Et la compatibilité avec le kit de votre choix n&apos;est pas garantie par tous les fabricants.</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
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

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl={BEEM_AFFILIATE_URL} label="Voir l'offre actuelle sur Beem" variant="box" position="footer-box" price="429 €" />

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow 800 Plus</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;app la plus avancée pour le pilotage HP/HC d&apos;une batterie de balcon</p>
                </Link>
                <Link href="/avis/ecoflow-powerstream" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis EcoFlow PowerStream</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le système modulaire dont l&apos;app est jugée la plus complète du marché</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY</h4>
                  <p className="text-xs text-charcoal-light mt-1">Suivi Wi-Fi natif via l&apos;app STREAM, sans boîtier additionnel</p>
                </Link>
                <Link href="/blog/prises-connectees-suivi-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleures prises connectées pour suivi solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Tapo P110, Shelly Plug S, Meross : l&apos;alternative générique et moins chère</p>
                </Link>
                <Link href="/comparatif/zendure-vs-sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Zendure vs Sunology vs Beem : le match complet</h4>
                  <p className="text-xs text-charcoal-light mt-1">Prix, stockage, rentabilité et apps des trois systèmes les plus populaires</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> fonctionnalités vérifiées sur les fiches officielles des fabricants (Beem Energy, Sunology, EcoFlow, Zendure, Shelly) et croisées avec les avis clients et retours du forum officiel Zendure et de forum-photovoltaique.fr (octobre 2026). Les points faibles cités sont ceux qui reviennent le plus souvent dans ces sources, pas une liste exhaustive de bugs.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
