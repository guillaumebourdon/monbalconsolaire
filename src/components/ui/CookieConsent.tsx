'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const GA_ID = 'G-7CXQTZXKCR';
const CONSENT_KEY = 'mbs-cookie-consent';

type ConsentState = 'pending' | 'accepted' | 'refused';

function getStoredConsent(): ConsentState {
  if (typeof window === 'undefined') return 'pending';
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted' || stored === 'refused') return stored;
  return 'pending';
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>('pending');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    if (stored === 'pending') {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setConsent('refused');
    setVisible(false);
  };

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6" role="dialog" aria-label="Consentement cookies">
          <div className="container-brand max-w-3xl">
            <div className="bg-charcoal text-cream rounded-brand-lg shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1 text-sm leading-relaxed">
                <p>
                  Ce site utilise Google Analytics pour mesurer l&apos;audience de maniere anonyme.
                  Aucune donnee personnelle n&apos;est vendue ni partagee.{' '}
                  <a href="/politique-confidentialite" className="text-amber underline underline-offset-2">
                    En savoir plus
                  </a>
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={handleRefuse}
                  className="px-4 py-2 text-sm font-semibold text-cream/70 hover:text-cream border border-cream/20 rounded-brand transition-colors"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm font-bold bg-green text-white rounded-brand hover:bg-green-light transition-colors"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
