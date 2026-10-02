'use client';

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';

/**
 * Mesure d'audience Vercel (sans cookies). Désactivée sur les appareils de Guillaume :
 * ouvrir une fois ?exclure-mes-visites=1 (=0 pour réactiver). Même clé et même paramètre
 * sur detekia.fr et beeleven.fr. S'applique aussi aux événements track().
 */
function excludeOwnVisits(event: BeforeSendEvent) {
  try {
    const p = new URLSearchParams(window.location.search).get('exclure-mes-visites');
    if (p === '1') localStorage.setItem('va-disable', '1');
    if (p === '0') localStorage.removeItem('va-disable');
    if (localStorage.getItem('va-disable')) return null;
  } catch {
    /* stockage indisponible : on mesure */
  }
  return event;
}

export function VercelAnalytics() {
  return <Analytics beforeSend={excludeOwnVisits} />;
}
