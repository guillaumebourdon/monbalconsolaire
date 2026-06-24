import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculateur solaire gratuit : rentabilit\u00e9 en 30 secondes',
  description:
    'Entrez votre d\u00e9partement, orientation, budget. Notre simulateur recommande le kit adapt\u00e9 et calcule votre ROI. Gratuit, sans inscription.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/calculateur',
  },
};

export default function CalculateurLayout({ children }: { children: React.ReactNode }) {
  return children;
}
