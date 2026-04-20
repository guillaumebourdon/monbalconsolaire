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

  const handleDownloadTracking = () => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'download_lead_magnet', {
        file_name: 'guide-7-erreurs-kit-solaire.pdf',
      });
    }
  };

  if (status === 'success') {
    return (
      <div className="card-lg bg-green-pale/30 border-green/10 text-center my-10">
        <div className="text-2xl mb-2">&#9889;</div>
        <p className="font-bold text-green mb-1">C&apos;est noté !</p>
        <p className="text-sm text-charcoal-light">Vous recevrez nos meilleurs conseils solaires. En attendant, téléchargez tout de suite notre guide gratuit :</p>
        <a
          href="/guide-7-erreurs-kit-solaire.pdf"
          download
          onClick={handleDownloadTracking}
          className="btn-primary inline-flex mt-4"
        >
          📄 Télécharger le guide (PDF, 12 pages)
        </a>
      </div>
    );
  }

  return (
    <div className="card-lg bg-gradient-to-br from-amber-pale/40 via-white to-green-pale/20 border-amber/10 my-10">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-amber text-white mb-3">
            Guide gratuit
          </div>
          <h3 className="font-bold text-lg mb-1">
            7 erreurs à éviter avant d&apos;acheter un kit solaire
          </h3>
          <p className="text-sm text-charcoal-light leading-relaxed">
            Les pièges que personne ne vous dit. PDF de 12 pages, gratuit et sans spam.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-w-0 md:min-w-[260px]">
          <a
            href="/guide-7-erreurs-kit-solaire.pdf"
            download
            onClick={handleDownloadTracking}
            className="btn-primary text-center py-3 px-5 text-sm font-semibold whitespace-nowrap"
          >
            📄 Télécharger gratuitement
          </a>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Recevez aussi nos conseils"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0 px-3 py-2 rounded-brand border border-border bg-white text-xs focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className="text-xs font-semibold px-3 py-2 rounded-brand bg-charcoal text-white hover:bg-charcoal-light transition-colors disabled:opacity-40 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'OK'}
            </button>
          </form>
        </div>
      </div>
      <p className="text-[11px] text-stone mt-3">Téléchargement immédiat. Pas besoin d&apos;email. <a href="/politique-confidentialite" className="text-green hover:underline">Politique de confidentialité</a></p>
    </div>
  );
}
