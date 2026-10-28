import type { Metadata } from 'next';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Accessoires kit solaire balcon : prises, batteries, lampes 2026',
  description: 'Prises connect\u00e9es, batteries portables, lampes solaires, rallonges. Tous les accessoires pour optimiser votre installation solaire balcon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/accessoires',
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
