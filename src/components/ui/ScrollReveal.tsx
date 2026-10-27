'use client';

import { useEffect } from 'react';

const SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .kpi-glow, .divider-animated, .number-pop';

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const observeAll = (root: ParentNode) => {
      root.querySelectorAll(SELECTORS).forEach((el) => {
        if (!el.classList.contains('is-visible')) observer.observe(el);
      });
    };

    observeAll(document);

    // Le layout ne se remonte pas lors d'une navigation interne (clic sur le logo, etc.) :
    // on observe aussi les éléments ajoutés ensuite, sinon ils restent invisibles.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTORS) && !node.classList.contains('is-visible')) observer.observe(node);
          observeAll(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
