'use client';

import Link from 'next/link';

export default function GuideGratuitPage() {
  const handleDownloadTracking = () => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'download_lead_magnet', {
        file_name: 'guide-7-erreurs-kit-solaire.pdf',
        source: 'page_guide_gratuit',
      });
    }
  };

  const erreurs = [
    { num: 'I', titre: 'Acheter sans vérifier l\'orientation du balcon', sous: 'L\'erreur la plus coûteuse' },
    { num: 'II', titre: 'Attendre l\'indépendance énergétique', sous: 'L\'attente la plus irréaliste' },
    { num: 'III', titre: 'Choisir un kit AliExpress bas prix', sous: 'L\'économie qui coûte cher' },
    { num: 'IV', titre: 'Oublier la déclaration CACSI à Enedis', sous: 'Une obligation légale souvent ignorée' },
    { num: 'V', titre: 'Négliger le parafoudre en zone orageuse', sous: '30€ qui évitent 300€ de casse' },
    { num: 'VI', titre: 'Installer en location sans prévenir', sous: 'Un réflexe qui peut coûter le bail' },
    { num: 'VII', titre: 'Ne pas comparer le prix au kWc', sous: 'Le vrai indicateur pour ne pas se faire avoir' },
  ];

  return (
    <section className="section-padding">
      <div className="container-brand max-w-5xl">
        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Colonne gauche : contenu */}
          <div className="md:col-span-3">
            <div className="badge-amber mb-4 inline-block">Guide gratuit · Édition 2026</div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
              7 erreurs à éviter<br />avant d&apos;acheter<br />
              <span className="text-green">un kit solaire</span> de balcon
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-6">
              Les pièges que personne ne vous dit avant d&apos;investir 300 à 800 € dans un kit solaire plug-and-play. Analyse indépendante, sans affiliation cachée. <strong>12 pages, gratuit, téléchargement immédiat.</strong>
            </p>

            {/* CTA principal */}
            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/20 mb-6">
              <a
                href="/guide-7-erreurs-kit-solaire.pdf"
                download
                onClick={handleDownloadTracking}
                className="btn-primary w-full justify-center text-base py-4 px-6"
              >
                📄 Télécharger le guide (PDF, 120 Ko)
              </a>
              <p className="text-xs text-stone mt-3 text-center">
                Téléchargement immédiat · Pas besoin d&apos;email · Partage libre
              </p>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="card text-center">
                <div className="font-mono font-bold text-green text-xl">07</div>
                <div className="text-[10px] text-stone uppercase tracking-wider mt-1">Erreurs détaillées</div>
              </div>
              <div className="card text-center">
                <div className="font-mono font-bold text-green text-xl">15&apos;</div>
                <div className="text-[10px] text-stone uppercase tracking-wider mt-1">De lecture</div>
              </div>
              <div className="card text-center">
                <div className="font-mono font-bold text-green text-xl">12</div>
                <div className="text-[10px] text-stone uppercase tracking-wider mt-1">Pages A4</div>
              </div>
            </div>

            {/* Table des matières */}
            <div className="card-lg">
              <h2 className="font-bold text-lg mb-4">Au sommaire</h2>
              <div className="space-y-3">
                {erreurs.map((e) => (
                  <div key={e.num} className="flex items-baseline gap-4 pb-3 border-b border-border-light last:border-b-0 last:pb-0">
                    <span className="font-serif italic text-amber font-bold text-xl w-8 flex-shrink-0">{e.num}.</span>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-charcoal">{e.titre}</div>
                      <div className="text-xs text-stone italic mt-0.5">{e.sous}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : preview PDF (sticky) */}
          <div className="md:col-span-2 md:sticky md:top-24">
            <div className="card-lg bg-gradient-to-br from-cream to-cream-dark border-border p-0 overflow-hidden shadow-brand-lg">
              {/* Mockup de couverture du PDF */}
              <div className="relative bg-cream aspect-[1/1.414] p-8 flex flex-col justify-between overflow-hidden">
                {/* Soleil décoratif */}
                <div className="absolute -top-16 -right-16 w-64 h-64 opacity-80">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="sunPrev" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#E8961A" stopOpacity="0.35"/>
                        <stop offset="100%" stopColor="#E8961A" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="100" fill="url(#sunPrev)"/>
                    <circle cx="100" cy="100" r="45" fill="none" stroke="#E8961A" strokeWidth="0.5" opacity="0.6"/>
                    <circle cx="100" cy="100" r="60" fill="none" stroke="#E8961A" strokeWidth="0.3" opacity="0.4"/>
                    <circle cx="100" cy="100" r="35" fill="#E8961A" opacity="0.15"/>
                  </svg>
                </div>

                {/* Header */}
                <div className="relative z-10 border-b border-charcoal pb-2 flex justify-between items-start">
                  <span className="font-serif font-bold text-[9px]">Monbalconsolaire<span className="text-amber font-black">.</span>fr</span>
                  <span className="text-[7px] tracking-widest uppercase text-stone">N° 01 / 2026</span>
                </div>

                {/* Titre */}
                <div className="relative z-10">
                  <div className="text-[8px] tracking-widest uppercase text-green-dark font-semibold mb-2">— L&apos;essentiel avant de se lancer</div>
                  <h3 className="font-serif font-bold text-2xl leading-tight text-charcoal">
                    Sept <span className="italic text-green">erreurs</span><br />
                    à éviter<br />
                    avant d&apos;acheter<br />
                    un kit solaire<br />
                    de balcon
                  </h3>
                </div>

                {/* Stats */}
                <div className="relative z-10 border-t border-charcoal pt-3 flex gap-4">
                  <div>
                    <div className="font-serif font-bold text-lg text-charcoal leading-none">07</div>
                    <div className="text-[6px] tracking-widest uppercase text-stone mt-0.5">Erreurs</div>
                  </div>
                  <div>
                    <div className="font-serif font-bold text-lg text-charcoal leading-none">15&apos;</div>
                    <div className="text-[6px] tracking-widest uppercase text-stone mt-0.5">Lecture</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-serif italic text-amber font-bold text-xs">Gratuit.</div>
                  </div>
                </div>
              </div>

              {/* Footer de la carte */}
              <div className="bg-charcoal text-cream p-4 text-center">
                <div className="text-[10px] uppercase tracking-widest text-amber mb-1">Guide PDF</div>
                <div className="text-sm font-semibold mb-3">12 pages · Édition digitale</div>
                <a
                  href="/guide-7-erreurs-kit-solaire.pdf"
                  download
                  onClick={handleDownloadTracking}
                  className="inline-block bg-amber text-charcoal font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-brand hover:bg-amber-bright transition-colors"
                >
                  Télécharger ↓
                </a>
              </div>
            </div>

            <p className="text-xs text-stone text-center mt-4 italic">
              « Les chiffres, les vraies arnaques, et les méthodes concrètes qui vous évitent de perdre 300 € ou plus. »
            </p>
          </div>
        </div>

        {/* Section du bas : pourquoi ce guide */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center">Pourquoi ce guide est différent</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card border-l-4 border-l-green">
              <div className="font-bold text-sm mb-1 text-green">✓ 100% indépendant</div>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Aucun fabricant ne nous finance. Notre analyse est libre et critique, même envers les marques qu&apos;on recommande.
              </p>
            </div>
            <div className="card border-l-4 border-l-green">
              <div className="font-bold text-sm mb-1 text-green">✓ Sans lien affilié</div>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Contrairement aux articles du site, ce PDF ne contient aucun lien affilié. C&apos;est du contenu pur.
              </p>
            </div>
            <div className="card border-l-4 border-l-green">
              <div className="font-bold text-sm mb-1 text-green">✓ Basé sur du vécu</div>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Les 7 erreurs ont été identifiées après analyse de centaines de retours d&apos;expérience sur les forums et SAV fabricants.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 max-w-3xl mx-auto card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
          <p className="font-semibold text-lg mb-2">Une fois le guide lu, passez au concret</p>
          <p className="text-sm text-charcoal-light mb-4">
            Calculez la rentabilité exacte de votre balcon en 30 secondes : département, orientation, puissance du kit.
          </p>
          <Link href="/calculateur" className="btn-primary inline-flex">
            Calculer mes économies →
          </Link>
        </div>
      </div>
    </section>
  );
}
