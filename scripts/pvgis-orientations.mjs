#!/usr/bin/env node
/**
 * Production PVGIS 5.3 selon l'orientation, pour 4 préfectures (Lille, Paris, Lyon, Marseille).
 * Mêmes hypothèses que scripts/pvgis-prefectures.mjs (800 Wc, pertes 14 %, crystSi, SARAH3),
 * six orientations (PVGIS : aspect 0 = sud, -90 = est, 90 = ouest, 180 = nord), 30° et 90°.
 * Cache versionné : src/data/pvgis-orientations.json. Usage : node scripts/pvgis-orientations.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'src/data/pvgis-orientations.json');
const pref = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/pvgis-prefectures.json'), 'utf8')).departements;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const VILLES = ['59', '75', '69', '13'];
const ASPECTS = { sud: 0, 'sud-est': -45, 'sud-ouest': 45, est: -90, ouest: 90, nord: 180 };
const ANGLES = [30, 90];
const cache = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : { meta: {}, villes: {} };

for (const code of VILLES) {
  const p = pref[code];
  cache.villes[code] = cache.villes[code] ?? { code, ville: p.prefecture, lat: p.lat, lon: p.lon, resultats: {} };
  for (const angle of ANGLES) {
    for (const [nom, aspect] of Object.entries(ASPECTS)) {
      const key = `${nom}-${angle}`;
      if (cache.villes[code].resultats[key]) continue;
      await sleep(1500);
      const url = `https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=${p.lat}&lon=${p.lon}&peakpower=0.8&loss=14&angle=${angle}&aspect=${aspect}&outputformat=json`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status} ${url}`);
      const j = await res.json();
      cache.villes[code].resultats[key] = {
        orientation: nom, angle, aspect,
        E_y: Math.round(j.outputs.totals.fixed.E_y),
        E_m: j.outputs.monthly.fixed.map((m) => Math.round(m.E_m * 10) / 10),
      };
      console.log(p.prefecture, key, Math.round(j.outputs.totals.fixed.E_y));
    }
  }
  cache.meta = {
    source: 'PVGIS 5.3, API PVcalc (JRC, Commission européenne), base PVGIS-SARAH3',
    hypotheses: '800 Wc, silicium cristallin, pertes système 14 %, incliné 30° et vertical 90°, six orientations',
    interrogeLe: new Date().toISOString().slice(0, 10),
  };
  fs.writeFileSync(OUT, JSON.stringify(cache, null, 1) + '\n');
}
console.log('OK');
