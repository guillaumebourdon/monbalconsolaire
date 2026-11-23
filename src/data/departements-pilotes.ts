/**
 * Départements « pilotes » rouverts à l'indexation le 12/11/2026 (diagnostic indexation du 12/11) :
 * en plus des données PVGIS, ODRÉ et INSEE communes à toutes les fiches, ils ont une information
 * locale réelle, vérifiée sur un site officiel le 12/11/2026 (sources revérifiées le 23/11/2026).
 * Ne rien ajouter ici sans source officielle.
 * `titreSeo` / `descriptionSeo` : title (≤ 60 car.) et meta description (≤ 155 car.) centrés sur l'info locale.
 * `apport` : une phrase sur ce que la fiche apporte de plus que la carte nationale.
 */
export type InfoLocale = {
  titre: string;
  titreSeo: string;
  descriptionSeo: string;
  paragraphes: string[];
  apport: string;
  sources: { label: string; url: string; vu: string }[];
};

export const DEPARTEMENTS_PILOTES: Record<string, InfoLocale> = {
  '31': {
    titre: 'La prime solaire de Toulouse Métropole exclut les kits',
    titreSeo: 'Kit solaire balcon Haute-Garonne : kits exclus de la prime',
    descriptionSeo: 'Haute-Garonne (31) : la prime solaire de Toulouse Métropole exclut les kits de balcon (page officielle). Production PVGIS à Toulouse et rentabilité.',
    apport: "Ce que cette fiche ajoute à notre carte nationale : le point sur la prime de Toulouse Métropole, qui ne s'applique pas aux kits, et la production mois par mois à Toulouse.",
    paragraphes: [
      "Toulouse Métropole verse une « prime solaire » de 25 % du montant hors taxe d'une installation photovoltaïque, plafonnée à 15 000 € par projet, pour une puissance de 1 à 300 kWc posée par un professionnel labellisé RGE QualiPV.",
      "Les kits de balcon n'y ont pas droit : la page officielle précise que « le tiers financement ou les kits solaires ne sont pas éligibles à cette aide ». Un vendeur qui promet cette prime pour un kit plug-and-play se trompe.",
    ],
    sources: [{ label: 'Toulouse Métropole, « Demander la prime solaire » (page mise à jour le 13 octobre 2026)', url: 'https://metropole.toulouse.fr/demarches/demander-la-prime-solaire', vu: '23/11/2026' }],
  },
  '34': {
    titre: 'Montpellier : un cadastre solaire qui calcule aussi les kits plug & play',
    titreSeo: 'Kit solaire balcon Hérault : le cadastre de Montpellier',
    descriptionSeo: 'Hérault (34) : le cadastre solaire de Montpellier calcule aussi les kits plug & play ; aucune aide selon l’ALEC. Production PVGIS et rentabilité.',
    apport: "Ce que cette fiche ajoute à notre carte nationale : un outil public pour vérifier la rentabilité de votre propre installation, la position de l'ALEC sur les aides et la production mois par mois à Montpellier.",
    paragraphes: [
      "Le cadastre solaire de Montpellier Méditerranée Métropole, gratuit et anonyme, estime le potentiel de votre toiture et permet aussi de « calculer les coûts, la production autoconsommée et le temps de retour » des « panneaux plug & play en vente libre dans le commerce ». C'est un bon moyen de vérifier un devis ou une promesse de vendeur avec un outil public.",
      "Côté aides, l'ALEC Montpellier Métropole, qui conseille gratuitement les habitants, indique qu'« il n'y a pas d'aides financières pour l'installation d'un kit solaire Plug & Play ».",
    ],
    sources: [
      { label: 'Ville et Métropole de Montpellier, page énergie solaire (cadastre solaire)', url: 'https://www.montpellier.fr/en/actions/competences/climate-energy/solar-energy', vu: '23/11/2026' },
      { label: 'Outil : cadastre solaire de Montpellier Méditerranée Métropole', url: 'https://montpellier3m.cadastre-solaire.fr/', vu: '23/11/2026' },
      { label: "ALEC Montpellier Métropole, « Installer un kit solaire plug and play, est-ce une bonne idée ? » (23/04/2025)", url: 'http://alec-montpellier.org/actualites/installer-un-kit-solaire-plug-and-play-est-ce-une-bonne-idee/', vu: '23/11/2026' },
    ],
  },
  '59': {
    titre: 'Cœur de Flandre Agglo aide à l’achat d’un panneau « prêt à brancher »',
    titreSeo: 'Kit solaire balcon Nord : l’aide de Cœur de Flandre',
    descriptionSeo: 'Nord (59) : Cœur de Flandre Agglo paie 30 % d’un panneau prêt à brancher, 200 € au plus (vérifié le 23/11/2026). Production PVGIS et rentabilité.',
    apport: "Ce que cette fiche ajoute à notre carte nationale : une aide locale qui peut réduire de 200 € au plus le prix d'un panneau, avec ses conditions, et la production mois par mois à Lille.",
    paragraphes: [
      "Dans les 50 communes de Cœur de Flandre Agglo (autour d'Hazebrouck), l'agglomération finance 30 % du prix TTC d'un panneau solaire « prêt à brancher », dans la limite de 200 €, pour un seul panneau.",
      "Conditions principales indiquées par l'agglomération : résidence principale, installation de 3 kWc au plus dédiée à l'autoconsommation (aucune revente), pas d'installation solaire déjà en place, pas de pose en front de rue, panneau et onduleur garantis au moins 20 ans, et déclaration à Enedis par une convention d'autoconsommation sans injection. Les locataires ne sont aidés que pour un panneau posé au sol. Le règlement date du 23 mai 2025 et la page n'indique pas de date de clôture : vérifiez auprès de l'agglomération que l'aide est toujours ouverte avant d'acheter.",
      "Ailleurs dans le Nord, et notamment dans la Métropole européenne de Lille, nous n'avons pas trouvé d'aide officielle pour les kits de balcon.",
    ],
    sources: [{ label: 'Cœur de Flandre Agglo, « Aide à l’achat de panneaux solaires prêts à brancher »', url: 'https://www.ca-coeurdeflandre.fr/aide-lachat-de-panneaux-solaires-prets-brancher', vu: '23/11/2026' }],
  },
};
