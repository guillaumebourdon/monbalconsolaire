'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/calculateur', label: 'Calculateur', icon: '☀️' },
  { href: '/comparatif', label: 'Comparatifs' },
  { href: '/guide', label: 'Guides' },
  { href: '/avis', label: 'Avis' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border">
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 bg-gradient-to-br from-amber to-amber-light rounded-lg flex items-center justify-center text-base shadow-amber/30 shadow-sm group-hover:scale-105 transition-transform">
              ☀
            </span>
            <span className="font-extrabold text-lg tracking-tight">
              <span className="text-charcoal">Mon</span>
              <span className="text-green">Balcon</span>
              <span className="text-amber">Solaire</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-charcoal-light hover:text-green rounded-lg hover:bg-green-pale transition-all duration-200"
              >
                {link.icon && <span className="mr-1">{link.icon}</span>}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Link href="/calculateur" className="btn-primary text-sm py-2.5 px-5">
              Calculer mes économies →
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-full h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border-light">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-charcoal-light hover:text-green rounded-lg hover:bg-green-pale transition-all"
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <Link
                  href="/calculateur"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  ☀ Calculer mes économies →
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
