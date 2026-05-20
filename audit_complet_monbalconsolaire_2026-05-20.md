# Audit complet MonBalconSolaire — 20 mai 2026

## État du site
- **161 pages** (38 articles + 96 départements + 27 pages structurelles)
- **Stack** : Next.js 14.2.35, React 18, Tailwind 3.4, Vercel
- **Domaine** : monbalconsolaire.fr (live, GSC + Bing soumis)

---

## SYNTHÈSE PRIORISÉE — Matrice Impact × Effort

### 🔴 QUICK WINS (< 2h)

| # | Problème | Impact | Effort | Correction |
|---|----------|--------|--------|------------|
| 1 | **Mentions légales incomplètes** : SIRET "[À compléter]", TVA "[À compléter]", adresse "Paris, France" trop vague | CRITIQUE (légal) | 15 min | Guillaume remplit SIRET, TVA, RCS, adresse complète dans mentions-legales/page.tsx |
| 2 | **Politique confidentialité mentionne "Vercel Analytics"** mais le site utilise Google Analytics (GA4 G-7CXQTZXKCR) | HAUTE (conformité CNIL) | 15 min | Remplacer "Vercel Analytics" par "Google Analytics" dans politique-confidentialite/page.tsx et mettre à jour le texte |
| 3 | **5 pages sans canonical URL** : accessoires, calculateur (layout), guide-gratuit, quel-kit-choisir, tout-savoir | HAUTE (SEO) | 20 min | Ajouter alternates.canonical dans les layouts de ces 5 pages |
| 4 | **IndexNow API key hardcodée** dans le code source (e1e73fac57094269a2a4848ef8f53108) | HAUTE (sécurité) | 15 min | Déplacer vers env var INDEXNOW_KEY |
| 5 | **stats.ts : articlesPublies = 38** mais il y en a 40+ | MOYENNE | 5 min | Recompter et corriger |
| 6 | **Date hardcodée "15/05/2026"** dans AffiliateCTA.tsx | MOYENNE | 5 min | Utiliser LAST_UPDATED de pricing.ts |

### 🟡 SPRINTS (~1 semaine)

| # | Problème | Impact | Effort | Correction |
|---|----------|--------|--------|------------|
| 7 | **Blog/Guide articles sans monétisation** : 15+ articles à fort potentiel SEO sans aucun CTA affilié | HAUTE (revenu) | 2-3h | Ajouter 1-2 AffiliateCTA pertinents par article blog/guide |
| 8 | **Zendure + DualSun : affiliateUrl vide** sur les fiches avis | HAUTE (revenu) | Variable | Négocier programmes affiliés ou ajouter liens Amazon |
| 9 | **Maillage interne faible** : blog articles ne linkent pas systématiquement vers avis/comparatifs liés | MOYENNE (SEO) | 2-3h | Ajouter "Voir aussi" sections structurées |
| 10 | **Rate limiting en mémoire** (resets au redéploiement) | MOYENNE (sécurité) | 1h | Migrer vers Upstash Redis quand configuré |
| 11 | **Codes-promo absent de la navigation principale** | MOYENNE (UX) | 15 min | Ajouter dans Header.tsx |
| 12 | **Pas de breakpoint sm: (640-768px)** | BASSE (design) | 1-2h | Ajouter sm: grids sur les pages principales |

### 🟢 CHANTIERS DE FOND (> 1 semaine)

| # | Problème | Impact | Effort | Correction |
|---|----------|--------|--------|------------|
| 13 | **Pas de recherche interne** (161 pages) | MOYENNE (UX) | 2-3 jours | Implémenter avec Algolia ou MeiliSearch |
| 14 | **Content gaps** : pas d'article sur dégradation/lifespan, garantie SAV, bruit, intégration VE | MOYENNE (SEO) | 1-2 sem | Créer 4-6 articles ciblant ces requêtes |
| 15 | **Logging en production** (10 console.error/warn) | BASSE | 1 jour | Migrer vers Sentry ou service de logging |
| 16 | **CSP header manquant** | BASSE (sécurité) | 1h | Ajouter Content-Security-Policy dans next.config.js |

---

## DÉTAIL PAR AXE

### AXE 1 — TECHNIQUE & PERFORMANCE
**Note globale : 8/10**
- ✅ Security headers complets (HSTS, X-Frame, X-Content-Type, Referrer-Policy)
- ✅ poweredByHeader: false, compress: true, image formats avif/webp
- ✅ Toutes les pages ont des metadata (title, description)
- ✅ Schema markup complet (Organization, WebSite, Article, Product, FAQ)
- ✅ Robots.txt correct, sitemap dynamique 150+ URLs
- ⚠️ IndexNow key hardcodée (devrait être env var)
- ⚠️ Rate limiting en mémoire (pas persistant)
- ⚠️ 10 console statements en production
- ⚠️ 5 pages sans canonical URL

### AXE 2 — SEO
**Note globale : 8/10**
- ✅ H1 unique sur toutes les pages index
- ✅ Meta titles 50-70 chars, descriptions 120-160 chars
- ✅ Pas de contenu dupliqué
- ✅ Pas de pages orphelines
- ✅ Alt text/aria-label sur les SVGs
- ⚠️ Maillage interne incomplet (blog → avis faible)
- ⚠️ Pas de clusters de contenu structurés
- ⚠️ 5 canonicals manquants
- ⚠️ Quelques dates hardcodées qui deviendront obsolètes

### AXE 3 — AFFILIATION & MONÉTISATION
**Note globale : 7/10**
- ✅ Tous les liens affiliés ont rel="sponsored noopener"
- ✅ AffiliateCTA component utilisé systématiquement sur les avis
- ✅ Transparence affiliation visible (comparatifs, à-propos, mentions légales)
- ✅ GA4 tracking sur les clics affiliés
- ❌ 2 fiches avis sans affiliateUrl (Zendure, DualSun) = revenu perdu
- ❌ 15+ articles blog/guide sans aucun CTA affilié = opportunité manquée
- ⚠️ Seuls Sunology et Beem génèrent du revenu actuellement

### AXE 4 — DESIGN & UI
**Note globale : 9/10**
- ✅ Système d'animation complet (5 variantes reveal, float, shimmer, glow)
- ✅ Design system cohérent (couleurs, typographie, spacing, radius, shadows)
- ✅ Font loading optimisé (next/font, swap, subset latin)
- ✅ Contrastes WCAG AA respectés (vert/charcoal sur cream)
- ✅ Mobile menu animé
- ⚠️ Amber (#E8961A) borderline sur cream pour le texte petit
- ⚠️ Pas de breakpoint sm: entre 640-768px

### AXE 5 — UX & PARCOURS
**Note globale : 8.5/10**
- ✅ Parcours clair : organique → article → calculateur → affiliation
- ✅ Toute section accessible en 2 clics
- ✅ Breadcrumbs cohérents
- ✅ Touch targets ≥ 44px (WCAG AAA)
- ✅ Calculateur intuitif avec deep-linking URL
- ✅ Skip-to-content pour accessibilité
- ⚠️ Pas de recherche interne (161 pages)
- ⚠️ Codes-promo pas dans la nav principale
- ⚠️ Blog articles sans breadcrumbs

### AXE 6 — CONTENU & STRATÉGIE
**Note globale : 8/10**
- ✅ 38+ articles couvrant les requêtes principales
- ✅ 96 pages départements (SEO programmatique)
- ✅ Bonne variété : avis, comparatifs, guides, blog, outils
- ✅ Méthodologie publique et transparente
- ⚠️ Content gaps : dégradation/lifespan, SAV/garantie, bruit, VE
- ⚠️ stats.ts pas synchronisé avec le contenu réel
- ⚠️ Homepage "Derniers articles" statique (peut devenir obsolète)

### AXE 7 — LÉGAL & CONFORMITÉ
**Note globale : 6/10** ← le point faible
- ✅ Politique confidentialité structurée RGPD
- ✅ Cookie banner opt-in avant GA4
- ✅ Disclosure affiliation visible partout
- ✅ Lien désinscription dans les emails (tokenisé)
- ❌ SIRET/TVA/RCS : placeholders "[À compléter]" — violation légale
- ❌ Adresse incomplète ("Paris, France")
- ❌ Politique mentionne "Vercel Analytics" mais utilise Google Analytics
- ⚠️ Pas de mention explicite des cookies tiers (affiliés)

---

## POINTS FORTS DU SITE

1. **Calculateur V2** — moteur de recommandation personnalisé, deep-linkable, GA4 tracké
2. **96 pages départements** — SEO programmatique avec données PVGIS réelles
3. **Méthodologie publique** — transparence totale sur les hypothèses de calcul
4. **Infrastructure email** — Brevo fonctionnel, 3 templates, lead capture sur 30+ pages
5. **Design system** — cohérent, animé, accessible (prefers-reduced-motion)
6. **E-E-A-T** — page à-propos enrichie, verdicts éditoriaux honnêtes, sources citées

---

Audit réalisé le 20 mai 2026.
