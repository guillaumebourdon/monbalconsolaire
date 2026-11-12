#!/usr/bin/env node
/**
 * Production PVGIS 5.3 au point de chaque préfecture (96 départements métropolitains).
 *
 * - Coordonnées : centre de la commune chef-lieu, API officielle geo.api.gouv.fr
 *   (/departements/{code}?fields=chefLieu puis /communes/{insee}?fields=centre).
 * - Production : API PVGIS 5.3 PVcalc (JRC, Commission européenne),
 *   https://re.jrc.ec.europa.eu/api/v5_3/PVcalc, base de rayonnement par défaut (PVGIS-SARAH3),
 *   technologie crystSi, pertes système 14 %, orientation plein sud (aspect = 0), 800 Wc.
 *   Deux cas : incliné 30° et vertical 90° (garde-corps).
 * - Cache : src/data/pvgis-prefectures.json (versionné). Un département déjà présent
 *   n'est pas réinterrogé ; --force pour tout refaire. 1,5 s entre deux appels.
 *
 * Usage : node scripts/pvgis-prefectures.mjs [--force]
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'src/data/pvgis-prefectures.json');
const FORCE = process.argv.includes('--force');
const PEAK_KW = 0.8;
const LOSS = 14;
const CASES = { incline30: 30, vertical90: 90 };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CODES = [
  '01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19',
  '21','22','23','24','25','26','27','28','29','2A','2B','30','31','32','33','34','35','36','37','38','39',
  '40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59',
  '60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79',
  '80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95',
];

async function getJson(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'monbalconsolaire-data-script' } });
      if (res.ok) return await res.json();
      console.error(`HTTP ${res.status} ${url}`);
    } catch (e) {
      console.error(`Erreur ${e.message} ${url}`);
    }
    await sleep(3000 * (i + 1));
  }
  throw new Error(`Échec : ${url}`);
}

const cache = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : { meta: {}, departements: {} };

for (const code of CODES) {
  if (!FORCE && cache.departements[code]) continue;
  const dep = await getJson(`https://geo.api.gouv.fr/departements/${code}?fields=nom,code,codeRegion,chefLieu`);
  const com = await getJson(`https://geo.api.gouv.fr/communes/${dep.chefLieu}?fields=nom,centre,population`);
  const [lon, lat] = com.centre.coordinates;
  const entry = {
    code,
    departement: dep.nom,
    codeRegion: dep.codeRegion,
    prefecture: com.nom,
    insee: dep.chefLieu,
    lat,
    lon,
  };
  for (const [key, angle] of Object.entries(CASES)) {
    await sleep(1500);
    const url = `https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=${lat}&lon=${lon}&peakpower=${PEAK_KW}&loss=${LOSS}&angle=${angle}&aspect=0&outputformat=json`;
    const j = await getJson(url);
    const monthly = j.outputs.monthly.fixed.map((m) => Math.round(m.E_m * 10) / 10);
    entry[key] = {
      angle,
      E_y: Math.round(j.outputs.totals.fixed.E_y),
      kWhParKwc: Math.round(j.outputs.totals.fixed.E_y / PEAK_KW),
      E_y_exact: j.outputs.totals.fixed.E_y,
      H_i_y: Math.round(j.outputs.totals.fixed['H(i)_y']),
      E_m: monthly,
      database: j.inputs.meteo_data.radiation_db,
      years: `${j.inputs.meteo_data.year_min}-${j.inputs.meteo_data.year_max}`,
    };
  }
  cache.departements[code] = entry;
  cache.meta = {
    source: 'PVGIS 5.3, API PVcalc (JRC, Commission européenne), https://re.jrc.ec.europa.eu/api/v5_3/PVcalc',
    coordonnees: 'Centre de la commune chef-lieu, API geo.api.gouv.fr',
    hypotheses: `${PEAK_KW * 1000} Wc, silicium cristallin, pertes système ${LOSS} %, plein sud (aspect 0), incliné 30° et vertical 90°`,
    interrogeLe: new Date().toISOString().slice(0, 10),
  };
  fs.writeFileSync(OUT, JSON.stringify(cache, null, 1) + '\n');
  console.log(`${code} ${com.nom} : 30° ${entry.incline30.E_y} kWh, 90° ${entry.vertical90.E_y} kWh`);
}
console.log(`OK : ${Object.keys(cache.departements).length} départements dans ${OUT}`);
