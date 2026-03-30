import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog solaire balcon',
  description: 'Articles, actualités et conseils sur le solaire de balcon en France. Réglementation, astuces, économies d\'énergie.',
};

export default function BlogPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-green mb-4 inline-block">Blog</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Blog MonBalconSolaire
        </h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">
          Actualités, conseils et analyses sur le solaire de balcon en France.
        </p>
        <div className="card-lg text-center py-16 bg-green-pale/30 border-green/10">
          <p className="text-green font-semibold text-lg mb-2">Premiers articles à venir</p>
          <p className="text-stone text-sm mb-6">Le blog sera alimenté avec 2-3 articles par semaine dès le lancement.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">☀ Calculer mes économies →</Link>
        </div>
      </div>
    </section>
  );
}
