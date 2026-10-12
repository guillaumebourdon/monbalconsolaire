'use client';

import { useState } from 'react';

/** Bloc de texte avec bouton « Copier » (citation, code d'intégration). */
export function CopyText({ label, text, trackingLabel }: { label: string; text: string; trackingLabel: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.('event', 'copy_citation', { citation_type: trackingLabel, page_location: window.location.pathname });
    } catch {
      /* presse-papiers indisponible : le texte reste sélectionnable */
    }
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-stone">{label}</span>
        <button
          type="button"
          onClick={copy}
          className={`text-xs font-semibold px-3 py-1.5 rounded-brand transition-colors ${copied ? 'bg-green-dark text-white' : 'bg-green text-white hover:bg-green-dark'}`}
        >
          {copied ? 'Copié ✓' : 'Copier'}
        </button>
      </div>
      <pre className="font-mono text-xs bg-white rounded-brand p-3 border border-border-light text-charcoal whitespace-pre-wrap break-words leading-relaxed">
        {text}
      </pre>
    </div>
  );
}
