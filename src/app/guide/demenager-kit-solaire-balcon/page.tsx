import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Déménager avec son kit solaire balcon : CACSI, résiliation',
  description: 'Déménagement et kit solaire plug-and-play : démonter, transporter, refaire la déclaration CACSI et résilier le contrat Enedis à l’ancienne adresse.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/demenager-kit-solaire-balcon',
  },
};

const faqData = [
  {
    question: 'Puis-je emporter mon kit solaire de balcon en déménageant ?',
    answer: 'Oui, c’est l’un des intérêts des kits plug-and-play : contrairement à une installation sur toiture, rien n’est scellé au bâti. Panneau, micro-onduleur, câbles et batterie éventuelle vous appartiennent et se démontent comme n’importe quel équipement mobilier. Ils partent avec vous dans le camion de déménagement.',
  },
  {
    question: 'Dois-je annuler la déclaration CACSI de mon ancien logement ?',
    answer: 'Enedis ne publie pas de procédure de « résiliation » explicite pour une CACSI : elle est attachée au point de livraison (PDL) de l’ancien logement, pas à vous personnellement. Dans les faits, la résiliation de votre contrat d’électricité à cette adresse (étape toujours obligatoire lors d’un déménagement) suffit à clôturer le dossier côté Enedis. Par prudence, et puisque la démarche est gratuite, un email à Enedis signalant le retrait de l’installation reste la solution la plus sérieuse : contactez Enedis pour confirmer qu’aucune action supplémentaire n’est attendue de votre part.',
  },
  {
    question: 'La nouvelle déclaration CACSI est-elle obligatoire si j’ai déjà déclaré le kit à l’ancienne adresse ?',
    answer: 'Oui. La CACSI porte sur une installation à une adresse et un point de livraison précis. Un déménagement change le point de livraison : il faut donc soumettre une nouvelle déclaration pour le nouveau logement, même si c’est exactement le même kit. La procédure est identique à la première fois et reste gratuite (voir notre guide dédié).',
  },
  {
    question: 'Le contrat d’électricité se transfère-t-il automatiquement vers le nouveau logement ?',
    answer: 'Non. Un contrat d’électricité (EDF ou autre fournisseur) est lié à un point de livraison, pas à une personne. Il faut résilier le contrat de l’ancien logement (sans frais ni préavis, les contrats d’énergie étant sans engagement) et en souscrire un nouveau à la nouvelle adresse. C’est une démarche totalement séparée de la CACSI.',
  },
  {
    question: 'Faut-il prévenir mon assurance habitation du déplacement du panneau ?',
    answer: 'Oui. Si vous aviez déclaré le kit à votre assureur pour l’ancien logement (recommandé pour la garantie grêle, vol ou chute), cette déclaration ne suit pas automatiquement votre nouveau contrat d’assurance habitation. Signalez l’équipement à votre nouvel assureur dès l’installation dans le nouveau logement.',
  },
  {
    question: 'Une batterie type EcoFlow, Zendure ou Beem pose-t-elle un problème au transport ?',
    answer: 'Les batteries lithium (LiFePO4 le plus souvent sur ces produits) ne posent pas de problème particulier dans un déménagement classique en véhicule privé ou camion de déménageur routier : conservez-la si possible dans son carton d’origine, évitez de la laisser en plein soleil ou à forte chaleur dans le véhicule, et ne la transportez pas endommagée ou gonflée. Si vous passez par un transporteur aérien ou maritime professionnel pour le reste du déménagement, signalez la présence d’une batterie lithium : certains transporteurs appliquent des restrictions spécifiques (fret aérien notamment).',
  },
];

export default function DemenagerKitSolairePage() {
  return (
    <>
      <SchemaArticle
        title="D&eacute;m&eacute;nager avec son kit solaire balcon : CACSI, r&eacute;siliation, d&eacute;marches"
        description="Comment d&eacute;monter, transporter et reconnecter un kit solaire plug-and-play lors d&apos;un d&eacute;m&eacute;nagement. CACSI, contrat Enedis, assurance : ce qui change et ce qu&apos;il faut refaire."
        url="https://monbalconsolaire.fr/guide/demenager-kit-solaire-balcon"
        datePublished="2026-10-06"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Guides', href: '/guide' }, { label: 'Déménagement' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Déménagement' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Démarches</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Déménager avec son kit solaire balcon : CACSI, résiliation, démarches
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Bonne nouvelle&nbsp;: un kit solaire plug-and-play n&apos;est pas scell&eacute; au b&acirc;timent, vous pouvez l&apos;emporter en d&eacute;m&eacute;nageant. Mauvaise nouvelle&nbsp;: la paperasse ne vous suit pas toute seule. Voici, dans l&apos;ordre, ce qu&apos;il faut d&eacute;monter, r&eacute;silier et red&eacute;clarer.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>6 octobre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong className="text-green">{'✓'} Le kit vous appartient.</strong> Panneau, micro-onduleur, c&acirc;bles, batterie&nbsp;: tout se d&eacute;monte et part avec vous, qu&apos;il soit pos&eacute; au sol ou fix&eacute; sur une rambarde sans per&ccedil;age.</li>
              <li><strong className="text-green">{'✓'} Deux d&eacute;marches distinctes et obligatoires.</strong> R&eacute;silier le contrat d&apos;&eacute;lectricit&eacute; de l&apos;ancien logement (c&ocirc;t&eacute; fournisseur) ET red&eacute;clarer une CACSI pour le nouveau logement (c&ocirc;t&eacute; Enedis).</li>
              <li><strong className="text-green">{'✓'} Pas de CACSI &laquo;&nbsp;transf&eacute;rable&nbsp;&raquo;.</strong> Elle est li&eacute;e au point de livraison de l&apos;ancienne adresse, pas à vous. Il faut une nouvelle d&eacute;claration, gratuite, à chaque nouvelle adresse.</li>
              <li><strong className="text-green">{'✓'} Pr&eacute;venez votre assurance</strong> dans le nouveau logement, m&ecirc;me si vous l&apos;aviez fait pour l&apos;ancien.</li>
              <li><strong className="text-green">{'✓'} Locataire sortant :</strong> si vous avez perc&eacute; quoi que ce soit pour fixer le panneau, reboucher avant l&apos;&eacute;tat des lieux.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le kit est-il vraiment transportable&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire de toiture classique (panneaux viss&eacute;s sur des rails fix&eacute;s à la charpente) ne d&eacute;m&eacute;nage pas&nbsp;: le d&eacute;montage, le transport et la remise en service co&ucirc;tent souvent plusieurs milliers d&apos;euros, et le contrat de revente du surplus n&apos;est pas transf&eacute;rable vers un autre logement. Un kit de balcon plug-and-play est con&ccedil;u sur un principe oppos&eacute;&nbsp;: aucune fixation d&eacute;finitive, aucun raccordement au tableau &eacute;lectrique, branchement sur une simple prise.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Pose au sol ou sur ballasts</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le cas le plus simple&nbsp;: on d&eacute;branche, on vide les ballasts (sable ou eau selon le mod&egrave;le), on plie ou on empile les panneaux. Rien à d&eacute;visser sur le b&acirc;timent.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Fixation sur rambarde sans per&ccedil;age (colliers, crochets)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">D&eacute;montage tout aussi simple&nbsp;: desserrer les colliers ou crochets, qui n&apos;ont laiss&eacute; aucune trace sur la rambarde.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Fixation per&ccedil;ante en fa&ccedil;ade ou sur un mur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Plus rare sur un kit de balcon, mais si vous avez perc&eacute; pour un support rigide, il faudra reboucher les trous avant de rendre le logement si vous &eacute;tiez locataire (voir plus bas).</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">
                C&ocirc;t&eacute; &eacute;lectronique, la plupart des micro-onduleurs (Hoymiles, APsystems, Deye) et des onduleurs int&eacute;gr&eacute;s (Sunology, Beem, Zendure, EcoFlow) n&apos;ont pas besoin d&apos;un d&eacute;montage sp&eacute;cifique&nbsp;: d&eacute;branchez les connecteurs MC4 c&ocirc;t&eacute; panneau, puis le c&acirc;ble secteur c&ocirc;t&eacute; prise. Coupez toujours l&apos;alimentation avant de d&eacute;brancher quoi que ce soit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Deux d&eacute;marches administratives, et elles ne se confondent pas</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La confusion la plus fr&eacute;quente&nbsp;: penser qu&apos;une seule d&eacute;marche r&egrave;gle tout. En r&eacute;alit&eacute;, il y en a deux, avec deux interlocuteurs diff&eacute;rents.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">D&eacute;marche</th>
                      <th className="text-left p-2.5 font-semibold">Interlocuteur</th>
                      <th className="text-left p-2.5 font-semibold">Objet</th>
                      <th className="text-left p-2.5 rounded-tr-xl font-semibold">Quand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-green-pale/20">
                      <td className="p-2.5 font-semibold">R&eacute;siliation du contrat d&apos;&eacute;lectricit&eacute;</td>
                      <td className="p-2.5">Votre fournisseur (EDF, autre)</td>
                      <td className="p-2.5">Fermer le compteur de l&apos;ancien logement</td>
                      <td className="p-2.5">Avant de quitter les lieux</td>
                    </tr>
                    <tr className="border-b border-border-light">
                      <td className="p-2.5 font-semibold">Nouvelle d&eacute;claration CACSI</td>
                      <td className="p-2.5">Enedis (ou r&eacute;gie locale)</td>
                      <td className="p-2.5">D&eacute;clarer le kit install&eacute; au nouveau logement</td>
                      <td className="p-2.5">Avant ou juste apr&egrave;s la remise en service</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Les contrats d&apos;&eacute;nergie sont sans engagement&nbsp;: la r&eacute;siliation se fait sans frais ni pr&eacute;avis, mais elle n&apos;est pas automatique au jour du d&eacute;m&eacute;nagement&nbsp;: il faut la demander. Pensez-y en m&ecirc;me temps que la lettre de r&eacute;siliation de votre bail ou votre changement d&apos;adresse postal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">CACSI&nbsp;: pourquoi il faut en refaire une neuve</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La Convention d&apos;Autoconsommation Sans Injection (CACSI) que vous avez sign&eacute;e lors de l&apos;achat de votre kit (voir notre <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">guide pas à pas</Link>) porte sur une installation à une adresse pr&eacute;cise, identifi&eacute;e par le point de livraison (PDL) de ce logement. D&eacute;m&eacute;nager change le PDL&nbsp;: la convention existante ne couvre donc plus votre nouvelle installation, m&ecirc;me si c&apos;est strictement le m&ecirc;me mat&eacute;riel.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Ce qu&apos;il faut faire au nouveau logement</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Red&eacute;poser une demande CACSI en ligne via Enedis, avec la puissance du kit et la nouvelle adresse. D&eacute;marche identique à la premi&egrave;re fois, gratuite, trait&eacute;e en 2 à 4 semaines&nbsp;: vous pouvez utiliser le kit dès son branchement, sans attendre la validation.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Ce qui n&apos;est pas clairement document&eacute; c&ocirc;t&eacute; ancien logement</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Enedis ne publie pas de formulaire de &laquo;&nbsp;retrait d&apos;installation&nbsp;&raquo; distinct de la fermeture du compteur. En toute rigueur, la r&eacute;siliation de votre contrat d&apos;&eacute;lectricit&eacute; sur cette adresse devrait suffire à clore le suivi c&ocirc;t&eacute; Enedis. Si vous voulez en avoir la confirmation officielle, un message au service client Enedis pr&eacute;cisant que l&apos;installation en autoconsommation a &eacute;t&eacute; retir&eacute;e reste la d&eacute;marche la plus s&eacute;curisante&nbsp;: elle ne co&ucirc;te rien et l&egrave;ve le doute.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Contrat d&apos;&eacute;lectricit&eacute;&nbsp;: la d&eacute;marche classique de d&eacute;m&eacute;nagement</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Rien de sp&eacute;cifique au solaire ici&nbsp;: un contrat d&apos;&eacute;lectricit&eacute; est attach&eacute; à un point de livraison, jamais à une personne. Il ne se transf&egrave;re pas d&apos;un logement à un autre, m&ecirc;me chez le m&ecirc;me fournisseur.
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">1. R&eacute;siliez l&apos;ancien contrat</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Contactez votre fournisseur avec la date de d&eacute;part et un relev&eacute; de compteur si possible. Aucun frais, aucun pr&eacute;avis exig&eacute; pour l&apos;&eacute;nergie.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">2. Souscrivez un nouveau contrat à la nouvelle adresse</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">M&ecirc;me fournisseur ou non, peu importe&nbsp;: c&apos;est un nouveau contrat, avec son propre point de livraison.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Dans quel ordre par rapport au kit solaire&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Aucune contrainte&nbsp;: la CACSI et le contrat d&apos;&eacute;lectricit&eacute; sont ind&eacute;pendants l&apos;un de l&apos;autre. Vous pouvez brancher le kit d&egrave;s votre arriv&eacute;e et d&eacute;poser la CACSI dans les jours qui suivent.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Locataire sortant&nbsp;: ce qu&apos;il faut v&eacute;rifier avant l&apos;&eacute;tat des lieux</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si votre installation &eacute;tait purement amovible (pose au sol, ballasts, colliers sans per&ccedil;age), il n&apos;y a rien à r&eacute;parer&nbsp;: vous rendez le balcon dans l&apos;&eacute;tat o&ugrave; vous l&apos;avez trouv&eacute; (voir notre <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline">guide locataire</Link>).
              </p>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li><span className="text-green font-bold">&#10003;</span> V&eacute;rifiez qu&apos;aucune trace de per&ccedil;age, de colle ou de peinture &eacute;caill&eacute;e ne subsiste sur la rambarde.</li>
                <li><span className="text-green font-bold">&#10003;</span> Si vous aviez pr&eacute;venu le propri&eacute;taire ou la copropri&eacute;t&eacute; (non obligatoire pour une installation amovible), un message de confirmation de retrait est une bonne pratique.</li>
                <li><span className="text-green font-bold">&#10003;</span> Emportez tous les &eacute;l&eacute;ments&nbsp;: un ballast oubli&eacute; ou un reste de c&acirc;ble peut &ecirc;tre retenu sur le d&eacute;p&ocirc;t de garantie.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Assurance habitation&nbsp;: une nouvelle d&eacute;claration, pas un transfert</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Comme pour l&apos;&eacute;lectricit&eacute;, l&apos;assurance habitation ne se transf&egrave;re pas automatiquement&nbsp;: changer de logement signifie g&eacute;n&eacute;ralement un nouveau contrat ou, au minimum, une mise à jour du contrat existant avec la nouvelle adresse. Profitez de ce moment pour red&eacute;clarer le panneau solaire à votre assureur, exactement comme vous l&apos;auriez fait à l&apos;achat (d&eacute;tail des garanties dans notre <Link href="/guide/panneau-solaire-assurance-balcon" className="text-green hover:underline">guide assurance</Link>).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Remonter le kit dans le nouveau logement</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">R&eacute;&eacute;valuez l&apos;orientation</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Peu de chances que le nouveau balcon ait exactement la m&ecirc;me exposition. Reprenez notre <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green hover:underline">guide d&apos;orientation</Link> pour repositionner le panneau au mieux.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">V&eacute;rifiez la prise et le disjoncteur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">M&ecirc;mes r&egrave;gles de s&eacute;curit&eacute; qu&apos;à la premi&egrave;re installation&nbsp;: prise d&eacute;di&eacute;e, disjoncteur diff&eacute;rentiel 30 mA, c&acirc;ble ext&eacute;rieur si la prise est expos&eacute;e (voir notre <Link href="/guide/installer-kit-solaire-balcon" className="text-green hover:underline">guide d&apos;installation</Link>).</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Recalculez votre rentabilit&eacute;</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">D&eacute;partement, orientation et talon de consommation changent probablement. Un kit tr&egrave;s rentable dans l&apos;ancien logement peut &ecirc;tre moins int&eacute;ressant dans le nouveau (ou l&apos;inverse). Repassez par le <Link href="/calculateur" className="text-green hover:underline">calculateur</Link> avec votre nouvelle situation.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Nouveau logement, nouvelle rentabilit&eacute;&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                D&eacute;partement, orientation, pr&eacute;sence en journ&eacute;e&nbsp;: le calculateur recalcule tout en 30 secondes pour votre nouvelle adresse.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Recalculer ma rentabilit&eacute; &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les erreurs à &eacute;viter</h2>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Croire que la CACSI suit le kit.</strong> Elle est attach&eacute;e au point de livraison de l&apos;ancien logement, pas à l&apos;&eacute;quipement.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Oublier de r&eacute;silier le contrat d&apos;&eacute;lectricit&eacute; de l&apos;ancien logement.</strong> Il ne s&apos;arr&ecirc;te pas automatiquement le jour de votre d&eacute;part.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>D&eacute;brancher sous tension.</strong> Coupez toujours l&apos;alimentation c&ocirc;t&eacute; prise avant de d&eacute;connecter les c&acirc;bles MC4 ou le c&acirc;ble secteur.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Transporter une batterie endommag&eacute;e ou gonfl&eacute;e.</strong> Dans ce cas, ne la faites pas voyager&nbsp;: contactez le fabricant ou un point de collecte sp&eacute;cialis&eacute;.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> <strong>Oublier de pr&eacute;venir le nouvel assureur.</strong> Sans d&eacute;claration, la garantie gr&ecirc;le, vol ou chute du panneau peut &ecirc;tre refus&eacute;e en cas de sinistre.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">{'▼'}</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis&nbsp;: le guide pas à pas</h4>
                  <p className="text-xs text-charcoal-light mt-1">La proc&eacute;dure compl&egrave;te, avec mod&egrave;les de lettres</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon locataire&nbsp;: droits et r&egrave;gles</h4>
                  <p className="text-xs text-charcoal-light mt-1">Amovibilit&eacute;, copropri&eacute;t&eacute;, restitution du logement</p>
                </Link>
                <Link href="/guide/panneau-solaire-assurance-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon&nbsp;: que couvre votre assurance&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Gr&ecirc;le, vol, chute, responsabilit&eacute; civile</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Installer un kit solaire balcon&nbsp;: &eacute;tapes et fixation</h4>
                  <p className="text-xs text-charcoal-light mt-1">S&eacute;curit&eacute;, branchement, d&eacute;claration Enedis</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie&nbsp;:</strong> d&eacute;marches v&eacute;rifi&eacute;es sur la base des proc&eacute;dures publi&eacute;es par Enedis (d&eacute;claration CACSI, informations d&eacute;m&eacute;nagement) et des conditions g&eacute;n&eacute;rales des fournisseurs d&apos;&eacute;lectricit&eacute; (r&eacute;siliation sans pr&eacute;avis). Aucune proc&eacute;dure officielle de &laquo;&nbsp;retrait&nbsp;&raquo; d&apos;une CACSI n&apos;&eacute;tant publi&eacute;e par Enedis au moment de la r&eacute;daction, nous recommandons de contacter directement Enedis en cas de doute sur votre situation.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
