import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb, SchemaDataset } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { FranceRentabiliteMap } from '@/components/etude/FranceRentabiliteMap';
import { RentabiliteTable } from '@/components/etude/RentabiliteTable';
import { CopyText } from '@/components/etude/CopyText';
import { FRANCE_DEPARTEMENTS_PATHS, FRANCE_MAP_VIEWBOX } from '@/data/france-departements-paths';
import {
  RENTABILITE_DEPARTEMENTS,
  REFERENCE_KIT,
  ALTERNATIVE_KIT,
  PVGIS_RHONE,
  ROI_BINS,
  roiColor,
  getRentabiliteStats,
  getRentabiliteParRegion,
} from '@/lib/rentabilite-departements';
import {
  KWH_PRICE_LABEL,
  KWH_PRICE_SOURCE,
  KWH_INFLATION_LABEL,
  PERFORMANCE_RATIO,
  AUTOCONSO_STANDARD,
  ANALYSIS_DURATION_YEARS,
  PVGIS_REFERENCE_LYON,
  calculateROIYears,
} from '@/lib/pricing';

const SLUG = 'rentabilite-kit-solaire-balcon-departement';
const URL = `https://monbalconsolaire.fr/etude/${SLUG}`;
const CSV_PATH = `/etude/${SLUG}/donnees.csv`;
const PUBLISHED = '2026-10-12';
const UPDATED = '2026-10-12';
const UPDATED_LABEL = '12 octobre 2026';
const PAGE_TITLE = 'Carte de la rentabilité d’un kit solaire de balcon par département (2026)';

export const metadata: Metadata = {
  title: 'Carte rentabilité kit solaire balcon par département 2026',
  description:
    'Kit solaire de balcon : en combien d’années est-il rentabilisé dans votre département ? Carte des 96 départements, production, économies, données CC BY.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Carte de France de la rentabilité d’un kit solaire de balcon',
    description: 'Production, économies et retour sur investissement d’un kit 500 Wc dans les 96 départements métropolitains.',
    url: URL,
    type: 'article',
  },
};

// ─── Données calculées au build (lib/pricing.ts) ──────────────────────────
const rows = RENTABILITE_DEPARTEMENTS;
const stats = getRentabiliteStats();
const regions = getRentabiliteParRegion();
const byCode = new Map(rows.map((r) => [r.code, r]));
const top10 = rows.slice(0, 10);
const flop10 = rows.slice(-10).reverse();
const lyon = byCode.get('69')!;
const paris = byCode.get('75')!;
const marseille = byCode.get('13')!;
const aura = regions.find((g) => g.region === 'Auvergne-Rhône-Alpes')!;
/** Coefficient est/ouest du calculateur (src/app/calculateur/page.tsx). */
const EST_OUEST_COEF = 0.8;
const roiMarseilleEO = calculateROIYears({
  kitPriceEur: REFERENCE_KIT.priceEur,
  kitPowerWc: REFERENCE_KIT.powerWc,
  productibleKwhPerKwc: marseille.productible,
  orientationCoef: EST_OUEST_COEF,
});

/** Boîte englobante d'un chemin SVG généré (M x y l dx dy ... z). */
function pathBBox(d: string) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const sub of d.split('M').filter(Boolean)) {
    const [start, rel = ''] = sub.replace(/z/g, '').split('l');
    let [x, y] = start.trim().split(/\s+/).map(Number);
    const nums = rel.trim() ? rel.trim().split(/\s+/).map(Number) : [];
    const pts: [number, number][] = [[x, y]];
    for (let i = 0; i + 1 < nums.length; i += 2) {
      x += nums[i];
      y += nums[i + 1];
      pts.push([x, y]);
    }
    for (const [px, py] of pts) {
      minX = Math.min(minX, px); maxX = Math.max(maxX, px);
      minY = Math.min(minY, py); maxY = Math.max(maxY, py);
    }
  }
  return { minX, minY, maxX, maxY };
}

const IDF_INSET = (() => {
  const codes = ['75', '92', '93', '94'];
  const paths = FRANCE_DEPARTEMENTS_PATHS.filter((p) => codes.includes(p.code));
  const boxes = paths.map((p) => pathBBox(p.d));
  const minX = Math.min(...boxes.map((b) => b.minX));
  const minY = Math.min(...boxes.map((b) => b.minY));
  const w = Math.max(...boxes.map((b) => b.maxX)) - minX;
  const h = Math.max(...boxes.map((b) => b.maxY)) - minY;
  const size = 170;
  const x = 24;
  const y = 44;
  const scale = size / Math.max(w, h);
  const tx = x + (size - w * scale) / 2 - minX * scale;
  const ty = y + (size - h * scale) / 2 - minY * scale;
  return { paths, x, y, size, scale, transform: `translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${scale.toFixed(3)})` };
})();

const yrs = (n: number) => String(n).replace('.', ',');
const eur = (n: number) => n.toLocaleString('fr-FR');
const pct = (n: number) => `${Math.round(n * 100)} %`;
const rankLabel = (n: number) => (n === 1 ? '1er' : `${n}e`);

const GRANDES_VILLES: { ville: string; code: string }[] = [
  { ville: 'Paris', code: '75' },
  { ville: 'Marseille', code: '13' },
  { ville: 'Lyon', code: '69' },
  { ville: 'Toulouse', code: '31' },
  { ville: 'Nice', code: '06' },
  { ville: 'Nantes', code: '44' },
  { ville: 'Montpellier', code: '34' },
  { ville: 'Strasbourg', code: '67' },
  { ville: 'Bordeaux', code: '33' },
  { ville: 'Lille', code: '59' },
];
const villes = GRANDES_VILLES.map((v) => ({ ...v, d: byCode.get(v.code)! })).sort((a, b) => a.d.rank - b.d.rank);

const CITATION_COURTE = `Source : MonBalconSolaire.fr, carte de la rentabilité d’un kit solaire de balcon par département (2026) — ${URL}`;
const CITATION_HTML = `<a href="${URL}">Carte de la rentabilité d’un kit solaire de balcon par département</a> (MonBalconSolaire.fr, 2026, CC BY 4.0)`;
const EMBED_HTML = `<iframe src="https://monbalconsolaire.fr/embed/carte-rentabilite" title="Rentabilité d’un kit solaire de balcon par département" width="100%" height="720" style="border:0;max-width:760px" loading="lazy"></iframe>
<p>Source : ${CITATION_HTML}</p>`;

const CHIFFRES_PRESSE = [
  `Un kit solaire de balcon de ${REFERENCE_KIT.powerWc} Wc vendu ${REFERENCE_KIT.priceEur} € est rentabilisé en ${yrs(stats.medianRoi)} ans dans le département médian de France métropolitaine (orientation sud, sans ombrage).`,
  `${stats.best.name} (${stats.best.code}) arrive en tête : ${eur(stats.best.productionKwh)} kWh produits par an, ${eur(stats.best.savingsYear1)} € d’économies la première année, rentabilisé en ${yrs(stats.best.roiYears)} ans.`,
  `${stats.worst.name} (${stats.worst.code}) ferme la marche : ${eur(stats.worst.productionKwh)} kWh/an, ${eur(stats.worst.savingsYear1)} €/an, rentabilisé en ${yrs(stats.worst.roiYears)} ans, soit ${yrs(stats.roiGapYears)} ans de plus.`,
  `Le même kit produit ${stats.productionGapPct} % d’électricité en plus en ${stats.best.name} que dans le ${stats.worst.name} ; sur ${ANALYSIS_DURATION_YEARS} ans, l’écart de gain net atteint ${eur(stats.gain25Gap)} €.`,
  `${stats.under7} départements sur 96 rentabilisent le kit en moins de 7 ans ; ${stats.over8} seul${stats.over8 > 1 ? 's' : ''} dépasse${stats.over8 > 1 ? 'nt' : ''} 8 ans. Avec un kit 500 Wc à ${ALTERNATIVE_KIT.priceEur} €, la médiane tombe à ${yrs(stats.medianRoiAlt)} ans.`,
];

const faqData = [
  {
    question: 'Dans quel département un kit solaire de balcon est-il le plus rentable ?',
    answer: `En ${stats.best.name} (${stats.best.code}). Un kit ${REFERENCE_KIT.powerWc} Wc à ${REFERENCE_KIT.priceEur} € orienté plein sud y produit environ ${stats.best.productionKwh} kWh par an, soit ${stats.best.savingsYear1} € d’économies la première année, et il est rentabilisé en ${yrs(stats.best.roiYears)} ans (inflation du tarif de ${KWH_INFLATION_LABEL} incluse). Suivent ${top10.slice(1, 5).map((r) => r.name).join(', ')}.`,
  },
  {
    question: 'Un kit solaire de balcon est-il rentable dans le nord de la France ?',
    answer: `Oui, mais plus lentement. Dans le ${stats.worst.name}, le département le moins ensoleillé de notre classement, le même kit produit ${stats.worst.productionKwh} kWh par an et se rembourse en ${yrs(stats.worst.roiYears)} ans, bien avant la fin de sa garantie de 25 ans. Le gain net sur ${ANALYSIS_DURATION_YEARS} ans y reste de ${eur(stats.worst.netGain25)} €, à condition d’autoconsommer l’essentiel de la production.`,
  },
  {
    question: 'Combien produit un kit solaire de balcon de 500 Wc en France ?',
    answer: `Entre ${stats.worst.productionKwh} et ${stats.best.productionKwh} kWh par an selon le département, avec une médiane de ${stats.medianProduction} kWh, pour un panneau orienté sud et non ombragé. À Paris, l’estimation est de ${paris.productionKwh} kWh/an ; dans le Rhône, de ${lyon.productionKwh} kWh/an. Une orientation est ou ouest ou une pose verticale réduisent ces chiffres.`,
  },
  {
    question: 'Comment ces chiffres sont-ils calculés ?',
    answer: `Productible PVGIS (Commission européenne) moyen par département, recalé sur notre référence prudente de Lyon (${PVGIS_REFERENCE_LYON} kWh/kWc), performance ratio de ${String(PERFORMANCE_RATIO).replace('.', ',')}, autoconsommation de ${Math.round(AUTOCONSO_STANDARD * 100)} %, tarif EDF de ${KWH_PRICE_LABEL} et inflation de ${KWH_INFLATION_LABEL}. Le calcul est fait par la même formule que notre calculateur, pour les 96 départements.`,
  },
  {
    question: 'Puis-je reprendre cette carte ou ces données dans un article ?',
    answer: 'Oui. Les données et la carte sont publiées sous licence Creative Commons CC BY 4.0 : vous pouvez les reproduire et les adapter, y compris dans un média commercial, en citant MonBalconSolaire.fr avec un lien vers cette page. Le fichier CSV complet est téléchargeable gratuitement.',
  },
];

export default function CarteRentabilitePage() {
  return (
    <>
      <SchemaArticle
        title={PAGE_TITLE}
        description="Production, économies et retour sur investissement d'un kit solaire de balcon 500 Wc dans les 96 départements de France métropolitaine."
        url={URL}
        datePublished={PUBLISHED}
        dateModified={UPDATED}
      />
      <SchemaDataset
        name="Rentabilité d'un kit solaire de balcon par département (France métropolitaine, 2026)"
        description={`Production annuelle estimée, économies de première année, années de retour sur investissement et gain net sur ${ANALYSIS_DURATION_YEARS} ans d'un kit solaire plug-and-play de ${REFERENCE_KIT.powerWc} Wc (${REFERENCE_KIT.priceEur} € et ${ALTERNATIVE_KIT.priceEur} €) orienté sud, pour chacun des 96 départements métropolitains. Calculé à partir des productibles PVGIS et du tarif réglementé EDF (${KWH_PRICE_LABEL}).`}
        url={URL}
        license="https://creativecommons.org/licenses/by/4.0/"
        dateModified={UPDATED}
        temporalCoverage="2026"
        spatialCoverage="France métropolitaine (96 départements)"
        keywords={['kit solaire balcon', 'rentabilité', 'département', 'PVGIS', 'autoconsommation', 'photovoltaïque']}
        isBasedOn={['https://re.jrc.ec.europa.eu/pvg_tools/fr/', 'https://www.cre.fr/']}
        distribution={{ contentUrl: `https://monbalconsolaire.fr${CSV_PATH}`, encodingFormat: 'text/csv' }}
        variableMeasured={[
          { name: 'Productible retenu', unitText: 'kWh/kWc/an' },
          { name: 'Production annuelle du kit', unitText: 'kWh/an' },
          { name: 'Économies la première année', unitText: 'EUR' },
          { name: 'Retour sur investissement', unitText: 'années' },
          { name: `Gain net sur ${ANALYSIS_DURATION_YEARS} ans`, unitText: 'EUR' },
        ]}
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Carte de rentabilité par département' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-4xl">
          <Breadcrumbs items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Carte de rentabilité par département' }]} />

          {/* ─── En-tête ─── */}
          <header className="mb-10">
            <div className="badge-green mb-4 inline-block">&Eacute;tude &middot; Donn&eacute;es ouvertes</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Carte de la rentabilit&eacute; d&apos;un kit solaire de balcon par d&eacute;partement (2026)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le m&ecirc;me kit solaire de balcon de {REFERENCE_KIT.powerWc}&nbsp;Wc ({REFERENCE_KIT.priceEur}&nbsp;&euro;) est rentabilis&eacute; en{' '}
              <strong>{yrs(stats.best.roiYears)}&nbsp;ans en {stats.best.name}</strong> mais en{' '}
              <strong>{yrs(stats.worst.roiYears)}&nbsp;ans dans le {stats.worst.name}</strong> : {yrs(stats.roiGapYears)}&nbsp;ans d&apos;&eacute;cart
              d&apos;un bout &agrave; l&apos;autre de la France. Dans le d&eacute;partement m&eacute;dian, il faut{' '}
              <strong>{yrs(stats.medianRoi)}&nbsp;ans</strong> pour r&eacute;cup&eacute;rer sa mise, pour {eur(stats.medianProduction)}&nbsp;kWh produits et{' '}
              {eur(stats.medianSavings)}&nbsp;&euro; &eacute;conomis&eacute;s par an. Voici les chiffres des 96 d&eacute;partements m&eacute;tropolitains, calcul&eacute;s avec
              une m&eacute;thode unique et publique.
            </p>
            <div className="flex items-center gap-3 mt-4 text-sm text-stone flex-wrap">
              <span>Mis &agrave; jour le {UPDATED_LABEL}</span>
              <span>&middot;</span>
              <span>Donn&eacute;es sous licence CC BY 4.0</span>
              <span>&middot;</span>
              <a href={CSV_PATH} className="text-green hover:underline font-semibold">
                T&eacute;l&eacute;charger le CSV
              </a>
            </div>
          </header>

          {/* ─── Chiffres clés ─── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[
              { label: 'Le plus rentable', value: yrs(stats.best.roiYears), suffix: ' ans', sub: `${stats.best.name} (${stats.best.code})` },
              { label: 'Le moins rentable', value: yrs(stats.worst.roiYears), suffix: ' ans', sub: `${stats.worst.name} (${stats.worst.code})` },
              { label: 'Médiane France', value: yrs(stats.medianRoi), suffix: ' ans', sub: `${eur(stats.medianSavings)} € économisés/an` },
              { label: 'Écart de production', value: `+${stats.productionGapPct}`, suffix: ' %', sub: `${stats.worst.productionKwh} → ${stats.best.productionKwh} kWh/an` },
            ].map((k) => (
              <div key={k.label} className="rounded-brand-xl border border-green/15 bg-gradient-to-br from-green-pale/40 via-white to-white p-4 md:p-5 text-center shadow-brand">
                <div className="text-[10px] text-stone font-semibold uppercase tracking-widest">{k.label}</div>
                <div className="font-mono font-extrabold text-2xl md:text-3xl leading-none my-3 text-green">
                  {k.value}
                  <span className="text-base font-bold">{k.suffix}</span>
                </div>
                <div className="text-xs text-charcoal-light">{k.sub}</div>
              </div>
            ))}
          </div>

          <div className="space-y-14">
            {/* ─── Carte ─── */}
            <section aria-labelledby="carte">
              <h2 id="carte" className="text-2xl font-extrabold mb-2">
                La carte : en combien d&apos;ann&eacute;es un kit {REFERENCE_KIT.powerWc}&nbsp;Wc est-il rentabilis&eacute; ?
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Kit de r&eacute;f&eacute;rence : un kit plug-and-play de {REFERENCE_KIT.powerWc}&nbsp;Wc vendu {REFERENCE_KIT.priceEur}&nbsp;&euro;, orient&eacute; plein sud, sans
                ombrage, {pct(AUTOCONSO_STANDARD)} de la production autoconsomm&eacute;e. Plus la couleur est fonc&eacute;e, plus le kit est rentabilis&eacute; vite.
              </p>

              <div className="grid md:grid-cols-[1fr_200px] gap-6 items-start">
                <figure className="m-0">
                  <FranceRentabiliteMap
                    viewBox={FRANCE_MAP_VIEWBOX}
                    depts={rows.map((r) => ({
                      code: r.code,
                      name: r.name,
                      productionKwh: r.productionKwh,
                      savingsYear1: r.savingsYear1,
                      roiYears: r.roiYears,
                      rank: r.rank,
                    }))}
                  >
                    <svg
                      viewBox={FRANCE_MAP_VIEWBOX}
                      className="w-full h-auto"
                      role="img"
                      aria-label={`Carte des 96 départements colorés selon le nombre d'années de retour sur investissement d'un kit solaire de balcon : de ${yrs(stats.minRoi)} ans (${stats.best.name}) à ${yrs(stats.maxRoi)} ans (${stats.worst.name}). Le tableau complet est disponible plus bas.`}
                    >
                      {FRANCE_DEPARTEMENTS_PATHS.map((p) => {
                        const r = byCode.get(p.code)!;
                        return (
                          <path
                            key={p.code}
                            d={p.d}
                            data-code={p.code}
                            fill={roiColor(r.roiYears)}
                            stroke="#FBF8F1"
                            strokeWidth={1.2}
                            strokeLinejoin="round"
                            className="cursor-pointer transition-opacity hover:opacity-85"
                          >
                            <title>{`${r.name} (${r.code}) : ${yrs(r.roiYears)} ans, ${r.productionKwh} kWh/an, ${r.savingsYear1} €/an`}</title>
                          </path>
                        );
                      })}
                      {/* Encart Paris et petite couronne (agrandi) */}
                      <g aria-hidden="true">
                        <rect x={IDF_INSET.x - 6} y={IDF_INSET.y - 26} width={IDF_INSET.size + 12} height={IDF_INSET.size + 32} rx={8} fill="#FFFFFF" stroke="#E5E0D4" />
                        <text x={IDF_INSET.x} y={IDF_INSET.y - 8} fontSize={17} fill="#4A4A44" fontWeight={600}>
                          Paris et petite couronne
                        </text>
                        <g transform={IDF_INSET.transform}>
                          {IDF_INSET.paths.map((p) => {
                            const r = byCode.get(p.code)!;
                            return (
                              <path
                                key={p.code}
                                d={p.d}
                                data-code={p.code}
                                fill={roiColor(r.roiYears)}
                                stroke="#FBF8F1"
                                strokeWidth={1.2 / IDF_INSET.scale}
                                strokeLinejoin="round"
                                className="cursor-pointer"
                              />
                            );
                          })}
                        </g>
                      </g>
                    </svg>
                  </FranceRentabiliteMap>
                  <figcaption className="text-[11px] text-stone mt-3 leading-relaxed">
                    Carte : MonBalconSolaire.fr, {UPDATED_LABEL} (CC BY 4.0). Contours : IGN Admin Express via france-geojson (Licence Ouverte Etalab).
                  </figcaption>
                </figure>

                <div className="md:sticky md:top-24">
                  <div className="text-xs font-bold uppercase tracking-widest text-stone mb-3">Retour sur investissement</div>
                  <ul className="space-y-2">
                    {ROI_BINS.map((b, i) => {
                      const min = i === 0 ? -Infinity : ROI_BINS[i - 1].max;
                      const count = rows.filter((r) => r.roiYears >= min && r.roiYears < b.max).length;
                      return (
                        <li key={b.label} className="flex items-center gap-2 text-sm">
                          <span className="inline-block w-5 h-4 rounded-sm border border-border shrink-0" style={{ background: b.color }} aria-hidden="true" />
                          <span className="text-charcoal">{b.label}</span>
                          <span className="ml-auto font-mono text-xs text-stone">{count}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-[11px] text-stone mt-3 leading-relaxed">Nombre de d&eacute;partements par classe. Inflation du tarif de {KWH_INFLATION_LABEL} incluse.</p>
                </div>
              </div>
            </section>

            {/* ─── Top / Flop ─── */}
            <section aria-labelledby="classement">
              <h2 id="classement" className="text-2xl font-extrabold mb-2">
                Top 10 et flop 10 des d&eacute;partements
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Le classement suit le gradient d&apos;ensoleillement attendu : l&apos;arc m&eacute;diterran&eacute;en, la Corse et les Alpes du Sud en t&ecirc;te, le
                quart nord-est et les Hauts-de-France en queue. Les d&eacute;partements &agrave; ROI identique partagent le m&ecirc;me rang.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Les 10 plus rentables', list: top10, border: 'border-l-green' },
                  { title: 'Les 10 moins rentables', list: flop10, border: 'border-l-amber' },
                ].map((block) => (
                  <div key={block.title} className={`card-lg border-l-4 ${block.border}`}>
                    <h3 className="font-bold text-lg mb-3">{block.title}</h3>
                    <ol className="space-y-1.5">
                      {block.list.map((r) => (
                        <li key={r.code} className="flex items-baseline gap-2 text-sm">
                          <span className="font-mono text-xs text-stone w-6 text-right shrink-0">{r.rank}</span>
                          <span className="font-mono text-xs text-amber-dark font-semibold w-6 shrink-0">{r.code}</span>
                          <span className="font-semibold truncate">{r.name}</span>
                          <span className="ml-auto font-mono text-xs text-charcoal-light whitespace-nowrap">{r.productionKwh} kWh</span>
                          <span className="font-mono font-bold whitespace-nowrap w-16 text-right">{yrs(r.roiYears)} ans</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Grandes villes ─── */}
            <section aria-labelledby="villes">
              <h2 id="villes" className="text-2xl font-extrabold mb-2">
                Et dans les 10 plus grandes villes ?
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Chiffres du d&eacute;partement de chaque ville (valeur moyenne d&eacute;partementale, pas un calcul &agrave; l&apos;adresse). Paris se classe {rankLabel(paris.rank)} sur 96 :
                {' '}{paris.productionKwh}&nbsp;kWh/an et {yrs(paris.roiYears)}&nbsp;ans de retour sur investissement.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th scope="col" className="p-3 text-left font-bold">Ville</th>
                      <th scope="col" className="p-3 text-left font-bold">D&eacute;partement</th>
                      <th scope="col" className="p-3 text-right font-bold">kWh/an</th>
                      <th scope="col" className="p-3 text-right font-bold">&euro;/an</th>
                      <th scope="col" className="p-3 text-right font-bold">ROI</th>
                      <th scope="col" className="p-3 text-right font-bold">Rang</th>
                    </tr>
                  </thead>
                  <tbody>
                    {villes.map(({ ville, d }, i) => (
                      <tr key={ville} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{ville}</td>
                        <td className="p-3 text-charcoal-light">
                          {d.name} ({d.code})
                        </td>
                        <td className="p-3 text-right font-mono">{d.productionKwh}</td>
                        <td className="p-3 text-right font-mono">{d.savingsYear1}</td>
                        <td className="p-3 text-right font-mono font-bold">{yrs(d.roiYears)} ans</td>
                        <td className="p-3 text-right font-mono text-stone">{d.rank}/96</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ─── Régions ─── */}
            <section aria-labelledby="regions">
              <h2 id="regions" className="text-2xl font-extrabold mb-2">
                Classement par r&eacute;gion
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Valeur m&eacute;diane des d&eacute;partements de chaque r&eacute;gion. Les grandes r&eacute;gions cachent des &eacute;carts internes : en {aura.region},
                le kit est rentabilis&eacute; en {yrs(aura.best.roiYears)}&nbsp;ans en {aura.best.name} contre {yrs(aura.worst.roiYears)}&nbsp;ans au plus bas ({aura.worst.name}, {aura.worst.code}).
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th scope="col" className="p-3 text-left font-bold">R&eacute;gion</th>
                      <th scope="col" className="p-3 text-right font-bold">ROI m&eacute;dian</th>
                      <th scope="col" className="p-3 text-right font-bold">kWh/an</th>
                      <th scope="col" className="p-3 text-left font-bold">Meilleur d&eacute;p.</th>
                      <th scope="col" className="p-3 text-left font-bold">Moins bon d&eacute;p.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regions.map((g, i) => (
                      <tr key={g.region} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{g.region === 'PACA' ? 'Provence-Alpes-Côte d’Azur' : g.region}</td>
                        <td className="p-3 text-right font-mono font-bold">{yrs(g.medianRoi)} ans</td>
                        <td className="p-3 text-right font-mono">{g.medianProduction}</td>
                        <td className="p-3 text-charcoal-light">
                          {g.best.name} ({yrs(g.best.roiYears)})
                        </td>
                        <td className="p-3 text-charcoal-light">
                          {g.worst.name} ({yrs(g.worst.roiYears)})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ─── CTA calculateur ─── */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre balcon n&apos;est pas plein sud ?</p>
              <p className="text-sm text-charcoal-light mb-4 max-w-xl mx-auto">
                La carte suppose une exposition sud id&eacute;ale. Le calculateur ajuste le r&eacute;sultat &agrave; votre orientation, votre surface, votre pr&eacute;sence en
                journ&eacute;e et votre budget, et vous dit honn&ecirc;tement si un kit n&apos;est pas rentable pour vous.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer le ROI de mon balcon &rarr;
              </Link>
            </div>

            {/* ─── Tableau complet ─── */}
            <section aria-labelledby="tableau">
              <h2 id="tableau" className="text-2xl font-extrabold mb-2">
                Les 96 d&eacute;partements : tableau complet
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Cliquez sur un en-t&ecirc;te pour trier. La colonne &laquo;&nbsp;ROI {ALTERNATIVE_KIT.priceEur}&nbsp;&euro;&nbsp;&raquo; donne le r&eacute;sultat pour un kit de m&ecirc;me puissance
                vendu {ALTERNATIVE_KIT.priceEur}&nbsp;&euro; : le
                prix d&apos;achat p&egrave;se autant que le climat. Gain net = &eacute;conomies cumul&eacute;es sur {ANALYSIS_DURATION_YEARS}&nbsp;ans moins le prix du kit ({REFERENCE_KIT.priceEur}&nbsp;&euro;).
              </p>
              <RentabiliteTable
                rows={rows.map((r) => ({
                  code: r.code,
                  name: r.name,
                  region: r.region === 'PACA' ? 'Provence-Alpes-Côte d’Azur' : r.region,
                  productible: r.productible,
                  productionKwh: r.productionKwh,
                  savingsYear1: r.savingsYear1,
                  roiYears: r.roiYears,
                  roiYearsAlt: r.roiYearsAlt,
                  netGain25: r.netGain25,
                  rank: r.rank,
                }))}
              />
              <p className="text-xs text-stone mt-3">
                Donn&eacute;es brutes (avec productibles PVGIS et retenus) :{' '}
                <a href={CSV_PATH} className="text-green hover:underline font-semibold">
                  fichier CSV, 96 lignes
                </a>
                .
              </p>
            </section>

            {/* ─── Lecture ─── */}
            <section aria-labelledby="lecture">
              <h2 id="lecture" className="text-2xl font-extrabold mb-4">
                Ce que montre la carte (et ce qu&apos;elle ne montre pas)
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  <strong className="text-charcoal">Partout en m&eacute;tropole, le kit se rembourse bien avant la fin de sa garantie.</strong> M&ecirc;me dans le{' '}
                  {stats.worst.name}, {yrs(stats.worst.roiYears)}&nbsp;ans suffisent, pour une garantie de 25&nbsp;ans sur le kit de r&eacute;f&eacute;rence. Le
                  climat change la vitesse du retour, pas sa r&eacute;alit&eacute;, dans les conditions de la carte.
                </p>
                <p>
                  <strong className="text-charcoal">Le prix d&apos;achat compte autant que l&apos;ensoleillement.</strong> Passer de {REFERENCE_KIT.priceEur} &agrave;{' '}
                  {ALTERNATIVE_KIT.priceEur}&nbsp;&euro; pour la m&ecirc;me puissance fait gagner {yrs(Math.round((stats.medianRoi - stats.medianRoiAlt) * 10) / 10)}&nbsp;an
                  {stats.medianRoi - stats.medianRoiAlt >= 2 ? 's' : ''} sur la m&eacute;diane.
                  Dans le {stats.worst.name}, le kit &agrave; {ALTERNATIVE_KIT.priceEur}&nbsp;&euro; ({yrs(stats.worst.roiYearsAlt)}&nbsp;ans) fait mieux que le kit &agrave;{' '}
                  {REFERENCE_KIT.priceEur}&nbsp;&euro; en {stats.best.name} ({yrs(stats.best.roiYears)}&nbsp;ans){stats.worst.roiYearsAlt < stats.best.roiYears ? '' : ' ou presque'}.
                </p>
                <p>
                  <strong className="text-charcoal">Votre balcon compte plus que votre d&eacute;partement.</strong> Une exposition est ou ouest, une pose verticale
                  contre un garde-corps ou quelques heures d&apos;ombre d&apos;un immeuble voisin p&egrave;sent lourd. Avec le coefficient est/ouest de notre
                  calculateur ({String(EST_OUEST_COEF).replace('.', ',')}), un balcon est ou ouest dans les {marseille.name} est rentabilis&eacute; en{' '}
                  {yrs(roiMarseilleEO)}&nbsp;ans, contre {yrs(paris.roiYears)}&nbsp;ans pour un balcon plein sud &agrave; Paris. Voir notre guide sur{' '}
                  <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green hover:underline">
                    l&apos;orientation d&apos;un panneau de balcon
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* ─── Méthodologie ─── */}
            <section aria-labelledby="methodologie">
              <h2 id="methodologie" className="text-2xl font-extrabold mb-4">
                M&eacute;thodologie
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Tous les chiffres de cette page sont calcul&eacute;s automatiquement &agrave; la publication, par les m&ecirc;mes fonctions que notre{' '}
                  <Link href="/calculateur" className="text-green hover:underline">
                    calculateur
                  </Link>{' '}
                  et nos avis produits (aucun chiffre saisi &agrave; la main). Le d&eacute;tail des hypoth&egrave;ses est public sur la page{' '}
                  <Link href="/methodologie" className="text-green hover:underline">
                    m&eacute;thodologie
                  </Link>
                  .
                </p>
                <div className="overflow-x-auto -mx-5 md:mx-0">
                  <table className="w-full text-sm border-collapse min-w-[520px]">
                    <thead>
                      <tr className="border-b-2 border-green/20 bg-cream/50">
                        <th scope="col" className="p-3 text-left font-bold">Param&egrave;tre</th>
                        <th scope="col" className="p-3 text-left font-bold">Valeur</th>
                        <th scope="col" className="p-3 text-left font-bold">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Ensoleillement', 'Productible moyen par département, sud, 30°', 'PVGIS 5.3 (Centre commun de recherche, Commission européenne)'],
                        ['Recalage', `Rhône (${PVGIS_RHONE} kWh/kWc PVGIS) = ${PVGIS_REFERENCE_LYON} kWh/kWc`, 'Référence prudente du site, Lyon'],
                        ['Kit de référence', `Kit plug-and-play ${REFERENCE_KIT.powerWc} Wc, ${REFERENCE_KIT.priceEur} €`, 'Prix public courant d’un kit 500 Wc grand public, octobre 2026'],
                        ['Kit alternatif', `Kit plug-and-play ${ALTERNATIVE_KIT.powerWc} Wc, ${ALTERNATIVE_KIT.priceEur} €`, 'Prix bas constaté pour la même puissance, octobre 2026'],
                        ['Performance ratio', String(PERFORMANCE_RATIO).replace('.', ','), 'Onduleur, câblage, température, salissure'],
                        ['Autoconsommation', pct(AUTOCONSO_STANDARD), 'Sans batterie, foyer présent en journée'],
                        ['Prix du kWh', KWH_PRICE_LABEL, KWH_PRICE_SOURCE],
                        ['Inflation du tarif', KWH_INFLATION_LABEL, 'Moyenne 2012-2026 du tarif réglementé (CRE)'],
                        ['Durée d’analyse', `${ANALYSIS_DURATION_YEARS} ans`, 'Durée de garantie usuelle des panneaux'],
                      ].map(([p, v, s], i) => (
                        <tr key={p} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                          <td className="p-3 font-semibold text-charcoal">{p}</td>
                          <td className="p-3 font-mono text-xs">{v}</td>
                          <td className="p-3 text-xs">{s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="font-mono text-xs bg-cream-dark/60 rounded-brand p-3 text-charcoal">
                  Production (kWh/an) = 0,5 kWc &times; productible retenu &times; {String(PERFORMANCE_RATIO).replace('.', ',')}
                  <br />
                  &Eacute;conomies ann&eacute;e 1 (&euro;) = production &times; {String(AUTOCONSO_STANDARD).replace('.', ',')} &times; {KWH_PRICE_LABEL}
                  <br />
                  ROI = ann&eacute;e o&ugrave; les &eacute;conomies cumul&eacute;es (inflation {KWH_INFLATION_LABEL}) d&eacute;passent le prix du kit
                </p>
                <p>
                  <strong className="text-charcoal">Pourquoi un recalage ?</strong> PVGIS donne {PVGIS_RHONE}&nbsp;kWh/kWc pour le Rh&ocirc;ne avec un panneau inclin&eacute;
                  &agrave; 30&deg;. Sur un balcon, le panneau est souvent plus vertical et moins bien d&eacute;gag&eacute;. Nous utilisons donc les valeurs PVGIS comme
                  indice relatif entre d&eacute;partements, ramen&eacute; &agrave; {PVGIS_REFERENCE_LYON}&nbsp;kWh/kWc pour le Rh&ocirc;ne. Les estimations sont
                  volontairement prudentes.
                </p>
                <h3 className="font-bold text-lg text-charcoal pt-2">Limites</h3>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    'Une seule valeur par département : un département de montagne ou très étendu (Isère, Gironde, Pyrénées) cache des écarts locaux importants. Les productibles sont arrondis à 10 kWh/kWc près, d’où de nombreux ex aequo.',
                    `Orientation plein sud, sans ombre : un balcon est ou ouest produit environ ${Math.round((1 - EST_OUEST_COEF) * 100)} % de moins (coefficient de notre calculateur), un balcon nord beaucoup moins. Les ombres portées (immeuble, arbre, balcon du dessus) ne sont pas modélisées.`,
                    `Autoconsommation de ${pct(AUTOCONSO_STANDARD)} : c’est un scénario favorable, atteint par un foyer qui consomme en journée. Un logement vide de 8 h à 18 h autoconsomme moins, et le ROI s’allonge.`,
                    `Prix du kWh fixé au tarif réglementé EDF Base (${KWH_PRICE_LABEL}). Avec une offre heures creuses ou un tarif de marché plus bas, chaque kWh économisé vaut moins.`,
                    'Pas de vente du surplus, pas de batterie, pas de dégradation annuelle des panneaux ni de remplacement du micro-onduleur dans le calcul.',
                    'Les 5 départements d’outre-mer ne sont pas couverts (données et tarifs différents).',
                  ].map((t) => (
                    <li key={t} className="flex gap-2 text-sm">
                      <span className="text-amber-dark font-bold shrink-0" aria-hidden="true">
                        &#9888;
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm">
                  Nous n&apos;avons pas test&eacute; physiquement les kits dans chaque d&eacute;partement : il s&apos;agit d&apos;une mod&eacute;lisation analys&eacute;e &agrave;
                  partir de donn&eacute;es publiques.
                </p>
              </div>
            </section>

            {/* ─── Citer ─── */}
            <section aria-labelledby="citer" className="card-lg border-l-4 border-l-green bg-green-pale/20">
              <h2 id="citer" className="text-2xl font-extrabold mb-2">
                Citer ces donn&eacute;es
              </h2>
              <p className="text-sm text-charcoal-light leading-relaxed mb-5">
                Journalistes, blogueurs, collectivit&eacute;s : la carte, le tableau et le fichier CSV sont publi&eacute;s sous licence{' '}
                <a href="https://creativecommons.org/licenses/by/4.0/deed.fr" className="text-green hover:underline font-semibold" target="_blank" rel="noopener license">
                  Creative Commons CC BY 4.0
                </a>
                . Vous pouvez les reprendre librement, y compris dans un m&eacute;dia commercial, &agrave; une condition : citer MonBalconSolaire.fr{' '}
                <strong>avec un lien vers cette page</strong>. Derni&egrave;re mise &agrave; jour : {UPDATED_LABEL}.
              </p>

              <CopyText label="Citation" text={CITATION_COURTE} trackingLabel="citation-courte" />
              <CopyText label="Lien HTML" text={CITATION_HTML} trackingLabel="citation-html" />

              <h3 className="font-bold text-lg mt-6 mb-2">Int&eacute;grer la carte sur votre site</h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                Coop&eacute;ratives, collectivit&eacute;s, blogs : collez ce code dans une page de votre site pour afficher la carte interactive (s&eacute;lection du
                d&eacute;partement, chiffres au survol), avec la mention de la source.{' '}
                <a href="/embed/carte-rentabilite" className="text-green hover:underline font-semibold" target="_blank" rel="noopener">
                  Voir l&apos;aper&ccedil;u
                </a>
                .
              </p>
              <CopyText label="Code d&apos;int&eacute;gration" text={EMBED_HTML} trackingLabel="embed-carte" />

              <h3 className="font-bold text-lg mt-6 mb-3">Chiffres cl&eacute;s pour la presse</h3>
              <ul className="space-y-2 mb-5">
                {CHIFFRES_PRESSE.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-charcoal-light leading-relaxed">
                    <span className="text-green font-bold shrink-0" aria-hidden="true">
                      &bull;
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 items-center">
                <a href={CSV_PATH} className="btn-primary text-sm inline-flex">
                  T&eacute;l&eacute;charger les donn&eacute;es (CSV)
                </a>
                <a href="mailto:contact@monbalconsolaire.fr?subject=Carte%20rentabilit%C3%A9%20kit%20solaire%20balcon" className="btn-secondary text-sm inline-flex">
                  Contact presse
                </a>
              </div>
              <p className="text-xs text-stone mt-3">
                Une donn&eacute;e d&eacute;partementale d&eacute;taill&eacute;e, une carte haute d&eacute;finition ou un chiffre pour votre r&eacute;gion ? &Eacute;crivez &agrave;{' '}
                <a href="mailto:contact@monbalconsolaire.fr" className="text-green hover:underline">
                  contact@monbalconsolaire.fr
                </a>
                .
              </p>
            </section>

            {/* ─── FAQ ─── */}
            <section aria-labelledby="faq">
              <h2 id="faq" className="text-2xl font-extrabold mb-6">
                Questions fr&eacute;quentes
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={faq.question} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-3">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ─── Articles liés ─── */}
            <section aria-labelledby="lies">
              <h2 id="lies" className="text-2xl font-extrabold mb-4">
                Articles li&eacute;s
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { href: '/blog/combien-rapporte-panneau-solaire-balcon', title: 'Combien rapporte vraiment un panneau solaire de balcon', sub: 'Les économies réelles, kit par kit' },
                  { href: '/guide/orientation-panneau-solaire-balcon', title: 'Orientation d’un panneau de balcon : sud, est, ouest', sub: 'Ce que vous perdez hors plein sud' },
                  { href: '/blog/panneau-solaire-balcon-nord', title: 'Panneau solaire de balcon au nord : est-ce rentable ?', sub: 'Le cas des balcons mal exposés' },
                  { href: '/guide/declaration-cacsi-enedis-panneau-solaire', title: 'Déclarer son kit à Enedis (CACSI)', sub: 'La démarche gratuite et obligatoire, pas à pas' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                    <h3 className="font-bold text-sm group-hover:text-green transition-colors">{a.title}</h3>
                    <p className="text-xs text-charcoal-light mt-1">{a.sub}</p>
                  </Link>
                ))}
              </div>
            </section>

            <NewsletterBanner />

            {/* ─── Footer ─── */}
            <div className="pt-8 border-t border-border-light space-y-3">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> productibles PVGIS 5.3 (Commission europ&eacute;enne) moyens par d&eacute;partement, sud, 30&deg;, recal&eacute;s sur
                Rh&ocirc;ne = {PVGIS_REFERENCE_LYON}&nbsp;kWh/kWc ; performance ratio {String(PERFORMANCE_RATIO).replace('.', ',')} ; autoconsommation{' '}
                {pct(AUTOCONSO_STANDARD)} ; tarif {KWH_PRICE_LABEL} ({KWH_PRICE_SOURCE}) ; inflation {KWH_INFLATION_LABEL} ; {ANALYSIS_DURATION_YEARS}&nbsp;ans. Calcul :{' '}
                <code>src/lib/pricing.ts</code>, identique &agrave; l&apos;ensemble du site.{' '}
                <Link href="/methodologie" className="text-green hover:underline">
                  En savoir plus
                </Link>
                .
              </p>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Contours des d&eacute;partements :</strong> IGN Admin Express, via{' '}
                <a href="https://github.com/gregoiredavid/france-geojson" className="text-green hover:underline" target="_blank" rel="noopener">
                  gregoiredavid/france-geojson
                </a>{' '}
                (version simplifi&eacute;e), Licence Ouverte / Open Licence Etalab ; projection conique conforme de Lambert et simplification par nos soins.
              </p>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence :</strong> cette &eacute;tude ne cite aucune marque et ne contient aucun lien commercial. MonBalconSolaire est un site
                ind&eacute;pendant financ&eacute; par l&apos;affiliation sur ses pages d&apos;avis et de comparatifs. Les chiffres ci-dessus ne d&eacute;pendent que de
                l&apos;ensoleillement, de la puissance et du prix du kit, et des hypoth&egrave;ses publiques ci-dessus.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
