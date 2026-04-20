import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guide gratuit : 7 erreurs à éviter avant d\'acheter un kit solaire — MonBalconSolaire',
  description: 'Téléchargez gratuitement notre guide PDF de 12 pages : les 7 erreurs à éviter avant d\'acheter un kit solaire de balcon. Analyse indépendante, sans affiliation.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
