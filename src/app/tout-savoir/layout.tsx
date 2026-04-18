import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tout savoir sur le solaire de balcon — Guides et analyses',
  description: 'Guides pratiques, analyses chiffrées, réglementation : tout ce qu\'il faut savoir sur le solaire de balcon en France.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
