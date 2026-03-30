'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// Simplified solar data by department (kWh/kWc/year)
const SOLAR_DATA: Record<string, { name: string; kwh: number }> = {
  '06': { name: 'Alpes-Maritimes', kwh: 1450 },
  '13': { name: 'Bouches-du-Rhône', kwh: 1500 },
  '31': { name: 'Haute-Garonne', kwh: 1300 },
  '33': { name: 'Gironde', kwh: 1250 },
  '34': { name: 'Hérault', kwh: 1450 },
  '35': { name: 'Ille-et-Vilaine', kwh: 1100 },
  '44': { name: 'Loire-Atlantique', kwh: 1200 },
  '59': { name: 'Nord', kwh: 1000 },
  '67': { name: 'Bas-Rhin', kwh: 1100 },
  '69': { name: 'Rhône', kwh: 1300 },
  '75': { name: 'Paris', kwh: 1100 },
  '76': { name: 'Seine-Maritime', kwh: 1000 },
  '83': { name: 'Var', kwh: 1500 },
  '84': { name: 'Vaucluse', kwh: 1450 },
};

// Regions with default values for departments not listed
const REGIONS: Record<string, { label: string; kwh: number }> = {
  'nord': { label: 'Nord de la France (Lille, Paris, Strasbourg...)', kwh: 1050 },
  'ouest': { label: 'Ouest (Rennes, Nantes, Bordeaux...)', kwh: 1200 },
  'est': { label: 'Est (Lyon, Grenoble, Dijon...)', kwh: 1250 },
  'sud-ouest': { label: 'Sud-Ouest (Toulouse, Montpellier...)', kwh: 1350 },
  'sud-est': { label: 'Sud-Est (Marseille, Nice, Toulon...)', kwh: 1480 },
};

const ORIENTATIONS = [
  { value: 'sud', label: 'Sud', coeff: 1.0, emoji: '🌞' },
  { value: 'sud-est', label: 'Sud-Est', coeff: 0.93, emoji: '🌤' },
  { value: 'sud-ouest', label: 'Sud-Ouest', coeff: 0.93, emoji: '🌤' },
  { value: 'est', label: 'Est', coeff: 0.80, emoji: '⛅' },
  { value: 'ouest', label: 'Ouest', coeff: 0.80, emoji: '⛅' },
  { value: 'nord', label: 'Nord', coeff: 0.45, emoji: '☁️' },
];

const KITS = [
  { name: 'Sunology PLAY2', power: 0.45, price: 599, brand: 'Sunology', badge: 'Meilleur choix' },
  { name: 'Beem Kit 300W', power: 0.30, price: 299, brand: 'Beem Energy', badge: 'Petit budget' },
  { name: 'Beem On 460W', power: 0.46, price: 599, brand: 'Beem Energy', badge: 'Modulaire' },
  { name: 'Sunethic F500', power: 0.50, price: 690, brand: 'Sunethic', badge: 'Made in France' },
];

const TARIF_KWH = 0.194; // EDF tarif réglementé feb 2026

export default function CalculateurPage() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState('');
  const [orientation, setOrientation] = useState('');
  const [consoMensuelle, setConsoMensuelle] = useState('');

  const totalSteps = 3;

  const results = useMemo(() => {
    if (!region || !orientation || !consoMensuelle) return null;

    const regionData = REGIONS[region];
    const orientData = ORIENTATIONS.find((o) => o.value === orientation);
    if (!regionData || !orientData) return null;

    const consoAnnuelle = parseFloat(consoMensuelle) * 12;
    const rendementBase = regionData.kwh; // kWh/kWc/year

    return KITS.map((kit) => {
      const production = kit.power * rendementBase * orientData.coeff * 0.85; // 0.85 = pertes système
      const economies = production * TARIF_KWH;
      const roi = kit.price / economies;
      const score = Math.min(100, Math.round((economies / kit.price) * 100 * 3.5));

      return {
        ...kit,
        production: Math.round(production),
        economies: Math.round(economies),
        roi: parseFloat(roi.toFixed(1)),
        score,
      };
    }).sort((a, b) => b.score - a.score);
  }, [region, orientation, consoMensuelle]);

  const bestKit = results?.[0];

  return (
    <>
      <section className="section-padding">
        <div className="container-brand max-w-2xl">
          <div className="text-center mb-10">
            <div className="badge-amber mb-4 inline-block">Calculateur gratuit</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Votre balcon est-il rentable pour le solaire ?
            </h1>
            <p className="text-charcoal-light">
              Répondez à 3 questions simples. Résultat en 30 secondes.
            </p>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1">
                <div className={`h-1.5 rounded-full transition-all duration-500 ${step >= s ? 'bg-gradient-to-r from-amber to-amber-light' : 'bg-border'}`} />
              </div>
            ))}
            <span className="text-xs text-stone font-mono font-medium ml-2">
              {step <= totalSteps ? `${step}/${totalSteps}` : 'Résultats'}
            </span>
          </div>

          {/* STEP 1: Region */}
          {step === 1 && (
            <div className="card-lg">
              <h2 className="font-bold text-xl mb-2">Où se trouve votre balcon ?</h2>
              <p className="text-sm text-stone mb-6">Sélectionnez votre région pour estimer l&apos;ensoleillement.</p>
              <div className="grid gap-3">
                {Object.entries(REGIONS).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => { setRegion(key); setStep(2); }}
                    className={`text-left p-4 rounded-brand border transition-all duration-200 hover:border-green hover:bg-green-pale ${region === key ? 'border-green bg-green-pale' : 'border-border bg-cream'}`}
                  >
                    <span className="font-semibold text-sm">{data.label}</span>
                    <span className="block text-xs text-stone mt-1 font-mono">{data.kwh} kWh/kWc/an d&apos;ensoleillement</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Orientation */}
          {step === 2 && (
            <div className="card-lg">
              <h2 className="font-bold text-xl mb-2">Quelle est l&apos;orientation de votre balcon ?</h2>
              <p className="text-sm text-stone mb-6">L&apos;orientation détermine combien de soleil votre panneau recevra.</p>
              <div className="grid grid-cols-2 gap-3">
                {ORIENTATIONS.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => { setOrientation(o.value); setStep(3); }}
                    className={`text-left p-4 rounded-brand border transition-all duration-200 hover:border-green hover:bg-green-pale ${orientation === o.value ? 'border-green bg-green-pale' : 'border-border bg-cream'}`}
                  >
                    <span className="text-xl mb-1 block">{o.emoji}</span>
                    <span className="font-semibold text-sm">{o.label}</span>
                    <span className="block text-xs text-stone mt-1">{Math.round(o.coeff * 100)}% du potentiel max</span>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="text-sm text-stone hover:text-green mt-4">← Retour</button>
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
                  onChange={(e) => setConsoMensuelle(e.target.value)}
                  className="w-full p-4 pr-16 rounded-brand border border-border bg-cream text-lg font-semibold focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone font-medium">€/mois</span>
              </div>
              <div className="flex gap-2 mb-6">
                {['50', '80', '120', '160'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setConsoMensuelle(v)}
                    className="px-4 py-2 rounded-lg bg-cream border border-border text-sm font-medium hover:border-green hover:bg-green-pale transition-all"
                  >
                    {v}€
                  </button>
                ))}
              </div>
              <button
                onClick={() => consoMensuelle && setStep(4)}
                disabled={!consoMensuelle}
                className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed text-base py-4"
              >
                ☀ Voir mes résultats →
              </button>
              <button onClick={() => setStep(2)} className="text-sm text-stone hover:text-green mt-4 block">← Retour</button>
            </div>
          )}

          {/* RESULTS */}
          {step === 4 && results && bestKit && (
            <div className="space-y-6">
              {/* Score card */}
              <div className="card-lg bg-gradient-to-br from-amber-pale via-white to-green-pale/30 border-amber/15">
                <div className="text-center">
                  <p className="text-sm text-stone font-medium mb-2">Score solaire de votre balcon</p>
                  <div className="text-6xl font-extrabold text-amber-dark font-sans mb-1">
                    {bestKit.score}<span className="text-2xl text-stone font-normal">/100</span>
                  </div>
                  <div className="w-full max-w-xs mx-auto mt-4 mb-2">
                    <div className="h-3 bg-amber/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber to-amber-light rounded-full transition-all duration-1000"
                        style={{ width: `${bestKit.score}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-[11px] text-stone">
                      <span>Faible</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                  <p className="text-sm text-charcoal-light mt-4">
                    {bestKit.score >= 70
                      ? 'Votre balcon a un excellent potentiel solaire ! Un kit serait rentable.'
                      : bestKit.score >= 40
                        ? 'Potentiel correct. Un kit peut être intéressant avec le bon choix.'
                        : 'Potentiel limité. L\'orientation réduit significativement la production.'}
                  </p>
                </div>
              </div>

              {/* Key numbers */}
              <div className="grid grid-cols-3 gap-4">
                <div className="card text-center">
                  <div className="font-mono font-medium text-green text-2xl">{bestKit.production}</div>
                  <div className="text-xs text-stone mt-1 font-medium">kWh/an produits</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-medium text-amber-dark text-2xl">{bestKit.economies}€</div>
                  <div className="text-xs text-stone mt-1 font-medium">économies/an</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-medium text-green text-2xl">{bestKit.roi}</div>
                  <div className="text-xs text-stone mt-1 font-medium">ans de ROI</div>
                </div>
              </div>

              {/* Kit recommendations */}
              <div>
                <h3 className="font-bold text-lg mb-4">Kits recommandés pour votre balcon</h3>
                <div className="space-y-4">
                  {results.map((kit, i) => (
                    <div key={i} className={`card flex items-center gap-4 ${i === 0 ? 'border-green/30 bg-green-pale/30' : ''}`}>
                      {i === 0 && <div className="badge-green text-[10px]">Recommandé</div>}
                      <div className="flex-1">
                        <div className="font-bold">{kit.name}</div>
                        <div className="text-xs text-stone">{kit.brand} — {kit.power * 1000} Wc</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-medium text-green">{kit.price}€</div>
                        <div className="text-xs text-stone">{kit.economies}€/an d&apos;éco.</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="card-lg text-center bg-gradient-to-br from-green-pale to-white border-green/10">
                <p className="text-charcoal-light mb-4">Pour un comparatif détaillé de chaque kit avec avantages et inconvénients :</p>
                <Link href="/comparatif" className="btn-primary text-base py-3.5 px-8">
                  Voir le comparatif complet →
                </Link>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-stone-light text-center leading-relaxed">
                Estimation basée sur les données PVGIS (Commission européenne) et le tarif EDF réglementé de 0,1940 €/kWh (février 2026).
                Les résultats réels peuvent varier selon l'ombrage, l'inclinaison et votre consommation réelle.
                <br />
                <button onClick={() => { setStep(1); setRegion(''); setOrientation(''); setConsoMensuelle(''); }} className="text-green hover:underline mt-2 inline-block">
                  ↻ Recommencer le calcul
                </button>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
