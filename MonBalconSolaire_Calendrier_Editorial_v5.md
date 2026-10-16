# Calendrier éditorial v5 — MonBalconSolaire (octobre → décembre 2026)

> Créé le 27 septembre 2026 (le v4 s'arrêtait au 28/08 : la routine n'avait plus rien à publier)
> Rythme (réorienté le 12/10/2026) : **mardi = mise à jour SEO d'une page qui perd des positions** · jeudi = mise à jour · vendredi = nouvel article
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

### Vendredi 23/10 — NOUVEL ARTICLE — BLOG
**Dégradation d'un panneau solaire : que reste-t-il après 10, 20, 25 ans ?** — slug `degradation-panneau-solaire-25-ans`
Garanties de performance, taux annuels (TOPCon, back-contact, PERC), impact sur ROI (pricing.ts).

## Semaine 44 — 27-30 oct.

### Mardi 27/10 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : guide/panneau-solaire-copropriete** — position passée de ~8,6 (juillet) à ~33 : rafraîchir (règles AG, loi Climat, modèle de demande au syndic), FAQ, sources datées.

### Jeudi 29/10 — MISE À JOUR
**Rafraîchir : avis Sunology (PLAY, PLAYMax, CITY arrêté)** — prix, versions, liens.

### Vendredi 30/10 — NOUVEL ARTICLE — COMPARATIF
**Applis de suivi solaire : Beem vs Sunology vs EcoFlow vs Zendure vs Shelly** — slug `application-suivi-production-solaire`

## Semaine 45 — 3-6 nov.

### Mardi 03/11 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : avis/zendure-solarflow + comparatif/zendure-vs-sunology-vs-beem** — le comparatif est notre page n°1 (19 clics/mois) : le garder irréprochable (prix, gammes 2026, Sunology GO, Beem On 500W/Duo). L'avis Zendure SolarFlow est en position ~24 : prix, versions (800 Pro), title.

### Jeudi 05/11 — MISE À JOUR
**Rafraîchir : codes-promo** (offres de novembre, annonces Black Friday).

### Vendredi 06/11 — NOUVEL ARTICLE — AVIS
**EcoFlow STREAM Ultra : avis** — slug `ecoflow-stream-ultra` (successeur du PowerStream). Fiche vérifiée fr.ecoflow.com, ROI via pricing.ts. Couvrir aussi le STREAM Ultra Pro (déjà lié depuis le site). Candidature à l'affiliation EcoFlow en cours (13/10) : si un lien affilié a été fourni d'ici là, l'utiliser ; sinon lien direct fr.ecoflow.com. Ajouter dans avis/ecoflow-powerstream un encadré « plus vendu en France → voir le STREAM Ultra » et un lien depuis comparatif/meilleure-batterie-solaire-balcon-2026.

## Semaine 46 — 10-13 nov.

### Mardi 10/11 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : guide/installer-kit-solaire-balcon + guide/declaration-cacsi-enedis-panneau-solaire** — l'installer faisait 6 clics/mois en juin (CTR 13 %) et a disparu ; le CACSI est la 2e page la plus visitée (Vercel). Rafraîchir étapes, captures/process Enedis actuel, title.

### Jeudi 12/11 — MISE À JOUR
**Rafraîchir : avis Beem (kit-300w, on-500w)** — prix, stock, Leroy Merlin, avis clients (refaits le 12/10, vérifier que rien n'a bougé).

### Vendredi 13/11 — NOUVEL ARTICLE — BLOG
**Panneau solaire pliable ou rigide : quel format pour un balcon ?** — slug `panneau-solaire-pliable-vs-rigide`
Liens Amazon vérifiés pour les pliables.

## Semaine 47 — 17-20 nov.

### Mardi 17/11 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : avis/sunology-play-max** — position ~29 : prix réel (vérifier l'écart 699 € / 1 179 € signalé le 27/09), versions, title orienté « avis Sunology PLAYMax ».

### Jeudi 19/11 — MISE À JOUR
**Préparer le Black Friday : codes-promo + comparatif meilleur-kit** — ajouter une section « Black Friday 2026 » avec `endsAt`.

### Vendredi 20/11 — NOUVEL ARTICLE — BLOG
**Black Friday 2026 : kits solaires et accessoires, les vraies bonnes affaires** — slug `black-friday-kit-solaire-2026`
Prix de référence des 3 derniers mois (sources), liens marchands + Amazon vérifiés, `revalidate` comme codes-promo.

## Semaine 48 — 24-27 nov.

### Mardi 24/11 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : avis/jackery-solarvault-3-pro + avis/dualsun-preasy** — positions 11-15 : prix, disponibilité, title/description pour gagner le clic.

### Jeudi 26/11 — MISE À JOUR
**Rafraîchir : black-friday-kit-solaire-2026** (offres réelles du jour).

### Vendredi 27/11 — NOUVEL ARTICLE — BLOG
**Idées cadeaux solaires pour Noël (de 20 à 600 €)** — slug `idees-cadeaux-solaire-noel`
Sélection Amazon + kits, par budget.

## Semaine 49 — 1-4 déc.

### Mardi 01/12 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : avis/ecoflow-powerstream + avis/sunology-city (produits arrêtés)** — rediriger clairement vers les successeurs (STREAM Ultra, PLAY), garder la page utile pour les recherches « avis » résiduelles.

### Jeudi 03/12 — MISE À JOUR
**Rafraîchir : codes-promo** (fin Black Friday, offres de décembre).

### Vendredi 04/12 — NOUVEL ARTICLE — COMPARATIF
**Kit solaire balcon vs kit solaire camping-car / van** — slug `kit-solaire-balcon-vs-camping-car`

## Semaine 50 — 8-11 déc.

### Mardi 08/12 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : ROTATION SEO** — prendre la page avis/comparatif/guide dont `dateModified` est la plus ancienne et appliquer la méthode ci-dessous.

### Jeudi 10/12 — MISE À JOUR
**Rafraîchir : tous les avis — prix et disponibilité** (script check-affiliate-links + sites officiels).

### Vendredi 11/12 — NOUVEL ARTICLE — AVIS
**Beem On Duo 1000 W : avis** — slug `beem-on-duo-1000w` (vérifier disponibilité et prix sur beemenergy.fr).

## Semaine 51 — 15-18 déc.

### Mardi 15/12 — MISE À JOUR SEO (remplace l'article accessoire)
**Rafraîchir : ROTATION SEO** — idem : page suivante la plus ancienne.

### Jeudi 17/12 — MISE À JOUR
**Rafraîchir : aides et subventions 2027** (blog/aides-subventions-panneau-solaire-balcon-2026) — préparer la version 2027.

### Vendredi 18/12 — NOUVEL ARTICLE — AVIS
**Sunology VAULT : avis** — slug `sunology-vault` (batterie seule, compatibilité).

## Semaine 52 — 22-25 déc.

### Mardi 22/12 — NOUVEL ARTICLE — BLOG
**Bilan 2026 du solaire de balcon en France : prix, produits, réglementation** — slug `bilan-2026-solaire-balcon`

### Jeudi 24/12 — MISE À JOUR
**Rafraîchir : tarif EDF** — vérifier si la CRE annonce une évolution au 1er février 2027 (ne modifier `pricing.ts` qu'à la date officielle).

### Vendredi 25/12 — pas de publication

## Semaine 53 — 29-31 déc.

### Mardi 29/12 — NOUVEL ARTICLE — PIPELINE
### Jeudi 31/12 — MISE À JOUR
**Rafraîchir : codes-promo** (soldes d'hiver janvier).

---


## Méthode « MISE À JOUR SEO » (mardis)

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
Quand il reste moins de 2 semaines de calendrier daté, la routine ajoute les 2 semaines suivantes en piochant ici (en privilégiant avis / comparatifs / guides à forte demande ; accessoire Amazon au maximum 1 vendredi sur 2).

### Accessoires (Amazon) — 1 vendredi sur 2 maximum
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

### Avis / comparatifs
- [ ] Anker SOLIX Solarbank 3 (si disponible en France)
- [ ] Zendure SolarFlow 800 Pro
- [ ] Comparatif batteries plug-and-play 2027
- [ ] Beem Battery (si prix baisse)

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
