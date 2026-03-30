import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-xl text-center">
        <div className="text-6xl mb-6">☀️</div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">
          Page introuvable
        </h1>
        <p className="text-charcoal-light mb-8">
          Cette page n'existe pas ou a été déplacée. Mais votre balcon a probablement du potentiel solaire !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-secondary">
            ← Retour à l'accueil
          </Link>
          <Link href="/calculateur" className="btn-primary">
            ☀ Calculer mes économies
          </Link>
        </div>
      </div>
    </section>
  );
}
