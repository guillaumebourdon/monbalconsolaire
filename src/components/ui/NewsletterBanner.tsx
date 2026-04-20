'use client';

export function NewsletterBanner() {
  const handleDownloadTracking = () => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'download_lead_magnet', {
        file_name: 'guide-7-erreurs-kit-solaire.pdf',
        source: 'newsletter_banner',
      });
    }
  };

  return (
    <div className="card-lg bg-gradient-to-br from-amber-pale/40 via-white to-green-pale/20 border-amber/10 my-10">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-amber text-white mb-3">
            Guide gratuit · 12 pages
          </div>
          <h3 className="font-bold text-lg mb-1">
            7 erreurs à éviter avant d&apos;acheter un kit solaire
          </h3>
          <p className="text-sm text-charcoal-light leading-relaxed">
            Les pièges que personne ne vous dit. Analyse indépendante, sans affiliation cachée.
          </p>
        </div>
        <a
          href="/guide-7-erreurs-kit-solaire.pdf"
          download
          onClick={handleDownloadTracking}
          className="btn-primary text-center py-3 px-6 text-sm font-semibold whitespace-nowrap"
        >
          📄 Télécharger le guide
        </a>
      </div>
      <p className="text-[11px] text-stone mt-3">
        Téléchargement immédiat · Pas besoin d&apos;email · PDF 120 Ko
      </p>
    </div>
  );
}
