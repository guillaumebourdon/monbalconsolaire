import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import {
  KWH_PRICE_EUR,
  KWH_PRICE_LABEL,
  KWH_INFLATION_LABEL,
  AUTOCONSO_STANDARD,
  PERFORMANCE_RATIO,
  PVGIS_REFERENCE_LYON,
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateROIYears,
  calculateTotalSavings25Years,
} from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Kit solaire balcon : ce qu’il produit vraiment en 6 mois',
  description: 'Kit solaire balcon sur 6 mois : production mois par mois (simulation PVGIS, Lyon sud), économies en euros et retours d’utilisateurs publiés.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/bilan-6-mois-kit-solaire',
  },
};

// ─── Hypothèses de simulation ─────────────────────────────
// Kit de référence : 450 Wc, 599 € (prix public du Sunology PLAY 2, pris comme exemple).
const KIT = { kitPriceEur: 599, kitPowerWc: 450 };

// Irradiation mensuelle dans le plan du panneau, H(i)_m en kWh/m²,
// PVGIS 5.3 (base SARAH3, moyenne 2005-2023), Lyon (45,76 N ; 4,84 E), sud, inclinaison 35°.
// Sert uniquement à répartir la production annuelle de référence du site mois par mois.
const PVGIS_LYON_SUD_35 = [
  { mois: 'Janvier', h: 68.44 },
  { mois: 'Février', h: 95.63 },
  { mois: 'Mars', h: 144.14 },
  { mois: 'Avril', h: 165.39 },
  { mois: 'Mai', h: 172.5 },
  { mois: 'Juin', h: 185.0 },
  { mois: 'Juillet', h: 198.15 },
  { mois: 'Août', h: 186.53 },
  { mois: 'Septembre', h: 161.25 },
  { mois: 'Octobre', h: 118.27 },
  { mois: 'Novembre', h: 75.04 },
  { mois: 'Décembre', h: 61.77 },
];

const H_TOTAL = PVGIS_LYON_SUD_35.reduce((s, m) => s + m.h, 0);
const PROD_ANNUELLE = calculateProductionKwh(KIT);
const EUR_PAR_KWH = AUTOCONSO_STANDARD * KWH_PRICE_EUR;

const productionMensuelle = PVGIS_LYON_SUD_35.map((m) => {
  const kwh = (PROD_ANNUELLE * m.h) / H_TOTAL;
  return { mois: m.mois, kwh, eur: kwh * EUR_PAR_KWH, part: m.h / H_TOTAL };
});

// Somme de 6 mois consécutifs à partir d'un mois de départ (0 = janvier)
function fenetre6Mois(debut: number) {
  let kwh = 0;
  for (let i = 0; i < 6; i++) kwh += productionMensuelle[(debut + i) % 12].kwh;
  return { kwh: Math.round(kwh), eur: Math.round(kwh * EUR_PAR_KWH) };
}

const fenetres = [
  { label: 'Octobre → mars', note: 'Le pire scénario : on démarre avec l’hiver', ...fenetre6Mois(9) },
  { label: 'Décembre → mai', note: 'Hiver puis printemps', ...fenetre6Mois(11) },
  { label: 'Juin → novembre', note: 'Été puis automne', ...fenetre6Mois(5) },
  { label: 'Avril → septembre', note: 'Le meilleur scénario : la belle saison', ...fenetre6Mois(3) },
];

const hiver = fenetre6Mois(9);
const ete = fenetre6Mois(3);
const decMai = fenetre6Mois(11);
const ECO_AN1 = Math.round(calculateFirstYearSavings(KIT));
const ROI = calculateROIYears(KIT);
const TOTAL_25 = calculateTotalSavings25Years(KIT);
const DEC = Math.round(productionMensuelle[11].kwh);
const JUIL = Math.round(productionMensuelle[6].kwh);
const fr = (n: number) => n.toLocaleString('fr-FR');

const faqData = [
  {
    question: 'Combien produit un kit solaire de balcon en 6 mois ?',
    answer: `Selon notre simulation (kit 450 Wc, Lyon, plein sud, hypothèses du site), entre ${hiver.kwh} kWh et ${ete.kwh} kWh selon la période : ${hiver.kwh} kWh d’octobre à mars, ${ete.kwh} kWh d’avril à septembre. Sur l’année, la référence est de ${PROD_ANNUELLE} kWh. Les retours publiés par des utilisateurs dans le Sud ou avec une meilleure inclinaison sont souvent au-dessus.`,
  },
  {
    question: 'Combien économise-t-on en 6 mois ?',
    answer: `Avec ${Math.round(AUTOCONSO_STANDARD * 100)} % d’autoconsommation et un tarif de ${KWH_PRICE_LABEL}, environ ${hiver.eur} € sur un semestre d’hiver et ${ete.eur} € sur un semestre d’été, soit ~${ECO_AN1} € par an. Si personne n’est à la maison en journée et que rien n’est décalé, l’autoconsommation peut tomber nettement plus bas et les économies avec.`,
  },
  {
    question: 'Pourquoi mon kit produit-il si peu en décembre ?',
    answer: `C’est attendu. À Lyon, l’irradiation de décembre (PVGIS, sud, 35°) est environ 3 fois plus faible qu’en juillet. Pour un 450 Wc, cela donne ~${DEC} kWh en décembre contre ~${JUIL} kWh en juillet dans notre simulation. Un panneau posé à la verticale sur le garde-corps produit moins sur l’année mais de façon plus régulière.`,
  },
  {
    question: 'Le kit est-il rentabilisé au bout de 6 mois ?',
    answer: `Non. Sur un kit à ${KIT.kitPriceEur} €, 6 mois représentent au mieux ${ete.eur} € d’économies. Avec nos hypothèses (inflation du kWh ${KWH_INFLATION_LABEL}), le retour sur investissement est d’environ ${fr(ROI)} ans à Lyon, plein sud, sans ombre.`,
  },
  {
    question: 'Les retours d’utilisateurs confirment-ils ces chiffres ?',
    answer: 'Dans les grandes lignes, oui. Révolution Énergétique a publié 526 kWh sur un an pour un kit EcoFlow 400 Wc dans les Alpes-de-Haute-Provence (35°, ouest-sud-ouest), avec un pic de 68 kWh en juillet. Sur le forum Que Choisir, un utilisateur équipé de 430 Wc indique 85 % d’autoconsommation sur l’année. Un site mieux ensoleillé que Lyon produit logiquement plus que notre référence.',
  },
  {
    question: 'Avez-vous testé un kit pendant 6 mois ?',
    answer: 'Non. MonBalconSolaire n’installe pas les kits qu’il analyse. Cet article s’appuie sur une simulation transparente (PVGIS + méthodologie du site) et sur des retours d’utilisateurs publiés, cités avec leurs sources. Pour vos propres chiffres, utilisez le calculateur avec votre département et votre orientation.',
  },
];

const extLink = 'text-green hover:underline';

export default function Bilan6MoisPage() {
  return (
    <>
      <SchemaArticle
        title="Bilan sur 6 mois : ce que produit vraiment un kit solaire balcon"
        description="Production mois par mois d&apos;un kit solaire balcon 450 Wc (simulation PVGIS, Lyon sud), &eacute;conomies et retours d&apos;utilisateurs publi&eacute;s."
        url="https://monbalconsolaire.fr/blog/bilan-6-mois-kit-solaire"
        datePublished="2026-05-27"
        dateModified="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Bilan sur 6 mois' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Bilan sur 6 mois' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Simulation + retours utilisateurs</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Bilan sur 6 mois : ce que produit vraiment un kit solaire balcon
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Combien de kWh et d&apos;euros un kit de balcon rapporte-t-il sur ses 6 premiers mois ? La r&eacute;ponse d&eacute;pend surtout <strong>du mois o&ugrave; vous d&eacute;marrez</strong>. On a simul&eacute; mois par mois un kit 450 Wc &agrave; Lyon, plein sud, avec les donn&eacute;es PVGIS, puis confront&eacute; ces chiffres aux <strong>retours d&apos;utilisateurs publi&eacute;s</strong>.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>Publi&eacute; le 27 mai 2026</span>
              <span>&middot;</span>
              <span>Mis &agrave; jour le 27 septembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card border-l-4 border-l-amber bg-amber-pale/10 mb-8">
            <p className="text-sm text-charcoal-light leading-relaxed">
              <strong>Transparence :</strong> nous n&apos;avons pas install&eacute; de kit pour cet article. Les chiffres de production sont <strong>simul&eacute;s</strong> (PVGIS + <Link href="/methodologie" className={extLink}>notre m&eacute;thodologie</Link>) et les retours terrain proviennent de <strong>sources publiques cit&eacute;es</strong> en fin d&apos;article.
            </p>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le bilan en bref</h2>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="font-mono font-bold text-green text-2xl">{hiver.kwh}</div>
                <div className="text-xs text-stone mt-1">kWh oct. &rarr; mars</div>
              </div>
              <div>
                <div className="font-mono font-bold text-green text-2xl">{ete.kwh}</div>
                <div className="text-xs text-stone mt-1">kWh avr. &rarr; sept.</div>
              </div>
              <div>
                <div className="font-mono font-bold text-green text-2xl">~{ECO_AN1} &euro;</div>
                <div className="text-xs text-stone mt-1">&eacute;conomis&eacute;s par an</div>
              </div>
            </div>
            <p className="text-sm text-charcoal-light text-center">Simulation &middot; kit 450 Wc &middot; Lyon &middot; plein sud &middot; autoconsommation {Math.round(AUTOCONSO_STANDARD * 100)} %</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les hypoth&egrave;ses de la simulation</h2>
              <div className="card-lg bg-cream/40">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Kit :</strong> 450 Wc, {KIT.kitPriceEur} &euro; (puissance et prix public du <Link href="/avis/sunology-play-2" className={extLink}>Sunology PLAY 2</Link>, pris comme exemple)</li>
                  <li>&bull; <strong>Lieu :</strong> Lyon, exposition plein sud, sans ombre</li>
                  <li>&bull; <strong>Production annuelle :</strong> 0,45 kWc &times; {fr(PVGIS_REFERENCE_LYON)} kWh/kWc &times; PR {fr(PERFORMANCE_RATIO)} = <strong>{PROD_ANNUELLE} kWh/an</strong> (r&eacute;f&eacute;rence prudente du site)</li>
                  <li>&bull; <strong>R&eacute;partition mensuelle :</strong> irradiation PVGIS 5.3 (SARAH3, moyenne 2005-2023), Lyon, sud, 35&deg;</li>
                  <li>&bull; <strong>Autoconsommation :</strong> {Math.round(AUTOCONSO_STANDARD * 100)} % (sans batterie, avec d&eacute;calage des usages en journ&eacute;e)</li>
                  <li>&bull; <strong>Tarif :</strong> {KWH_PRICE_LABEL}, soit ~{fr(Math.round(EUR_PAR_KWH * 1000) / 1000)} &euro; &eacute;conomis&eacute; par kWh produit</li>
                </ul>
              </div>
              <p className="text-xs text-stone mt-3">
                C&apos;est une moyenne pluriannuelle : une ann&eacute;e donn&eacute;e peut s&apos;&eacute;carter de &plusmn;10 % selon la m&eacute;t&eacute;o. Pour votre cas pr&eacute;cis, passez par le <Link href="/calculateur" className={extLink}>calculateur</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production simul&eacute;e mois par mois</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Mois</th>
                      <th className="p-3 text-right font-bold">Production</th>
                      <th className="p-3 text-right font-bold">&Eacute;conomies</th>
                      <th className="p-3 text-right font-bold">Part de l&apos;ann&eacute;e</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionMensuelle.map((m, i) => (
                      <tr key={m.mois} className={`border-b border-border-light ${i >= 3 && i <= 8 ? 'bg-green-pale/10' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{m.mois}</td>
                        <td className="p-3 text-right font-mono text-green">{Math.round(m.kwh)} kWh</td>
                        <td className="p-3 text-right font-mono">{fr(Math.round(m.eur * 10) / 10)} &euro;</td>
                        <td className="p-3 text-right font-mono text-xs text-charcoal-light">{Math.round(m.part * 100)} %</td>
                      </tr>
                    ))}
                    <tr className="bg-green-pale/20 font-bold">
                      <td className="p-3">Total annuel</td>
                      <td className="p-3 text-right font-mono text-green">{PROD_ANNUELLE} kWh</td>
                      <td className="p-3 text-right font-mono text-green">{ECO_AN1} &euro;</td>
                      <td className="p-3 text-right font-mono text-xs">100 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                &Agrave; retenir : <strong>d&eacute;cembre produit environ 3 fois moins que juillet</strong> (~{DEC} kWh contre ~{JUIL} kWh). Les six mois d&apos;avril &agrave; septembre p&egrave;sent &agrave; eux seuls {Math.round((ete.kwh / PROD_ANNUELLE) * 100)} % de la production annuelle. <Link href="/blog/production-solaire-ete-vs-hiver" className={extLink}>&Eacute;t&eacute; vs hiver : l&apos;&eacute;cart expliqu&eacute;</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Vos 6 premiers mois d&eacute;pendent du mois d&apos;installation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                M&ecirc;me kit, m&ecirc;me balcon : selon la date de mise en service, le &laquo; bilan &agrave; 6 mois &raquo; varie presque du simple au double.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {fenetres.map((f) => (
                  <div key={f.label} className="card">
                    <div className="font-bold text-sm mb-1">{f.label}</div>
                    <div className="font-mono font-bold text-green text-xl">{f.kwh} kWh &middot; {f.eur} &euro;</div>
                    <div className="text-xs text-stone mt-1">{f.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                Si vous installez en novembre, un premier bilan &agrave; ~{decMai.kwh} kWh fin mai n&apos;a rien d&apos;anormal. Ne jugez pas un kit sur ses premiers mois d&apos;hiver : comparez-le mois par mois aux pr&eacute;visions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Panneau inclin&eacute; ou vertical : un profil tr&egrave;s diff&eacute;rent</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Beaucoup de kits de balcon sont fix&eacute;s &agrave; la verticale sur le garde-corps. Toujours selon PVGIS pour Lyon plein sud, l&apos;irradiation annuelle re&ccedil;ue &agrave; 90&deg; est d&apos;environ <strong>1 130 kWh/m&sup2;</strong>, contre <strong>1 630 kWh/m&sup2;</strong> &agrave; 35&deg;. Mais elle est bien mieux r&eacute;partie : en vertical, d&eacute;cembre re&ccedil;oit environ 70 % de l&apos;irradiation de juillet, contre ~30 % &agrave; 35&deg;.
              </p>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Cons&eacute;quence : un panneau vertical produit moins sur l&apos;ann&eacute;e, mais son bilan d&apos;hiver est moins d&eacute;cevant. Un panneau inclin&eacute; produit davantage, surtout d&apos;avril &agrave; septembre. <Link href="/blog/panneau-solaire-hiver-production" className={extLink}>Production hivernale expliqu&eacute;e</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que disent les retours d&apos;utilisateurs publi&eacute;s</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les mesures publi&eacute;es sont rares et rarement comparables (lieu, orientation, puissance diff&eacute;rents). Voici celles qui donnent des chiffres v&eacute;rifiables :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">EcoFlow 400 Wc, un an de mesures (R&eacute;volution &Eacute;nerg&eacute;tique)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Kit PowerStream 400 Wc pos&eacute; &agrave; 35&deg;, orient&eacute; ouest-sud-ouest, dans les Alpes-de-Haute-Provence : <strong>526 kWh sur un an</strong>, meilleur mois juillet avec <strong>68 kWh</strong>, autoconsommation de 91,6 %, ~120 &euro; d&apos;&eacute;conomies annuelles. Le journal signale aussi quatre nettoyages n&eacute;cessaires, surtout apr&egrave;s des pluies de sable. Ramen&eacute; au kWc, c&apos;est plus que notre r&eacute;f&eacute;rence lyonnaise : logique pour un site parmi les plus ensoleill&eacute;s de France.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">430 Wc en autoconsommation (forum Que Choisir)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Un utilisateur du forum &eacute;quip&eacute; de 430 Wc rapporte <strong>85 % d&apos;autoconsommation</strong> sur l&apos;ann&eacute;e (~15 % r&eacute;inject&eacute;), avec 0 % d&apos;injection en d&eacute;cembre et 24 % en mars. Il met aussi en garde : esp&eacute;rer r&eacute;duire sa facture de 30 % avec ce type d&apos;installation est illusoire. C&apos;est coh&eacute;rent avec le taux de {Math.round(AUTOCONSO_STANDARD * 100)} % que nous utilisons.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Un mois d&apos;avril dans le Sud-Ouest (avis client Sunology)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Un client Sunology (avis Trustpilot relay&eacute; par Hellowatt) indique une production de <strong>53,9 kWh en avril</strong>, r&eacute;gion sud-ouest, avec un PLAY Max. Notre simulation donne ~{Math.round(productionMensuelle[3].kwh)} kWh en avril pour un 450 Wc &agrave; Lyon : m&ecirc;me ordre de grandeur, avec un meilleur ensoleillement c&ocirc;t&eacute; Sud-Ouest.
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone mt-3">
                Voir aussi notre <Link href="/blog/kit-solaire-balcon-avis-2026" className={extLink}>synth&egrave;se des avis utilisateurs 2026</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les points de vigilance pendant les premiers mois</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">L&apos;hiver d&eacute;courage</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">~{DEC} kWh en d&eacute;cembre, c&apos;est environ {Math.round(productionMensuelle[11].eur)} &euro; d&apos;&eacute;conomies sur le mois. Ce n&apos;est pas une panne : c&apos;est int&eacute;gr&eacute; au calcul annuel. <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className={extLink}>Que faire si votre kit produit moins que pr&eacute;vu</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">L&apos;autoconsommation n&apos;est pas automatique</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le taux de {Math.round(AUTOCONSO_STANDARD * 100)} % suppose de faire tourner lave-linge, lave-vaisselle ou chauffe-eau en journ&eacute;e. Si le logement est vide de 8h &agrave; 18h, le surplus part sur le r&eacute;seau sans &ecirc;tre pay&eacute;. <Link href="/guide/optimiser-autoconsommation-solaire" className={extLink}>Guide optimisation</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Ombres et WiFi</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Une ombre de garde-corps ou de balcon voisin, m&ecirc;me partielle, p&egrave;se sur la production (<Link href="/blog/panneau-solaire-ombre-optimiser-production" className={extLink}>guide ombre</Link>). Et les micro-onduleurs connect&eacute;s utilisent en g&eacute;n&eacute;ral le WiFi 2,4 GHz : si la box est loin du balcon, le suivi peut d&eacute;crocher (la production, elle, continue).</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">L&apos;encrassement selon l&apos;environnement</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le test d&apos;un an de R&eacute;volution &Eacute;nerg&eacute;tique a n&eacute;cessit&eacute; quatre nettoyages. En ville, pollen et pollution jouent le m&ecirc;me r&ocirc;le. <Link href="/blog/entretien-nettoyage-panneau-solaire-balcon" className={extLink}>Entretien et nettoyage</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Si vous vous lancez : nos recommandations</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">{'✓'} Mesurer d&egrave;s le premier jour</h3>
                  <p className="text-xs text-charcoal-light">Une prise connect&eacute;e (~15 &euro;) ou l&apos;app du fabricant permet de comparer chaque mois &agrave; la pr&eacute;vision. Sans mesure, impossible de rep&eacute;rer un probl&egrave;me. <Link href="/blog/prises-connectees-suivi-solaire" className={extLink}>Comparatif des prises</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">{'✓'} Faire la d&eacute;claration CACSI avant de brancher</h3>
                  <p className="text-xs text-charcoal-light">La d&eacute;marche aupr&egrave;s d&apos;Enedis se fait en ligne. La lancer avant la r&eacute;ception du kit &eacute;vite de produire sans convention.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">{'✓'} Relativiser un d&eacute;marrage en hiver</h3>
                  <p className="text-xs text-charcoal-light">Installer entre mars et mai donne un premier semestre proche de {ete.kwh} kWh ; installer en octobre, plut&ocirc;t {hiver.kwh} kWh. Le kit n&apos;est pas en cause.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">{'✓'} &Eacute;valuer la batterie seulement si le surplus est important</h3>
                  <p className="text-xs text-charcoal-light">Une batterie fait passer l&apos;autoconsommation vers 95 %, mais son co&ucirc;t allonge le retour sur investissement. <Link href="/avis/zendure-solarflow" className={extLink}>Voir l&apos;avis Zendure SolarFlow</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Projection sur 12 mois et ROI</h2>
              <div className="card-lg bg-cream/40">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production ann&eacute;e 1 :</strong> {PROD_ANNUELLE} kWh</li>
                  <li>&bull; <strong>&Eacute;conomies ann&eacute;e 1 :</strong> ~{ECO_AN1} &euro;</li>
                  <li>&bull; <strong>ROI (inflation du kWh {KWH_INFLATION_LABEL}) :</strong> <strong className="text-green">~{fr(ROI)} ans</strong></li>
                  <li>&bull; <strong>&Eacute;conomies cumul&eacute;es sur 25 ans :</strong> ~{fr(Math.round(TOTAL_25 / 100) * 100)} &euro;</li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                Ces chiffres valent pour Lyon, plein sud, sans ombre. Plus au sud ou avec une meilleure inclinaison, le ROI raccourcit ; au nord, &agrave; l&apos;est/ouest ou avec des ombres, il s&apos;allonge. <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className={extLink}>Combien rapporte un panneau solaire de balcon</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  <strong>Sur 6 mois, un kit de balcon rapporte entre {hiver.eur} &euro; et {ete.eur} &euro;</strong> selon la saison (450 Wc, Lyon, sud). Ce n&apos;est pas spectaculaire, et ce n&apos;est pas cens&eacute; l&apos;&ecirc;tre : la rentabilit&eacute; se joue sur plusieurs ann&eacute;es.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  Les retours publi&eacute;s par des utilisateurs sont coh&eacute;rents avec ces ordres de grandeur, et souvent un peu au-dessus dans les r&eacute;gions ensoleill&eacute;es. Le principal levier reste la <strong>part de production consomm&eacute;e sur place</strong>.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien produirait un kit sur votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                V&eacute;rifiez avec votre d&eacute;partement et votre orientation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <div className="my-8">
              <AffiliateCTA productName="Sunology PLAY 2" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/play-kit-solaire-plug-play" label="Voir le Sunology PLAY 2" variant="box" position="article_bottom" price="599 €" />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les &eacute;conomies annuelles selon la puissance et la r&eacute;gion</p>
                </Link>
                <Link href="/guide/optimiser-autoconsommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Optimiser son autoconsommation au quotidien</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les astuces pour viser 85 % d&apos;autoconsommation</p>
                </Link>
                <Link href="/blog/panneau-solaire-hiver-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en hiver : quelle production ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Pourquoi d&eacute;cembre-janvier est d&eacute;cevant (et c&apos;est normal)</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic si vos chiffres s&apos;&eacute;cartent des pr&eacute;visions</p>
                </Link>
                <Link href="/blog/kit-solaire-balcon-avis-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon : tous les avis 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Synth&egrave;se Trustpilot, forums et retours d&apos;utilisateurs</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

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

            <div className="mt-10 pt-8 border-t border-border-light space-y-3">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> simulation, pas de mesure sur site. Production annuelle = puissance (kWc) &times; {fr(PVGIS_REFERENCE_LYON)} kWh/kWc &times; PR {fr(PERFORMANCE_RATIO)}, r&eacute;partie mois par mois selon l&apos;irradiation PVGIS 5.3 (SARAH3, 2005-2023) pour Lyon, sud, 35&deg;. Tarif {KWH_PRICE_LABEL}, autoconsommation {Math.round(AUTOCONSO_STANDARD * 100)} %, inflation {KWH_INFLATION_LABEL}. <Link href="/methodologie" className={extLink}>Notre m&eacute;thodologie</Link>.
              </p>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources :</strong>{' '}
                <a href="https://re.jrc.ec.europa.eu/pvg_tools/fr/" target="_blank" rel="noopener noreferrer" className={extLink}>PVGIS (Commission europ&eacute;enne, JRC)</a> &middot;{' '}
                <a href="https://www.revolution-energetique.com/tests/on-a-teste-un-kit-solaire-de-balcon-ecoflow-pendant-un-an-voici-le-resultat/" target="_blank" rel="noopener noreferrer" className={extLink}>R&eacute;volution &Eacute;nerg&eacute;tique, test EcoFlow sur un an (2024, mis &agrave; jour 2025)</a> &middot;{' '}
                <a href="https://forum.quechoisir.org/kit-solaires-rentable-en-combien-de-temps-voir-criteres-t357354.html" target="_blank" rel="noopener noreferrer" className={extLink}>Forum Que Choisir, &laquo; Kit solaires : rentable en combien de temps &raquo;</a> &middot;{' '}
                <a href="https://www.hellowatt.fr/panneaux-solaires-photovoltaiques/sunology" target="_blank" rel="noopener noreferrer" className={extLink}>Hellowatt, avis Sunology</a>.
              </p>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence :</strong> cet article contient un lien affili&eacute;. Si vous achetez via ce lien, nous pouvons percevoir une commission, sans surco&ucirc;t pour vous. Cela n&apos;influence pas nos analyses.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
