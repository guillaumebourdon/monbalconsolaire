import type { ReactNode } from 'react';
import { buyFor, type BuyLink } from '@/lib/affiliate';

/** Nom de produit cliquable dans le texte (lien affilié, suivi par AffiliateTracker). */
export function AffLink({ item, children, position = 'in-text' }: { item: BuyLink; children?: ReactNode; position?: string }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="sponsored noopener"
      data-product={item.product}
      data-merchant={item.merchant}
      data-position={position}
      className="text-green font-semibold hover:underline"
    >
      {children ?? item.product}
    </a>
  );
}

/** Nom de produit dans un tableau + petit lien « Voir le prix chez … » s'il est vendu par un marchand affilié. */
export function BuyName({ name, position = 'comparison-table', exclude }: { name: string; position?: string; exclude?: string }) {
  const b = buyFor(name);
  return (
    <>
      {name}
      {b && b.url !== exclude && (
        <span className="block mt-0.5 font-normal text-xs">
          <AffLink item={b} position={position}>Voir le prix chez {b.merchant} &rarr;</AffLink>
        </span>
      )}
    </>
  );
}
