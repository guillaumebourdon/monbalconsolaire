'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  endpoint: string;
  extraData?: Record<string, unknown>;
  successMessage?: string;
  buttonLabel?: string;
  source: string;
  compact?: boolean;
}

export function EmailCapture({
  endpoint,
  extraData,
  successMessage = 'Email envoy\u00e9 ! V\u00e9rifiez votre bo\u00eete (et les spams).',
  buttonLabel = 'Recevoir',
  source,
  compact = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, honeypot, ...extraData }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error || 'Erreur, r\u00e9essayez.');
        setStatus('error');
        return;
      }

      setStatus('success');

      // GA4 tracking
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'email_captured', { source });
      }
    } catch {
      setErrorMsg('Erreur r\u00e9seau, r\u00e9essayez.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={`${compact ? 'p-3' : 'p-5'} bg-green-pale rounded-brand border border-green/20 text-center reveal-scale is-visible`}>
        <div className="text-2xl mb-1">{'\u2713'}</div>
        <p className="text-sm font-semibold text-green">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'flex items-center gap-2' : 'space-y-3'}`}>
      {/* Honeypot — hidden from users */}
      <input
        type="text"
        name="company_website"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
      />
      <input
        type="email"
        placeholder="Votre adresse email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className={`${compact ? 'flex-1' : 'w-full'} p-3 rounded-brand border border-border bg-white text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`btn-primary text-sm ${compact ? 'py-3 px-5 whitespace-nowrap' : 'w-full justify-center py-3'} disabled:opacity-50`}
      >
        {status === 'loading' && <span className="spinner mr-2" />}
        {status === 'loading' ? 'Envoi...' : buttonLabel}
      </button>
      {status === 'error' && <p className="text-xs text-red-500">{errorMsg}</p>}
      {!compact && (
        <p className="text-[10px] text-stone text-center">
          Pas de spam, d&eacute;sinscription en 1 clic. <a href="/politique-confidentialite" className="text-green hover:underline">Confidentialit&eacute;</a>
        </p>
      )}
    </form>
  );
}
