import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { REGIONS, REGIONS_LASTMOD } from '@/data/regions';
import { REGION_TEXTES } from '@/data/regions-textes';
import { PVGIS_META } from '@/data/departments';
import { DEPARTEMENTS_PILOTES } from '@/data/departements-pilotes';
import { achatsGroupesDuDepartement } from '@/data/achats-groupes';
import {
  getRegionStats,
  REGION_STATS,
  NATIONAL,
  NATIONAL_INST_1000,
  DONNEES_LOCALES,
  MOIS,
  MOIS_COURT,
  KIT_WC,
  type RegionStats,
} from '@/lib/regions';
import { KWH_PRICE_LABEL, KWH_PRICE_SINCE, KWH_PRICE_SOURCE_URL, AUTOCONSO_STANDARD } from '@/lib/pricing';
import { SchemaArticle, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { withCanonicalOg } from '@/lib/metadata';

const BASE = 'https://monbalconsolaire.fr';
const n = (x: number) => x.toLocaleString('fr-FR');
const pc = (x: number) => `${x > 0 ? '+' : x < 0 ? '−' : ''}${n(Math.abs(x))} %`;
const dateFr = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

function slugify(name: string): string {
  return name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return REGIONS.map((r) => ({ region: r.slug }));
}

export function generateMetadata({ params }: { params: { region: string } }): Metadata {
  const s = getRegionStats(params.region);
  if (!s) return {};
  return withCanonicalOg({
    title: { absolute: `Solaire de balcon ${s.region.nom} : production PVGIS` },
    description: `Production PVGIS mois par mois d'un kit de 800 W ${s.region.dans}, incliné ou vertical, préfecture par préfecture : ${pc(s.ecart30)} par rapport à la moyenne nationale.`.slice(0, 155),
    alternates: { canonical: `${BASE}/solaire-balcon/region/${s.region.slug}` },
  });
}

/**
 * Variante de formulation : parmi les régions qui tombent dans le même cas (même clé),
 * chacune reçoit une tournure différente, pour que deux régions au profil voisin ne se lisent pas pareil.
 */
function vb<T>(s: RegionStats, key: (x: RegionStats) => string | number, options: T[]): T {
  const k = key(s);
  const peers = REGION_STATS.filter((x) => key(x) === k).map((x) => x.region.slug);
  return options[(peers.indexOf(s.region.slug) + Number(k)) % options.length];
}

/** Variante choisie selon la position de la région dans la liste (rotation). */
function vg<T>(s: RegionStats, options: T[], decalage = 0): T {
  const i = REGIONS.findIndex((x) => x.slug === s.region.slug);
  // décalage : deux rotations différentes ne retombent pas sur les mêmes paires de régions
  return options[(i + decalage * Math.floor(i / 4)) % options.length];
}

const bucketHiver = (x: RegionStats) => (x.rapportEteHiver30 < 2.4 ? 0 : x.rapportEteHiver30 < 3 ? 1 : x.rapportEteHiver30 < 3.6 ? 2 : 3);

/** Commentaire des courbes mensuelles, formulé selon le profil de la région. */
function commentaireMois(s: RegionStats): string[] {
  const r = n(s.rapportEteHiver30);
  const d30 = n(s.m30[11]);
  const j30 = n(s.m30[6]);
  const h = n(s.partHiver30);
  const saison = vb(s, bucketHiver, [
    `Un panneau incliné produit ${r} fois plus en juillet qu'en décembre (${j30} contre ${d30} kWh en moyenne régionale), et novembre à février apportent ${h} % de l'année.`,
    `Décembre donne ${d30} kWh au panneau incliné, juillet ${j30} kWh : un rapport de ${r}, avec ${h} % de la production entre novembre et février.`,
    `Entre le creux de décembre (${d30} kWh) et le pic de juillet (${j30} kWh), la production inclinée varie d'un facteur ${r} ; l'hiver en assure ${h} %.`,
    `Les quatre mois d'hiver pèsent ${h} % de la production inclinée, avec ${d30} kWh en décembre pour ${j30} kWh en juillet (facteur ${r}).`,
  ]);
  const mv = s.moisMax90;
  const pic = n(s.m90[mv]);
  const mois = MOIS[mv];
  const juin = n(s.m90[5]);
  const vertical = vb(s, (x) => x.moisMax90, [
    `À la verticale, le meilleur mois est ${mois} (${pic} kWh) ; juin n'en donne que ${juin}.`,
    `Le panneau vertical culmine en ${mois} avec ${pic} kWh, contre ${juin} kWh en juin, quand le soleil passe haut au-dessus du garde-corps.`,
    `Fixé au garde-corps, le kit atteint ${pic} kWh en ${mois}, son record, puis recule à ${juin} kWh en juin.`,
    `En pose verticale, ${mois} arrive en tête (${pic} kWh) et juin plafonne à ${juin} kWh.`,
    `Le mois le plus productible du panneau vertical est ${mois}, à ${pic} kWh ; en juin, il se contente de ${juin} kWh.`,
    `Côté garde-corps, mieux vaut regarder ${mois} (${pic} kWh) que juin (${juin} kWh).`,
    `Un panneau vertical produit davantage en ${mois} (${pic} kWh) qu'en plein été : ${juin} kWh en juin.`,
  ]);
  return [saison, vertical];
}

function commentaireInst(s: RegionStats & { rangInst: number }): string {
  const nb = n(s.local.installations);
  const mw = n(Math.round(s.local.puissanceKw / 1000));
  const i = n(s.instPour1000);
  const nat = n(NATIONAL_INST_1000);
  const rang = s.rangInst === 1 ? 'premier' : `${s.rangInst}e`;
  const lieu = s.region.dans;
  // Une tournure par région (13), une seule phrase chacune.
  return vg(s, [
    `${nb} installations photovoltaïques de moins de 36 kW sont raccordées ${lieu} (${mw} MW), surtout en toiture et sans compter les kits de balcon, soit ${i} pour 1 000 résidences principales, ${rang} taux des 13 régions (${nat} en métropole).`,
    `Le registre national recense ${lieu} ${nb} petites installations solaires raccordées pour ${mw} MW, soit ${i} pour 1 000 résidences principales contre ${nat} en métropole (${rang} rang sur 13), essentiellement des toitures et non des kits de balcon.`,
    `Avec ${nb} installations solaires de moins de 36 kW raccordées (${mw} MW), presque toutes sur des toits, la région atteint ${i} installations pour 1 000 résidences principales et se classe ${rang} sur 13, la moyenne métropolitaine étant de ${nat}.`,
    `On compte ${lieu} ${nb} petites installations photovoltaïques raccordées (${mw} MW cumulés, principalement des toitures), ce qui place le taux d'équipement à ${i} pour 1 000 résidences principales, ${rang} des 13 régions, quand la métropole est à ${nat}.`,
    `Côté réseau, ${nb} installations solaires de moins de 36 kW (${mw} MW) sont recensées ${lieu}, presque toutes en toiture, et l'on obtient ${i} installations pour 1 000 résidences principales, au ${rang} rang national (${nat} en moyenne).`,
    `Toitures pour l'essentiel, ${nb} installations photovoltaïques de petite puissance sont raccordées ${lieu} pour ${mw} MW, et la région en compte ${i} pour 1 000 résidences principales quand la métropole en compte ${nat} (${rang} rang sur 13).`,
    `Le solaire raccordé reste surtout une affaire de toits ${lieu}, avec ${nb} installations de moins de 36 kW (${mw} MW), ${i} pour 1 000 résidences principales et un ${rang} rang sur 13 régions (moyenne : ${nat}).`,
    `Seulement ${i} installations solaires pour 1 000 résidences principales, contre ${nat} en métropole : la région est ${rang} sur 13, avec ${nb} installations de moins de 36 kW raccordées (${mw} MW), le plus souvent en toiture.`,
    `D'après le registre national, ${nb} petites installations solaires (${mw} MW) sont raccordées ${lieu}, ce qui représente ${i} installations pour 1 000 résidences principales, contre ${nat} en moyenne, et place la région au ${rang} rang des 13.`,
    `${nb} toitures et autres petites installations solaires de moins de 36 kW alimentent le réseau ${lieu} (${mw} MW), ce qui donne ${i} installations pour 1 000 résidences principales et le ${rang} rang des 13 régions (${nat} en métropole).`,
    `La région affiche le ${rang} taux d'équipement des 13 régions, avec ${i} installations solaires pour 1 000 résidences principales (${nat} en métropole) et ${nb} installations de moins de 36 kW raccordées pour ${mw} MW, en grande majorité sur des toits.`,
    `Le réseau compte ${lieu} ${nb} installations photovoltaïques de moins de 36 kW (${mw} MW), majoritairement en toiture, soit ${i} pour 1 000 résidences principales, ${rang} rang sur 13 face à une moyenne de ${nat}.`,
    `Rapporté aux logements, le parc de ${nb} petites installations solaires raccordées ${lieu} (${mw} MW, surtout des toitures) représente ${i} installations pour 1 000 résidences principales, au ${rang} rang des 13 régions (moyenne métropolitaine : ${nat}).`,
  ]);
}

function noteGain(s: RegionStats): string {
  const c = s.capitale;
  const pct = `${Math.round(AUTOCONSO_STANDARD * 100)} %`;
  // Rotation par groupe de quatre régions : jamais la même tournure que la phrase sur le tarif.
  const options = [
    `Gain de première année = production PVGIS × ${pct} consommés sur place × tarif ; notre calculateur, plus prudent, retient ${n(c.gainPrudent30)} € à ${c.prefecture} au lieu de ${n(c.gainPvgis30)} €.`,
    `Le gain suppose que ${pct} de la production est consommée sur place, au tarif réglementé ; nos fiches départementales appliquent une marge de prudence (${n(c.gainPrudent30)} € pour ${c.prefecture}, contre ${n(c.gainPvgis30)} € ici).`,
    `Calcul du gain : kWh PVGIS × ${pct} d'autoconsommation × tarif, la première année ; avec la méthode prudente du site, ${c.prefecture} descend à ${n(c.gainPrudent30)} € (contre ${n(c.gainPvgis30)} €).`,
  ];
  return options[Math.floor(REGIONS.findIndex((x) => x.slug === s.region.slug) / 4) % options.length];
}

function phraseTarif(s: RegionStats): string {
  const c = s.capitale;
  return vg(s, [
    `À ${c.prefecture}, un kit de 800 W incliné économise environ ${n(c.gainPvgis30)} € la première année : le tarif réglementé (${KWH_PRICE_LABEL}, en vigueur depuis le ${KWH_PRICE_SINCE}) étant le même partout en métropole, Corse comprise, seul l'ensoleillement fait varier le gain.`,
    `Le kWh coûte ${KWH_PRICE_LABEL} au tarif réglementé depuis le ${KWH_PRICE_SINCE}, à ${c.prefecture} comme partout en France métropolitaine, si bien que l'écart de gain entre régions ne vient que du soleil : ${n(c.gainPvgis30)} € par an à ${c.prefecture} pour 800 W inclinés.`,
    `Pas d'avantage tarifaire régional, puisque le tarif réglementé (${KWH_PRICE_LABEL} depuis le ${KWH_PRICE_SINCE}) s'applique à l'identique dans toute la métropole, et la production de 800 W inclinés vaut donc ${n(c.gainPvgis30)} € la première année à ${c.prefecture}.`,
    `Avec le même tarif réglementé partout en métropole (${KWH_PRICE_LABEL} depuis le ${KWH_PRICE_SINCE}), ${c.prefecture} gagne ${n(c.gainPvgis30)} € par an avec 800 W inclinés : seule la production change d'une région à l'autre.`,
  ], 1);
}

const thCls = 'p-2 text-right font-semibold whitespace-nowrap';
const tdCls = 'p-2 text-right font-mono whitespace-nowrap';

function TableMensuelle({ s, cas }: { s: RegionStats; cas: 'm30' | 'm90' }) {
  const tot = cas === 'm30' ? 'e30' : 'e90';
  return (
    <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
      <table className="w-full text-xs border-collapse min-w-[760px]">
        <caption className="sr-only">Production mensuelle en kWh, kit de {KIT_WC} W, {cas === 'm30' ? 'incliné à 30°' : 'vertical'}</caption>
        <thead>
          <tr className="border-b-2 border-green/20 bg-cream/50">
            <th className="p-2 text-left font-semibold">Préfecture</th>
            {MOIS_COURT.map((m) => (
              <th key={m} className={thCls}>{m}</th>
            ))}
            <th className={thCls}>Année</th>
          </tr>
        </thead>
        <tbody>
          {s.prefs.map((p, i) => (
            <tr key={p.code} className={`border-b border-border-light ${i % 2 ? 'bg-cream/40' : ''}`}>
              <td className="p-2 font-semibold whitespace-nowrap">{p.prefecture} <span className="text-stone font-normal">({p.code})</span></td>
              {p[cas].map((v, j) => (
                <td key={j} className={tdCls}>{n(Math.round(v))}</td>
              ))}
              <td className={`${tdCls} font-bold text-green`}>{n(p[tot])}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-green/20 bg-green-pale/20">
            <td className="p-2 font-semibold">Moyenne des 96 préfectures</td>
            {NATIONAL[cas].map((v, j) => (
              <td key={j} className={tdCls}>{n(Math.round(v))}</td>
            ))}
            <td className={`${tdCls} font-bold`}>{n(NATIONAL[tot])}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const s = getRegionStats(params.region);
  if (!s) notFound();
  const r = s.region;
  const url = `${BASE}/solaire-balcon/region/${r.slug}`;
  const textes = REGION_TEXTES[r.slug](s);
  const autres = REGIONS.filter((x) => x.slug !== r.slug);
  const pvgisDate = dateFr(PVGIS_META.interrogeLe);
  const odreDate = dateFr(DONNEES_LOCALES.meta.interrogeLe);

  return (
    <>
      <SchemaArticle
        title={`Solaire de balcon ${r.nom} : production PVGIS mois par mois`}
        description={`Production PVGIS d'un kit de 800 W ${r.dans}, incliné et vertical, pour chaque préfecture.`}
        url={url}
        datePublished="2026-11-12"
        dateModified={REGIONS_LASTMOD}
      />
      <SchemaBreadcrumb items={[{ label: 'Solaire par département', href: '/solaire-balcon' }, { label: r.nom }]} />
      <article className="section-padding">
        <div className="container-brand max-w-4xl">
          <Breadcrumbs items={[{ label: 'Solaire par département', href: '/solaire-balcon' }, { label: r.nom }]} />

          <div className="mb-8">
            <div className="badge-green mb-4 inline-block">{s.prefs.length} pr&eacute;fecture{s.prefs.length > 1 ? 's' : ''}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire de balcon {r.dans}&nbsp;: production mois par mois
            </h1>
            <p className="text-sm text-stone">{dateFr('2026-11-12')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { l: 'Incliné 30°', v: `${n(s.e30)} kWh`, sub: `${pc(s.ecart30)} vs France` },
              { l: 'Vertical 90°', v: `${n(s.e90)} kWh`, sub: `${n(s.ratioVertical)} % de l'incliné` },
              { l: 'Rang', v: `${s.rang}e / 13`, sub: 'régions' },
              { l: 'Gain annuel', v: `${n(s.gainPvgis30)} €`, sub: 'incliné, 800 W' },
            ].map((k) => (
              <div key={k.l} className="rounded-brand-xl border border-green/15 bg-white p-4 text-center shadow-brand">
                <div className="text-[10px] text-stone font-semibold uppercase tracking-widest">{k.l}</div>
                <div className="font-mono font-extrabold text-xl md:text-2xl text-green my-2">{k.v}</div>
                <div className="text-xs text-charcoal-light">{k.sub}</div>
              </div>
            ))}
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;il faut retenir</h2>
            {textes.map((t, i) => (
              <p key={i} className="text-charcoal-light leading-relaxed mb-4">{t}</p>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold mb-2">Panneau inclin&eacute; &agrave; 30&deg;</h2>
            <TableMensuelle s={s} cas="m30" />
            <h2 className="text-2xl font-extrabold mt-8 mb-2">Panneau vertical (garde-corps)</h2>
            <TableMensuelle s={s} cas="m90" />
            <div className="mt-4 space-y-3">
              {commentaireMois(s).map((t, i) => (
                <p key={i} className="text-charcoal-light leading-relaxed">{t}</p>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Combien &ccedil;a rapporte</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              {phraseTarif(s)}
            </p>
            <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b-2 border-green/20 bg-cream/50">
                    <th className="p-2 text-left font-semibold">Pr&eacute;fecture</th>
                    <th className={thCls}>Inclin&eacute; (kWh/an)</th>
                    <th className={thCls}>&Eacute;cart France</th>
                    <th className={thCls}>Gain/an</th>
                    <th className={thCls}>Vertical (kWh/an)</th>
                    <th className={thCls}>&Eacute;cart France</th>
                    <th className={thCls}>Gain/an</th>
                  </tr>
                </thead>
                <tbody>
                  {s.prefs.map((p, i) => (
                    <tr key={p.code} className={`border-b border-border-light ${i % 2 ? 'bg-cream/40' : ''}`}>
                      <td className="p-2 font-semibold">{p.prefecture}</td>
                      <td className={tdCls}>{n(p.e30)}</td>
                      <td className={tdCls}>{pc(p.ecart30)}</td>
                      <td className={`${tdCls} text-green`}>{n(p.gainPvgis30)} &euro;</td>
                      <td className={tdCls}>{n(p.e90)}</td>
                      <td className={tdCls}>{pc(p.ecart90)}</td>
                      <td className={`${tdCls} text-green`}>{n(p.gainPvgis90)} &euro;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-stone leading-relaxed">
              {noteGain(s)}{' '}<Link href="/calculateur" className="text-green hover:underline">Calculateur</Link> &middot; <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold mb-4">Solaire et logement</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              {commentaireInst(s)}
            </p>
            <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b-2 border-green/20 bg-cream/50">
                    <th className="p-2 text-left font-semibold">D&eacute;partement</th>
                    <th className={thCls}>Installations &lt; 36 kW</th>
                    <th className={thCls}>Pour 1 000 r&eacute;sidences</th>
                    <th className={thCls}>Part d&apos;appartements</th>
                  </tr>
                </thead>
                <tbody>
                  {[...s.prefs].sort((a, b) => a.code.localeCompare(b.code)).map((p, i) => {
                    const enrichi = DEPARTEMENTS_PILOTES[p.code] || achatsGroupesDuDepartement(p.code).length > 0;
                    return (
                      <tr key={p.code} className={`border-b border-border-light ${i % 2 ? 'bg-cream/40' : ''}`}>
                        <td className="p-2">
                          <Link href={`/solaire-balcon/${slugify(p.departement)}`} className="text-green hover:underline font-semibold">{p.departement}</Link> <span className="text-stone">({p.code})</span>
                          {enrichi && <span className="badge-green ml-2 text-[9px]">Infos locales</span>}
                        </td>
                        <td className={tdCls}>{p.local.installations != null ? n(p.local.installations) : '—'}</td>
                        <td className={tdCls}>{p.local.installationsPour1000Logements != null ? n(p.local.installationsPour1000Logements) : '—'}</td>
                        <td className={tdCls}>{n(p.local.partAppartements)} %</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </section>

          <div className="pt-8 border-t border-border-light">
            <p className="text-xs text-stone leading-relaxed">
              <strong>M&eacute;thode&nbsp;:</strong> <a href="https://re.jrc.ec.europa.eu/pvg_tools/fr/" target="_blank" rel="noopener" className="text-green hover:underline">PVGIS 5.3</a> (JRC, Commission europ&eacute;enne, base SARAH3), kit de {KIT_WC}&nbsp;Wc plein sud, pertes 14&nbsp;%, au centre de chaque commune pr&eacute;fecture (geo.api.gouv.fr), le {pvgisDate}&nbsp;; moyennes pluriannuelles sans arrondi, hors ombre des b&acirc;timents&nbsp;; installations&nbsp;: <a href={DONNEES_LOCALES.meta.installations.url} target="_blank" rel="noopener" className="text-green hover:underline">registre national ODR&Eacute;</a> au 30/09/2026, consult&eacute; le {odreDate}&nbsp;; logements d&apos;apr&egrave;s l&apos;<a href={DONNEES_LOCALES.meta.logements.url} target="_blank" rel="noopener" className="text-green hover:underline">INSEE, recensement {DONNEES_LOCALES.meta.logements.annee}</a> (aucune statistique publique ne donne la part de logements avec balcon)&nbsp;; tarif&nbsp;: <a href={KWH_PRICE_SOURCE_URL} target="_blank" rel="noopener" className="text-green hover:underline">grille Tarif Bleu EDF</a>&nbsp;; voir aussi la <Link href="/etude/rentabilite-kit-solaire-balcon-departement" className="text-green hover:underline">carte de la rentabilit&eacute;</Link> et le guide <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green hover:underline">orientation et ombre</Link>.
            </p>
          </div>
        </div>
      </article>
      <nav aria-label="Autres régions" className="container-brand max-w-4xl pb-16">
        <p className="text-sm font-semibold mb-3">Les autres r&eacute;gions</p>
        <div className="flex flex-wrap gap-2">
          {autres.map((x) => (
            <Link key={x.slug} href={`/solaire-balcon/region/${x.slug}`} className="text-sm border border-green/20 rounded-full px-3 py-1 hover:bg-green-pale/40 text-green">{x.nom}</Link>
          ))}
        </div>
      </nav>
    </>
  );
}
