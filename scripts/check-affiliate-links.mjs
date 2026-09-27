#!/usr/bin/env node

/**
 * Vérifie tous les liens marchands / affiliés présents dans src/.
 *   - URLs marchandes (Sunology, Beem, EcoFlow, Zendure, Amazon…) : HTTP 200 attendu
 *   - Liens Amazon : tag monbalconsolai-21 obligatoire, fiche produit existante
 *
 * Usage : node scripts/check-affiliate-links.mjs
 * Code de sortie 1 si au moins un lien est cassé ou non tagué.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = join(import.meta.dirname, '..');
const SRC = join(ROOT, 'src');
const AMAZON_TAG = 'monbalconsolai-21';
const MERCHANTS = /https?:\/\/(?:www\.|fr\.)?(?:amazon\.fr|sunology\.eu|beemenergy\.fr|beem\.energy|sunethic\.fr|ecoflow\.com|fr\.ecoflow\.com|zendure\.fr|zendure\.com|bluettipower\.eu|fr\.bluettipower\.eu|jackery\.com|fr\.jackery\.com|anker\.com|dualsun\.com|hoymiles\.com)[^\s'"`<>)]*/g;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(tsx?|mjs)$/.test(f) ? [p] : [];
  });
}

const occurrences = new Map(); // url -> [files]
for (const file of walk(SRC)) {
  const text = readFileSync(file, 'utf-8');
  for (const m of text.matchAll(MERCHANTS)) {
    const url = m[0].replace(/[.,;]+$/, '');
    if (!occurrences.has(url)) occurrences.set(url, new Set());
    occurrences.get(url).add(relative(ROOT, file));
  }
}

async function check(url) {
  const isAmazon = url.includes('amazon.fr');
  if (isAmazon && !url.includes(`tag=${AMAZON_TAG}`)) return { ok: false, reason: 'tag Amazon manquant' };
  // Les liens de recherche Amazon (/s?k=) sont toujours valides
  if (isAmazon && /amazon\.fr\/s\?/.test(url)) return { ok: true };
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': UA, 'Accept-Language': 'fr-FR' }, signal: AbortSignal.timeout(20000) });
    if (res.status === 404 || res.status === 410) return { ok: false, reason: `HTTP ${res.status}` };
    if (isAmazon) {
      const html = await res.text();
      if (/Page introuvable/i.test(html)) return { ok: false, reason: 'fiche Amazon introuvable' };
    }
    // 403/503 = anti-bot (Leroy Merlin, Amazon parfois) : non concluant, on ne bloque pas
    if (res.status >= 400) return { ok: true, warn: `HTTP ${res.status} (anti-bot probable)` };
    return { ok: true };
  } catch (e) {
    return { ok: true, warn: `non joignable (${e.name})` };
  }
}

let broken = 0;
const urls = [...occurrences.keys()].sort();
for (const url of urls) {
  const r = await check(url);
  const files = [...occurrences.get(url)];
  if (!r.ok) {
    broken++;
    console.error(`\x1b[31m✗\x1b[0m ${url} — ${r.reason}\n    ${files.join('\n    ')}`);
  } else if (r.warn) {
    console.warn(`\x1b[33m!\x1b[0m ${url} — ${r.warn}`);
  }
}
console.log(`\n${urls.length} liens marchands vérifiés, ${broken} cassé(s).`);
process.exit(broken ? 1 : 0);
