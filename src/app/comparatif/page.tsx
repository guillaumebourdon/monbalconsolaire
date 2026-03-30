import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparatif kits solaires balcon 2026',
  description: 'Comparatif indépendant des meilleurs kits solaires plug-and-play pour balcon : Sunology PLAY2, Beem On, Sunethic F500. Prix, puissance, rentabilité.',
};

export default function ComparatifPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Meilleur kit solaire plug-and-play 2026 : comparatif complet
        </h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">
          Comparaison indépendante et sourcée des meilleurs kits solaires pour balcon et appartement en France.
        </p>

        {/* Article content will go here */}
        <div className="card-lg text-center py-16 bg-amber-pale/30 border-amber/10">
          <p className="text-amber-dark font-semibold text-lg mb-2">Article en cours de rédaction</p>
          <p className="text-stone text-sm">Le comparatif complet Sunology vs Beem vs Sunethic sera publié prochainement.</p>
          <Link href="/calculateur" className="btn-primary mt-6 inline-flex">
            ☀ Calculer mes économies en attendant →
          </Link>
        </div>
      </div>
    </section>
  );
}
