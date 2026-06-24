import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tout savoir sur le solaire de balcon : guides et analyses 2026',
  description: 'Guides pratiques, analyses chiffr\u00e9es, r\u00e9glementation. Toutes les r\u00e9ponses avant d\u2019investir dans un kit solaire plug-and-play pour balcon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/tout-savoir',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
