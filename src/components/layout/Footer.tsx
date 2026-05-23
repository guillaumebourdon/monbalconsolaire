import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="container-brand py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 80 80" fill="none" aria-label="MonBalconSolaire" role="img">
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
            <p className="text-sm text-stone leading-relaxed">Le guide ind&eacute;pendant des kits solaires pour balcon et appartement en France.</p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">D&eacute;couvrir</h4>
            <ul className="space-y-3">
              <li><Link href="/comment-ca-marche" className="text-sm text-stone hover:text-green transition-colors">Comment &ccedil;a marche</Link></li>
              <li><Link href="/calculateur" className="text-sm text-stone hover:text-green transition-colors">Calculateur de rentabilit&eacute;</Link></li>
              <li><Link href="/a-propos" className="text-sm text-stone hover:text-green transition-colors">&Agrave; propos</Link></li>
              <li><Link href="/methodologie" className="text-sm text-stone hover:text-green transition-colors">M&eacute;thodologie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">Contenu</h4>
            <ul className="space-y-3">
              <li><Link href="/quel-kit-choisir" className="text-sm text-stone hover:text-green transition-colors">Quel kit choisir ?</Link></li>
              <li><Link href="/tout-savoir" className="text-sm text-stone hover:text-green transition-colors">Tout savoir</Link></li>
              <li><Link href="/codes-promo" className="text-sm text-stone hover:text-green transition-colors">Codes promo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-charcoal mb-4">L&eacute;gal</h4>
            <ul className="space-y-3">
              <li><Link href="/mentions-legales" className="text-sm text-stone hover:text-green transition-colors">Mentions l&eacute;gales</Link></li>
              <li><Link href="/politique-confidentialite" className="text-sm text-stone hover:text-green transition-colors">Confidentialit&eacute;</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-light">
          <p className="text-xs text-stone-light leading-relaxed max-w-3xl">
            <strong className="text-stone">Transparence affiliation :</strong> MonBalconSolaire est un guide ind&eacute;pendant. Nous ne vendons aucun produit.
            Certains liens pr&eacute;sents sur ce site sont des liens affili&eacute;s : si vous effectuez un achat via ces liens, nous recevons une commission sans surco&ucirc;t pour vous.
          </p>
          <p className="text-xs text-stone-light mt-4" suppressHydrationWarning>&copy; {new Date().getFullYear()} MonBalconSolaire &mdash; Be&eacute;lev&eacute;n SASU &mdash; Tous droits r&eacute;serv&eacute;s.</p>
        </div>
      </div>
    </footer>
  );
}
