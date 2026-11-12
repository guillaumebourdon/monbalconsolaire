import PVGIS from './pvgis-prefectures.json';

export interface DepartmentData {
  code: string;
  name: string;
  region: string;
  /** Productible PVGIS 5.3 au point de la préfecture, sud, 30°, pertes 14 % (kWh/kWc/an). */
  irradiation: number;
  /** Préfecture (point de calcul PVGIS). */
  prefecture: string;
}

type PvgisCas = { angle: number; E_y: number; kWhParKwc: number; H_i_y: number; E_m: number[] };
export type PvgisPrefecture = {
  code: string;
  departement: string;
  codeRegion: string;
  prefecture: string;
  insee: string;
  lat: number;
  lon: number;
  incline30: PvgisCas;
  vertical90: PvgisCas;
};

/** Résultats PVGIS bruts par département (kit de 800 Wc, sud, 30° et 90°, production mensuelle). */
export const PVGIS_PREFECTURES = (PVGIS as unknown as { departements: Record<string, PvgisPrefecture> }).departements;
export const PVGIS_META = (PVGIS as unknown as { meta: { source: string; coordonnees: string; hypotheses: string; interrogeLe: string } }).meta;

/**
 * Départements métropolitains (96).
 * Ensoleillement : PVGIS 5.3 (JRC, Commission européenne), API PVcalc, au point de la préfecture
 * (centre de la commune chef-lieu, geo.api.gouv.fr), plein sud, 30°, pertes système 14 %,
 * base PVGIS-SARAH3. Valeurs non arrondies, mises en cache dans pvgis-prefectures.json par
 * scripts/pvgis-prefectures.mjs (date d'interrogation dans PVGIS_META.interrogeLe).
 * Ce sont des productibles déjà nets des pertes : ne pas leur appliquer directement le PR 0,85,
 * passer par productibleSite() (lib/rentabilite-departements.ts), recalé sur la référence Lyon.
 */
const BASE: Omit<DepartmentData, 'irradiation' | 'prefecture'>[] = [
  // Auvergne-Rhône-Alpes
  { code: '01', name: 'Ain', region: 'Auvergne-Rhône-Alpes' },
  { code: '03', name: 'Allier', region: 'Auvergne-Rhône-Alpes' },
  { code: '07', name: 'Ardèche', region: 'Auvergne-Rhône-Alpes' },
  { code: '15', name: 'Cantal', region: 'Auvergne-Rhône-Alpes' },
  { code: '26', name: 'Drôme', region: 'Auvergne-Rhône-Alpes' },
  { code: '38', name: 'Isère', region: 'Auvergne-Rhône-Alpes' },
  { code: '42', name: 'Loire', region: 'Auvergne-Rhône-Alpes' },
  { code: '43', name: 'Haute-Loire', region: 'Auvergne-Rhône-Alpes' },
  { code: '63', name: 'Puy-de-Dôme', region: 'Auvergne-Rhône-Alpes' },
  { code: '69', name: 'Rhône', region: 'Auvergne-Rhône-Alpes' },
  { code: '73', name: 'Savoie', region: 'Auvergne-Rhône-Alpes' },
  { code: '74', name: 'Haute-Savoie', region: 'Auvergne-Rhône-Alpes' },

  // Bourgogne-Franche-Comté
  { code: '21', name: 'Côte-d\'Or', region: 'Bourgogne-Franche-Comté' },
  { code: '25', name: 'Doubs', region: 'Bourgogne-Franche-Comté' },
  { code: '39', name: 'Jura', region: 'Bourgogne-Franche-Comté' },
  { code: '58', name: 'Nièvre', region: 'Bourgogne-Franche-Comté' },
  { code: '70', name: 'Haute-Saône', region: 'Bourgogne-Franche-Comté' },
  { code: '71', name: 'Saône-et-Loire', region: 'Bourgogne-Franche-Comté' },
  { code: '89', name: 'Yonne', region: 'Bourgogne-Franche-Comté' },
  { code: '90', name: 'Territoire de Belfort', region: 'Bourgogne-Franche-Comté' },

  // Bretagne
  { code: '22', name: 'Côtes-d\'Armor', region: 'Bretagne' },
  { code: '29', name: 'Finistère', region: 'Bretagne' },
  { code: '35', name: 'Ille-et-Vilaine', region: 'Bretagne' },
  { code: '56', name: 'Morbihan', region: 'Bretagne' },

  // Centre-Val de Loire
  { code: '18', name: 'Cher', region: 'Centre-Val de Loire' },
  { code: '28', name: 'Eure-et-Loir', region: 'Centre-Val de Loire' },
  { code: '36', name: 'Indre', region: 'Centre-Val de Loire' },
  { code: '37', name: 'Indre-et-Loire', region: 'Centre-Val de Loire' },
  { code: '41', name: 'Loir-et-Cher', region: 'Centre-Val de Loire' },
  { code: '45', name: 'Loiret', region: 'Centre-Val de Loire' },

  // Corse
  { code: '2A', name: 'Corse-du-Sud', region: 'Corse' },
  { code: '2B', name: 'Haute-Corse', region: 'Corse' },

  // Grand Est
  { code: '08', name: 'Ardennes', region: 'Grand Est' },
  { code: '10', name: 'Aube', region: 'Grand Est' },
  { code: '51', name: 'Marne', region: 'Grand Est' },
  { code: '52', name: 'Haute-Marne', region: 'Grand Est' },
  { code: '54', name: 'Meurthe-et-Moselle', region: 'Grand Est' },
  { code: '55', name: 'Meuse', region: 'Grand Est' },
  { code: '57', name: 'Moselle', region: 'Grand Est' },
  { code: '67', name: 'Bas-Rhin', region: 'Grand Est' },
  { code: '68', name: 'Haut-Rhin', region: 'Grand Est' },
  { code: '88', name: 'Vosges', region: 'Grand Est' },

  // Hauts-de-France
  { code: '02', name: 'Aisne', region: 'Hauts-de-France' },
  { code: '59', name: 'Nord', region: 'Hauts-de-France' },
  { code: '60', name: 'Oise', region: 'Hauts-de-France' },
  { code: '62', name: 'Pas-de-Calais', region: 'Hauts-de-France' },
  { code: '80', name: 'Somme', region: 'Hauts-de-France' },

  // Île-de-France
  { code: '75', name: 'Paris', region: 'Île-de-France' },
  { code: '77', name: 'Seine-et-Marne', region: 'Île-de-France' },
  { code: '78', name: 'Yvelines', region: 'Île-de-France' },
  { code: '91', name: 'Essonne', region: 'Île-de-France' },
  { code: '92', name: 'Hauts-de-Seine', region: 'Île-de-France' },
  { code: '93', name: 'Seine-Saint-Denis', region: 'Île-de-France' },
  { code: '94', name: 'Val-de-Marne', region: 'Île-de-France' },
  { code: '95', name: 'Val-d\'Oise', region: 'Île-de-France' },

  // Normandie
  { code: '14', name: 'Calvados', region: 'Normandie' },
  { code: '27', name: 'Eure', region: 'Normandie' },
  { code: '50', name: 'Manche', region: 'Normandie' },
  { code: '61', name: 'Orne', region: 'Normandie' },
  { code: '76', name: 'Seine-Maritime', region: 'Normandie' },

  // Nouvelle-Aquitaine
  { code: '16', name: 'Charente', region: 'Nouvelle-Aquitaine' },
  { code: '17', name: 'Charente-Maritime', region: 'Nouvelle-Aquitaine' },
  { code: '19', name: 'Corrèze', region: 'Nouvelle-Aquitaine' },
  { code: '23', name: 'Creuse', region: 'Nouvelle-Aquitaine' },
  { code: '24', name: 'Dordogne', region: 'Nouvelle-Aquitaine' },
  { code: '33', name: 'Gironde', region: 'Nouvelle-Aquitaine' },
  { code: '40', name: 'Landes', region: 'Nouvelle-Aquitaine' },
  { code: '47', name: 'Lot-et-Garonne', region: 'Nouvelle-Aquitaine' },
  { code: '64', name: 'Pyrénées-Atlantiques', region: 'Nouvelle-Aquitaine' },
  { code: '79', name: 'Deux-Sèvres', region: 'Nouvelle-Aquitaine' },
  { code: '86', name: 'Vienne', region: 'Nouvelle-Aquitaine' },
  { code: '87', name: 'Haute-Vienne', region: 'Nouvelle-Aquitaine' },

  // Occitanie
  { code: '09', name: 'Ariège', region: 'Occitanie' },
  { code: '11', name: 'Aude', region: 'Occitanie' },
  { code: '12', name: 'Aveyron', region: 'Occitanie' },
  { code: '30', name: 'Gard', region: 'Occitanie' },
  { code: '31', name: 'Haute-Garonne', region: 'Occitanie' },
  { code: '32', name: 'Gers', region: 'Occitanie' },
  { code: '34', name: 'Hérault', region: 'Occitanie' },
  { code: '46', name: 'Lot', region: 'Occitanie' },
  { code: '48', name: 'Lozère', region: 'Occitanie' },
  { code: '65', name: 'Hautes-Pyrénées', region: 'Occitanie' },
  { code: '66', name: 'Pyrénées-Orientales', region: 'Occitanie' },
  { code: '81', name: 'Tarn', region: 'Occitanie' },
  { code: '82', name: 'Tarn-et-Garonne', region: 'Occitanie' },

  // Pays de la Loire
  { code: '44', name: 'Loire-Atlantique', region: 'Pays de la Loire' },
  { code: '49', name: 'Maine-et-Loire', region: 'Pays de la Loire' },
  { code: '53', name: 'Mayenne', region: 'Pays de la Loire' },
  { code: '72', name: 'Sarthe', region: 'Pays de la Loire' },
  { code: '85', name: 'Vendée', region: 'Pays de la Loire' },

  // Provence-Alpes-Côte d'Azur
  { code: '04', name: 'Alpes-de-Haute-Provence', region: "Provence-Alpes-Côte d'Azur" },
  { code: '05', name: 'Hautes-Alpes', region: "Provence-Alpes-Côte d'Azur" },
  { code: '06', name: 'Alpes-Maritimes', region: "Provence-Alpes-Côte d'Azur" },
  { code: '13', name: 'Bouches-du-Rhône', region: "Provence-Alpes-Côte d'Azur" },
  { code: '83', name: 'Var', region: "Provence-Alpes-Côte d'Azur" },
  { code: '84', name: 'Vaucluse', region: "Provence-Alpes-Côte d'Azur" },
];

export const DEPARTMENTS: DepartmentData[] = BASE.map((d) => {
  const p = PVGIS_PREFECTURES[d.code];
  if (!p) throw new Error(`PVGIS manquant pour le département ${d.code}`);
  return { ...d, irradiation: p.incline30.kWhParKwc, prefecture: p.prefecture };
});

/**
 * Retourne les données d'irradiation pour un code département
 */
export function getDepartmentData(code: string): DepartmentData | undefined {
  return DEPARTMENTS.find((d) => d.code === code);
}

/**
 * Liste les départements triés par ordre alphabétique (code)
 */
export function getAllDepartments(): DepartmentData[] {
  return [...DEPARTMENTS].sort((a, b) => a.code.localeCompare(b.code));
}

// Article grammatical de chaque département (« dans la Loire », « dans l'Ain », « dans les Landes », « à Paris »).
const FEMININ = new Set([
  'Drôme', 'Loire', 'Haute-Loire', 'Savoie', 'Haute-Savoie', "Côte-d'Or", 'Nièvre', 'Haute-Saône',
  'Saône-et-Loire', 'Corse-du-Sud', 'Haute-Corse', 'Marne', 'Haute-Marne', 'Meurthe-et-Moselle', 'Meuse',
  'Moselle', 'Somme', 'Seine-et-Marne', 'Seine-Saint-Denis', 'Manche', 'Seine-Maritime', 'Charente',
  'Charente-Maritime', 'Corrèze', 'Creuse', 'Dordogne', 'Gironde', 'Vienne', 'Haute-Vienne',
  'Haute-Garonne', 'Lozère', 'Loire-Atlantique', 'Mayenne', 'Sarthe', 'Vendée',
]);
const PLURIEL = new Set([
  "Côtes-d'Armor", 'Ardennes', 'Vosges', 'Yvelines', 'Hauts-de-Seine', 'Landes', 'Pyrénées-Atlantiques',
  'Deux-Sèvres', 'Hautes-Pyrénées', 'Pyrénées-Orientales', 'Alpes-de-Haute-Provence', 'Hautes-Alpes',
  'Alpes-Maritimes', 'Bouches-du-Rhône',
]);

export interface DepartmentArticles {
  /** « le Rhône », « la Loire », « l'Ain », « les Landes », « Paris » */
  le: string;
  /** « dans le Rhône », « dans l'Ain », « à Paris » */
  dans: string;
  /** « du Rhône », « de la Loire », « de l'Ain », « des Landes », « de Paris » */
  du: string;
}

export function deptArticles(name: string): DepartmentArticles {
  if (name === 'Paris') return { le: 'Paris', dans: 'à Paris', du: 'de Paris' };
  if (PLURIEL.has(name)) return { le: `les ${name}`, dans: `dans les ${name}`, du: `des ${name}` };
  if (/^[AEIOUYÉÈH]/i.test(name) && !name.startsWith('Haut')) {
    return { le: `l'${name}`, dans: `dans l'${name}`, du: `de l'${name}` };
  }
  if (FEMININ.has(name)) return { le: `la ${name}`, dans: `dans la ${name}`, du: `de la ${name}` };
  return { le: `le ${name}`, dans: `dans le ${name}`, du: `du ${name}` };
}
