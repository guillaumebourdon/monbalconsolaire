'use client';

interface AffiliateCTAProps {
  productName: string;
  merchantName: string;
  affiliateUrl: string;
  price?: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'inline' | 'box';
  position?: string;
  /** Mentions de réassurance vérifiées pour CE produit (ex. « Garantie 25 ans · Livraison incluse »). Rien n'est affiché par défaut. */
  reassurance?: string;
}

export function AffiliateCTA({
  productName,
  merchantName,
  affiliateUrl,
  price,
  label,
  variant = 'secondary',
  position = 'unknown',
  reassurance,
}: AffiliateCTAProps) {
  // Le clic est suivi globalement par AffiliateTracker (event GA4 affiliate_click) via ces attributs
  const tracking = { 'data-product': productName, 'data-merchant': merchantName, 'data-position': position };

  if (!affiliateUrl) return null;

  if (variant === 'inline') {
    return (
      <a
        href={affiliateUrl}
        target="_blank"
        rel="sponsored noopener"
        {...tracking}
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
            {price}{reassurance ? <> &middot; {reassurance}</> : null}
          </p>
        )}
        <a
          href={affiliateUrl}
          target="_blank"
          rel="sponsored noopener"
          {...tracking}
          className="btn-primary inline-flex text-sm"
        >
          {label} &rarr;
        </a>
        <p className="text-[10px] text-stone mt-3">Lien commercial &middot; prix constat&eacute;, susceptible de varier</p>
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
        {...tracking}
        className={btnClass}
      >
        {label} &rarr;
      </a>
      {variant === 'primary' && reassurance && (
        <p className="text-[10px] text-stone mt-2 text-center">{reassurance}</p>
      )}
    </div>
  );
}
