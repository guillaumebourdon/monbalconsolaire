export interface DepartmentData {
  code: string;
  name: string;
  region: string;
  irradiation: number; // kWh/kWc/year from PVGIS (moyenne département)
}

/**
 * Données d'irradiation par département français (96 départements métropole + Corse)
 * Source : PVGIS (Photovoltaic Geographical Information System, European Commission)
 * Valeurs moyennes pour une installation orientée sud, inclinée 30°
 */
export const DEPARTMENTS: DepartmentData[] = [
  // Auvergne-Rhône-Alpes
  { code: '01', name: 'Ain', region: 'Auvergne-Rhône-Alpes', irradiation: 1250 },
  { code: '03', name: 'Allier', region: 'Auvergne-Rhône-Alpes', irradiation: 1230 },
  { code: '07', name: 'Ardèche', region: 'Auvergne-Rhône-Alpes', irradiation: 1380 },
  { code: '15', name: 'Cantal', region: 'Auvergne-Rhône-Alpes', irradiation: 1260 },
  { code: '26', name: 'Drôme', region: 'Auvergne-Rhône-Alpes', irradiation: 1380 },
  { code: '38', name: 'Isère', region: 'Auvergne-Rhône-Alpes', irradiation: 1280 },
  { code: '42', name: 'Loire', region: 'Auvergne-Rhône-Alpes', irradiation: 1270 },
  { code: '43', name: 'Haute-Loire', region: 'Auvergne-Rhône-Alpes', irradiation: 1290 },
  { code: '63', name: 'Puy-de-Dôme', region: 'Auvergne-Rhône-Alpes', irradiation: 1250 },
  { code: '69', name: 'Rhône', region: 'Auvergne-Rhône-Alpes', irradiation: 1300 },
  { code: '73', name: 'Savoie', region: 'Auvergne-Rhône-Alpes', irradiation: 1240 },
  { code: '74', name: 'Haute-Savoie', region: 'Auvergne-Rhône-Alpes', irradiation: 1250 },

  // Bourgogne-Franche-Comté
  { code: '21', name: 'Côte-d\'Or', region: 'Bourgogne-Franche-Comté', irradiation: 1200 },
  { code: '25', name: 'Doubs', region: 'Bourgogne-Franche-Comté', irradiation: 1170 },
  { code: '39', name: 'Jura', region: 'Bourgogne-Franche-Comté', irradiation: 1200 },
  { code: '58', name: 'Nièvre', region: 'Bourgogne-Franche-Comté', irradiation: 1200 },
  { code: '70', name: 'Haute-Saône', region: 'Bourgogne-Franche-Comté', irradiation: 1180 },
  { code: '71', name: 'Saône-et-Loire', region: 'Bourgogne-Franche-Comté', irradiation: 1210 },
  { code: '89', name: 'Yonne', region: 'Bourgogne-Franche-Comté', irradiation: 1180 },
  { code: '90', name: 'Territoire de Belfort', region: 'Bourgogne-Franche-Comté', irradiation: 1160 },

  // Bretagne
  { code: '22', name: 'Côtes-d\'Armor', region: 'Bretagne', irradiation: 1130 },
  { code: '29', name: 'Finistère', region: 'Bretagne', irradiation: 1100 },
  { code: '35', name: 'Ille-et-Vilaine', region: 'Bretagne', irradiation: 1150 },
  { code: '56', name: 'Morbihan', region: 'Bretagne', irradiation: 1170 },

  // Centre-Val de Loire
  { code: '18', name: 'Cher', region: 'Centre-Val de Loire', irradiation: 1200 },
  { code: '28', name: 'Eure-et-Loir', region: 'Centre-Val de Loire', irradiation: 1160 },
  { code: '36', name: 'Indre', region: 'Centre-Val de Loire', irradiation: 1210 },
  { code: '37', name: 'Indre-et-Loire', region: 'Centre-Val de Loire', irradiation: 1200 },
  { code: '41', name: 'Loir-et-Cher', region: 'Centre-Val de Loire', irradiation: 1190 },
  { code: '45', name: 'Loiret', region: 'Centre-Val de Loire', irradiation: 1180 },

  // Corse
  { code: '2A', name: 'Corse-du-Sud', region: 'Corse', irradiation: 1580 },
  { code: '2B', name: 'Haute-Corse', region: 'Corse', irradiation: 1500 },

  // Grand Est
  { code: '08', name: 'Ardennes', region: 'Grand Est', irradiation: 1080 },
  { code: '10', name: 'Aube', region: 'Grand Est', irradiation: 1150 },
  { code: '51', name: 'Marne', region: 'Grand Est', irradiation: 1110 },
  { code: '52', name: 'Haute-Marne', region: 'Grand Est', irradiation: 1130 },
  { code: '54', name: 'Meurthe-et-Moselle', region: 'Grand Est', irradiation: 1100 },
  { code: '55', name: 'Meuse', region: 'Grand Est', irradiation: 1090 },
  { code: '57', name: 'Moselle', region: 'Grand Est', irradiation: 1100 },
  { code: '67', name: 'Bas-Rhin', region: 'Grand Est', irradiation: 1130 },
  { code: '68', name: 'Haut-Rhin', region: 'Grand Est', irradiation: 1160 },
  { code: '88', name: 'Vosges', region: 'Grand Est', irradiation: 1110 },

  // Hauts-de-France
  { code: '02', name: 'Aisne', region: 'Hauts-de-France', irradiation: 1060 },
  { code: '59', name: 'Nord', region: 'Hauts-de-France', irradiation: 1020 },
  { code: '60', name: 'Oise', region: 'Hauts-de-France', irradiation: 1080 },
  { code: '62', name: 'Pas-de-Calais', region: 'Hauts-de-France', irradiation: 1030 },
  { code: '80', name: 'Somme', region: 'Hauts-de-France', irradiation: 1050 },

  // Île-de-France
  { code: '75', name: 'Paris', region: 'Île-de-France', irradiation: 1120 },
  { code: '77', name: 'Seine-et-Marne', region: 'Île-de-France', irradiation: 1130 },
  { code: '78', name: 'Yvelines', region: 'Île-de-France', irradiation: 1120 },
  { code: '91', name: 'Essonne', region: 'Île-de-France', irradiation: 1130 },
  { code: '92', name: 'Hauts-de-Seine', region: 'Île-de-France', irradiation: 1120 },
  { code: '93', name: 'Seine-Saint-Denis', region: 'Île-de-France', irradiation: 1120 },
  { code: '94', name: 'Val-de-Marne', region: 'Île-de-France', irradiation: 1120 },
  { code: '95', name: 'Val-d\'Oise', region: 'Île-de-France', irradiation: 1120 },

  // Normandie
  { code: '14', name: 'Calvados', region: 'Normandie', irradiation: 1100 },
  { code: '27', name: 'Eure', region: 'Normandie', irradiation: 1090 },
  { code: '50', name: 'Manche', region: 'Normandie', irradiation: 1110 },
  { code: '61', name: 'Orne', region: 'Normandie', irradiation: 1100 },
  { code: '76', name: 'Seine-Maritime', region: 'Normandie', irradiation: 1080 },

  // Nouvelle-Aquitaine
  { code: '16', name: 'Charente', region: 'Nouvelle-Aquitaine', irradiation: 1270 },
  { code: '17', name: 'Charente-Maritime', region: 'Nouvelle-Aquitaine', irradiation: 1300 },
  { code: '19', name: 'Corrèze', region: 'Nouvelle-Aquitaine', irradiation: 1220 },
  { code: '23', name: 'Creuse', region: 'Nouvelle-Aquitaine', irradiation: 1200 },
  { code: '24', name: 'Dordogne', region: 'Nouvelle-Aquitaine', irradiation: 1280 },
  { code: '33', name: 'Gironde', region: 'Nouvelle-Aquitaine', irradiation: 1280 },
  { code: '40', name: 'Landes', region: 'Nouvelle-Aquitaine', irradiation: 1290 },
  { code: '47', name: 'Lot-et-Garonne', region: 'Nouvelle-Aquitaine', irradiation: 1310 },
  { code: '64', name: 'Pyrénées-Atlantiques', region: 'Nouvelle-Aquitaine', irradiation: 1250 },
  { code: '79', name: 'Deux-Sèvres', region: 'Nouvelle-Aquitaine', irradiation: 1230 },
  { code: '86', name: 'Vienne', region: 'Nouvelle-Aquitaine', irradiation: 1200 },
  { code: '87', name: 'Haute-Vienne', region: 'Nouvelle-Aquitaine', irradiation: 1180 },

  // Occitanie
  { code: '09', name: 'Ariège', region: 'Occitanie', irradiation: 1380 },
  { code: '11', name: 'Aude', region: 'Occitanie', irradiation: 1450 },
  { code: '12', name: 'Aveyron', region: 'Occitanie', irradiation: 1330 },
  { code: '30', name: 'Gard', region: 'Occitanie', irradiation: 1430 },
  { code: '31', name: 'Haute-Garonne', region: 'Occitanie', irradiation: 1350 },
  { code: '32', name: 'Gers', region: 'Occitanie', irradiation: 1330 },
  { code: '34', name: 'Hérault', region: 'Occitanie', irradiation: 1450 },
  { code: '46', name: 'Lot', region: 'Occitanie', irradiation: 1290 },
  { code: '48', name: 'Lozère', region: 'Occitanie', irradiation: 1350 },
  { code: '65', name: 'Hautes-Pyrénées', region: 'Occitanie', irradiation: 1300 },
  { code: '66', name: 'Pyrénées-Orientales', region: 'Occitanie', irradiation: 1470 },
  { code: '81', name: 'Tarn', region: 'Occitanie', irradiation: 1360 },
  { code: '82', name: 'Tarn-et-Garonne', region: 'Occitanie', irradiation: 1340 },

  // Pays de la Loire
  { code: '44', name: 'Loire-Atlantique', region: 'Pays de la Loire', irradiation: 1220 },
  { code: '49', name: 'Maine-et-Loire', region: 'Pays de la Loire', irradiation: 1210 },
  { code: '53', name: 'Mayenne', region: 'Pays de la Loire', irradiation: 1180 },
  { code: '72', name: 'Sarthe', region: 'Pays de la Loire', irradiation: 1180 },
  { code: '85', name: 'Vendée', region: 'Pays de la Loire', irradiation: 1240 },

  // Provence-Alpes-Côte d'Azur
  { code: '04', name: 'Alpes-de-Haute-Provence', region: 'PACA', irradiation: 1500 },
  { code: '05', name: 'Hautes-Alpes', region: 'PACA', irradiation: 1450 },
  { code: '06', name: 'Alpes-Maritimes', region: 'PACA', irradiation: 1480 },
  { code: '13', name: 'Bouches-du-Rhône', region: 'PACA', irradiation: 1500 },
  { code: '83', name: 'Var', region: 'PACA', irradiation: 1500 },
  { code: '84', name: 'Vaucluse', region: 'PACA', irradiation: 1450 },
];

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
