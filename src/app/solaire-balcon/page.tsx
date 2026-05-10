import Link from 'next/link';
import type { Metadata } from 'next';
import { DEPARTMENTS } from '@/data/departments';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Solaire de balcon par département — Production et rentabilité 2026',
  description: 'Trouvez la production solaire et la rentabilité d\'un kit solaire de balcon dans votre département. 96 départements français couverts avec données PVGIS.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/solaire-balcon',
  },
};

const TARIF_KWH = 0.2516;
const COEFF = 0.85;

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const regions = [...new Set(DEPARTMENTS.map(d => d.region))].sort();

export default function SolaireBalconIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <Breadcrumbs items={[{ label: 'Solaire par département' }]} />
        <div className="text-center mb-10">
          <div className="badge-green mb-4 inline-block">96 départements</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Kit solaire balcon : production par département</h1>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Trouvez la production exacte et la rentabilité d&apos;un kit solaire de balcon dans votre département. Données PVGIS, calculs actualisés mai 2026.
          </p>
        </div>

        <div className="space-y-8">
          {regions.map(region => {
            const depts = DEPARTMENTS.filter(d => d.region === region).sort((a, b) => a.code.localeCompare(b.code));
            return (
              <div key={region}>
                <h2 className="font-bold text-lg mb-3 text-charcoal">{region}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {depts.map(d => {
                    const prod = Math.round(0.45 * d.irradiation * COEFF);
                    const eco = Math.round(prod * 0.45 * TARIF_KWH);
                    const slug = slugify(d.name);
                    return (
                      <Link
                        key={d.code}
                        href={`/solaire-balcon/${slug}`}
                        className="card hover:shadow-brand-lg transition-all group flex items-center justify-between py-4 px-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-amber-dark font-semibold w-7">{d.code}</span>
                          <span className="font-semibold text-sm group-hover:text-green transition-colors">{d.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-stone">
                          <span className="font-mono">{d.irradiation} kWh</span>
                          <span className="font-mono text-green font-semibold">{eco} &euro;/an</span>
                          <span className="text-green">&rarr;</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-12">
          <p className="font-semibold text-lg mb-2">Calculez pour votre orientation exacte</p>
          <p className="text-sm text-charcoal-light mb-4">
            Les chiffres ci-dessus sont pour une orientation sud. Le calculateur ajuste selon votre exposition réelle.
          </p>
          <Link href="/calculateur" className="btn-primary inline-flex">
            Calculer mes économies &rarr;
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-border-light">
          <p className="text-xs text-stone leading-relaxed">
            <strong>Méthodologie :</strong> irradiation PVGIS (Commission européenne), kit 450 Wc, orientation sud, inclinaison 30°, coefficient 0,85, autoconsommation 45 %, tarif EDF 0,2516 €/kWh (mai 2026).{' '}
            <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
