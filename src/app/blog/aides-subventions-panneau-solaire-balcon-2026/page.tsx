import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, calculateProductionKwh, calculateFirstYearSavings, calculateROIYears } from '@/lib/pricing';
import { productibleSite } from '@/lib/rentabilite-departements';
import { DEPARTMENTS } from '@/data/departments';

// Exemples calculés avec la méthode du site (pricing.ts) : autoconsommation 85 %, inflation 3,3 %/an, dégradation 0,5 %/an.
const fr = (n: number) => n.toLocaleString('fr-FR');
const KIT_400 = { kitPriceEur: 300, kitPowerWc: 400 };
const KIT_800 = { kitPriceEur: 450, kitPowerWc: 800, productibleKwhPerKwc: productibleSite(DEPARTMENTS.find((d) => d.code === '33')!.irradiation) };
const prod400 = calculateProductionKwh(KIT_400);
const eco400 = Math.round(calculateFirstYearSavings(KIT_400));
const roi400 = calculateROIYears(KIT_400);
const prod800 = calculateProductionKwh(KIT_800);
const eco800 = Math.round(calculateFirstYearSavings(KIT_800));
const roi800 = calculateROIYears(KIT_800);

export const metadata: Metadata = withCanonicalOg({
  title: 'Aides et subventions panneau solaire balcon 2026 : la vérité',
  description: 'MaPrimeRénov, TVA réduite, prime autoconsommation : ce qui s’applique vraiment aux kits solaires plug-and-play balcon en France en 2026. Réponse honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/aides-subventions-panneau-solaire-balcon-2026',
  },
});

const faqData = [
  {
    question: 'Peut-on bénéficier de MaPrimeRénov pour un kit solaire de balcon ?',
    answer: 'Non. MaPrimeRénov’ exige une installation réalisée par un professionnel certifié RGE (Reconnu Garant de l’Environnement). Les kits plug-and-play achetés et installés soi-même ne répondent pas à ce critère. MaPrimeRénov’ reste réservée aux panneaux réalisés dans le cadre d’une rénovation énergétique globale (parcours accompagné) ou d’une installation photovoltaïque classique (panneaux en toiture, minimum 3 kWc).',
  },
  {
    question: 'La prime à l’autoconsommation existe-t-elle encore en 2026 ?',
    answer: 'Non, pour les nouvelles installations. L’arrêté du 1er juin 2026 (publié au Journal officiel du 4 juin 2026) a supprimé la prime à l’autoconsommation pour les installations de 0 à 100 kWc dont la demande complète de raccordement est déposée à partir du 5 juin 2026. Les demandes complètes déposées avant cette date gardent l’ancien régime. Et un kit plug-and-play branché sur une prise n’y a jamais été éligible : sa production est destinée à l’autoconsommation, sans contrat d’achat du surplus.',
  },
  {
    question: 'La TVA est-elle réduite sur les kits solaires de balcon ?',
    answer: 'Rarement. Depuis le 1er octobre 2025 (article 278-0 bis P du Code général des impôts), la TVA à 5,5 % vise la livraison et l’installation, dans un logement, d’un équipement photovoltaïque de 9 kWc au plus qui respecte les critères de l’arrêté du 8 septembre 2025 (bilan carbone des modules inférieur à 530 kgCO2eq/kWc, limites de teneur en argent, plomb et cadmium), avec un système de gestion de l’énergie pilotant au moins deux usages, posé par un professionnel qualifié. Le taux de 10 % ne s’applique plus depuis le 1er janvier 2026 (sauf devis signé avec acompte versé avant cette date). Pour un kit acheté seul, sans pose, c’est 20 % dans la plupart des cas ; le BOFiP admet 5,5 % si l’équipement remplit toutes les conditions techniques, ce que peu de kits de balcon font. Une batterie est taxée à 20 %, et si elle est vendue dans la même prestation que les panneaux, tout le lot passe à 20 %.',
  },
  {
    question: 'Y a-t-il des aides locales pour les panneaux de balcon ?',
    answer: 'Oui, quelques-unes, mais c’est rare et variable selon la commune. Certaines collectivités (métropoles, communautés d’agglomération) proposent des chèques énergie de 100 à 300 € pour l’achat d’un kit plug-and-play. D’autres (comme Paris avec Éco-Rénovons Paris+) proposent des aides en copropriété mais pas pour les installations individuelles de balcon. Vérifiez sur le site de votre mairie ou de votre intercommunalité.',
  },
  {
    question: 'Un kit solaire de balcon est-il un bon investissement malgré l’absence d’aides ?',
    answer: `Oui, dans la plupart des cas. Le ROI se construit uniquement sur l’autoconsommation (kWh non achetés à EDF à ${KWH_PRICE_LABEL}) et non sur des aides. Un kit 400 Wc à Lyon expo sud produit ~${prod400} kWh/an, soit ~${eco400} €/an d’économies la première année (85 % autoconsommés). Pour un kit à 300 €, ROI en ${fr(roi400)} ans environ. L’absence d’aides ne remet pas en cause la rentabilité.`,
  },
  {
    question: 'Faut-il tout de même déclarer son kit même sans aides ?',
    answer: 'Oui, une déclaration à Enedis est obligatoire indépendamment des aides : la CACSI si votre kit est réglé pour ne rien injecter (réglage « zéro injection », boîtier ou batterie), sinon la cession gratuite du surplus à Enedis. C’est gratuit et se fait en ligne sur Enedis-Connect. Sans déclaration, votre assurance habitation peut refuser de couvrir un sinistre lié à l’installation.',
  },
];

export default function AidesSubventionsPanneauSolaireBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Aides et subventions panneau solaire balcon 2026 : la vérité"
        description="MaPrimeRénov, TVA réduite, prime autoconsommation : ce qui s’applique vraiment aux kits balcon en 2026. Réponse honnête et chiffrée."
        url="https://monbalconsolaire.fr/blog/aides-subventions-panneau-solaire-balcon-2026"
        datePublished="2026-08-11"
        dateModified="2026-11-05"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Aides solaire balcon 2026' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Aides solaire balcon 2026' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">R&eacute;glementation</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Aides et subventions panneau solaire balcon 2026&nbsp;: la v&eacute;rit&eacute; sans filtre
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              MaPrimeR&eacute;nov&apos;, TVA r&eacute;duite, prime &agrave; l&apos;autoconsommation, aides locales&hellip; On nous pose ces questions chaque semaine. La r&eacute;ponse courte&nbsp;: <strong>quasi rien ne s&apos;applique aux kits plug-and-play</strong>. Voici le d&eacute;tail complet, honnêtement.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>11 ao&ucirc;t 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span>
              <span>&middot;</span>
              <span>8 min de lecture</span>
            </div>
          </div>

          {/* Encadré résumé */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">&#9888; Ce qu&apos;il faut savoir avant de lire</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>MaPrimeR&eacute;nov&apos;</strong>&nbsp;: non &eacute;ligible (installation DIY, pas de professionnel RGE)</li>
              <li>&bull; <strong>Prime &agrave; l&apos;autoconsommation</strong>&nbsp;: supprim&eacute;e (0-100&nbsp;kWc) pour les demandes compl&egrave;tes de raccordement d&eacute;pos&eacute;es &agrave; partir du 5 juin 2026 (arr&ecirc;t&eacute; du 1<sup>er</sup> juin 2026)&nbsp;; un kit branch&eacute; sur une prise n&apos;y a jamais &eacute;t&eacute; &eacute;ligible</li>
              <li>&bull; <strong>TVA r&eacute;duite</strong>&nbsp;: 5,5&nbsp;% depuis le 1<sup>er</sup> octobre 2025 pour la fourniture + pose par un professionnel qualifi&eacute; d&apos;un &eacute;quipement conforme&nbsp;; un kit achet&eacute; seul reste &agrave; 20&nbsp;% dans la plupart des cas</li>
              <li>&bull; <strong>Aides locales</strong>&nbsp;: existent dans <em>certaines</em> communes, de 100 &agrave; 300&nbsp;&euro; &mdash; &agrave; v&eacute;rifier</li>
              <li>&bull; <strong>Rentabilit&eacute;</strong>&nbsp;: le ROI reste positif sans aides, uniquement sur l&apos;autoconsommation</li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Tableau récapitulatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau r&eacute;capitulatif des aides 2026</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Aide</th>
                      <th className="text-left p-3">Montant</th>
                      <th className="text-left p-3">Kit balcon ?</th>
                      <th className="text-left p-3 rounded-tr-xl">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['MaPrimeRénov’', 'Jusqu’à 4 000 €', '&#10007; Non', 'Exige pro RGE + installation toiture'],
                      ['Prime autoconsommation', 'Supprimée (0-100 kWc)', '&#10007; Non', 'Supprimée pour les demandes de raccordement complètes déposées à partir du 5/06/2026 ; jamais valable pour un kit sur prise'],
                      ['TVA réduite 5,5 %', 'Sur la facture pro', '&#10007; Rarement', 'Fourniture + pose par un pro qualifié, critères de l’arrêté du 8/09/2025 ; kit seul : 20 % dans la plupart des cas'],
                      ['Céé locales / métropoles', '100–300 €', '✔ Parfois', 'Variable selon commune, à vérifier'],
                      ['Éco-Rénovons Paris+', '25 % des travaux (plaf. 4 000 €)', '&#10007; Non', 'Copropriété seulement, pas balcon individuel'],
                    ].map(([aide, montant, eligible, pourquoi], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{aide}</td>
                        <td className="p-3 text-xs text-charcoal-light">{montant}</td>
                        <td className="p-3 text-xs font-bold" dangerouslySetInnerHTML={{ __html: eligible }} />
                        <td className="p-3 text-xs text-stone">{pourquoi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Le constat est clair&nbsp;: les aides nationales sont con&ccedil;ues pour les grandes installations r&eacute;alis&eacute;es par des professionnels. Les kits plug-and-play tombent dans un angle mort r&eacute;glementaire. Ce n&apos;est pas un oubli&nbsp;: c&apos;est structurel.
              </p>
            </section>

            {/* MaPrimeRénov */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">MaPrimeR&eacute;nov&apos;&nbsp;: pourquoi les kits balcon sont exclus</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                MaPrimeR&eacute;nov&apos; est le dispositif phare de r&eacute;novation &eacute;nerg&eacute;tique de l&apos;Anah. Il finance les travaux r&eacute;alis&eacute;s par un artisan certifi&eacute; <strong>RGE (Reconnu Garant de l&apos;Environnement)</strong>. Cette certification est la condition sine qua non.
              </p>
              <div className="space-y-3 mb-4">
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1">Ce que MaPrimeR&eacute;nov&apos; exige</h3>
                  <ul className="text-xs text-charcoal-light space-y-1 leading-relaxed">
                    <li>&bull; Artisan certifi&eacute; RGE qui r&eacute;alise ET facture la fourniture + la pose</li>
                    <li>&bull; Devis et facture au nom du propri&eacute;taire (pas un achat Amazon)</li>
                    <li>&bull; Installation conforme aux normes d&apos;installation sur toiture ou fa&ccedil;ade</li>
                    <li>&bull; D&eacute;p&ocirc;t du dossier AVANT le d&eacute;but des travaux</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">Ce qu&apos;est un kit plug-and-play</h3>
                  <ul className="text-xs text-charcoal-light space-y-1 leading-relaxed">
                    <li>&bull; Achat en ligne (Amazon, site de la marque, distributeur)</li>
                    <li>&bull; Installation DIY par l&apos;utilisateur lui-m&ecirc;me, sans professionnel</li>
                    <li>&bull; Raccordement sur prise de courant standard 230V</li>
                    <li>&bull; Pas de permis de construire ni de validation Consuel requise (&lt;3 kVA)</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Les deux cases ne se croisent pas. <strong>MaPrimeR&eacute;nov&apos; ne financera jamais un kit Sunology ou Beem achet&eacute; en ligne</strong>, quel que soit votre revenu fiscal. La r&eacute;glementation n&apos;est pas pr&ecirc;s d&apos;&eacute;voluer sur ce point, car l&apos;objectif de la prime est de garantir la qualit&eacute; des travaux via la certification RGE.
              </p>
            </section>

            {/* Prime autoconsommation supprimée */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Prime &agrave; l&apos;autoconsommation&nbsp;: supprim&eacute;e en juin 2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avant juin 2026, il existait une prime &agrave; l&apos;autoconsommation (PAC) pour les installations jusqu&apos;&agrave; 100 kWc. Elle pouvait atteindre <strong>180&nbsp;&euro;/kWc</strong> pour les petites installations (3 kWc). Elle &eacute;tait vers&eacute;e par EDF OA sur les installations raccord&eacute;es au r&eacute;seau.
              </p>
              <div className="card-lg bg-amber-pale/30 border-amber/10 mb-4">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>&#128680; Arr&ecirc;t&eacute; du 1er juin 2026</strong> (Journal officiel du 4 juin 2026, NOR ECOR2609281A)&nbsp;: la prime &agrave; l&apos;autoconsommation est supprim&eacute;e pour les installations de 0 &agrave; 100&nbsp;kWc dont la demande compl&egrave;te de raccordement est d&eacute;pos&eacute;e <strong>&agrave; partir du 5 juin 2026</strong>. Les demandes compl&egrave;tes d&eacute;pos&eacute;es avant cette date gardent l&apos;ancien r&eacute;gime.{' '}<a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054190669" target="_blank" rel="noopener noreferrer" className="text-green underline">Texte sur L&eacute;gifrance</a>.
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Mais attention&nbsp;: m&ecirc;me avant sa suppression, <strong>un kit plug-and-play branch&eacute; sur une prise n&apos;y a jamais &eacute;t&eacute; &eacute;ligible</strong>&nbsp;: sa production est destin&eacute;e &agrave; l&apos;autoconsommation, sans contrat d&apos;achat (<a href="https://www.photovoltaique.info/fr/realiser-une-installation/choix-du-materiel/batteries-stockage-virtuel-et-autres-accesoires/les-kits-solaires-plug-and-play/" target="_blank" rel="noopener noreferrer" className="text-green underline">photovoltaique.info</a>). Concr&egrave;tement&nbsp;:
              </p>
              <div className="space-y-2">
                {[
                  { x: '&#10007;', text: 'Pas de raccordement au réseau EDF OA (CACSI ou cession gratuite du surplus, pas de contrat de vente)' },
                  { x: '&#10007;', text: 'Pas d’installation par un professionnel RGE' },
                  { x: '&#10007;', text: 'Pas de Consuel ni de mise en service officielle' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold flex-shrink-0" dangerouslySetInnerHTML={{ __html: item.x }} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* TVA */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">TVA r&eacute;duite&nbsp;: rarement pour un kit achet&eacute; seul</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les r&egrave;gles ont chang&eacute; le 1<sup>er</sup> octobre 2025. Voici ce que pr&eacute;voit aujourd&apos;hui le Code g&eacute;n&eacute;ral des imp&ocirc;ts&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-2">TVA 5,5&nbsp;% (depuis le 1<sup>er</sup> octobre 2025)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Livraison <strong>et</strong> installation, dans un logement, d&apos;un &eacute;quipement photovolta&iuml;que de 9&nbsp;kWc au plus (article 278-0 bis P du CGI). Crit&egrave;res de l&apos;arr&ecirc;t&eacute; du 8&nbsp;septembre 2025&nbsp;: bilan carbone des modules inf&eacute;rieur &agrave; 530&nbsp;kgCO<sub>2</sub>eq/kWc, limites de teneur en argent, plomb et cadmium. Il faut en plus un syst&egrave;me de gestion de l&apos;&eacute;nergie qui pilote au moins deux usages et une pose par un professionnel qualifi&eacute;. Une batterie est tax&eacute;e &agrave; 20&nbsp;%&nbsp;; vendue dans la m&ecirc;me prestation que les panneaux, elle fait passer tout le lot &agrave; 20&nbsp;%.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-2">TVA 10&nbsp;% (supprim&eacute;e)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;ancien taux de 10&nbsp;% pour les installations de 3&nbsp;kWc au plus ne s&apos;applique plus depuis le 1<sup>er</sup> janvier 2026 (sauf devis sign&eacute; avec acompte vers&eacute; avant cette date).</p>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Pour un kit balcon achet&eacute; en ligne&nbsp;:</strong> vous achetez le mat&eacute;riel et vous le posez vous-m&ecirc;me. La TVA est de <strong>20&nbsp;% dans la plupart des cas</strong>, d&eacute;j&agrave; comprise dans le prix affich&eacute;. Le BOFiP admet 5,5&nbsp;% si l&apos;&eacute;quipement remplit toutes les conditions techniques, ce que peu de kits de balcon font. Un kit vendu avec sa batterie dans la m&ecirc;me offre est &agrave; 20&nbsp;%. Aucune d&eacute;marche ne permet de r&eacute;cup&eacute;rer la TVA apr&egrave;s coup.
                </p>
                <p className="text-xs text-stone leading-relaxed mt-3">
                  Sources&nbsp;: <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053562844" target="_blank" rel="noopener noreferrer" className="text-green underline">article 278-0 bis P du CGI (L&eacute;gifrance)</a>, <a href="https://bofip.impots.gouv.fr/bofip/14817-PGP.html/identifiant=BOI-TVA-LIQ-30-20-97-20260610" target="_blank" rel="noopener noreferrer" className="text-green underline">BOFiP BOI-TVA-LIQ-30-20-97-20260610</a>, <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052212417" target="_blank" rel="noopener noreferrer" className="text-green underline">arr&ecirc;t&eacute; du 8 septembre 2025</a>, <a href="https://www.photovoltaique.info/fr/preparer-un-projet/qui-suis-je/proprietaire-particulier/taux-de-tva-taxe-sur-la-valeur-ajoutee/" target="_blank" rel="noopener noreferrer" className="text-green underline">photovoltaique.info</a>, consult&eacute;s le 5 novembre 2026.
                </p>
              </div>
            </section>

            {/* Aides locales */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Aides locales&nbsp;: le seul filon qui existe</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est la seule cat&eacute;gorie d&apos;aides o&ugrave; des <strong>kits plug-and-play peuvent &ecirc;tre &eacute;ligibles</strong>. Certaines collectivit&eacute;s locales &mdash; souvent des m&eacute;tropoles ou des agglom&eacute;rations &mdash; ont mis en place des dispositifs sp&eacute;cifiques pour encourager le solaire citoyen, y compris les kits de balcon accessibles aux locataires.
              </p>
              <div className="space-y-3 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">Ce que proposent certaines communes</h3>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; <strong>Ch&egrave;ques &eacute;nergie solaire</strong>&nbsp;: 100 &agrave; 300&nbsp;&euro; pour l&apos;achat d&apos;un kit plug-and-play</li>
                    <li>&bull; <strong>Pr&ecirc;ts &agrave; taux z&eacute;ro locaux</strong>&nbsp;: pour le financement du mat&eacute;riel</li>
                    <li>&bull; <strong>Permanences d&apos;accompagnement</strong>&nbsp;: conseil gratuit installation et d&eacute;claration CACSI</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1">Ce qui n&apos;existe plus ou reste limit&eacute;</h3>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; <strong>R&eacute;gion Occitanie</strong>&nbsp;: l&apos;&eacute;co-ch&egrave;que logement (1 500&nbsp;&euro;) a disparu fin 2022. Les aides r&eacute;gionales directes n&apos;existent plus.</li>
                    <li>&bull; <strong>&Icirc;le-de-France</strong>&nbsp;: pas d&apos;aide r&eacute;gionale pour les particuliers depuis 2024. <strong>&Eacute;co-R&eacute;novons Paris+</strong> (copropri&eacute;t&eacute;s uniquement, 25&nbsp;% des travaux, 4 000&nbsp;&euro;/logement) est r&eacute;serv&eacute; aux travaux collectifs &mdash; pas aux kits de balcon individuels.</li>
                    <li>&bull; <strong>CITE</strong> (Cr&eacute;dit d&apos;imp&ocirc;t transition &eacute;nerg&eacute;tique)&nbsp;: supprim&eacute; et remplac&eacute; par MaPrimeR&eacute;nov&apos; depuis 2020.</li>
                  </ul>
                </div>
              </div>
              <div className="card-lg bg-green-pale/30 border-green/10">
                <h3 className="font-bold text-sm mb-2">Comment trouver les aides de votre commune</h3>
                <ul className="text-xs text-charcoal-light space-y-2 leading-relaxed">
                  <li><strong>1.</strong> Rendez-vous sur <strong>maprimerenov.gouv.fr</strong> &rarr; section &laquo;&nbsp;Aides locales&nbsp;&raquo; &rarr; entrez votre code postal</li>
                  <li><strong>2.</strong> Consultez le site de votre <strong>mairie</strong> et de votre <strong>communaut&eacute; d&apos;agglom&eacute;ration</strong></li>
                  <li><strong>3.</strong> Appelez le num&eacute;ro France R&eacute;nov&apos;&nbsp;: <strong>0 808 800 700</strong> (gratuit, accessible au plus grand nombre)</li>
                  <li><strong>4.</strong> Cherchez &laquo;&nbsp;aide solaire plug-and-play [nom de votre commune]&nbsp;&raquo; en ligne &mdash; les dispositifs locaux changent chaque ann&eacute;e</li>
                </ul>
              </div>
            </section>

            {/* Pourquoi cette réalité */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi les kits de balcon ne sont pas aid&eacute;s</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La question m&eacute;rite d&apos;&ecirc;tre pos&eacute;e&nbsp;: pourquoi l&apos;&Eacute;tat aide les grandes installations mais ignore les petits kits accessibles aux locataires et aux budgets modestes&nbsp;?
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les raisons sont <strong>structurelles</strong>, pas arbitraires&nbsp;:
              </p>
              <div className="space-y-3">
                {[
                  { num: '1', title: 'Le système de certification RGE', text: 'Les aides publiques sont conditionnées à la certification pour garantir la qualité des travaux et éviter les fraudes. Un kit vendu sur Amazon ne peut pas être certifié RGE par définition.' },
                  { num: '2', title: 'Le raccordement au réseau', text: 'La prime autoconsommation était conditionnée à un contrat avec EDF OA et une demande Enedis formelle. Les kits balcon sont déclarés à Enedis en CACSI (engagement à ne pas injecter) ou en cession gratuite du surplus, sans contrat de vente.' },
                  { num: '3', title: 'La TVA réduite suppose une pose pro', text: 'La TVA réduite est une aide indirecte : l’État renonce à 14,5 points de TVA (5,5 % au lieu de 20 %), surtout sur une facture de fourniture et pose d’un équipement conforme. Sur un kit à 300 € TTC, l’écart serait d’environ 36 €, et peu de kits de balcon remplissent les conditions techniques.' },
                ].map((item) => (
                  <div key={item.num} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                      <div>
                        <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-charcoal-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                Le march&eacute; &eacute;volue&nbsp;: des <strong>associations militent pour une aide sp&eacute;cifique aux kits de balcon</strong>, notamment pour permettre aux locataires d&apos;acc&eacute;der eux aussi aux &eacute;nergies renouvelables. Quelques communes ont int&eacute;gr&eacute; ces kits dans leurs dispositifs locaux. Mais en 2026, aucune aide nationale n&apos;existe.
              </p>
            </section>

            {/* Le ROI sans aides */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; sans aides&nbsp;: les chiffres r&eacute;els</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&apos;absence d&apos;aides ne ruine pas la rentabilit&eacute; d&apos;un kit solaire de balcon. Voici pourquoi&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Kit 400 Wc à Lyon (expo sud)', val1: `~${fr(prod400)} kWh/an`, label1: 'Production annuelle', val2: `~${eco400} €/an`, label2: `Économies la 1re année (${KWH_PRICE_LABEL})` },
                  { title: 'Kit 800 Wc à Bordeaux (expo sud)', val1: `~${fr(prod800)} kWh/an`, label1: 'Production annuelle', val2: `~${eco800} €/an`, label2: `Économies la 1re année (${KWH_PRICE_LABEL})` },
                ].map((item, i) => (
                  <div key={i} className="card-lg bg-green-pale/30 border-green/10 text-center">
                    <p className="font-bold text-sm mb-3 text-green">{item.title}</p>
                    <div className="text-3xl font-extrabold text-amber-dark mb-1">{item.val2}</div>
                    <p className="text-xs text-stone mb-3">{item.label2}</p>
                    <div className="text-sm font-semibold text-charcoal-light">{item.val1}</div>
                    <p className="text-xs text-stone">{item.label1}</p>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-3">
                Un kit 400 Wc &agrave; 300&nbsp;&euro; se rembourse en <strong>~{fr(roi400)} ans</strong> sur les seules &eacute;conomies d&apos;autoconsommation. Un kit 800 Wc &agrave; 450&nbsp;&euro; se rembourse en <strong>~{fr(roi800)} ans</strong> (autoconsommation 85&nbsp;%, inflation 3,3&nbsp;%/an, d&eacute;gradation des panneaux 0,5&nbsp;%/an). Ces calculs n&apos;incluent aucune aide.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                L&apos;inflation &eacute;nerg&eacute;tique (3,3&nbsp;%/an selon la CRE) am&eacute;liore m&ecirc;me les ROI futurs&nbsp;: chaque ann&eacute;e, vos kWh autoconsomm&eacute;s valent plus. La <Link href="/blog/prix-electricite-2026-solaire" className="text-green hover:underline font-semibold">trajectoire du prix de l&apos;&eacute;lectricit&eacute; en 2026</Link> renforce cet argument.
              </p>
            </section>

            {/* Ce qui pourrait changer */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui pourrait changer (horizon 2027&ndash;2028)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Quelques &eacute;volutions r&eacute;glementaires sont &agrave; surveiller&nbsp;:
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">Directive europ&eacute;enne sur l&apos;&eacute;nergie citoyenne</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">La RED III (Directive &Eacute;nergies Renouvelables) pousse les &Eacute;tats membres &agrave; faciliter l&apos;autoconsommation, y compris pour les petits kits. Des dispositifs d&apos;aide sp&eacute;cifiques aux kits &laquo;&nbsp;plug-in&nbsp;&raquo; ont &eacute;t&eacute; introduits en Allemagne et en Espagne. La France pourrait s&apos;en inspirer.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">Clarification du cadre r&eacute;glementaire</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">La France ne fixe aucun plafond chiffr&eacute; pour les kits sur prise (le 800 W souvent cit&eacute; est la r&egrave;gle allemande), mais leur statut au regard de la NF C 15-100 (point 551.7.2) reste flou. Une clarification, demand&eacute;e par la fili&egrave;re (Enerplan, SER), pourrait ouvrir la porte &agrave; une reconnaissance officielle des kits balcon dans les dispositifs d&apos;aide existants. Plus la puissance install&eacute;e est grande, plus l&apos;impact sur le r&eacute;seau est mesurable &mdash; et plus l&apos;int&eacute;r&ecirc;t de subventionner est justifiable.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1">Risque&nbsp;: de nouvelles contraintes plut&ocirc;t que des aides</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;inverse est possible. Un rel&egrave;vement des exigences CACSI ou une obligation de certification du mat&eacute;riel pourrait complexifier l&apos;installation et augmenter les co&ucirc;ts. Pas de sc&eacute;nario garanti.</p>
                </div>
              </div>
            </section>

            {/* CTA Calculateur */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Calculez votre ROI sans aides</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur vous donne le retour sur investissement r&eacute;el selon votre d&eacute;partement, votre orientation et votre budget &mdash; sans surestimer quoi que ce soit.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes &eacute;conomies &rarr;
              </Link>
            </div>

            {/* FAQ */}
            <section className="mb-4">
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
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, rep&egrave;re des 900&nbsp;W, d&eacute;claration CACSI Enedis&nbsp;: ce que dit la loi</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Chiffres r&eacute;els de production et d&apos;&eacute;conomies pour 7 villes fran&ccedil;aises</p>
                </Link>
                <Link href="/blog/prix-electricite-2026-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Prix de l&apos;&eacute;lectricit&eacute; 2026&nbsp;: pourquoi le solaire devient incontournable</h3>
                  <p className="text-xs text-charcoal-light mt-1">&Eacute;volution du tarif EDF, fin de l&apos;ARENH, projections 2030</p>
                </Link>
                <Link href="/blog/revendre-surplus-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Peut-on revendre son surplus &agrave; EDF depuis un balcon&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">CACSI vs EDF OA, tarif de rachat 2026, calcul r&eacute;el</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide complet d&eacute;butants 2026 (mis &agrave; jour ao&ucirc;t)</h3>
                  <p className="text-xs text-charcoal-light mt-1">Fonctionnement, prix (d&egrave;s 429&nbsp;&euro;), r&egrave;glementation, droits des locataires &mdash; tout avant d&apos;acheter</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> Anah (MaPrimeR&eacute;nov&apos;, conditions 2026), <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054190669" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">arr&ecirc;t&eacute; du 1er juin 2026</a> (JO du 4 juin 2026, suppression de la prime &agrave; l&apos;autoconsommation 0-100&nbsp;kWc), <a href="https://www.photovoltaique.info/fr/realiser-une-installation/choix-du-materiel/batteries-stockage-virtuel-et-autres-accesoires/les-kits-solaires-plug-and-play/" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">photovoltaique.info (kits plug-and-play)</a>, <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053562844" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">article 278-0 bis P du CGI</a> et <a href="https://bofip.impots.gouv.fr/bofip/14817-PGP.html/identifiant=BOI-TVA-LIQ-30-20-97-20260610" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">BOFiP BOI-TVA-LIQ-30-20-97-20260610</a> (TVA), France R&eacute;nov&apos;, r&egrave;glement Enedis CACSI (d&eacute;cret 2021-1301), sites des m&eacute;tropoles concern&eacute;es. Tarif EDF base&nbsp;: {KWH_PRICE_LABEL} (en vigueur depuis le 1<sup>er</sup> ao&ucirc;t 2026).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.{' '}
                <span className="italic">Contenu &agrave; vocation informative, pas de conseil financier ou fiscal. V&eacute;rifiez les aides locales aupr&egrave;s de votre mairie.</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
