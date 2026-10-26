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
    valide: false,
  },
];

export function achatsGroupesDuDepartement(code: string, inclureNonValides = false): AchatGroupe[] {
  return ACHATS_GROUPES.filter(a => a.codeDepartement === code && (a.valide || inclureNonValides));
}
