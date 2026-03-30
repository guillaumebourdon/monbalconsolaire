import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides solaire balcon',
  description: 'Guides pratiques pour installer un kit solaire sur votre balcon. Réglementation, installation, rentabilité, droits des locataires.',
};

export default function GuidePage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-green mb-4 inline-block">Guides pratiques</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Guides du solaire de balcon
        </h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">
          Tout ce qu'il faut savoir pour installer un kit solaire sur votre balcon : réglementation, installation, droits des locataires.
        </p>
        <div className="card-lg text-center py-16 bg-green-pale/30 border-green/10">
          <p className="text-green font-semibold text-lg mb-2">Guides en cours de rédaction</p>
          <p className="text-stone text-sm">Les guides complets seront publiés prochainement.</p>
          <Link href="/calculateur" className="btn-primary mt-6 inline-flex">☀ Calculer mes économies →</Link>
        </div>
      </div>
    </section>
  );
}
