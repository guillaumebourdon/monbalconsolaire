import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-2xl text-center">
        <div className="text-6xl mb-6">&#9728;&#65039;</div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4">
          Page introuvable
        </h1>
        <p className="text-charcoal-light mb-8">
          Cette page n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e. Mais votre balcon a probablement du potentiel solaire !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-secondary">
            &larr; Retour &agrave; l&apos;accueil
          </Link>
          <Link href="/calculateur" className="btn-primary">
            Calculer mes &eacute;conomies
          </Link>
        </div>

        <div className="text-left">
          <h2 className="font-bold text-lg mb-4 text-center">Peut-&ecirc;tre cherchez-vous&hellip;</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/comparatif/meilleur-kit-solaire-2026" className="card hover:shadow-brand-lg transition-all group">
              <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires 2026</h3>
              <p className="text-xs text-charcoal-light mt-1">Sunology, Beem, Zendure, EcoFlow compar&eacute;s</p>
            </Link>
            <Link href="/quel-kit-choisir" className="card hover:shadow-brand-lg transition-all group">
              <h3 className="font-bold text-sm group-hover:text-green transition-colors">Quel kit choisir ?</h3>
              <p className="text-xs text-charcoal-light mt-1">Tous les avis et comparatifs en un seul endroit</p>
            </Link>
            <Link href="/guide/panneau-solaire-balcon-debutant" className="card hover:shadow-brand-lg transition-all group">
              <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide d&eacute;butant</h3>
              <p className="text-xs text-charcoal-light mt-1">Tout savoir avant de se lancer</p>
            </Link>
            <Link href="/solaire-balcon" className="card hover:shadow-brand-lg transition-all group">
              <h3 className="font-bold text-sm group-hover:text-green transition-colors">Solaire par d&eacute;partement</h3>
              <p className="text-xs text-charcoal-light mt-1">Production et rentabilit&eacute; dans votre zone</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
