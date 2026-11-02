// Achats groupés de kits solaires présentés sur le site.
// Chaque entrée doit être relue et validée par l'organisateur avant mise en ligne
// (`valide: true`). Les pages départementales qui ont au moins un achat groupé
// validé sortent du noindex : c'est le contenu local qui leur manquait.

export type AchatGroupe = {
  slug: string;
  nom: string;
  codeDepartement: string;
  ville: string;
  zone: string;
  /** Production réelle constatée par l'organisateur (kWh par kWc et par an, nette des pertes). */
  productibleTerrain?: { cote: number; interieur: number };
  /** Recherche en cours d'un partenaire (salle, collectivité), si l'organisateur le souhaite. */
  rechercheSalle?: string;
  interesses?: string;
  kitsVendus: string;
  deroule: string[];
  contenuKit: string;
  prixConstates: { min: number; max: number };
  puissanceDernierKitWc: number;
  inscription: { label: string; href: string | null };
  valide: boolean;
};

export const ACHATS_GROUPES: AchatGroupe[] = [
  {
    slug: 'kerwatt',
    nom: 'Kerwatt',
    codeDepartement: '22',
    ville: 'Lannion',
    // Zone confirmée par Kerwatt le 26/10/2026
    zone: 'les Côtes-d’Armor et l’est du Finistère (secteur de Morlaix)',
    kitsVendus: 'près de 300',
    // Retours de terrain transmis par Jean Rouxel (Kerwatt) le 27/10/2026
    productibleTerrain: { cote: 1100, interieur: 1000 },
    // Accord de Kerwatt le 27/10/2026 pour ces deux mentions
    interesses: 'une dizaine',
    rechercheSalle: 'une collectivité ou une salle pouvant accueillir 35 personnes (les acquéreurs et les bénévoles de Kerwatt) pour l’atelier de livraison',
    deroule: [
      'Kerwatt s’associe à une collectivité locale, qui accueille l’opération.',
      'Un appel à candidatures est diffusé pour réunir les personnes intéressées.',
      'Un webinaire présente l’opération, le kit et les démarches aux candidats.',
      'Les inscriptions se font par lots de 30 kits ; la commande est passée quand le lot est complet.',
      'Le jour de la livraison, un atelier est organisé : chaque kit est testé avec les bénévoles de Kerwatt.',
    ],
    contenuKit: 'un panneau, un micro-onduleur, la connectique, 10 m de câble 1,5 mm² et une prise connectée',
    prixConstates: { min: 400, max: 490 },
    puissanceDernierKitWc: 500,
    // Contact confirmé par Kerwatt le 26/10/2026
    inscription: { label: 'kerwattkitlannion@proton.me', href: 'mailto:kerwattkitlannion@proton.me' },
    // Feu vert de Kerwatt (accord du CoGes) le 01/11/2026
    valide: true,
  },
];

export function achatsGroupesDuDepartement(code: string, inclureNonValides = false): AchatGroupe[] {
  return ACHATS_GROUPES.filter(a => a.codeDepartement === code && (a.valide || inclureNonValides));
}
