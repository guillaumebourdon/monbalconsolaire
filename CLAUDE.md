# MonBalconSolaire — Instructions Claude Code

## Projet

**MonBalconSolaire** (https://monbalconsolaire.fr) — site éditorial indépendant de guides, avis et comparatifs sur les kits solaires plug-and-play pour balcon en France.

- **Entité** : Beeleven SASU (RCS Paris 102 307 345, 7 rue Curial 75019 Paris)
- **Fondateur** : Guillaume Bourdon (solo founder)
- **Modèle** : affiliation (Amazon, Sunology, Beem, EcoFlow, Zendure) + capture email + SEO
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
- `BREVO_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `INDEXNOW_KEY`

### Design system (couleurs)
- Vert `#3D7A4A` — principale, CTA, liens
- Ambre `#E8961A` — accent, badges, highlights
- Crème `#FBF8F1` — fond
- Charcoal `#2C2C28` — texte
- Fonts : Plus Jakarta Sans (texte) + JetBrains Mono (données)

## Structure du contenu

| Section | Dossier | Nombre | Index |
|---------|---------|--------|-------|
| Avis produits | `src/app/avis/[slug]/` | ~13 | `avis/page.tsx` |
| Blog | `src/app/blog/[slug]/` | ~19 | `blog/page.tsx` |
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
- **Toujours commit + push sur main immédiatement** après chaque changement
- Build vérifié (`npm run build`) avant chaque push
- Convention : `feat:`, `fix:`, `refactor:`

### Ton éditorial
- Factuel, direct, chiffré, honnête
- Critique ouverte des marques quand justifié
- Pas de bullshit marketing ni superlatifs gratuits
- "Analysé" (pas "testé" — on n'a pas physiquement les kits)

### SEO
- Tarif EDF : **0,1940 €/kWh** partout (cohérence)
- Maillage interne bidirectionnel : 3-5 liens par article
- Entités HTML pour les accents dans le JSX (`&eacute;`, `&agrave;`, etc.)
- Canonicals sur toutes les pages

### Méthodologie ROI standard
- Tarif : 0,1940 €/kWh
- Inflation : 3,3%/an (CRE)
- Autoconsommation : 85% (sans batterie), 95% (avec batterie)
- Performance Ratio : 0,85
- Référence : Lyon, exposition sud
- Durée : 25 ans

### Affiliation
- Liens : `target="_blank" rel="sponsored noopener"`
- Boutons : classe `btn-affiliate`
- Transparence mentionnée en footer de chaque article
- 2-3 AffiliateCTA max par article
- Tracking GA4 `affiliate_click` (product_name, merchant, position, page)

---

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
| **avis** | `src/app/avis/[slug]/` | `badge-amber` "Avis et test" | `badge-green` | Test/review d'un produit spécifique |
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
  title: '...', // 60 chars max, mot-clé principal en premier
  description: '...', // 155 chars max, mot-clé dans les 80 premiers chars
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
2. Breadcrumbs + Header (badge + h1 + intro + date)
3. ProductHero (brand, name, power, price, score, tagline, affiliateUrl)
4. Présentation du produit (contexte marché + positionnement)
5. Fiche technique (tableau specs)
6. Ce qu'on aime (5-6 cards vertes `border-l-green`)
7. AffiliateCTA position="after-pros"
8. Ce qu'on aime moins (4-5 cards ambrées `border-l-amber`)
9. AffiliateCTA position="after-cons"
10. Tableau comparatif vs concurrence (produit en surbrillance `bg-green-pale/30`)
11. CTA calculateur (card centrée avec lien `/calculateur`)
12. Rentabilité et production (4 stats en grille verte)
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
```

Vérifie que chaque article est bien référencé dans son index, le sitemap et le search-index.
