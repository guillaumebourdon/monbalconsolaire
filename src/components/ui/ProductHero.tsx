'use client';

import Link from 'next/link';

interface ProductHeroProps {
  brand: string;
  name: string;
  power: string;
  price: string;
  score: string;
  tagline: string;
  affiliateUrl: string;
  affiliateLabel?: string;
  accentColor?: 'green' | 'amber';
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ProductHero({
  brand,
  name,
  power,
  price,
  score,
  tagline,
  affiliateUrl,
  affiliateLabel = 'Voir sur le site du fabricant',
  accentColor = 'green',
}: ProductHeroProps) {
  const bgClass = accentColor === 'green' ? 'from-green-pale/40 to-amber-pale/20' : 'from-amber-pale/40 to-green-pale/20';
  const borderClass = accentColor === 'green' ? 'border-green/15' : 'border-amber/15';

  const handleAffiliateClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_affiliate', {
        affiliate_brand: brand,
        affiliate_product: name,
        affiliate_price: price,
        affiliate_url: affiliateUrl,
      });
    }
  };

  return (
    <div className={`card-lg bg-gradient-to-br ${bgClass} ${borderClass} mb-10 overflow-hidden relative`}>
      <div className="grid md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-2">
          <div className="aspect-square bg-gradient-to-br from-white to-cream-dark rounded-2xl p-8 shadow-brand flex items-center justify-center relative overflow-hidden">
            <div className="relative w-full h-full max-w-[220px] mx-auto flex items-center justify-center">
              <div className="absolute top-2 right-2 w-12 h-12 bg-amber/30 rounded-full blur-xl"></div>
              <div className="absolute top-4 right-4 w-6 h-6 bg-amber rounded-full"></div>
              <div className="w-full h-[70%] bg-gradient-to-br from-charcoal to-charcoal-light rounded-lg shadow-xl relative overflow-hidden border-4 border-white/20">
                <div className="grid grid-cols-6 grid-rows-8 gap-px h-full p-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="bg-white/5 rounded-sm"></div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
              </div>
              <div className="absolute bottom-2 left-2 text-xs font-bold text-charcoal/60 bg-white/80 px-2 py-0.5 rounded">
                {brand}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-semibold text-stone uppercase tracking-widest mb-2">{brand}</div>
          <h2 className="font-extrabold text-2xl md:text-3xl mb-2 leading-tight">{name}</h2>
          <p className="text-sm text-charcoal-light mb-4">{tagline}</p>

          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="text-center p-3 bg-white/70 rounded-brand">
              <div className="font-mono font-bold text-green text-lg">{price}</div>
              <div className="text-[10px] text-stone font-medium mt-0.5 uppercase tracking-wider">Prix</div>
            </div>
            <div className="text-center p-3 bg-white/70 rounded-brand">
              <div className="font-mono font-bold text-green text-lg">{power}</div>
              <div className="text-[10px] text-stone font-medium mt-0.5 uppercase tracking-wider">Puissance</div>
            </div>
            <div className="text-center p-3 bg-white/70 rounded-brand">
              <div className="font-mono font-bold text-green text-lg">{score}</div>
              <div className="text-[10px] text-stone font-medium mt-0.5 uppercase tracking-wider">Note</div>
            </div>
          </div>

          <Link
            href={affiliateUrl}
            target="_blank"
            rel="noopener nofollow sponsored"
            onClick={handleAffiliateClick}
            className="btn-primary w-full justify-center text-sm"
          >
            {affiliateLabel} →
          </Link>
          <p className="text-[10px] text-stone mt-2 text-center">Lien commercial · le prix peut varier</p>
        </div>
      </div>
    </div>
  );
}
