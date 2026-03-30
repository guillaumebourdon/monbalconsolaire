import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SchemaOrganization, SchemaWebSite } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: {
    default: 'MonBalconSolaire — Le guide indépendant du solaire de balcon',
    template: '%s | MonBalconSolaire',
  },
  description:
    'Comparez les meilleurs kits solaires pour balcon, calculez vos économies réelles et passez au solaire sans travaux. Guide indépendant, comparatifs neutres, calculateur gratuit.',
  keywords: [
    'panneau solaire balcon',
    'kit solaire balcon',
    'kit solaire plug and play',
    'panneau solaire appartement',
    'solaire balcon locataire',
    'comparatif kit solaire',
    'calculateur solaire',
  ],
  authors: [{ name: 'MonBalconSolaire', url: 'https://monbalconsolaire.vercel.app' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://monbalconsolaire.vercel.app',
    siteName: 'MonBalconSolaire',
    title: 'MonBalconSolaire — Le guide indépendant du solaire de balcon',
    description:
      'Comparez les kits solaires, calculez vos économies réelles et passez au solaire sans travaux.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <SchemaOrganization />
        <SchemaWebSite />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
