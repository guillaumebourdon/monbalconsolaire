import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { CopyableTemplate } from '@/components/ui/CopyableTemplate';

export const metadata: Metadata = {
  title: 'Panneau solaire copropriété : balcon, vote AG, modèle 2026',
  description: 'Panneau solaire en copropriété : quand l\'AG doit voter (art. 24 k et 25 b, loi 1965), balcon, garde-corps, toiture, modèle de résolution et recours.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/panneau-solaire-copropriete',
  },
};

const faqData = [
  {
    question: 'Faut-il une autorisation pour un panneau solaire sur un balcon en copropriété ?',
    answer: 'Ça dépend de la pose. Un kit posé au sol sur un balcon privatif, sans fixation ni perçage et peu visible de l\'extérieur, relève en principe de l\'usage libre des parties privatives (article 9 de la loi du 10 juillet 1965), sauf clause contraire du règlement de copropriété. Dès que le panneau est fixé au garde-corps ou en façade, ou qu\'il modifie l\'aspect extérieur, il faut une autorisation de l\'assemblée générale (article 25 b, ou article 24 k selon l\'interprétation retenue).',
  },
  {
    question: 'Quelle majorité pour installer des panneaux photovoltaïques en copropriété ?',
    answer: 'Depuis la loi n° 2023-175 du 10 mars 2023 (dite APER, article 44), l\'article 24 II k de la loi de 1965 soumet à la majorité simple la décision d\'installer des ouvrages de production d\'énergie solaire photovoltaïque et thermique sur les toitures, façades et garde-corps. La demande individuelle d\'un copropriétaire qui veut faire des travaux à ses frais sur une partie commune reste classiquement votée à l\'article 25 b (majorité absolue), avec possibilité d\'un second vote à la majorité simple (article 25-1) si le projet a recueilli au moins un tiers des voix.',
  },
  {
    question: 'Le syndic peut-il interdire un kit solaire sur mon balcon ?',
    answer: 'Non, le syndic seul ne peut ni autoriser ni interdire : il exécute les décisions de l\'assemblée générale et fait respecter le règlement de copropriété. Il peut en revanche vous mettre en demeure de retirer une installation fixée sur une partie commune sans vote, et le syndicat peut saisir le tribunal pour obtenir la remise en état.',
  },
  {
    question: 'Existe-t-il des aides pour les panneaux solaires en copropriété ?',
    answer: 'Pour un kit de balcon individuel, il n\'existe pas d\'aide nationale dédiée (pas de prime à l\'autoconsommation, qui suppose un raccordement avec contrat de vente du surplus). Pour une installation collective en toiture, les dispositifs relèvent du contrat d\'obligation d\'achat ou de l\'autoconsommation collective (article L315-2 du Code de l\'énergie). La prime à l\'autoconsommation a été supprimée pour les demandes de raccordement déposées à partir de juin 2026 selon plusieurs sources spécialisées : vérifiez les conditions en vigueur au moment du projet. Certaines collectivités proposent des aides locales.',
  },
  {
    question: 'Comment inscrire l\'installation de panneaux solaires à l\'ordre du jour de l\'AG ?',
    answer: 'Envoyez au syndic, par lettre recommandée avec accusé de réception, votre demande d\'inscription accompagnée d\'un projet de résolution (article 10 du décret n° 67-223 du 17 mars 1967). Pour des travaux relevant de l\'article 25 b, joignez un document précisant l\'implantation et la consistance des travaux : fiche technique, dimensions, poids, photo ou montage, mode de fixation.',
  },
  {
    question: 'Un locataire peut-il installer un panneau solaire sur son balcon en copropriété ?',
    answer: 'Oui pour un kit posé au sol et amovible, qui s\'assimile à un aménagement du logement. Pour une fixation au garde-corps, le locataire doit obtenir l\'accord écrit du propriétaire, qui lui-même devra obtenir le vote de l\'AG. Le locataire reste tenu de respecter le règlement de copropriété.',
  },
];

const decisionCases = [
  {
    cas: 'Kit posé au sol du balcon, sans fixation',
    verdict: 'En principe libre',
    color: 'green',
    law: 'Art. 9, loi du 10 juillet 1965',
    detail: 'Le sol du balcon est en général une partie privative (ou une partie commune à jouissance privative selon votre règlement). Un kit lesté, posé derrière le garde-corps, sans perçage ni câble traversant un mur, ne constitue pas des travaux sur les parties communes. Deux réserves : le règlement de copropriété peut interdire tout objet visible depuis l\'extérieur, et l\'installation ne doit pas porter atteinte à l\'aspect de l\'immeuble. Informer le syndic par écrit reste une bonne pratique.',
  },
  {
    cas: 'Panneau fixé au garde-corps (colliers, brides, crochets)',
    verdict: 'Vote en AG nécessaire',
    color: 'amber',
    law: 'Art. 25 b (ou 24 II k), loi du 10 juillet 1965',
    detail: 'Dans la grande majorité des règlements, le garde-corps est une partie commune, car il appartient à la façade. Même sans perçage, un panneau accroché dessus modifie l\'aspect extérieur. Il faut donc une résolution votée en AG avant la pose. Sans vote, le syndicat peut exiger le démontage.',
  },
  {
    cas: 'Panneau en façade, sur un mur extérieur ou en toiture',
    verdict: 'Vote en AG + urbanisme',
    color: 'red',
    law: 'Art. 24 II k / 25 b + art. R421-17 C. urb.',
    detail: 'Murs, façades et toiture sont des parties communes. Il faut un vote en AG et, en principe, une déclaration préalable en mairie pour la modification de l\'aspect extérieur (article R421-17 du Code de l\'urbanisme). En secteur protégé (abords de monument historique, site patrimonial remarquable), l\'avis de l\'Architecte des Bâtiments de France s\'ajoute.',
  },
];

const agSteps = [
  { title: 'Lisez votre règlement de copropriété', desc: 'Cherchez la définition des parties privatives et communes (balcon, garde-corps, façade) et les clauses sur l\'aspect extérieur (« harmonie de l\'immeuble », interdiction d\'objets visibles). C\'est ce document, pas une règle générale, qui tranche le statut du garde-corps.' },
  { title: 'Préparez un dossier technique', desc: 'Fiche produit, dimensions, poids, puissance (Wc), mode de fixation (colliers, sans perçage), photo ou montage du panneau sur votre balcon vu de la rue, couleur du cadre. L\'article 10 du décret du 17 mars 1967 exige un document précisant « l\'implantation et la consistance des travaux » pour une résolution 25 b.' },
  { title: 'Envoyez la demande en recommandé au syndic', desc: 'Lettre recommandée avec AR demandant l\'inscription à l\'ordre du jour de la prochaine AG, avec le projet de résolution (modèle ci-dessous) et le dossier. Si la demande arrive trop tard pour la convocation en cours, elle sera reportée à l\'AG suivante.' },
  { title: 'Parlez-en avant l\'AG', desc: 'Le conseil syndical et quelques voisins convaincus pèsent plus qu\'un bon dossier. Montrez que l\'installation est discrète, amovible, assurée, et que vous remettrez en état à vos frais.' },
  { title: 'Le vote', desc: 'Article 25 : majorité des voix de tous les copropriétaires (présents ou non). Si le projet n\'atteint pas cette majorité mais recueille au moins un tiers des voix, un second vote a lieu immédiatement à la majorité de l\'article 24 (article 25-1). Si le syndic inscrit la résolution à l\'article 24 II k, la majorité simple des présents, représentés et votants par correspondance suffit.' },
  { title: 'Après le vote', desc: 'Attendez la notification du procès-verbal et l\'expiration du délai de recours de deux mois (article 42) avant de percer ou de fixer quoi que ce soit si vous voulez être à l\'abri d\'une contestation. Puis déclaration préalable si nécessaire, déclaration Enedis et assurance.' },
];

const resolutionBody = `Résolution n° [X] – Autorisation donnée à M./Mme [NOM], propriétaire du lot n° [XX], d'installer à ses frais un kit solaire photovoltaïque sur le garde-corps de son balcon (article 25 b de la loi n° 65-557 du 10 juillet 1965)

L'assemblée générale, après avoir pris connaissance du descriptif joint à la convocation (fiche technique, dimensions, poids, mode de fixation, photo d'insertion), autorise M./Mme [NOM] à installer, à ses frais exclusifs, un kit solaire plug-and-play d'une puissance de [XXX] Wc, composé de [1] panneau(x) de [XXX x XXX] cm, fixé(s) sur la face [intérieure/extérieure] du garde-corps de son balcon situé [façade rue/cour, étage X], au moyen de [colliers/brides] sans perçage ni altération du garde-corps.

Cette autorisation est accordée aux conditions suivantes :
– l'installation est réalisée conformément aux prescriptions du fabricant et ne compromet ni la solidité du garde-corps ni la sécurité des occupants et des tiers ;
– le cadre et le fond du panneau sont de couleur [noire / assortie au garde-corps] ;
– le copropriétaire assume seul l'entretien, les éventuels dommages causés par l'installation et justifie d'une assurance responsabilité civile la couvrant ;
– il effectue, le cas échéant, les démarches d'urbanisme requises (déclaration préalable) ;
– il déposera l'installation et remettra le garde-corps en l'état à ses frais à première demande du syndic en cas de travaux de ravalement, d'entretien du garde-corps, ou en cas de vente du lot si l'acquéreur ne souhaite pas la conserver.

Majorité requise : article 25 de la loi du 10 juillet 1965 (avec application, le cas échéant, de l'article 25-1).`;

const requestLetterBody = `Madame, Monsieur,

En application de l'article 10 du décret n° 67-223 du 17 mars 1967, je vous demande d'inscrire à l'ordre du jour de la prochaine assemblée générale la question suivante : autorisation d'installer à mes frais un kit solaire photovoltaïque sur le garde-corps du balcon de mon lot n° [XX].

Vous trouverez ci-joint le projet de résolution ainsi qu'un document précisant l'implantation et la consistance des travaux (fiche technique, dimensions, poids, mode de fixation sans perçage, photo d'insertion).

Je vous remercie de bien vouloir joindre ces documents à la convocation.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Nom, prénom, adresse, lot n°]`;

export default function CoproprietePage() {
  return (
    <>
      <SchemaArticle
        title="Panneau solaire copropriété : balcon, vote AG, modèle de résolution"
        description="Règles pour installer un panneau solaire en copropriété : balcon, garde-corps, toiture, majorités de vote (art. 24 k et 25 b), modèle de résolution et recours."
        url="https://monbalconsolaire.fr/guide/panneau-solaire-copropriete"
        datePublished="2026-04-17"
        dateModified="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Copropriété' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Copropriété' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Panneau solaire en copropri&eacute;t&eacute; : balcon, vote en AG et mod&egrave;le de r&eacute;solution</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Kit pos&eacute; sur le balcon, panneau accroch&eacute; au garde-corps ou centrale sur le toit de l&apos;immeuble : les r&egrave;gles ne sont pas les m&ecirc;mes. Ce que dit la loi du 10 juillet 1965 depuis la r&eacute;forme de 2023, ce que le syndic peut exiger, et comment faire voter votre projet.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone flex-wrap"><span>Mis &agrave; jour le 27 septembre 2026</span><span>&middot;</span><span>12 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">R&eacute;ponse rapide</h2>
            <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
              <li><strong className="text-charcoal">Kit pos&eacute; au sol du balcon, sans fixation :</strong> pas de vote en AG en principe (usage des parties privatives, art. 9 de la loi de 1965), sauf clause contraire du r&egrave;glement de copropri&eacute;t&eacute;.</li>
              <li><strong className="text-charcoal">Panneau fix&eacute; au garde-corps ou en fa&ccedil;ade :</strong> vote en assembl&eacute;e g&eacute;n&eacute;rale obligatoire <em>avant</em> la pose. Le garde-corps est presque toujours une partie commune.</li>
              <li><strong className="text-charcoal">Majorit&eacute; :</strong> article 25 b (majorit&eacute; absolue) pour une demande individuelle, ou majorit&eacute; simple de l&apos;article 24 II k cr&eacute;&eacute; par la loi APER du 10 mars 2023 pour le solaire en toiture, fa&ccedil;ade et garde-corps.</li>
              <li><strong className="text-charcoal">Le syndic seul ne peut ni autoriser ni interdire</strong> : c&apos;est l&apos;AG qui d&eacute;cide. En cas de refus, un recours au tribunal est possible (art. 30).</li>
            </ul>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Balcon, garde-corps, fa&ccedil;ade : qui d&eacute;cide ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La loi n&deg; 65-557 du 10 juillet 1965 distingue les <strong>parties privatives</strong> (r&eacute;serv&eacute;es &agrave; l&apos;usage d&apos;un copropri&eacute;taire) et les <strong>parties communes</strong> (gros &oelig;uvre, fa&ccedil;ades, toiture). Le balcon est un cas hybride : dans beaucoup de r&egrave;glements, la dalle est une partie commune &agrave; jouissance privative, et le garde-corps une partie commune, parce qu&apos;il participe &agrave; l&apos;aspect de la fa&ccedil;ade. C&apos;est donc votre r&egrave;glement de copropri&eacute;t&eacute; qui tranche, pas une r&egrave;gle g&eacute;n&eacute;rale.</p>
              <p className="text-charcoal-light leading-relaxed mb-6">En pratique, le crit&egrave;re d&eacute;cisif est le <strong>mode de pose</strong> :</p>
              <div className="space-y-4">
                {decisionCases.map((c, i) => (
                  <div key={i} className={`card-lg border-l-4 ${c.color === 'green' ? 'border-l-green bg-green-pale/10' : c.color === 'amber' ? 'border-l-amber bg-amber-pale/10' : 'border-l-red-400 bg-red-50/40'}`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <h3 className="font-bold text-base">{i + 1}. {c.cas}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-lg whitespace-nowrap ${c.color === 'green' ? 'bg-green-pale text-green' : 'bg-amber-pale text-amber-dark'}`}>{c.verdict}</span>
                    </div>
                    <p className="text-xs font-mono text-stone mb-2">{c.law}</p>
                    <p className="text-sm text-charcoal-light leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">Pour les d&eacute;tails de pose (lestage, fixation garde-corps, branchement), voir notre guide <Link href="/guide/installer-kit-solaire-balcon" className="text-green hover:underline">installer un kit solaire balcon</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que dit la loi (textes v&eacute;rifi&eacute;s)</h2>
              <div className="card-lg bg-cream/80 border-border">
                <div className="space-y-5 text-sm text-charcoal-light leading-relaxed">
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Article 9 &mdash; usage des parties privatives</h3>
                    <p>Chaque copropri&eacute;taire use et jouit librement de ses parties privatives, &agrave; condition de ne porter atteinte ni aux droits des autres copropri&eacute;taires ni &agrave; la destination de l&apos;immeuble. C&apos;est la base qui permet de poser un kit amovible au sol de son balcon.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Article 25 b &mdash; travaux d&apos;un copropri&eacute;taire sur les parties communes</h3>
                    <p>Rel&egrave;ve de la majorit&eacute; des voix de tous les copropri&eacute;taires l&apos;autorisation donn&eacute;e &agrave; certains copropri&eacute;taires d&apos;effectuer &agrave; leurs frais des travaux affectant les parties communes ou l&apos;aspect ext&eacute;rieur de l&apos;immeuble, conformes &agrave; sa destination. C&apos;est le fondement classique d&apos;une demande pour fixer un panneau sur le garde-corps.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Article 24 II k &mdash; la r&eacute;forme de 2023</h3>
                    <p>L&apos;article 44 de la loi n&deg; 2023-175 du 10 mars 2023 relative &agrave; l&apos;acc&eacute;l&eacute;ration de la production d&apos;&eacute;nergies renouvelables (APER) a ajout&eacute; &agrave; l&apos;article 24 la d&eacute;cision &laquo; d&apos;installer des ouvrages n&eacute;cessaires &agrave; la production d&apos;&eacute;nergie solaire photovolta&iuml;que et thermique sur les toitures, les fa&ccedil;ades et les garde-corps &raquo;. Elle se vote d&eacute;sormais &agrave; la majorit&eacute; simple des copropri&eacute;taires pr&eacute;sents, repr&eacute;sent&eacute;s ou ayant vot&eacute; par correspondance, au lieu de l&apos;article 25.</p>
                    <p className="mt-2">Limite importante relev&eacute;e par les juristes : le texte vise surtout les projets d&eacute;cid&eacute;s par le syndicat. Qu&apos;il s&apos;applique aussi &agrave; la demande individuelle d&apos;un copropri&eacute;taire est d&eacute;battu. L&apos;AG ne peut pas non plus imposer une installation sur une partie privative contre l&apos;avis de son propri&eacute;taire (article 26). Demandez au syndic sur quel article il inscrit votre r&eacute;solution.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Article 25-1 &mdash; la passerelle</h3>
                    <p>Si une r&eacute;solution article 25 n&apos;obtient pas la majorit&eacute; absolue mais recueille au moins un tiers des voix de tous les copropri&eacute;taires, la m&ecirc;me AG proc&egrave;de imm&eacute;diatement &agrave; un second vote &agrave; la majorit&eacute; simple de l&apos;article 24.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">Urbanisme &mdash; article R421-17 du Code de l&apos;urbanisme</h3>
                    <p>Les travaux qui modifient l&apos;aspect ext&eacute;rieur d&apos;un b&acirc;timent existant sont soumis &agrave; d&eacute;claration pr&eacute;alable. Un panneau fix&eacute; durablement en fa&ccedil;ade ou en toiture est concern&eacute;. Un kit simplement pos&eacute; et d&eacute;pla&ccedil;able n&apos;est g&eacute;n&eacute;ralement pas trait&eacute; comme des travaux, mais la pratique varie selon les mairies. En abords de monument historique ou en site patrimonial remarquable, l&apos;Architecte des B&acirc;timents de France donne son avis et le d&eacute;lai d&apos;instruction passe de 1 &agrave; 2 mois. Le PLU peut aussi contenir des r&egrave;gles sur les fa&ccedil;ades.</p>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">Le reste du cadre (norme NF C 15-100, d&eacute;claration Enedis, puissance) est d&eacute;taill&eacute; dans notre <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">guide r&eacute;glementation panneau solaire balcon 2026</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Faire voter votre projet en AG : &eacute;tape par &eacute;tape</h2>
              <ol className="space-y-4">
                {agSteps.map((s, i) => (
                  <li key={i} className="card-lg flex gap-4">
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-green text-white flex items-center justify-center font-extrabold">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-base mb-1">{s.title}</h3>
                      <p className="text-sm text-charcoal-light leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Mod&egrave;les pr&ecirc;ts &agrave; copier</h2>
              <p className="text-charcoal-light leading-relaxed mb-2">Deux documents &agrave; envoyer ensemble au syndic, par lettre recommand&eacute;e avec accus&eacute; de r&eacute;ception. Adaptez les champs entre crochets et, pour un projet important, faites relire par un juriste (ADIL, association de copropri&eacute;taires).</p>
              <CopyableTemplate
                title="Demande d'inscription à l'ordre du jour"
                description="À envoyer au syndic en LRAR, avec le projet de résolution et le dossier technique."
                recipient="Syndic de copropriété – [nom et adresse du cabinet]"
                subject="Demande d'inscription d'une question à l'ordre du jour de la prochaine AG – lot n° [XX]"
                body={requestLetterBody}
                trackingLabel="copro_demande_ordre_du_jour"
              />
              <CopyableTemplate
                title="Projet de résolution : kit solaire sur garde-corps"
                description="Texte à joindre à votre demande. Les conditions (assurance, remise en état, couleur) rassurent les copropriétaires et facilitent le vote."
                body={resolutionBody}
                trackingLabel="copro_resolution_garde_corps"
              />
              <div className="card border-l-4 border-l-amber mt-4">
                <p className="text-sm text-charcoal-light leading-relaxed"><strong className="text-charcoal">Kit pos&eacute; au sol ?</strong> Pas besoin de r&eacute;solution. Un simple courrier d&apos;information au syndic (dimensions, absence de fixation, amovibilit&eacute;) suffit et vous prot&egrave;ge en cas de remarque ult&eacute;rieure.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que le syndic peut (et ne peut pas) faire</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">Il peut</h3>
                  <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
                    <li>&#10003; Vous rappeler le r&egrave;glement de copropri&eacute;t&eacute;</li>
                    <li>&#10003; Exiger le retrait d&apos;un panneau fix&eacute; sur une partie commune sans vote</li>
                    <li>&#10003; Agir en justice au nom du syndicat (sur autorisation de l&apos;AG) pour obtenir la remise en &eacute;tat</li>
                    <li>&#10003; Demander le d&eacute;montage temporaire lors d&apos;un ravalement</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">Il ne peut pas</h3>
                  <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
                    <li>&#10007; Interdire seul un kit pos&eacute; sur une partie privative sans clause du r&egrave;glement</li>
                    <li>&#10007; Refuser d&apos;inscrire votre question &agrave; l&apos;ordre du jour si la demande est r&eacute;guli&egrave;re</li>
                    <li>&#10007; Autoriser seul une fixation sur le garde-corps : seule l&apos;AG le peut</li>
                    <li>&#10007; Cr&eacute;er une interdiction par simple circulaire</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Et si l&apos;AG refuse ?</h2>
              <div className="space-y-3">
                {[
                  { t: 'Repasser au sol', d: 'Le plus simple : un kit lesté posé au sol du balcon, derrière le garde-corps, ne nécessite pas de vote. Vous perdez un peu d’inclinaison optimale, pas le projet.' },
                  { t: 'Retravailler le dossier et redemander', d: 'Panneau noir intégral, face intérieure du garde-corps, engagement de remise en état : beaucoup de refus viennent d’une méconnaissance du produit. Rien n’interdit de représenter la résolution à l’AG suivante.' },
                  { t: 'Contester la décision (article 42)', d: 'Un copropriétaire opposant ou défaillant peut contester une décision d’AG devant le tribunal judiciaire dans les deux mois suivant la notification du procès-verbal. Utile seulement en cas d’irrégularité (majorité mal appliquée, abus de majorité).' },
                  { t: 'Demander l’autorisation au juge (article 30)', d: 'Quand l’AG refuse une autorisation de l’article 25 b, un copropriétaire peut être autorisé par le tribunal judiciaire à exécuter des travaux d’amélioration, aux conditions fixées par le tribunal. Procédure longue et coûteuse, disproportionnée pour un kit à quelques centaines d’euros.' },
                ].map((a, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">{a.t}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">{a.d}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">&Agrave; ne pas faire : fixer d&apos;abord et demander ensuite. Les tribunaux ordonnent r&eacute;guli&egrave;rement le d&eacute;montage d&apos;installations solaires pos&eacute;es sur des parties communes sans autorisation, parfois sous astreinte.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Locataire ou propri&eacute;taire : qui demande quoi ?</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Situation</th><th className="text-left p-3">Copropri&eacute;taire occupant</th><th className="text-left p-3 rounded-tr-xl">Locataire</th></tr></thead>
                  <tbody>
                    {[
                      ['Kit posé au sol', 'Libre (sauf règlement)', 'Libre : aménagement amovible'],
                      ['Fixé au garde-corps', 'Vote en AG', 'Accord écrit du bailleur + vote en AG demandé par le bailleur'],
                      ['Déclaration Enedis', 'Au nom du titulaire du contrat', 'Au nom du titulaire du contrat (le locataire)'],
                      ['Assurance', 'Multirisque habitation', 'Multirisque habitation du locataire'],
                    ].map(([s, p, l], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3 font-semibold">{s}</td><td className="p-3">{p}</td><td className="p-3">{l}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">Tous les cas du locataire (bail, &eacute;tat des lieux, d&eacute;m&eacute;nagement) : <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline">panneau solaire balcon et locataire</Link>. Pour les d&eacute;marches &eacute;lectriques : <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">d&eacute;claration CACSI Enedis pas &agrave; pas</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Installation collective en toiture : l&apos;essentiel</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Si l&apos;objectif est de solariser l&apos;immeuble, le projet change d&apos;&eacute;chelle : &eacute;tude de faisabilit&eacute;, vote en AG (article 24 II k pour la toiture), d&eacute;claration pr&eacute;alable, raccordement Enedis. Trois mod&egrave;les existent :</p>
              <ul className="space-y-3 text-sm text-charcoal-light leading-relaxed mb-4">
                <li className="card"><strong className="text-charcoal">Vente du surplus ou de la totalit&eacute;</strong> : le syndicat devient producteur, les recettes viennent en d&eacute;duction des charges.</li>
                <li className="card"><strong className="text-charcoal">Autoconsommation des parties communes</strong> : &eacute;clairage, ascenseur, VMC. Le plus simple &agrave; monter.</li>
                <li className="card"><strong className="text-charcoal">Autoconsommation collective</strong> (article L315-2 du Code de l&apos;&eacute;nergie) : l&apos;&eacute;lectricit&eacute; est r&eacute;partie entre les copropri&eacute;taires participants via une personne morale organisatrice et des cl&eacute;s de r&eacute;partition. Chaque participant garde son fournisseur.</li>
              </ul>
              <p className="text-sm text-charcoal-light leading-relaxed">C&ocirc;t&eacute; aides, pas de dispositif national sp&eacute;cifique aux copropri&eacute;t&eacute;s pour le photovolta&iuml;que. La prime &agrave; l&apos;autoconsommation a &eacute;t&eacute; supprim&eacute;e pour les demandes de raccordement d&eacute;pos&eacute;es depuis juin 2026 d&apos;apr&egrave;s plusieurs sources sp&eacute;cialis&eacute;es ; v&eacute;rifiez les conditions du moment et les aides locales (r&eacute;gion, m&eacute;tropole). Pour les ressources officielles, le site photovoltaique.info (Hespul) a une section d&eacute;di&eacute;e aux copropri&eacute;t&eacute;s. Notre point sur les <Link href="/blog/aides-subventions-panneau-solaire-balcon-2026" className="text-green hover:underline">aides pour kit solaire balcon en 2026</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel kit choisir pour passer en AG sans friction ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Les kits qui se posent au sol et restent sous la hauteur du garde-corps &eacute;vitent la question du vote. Pour une fixation sur garde-corps, un panneau &agrave; cadre et fond noirs, pos&eacute; face int&eacute;rieure, est le plus facile &agrave; faire accepter.</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Kit</th><th className="text-center p-3">Pose</th><th className="text-center p-3 rounded-tr-xl">En copropri&eacute;t&eacute;</th></tr></thead>
                  <tbody>
                    {[
                      ['Sunology PLAY2', 'Au sol, lesté', 'Pas de vote en principe'],
                      ['Sunology CITY', 'Garde-corps', 'Vote en AG'],
                    ].map(([k, p, c], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3 font-semibold">{k}</td><td className="text-center p-3">{p}</td><td className="text-center p-3 text-xs">{c}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">Comparatif complet : <Link href="/quel-kit-choisir" className="text-green hover:underline">quel kit solaire choisir &rarr;</Link></p>
              <div className="my-6">
                <AffiliateCTA
                  productName="Sunology PLAY 2"
                  merchantName="Sunology"
                  affiliateUrl="https://sunology.eu/products/play-kit-solaire-plug-play"
                  label="Voir le Sunology PLAY 2"
                  variant="box"
                  position="article_bottom"
                />
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Avant l&apos;AG, chiffrez votre projet</p>
              <p className="text-sm text-charcoal-light mb-4">Production et rentabilit&eacute; selon votre d&eacute;partement et l&apos;orientation de votre balcon : un argument concret &agrave; pr&eacute;senter aux copropri&eacute;taires.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}><summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary><p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p></details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Installer un kit solaire balcon pas &agrave; pas</h3>
                  <p className="text-xs text-charcoal-light mt-1">Fixation au sol ou garde-corps, prise, s&eacute;curit&eacute;, mise en service</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, d&eacute;claration Enedis, puissance</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon : les droits du locataire</h3>
                  <p className="text-xs text-charcoal-light mt-1">Bail, accord du bailleur, d&eacute;m&eacute;nagement</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis pas &agrave; pas</h3>
                  <p className="text-xs text-charcoal-light mt-1">La d&eacute;marche obligatoire apr&egrave;s l&apos;installation</p>
                </Link>
                <Link href="/guide/panneau-solaire-assurance-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon : que couvre votre assurance ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">D&eacute;claration, responsabilit&eacute; civile, sinistres en copropri&eacute;t&eacute;</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>Sources :</strong> loi n&deg; 65-557 du 10 juillet 1965 (articles 9, 24, 25, 25-1, 26, 30, 42) ; d&eacute;cret n&deg; 67-223 du 17 mars 1967 (article 10) ; loi n&deg; 2023-175 du 10 mars 2023, article 44 ; Code de l&apos;urbanisme, article R421-17 ; Code de l&apos;&eacute;nergie, article L315-2 ; ANIL, analyse de la loi APER ; photovoltaique.info (Hespul), fiche copropri&eacute;t&eacute;.</p>
              <p className="text-xs text-stone leading-relaxed">Cet article est une information g&eacute;n&eacute;rale, pas un conseil juridique : votre r&egrave;glement de copropri&eacute;t&eacute; prime. Certains liens sont affili&eacute;s : nous touchons une commission si vous achetez, sans surco&ucirc;t pour vous. <Link href="/a-propos" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
