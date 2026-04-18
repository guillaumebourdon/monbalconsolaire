'use client';

import { useState } from 'react';

export function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // TODO: connect to Resend/Brevo API
    await new Promise(r => setTimeout(r, 800));
    setStatus('success');
    setEmail('');
  };

  if (status === 'success') {
    return (
      <div className="card-lg bg-green-pale/30 border-green/10 text-center my-10">
        <div className="text-2xl mb-2">&#9889;</div>
        <p className="font-bold text-green mb-1">C&apos;est note !</p>
        <p className="text-sm text-charcoal-light">Vous recevrez notre guide gratuit et nos meilleurs conseils solaires.</p>
      </div>
    );
  }

  return (
    <div className="card-lg bg-gradient-to-br from-amber-pale/40 via-white to-green-pale/20 border-amber/10 my-10">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">
            &#9889; 7 erreurs à éviter avant d&apos;acheter un kit solaire
          </h3>
          <p className="text-sm text-charcoal-light leading-relaxed">
            Recevez notre guide gratuit par email + nos meilleurs conseils pour économiser avec le solaire de balcon.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 min-w-0 md:min-w-[320px]">
          <input
            type="email"
            placeholder="votre@email.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 min-w-0 px-4 py-3 rounded-brand border border-border bg-white text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap py-3 px-5 text-sm disabled:opacity-60"
          >
            {status === 'loading' ? '...' : 'Recevoir'}
          </button>
        </form>
      </div>
      <p className="text-[11px] text-stone mt-3">Pas de spam. Désabonnement en 1 clic. <a href="/politique-confidentialite" className="text-green hover:underline">Politique de confidentialite</a></p>
    </div>
  );
}
