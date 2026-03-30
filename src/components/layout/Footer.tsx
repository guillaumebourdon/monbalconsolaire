import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="container-brand py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="w-7 h-7 bg-gradient-to-br from-amber to-amber-light rounded-lg flex items-center justify-center text-sm">
                ☀
              </span>
              <span className="font-extrabold text-base tracking-tight">
                <span className="text-charcoal">Mon</span>
                <span className="text-green">Balcon</span>
                <span className="text-amber">Solaire</span>
              </span>
            </Link>
            <p className="text-sm text-stone leading-relaxed">
              Le guide indépendant des kits solaires pour balcon et appartement en France.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">Outils</h4>
            <ul className="space-y-2.5">
              <li><Link href="/calculateur" className="text-sm text-stone hover:text-green transition-colors">Calculateur de rentabilité</Link></li>
              <li><Link href="/comparatif" className="text-sm text-stone hover:text-green transition-colors">Comparatifs de kits</Link></li>
              <li><Link href="/guide" className="text-sm text-stone hover:text-green transition-colors">Guides pratiques</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">Contenu</h4>
            <ul className="space-y-2.5">
              <li><Link href="/avis" className="text-sm text-stone hover:text-green transition-colors">Avis & tests</Link></li>
              <li><Link href="/blog" className="text-sm text-stone hover:text-green transition-colors">Blog</Link></li>
              <li><Link href="/a-propos" className="text-sm text-stone hover:text-green transition-colors">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">Légal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/mentions-legales" className="text-sm text-stone hover:text-green transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="text-sm text-stone hover:text-green transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-border-light">
          <p className="text-xs text-stone-light leading-relaxed max-w-3xl">
            <strong className="text-stone">Transparence affiliation :</strong> MonBalconSolaire est un guide indépendant. Nous ne vendons aucun produit.
            Certains liens présents sur ce site sont des liens affiliés : si vous effectuez un achat via ces liens, nous recevons une commission sans surcoût pour vous.
            Cela nous permet de maintenir ce site gratuit et indépendant. Notre contenu éditorial n'est jamais influencé par ces partenariats.
          </p>
          <p className="text-xs text-stone-light mt-4">
            © {new Date().getFullYear()} MonBalconSolaire — Beélevén SASU — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
