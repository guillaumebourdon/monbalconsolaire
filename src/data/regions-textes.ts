/**
 * Textes propres à chaque région, écrits à partir des données PVGIS (12/11/2026), ODRÉ et INSEE.
 * Tous les chiffres sont lus dans les données (lib/regions.ts) : aucun n'est écrit en dur.
 * Les constats qualitatifs (« X produit plus que Y en décembre ») ont été vérifiés sur ces données ;
 * si l'on relance scripts/pvgis-prefectures.mjs --force, relire ces textes.
 */
import type { RegionStats, PrefStat } from '@/lib/regions';
import { NATIONAL, NATIONAL_INST_1000, MOIS } from '@/lib/regions';

const n = (x: number) => x.toLocaleString('fr-FR');
const pc = (x: number) => `${x > 0 ? '+' : x < 0 ? '−' : ''}${n(Math.abs(x))} %`;
const P = (s: RegionStats, code: string): PrefStat => s.prefs.find((p) => p.code === code)!;
const dec = (p: PrefStat, k: 'm30' | 'm90' = 'm30') => n(Math.round(p[k][11]));
const jul = (p: PrefStat, k: 'm30' | 'm90' = 'm30') => n(Math.round(p[k][6]));
const ratio = (a: number, b: number) => n(Math.round((a / b) * 10) / 10);

type Texte = (s: RegionStats) => string[];

export const REGION_TEXTES: Record<string, Texte> = {
  'auvergne-rhone-alpes': (s) => {
    const lyon = P(s, '69'), gre = P(s, '38'), val = P(s, '26'), ste = P(s, '42'), bourg = P(s, '01');
    return [
      `Entre ${val.prefecture} et ${ste.prefecture}, l'écart atteint ${n(val.e30 - ste.e30)} kWh par an pour le même kit de 800 W incliné : ${n(val.e30)} kWh dans la Drôme contre ${n(ste.e30)} kWh dans la Loire. La vallée du Rhône au sud de Lyon (Valence, Privas) tire la moyenne régionale vers le haut, à ${n(s.e30)} kWh, soit ${pc(s.ecart30)} par rapport à la moyenne des 96 préfectures.`,
      `Lyon n'est pas la mieux placée de sa propre région : ${n(lyon.e30)} kWh par an, moins que ${gre.prefecture} (${n(gre.e30)} kWh). L'hiver creuse l'écart. En décembre, un panneau incliné produit ${dec(gre)} kWh à ${gre.prefecture}, ${dec(lyon)} kWh à Lyon et seulement ${dec(bourg)} kWh à ${bourg.prefecture}. Pour un balcon lyonnais, ce n'est pas l'été qui fait la différence, ce sont les mois de novembre à février.`,
      `Le Rhône concentre les appartements (${n(lyon.local.partAppartements)} % des résidences principales), l'Isère les installations solaires : ${n(gre.local.installations ?? 0)} petites installations raccordées, le record de la région, contre ${n(lyon.local.installations ?? 0)} dans le Rhône. Pour un Lyonnais sans toit, le balcon reste souvent la seule option.`,
    ];
  },
  'bourgogne-franche-comte': (s) => {
    const macon = P(s, '71'), dijon = P(s, '21'), vesoul = P(s, '70'), bes = P(s, '25');
    return [
      `${macon.prefecture} arrive en tête avec ${n(macon.e30)} kWh par an pour 800 W inclinés, devant ${dijon.prefecture}, capitale régionale (${n(dijon.e30)} kWh). La région se situe à ${pc(s.ecart30)} de la moyenne nationale : un ensoleillement intermédiaire, ni nordique ni méridional.`,
      `Vesoul est le cas particulier de la région. En juillet, son panneau incliné produit ${jul(vesoul)} kWh, à peu près comme ${bes.prefecture} (${jul(bes)} kWh). En décembre, il tombe à ${dec(vesoul)} kWh, contre ${dec(bes)} kWh à ${bes.prefecture}. PVGIS intègre le relief qui masque l'horizon : à ${vesoul.prefecture}, c'est la seule préfecture de France où, en décembre, le panneau vertical (${dec(vesoul, 'm90')} kWh) ne fait pas mieux que l'incliné. Sur un balcon de la région, l'environnement immédiat (colline, immeuble en face) compte autant que la latitude.`,
      `La Saône-et-Loire compte ${n(macon.local.installations ?? 0)} petites installations solaires raccordées, le plus haut total de la région, devant le Doubs (${n(bes.local.installations ?? 0)}). Le Territoire de Belfort est le département le plus urbain, avec ${n(P(s, '90').local.partAppartements)} % d'appartements.`,
    ];
  },
  bretagne: (s) => {
    const vannes = P(s, '56'), sb = P(s, '22'), rennes = P(s, '35'), quimper = P(s, '29');
    return [
      `La Bretagne n'est pas uniforme : le Morbihan fait nettement mieux que le nord de la péninsule. À ${vannes.prefecture}, un kit de 800 W incliné produit ${n(vannes.e30)} kWh par an, contre ${n(sb.e30)} kWh à ${sb.prefecture}, soit ${n(vannes.e30 - sb.e30)} kWh d'écart à quelques dizaines de kilomètres. ${rennes.prefecture} (${n(rennes.e30)} kWh) et ${quimper.prefecture} (${n(quimper.e30)} kWh) sont entre les deux.`,
      `Le panneau vertical, très courant sur les garde-corps, garde en Bretagne ${n(s.ratioVertical)} % de la production d'un panneau incliné sur l'année, mais il prend l'avantage de novembre à janvier : à ${rennes.prefecture}, ${dec(rennes, 'm90')} kWh en décembre en vertical contre ${dec(rennes)} kWh incliné. Avec ${n(s.local.installations)} petites installations solaires raccordées, la région compte ${n(s.instPour1000)} installations pour 1 000 résidences principales.`,
      `Dans les Côtes-d'Armor, ${n(sb.local.partAppartements)} % seulement des résidences principales sont des appartements : c'est aussi le département breton où nous présentons un achat groupé local de kits. L'Ille-et-Vilaine, plus urbaine (${n(rennes.local.partAppartements)} % d'appartements), compte le plus d'installations raccordées de la région (${n(rennes.local.installations ?? 0)}).`,
    ];
  },
  'centre-val-de-loire': (s) => {
    const bourges = P(s, '18'), orleans = P(s, '45'), tours = P(s, '37');
    return [
      `C'est l'une des régions les plus régulières : ${s.spreadKwh} kWh seulement séparent ${s.best.prefecture} (${n(s.best.e30)} kWh) et ${s.worst.prefecture} (${n(s.worst.e30)} kWh), soit ${n(s.spreadPct)} % pour un kit de 800 W incliné. Orléans, la capitale régionale, ferme la marche avec ${n(orleans.e30)} kWh.`,
      `Le sud de la région gagne surtout en hiver. En décembre, un panneau incliné produit ${dec(tours)} kWh à ${tours.prefecture} contre ${dec(orleans)} kWh à ${orleans.prefecture}. ${bourges.prefecture} produit le plus sur l'année, mais c'est ${tours.prefecture} qui a le meilleur mois de décembre. Le Centre-Val de Loire est aussi une région de maisons : ${n(s.local.partAppartements)} % d'appartements parmi les résidences principales (INSEE), bien moins que la moyenne de la métropole.`,
      `Le Loiret totalise ${n(orleans.local.installations ?? 0)} petites installations solaires raccordées, devant l'Indre-et-Loire (${n(tours.local.installations ?? 0)}). Dans l'Indre, ${n(P(s, '36').local.partAppartements)} % seulement des résidences principales sont des appartements.`,
    ];
  },
  corse: (s) => {
    const aj = P(s, '2A'), ba = P(s, '2B');
    return [
      `Les deux préfectures corses sont proches : ${n(aj.e30)} kWh par an à ${aj.prefecture} et ${n(ba.e30)} kWh à ${ba.prefecture} pour 800 W inclinés. La Corse se place à ${pc(s.ecart30)} par rapport à la moyenne nationale, derrière la Provence-Alpes-Côte d'Azur.`,
      `Le panneau vertical y perd davantage : il garde ${n(s.ratioVertical)} % de la production d'un panneau incliné, contre ${n(Math.round((NATIONAL.e90 / NATIONAL.e30) * 100))} % en moyenne en France. En été, le soleil y monte haut et éclaire mal une surface verticale : en juillet, ${jul(aj, 'm90')} kWh en vertical à ${aj.prefecture} contre ${jul(aj)} kWh incliné. Sur un balcon corse, incliner le panneau rapporte donc davantage que sur le continent. Le meilleur mois du panneau vertical est ${MOIS[s.moisMax90]}.`,
      `Plus d'un logement sur deux est un appartement en Corse (${n(s.local.partAppartements)} %), et l'île ne compte que ${n(s.local.installations)} petites installations solaires raccordées, réparties presque à égalité entre la Corse-du-Sud (${n(aj.local.installations ?? 0)}) et la Haute-Corse (${n(ba.local.installations ?? 0)}).`,
    ];
  },
  'grand-est': (s) => {
    const colmar = P(s, '68'), stras = P(s, '67'), bld = P(s, '55'), metz = P(s, '57');
    return [
      `L'Alsace s'en sort mieux que le reste de la région : ${n(colmar.e30)} kWh par an à ${colmar.prefecture} pour un kit de 800 W incliné, contre ${n(bld.e30)} kWh à ${bld.prefecture}, la préfecture la moins ensoleillée de France métropolitaine dans nos calculs. Strasbourg, capitale régionale, est à ${n(stras.e30)} kWh.`,
      `L'hiver est le point faible. Un panneau incliné produit ${ratio(s.m30[6], s.m30[11])} fois plus en juillet qu'en décembre en moyenne sur les dix préfectures (en décembre : ${dec(metz)} kWh à ${metz.prefecture}, ${dec(bld)} kWh à ${bld.prefecture}). Les mois de novembre à février ne pèsent que ${n(s.partHiver30)} % de la production annuelle. Un kit de balcon y couvre surtout les consommations de mars à octobre.`,
      `Le Bas-Rhin compte ${n(stras.local.installations ?? 0)} petites installations solaires raccordées, la Moselle ${n(metz.local.installations ?? 0)}. Strasbourg est aussi le pôle le plus urbain : ${n(stras.local.partAppartements)} % d'appartements dans le Bas-Rhin, contre ${n(bld.local.partAppartements)} % dans la Meuse.`,
    ];
  },
  'hauts-de-france': (s) => {
    const lille = P(s, '59'), beauvais = P(s, '60'), arras = P(s, '62');
    return [
      `${lille.prefecture} produit le moins de la région : ${n(lille.e30)} kWh par an pour 800 W inclinés, contre ${n(beauvais.e30)} kWh à ${beauvais.prefecture}. La région est à ${pc(s.ecart30)} de la moyenne nationale. À ce niveau, un kit reste utile, mais son prix compte davantage qu'ailleurs.`,
      `Le panneau vertical y perd moins qu'ailleurs : à ${lille.prefecture}, il garde ${n(Math.round((lille.e90 / lille.e30) * 100))} % de la production d'un panneau incliné, le rapport le plus élevé des 96 préfectures, et son meilleur mois est ${MOIS[s.moisMax90]}, pas l'été. Le Pas-de-Calais compte ${n(arras.local.installations ?? 0)} petites installations solaires raccordées et le Nord ${n(lille.local.installations ?? 0)} : le solaire domestique n'y est pas marginal.`,
      `Dans le Nord, ${n(lille.local.partAppartements)} % des résidences principales sont des appartements, contre ${n(arras.local.partAppartements)} % dans le Pas-de-Calais. En décembre, un panneau vertical à ${lille.prefecture} produit ${dec(lille, 'm90')} kWh, contre ${dec(lille)} kWh incliné.`,
    ];
  },
  'ile-de-france': (s) => {
    const paris = P(s, '75'), nanterre = P(s, '92'), melun = P(s, '77');
    return [
      `D'une préfecture à l'autre, l'ensoleillement ne change presque pas : ${s.spreadKwh} kWh d'écart entre ${s.best.prefecture} (${n(s.best.e30)} kWh) et ${s.worst.prefecture} (${n(s.worst.e30)} kWh) pour 800 W inclinés. Ce qui distingue l'Île-de-France, c'est le logement : ${n(s.local.partAppartements)} % des résidences principales sont des appartements, ${n(paris.local.partAppartements)} % à Paris.`,
      `Le registre national ne recense que ${n(paris.local.installations ?? 0)} installations solaires de moins de 36 kW à Paris et ${n(nanterre.local.installations ?? 0)} dans les Hauts-de-Seine, contre ${n(melun.local.installations ?? 0)} en Seine-et-Marne, département de maisons. Pour un Parisien, le balcon est souvent la seule surface disponible : un panneau vertical sur garde-corps y produit ${n(paris.e90)} kWh par an, et ${dec(paris, 'm90')} kWh en décembre, plus que l'incliné (${dec(paris)} kWh).`,
      `La petite couronne suit Paris : ${n(nanterre.local.partAppartements)} % d'appartements dans les Hauts-de-Seine, ${n(P(s, '93').local.partAppartements)} % en Seine-Saint-Denis et ${n(P(s, '94').local.partAppartements)} % dans le Val-de-Marne (INSEE). La Seine-et-Marne, avec ${n(melun.local.partAppartements)} %, est le seul département francilien où les maisons dominent.`,
    ];
  },
  normandie: (s) => {
    const rouen = P(s, '76'), alencon = P(s, '61'), caen = P(s, '14');
    return [
      `${rouen.prefecture}, capitale régionale, est la préfecture normande la moins ensoleillée : ${n(rouen.e30)} kWh par an pour 800 W inclinés, contre ${n(alencon.e30)} kWh à ${alencon.prefecture} et ${n(caen.e30)} kWh à ${caen.prefecture}. La Normandie se situe à ${pc(s.ecart30)} de la moyenne nationale.`,
      `Le panneau vertical y atteint son meilleur mois en ${MOIS[s.moisMax90]}, signe d'un printemps plus lumineux que la fin d'été. En décembre, il fait mieux que l'incliné dans les cinq préfectures, par exemple ${dec(caen, 'm90')} kWh contre ${dec(caen)} kWh à ${caen.prefecture}. La Normandie reste une région de maisons : ${n(s.local.partAppartements)} % d'appartements (INSEE), ${n(rouen.local.partAppartements)} % en Seine-Maritime.`,
      `La Seine-Maritime compte ${n(rouen.local.installations ?? 0)} petites installations solaires raccordées, le plus haut total normand, et le Calvados ${n(caen.local.installations ?? 0)}. Dans la Manche et l'Orne, moins d'un logement sur cinq est un appartement (${n(P(s, '50').local.partAppartements)} % et ${n(alencon.local.partAppartements)} %).`,
    ];
  },
  'nouvelle-aquitaine': (s) => {
    const lr = P(s, '17'), bdx = P(s, '33'), pau = P(s, '64'), gueret = P(s, '23');
    return [
      `La façade atlantique fait mieux que le Limousin : ${n(lr.e30)} kWh par an à ${lr.prefecture} pour 800 W inclinés, contre ${n(gueret.e30)} kWh à ${gueret.prefecture}. Bordeaux, capitale régionale, produit ${n(bdx.e30)} kWh. La région est proche de la moyenne nationale (${pc(s.ecart30)}).`,
      `${pau.prefecture} a un profil à part : c'est la préfecture de la région qui produit le plus en décembre (${dec(pau)} kWh incliné) et l'une des plus faibles en juillet (${jul(pau)} kWh). Son panneau incliné ne produit que ${ratio(pau.m30[6], pau.m30[11])} fois plus en juillet qu'en décembre, contre ${ratio(lr.m30[6], lr.m30[11])} fois à ${lr.prefecture}. Avec ${n(s.local.installations)} petites installations solaires raccordées, la Nouvelle-Aquitaine compte ${n(s.instPour1000)} installations pour 1 000 résidences principales, au-dessus de la moyenne de la métropole (${n(NATIONAL_INST_1000)}).`,
      `La Gironde compte à elle seule ${n(bdx.local.installations ?? 0)} petites installations solaires raccordées, et ${n(bdx.local.partAppartements)} % d'appartements. Dans les Deux-Sèvres, la part d'appartements tombe à ${n(P(s, '79').local.partAppartements)} %.`,
    ];
  },
  occitanie: (s) => {
    const perp = P(s, '66'), mtp = P(s, '34'), tlse = P(s, '31'), foix = P(s, '09'), mende = P(s, '48');
    return [
      `L'Occitanie réunit deux climats. Sur le littoral méditerranéen, ${perp.prefecture}, ${P(s, '30').prefecture} et ${mtp.prefecture} atteignent au moins ${n(Math.min(perp.e30, P(s, '30').e30, mtp.e30))} kWh par an pour 800 W inclinés. À l'intérieur, ${tlse.prefecture} produit ${n(tlse.e30)} kWh et ${foix.prefecture} ${n(foix.e30)} kWh. L'écart entre la meilleure et la moins bonne préfecture atteint ${n(s.spreadPct)} %.`,
      `${mende.prefecture} est l'exception : ${jul(mende)} kWh en juillet, plus qu'à ${tlse.prefecture} (${jul(tlse)} kWh), mais ${dec(mende)} kWh en décembre, et son panneau vertical ne garde que ${n(Math.round((mende.e90 / mende.e30) * 100))} % de la production inclinée. L'Occitanie est la région qui compte le plus de petites installations solaires par logement : ${n(s.instPour1000)} pour 1 000 résidences principales, contre ${n(NATIONAL_INST_1000)} en moyenne en métropole.`,
      `L'Hérault (${n(mtp.local.installations ?? 0)}) et la Haute-Garonne (${n(tlse.local.installations ?? 0)}) comptent le plus de petites installations raccordées. Ce sont aussi les deux départements les plus urbains de la région : ${n(mtp.local.partAppartements)} % et ${n(tlse.local.partAppartements)} % d'appartements.`,
    ];
  },
  'pays-de-la-loire': (s) => {
    const lrsy = P(s, '85'), nantes = P(s, '44'), lemans = P(s, '72');
    return [
      `${lrsy.prefecture} dépasse le cap des ${n(Math.floor(lrsy.e30 / 100) * 100)} kWh par an pour 800 W inclinés (${n(lrsy.e30)} kWh), devant ${nantes.prefecture} (${n(nantes.e30)} kWh). L'est de la région est en retrait : ${n(lemans.e30)} kWh au ${lemans.prefecture}. La région se situe à ${pc(s.ecart30)} de la moyenne nationale.`,
      `La Vendée est un département de maisons (${n(lrsy.local.partAppartements)} % d'appartements seulement, INSEE) et compte ${n(lrsy.local.installations ?? 0)} petites installations solaires raccordées, plus que la Loire-Atlantique (${n(nantes.local.installations ?? 0)}), qui compte pourtant ${n(nantes.local.residencesPrincipales)} résidences principales contre ${n(lrsy.local.residencesPrincipales)}. La région affiche ${n(s.instPour1000)} installations pour 1 000 résidences principales. En décembre, un panneau vertical à ${nantes.prefecture} produit ${dec(nantes, 'm90')} kWh, contre ${dec(nantes)} kWh incliné.`,
      `En Mayenne et dans la Sarthe, la production baisse (${n(P(s, '53').e30)} et ${n(lemans.e30)} kWh pour 800 W inclinés) et les appartements restent minoritaires (${n(P(s, '53').local.partAppartements)} % et ${n(lemans.local.partAppartements)} %).`,
    ];
  },
  'provence-alpes-cote-d-azur': (s) => {
    const mrs = P(s, '13'), digne = P(s, '04'), nice = P(s, '06'), gap = P(s, '05');
    return [
      `${mrs.prefecture} produit le plus de France métropolitaine dans nos calculs : ${n(mrs.e30)} kWh par an pour un kit de 800 W incliné, ${pc(mrs.ecart30)} par rapport à la moyenne des 96 préfectures. Les six préfectures de la région restent groupées, de ${n(s.worst.e30)} à ${n(s.best.e30)} kWh.`,
      `L'ordre change pour un panneau vertical : ${gap.prefecture} (${n(gap.e90)} kWh) passe devant ${mrs.prefecture} (${n(mrs.e90)} kWh), et ${digne.prefecture} (${n(digne.e90)} kWh) la talonne. En montagne, le soleil d'hiver, bas sur l'horizon, éclaire de face une surface verticale : à ${digne.prefecture}, le meilleur mois du panneau vertical est ${MOIS[digne.m90.indexOf(Math.max(...digne.m90))]}. ${nice.prefecture} compte ${n(nice.local.partAppartements)} % d'appartements dans les Alpes-Maritimes (INSEE) : beaucoup de foyers n'ont qu'un balcon pour produire.`,
      `Les Bouches-du-Rhône (${n(mrs.local.installations ?? 0)}) et le Var (${n(P(s, '83').local.installations ?? 0)}) concentrent les petites installations solaires de la région, loin devant les Hautes-Alpes (${n(gap.local.installations ?? 0)}). Dans les Bouches-du-Rhône, ${n(mrs.local.partAppartements)} % des résidences principales sont des appartements.`,
    ];
  },
};
