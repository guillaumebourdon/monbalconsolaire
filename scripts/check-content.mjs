#!/usr/bin/env node

/**
 * Garde-fous éditoriaux (revue du 05/11/2026) — à lancer avant chaque push.
 * Bloque les erreurs déjà corrigées une fois :
 *   - prix du kWh écrit en dur (doit venir de src/lib/pricing.ts)
 *   - ratingCount / aggregateRating sur les avis
 *   - badge « Avis et test » / « Test complet » (aucun kit testé physiquement)
 *   - raison sociale mal orthographiée
 *   - entités HTML dans les métadonnées (title/description)
 *   - description > 160 caractères, titre d'article > 70 caractères
 *   - dateModified (SchemaArticle) différente de la date « Mis à jour le … » affichée
 *
 * Usage : node scripts/check-content.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = join(import.meta.dirname, '..');
const SRC = join(ROOT, 'src');

let errors = 0;
const err = (file, msg) => {
  console.error(`  \x1b[31m✗\x1b[0m ${relative(ROOT, file)} : ${msg}`);
  errors++;
};

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : /\.(tsx?|mjs)$/.test(name) ? [p] : [];
  });
}

const MOIS = { janvier: 1, 'f&eacute;vrier': 2, février: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7, 'ao&ucirc;t': 8, août: 8, septembre: 9, octobre: 10, novembre: 11, 'd&eacute;cembre': 12, décembre: 12 };

const decode = (s) => s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16))).replace(/\\'/g, "'");

for (const file of walk(SRC)) {
  const s = readFileSync(file, 'utf-8');
  const isPricing = file.endsWith(join('lib', 'pricing.ts'));
  // Pages qui citent volontairement d'anciens tarifs (historique) : contrôle ligne par ligne,
  // seules les lignes marquées « historique » (février 2026 et avant) sont tolérées.

  const kwhLines = s.split('\n').filter((l) => /0[,.]1940|0[,.]19[0-9]{2}\s*(&nbsp;|\u00a0|\s)?(&euro;|€|\\u20ac)\s*\/\s*kWh/.test(l));
  const hardcoded = kwhLines.filter((l) => !/historique|F&eacute;vrier 2026|\(fév\.\)|\['20(1[0-9]|2[0-5])/.test(l));
  if (!isPricing && hardcoded.length) {
    err(file, `prix du kWh en dur (${hardcoded.length} ligne(s)) : utiliser KWH_PRICE_LABEL de src/lib/pricing.ts`);
  }
  if (!isPricing && s.split('\n').some((l) => /0[,.]2001/.test(l) && !/historique|\['20(1[0-9]|2[0-6])/.test(l) && !/0,1263/.test(l))) {
    err(file, 'prix du kWh 0,2001 en dur (utiliser KWH_PRICE_LABEL)');
  }
  if (/ratingCount/.test(s) && !file.endsWith('SchemaMarkup.tsx')) err(file, 'ratingCount interdit (pas d’aggregateRating)');
  if (/Avis et test|Test complet/.test(s)) err(file, 'badge « test » interdit : « Avis · Analyse »');
  if (/Beélevén|Beelevén|Beélev/.test(s)) err(file, 'raison sociale : « Beeleven SASU »');

  const meta = s.match(/export const metadata[\s\S]*?\n\}\)?;/);
  if (meta) {
    const title = meta[0].match(/\n\s*title:\s*(['"`])((?:\\.|(?!\1).)*)\1/);
    const desc = meta[0].match(/\n\s*description:\s*\n?\s*(['"`])((?:\\.|(?!\1).)*)\1/);
    for (const [label, m] of [['title', title], ['description', desc]]) {
      if (m && /&[a-zA-Z]+;|&#\d+;/.test(m[2])) err(file, `entité HTML dans metadata.${label}`);
    }
    if (desc && !desc[2].includes('${') && decode(desc[2]).length > 160) err(file, `description de ${decode(desc[2]).length} caractères (> 160)`);
    const isArticle = /app[\\/](avis|blog|guide|comparatif)[\\/][^\\/\[]+[\\/]page\.tsx$/.test(file);
    if (isArticle && title && !title[2].includes('${') && decode(title[2]).length > 70) err(file, `titre de ${decode(title[2]).length} caractères (> 70)`);
  }

  // dateModified vs « Mis à jour le JJ mois AAAA » visible
  const dm = s.match(/dateModified="(\d{4})-(\d{2})-(\d{2})"/);
  const vis = s.match(/[Mm]is (?:&agrave;|à) jour (?:le )?(\d{1,2})(?:<sup>er<\/sup>|er)? ([a-zA-Zéû&;]+) (\d{4})/);
  if (dm && vis) {
    const [, y, mo, d] = dm.map(Number);
    const vm = MOIS[vis[2]];
    if (!(Number(vis[1]) === d && vm === mo && Number(vis[3]) === y)) {
      err(file, `dateModified ${dm[1]}-${dm[2]}-${dm[3]} ≠ date affichée « ${vis[1]} ${vis[2]} ${vis[3]} »`);
    }
  }
}

if (errors) {
  console.error(`\n${errors} problème(s).`);
  process.exit(1);
}
console.log('  \x1b[32m✓\x1b[0m Garde-fous éditoriaux : OK');
