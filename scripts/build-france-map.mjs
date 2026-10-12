#!/usr/bin/env node

/**
 * Génère src/data/france-departements-paths.ts : chemins SVG projetés
 * des 96 départements de France métropolitaine.
 *
 * Source des contours : gregoiredavid/france-geojson
 *   (departements-version-simplifiee.geojson), dérivé d'IGN Admin Express,
 *   Licence Ouverte / Open Licence Etalab.
 *
 * Usage :
 *   node scripts/build-france-map.mjs                 # télécharge le GeoJSON
 *   node scripts/build-france-map.mjs chemin.geojson  # fichier local
 *
 * Projection : conique conforme de Lambert (paramètres du Lambert-93 :
 * parallèles 44° et 49°, méridien central 3° E), mise à l'échelle sur
 * une largeur de 1000 unités, coordonnées entières, simplification
 * Douglas-Peucker (tolérance 0,6 unité ≈ 600 m).
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const SOURCE_URL =
  'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements-version-simplifiee.geojson';
const ROOT = join(import.meta.dirname, '..');
const OUT = join(ROOT, 'src', 'data', 'france-departements-paths.ts');
const WIDTH = 1000;
const PADDING = 10;
const TOLERANCE = 0.6;

async function loadGeoJSON() {
  const local = process.argv[2];
  if (local) return JSON.parse(readFileSync(local, 'utf-8'));
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Téléchargement impossible : ${res.status}`);
  return res.json();
}

// ─── Lambert conique conforme (sphère, suffisant pour une carte) ──────────
const rad = (d) => (d * Math.PI) / 180;
const phi1 = rad(44);
const phi2 = rad(49);
const phi0 = rad(46.5);
const lambda0 = rad(3);
const n =
  Math.log(Math.cos(phi1) / Math.cos(phi2)) /
  Math.log(Math.tan(Math.PI / 4 + phi2 / 2) / Math.tan(Math.PI / 4 + phi1 / 2));
const F = (Math.cos(phi1) * Math.pow(Math.tan(Math.PI / 4 + phi1 / 2), n)) / n;
const rho = (phi) => F / Math.pow(Math.tan(Math.PI / 4 + phi / 2), n);
const rho0 = rho(phi0);

function project([lon, lat]) {
  const r = rho(rad(lat));
  const theta = n * (rad(lon) - lambda0);
  return [r * Math.sin(theta), -(rho0 - r * Math.cos(theta))];
}

// ─── Douglas-Peucker ──────────────────────────────────────────────────────
function perpDist(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  if (dx === 0 && dy === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy);
  const tt = Math.max(0, Math.min(1, t));
  return Math.hypot(p[0] - (a[0] + tt * dx), p[1] - (a[1] + tt * dy));
}

function simplify(points, tol) {
  if (points.length < 4) return points;
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop();
    let max = 0;
    let idx = -1;
    for (let i = s + 1; i < e; i++) {
      const d = perpDist(points[i], points[s], points[e]);
      if (d > max) { max = d; idx = i; }
    }
    if (max > tol && idx > 0) {
      keep[idx] = 1;
      stack.push([s, idx], [idx, e]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

// ─── Main ─────────────────────────────────────────────────────────────────
const geo = await loadGeoJSON();
const features = geo.features.map((f) => {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  return { code: f.properties.code, nom: f.properties.nom, polys: polys.map((p) => p.map((ring) => ring.map(project))) };
});

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (const f of features) for (const p of f.polys) for (const ring of p) for (const [x, y] of ring) {
  minX = Math.min(minX, x); maxX = Math.max(maxX, x);
  minY = Math.min(minY, y); maxY = Math.max(maxY, y);
}
const scale = (WIDTH - 2 * PADDING) / (maxX - minX);
const height = Math.ceil((maxY - minY) * scale + 2 * PADDING);

const out = features
  .map((f) => {
    let d = '';
    for (const p of f.polys) {
      for (const ring of p) {
        const pts = ring.map(([x, y]) => [(x - minX) * scale + PADDING, (y - minY) * scale + PADDING]);
        const simp = simplify(pts, TOLERANCE).map(([x, y]) => [Math.round(x), Math.round(y)]);
        // dédoublonne les points consécutifs identiques après arrondi
        const ptsInt = simp.filter((pt, i) => i === 0 || pt[0] !== simp[i - 1][0] || pt[1] !== simp[i - 1][1]);
        if (ptsInt.length < 3) continue;
        d += `M${ptsInt[0][0]} ${ptsInt[0][1]}`;
        let segs = '';
        for (let i = 1; i < ptsInt.length; i++) {
          const dx = ptsInt[i][0] - ptsInt[i - 1][0];
          const dy = ptsInt[i][1] - ptsInt[i - 1][1];
          if (dx === 0 && dy === 0) continue;
          segs += `${i === 1 ? '' : ' '}${dx} ${dy}`;
        }
        d += `l${segs}z`;
      }
    }
    return { code: f.code, nom: f.nom, d };
  })
  .sort((a, b) => a.code.localeCompare(b.code));

if (out.length !== 96) throw new Error(`96 départements attendus, ${out.length} trouvés`);

const file = `// Fichier généré par scripts/build-france-map.mjs — ne pas modifier à la main.
// Contours : gregoiredavid/france-geojson (departements-version-simplifiee.geojson),
// dérivé d'IGN Admin Express, Licence Ouverte / Open Licence Etalab.
// Projection conique conforme de Lambert (44°/49°, méridien 3° E), simplifiée.

export const FRANCE_MAP_VIEWBOX = '0 0 ${WIDTH} ${height}';

export const FRANCE_DEPARTEMENTS_PATHS: { code: string; nom: string; d: string }[] = [
${out.map((o) => `  { code: '${o.code}', nom: ${JSON.stringify(o.nom)}, d: '${o.d}' },`).join('\n')}
];
`;
writeFileSync(OUT, file);
console.log(`${out.length} départements -> ${OUT} (${(Buffer.byteLength(file) / 1024).toFixed(1)} Ko, viewBox 0 0 ${WIDTH} ${height})`);
