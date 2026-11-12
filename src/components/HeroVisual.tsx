'use client';

import { useEffect, useState } from 'react';
import { calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, PVGIS_REFERENCE_LYON, type CalcInput } from '@/lib/pricing';
import { PRODUCTS, priceLabel } from '@/data/products';

// Exemple affiché : Sunology PLAY, Lyon (Rhône), balcon sud-ouest, foyer présent en journée.
// Tous les chiffres sont calculés avec lib/pricing.ts et le prix vient de data/products.ts.
const KIT = PRODUCTS['sunology-play'];
const EXAMPLE: CalcInput = {
  kitPriceEur: KIT.priceEur,
  kitPowerWc: KIT.powerWc,
  productibleKwhPerKwc: PVGIS_REFERENCE_LYON, // Rhône = référence Lyon du site
  orientationCoef: 0.95, // sud-ouest
};
const PRODUCTION = calculateProductionKwh(EXAMPLE);
const SAVINGS = Math.round(calculateFirstYearSavings(EXAMPLE));
const ROI = calculateROIYears(EXAMPLE);

// Répartition mensuelle indicative (profil type d'un balcon à Lyon), ramenée à la production annuelle.
const MONTHLY_SHAPE = [
  { month: 'Jan', w: 28 },
  { month: 'Fév', w: 36 },
  { month: 'Mar', w: 52 },
  { month: 'Avr', w: 62 },
  { month: 'Mai', w: 78 },
  { month: 'Juin', w: 85 },
  { month: 'Juil', w: 90 },
  { month: 'Aoû', w: 82 },
  { month: 'Sep', w: 60 },
  { month: 'Oct', w: 42 },
  { month: 'Nov', w: 30 },
  { month: 'Déc', w: 22 },
];
const SHAPE_TOTAL = MONTHLY_SHAPE.reduce((s, m) => s + m.w, 0);
const MONTHLY_DATA = MONTHLY_SHAPE.map((m) => ({ month: m.month, kwh: Math.round((m.w / SHAPE_TOTAL) * PRODUCTION) }));
const MAX_KWH = Math.max(...MONTHLY_DATA.map((m) => m.kwh)) * 1.05;

const fr = (n: number) => n.toLocaleString('fr-FR');

export function HeroVisual() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Subtle glow behind the card */}
      <div className="absolute -inset-4 bg-gradient-to-br from-amber-pale/60 to-green-pale/40 rounded-[32px] blur-2xl opacity-60" />

      {/* Main card */}
      <div className="relative bg-white rounded-2xl border border-border shadow-brand-lg overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-light bg-cream/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-light/50" />
          <span className="ml-3 text-[11px] text-stone-light font-mono">
            monbalconsolaire.fr/calculateur
          </span>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          {/* Exemple de simulation */}
          <div className="text-center mb-5">
            <span className="inline-block px-3 py-1 bg-amber-pale text-amber-dark text-xs font-bold rounded-lg mb-2">
              Exemple de simulation
            </span>
            <p className="text-xs text-stone">Balcon sud-ouest, Lyon &middot; {KIT.name} {KIT.powerWc}&nbsp;Wc</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {[
              { value: fr(PRODUCTION), unit: 'kWh/an', color: 'text-green' },
              { value: `${SAVINGS} €`, unit: "d'éco. la 1re année", color: 'text-amber-dark' },
              { value: fr(ROI), unit: 'ans de ROI', color: 'text-green' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center p-3 bg-cream rounded-xl transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <div className={`font-mono font-medium text-lg ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-[10px] text-stone mt-0.5 font-medium">
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>

          {/* Monthly chart */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] text-stone font-semibold uppercase tracking-wider">
                Production mensuelle
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                <span className="text-[10px] text-stone-light">estimation</span>
              </div>
            </div>
            <div className="flex items-end gap-[5px]" style={{ height: '72px' }}>
              {MONTHLY_DATA.map((d, i) => {
                const heightPx = Math.round((d.kwh / MAX_KWH) * 68);
                const isHighSeason = d.kwh >= 60;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center" style={{ height: '100%', justifyContent: 'flex-end' }}>
                    <div
                      className={`w-full rounded-t-sm transition-all ease-out ${
                        isHighSeason
                          ? 'bg-green'
                          : 'bg-green-light/60'
                      }`}
                      style={{
                        height: animated ? `${heightPx}px` : '0px',
                        minHeight: animated ? '2px' : '0px',
                        transitionDuration: '800ms',
                        transitionDelay: `${800 + i * 80}ms`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex gap-[5px] mt-1">
              {MONTHLY_DATA.map((d, i) => (
                <div key={i} className="flex-1 text-center">
                  <span className="text-[8px] text-stone-light leading-none">
                    {d.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kit recommendation */}
          <div
            className={`p-3.5 bg-green-pale rounded-xl border border-green-lighter transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            style={{ transitionDelay: '1800ms' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-green-dark font-semibold">Kit de l&apos;exemple</div>
                <div className="text-sm font-bold text-green-dark mt-0.5">
                  {KIT.name}
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-medium text-green-dark text-lg">{priceLabel('sunology-play')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
