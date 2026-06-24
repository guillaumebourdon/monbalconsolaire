import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quel kit solaire choisir en 2026 : comparatif et avis',
  description: 'Comparatifs ind\u00e9pendants et avis d\u00e9taill\u00e9s : Sunology, Beem, Zendure. Trouvez le kit adapt\u00e9 \u00e0 votre balcon, votre budget et votre exposition.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/quel-kit-choisir',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
