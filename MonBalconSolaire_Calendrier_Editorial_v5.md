# Calendrier éditorial v5 — MonBalconSolaire (octobre → décembre 2026)

> Créé le 27 septembre 2026 (le v4 s'arrêtait au 28/08 : la routine n'avait plus rien à publier)
> Rythme : mardi = nouvel article · jeudi = mise à jour · vendredi = nouvel article
> Priorité de la période : **articles accessoires monétisés Amazon** (tag `monbalconsolai-21`) + saisonnalité Q4 (hiver, Black Friday, Noël)
> Déjà publiés le 27/09 : support-fixation-panneau-solaire-balcon, wattmetre-prise-mesurer-consommation, guirlande-solaire-balcon

## Règles propres aux articles ACCESSOIRES (Amazon)

1. Chaque produit recommandé = un lien Amazon **vérifié** :
   - trouver l'ASIN via WebSearch (domaine amazon.fr),
   - valider : `curl -s -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36' -H 'Accept-Language: fr-FR' https://www.amazon.fr/dp/ASIN | grep -o '<title>[^<]*'` (le titre doit correspondre, « Page introuvable » = invalide),
   - format : `https://www.amazon.fr/dp/ASIN?tag=monbalconsolai-21`, sinon lien de recherche tagué `https://www.amazon.fr/s?k=REQUETE&tag=monbalconsolai-21`.
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

### Mardi 13/10 — NOUVEL ARTICLE — BLOG (accessoire)
**Câbles et connecteurs MC4 : rallonger, raccorder, sertir sans risque** — slug `cable-mc4-rallonge-panneau-solaire`
Section 4/6 mm², pertes par longueur, pince à sertir, connecteurs compatibles (mélange de marques = interdit), sélection Amazon.

### Jeudi 15/10 — MISE À JOUR
**Rafraîchir : comparatif meilleur-kit-solaire-2026** — prix, nouveaux produits (Sunology GO, PLAY 500 W), cohérence ROI avec pricing.ts, signal fraîcheur « mis à jour octobre 2026 ».

### Vendredi 16/10 — NOUVEL ARTICLE — COMPARATIF
**Meilleur micro-onduleur 2026 : Hoymiles vs APsystems vs Enphase vs Deye** — slug `meilleur-micro-onduleur-2026`
S'appuyer sur blog/micro-onduleur-solaire-fonctionnement (ne pas dupliquer : angle achat), liens Amazon vérifiés.

## Semaine 43 — 20-23 oct.

### Mardi 20/10 — NOUVEL ARTICLE — BLOG (accessoire)
**Brosse et kit de nettoyage panneau solaire : lequel choisir pour un balcon** — slug `brosse-nettoyage-panneau-solaire`
Sélection Amazon (perches télescopiques, brosses douces, eau déminéralisée), ce qu'il ne faut pas utiliser. Lien vers entretien-nettoyage-panneau-solaire-balcon.

### Jeudi 22/10 — MISE À JOUR
**Rafraîchir : hub accessoires + blog/accessoires-kit-solaire-balcon** — intégrer les nouveaux articles accessoires, vérifier tous les liens Amazon.

### Vendredi 23/10 — NOUVEL ARTICLE — BLOG
**Dégradation d'un panneau solaire : que reste-t-il après 10, 20, 25 ans ?** — slug `degradation-panneau-solaire-25-ans`
Garanties de performance, taux annuels (TOPCon, back-contact, PERC), impact sur ROI (pricing.ts).

## Semaine 44 — 27-30 oct.

### Mardi 27/10 — NOUVEL ARTICLE — BLOG (accessoire)
**Station électrique portable pour les coupures de courant d'hiver** — slug `station-electrique-coupure-courant`
Angle sécurité/hiver (tempêtes), recharge par kit balcon, sélection Amazon (EcoFlow, Bluetti, Jackery, Anker). Lien batteries-portables-solaires-comparatif (ne pas dupliquer).

### Jeudi 29/10 — MISE À JOUR
**Rafraîchir : avis Sunology (PLAY, PLAYMax, CITY arrêté)** — prix, versions, liens.

### Vendredi 30/10 — NOUVEL ARTICLE — COMPARATIF
**Applis de suivi solaire : Beem vs Sunology vs EcoFlow vs Zendure vs Shelly** — slug `application-suivi-production-solaire`

## Semaine 45 — 3-6 nov.

### Mardi 03/11 — NOUVEL ARTICLE — BLOG (accessoire)
**Projecteur solaire à détecteur pour balcon et terrasse : 7 modèles qui éclairent vraiment en hiver** — slug `projecteur-solaire-detecteur`
Sélection Amazon, lumens réels, autonomie hivernale honnête. Lien lampes-solaires-balcon-2026, guirlande-solaire-balcon.

### Jeudi 05/11 — MISE À JOUR
**Rafraîchir : codes-promo** (offres de novembre, annonces Black Friday).

### Vendredi 06/11 — NOUVEL ARTICLE — AVIS
**EcoFlow STREAM Ultra : avis** — slug `ecoflow-stream-ultra` (successeur du PowerStream). Fiche vérifiée fr.ecoflow.com, ROI via pricing.ts.

## Semaine 46 — 10-13 nov.

### Mardi 10/11 — NOUVEL ARTICLE — BLOG (accessoire)
**Chargeur et power bank solaire : ce qu'on peut vraiment recharger depuis son balcon** — slug `chargeur-solaire-telephone`
Chiffres réalistes (Wh, rendement, hiver), sélection Amazon.

### Jeudi 12/11 — MISE À JOUR
**Rafraîchir : guide réglementation + guide installer** — vérifier l'actualité NF C 15-100 / Enedis / Consuel, sources.

### Vendredi 13/11 — NOUVEL ARTICLE — BLOG
**Panneau solaire pliable ou rigide : quel format pour un balcon ?** — slug `panneau-solaire-pliable-vs-rigide`
Liens Amazon vérifiés pour les pliables.

## Semaine 47 — 17-20 nov.

### Mardi 17/11 — NOUVEL ARTICLE — BLOG (accessoire)
**Parafoudre et protection contre les surtensions pour kit solaire : utile ou pas ?** — slug `parafoudre-kit-solaire-balcon`
Honnête (souvent inutile en plug-and-play), cas où c'est pertinent, sélection Amazon.

### Jeudi 19/11 — MISE À JOUR
**Préparer le Black Friday : codes-promo + comparatif meilleur-kit** — ajouter une section « Black Friday 2026 » avec `endsAt`.

### Vendredi 20/11 — NOUVEL ARTICLE — BLOG
**Black Friday 2026 : kits solaires et accessoires, les vraies bonnes affaires** — slug `black-friday-kit-solaire-2026`
Prix de référence des 3 derniers mois (sources), liens marchands + Amazon vérifiés, `revalidate` comme codes-promo.

## Semaine 48 — 24-27 nov.

### Mardi 24/11 — NOUVEL ARTICLE — BLOG (accessoire)
**Batterie LiFePO4 12 V et régulateur MPPT : monter un petit système autonome sur son balcon** — slug `systeme-solaire-autonome-12v-balcon`
DIY hors réseau (éclairage, USB), sécurité, sélection Amazon.

### Jeudi 26/11 — MISE À JOUR
**Rafraîchir : black-friday-kit-solaire-2026** (offres réelles du jour).

### Vendredi 27/11 — NOUVEL ARTICLE — BLOG
**Idées cadeaux solaires pour Noël (de 20 à 600 €)** — slug `idees-cadeaux-solaire-noel`
Sélection Amazon + kits, par budget.

## Semaine 49 — 1-4 déc.

### Mardi 01/12 — NOUVEL ARTICLE — BLOG (accessoire)
**Caméra de surveillance solaire pour balcon et extérieur : autonomie réelle en hiver** — slug `camera-solaire-exterieur`

### Jeudi 03/12 — MISE À JOUR
**Rafraîchir : codes-promo** (fin Black Friday, offres de décembre).

### Vendredi 04/12 — NOUVEL ARTICLE — COMPARATIF
**Kit solaire balcon vs kit solaire camping-car / van** — slug `kit-solaire-balcon-vs-camping-car`

## Semaine 50 — 8-11 déc.

### Mardi 08/12 — NOUVEL ARTICLE — BLOG (accessoire)
**Mini panneau solaire USB et 12 V : usages utiles sur un balcon** — slug `mini-panneau-solaire-usb-12v`

### Jeudi 10/12 — MISE À JOUR
**Rafraîchir : tous les avis — prix et disponibilité** (script check-affiliate-links + sites officiels).

### Vendredi 11/12 — NOUVEL ARTICLE — AVIS
**Beem On Duo 1000 W : avis** — slug `beem-on-duo-1000w` (vérifier disponibilité et prix sur beemenergy.fr).

## Semaine 51 — 15-18 déc.

### Mardi 15/12 — NOUVEL ARTICLE — BLOG (accessoire)
**Support inclinable pour panneau solaire au sol : gagner en production l'hiver** — slug `support-inclinable-panneau-solaire`
Angle hiver (60°), calcul via PVGIS/pricing.ts, sélection Amazon. Lien support-fixation-panneau-solaire-balcon.

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

## Pipeline (si un créneau est libre ou si le calendrier est épuisé)

La routine prend le **premier élément non coché**, le publie, puis le coche `[x]` dans ce fichier (même commit).
Quand il reste moins de 2 semaines de calendrier daté, la routine ajoute les 2 semaines suivantes en piochant ici (en alternant accessoire / autre).

### Accessoires (Amazon)
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
