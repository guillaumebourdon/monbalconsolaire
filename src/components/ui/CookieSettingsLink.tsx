'use client';

import { OPEN_COOKIE_SETTINGS } from './CookieConsent';

/** Rouvre le bandeau cookies pour changer son choix (retrait du consentement aussi simple que l'accord). */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))} className={className}>
      G&eacute;rer les cookies
    </button>
  );
}
