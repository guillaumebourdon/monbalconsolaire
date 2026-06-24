import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { CopyableTemplate } from '@/components/ui/CopyableTemplate';

export const metadata: Metadata = {
  title: 'D\u00e9claration Enedis panneau solaire : guide CACSI pas \u00e0 pas',
  description: 'Comment d\u00e9clarer votre kit solaire \u00e0 Enedis. Formulaire CACSI, pi\u00e8ces obligatoires, d\u00e9lais. Proc\u00e9dure simplifi\u00e9e, guide gratuit et \u00e0 jour 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/declaration-cacsi-enedis-panneau-solaire',
  },
};

const faqData = [
  {
    question: 'La déclaration CACSI est-elle vraiment obligatoire pour un kit solaire de balcon ?',
    answer: 'Oui, pour toute installation photovoltaïque connectée au réseau Enedis, même un kit plug-and-play 300 W. C\'est imposé par le Code de l\'énergie (article D.342-1). La CACSI (Convention d\'Autoconsommation Sans Injection) est la procédure simplifiée pour les installations autoconsommation sans revente de surplus, comme c\'est le cas de la quasi-totalité des kits de balcon.',
  },
  {
    question: 'Que risque-t-on à ne pas faire la déclaration ?',
    answer: 'Sur le plan légal, des sanctions théoriques existent mais restent rarement appliquées. Le vrai risque est ailleurs : en cas d\'incendie, de sinistre électrique ou de dégât des eaux lié à l\'installation, votre assurance habitation peut refuser la prise en charge en invoquant une installation non déclarée. Pour un remboursement à 30 000-50 000 €, une déclaration gratuite de 10 minutes vaut largement le coup.',
  },
  {
    question: 'Combien coûte la déclaration CACSI ?',
    answer: 'Elle est totalement gratuite. Enedis ne facture ni dossier, ni étude, ni mise en service. C\'est une formalité administrative simple et sans frais, par opposition aux installations photovoltaïques avec revente de surplus qui nécessitent un contrat d\'obligation d\'achat payant.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir la validation ?',
    answer: 'Enedis traite généralement les demandes en 2 à 4 semaines. Vous recevez un accusé de réception immédiat par email, puis un document officiel "Convention d\'autoconsommation sans injection" signé numériquement. Vous pouvez utiliser votre kit dès l\'envoi du dossier (pas besoin d\'attendre la validation pour commencer).',
  },
  {
    question: 'Que faire si mon logement n\'est pas raccordé à Enedis mais à une régie locale ?',
    answer: 'Certaines communes sont desservies par des régies locales (Grenoble, Strasbourg, Metz, et environ 150 autres en France). Dans ce cas, vous devez faire la déclaration auprès de votre régie, pas d\'Enedis. La procédure est similaire, souvent avec un formulaire dédié. Contactez votre fournisseur d\'électricité pour connaître votre gestionnaire de réseau.',
  },
  {
    question: 'Mon fabricant me dit que la CACSI est "automatique", est-ce vrai ?',
    answer: 'Non, c\'est une simplification abusive. Certains fabricants (Sunology, Beem) fournissent le formulaire CACSI pré-rempli pour vous faire gagner du temps, mais c\'est toujours à vous de le soumettre à Enedis. Aucun fabricant ne peut déclarer à votre place : la convention est signée entre Enedis et le propriétaire du raccordement électrique, c\'est-à-dire vous.',
  },
];

const etapes = [
  {
    num: 1,
    titre: 'Rassemblez les documents nécessaires',
    duree: '5 minutes',
    detail: 'Avant de commencer, préparez : votre dernière facture d\'électricité (pour récupérer le PDL ou PRM, voir étape 2), l\'attestation CE du micro-onduleur (fournie avec le kit), une photo de l\'installation posée (le panneau + micro-onduleur branché), et un RIB (pour les communications futures Enedis). C\'est tout.',
    pieges: 'Le PDL (Point De Livraison) à 14 chiffres et le PRM (Point de Référence Mesure) à 14 chiffres sont deux codes différents qui désignent la même chose : votre compteur. Ils sont affichés sur votre facture EDF/fournisseur, section "Informations sur votre compteur". Ne les confondez pas avec le numéro de contrat.',
  },
  {
    num: 2,
    titre: 'Créez votre compte sur Enedis Connect',
    duree: '3 minutes',
    detail: 'Allez sur enedis.fr. En haut à droite, cliquez sur "Espace client" puis "Créer un compte". Choisissez "Particulier". Complétez avec votre email, votre nom, et le PDL/PRM trouvé sur votre facture. Enedis vous envoie un email de confirmation à valider.',
    pieges: 'Beaucoup de gens se trompent de portail. Le bon est bien "Enedis Connect" sur enedis.fr, pas "MonEnedis" ni les portails de fournisseurs (EDF, TotalEnergies, etc.). Ces derniers sont des revendeurs d\'électricité, pas le gestionnaire de réseau.',
  },
  {
    num: 3,
    titre: 'Accédez au formulaire CACSI',
    duree: '2 minutes',
    detail: 'Une fois connecté à votre espace, allez dans "Mes démarches" → "Raccordement" → "Autoconsommation sans injection". Vous arrivez sur un formulaire en plusieurs étapes. Enedis appelle officiellement cette procédure "Déclaration d\'installation photovoltaïque".',
    pieges: 'Ne choisissez pas "Autoconsommation avec vente du surplus" ni "Vente totale". Ces procédures sont pour les installations classiques (3 à 9 kWc sur toiture) et nécessitent un contrat d\'obligation d\'achat. Pour un kit de balcon plug-and-play, c\'est "sans injection" qui correspond.',
  },
  {
    num: 4,
    titre: 'Remplissez les informations d\'installation',
    duree: '5 minutes',
    detail: 'Renseignez : la puissance cumulée en kWc (pour un kit 450 W, saisissez 0,45 kWc), le type de panneaux (monocristallin, polycristallin), la marque et modèle du micro-onduleur, la date de mise en service prévue. Cochez la case "Installation branchée sur prise domestique" pour un plug-and-play.',
    pieges: 'La puissance se mesure en kilowatts-crête (kWc), pas en watts. 450 W = 0,45 kWc. 900 W = 0,9 kWc. Ne jamais dépasser 0,9 kWc pour rester dans le régime plug-and-play. Au-delà, il faut un contrôle Consuel et une installation par un électricien qualifié.',
  },
  {
    num: 5,
    titre: 'Joignez les pièces justificatives',
    duree: '5 minutes',
    detail: 'Téléchargez les documents au format PDF ou JPG : attestation de conformité CE du micro-onduleur (2 pages typiquement), photos de l\'installation (panneau en place, branchement visible, micro-onduleur avec étiquette CE visible), et la fiche technique du kit si disponible.',
    pieges: 'Les photos doivent être claires et montrer que l\'installation est terminée. Pas de panneau encore dans le carton. Pas d\'image de catalogue fabricant : c\'est votre installation réelle qui compte. Une photo = un PDF ou JPG < 2 Mo chacun.',
  },
  {
    num: 6,
    titre: 'Signez et soumettez',
    duree: '2 minutes',
    detail: 'Relisez le récapitulatif, cochez la case "J\'atteste sur l\'honneur de l\'exactitude des informations". Signez électroniquement (coche ou tracé tactile). Cliquez sur "Envoyer le dossier". Vous recevez immédiatement un email de confirmation avec votre numéro de dossier.',
    pieges: 'Notez bien le numéro de dossier (format : ENR-XXXX-XXXX-XXXX). Il vous sera demandé si vous contactez le service client Enedis ou si votre assurance vous demande un justificatif.',
  },
  {
    num: 7,
    titre: 'Recevez votre convention signée',
    duree: '2 à 4 semaines',
    detail: 'Enedis vérifie votre dossier et vous envoie la "Convention d\'Autoconsommation Sans Injection" signée par leurs soins. Ce document officiel atteste que votre installation est déclarée et conforme. Conservez-le précieusement : c\'est la preuve à fournir à votre assurance habitation et, éventuellement, lors de la revente de votre logement.',
    pieges: 'Si Enedis vous demande des compléments (email du service "Raccordement"), répondez dans les 7 jours. Passé ce délai, votre dossier peut être archivé et vous devrez recommencer. Vérifiez bien vos spams : certains emails Enedis y atterrissent.',
  },
];

const cas_particuliers = [
  {
    titre: 'Vous êtes locataire',
    detail: 'Vous pouvez faire la CACSI en tant que locataire, car le contrat Enedis est à votre nom en tant qu\'occupant. Vérifiez cependant que votre bail n\'interdit pas les installations sur balcon. Informez votre propriétaire par courrier ou email (lettre type disponible dans notre guide locataire).',
    link: '/guide/panneau-solaire-balcon-locataire',
    linkLabel: 'Guide locataire complet',
  },
  {
    titre: 'Vous vivez en copropriété',
    detail: 'La CACSI est indépendante du règlement de copropriété : vous pouvez déclarer à Enedis même si votre AG ne s\'est pas encore prononcée. Mais faites les deux démarches en parallèle. Si la copropriété refuse ensuite, vous pourrez retirer votre déclaration sans pénalité.',
    link: '/guide/panneau-solaire-copropriete',
    linkLabel: 'Guide copropriété complet',
  },
  {
    titre: 'Vous avez plusieurs kits en série',
    detail: 'Vous pouvez cumuler jusqu\'à 800-900 W au total sur votre installation en restant en régime plug-and-play. Au-delà, vous basculez en régime photovoltaïque classique (≥ 3 kWc) avec contrôle Consuel obligatoire. Déclarez l\'ensemble de la puissance cumulée dans le formulaire CACSI, pas chaque kit séparément.',
    link: '/guide/reglementation-panneau-solaire-balcon-2026',
    linkLabel: 'Réglementation complète 2026',
  },
  {
    titre: 'Votre commune est en régie locale',
    detail: 'Environ 150 communes françaises sont desservies par une régie locale au lieu d\'Enedis (Grenoble, Strasbourg, Metz, nombreuses communes de Corse, Nouvelle-Aquitaine, Bretagne). Dans ce cas, la déclaration se fait auprès de votre régie, pas d\'Enedis. Contactez votre fournisseur d\'électricité pour identifier votre gestionnaire de réseau (obligation d\'information).',
    link: null,
    linkLabel: null,
  },
];

const erreurs_courantes = [
  {
    erreur: 'Oublier de signer électroniquement',
    detail: 'Cause n°1 de rejet de dossier. La signature électronique est obligatoire à la fin du formulaire, même si vous avez tout rempli correctement. Vérifiez que la case "Je certifie..." est bien cochée avant de valider.',
  },
  {
    erreur: 'Envoyer des photos de mauvaise qualité',
    detail: 'Photos floues, trop sombres, ou où le micro-onduleur n\'est pas visible : Enedis vous demandera un nouveau dossier. Prenez les photos en plein jour, montrez bien l\'ensemble de l\'installation et un gros plan du micro-onduleur avec son étiquette CE.',
  },
  {
    erreur: 'Confondre PDL et numéro de contrat',
    detail: 'Le PDL (14 chiffres) identifie le compteur. Le numéro de contrat (commence souvent par 3 à 6 chiffres) identifie votre abonnement chez votre fournisseur. Sur la facture, le PDL est dans la section "Votre compteur", le contrat dans "Vos coordonnées".',
  },
  {
    erreur: 'Déclarer sans avoir installé',
    detail: 'La CACSI doit être faite une fois l\'installation terminée. Ne déclarez pas avant d\'avoir le kit en main et branché. Les photos exigées montrent bien une installation finalisée.',
  },
];

export default function DeclarationCacsiEnedisPage() {
  return (
    <>
      <SchemaArticle
        title="Déclaration CACSI Enedis panneau solaire : guide pas à pas"
        description="Guide pas à pas pour déclarer votre kit solaire de balcon à Enedis via la CACSI en 2026."
        url="https://monbalconsolaire.fr/guide/declaration-cacsi-enedis-panneau-solaire"
        datePublished="2026-04-23"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Déclaration CACSI Enedis' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide réglementation</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Déclaration CACSI Enedis : le guide pas à pas pour déclarer votre kit solaire
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              La CACSI (Convention d&apos;Autoconsommation Sans Injection) est l&apos;étape obligatoire mais simple pour être en règle avec Enedis. Voici la procédure complète en 7 étapes, 25 minutes au total, 100 % gratuite.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>23 avril 2026</span>
              <span>&middot;</span>
              <span>12 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              La CACSI est <strong>obligatoire, gratuite et prend 25 minutes</strong>. Elle se fait sur <strong>enedis.fr</strong> dans la section &quot;Autoconsommation sans injection&quot;. Il vous faut votre PDL (sur la facture), l&apos;attestation CE du micro-onduleur, et 2-3 photos de l&apos;installation. Enedis valide en 2 à 4 semaines. Ne pas déclarer expose à l&apos;invalidation de votre assurance habitation en cas de sinistre.
            </p>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">C&apos;est quoi la CACSI, concrètement ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                CACSI est l&apos;acronyme de <strong>Convention d&apos;Autoconsommation Sans Injection</strong>. C&apos;est le document officiel signé entre Enedis (le gestionnaire du réseau électrique français) et vous, propriétaire d&apos;une installation solaire qui produit de l&apos;électricité pour votre usage, sans renvoyer le surplus sur le réseau.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Cette convention existe depuis 2017, dans le cadre du développement du photovoltaïque résidentiel. Avant, toute installation devait être déclarée via une procédure lourde (ConsuelL + contrat d&apos;obligation d&apos;achat). Aujourd&apos;hui, pour les petites installations en autoconsommation pure, la CACSI est la voie simplifiée et gratuite.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                <strong>Pour un kit solaire de balcon plug-and-play</strong> (Sunology, Beem, Sunethic, DualSun...), c&apos;est systématiquement la CACSI qui s&apos;applique, car :
              </p>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mt-3 pl-5">
                <li>&bull; La puissance cumulée est inférieure à 0,9 kWc (900 W)</li>
                <li>&bull; L&apos;installation se branche sur une prise domestique standard</li>
                <li>&bull; Vous consommez directement l&apos;énergie produite (pas de vente au réseau)</li>
                <li>&bull; Le micro-onduleur intégré empêche toute injection de surplus (&laquo; anti-refoulement &raquo;)</li>
              </ul>
            </section>

            {/* Les 7 étapes */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La procédure en 7 étapes</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Comptez <strong>25 minutes au total</strong> pour remplir le dossier, puis 2 à 4 semaines d&apos;attente pour la validation par Enedis. Vous pouvez utiliser votre kit dès l&apos;envoi du dossier (pas besoin d&apos;attendre la validation).
              </p>

              <div className="space-y-5">
                {etapes.map((e) => (
                  <div key={e.num} className="card-lg border-l-4 border-l-green">
                    <div className="flex items-start gap-4 mb-3">
                      <span className="w-10 h-10 rounded-full bg-green text-white flex items-center justify-center font-bold text-base flex-shrink-0">
                        {e.num}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-bold text-base leading-tight mb-1">{e.titre}</h3>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">
                          ⏱ {e.duree}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-charcoal-light leading-relaxed mb-3">{e.detail}</p>

                    <div className="bg-amber-pale/30 rounded-lg p-3 border-l-4 border-l-amber">
                      <p className="text-xs font-semibold text-amber-dark mb-1">⚠️ Piège à éviter</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{e.pieges}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Documents à préparer */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 documents à préparer</h2>
              <div className="space-y-3">
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">📄 Votre dernière facture d&apos;électricité (1 page)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Pour récupérer votre PDL ou PRM (14 chiffres). Sur les factures EDF : section &laquo; Informations sur votre contrat &raquo; en haut. Sur TotalEnergies/Engie/autres : section &laquo; Votre compteur &raquo;.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">📄 Attestation CE du micro-onduleur (PDF, 1-2 pages)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Fournie avec votre kit par le fabricant. Généralement dans la boîte ou disponible sur le site du fabricant (zone &laquo; Documents techniques &raquo;). Pour les kits Sunology, Beem, Sunethic, elle est fournie automatiquement.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">📸 Photos de l&apos;installation (2-3 photos JPG)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Photo n°1 : vue d&apos;ensemble avec le panneau posé sur le balcon. Photo n°2 : gros plan sur le micro-onduleur avec étiquette CE lisible. Photo n°3 (optionnelle) : la prise de branchement.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-bold text-sm mb-1">📄 Fiche technique du kit (PDF, optionnelle)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Utile mais pas toujours exigée. Elle précise la puissance en kWc, le type de panneaux, et les caractéristiques techniques. Disponible sur le site du fabricant en téléchargement.
                  </p>
                </div>
              </div>
            </section>

            {/* Cas particuliers */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Cas particuliers</h2>
              <div className="space-y-3">
                {cas_particuliers.map((cas, i) => (
                  <div key={i} className="card-lg border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-2">{cas.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed mb-3">{cas.detail}</p>
                    {cas.link && (
                      <Link href={cas.link} className="text-xs font-semibold text-green hover:underline">
                        → {cas.linkLabel}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Erreurs */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 erreurs qui font rejeter votre dossier</h2>
              <div className="space-y-3">
                {erreurs_courantes.map((e, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ {e.erreur}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{e.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Après la déclaration */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Après la déclaration : que faire de la convention ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Une fois votre CACSI signée par Enedis, vous recevez un PDF officiel par email. Ce document n&apos;est pas juste une formalité : il a trois usages concrets à connaître.
              </p>

              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">1. Envoi à votre assurance habitation</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Indispensable. Envoyez la convention à votre assureur par email avec la mention &laquo; Ajout d&apos;installation photovoltaïque à mon contrat &raquo;. La plupart des assurances n&apos;augmentent pas la cotisation pour un kit plug-and-play. Mais sans cette notification, aucune garantie en cas de sinistre lié à l&apos;installation.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">2. Conservation pour revente du logement</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si vous vendez votre appartement avec le kit solaire en place, l&apos;acquéreur aura besoin de la CACSI pour la transférer à son nom (formalité gratuite chez Enedis). Si vous emportez le kit avec vous, la CACSI devient caduque : signalez-le à Enedis.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">3. Justificatif en cas de contrôle syndic ou mairie</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Rare mais possible. Un syndic ou un agent municipal peut vous demander une preuve de conformité réglementaire. La CACSI est la seule preuve officielle que votre installation est connue et validée par le gestionnaire de réseau.
                  </p>
                </div>
              </div>
            </section>

            {/* Détails techniques avancés */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Détails techniques à connaître pour le formulaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le formulaire CACSI demande quelques informations techniques précises. Voici ce qu&apos;il faut renseigner exactement, avec les valeurs typiques pour les kits du marché en 2026.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Champ formulaire</th>
                      <th className="text-left p-3">Valeur à saisir</th>
                      <th className="text-left p-3 rounded-tr-xl">Exemple kit Sunology PLAY 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Puissance crête (kWc)</td>
                      <td className="p-3 text-xs">Diviser la puissance en watts par 1000</td>
                      <td className="p-3 font-mono text-xs">0,45 kWc (450 W)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Type d&apos;installation</td>
                      <td className="p-3 text-xs">Photovoltaïque - Autoconsommation totale</td>
                      <td className="p-3 font-mono text-xs">Plug-and-play sur prise</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Marque du panneau</td>
                      <td className="p-3 text-xs">Voir étiquette ou fiche produit</td>
                      <td className="p-3 font-mono text-xs">Trina Solar / DMEGC</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Marque micro-onduleur</td>
                      <td className="p-3 text-xs">Voir étiquette CE du boîtier</td>
                      <td className="p-3 font-mono text-xs">Enphase IQ7 / Hoymiles HM-400</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Tension de raccordement</td>
                      <td className="p-3 text-xs">230 V monophasé pour tous les kits balcon</td>
                      <td className="p-3 font-mono text-xs">230 V (50 Hz)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Norme de conformité</td>
                      <td className="p-3 text-xs">VDE-AR-N 4105 + NF C 15-100</td>
                      <td className="p-3 font-mono text-xs">Normes européennes 2026</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Mode de raccordement</td>
                      <td className="p-3 text-xs">Sur circuit prise existante</td>
                      <td className="p-3 font-mono text-xs">Pas de tableau dédié</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Puissance de souscription</td>
                      <td className="p-3 text-xs">Voir contrat fournisseur (en kVA)</td>
                      <td className="p-3 font-mono text-xs">6 kVA (logement standard)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card-lg bg-amber-pale/20 border-amber/20 mt-6">
                <h3 className="font-bold text-base mb-2">⚠️ Attention au certificat anti-injection</h3>
                <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                  La CACSI exige techniquement un dispositif &laquo; anti-injection &raquo; (ou anti-refoulement) qui empêche l&apos;électricité produite de remonter sur le réseau public quand votre consommation est nulle. En pratique :
                </p>
                <ul className="text-sm text-charcoal-light space-y-2 pl-5">
                  <li>&bull; <strong>Sunology, Beem, Sunethic, DualSun</strong> : leurs micro-onduleurs intègrent cette fonction de série. Aucun dispositif additionnel à installer.</li>
                  <li>&bull; <strong>Kits AliExpress / génériques</strong> : pas toujours certifiés. Vérifiez la fiche technique avant l&apos;achat. Sans cette certification, votre dossier CACSI peut être rejeté.</li>
                  <li>&bull; <strong>Mention dans le formulaire</strong> : cochez la case &laquo; Installation équipée d&apos;un dispositif anti-injection conforme &raquo; et joignez l&apos;attestation CE du micro-onduleur.</li>
                </ul>
              </div>
            </section>

            {/* Modèles de lettres */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Modèles de lettres prêts à l&apos;emploi</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Voici 3 modèles de courriers que vous pouvez copier-coller, personnaliser, et envoyer dans les minutes qui suivent. Les <strong>[zones entre crochets]</strong> sont à remplacer par vos informations.
              </p>

              <CopyableTemplate
                trackingLabel="cacsi_lettre_assurance"
                title="Lettre à votre assurance habitation"
                description="À envoyer dès réception de votre CACSI signée par Enedis, pour activer la couverture en cas de sinistre."
                recipient="Service contrats / sinistres de votre assureur (par email ou courrier recommandé)"
                subject="Déclaration d'installation photovoltaïque sur mon contrat habitation [N° de contrat]"
                body={`Madame, Monsieur,

Je suis titulaire du contrat d'assurance habitation référence [VOTRE NUMÉRO DE CONTRAT] pour le logement situé au [VOTRE ADRESSE COMPLÈTE].

Je vous informe que j'ai installé un kit solaire photovoltaïque plug-and-play sur le balcon de mon logement le [DATE D'INSTALLATION]. Cette installation a été déclarée à Enedis dans le cadre d'une Convention d'Autoconsommation Sans Injection (CACSI), validée le [DATE DE VALIDATION ENEDIS].

Caractéristiques de l'installation :
- Marque et modèle du kit : [EX : SUNOLOGY PLAY 2]
- Puissance : [EX : 450 W, soit 0,45 kWc]
- Mode de raccordement : prise domestique standard (plug-and-play)
- Micro-onduleur : [EX : ENPHASE IQ7+] - certifié CE et conforme aux normes VDE-AR-N 4105 et NF C 15-100

Vous trouverez en pièces jointes :
- La Convention CACSI signée par Enedis
- L'attestation CE du micro-onduleur
- La fiche technique du kit

Je vous remercie de bien vouloir prendre en compte cette déclaration et de me confirmer que mon contrat habitation couvre bien les éventuels sinistres liés à cette installation. Je vous saurais gré également de m'indiquer si une mise à jour de cotisation est nécessaire.

Dans l'attente de votre retour, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[VOTRE PRÉNOM ET NOM]
[VOTRE ADRESSE]
[VOTRE EMAIL]
[VOTRE TÉLÉPHONE]

Pièces jointes :
1. CACSI signée Enedis (PDF)
2. Attestation CE micro-onduleur (PDF)
3. Fiche technique du kit (PDF)`}
              />

              <CopyableTemplate
                trackingLabel="cacsi_email_enedis"
                title="Email pour relancer Enedis (dossier en attente)"
                description="Si votre dossier CACSI n'a pas reçu de retour après 4 semaines. À envoyer au service raccordement Enedis."
                recipient="raccordement-enedis@enedis.fr (ou via votre espace client Enedis Connect)"
                subject="Relance dossier CACSI [VOTRE N° DE DOSSIER ENR-XXXX-XXXX]"
                body={`Madame, Monsieur,

Je vous contacte concernant ma demande de Convention d'Autoconsommation Sans Injection (CACSI) déposée le [DATE DE DÉPÔT INITIAL] sous le numéro de dossier [ENR-XXXX-XXXX-XXXX].

Plus de 4 semaines se sont écoulées depuis le dépôt de mon dossier complet, sans retour de votre part. Je vous saurais gré de bien vouloir me confirmer la réception de ce dernier et m'indiquer le délai prévu pour la finalisation de la convention.

Mes informations :
- PDL/PRM : [VOTRE NUMÉRO À 14 CHIFFRES]
- Adresse : [VOTRE ADRESSE COMPLÈTE]
- Type d'installation : Kit solaire photovoltaïque plug-and-play
- Puissance déclarée : [EX : 0,45 kWc]
- Marque : [EX : SUNOLOGY PLAY 2]

Mon installation est opérationnelle depuis le [DATE], et je souhaite régulariser ma situation administrative dans les meilleurs délais, notamment pour pouvoir transmettre la convention signée à mon assureur habitation.

Je reste à votre disposition pour fournir tout complément d'information utile au traitement de mon dossier.

Cordialement,

[VOTRE PRÉNOM ET NOM]
[VOTRE EMAIL]
[VOTRE TÉLÉPHONE]
PDL/PRM : [VOTRE NUMÉRO À 14 CHIFFRES]`}
              />

              <CopyableTemplate
                trackingLabel="cacsi_lettre_proprietaire"
                title="Lettre au propriétaire (locataires)"
                description="Pour informer votre propriétaire de l'installation. Recommandé même si non obligatoire — protège en cas de litige sur la caution."
                recipient="Votre propriétaire ou agence immobilière (courrier recommandé avec AR conseillé)"
                subject="Information : installation d'un kit solaire de balcon dans le logement loué"
                body={`Madame, Monsieur,

Je suis locataire du logement situé au [VOTRE ADRESSE COMPLÈTE], dans le cadre du bail signé le [DATE DE SIGNATURE DU BAIL].

Par la présente, je souhaite vous informer de mon intention d'installer (ou : avoir installé le [DATE]) un kit solaire photovoltaïque plug-and-play sur le balcon du logement. Cette installation, sans aucun impact structurel sur le logement, présente les caractéristiques suivantes :

- Type : kit solaire plug-and-play (branchement sur prise standard)
- Puissance : [EX : 450 W, soit 0,45 kWc]
- Modèle : [EX : SUNOLOGY PLAY 2]
- Mode d'installation : pose au sol avec ballasts de lestage, sans aucune fixation murale ni perçage

L'installation respecte la réglementation française (norme NF C 15-100, déclaration CACSI Enedis) et est entièrement réversible : aucun dommage ne sera causé au balcon, et l'ensemble peut être démonté en moins d'une heure lors de mon départ du logement.

Mon installation est par ailleurs déclarée auprès d'Enedis (Convention d'Autoconsommation Sans Injection référence [ENR-XXXX-XXXX-XXXX]) et de mon assureur habitation.

Je tenais à vous informer par souci de transparence, conformément à l'esprit de bonne entente entre bailleur et locataire. N'hésitez pas à me contacter si vous souhaitez de plus amples informations.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations respectueuses.

[VOTRE PRÉNOM ET NOM]
[VOTRE ADRESSE]
[VOTRE EMAIL]
[VOTRE TÉLÉPHONE]
Date : [JOUR/MOIS/ANNÉE]`}
              />

              <div className="card bg-green-pale/20 border-green/20 mt-6">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>💡 Conseil :</strong> envoyez ces courriers en <strong>recommandé avec accusé de réception</strong> ou par <strong>email avec confirmation de lecture</strong>. En cas de litige ultérieur, ces preuves d&apos;envoi seront déterminantes.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre kit est déclaré — combien va-t-il vous rapporter ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Estimez vos économies réelles selon votre département et votre orientation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes économies →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Réglementation 2026 complète</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, CACSI, limite 900 W : tout ce que dit la loi française</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide locataire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Droits, modèle de lettre au propriétaire, cas pratiques</p>
                </Link>
                <Link href="/guide/panneau-solaire-copropriete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Solaire en copropriété</h4>
                  <p className="text-xs text-charcoal-light mt-1">Règles, votes, modèle de courrier au syndic</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

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

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources :</strong> Enedis Connect, Code de l&apos;énergie (article D.342-1), Norme NF C 15-100 (AFNOR), documentation officielle CACSI d&apos;Enedis (avril 2026).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
