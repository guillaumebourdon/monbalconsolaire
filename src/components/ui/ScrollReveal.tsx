'use client';

import { useEffect } from 'react';

/**
 * Initialise l'IntersectionObserver pour les animations au scroll.
 * Ajouter les classes CSS suivantes aux éléments :
 *   - `reveal`        : fade-up au scroll (28px → 0)
 *   - `reveal-scale`  : scale-in au scroll (0.95 → 1)
 *   - `reveal-group`  : sur un parent, stagger ses enfants `.reveal` (80ms entre chaque)
 *   - `kpi-glow`      : glow subtil sur les chiffres KPI
 *
 * Le composant est monté une fois dans le layout root.
 */
export function ScrollReveal() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll('.reveal, .reveal-scale, .kpi-glow');
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
