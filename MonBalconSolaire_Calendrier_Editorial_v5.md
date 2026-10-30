# Calendrier éditorial v5 — MonBalconSolaire (octobre → décembre 2026)

> Créé le 27 septembre 2026 (le v4 s'arrêtait au 28/08 : la routine n'avait plus rien à publier)
> Rythme (**3 contenus par semaine depuis le 03/11/2026**, validé par Guillaume le 30/10) : **mardi = NOUVEL AVIS produit** · **jeudi = MISE À JOUR** (mise à jour SEO, codes promo, ou article de saison quand c'est indiqué) · **vendredi = NOUVEAU COMPARATIF** (« X vs Y » ou « meilleur … 2026 »). Avant : mardi = mise à jour SEO, jeudi = mise à jour, vendredi = seul nouvel article (7 nouveaux contenus en octobre, dont 1 avis).
> Pourquoi (point du 30/10) : la page n°1 du site est un comparatif « X vs Y » (Zendure vs Sunology vs Beem, 22 des 58 clics Google d'octobre), suivie des avis produit ; les articles de blog généraux ramènent peu. Détail : ~/Desktop/missions-30-10/5-publications-mbs.md.
> Priorité de la période : **regagner des positions sur les pages qui rapportent (avis, comparatifs, guides)** + saisonnalité Q4 (Black Friday, Noël).
> Pourquoi : bilan du 12/10 — position moyenne Google passée de ~9 (juillet) à ~16 ; les avis Beem 300W / Sunology PLAY / Beem 460W ont perdu 60-80 % de leurs impressions ; les articles accessoires publiés depuis août ne reçoivent presque aucune impression.
> **Articles accessoires Amazon : RÉACTIVÉS le 12/10/2026** (compte Club Partenaires créé, tracking ID vérifié `monbalconsola-21`). Ils restent secondaires : au maximum 1 vendredi sur 2, en piochant dans la section Accessoires du Pipeline. Les mardis restent des MISE À JOUR SEO.
> Déjà publiés le 27/09 : support-fixation-panneau-solaire-balcon, wattmetre-prise-mesurer-consommation, guirlande-solaire-balcon

## Règles propres aux articles ACCESSOIRES (Amazon)

1. Chaque produit recommandé = un lien Amazon **vérifié** :
   - trouver l'ASIN via WebSearch (domaine amazon.fr),
   - valider : `curl -s -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36' -H 'Accept-Language: fr-FR' https://www.amazon.fr/dp/ASIN | grep -o '<title>[^<]*'` (le titre doit correspondre, « Page introuvable » = invalide),
   - format : `https://www.amazon.fr/dp/ASIN?tag=monbalconsola-21`, sinon lien de recherche tagué `https://www.amazon.fr/s?k=REQUETE&tag=monbalconsola-21`.
2. 5 à 8 produits par sélection, cartes avec points forts / limites + lien « Voir sur Amazon » (`target="_blank" rel="sponsored noopener"`), 2-3 AffiliateCTA max.
3. Prix : fourchettes sourcées « prix constaté {mois} 2026 », jamais inventés. Produits « sélectionnés / analysés », jamais « testés ».
4. Ajouter l'article au hub `src/app/accessoires/page.tsx` (tableau ARTICLES) en plus des index habituels.
5. Avant le push : `node scripts/check-affiliate-links.mjs` doit afficher 0 cassé.

---

## Semaine 40 — 29 sept. - 2 oct.

### Mardi 29/09 — NOUVEL ARTICLE — BLOG (accessoire) — [x] publié
**Prise extérieure étanche et rallonge pour kit solaire balcon (IP44, IP66)** — slug `prise-exterieure-etanche-kit-solaire`
Mots-clés : prise extérieure étanche, rallonge extérieure, prise IP44 balcon. Sécurité (30 mA, section câble, pas de multiprise), sélection Amazon (prises en saillie, blocs étanches, rallonges H07RN-F). Lien vers guide installer-kit-solaire-balcon et réglementation.

### Jeudi 01/10 — MISE À JOUR
**Rafraîchir : codes-promo** — vérifier toutes les offres (sites officiels), mettre à jour `VERIFIED`, dates `endsAt`, textes « En bref », FAQ. Ajouter les opérations d'octobre.

### Vendredi 02/10 — NOUVEL ARTICLE — BLOG — [x] remplacé (sujet déjà couvert)
**Kit solaire balcon en hiver : combien il produit vraiment (et faut-il acheter en octobre ?)** — slug `kit-solaire-balcon-hiver`
Production mensuelle oct-mars via PVGIS/pricing.ts, vertical vs incliné, neige/ombre basse, prix hors saison. Liens : bilan-6-mois, production-solaire-ete-vs-hiver.
**02/10 — étape 5 (vérification doublon) :** sujet déjà largement couvert par `blog/panneau-solaire-hiver-production` et `blog/production-solaire-ete-vs-hiver` (même angle production hivernale). Remplacé par le premier élément Pipeline sans dépendance Amazon (voir ci-dessous) — validation réseau des ASIN impossible dans cet environnement (egress proxy bloqué, cf. commit). Le sujet hiver/achat-octobre reste disponible pour un prochain créneau s'il est retravaillé sous un angle réellement distinct (ex. vertical vs incliné, prix hors-saison).

## Semaine 41 — 6-9 oct.

### Mardi 06/10 — NOUVEL ARTICLE — BLOG (accessoire) — [x] remplacé (validation Amazon impossible)
**Shelly Pro 3EM, Shelly EM, compteur d'énergie : piloter sa batterie et viser zéro injection** — slug `compteur-energie-shelly-kit-solaire`
Compatibilités Zendure / EcoFlow / Anker / Sunology, installation au tableau (électricien), sélection Amazon.
**06/10 — étape 5/validation :** sujet non dupliqué (vérifié), mais egress réseau vers amazon.fr toujours bloqué dans cet environnement (gateway proxy 403 sur CONNECT, même blocage que le 02/10) — impossible de valider les ASIN avec le curl exigé par la méthodologie. Remplacé par le premier élément non-Amazon du Pipeline (voir ci-dessous) pour ne pas publier de liens affiliés non vérifiés. Le sujet Shelly reste disponible pour un prochain créneau accessoire si la validation réseau redevient possible, ou à publier manuellement par Guillaume après vérification des ASIN (candidats identifiés : Shelly Pro 3EM-3CT63 B0DJF6VQHK, Shelly 3EM B07ZHLP7R8, Shelly EM Gen3 + Clamp 50A B0DKFY2ZNV — non validés par curl).

### Jeudi 08/10 — MISE À JOUR
**Rafraîchir : avis Beem (kit-300w, on-500w, on-460w)** — prix actuels, disponibilité, situation de l'entreprise (procédure de sauvegarde), liens marchands (script check-affiliate-links).

### Vendredi 09/10 — NOUVEL ARTICLE — AVIS — [x] publié
**Sunology GO : avis** — slug `sunology-go` (successeur du CITY). ProductHero, SchemaProduct, fiche technique vérifiée sur sunology.eu, ROI via pricing.ts, comparatif vs PLAY / Beem Kit.

## Semaine 42 — 13-16 oct.

### Mardi 13/10 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : guide/reglementation-panneau-solaire-balcon-2026** — 230 impressions/mois en position ~7 mais taux de clic 1,7 % → réécrire title + description (plus concrets : « faut-il déclarer », « 2026 »), vérifier l'actualité Enedis/Consuel/NF C 15-100, ajouter les questions réelles en FAQ, date « mis à jour ».

### Jeudi 15/10 — MISE À JOUR
**Rafraîchir : comparatif meilleur-kit-solaire-2026** — prix, nouveaux produits (Sunology GO, PLAY 500 W), cohérence ROI avec pricing.ts, signal fraîcheur « mis à jour octobre 2026 ».

### Vendredi 16/10 — NOUVEL ARTICLE — COMPARATIF — [x] publié
**Meilleur micro-onduleur 2026 : Hoymiles vs APsystems vs Enphase vs Deye** — slug `meilleur-micro-onduleur-2026`
S'appuyer sur blog/micro-onduleur-solaire-fonctionnement (ne pas dupliquer : angle achat), liens Amazon vérifiés.
**16/10 — note affiliation :** egress réseau vers amazon.fr et les revendeurs (Wattuneed, 123Elec…) bloqué dans cet environnement (même blocage que le 02/10 et le 06/10) — impossible de valider un nouvel ASIN par curl. L'article réutilise donc uniquement le lien Amazon Hoymiles HMS-800W-2T (`B0CJGL65DS`) déjà vérifié et publié dans avis/hoymiles-hms-800w ; aucun nouvel ASIN non vérifié n'a été ajouté. APsystems/Enphase/Deye sont couverts sans lien affilié (prix sourcés par recherche web, non Amazon).

## Semaine 43 — 20-23 oct.

### Mardi 20/10 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : blog/micro-onduleur-solaire-fonctionnement** — ~200 impressions mais position ~52 : la page ne répond pas à l'intention. Recentrer sur les questions concrètes (rôle, choix, puissance, compatibilité), lier le comparatif meilleur-micro-onduleur-2026 publié le 16/10.

### Jeudi 22/10 — MISE À JOUR
**Cohérence prix Beem Kit 300W** — (les mentions du 460W ont été corrigées le 12/10.) Le Beem Kit 300W est passé à 199 € et est en rupture chez Beem (vérifié le 12/10) : corriger les « 299 € » / ROI 5,5 ans encore présents (page d'accueil, comparatif/meilleur-kit-solaire-2026 si pas fait le 15/10, blog/panneau-solaire-est-ouest, avis/ikea-solstrale-balcon, src/app/solaire-balcon/[slug]/page.tsx, comparatifs petit budget…) et signaler la rupture. Grep `299` + `300W`. ROI via pricing.ts.

### Vendredi 23/10 — NOUVEL ARTICLE — BLOG — [x] publié
**Dégradation d'un panneau solaire : que reste-t-il après 10, 20, 25 ans ?** — slug `degradation-panneau-solaire-25-ans`
Garanties de performance, taux annuels (TOPCon, back-contact, PERC), impact sur ROI (pricing.ts).
**23/10 :** taux sourcés (revue NREL Jordan &amp; Kurtz + fiches constructeurs 2026), garanties réelles des kits déjà analysés sur le site (Sunology PLAY, DualSun PREASY, Beem Kit 300W), impact ROI calculé via pricing.ts (−4 à −7 % sur 25 ans selon la technologie). 3 backlinks ajoutés (sunology-play-2, canicule, produit-moins-que-prevu).

## Semaine 44 — 27-30 oct.

### Mardi 27/10 — MISE À JOUR SEO (remplace l'article accessoire) — [x] publié
**Rafraîchir : guide/panneau-solaire-copropriete** — position passée de ~8,6 (juillet) à ~33 : rafraîchir (règles AG, loi Climat, modèle de demande au syndic), FAQ, sources datées.
**27/10 :** title/description réécrits (plus incitatifs, mot-clé « balcon » et intention « autorisation AG » en premier) ; vérification web des 3 points juridiques (loi APER 2023-175 art. 44/24 II k toujours en vigueur sans réforme 2025-2026, art. R421-17 C. urb. inchangé) ; précision apportée sur la fin de la prime à l'autoconsommation (arrêté : DCR validées par Enedis à partir du **5 juin 2026**, et non « juin 2026 » comme écrit avant, remplacée par un tarif de rachat du surplus à 1,1 c&euro;/kWh HT indexé 2 %/an) ; tableau « quel kit choisir » mis à jour (Sunology CITY arrêté retiré, lien ajouté vers l'avis Sunology GO publié le 09/10) ; date visible et `dateModified` passés au 27/10/2026, `lastModified` sitemap mis à jour.

### Jeudi 29/10 — MISE À JOUR
**Rafraîchir : avis Sunology (PLAY, PLAYMax, CITY arrêté)** — prix, versions, liens.

### Vendredi 30/10 — NOUVEL ARTICLE — COMPARATIF — [x] publié
**Applis de suivi solaire : Beem vs Sunology vs EcoFlow vs Zendure vs Shelly** — slug `application-suivi-production-solaire`
**30/10 :** sujet vérifié non dupliqué (distinct de `blog/prises-connectees-suivi-solaire`, qui couvre les prises tierces, pas les apps des fabricants). Fonctionnalités sourcées par recherche web (fiches officielles + forum Zendure + avis clients) et recoupées avec les pages déjà publiées sur le site (avis Zendure SolarFlow, Beem On 500W, Sunology PLAY, EcoFlow PowerStream). Pas de nouveau lien Amazon : 2 AffiliateCTA réutilisant des liens déjà vérifiés et publiés (Sunology, Beem). 3 backlinks ajoutés (avis/zendure-solarflow, avis/ecoflow-powerstream, blog/prises-connectees-suivi-solaire).

## Semaine 45 — 3-6 nov. (début du rythme 3 contenus / semaine)

### Mardi 03/11 — NOUVEL ARTICLE — AVIS
**EcoFlow STREAM Ultra : avis** — slug `ecoflow-stream-ultra` (successeur du PowerStream). Fiche vérifiée fr.ecoflow.com, ROI via pricing.ts. Couvrir aussi le STREAM Ultra Pro (déjà lié depuis le site). Affiliation : candidature EcoFlow FR envoyée sur Awin le 30/10 ; tant qu'elle n'est pas acceptée (voir `src/lib/affiliate.ts`), lien direct fr.ecoflow.com. Ajouter dans avis/ecoflow-powerstream un encadré « plus vendu en France → voir le STREAM Ultra » et un lien depuis comparatif/meilleure-batterie-solaire-balcon-2026.

### Jeudi 05/11 — MISE À JOUR
**Rafraîchir : codes-promo** (offres de novembre, annonces Black Friday).

### Vendredi 06/11 — NOUVEL ARTICLE — COMPARATIF
**Batterie solaire balcon : Zendure SolarFlow vs Sunology VAULT vs Beem Battery vs EcoFlow STREAM** — slug `batterie-zendure-vs-sunology-vs-beem-vs-ecoflow`
Même format que comparatif/zendure-vs-sunology-vs-beem (notre page n°1) : tableau capacité / puissance / prix / €/kWh / compatibilité kits, verdict par profil, ROI avec batterie via pricing.ts (95 % d'autoconsommation). Ne pas dupliquer comparatif/meilleure-batterie-solaire-balcon-2026 (angle : les 4 marques des kits plug-and-play, pas les stations Bluetti/Jackery) ; lier les deux. Zendure : `zendureUrl()`.

## Semaine 46 — 10-13 nov.

### Mardi 10/11 — NOUVEL ARTICLE — AVIS
**Sunology VAULT : avis** — slug `sunology-vault` (batterie seule, compatibilité PLAY / GO, prix vérifié sur sunology.eu). Citée sur 25 pages du site sans avis dédié : ajouter le lien vers l'avis depuis les pages qui la citent le plus (avis PLAY, PLAYMax, comparatif batteries du 06/11).

### Jeudi 12/11 — MISE À JOUR SEO
**Rafraîchir : comparatif/zendure-vs-sunology-vs-beem + avis/zendure-solarflow** — le comparatif est notre page n°1 : le garder irréprochable (prix, gammes 2026, Sunology GO, Beem On 500W/Duo, liens vers les avis du 03/11 et du 10/11). L'avis Zendure SolarFlow est en position ~24 : prix, versions (800 Pro), title. Liens Zendure : `zendureUrl()`.

### Vendredi 13/11 — NOUVEL ARTICLE — COMPARATIF
**Micro-onduleur : APsystems EZ1-M vs Hoymiles HMS-800W** — slug `apsystems-ez1-vs-hoymiles-hms-800w`
APsystems EZ1-M est cité sur 20 pages sans avis dédié ; s'appuyer sur avis/hoymiles-hms-800w et comparatif/meilleur-micro-onduleur-2026 sans les dupliquer (angle : duel des deux modèles les plus vendus pour les kits balcon, rendement, application, garantie, prix). Lier blog/micro-onduleur-solaire-fonctionnement (en position ~57 : ce lien l'aide).

## Semaine 47 — 17-20 nov.

### Mardi 17/11 — NOUVEL ARTICLE — AVIS
**Beem Battery : avis** — slug `beem-battery` (prix et compatibilité vérifiés sur beemenergy.fr ; situation de l'entreprise : procédure de sauvegarde). Affiliation : candidature Beem Energy envoyée sur Awin le 30/10 ; lien direct tant qu'elle n'est pas acceptée.

### Jeudi 19/11 — NOUVEL ARTICLE — BLOG (saison)
**Black Friday 2026 : kits solaires et accessoires, les vraies bonnes affaires** — slug `black-friday-kit-solaire-2026`
Prix de référence des 3 derniers mois (sources), liens marchands + Amazon vérifiés, `revalidate` comme codes-promo. Ajouter aussi une section « Black Friday 2026 » avec `endsAt` dans codes-promo.

### Vendredi 20/11 — NOUVEL ARTICLE — COMPARATIF
**Kit solaire pas cher : Beem Kit 300W vs Sunethic F500 vs Sunology GO** — slug `kit-solaire-pas-cher-beem-vs-sunethic-vs-sunology-go`
Les 3 avis existent et ont des impressions (Beem 300W, Sunethic F500) : cette page fait le lien et capte « kit solaire balcon pas cher / le moins cher ». Prix du jour (Black Friday), ROI via pricing.ts, signaler la rupture éventuelle du Beem Kit 300W.

## Semaine 48 — 24-27 nov.

### Mardi 24/11 — NOUVEL ARTICLE — AVIS
**Zendure SolarFlow 800 Pro : avis** — slug `zendure-solarflow-800-pro` (successeur du SolarFlow ; fiche zendure.fr). Liens : `zendureUrl()`. Lien croisé avec avis/zendure-solarflow (bandeau « nouvelle version »).

### Jeudi 26/11 — MISE À JOUR
**Rafraîchir : black-friday-kit-solaire-2026 + codes-promo** (offres réelles du jour).

### Vendredi 27/11 — NOUVEL ARTICLE — COMPARATIF
**Kit solaire Leroy Merlin, IKEA ou marque spécialisée : lequel choisir ?** — slug `kit-solaire-leroy-merlin-ikea-vs-specialiste`
Requête « kit solaire Leroy Merlin » forte ; s'appuyer sur avis/ikea-solstrale-balcon ; comparer avec Sunology / Beem (prix, garantie, SAV, application, puissance réelle). Prix relevés sur les sites des enseignes le jour même.

## Semaine 49 — 1-4 déc.

### Mardi 01/12 — NOUVEL ARTICLE — AVIS
**Beem On Duo 1000 W : avis** — slug `beem-on-duo-1000w` (vérifier disponibilité et prix sur beemenergy.fr).

### Jeudi 03/12 — NOUVEL ARTICLE — BLOG (saison) + codes-promo
**Idées cadeaux solaires pour Noël (de 20 à 600 €)** — slug `idees-cadeaux-solaire-noel` — sélection Amazon + kits, par budget. Dans le même passage : codes-promo (fin Black Friday, offres de décembre).

### Vendredi 04/12 — NOUVEL ARTICLE — COMPARATIF
**Solarcoop vs kits de marque** — SEULEMENT si les prix et liens d'affiliation Solarcoop ont été reçus par écrit (tâche Todoist Solarcoop) et relus par Solarcoop ; sinon publier à la place **Panneau solaire pliable ou rigide : quel format pour un balcon ?** (slug `panneau-solaire-pliable-vs-rigide`, liens Amazon vérifiés pour les pliables).

## Semaine 50 — 8-11 déc.

### Mardi 08/12 — NOUVEL ARTICLE — AVIS
**Anker SOLIX Solarbank 3 : avis** — slug `anker-solix-solarbank-3` — seulement s'il est vendu en France (vérifier anker.com/fr) ; sinon premier avis non coché du Pipeline.

### Jeudi 10/12 — MISE À JOUR SEO
**Rafraîchir : ROTATION SEO** — prendre la page avis/comparatif/guide dont `dateModified` est la plus ancienne et appliquer la méthode ci-dessous. Dans le même passage : prix et disponibilité de tous les avis (`node scripts/check-affiliate-links.mjs`).

### Vendredi 11/12 — NOUVEL ARTICLE — COMPARATIF
**Panneau solaire pliable ou rigide : quel format pour un balcon ?** — slug `panneau-solaire-pliable-vs-rigide` (si déjà publié le 04/12 : **Kit solaire balcon vs kit solaire camping-car / van**, slug `kit-solaire-balcon-vs-camping-car`).

## Semaine 51 — 15-18 déc.

### Mardi 15/12 — NOUVEL ARTICLE — AVIS
**Premier avis non coché du Pipeline.**

### Jeudi 17/12 — MISE À JOUR
**Rafraîchir : aides et subventions 2027** (blog/aides-subventions-panneau-solaire-balcon-2026) — préparer la version 2027.

### Vendredi 18/12 — NOUVEL ARTICLE — COMPARATIF
**Kit solaire balcon vs kit solaire camping-car / van** — slug `kit-solaire-balcon-vs-camping-car` (si déjà publié : premier comparatif non coché du Pipeline).

## Semaine 52 — 22-25 déc.

### Mardi 22/12 — NOUVEL ARTICLE — BLOG
**Bilan 2026 du solaire de balcon en France : prix, produits, réglementation** — slug `bilan-2026-solaire-balcon`

### Jeudi 24/12 — MISE À JOUR
**Rafraîchir : tarif EDF** — vérifier si la CRE annonce une évolution au 1er février 2027 (ne modifier `pricing.ts` qu'à la date officielle).

### Vendredi 25/12 — pas de publication

## Semaine 53 — 29-31 déc.

### Mardi 29/12 — NOUVEL ARTICLE — AVIS
**Premier avis non coché du Pipeline.**

### Jeudi 31/12 — MISE À JOUR
**Rafraîchir : codes-promo** (soldes d'hiver janvier).

---

## Règles propres aux AVIS (mardis) et COMPARATIFS (vendredis)

1. Prix vérifiés sur le site officiel le jour même, specs sourcées (2-3 recherches web), jamais inventés. « Analysé », jamais « testé ». Aucun vécu inventé.
2. ROI et économies uniquement via `src/lib/pricing.ts` (`npx tsx`).
3. Vérifier qu'aucune page existante ne couvre déjà le même angle (sinon : mettre à jour la page existante et prendre le sujet suivant).
4. Liens affiliés : **Zendure = `zendureUrl()`** (`src/lib/affiliate.ts`, Awin, actif). Beem, EcoFlow, Bluetti : candidatures Awin envoyées le 30/10 ; dès qu'un annonceur est ajouté dans `AWIN_MERCHANTS`, utiliser son helper ; sinon lien direct vers le site de la marque. Amazon : règles ci-dessus.
5. Comparatif : tableau avec le produit gagnant par profil, verdict par profil (budget, stockage, simplicité), liens vers chaque avis existant (maillage), et lien depuis chaque avis cité vers le comparatif.
6. Index, sitemap, search-index, hub `quel-kit-choisir` ; `node scripts/check-affiliate-links.mjs` à 0 cassé avant push.


## Méthode « MISE À JOUR SEO » (jeudis indiqués « MISE À JOUR SEO »)

Objectif : faire remonter une page existante, pas la réécrire de zéro.
1. Lire la page entière. Vérifier prix, disponibilité, URLs marchandes (curl → 200), specs (2-3 recherches web).
2. **Title** (≤ 60 car., mot-clé principal en premier, concret et incitatif) et **description** (≤ 155 car.) : les réécrire si la page a un taux de clic faible.
3. Couvrir les intentions réelles : questions « avis », « prix », « où acheter », « avis négatifs », « vs » → section ou FAQ dédiée.
4. Recalculer tout chiffre ROI via `src/lib/pricing.ts` (`npx tsx`).
5. Date visible « Mis à jour le JJ mois AAAA », `dateModified` du SchemaArticle, `lastModified` du sitemap.
6. 3-5 liens internes pertinents (vers les avis/comparatifs qui convertissent).
7. Build + scripts de validation, commit `fix: màj SEO {JJ/MM} - {page}`, push.

## Pipeline (si un créneau est libre ou si le calendrier est épuisé)

La routine prend le **premier élément non coché**, le publie, puis le coche `[x]` dans ce fichier (même commit).
Quand il reste moins de 2 semaines de calendrier daté, la routine ajoute les 2 semaines suivantes en piochant ici, **en gardant le rythme : mardi = avis, jeudi = mise à jour, vendredi = comparatif**. Accessoires Amazon et blog : seulement sur un jeudi, au maximum 1 sur 2.

### Accessoires (Amazon) — un jeudi sur 2 maximum, à la place de la mise à jour
- [ ] Câbles et connecteurs MC4 : rallonger, raccorder, sertir (`cable-mc4-rallonge-panneau-solaire`)
- [ ] Brosse et kit de nettoyage panneau solaire (`brosse-nettoyage-panneau-solaire`)
- [ ] Station électrique portable pour les coupures d'hiver (`station-electrique-coupure-courant`)
- [ ] Projecteur solaire à détecteur (`projecteur-solaire-detecteur`)
- [ ] Chargeur et power bank solaire (`chargeur-solaire-telephone`)
- [ ] Parafoudre pour kit solaire (`parafoudre-kit-solaire-balcon`)
- [ ] Système autonome 12 V LiFePO4 + MPPT (`systeme-solaire-autonome-12v-balcon`)
- [ ] Caméra de surveillance solaire (`camera-solaire-exterieur`)
- [ ] Mini panneau solaire USB et 12 V (`mini-panneau-solaire-usb-12v`)
- [ ] Support inclinable pour panneau au sol (`support-inclinable-panneau-solaire`)
- [ ] Arrosage automatique solaire pour balcon (printemps)
- [ ] Ventilateur solaire / brumisateur balcon (été)
- [ ] Filet et pics anti-pigeons : sélection (compléter proteger-panneau-solaire-oiseaux-intemperies)
- [ ] Onduleur 12 V → 230 V pour petit système autonome
- [ ] Multimètre et pince ampèremétrique pour vérifier son installation
- [ ] Housse et protection grêle pour panneau solaire
- [ ] Thermomètre / station météo solaire connectée

### Avis (mardis)
- [ ] Anker SOLIX Solarbank 3 (si disponible en France) — daté 08/12
- [ ] Zendure SolarFlow 800 Pro — daté 24/11
- [ ] Beem Battery — daté 17/11
- [ ] APsystems EZ1-M (cité sur 20 pages)
- [ ] Sunology PLAY 500 W (si la page sunology-play ne le couvre pas déjà)

### Comparatifs (vendredis)
- [ ] Comparatif batteries plug-and-play 2027 (mise à jour annuelle du comparatif du 06/11)
- [ ] Kit avec batterie ou sans batterie : lequel est rentable ? (angle ROI pricing.ts, ne pas dupliquer comparatif/kit-solaire-batterie-2026)
- [ ] Sunology GO vs Beem On 500W

### Blog / guides
- [x] Kit solaire balcon et véhicule électrique : peut-on recharger ? — publié 02/10 (`blog/panneau-solaire-balcon-voiture-electrique`)
- [ ] Panneau solaire balcon et assurance habitation : les clauses à vérifier (déjà couvert par `guide/panneau-solaire-assurance-balcon` — à retravailler sous un angle distinct ou retirer)
- [x] Déménager avec son kit solaire : démarches (CACSI, résiliation) — publié 06/10 (`guide/demenager-kit-solaire-balcon`)

### Déjà publiés (v4)
- [x] Hoymiles HMS-800W (avis)
- [x] Panneau solaire et canicule
- [x] Lire sa facture EDF avec un kit solaire
- [x] Location meublée / Airbnb
- [x] Protéger son panneau des oiseaux et intempéries
- [x] Multi-panneaux série vs parallèle

---

## Rotation des mises à jour (jeudis sans consigne)

1. codes-promo (1er jeudi du mois, obligatoire)
2. avis : prix + disponibilité + `node scripts/check-affiliate-links.mjs`
3. comparatifs : cohérence avec `src/lib/pricing.ts`
4. hub accessoires : liens Amazon
