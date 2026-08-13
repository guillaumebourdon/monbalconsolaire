import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Aides et subventions panneau solaire balcon 2026 : la vérité',
  description: 'MaPrimeRénov, TVA réduite, prime autoconsommation : ce qui s’applique vraiment aux kits solaires plug-and-play balcon en France en 2026. Réponse honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/aides-subventions-panneau-solaire-balcon-2026',
  },
};

const faqData = [
  {
    question: 'Peut-on bénéficier de MaPrimeRénov pour un kit solaire de balcon ?',
    answer: 'Non. MaPrimeRénov’ exige une installation réalisée par un professionnel certifié RGE (Reconnu Garant de l’Environnement). Les kits plug-and-play achetés et installés soi-même ne répondent pas à ce critère. MaPrimeRénov’ reste réservée aux panneaux réalisés dans le cadre d’une rénovation énergétique globale (parcours accompagné) ou d’une installation photovoltaïque classique (panneaux en toiture, minimum 3 kWc).',
  },
  {
    question: 'La prime à l’autoconsommation existe-t-elle encore en 2026 ?',
    answer: 'Non. La prime à l’autoconsommation a été supprimée par l’arrêté du 1er juin 2026, applicable à compter du 5 juin 2026. Toute installation dont la demande de raccordement a été déposée après cette date n’est plus éligible. Et de toute façon, les kits plug-and-play étaient déjà exclus, car cette prime visait les installations raccordées professionnellement au réseau.',
  },
  {
    question: 'La TVA est-elle réduite sur les kits solaires de balcon ?',
    answer: 'Non, pas pour les achats directs. La TVA à taux réduit (5,5 % pour les panneaux intégrés au bâti, 10 % pour les autres) s’applique uniquement quand un professionnel facture la fourniture ET la pose ensemble, dans un logement de plus de 2 ans. Quand vous achetez un kit Sunology, Beem ou Zendure en ligne, vous payez 20 % de TVA comme sur n’importe quel produit électronique.',
  },
  {
    question: 'Y a-t-il des aides locales pour les panneaux de balcon ?',
    answer: 'Oui, quelques-unes, mais c’est rare et variable selon la commune. Certaines collectivités (métropoles, communautés d’agglomération) proposent des chèques énergie de 100 à 300 € pour l’achat d’un kit plug-and-play. D’autres (comme Paris avec Éco-Rénovons Paris+) proposent des aides en copropriété mais pas pour les installations individuelles de balcon. Vérifiez sur le site de votre mairie ou de votre intercommunalité.',
  },
  {
    question: 'Un kit solaire de balcon est-il un bon investissement malgré l’absence d’aides ?',
    answer: 'Oui, dans la plupart des cas. Le ROI se construit uniquement sur l’autoconsommation (kWh non achetés à EDF à 0,1940 €/kWh) et non sur des aides. Un kit 400 Wc à Lyon expo sud produit ~400 kWh/an, soit ~77 €/an d’économies. Pour un kit à 300 €, ROI en 4 ans. L’absence d’aides ne remet pas en cause la rentabilité.',
  },
  {
    question: 'Faut-il tout de même déclarer son kit même sans aides ?',
    answer: 'Oui, la déclaration CACSI Enedis est obligatoire indépendamment des aides. C’est gratuit, ça prend 10 minutes sur enedis.fr, et ça vous met en conformité légale. Sans déclaration, votre assurance habitation peut refuser de couvrir un sinistre lié à l’installation.',
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
              <span>11 ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>8 min de lecture</span>
            </div>
          </div>

          {/* Encadré résumé */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">&#9888; Ce qu&apos;il faut savoir avant de lire</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>MaPrimeR&eacute;nov&apos;</strong>&nbsp;: non &eacute;ligible (installation DIY, pas de professionnel RGE)</li>
              <li>&bull; <strong>Prime &agrave; l&apos;autoconsommation</strong>&nbsp;: supprim&eacute;e le 5 juin 2026 &mdash; plus disponible pour personne</li>
              <li>&bull; <strong>TVA r&eacute;duite</strong>&nbsp;: non applicable sur les achats directs en ligne (vous payez 20&nbsp;%)</li>
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
                      ['Prime autoconsommation', 'Supprimée', '&#10007; Non', 'Supprimée le 5/06/2026, jamais valable balcon'],
                      ['TVA réduite 5,5 %', 'Sur la facture pro', '&#10007; Non', 'Uniquement sur facture fourniture + pose RGE'],
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
                  <h4 className="font-bold text-sm mb-1">Ce que MaPrimeR&eacute;nov&apos; exige</h4>
                  <ul className="text-xs text-charcoal-light space-y-1 leading-relaxed">
                    <li>&bull; Artisan certifi&eacute; RGE qui r&eacute;alise ET facture la fourniture + la pose</li>
                    <li>&bull; Devis et facture au nom du propri&eacute;taire (pas un achat Amazon)</li>
                    <li>&bull; Installation conforme aux normes d&apos;installation sur toiture ou fa&ccedil;ade</li>
                    <li>&bull; D&eacute;p&ocirc;t du dossier AVANT le d&eacute;but des travaux</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Ce qu&apos;est un kit plug-and-play</h4>
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
                  <strong>&#128680; Arr&ecirc;t&eacute; du 1er juin 2026</strong>&nbsp;: la prime &agrave; l&apos;autoconsommation a &eacute;t&eacute; supprim&eacute;e pour toute demande de raccordement d&eacute;pos&eacute;e apr&egrave;s le <strong>5 juin 2026</strong>. Si vous avez d&eacute;pos&eacute; votre dossier avant cette date, la prime reste acquise. Apr&egrave;s cette date, elle n&apos;existe plus.
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Mais attention&nbsp;: m&ecirc;me avant sa suppression, <strong>les kits plug-and-play de balcon n&apos;&eacute;taient pas &eacute;ligibles</strong> &agrave; cette prime. Voici pourquoi&nbsp;:
              </p>
              <div className="space-y-2">
                {[
                  { x: '&#10007;', text: 'Pas de raccordement au réseau EDF OA (vous êtes en CACSI, pas en contrat de vente)' },
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
              <h2 className="text-2xl font-extrabold mb-4">TVA r&eacute;duite&nbsp;: pas pour les achats en ligne</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La TVA r&eacute;duite sur les &eacute;quipements solaires existe bel et bien&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">TVA 5,5&nbsp;% (int&eacute;gr&eacute; au bâti)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Panneaux install&eacute;s en toiture int&eacute;gr&eacute;s au b&acirc;ti, par un professionnel, dans un logement &gt; 2 ans. Typiquement les grandes installations 3–9 kWc.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">TVA 10&nbsp;% (superpos&eacute;)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Panneaux pos&eacute;s sur toiture (non int&eacute;gr&eacute;s), par un professionnel, dans un logement &gt; 2 ans. S&apos;applique sur la fourniture ET la pose dans la m&ecirc;me facture.</p>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Pour un kit balcon achet&eacute; en ligne&nbsp;:</strong> vous achetez le mat&eacute;riel seul, sans pose professionnelle. La TVA applicable est <strong>20&nbsp;%</strong> (taux normal des biens de consommation). Un kit à 399&nbsp;&euro; TTC vous coûte déjà en TVA normale. Aucune démarche ne peut récupérer cette TVA.
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
                  <h4 className="font-bold text-sm mb-1">Ce que proposent certaines communes</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; <strong>Ch&egrave;ques &eacute;nergie solaire</strong>&nbsp;: 100 &agrave; 300&nbsp;&euro; pour l&apos;achat d&apos;un kit plug-and-play</li>
                    <li>&bull; <strong>Pr&ecirc;ts &agrave; taux z&eacute;ro locaux</strong>&nbsp;: pour le financement du mat&eacute;riel</li>
                    <li>&bull; <strong>Permanences d&apos;accompagnement</strong>&nbsp;: conseil gratuit installation et d&eacute;claration CACSI</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Ce qui n&apos;existe plus ou reste limit&eacute;</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; <strong>R&eacute;gion Occitanie</strong>&nbsp;: l&apos;&eacute;co-ch&egrave;que logement (1 500&nbsp;&euro;) a disparu fin 2022. Les aides r&eacute;gionales directes n&apos;existent plus.</li>
                    <li>&bull; <strong>&Icirc;le-de-France</strong>&nbsp;: pas d&apos;aide r&eacute;gionale pour les particuliers depuis 2024. <strong>&Eacute;co-R&eacute;novons Paris+</strong> (copropri&eacute;t&eacute;s uniquement, 25&nbsp;% des travaux, 4 000&nbsp;&euro;/logement) est r&eacute;serv&eacute; aux travaux collectifs &mdash; pas aux kits de balcon individuels.</li>
                    <li>&bull; <strong>CITE</strong> (Cr&eacute;dit d&apos;imp&ocirc;t transition &eacute;nerg&eacute;tique)&nbsp;: supprim&eacute; et remplac&eacute; par MaPrimeR&eacute;nov&apos; depuis 2020.</li>
                  </ul>
                </div>
              </div>
              <div className="card-lg bg-green-pale/30 border-green/10">
                <h4 className="font-bold text-sm mb-2">Comment trouver les aides de votre commune</h4>
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
                  { num: '2', title: 'Le raccordement au réseau', text: 'La prime autoconsommation était conditionnée à un contrat avec EDF OA et une demande Enedis formelle. Les kits balcon fonctionnent en CACSI, sans contrat de vente.' },
                  { num: '3', title: 'Le montant de la TVA à récupérer', text: 'La TVA réduite est une aide indirecte. L’État renonce à 14,5 ou 8,5 points de TVA sur la facture pro. Sur un kit à 300 €, ce serait 25-43 € — trop petit pour créer un dispositif spécifique.' },
                ].map((item) => (
                  <div key={item.num} className="card border-l-4 border-l-green">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
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
                  { title: 'Kit 400 Wc à Lyon (expo sud)', val1: '~400 kWh/an', label1: 'Production annuelle', val2: '~77 €/an', label2: 'Économies (0,1940 €/kWh)' },
                  { title: 'Kit 800 Wc à Bordeaux (expo sud)', val1: '~830 kWh/an', label1: 'Production annuelle', val2: '~161 €/an', label2: 'Économies (0,1940 €/kWh)' },
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
                Un kit 400 Wc &agrave; 300&nbsp;&euro; se rembourse en <strong>~4 ans</strong> sur les seules &eacute;conomies d&apos;autoconsommation. Un kit 800 Wc &agrave; 450&nbsp;&euro; se rembourse en <strong>~3 ans</strong>. Ces calculs n&apos;incluent aucune aide.
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
                  <h4 className="font-bold text-sm mb-1">Directive europ&eacute;enne sur l&apos;&eacute;nergie citoyenne</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">La RED III (Directive &Eacute;nergies Renouvelables) pousse les &Eacute;tats membres &agrave; faciliter l&apos;autoconsommation, y compris pour les petits kits. Des dispositifs d&apos;aide sp&eacute;cifiques aux kits &laquo;&nbsp;plug-in&nbsp;&raquo; ont &eacute;t&eacute; introduits en Allemagne et en Espagne. La France pourrait s&apos;en inspirer.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Rel&egrave;vement de la limite de puissance</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">La limite actuelle de 800 Wc (bient&ocirc;t 1 200 Wc en discussion) pourrait ouvrir la porte &agrave; une reconnaissance officielle des kits balcon dans les dispositifs d&apos;aide existants. Plus la puissance install&eacute;e est grande, plus l&apos;impact sur le r&eacute;seau est mesurable &mdash; et plus l&apos;int&eacute;r&ecirc;t de subventionner est justifiable.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Risque&nbsp;: de nouvelles contraintes plut&ocirc;t que des aides</h4>
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
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, limite 800&nbsp;Wc, d&eacute;claration CACSI Enedis&nbsp;: ce que dit la loi</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Chiffres r&eacute;els de production et d&apos;&eacute;conomies pour 7 villes fran&ccedil;aises</p>
                </Link>
                <Link href="/blog/prix-electricite-2026-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Prix de l&apos;&eacute;lectricit&eacute; 2026&nbsp;: pourquoi le solaire devient incontournable</h4>
                  <p className="text-xs text-charcoal-light mt-1">&Eacute;volution du tarif EDF, fin de l&apos;ARENH, projections 2030</p>
                </Link>
                <Link href="/blog/revendre-surplus-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Peut-on revendre son surplus &agrave; EDF depuis un balcon&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">CACSI vs EDF OA, tarif de rachat 2026, calcul r&eacute;el</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide complet d&eacute;butants 2026 (mis &agrave; jour ao&ucirc;t)</h4>
                  <p className="text-xs text-charcoal-light mt-1">Fonctionnement, prix (d&egrave;s 429&nbsp;&euro;), r&egrave;glementation, droits des locataires &mdash; tout avant d&apos;acheter</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> Anah (MaPrimeR&eacute;nov&apos;, conditions 2026), arr&ecirc;t&eacute; du 1er juin 2026 (suppression prime autoconsommation), Code g&eacute;n&eacute;ral des imp&ocirc;ts (TVA travaux), France R&eacute;nov&apos;, r&egrave;glement Enedis CACSI (d&eacute;cret 2021-1301), sites des m&eacute;tropoles concern&eacute;es. Tarif EDF base&nbsp;: 0,1940&nbsp;&euro;/kWh (ao&ucirc;t 2026).{' '}
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
