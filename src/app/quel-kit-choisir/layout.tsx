import type { Metadata } from 'next';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Quel kit solaire choisir en 2026 : comparatif et avis',
  description: 'Comparatifs ind\u00e9pendants et avis d\u00e9taill\u00e9s : Sunology, Beem, Zendure. Trouvez le kit adapt\u00e9 \u00e0 votre balcon, votre budget et votre exposition.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/quel-kit-choisir',
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
