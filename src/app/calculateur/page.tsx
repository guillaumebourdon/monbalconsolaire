'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CITIES, CityData } from '@/data/cities';

const ORIENTATIONS = [
  { value: 'sud', label: 'Sud', coeff: 1.0, emoji: '\u2600\ufe0f', desc: '100% du potentiel' },
  { value: 'sud-est', label: 'Sud-Est', coeff: 0.93, emoji: '\ud83c\udf24', desc: '93% du potentiel' },
  { value: 'sud-ouest', label: 'Sud-Ouest', coeff: 0.93, emoji: '\ud83c\udf24', desc: '93% du potentiel' },
  { value: 'est', label: 'Est', coeff: 0.80, emoji: '\u26c5', desc: '80% du potentiel' },
  { value: 'ouest', label: 'Ouest', coeff: 0.80, emoji: '\u26c5', desc: '80% du potentiel' },
  { value: 'nord', label: 'Nord', coeff: 0.45, emoji: '\u2601\ufe0f', desc: '45% du potentiel' },
];

const KITS = [
  { name: 'Sunology PLAY2', power: 0.45, price: 599, brand: 'Sunology', badge: 'Meilleur choix' },
  { name: 'Beem Kit 300W', power: 0.30, price: 299, brand: 'Beem Energy', badge: 'Petit budget' },
  { name: 'Beem On 460W', power: 0.46, price: 599, brand: 'Beem Energy', badge: 'Modulaire' },
  { name: 'Sunethic F500', power: 0.50, price: 690, brand: 'Sunethic', badge: 'Made in France' },
];

const TARIF_KWH = 0.194;

export default function CalculateurPage() {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState<CityData | null>(null);
  const [cityQuery, setCityQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [orientation, setOrientation] = useState('');
  const [consoMensuelle, setConsoMensuelle] = useState('');
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCities = useMemo(() => {
    if (!cityQuery || cityQuery.length < 2) return [];
    const q = cityQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return CITIES.filter(c => {
      const name = c.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return name.startsWith(q) || name.includes(q);
    }).slice(0, 8);
  }, [cityQuery]);

  const results = useMemo(() => {
    if (!city || !orientation || !consoMensuelle) return null;
    const orientData = ORIENTATIONS.find(o => o.value === orientation);
    if (!orientData) return null;

    return KITS.map(kit => {
      const production = kit.power * city.irradiation * orientData.coeff * 0.85;
      const économies = production * TARIF_KWH;
      const roi = kit.price / économies;
      const score = Math.min(100, Math.round((économies / kit.price) * 100 * 3.5));
      return { ...kit, production: Math.round(production), économies: Math.round(économies), roi: parseFloat(roi.toFixed(1)), score };
    }).sort((a, b) => b.score - a.score);
  }, [city, orientation, consoMensuelle]);

  const bestKit = results?.[0];

  const handleShare = () => {
    const url = window.location.origin + '/calculateur';
    const text = city && bestKit
      ? `Mon balcon à ${city.name} à un score solaire de ${bestKit.score}/100 ! Je peux économiser ${bestKit.économies}\u20ac/an avec un kit solaire. Testez le votre :`
      : 'Calculez combien vous pouvez économiser avec un panneau solaire sur votre balcon :';
    if (navigator.share) {
      navigator.share({ title: 'MonBalconSolaire - Score solaire', text, url });
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      setShareStatus('copied');
      setTimeout(() => setShareStatus('idle'), 2000);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => setShowSuggestions(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <section className="section-padding">
      <div className="container-brand max-w-2xl">
        <div className="text-center mb-10">
          <div className="badge-amber mb-4 inline-block">Calculateur gratuit</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Votre balcon est-il rentable pour le solaire ?</h1>
          <p className="text-charcoal-light">Répondez à 3 questions simples. Résultat en 30 secondes.</p>
        </div>

        <div className="flex items-center gap-3 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex-1">
              <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'bg-gradient-to-r from-amber to-amber-light' : 'bg-border'}`} />
            </div>
          ))}
          <span className="text-xs text-stone font-mono font-medium ml-2">{step <= 3 ? `${step}/3` : 'Résultats'}</span>
        </div>

        {/* STEP 1: City */}
        {step === 1 && (
          <div className="card-lg">
            <h2 className="font-bold text-xl mb-2">Ou se trouve votre balcon ?</h2>
            <p className="text-sm text-stone mb-6">Tapez le nom de votre ville pour obtenir des données d&apos;ensoleillement précises.</p>
            <div className="relative" onClick={e => e.stopPropagation()}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Ex : Lyon, Marseille, Paris..."
                value={cityQuery}
                onChange={e => { setCityQuery(e.target.value); setShowSuggestions(true); setCity(null); }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full p-4 rounded-brand border border-border bg-cream text-base font-medium focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
                autoComplete="off"
              />
              {showSuggestions && filteredCities.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-brand border border-border shadow-brand-lg z-10 overflow-hidden">
                  {filteredCities.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => { setCity(c); setCityQuery(c.name); setShowSuggestions(false); setStep(2); }}
                      className="w-full text-left px-4 py-3 hover:bg-green-pale transition-colors flex justify-between items-center border-b border-border-light last:border-0"
                    >
                      <div>
                        <span className="font-semibold text-sm">{c.name}</span>
                        <span className="text-xs text-stone ml-2">({c.department}) — {c.region}</span>
                      </div>
                      <span className="text-xs font-mono text-amber-dark">{c.irradiation} kWh/kWc</span>
                    </button>
                  ))}
                </div>
              )}
              {cityQuery.length >= 2 && filteredCities.length === 0 && showSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-brand border border-border shadow-brand p-4 z-10">
                  <p className="text-sm text-stone">Aucune ville trouvee. Essayez une grande ville proche.</p>
                </div>
              )}
            </div>
            {city && (
              <div className="mt-4 card bg-green-pale/30 border-green/10">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-sm">{city.name}</span>
                    <span className="text-xs text-stone ml-2">{city.region}</span>
                  </div>
                  <span className="font-mono text-sm text-green font-medium">{city.irradiation} kWh/kWc/an</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: Orientation */}
        {step === 2 && (
          <div className="card-lg">
            <h2 className="font-bold text-xl mb-2">Quelle est l&apos;orientation de votre balcon ?</h2>
            <p className="text-sm text-stone mb-6">L&apos;orientation determine combien de soleil votre panneau recevra.</p>
            <div className="grid grid-cols-2 gap-3">
              {ORIENTATIONS.map(o => (
                <button
                  key={o.value}
                  onClick={() => { setOrientation(o.value); setStep(3); }}
                  className={`text-left p-4 rounded-brand border transition-all duration-200 hover:border-green hover:bg-green-pale ${orientation === o.value ? 'border-green bg-green-pale' : 'border-border bg-cream'}`}
                >
                  <span className="text-xl mb-1 block">{o.emoji}</span>
                  <span className="font-semibold text-sm">{o.label}</span>
                  <span className="block text-xs text-stone mt-1">{o.desc}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="text-sm text-stone hover:text-green mt-4">&larr; Retour</button>
          </div>
        )}

        {/* STEP 3: Consumption */}
        {step === 3 && (
          <div className="card-lg">
            <h2 className="font-bold text-xl mb-2">Quelle est votre facture EDF mensuelle ?</h2>
            <p className="text-sm text-stone mb-6">Une estimation suffit. Nous l&apos;utilisons pour calculer le % de couverture.</p>
            <div className="relative mb-6">
              <input
                type="number"
                placeholder="Ex : 80"
                value={consoMensuelle}
                onChange={e => setConsoMensuelle(e.target.value)}
                className="w-full p-4 pr-16 rounded-brand border border-border bg-cream text-lg font-semibold focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone font-medium">&euro;/mois</span>
            </div>
            <div className="flex gap-2 mb-6">
              {['50', '80', '120', '160'].map(v => (
                <button key={v} onClick={() => setConsoMensuelle(v)} className="px-4 py-2 rounded-lg bg-cream border border-border text-sm font-medium hover:border-green hover:bg-green-pale transition-all">{v}&euro;</button>
              ))}
            </div>
            <button
              onClick={() => consoMensuelle && setStep(4)}
              disabled={!consoMensuelle}
              className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed text-base py-4"
            >
              Voir mes résultats &rarr;
            </button>
            <button onClick={() => setStep(2)} className="text-sm text-stone hover:text-green mt-4 block">&larr; Retour</button>
          </div>
        )}

        {/* RESULTS */}
        {step === 4 && results && bestKit && (
          <div className="space-y-6">
            <div className="card-lg bg-gradient-to-br from-amber-pale via-white to-green-pale/30 border-amber/15">
              <div className="text-center">
                <p className="text-sm text-stone font-medium mb-2">Score solaire de votre balcon {city && <>a <strong>{city.name}</strong></>}</p>
                <div className="text-6xl font-extrabold text-amber-dark font-sans mb-1">{bestKit.score}<span className="text-2xl text-stone font-normal">/100</span></div>
                {city && <p className="text-xs text-stone mt-1">Orientation {orientation} &middot; {city.irradiation} kWh/kWc/an</p>}
                <div className="w-full max-w-xs mx-auto mt-4 mb-2">
                  <div className="h-3 bg-amber/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber to-amber-light rounded-full" style={{ width: `${bestKit.score}%` }} />
                  </div>
                  <div className="flex justify-between mt-1 text-[11px] text-stone"><span>Faible</span><span>Excellent</span></div>
                </div>
                <p className="text-sm text-charcoal-light mt-4">
                  {bestKit.score >= 70 ? 'Excellent potentiel solaire ! Un kit serait tres rentable.'
                    : bestKit.score >= 40 ? 'Potentiel correct. Un kit peut etre intéressant avec le bon choix.'
                    : 'Potentiel limite. L\'orientation réduit significativement la production.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { v: `${bestKit.production}`, u: 'kWh/an produits', c: 'text-green' },
                { v: `${bestKit.économies}\u20ac`, u: 'économies/an', c: 'text-amber-dark' },
                { v: `${bestKit.roi}`, u: 'ans de ROI', c: 'text-green' },
              ].map((s, i) => (
                <div key={i} className="card text-center">
                  <div className={`font-mono font-medium text-2xl ${s.c}`}>{s.v}</div>
                  <div className="text-xs text-stone mt-1 font-medium">{s.u}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kits recommandés pour votre balcon</h3>
              <div className="space-y-3">
                {results.map((kit, i) => (
                  <div key={i} className={`card flex items-center gap-4 ${i === 0 ? 'border-green/30 bg-green-pale/30' : ''}`}>
                    {i === 0 && <div className="badge-green text-[10px]">Recommandé</div>}
                    <div className="flex-1">
                      <div className="font-bold">{kit.name}</div>
                      <div className="text-xs text-stone">{kit.brand} — {kit.power * 1000} Wc</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-medium text-green">{kit.price}&euro;</div>
                      <div className="text-xs text-stone">{kit.économies}&euro;/an</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share button */}
            <div className="flex gap-3">
              <button onClick={handleShare} className="btn-secondary flex-1 justify-center text-sm">
                {shareStatus === 'copied' ? '\u2705 Lien copie !' : '\ud83d\udcf2 Partager mes résultats'}
              </button>
              <Link href="/comparatif/meilleur-kit-solaire-2026" className="btn-primary flex-1 justify-center text-sm">
                Voir le comparatif &rarr;
              </Link>
            </div>

            <p className="text-xs text-stone-light text-center leading-relaxed">
              Estimation basee sur les données PVGIS (Commission europeenne) et le tarif EDF de 0,1940 &euro;/kWh (fevrier 2026).{' '}
              <button onClick={() => { setStep(1); setCity(null); setCityQuery(''); setOrientation(''); setConsoMensuelle(''); }} className="text-green hover:underline">&circlearrowleft; Recommencer</button>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
