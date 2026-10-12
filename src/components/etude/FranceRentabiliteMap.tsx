'use client';

import { useCallback, useRef, useState, type ReactNode } from 'react';

export type MapDept = {
  code: string;
  name: string;
  productionKwh: number;
  savingsYear1: number;
  roiYears: number;
  rank: number;
};

const fmt = (n: number) => n.toLocaleString('fr-FR');

/**
 * Couche d'interactivité de la carte. Les tracés SVG sont rendus côté serveur
 * (children) ; ce composant ne gère que le survol / tap / sélection clavier.
 */
export function FranceRentabiliteMap({
  depts,
  viewBox,
  children,
}: {
  depts: MapDept[];
  viewBox: string;
  children: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<MapDept | null>(null);
  const [activeD, setActiveD] = useState<string>('');
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const byCode = useRef(new Map(depts.map((d) => [d.code, d])));

  const select = useCallback((code: string | null, point?: { x: number; y: number } | null) => {
    if (!code) {
      setActive(null);
      setActiveD('');
      setPos(null);
      return;
    }
    const dept = byCode.current.get(code) ?? null;
    const path = wrapRef.current?.querySelector(`path[data-code="${code}"]`);
    setActive(dept);
    setActiveD(path?.getAttribute('d') ?? '');
    if (point !== undefined) setPos(point);
  }, []);

  const pointFromEvent = (e: React.PointerEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointer = (e: React.PointerEvent) => {
    const code = (e.target as Element).closest?.('[data-code]')?.getAttribute('data-code') ?? null;
    if (e.type === 'pointerleave') {
      if (e.pointerType === 'mouse') select(null);
      return;
    }
    if (e.type === 'pointermove' && e.pointerType !== 'mouse') return;
    if (!code) {
      if (e.type === 'pointerdown') select(null);
      return;
    }
    // Souris : tooltip flottant ; tactile : seul le panneau sous la carte s'affiche
    select(code, e.pointerType === 'mouse' ? pointFromEvent(e) : null);
  };

  // Position du tooltip, gardé dans le cadre de la carte
  const width = wrapRef.current?.clientWidth ?? 0;
  const tipW = 220;
  let left = 0;
  let top = 0;
  if (pos) {
    left = Math.min(Math.max(pos.x + 14, 4), Math.max(width - tipW - 4, 4));
    if (pos.x + 14 + tipW > width) left = Math.max(pos.x - tipW - 14, 4);
    top = Math.max(pos.y - 110, 4);
  }

  return (
    <div>
      <label className="block text-sm font-semibold mb-2" htmlFor="dept-select">
        Choisir un d&eacute;partement
      </label>
      <select
        id="dept-select"
        className="w-full md:w-80 mb-4 rounded-brand border border-border bg-white px-3 py-2 text-sm"
        value={active?.code ?? ''}
        onChange={(e) => select(e.target.value || null, null)}
      >
        <option value="">&mdash; S&eacute;lectionner &mdash;</option>
        {[...depts]
          .sort((a, b) => a.code.localeCompare(b.code))
          .map((d) => (
            <option key={d.code} value={d.code}>
              {d.code} &middot; {d.name}
            </option>
          ))}
      </select>

      <div
        ref={wrapRef}
        className="relative touch-manipulation select-none"
        onPointerMove={onPointer}
        onPointerDown={onPointer}
        onPointerLeave={onPointer}
      >
        {children}
        {activeD && (
          <svg viewBox={viewBox} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <path d={activeD} fill="none" stroke="#2C2C28" strokeWidth={3} strokeLinejoin="round" />
          </svg>
        )}
        {active && pos && (
          <div
            className="absolute z-10 pointer-events-none rounded-brand border border-border bg-white/95 shadow-brand-lg p-3 text-xs"
            style={{ left, top, width: tipW }}
            role="status"
          >
            <TooltipBody d={active} />
          </div>
        )}
      </div>

      <div className="mt-3 min-h-[3.5rem] rounded-brand bg-cream-dark/60 p-3 text-sm" aria-live="polite">
        {active ? (
          <TooltipBody d={active} inline />
        ) : (
          <span className="text-stone">
            Survolez ou touchez un d&eacute;partement pour afficher ses chiffres.
          </span>
        )}
      </div>
    </div>
  );
}

function TooltipBody({ d, inline = false }: { d: MapDept; inline?: boolean }) {
  if (inline) {
    return (
      <p className="text-charcoal-light">
        <strong className="text-charcoal">
          {d.name} ({d.code})
        </strong>{' '}
        &middot; {fmt(d.productionKwh)} kWh/an &middot; {fmt(d.savingsYear1)} &euro;/an &middot;{' '}
        <strong className="text-charcoal">rentabilis&eacute; en {String(d.roiYears).replace('.', ',')} ans</strong>{' '}
        &middot; {d.rank}<sup>e</sup>/96
      </p>
    );
  }
  return (
    <>
      <div className="font-bold text-sm text-charcoal mb-1">
        {d.name} <span className="font-mono text-stone">({d.code})</span>
      </div>
      <dl className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-0.5 text-charcoal-light">
        <dt>Production</dt>
        <dd className="font-mono text-right text-charcoal">{fmt(d.productionKwh)} kWh/an</dd>
        <dt>&Eacute;conomies</dt>
        <dd className="font-mono text-right text-charcoal">{fmt(d.savingsYear1)} &euro;/an</dd>
        <dt>Rentabilis&eacute; en</dt>
        <dd className="font-mono text-right font-bold text-charcoal">{String(d.roiYears).replace('.', ',')} ans</dd>
        <dt>Classement</dt>
        <dd className="font-mono text-right text-charcoal">
          {d.rank}
          <sup>e</sup>/96
        </dd>
      </dl>
    </>
  );
}
