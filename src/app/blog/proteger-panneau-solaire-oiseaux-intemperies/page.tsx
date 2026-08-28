import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Prot&eacute;ger son panneau solaire balcon des oiseaux et intemp&eacute;ries',
  description: 'Fientes, gr&ecirc;le, vent : comment prot&eacute;ger efficacement votre kit solaire de balcon. Solutions anti-oiseaux DIY, r&eacute;sistance certifi&eacute;e, assurance — tout ce qu’il faut savoir.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/proteger-panneau-solaire-oiseaux-intemperies',
  },
};

const faqData = [
  {
    question: 'Les fientes d’oiseaux endommagent-elles vraiment un panneau solaire ?',
    answer: 'Oui, doublement. D’abord par éffet d’ombre : une fiente de pigeon couvre environ 5 cm² et peut créer un « hot spot » sur la cellule concernée, réduisant la production de toute la chaîne. Ensuite par corrosion : les fientes contiennent de l’acide urique (pH 3–4) qui attaque le revêtement anti-reflet du verre trempé sur le long terme. Un nettoyage tous les 1–2 mois en présence d’oiseaux est recommandé.',
  },
  {
    question: 'Quelle solution anti-oiseaux est la plus efficace pour un kit balcon ?',
    answer: 'Pour un kit solaire de balcon (1–2 panneaux sur garde-corps), la solution la plus efficace et la moins intrusive est le « grillage de bord » en PVC ou inox fixé sur le cadre alu du panneau. Il empêche l’accès à l’espace sous le panneau sans générer d’ombre. Coût : 15–35 € en DIY. Les pics anti-oiseaux sur les bords sont complémentaires mais moins utiles pour les kits inclinés.',
  },
  {
    question: 'Un panneau solaire de balcon résiste-t-il à la grêle ?',
    answer: 'Oui, dans les limites de la norme IEC 61215 : billes de 25 mm à 23 m/s. En pratique, les grêlons de moins de 3 cm ne posent généralement pas de problème. Au-delà, des micro-fissures peuvent apparaître sans forcément être visibles. Le verre trempé de 3,2 mm (standard sur les panneaux actuels) est bien plus résistant que le verre ordinaire. En cas de grêle exceptionnelle, votre assurance habitation couvre habituellement les dommages.',
  },
  {
    question: 'Faut-il rentrer son panneau solaire en cas de tempête ?',
    answer: 'C’est précautionneux mais rarement nécessaire. Les kits balcon sont certifiés pour des charges de vent de 2 400 à 5 400 Pa (soit des vents de 200 à 468 km/h). La contrainte réelle est plutôt la solidité du support (garde-corps, fixation). Si le kit est correctement fixé, un vent de 100 km/h ne pose pas de problème. En cas d’alerte orange vent, vérifiez simplement que les fixations sont bien serrées.',
  },
  {
    question: 'Mon assurance habitation couvre-t-elle les dommages sur mon kit solaire ?',
    answer: 'Dans la grande majorité des cas, oui. Les évènements climatiques (grêle, vent violent, foudre) sont couverts par la garantie « dégâts des eaux et intempéries » de votre assurance multirisque habitation, ou par une garantie catastrophe naturelle si l’évènement est reconnu comme tel. Signalez toujours l’installation à votre assureur (une ligne dans la déclaration suffit généralement pour les kits <800 Wc).',
  },
  {
    question: 'La saleté et les feuilles mortes réduisent-elles vraiment la production ?',
    answer: 'Cela dépend du type de salissure. Un léger voile de poussière réduit la production de 2–5 % et la pluie nettoyage généralement seule. Les fientes d’oiseaux ou les feuilles humides sont bien plus problématiques : elles créent des ombres locales qui génèrent des hot spots et peuvent réduire la production de 10–25 %. Nettoyez dès que vous observez des dépôts localisés.',
  },
];

export default function ProtegerPanneauSolaireOiseauxPage() {
  return (
    <>
      <SchemaArticle
        title="Protéger son panneau solaire balcon des oiseaux et intempéries"
        description="Fientes, grêle, vent : solutions anti-oiseaux DIY, résistance certifiée et couverture assurance pour votre kit solaire de balcon."
        url="https://monbalconsolaire.fr/blog/proteger-panneau-solaire-oiseaux-intemperies"
        datePublished="2026-08-28"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Protéger panneau solaire oiseaux intempéries' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Protéger panneau solaire' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Prot&eacute;ger son panneau solaire balcon des oiseaux et intemp&eacute;ries
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Fientes de pigeons, gr&ecirc;le, vent de temp&ecirc;te&nbsp;: votre kit solaire de balcon est expos&eacute; en permanence. Voici ce qui l&apos;abime vraiment, ce qui ne pose pas de probl&egrave;me, et les <strong>solutions concr&egrave;tes</strong> &mdash; chiffr&eacute;es et class&eacute;es par co&ucirc;t.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>28 ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          {/* Encadré résumé */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">&#9888; Ce qui d&eacute;grade vraiment votre panneau</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Fientes d&apos;oiseaux</strong>&nbsp;: acide urique (pH&nbsp;3&ndash;4) + ombre localis&eacute;e &rarr; hot spots + corrosion lente du revêtement</li>
              <li>&bull; <strong>Gr&ecirc;le &gt;&nbsp;3&nbsp;cm</strong>&nbsp;: risque de microfissures sur verre trempé (norme IEC&nbsp;61215&nbsp;: jusqu&apos;&agrave; 25&nbsp;mm)</li>
              <li>&bull; <strong>Accumulation de feuilles humides</strong>&nbsp;: ombre ponctuelle = perte 10&ndash;25&nbsp;% de production</li>
              <li>&bull; <strong>Vent &gt;&nbsp;120&nbsp;km/h</strong>&nbsp;: risque si les fixations garde-corps ne sont pas serr&eacute;es</li>
              <li>&bull; <strong>Poussi&egrave;re fine</strong>&nbsp;: 2&ndash;5&nbsp;% de perte, nettoy&eacute; par la pluie en g&eacute;n&eacute;ral</li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Section 1 : Oiseaux */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les oiseaux&nbsp;: un probl&egrave;me sous-estim&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Sur un balcon en milieu urbain, les pigeons, moineaux et &eacute;tourneaux sont omnipr&eacute;sents. Un kit solaire repr&eacute;sente pour eux un abri id&eacute;al&nbsp;: le panneau inclin&eacute; cr&eacute;e un espace chaud en dessous, &agrave; l&apos;abri du vent et de la pluie.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le probl&egrave;me n&apos;est pas le bruit mais les cons&eacute;quences concr&egrave;tes pour votre production&nbsp;:
              </p>
              <div className="space-y-3 mb-6">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Fientes et hot spots</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Une fiente de pigeon s&eacute;ch&eacute;e couvre 3&ndash;8&nbsp;cm&sup2; et cr&eacute;e une ombre localis&eacute;e sur les cellules. Dans un panneau en s&eacute;rie, cette ombre force le reste du panneau &agrave; travailler pour la cellule bloqu&eacute;e, g&eacute;n&eacute;rant de la chaleur &mdash; le fameux <strong>hot spot</strong>. Sur le long terme, ces cycles r&eacute;p&eacute;t&eacute;s acc&eacute;l&egrave;rent le vieillissement des cellules.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Corrosion du revêtement anti-reflet</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Les fientes contiennent de l&apos;acide urique (pH&nbsp;3&ndash;4), proche du vinaigre blanc. Le verre trempé lui-m&ecirc;me ne craint rien, mais le revêtement anti-reflet (couche SiO₂ ou TiO₂ d&apos;environ 100&nbsp;nm) peut &ecirc;tre att&eacute;nu&eacute; sur des ann&eacute;es d&apos;exposition r&eacute;p&eacute;t&eacute;e sans nettoyage.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Nids sous le panneau</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Les mati&egrave;res v&eacute;g&eacute;tales d&apos;un nid accumulent l&apos;humidit&eacute; et peuvent bloquer la ventilation arri&egrave;re du panneau &mdash; contribuant &agrave; une augmentation de temp&eacute;rature et donc &agrave; une r&eacute;duction de rendement (voir notre article sur <Link href="/blog/panneau-solaire-canicule-production" className="text-green hover:underline font-semibold">l&apos;impact de la chaleur sur la production</Link>).
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">Solutions anti-oiseaux pour kit balcon</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le balcon offre un avantage par rapport &agrave; une installation en toiture&nbsp;: vous avez facilement acc&egrave;s au panneau. Les solutions sont simples et peu co&ucirc;teuses.
              </p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Solution</th>
                      <th className="text-left p-3">Efficacit&eacute;</th>
                      <th className="text-left p-3">Co&ucirc;t DIY</th>
                      <th className="text-left p-3 rounded-tr-xl">Difficult&eacute;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Grillage de bord alu/PVC', '★★★★★', '15–35 €', 'Facile'],
                      ['Pics anti-oiseaux inox', '★★★★☆', '10–25 €', 'Facile'],
                      ['Gel r&eacute;pulsif transparent', '★★★☆☆', '8–15 €', 'Facile'],
                      ['Filet en polypropyl&egrave;ne', '★★★★☆', '20–50 €', 'Moyen'],
                      ['Kit BirdBlocker (syst&egrave;me clips)', '★★★★★', '40–80 €', 'Facile'],
                    ].map(([sol, eff, cout, diff], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs" dangerouslySetInnerHTML={{ __html: sol }} />
                        <td className="p-3 text-xs" dangerouslySetInnerHTML={{ __html: eff }} />
                        <td className="p-3 text-xs font-bold text-green" dangerouslySetInnerHTML={{ __html: cout }} />
                        <td className="p-3 text-xs text-charcoal-light" dangerouslySetInnerHTML={{ __html: diff }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card-lg bg-green-pale/30 border-green/10 mb-6">
                <p className="text-sm font-semibold text-green mb-2">&#10003; La solution recommand&eacute;e pour un kit balcon</p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Grillage de bord en PVC ou inox</strong> fix&eacute; sur le cadre alu du panneau avec des colliers de serrage. Choisissez une maille de 5&ndash;8&nbsp;cm et une hauteur de 10&ndash;12&nbsp;cm. Le grillage doit d&eacute;passer de 2&ndash;3&nbsp;cm au-dessus du panneau pour &eacute;viter que les oiseaux ne se posent dessus. Co&ucirc;t&nbsp;: <strong>15&ndash;35&nbsp;&euro; tout compris</strong> en grande surface de bricolage. Pos&eacute; en 30 minutes.
                </p>
              </div>

              <p className="text-charcoal-light leading-relaxed">
                Pour l&apos;entretien apr&egrave;s passage d&apos;oiseaux&nbsp;: consultez notre guide complet sur l&apos;<Link href="/blog/entretien-nettoyage-panneau-solaire-balcon" className="text-green hover:underline font-semibold">entretien et nettoyage des panneaux solaires de balcon</Link>.
              </p>
            </section>

            {/* Section 2 : Grêle et vent */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Gr&ecirc;le, vent, temp&ecirc;te&nbsp;: ce que r&eacute;siste vraiment un kit balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La bonne nouvelle&nbsp;: les panneaux solaires actuels sont des produits robustes, con&ccedil;us pour 25&nbsp;ans en ext&eacute;rieur. La mauvaise&nbsp;: leur r&eacute;sistance a des limites que vous devez conna&icirc;tre.
              </p>

              <h3 className="text-xl font-bold mb-3">R&eacute;sistance &agrave; la gr&ecirc;le</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La norme de r&eacute;f&eacute;rence est la <strong>IEC&nbsp;61215</strong>, que tous les panneaux vendus en Europe doivent respecter. Elle sp&eacute;cifie une r&eacute;sistance &agrave; des billes de glace de <strong>25&nbsp;mm de diam&egrave;tre</strong> tombant &agrave; <strong>23&nbsp;m/s</strong> (83&nbsp;km/h). En pratique&nbsp;:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { val: '&lt; 20 mm', label: 'Gr&ecirc;lons l&eacute;gers', note: 'Aucun dommage attendu', color: 'text-green' },
                  { val: '20–35 mm', label: 'Gr&ecirc;lons moyens', note: 'Microfissures possibles sur panneaux fragilis&eacute;s', color: 'text-amber-dark' },
                  { val: '&gt; 35 mm', label: 'Gr&ecirc;lons gros', note: 'Risque de casse visible, assurance &agrave; activer', color: 'text-red-600' },
                ].map((item, i) => (
                  <div key={i} className="card-lg text-center">
                    <div className={`text-2xl font-extrabold mb-1 ${item.color}`} dangerouslySetInnerHTML={{ __html: item.val }} />
                    <p className="text-xs font-semibold mb-1" dangerouslySetInnerHTML={{ __html: item.label }} />
                    <p className="text-xs text-stone leading-relaxed" dangerouslySetInnerHTML={{ __html: item.note }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le verre trempé de <strong>3,2&nbsp;mm</strong> utilis&eacute; sur les panneaux actuels (Sunology, Beem, EcoFlow, Zendure) est bien plus r&eacute;sistant que le verre ordinaire. Apr&egrave;s une &eacute;pisode de gr&ecirc;le, inspectez la surface&nbsp;: des points blancs opaques ou des fissures visibles &agrave; la lumi&egrave;re du soleil rasant indiquent des micro-dommages. Pour aller plus loin, consultez notre article d&eacute;di&eacute; <Link href="/blog/kit-solaire-pluie-grele" className="text-green hover:underline font-semibold">kit solaire et gr&ecirc;le</Link>.
              </p>

              <h3 className="text-xl font-bold mb-3">R&eacute;sistance au vent</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les panneaux sont certifi&eacute;s pour des charges de vent de <strong>2&nbsp;400 &agrave; 5&nbsp;400&nbsp;Pa</strong>, ce qui correspond &agrave; des vents de 200 &agrave; 468&nbsp;km/h &mdash; bien au-del&agrave; de ce qu&apos;on peut rencontrer en France m&eacute;tropolitaine. La vraie contrainte pour un kit balcon n&apos;est pas le panneau lui-m&ecirc;me, mais <strong>la solidit&eacute; de votre garde-corps et la qualit&eacute; des fixations</strong>.
              </p>
              <div className="card-lg bg-amber-pale/30 border-amber/10 mb-4">
                <p className="text-sm font-semibold text-amber-dark mb-2">&#9888; V&eacute;rification avant alerte vent</p>
                <ul className="text-sm text-charcoal-light space-y-1">
                  <li>&bull; Serrez toutes les vis et boulons des fixations garde-corps</li>
                  <li>&bull; V&eacute;rifiez que le support n&apos;a pas d&apos;annonc&eacute;e de jeu (bougez-le : z&eacute;ro mouvement)</li>
                  <li>&bull; Si orientation r&eacute;glable&nbsp;: inclinez le panneau &agrave; plat (0&deg;) pour r&eacute;duire la prise au vent</li>
                  <li>&bull; En alerte rouge&nbsp;: d&eacute;branchez et d&eacute;montez si le support n&apos;est pas b&eacute;tonn&eacute;</li>
                </ul>
              </div>
            </section>

            {/* Section 3 : Pluie, neige, UV */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pluie, neige et UV&nbsp;: ce qui vieillit vraiment votre panneau</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Contrairement aux id&eacute;es re&ccedil;ues, la pluie est globalement <strong>une alli&eacute;e</strong>&nbsp;: elle nettoie les poussi&egrave;res fines et maintient une temp&eacute;rature de cellule plus basse lors des averses, am&eacute;liorant temporairement le rendement. La pluie fine battante sous forte inclinaison peut m&ecirc;me &eacute;liminer 70&ndash;80&nbsp;% des salissures l&eacute;g&egrave;res.
              </p>
              <div className="space-y-3 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Pluie &mdash; b&eacute;nigne</h4>
                  <p className="text-xs text-charcoal-light">IP67 &agrave; IP68 sur les bo&icirc;tiers de jonction, joints d&apos;encapsulant EVA &eacute;tanches. La pluie ne p&eacute;n&egrave;tre pas dans le panneau. Un &eacute;pisode pluvieux produit moins, mais n&apos;abime rien.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Neige &mdash; g&eacute;ralement sans cons&eacute;quence</h4>
                  <p className="text-xs text-charcoal-light">La neige fraiche fondra rapidement sur un panneau qui chauffe avec le soleil (m&ecirc;me faible en hiver). Une accumulation &gt;&nbsp;15&nbsp;cm peut &eacute;craser les cellules sur des panneaux anciens ou de mauvaise qualit&eacute;, mais les kits modernes certifi&eacute;s IEC&nbsp;61215 supportent 5&nbsp;400&nbsp;Pa de charge m&eacute;canique.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Rayonnement UV &mdash; le vrai ennemi du long terme</h4>
                  <p className="text-xs text-charcoal-light">L&apos;exposition UV constante d&eacute;grade le film EVA d&apos;encapsulage sur 20&ndash;30&nbsp;ans (jaunissement). C&apos;est un ph&eacute;nom&egrave;ne lent et in&eacute;vitable, pris en compte dans les garanties de performance (80&ndash;85&nbsp;% apr&egrave;s 25&nbsp;ans). Aucune action pr&eacute;ventive n&eacute;cessaire.</p>
                </div>
              </div>
            </section>

            {/* Section 4 : Solutions pratiques intempéries */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Solutions concr&egrave;tes pour les intemp&eacute;ries</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                En dehors de la gr&ecirc;le exceptionnelle, un kit solaire de balcon ne n&eacute;cessite pas de protection sp&eacute;ciale contre les intemp&eacute;ries. Voici ce qui peut valoir le co&ucirc;t&nbsp;:
              </p>
              <div className="space-y-4 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">Housse de protection (gr&ecirc;le)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Des housses en mousse EVA ou en tissu technique (type bâche piscine) existent pour les panneaux solaires. Prix&nbsp;: 20&ndash;60&nbsp;&euro; selon la taille. Utile uniquement si vous habitez dans une zone &agrave; fort risque gr&ecirc;le (Pyr&eacute;n&eacute;es, Sud-Ouest, Rh&ocirc;ne-Alpes). Pour la majorit&eacute; des utilisateurs, c&apos;est inutile.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">Traitement hydrophobe du verre</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Certains produits (type Rain-X ou traitements nano-c&eacute;ramiques) peuvent &ecirc;tre appliqu&eacute;s sur le verre pour am&eacute;liorer l&apos;autonettoiement. Effet&nbsp;: +2&ndash;4&nbsp;% de production en zone urbaine pollu&eacute;e, dur&eacute;e 6&ndash;12 mois. Co&ucirc;t&nbsp;: 15&ndash;30&nbsp;&euro;. &Agrave; consid&eacute;rer si votre balcon est proche d&apos;une route ou d&apos;une source de poussi&egrave;re.
                  </p>
                </div>
                <div className="card border-l-4 border-l-stone">
                  <h4 className="font-bold text-sm mb-2">D&eacute;montage saisonnier</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Inutile pour la pluie et le vent. Envisageable uniquement si vous partez plusieurs semaines et craignez une accumulation de fientes. La production hivernale vaut g&eacute;n&eacute;ralement le risque de ne rien faire.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 : Assurance */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Assurance&nbsp;: êtes-vous couvert&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La plupart des assurances multirisque habitation couvrent les d&eacute;g&acirc;ts sur votre kit solaire balcon. Voici comment &ccedil;a marche&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">&Eacute;v&egrave;nement</th>
                      <th className="text-left p-3">Couverture standard MRH</th>
                      <th className="text-left p-3 rounded-tr-xl">D&eacute;marche</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Gr&ecirc;le', 'Oui (garantie intemp&eacute;ries)', 'D&eacute;claration sous 5 jours'],
                      ['Vent violent &gt; 100 km/h', 'Oui (garantie tempête)', 'D&eacute;claration sous 5 jours'],
                      ['Foudre directe', 'Oui (garantie foudre)', 'D&eacute;claration + devis r&eacute;parateur'],
                      ['Chute d&apos;objet (branche, pot)', 'Oui si garantie chute d&apos;objets', 'V&eacute;rifier votre contrat'],
                      ['D&eacute;gradation UV progressive', 'Non (usure normale)', 'Aucune'],
                      ['Vol ou vandalisme', 'Oui si garantie vol', 'D&eacute;p&ocirc;t de plainte + d&eacute;claration'],
                    ].map(([ev, couv, dem], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs" dangerouslySetInnerHTML={{ __html: ev }} />
                        <td className="p-3 text-xs text-charcoal-light" dangerouslySetInnerHTML={{ __html: couv }} />
                        <td className="p-3 text-xs text-stone" dangerouslySetInnerHTML={{ __html: dem }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-lg bg-green-pale/30 border-green/10 mb-4">
                <p className="text-sm font-semibold text-green mb-2">&#10003; Ce que vous devez faire d&egrave;s l&apos;achat</p>
                <ul className="text-sm text-charcoal-light space-y-1">
                  <li>1. Informez votre assureur de l&apos;installation (courriel ou appel suffisent pour &lt;&nbsp;800&nbsp;Wc)</li>
                  <li>2. Conservez la facture d&apos;achat + les fiches techniques du kit</li>
                  <li>3. Prenez des photos de l&apos;installation &agrave; l&apos;&eacute;tat neuf (date sur les photos)</li>
                  <li>4. V&eacute;rifiez que le montant d&apos;indemnisation de votre garantie contenus inclut les &eacute;quipements ext&eacute;rieurs</li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Pour un guide complet sur l&apos;assurance, consultez notre article d&eacute;di&eacute;&nbsp;: <Link href="/guide/panneau-solaire-assurance-balcon" className="text-green hover:underline font-semibold">Assurance panneau solaire balcon</Link>.
              </p>
            </section>

            {/* Section 6 : Checklist entretien préventif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Checklist d&apos;entretien pr&eacute;ventif</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire de balcon n&apos;est pas une installation sans entretien. 30 minutes par trimestre suffisent pour maintenir une performance optimale&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    periode: 'Chaque mois (2 min)',
                    items: ['Coup d’œil visuel sur la surface', 'Fientes visibles → nettoyage sous 48h', 'Vérifier la production dans l’app'],
                    color: 'bg-green-pale/30 border-green/10',
                  },
                  {
                    periode: 'Tous les trimestres (15 min)',
                    items: ['Nettoyage complet eau déminéralisée + chiffon microfibre', 'Inspection des câbles (pas de fissure, pas de mordillement)', 'Vérifier serrage des fixations garde-corps'],
                    color: 'bg-green-pale/30 border-green/10',
                  },
                  {
                    periode: 'Avant l’hiver',
                    items: ['Vérifier l’absence de rouille sur le cadre alu (rare)', 'Nettoyer les joints d’étanchéité si dépôts', 'Photo de l’installation pour assurance'],
                    color: 'bg-amber-pale/30 border-amber/10',
                  },
                  {
                    periode: 'Après une tempête',
                    items: ['Inspection visuelle pour microfissures (lumière rasante)', 'Vérifier alignement du panneau', 'Tester la production sur 24h (chute anormale ?)'],
                    color: 'bg-amber-pale/30 border-amber/10',
                  },
                ].map((block, i) => (
                  <div key={i} className={`card-lg ${block.color}`}>
                    <p className="text-sm font-bold mb-2">{block.periode}</p>
                    <ul className="text-xs text-charcoal-light space-y-1">
                      {block.items.map((item, j) => <li key={j}>&bull; {item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA calculateur */}
            <div className="card-lg bg-green text-white text-center">
              <h3 className="font-extrabold text-xl mb-2">Pas encore de kit&nbsp;?</h3>
              <p className="text-white/90 text-sm mb-4">
                Notre calculateur compare 3 kits adapt&eacute;s &agrave; votre balcon — avec ROI r&eacute;el et recommandation honn&ecirc;te.
              </p>
              <Link href="/calculateur" className="inline-block bg-white text-green font-bold px-6 py-3 rounded-xl hover:bg-cream transition-colors">
                Calculer mon ROI gratuit &rarr;
              </Link>
            </div>

            <AffiliateCTA
              productName="Sunology PLAY 2"
              merchantName="Sunology"
              affiliateUrl="https://www.sunology.fr/products/sunology-play-2?ref=monbalconsolaire"
              label="Voir le Sunology PLAY 2"
              variant="inline"
              position="mid-article"
              price="749 €"
            />

            {/* À éviter si... */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;il ne faut surtout pas faire</h2>
              <ul className="space-y-2 text-charcoal-light">
                {[
                  'Arroser le panneau chaud avec de l\'eau froide — choc thermique → microfissures',
                  'Utiliser un karcher haute pression — risque d\'infiltration dans les joints',
                  'Nettoyer avec des produits acides ou alcalins (vinaigre, soude) — attaque le revêtement',
                  'Poser des branches ou objets lourds dessus — contrainte mécanique sur les cellules',
                  'Négliger les fientes localisées en se disant "la pluie les enlèvera" — fientes sèches ne partent pas seules',
                  'Déconnecter le micro-onduleur sans débrancher le panneau d\'abord — arc électrique possible',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-red-500 font-bold mt-0.5">&#10007;</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" {...(i === 0 ? { open: true } : {})}>
                    <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4 text-sm">
                      <span>{faq.question}</span>
                      <span className="text-green font-bold text-lg group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-charcoal-light leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Articles liés */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                {[
                  { href: '/blog/entretien-nettoyage-panneau-solaire-balcon', title: 'Entretien et nettoyage d’un panneau solaire de balcon', badge: 'Guide pratique' },
                  { href: '/blog/kit-solaire-pluie-grele', title: 'Kit solaire balcon : que faire quand il pleut ou grêle ?', badge: 'Guide pratique' },
                  { href: '/guide/panneau-solaire-assurance-balcon', title: 'Assurance panneau solaire balcon : ce qui est vraiment couvert', badge: 'Guide' },
                  { href: '/blog/panneau-solaire-canicule-production', title: 'Panneau solaire et canicule : impact sur la production', badge: 'Été 2026' },
                ].map((a, i) => (
                  <Link key={i} href={a.href} className="card flex items-center gap-4 hover:shadow-brand transition-shadow group">
                    <div className="flex-1">
                      <div className="badge-green text-xs mb-1">{a.badge}</div>
                      <p className="text-sm font-semibold group-hover:text-green transition-colors">{a.title}</p>
                    </div>
                    <span className="text-green font-bold flex-shrink-0">&rarr;</span>
                  </Link>
                ))}
              </div>
            </section>

            <NewsletterBanner />

            {/* Footer méthodologie */}
            <footer className="border-t border-border-light pt-6 mt-6 text-xs text-stone space-y-2">
              <p>
                <strong>M&eacute;thodologie</strong>&nbsp;: les chiffres de production et de perte mentionn&eacute;s dans cet article sont bas&eacute;s sur les donn&eacute;es PVGIS (Lyon, exposition sud, PR&nbsp;0,85) et les fiches techniques fabricants. Tarif &eacute;lectrique r&eacute;f&eacute;rence&nbsp;: 0,1940&nbsp;&euro;/kWh (EDF TRV&nbsp;2026, option Base).
              </p>
              <p>
                <strong>Transparence affiliés</strong>&nbsp;: certains liens de cet article sont des liens d&apos;affiliation. MonBalconSolaire per&ccedil;oit une commission si vous achetez via ces liens, sans co&ucirc;t suppl&eacute;mentaire pour vous. Notre analyse reste ind&eacute;pendante.
              </p>
            </footer>

          </div>
        </div>
      </article>
    </>
  );
}
