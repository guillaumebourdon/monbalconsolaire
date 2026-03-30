import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avis & tests kits solaires balcon',
  description: 'Avis détaillés et tests des kits solaires plug-and-play : Sunology PLAY2, Beem On, Sunethic F500. Retours d\'expérience et données réelles.',
};

export default function AvisPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-amber mb-4 inline-block">Avis & tests</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Avis et tests de kits solaires
        </h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">
          Des avis détaillés, sourcés et honnêtes sur les kits solaires plug-and-play les plus populaires en France.
        </p>
        <div className="card-lg text-center py-16 bg-amber-pale/30 border-amber/10">
          <p className="text-amber-dark font-semibold text-lg mb-2">Tests en préparation</p>
          <p className="text-stone text-sm mb-6">Les premiers avis détaillés (Sunology PLAY2, Beem On) seront publiés très prochainement.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">☀ Calculer mes économies →</Link>
        </div>
      </div>
    </section>
  );
}
