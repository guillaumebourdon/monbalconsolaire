import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="container-brand py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 80 80" fill="none">
                <rect x="0" y="0" width="80" height="80" rx="8" fill="none" stroke="#3D7A4A" strokeWidth="2.5"/>
                <rect x="4" y="52" width="72" height="4" rx="2" fill="#3D7A4A"/>
                <rect x="10.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
                <rect x="24.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
                <rect x="38.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
                <rect x="52.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
                <rect x="66.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
                <rect x="4" y="70" width="72" height="3" rx="1" fill="#3D7A4A"/>
                <circle cx="40" cy="28" r="14" fill="#E8961A"/>
                <line x1="40" y1="8" x2="40" y2="3" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="26" y1="14" x2="22" y2="10" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="54" y1="14" x2="58" y2="10" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="20" y1="28" x2="15" y2="28" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="60" y1="28" x2="65" y2="28" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="26" y1="42" x2="22" y2="46" stroke="#E8961A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="54" y1="42" x2="58" y2="46" stroke="#E8961A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="font-extrabold text-base tracking-tight">
                <span className="text-charcoal">MonBalcon</span><span className="text-amber">Solaire</span>
              </span>
            </Link>
            <p className="text-sm text-stone leading-relaxed">Le guide independant des kits solaires pour balcon et appartement en France.</p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">Decouvrir</h4>
            <ul className="space-y-2.5">
              <li><Link href="/comment-ca-marche" className="text-sm text-stone hover:text-green transition-colors">Comment ca marche</Link></li>
              <li><Link href="/calculateur" className="text-sm text-stone hover:text-green transition-colors">Calculateur de rentabilite</Link></li>
              <li><Link href="/a-propos" className="text-sm text-stone hover:text-green transition-colors">A propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">Contenu</h4>
            <ul className="space-y-2.5">
              <li><Link href="/quel-kit-choisir" className="text-sm text-stone hover:text-green transition-colors">Quel kit choisir ?</Link></li>
              <li><Link href="/tout-savoir" className="text-sm text-stone hover:text-green transition-colors">Tout savoir</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/mentions-legales" className="text-sm text-stone hover:text-green transition-colors">Mentions legales</Link></li>
              <li><Link href="/politique-confidentialite" className="text-sm text-stone hover:text-green transition-colors">Confidentialite</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-light">
          <p className="text-xs text-stone-light leading-relaxed max-w-3xl">
            <strong className="text-stone">Transparence affiliation :</strong> MonBalconSolaire est un guide independant. Nous ne vendons aucun produit.
            Certains liens presents sur ce site sont des liens affilies : si vous effectuez un achat via ces liens, nous recevons une commission sans surcout pour vous.
          </p>
          <p className="text-xs text-stone-light mt-4">&copy; {new Date().getFullYear()} MonBalconSolaire &mdash; Beeleven SASU &mdash; Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  );
}
