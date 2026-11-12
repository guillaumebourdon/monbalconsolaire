import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { withCanonicalOg } from '@/lib/metadata';
import { calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, calculateTotalSavings25Years, KWH_PRICE_LABEL } from '@/lib/pricing';
import { PRODUCTS, priceLabel } from '@/data/products';
import ORIENT from '@/data/pvgis-orientations.json';

// PVGIS 5.3 par orientation (scripts/pvgis-orientations.mjs) : 800 Wc, 30° et 90°, 4 préfectures.
type OrRes = { orientation: string; angle: number; E_y: number; E_m: number[] };
const OR = ORIENT as unknown as { meta: { interrogeLe: string }; villes: Record<string, { ville: string; resultats: Record<string, OrRes> }> };
const VILLES_OR = ['59', '75', '69', '13'].map((c) => OR.villes[c]);
const ORIENTATIONS = ['sud', 'sud-est', 'sud-ouest', 'est', 'ouest', 'nord'];
const ORIENT_LABEL: Record<string, string> = { sud: 'Sud', 'sud-est': 'Sud-est', 'sud-ouest': 'Sud-ouest', est: 'Est', ouest: 'Ouest', nord: 'Nord' };
const ey = (code: string, o: string, a: 30 | 90) => OR.villes[code].resultats[`${o}-${a}`].E_y;
const dec = (code: string, o: string, a: 30 | 90) => Math.round(OR.villes[code].resultats[`${o}-${a}`].E_m[11]);
const pctSud = (code: string, o: string, a: 30 | 90) => Math.round((ey(code, o, a) / ey(code, 'sud', 30)) * 100);
const PVGIS_OR_DATE = OR.meta.interrogeLe.split('-').reverse().join('/');

// Tableau calculé au build : Sunology PLAY à Lyon, coefficients d'orientation de la méthodologie du site.
const PLAY = PRODUCTS['sunology-play'];
const fr = (n: number) => n.toLocaleString('fr-FR');
const orient = (coef: number) => {
  const input = { kitPriceEur: PLAY.priceEur, kitPowerWc: PLAY.powerWc, orientationCoef: coef };
  return {
    production: calculateProductionKwh(input),
    savings: Math.round(calculateFirstYearSavings(input)),
    roi: calculateROIYears(input),
    total25: calculateTotalSavings25Years(input),
  };
};
const SUD = orient(1);
const SUDEO = orient(0.95);
const EO = orient(0.8);
const NORD = orient(0.5);
// Panneau vertical plein nord à Lyon : coefficient PVGIS (nord 90° / sud 30°) appliqué à la méthode du site.
const COEF_NORD_VERTICAL = Math.round((ey('69', 'nord', 90) / ey('69', 'sud', 30)) * 100) / 100;
const NORD_VERTICAL = orient(COEF_NORD_VERTICAL);
const ROWS: [string, number, ReturnType<typeof orient>, boolean][] = [
  ['Sud', 1, SUD, true],
  ['Sud-Est', 0.95, SUDEO, false],
  ['Sud-Ouest', 0.95, SUDEO, false],
  ['Est', 0.8, EO, false],
  ['Ouest', 0.8, EO, false],
  ['Nord', 0.5, NORD, false],
];

export const metadata: Metadata = withCanonicalOg({
  title: 'Orientation panneau solaire balcon : sud, est, ouest, nord',
  description: 'Sud, est, ouest, nord, vertical : production PVGIS à Lille, Paris, Lyon et Marseille, effet de l\'ombre et cas où un balcon nord ne vaut pas le coup.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/orientation-panneau-solaire-balcon',
  },
});

const faqData = [
  { question: 'Quelle est la meilleure orientation pour un panneau solaire ?', answer: 'Plein sud est l\'orientation idéale en France métropolitaine : elle capte le maximum de soleil tout au long de la journée. C\'est 100% du potentiel de production.' },
  { question: 'Un panneau solaire orienté est ou ouest est-il rentable ?', answer: `Oui. Un panneau orienté est ou ouest produit environ 80 % d'un panneau plein sud. C'est moins optimal mais toujours rentable : pour un Sunology PLAY à ${priceLabel('sunology-play')} à Lyon, le ROI passe d'environ ${fr(SUD.roi)} ans (sud) à ${fr(EO.roi)} ans (est/ouest).` },
  { question: 'Un panneau solaire orienté nord vaut-il le coup ?', answer: `Rarement. Incliné à 30°, un panneau nord produit environ la moitié d'un panneau sud (51 à 57 % selon PVGIS) et le ROI d'un Sunology PLAY à Lyon atteint ${fr(NORD.roi)} ans, au-delà de notre seuil de 12 ans. Fixé verticalement sur un garde-corps nord, il ne produit plus que ${Math.round(COEF_NORD_VERTICAL * 100)} % : nous le déconseillons.` },
  { question: 'Quelle inclinaison choisir pour son panneau ?', answer: 'En France, l\'inclinaison optimale est de 30-35° par rapport à l\'horizontale. En été, un angle plus faible (27°) est meilleur. En hiver, un angle plus élevé (40-42°) compense la hauteur réduite du soleil.' },
  { question: 'Mon balcon est partiellement ombragé, que faire ?', answer: 'Une ombre, même partielle, pèse plus que sa surface, car les cellules sont câblées en série. Observez l\'emplacement toutes les deux heures un jour de soleil, placez le panneau dans la zone qui reste le plus longtemps au soleil direct, et privilégiez un panneau à demi-cellules.' },
  { question: 'Un panneau vertical sur un garde-corps produit-il beaucoup moins ?', answer: `Plein sud, il garde environ 68 à 73 % de la production d'un panneau incliné à 30° selon PVGIS (${fr(ey('69', 'sud', 90))} contre ${fr(ey('69', 'sud', 30))} kWh par an à Lyon pour 800 W), et il produit davantage en hiver : ${dec('69', 'sud', 90)} kWh contre ${dec('69', 'sud', 30)} kWh en décembre à Lyon.` },
  { question: 'Est ou ouest : quelle orientation produit le plus ?', answer: `Sur l'année, presque la même chose : ${fr(ey('69', 'est', 30))} kWh à l'est et ${fr(ey('69', 'ouest', 30))} kWh à l'ouest à Lyon pour 800 W inclinés (PVGIS). Choisissez selon vos heures de présence : le matin pour l'est, l'après-midi pour l'ouest.` },
];

export default function OrientationPage() {
  return (
    <>
      <SchemaArticle title="Orientation d'un panneau solaire de balcon : sud, est, ouest, nord et ombre" description="Production PVGIS selon l'orientation et l'inclinaison, balcon est/ouest, balcon nord et ombre." url="https://monbalconsolaire.fr/guide/orientation-panneau-solaire-balcon" datePublished="2026-03-29" dateModified="2026-11-12" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Guides', href: '/guide' }, { label: 'Orientation' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Orientation' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Orientation d&apos;un panneau solaire de balcon&nbsp;: sud, est/ouest, nord et ombre</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Sud, est, ouest ou nord, panneau inclin&eacute; ou fix&eacute; &agrave; la verticale, ombre d&apos;un immeuble voisin&nbsp;: notre guide de r&eacute;f&eacute;rence, avec la production calcul&eacute;e par PVGIS pour quatre villes et ce que chaque cas change pour votre kit.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>29 mars 2026</span><span>&middot;</span><span>Mis &agrave; jour le 12 novembre 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le résumé en 10 secondes</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Panneau inclin&eacute; &agrave; 30&deg;&nbsp;: sud = 100 %, sud-est/sud-ouest &asymp; 93 &agrave; 95 %, est/ouest &asymp; 77 &agrave; 82 %, nord &asymp; 51 &agrave; 57 % (PVGIS, quatre villes). Fix&eacute; &agrave; la verticale sur un garde-corps, un panneau plein sud garde 68 &agrave; 73 % de cette production, et un panneau vertical plein nord seulement {pctSud('13', 'nord', 90)} &agrave; {pctSud('59', 'nord', 90)} %. L&apos;ombre d&apos;un immeuble ou d&apos;un arbre peut co&ucirc;ter plus que l&apos;orientation.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;impact de l&apos;orientation : les chiffres</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">L&apos;orientation de votre balcon détermine combien d&apos;heures de soleil direct votre panneau reçoit chaque jour. En France, le soleil se lève à l&apos;est, culmine au sud à midi, et se couche à l&apos;ouest. Un balcon orienté sud reçoit donc le soleil pendant la plus grande partie de la journée.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Voici les coefficients réels par orientation, basés sur les données PVGIS (Commission européenne) pour la France métropolitaine :</p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Orientation</th>
                    <th className="text-center p-3">Coefficient</th>
                    <th className="text-center p-3">Production ({PLAY.powerWc}&nbsp;W, Lyon)</th>
                    <th className="text-center p-3">&Eacute;conomies (1<sup>re</sup> ann&eacute;e)</th>
                    <th className="text-center p-3 rounded-tr-xl">ROI (kit {priceLabel('sunology-play')})</th>
                  </tr></thead>
                  <tbody>
                    {ROWS.map(([o, c, r, best], i) => (
                      <tr key={i} className={`border-b border-border-light ${best ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{o} {best && <span className="badge-green ml-2">Optimal</span>}</td>
                        <td className="text-center p-3 font-mono text-sm font-medium">{Math.round(c * 100)}&nbsp;%</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{fr(r.production)} kWh</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{r.savings} &euro;</td>
                        <td className="text-center p-3 font-mono text-sm">{fr(r.roi)} ans</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Données PVGIS, productible 1 200 kWh/kWc (Lyon), tarif EDF {KWH_PRICE_LABEL}, coefficient de pertes 0,85, autoconsommation 85 %, inflation 3,3 %/an, dégradation des panneaux 0,5 %/an. Coefficients d&apos;orientation de notre <Link href="/methodologie" className="text-green hover:underline">méthodologie</Link>. Prix vérifié le 5 novembre 2026.</p>
            </section>

            <section id="pvgis">
              <h2 className="text-2xl font-extrabold mb-4">Ce que dit PVGIS, ville par ville</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Nous avons interrog&eacute; PVGIS 5.3 (Commission europ&eacute;enne) pour un kit de 800&nbsp;W au point de quatre pr&eacute;fectures, dans les six orientations, en pose inclin&eacute;e &agrave; 30&deg; et en pose verticale (garde-corps). Production annuelle en kWh, et entre parenth&egrave;ses le pourcentage par rapport au m&ecirc;me kit plein sud inclin&eacute;&nbsp;:</p>
              {([30, 90] as const).map((a) => (
                <div key={a} className="overflow-x-auto -mx-5 md:mx-0 my-4">
                  <table className="w-full text-sm border-collapse min-w-[560px]">
                    <caption className="text-left text-sm font-semibold mb-2">{a === 30 ? 'Panneau inclin\u00e9 \u00e0 30\u00b0' : 'Panneau vertical (90\u00b0), fix\u00e9 au garde-corps'}</caption>
                    <thead>
                      <tr className="border-b-2 border-green/20 bg-cream/50">
                        <th className="p-2 text-left font-semibold">Orientation</th>
                        {VILLES_OR.map((v) => <th key={v.ville} className="p-2 text-right font-semibold">{v.ville}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {ORIENTATIONS.map((o, i) => (
                        <tr key={o} className={`border-b border-border-light ${i % 2 ? 'bg-cream/40' : ''}`}>
                          <td className="p-2 font-semibold">{ORIENT_LABEL[o]}</td>
                          {['59', '75', '69', '13'].map((c) => (
                            <td key={c} className="p-2 text-right font-mono whitespace-nowrap">{fr(ey(c, o, a))} <span className="text-stone text-xs">({pctSud(c, o, a)}&nbsp;%)</span></td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              <p className="text-xs text-stone mb-4">Source&nbsp;: PVGIS 5.3, API PVcalc (JRC, Commission europ&eacute;enne), base PVGIS-SARAH3, 800&nbsp;Wc, pertes 14 %, interrog&eacute; le {PVGIS_OR_DATE}. Points de calcul&nbsp;: centre de Lille, Paris, Lyon et Marseille. Ces chiffres ne tiennent pas compte de l&apos;ombre des b&acirc;timents voisins.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Deux enseignements. D&apos;abord, l&apos;&eacute;cart entre orientations est plus fort dans le Sud&nbsp;: &agrave; Marseille, un panneau est inclin&eacute; garde {pctSud('13', 'est', 30)} % du plein sud, contre {pctSud('59', 'est', 30)} % &agrave; Lille. Ensuite, la pose verticale change tout pour le nord&nbsp;: inclin&eacute; &agrave; 30&deg;, un panneau nord produit encore {fr(ey('75', 'nord', 30))} kWh par an &agrave; Paris&nbsp;; fix&eacute; verticalement sur un garde-corps orient&eacute; nord, il tombe &agrave; {fr(ey('75', 'nord', 90))} kWh.</p>
              <p className="text-charcoal-light leading-relaxed">En hiver, la verticale plein sud prend l&apos;avantage&nbsp;: en d&eacute;cembre &agrave; Lyon, {dec('69', 'sud', 90)} kWh en vertical contre {dec('69', 'sud', 30)} kWh inclin&eacute;. Le d&eacute;tail mois par mois pour les 96 pr&eacute;fectures est sur nos pages r&eacute;gionales, par exemple <Link href="/solaire-balcon/region/ile-de-france" className="text-green hover:underline">&Icirc;le-de-France</Link> ou <Link href="/solaire-balcon/region/auvergne-rhone-alpes" className="text-green hover:underline">Auvergne-Rh&ocirc;ne-Alpes</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Orientation par orientation : notre analyse</h2>
              <div className="space-y-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-lg text-green mb-2">Sud — L&apos;orientation idéale (100%)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">C&apos;est le jackpot. Votre panneau reçoit le soleil de 9h à 17h en été, avec un pic à midi. La production est maximale et le ROI le plus rapide. Si votre balcon est plein sud, n&apos;hésitez pas une seconde.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Astuce :</strong> en exposition sud, une inclinaison de 30-35° est optimale toute l&apos;année. Vous pouvez laisser le panneau fixe sans ajuster par saison. Si votre kit est livr&eacute; sans ch&acirc;ssis r&eacute;glable, un <Link href="/blog/support-fixation-panneau-solaire-balcon" className="text-green hover:underline">support inclinable pour panneau solaire de balcon</Link> permet de tenir cet angle.</p>
                </div>

                <div className="card-lg">
                  <h3 className="font-bold text-lg mb-2">Sud-Est / Sud-Ouest — Excellent (95 %)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Seulement 5 % de moins que le plein sud. La différence est quasi imperceptible sur la facture (environ {SUD.savings - SUDEO.savings}&nbsp;€/an de moins). C&apos;est une excellente orientation pour le solaire.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Particularité sud-est :</strong> la production est concentrée le matin (7h-14h). Idéal si vos appareils énergivores tournent le matin.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-1"><strong>Particularité sud-ouest :</strong> la production est concentrée l&apos;après-midi (11h-18h). Idéal si vous êtes chez vous en fin de journée.</p>
                </div>

                <div className="card-lg">
                  <h3 className="font-bold text-lg mb-2">Est / Ouest — Correct (80%)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">20% de moins que le sud, mais toujours rentable. Le ROI passe d&apos;environ {fr(SUD.roi)} ans à {fr(EO.roi)} ans pour un kit à {priceLabel('sunology-play')}. Sur 25 ans, vous économisez quand même environ {fr(Math.round(EO.total25 / 100) * 100)}&nbsp;€.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Conseil :</strong> en exposition est ou ouest, un kit moins cher réduit le risque. Notre <Link href="/comparatif/kit-solaire-petit-budget" className="text-green hover:underline">comparatif des kits à petit budget</Link> liste ceux qui sont disponibles aujourd&apos;hui (le Beem Kit 300W à 199&nbsp;€ est en rupture chez Beem au 5 novembre 2026).</p>
                </div>

                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-lg text-amber-dark mb-2">Nord — Déconseillé (50 %)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Un balcon plein nord ne reçoit quasiment jamais de soleil direct. La production est réduite de moitié environ et le ROI atteint {fr(NORD.roi)} ans pour un kit à {priceLabel('sunology-play')}. Sauf si vous avez un très grand balcon avec une zone partiellement exposée, le solaire n&apos;est pas recommandé en exposition nord.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Alternative :</strong> si vous avez accès à un mur latéral orienté est ou ouest, un kit avec fixation murale (option proposée par Sunology pour le PLAY) peut transformer une situation nord en situation est/ouest.</p>
                </div>
              </div>
            </section>

            <section id="est-ouest">
              <h2 className="text-2xl font-extrabold mb-4">Balcon est ou ouest&nbsp;: production et choix</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Sur l&apos;ann&eacute;e, est et ouest se valent presque&nbsp;: &agrave; Lyon, PVGIS donne {fr(ey('69', 'est', 30))} kWh &agrave; l&apos;est et {fr(ey('69', 'ouest', 30))} kWh &agrave; l&apos;ouest pour 800&nbsp;W inclin&eacute;s, &agrave; Paris {fr(ey('75', 'est', 30))} et {fr(ey('75', 'ouest', 30))} kWh. La diff&eacute;rence est dans l&apos;heure de production&nbsp;: le matin pour un balcon est, l&apos;apr&egrave;s-midi et la soir&eacute;e d&apos;&eacute;t&eacute; pour un balcon ouest.</p>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mb-4 pl-5">
                <li>&bull; <strong>Choisissez selon vos horaires</strong>&nbsp;: chez vous le matin, l&apos;est convient&nbsp;; rentr&eacute; en fin de journ&eacute;e, l&apos;ouest couvre mieux vos consommations. Programmez lave-linge et lave-vaisselle sur ces heures.</li>
                <li>&bull; <strong>Visez un kit peu cher</strong>&nbsp;: avec environ 20 % de production en moins, le prix d&apos;achat p&egrave;se plus lourd dans le temps de retour. Pour un {PLAY.name} &agrave; {priceLabel('sunology-play')} &agrave; Lyon, notre calcul passe de {fr(SUD.roi)} ans plein sud &agrave; {fr(EO.roi)} ans en est/ouest. Voir notre <Link href="/comparatif/kit-solaire-petit-budget" className="text-green hover:underline">comparatif des kits &agrave; petit budget</Link>.</li>
                <li>&bull; <strong>V&eacute;rifiez l&apos;ombre aux bonnes heures</strong>&nbsp;: un balcon est doit &ecirc;tre d&eacute;gag&eacute; le matin, un balcon ouest l&apos;apr&egrave;s-midi. Un immeuble en face ne projette pas la m&ecirc;me ombre selon la saison.</li>
              </ul>
            </section>

            <section id="nord">
              <h2 className="text-2xl font-extrabold mb-4">Balcon nord&nbsp;: quand renoncer</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Tout d&eacute;pend de la pose. Inclin&eacute; &agrave; 30&deg;, un panneau orient&eacute; nord re&ccedil;oit encore la lumi&egrave;re diffuse du ciel&nbsp;: PVGIS lui accorde {pctSud('59', 'nord', 30)} % du plein sud &agrave; Lille et {pctSud('13', 'nord', 30)} % &agrave; Marseille. Notre calculateur retient 50 %, ce qui donne un retour sur investissement de {fr(NORD.roi)} ans pour un {PLAY.name} &agrave; Lyon.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Fix&eacute; &agrave; la verticale sur un garde-corps nord, le m&ecirc;me panneau ne voit presque jamais le soleil direct&nbsp;: {fr(ey('69', 'nord', 90))} kWh par an &agrave; Lyon pour 800&nbsp;W, soit {Math.round(COEF_NORD_VERTICAL * 100)} % du plein sud inclin&eacute;, et {dec('69', 'nord', 90)} kWh en d&eacute;cembre. Avec cette production, un {PLAY.name} ne serait pas rembours&eacute; avant {NORD_VERTICAL.roi >= 25 ? 'la fin de nos 25 ans d\u2019analyse' : `${fr(NORD_VERTICAL.roi)} ans`}. <strong>Sur un garde-corps nord, nous d&eacute;conseillons l&apos;achat.</strong></p>
              <p className="text-charcoal-light leading-relaxed">Les solutions&nbsp;: un panneau pos&eacute; au sol et inclin&eacute; vers le ciel plut&ocirc;t que vertical, un mur lat&eacute;ral orient&eacute; est ou ouest s&apos;il en existe un, ou un tout petit kit si le prix reste bas. Faites le calcul avec votre orientation exacte dans le <Link href="/calculateur" className="text-green hover:underline">calculateur</Link>&nbsp;: il signale quand un kit n&apos;est pas rentable (au-del&agrave; de 12 ans).</p>
            </section>

            <section id="ombre">
              <h2 className="text-2xl font-extrabold mb-4">L&apos;ombre&nbsp;: souvent plus p&eacute;nalisante que l&apos;orientation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Les chiffres PVGIS ci-dessus supposent un horizon d&eacute;gag&eacute; (seul le relief est pris en compte). En ville, l&apos;immeuble d&apos;en face, un arbre, le balcon du dessus ou le garde-corps lui-m&ecirc;me peuvent masquer le panneau une partie de la journ&eacute;e, et aucun outil en ligne ne le mesure &agrave; votre place.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Une ombre m&ecirc;me partielle p&egrave;se plus que sa surface. Les cellules d&apos;un panneau sont c&acirc;bl&eacute;es en s&eacute;rie&nbsp;: une zone ombr&eacute;e limite le courant de toute la cha&icirc;ne, jusqu&apos;&agrave; ce que la diode de d&eacute;rivation l&apos;isole. Les panneaux &agrave; demi-cellules (&laquo;&nbsp;half-cut&nbsp;&raquo;) divisent le panneau en deux circuits&nbsp;: si le bas est &agrave; l&apos;ombre, le haut continue de produire. C&apos;est un crit&egrave;re &agrave; regarder sur la fiche technique si votre balcon est partiellement ombrag&eacute;.</p>
              <div className="card-lg border-l-4 border-l-green">
                <h3 className="font-bold text-sm mb-2">Mesurer l&apos;ombre avant d&apos;acheter</h3>
                <ol className="text-sm text-charcoal-light space-y-1 list-decimal pl-5">
                  <li>Un jour de soleil, photographiez l&apos;emplacement pr&eacute;vu toutes les deux heures, de 8&nbsp;h &agrave; 18&nbsp;h.</li>
                  <li>Notez la plage horaire o&ugrave; le panneau serait au soleil direct, et la zone qui y reste le plus longtemps (souvent le haut du garde-corps).</li>
                  <li>Refaites l&apos;observation en hiver ou estimez-la&nbsp;: le soleil est plus bas, les ombres plus longues, et un balcon bien expos&eacute; en juin peut rester &agrave; l&apos;ombre de novembre &agrave; f&eacute;vrier.</li>
                  <li>Si le panneau est masqu&eacute; aux heures o&ugrave; il devrait le plus produire (autour de midi pour un balcon sud), revoyez l&apos;emplacement avant de revoir l&apos;orientation.</li>
                </ol>
              </div>
              <p className="text-sm text-charcoal-light mt-4">Votre kit est d&eacute;j&agrave; install&eacute; et produit moins que pr&eacute;vu&nbsp;? Notre <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green hover:underline">diagnostic en 7 points</Link> passe en revue l&apos;ombre, l&apos;angle, la salissure et le compteur.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment déterminer l&apos;orientation de votre balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Trois méthodes simples pour connaître l&apos;orientation de votre balcon :</p>
              <div className="space-y-3">
                {[
                  { t: 'La boussole du smartphone', d: 'Ouvrez l\'app Boussole sur iPhone ou une app boussole sur Android. Placez-vous face à votre balcon et notez la direction. Si l\'aiguille pointe vers 180° (sud), votre balcon est plein sud.' },
                  { t: 'Google Maps', d: 'Trouvez votre adresse sur Google Maps en vue satellite. Le nord est toujours en haut de l\'écran. Identifiez de quel côté se trouve votre balcon par rapport au bâtiment.' },
                  { t: 'L\'observation du soleil', d: 'Si votre balcon est ensoleillé entre 11h et 15h, il est orienté sud ou sud-est/sud-ouest. Si le soleil arrive le matin (avant 11h) et disparaît l\'après-midi, c\'est une orientation est. L\'inverse = ouest.' },
                ].map((m, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">{i+1}. {m.t}</h3>
                    <p className="text-xs text-charcoal-light">{m.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Testez votre orientation en 30 secondes</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur prend en compte votre ville ET votre orientation pour une estimation personnalisée.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies →</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/etude/rentabilite-kit-solaire-balcon-departement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Carte de la rentabilit&eacute; par d&eacute;partement (exposition sud)</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le potentiel de votre d&eacute;partement avant correction d&apos;orientation&nbsp;: 96 d&eacute;partements class&eacute;s</p>
                </Link>
                <Link href="/guide/erreurs-production-solaire-ete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">5 erreurs qui tuent votre production en &eacute;t&eacute;</h3>
                  <p className="text-xs text-charcoal-light mt-1">Mauvais angle estival, ombre saisonni&egrave;re, surchauffe : guide pratique juillet-ao&ucirc;t</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comment installer un kit</h3>
                  <p className="text-xs text-charcoal-light mt-1">Guide d'installation pas à pas</p>
                </Link>
                <Link href="/blog/production-solaire-ete-vs-hiver" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Production été vs hiver : données PVGIS pour 5 villes</h3>
                  <p className="text-xs text-charcoal-light mt-1">Courbes mensuelles et paradoxe chaleur estivale : mai/juin souvent plus efficace que juillet</p>
                </Link>
                <Link href="/blog/panneau-solaire-hiver-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Production en hiver</h3>
                  <p className="text-xs text-charcoal-light mt-1">Les données réelles</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Combien ça rapporte ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le calcul détaillé de rentabilité</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Production inf&eacute;rieure aux attentes ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic en 7 points : ombre, orientation, salissure, Linky</p>
                </Link>
                <Link href="/solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Production mois par mois dans votre r&eacute;gion</h3>
                  <p className="text-xs text-charcoal-light mt-1">PVGIS au point de chaque pr&eacute;fecture, panneau inclin&eacute; ou vertical</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> PVGIS 5.3 (Commission européenne), interrogé le {PVGIS_OR_DATE}, tarif réglementé EDF Base 6 kVA en vigueur ({KWH_PRICE_LABEL}). <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
