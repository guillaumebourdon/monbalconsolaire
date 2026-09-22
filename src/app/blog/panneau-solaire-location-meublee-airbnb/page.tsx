import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Kit solaire balcon en location meublée et Airbnb : ce que la loi autorise',
  description: 'Locataire, propriétaire-hôte Airbnb : règles réelles, autorisations, CACSI et rentabilité chiffrée d\'un kit plug-and-play selon votre situation.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/panneau-solaire-location-meublee-airbnb',
  },
};

const faqData = [
  {
    question: 'Un locataire peut-il installer un kit solaire plug-and-play sans autorisation ?',
    answer: 'Oui, si le kit est posé au sol sur le balcon sans fixation permanente et sans perçage. Cette installation ne constitue pas une "transformation du logement" au sens de la loi du 6 juillet 1989, donc aucune autorisation écrite du propriétaire n\'est requise. En revanche, une fixation sur garde-corps ou une installation visible de l\'extérieur entre dans une zone grise : l\'autorisation propriétaire reste conseillée pour éviter tout litige.',
  },
  {
    question: 'En tant que propriétaire-hôte Airbnb, est-ce rentable d\'installer un kit solaire ?',
    answer: 'Moins rentable que pour une résidence principale occupée. Un logement Airbnb est souvent inoccupé la nuit et parfois plusieurs jours par semaine. La production solaire couvre alors la consommation de base (frigo, veille, box) pendant ces absences, mais l\'autoconsommation directe par les voyageurs reste limitée. ROI réaliste : 10-14 ans contre 7-9 ans pour une RP pleinement occupée. L\'argument "éco-responsable" améliore l\'image mais ne change pas le calcul.',
  },
  {
    question: 'Doit-on déclarer un kit solaire à Enedis même en location ?',
    answer: 'Oui, obligatoirement. La déclaration CACSI (Convention d\'AutoConsommation Simplifiée Individuelle) auprès d\'Enedis s\'applique à toute installation raccordée au réseau, quelle que soit la situation locative. Elle est gratuite et prend 1 à 3 semaines. Sans cette déclaration, votre installation est techniquement illégale, même si le risque de contrôle est quasi nul en pratique.',
  },
  {
    question: 'Un kit solaire est-il compatible avec la sous-location Airbnb (locataire qui sous-loue) ?',
    answer: 'Oui sur le principe, mais la situation se complique : vous devez d\'abord être autorisé à sous-louer par votre propriétaire (bail), puis vérifier le règlement de copropriété. Si ces conditions sont remplies, un kit plug-and-play posé au sol ne nécessite pas d\'autorisation supplémentaire. La déclaration CACSI reste à votre nom en tant que titulaire du contrat d\'électricité.',
  },
  {
    question: 'Les voyageurs Airbnb peuvent-ils endommager le kit solaire ?',
    answer: 'Le risque est réel mais limité si le kit est fixé correctement sur le balcon. La garantie AirCover d\'Airbnb couvre les dommages matériels causés par les hôtes (jusqu\'à 3 millions d\'euros). En pratique, un panneau posé et câblé proprement est peu accessible aux voyageurs. Signalez l\'installation dans la description du logement et ajoutez une photo dans le livret d\'accueil pour éviter toute manipulation.',
  },
  {
    question: 'Peut-on déduire un kit solaire des charges en location meublée (LMNP) ?',
    answer: 'Oui, dans le régime réel de la location meublée non professionnelle (LMNP), le kit solaire est une dépense d\'amélioration énergétique amortissable. Un kit à 400 € s\'amortit généralement sur 5 à 7 ans (durée de vie comptable du matériel). En régime micro-BIC (abattement 50 %), cette déduction n\'est pas applicable individuellement. Consultez votre comptable pour votre situation spécifique.',
  },
];

export default function PanneauSolaireLocationMeubleeAirbnbPage() {
  return (
    <>
      <SchemaArticle
        title="Kit solaire balcon en location meublée et Airbnb : ce que la loi autorise"
        description="Locataire, propriétaire-hôte Airbnb : règles réelles, autorisations, CACSI et rentabilité chiffrée."
        url="https://monbalconsolaire.fr/blog/panneau-solaire-location-meublee-airbnb"
        datePublished="2026-09-22"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Kit solaire en location et Airbnb' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Kit solaire en location et Airbnb' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Location &amp; Airbnb</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon en location meubl&eacute;e et Airbnb&nbsp;: ce que la loi autorise vraiment
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Locataire en r&eacute;sidence principale, propri&eacute;taire qui loue son logement sur Airbnb, ou les deux&nbsp;: les r&egrave;gles ne sont pas les m&ecirc;mes. Ce guide d&eacute;m&ecirc;le les autorisations r&eacute;elles, les obligations l&eacute;gales et la <strong>rentabilit&eacute; chiffr&eacute;e</strong> selon votre situation.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>22 septembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          {/* Encadré situation */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">&#9888; Votre situation d&eacute;termine vos droits</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Locataire RP</strong>&nbsp;: kit posé sans fixation permanente = pas d&apos;autorisation requise</li>
              <li>&bull; <strong>Propri&eacute;taire-h&ocirc;te Airbnb</strong>&nbsp;: lib&eacute;r&eacute; de toute restriction locative, mais ROI sp&eacute;cifique</li>
              <li>&bull; <strong>Locataire qui sous-loue</strong>&nbsp;: d&eacute;pend du bail et du r&egrave;glement de copropri&eacute;t&eacute;</li>
              <li>&bull; <strong>CACSI Enedis</strong>&nbsp;: obligatoire dans tous les cas, m&ecirc;me en location</li>
              <li>&bull; <strong>Copropri&eacute;t&eacute;</strong>&nbsp;: toujours v&eacute;rifier le r&egrave;glement avant toute installation visible</li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Cas 1 : locataire résidence principale */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Cas 1&nbsp;&mdash; Locataire en r&eacute;sidence principale</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La loi du 6 juillet 1989 interdit au locataire de <em>transformer</em> le logement sans accord &eacute;crit du propri&eacute;taire. La cl&eacute; est dans la d&eacute;finition de &laquo;&nbsp;transformation&nbsp;&raquo;&nbsp;: <strong>un kit plug-and-play pos&eacute; sur le sol du balcon sans perçage ne transforme rien</strong>. Il est amovible, ne laisse aucune trace, et ne modifie pas l&apos;aspect ext&eacute;rieur du b&acirc;timent.
              </p>

              <div className="space-y-3 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">&#10003;&nbsp; Autoris&eacute; sans demande&nbsp;: installation amovible au sol</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Kit pos&eacute; sur le sol du balcon ou de la terrasse, branch&eacute; sur une prise standard, sans vis ni fixation dans les murs ou le garde-corps. Peut &ecirc;tre d&eacute;mont&eacute; en 5 minutes sans trace. La jurisprudence et les pratiques Enedis confirment ce cadre.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">&#9888;&nbsp; Zone grise&nbsp;: fixation sur garde-corps</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    La plupart des kits balcon (Sunology, Beem, EcoFlow) utilisent des fixations sur garde-corps sans perçage (serre-joints, sangles). Techniquement amovible, mais potentiellement visible depuis l&apos;ext&eacute;rieur. <strong>Recommandation&nbsp;: informer le propri&eacute;taire par &eacute;crit</strong> &mdash; la plupart ne s&apos;y opposent pas, et obtenir un accord &eacute;vite tout litige lors du d&eacute;part.
                  </p>
                </div>
                <div className="card border-l-4 border-l-stone">
                  <h4 className="font-bold text-sm mb-2">&#10007;&nbsp; N&eacute;cessite autorisation&nbsp;: fixation permanente ou modification visible</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Perçage du garde-corps ou du mur, modification de l&apos;aspect fa&ccedil;ade, installation d&apos;un c&acirc;ble apparent traversant une paroi. Ces cas entrent clairement dans la d&eacute;finition de transformation et exigent une autorisation &eacute;crite du propri&eacute;taire, voire du syndic en copropri&eacute;t&eacute;.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-3">Et le r&egrave;glement de copropri&eacute;t&eacute;&nbsp;?</h3>
              <p className="text-charcoal-light leading-relaxed mb-3">
                Le balcon est une partie privative &agrave; jouissance exclusive, mais sa fa&ccedil;ade est une partie commune. Si votre r&egrave;glement de copropri&eacute;t&eacute; interdit &laquo;&nbsp;tout objet visible depuis la rue&nbsp;&raquo; ou &laquo;&nbsp;toute modification de l&apos;aspect ext&eacute;rieur&nbsp;&raquo;, une installation visible peut &ecirc;tre contest&eacute;e en assembl&eacute;e g&eacute;n&eacute;rale. En pratique, les syndicats ferment les yeux sur les kits correctement install&eacute;s, mais la prudence s&apos;impose dans les immeubles haussmanniens ou class&eacute;s.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Pour l&apos;ensemble des r&egrave;gles applicables, consultez notre guide&nbsp;: <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline font-semibold">r&eacute;glementation panneau solaire balcon 2026</Link>.
              </p>
            </section>

            {/* CACSI obligatoire */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La d&eacute;claration CACSI&nbsp;: obligatoire m&ecirc;me en location</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Tout kit solaire raccord&eacute; au r&eacute;seau &eacute;lectrique doit faire l&apos;objet d&apos;une <strong>d&eacute;claration CACSI (Convention d&apos;AutoConsommation Simplifi&eacute;e Individuelle)</strong> aupr&egrave;s d&apos;Enedis. C&apos;est gratuit, ça prend 1 &agrave; 3 semaines, et ça n&apos;affecte pas votre contrat EDF.
              </p>
              <div className="card-lg bg-green-pale/30 border-green/10 mb-4">
                <p className="text-sm font-semibold text-green mb-2">Qui fait la d&eacute;claration&nbsp;?</p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Le <strong>titulaire du contrat d&apos;&eacute;lectricit&eacute;</strong> &mdash; c&apos;est-&agrave;-dire vous, le locataire, si vous payez EDF directement. Si les charges sont comprises dans le loyer et que le contrat est au nom du propri&eacute;taire, c&apos;est techniquement lui qui doit d&eacute;clarer. Dans les faits, la plupart des kits fonctionnent sans aucun contr&ocirc;le, mais la d&eacute;claration reste une obligation l&eacute;gale.
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                D&eacute;tail complet de la proc&eacute;dure&nbsp;: <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline font-semibold">comment faire la d&eacute;claration CACSI Enedis</Link>.
              </p>
            </section>

            {/* Cas 2 : propriétaire-hôte Airbnb */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Cas 2&nbsp;&mdash; Propri&eacute;taire-h&ocirc;te Airbnb</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Vous &ecirc;tes propri&eacute;taire&nbsp;: vous avez les mains libres pour installer ce que vous voulez dans les limites du r&egrave;glement de copropri&eacute;t&eacute; (si vous &ecirc;tes en appartement). La question n&apos;est pas l&eacute;gale mais <strong>&eacute;conomique</strong>&nbsp;: est-ce rentable avec un logement souvent inoccup&eacute; ou occup&eacute; par des voyageurs de passage&nbsp;?
              </p>

              <h3 className="text-lg font-bold mb-3">Ce que produit un kit 400 Wc dans un Airbnb parisien</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Production annuelle (Paris, plein sud)', val: '380&nbsp;kWh/an', color: 'text-green' },
                  { label: 'Consommation de base (frigo + veille)', val: '350&ndash;450&nbsp;kWh/an', color: 'text-charcoal' },
                  { label: '&Eacute;conomies annuelles estim&eacute;es', val: '65&ndash;74&nbsp;&euro;/an', color: 'text-green' },
                  { label: 'ROI (kit 379&nbsp;&euro; Beem On 500 Wc)', val: '5&ndash;7 ans', color: 'text-amber-dark' },
                ].map((item, i) => (
                  <div key={i} className="card-lg bg-green-pale/30 border-green/10 text-center">
                    <div className={`text-2xl font-extrabold mb-1 ${item.color}`} dangerouslySetInnerHTML={{ __html: item.val }} />
                    <p className="text-xs text-stone leading-relaxed" dangerouslySetInnerHTML={{ __html: item.label }} />
                  </div>
                ))}
              </div>

              <p className="text-charcoal-light leading-relaxed mb-4">
                Le calcul est favorable car un logement Airbnb consomme en permanence&nbsp;: <strong>r&eacute;frig&eacute;rateur (220&ndash;300 kWh/an), box internet (70&ndash;100 kWh/an), veille des appareils (50&ndash;80 kWh/an)</strong>. Ces consommations nocturnes ne sont pas couvertes par le solaire, mais la production diurne compense enti&egrave;rement le talon de jour. R&eacute;sultat&nbsp;: un kit 400 Wc couvre pr&egrave;s de 100&nbsp;% de la consommation hors occupation.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Pour comprendre ce m&eacute;canisme en d&eacute;tail, lisez notre analyse du <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline font-semibold">talon de consommation &eacute;lectrique</Link>.
              </p>
            </section>

            <AffiliateCTA
              productName="Beem On 500 Wc"
              merchantName="Beem"
              affiliateUrl="https://www.beemenergy.fr/products/kit-solaire-beem-on-500w"
              label="Voir le Beem On 500 Wc"
              variant="inline"
              position="mid-article"
              price="429 €"
            />

            {/* ROI comparé */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">ROI compar&eacute;&nbsp;: Airbnb vs r&eacute;sidence principale</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&apos;autoconsommation directe (production utilis&eacute;e en temps r&eacute;el) est plus faible dans un logement Airbnb que dans une r&eacute;sidence principale pleinement occup&eacute;e. Voici pourquoi le ROI diverge&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-left p-3">R&eacute;sidence principale</th>
                      <th className="text-left p-3 rounded-tr-xl">Airbnb / location meubl&eacute;e</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Taux d\'autoconsommation', '70–85 %', '40–60 %'],
                      ['Consommation de base couverte', 'Partielle (prise en charge)', '100 % (frigo + veille)'],
                      ['Excédent non utilisé', 'Inject gratuit au réseau', 'Inject gratuit au réseau'],
                      ['Économies annuelles (kit 400 Wc)', '65–80 €/an', '55–75 €/an'],
                      ['ROI estimé', '5–7 ans', '7–10 ans'],
                      ['Argument marketing', 'Non applicable', 'Oui : "logement vert"'],
                    ].map(([crit, rp, airbnb], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{crit}</td>
                        <td className="p-3 text-xs text-charcoal-light">{rp}</td>
                        <td className="p-3 text-xs text-green font-semibold">{airbnb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-stone mt-2">
                Estimation bas&eacute;e sur un kit 400 Wc, Lyon, exposition sud, tarif 0,1940&nbsp;&euro;/kWh. Un kit avec batterie am&eacute;liore nettement l&apos;autoconsommation dans les deux cas.
              </p>
            </section>

            {/* Cas 3 : locataire qui sous-loue */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Cas 3&nbsp;&mdash; Locataire qui sous-loue via Airbnb</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La situation la plus complexe. Vous &ecirc;tes locataire de votre logement et vous le sous-louez ponctuellement sur Airbnb (autoris&eacute; par la loi sous conditions strictes). Plusieurs couches de r&egrave;gles s&apos;appliquent&nbsp;:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-charcoal-light text-sm mb-4">
                <li><strong>Votre bail</strong>&nbsp;: v&eacute;rifiez que la sous-location est autoris&eacute;e. Sans clause explicite, la loi l&apos;interdit sauf accord &eacute;crit du propri&eacute;taire.</li>
                <li><strong>Le r&egrave;glement de copropri&eacute;t&eacute;</strong>&nbsp;: les r&egrave;glements adopt&eacute;s apr&egrave;s 2022 peuvent interdire la location de courte dur&eacute;e &agrave; la majorit&eacute; des deux tiers.</li>
                <li><strong>Le kit solaire lui-m&ecirc;me</strong>&nbsp;: les m&ecirc;mes r&egrave;gles qu&apos;au cas 1 s&apos;appliquent. Aucune r&egrave;gle suppl&eacute;mentaire ne s&apos;ajoute du seul fait de la sous-location.</li>
                <li><strong>La CACSI</strong>&nbsp;: toujours &agrave; votre nom, en tant que titulaire du contrat &eacute;lectrique.</li>
              </ol>
              <p className="text-charcoal-light leading-relaxed">
                En pratique&nbsp;: si votre bail et la copropri&eacute;t&eacute; autorisent la sous-location Airbnb, un kit plug-and-play pos&eacute; au sol ne pose aucun probl&egrave;me suppl&eacute;mentaire.
              </p>
            </section>

            {/* Assurance et voyageurs */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Assurance, voyageurs et kit solaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire sur le balcon est un &eacute;quipement visible et accessible. Voici ce que couvrent (ou non) les assurances et protections habituelles&nbsp;:
              </p>
              <div className="space-y-3 mb-4">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">AirCover (Airbnb) &mdash; couvre les dommages mat&eacute;riels</h4>
                  <p className="text-xs text-charcoal-light">La protection AirCover h&ocirc;te couvre les dommages caus&eacute;s par les voyageurs jusqu&apos;&agrave; 3 millions &euro;. Un panneau endommag&eacute; par un voyageur entre dans ce cadre. Gardez la facture d&apos;achat.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Assurance habitation (MRH) &mdash; v&eacute;rifiez la clause Airbnb</h4>
                  <p className="text-xs text-charcoal-light">La plupart des MRH couvrent les biens dans le logement, mais certaines excluent les dommages survenus pendant une location de courte dur&eacute;e. V&eacute;rifiez votre contrat ou souscrivez une garantie Airbnb sp&eacute;cifique.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Recommandation pratique</h4>
                  <p className="text-xs text-charcoal-light">Mentionnez le kit solaire dans la description Airbnb et dans le livret d&apos;accueil. Une photo du balcon avec l&apos;installation &eacute;vite les malentendus. Ne laissez pas le c&acirc;ble de connexion &agrave; la prise accessible si des enfants s&eacute;journent.</p>
                </div>
              </div>
            </section>

            {/* Déduction fiscale LMNP */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">D&eacute;duction fiscale en LMNP (location meubl&eacute;e)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous d&eacute;clarez vos revenus Airbnb en <strong>LMNP r&eacute;gime r&eacute;el</strong>, le kit solaire est une d&eacute;pense d&apos;am&eacute;lioration &eacute;nerg&eacute;tique amortissable. Un kit &agrave; 400&nbsp;&euro; s&apos;amortit sur 5 &agrave; 7 ans selon la dur&eacute;e de vie comptable retenue.
              </p>
              <div className="card-lg bg-green-pale/30 border-green/10 mb-4">
                <p className="text-sm font-semibold text-green mb-2">Exemple en LMNP r&eacute;el</p>
                <ul className="text-sm text-charcoal-light space-y-1">
                  <li>&bull; Kit solaire&nbsp;: 429&nbsp;&euro;</li>
                  <li>&bull; Amortissement sur 5 ans&nbsp;: 85,80&nbsp;&euro;/an en d&eacute;duction</li>
                  <li>&bull; Tranche marginale &agrave; 30&nbsp;%&nbsp;: &eacute;conomie fiscale ~26&nbsp;&euro;/an</li>
                  <li>&bull; Combin&eacute; aux &eacute;conomies &eacute;lectriques (55&ndash;70&nbsp;&euro;/an)&nbsp;: retour total ~80&ndash;95&nbsp;&euro;/an</li>
                  <li>&bull; ROI r&eacute;el avec avantage fiscal&nbsp;: <strong>4&ndash;6 ans</strong></li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                En micro-BIC (abattement forfaitaire 50&nbsp;%), la d&eacute;duction individuelle ne s&apos;applique pas. Lisez notre analyse de <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="text-green hover:underline font-semibold">rentabilit&eacute; r&eacute;elle d&apos;un panneau solaire de balcon</Link> pour les calculs de base.
              </p>
            </section>

            {/* À éviter */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter dans votre situation</h2>
              <ul className="space-y-2 text-charcoal-light text-sm">
                {[
                  'Installer sans v&eacute;rifier le r&egrave;glement de copropri&eacute;t&eacute; dans un immeuble haussmannien ou class&eacute;',
                  'Ignorer la CACSI Enedis en pensant que "personne ne v&eacute;rifie" — c\'est vrai, mais votre responsabilit&eacute; reste engag&eacute;e',
                  'Promettre &agrave; vos voyageurs Airbnb que le logement est "alimenté en énergie solaire" — l\'apport est réel mais partiel',
                  'Laisser le câble de connexion à la portée des voyageurs sans fixation propre',
                  'Acheter un kit non certifié CE pour réduire le coût — risque incendie et responsabilité en cas de sinistre',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-dark font-bold flex-shrink-0">&#10007;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA calculateur */}
            <div className="card-lg bg-green-pale/30 border-green/10 text-center my-10">
              <p className="text-green font-bold text-lg mb-2">Calculez votre ROI selon votre situation</p>
              <p className="text-charcoal-light text-sm mb-4">Notre calculateur prend en compte votre d&eacute;partement, votre exposition et votre budget pour vous recommander le kit le plus adapt&eacute;.</p>
              <Link href="/calculateur" className="btn-primary inline-block">Lancer le calculateur &rarr;</Link>
            </div>

            <AffiliateCTA
              productName="Sunology PLAY 2"
              merchantName="Sunology"
              affiliateUrl="https://www.sunology.eu/products/kit-solaire-balcon-play2"
              label="Voir le Sunology PLAY 2"
              variant="inline"
              position="after-content"
              price="449 €"
            />

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-3">
                {faqData.map((item, i) => (
                  <details key={i} className="card" open={i === 0}>
                    <summary className="font-semibold cursor-pointer text-sm leading-relaxed">{item.question}</summary>
                    <p className="text-sm text-charcoal-light leading-relaxed mt-3">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Articles liés */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Articles li&eacute;s</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/guide/reglementation-panneau-solaire-balcon-2026', label: 'Guide', title: 'R&eacute;glementation panneau solaire balcon 2026' },
                  { href: '/guide/declaration-cacsi-enedis-panneau-solaire', label: 'Guide', title: 'D&eacute;claration CACSI Enedis : mode d\'emploi' },
                  { href: '/blog/talon-consommation-solaire', label: 'Blog', title: 'Talon de consommation : comment le calculer et l\'effacer' },
                  { href: '/guide/panneau-solaire-balcon-locataire', label: 'Guide', title: 'Panneau solaire en tant que locataire' },
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="card border-l-4 border-l-green hover:shadow-md transition-shadow no-underline">
                    <span className="badge-green text-xs mb-2 inline-block">{item.label}</span>
                    <p className="font-semibold text-sm text-charcoal leading-snug" dangerouslySetInnerHTML={{ __html: item.title }} />
                  </Link>
                ))}
              </div>
            </section>

          </div>

          <NewsletterBanner />

          {/* Footer méthodologie */}
          <footer className="mt-10 pt-6 border-t border-border-light text-xs text-stone space-y-2">
            <p><strong>M&eacute;thodologie ROI</strong>&nbsp;: tarif EDF 0,1940&nbsp;&euro;/kWh (mai 2026), inflation &eacute;lectrique 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;% sans batterie, Performance Ratio 0,85, r&eacute;f&eacute;rence Lyon exposition sud sur 25 ans. Les chiffres Airbnb sont des estimations bas&eacute;es sur une consommation de base typ&icirc;que (frigo + veille + box internet) sans pr&eacute;sence de voyageurs. Votre situation r&eacute;elle peut diff&eacute;rer.</p>
            <p><strong>Transparence</strong>&nbsp;: certains liens de cet article sont des liens d&apos;affiliation (Beem, Sunology). Si vous achetez via ces liens, nous percevons une commission sans surco&ucirc;t pour vous. Nos analyses restent ind&eacute;pendantes.</p>
          </footer>

        </div>
      </article>
    </>
  );
}
