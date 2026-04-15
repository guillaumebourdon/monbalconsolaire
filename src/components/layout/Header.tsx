'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/comment-ca-marche', label: 'Comment ça marche' },
  { href: '/quel-kit-choisir', label: 'Quel kit choisir ?' },
  { href: '/tout-savoir', label: 'Tout savoir' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-border">
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 group">
            <svg width="32" height="32" viewBox="0 0 80 80" fill="none" className="group-hover:scale-105 transition-transform">
              <rect x="0" y="0" width="80" height="80" rx="8" fill="none" stroke="#3D7A4A" strokeWidth="2.5"/>
              <rect x="4" y="52" width="72" height="4" rx="2" fill="#3D7A4A"/>
              <rect x="10.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
              <rect x="24.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
              <rect x="38.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
              <rect x="52.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
              <rect x="66.75" y="56" width="2.5" height="14" rx="1" fill="#3D7A4A"/>
              <rect x="4" y="70" width="72" height="3" rx="1" fill="#3D7A4A"/>
              <circle cx="40" cy="28" r="14" fill="#E8961A"/>
              <line x1="40" y1="8" x2="40" y2="3" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="26" y1="14" x2="22" y2="10" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="54" y1="14" x2="58" y2="10" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="20" y1="28" x2="15" y2="28" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="60" y1="28" x2="65" y2="28" stroke="#E8961A" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="26" y1="42" x2="22" y2="46" stroke="#E8961A" strokeWidth="2" strokeLinecap="round"/>
              <line x1="54" y1="42" x2="58" y2="46" stroke="#E8961A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-extrabold text-lg tracking-tight">
              <span className="text-charcoal">MonBalcon</span><span className="text-amber">Solaire</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-charcoal-light hover:text-green rounded-lg hover:bg-green-pale transition-all duration-200">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/calculateur" className="btn-primary text-sm py-2.5 px-5">Calculer mes economies →</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors" aria-label="Menu">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-full h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-charcoal rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border-light">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="px-4 py-3 text-sm font-medium text-charcoal-light hover:text-green rounded-lg hover:bg-green-pale transition-all">
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <Link href="/calculateur" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center text-sm">Calculer mes economies →</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
