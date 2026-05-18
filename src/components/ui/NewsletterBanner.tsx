'use client';

import { EmailCapture } from '@/components/ui/EmailCapture';

export function NewsletterBanner() {
  return (
    <div className="card-lg bg-gradient-to-br from-amber-pale/40 via-white to-green-pale/20 border-amber/10 my-10">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-amber text-white mb-3">
            Guide gratuit + bonus
          </div>
          <h3 className="font-bold text-lg mb-1">
            7 erreurs &agrave; &eacute;viter avant d&apos;acheter un kit solaire
          </h3>
          <p className="text-sm text-charcoal-light leading-relaxed">
            Les pi&egrave;ges que personne ne vous dit + 5 erreurs bonus exclusives.
          </p>
        </div>
        <div className="md:w-72">
          <EmailCapture
            endpoint="/api/email/send-guide"
            source="newsletter_banner"
            buttonLabel="Recevoir le guide"
            successMessage="Guide envoy&eacute; ! V&eacute;rifiez vos emails."
            compact
          />
        </div>
      </div>
    </div>
  );
}
