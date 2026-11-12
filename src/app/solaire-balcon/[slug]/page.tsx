import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DEPARTMENTS, deptArticles, PVGIS_META } from '@/data/departments';
import { regionHref } from '@/data/regions';
import { DEPARTEMENTS_PILOTES } from '@/data/departements-pilotes';
import { prefStat, NATIONAL, NATIONAL_INST_1000, NATIONAL_PART_APPART, DONNEES_LOCALES, MOIS_COURT } from '@/lib/regions';
import { achatsGroupesDuDepartement } from '@/data/achats-groupes';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { productibleSite, productibleDepartement, RENTABILITE_DEPARTEMENTS } from '@/lib/rentabilite-departements';
import { calculateROIYears, calculateProductionKwh, calculateFirstYearSavings, calculateTotalSavings25Years, KWH_PRICE_LABEL, KWH_PRICE_SINCE, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL, AUTOCONSO_STANDARD, AUTOCONSO_BATTERY, PVGIS_REFERENCE_LYON } from '@/lib/pricing';
import { PRODUCTS, availabilityBadge, type ProductId } from '@/data/products';
import { withCanonicalOg } from '@/lib/metadata';


// Productible recalé sur la référence Lyon : voir lib/rentabilite-departements.ts
// (source commune avec la carte /etude/rentabilite-kit-solaire-balcon-departement).

// Prix, puissances et disponibilités : src/data/products.ts (vérifiés le 05/11/2026).
// Aucun produit en rupture ou arrêté n'est proposé.
function kitFrom(id: ProductId, badge: string, extra: { name?: string; powerWc?: number; price?: number; autocons?: number } = {}) {
  const p = PRODUCTS[id];
  return {
    id,
    name: extra.name ?? p.name,
    power: (extra.powerWc ?? p.powerWc) / 1000,
    price: extra.price ?? p.priceEur,
    slug: p.reviewSlug ?? '/avis',
    badge,
    autocons: extra.autocons,
    availability: availabilityBadge(id),
  };
}
const KITS = [
  kitFrom('sunology-play', 'Meilleur choix'),
  kitFrom('sunology-go', 'Petit budget'),
  kitFrom('beem-on-500w', 'Meilleur prix'),
  kitFrom('zendure-solarflow-800-plus', 'Avec batterie', { name: 'Zendure SolarFlow 800 Plus + 2 × 500 W', powerWc: 1000, price: 719, autocons: AUTOCONSO_BATTERY }),
  kitFrom('sunethic-f500', 'Made in France'),
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getDeptBySlug(slug: string) {
  return DEPARTMENTS.find(d => slugify(d.name) === slug);
}

function calcKit(kit: typeof KITS[0], irradiation: number) {
  const autocons = kit.autocons || AUTOCONSO_STANDARD;
  const input = {
    kitPriceEur: kit.price,
    kitPowerWc: kit.power * 1000,
    productibleKwhPerKwc: irradiation,
    autoconsoOverride: autocons,
  };
  // Source unique : lib/pricing.ts (tarif, inflation, dégradation)
  const production = calculateProductionKwh(input);
  const kwhValorises = Math.round(production * autocons);
  const economies = Math.round(calculateFirstYearSavings(input));
  const roi = calculateROIYears(input);
  return { ...kit, production, kwhValorises, economies, roi, autocons };
}

export function generateStaticParams() {
  return DEPARTMENTS.map(d => ({ slug: slugify(d.name) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dept = getDeptBySlug(params.slug);
  if (!dept) return {};
  const art = deptArticles(dept.name);
  return withCanonicalOg({
    title: `Kit solaire balcon ${dept.name} (${dept.code}) : production et rentabilité 2026`,
    description: `Combien produit un kit solaire sur un balcon ${art.dans} (${dept.code}) ? Productible ${productibleSite(dept.irradiation)} kWh/kWc, calcul de rentabilité et meilleur kit recommandé.`,
    alternates: {
      canonical: `https://monbalconsolaire.fr/solaire-balcon/${params.slug}`,
    },
    // Pages programmatiques jugées trop minces par Google (crawlées, non indexées) :
    // retirées de l'index en attendant un enrichissement local page par page.
    // Une page qui présente un achat groupé local validé repasse en index.
    // Exceptions indexables : achat groupé local validé, ou département pilote avec une
    // information locale vérifiée sur un site officiel (data/departements-pilotes.ts).
    robots: { index: achatsGroupesDuDepartement(dept.code).length > 0 || Boolean(DEPARTEMENTS_PILOTES[dept.code]), follow: true },
  });
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const dept = getDeptBySlug(params.slug);
  if (!dept) notFound();
  const art = deptArticles(dept.name);

  const productible = productibleSite(dept.irradiation);
  const allResults = KITS.map(k => calcKit(k, productible));
  const results = [...allResults].sort((a, b) => a.roi - b.roi);
  const best = results[0];
  const bestBudget = allResults.find(r => r.id === 'sunology-go')!;
  const bestBatterie = allResults.find(r => r.id === 'zendure-solarflow-800-plus')!;
  const bestFrance = allResults.find(r => r.id === 'sunethic-f500')!;

  const irradiationLevel = dept.irradiation >= 1400 ? 'excellent' : dept.irradiation >= 1200 ? 'bon' : dept.irradiation >= 1050 ? 'correct' : 'modéré';
  const irradiationEmoji = dept.irradiation >= 1400 ? '\u2600\ufe0f' : dept.irradiation >= 1200 ? '\ud83c\udf24\ufe0f' : '\u26c5';

  const achatsGroupes = achatsGroupesDuDepartement(dept.code);
  const ps = prefStat(dept.code);
  const pilote = DEPARTEMENTS_PILOTES[dept.code];
  const regionUrl = regionHref(dept.region);
  const fr = (x: number) => x.toLocaleString('fr-FR');
  const pc = (x: number) => `${x > 0 ? '+' : x < 0 ? '−' : ''}${fr(Math.abs(x))} %`;
  const nearbyDepts = DEPARTMENTS
    .filter(d => d.region === dept.region && d.code !== dept.code)
    .slice(0, 4);

  // FAQ sans marque : fourchette des kits de 500 à 515 Wc sans batterie analysés
  const kits500 = [...allResults.filter(r => r.power >= 0.5 && r.power < 0.6 && r.autocons === AUTOCONSO_STANDARD)].sort((a, b) => a.price - b.price);
  const kits500Prix = `de ${kits500[0].price} à ${kits500[kits500.length - 1].price} € pour les kits de 500 Wc environ analysés`;
  const kits500Roi = `${kits500[0].roi.toLocaleString('fr-FR')} à ${kits500[kits500.length - 1].roi.toLocaleString('fr-FR')}`;

  const faqData = [
    {
      question: `Un kit solaire de balcon est-il rentable ${art.dans} ?`,
      answer: `Oui. Avec un productible de ${productible} kWh/kWc/an (${irradiationLevel}), un kit d'environ 500 Wc orienté sud produit environ ${kits500[0].production} kWh/an et fait économiser environ ${kits500[0].economies} €/an. Selon son prix (${kits500Prix}), le retour sur investissement va de ${kits500Roi} ans (inflation de ${KWH_INFLATION_LABEL} et dégradation des panneaux de ${PANEL_DEGRADATION_LABEL} incluses).`,
    },
    {
      question: `Quelle est l'irradiation solaire ${art.dans} ?`,
      answer: `Selon PVGIS 5.3 (Commission européenne), au point de la préfecture (${dept.prefecture}), un panneau orienté sud et incliné à 30° produit ${dept.irradiation} kWh par kWc et par an, pertes système incluses. C'est un potentiel ${irradiationLevel}. Pour nos calculs, nous retenons un productible prudent de ${productible} kWh/kWc (recalé sur notre référence Lyon de ${PVGIS_REFERENCE_LYON} kWh/kWc), auquel s'applique un coefficient de performance de 0,85. Pour comparaison, sur la même base : Bouches-du-Rhône ${productibleDepartement('13')}, Nord ${productibleDepartement('59')} kWh/kWc.`,
    },
    {
      question: `Quel est le meilleur kit solaire pour un balcon ${art.dans} ?`,
      answer: `Le ${best.name} offre le meilleur retour sur investissement ${art.dans} : ROI de ${best.roi} ans pour ${best.economies} €/an d'économies. Pour un petit budget ou un balcon étroit, le ${bestBudget.name} à ${bestBudget.price} € a un ROI de ${bestBudget.roi} ans. Et pour du stockage, le ${bestBatterie.name} (${bestBatterie.economies} €/an) permet de consommer le soir l'énergie produite le jour.`,
    },
    {
      question: 'Faut-il une autorisation pour installer un kit solaire sur un balcon ?',
      answer: 'Non, pas d\'autorisation préalable pour un kit plug-and-play de moins de 3 kWc. En revanche, vous devez déclarer le kit à Enedis, gratuitement, sur Enedis-Connect : la CACSI (Convention d\'autoconsommation sans injection) si le kit est réglé en zéro injection, ou la cession gratuite du surplus à Enedis (Code de l\'énergie, article L315-5) s\'il renvoie son surplus sur le réseau. En copropriété, vérifiez le règlement mais la plupart des syndics acceptent les kits amovibles.',
    },
  ];

  return (
    <>
      <SchemaArticle
        title={`Kit solaire balcon ${dept.name} : production et rentabilité`}
        description={`Guide solaire de balcon pour ${art.le} (${dept.code}).`}
        url={`https://monbalconsolaire.fr/solaire-balcon/${params.slug}`}
        datePublished="2026-05-10"
        dateModified="2026-11-12"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Solaire par département', href: '/solaire-balcon' }, { label: dept.region, href: regionUrl }, { label: dept.name }]} />

          <div className="mb-10">
            <Link href={regionUrl} className="badge-green mb-4 inline-block hover:underline">{dept.region}</Link>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon {dept.name} ({dept.code}) : production et rentabilité 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Combien produit un kit solaire sur un balcon {art.dans.replace(dept.name, '')}<strong>{dept.name}</strong> ? Avec un productible de <strong>{productible} kWh/kWc/an</strong>, voici les chiffres exacts de production, d&apos;économies et de retour sur investissement pour chaque kit du marché.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Productible', value: `${productible}`, suffix: ' kWh', sub: `Potentiel ${irradiationLevel}`, color: 'amber' as const },
              { label: '\u00c9conomies/an', value: `${best.economies}`, suffix: ' \u20ac', sub: `avec le ${best.name}`, color: 'green' as const },
              { label: 'Retour sur invest.', value: `${best.roi}`, suffix: ' ans', sub: 'garanti 25 ans', color: 'green' as const },
            ].map((kpi, i) => (
              <div key={i} className={`rounded-brand-xl border p-5 md:p-6 text-center shadow-brand ${
                kpi.color === 'amber'
                  ? 'border-amber/15 bg-gradient-to-br from-amber-pale/40 via-white to-white'
                  : 'border-green/15 bg-gradient-to-br from-green-pale/40 via-white to-white'
              }`}>
                <div className="text-[10px] text-stone font-semibold uppercase tracking-widest">{kpi.label}</div>
                <div className={`font-mono font-extrabold text-2xl md:text-3xl leading-none my-3 ${kpi.color === 'amber' ? 'text-amber-dark' : 'text-green'}`}>
                  {kpi.value}<span className="text-base font-bold">{kpi.suffix}</span>
                </div>
                <div className="text-xs text-charcoal-light">{kpi.sub}</div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-brand-xl border border-green/10 bg-gradient-to-br from-green-pale/40 via-white to-cream p-8 shadow-brand mb-10">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green to-green-light rounded-l-brand-xl" />
            <h2 className="font-bold text-lg mb-3 pl-4">Le potentiel solaire {art.du}</h2>
            <p className="text-sm text-charcoal-light leading-relaxed pl-4">
              Le département {art.du} ({dept.code}) en {dept.region} bénéficie d&apos;un productible PVGIS de <strong>{dept.irradiation} kWh/kWc/an</strong> (sud, 30°), un potentiel <strong>{irradiationLevel}</strong>. Nos calculs retiennent {productible} kWh/kWc, cal&eacute;s sur notre r&eacute;f&eacute;rence prudente de Lyon.
              {dept.irradiation >= 1300 && ' C\'est l\'un des départements les plus favorables au solaire en France.'}
              {dept.irradiation < 1100 && ' Même avec un ensoleillement plus faible que le sud, un kit solaire reste rentable grâce au prix élevé de l\'électricité (' + KWH_PRICE_LABEL + ').'}
              {dept.irradiation >= 1100 && dept.irradiation < 1300 && ` Un kit solaire de balcon y est rentable : ROI de ${best.roi} ans pour le kit le mieux placé.`}
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production et rentabilité par kit {art.dans}</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Voici les chiffres pour chaque kit disponible, calculés avec le productible {art.du} en orientation sud :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Kit</th>
                      <th className="p-3 text-right font-bold">Prix</th>
                      <th className="p-3 text-right font-bold">kWh/an</th>
                      <th className="p-3 text-right font-bold">Éco./an</th>
                      <th className="p-3 text-right font-bold">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((kit, i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/20 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-3">
                          <Link href={kit.slug} className="text-green hover:underline font-semibold">{kit.name}</Link>{kit.availability && <span className="block text-xs text-amber-dark">{kit.availability}</span>}
                          {i === 0 && <span className="badge-green ml-2 text-[9px]">Recommandé</span>}
                        </td>
                        <td className="p-3 text-right font-mono">{kit.price} &euro;</td>
                        <td className="p-3 text-right font-mono">{kit.production}</td>
                        <td className="p-3 text-right font-mono text-green">{kit.economies} &euro;</td>
                        <td className="p-3 text-right font-mono">{kit.roi} ans</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Calcul : puissance × {productible} kWh/kWc × 0,85 (performance ratio) × autoconsommation × {KWH_PRICE_LABEL}. Orientation sud. Autoconsommation 85 % sans batterie, 95 % avec batterie (m&eacute;thodologie standard du site). ROI calculé avec une inflation du tarif de {KWH_INFLATION_LABEL} et une dégradation des panneaux de {PANEL_DEGRADATION_LABEL}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation pour {art.le}</h2>
              <div className="card-lg border-l-4 border-l-green mb-6">
                <div className="badge-green mb-3 text-[10px]">Meilleur ROI</div>
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div>
                    <h3 className="font-bold text-lg">{best.name}</h3>{best.availability && <p className="text-xs text-amber-dark font-semibold">{best.availability}</p>}
                    <p className="text-xs text-stone mt-1">{best.price} € &middot; {best.production} kWh/an &middot; {Math.round(best.autocons * 100)} % autoconsommé</p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-green text-xl">{best.roi} ans</div>
                    <div className="text-xs text-stone">de ROI</div>
                  </div>
                </div>
                <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                  {art.dans.charAt(0).toUpperCase() + art.dans.slice(1)}, le {best.name} offre le <strong>retour sur investissement le plus rapide</strong> : {best.economies} €/an d&apos;économies pour {best.price} € investis.
                  {' '}Sur 25 ans, c&apos;est <strong>{calculateTotalSavings25Years({ kitPriceEur: best.price, kitPowerWc: best.power * 1000, productibleKwhPerKwc: productible, autoconsoOverride: best.autocons }).toLocaleString('fr-FR')} € d&apos;économies cumulées</strong> (inflation 3,3 %/an incluse).
                </p>
                <Link href={best.slug} className="btn-primary text-sm py-2.5 inline-flex">
                  Voir l&apos;avis complet &rarr;
                </Link>
              </div>

              <h3 className="font-bold text-base mb-3">Selon votre profil</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {best.name !== bestBudget.name && (
                  <Link href={bestBudget.slug} className="card hover:shadow-brand-lg transition-all group">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-dark mb-2">Petit budget</div>
                    <h4 className="font-bold text-sm group-hover:text-green transition-colors">{bestBudget.name}</h4>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-mono font-bold text-green">{bestBudget.price} €</span>
                      <span className="text-xs text-stone">ROI {bestBudget.roi} ans</span>
                    </div>
                    <p className="text-xs text-charcoal-light mt-2">{bestBudget.economies} €/an d&apos;économies. Id&eacute;al pour d&eacute;couvrir le solaire ou un balcon &eacute;troit.</p>
                  </Link>
                )}
                {best.name !== bestBatterie.name && (
                  <Link href={bestBatterie.slug} className="card hover:shadow-brand-lg transition-all group">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-dark mb-2">Avec batterie</div>
                    <h4 className="font-bold text-sm group-hover:text-green transition-colors">{bestBatterie.name}</h4>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-mono font-bold text-green">{bestBatterie.price} €</span>
                      <span className="text-xs text-stone">ROI {bestBatterie.roi} ans</span>
                    </div>
                    <p className="text-xs text-charcoal-light mt-2">{bestBatterie.economies} €/an. Stockez le jour, consommez le soir.</p>
                  </Link>
                )}
                {best.name !== bestFrance.name && (
                  <Link href={bestFrance.slug} className="card hover:shadow-brand-lg transition-all group">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-dark mb-2">Made in France</div>
                    <h4 className="font-bold text-sm group-hover:text-green transition-colors">{bestFrance.name}</h4>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-mono font-bold text-green">{bestFrance.price} €</span>
                      <span className="text-xs text-stone">ROI {bestFrance.roi} ans</span>
                    </div>
                    <p className="text-xs text-charcoal-light mt-2">{bestFrance.economies} €/an. Assembl&eacute; en France.</p>
                  </Link>
                )}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production mois par mois &agrave; {dept.prefecture}</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                PVGIS 5.3 au point de la pr&eacute;fecture, kit de 800 W plein sud&nbsp;: <strong>{fr(ps.e30)} kWh par an</strong> inclin&eacute; &agrave; 30&deg; ({pc(ps.ecart30)} par rapport &agrave; la moyenne des 96 pr&eacute;fectures, {fr(NATIONAL.e30)} kWh) et <strong>{fr(ps.e90)} kWh</strong> fix&eacute; &agrave; la verticale sur un garde-corps ({pc(ps.ecart90)}). En d&eacute;cembre, le panneau vertical produit {fr(Math.round(ps.m90[11]))} kWh contre {fr(Math.round(ps.m30[11]))} kWh pour l&apos;inclin&eacute;.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-xs border-collapse min-w-[680px]">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-2 text-left font-semibold">kWh</th>
                      {MOIS_COURT.map(m => <th key={m} className="p-2 text-right font-semibold">{m}</th>)}
                      <th className="p-2 text-right font-semibold">Ann&eacute;e</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([['Incliné 30°', ps.m30, ps.e30], ['Vertical 90°', ps.m90, ps.e90]] as [string, number[], number][]).map(([label, m, tot]) => (
                      <tr key={label} className="border-b border-border-light">
                        <td className="p-2 font-semibold whitespace-nowrap">{label}</td>
                        {m.map((v, j) => <td key={j} className="p-2 text-right font-mono">{fr(Math.round(v))}</td>)}
                        <td className="p-2 text-right font-mono font-bold text-green">{fr(tot)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone leading-relaxed">
                Source&nbsp;: PVGIS 5.3 (JRC, Commission europ&eacute;enne), base PVGIS-SARAH3, pertes 14 %, interrog&eacute; le {new Date(`${PVGIS_META.interrogeLe}T12:00:00Z`).toLocaleDateString('fr-FR')}. Comparaison avec les autres pr&eacute;fectures&nbsp;: <Link href={regionUrl} className="text-green hover:underline">page {dept.region}</Link>.
              </p>
              {ps.local && (
                <p className="text-charcoal-light leading-relaxed mt-4">
                  {ps.local.installations != null && <>Le registre national des installations de production compte <strong>{fr(ps.local.installations)} installations photovolta&iuml;ques de moins de 36&nbsp;kW</strong> raccord&eacute;es {art.dans} (au 30/09/2026), soit {fr(ps.local.installationsPour1000Logements ?? 0)} pour 1 000 r&eacute;sidences principales (moyenne m&eacute;tropole&nbsp;: {fr(NATIONAL_INST_1000)}). </>}
                  Les appartements repr&eacute;sentent {fr(ps.local.partAppartements)} % des r&eacute;sidences principales (INSEE, recensement {DONNEES_LOCALES.meta.logements.annee}&nbsp;; {fr(NATIONAL_PART_APPART)} % en m&eacute;tropole).
                </p>
              )}
            </section>

            {pilote && (
              <section>
                <h2 className="text-2xl font-extrabold mb-4">{pilote.titre}</h2>
                {pilote.paragraphes.map((t, i) => (
                  <p key={i} className="text-charcoal-light leading-relaxed mb-4">{t}</p>
                ))}
                <ul className="text-xs text-stone space-y-1">
                  {pilote.sources.map(src => (
                    <li key={src.url}>Source&nbsp;: <a href={src.url} target="_blank" rel="noopener" className="text-green hover:underline">{src.label}</a>, consult&eacute;e le {src.vu}.</li>
                  ))}
                </ul>
              </section>
            )}

            {achatsGroupes.map(ag => (
              <section key={ag.slug}>
                <h2 className="text-2xl font-extrabold mb-4">Acheter son kit en achat group&eacute; ({dept.name}) : {ag.nom}</h2>
                <p className="text-charcoal-light leading-relaxed mb-4">Plut&ocirc;t que d&apos;acheter un kit seul en ligne, vous pouvez passer par un achat group&eacute;. La soci&eacute;t&eacute; r&eacute;gionale {ag.nom}, bas&eacute;e &agrave; {ag.ville}, en organise en Bretagne, et notamment dans {ag.zone}, et a d&eacute;j&agrave; vendu {ag.kitsVendus} kits. Le d&eacute;roul&eacute; :</p>
                <ol className="list-decimal pl-6 space-y-1 text-sm text-charcoal-light leading-relaxed mb-4">
                  {ag.deroule.map((etape, i) => <li key={i}>{etape}</li>)}
                </ol>
                <p className="text-charcoal-light leading-relaxed mb-4">Le kit comprend {ag.contenuKit}. Du fait d&apos;une &eacute;volution constante des produits dans le photovolta&iuml;que, le mat&eacute;riel change d&apos;une op&eacute;ration &agrave; l&apos;autre (derniers kits : {ag.puissanceDernierKitWc} Wc) ; les prix constat&eacute;s sont all&eacute;s de {ag.prixConstates.min} &agrave; {ag.prixConstates.max} &euro;. Dans ce d&eacute;partement, un kit de {ag.puissanceDernierKitWc} Wc &agrave; {ag.prixConstates.max} &euro; se rembourse en {calculateROIYears({ kitPriceEur: ag.prixConstates.max, kitPowerWc: ag.puissanceDernierKitWc, productibleKwhPerKwc: productible }).toLocaleString('fr-FR')} ans.</p>
                {ag.interesses && <p className="text-charcoal-light leading-relaxed mb-4">{ag.interesses.charAt(0).toUpperCase() + ag.interesses.slice(1)} de personnes se sont d&eacute;j&agrave; manifest&eacute;es pour la prochaine op&eacute;ration{ag.rechercheSalle ? <>, et {ag.nom} cherche {ag.rechercheSalle}</> : null}.</p>}
                <p className="text-sm font-semibold mb-2">
                  Pour vous faire conna&icirc;tre&nbsp;: {ag.inscription.href
                    ? <a href={ag.inscription.href} className="text-green hover:underline">{ag.inscription.label}</a>
                    : ag.inscription.label}
                </p>
                <p className="text-sm text-charcoal-light">Comment fonctionne un achat group&eacute; : <Link href="/guide/achat-groupe-kit-solaire" className="text-green hover:underline">notre guide complet &rarr;</Link></p>
              </section>
            ))}

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Affinez votre calcul</p>
              <p className="text-sm text-charcoal-light mb-4">
                Ces chiffres sont pour une orientation sud. Votre balcon est orienté différemment ? Le calculateur ajuste selon votre orientation exacte.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer pour mon balcon &rarr;
              </Link>
            </div>

            {nearbyDepts.length > 0 && (
              <section>
                <h2 className="text-2xl font-extrabold mb-4">Départements proches en {dept.region}</h2>
                <p className="text-sm text-charcoal-light mb-3">Toutes les préfectures de la région, mois par mois&nbsp;: <Link href={regionUrl} className="text-green hover:underline font-semibold">solaire de balcon {dept.region} &rarr;</Link></p>
                <div className="grid grid-cols-2 gap-3">
                  {nearbyDepts.map(d => {
                    const dSlug = slugify(d.name);
                    const eco = RENTABILITE_DEPARTEMENTS.find(r => r.code === d.code)?.savingsYear1;
                    return (
                      <Link key={d.code} href={`/solaire-balcon/${dSlug}`} className="card hover:shadow-brand-lg transition-all group">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-mono text-xs text-amber-dark font-semibold mr-1">{d.code}</span>
                            <span className="font-semibold text-sm group-hover:text-green transition-colors">{d.name}</span>
                          </div>
                          <span className="font-mono text-xs text-green">{eco} €/an</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire 2026 : comparatif complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Tous les kits comparés point par point</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation : comment le calculer et l&apos;effacer</h3>
                  <p className="text-xs text-charcoal-light mt-1">Combien consomme votre foyer en permanence et comment le couvrir</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide débutant : tout savoir sur le solaire de balcon</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le guide complet pour se lancer</p>
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
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> productible PVGIS 5.3 (Commission européenne) au point de la préfecture ({dept.prefecture}), orientation sud, inclinaison 30°, pertes système incluses, utilisé comme indice relatif et recalé sur notre référence Lyon (Rhône = 1 200 kWh/kWc), puis performance ratio 0,85 appliqué une seule fois. Tarif EDF Base en vigueur depuis le {KWH_PRICE_SINCE} : {KWH_PRICE_LABEL}. Autoconsommation 85 % sans batterie, 95 % avec batterie. Retour sur investissement actualisé avec une inflation du tarif de 3,3 %/an (moyenne CRE 2012-2026).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
