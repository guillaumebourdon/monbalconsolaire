import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DEPARTMENTS } from '@/data/departments';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

const TARIF_KWH = 0.2516;
const COEFF_PERTES = 0.85;

const KITS = [
  { name: 'Sunology PLAY 2', power: 0.45, price: 599, slug: '/avis/sunology-play-2', badge: 'Meilleur choix' },
  { name: 'Beem Kit 300W', power: 0.30, price: 299, slug: '/avis/beem-kit-300w', badge: 'Petit budget' },
  { name: 'Beem On 460W', power: 0.46, price: 599, slug: '/avis/beem-on-460w', badge: 'Modulaire' },
  { name: 'Zendure SolarFlow', power: 0.84, price: 900, slug: '/avis/zendure-solarflow', badge: 'Avec batterie', autocons: 0.80 },
  { name: 'DualSun PREASY', power: 0.42, price: 870, slug: '/avis/dualsun-preasy', badge: 'Made in France' },
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
  const production = Math.round(kit.power * irradiation * COEFF_PERTES);
  const autocons = (kit as { autocons?: number }).autocons || 0.45;
  const kwhValorises = Math.round(production * autocons);
  const economies = Math.round(kwhValorises * TARIF_KWH);
  const roi = parseFloat((kit.price / economies).toFixed(1));
  return { ...kit, production, kwhValorises, economies, roi, autocons };
}

export function generateStaticParams() {
  return DEPARTMENTS.map(d => ({ slug: slugify(d.name) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dept = getDeptBySlug(params.slug);
  if (!dept) return {};
  return {
    title: `Kit solaire balcon ${dept.name} (${dept.code}) : production et rentabilité 2026`,
    description: `Combien produit un kit solaire sur un balcon dans le ${dept.name} (${dept.code}) ? Irradiation ${dept.irradiation} kWh/kWc, calcul de rentabilité et meilleur kit recommandé.`,
    alternates: {
      canonical: `https://monbalconsolaire.fr/solaire-balcon/${params.slug}`,
    },
  };
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const dept = getDeptBySlug(params.slug);
  if (!dept) notFound();

  const results = KITS.map(k => calcKit(k, dept.irradiation)).sort((a, b) => b.economies - a.economies);
  const best = results[0];

  const irradiationLevel = dept.irradiation >= 1400 ? 'excellent' : dept.irradiation >= 1200 ? 'bon' : dept.irradiation >= 1050 ? 'correct' : 'modéré';
  const irradiationEmoji = dept.irradiation >= 1400 ? '\u2600\ufe0f' : dept.irradiation >= 1200 ? '\ud83c\udf24\ufe0f' : '\u26c5';

  const nearbyDepts = DEPARTMENTS
    .filter(d => d.region === dept.region && d.code !== dept.code)
    .slice(0, 4);

  const faqData = [
    {
      question: `Un kit solaire de balcon est-il rentable dans le ${dept.name} ?`,
      answer: `Oui. Avec une irradiation de ${dept.irradiation} kWh/kWc/an (${irradiationLevel}), un kit Sunology PLAY 2 (450 Wc, 599 €) produit environ ${results.find(r => r.name === 'Sunology PLAY 2')?.production || 0} kWh/an et permet d'économiser ${results.find(r => r.name === 'Sunology PLAY 2')?.economies || 0} €/an. ROI en ${results.find(r => r.name === 'Sunology PLAY 2')?.roi || 0} ans pour une garantie de 25 ans.`,
    },
    {
      question: `Quelle est l'irradiation solaire dans le ${dept.name} ?`,
      answer: `Le ${dept.name} (${dept.code}) reçoit en moyenne ${dept.irradiation} kWh/kWc/an en orientation sud. C'est un potentiel ${irradiationLevel}. Pour comparaison, la moyenne nationale est d'environ 1 200 kWh/kWc/an, les Bouches-du-Rhône sont à 1 500 et le Nord à 1 020.`,
    },
    {
      question: `Quel est le meilleur kit solaire pour un balcon dans le ${dept.name} ?`,
      answer: `Le ${best.name} offre le meilleur rendement dans le ${dept.name} avec ${best.production} kWh/an de production et ${best.economies} €/an d'économies (ROI ${best.roi} ans). Pour un budget serré, le Beem Kit 300W à 299 € est aussi rentable avec un ROI de ${results.find(r => r.name === 'Beem Kit 300W')?.roi || 0} ans.`,
    },
    {
      question: 'Faut-il une autorisation pour installer un kit solaire sur un balcon ?',
      answer: 'Non, pas d\'autorisation préalable pour un kit plug-and-play de moins de 3 kWc. En revanche, vous devez faire la déclaration CACSI (Convention d\'Autoconsommation Sans Injection) auprès d\'Enedis. C\'est gratuit et prend 25 minutes en ligne. En copropriété, vérifiez le règlement mais la plupart des syndics acceptent les kits amovibles.',
    },
  ];

  return (
    <>
      <SchemaArticle
        title={`Kit solaire balcon ${dept.name} : production et rentabilité`}
        description={`Guide solaire de balcon pour le ${dept.name} (${dept.code}).`}
        url={`https://monbalconsolaire.fr/solaire-balcon/${params.slug}`}
        datePublished="2026-05-10"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Solaire par département', href: '/solaire-balcon' }, { label: dept.name }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">{dept.region}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon {dept.name} ({dept.code}) : production et rentabilité 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Combien produit un kit solaire sur un balcon dans le <strong>{dept.name}</strong> ? Avec une irradiation de <strong>{dept.irradiation} kWh/kWc/an</strong>, voici les chiffres exacts de production, d&apos;économies et de retour sur investissement pour chaque kit du marché.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Irradiation', value: `${dept.irradiation}`, unit: 'kWh/kWc/an', sub: `Potentiel ${irradiationLevel}`, color: 'amber' as const },
              { label: '\u00c9conomies/an', value: `${best.economies}\u202f\u20ac`, unit: '', sub: `avec le ${best.name}`, color: 'green' as const },
              { label: 'Retour sur invest.', value: `${best.roi} ans`, unit: '', sub: 'garanti 25 ans', color: 'green' as const },
            ].map((kpi, i) => (
              <div key={i} className={`relative overflow-hidden rounded-brand-xl border p-6 text-center shadow-brand flex flex-col justify-center ${
                kpi.color === 'amber'
                  ? 'border-amber/15 bg-gradient-to-br from-amber-pale/50 via-white to-amber-pale/20'
                  : 'border-green/15 bg-gradient-to-br from-green-pale/50 via-white to-green-pale/20'
              }`}>
                <div className="text-[10px] text-stone font-semibold uppercase tracking-widest mb-3">{kpi.label}</div>
                <div className={`font-mono font-extrabold text-2xl md:text-3xl leading-none ${kpi.color === 'amber' ? 'text-amber-dark' : 'text-green'}`}>
                  {kpi.value}
                </div>
                {kpi.unit && <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-1">{kpi.unit}</div>}
                <div className="text-xs text-charcoal-light mt-2">{kpi.sub}</div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-brand-xl border border-green/10 bg-gradient-to-br from-green-pale/40 via-white to-cream p-8 shadow-brand mb-10">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green to-green-light rounded-l-brand-xl" />
            <h2 className="font-bold text-lg mb-3 pl-4">Le potentiel solaire du {dept.name}</h2>
            <p className="text-sm text-charcoal-light leading-relaxed pl-4">
              Le département du {dept.name} ({dept.code}) en {dept.region} bénéficie d&apos;une irradiation solaire de <strong>{dept.irradiation} kWh/kWc/an</strong>, un potentiel <strong>{irradiationLevel}</strong>.
              {dept.irradiation >= 1300 && ' C\'est l\'un des départements les plus favorables au solaire en France.'}
              {dept.irradiation < 1100 && ' Même avec un ensoleillement plus faible que le sud, un kit solaire reste rentable grâce au prix élevé de l\'électricité (0,2516 €/kWh).'}
              {dept.irradiation >= 1100 && dept.irradiation < 1300 && ' Un kit solaire de balcon y est pleinement rentable avec un retour sur investissement de 4 à 7 ans.'}
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production et rentabilité par kit dans le {dept.name}</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Voici les chiffres pour chaque kit disponible, calculés avec l&apos;irradiation réelle du {dept.name} en orientation sud :
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
                          <Link href={kit.slug} className="text-green hover:underline font-semibold">{kit.name}</Link>
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
                Calcul : puissance × {dept.irradiation} kWh/kWc × 0,85 (pertes) × autoconsommation × 0,2516 €/kWh. Orientation sud. Autoconsommation 45 % sans batterie, 80 % avec batterie (Zendure).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation pour le {dept.name}</h2>
              <div className="space-y-4">
                <div className="card-lg border-l-4 border-l-green">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <div>
                      <h3 className="font-bold text-base">{best.name}</h3>
                      <p className="text-xs text-stone uppercase tracking-wider font-semibold mt-1">{best.badge}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-green text-lg">{best.economies} &euro;/an</div>
                      <div className="text-xs text-stone">ROI {best.roi} ans</div>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                    Dans le {dept.name}, le {best.name} produit <strong>{best.production} kWh/an</strong> en orientation sud.
                    {best.autocons > 0.5
                      ? ` Grâce à la batterie intégrée, vous autoconsommez ${Math.round(best.autocons * 100)} % de cette production.`
                      : ` Vous autoconsommez environ 45 % de cette production (le reste est injecté gratuitement sur le réseau).`}
                    {' '}Sur 25 ans de garantie, c&apos;est <strong>{Math.round(best.economies * 25).toLocaleString('fr-FR')} € d&apos;économies cumulées</strong> (sans compter la hausse du tarif EDF).
                  </p>
                  <Link href={best.slug} className="btn-primary text-sm py-2.5 inline-flex">
                    Voir l&apos;avis complet &rarr;
                  </Link>
                </div>

                {results.find(r => r.name === 'Beem Kit 300W') && (
                  <div className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">Alternative petit budget</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Le <Link href="/avis/beem-kit-300w" className="text-green hover:underline font-semibold">Beem Kit 300W</Link> à 299 € offre {results.find(r => r.name === 'Beem Kit 300W')?.economies} €/an d&apos;économies avec un ROI de {results.find(r => r.name === 'Beem Kit 300W')?.roi} ans. Le meilleur ratio pour tester le solaire sans gros investissement.
                    </p>
                  </div>
                )}
              </div>
            </section>

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
                <div className="grid grid-cols-2 gap-3">
                  {nearbyDepts.map(d => {
                    const dSlug = slugify(d.name);
                    const prod = Math.round(0.45 * d.irradiation * COEFF_PERTES);
                    const eco = Math.round(prod * 0.45 * TARIF_KWH);
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
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire 2026 : comparatif complet</h4>
                  <p className="text-xs text-charcoal-light mt-1">Tous les kits comparés point par point</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation : comment le calculer et l&apos;effacer</h4>
                  <p className="text-xs text-charcoal-light mt-1">Combien consomme votre foyer en permanence et comment le couvrir</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide débutant : tout savoir sur le solaire de balcon</h4>
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
                <strong>Méthodologie :</strong> irradiation PVGIS (Commission européenne), orientation sud, inclinaison 30°, coefficient de pertes 0,85. Tarif EDF base mai 2026 : 0,2516 €/kWh. Autoconsommation 45 % sans batterie, 80 % avec batterie.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
