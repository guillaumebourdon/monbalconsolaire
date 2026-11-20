#!/usr/bin/env node
/**
 * lastModified du sitemap = vraie date de dernière modification du contenu de la page.
 *
 * Pour chaque URL littérale de src/app/sitemap.ts, on prend la date du dernier commit git
 * qui a touché le fichier de la page (src/app/<chemin>/page.tsx), ou la date du jour si ce
 * fichier a des modifications non commitées. Les URL générées (régions) et celles dont les
 * données vivent ailleurs sont listées dans EXTRA_SOURCES.
 *
 * Usage :
 *   node scripts/sitemap-lastmod.mjs          # contrôle, code de sortie 1 si une date est fausse
 *   node scripts/sitemap-lastmod.mjs --write  # corrige les dates dans sitemap.ts
 *
 * Un commit dont le message contient « maillage seul » (seuls des liens internes changent) ou
 * « liens seuls » (seuls des liens d'affiliation changent) ou « métadonnées seules » (title, description,
 * JSON-LD) est ignoré : le contenu visible est identique.
 * Les commits d'affiliation du 18/11/2026 (avant cette convention) sont ignorés par leur message.
 * Ne jamais changer toutes les dates d'un coup « pour rafraîchir » : Google ignore alors le signal.
 */
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const SITEMAP = 'src/app/sitemap.ts';
const WRITE = process.argv.includes('--write');
const today = new Date().toISOString().slice(0, 10);

// Pages dont le contenu dépend aussi de fichiers de données.
const EXTRA_SOURCES = {
  '/etude/rentabilite-kit-solaire-balcon-departement': ['src/lib/rentabilite-departements.ts', 'src/data/departments.ts', 'src/data/pvgis-prefectures.json'],
  '/solaire-balcon': ['src/lib/rentabilite-departements.ts', 'src/data/departments.ts'],
  '/calculateur': ['src/data/departments.ts', 'src/lib/calculateur-kits.ts'],
};

// Commits sans changement du contenu visible (liens internes ou liens marchands seulement).
const SKIP_GREPS = [
  'maillage seul',
  'liens seuls',
  'métadonnées seules',
  'maillage retour',
  'Liens affiliés ManoMano',
  'affiliation v2 - liens Awin et Amazon',
  'liens Awin Zendure et EcoFlow',
  'retrait de 2 liens Amazon',
  "Merge affiliation-v2",
].map((g) => `--grep="${g}"`).join(' ');

function lastDate(files) {
  let best = '';
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const dirty = execSync(`git status --porcelain -- "${f}"`).toString().trim();
    // Les commits « maillage seul » (liens internes changés, contenu identique) ne comptent pas.
    const d = dirty ? today : execSync(`git log -1 --format=%cs --invert-grep ${SKIP_GREPS} -- "${f}"`).toString().trim();
    if (d > best) best = d;
  }
  return best;
}

/** Fichier de la page, y compris pour les routes dynamiques ([slug], [region]). */
function resolvePage(p) {
  const exact = `src/app${p}/page.tsx`;
  if (fs.existsSync(exact)) return exact;
  const parent = `src/app${p.slice(0, p.lastIndexOf('/'))}`;
  if (fs.existsSync(parent)) {
    const dyn = fs.readdirSync(parent).find((d) => /^\[.+\]$/.test(d) && fs.existsSync(`${parent}/${d}/page.tsx`));
    if (dyn) return `${parent}/${dyn}/page.tsx`;
  }
  return exact;
}

let src = fs.readFileSync(SITEMAP, 'utf8');
let errors = 0;
src = src.replace(/\{ url: (?:BASE_URL|`\$\{BASE_URL\}([^`]*)`), lastModified: '(\d{4}-\d{2}-\d{2})'/g, (m, p = '', date) => {
  const page = resolvePage(p);
  const real = lastDate([page, ...(EXTRA_SOURCES[p] ?? [])]);
  if (!real) {
    console.warn(`? ${p || '/'} : fichier ${page} introuvable, date laissée (${date})`);
    return m;
  }
  if (real !== date) {
    errors++;
    console.log(`${p || '/'} : ${date} -> ${real}`);
    return m.replace(date, real);
  }
  return m;
});
if (WRITE) {
  fs.writeFileSync(SITEMAP, src);
  console.log(`${errors} date(s) corrigée(s)`);
} else {
  console.log(errors ? `${errors} date(s) à corriger (node scripts/sitemap-lastmod.mjs --write)` : 'Dates du sitemap OK');
  process.exit(errors ? 1 : 0);
}
