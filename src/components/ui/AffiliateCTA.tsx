'use client';

interface AffiliateCTAProps {
  productName: string;
  merchantName: string;
  affiliateUrl: string;
  price?: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'inline' | 'box';
  position?: string;
}

export function AffiliateCTA({
  productName,
  merchantName,
  affiliateUrl,
  price,
  label,
  variant = 'secondary',
  position = 'unknown',
}: AffiliateCTAProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'affiliate_click', {
        product_name: productName,
        merchant: merchantName,
        position,
        page_location: window.location.pathname,
        affiliate_url: affiliateUrl,
      });
    }
  };

  if (!affiliateUrl) return null;

  if (variant === 'inline') {
    return (
      <a
        href={affiliateUrl}
        target="_blank"
        rel="sponsored noopener"
        onClick={handleClick}
        className="text-green font-semibold text-sm hover:underline inline-flex items-center gap-1"
      >
        {label} &rarr;
      </a>
    );
  }

  if (variant === 'box') {
    return (
      <div className="card-lg bg-gradient-to-br from-green-pale/40 via-white to-amber-pale/20 border-green/10 text-center">
        <p className="font-semibold text-lg mb-1">Pr&ecirc;t &agrave; passer au solaire ?</p>
        <p className="font-bold text-xl text-charcoal mb-1">{productName}</p>
        {price && (
          <p className="text-sm text-charcoal-light mb-4">
            {price} &middot; Garantie 25 ans &middot; Livraison incluse
          </p>
        )}
        <a
          href={affiliateUrl}
          target="_blank"
          rel="sponsored noopener"
          onClick={handleClick}
          className="btn-primary inline-flex text-sm"
        >
          {label} &rarr;
        </a>
        <p className="text-[10px] text-stone mt-3">Prix v&eacute;rifi&eacute; le 15/05/2026 &middot; Lien commercial</p>
      </div>
    );
  }

  const btnClass = variant === 'primary'
    ? 'btn-primary w-full justify-center text-sm'
    : 'btn-affiliate w-full justify-center text-sm';

  return (
    <div className="my-6">
      <a
        href={affiliateUrl}
        target="_blank"
        rel="sponsored noopener"
        onClick={handleClick}
        className={btnClass}
      >
        {label} &rarr;
      </a>
      {variant === 'primary' && (
        <p className="text-[10px] text-stone mt-2 text-center">
          &check; Livraison incluse &middot; &check; Garantie 25 ans &middot; &check; Stock France
        </p>
      )}
    </div>
  );
}
