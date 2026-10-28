import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SchemaOrganization, SchemaWebSite } from '@/components/SchemaMarkup';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { AffiliateTracker } from '@/components/AffiliateTracker';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { VercelAnalytics } from '@/components/VercelAnalytics';
import { SITE_OPEN_GRAPH, withCanonicalOg } from '@/lib/metadata';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = withCanonicalOg({
  metadataBase: new URL('https://monbalconsolaire.fr'),
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
  authors: [{ name: 'MonBalconSolaire', url: 'https://monbalconsolaire.fr' }],
  alternates: {
    canonical: 'https://monbalconsolaire.fr',
  },
  openGraph: SITE_OPEN_GRAPH,
  twitter: {
    card: 'summary_large_image',
    title: 'MonBalconSolaire — Le guide indépendant du solaire de balcon',
    description:
      'Comparez les kits solaires, calculez vos économies réelles et passez au solaire sans travaux.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'd5dwLbFhABiXLEeUIqNt-kbwWtibmsGUtVJSpVSd2aY',
    other: {
      'msvalidate.01': '05DB5632ABECB301EBD515E6E5ED1F84',
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <a href="#main-content" className="skip-to-content">Aller au contenu principal</a>
        <SchemaOrganization />
        <SchemaWebSite />
        <Header />
        <main id="main-content" className="flex-1 page-enter">{children}</main>
        <Footer />
        <ScrollProgress />
        <ScrollReveal />
        <SpeedInsights />
        {/* Mesure d'audience Vercel : sans cookies, compte tous les visiteurs (récap quotidien) */}
        <VercelAnalytics />
        <CookieConsent />
        <AffiliateTracker />
      </body>
    </html>
  );
}
