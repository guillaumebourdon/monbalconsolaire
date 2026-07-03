/**
 * Index de recherche client-side.
 * Chaque entrée contient titre, description, tags et URL.
 * La recherche est fuzzy : normalise les accents, cherche dans tous les champs.
 */

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  badge: string;
}

export const SEARCH_INDEX: SearchResult[] = [
  // ─── Pages principales ───
  { title: 'Calculateur de rentabilit\u00e9 solaire', description: 'Calculez vos \u00e9conomies en 30 secondes selon votre d\u00e9partement et orientation', url: '/calculateur', category: 'Outil', badge: 'Calculateur' },
  { title: 'Codes promo solaire balcon 2026', description: 'Tous les bons plans et codes promo actifs pour les kits solaires', url: '/codes-promo', category: 'Bons plans', badge: 'Promos' },
  { title: 'M\u00e9thodologie de calcul ROI', description: 'Nos sources, hypoth\u00e8ses et formules de calcul. Tout est public.', url: '/methodologie', category: 'Transparence', badge: 'M\u00e9thodo' },
  { title: 'Solaire par d\u00e9partement', description: 'Production et rentabilit\u00e9 pour chacun des 96 d\u00e9partements fran\u00e7ais', url: '/solaire-balcon', category: 'Outil', badge: 'D\u00e9partements' },

  // ─── Avis produits ───
  { title: 'Sunology PLAY 2 : avis et test complet', description: 'Le kit le plus vendu en France. 450 Wc, 599 \u20ac, installation en 1 minute.', url: '/avis/sunology-play-2', category: 'Avis', badge: '8.5/10' },
  { title: 'Beem On 460W : avis et test complet', description: 'Le concurrent direct du PLAY 2. 460 Wc, 599 \u20ac, paiement en 10x.', url: '/avis/beem-on-460w', category: 'Avis', badge: '8/10' },
  { title: 'Beem Kit 300W : avis petit budget', description: 'Le kit le moins cher du march\u00e9. 299 \u20ac, 4 panneaux modulaires.', url: '/avis/beem-kit-300w', category: 'Avis', badge: '7.5/10' },
  { title: 'Sunethic F500 : avis Made in France', description: 'Le kit le plus puissant (500 Wc), fabriqu\u00e9 en France. 690 \u20ac.', url: '/avis/sunethic-f500', category: 'Avis', badge: '7.5/10' },
  { title: 'Sunology CITY : avis balcons \u00e9troits', description: 'Le kit pour balcons \u00e9troits, fixation garde-corps sans per\u00e7age. 549 \u20ac.', url: '/avis/sunology-city', category: 'Avis', badge: '7.5/10' },
  { title: 'Sunology PLAY MAX : kit + batterie', description: 'Le bundle PLAY 2 + batterie VAULT 700 Wh. 1 179 \u20ac.', url: '/avis/sunology-play-max', category: 'Avis', badge: '7/10' },
  { title: 'EcoFlow PowerStream : syst\u00e8me modulaire', description: 'Micro-onduleur intelligent avec batterie portable et app avanc\u00e9e.', url: '/avis/ecoflow-powerstream', category: 'Avis', badge: '8/10' },
  { title: 'Zendure SolarFlow : 840W pour 488 \u20ac', description: 'Batterie 1,92 kWh + onduleur 800 W int\u00e9gr\u00e9s. Meilleur rapport qualit\u00e9-prix.', url: '/avis/zendure-solarflow', category: 'Avis', badge: '8.5/10' },
  { title: 'IKEA Solstr\u00e5le : le kit solaire IKEA pour balcon', description: 'Kit plug-and-play IKEA \u00e0 449 \u20ac avec EcoFlow. Analyse, specs, comparaison. Pas encore disponible en France.', url: '/avis/ikea-solstrale-balcon', category: 'Avis', badge: 'Analyse' },
  { title: 'DualSun PREASY : le challenger Made in France', description: 'Panneau pliable 420 Wc, design aspect bois. Beau mais cher.', url: '/avis/dualsun-preasy', category: 'Avis', badge: '6.5/10' },
  { title: 'Beem On 500 Wc : le rapport qualité-prix du marché', description: '429€ pour 500 Wc bifacial TOPCon, soit 0,86€/Wc. Le kit le plus rentable en 2026.', url: '/avis/beem-on-500w', category: 'Avis', badge: '8.5/10' },
  { title: 'Bluetti Balco 260 : tout-en-un onduleur + batterie', description: 'Onduleur SiC + batterie LFP 2,56 kWh + 4 MPPT. 849€ sans panneaux. IP65, extensible à 15 kWh.', url: '/avis/bluetti-balco-260', category: 'Avis', badge: '7/10' },
  { title: 'Jackery SolarVault 3 Pro : stockage 2,5 kWh LFP', description: 'Batterie LFP 2,52 kWh + 4 MPPT pour 4 000 W. 839€ en promo Prime Day. Garantie 10 ans. Kit complet à 1 139€.', url: '/avis/jackery-solarvault-3-pro', category: 'Avis', badge: '8/10' },
  { title: 'Zendure SolarFlow Mix : le tout-en-un résidentiel', description: '3 modèles, 8-50 kWh LFP, 4 kW bidirectionnel, IA Zenki. À partir de 1 999€. Le stockage résidentiel complet.', url: '/avis/zendure-solarflow-mix', category: 'Avis', badge: '8/10' },

  // ─── Comparatifs ───
  { title: 'Meilleur kit solaire 2026 : comparatif complet', description: 'Sunology, Beem, Sunethic compar\u00e9s. Tableau, points forts/faibles, verdict.', url: '/comparatif/meilleur-kit-solaire-2026', category: 'Comparatif', badge: 'Article phare' },
  { title: 'Sunology vs Beem : quel kit choisir ?', description: 'Les deux leaders fran\u00e7ais compar\u00e9s point par point.', url: '/comparatif/sunology-vs-beem', category: 'Comparatif', badge: 'Match' },
  { title: 'Kit solaire petit budget : moins de 400 \u20ac', description: 'Les meilleures options pour d\u00e9buter sans se ruiner.', url: '/comparatif/kit-solaire-petit-budget', category: 'Comparatif', badge: 'Budget' },
  { title: 'Kit solaire avec batterie 2026', description: 'Sunology PLAY MAX, Zendure, EcoFlow : faut-il du stockage ?', url: '/comparatif/kit-solaire-batterie-2026', category: 'Comparatif', badge: 'Stockage' },
  { title: '300W vs 400W vs 500W : quelle puissance ?', description: 'Comparatif des 3 puissances les plus vendues.', url: '/comparatif/300w-vs-400w-vs-500w-puissance', category: 'Comparatif', badge: 'Puissance' },
  { title: 'Zendure vs Sunology vs Beem : le match 2026', description: 'Stockage vs simplicit\u00e9 vs flexibilit\u00e9 : comparatif complet.', url: '/comparatif/zendure-vs-sunology-vs-beem', category: 'Comparatif', badge: 'Match 2026' },
  { title: 'Meilleur kit solaire terrasse 2026', description: 'Pose au sol, multi-panneaux, 3 setups par budget.', url: '/comparatif/meilleur-kit-solaire-terrasse-2026', category: 'Comparatif', badge: 'Terrasse' },

  // ─── Guides ───
  { title: 'Batterie solaire balcon : choisir la bonne capacité', description: 'Seuils 700 Wh, 2 kWh, 5 kWh, rentabilité réelle et comparatif Bluetti Balco, Zendure, EcoFlow. Guide complet 2026.', url: '/guide/batterie-solaire-balcon-guide', category: 'Guide', badge: 'Nouveau' },
  { title: 'Guide complet solaire balcon pour d\u00e9butants', description: 'Tout savoir avant de se lancer : principes, co\u00fbts, production.', url: '/guide/panneau-solaire-balcon-debutant', category: 'Guide', badge: 'D\u00e9butant' },
  { title: 'Panneau solaire balcon locataire', description: 'Vos droits en tant que locataire, r\u00e9glementation, kits adapt\u00e9s.', url: '/guide/panneau-solaire-balcon-locataire', category: 'Guide', badge: 'Locataire' },
  { title: 'Comment installer un kit solaire : pas \u00e0 pas', description: 'Guide d\u2019installation d\u00e9taill\u00e9 avec les outils n\u00e9cessaires.', url: '/guide/installer-kit-solaire-balcon', category: 'Guide', badge: 'Installation' },
  { title: 'Quelle orientation pour un panneau solaire ?', description: 'Sud, sud-est, ouest, nord : l\u2019impact r\u00e9el sur la production.', url: '/guide/orientation-panneau-solaire-balcon', category: 'Guide', badge: 'Orientation' },
  { title: 'R\u00e9glementation panneau solaire balcon 2026', description: 'NF C 15-100, CACSI Enedis, copropri\u00e9t\u00e9, limite 900W.', url: '/guide/reglementation-panneau-solaire-balcon-2026', category: 'Guide', badge: 'R\u00e9glementation' },
  { title: 'Panneau solaire en copropri\u00e9t\u00e9', description: 'R\u00e8gles, votes AG, mod\u00e8le de courrier syndic.', url: '/guide/panneau-solaire-copropriete', category: 'Guide', badge: 'Copropri\u00e9t\u00e9' },
  { title: 'Panneau solaire balcon : que couvre votre assurance ?', description: 'Gr\u00eale, vol, chute, responsabilit\u00e9 civile. D\u00e9claration, couverture, locataire vs propri\u00e9taire.', url: '/guide/panneau-solaire-assurance-balcon', category: 'Guide', badge: 'Assurance' },
  { title: 'Optimiser son autoconsommation solaire au quotidien', description: '8 astuces pour passer de 40 % \u00e0 85 % : d\u00e9calage appareils, ballon eau chaude, prise connect\u00e9e.', url: '/guide/optimiser-autoconsommation-solaire', category: 'Guide', badge: 'Optimisation' },
  { title: 'D\u00e9claration CACSI Enedis : guide pas \u00e0 pas', description: 'Proc\u00e9dure compl\u00e8te avec mod\u00e8les de lettres pr\u00eats \u00e0 copier.', url: '/guide/declaration-cacsi-enedis-panneau-solaire', category: 'Guide', badge: 'CACSI' },

  // ─── Blog ───
  { title: 'Combien rapporte un panneau solaire de balcon ?', description: 'Chiffres r\u00e9els de production et \u00e9conomies pour 7 villes.', url: '/blog/combien-rapporte-panneau-solaire-balcon', category: 'Blog', badge: 'Rentabilit\u00e9' },
  { title: 'Prix de l\u2019\u00e9lectricit\u00e9 2026 : le solaire incontournable', description: '\u00c9volution du tarif EDF, projections 2030.', url: '/blog/prix-electricite-2026-solaire', category: 'Blog', badge: 'Prix EDF' },
  { title: 'Panneau solaire en hiver : production r\u00e9elle', description: 'Donn\u00e9es de production mois par mois pour 3 villes.', url: '/blog/panneau-solaire-hiver-production', category: 'Blog', badge: 'Hiver' },
  { title: 'Autoconsommation solaire : comment \u00e7a marche', description: 'Talon de consommation, surplus, compteur Linky.', url: '/blog/autoconsommation-solaire-comment-ca-marche', category: 'Blog', badge: 'Comprendre' },
  { title: '8 accessoires indispensables kit solaire', description: 'Prise connect\u00e9e, rallonge, parafoudre, support.', url: '/blog/accessoires-kit-solaire-balcon', category: 'Blog', badge: 'Accessoires' },
  { title: 'Kit solaire plug-and-play : arnaque ou investissement ?', description: 'Analyse honn\u00eate du march\u00e9 2026 : arnaques, id\u00e9es re\u00e7ues, ROI r\u00e9el.', url: '/blog/kit-solaire-plug-and-play-arnaque', category: 'Blog', badge: 'Analyse' },
  { title: 'Mini kits solaires Amazon < 300 \u20ac', description: 'Pi\u00e8ges \u00e0 \u00e9viter et 5 mod\u00e8les qui valent le coup.', url: '/blog/mini-kits-solaires-amazon', category: 'Blog', badge: 'Amazon' },
  { title: 'Panneau solaire balcon nord : rentable ?', description: 'Analyse honn\u00eate avec chiffres par ville.', url: '/blog/panneau-solaire-balcon-nord', category: 'Blog', badge: 'Nord' },
  { title: 'Panneau solaire et ombre : optimiser la production', description: 'Ombre partielle, arbre, mur voisin : quel impact.', url: '/blog/panneau-solaire-ombre-optimiser-production', category: 'Blog', badge: 'Ombre' },
  { title: 'Talon de consommation : calculer et effacer', description: 'Le bruit de fond \u00e9lectrique co\u00fbte 300-900 \u20ac/an.', url: '/blog/talon-consommation-solaire', category: 'Blog', badge: 'Talon' },
  { title: 'Mon panneau produit moins que pr\u00e9vu : que faire ?', description: 'Diagnostic en 7 points et solutions concr\u00e8tes.', url: '/blog/panneau-solaire-produit-moins-que-prevu', category: 'Blog', badge: 'Diagnostic' },
  { title: 'Kit solaire : que faire quand il pleut ou gr\u00eale ?', description: 'Production sous la pluie, r\u00e9sistance gr\u00eale, assurance.', url: '/blog/kit-solaire-pluie-grele', category: 'Blog', badge: 'M\u00e9t\u00e9o' },
  { title: 'Meilleures prises connect\u00e9es suivi solaire 2026', description: 'Tapo P110, Shelly, Meross : comparatif pour mesurer la production.', url: '/blog/prises-connectees-suivi-solaire', category: 'Blog', badge: 'Accessoires' },
  { title: 'Bilan 6 mois avec un kit solaire de balcon', description: 'Production r\u00e9elle mois par mois, \u00e9conomies constat\u00e9es, probl\u00e8mes rencontr\u00e9s. Retour honn\u00eate.', url: '/blog/bilan-6-mois-kit-solaire', category: 'Blog', badge: 'V\u00e9cu' },
  { title: 'Panneau solaire balcon est/ouest : production', description: '80 % du potentiel sud, ROI 8-10 ans, avantage autoconsommation.', url: '/blog/panneau-solaire-est-ouest', category: 'Blog', badge: 'Orientation' },
  { title: 'Batteries portables solaires : comparatif 2026', description: 'EcoFlow, Bluetti, Jackery : 6 mod\u00e8les compar\u00e9s.', url: '/blog/batteries-portables-solaires-comparatif', category: 'Blog', badge: 'Batteries' },
  { title: 'Lampes solaires balcon : 10 mod\u00e8les 2026', description: 'Guirlandes, appliques, projecteurs, lanternes.', url: '/blog/lampes-solaires-balcon-2026', category: 'Blog', badge: '\u00c9clairage' },
  { title: 'Entretien et nettoyage panneau solaire balcon', description: 'Fréquence, produits, erreurs à éviter, checklist saisonnière.', url: '/blog/entretien-nettoyage-panneau-solaire-balcon', category: 'Blog', badge: 'Entretien' },
  { title: 'Micro-onduleur solaire : fonctionnement et choix', description: 'Comparatif Hoymiles, APsystems, Enphase, TSUN. Quel onduleur dans chaque kit.', url: '/blog/micro-onduleur-solaire-fonctionnement', category: 'Blog', badge: 'Technique' },
  { title: 'Combien de panneaux solaires sur un balcon ?', description: 'Limite 800 Wc, nombre de panneaux selon la puissance, s\u00e9rie ou parall\u00e8le : r\u00e8gles et limites en France.', url: '/blog/combien-panneaux-solaires-balcon', category: 'Blog', badge: 'R\u00e9glementation' },
  { title: 'Kit solaire balcon : avis et retours 2026', description: 'Synth\u00e8se des avis Trustpilot, forums et retours r\u00e9els sur Sunology, Beem, Zendure, EcoFlow.', url: '/blog/kit-solaire-balcon-avis-2026', category: 'Blog', badge: 'Avis' },
];

function normalize(str: string): string {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ');
}

export function search(query: string): SearchResult[] {
  if (!query || query.length < 2) return [];

  const terms = normalize(query).split(/\s+/).filter(t => t.length >= 2);
  if (terms.length === 0) return [];

  return SEARCH_INDEX
    .map(item => {
      const haystack = normalize(`${item.title} ${item.description} ${item.category} ${item.badge}`);
      let score = 0;
      for (const term of terms) {
        if (haystack.includes(term)) score += 1;
        if (normalize(item.title).includes(term)) score += 2; // Title match = bonus
      }
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
