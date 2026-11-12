#!/usr/bin/env node
/**
 * Données ouvertes par département et par région (métropole), mises en cache dans
 * src/data/donnees-locales.json (versionné).
 *
 * 1. Installations photovoltaïques de moins de 36 kW raccordées : ODRÉ (RTE, Enedis, ELD),
 *    « Registre national des installations de production et de stockage d'électricité »,
 *    jeu registre-national-installation-production-stockage-electricite-agrege (lignes
 *    « Agrégation des installations de moins de 36KW », filière Solaire), somme de nbInstallations
 *    et de puismaxinstallee (kW). Les totaux régionaux incluent les quelques lignes sans code
 *    département (codeRegion seul).
 * 2. Résidences principales et part d'appartements : INSEE, recensement de la population,
 *    API Melodi, jeu DS_RP_LOGEMENT_PRINC (TDW = 2 appartements, TDW = 1 maisons, OCS = DW_MAIN).
 *
 * Usage : node scripts/donnees-locales.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'src/data/donnees-locales.json');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const REGIONS = ['11', '24', '27', '28', '32', '44', '52', '53', '75', '76', '84', '93', '94'];
const pvgis = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/pvgis-prefectures.json'), 'utf8'));
const DEPTS = Object.keys(pvgis.departements);

async function getJson(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'monbalconsolaire-data-script' } });
      if (res.ok) return await res.json();
      console.error(`HTTP ${res.status} ${url}`);
    } catch (e) {
      console.error(e.message);
    }
    await sleep(3000 * (i + 1));
  }
  throw new Error(url);
}

// ── ODRÉ ──
const ODRE_DS = 'registre-national-installation-production-stockage-electricite-agrege';
const odreMeta = await getJson(`https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/${ODRE_DS}`);
const odreTitle = odreMeta.metas.default.title;
const q = new URLSearchParams({
  select: 'codedepartement,coderegion,sum(nbinstallations) as nb,sum(puismaxinstallee) as kw',
  group_by: 'codedepartement,coderegion',
  where: "filiere='Solaire' and nominstallation='Agrégation des installations de moins de 36KW'",
  limit: '200',
});
const odre = await getJson(`https://odre.opendatasoft.com/api/explore/v2.1/catalog/datasets/${ODRE_DS}/records?${q}`);
const pvDept = {};
const pvReg = {};
for (const r of odre.results) {
  if (!REGIONS.includes(r.coderegion)) continue;
  if (r.codedepartement) pvDept[r.codedepartement] = { installations: r.nb, puissanceKw: Math.round(r.kw) };
  pvReg[r.coderegion] = pvReg[r.coderegion] ?? { installations: 0, puissanceKw: 0 };
  pvReg[r.coderegion].installations += r.nb;
  pvReg[r.coderegion].puissanceKw += Math.round(r.kw);
}

// ── INSEE ──
async function logements(geo) {
  const url = `https://api.insee.fr/melodi/data/DS_RP_LOGEMENT_PRINC?GEO=${geo}&TIME_PERIOD=2023&OCS=DW_MAIN&BUILD_END=_T&L_STAY=_T&NOR=_T&CARS=_T&CARPARK=_T&TSH=_T&NRG_SRC=_T&RP_MEASURE=DWELLINGS&maxResult=20`;
  const j = await getJson(url);
  const v = {};
  for (const o of j.observations) v[o.dimensions.TDW] = o.measures.OBS_VALUE_NIVEAU.value;
  if (!v._T || !v['2']) throw new Error(`INSEE incomplet ${geo}`);
  return {
    residencesPrincipales: Math.round(v._T),
    appartements: Math.round(v['2']),
    maisons: Math.round(v['1']),
    partAppartements: Math.round((v['2'] / v._T) * 1000) / 10,
  };
}

const departements = {};
for (const code of DEPTS) {
  const log = await logements(`2025-DEP-${code}`);
  await sleep(400);
  const pv = pvDept[code];
  departements[code] = {
    ...log,
    ...(pv ?? {}),
    installationsPour1000Logements: pv ? Math.round((pv.installations / log.residencesPrincipales) * 10000) / 10 : null,
  };
  console.log(code, departements[code].partAppartements, pv?.installations);
}
const regions = {};
for (const code of REGIONS) {
  const log = await logements(`2025-REG-${code}`);
  await sleep(400);
  const pv = pvReg[code];
  regions[code] = { ...log, ...pv, installationsPour1000Logements: Math.round((pv.installations / log.residencesPrincipales) * 10000) / 10 };
  console.log('REG', code, regions[code]);
}

fs.writeFileSync(
  OUT,
  JSON.stringify(
    {
      meta: {
        interrogeLe: new Date().toISOString().slice(0, 10),
        installations: {
          source: `ODRÉ (RTE, Enedis, EDF SEI, ELD), « ${odreTitle} », licence ouverte Etalab`,
          url: 'https://odre.opendatasoft.com/explore/dataset/registre-national-installation-production-stockage-electricite-agrege/',
          perimetre: 'Installations photovoltaïques de moins de 36 kW (lignes « Agrégation des installations de moins de 36KW », filière Solaire), tous gestionnaires de réseau',
          miseAJourJeu: odreMeta.metas.default.modified,
        },
        logements: {
          source: 'INSEE, recensement de la population 2023, résidences principales selon le type de logement (API Melodi, DS_RP_LOGEMENT_PRINC)',
          url: 'https://catalogue-donnees.insee.fr/fr/catalogue/recherche/DS_RP_LOGEMENT_PRINC',
          annee: 2023,
        },
      },
      departements,
      regions,
    },
    null,
    1,
  ) + '\n',
);
console.log('OK', OUT);
