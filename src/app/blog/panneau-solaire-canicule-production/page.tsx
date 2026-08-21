import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Panneau solaire et canicule : impact réel sur la production en été',
  description: 'Canicule et kits solaires balcon : le coefficient de température expliqué, les pertes chiffrées, quels panneaux résistent le mieux et 5 astuces pour limiter la casse.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/panneau-solaire-canicule-production',
  },
};

const faqData = [
  {
    question: 'Un panneau solaire produit-il moins pendant une canicule ?',
    answer: 'Oui, mais le paradoxe est contre-intuitif : c\'est le soleil lui-même qui chauffe le panneau et réduit son rendement. Au-delà de 25°C de température de cellule, un panneau PERC perd ~0,40 %/°C. Par temps de canicule (38°C ambiants), la surface du panneau atteint 65-70°C, soit une perte de rendement de 16-18 %. En revanche, l\'ensoleillement record compense largement ces pertes.',
  },
  {
    question: 'Quelle est la différence entre panneau PERC et N-type en canicule ?',
    answer: 'Un panneau PERC standard a un coefficient de température de -0,35 à -0,45 %/°C. Les panneaux N-type (TOPCon ou HJT comme ceux de Sunology PLAY 2 ou EcoFlow) affichent -0,26 à -0,30 %/°C. À 70°C de cellule (canicule typique), la différence atteint 2 à 5 points de rendement, soit 16 à 40 Wh par heure en moins pour un panneau 400W PERC vs TOPCon.',
  },
  {
    question: 'Peut-on arroser ses panneaux solaires pour les refroidir ?',
    answer: 'Non. C\'est une très mauvaise idée. Le choc thermique (panneau à 70°C aspergé d\'eau froide) peut provoquer des micro-fissures dans les cellules, réduisant leur durée de vie. De plus, l\'eau du robinet laisse des dépôts calcaires qui opacifient le verre. Seul un nettoyage tôt le matin (panneau froid) avec de l\'eau déminéralisée est acceptable.',
  },
  {
    question: 'Pourquoi juin produit-il parfois plus que juillet malgré moins de soleil ?',
    answer: 'En juin, les températures ambiantes de 18-24°C maintiennent la cellule autour de 45-50°C, soit une perte de rendement de 8-10 %. En juillet, avec 30-38°C ambiants, la cellule atteint 60-70°C et perd 14-18 %. L\'ensoleillement de juin est quasi identique à juillet (voire supérieur certaines années), mais le rendement par heure de soleil est meilleur. Pour un balcon en ville exposé à la réverbération urbaine, l\'effet est amplifié.',
  },
  {
    question: 'Combien de kWh perd-on sur l\'été à cause de la chaleur ?',
    answer: 'Pour un kit 800 Wc, on estime une perte de 1 à 2 kWh par journée de canicule (>35°C). Sur un été avec 20 jours de canicule, c\'est 20-40 kWh perdus, soit 4 à 8 € d\'économies en moins. Cette perte représente 5 à 8 % de la production estivale totale — non négligeable, mais compensée par le nombre record d\'heures d\'ensoleillement de juillet-août.',
  },
  {
    question: 'Quel kit solaire de balcon résiste le mieux à la canicule ?',
    answer: 'Les kits avec panneaux N-type TOPCon ou HJT résistent mieux à la chaleur. En 2026, les meilleurs coefficients sont : Sunology PLAY 2 (-0,28 %/°C), EcoFlow PowerStream (-0,29 %/°C), Beem On 500 Wc (-0,30 %/°C). Les kits avec panneaux PERC génériques (certains kits Amazon) affichent -0,40 à -0,45 %/°C et souffrent davantage lors des canicules.',
  },
];

export default function PanneauSolaireCaniuleProductionPage() {
  return (
    <>
      <SchemaArticle
        title="Panneau solaire et canicule : impact réel sur la production en été"
        description="Canicule et kits solaires balcon : coefficient de température, pertes chiffrées, technologies et astuces pour limiter la casse."
        url="https://monbalconsolaire.fr/blog/panneau-solaire-canicule-production"
        datePublished="2026-08-21"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Panneau solaire et canicule' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Panneau solaire et canicule' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">&Eacute;t&eacute; 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Panneau solaire et canicule&nbsp;: impact r&eacute;el sur la production
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              En pleine canicule, votre kit solaire produit moins qu&apos;attendu. Ce n&apos;est pas une panne&nbsp;: c&apos;est la physique des semi-conducteurs. Voici les <strong>pertes chiffr&eacute;es</strong>, les technologies qui s&apos;en sortent le mieux et ce que vous pouvez faire concr&egrave;tement.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>21 ao&ucirc;t 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          {/* Encadré clé */}
          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">&#9888; Ce que la canicule fait &agrave; votre panneau</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Au-del&agrave; de 25&deg;C de cellule</strong>&nbsp;: perte de ~0,40&nbsp;%/&deg;C (panneaux PERC) ou ~0,28&nbsp;%/&deg;C (N-type TOPCon/HJT)</li>
              <li>&bull; <strong>Canicule typique (38&deg;C ambiants)</strong>&nbsp;: surface du panneau &agrave; 65&ndash;70&deg;C &rarr; perte de 16&ndash;18&nbsp;% sur PERC</li>
              <li>&bull; <strong>Juillet reste le meilleur mois</strong> en kWh absolus (ensoleillement compense les pertes thermiques)</li>
              <li>&bull; <strong>Juin peut d&eacute;passer juillet</strong> en rendement par heure de soleil, car les cellules sont plus fra&icirc;ches</li>
              <li>&bull; <strong>Ne jamais arroser</strong> les panneaux&nbsp;: choc thermique + d&eacute;p&ocirc;ts calcaires</li>
            </ul>
          </div>

          <div className="space-y-10">

            {/* Physique du semi-conducteur */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi la chaleur r&eacute;duit le rendement d&apos;un panneau solaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le paradoxe est bien r&eacute;el&nbsp;: la lumi&egrave;re solaire g&eacute;n&egrave;re de l&apos;&eacute;lectricit&eacute;, mais la chaleur qu&apos;elle apporte avec elle <strong>r&eacute;duit le rendement</strong> des cellules photovolta&iuml;ques.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Dans une cellule au silicium, la lumi&egrave;re lib&egrave;re des &eacute;lectrons qui cr&eacute;ent un courant. La tension (volts) produite d&eacute;pend de la <strong>diff&eacute;rence d&apos;&eacute;nergie entre deux &eacute;tats du semi-conducteur</strong> (la bande interdite ou <em>bandgap</em>). Quand la temp&eacute;rature augmente, cette bande interdite se r&eacute;tr&eacute;cit&nbsp;: les &eacute;lectrons circulent plus facilement, ce qui augmente le courant l&eacute;g&egrave;rement, mais r&eacute;duit la tension de mani&egrave;re bien plus significative. Le r&eacute;sultat net&nbsp;: <strong>moins de puissance</strong>.
              </p>
              <div className="card-lg bg-green-pale/30 border-green/10 mb-4">
                <p className="text-sm font-semibold text-green mb-2">La formule &agrave; retenir</p>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Perte&nbsp;= (T<sub>cellule</sub> &ndash; 25) &times; coefficient de temp&eacute;rature</strong>
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed mt-2">
                  Exemple (panneau PERC &agrave; &ndash;0,40&nbsp;%/&deg;C, temp. cellule 70&deg;C)&nbsp;:<br />
                  (70 &ndash; 25) &times; 0,40&nbsp;% = <strong>18&nbsp;% de perte de puissance instantan&eacute;e</strong>
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                La temp&eacute;rature de r&eacute;f&eacute;rence est <strong>25&deg;C</strong> (conditions STC, Standard Test Conditions). C&apos;est la temp&eacute;rature de cellule &agrave; laquelle les fabricants mesurent la puissance nominale. En pratique, une journ&eacute;e ensoleill&eacute;e normale porte la cellule &agrave; 45&ndash;55&deg;C, et une canicule &agrave; 65&ndash;75&deg;C.
              </p>
            </section>

            {/* Température ambiante vs température cellule */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Temp&eacute;rature ambiante vs temp&eacute;rature de cellule&nbsp;: pas la m&ecirc;me chose</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le coefficient de temp&eacute;rature s&apos;applique &agrave; la <strong>temp&eacute;rature de la cellule</strong>, pas &agrave; la temp&eacute;rature ext&eacute;rieure. La diff&eacute;rence est importante&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Temp. ambiante</th>
                      <th className="text-left p-3">Temp. cellule estim&eacute;e</th>
                      <th className="text-left p-3">Perte PERC (&ndash;0,40&nbsp;%/&deg;C)</th>
                      <th className="text-left p-3 rounded-tr-xl">Perte TOPCon (&ndash;0,28&nbsp;%/&deg;C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['25°C (printemps)', '~48°C', '~9 %', '~6 %'],
                      ['30°C (été normal)', '~55°C', '~12 %', '~8 %'],
                      ['35°C (forte chaleur)', '~62°C', '~15 %', '~10 %'],
                      ['38°C (canicule)', '~68°C', '~17 %', '~12 %'],
                      ['40°C (canicule extrême)', '~72°C', '~19 %', '~13 %'],
                    ].map(([tamb, tcell, pertePERC, perteTOPCon], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{tamb}</td>
                        <td className="p-3 text-xs text-charcoal-light">{tcell}</td>
                        <td className="p-3 text-xs font-bold text-amber-dark">{pertePERC}</td>
                        <td className="p-3 text-xs font-bold text-green">{perteTOPCon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-stone mt-2">
                Estimation base&eacute;e sur NOCT (Nominal Operating Cell Temperature) + 20&ndash;25&deg;C au-dessus de la temp. ambiante pour des panneaux fix&eacute;s sur garde-corps de balcon avec ventilation arri&egrave;re partielle.
              </p>
            </section>

            {/* Chiffres réels sur un kit de balcon */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">En pratique&nbsp;: combien perd un kit de balcon par jour de canicule&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons un <strong>kit 800 Wc orient&eacute; plein sud &agrave; Lyon</strong>, avec des panneaux PERC classiques (coefficient &ndash;0,40&nbsp;%/&deg;C). En juillet, une belle journ&eacute;e normale (25&deg;C) produit environ <strong>4,0 kWh</strong>. Lors d&apos;une journ&eacute;e de canicule (38&deg;C ambiants)&nbsp;:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { val: '4,0 kWh', label: 'Production th&eacute;orique (25&deg;C)', color: 'text-green' },
                  { val: '&ndash;17 %', label: 'Perte canicule (panneau PERC)', color: 'text-amber-dark' },
                  { val: '3,3 kWh', label: 'Production r&eacute;elle par jour de canicule', color: 'text-charcoal' },
                ].map((item, i) => (
                  <div key={i} className="card-lg bg-green-pale/30 border-green/10 text-center">
                    <div className={`text-3xl font-extrabold mb-1 ${item.color}`} dangerouslySetInnerHTML={{ __html: item.val }} />
                    <p className="text-xs text-stone leading-relaxed" dangerouslySetInnerHTML={{ __html: item.label }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-3">
                La diff&eacute;rence est de <strong>0,7 kWh par jour</strong>, soit ~0,14&nbsp;&euro; d&apos;&eacute;conomies en moins (au tarif 0,1940&nbsp;&euro;/kWh). Sur 20 jours de canicule dans l&apos;&eacute;t&eacute; 2026&nbsp;: environ <strong>14 kWh perdus, soit ~2,70&nbsp;&euro;</strong>. Pas de quoi paniquer.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                L&apos;ensoleillement record de juillet (en heures de soleil) compense partiellement ces pertes thermiques. C&apos;est pourquoi <strong>juillet reste en g&eacute;n&eacute;ral le meilleur mois de l&apos;ann&eacute;e</strong> en kWh absolus, m&ecirc;me avec les pertes canicule. Pour plus de d&eacute;tails sur les courbes mensuelles, lisez notre analyse <Link href="/blog/production-solaire-ete-vs-hiver" className="text-green hover:underline font-semibold">production solaire &eacute;t&eacute; vs hiver</Link>.
              </p>
            </section>

            {/* PERC vs TOPCon/HJT */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">PERC vs N-type TOPCon/HJT&nbsp;: quel panneau r&eacute;siste le mieux&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La g&eacute;n&eacute;ration actuelle de kits solaires balcon utilise trois technologies principales, avec des coefficients de temp&eacute;rature tr&egrave;s diff&eacute;rents&nbsp;:
              </p>
              <div className="space-y-3 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">N-type TOPCon ou HJT &mdash; le meilleur par temps chaud</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Coefficient&nbsp;: <strong>&ndash;0,26 &agrave; &ndash;0,30&nbsp;%/&deg;C</strong>. Ces technologies utilisent des couches passivantes qui r&eacute;duisent la sensibilit&eacute; thermique. En canicule, elles perdent 12&nbsp;% au lieu de 18&nbsp;% pour le PERC. Sur un ann&eacute;e compl&egrave;te, l&apos;avantage se chiffre en quelques kWh suppl&eacute;mentaires.
                  </p>
                  <p className="text-xs text-stone"><strong>Kits concern&eacute;s&nbsp;:</strong> Sunology PLAY 2 (&ndash;0,28&nbsp;%/&deg;C), <Link href="/avis/ecoflow-powerstream" className="text-green hover:underline">EcoFlow PowerStream</Link> (&ndash;0,29&nbsp;%/&deg;C), <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (&ndash;0,30&nbsp;%/&deg;C)</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">PERC mono-cristallin &mdash; le plus courant</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Coefficient&nbsp;: <strong>&ndash;0,35 &agrave; &ndash;0,40&nbsp;%/&deg;C</strong>. La majorit&eacute; des kits du march&eacute; utilisent encore du PERC. Tr&egrave;s comp&eacute;titif en termes de prix, bon rendement global, mais plus sensible aux fortes chaleurs. Les panneaux <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology CITY</Link> de premi&egrave;re g&eacute;n&eacute;ration et beaucoup de kits g&eacute;n&eacute;riques entrent dans cette cat&eacute;gorie.
                  </p>
                  <p className="text-xs text-stone"><strong>Kits concern&eacute;s&nbsp;:</strong> nombreux kits Amazon &lt;300&nbsp;&euro;, anciennes g&eacute;n&eacute;rations de kits marque</p>
                </div>
                <div className="card border-l-4 border-l-stone">
                  <h4 className="font-bold text-sm mb-2">Poly-cristallin &mdash; &agrave; &eacute;viter</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed mb-2">
                    Coefficient&nbsp;: <strong>&ndash;0,45 &agrave; &ndash;0,50&nbsp;%/&deg;C</strong>. Plus rare aujourd&apos;hui dans les kits balcon, mais encore pr&eacute;sent dans certains kits d&apos;entr&eacute;e de gamme. Rendement d&eacute;j&agrave; inf&eacute;rieur &agrave; froid, encore plus p&eacute;nalis&eacute; en &eacute;t&eacute;. &Agrave; &eacute;viter absolument.
                  </p>
                </div>
              </div>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Conseil&nbsp;:</strong> V&eacute;rifiez la fiche technique du panneau avant d&apos;acheter. Le coefficient de temp&eacute;rature est indiqu&eacute; en&nbsp;%/&deg;C ou en&nbsp;%/K dans les sp&eacute;cifications. Plus le chiffre est proche de z&eacute;ro, mieux c&apos;est.
                </p>
              </div>
            </section>

            {/* Le paradoxe été */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le paradoxe de juin&nbsp;: pourquoi mai-juin peut battre juillet</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si la chaleur r&eacute;duit le rendement, pourquoi ne pas choisir une p&eacute;riode plus fra&icirc;che&nbsp;? La r&eacute;ponse tient &agrave; deux ph&eacute;nom&egrave;nes qui s&apos;&eacute;quilibrent&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">Juin (avantage thermique)</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; Temp. ambiante&nbsp;: 18&ndash;24&deg;C</li>
                    <li>&bull; Temp. cellule&nbsp;: ~45&ndash;50&deg;C</li>
                    <li>&bull; Perte thermique&nbsp;: 8&ndash;10&nbsp;%</li>
                    <li>&bull; Heures de pointe&nbsp;: &eacute;gales &agrave; juillet</li>
                    <li>&bull; R&eacute;sultat&nbsp;: excellent rendement par heure de soleil</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Juillet (avantage ensoleillement)</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5 leading-relaxed">
                    <li>&bull; Temp. ambiante&nbsp;: 28&ndash;38&deg;C</li>
                    <li>&bull; Temp. cellule&nbsp;: 60&ndash;70&deg;C</li>
                    <li>&bull; Perte thermique&nbsp;: 14&ndash;18&nbsp;%</li>
                    <li>&bull; Heures de pointe&nbsp;: l&eacute;g&egrave;rement sup&eacute;rieures</li>
                    <li>&bull; R&eacute;sultat&nbsp;: plus de kWh absolus malgr&eacute; le rendement r&eacute;duit</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-3">
                Sur un balcon urbain tr&egrave;s expos&eacute; (r&eacute;verb&eacute;ration, chaleur accumul&eacute;e dans le b&eacute;ton), la surchauffe en juillet peut &ecirc;tre assez forte pour que <strong>juin devienne le meilleur mois</strong>. En milieu rural ou en altitude, juillet garde l&apos;avantage.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Cette nuance explique aussi pourquoi le <Link href="/guide/erreurs-production-solaire-ete" className="text-green hover:underline font-semibold">guide sur les erreurs de production en &eacute;t&eacute;</Link> recommande de surveiller la ventilation arri&egrave;re des panneaux, surtout en appartement en ville.
              </p>
            </section>

            {/* 5 astuces pratiques */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">5 fa&ccedil;ons de limiter les pertes de chaleur sur votre kit de balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Vous ne pouvez pas contr&ocirc;ler la m&eacute;t&eacute;o, mais vous pouvez optimiser votre installation pour minimiser les pertes thermiques.
              </p>
              <div className="space-y-4">
                {[
                  {
                    num: '1',
                    title: 'Laissez de l’air circuler derrière le panneau',
                    text: 'Le principal facteur de surchauffe est l’absence de ventilation arrière. Un panneau collé contre un mur plein atteindra 10-15°C de plus qu’un panneau monté sur garde-corps avec de l’air circulant. Les supports inclinés des kits comme le Sunology PLAY 2 ou le Beem On 500 Wc sont conçus pour laisser de l’espace.',
                    good: true,
                  },
                  {
                    num: '2',
                    title: 'Choisissez un panneau N-type si vous habitez dans une région chaude',
                    text: 'Si vous êtes dans le Sud de la France (PACA, Occitanie, Nouvelle-Aquitaine), préférez un kit avec panneaux TOPCon ou HJT. La différence de coefficient (-0,28 % vs -0,40 %/°C) représente plusieurs kWh supplémentaires par an sur les longues périodes caniculaires.',
                    good: true,
                  },
                  {
                    num: '3',
                    title: 'Nettoyez tôt le matin, pas en plein soleil',
                    text: 'Si vous devez nettoyer vos panneaux en été, faites-le tôt le matin quand le panneau est encore froid. L’eau, même légèrement plus froide, ne provoquera pas de choc thermique. Utilisez de l’eau déminéralisée pour éviter les dépôts calcaires qui réduisent la transparence du verre.',
                    good: true,
                  },
                  {
                    num: '4',
                    title: 'Ne jamais arroser les panneaux en pleine chaleur',
                    text: 'Un panneau à 70°C aspergé d’eau froide : c’est un choc thermique garanti. Le verre peut se fissurer, et les cellules sous-jacentes développent des micro-fissures invisibles qui dégradent durablement les performances. En plus, le calcaire laisse des traces blanchâtres.',
                    good: false,
                  },
                  {
                    num: '5',
                    title: 'Surveillez la production avec une prise connectée',
                    text: 'Une prise connectée (Tapo P110, Shelly Plug S) mesure la production en temps réel et vous permet de corréler les baisses avec les vagues de chaleur. Vous saurez exactement combien vous perdez par degré — et vous pourrez vérifier que votre installation n’a pas de défaut par ailleurs.',
                    good: true,
                  },
                ].map((item) => (
                  <div key={item.num} className={`card border-l-4 ${item.good ? 'border-l-green' : 'border-l-amber'}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 text-white ${item.good ? 'bg-green' : 'bg-amber'}`}>{item.num}</div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-charcoal-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Sunology PLAY 2"
              merchantName="Sunology"
              affiliateUrl="https://sunology.eu/collections/kits-solaires-balcon/products/sunology-play-2"
              label="Voir le PLAY 2 (TOPCon, &ndash;0,28&nbsp;%/&deg;C)"
              variant="secondary"
              position="mid-article"
            />

            {/* Quel impact annuel */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Impact annuel&nbsp;: la canicule dans le contexte global</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Il est important de <strong>relativiser</strong> les pertes dues &agrave; la chaleur dans le contexte de la production annuelle. Voici les ordres de grandeur pour un kit 800 Wc &agrave; Lyon (exposition sud)&nbsp;:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Production annuelle estim&eacute;e', val: '~820 kWh/an', sub: 'Base PVGIS, panneaux PERC' },
                  { title: 'Perte canicule (20 jours &agrave; &ndash;17&nbsp;%)', val: '~28 kWh/an', sub: 'Soit ~3,4&nbsp;% de la prod. annuelle' },
                  { title: '&Eacute;conomies annuelles (0,1940&nbsp;&euro;/kWh)', val: '~159&nbsp;&euro;/an', sub: 'Apr&egrave;s d&eacute;duction pertes canicule' },
                  { title: 'ROI estim&eacute; (kit &agrave; 450&nbsp;&euro;)', val: '~2,8 ans', sub: 'Sans aides, inflation 3,3&nbsp;%/an' },
                ].map((item, i) => (
                  <div key={i} className="card-lg bg-green-pale/30 border-green/10 text-center">
                    <div className="text-2xl font-extrabold text-amber-dark mb-1" dangerouslySetInnerHTML={{ __html: item.val }} />
                    <p className="text-xs text-stone leading-relaxed" dangerouslySetInnerHTML={{ __html: item.sub }} />
                    <p className="text-xs font-semibold text-charcoal-light mt-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed">
                En d&apos;autres termes&nbsp;: la canicule co&ucirc;te environ 5,50&nbsp;&euro; par &eacute;t&eacute; en &eacute;conomies non r&eacute;alis&eacute;es. C&apos;est n&eacute;gligeable face aux <strong>159&nbsp;&euro;/an d&apos;&eacute;conomies annuelles</strong>. Vous pouvez <Link href="/calculateur" className="text-green hover:underline font-semibold">calculer vos &eacute;conomies r&eacute;elles</Link> selon votre d&eacute;partement.
              </p>
            </section>

            {/* Micro-onduleur et chaleur */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Et le micro-onduleur, comment se comporte-t-il par grosse chaleur&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le panneau n&apos;est pas le seul composant concern&eacute;. Le <strong>micro-onduleur</strong> — qui convertit le courant continu du panneau en courant alternatif 230V — a lui aussi une temp&eacute;rature de fonctionnement maximale.
              </p>
              <div className="space-y-3 mb-4">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Hoymiles HMS et APsystems EZ1</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Temp&eacute;rature de fonctionnement max&nbsp;: <strong>65&deg;C</strong>. En pratique, le bo&icirc;tier fixé au dos du panneau (ou &agrave; proximit&eacute;) monte rarement au-del&agrave; de 55-60&deg;C. La protection thermique (mise en veille temporaire) peut s&apos;activer lors de canicules extr&ecirc;mes, entra&icirc;nant une coupure de quelques minutes. Les <Link href="/avis/hoymiles-hms-800w" className="text-green hover:underline">avis sur le Hoymiles HMS-800W</Link> mentionnent rarement ce probl&egrave;me dans les usages balcon normaux.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Signe d&apos;alerte &agrave; surveiller</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si votre application de suivi (Hoymiles S-Miles, Beem, Sunology) affiche des <strong>plages de production nulle en milieu de journ&eacute;e</strong> lors des canicules, c&apos;est probablement la protection thermique du micro-onduleur qui s&apos;active. Solution&nbsp;: am&eacute;liorer la ventilation autour du bo&icirc;tier, ou le positionner &agrave; l&apos;ombre du panneau.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Calculateur */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Calculez votre production r&eacute;elle par mois</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur int&egrave;gre les donn&eacute;es PVGIS et la m&eacute;thodologie standard (0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an) pour vous donner un ROI honn&ecirc;te selon votre situation.
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
                <Link href="/blog/production-solaire-ete-vs-hiver" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Production solaire &eacute;t&eacute; vs hiver&nbsp;: donn&eacute;es r&eacute;elles pour 5 villes</h4>
                  <p className="text-xs text-charcoal-light mt-1">Courbes mensuelles PVGIS pour Paris, Lyon, Marseille, Bordeaux et Lille. Le paradoxe de la chaleur estivale.</p>
                </Link>
                <Link href="/guide/erreurs-production-solaire-ete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon en &eacute;t&eacute;&nbsp;: 5 erreurs qui tuent votre production</h4>
                  <p className="text-xs text-charcoal-light mt-1">Ventilation, ombre saisonni&egrave;re, surchauffe onduleur, nettoyage, mauvais angle&nbsp;: les erreurs &agrave; corriger</p>
                </Link>
                <Link href="/blog/entretien-nettoyage-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Entretien et nettoyage d&apos;un panneau solaire de balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Fr&eacute;quence, produits, erreurs &agrave; &eacute;viter, impact sur la production. Guide pratique avec checklist.</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau solaire produit moins que pr&eacute;vu&nbsp;: que faire&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic en 7 points&nbsp;: ombre, orientation, salissure, chaleur. Solutions concr&egrave;tes.</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> Hellio, AJ Solar, Selectra, Adekwatts, Artyseo, Serena Energy &mdash; articles sp&eacute;cialis&eacute;s sur l&apos;impact de la canicule sur les panneaux solaires (2025&ndash;2026). Physics des semi-conducteurs&nbsp;: standard IEC 61215 (conditions STC et NOCT). Coefficient de temp&eacute;rature&nbsp;: fiches techniques Sunology, Beem, EcoFlow, Hoymiles. Tarif EDF base&nbsp;: 0,1940&nbsp;&euro;/kWh (ao&ucirc;t 2026), inflation 3,3&nbsp;%/an (CRE).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.{' '}
                <span className="italic">Contenu &agrave; vocation informative. Les pertes thermiques varient selon l&apos;installation et les conditions locales.</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
