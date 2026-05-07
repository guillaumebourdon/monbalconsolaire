import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculateur solaire balcon — Estimez vos économies en 30 secondes',
  description:
    'Calculez gratuitement la rentabilité d\'un kit solaire sur votre balcon : production, économies annuelles et retour sur investissement selon votre département et orientation.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/calculateur',
  },
};

export default function CalculateurLayout({ children }: { children: React.ReactNode }) {
  return children;
}
