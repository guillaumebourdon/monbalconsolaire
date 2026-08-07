import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Checklist kit solaire balcon : 15 points &agrave; v&eacute;rifier avant d&apos;acheter (2026)',
  description: 'Avant d&apos;acheter un kit solaire pour balcon, v&eacute;rifiez ces 15 points cl&eacute;s : orientation, surface, Linky, prise, bail, copro, budget, CACSI, assurance. Checklist compl&egrave;te 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/checklist-avant-achat-kit-solaire',
  },
};

const faqData = [
  {
    question: 'Faut-il un compteur Linky pour installer un kit solaire balcon ?',
    answer: 'Techniquement non : un kit plug-and-play en autoconsommation totale fonctionne sans Linky. Mais en pratique, Enedis exige un Linky pour valider la déclaration CACSI et mesurer l\'injection éventuelle. Si vous n\'avez pas encore de Linky, la demande de pose est gratuite et obligatoire depuis 2021.',
  },
  {
    question: 'Un locataire peut-il installer un kit solaire sans l\'accord du propriétaire ?',
    answer: 'Oui, à condition que le kit soit 100 % amovible (aucun perçage, fixation par ballasts ou ventouses). Un kit plug-and-play posé au sol ou accroché sans perçage ne constitue pas une modification du logement selon la loi. En revanche, si vous percez la rambarde ou le mur, l\'accord du propriétaire est requis.',
  },
  {
    question: 'Quelle orientation minimale pour rentabiliser un kit solaire ?',
    answer: 'À partir d\'une orientation Est ou Ouest, un kit reste rentable (80 % du potentiel sud). En dessous, un balcon plein Nord produit environ 45 % de ce que produirait un balcon Sud. Dans ce cas, le retour sur investissement dépasse souvent 12 ans — notre calculateur vous donnera une réponse précise selon votre ville.',
  },
  {
    question: 'Quelle surface de balcon faut-il pour un kit solaire ?',
    answer: 'Le Sunology PLAY 2 mesure 1,76 m × 1,13 m. Il faut donc au minimum un espace libre de 2 m² avec une exposition correcte. Les kits 300W à petits panneaux (Beem Kit) sont plus compacts mais moins puissants. Mesurez votre espace libre en tenant compte des meubles et des zones d\'ombre.',
  },
  {
    question: 'La déclaration CACSI Enedis est-elle vraiment obligatoire ?',
    answer: 'Oui, c\'est la seule démarche administrative obligatoire pour un kit plug-and-play ≤ 3 kWc. Elle est gratuite, informative (Enedis ne peut pas refuser), et se fait en 10 minutes sur le portail Enedis. En cas de sinistre, votre assureur peut refuser la prise en charge si le kit n\'est pas déclaré.',
  },
  {
    question: 'Faut-il déclarer son kit solaire à son assureur ?',
    answer: 'Oui. La plupart des contrats multirisques habitation couvrent le kit dans la rubrique RC et dommages aux biens sans surcoût, mais il faut faire la déclaration. Appelez votre assureur avant l\'installation pour confirmer la couverture (vol, grêle, chute, responsabilité civile tiers).',
  },
];

const checklist = [
  {
    num: 1,
    category: 'Emplacement',
    title: 'Orienter votre balcon correctement',
    desc: 'Mesurez l\'orientation avec une boussole ou l\'app Google Maps. Sud = 100 % du potentiel. Sud-Est / Sud-Ouest = 90 %. Est / Ouest = 80 %. Nord-Est / Nord-Ouest = 60 %. Plein Nord = 45 %. En dessous de 65 %, le ROI dépasse souvent 10 ans — renseignez-vous avant d\'investir.',
    verdict: 'Go si Sud, SO ou SE. Prudence Est/Ouest. Stop si Nord.',
    icon: '&#9728;',
    color: 'green',
  },
  {
    num: 2,
    category: 'Emplacement',
    title: 'Mesurer la surface disponible',
    desc: 'Un panneau 450W (Sunology PLAY 2) fait 1,76 m × 1,13 m — il faut donc ~2 m² libres. Les kits multi-panneaux (Beem Kit 300W : 4 × 80 cm) s\'adaptent à des espaces plus étroits mais moins ensoleillés. Tenez compte des meubles de balcon et de la distance jusqu\'à la prise.',
    verdict: 'Mesurez avant de commander. Retours difficiles sur les gros kits.',
    icon: '&#9633;',
    color: 'green',
  },
  {
    num: 3,
    category: 'Emplacement',
    title: 'Repérer les ombres portées',
    desc: 'Observez votre balcon aux heures de pointe (10h-16h) pendant une semaine. L\'ombre d\'une rambarde, d\'un arbre, d\'un immeuble voisin ou d\'un auvent peut réduire la production de 20 à 50 %. Un panneau ombré à 20 % peut perdre 40 % de sa puissance à cause de l\'effet bypass.',
    verdict: 'Si ombre &gt; 2h/jour en été, reconsidérez la position ou le modèle.',
    icon: '&#9681;',
    color: 'amber',
  },
  {
    num: 4,
    category: 'Électricité',
    title: 'Vérifier le compteur Linky',
    desc: 'Enedis exige un compteur Linky communicant pour valider la déclaration CACSI. Vérifiez sur votre tableau électrique : un Linky est gris avec un écran LCD et une pastille verte. Sans Linky, demandez la pose gratuite à Enedis (délai : 1 à 3 mois).',
    verdict: 'Vérifiez avant l\'achat. Pas de Linky = délai de 1-3 mois avant installation officielle.',
    icon: '&#9889;',
    color: 'amber',
  },
  {
    num: 5,
    category: 'Électricité',
    title: 'Vérifier la prise électrique',
    desc: 'Le kit se branche sur une prise 230V standard avec terre. La prise doit être protégée par un disjoncteur différentiel 30 mA au tableau. Ne branchez JAMAIS sur une multiprise ou une rallonge. Vérifiez que la prise extérieure (ou intérieure proche de la porte-fenêtre) est bien reliée à la terre avec un contact de terre fonctionnel.',
    verdict: 'Test simple : insérez un testeur de prise (~10 €) pour vérifier terre + polarité.',
    icon: '&#128268;',
    color: 'green',
  },
  {
    num: 6,
    category: 'Électricité',
    title: 'Estimer votre talon de consommation',
    desc: 'Le kit solaire alimente en priorité les appareils qui tournent en journée : réfrigérateur (30-80W), box internet (10-15W), appareils en veille (20-40W), soit 50 à 150W en continu. Un kit 450W produit 50-100W en moyenne journalière — il couvre 100 % de ce talon. Si vous êtes absent toute la journée, le surplus part sur le réseau (gratuit, non rémunéré).',
    verdict: 'Talon &lt; 100W = kit 300W suffisant. Talon &gt; 150W = kit 450W recommandé.',
    icon: '&#9889;',
    color: 'green',
  },
  {
    num: 7,
    category: 'Statut',
    title: 'Vérifier votre bail si vous êtes locataire',
    desc: 'Un locataire peut installer un kit plug-and-play AMOVIBLE (ballasts, ventouses, fixation sans perçage) sans accord du propriétaire. Relisez votre bail : s\'il interdit explicitement les installations non destructives en extérieur, contactez votre propriétaire. En pratique, 95 % des propriétaires ne s\'y opposent pas si le kit est amovible.',
    verdict: 'Amovible sans perçage = pas d\'accord nécessaire. Perçage = accord propriétaire obligatoire.',
    icon: '&#128196;',
    color: 'green',
  },
  {
    num: 8,
    category: 'Statut',
    title: 'Vérifier le règlement de copropriété',
    desc: 'En copropriété, un kit amovible (sans modification de l\'aspect extérieur du bâtiment) ne nécessite pas de vote en AG. Mais certains règlements anciens interdisent tout objet sur les balcons visibles depuis la rue. Vérifiez votre règlement de copropriété (article concernant les parties privatives et l\'aspect extérieur). En cas de doute, informez le syndic par courrier recommandé.',
    verdict: 'Lisez le règlement avant d\'acheter. Une opposition du syndic est rare mais possible.',
    icon: '&#127963;',
    color: 'amber',
  },
  {
    num: 9,
    category: 'Budget',
    title: 'Calculer le ROI selon votre région',
    desc: 'Le retour sur investissement dépend de votre ville et de votre exposition. À Lyon-Sud (référence), un kit 450W à 599 € est rentable en 6-7 ans. À Marseille, en 5 ans. À Lille, en 8-9 ans. Utilisez notre calculateur pour un résultat personnalisé avec inflation EDF (3,3 %/an selon la CRE).',
    verdict: 'ROI &lt; 8 ans = bon investissement. ROI &gt; 12 ans = reconsidérez.',
    icon: '&#128200;',
    color: 'green',
  },
  {
    num: 10,
    category: 'Budget',
    title: 'Choisir la bonne puissance',
    desc: '300W (Beem Kit) : idéal pour un petit balcon ou un premier essai. Prix d\'entrée : ~299 €. 450W (Sunology PLAY 2, Beem On) : le rapport puissance/encombrement optimal. Prix : 499-599 €. 800W (2 panneaux) : maximum plug-and-play. Nécessite de vérifier le circuit (norme 900W max). Prix : 700-900 €.',
    verdict: 'Premier achat ? Commencez par un 450W. C\'est le meilleur compromis prix/production.',
    icon: '&#9889;',
    color: 'green',
  },
  {
    num: 11,
    category: 'Budget',
    title: 'Décider si une batterie est nécessaire',
    desc: 'Une batterie (500-1 400 €) est utile si vous consommez principalement le soir. Sans batterie, l\'autoconsommation est de 40-60 % (le surplus part au réseau). Avec batterie (Zendure SolarFlow 1,92 kWh, Bluetti Balco), l\'autoconsommation monte à 80-95 %. Le surcoût se justifie si vous rentrez tard et que votre facture nocturne est élevée.',
    verdict: 'Présent en journée : pas besoin de batterie. Absent en journée : batterie recommandée.',
    icon: '&#128267;',
    color: 'amber',
  },
  {
    num: 12,
    category: 'Démarches',
    title: 'Faire la déclaration CACSI Enedis',
    desc: 'Obligatoire. Gratuite. À faire dans le mois suivant l\'installation. Rendez-vous sur le portail raccordement.enedis.fr, section "Autoconsommation". Munissez-vous de votre numéro PDL (sur votre facture EDF), de la puissance du kit et de votre adresse. La déclaration est informative : Enedis ne peut pas refuser. Délai de confirmation : 2-4 semaines.',
    verdict: 'Faites-le dans les 30 jours. Vous risquez une mise en conformité en cas de contrôle.',
    icon: '&#10003;',
    color: 'green',
  },
  {
    num: 13,
    category: 'Démarches',
    title: 'Déclarer à votre assureur habitation',
    desc: 'Appelez votre assureur avant l\'installation pour déclarer l\'ajout du kit. La plupart des multirisques habitation couvrent vol, grêle, chute et RC tiers sans surcoût supplémentaire. Mais sans déclaration, vous risquez un refus de prise en charge en cas de sinistre. Demandez une confirmation écrite (email ou courrier) de la couverture.',
    verdict: 'Appelez votre assureur le jour de l\'installation. 5 minutes pour éviter un litige.',
    icon: '&#128737;',
    color: 'green',
  },
  {
    num: 14,
    category: 'Qualité',
    title: 'Vérifier la certification CE du kit',
    desc: 'Tout kit vendu en France doit porter le marquage CE (compatibilité électromagnétique, sécurité électrique). Vérifiez également : la certification VDE ou TÜV du micro-onduleur (Hoymiles, APsystems, Deye), la garantie produit (minimum 5 ans sur le kit) et la garantie de performance des panneaux (25 ans pour les marques sérieuses).',
    verdict: 'Pas de marquage CE = non conforme. Fuyez les kits sans documentation technique.',
    icon: '&#9989;',
    color: 'green',
  },
  {
    num: 15,
    category: 'Qualité',
    title: 'Vérifier la garantie et le SAV France',
    desc: 'Privilégiez les marques avec un SAV en France : Sunology (Strasbourg), Beem (Paris), EcoFlow (France), Zendure (France). La garantie légale de conformité (2 ans) s\'applique à tous les kits vendus en France. Au-delà, vérifiez : extension de garantie payante, politique de retour, disponibilité des pièces (micro-onduleurs, câbles).',
    verdict: 'Achetez chez un distributeur français avec stock et SAV local. Évitez les importateurs sans support.',
    icon: '&#128222;',
    color: 'green',
  },
];

export default function ChecklistPage() {
  return (
    <>
      <SchemaArticle
        title="Checklist kit solaire balcon : 15 points à vérifier avant d'acheter"
        description="Avant d'acheter un kit solaire pour balcon, vérifiez ces 15 points clés : orientation, surface, Linky, prise, bail, copropriété, budget, CACSI, assurance."
        url="https://monbalconsolaire.fr/guide/checklist-avant-achat-kit-solaire"
        datePublished="2026-08-07"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Guides', href: '/guide' }, { label: 'Checklist avant achat' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Checklist avant achat' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Premier kit solaire : la checklist compl&egrave;te avant d&apos;acheter
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              15 points &agrave; v&eacute;rifier avant de commander un kit solaire plug-and-play pour votre balcon. Orientation, prise &eacute;lectrique, Linky, bail, copropri&eacute;t&eacute;, budget, CACSI, assurance&hellip; Ne ratez aucune &eacute;tape.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>7 ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>12 min de lecture</span>
            </div>
          </div>

          {/* Encadré intro */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Ce que vous allez v&eacute;rifier</h2>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Votre balcon est-il bien orient&eacute; et sans ombre &eacute;crasante ?</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Votre installation &eacute;lectrique est-elle compatible ?</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Votre statut (locataire, copropri&eacute;taire) autorise-t-il l&apos;installation ?</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Quel kit choisir pour votre budget et votre usage ?</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Quelles d&eacute;marches administratives faire et dans quel ordre ?</li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi une checklist avant d&apos;acheter ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire plug-and-play s&apos;ach&egrave;te vite — et parfois trop vite. Le march&eacute; a explos&eacute; en France depuis 2023&nbsp;: plus de 400 000 kits vendus en 2025, et une accélération en 2026. Avec cet engouement arrivent les mauvaises surprises&nbsp;: balcon plein nord, prise sans terre, copropri&eacute;t&eacute; qui bloque, ou kit retourné faute d&apos;avoir vérifi&eacute; les dimensions.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Cette checklist regroupe les <strong>15 points cl&eacute;s</strong> que nous aurions voulu avoir avant notre premier achat. Elle est class&eacute;e par th&egrave;me pour que vous puissiez aller droit au point qui vous concerne.
              </p>
              <div className="card bg-green-pale/30 border-green/10 my-6">
                <p className="text-sm text-green-dark">
                  <strong>Temps estim&eacute; :</strong> 30 minutes pour v&eacute;rifier l&apos;ensemble des points avant votre achat. C&apos;est le temps le mieux investi de tout votre projet solaire.
                </p>
              </div>
            </section>

            {/* La checklist */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 15 points de la checklist</h2>

              {/* Catégorie Emplacement */}
              <h3 className="font-bold text-lg mb-4 text-green border-b border-green/20 pb-2">&#127968; Emplacement &amp; exposition</h3>
              <div className="space-y-4 mb-8">
                {checklist.filter(c => c.category === 'Emplacement').map((item) => (
                  <div key={item.num} className={`card border-l-4 ${item.color === 'green' ? 'border-l-green' : 'border-l-amber'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-extrabold">{item.num}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-xs text-charcoal-light mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${item.color === 'green' ? 'bg-green-lighter text-green' : 'bg-amber-pale text-amber-dark'}`}>
                          &#9654; <span dangerouslySetInnerHTML={{ __html: item.verdict }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Catégorie Électricité */}
              <h3 className="font-bold text-lg mb-4 text-green border-b border-green/20 pb-2">&#9889; Installation &eacute;lectrique</h3>
              <div className="space-y-4 mb-8">
                {checklist.filter(c => c.category === 'Électricité').map((item) => (
                  <div key={item.num} className={`card border-l-4 ${item.color === 'green' ? 'border-l-green' : 'border-l-amber'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-extrabold">{item.num}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-xs text-charcoal-light mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${item.color === 'green' ? 'bg-green-lighter text-green' : 'bg-amber-pale text-amber-dark'}`}>
                          &#9654; <span dangerouslySetInnerHTML={{ __html: item.verdict }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Catégorie Statut */}
              <h3 className="font-bold text-lg mb-4 text-green border-b border-green/20 pb-2">&#128196; Statut d&apos;occupation</h3>
              <div className="space-y-4 mb-8">
                {checklist.filter(c => c.category === 'Statut').map((item) => (
                  <div key={item.num} className={`card border-l-4 ${item.color === 'green' ? 'border-l-green' : 'border-l-amber'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-extrabold">{item.num}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-xs text-charcoal-light mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${item.color === 'green' ? 'bg-green-lighter text-green' : 'bg-amber-pale text-amber-dark'}`}>
                          &#9654; <span dangerouslySetInnerHTML={{ __html: item.verdict }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Catégorie Budget */}
              <h3 className="font-bold text-lg mb-4 text-green border-b border-green/20 pb-2">&#128200; Budget &amp; rentabilit&eacute;</h3>
              <div className="space-y-4 mb-8">
                {checklist.filter(c => c.category === 'Budget').map((item) => (
                  <div key={item.num} className={`card border-l-4 ${item.color === 'green' ? 'border-l-green' : 'border-l-amber'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-extrabold">{item.num}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-xs text-charcoal-light mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${item.color === 'green' ? 'bg-green-lighter text-green' : 'bg-amber-pale text-amber-dark'}`}>
                          &#9654; <span dangerouslySetInnerHTML={{ __html: item.verdict }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA calculateur */}
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center my-8">
                <p className="font-semibold mb-2">Calculez votre ROI personnalis&eacute;</p>
                <p className="text-sm text-charcoal-light mb-4">Entrez votre ville, orientation et surface. R&eacute;sultat en 30 secondes.</p>
                <Link href="/calculateur" className="btn-primary inline-flex">Tester mon balcon &rarr;</Link>
              </div>

              {/* Catégorie Démarches */}
              <h3 className="font-bold text-lg mb-4 text-green border-b border-green/20 pb-2">&#10003; D&eacute;marches administratives</h3>
              <div className="space-y-4 mb-8">
                {checklist.filter(c => c.category === 'Démarches').map((item) => (
                  <div key={item.num} className={`card border-l-4 ${item.color === 'green' ? 'border-l-green' : 'border-l-amber'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-extrabold">{item.num}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-xs text-charcoal-light mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${item.color === 'green' ? 'bg-green-lighter text-green' : 'bg-amber-pale text-amber-dark'}`}>
                          &#9654; <span dangerouslySetInnerHTML={{ __html: item.verdict }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Catégorie Qualité */}
              <h3 className="font-bold text-lg mb-4 text-green border-b border-green/20 pb-2">&#9989; Qualit&eacute; du kit</h3>
              <div className="space-y-4 mb-8">
                {checklist.filter(c => c.category === 'Qualité').map((item) => (
                  <div key={item.num} className={`card border-l-4 ${item.color === 'green' ? 'border-l-green' : 'border-l-amber'}`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-extrabold">{item.num}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-xs text-charcoal-light mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                        <div className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${item.color === 'green' ? 'bg-green-lighter text-green' : 'bg-amber-pale text-amber-dark'}`}>
                          &#9654; <span dangerouslySetInnerHTML={{ __html: item.verdict }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Récapitulatif visuel */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">R&eacute;capitulatif : votre score avant achat</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Comptez le nombre de points verts que vous avez valid&eacute;s. Voici notre lecture&nbsp;:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="card bg-green-pale/30 border-green/10 text-center">
                  <div className="text-3xl font-extrabold text-green mb-1">12-15</div>
                  <div className="text-sm font-semibold text-green mb-2">Feu vert</div>
                  <p className="text-xs text-charcoal-light">Votre profil est id&eacute;al. Lancez-vous — votre kit sera rentable.</p>
                </div>
                <div className="card bg-amber-pale/30 border-amber/10 text-center">
                  <div className="text-3xl font-extrabold text-amber-dark mb-1">8-11</div>
                  <div className="text-sm font-semibold text-amber-dark mb-2">Feu orange</div>
                  <p className="text-xs text-charcoal-light">Quelques points &agrave; r&eacute;gler avant l&apos;achat. Identifiez les blocages.</p>
                </div>
                <div className="card bg-stone/10 border-stone/20 text-center">
                  <div className="text-3xl font-extrabold text-charcoal mb-1">&lt; 8</div>
                  <div className="text-sm font-semibold text-charcoal mb-2">Feu rouge</div>
                  <p className="text-xs text-charcoal-light">Votre situation pr&eacute;sente des obstacles importants. Attendez de les lever.</p>
                </div>
              </div>
              <div className="card bg-green-pale/30 border-green/10">
                <p className="text-sm text-green-dark">
                  <strong>Les 3 points &eacute;liminatoires :</strong> orientation nord pure (point 1), prise sans terre (point 5), r&egrave;glement de copropri&eacute;t&eacute; bloquant (point 8). Si l&apos;un de ces points est rouge, ne commandez pas avant d&apos;avoir une solution.
                </p>
              </div>
            </section>

            {/* Ordre des démarches */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;ordre chronologique des d&eacute;marches</h2>
              <div className="space-y-3 my-6">
                {[
                  { step: '1', title: 'Avant l\'achat', items: ['V&eacute;rifier orientation (boussole)', 'Mesurer la surface', 'Lire le bail et/ou le r&egrave;glement de copro', 'Calculer le ROI sur le calculateur'] },
                  { step: '2', title: 'Le jour J (installation)', items: ['Tester la prise (&eacute;lectricit&eacute;, terre)', 'Appeler l\'assureur pour d&eacute;clarer le kit', 'Installer le kit selon les instructions'] },
                  { step: '3', title: 'Dans les 30 jours', items: ['D&eacute;claration CACSI sur raccordement.enedis.fr', 'Conserver les justificatifs (facture, notice CE)'] },
                  { step: '4', title: 'Le premier mois', items: ['V&eacute;rifier la production via l\'app (Sunology, Beem, Enedis)', 'Comparer avec votre facture EDF du mois pr&eacute;c&eacute;dent'] },
                ].map((phase, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-sm font-extrabold">{phase.step}</div>
                      <div>
                        <h4 className="font-bold text-sm mb-2">{phase.title}</h4>
                        <ul className="space-y-1">
                          {phase.items.map((item, j) => (
                            <li key={j} className="text-xs text-charcoal-light flex gap-2">
                              <span className="text-green">&#10003;</span>
                              <span dangerouslySetInnerHTML={{ __html: item }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quand ne pas acheter */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quand ne PAS acheter un kit solaire de balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                On l&apos;a dit d&egrave;s le d&eacute;part&nbsp;: un kit solaire n&apos;est pas toujours la bonne solution. Voici les cas o&ugrave; le projet n&apos;est pas pertinent&nbsp;:
              </p>
              <div className="space-y-2 my-4">
                {[
                  'Votre balcon est orient&eacute; plein Nord ou en ombre permanente (arbre, b&acirc;timent)',
                  'Votre prise ext&eacute;rieure n&apos;a pas de terre et vous ne pouvez pas la faire mettre aux normes',
                  'Vous &ecirc;tes en location avec un bail interdisant explicitement tout dispositif en fa&ccedil;ade',
                  'Votre ROI d&eacute;passe 12 ans (calculateur : &lt;3 kWh/kWc install&eacute;)',
                  'Vous d&eacute;m&eacute;nagez dans moins de 3 ans (le kit s&apos;emporte, mais l&apos;amortissement est incomplet)',
                  'Vous consommez tr&egrave;s peu (&lt;1 000 kWh/an) : les &eacute;conomies absolues restent faibles',
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-start text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold mt-0.5">&#10007;</span>
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                ))}
              </div>
              <div className="card bg-amber-pale/30 border-amber/10 mt-6">
                <p className="text-sm text-amber-dark">
                  <strong>Notre engagement d&apos;honn&ecirc;tet&eacute; :</strong> si le calculateur indique un ROI &gt; 12 ans pour votre situation, le site vous le dit clairement. Un kit solaire mal adapt&eacute; est un mauvais investissement — et on pr&eacute;f&egrave;re vous le dire avant plut&ocirc;t qu&apos;apr&egrave;s.
                </p>
              </div>
            </section>

            {/* AffiliateCTA */}
            <div className="my-8">
              <AffiliateCTA
                productName="Sunology PLAY 2"
                merchantName="Sunology"
                affiliateUrl="https://sunology.eu/products/play2-kit-solaire"
                label="Voir le kit le plus v&eacute;rifi&eacute; du march&eacute;"
                variant="inline"
                position="mid_article"
              />
            </div>

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

            {/* Articles liés */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide complet pour d&eacute;butants</h4>
                  <p className="text-xs text-charcoal-light mt-1">Fonctionnement, prix, rentabilit&eacute; par ville — la base avant de choisir</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon locataire : droits et r&egrave;gles</h4>
                  <p className="text-xs text-charcoal-light mt-1">Vos droits en d&eacute;tail : bail, accord propri&eacute;taire, kits amovibles recommand&eacute;s</p>
                </Link>
                <Link href="/guide/panneau-solaire-copropriete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en copropri&eacute;t&eacute; : r&egrave;gles et votes</h4>
                  <p className="text-xs text-charcoal-light mt-1">Quand faut-il l&apos;accord du syndic ? Mod&egrave;le de courrier pr&ecirc;t &agrave; l&apos;emploi</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, CACSI, limite 900W, loi APER : tout ce que dit la loi en d&eacute;tail</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources :</strong> Enedis (portail raccordement.enedis.fr), loi APER mars 2023, arr&ecirc;t&eacute; octobre 2024, norme NF C 15-100 (sept. 2025), PVGIS (Commission europ&eacute;enne), CRE (Commission de R&eacute;gulation de l&apos;&Eacute;nergie), sites fabricants (Sunology, Beem, EcoFlow, Zendure). Ce guide est ind&eacute;pendant&nbsp;— <Link href="/a-propos" className="text-green hover:underline">en savoir plus sur notre m&eacute;thode</Link>. Certains liens sont des liens affili&eacute;s&nbsp;: ils ne changent pas notre analyse, mais nous permettent de financer le site.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
