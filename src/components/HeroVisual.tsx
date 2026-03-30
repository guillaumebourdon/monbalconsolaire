'use client';

import { useEffect, useState } from 'react';

const MONTHLY_DATA = [
  { month: 'Jan', kwh: 28 },
  { month: 'Fév', kwh: 36 },
  { month: 'Mar', kwh: 52 },
  { month: 'Avr', kwh: 62 },
  { month: 'Mai', kwh: 78 },
  { month: 'Juin', kwh: 85 },
  { month: 'Juil', kwh: 90 },
  { month: 'Aoû', kwh: 82 },
  { month: 'Sep', kwh: 60 },
  { month: 'Oct', kwh: 42 },
  { month: 'Nov', kwh: 30 },
  { month: 'Déc', kwh: 22 },
];

const MAX_KWH = 95;

export function HeroVisual() {
  const [animated, setAnimated] = useState(false);
  const [scoreValue, setScoreValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animated) return;
    let current = 0;
    const target = 78;
    const interval = setInterval(() => {
      current += 2;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setScoreValue(current);
    }, 20);
    return () => clearInterval(interval);
  }, [animated]);

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
          {/* Score section */}
          <div className="text-center mb-5">
            <span className="inline-block px-3 py-1 bg-amber-pale text-amber-dark text-[11px] font-bold rounded-lg mb-3">
              Votre score solaire
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl md:text-[56px] font-extrabold text-amber-dark leading-none tabular-nums">
                {scoreValue}
              </span>
              <span className="text-xl text-stone-light font-normal">/100</span>
            </div>
            <p className="text-xs text-stone mt-1.5">Balcon sud-ouest, Lyon 3e</p>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-cream-dark rounded-full overflow-hidden mb-5">
            <div
              className="h-full bg-gradient-to-r from-amber to-amber-light rounded-full transition-all duration-1000 ease-out"
              style={{ width: animated ? '78%' : '0%' }}
            />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {[
              { value: '487', unit: 'kWh/an', color: 'text-green' },
              { value: '94 €', unit: "d'éco./an", color: 'text-amber-dark' },
              { value: '4.2', unit: 'ans ROI', color: 'text-green' },
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
            <div className="flex items-end gap-[5px] h-[72px]">
              {MONTHLY_DATA.map((d, i) => {
                const height = (d.kwh / MAX_KWH) * 100;
                const isHighSeason = d.kwh >= 60;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-t-sm transition-all ease-out ${
                        isHighSeason
                          ? 'bg-green'
                          : 'bg-green-light/60'
                      }`}
                      style={{
                        height: animated ? `${height}%` : '0%',
                        transitionDuration: '800ms',
                        transitionDelay: `${800 + i * 80}ms`,
                      }}
                    />
                    <span className="text-[8px] text-stone-light leading-none">
                      {d.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kit recommendation */}
          <div
            className={`p-3.5 bg-green-pale rounded-xl border border-green-lighter transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            style={{ transitionDelay: '1800ms' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-green font-semibold">Kit recommandé</div>
                <div className="text-sm font-bold text-green-dark mt-0.5">
                  Sunology PLAY2
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-medium text-green-dark text-lg">599 €</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
