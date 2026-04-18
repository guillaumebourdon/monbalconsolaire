import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessoires pour kit solaire de balcon — MonBalconSolaire',
  description: 'Prises connectées, batteries portables, lampes solaires, mini kits Amazon : les accessoires pour optimiser votre installation solaire de balcon.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
