'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BF_ARTICLE_PATH, BF_PROMO_ENDS_AT, isActiveUntil } from '@/lib/black-friday';

/**
 * Affiché tant que la date de fin n'est pas dépassée. Le HTML est rendu côté serveur
 * (visible sans JavaScript), puis le navigateur revérifie la date : après le 1er décembre,
 * l'élément disparaît même si la page n'a pas été reconstruite.
 */
function useStillActive(endsAt: string) {
  const [active, setActive] = useState(true);
  useEffect(() => {
    if (!isActiveUntil(endsAt)) setActive(false);
  }, [endsAt]);
  return active;
}

/** Bannière fine en haut de toutes les pages (sauf l'article lui-même). */
export function BlackFridayBanner() {
  const active = useStillActive(BF_PROMO_ENDS_AT);
  const pathname = usePathname();
  if (!active || pathname === BF_ARTICLE_PATH) return null;
  return (
    <div className="bg-charcoal text-cream text-sm" data-bf="banner">
      <div className="container-brand py-2 flex items-center justify-center gap-2 text-center">
        <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-amber shrink-0" aria-hidden="true" />
        <span>
          <strong className="font-bold">Black Friday 2026 :</strong>{' '}
          <span className="hidden sm:inline">les vraies baisses de prix des kits et batteries, v&eacute;rifi&eacute;es une &agrave; une. </span>
          <Link href={BF_ARTICLE_PATH} className="underline underline-offset-2 font-semibold hover:no-underline">
            Voir les bonnes affaires &rarr;
          </Link>
        </span>
      </div>
    </div>
  );
}

/**
 * Encadré de mise en avant : `home` (sous le hero de l'accueil) ou `inline` (dans les articles).
 * `lead` remplace le texte d'accroche de la variante inline.
 */
export function BlackFridayCallout({ variant = 'inline', lead }: { variant?: 'home' | 'inline'; lead?: string }) {
  const active = useStillActive(BF_PROMO_ENDS_AT);
  if (!active) return null;

  if (variant === 'home') {
    return (
      <section className="bg-cream" aria-labelledby="bf-home-title" data-bf="home">
        <div className="container-brand pb-10 md:pb-14">
          <div className="rounded-brand-xl border-2 border-amber bg-amber-pale/60 p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-dark mb-2">Black Friday &middot; prix v&eacute;rifi&eacute;s le 18 novembre</p>
              <h2 id="bf-home-title" className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                Black Friday 2026 : les vraies bonnes affaires
              </h2>
              <p className="text-charcoal-light leading-relaxed max-w-2xl">
                On a compar&eacute; les prix du Black Friday aux prix relev&eacute;s depuis septembre. R&eacute;sultat : quelques vraies baisses (jusqu&apos;&agrave; -29&nbsp;% avec code), et beaucoup de &laquo;&nbsp;-50&nbsp;%&nbsp;&raquo; qui ne bougent pas d&apos;un euro. Tableau complet, prix du jour et sources.
              </p>
            </div>
            <Link href={BF_ARTICLE_PATH} className="btn-primary text-base py-4 px-8 justify-center whitespace-nowrap">
              Voir les vraies baisses &rarr;
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <aside className="card border-2 border-amber bg-amber-pale/40 my-8" data-bf="inline">
      <p className="text-xs font-bold uppercase tracking-wider text-amber-dark mb-1">Black Friday 2026</p>
      <p className="text-sm text-charcoal-light leading-relaxed">
        {lead ?? 'Avant d’acheter pendant le Black Friday, comparez le prix affiché au prix des semaines précédentes : nous l’avons fait pour les principaux kits et batteries.'}{' '}
        <Link href={BF_ARTICLE_PATH} className="text-green font-semibold hover:underline">
          Les vraies bonnes affaires, v&eacute;rifi&eacute;es &rarr;
        </Link>
      </p>
    </aside>
  );
}
