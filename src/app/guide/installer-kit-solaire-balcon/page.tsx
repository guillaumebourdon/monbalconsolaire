import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

const PAGE_URL = 'https://monbalconsolaire.fr/guide/installer-kit-solaire-balcon';

export const metadata: Metadata = {
  title: 'Installer un kit solaire balcon : étapes, fixation, prise',
  description: 'Installer un kit solaire balcon pas à pas : fixation au sol ou sur garde-corps, branchement sur prise, sécurité électrique, déclaration Enedis, erreurs.',
  alternates: {
    canonical: PAGE_URL,
  },
};

const faqData = [
  {
    question: 'Faut-il un électricien pour installer un kit solaire de balcon ?',
    answer: 'Non pour la pose et le branchement d\'un kit plug-and-play : il est conçu pour être installé par un particulier. Un électricien devient utile si votre prise extérieure n\'est pas reliée à la terre, si le circuit n\'est pas protégé par un différentiel 30 mA, ou si vous voulez un circuit dédié (recommandé au-delà d\'environ 900 W de puissance d\'onduleur).',
  },
  {
    question: 'Comment brancher un panneau solaire de balcon sur une prise ?',
    answer: 'Branchez la fiche du micro-onduleur directement sur une prise murale 16 A avec terre, protégée par un disjoncteur différentiel 30 mA. Jamais de multiprise, et évitez les rallonges : si la prise est trop loin, faites poser une prise extérieure étanche. Ne débranchez que la fiche, jamais les connecteurs MC4 côté panneau quand il fait jour.',
  },
  {
    question: 'Comment fixer un panneau solaire sur un garde-corps de balcon ?',
    answer: 'Avec le kit de fixation prévu par le fabricant (brides, colliers ou crochets adaptés à la section de la main courante), sans percer le garde-corps. Vérifiez que le garde-corps est plein et solide (béton, métal soudé) : un remplissage en verre ou en plaques légères n\'est pas fait pour reprendre la prise au vent d\'un panneau. En copropriété, la fixation au garde-corps nécessite un vote en AG.',
  },
  {
    question: 'Combien de temps faut-il pour installer un kit solaire de balcon ?',
    answer: 'Comptez 15 à 30 minutes pour un kit posé au sol (dépliage, lestage, branchement), 45 minutes à 1 h 30 pour une fixation sur garde-corps, plus 5 à 10 minutes pour l\'application de suivi. La déclaration Enedis se fait ensuite en ligne.',
  },
  {
    question: 'La norme NF C 15-100 interdit-elle de brancher un panneau solaire sur une prise ?',
    answer: 'La version de la NF C 15-100 applicable depuis le 1er septembre 2025 indique qu\'un générateur ne doit pas être connecté à un circuit terminal par un socle de prise ou une fiche (point 551.7.2). Les kits plug-and-play, équipements mobiles, se trouvent dans une zone grise : la filière (Enerplan, SER) demande une clarification, et la réponse ministérielle du 26 mai 2026 rappelle les risques sans trancher. En pratique les kits restent vendus ; limitez les risques avec une prise dédiée, un différentiel 30 mA et une puissance modérée.',
  },
  {
    question: 'Faut-il déclarer son kit solaire de balcon après l\'installation ?',
    answer: 'Oui. Tout kit branché sur le réseau doit être déclaré à Enedis via une convention d\'autoconsommation (CACSI), gratuite et en ligne. Prévenez aussi votre assureur habitation. En copropriété, informez le syndic, et faites voter l\'AG si le panneau est fixé au garde-corps ou en façade.',
  },
];

const steps = [
  {
    name: 'Choisir l\'emplacement',
    duration: '10 min',
    text: 'Repérez la zone du balcon la plus longtemps au soleil entre 10 h et 16 h, sans ombre portée (balcon du dessus, store, arbre). Orientation idéale sud, acceptable sud-est à sud-ouest. Vérifiez que le câble du micro-onduleur atteint la prise sans rallonge.',
    tip: 'Une ombre même partielle sur une rangée de cellules fait chuter la production bien plus que la surface ombrée.',
  },
  {
    name: 'Vérifier la prise et le tableau électrique',
    duration: '5 min',
    text: 'La prise doit être une prise murale 16 A avec broche de terre. Au tableau, repérez le disjoncteur du circuit et vérifiez qu\'il est protégé par un interrupteur ou disjoncteur différentiel 30 mA. Notez quels autres appareils sont sur ce circuit.',
    tip: null,
  },
  {
    name: 'Assembler le support',
    duration: '5 à 20 min',
    text: 'Dépliez ou montez le châssis selon la notice. Pour une pose au sol, réglez l\'inclinaison (souvent 3 crans entre 25 et 45°). Pour une fixation garde-corps, montez d\'abord les brides ou crochets sur le cadre du panneau, au sol, avant de le soulever.',
    tip: 'Si vous ne changez pas l\'angle selon les saisons, un réglage autour de 35° est un bon compromis à l\'année en France métropolitaine.',
    link: { href: '/blog/support-fixation-panneau-solaire-balcon', before: 'Kit livré sans châssis, ou garde-corps particulier ? Comparez les options dans notre guide ', label: 'support et fixation de panneau solaire pour balcon', after: ' (sol, garde-corps, mur).' },
  },
  {
    name: 'Poser et sécuriser le panneau',
    duration: '5 à 45 min',
    text: 'Au sol : remplissez les lests (eau ou sable) au poids indiqué par le fabricant et calez le châssis contre le garde-corps. Sur garde-corps : faites-vous aider, installez le panneau côté intérieur si possible, serrez les brides au couple indiqué et ajoutez une élingue ou un câble de sécurité si le kit le prévoit.',
    tip: 'Le sable pèse plus lourd que l\'eau à volume égal et ne gèle pas. Resserrez les fixations après la première grosse tempête.',
  },
  {
    name: 'Raccorder le panneau au micro-onduleur',
    duration: '2 min',
    text: 'Si le micro-onduleur n\'est pas pré-câblé, reliez les connecteurs MC4 du panneau aux entrées de l\'onduleur (clic audible), puis fixez l\'onduleur à l\'arrière du panneau ou sur le châssis, à l\'abri du ruissellement. Faites cette étape avant de brancher la fiche au secteur.',
    tip: null,
  },
  {
    name: 'Brancher sur la prise',
    duration: '1 min',
    text: 'Branchez la fiche directement sur la prise murale. Le micro-onduleur se synchronise avec le réseau puis commence à produire après une à quelques minutes, s\'il fait jour. Faites passer le câble sans l\'écraser dans la porte-fenêtre (passe-câble plat si besoin).',
    tip: null,
  },
  {
    name: 'Configurer l\'application de suivi',
    duration: '5 à 10 min',
    text: 'Installez l\'application du fabricant, appairez le micro-onduleur en Bluetooth puis connectez-le à votre Wi-Fi (souvent 2,4 GHz uniquement). Vérifiez que la puissance instantanée affichée est cohérente avec l\'ensoleillement du moment.',
    tip: 'Pour l\'appairage, restez près du panneau : le module radio est dans le micro-onduleur, souvent dehors.',
  },
  {
    name: 'Déclarer et assurer',
    duration: '15 min',
    text: 'Faites la déclaration d\'autoconsommation auprès d\'Enedis (CACSI), prévenez votre assureur multirisque habitation, et en copropriété informez le syndic.',
    tip: null,
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Installer un kit solaire sur un balcon',
  description: 'Les étapes pour installer un kit solaire plug-and-play sur un balcon : emplacement, vérification électrique, support, fixation, branchement, application, déclaration.',
  totalTime: 'PT1H',
  tool: [
    { '@type': 'HowToTool', name: 'Clé ou tournevis fourni avec le kit' },
    { '@type': 'HowToTool', name: 'Mètre ruban' },
    { '@type': 'HowToTool', name: 'Niveau à bulle' },
    { '@type': 'HowToTool', name: 'Smartphone' },
  ],
  supply: [
    { '@type': 'HowToSupply', name: 'Kit solaire plug-and-play (panneau, micro-onduleur, câble)' },
    { '@type': 'HowToSupply', name: 'Eau ou sable pour les lests, ou kit de fixation garde-corps' },
  ],
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${PAGE_URL}#etape-${i + 1}`,
  })),
};

const mountingRows = [
  ['Balcon profond, sol plat', 'Pose au sol lestée', 'Le plus simple, aucun perçage, pas de vote en copro en principe', 'Perte de surface au sol, ombre du garde-corps si incliné trop bas'],
  ['Garde-corps plein (béton, maçonnerie)', 'Crochets ou brides sur le rebord', 'Panneau haut, peu d\'ombre, balcon libre', 'Vote en AG en copropriété, vérifier l\'épaisseur du rebord'],
  ['Garde-corps métallique à barreaux', 'Colliers / brides sur main courante et lisse basse', 'Fixation sans perçage', 'Adapter les colliers à la section, vote en AG'],
  ['Garde-corps vitré ou plaques légères', 'Pose au sol uniquement', 'Aucune charge sur le vitrage', 'Ne pas fixer : le remplissage n\'est pas conçu pour la prise au vent'],
  ['Terrasse, toit-terrasse', 'Pose au sol lestée ou support incliné', 'Orientation et inclinaison libres', 'Ne pas percer l\'étanchéité, lest suffisant (zone exposée)'],
  ['Mur ou façade', 'Support mural vissé', 'Gain de place', 'Perçage d\'une partie commune : AG + souvent déclaration préalable'],
];

export default function InstallerKitPage() {
  return (
    <>
      <SchemaArticle
        title="Installer un kit solaire balcon : étapes, fixation et branchement"
        description="Guide d'installation d'un kit solaire plug-and-play sur balcon : fixation au sol ou garde-corps, branchement sur prise, sécurité, déclaration Enedis."
        url={PAGE_URL}
        datePublished="2026-03-28"
        dateModified="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <SchemaBreadcrumb items={[{ label: 'Guides', href: '/guide' }, { label: 'Installation pas à pas' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Installation pas à pas' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Installer un kit solaire sur son balcon : &eacute;tapes, fixation et branchement</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Vous avez re&ccedil;u votre kit : voici comment le poser (au sol ou sur le garde-corps), le brancher en s&eacute;curit&eacute;, le d&eacute;clarer et &eacute;viter les erreurs qui font perdre de la production ou posent un vrai risque.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone flex-wrap"><span>Mis &agrave; jour le 27 septembre 2026</span><span>&middot;</span><span>11 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
              <li>&rarr; <strong className="text-charcoal">Dur&eacute;e :</strong> 15 &agrave; 30 min au sol, jusqu&apos;&agrave; 1 h 30 sur garde-corps.</li>
              <li>&rarr; <strong className="text-charcoal">Prise :</strong> murale 16 A avec terre, diff&eacute;rentiel 30 mA, jamais de multiprise.</li>
              <li>&rarr; <strong className="text-charcoal">Fixation :</strong> lestage au sol ou brides sur garde-corps plein ; pas de fixation sur un vitrage.</li>
              <li>&rarr; <strong className="text-charcoal">Apr&egrave;s :</strong> d&eacute;claration Enedis (CACSI), assureur pr&eacute;venu, syndic inform&eacute; en copropri&eacute;t&eacute;.</li>
            </ul>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Avant de commencer : la check-list</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: 'Ensoleillement', d: 'Au moins 4 à 5 h de soleil direct par jour en été sur l’emplacement visé. Orientation nord : vérifiez l’intérêt avant d’installer.' },
                  { t: 'Prise à portée de câble', d: 'Prise murale avec terre accessible sans rallonge (câbles de kit : souvent 3 à 5 m, parfois 10 m).' },
                  { t: 'Circuit protégé', d: 'Différentiel 30 mA en tête du circuit. Tableau ancien sans différentiel : faites intervenir un électricien avant.' },
                  { t: 'Support adapté', d: 'Sol plat pour une pose lestée, ou garde-corps plein et solide pour une fixation. Mesurez largeur et hauteur disponibles.' },
                  { t: 'Autorisations', d: 'Copropriété : vote en AG si fixation au garde-corps. Locataire : accord du bailleur pour toute fixation.' },
                  { t: 'Wi-Fi', d: 'Signal Wi-Fi 2,4 GHz sur le balcon pour l’application de suivi (sinon répéteur).' },
                ].map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">&#10003; {c.t}</h3>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Outils et mat&eacute;riel</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-charcoal-light">
                <div className="card">
                  <p className="font-semibold text-charcoal mb-2">G&eacute;n&eacute;ralement fourni dans le kit</p>
                  <ul className="space-y-1">
                    <li>&rarr; Panneau(x) solaire(s)</li>
                    <li>&rarr; Micro-onduleur (souvent pr&eacute;-c&acirc;bl&eacute;)</li>
                    <li>&rarr; C&acirc;ble AC avec fiche secteur</li>
                    <li>&rarr; Ch&acirc;ssis ou kit de fixation</li>
                    <li>&rarr; Lests (pose au sol)</li>
                  </ul>
                </div>
                <div className="card">
                  <p className="font-semibold text-charcoal mb-2">&Agrave; pr&eacute;voir</p>
                  <ul className="space-y-1">
                    <li>&rarr; M&egrave;tre ruban et niveau &agrave; bulle</li>
                    <li>&rarr; Cl&eacute; plate ou Allen (souvent fournie)</li>
                    <li>&rarr; Eau ou sable pour les lests</li>
                    <li>&rarr; Gants (cadres coupants) et une deuxi&egrave;me personne</li>
                    <li>&rarr; Passe-c&acirc;ble plat pour la porte-fen&ecirc;tre</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Installation pas &agrave; pas : les 8 &eacute;tapes</h2>
              <ol className="space-y-6">
                {steps.map((s, i) => (
                  <li key={i} id={`etape-${i + 1}`} className="card-lg scroll-mt-24">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-green text-white flex items-center justify-center font-extrabold">{i + 1}</div>
                      <div>
                        <h3 className="font-bold text-lg">{s.name}</h3>
                        <span className="text-xs text-stone font-mono">{s.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed">{s.text}</p>
                    {s.link && (
                      <p className="text-sm text-charcoal-light leading-relaxed mt-2">
                        {s.link.before}<Link href={s.link.href} className="text-green hover:underline">{s.link.label}</Link>{s.link.after}
                      </p>
                    )}
                    {s.tip && (
                      <div className="mt-3 p-3 bg-amber-pale/30 rounded-brand text-xs text-amber-dark">
                        <strong>Astuce :</strong> {s.tip}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quelle fixation selon votre balcon ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le type de garde-corps d&eacute;cide presque tout. En cas de doute sur la solidit&eacute;, restez sur une pose au sol : un panneau de 1,7 m&sup2; offre une vraie prise au vent, et c&apos;est la fixation, pas le panneau, qui l&acirc;che en premier.</p>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[640px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Configuration</th><th className="text-left p-3">Fixation</th><th className="text-left p-3">Avantages</th><th className="text-left p-3 rounded-tr-xl">Points de vigilance</th></tr></thead>
                  <tbody>
                    {mountingRows.map(([c, f, a, v], i) => (
                      <tr key={i} className={`border-b border-border-light align-top ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3 font-semibold">{c}</td><td className="p-3">{f}</td><td className="p-3 text-xs">{a}</td><td className="p-3 text-xs">{v}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card border-l-4 border-l-amber mt-4">
                <p className="text-sm text-charcoal-light leading-relaxed"><strong className="text-charcoal">Vent :</strong> suivez le lestage minimal indiqu&eacute; par le fabricant et augmentez-le en &eacute;tage &eacute;lev&eacute;, en bord de mer ou en angle d&apos;immeuble. Un panneau inclin&eacute; au sol prend plus le vent qu&apos;un panneau vertical plaqu&eacute; au garde-corps. Apr&egrave;s une temp&ecirc;te, contr&ocirc;lez serrages et lests.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le branchement &eacute;lectrique en s&eacute;curit&eacute;</h2>
              <div className="space-y-3 mb-6">
                {[
                  { t: 'Prise murale avec terre, en direct', d: 'Une prise 16 A reliée à la terre, idéalement sur un circuit peu chargé. Une prise extérieure étanche (IP44 ou plus) posée par un électricien est la solution la plus propre si le câble ne va pas jusqu’à l’intérieur.' },
                  { t: 'Jamais de multiprise, rallonge à éviter', d: 'Une multiprise ou un enchaînement de rallonges ajoute des contacts qui chauffent. La plupart des fabricants proscrivent la multiprise et déconseillent la rallonge. Si vous n’avez pas le choix : une seule rallonge extérieure, section 2,5 mm², entièrement déroulée, connexion à l’abri de la pluie.' },
                  { t: 'Différentiel 30 mA', d: 'Obligatoire sur les circuits de prises dans une installation récente, absent sur certains tableaux anciens. C’est la protection qui coupe en cas de défaut d’isolement.' },
                  { t: 'Puissance par circuit', d: 'Le courant du panneau s’ajoute à celui du réseau dans les fils du circuit sans que le disjoncteur le voie. D’où la recommandation courante (fabricants, UFC-Que Choisir) de rester sous environ 900 W d’onduleur sur une prise standard et de passer à un circuit dédié au-delà. Deux kits : deux circuits différents.' },
                  { t: 'Ne jamais toucher les broches de la fiche', d: 'Un micro-onduleur conforme coupe sa sortie dès qu’il perd le réseau (protection de découplage). Ne démontez pas pour autant la fiche et ne débranchez jamais les connecteurs MC4 en charge, en plein soleil.' },
                ].map((e, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">{e.t}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">{e.d}</p>
                  </div>
                ))}
              </div>
              <div className="card-lg bg-cream/80 border-border">
                <h3 className="font-bold text-base mb-2">Prise standard ou prise sp&eacute;ciale : o&ugrave; en est la norme ?</h3>
                <div className="space-y-3 text-sm text-charcoal-light leading-relaxed">
                  <p><strong className="text-charcoal">En France</strong>, la NF C 15-100 applicable depuis le 1er septembre 2025 pr&eacute;voit qu&apos;&laquo; un g&eacute;n&eacute;rateur d&apos;&eacute;nergie &eacute;lectrique ne doit pas &ecirc;tre connect&eacute; &agrave; un circuit terminal par le moyen d&apos;un socle de prise ou d&apos;une fiche &raquo; (point 551.7.2). Cette norme vise les installations fixes ; les kits plug-and-play, mobiles, sont dans une zone grise. Enerplan et le SER demandent une clarification depuis fin 2024. La r&eacute;ponse du gouvernement &agrave; une question &eacute;crite, publi&eacute;e au JO du 26 mai 2026, justifie la r&egrave;gle par les risques d&apos;&eacute;lectrisation et d&apos;incendie et renvoie au guide ADEME d&apos;avril 2023 sur les kits plug &amp; play, sans cr&eacute;er d&apos;exception. Aucune prise sp&eacute;cifique n&apos;est impos&eacute;e aux particuliers &agrave; ce jour.</p>
                  <p><strong className="text-charcoal">En Allemagne</strong>, le d&eacute;bat Schuko contre prise Wieland a &eacute;t&eacute; tranch&eacute; : la norme produit DIN VDE V 0126-95 admet la fiche Schuko standard pour les Balkonkraftwerke jusqu&apos;&agrave; 800 VA d&apos;onduleur et environ 960 Wc de modules, la prise sp&eacute;ciale (type Wieland, DIN VDE V 0628-1) permettant d&apos;aller plus loin en puissance de modules. Ce n&apos;est pas transposable tel quel en France, mais c&apos;est le rep&egrave;re que suivent beaucoup de fabricants.</p>
                  <p><strong className="text-charcoal">Notre position :</strong> pour un kit de 300 &agrave; 800 W, une prise murale avec terre et diff&eacute;rentiel 30 mA sur un circuit peu charg&eacute; est le minimum. Un circuit d&eacute;di&eacute; pos&eacute; par un &eacute;lectricien (compter quelques centaines d&apos;euros) supprime l&apos;essentiel du risque et de l&apos;ambigu&iuml;t&eacute;. D&eacute;tails dans notre <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">guide r&eacute;glementation 2026</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">D&eacute;claration Enedis, assurance et copropri&eacute;t&eacute;</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">1. D&eacute;claration Enedis (CACSI)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Toute installation de production branch&eacute;e sur le r&eacute;seau doit &ecirc;tre d&eacute;clar&eacute;e, m&ecirc;me un kit de 300 W. C&apos;est gratuit, en ligne, et le surplus inject&eacute; n&apos;est pas r&eacute;mun&eacute;r&eacute;. Proc&eacute;dure d&eacute;taill&eacute;e : <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">d&eacute;claration CACSI Enedis pas &agrave; pas</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">2. Assurance habitation</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Pr&eacute;venez votre assureur par &eacute;crit : un panneau qui tombe chez le voisin du dessous engage votre responsabilit&eacute; civile. Voir <Link href="/guide/panneau-solaire-assurance-balcon" className="text-green hover:underline">ce que couvre votre assurance</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">3. Copropri&eacute;t&eacute; et bailleur</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Pose au sol : informer le syndic suffit en principe. Fixation au garde-corps ou en fa&ccedil;ade : vote en AG avant la pose. Proc&eacute;dure et mod&egrave;le de r&eacute;solution : <Link href="/guide/panneau-solaire-copropriete" className="text-green hover:underline">panneau solaire en copropri&eacute;t&eacute;</Link>. Locataire : <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline">vos droits et l&apos;accord du bailleur</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Mise en service : v&eacute;rifier que tout fonctionne</h2>
              <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
                <li>&rarr; <strong className="text-charcoal">Voyant du micro-onduleur</strong> : il clignote pendant la synchronisation puis indique la production (code couleur dans la notice).</li>
                <li>&rarr; <strong className="text-charcoal">Puissance affich&eacute;e</strong> : par ciel bien d&eacute;gag&eacute; &agrave; midi, un panneau de 450 Wc bien orient&eacute; produit typiquement 60 &agrave; 80 % de sa puissance cr&ecirc;te. Beaucoup moins : cherchez une ombre ou un mauvais contact MC4.</li>
                <li>&rarr; <strong className="text-charcoal">Compteur Linky</strong> : en plein soleil avec peu de consommation, la puissance soutir&eacute;e affich&eacute;e baisse. <Link href="/blog/linky-panneau-solaire-injection" className="text-green hover:underline">Comprendre l&apos;injection sur Linky</Link>.</li>
                <li>&rarr; <strong className="text-charcoal">Premi&egrave;re semaine</strong> : comparez la production quotidienne avec l&apos;estimation de notre calculateur pour votre d&eacute;partement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les erreurs d&apos;installation les plus courantes</h2>
              <div className="space-y-3">
                {[
                  { t: 'Brancher sur une multiprise ou une rallonge enroulée', d: 'Risque d’échauffement, le plus sérieux de la liste. Prise murale directe uniquement.' },
                  { t: 'Sous-lester le panneau', d: 'Des lests à moitié remplis, ou de l’eau qui s’évapore au fil de l’été. Remplissez au poids indiqué et contrôlez après les coups de vent.' },
                  { t: 'Fixer au garde-corps sans vote en copropriété', d: 'Le syndicat peut exiger le démontage. Faites voter avant.' },
                  { t: 'Installer derrière un garde-corps plein trop haut', d: 'Posé au sol derrière un muret de 1 m, un panneau incliné peut rester à l’ombre une partie de la journée, surtout en hiver. Mesurez avant d’acheter.' },
                  { t: 'Oublier la déclaration Enedis et l’assureur', d: 'Deux démarches gratuites qui prennent un quart d’heure et évitent un litige en cas de sinistre.' },
                  { t: 'Deux kits sur le même circuit', d: 'Les puissances s’additionnent dans les mêmes câbles. Un kit par circuit, ou circuit dédié.' },
                ].map((e, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h3 className="font-bold text-sm mb-1">&#10007; {e.t}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">{e.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Pas encore &eacute;quip&eacute; ? V&eacute;rifiez d&apos;abord le potentiel de votre balcon.</p>
              <p className="text-sm text-charcoal-light mb-4">Production et retour sur investissement selon votre d&eacute;partement et votre orientation.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="my-8">
              <AffiliateCTA
                productName="Beem On 460W"
                merchantName="Beem Energy"
                affiliateUrl="https://beemenergy.fr/products/kit-beem"
                label="Voir le Beem On 460W"
                variant="box"
                position="article_bottom"
              />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/guide/panneau-solaire-copropriete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en copropri&eacute;t&eacute; : vote en AG et mod&egrave;le</h3>
                  <p className="text-xs text-charcoal-light mt-1">Garde-corps, majorit&eacute;s, r&eacute;solution pr&ecirc;te &agrave; copier</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis pas &agrave; pas</h3>
                  <p className="text-xs text-charcoal-light mt-1">La d&eacute;marche &agrave; faire apr&egrave;s l&apos;installation</p>
                </Link>
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation pour un panneau de balcon ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;impact r&eacute;el sur la production</p>
                </Link>
                <Link href="/blog/multi-panneaux-serie-parallele" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Multi-panneaux&nbsp;: s&eacute;rie ou parall&egrave;le&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">C&acirc;blage MC4, double MPPT, disjoncteur</p>
                </Link>
                <Link href="/blog/accessoires-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Les accessoires utiles pour un kit solaire</h3>
                  <p className="text-xs text-charcoal-light mt-1">Fixations, prises connect&eacute;es, passe-c&acirc;bles</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>Sources :</strong> norme NF C 15-100 (version applicable au 1er septembre 2025, point 551.7.2) ; r&eacute;ponse minist&eacute;rielle &agrave; la question &eacute;crite n&deg; 6574, JO du 26 mai 2026 ; ADEME, guide kit photovolta&iuml;que autoconsommation plug &amp; play (avril 2023) ; Enerplan / SER, note de novembre 2024 ; DIN VDE V 0126-95 et DIN VDE V 0628-1 (Allemagne) ; notices d&apos;installation des fabricants.</p>
              <p className="text-xs text-stone leading-relaxed">Nous analysons les produits sur la base des fiches techniques et notices, sans les avoir physiquement install&eacute;s. Certains liens sont affili&eacute;s : nous touchons une commission si vous achetez, sans surco&ucirc;t pour vous. <Link href="/a-propos" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
