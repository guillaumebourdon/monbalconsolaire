# MonBalconSolaire — Instructions Claude Code

## Projet

**MonBalconSolaire** (https://monbalconsolaire.fr) — site éditorial indépendant de guides, avis et comparatifs sur les kits solaires plug-and-play pour balcon en France.

- **Entité** : Beeleven SASU (RCS Paris 102 307 345, 7 rue Curial 75019 Paris)
- **Fondateur** : Guillaume Bourdon (solo founder)
- **Modèle** : affiliation (Amazon Partenaires ; Awin pour Zendure, EcoFlow, ALLPOWERS — voir `src/lib/affiliate.ts`) + capture email + SEO. Raison sociale à écrire partout : **Beeleven SASU** (jamais « Beélevén »)
- **Marché** : France uniquement

## Stack technique

- **Next.js 14** (App Router, TypeScript strict, output standalone)
- **Tailwind CSS 3.4** avec design system custom
- **Déploiement** : Vercel, auto sur push main
- **Repo** : `guillaumebourdon/monbalconsolaire` (GitHub)
- **Analytics** : GA4 (G-7CXQTZXKCR)
- **Email** : Brevo (API routes send-report, send-guide, subscribe-promo, unsubscribe)
- **Leads** : Upstash Redis (lib/leads.ts), taggés par source
- **Pas de CMS, pas de DB** — tout le contenu est hardcodé en TSX

### Env vars (Vercel)
- `BREVO_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `INDEXNOW_KEY`, `UNSUBSCRIBE_SECRET` (créée le 05/11/2026, valeur à ne jamais changer : elle signe les liens de désinscription déjà envoyés)

### Design system (couleurs)
- Vert `#3D7A4A` — principale, CTA, liens
- Ambre `#E8961A` — accent, fonds, bordures (**jamais en texte**) ; texte ambre = `text-amber-dark` (`#9A5B0A`, contraste ≥ 4,5:1)
- Gris texte `text-stone` = `#6B6B62` (≥ 4,5:1 sur crème) ; `text-stone-light` réservé au décor
- Crème `#FBF8F1` — fond
- Charcoal `#2C2C28` — texte
- Fonts : Plus Jakarta Sans (texte) + JetBrains Mono (données)

## Structure du contenu

| Section | Dossier | Nombre | Index |
|---------|---------|--------|-------|
| Avis produits | `src/app/avis/[slug]/` | ~13 | `avis/page.tsx` |
| Blog | `src/app/blog/[slug]/` | ~21 | `blog/page.tsx` |
| Guides | `src/app/guide/[slug]/` | ~9 | `guide/page.tsx` |
| Comparatifs | `src/app/comparatif/[slug]/` | 7 | `comparatif/page.tsx` |
| Départements | `src/app/solaire-balcon/[slug]/` | 96 | SSG programmatique |
| Pages outils | calculateur, codes-promo, guide-gratuit | 3 | — |

### Fichiers transversaux à maintenir
- `src/app/sitemap.ts` — toutes les URLs du site
- `src/lib/search-index.ts` — index recherche CMD+K (fuzzy, accents)
- `src/lib/pricing.ts` — formule ROI centralisée

### Composants partagés
- `SchemaArticle`, `SchemaFAQ`, `SchemaProduct` — Schema.org
- `ProductHero` — carte produit (brand, name, power, price, score, tagline, affiliateUrl, accentColor)
- `AffiliateCTA` — CTA affilié (productName, merchantName, affiliateUrl, label, variant, position, price)
- `Breadcrumbs` — fil d'Ariane (items: {label, href?}[])
- `NewsletterBanner` — capture email (pas de props)
- `EmailCapture` — formulaire email (honeypot, rate limit)
- `CookieConsent` — bandeau cookies
- `ProductThumb` — miniature produit cliquable (src, alt, href, size: sm|md|lg) + tracking GA4

### Images produit
- Stockées dans `public/images/produits/{slug}-{n}.{ext}`
- **ProductHero** : prop `image` + `imageAlt` pour la photo principale dans les avis
- **ProductThumb** : miniatures dans les tableaux comparatifs (size="sm") et cartes produit (size="lg")
- Lightbox intégré au ProductHero : clic sur l'image → plein écran

## Calculateur V2

Tunnel de conversion principal :
- 5 questions : département, orientation, surface, présence, budget
- Recommande 3 kits (meilleur ROI, meilleur prix, stockage)
- Seuil honnêteté : ROI > 12 ans → "pas rentable pour vous"
- Capture email → rapport enrichi via Brevo
- Calcul 100% côté client
- Formule ROI dans `lib/pricing.ts`

## Règles de travail

### Commit et déploiement
- **Toujours commit + push sur main immédiatement** après chaque changement (sauf travail sur une branche de revue : ne rien pousser sans accord de Guillaume)
- Build vérifié (`npm run build`) avant chaque push
- Convention : `feat:`, `fix:`, `refactor:`

### Ton éditorial
- Factuel, direct, chiffré, honnête
- Critique ouverte des marques quand justifié
- Pas de bullshit marketing ni superlatifs gratuits
- "Analysé" (pas "testé" — on n'a pas physiquement les kits). Badge des avis : **« Avis · Analyse »** (`Avis &middot; Analyse`), jamais « Avis et test » ni « Test complet »
- Aucune anecdote ni vécu inventé, aucun client nommé, neutralité vis-à-vis des marques

### SEO
- Tarif EDF : **jamais en dur**. Importer `KWH_PRICE_LABEL` / `KWH_PRICE_EUR` / `KWH_PRICE_SINCE` / `KWH_PRICE_SOURCE` depuis `src/lib/pricing.ts` (0,2001 €/kWh TTC, Tarif Bleu Base 6 kVA depuis le 1er août 2026, délibération CRE n° 2026-147). Dans les chaînes JS (FAQ), utiliser un template literal `${KWH_PRICE_LABEL}`. Jamais « en mai 2026, le tarif… »
- Quand le TRV change (1er février / 1er août en général) : mettre à jour UNIQUEMENT `pricing.ts` (valeur + source datée), ajouter une ligne dans l'historique de `/methodologie`, puis relancer le script de contrôle des chiffres (voir ci-dessous)
- Titres : **60 caractères max, sans « | MonBalconSolaire »** pour avis/blog/guide/comparatif (le helper `withCanonicalOg` le retire automatiquement) ; descriptions **≤ 155 caractères** ; **aucune entité HTML (`&eacute;`) dans `metadata`, `SchemaArticle` ni `faqData`** (elles s'affichent telles quelles dans Google) — caractères accentués directs
- Toujours envelopper `metadata` avec `withCanonicalOg` (og:url, og:image `[slug]/opengraph-image`, twitter:image)
- Maillage interne bidirectionnel : 3-5 liens par article
- Entités HTML pour les accents dans le JSX (`&eacute;`, `&agrave;`, etc.)
- Canonicals sur toutes les pages

### Méthodologie ROI standard
- **Source unique : `src/lib/pricing.ts`** (calculateProductionKwh, calculateROIYears…). Ne jamais écrire un ROI calculé à la main : exécuter un script `npx tsx` qui importe pricing.ts
- Tarif : `KWH_PRICE_LABEL` (0,2001 €/kWh depuis le 1er août 2026)
- Inflation : 3,3%/an (0,1263 € en 2012 → 0,2001 € en 2026)
- Dégradation des panneaux : 0,5 %/an, **intégrée au calcul** (ROI et cumul 25 ans) depuis le 05/11/2026
- Autoconsommation : 85% (sans batterie), 95% (avec batterie)
- Performance Ratio : 0,85
- Référence : Lyon, exposition sud
- Durée : 25 ans

### Prix, puissance et disponibilité des produits
- **Source unique : `src/data/products.ts`** (prix TTC, puissance, disponibilité `instock | preorder | outofstock | discontinued`, date de vérification, URL). Un prix ou une puissance ne s'écrit jamais en dur dans une page : importer `PRODUCTS` / `priceLabel()`.
- Tout changement de prix : vérifier sur la fiche officielle du fabricant le jour même (Shopify : `/products/<handle>.js`), mettre à jour `verifiedOn`. Si le marchand bloque : garder la dernière valeur vérifiée avec sa date.
- Produit en rupture ou arrêté : jamais recommandé par le calculateur ni en CTA principal ; arrêté → bouton « Voir le successeur : … ». Précommande → badge « Précommande – expédition … » et `availability="PreOrder"` dans `SchemaProduct`.
- `SchemaProduct` : **jamais de `ratingCount`/`aggregateRating`** (une note éditoriale n'est pas un agrégat d'avis), passer `image` (photo produit) quand elle existe.
- Aucune promo/code promo sans date de fin vérifiée ; retirer dès qu'elle expire.

### Affiliation
- **Amazon** : tag `monbalconsola-21` obligatoire. Format `https://www.amazon.fr/dp/ASIN?tag=monbalconsola-21`. Trouver l'ASIN via recherche web (amazon.fr), puis le valider : `curl -s -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36' -H 'Accept-Language: fr-FR' https://www.amazon.fr/dp/ASIN | grep -o '<title>[^<]*'` (« Page introuvable » = invalide). À défaut : lien de recherche tagué `https://www.amazon.fr/s?k=REQUETE&tag=monbalconsola-21`
- Les URLs marchandes changent sans prévenir : `node scripts/check-affiliate-links.mjs` avant chaque push (0 cassé exigé)
- Liens : `target="_blank" rel="sponsored noopener"`
- Boutons : classe `btn-affiliate`
- Transparence mentionnée en footer de chaque article
- 2-3 AffiliateCTA max par article
- Tracking GA4 `affiliate_click` (product_name, merchant, position, page)

---

## Calendrier éditorial

- Fichier courant : `MonBalconSolaire_Calendrier_Editorial_v5.md` (lu par la routine « Publication auto MonBalconSolaire », mar/jeu/ven 7h UTC)
- **Rythme depuis le 03/11/2026 (validé par Guillaume le 30/10) : 3 contenus par semaine** — mardi = nouvel avis produit, jeudi = mise à jour (ou article de saison si indiqué), vendredi = nouveau comparatif (« X vs Y » / « meilleur … 2026 »)
- Si aucune entrée datée pour le jour : prendre le premier élément non coché du pipeline correspondant au jour (avis le mardi, comparatif le vendredi), le publier, le cocher
- Priorité Q4 2026 : avis et comparatifs (ce qui rapporte des clics Google) ; accessoires Amazon et blog seulement un jeudi sur deux au maximum
- Liens affiliés Awin : `src/lib/affiliate.ts` (Zendure actif ; Beem, EcoFlow, Bluetti candidatés le 30/10)

## Publication d'article — Processus automatique

Quand l'utilisateur demande de publier un article, suivre **toutes** les étapes ci-dessous dans l'ordre, sans exception.

### Étape 1 — Recherche produit/sujet

- Faire **2-3 recherches web** pour collecter les specs exactes, prix actuels, avis existants
- Ne jamais inventer de specs ou de prix. Si une info n'est pas trouvée, le signaler
- Vérifier le prix TTC en France (TVA 20%)
- Noter : date de sortie, garantie, disponibilité France

### Étape 2 — Déterminer le type d'article

| Type | Dossier | Badge page | Badge index | Quand |
|------|---------|------------|-------------|-------|
| **avis** | `src/app/avis/[slug]/` | `badge-amber` "Avis · Analyse" | `badge-green` | Analyse d'un produit spécifique (pas de test physique) |
| **blog** | `src/app/blog/[slug]/` | `badge-amber` | `badge-amber` | Analyse, retour d'expérience, guide technique |
| **guide** | `src/app/guide/[slug]/` | `badge-green` | `badge-green` | Guide pratique approfondi |

### Étape 3 — Créer la page article

Fichier : `src/app/{type}/{slug}/page.tsx`

#### Structure obligatoire (tous types) :

```tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
// + ProductHero et SchemaProduct UNIQUEMENT pour les avis

export const metadata: Metadata = {
  title: '...', // 60 chars max, mot-clé principal en premier, sans suffixe de marque, sans entité HTML
  description: '...', // 155 chars max, mot-clé dans les 80 premiers chars, sans entité HTML
  alternates: { canonical: 'https://monbalconsolaire.fr/{type}/{slug}' },
};

const faqData = [
  { question: '...', answer: '...' },
  // 5-6 questions, réponses factuelles et utiles
];
```

#### Sections obligatoires par type :

**AVIS (review produit) :**
1. Schema (SchemaArticle + SchemaFAQ + SchemaProduct)
2. Breadcrumbs + Header (badge « Avis · Analyse » + h1 + intro + date ; la date « Mis à jour le … » visible = `dateModified` de SchemaArticle = `lastModified` du sitemap)
3. ProductHero (brand, name, power, price, score, tagline, affiliateUrl) — prix/puissance lus dans `src/data/products.ts`
4. Présentation du produit (contexte marché + positionnement)
5. Fiche technique (tableau specs)
6. Ce qu'on aime (5-6 cards vertes `border-l-green`)
7. AffiliateCTA position="after-pros"
8. Ce qu'on aime moins (4-5 cards ambrées `border-l-amber`)
9. AffiliateCTA position="after-cons"
10. Tableau comparatif vs concurrence (produit en surbrillance `bg-green-pale/30`)
11. CTA calculateur (card centrée avec lien `/calculateur`)
12. Rentabilité et production (4 stats en grille verte) — calculées via `pricing.ts`, jamais à la main
13. À éviter si... (liste avec croix `&#10007;`)
14. Notre verdict (note finale en `text-amber-dark text-xl font-extrabold` + lien affilié)
15. AffiliateCTA variant="box" position="footer-box"
16. FAQ (details/summary, premier ouvert)
17. Articles liés (3-4 links cards avec `border-l-green`)
18. NewsletterBanner
19. Footer méthodologie + transparence affiliés

**BLOG :**
1. Schema (SchemaArticle + SchemaFAQ, PAS de SchemaProduct)
2. Breadcrumbs + Header
3. 6-10 sections thématiques avec h2
4. AffiliateCTA si pertinent (1-2 max)
5. FAQ
6. Articles liés
7. NewsletterBanner
8. Footer

**GUIDE :**
1. Schema (SchemaArticle + SchemaFAQ)
2. Breadcrumbs + Header
3. Encadré "Ce que vous allez apprendre" (optionnel)
4. 8-12 sections avec h2/h3
5. FAQ (6 questions)
6. Articles liés
7. NewsletterBanner
8. Footer

### Étape 4 — Mettre à jour l'index

Fichier : `src/app/{type}/page.tsx`

- **avis** : ajouter en **1re position** du tableau `reviews[]` avec badge "Nouveau". Changer l'ancien "Nouveau" en un badge descriptif
- **blog** : ajouter en **1re position** du tableau `articles[]`
- **guide** : ajouter en **1re position** du tableau `articles[]`

```tsx
// AVIS
{ slug: 'xxx', title: '...', excerpt: '...', badge: 'Nouveau', score: 'X/10', price: 'XXX €' }

// BLOG
{ slug: 'xxx', title: '...', excerpt: '...', badge: '...', date: 'JJ mois AAAA', readTime: 'X min' }

// GUIDE
{ slug: 'xxx', title: '...', excerpt: '...', badge: '...', date: 'JJ mois AAAA', readTime: 'X min' }
```

### Étape 5 — Mettre à jour le sitemap

Fichier : `src/app/sitemap.ts`

```tsx
{ url: `${BASE_URL}/{type}/{slug}`, lastModified: 'YYYY-MM-DD', changeFrequency: 'monthly', priority: 0.7 }
// priority 0.8 pour les avis de produits majeurs, 0.7 sinon
```

### Étape 6 — Mettre à jour le search-index

Fichier : `src/lib/search-index.ts`

```tsx
{ title: '...', description: '...', url: '/{type}/{slug}', category: 'Avis|Blog|Guide', badge: 'X/10 ou label' }
```

### Étape 6bis — Mettre à jour les pages hub

- Pour les articles **blog** et **guide** : ajouter dans `src/app/tout-savoir/page.tsx` (tableau ARTICLES)
- Pour les articles **avis** et **comparatif** : ajouter dans `src/app/quel-kit-choisir/page.tsx` si pertinent
- Pour les articles **accessoires** (sélections produits Amazon) : ajouter aussi dans `src/app/accessoires/page.tsx` (tableau ARTICLES)

### Étape 7 — Build + Commit + Push

```bash
npm run build          # Vérifier 0 erreurs
git add [fichiers]     # Uniquement les fichiers modifiés (pas git add .)
git commit -m "feat: {type} {JJ/MM} - {titre court}"
git push origin main   # Déploiement auto Vercel
```

### Étape 8 — Validation

```bash
node scripts/validate-articles.mjs
node scripts/check-affiliate-links.mjs
```

Vérifie que chaque article est bien référencé dans son index, le sitemap et le search-index.

### Garde-fous (erreurs relevées par la revue du 05/11/2026 — ne pas réintroduire)
- `grep -rn "0,1940\|0,19[0-9][0-9] €/kWh" src` doit être vide hors `pricing.ts` (prix du kWh en dur)
- `grep -rn "ratingCount" src` doit être vide
- `grep -rn "Avis et test\|Test complet" src` doit être vide
- `grep -rn "Beélevén" src public` doit être vide
- Accessibilité : texte ambre = `text-amber-dark` ; un `h4` ne suit jamais directement un `h2` (utiliser `h3`)
- Réglementation : pas de « plafond légal » chiffré pour le plug-and-play (900 W = recommandation par circuit, NF C 15-100 point 551.7.2)
- TVA (art. 278-0 bis P du CGI, BOFiP BOI-TVA-LIQ-30-20-97-20260610) : 5,5 % depuis le 1/10/2025 pour livraison + installation dans un logement d'un équipement ≤ 9 kWc respectant l'arrêté du 8/09/2025 (bilan carbone < 530 kgCO2eq/kWc, limites argent/plomb/cadmium), avec un système de gestion de l'énergie pilotant au moins 2 usages, posé par un pro qualifié ; le 10 % ne s'applique plus depuis le 1/01/2026 (sauf devis signé avec acompte avant cette date). Kit acheté seul sans pose : « 20 % dans la plupart des cas ; le BOFiP admet 5,5 % si l'équipement remplit toutes les conditions techniques, ce que peu de kits de balcon font ». Batterie = 20 % ; vendue dans la même prestation que les panneaux, tout le lot passe à 20 %
- Prime à l'autoconsommation : supprimée pour 0-100 kWc par l'arrêté du 1er juin 2026 (JO du 4 juin 2026) pour les demandes complètes de raccordement déposées à partir du 5 juin 2026 (demandes antérieures : ancien régime). Un kit plug-and-play sur prise n'y a jamais été éligible. Tarif OA du surplus : 1,1 c€/kWh HT, tarif unique pour les demandes depuis le 5 juin 2026, indexé 2 %/an, plus de grille trimestrielle
- Pages HTML internes de `public/` (guide PDF, newsletter, bonus) : `noindex`
