import type { Metadata } from 'next';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: '7 erreurs à éviter avant d\'acheter un kit solaire (PDF gratuit)',
  description: 'Téléchargez gratuitement notre guide PDF de 12 pages : les 7 erreurs à éviter avant d\'acheter un kit solaire de balcon. Analyse indépendante, sans affiliation.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide-gratuit',
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
