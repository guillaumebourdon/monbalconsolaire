'use client';

import { useState, useMemo, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { DEPARTMENTS } from '@/data/departments';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import {
  calculateProductionKwh,
  calculateROIYears,
  calculateFirstYearSavings,
  calculateTotalSavings25Years,
  type CalcInput,
} from '@/lib/pricing';

export default function CalculateurWrapper() {
  return (
    <Suspense fallback={<div className="section-padding"><div className="container-brand max-w-2xl text-center"><div className="animate-pulse h-8 bg-cream-dark rounded-brand w-48 mx-auto" /></div></div>}>
      <CalculateurPage />
    </Suspense>
  );
}

// ─── Kit catalog ──────────────────────────────────────────
const KITS = [
  { id: 'beem-kit-300w', name: 'Beem Kit 300W', brand: 'Beem Energy', power: 300, price: 299, hasBattery: false, slug: '/avis/beem-kit-300w', affiliateUrl: 'https://beemenergy.fr/products/kit-beem', minWidth: 'narrow', maxBudget: 400 },
  { id: 'sunology-play-2', name: 'Sunology PLAY 2', brand: 'Sunology', power: 450, price: 599, hasBattery: false, slug: '/avis/sunology-play-2', affiliateUrl: 'https://sunology.eu/products/play2-kit-solaire', minWidth: 'medium', maxBudget: 800 },
  { id: 'beem-on-460w', name: 'Beem On 460W', brand: 'Beem Energy', power: 460, price: 599, hasBattery: false, slug: '/avis/beem-on-460w', affiliateUrl: 'https://beemenergy.fr/products/beem-kit-solaire-plug-play', minWidth: 'medium', maxBudget: 800 },
  { id: 'sunethic-f500', name: 'Sunethic F500', brand: 'Sunethic', power: 500, price: 690, hasBattery: false, slug: '/avis/sunethic-f500', affiliateUrl: 'https://sunethic.fr/produits', minWidth: 'medium', maxBudget: 800 },
  { id: 'sunology-city', name: 'Sunology CITY', brand: 'Sunology', power: 405, price: 549, hasBattery: false, slug: '/avis/sunology-city', affiliateUrl: 'https://sunology.eu/products/city-kit-solaire-balcon', minWidth: 'narrow', maxBudget: 800 },
  { id: 'zendure-solarflow', name: 'Zendure SolarFlow', brand: 'Zendure', power: 840, price: 900, hasBattery: true, slug: '/avis/zendure-solarflow', affiliateUrl: '', minWidth: 'wide', maxBudget: 1500 },
  { id: 'sunology-play-max', name: 'Sunology PLAY MAX', brand: 'Sunology', power: 450, price: 1179, hasBattery: true, slug: '/avis/sunology-play-max', affiliateUrl: 'https://sunology.eu/products/play-max', minWidth: 'medium', maxBudget: 1500, editorial: 'ROI long (11,7 ans). Int\u00e9ressant pour l\u2019autonomie nocturne.' },
  { id: 'ecoflow-powerstream', name: 'EcoFlow PowerStream', brand: 'EcoFlow', power: 800, price: 1800, hasBattery: true, slug: '/avis/ecoflow-powerstream', affiliateUrl: 'https://fr.ecoflow.com/products/powerstream-microinverter', minWidth: 'wide', maxBudget: 9999, editorial: 'ROI long (10,2 ans). Pour l\u2019\u00e9cosyst\u00e8me EcoFlow ou le backup r\u00e9seau.' },
  { id: 'dualsun-preasy', name: 'DualSun PREASY', brand: 'DualSun', power: 420, price: 870, hasBattery: false, slug: '/avis/dualsun-preasy', affiliateUrl: '', minWidth: 'medium', maxBudget: 1500, editorial: 'ROI long (10,5 ans). Choix Made in France et design premium.' },
];

// ─── Options ──────────────────────────────────────────────
const ORIENTATIONS = [
  { value: 'sud', label: 'Sud', coeff: 1.0, emoji: '\u2600\ufe0f' },
  { value: 'sud-est-ouest', label: 'Sud-Est / Sud-Ouest', coeff: 0.95, emoji: '\ud83c\udf24\ufe0f' },
  { value: 'est-ouest', label: 'Est / Ouest', coeff: 0.80, emoji: '\u26c5' },
  { value: 'nord-est-ouest', label: 'Nord-Est / Nord-Ouest', coeff: 0.65, emoji: '\ud83c\udf25\ufe0f' },
  { value: 'nord', label: 'Nord', coeff: 0.50, emoji: '\u2601\ufe0f' },
  { value: 'unknown', label: 'Je ne sais pas', coeff: 0.90, emoji: '\ud83e\udd14' },
];

const SURFACES = [
  { value: 'narrow', label: 'Moins de 1m de large', emoji: '\ud83d\udccf' },
  { value: 'medium', label: '1 \u00e0 2m de large', emoji: '\ud83d\udcd0' },
  { value: 'wide', label: 'Plus de 2m ou terrasse', emoji: '\ud83c\udfe1' },
  { value: 'unknown', label: 'Je ne sais pas', emoji: '\ud83e\udd14' },
];

const PRESENCES = [
  { value: 'home', label: 'Pr\u00e9sent toute la journ\u00e9e', desc: 'Retraite, t\u00e9l\u00e9travail complet', autoconso: 0.90, autoconsoB: 0.95 },
  { value: 'mixed', label: 'Mixte (t\u00e9l\u00e9travail 2-3j)', desc: 'Pr\u00e9sent la moiti\u00e9 de la semaine', autoconso: 0.75, autoconsoB: 0.92 },
  { value: 'away', label: 'Absent en semaine', desc: 'Bureau ou d\u00e9placements', autoconso: 0.55, autoconsoB: 0.88 },
];

const BUDGETS = [
  { value: '400', label: 'Moins de 400 \u20ac', max: 400 },
  { value: '800', label: '400 \u2013 800 \u20ac', max: 800 },
  { value: '1500', label: '800 \u2013 1 500 \u20ac', max: 1500 },
  { value: 'none', label: 'Pas de limite', max: 99999 },
];

const SURFACE_COMPAT: Record<string, string[]> = {
  narrow: ['narrow'],
  medium: ['narrow', 'medium'],
  wide: ['narrow', 'medium', 'wide'],
  unknown: ['narrow', 'medium'],
};

// ─── GA4 helper ───────────────────────────────────────────
function gtag(event: string, params: Record<string, string | number>) {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', event, params);
  }
}

// ─── Component ────────────────────────────────────────────
function CalculateurPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const prefilledKit = searchParams.get('kit') || '';

  const [step, setStep] = useState(1);
  const [deptCode, setDeptCode] = useState(searchParams.get('dept') || '');
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [orientation, setOrientation] = useState(searchParams.get('orientation') || '');
  const [surface, setSurface] = useState(searchParams.get('surface') || '');
  const [presence, setPresence] = useState(searchParams.get('presence') || '');
  const [budget, setBudget] = useState(searchParams.get('budget') || '');
  const [noInflation, setNoInflation] = useState(false);
  const [forceAutoconso60, setForceAutoconso60] = useState(false);

  const dept = DEPARTMENTS.find(d => d.code === deptCode);

  // Auto-advance if all params in URL
  useEffect(() => {
    const d = searchParams.get('dept');
    const o = searchParams.get('orientation');
    const s = searchParams.get('surface');
    const p = searchParams.get('presence');
    const b = searchParams.get('budget');
    if (d && o && s && p && b) {
      setDeptCode(d); setOrientation(o); setSurface(s); setPresence(p); setBudget(b);
      setStep(6);
    }
    gtag('calculator_started', {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredDepts = useMemo(() => {
    if (!query || query.length < 1) return [];
    const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    return DEPARTMENTS.filter(d => {
      if (d.code.toLowerCase().startsWith(q)) return true;
      return d.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(q);
    }).sort((a, b) => {
      const an = parseInt(a.code, 10), bn = parseInt(b.code, 10);
      if (isNaN(an) && isNaN(bn)) return a.code.localeCompare(b.code);
      if (isNaN(an)) return 1; if (isNaN(bn)) return -1;
      return an - bn;
    }).slice(0, 10);
  }, [query]);

  const goStep = useCallback((n: number) => {
    setStep(n);
    if (n > 1 && n <= 6) gtag('calculator_step_completed', { step: n - 1 });
  }, []);

  const selectDept = (code: string, name: string) => {
    setDeptCode(code);
    setQuery(`${code} \u2014 ${name}`);
    setShowSuggestions(false);
    goStep(2);
  };

  const selectOrientation = (v: string) => { setOrientation(v); goStep(3); };
  const selectSurface = (v: string) => { setSurface(v); goStep(4); };
  const selectPresence = (v: string) => { setPresence(v); goStep(5); };
  const selectBudget = (v: string) => {
    setBudget(v);
    goStep(6);
    gtag('calculator_completed', {
      department: deptCode, orientation, surface, presence: v, budget: v,
    });
  };

  // Update URL on results
  useEffect(() => {
    if (step === 6 && deptCode && orientation && surface && presence && budget) {
      const params = new URLSearchParams({ dept: deptCode, orientation, surface, presence, budget });
      if (prefilledKit) params.set('kit', prefilledKit);
      router.replace(`/calculateur?${params.toString()}`, { scroll: false });
    }
  }, [step, deptCode, orientation, surface, presence, budget, prefilledKit, router]);

  // ─── Recommendation engine ──────────────────────────────
  const recommendations = useMemo(() => {
    if (step < 6 || !dept) return null;
    const orientData = ORIENTATIONS.find(o => o.value === orientation);
    const presenceData = PRESENCES.find(p => p.value === presence);
    const budgetData = BUDGETS.find(b => b.value === budget);
    if (!orientData || !presenceData || !budgetData) return null;

    const surfaceAllowed = SURFACE_COMPAT[surface] || SURFACE_COMPAT['medium'];

    // Score ALL kits that fit surface (include +15% over budget for "stretch" kits)
    const budgetMax = budgetData.max;
    const budgetStretch = Math.round(budgetMax * 1.15);

    const scored = KITS
      .filter(k => surfaceAllowed.includes(k.minWidth) && k.price <= budgetStretch)
      .map(k => {
        const ac = forceAutoconso60 ? 0.60 : (k.hasBattery ? presenceData.autoconsoB : presenceData.autoconso);
        const input: CalcInput = {
          kitPriceEur: k.price,
          kitPowerWc: k.power,
          productibleKwhPerKwc: dept.irradiation,
          orientationCoef: orientData.coeff,
          hasBattery: k.hasBattery,
          includeInflation: !noInflation,
          autoconsoOverride: ac,
        };
        const production = calculateProductionKwh(input);
        const firstYear = Math.round(calculateFirstYearSavings(input));
        const roi = calculateROIYears(input);
        const total25 = calculateTotalSavings25Years(input);
        const overBudget = k.price > budgetMax;
        return { ...k, production, firstYear, roi, total25, autoconso: ac, overBudget };
      })
      .sort((a, b) => a.roi - b.roi);

    // Check honesty threshold: if best ROI > 12, recommend against
    const bestRoi = scored.length > 0 ? scored[0].roi : 99;
    const honestNo = bestRoi > 12;

    if (scored.length === 0 || honestNo) {
      return { picks: [], others: [], all: scored, honestNo: true, orientation: orientData.label, presence: presenceData.label };
    }

    const picks: Array<typeof scored[0] & { label: string; reasons: string[] }> = [];
    const used = new Set<string>();

    // Best choice = best ROI, non-editorial, within budget
    const bestChoice = scored.find(k => !k.editorial && !k.overBudget && !used.has(k.id));
    if (bestChoice) {
      used.add(bestChoice.id);
      const reasons: string[] = [];
      if (orientData.coeff >= 0.95) reasons.push('Adapt\u00e9 \u00e0 votre exposition ' + orientData.label.toLowerCase());
      if (presenceData.autoconso >= 0.75) reasons.push('ROI optimis\u00e9 gr\u00e2ce \u00e0 votre pr\u00e9sence en journ\u00e9e');
      if (bestChoice.roi <= 7) reasons.push('Rentabilis\u00e9 en moins de 7 ans');
      if (reasons.length === 0) reasons.push('Meilleur retour sur investissement pour votre profil');
      picks.push({ ...bestChoice, label: 'Meilleur choix', reasons });
      gtag('kit_recommended', { product_name: bestChoice.name, position: 'best_choice', roi_years: bestChoice.roi });
    }

    // Best price = cheapest NOT already used
    const bestPrice = scored.filter(k => !used.has(k.id) && !k.overBudget).sort((a, b) => a.price - b.price)[0];
    if (bestPrice) {
      used.add(bestPrice.id);
      picks.push({ ...bestPrice, label: 'Meilleur prix', reasons: ['Le kit le moins cher pour votre profil', `ROI de ${bestPrice.roi} ans pour seulement ${bestPrice.price} \u20ac`] });
      gtag('kit_recommended', { product_name: bestPrice.name, position: 'best_price', roi_years: bestPrice.roi });
    }

    // Best storage = best ROI among battery kits NOT already used (include stretch budget)
    const bestStorage = scored.filter(k => k.hasBattery && !used.has(k.id)).sort((a, b) => a.roi - b.roi)[0];
    if (bestStorage) {
      used.add(bestStorage.id);
      const storageReasons = ['Batterie int\u00e9gr\u00e9e : consommez le soir', `Autoconsommation ${Math.round(bestStorage.autoconso * 100)}% vs ${Math.round((presenceData.autoconso) * 100)}% sans batterie`];
      if (bestStorage.overBudget) storageReasons.push(`L\u00e9g\u00e8rement au-dessus de votre budget (${bestStorage.price} \u20ac)`);
      picks.push({ ...bestStorage, label: 'Avec stockage', reasons: storageReasons });
      gtag('kit_recommended', { product_name: bestStorage.name, position: 'best_storage', roi_years: bestStorage.roi });
    }

    // Others = editorial kits that match but not picked
    const others = scored.filter(k => k.editorial && !used.has(k.id));

    // If prefilled kit, put it first
    if (prefilledKit) {
      const idx = picks.findIndex(p => p.id === prefilledKit);
      if (idx > 0) { const [item] = picks.splice(idx, 1); picks.unshift(item); }
    }

    return { picks, others, all: scored };
  }, [step, dept, orientation, presence, budget, surface, noInflation, forceAutoconso60, prefilledKit]);

  const totalSteps = prefilledKit ? 3 : 5;
  const displayStep = prefilledKit ? Math.min(step, 4) : step;
  const progressPct = Math.min(((displayStep - 1) / totalSteps) * 100, 100);

  // If prefilled kit, skip surface + budget
  useEffect(() => {
    if (prefilledKit && step === 3 && !surface) { setSurface('medium'); }
    if (prefilledKit && step === 4 && !budget) { setBudget('none'); }
    if (prefilledKit && step === 3 && surface) { goStep(4); }
    if (prefilledKit && step === 4 && budget) { goStep(6); }
  }, [prefilledKit, step, surface, budget, goStep]);

  const presenceLabel = PRESENCES.find(p => p.value === presence)?.label || '';
  const orientLabel = ORIENTATIONS.find(o => o.value === orientation)?.label || '';

  return (
    <section className="section-padding">
      <div className="container-brand max-w-2xl">
        <div className="text-center mb-8">
          <div className="badge-amber mb-4 inline-block">Calculateur gratuit</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {step < 6 ? 'Trouvez le kit solaire id\u00e9al pour votre balcon' : 'Vos r\u00e9sultats personnalis\u00e9s'}
          </h1>
          {step < 6 && <p className="text-charcoal-light">R&eacute;pondez &agrave; {totalSteps} questions. R&eacute;sultat en 30 secondes.</p>}
        </div>

        {/* Progress bar */}
        {step < 6 && (
          <div className="mb-8">
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber to-green rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
            </div>
            <div className="text-xs text-stone text-right mt-1 font-mono">{Math.min(displayStep, totalSteps)}/{totalSteps}</div>
          </div>
        )}

        {/* STEP 1: D\u00e9partement */}
        {step === 1 && (
          <div className="card-lg reveal">
            <label htmlFor="dept-input" className="font-bold text-xl mb-2 block">Quel est votre d&eacute;partement ?</label>
            <p className="text-sm text-stone mb-6">Tapez le num&eacute;ro ou le nom de votre d&eacute;partement.</p>
            <div className="relative" onClick={e => e.stopPropagation()}>
              <input
                id="dept-input"
                type="text"
                placeholder="Ex : 75, Paris, 13, Bouches-du-Rh\u00f4ne..."
                value={query}
                onChange={e => { setQuery(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full p-4 rounded-brand border border-border bg-cream text-base font-medium focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all"
                autoComplete="off"
              />
              {showSuggestions && filteredDepts.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-brand border border-border shadow-brand-lg z-10 max-h-80 overflow-y-auto">
                  {filteredDepts.map(d => (
                    <button key={d.code} onClick={() => selectDept(d.code, d.name)} className="w-full text-left px-4 py-3 hover:bg-green-pale transition-colors flex justify-between items-center border-b border-border-light last:border-0">
                      <div><span className="font-mono text-sm text-amber-dark font-semibold mr-2">{d.code}</span><span className="font-semibold text-sm">{d.name}</span></div>
                      <span className="text-xs font-mono text-green">{d.irradiation} kWh</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 2: Orientation */}
        {step === 2 && (
          <div className="card-lg reveal">
            <h2 className="font-bold text-xl mb-2">Quelle est l&apos;orientation de votre balcon ?</h2>
            <p className="text-sm text-stone mb-6">L&apos;orientation d&eacute;termine combien de soleil votre panneau re&ccedil;oit.</p>
            <div className="grid grid-cols-2 gap-3">
              {ORIENTATIONS.map(o => (
                <button key={o.value} onClick={() => selectOrientation(o.value)} className="text-left p-4 rounded-brand border border-border bg-cream hover:border-green hover:bg-green-pale transition-all">
                  <span className="text-xl mb-1 block">{o.emoji}</span>
                  <span className="font-semibold text-sm">{o.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => goStep(1)} className="text-sm text-stone hover:text-green mt-4">&larr; Retour</button>
          </div>
        )}

        {/* STEP 3: Surface */}
        {step === 3 && !prefilledKit && (
          <div className="card-lg reveal">
            <h2 className="font-bold text-xl mb-2">Quelle surface disponible ?</h2>
            <p className="text-sm text-stone mb-6">La largeur de votre balcon ou terrasse.</p>
            <div className="grid grid-cols-2 gap-3">
              {SURFACES.map(s => (
                <button key={s.value} onClick={() => selectSurface(s.value)} className="text-left p-4 rounded-brand border border-border bg-cream hover:border-green hover:bg-green-pale transition-all">
                  <span className="text-xl mb-1 block">{s.emoji}</span>
                  <span className="font-semibold text-sm">{s.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => goStep(2)} className="text-sm text-stone hover:text-green mt-4">&larr; Retour</button>
          </div>
        )}

        {/* STEP 4: Pr\u00e9sence */}
        {step === 4 && (
          <div className="card-lg reveal">
            <h2 className="font-bold text-xl mb-2">&Ecirc;tes-vous chez vous en journ&eacute;e ?</h2>
            <p className="text-sm text-stone mb-6">D&eacute;termine votre taux d&apos;autoconsommation (= combien de solaire vous utilisez vraiment).</p>
            <div className="space-y-3">
              {PRESENCES.map(p => (
                <button key={p.value} onClick={() => selectPresence(p.value)} className="w-full text-left p-4 rounded-brand border border-border bg-cream hover:border-green hover:bg-green-pale transition-all">
                  <span className="font-semibold text-sm block">{p.label}</span>
                  <span className="text-xs text-stone">{p.desc}</span>
                </button>
              ))}
            </div>
            <button onClick={() => goStep(prefilledKit ? 2 : 3)} className="text-sm text-stone hover:text-green mt-4">&larr; Retour</button>
          </div>
        )}

        {/* STEP 5: Budget */}
        {step === 5 && !prefilledKit && (
          <div className="card-lg reveal">
            <h2 className="font-bold text-xl mb-2">Quel est votre budget maximum ?</h2>
            <p className="text-sm text-stone mb-6">On vous recommandera uniquement des kits dans votre enveloppe.</p>
            <div className="grid grid-cols-2 gap-3">
              {BUDGETS.map(b => (
                <button key={b.value} onClick={() => selectBudget(b.value)} className="text-left p-4 rounded-brand border border-border bg-cream hover:border-green hover:bg-green-pale transition-all">
                  <span className="font-semibold text-sm">{b.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => goStep(4)} className="text-sm text-stone hover:text-green mt-4">&larr; Retour</button>
          </div>
        )}

        {/* RESULTS */}
        {step === 6 && recommendations && (
          <div className="space-y-6 reveal">
            {/* Profile recap */}
            <div className="card bg-cream/50 text-sm text-charcoal-light">
              <strong className="text-charcoal">Votre profil :</strong> {dept?.name} ({deptCode}), orientation {orientLabel.toLowerCase()}, {presenceLabel.toLowerCase()}{budget !== 'none' ? `, budget \u2264 ${BUDGETS.find(b => b.value === budget)?.label.replace('Moins de ', '').replace('Pas de limite', '')}` : ''}
            </div>

            {/* Honest no-go */}
            {recommendations.picks.length === 0 && recommendations.honestNo && (
              <div className="card-lg border-l-4 border-l-amber">
                <h2 className="font-bold text-lg mb-3">Dans votre cas, un kit solaire balcon n&apos;est probablement pas rentable</h2>
                <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                  Avec votre configuration (orientation {orientLabel.toLowerCase()}, {presenceLabel.toLowerCase()}), le ROI d&eacute;passerait <strong>12 ans</strong>, ce qui n&apos;est pas raisonnable pour un kit plug-and-play.
                </p>
                <p className="text-sm text-charcoal-light leading-relaxed mb-4">Avant d&apos;investir, nous vous recommandons de :</p>
                <ul className="text-sm text-charcoal-light space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span className="text-amber-dark font-bold">&rarr;</span> V&eacute;rifier si vous avez une exposition alternative exploitable</li>
                  <li className="flex items-start gap-2"><span className="text-amber-dark font-bold">&rarr;</span> Comparer avec une batterie virtuelle EDF (sans investissement mat&eacute;riel)</li>
                  <li className="flex items-start gap-2"><span className="text-amber-dark font-bold">&rarr;</span> <Link href="/blog/panneau-solaire-balcon-nord" className="text-green hover:underline">Lire notre guide sur les balcons nord et peu expos&eacute;s</Link></li>
                </ul>
                <p className="text-sm text-charcoal-light mb-4">
                  Si vous voulez quand m&ecirc;me tester pour des raisons &eacute;cologiques, le Beem Kit 300W reste accessible &agrave; 299 &euro;.
                </p>
                <AffiliateCTA productName="Beem Kit 300W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-beem" label="Voir le Beem Kit 300W" variant="secondary" position="calculator_fallback" />
              </div>
            )}

            {/* No match (budget/surface too restrictive but not honest-no) */}
            {recommendations.picks.length === 0 && !recommendations.honestNo && (
              <div className="card-lg text-center">
                <p className="text-lg font-bold mb-2">Aucun kit ne correspond exactement</p>
                <p className="text-sm text-charcoal-light mb-4">Votre combinaison surface/budget est tr&egrave;s contrainte. Le Beem Kit 300W (299 &euro;) est le point d&apos;entr&eacute;e le plus accessible.</p>
                <AffiliateCTA productName="Beem Kit 300W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-beem" label="Voir le Beem Kit 300W" variant="primary" position="calculator_fallback" />
              </div>
            )}

            {/* Kit cards */}
            {recommendations.picks.length > 0 && (
              <div className="grid md:grid-cols-3 gap-4">
                {recommendations.picks.map((kit, i) => (
                  <div key={kit.id} className={`card-lg flex flex-col ${i === 0 ? 'border-green/30 bg-green-pale/10 md:scale-[1.02]' : ''}`}>
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${i === 0 ? 'text-green' : 'text-amber-dark'}`}>
                      {i === 0 ? '\ud83e\udd47' : i === 1 ? '\ud83e\udd48' : '\ud83e\udd49'} {kit.label}
                    </div>
                    <h3 className="font-bold text-base mb-0.5">{kit.name}</h3>
                    <p className="text-xs text-stone mb-1">{kit.brand}</p>
                    {kit.overBudget && <p className="text-[10px] text-amber-dark font-semibold mb-2">L&eacute;g&egrave;rement au-dessus de votre budget</p>}

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-mono font-extrabold text-2xl text-green">{kit.roi}&thinsp;ans</span>
                      <span className="text-xs text-stone">de ROI</span>
                    </div>
                    <div className="text-xs text-charcoal-light mb-3">
                      {kit.firstYear}&thinsp;&euro;/an d&apos;&eacute;conomies &middot; {kit.total25.toLocaleString('fr-FR')}&thinsp;&euro; sur 25 ans
                    </div>

                    <ul className="text-xs text-charcoal-light space-y-1 mb-4 flex-1">
                      {kit.reasons.map((r, j) => (
                        <li key={j} className="flex items-start gap-1.5"><span className="text-green font-bold mt-0.5">&check;</span>{r}</li>
                      ))}
                    </ul>

                    <div className="mt-auto space-y-2">
                      <div className="font-mono font-bold text-lg text-center mb-2">{kit.price}&thinsp;&euro;</div>
                      {kit.affiliateUrl ? (
                        <AffiliateCTA
                          productName={kit.name}
                          merchantName={kit.brand}
                          affiliateUrl={kit.affiliateUrl}
                          label={`Voir le prix sur ${kit.brand}`}
                          variant="primary"
                          position="calculator_result"
                        />
                      ) : (
                        <Link href={kit.slug} className="btn-primary w-full justify-center text-sm inline-flex">Voir l&apos;avis complet &rarr;</Link>
                      )}
                      <Link href={kit.slug} className="text-green text-xs font-semibold hover:underline block text-center">Lire l&apos;avis complet &rarr;</Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Other kits (editorial) */}
            {recommendations.others.length > 0 && (
              <div className="mt-6">
                <h3 className="font-bold text-sm mb-3 text-stone">Autres kits &agrave; consid&eacute;rer</h3>
                <div className="space-y-2">
                  {recommendations.others.map(k => (
                    <Link key={k.id} href={k.slug} className="card flex items-center justify-between hover:shadow-brand-lg transition-all group py-3 px-5">
                      <div>
                        <span className="font-semibold text-sm group-hover:text-green transition-colors">{k.name}</span>
                        <span className="text-xs text-stone ml-2">{k.price} &euro; &middot; ROI {k.roi} ans</span>
                      </div>
                      <span className="text-xs text-amber-dark">{k.editorial}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Adjust assumptions */}
            <details className="card mt-6">
              <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                Ajuster les hypoth&egrave;ses de calcul
                <span className="text-stone text-xs">&#9660;</span>
              </summary>
              <div className="mt-4 space-y-3">
                <label className="flex items-center gap-3 text-sm text-charcoal-light cursor-pointer">
                  <input type="checkbox" checked={noInflation} onChange={e => setNoInflation(e.target.checked)} className="w-4 h-4 rounded border-border text-green focus:ring-green" />
                  D&eacute;sactiver l&apos;inflation kWh (mode prudent)
                </label>
                <label className="flex items-center gap-3 text-sm text-charcoal-light cursor-pointer">
                  <input type="checkbox" checked={forceAutoconso60} onChange={e => setForceAutoconso60(e.target.checked)} className="w-4 h-4 rounded border-border text-green focus:ring-green" />
                  Forcer autoconsommation &agrave; 60% (pire sc&eacute;nario)
                </label>
                <p className="text-[10px] text-stone">
                  Hypoth&egrave;ses par d&eacute;faut : inflation 3,3%/an (CRE 2012-2026), Performance Ratio 0,85, autoconsommation selon votre profil. <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie</Link>.
                </p>
              </div>
            </details>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button onClick={() => { setStep(1); setDeptCode(''); setQuery(''); setOrientation(''); setSurface(''); setPresence(''); setBudget(''); }} className="btn-secondary flex-1 justify-center text-sm">
                Recommencer
              </button>
              <Link href="/comparatif/meilleur-kit-solaire-2026" className="btn-primary flex-1 justify-center text-sm">
                Voir le comparatif complet &rarr;
              </Link>
            </div>

            <p className="text-[10px] text-stone text-center mt-4">
              Calcul bas&eacute; sur les donn&eacute;es PVGIS, tarif EDF 0,1940 &euro;/kWh, inflation 3,3%/an (CRE). <Link href="/methodologie" className="text-green hover:underline">M&eacute;thodologie compl&egrave;te</Link>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
