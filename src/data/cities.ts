export interface CityData {
  name: string;
  department: string;
  region: string;
  irradiation: number; // kWh/kWc/year from PVGIS
}

export const CITIES: CityData[] = [
  // PACA
  { name: 'Marseille', department: '13', region: 'PACA', irradiation: 1500 },
  { name: 'Nice', department: '06', region: 'PACA', irradiation: 1480 },
  { name: 'Toulon', department: '83', region: 'PACA', irradiation: 1500 },
  { name: 'Avignon', department: '84', region: 'PACA', irradiation: 1450 },
  { name: 'Aix-en-Provence', department: '13', region: 'PACA', irradiation: 1490 },
  { name: 'Cannes', department: '06', region: 'PACA', irradiation: 1470 },
  { name: 'Antibes', department: '06', region: 'PACA', irradiation: 1470 },
  // Occitanie
  { name: 'Montpellier', department: '34', region: 'Occitanie', irradiation: 1450 },
  { name: 'Toulouse', department: '31', region: 'Occitanie', irradiation: 1350 },
  { name: 'Nimes', department: '30', region: 'Occitanie', irradiation: 1430 },
  { name: 'Perpignan', department: '66', region: 'Occitanie', irradiation: 1470 },
  { name: 'Beziers', department: '34', region: 'Occitanie', irradiation: 1440 },
  // Auvergne-Rhone-Alpes
  { name: 'Lyon', department: '69', region: 'Auvergne-Rhone-Alpes', irradiation: 1300 },
  { name: 'Grenoble', department: '38', region: 'Auvergne-Rhone-Alpes', irradiation: 1280 },
  { name: 'Saint-Etienne', department: '42', region: 'Auvergne-Rhone-Alpes', irradiation: 1270 },
  { name: 'Clermont-Ferrand', department: '63', region: 'Auvergne-Rhone-Alpes', irradiation: 1250 },
  { name: 'Annecy', department: '74', region: 'Auvergne-Rhone-Alpes', irradiation: 1250 },
  { name: 'Valence', department: '26', region: 'Auvergne-Rhone-Alpes', irradiation: 1350 },
  // Nouvelle-Aquitaine
  { name: 'Bordeaux', department: '33', region: 'Nouvelle-Aquitaine', irradiation: 1280 },
  { name: 'La Rochelle', department: '17', region: 'Nouvelle-Aquitaine', irradiation: 1300 },
  { name: 'Pau', department: '64', region: 'Nouvelle-Aquitaine', irradiation: 1250 },
  { name: 'Limoges', department: '87', region: 'Nouvelle-Aquitaine', irradiation: 1180 },
  { name: 'Poitiers', department: '86', region: 'Nouvelle-Aquitaine', irradiation: 1200 },
  { name: 'Biarritz', department: '64', region: 'Nouvelle-Aquitaine', irradiation: 1260 },
  // Pays de la Loire
  { name: 'Nantes', department: '44', region: 'Pays de la Loire', irradiation: 1220 },
  { name: 'Angers', department: '49', region: 'Pays de la Loire', irradiation: 1210 },
  { name: 'Le Mans', department: '72', region: 'Pays de la Loire', irradiation: 1180 },
  // Bretagne
  { name: 'Rennes', department: '35', region: 'Bretagne', irradiation: 1150 },
  { name: 'Brest', department: '29', region: 'Bretagne', irradiation: 1100 },
  { name: 'Lorient', department: '56', region: 'Bretagne', irradiation: 1170 },
  { name: 'Saint-Brieuc', department: '22', region: 'Bretagne', irradiation: 1130 },
  // Ile-de-France
  { name: 'Paris', department: '75', region: 'Ile-de-France', irradiation: 1120 },
  { name: 'Versailles', department: '78', region: 'Ile-de-France', irradiation: 1120 },
  { name: 'Boulogne-Billancourt', department: '92', region: 'Ile-de-France', irradiation: 1120 },
  { name: 'Saint-Denis', department: '93', region: 'Ile-de-France', irradiation: 1120 },
  { name: 'Creteil', department: '94', region: 'Ile-de-France', irradiation: 1120 },
  { name: 'Montreuil', department: '93', region: 'Ile-de-France', irradiation: 1120 },
  // Grand Est
  { name: 'Strasbourg', department: '67', region: 'Grand Est', irradiation: 1130 },
  { name: 'Metz', department: '57', region: 'Grand Est', irradiation: 1100 },
  { name: 'Nancy', department: '54', region: 'Grand Est', irradiation: 1100 },
  { name: 'Reims', department: '51', region: 'Grand Est', irradiation: 1110 },
  { name: 'Mulhouse', department: '68', region: 'Grand Est', irradiation: 1150 },
  { name: 'Colmar', department: '68', region: 'Grand Est', irradiation: 1160 },
  // Hauts-de-France
  { name: 'Lille', department: '59', region: 'Hauts-de-France', irradiation: 1020 },
  { name: 'Amiens', department: '80', region: 'Hauts-de-France', irradiation: 1050 },
  { name: 'Dunkerque', department: '59', region: 'Hauts-de-France', irradiation: 1020 },
  { name: 'Calais', department: '62', region: 'Hauts-de-France', irradiation: 1030 },
  // Normandie
  { name: 'Rouen', department: '76', region: 'Normandie', irradiation: 1080 },
  { name: 'Caen', department: '14', region: 'Normandie', irradiation: 1100 },
  { name: 'Le Havre', department: '76', region: 'Normandie', irradiation: 1090 },
  // Centre-Val de Loire
  { name: 'Tours', department: '37', region: 'Centre-Val de Loire', irradiation: 1200 },
  { name: 'Orleans', department: '45', region: 'Centre-Val de Loire', irradiation: 1180 },
  // Bourgogne-Franche-Comte
  { name: 'Dijon', department: '21', region: 'Bourgogne-Franche-Comte', irradiation: 1200 },
  { name: 'Besancon', department: '25', region: 'Bourgogne-Franche-Comte', irradiation: 1170 },
  // Corse
  { name: 'Ajaccio', department: '2A', region: 'Corse', irradiation: 1580 },
  { name: 'Bastia', department: '2B', region: 'Corse', irradiation: 1500 },
];
