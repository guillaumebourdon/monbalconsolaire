/**
 * Les 13 régions de France métropolitaine (codes INSEE), pour les pages
 * /solaire-balcon/region/<slug>.
 */
export type RegionInfo = {
  code: string;
  slug: string;
  nom: string;
  /** « en Bretagne », « dans les Hauts-de-France » */
  dans: string;
  /** « de Bretagne », « des Hauts-de-France » */
  de: string;
  /** Département du chef-lieu de région */
  chefLieuDept: string;
};

export const REGIONS: RegionInfo[] = [
  { code: '84', slug: 'auvergne-rhone-alpes', nom: 'Auvergne-Rhône-Alpes', dans: 'en Auvergne-Rhône-Alpes', de: "d'Auvergne-Rhône-Alpes", chefLieuDept: '69' },
  { code: '27', slug: 'bourgogne-franche-comte', nom: 'Bourgogne-Franche-Comté', dans: 'en Bourgogne-Franche-Comté', de: 'de Bourgogne-Franche-Comté', chefLieuDept: '21' },
  { code: '53', slug: 'bretagne', nom: 'Bretagne', dans: 'en Bretagne', de: 'de Bretagne', chefLieuDept: '35' },
  { code: '24', slug: 'centre-val-de-loire', nom: 'Centre-Val de Loire', dans: 'en Centre-Val de Loire', de: 'du Centre-Val de Loire', chefLieuDept: '45' },
  { code: '94', slug: 'corse', nom: 'Corse', dans: 'en Corse', de: 'de Corse', chefLieuDept: '2A' },
  { code: '44', slug: 'grand-est', nom: 'Grand Est', dans: 'dans le Grand Est', de: 'du Grand Est', chefLieuDept: '67' },
  { code: '32', slug: 'hauts-de-france', nom: 'Hauts-de-France', dans: 'dans les Hauts-de-France', de: 'des Hauts-de-France', chefLieuDept: '59' },
  { code: '11', slug: 'ile-de-france', nom: 'Île-de-France', dans: 'en Île-de-France', de: "d'Île-de-France", chefLieuDept: '75' },
  { code: '28', slug: 'normandie', nom: 'Normandie', dans: 'en Normandie', de: 'de Normandie', chefLieuDept: '76' },
  { code: '75', slug: 'nouvelle-aquitaine', nom: 'Nouvelle-Aquitaine', dans: 'en Nouvelle-Aquitaine', de: 'de Nouvelle-Aquitaine', chefLieuDept: '33' },
  { code: '76', slug: 'occitanie', nom: 'Occitanie', dans: 'en Occitanie', de: "d'Occitanie", chefLieuDept: '31' },
  { code: '52', slug: 'pays-de-la-loire', nom: 'Pays de la Loire', dans: 'dans les Pays de la Loire', de: 'des Pays de la Loire', chefLieuDept: '44' },
  { code: '93', slug: 'provence-alpes-cote-d-azur', nom: "Provence-Alpes-Côte d'Azur", dans: "en Provence-Alpes-Côte d'Azur", de: "de Provence-Alpes-Côte d'Azur", chefLieuDept: '13' },
];

/** Date de la dernière modification du contenu des pages régionales (sitemap). */
export const REGIONS_LASTMOD = '2026-11-12';

export const regionBySlug = (slug: string) => REGIONS.find((r) => r.slug === slug);
export const regionByNom = (nom: string) => REGIONS.find((r) => r.nom === nom);
export const regionHref = (nom: string) => {
  const r = regionByNom(nom);
  return r ? `/solaire-balcon/region/${r.slug}` : '/solaire-balcon';
};
