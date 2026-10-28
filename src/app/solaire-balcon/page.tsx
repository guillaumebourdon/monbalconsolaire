import Link from 'next/link';
import type { Metadata } from 'next';
import { DEPARTMENTS } from '@/data/departments';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RENTABILITE_DEPARTEMENTS, REFERENCE_KIT } from '@/lib/rentabilite-departements';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Solaire de balcon par département — Production et rentabilité 2026',
  description: 'Trouvez la production solaire et la rentabilité d\'un kit solaire de balcon dans votre département. 96 départements français couverts avec données PVGIS.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/solaire-balcon',
  },
});

const RENTABILITE_BY_CODE = new Map(RENTABILITE_DEPARTEMENTS.map(r => [r.code, r]));

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
            Économies annuelles et retour sur investissement d&apos;un kit solaire de balcon de {REFERENCE_KIT.powerWc} Wc ({REFERENCE_KIT.priceEur} &euro;) dans chaque département. Données PVGIS, mêmes calculs que notre carte de France.
          </p>
        </div>

        <Link
          href="/etude/rentabilite-kit-solaire-balcon-departement"
          className="card-lg block mb-10 border-l-4 border-l-green bg-gradient-to-br from-green-pale/40 via-white to-amber-pale/20 hover:shadow-brand-lg transition-all group"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-amber-dark mb-1">&Eacute;tude &middot; Carte interactive</div>
          <div className="font-bold text-lg group-hover:text-green transition-colors">Carte de France de la rentabilit&eacute; d&apos;un kit solaire de balcon</div>
          <p className="text-sm text-charcoal-light mt-1">Les 96 d&eacute;partements class&eacute;s par ann&eacute;es de retour sur investissement, avec tableau complet et donn&eacute;es t&eacute;l&eacute;chargeables &rarr;</p>
        </Link>

        <div className="space-y-8">
          {regions.map(region => {
            const depts = DEPARTMENTS.filter(d => d.region === region).sort((a, b) => a.code.localeCompare(b.code));
            return (
              <div key={region}>
                <h2 className="font-bold text-lg mb-3 text-charcoal">{region}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {depts.map(d => {
                    const r = RENTABILITE_BY_CODE.get(d.code)!;
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
                          <span className="font-mono">{r.savingsYear1} &euro;/an</span>
                          <span className="font-mono text-green font-semibold">{r.roiYears.toLocaleString('fr-FR')} ans</span>
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
            <strong>Méthodologie :</strong> kit de référence {REFERENCE_KIT.name} ({REFERENCE_KIT.powerWc} Wc, {REFERENCE_KIT.priceEur} &euro;), orientation sud. Productible PVGIS (Commission européenne) par département, recalé sur notre référence prudente de Lyon (1 200 kWh/kWc), performance ratio 0,85, autoconsommation 85 %, tarif EDF 0,1940 €/kWh. Retour sur investissement actualisé avec une inflation du tarif de 3,3 %/an (CRE). Montants affichés : économies la 1re année et années de retour sur investissement.{' '}
            <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
