'use client';

import { useMemo, useState } from 'react';

export type TableRow = {
  code: string;
  name: string;
  region: string;
  productible: number;
  productionKwh: number;
  savingsYear1: number;
  roiYears: number;
  roiYearsAlt: number;
  netGain25: number;
  rank: number;
};

type SortKey = 'rank' | 'code' | 'name' | 'region' | 'productionKwh' | 'savingsYear1' | 'roiYears' | 'roiYearsAlt' | 'netGain25';

const COLUMNS: { key: SortKey; label: string; numeric?: boolean }[] = [
  { key: 'rank', label: 'Rang', numeric: true },
  { key: 'code', label: 'Dép.' },
  { key: 'name', label: 'Département' },
  { key: 'region', label: 'Région' },
  { key: 'productionKwh', label: 'kWh/an', numeric: true },
  { key: 'savingsYear1', label: '€/an', numeric: true },
  { key: 'roiYears', label: 'ROI 599 €', numeric: true },
  { key: 'roiYearsAlt', label: 'ROI 429 €', numeric: true },
  { key: 'netGain25', label: 'Gain net 25 ans', numeric: true },
];

const fmt = (n: number) => n.toLocaleString('fr-FR');
const fmtYears = (n: number) => String(n).replace('.', ',');

export function RentabiliteTable({ rows }: { rows: TableRow[] }) {
  const [sortKey, setSortKey] = useState<SortKey>('rank');
  const [asc, setAsc] = useState(true);

  const sorted = useMemo(() => {
    const s = [...rows].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      const cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb), 'fr');
      return cmp || a.rank - b.rank || a.code.localeCompare(b.code);
    });
    return asc ? s : s.reverse();
  }, [rows, sortKey, asc]);

  const onSort = (key: SortKey) => {
    if (key === sortKey) setAsc(!asc);
    else {
      setSortKey(key);
      // gains et production : du plus grand au plus petit par défaut
      setAsc(!(key === 'productionKwh' || key === 'savingsYear1' || key === 'netGain25'));
    }
  };

  return (
    <div className="overflow-x-auto -mx-5 md:mx-0 rounded-brand border border-border-light">
      <table className="w-full text-sm border-collapse min-w-[720px]">
        <caption className="sr-only">
          Rentabilit&eacute; d&apos;un kit solaire de balcon 500 Wc par d&eacute;partement, tri&eacute;e par colonne
        </caption>
        <thead>
          <tr className="bg-green text-white">
            {COLUMNS.map((c) => (
              <th
                key={c.key}
                scope="col"
                aria-sort={sortKey === c.key ? (asc ? 'ascending' : 'descending') : 'none'}
                className={`p-0 font-semibold ${c.numeric ? 'text-right' : 'text-left'}`}
              >
                <button
                  type="button"
                  onClick={() => onSort(c.key)}
                  className={`w-full px-3 py-2.5 hover:bg-green-dark transition-colors ${c.numeric ? 'text-right' : 'text-left'}`}
                >
                  {c.label}
                  <span className="ml-1 text-[10px] opacity-80" aria-hidden="true">
                    {sortKey === c.key ? (asc ? '▲' : '▼') : '↕'}
                  </span>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((r, i) => (
            <tr key={r.code} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
              <td className="px-3 py-2 text-right font-mono text-stone">{r.rank}</td>
              <td className="px-3 py-2 font-mono text-amber-dark font-semibold">{r.code}</td>
              <td className="px-3 py-2 font-semibold">{r.name}</td>
              <td className="px-3 py-2 text-charcoal-light">{r.region}</td>
              <td className="px-3 py-2 text-right font-mono">{fmt(r.productionKwh)}</td>
              <td className="px-3 py-2 text-right font-mono">{fmt(r.savingsYear1)}</td>
              <td className="px-3 py-2 text-right font-mono font-bold">{fmtYears(r.roiYears)} ans</td>
              <td className="px-3 py-2 text-right font-mono text-charcoal-light">{fmtYears(r.roiYearsAlt)} ans</td>
              <td className="px-3 py-2 text-right font-mono text-green">{fmt(r.netGain25)} &euro;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
