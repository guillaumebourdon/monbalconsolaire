'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

/**
 * Suivi GA4 unique de tous les liens affiliés du site : tout <a rel="…sponsored…">
 * envoie un event `affiliate_click` (product_name, merchant, position, page_location, affiliate_url).
 * Les composants (AffiliateCTA, ProductHero) renseignent data-product / data-merchant / data-position ;
 * pour un simple lien dans un article, on retombe sur le texte du lien et le domaine.
 * Aussi envoyé à Vercel Web Analytics (sans cookies, 2 propriétés max : merchant, product).
 */
export function AffiliateTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[rel~="sponsored"]') as HTMLAnchorElement | null;
      if (!link) return;
      let host = '';
      try {
        host = new URL(link.href).hostname.replace(/^www\./, '');
      } catch {
        /* href invalide : on garde host vide */
      }
      const productName = link.dataset.product || link.textContent?.trim().slice(0, 100) || '';
      const merchant = link.dataset.merchant || (host.includes('amazon.') ? 'Amazon' : host);
      track('affiliate_click', { merchant, product: productName });
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', 'affiliate_click', {
        product_name: productName,
        merchant,
        position: link.dataset.position || 'inline',
        page_location: window.location.pathname,
        affiliate_url: link.href,
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
