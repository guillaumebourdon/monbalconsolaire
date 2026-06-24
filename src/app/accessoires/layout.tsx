import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessoires kit solaire balcon : prises, batteries, lampes 2026',
  description: 'Prises connect\u00e9es, batteries portables, lampes solaires, rallonges. Tous les accessoires pour optimiser votre installation solaire balcon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/accessoires',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
