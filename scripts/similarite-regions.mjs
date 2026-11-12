#!/usr/bin/env node
/**
 * Mesure de similarité entre les 13 pages régionales (même méthode que le diagnostic du 12/11/2026).
 *
 * Texte visible de l'<article> (hors tableaux), découpé en phrases ; on ne garde que les phrases
 * de 5 mots ou plus (les libellés courts, boutons et noms de liens ne sont pas des phrases).
 * Deux mesures :
 *  - brute : phrases identiques mot pour mot ;
 *  - masquée : chiffres remplacés par « N » et noms propres de la région (région, départements,
 *    préfectures) par « X », pour repérer les gabarits dont seul le nom change.
 * Pour chaque paire (A, B) : part des phrases de A que l'on retrouve dans B.
 *
 * Usage : node scripts/similarite-regions.mjs [URL de base, défaut http://localhost:3000]
 */
const BASE = process.argv[2] ?? 'http://localhost:3000';
const SLUGS = ['auvergne-rhone-alpes', 'bourgogne-franche-comte', 'bretagne', 'centre-val-de-loire', 'corse', 'grand-est', 'hauts-de-france', 'ile-de-france', 'normandie', 'nouvelle-aquitaine', 'occitanie', 'pays-de-la-loire', 'provence-alpes-cote-d-azur'];

const decode = (s) => s.replace(/&nbsp;|&#160;/g, ' ').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&laquo;/g, '«').replace(/&raquo;/g, '»');

async function page(slug) {
  const html = await (await fetch(`${BASE}/solaire-balcon/region/${slug}`)).text();
  let art = html.slice(html.indexOf('<article'), html.indexOf('</article>'));
  art = art.replace(/<table[\s\S]*?<\/table>/g, ' ').replace(/<script[\s\S]*?<\/script>/g, ' ');
  // Noms propres à masquer : lus dans les liens et les tableaux de la page
  const names = new Set();
  for (const m of html.matchAll(/<td class="p-2 font-semibold[^"]*">([^<(]+)/g)) names.add(decode(m[1]).trim());
  for (const m of html.matchAll(/href="\/solaire-balcon\/[a-z-]+"[^>]*>([^<]+)</g)) names.add(decode(m[1]).trim());
  const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? ['', ''])[1].replace(/<[^>]+>/g, ''));
  const text = decode(art.replace(/<\/(p|li|h1|h2|h3|div|caption|td|th)>/g, '\n').replace(/<[^>]+>/g, ' '));
  const sentences = text
    .split(/\n|(?<=[.!?:;])\s+(?=[A-ZÀ-Ý«])/)
    .map((x) => x.replace(/\s+/g, ' ').trim())
    .filter((x) => x.split(' ').length >= 5);
  return { slug, h1, sentences, names: [...names].filter((x) => x.length > 2) };
}

function mask(sentence, names) {
  let s = sentence;
  for (const nm of [...names].sort((a, b) => b.length - a.length)) s = s.split(nm).join('X');
  return s.replace(/[−+]?\d[\d\s,.]*/g, 'N').toLowerCase();
}

const pages = [];
for (const slug of SLUGS) pages.push(await page(slug));
const allNames = new Set(pages.flatMap((p) => p.names).concat(['Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Bretagne', 'Centre-Val de Loire', 'Corse', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandie', 'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', "Provence-Alpes-Côte d'Azur"]));

function stats(kind) {
  const sets = pages.map((p) => new Set(p.sentences.map((x) => (kind === 'brute' ? x : mask(x, allNames)))));
  const rows = [];
  for (let i = 0; i < sets.length; i++) for (let j = 0; j < sets.length; j++) {
    if (i === j) continue;
    const common = [...sets[i]].filter((x) => sets[j].has(x)).length;
    rows.push({ a: SLUGS[i], b: SLUGS[j], share: common / sets[i].size, common, total: sets[i].size });
  }
  rows.sort((x, y) => y.share - x.share);
  const shares = rows.map((r) => r.share).sort((x, y) => x - y);
  const med = shares[Math.floor(shares.length / 2)];
  // Phrases présentes sur les 13 pages
  const everywhere = [...sets[0]].filter((x) => sets.every((s) => s.has(x)));
  const ia = SLUGS.indexOf(rows[0].a), ib = SLUGS.indexOf(rows[0].b);
  const maxCommon = [...sets[ia]].filter((x) => sets[ib].has(x));
  return { max: rows[0], median: med, everywhere, sizes: sets.map((s) => s.size), maxCommon };
}

for (const kind of ['brute', 'masquée']) {
  const s = stats(kind);
  const pct = (x) => `${(x * 100).toFixed(1)} %`;
  console.log(`\n== Mesure ${kind} ==`);
  console.log(`Phrases par page : ${s.sizes.join(', ')}`);
  console.log(`Part de phrases communes, médiane des 156 paires : ${pct(s.median)}`);
  console.log(`Maximum : ${pct(s.max.share)} (${s.max.a} → ${s.max.b}, ${s.max.common}/${s.max.total})`);
  console.log(`Phrases présentes sur les 13 pages : ${s.everywhere.length}`);
  for (const x of s.everywhere) console.log(`  - ${x.slice(0, 140)}`);
  if (process.argv.includes('--detail')) for (const x of s.maxCommon) console.log(`  [paire max] ${x.slice(0, 160)}`);
}
