'use client';

import { useState } from 'react';

interface CopyableTemplateProps {
  title: string;
  description?: string;
  recipient?: string;
  subject?: string;
  body: string;
  trackingLabel?: string;
}

export function CopyableTemplate({
  title,
  description,
  recipient,
  subject,
  body,
  trackingLabel,
}: CopyableTemplateProps) {
  const [copied, setCopied] = useState<'subject' | 'body' | 'all' | null>(null);

  const handleCopy = async (text: string, type: 'subject' | 'body' | 'all') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);

      // Tracking GA4
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'copy_template', {
          template_name: trackingLabel || title,
          copy_type: type,
        });
      }
    } catch (err) {
      console.error('Erreur copie:', err);
    }
  };

  const fullText = subject ? `Objet : ${subject}\n\n${body}` : body;

  return (
    <div className="card-lg border-l-4 border-l-green my-6 bg-white">
      <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-widest text-green mb-1">
            📄 Modèle prêt à utiliser
          </div>
          <h3 className="font-bold text-base mb-1 leading-tight">{title}</h3>
          {description && (
            <p className="text-xs text-charcoal-light leading-relaxed">{description}</p>
          )}
        </div>
        <button
          onClick={() => handleCopy(fullText, 'all')}
          className={`text-xs font-semibold px-4 py-2 rounded-brand whitespace-nowrap transition-all ${
            copied === 'all'
              ? 'bg-green text-white'
              : 'bg-green text-white hover:bg-green-dark'
          }`}
        >
          {copied === 'all' ? '✓ Copié !' : '📋 Tout copier'}
        </button>
      </div>

      <div className="bg-cream/40 rounded-brand p-4 mt-4 space-y-3">
        {recipient && (
          <div className="text-xs">
            <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">À envoyer à :</span>
            <div className="font-mono text-charcoal mt-1">{recipient}</div>
          </div>
        )}

        {subject && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Objet</span>
              <button
                onClick={() => handleCopy(subject, 'subject')}
                className="text-[10px] text-green hover:text-green-dark font-semibold"
              >
                {copied === 'subject' ? '✓ Copié' : 'Copier'}
              </button>
            </div>
            <div className="font-mono text-xs bg-white rounded p-2 border border-border-light text-charcoal">
              {subject}
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-stone uppercase tracking-wider text-[10px] font-semibold">Corps</span>
            <button
              onClick={() => handleCopy(body, 'body')}
              className="text-[10px] text-green hover:text-green-dark font-semibold"
            >
              {copied === 'body' ? '✓ Copié' : 'Copier'}
            </button>
          </div>
          <pre className="font-sans text-xs bg-white rounded p-3 border border-border-light text-charcoal whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
            {body}
          </pre>
        </div>
      </div>

      <p className="text-[11px] text-stone italic mt-3">
        💡 Remplacez les zones <strong>[entre crochets]</strong> par vos informations personnelles avant d&apos;envoyer.
      </p>
    </div>
  );
}
