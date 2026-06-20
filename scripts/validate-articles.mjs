#!/usr/bin/env node

/**
 * Validation post-publication.
 * Vérifie que chaque article existant est bien référencé dans :
 *   1. Son index (avis/page.tsx, blog/page.tsx, guide/page.tsx)
 *   2. Le sitemap (sitemap.ts)
 *   3. Le search-index (search-index.ts)
 *
 * Usage : node scripts/validate-articles.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const SRC = join(ROOT, 'src', 'app');

const SECTIONS = ['avis', 'blog', 'guide'];
const SITEMAP = readFileSync(join(SRC, 'sitemap.ts'), 'utf-8');
const SEARCH_INDEX = readFileSync(join(ROOT, 'src', 'lib', 'search-index.ts'), 'utf-8');

let errors = 0;
let warnings = 0;
let total = 0;

function error(msg) {
  console.error(`  \x1b[31m✗\x1b[0m ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`  \x1b[33m!\x1b[0m ${msg}`);
  warnings++;
}

function ok(msg) {
  console.log(`  \x1b[32m✓\x1b[0m ${msg}`);
}

for (const section of SECTIONS) {
  const sectionDir = join(SRC, section);
  if (!existsSync(sectionDir)) continue;

  const indexFile = readFileSync(join(sectionDir, 'page.tsx'), 'utf-8');
  const slugs = readdirSync(sectionDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log(`\n\x1b[1m${section.toUpperCase()}\x1b[0m (${slugs.length} articles)`);

  for (const slug of slugs) {
    total++;
    const pagePath = join(sectionDir, slug, 'page.tsx');
    if (!existsSync(pagePath)) {
      error(`${section}/${slug} — pas de page.tsx`);
      continue;
    }

    const url = `/${section}/${slug}`;
    let articleOk = true;

    // Check index
    if (!indexFile.includes(slug)) {
      error(`${slug} — manquant dans l'index ${section}/page.tsx`);
      articleOk = false;
    }

    // Check sitemap
    if (!SITEMAP.includes(slug)) {
      error(`${slug} — manquant dans sitemap.ts`);
      articleOk = false;
    }

    // Check search-index
    if (!SEARCH_INDEX.includes(url)) {
      error(`${slug} — manquant dans search-index.ts`);
      articleOk = false;
    }

    // Check page content
    const pageContent = readFileSync(pagePath, 'utf-8');

    if (!pageContent.includes('SchemaArticle')) {
      warn(`${slug} — pas de SchemaArticle`);
    }
    if (!pageContent.includes('SchemaFAQ')) {
      warn(`${slug} — pas de SchemaFAQ`);
    }
    if (!pageContent.includes('NewsletterBanner')) {
      warn(`${slug} — pas de NewsletterBanner`);
    }
    if (!pageContent.includes('Breadcrumbs')) {
      warn(`${slug} — pas de Breadcrumbs`);
    }
    if (section === 'avis' && !pageContent.includes('SchemaProduct')) {
      warn(`${slug} — avis sans SchemaProduct`);
    }
    if (section === 'avis' && !pageContent.includes('ProductHero')) {
      warn(`${slug} — avis sans ProductHero`);
    }

    // Check metadata
    if (!pageContent.includes('canonical')) {
      warn(`${slug} — pas de canonical URL`);
    }

    if (articleOk) {
      ok(slug);
    }
  }
}

// Summary
console.log('\n' + '─'.repeat(50));
console.log(`\x1b[1m${total} articles vérifiés\x1b[0m`);
if (errors > 0) {
  console.log(`\x1b[31m${errors} erreur(s)\x1b[0m — articles mal indexés`);
}
if (warnings > 0) {
  console.log(`\x1b[33m${warnings} avertissement(s)\x1b[0m — composants manquants`);
}
if (errors === 0 && warnings === 0) {
  console.log('\x1b[32mTout est OK !\x1b[0m');
}

process.exit(errors > 0 ? 1 : 0);
