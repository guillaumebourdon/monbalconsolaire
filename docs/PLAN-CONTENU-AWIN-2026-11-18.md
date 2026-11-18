# Plan de contenu — nouveaux annonceurs Awin (18/11/2026)

Plan seulement : aucun article écrit. **Aucun lien vers ces annonceurs avant leur acceptation** sur Awin (compte éditeur 3140099).

## État des annonceurs au 18/11/2026

| Annonceur | Statut Awin | Ce qu'il vend en France (vérifié le 18/11) | À vérifier avant d'écrire |
|---|---|---|---|
| **Vatrer** | Accepté le 18/11 (inscription directe). ID trouvé sur le profil public : **119703** (« Vatrer Affiliate Program », listé région US). Ajouté dans `src/lib/affiliate.ts`, sans helper ni lien | Batteries LiFePO4 12 V (12, 50, 100, 200, 300, 400, 460 Ah) sur `vatrerpower.com/fr/...` (pages en français). Ce ne sont **pas** des batteries de balcon plug-and-play : il faut un onduleur ou une station | L'ID 119703 correspond-il bien au programme accepté (US ou EU) ? Livraison depuis un entrepôt UE, délais et garantie pour la France. Le site bloque `curl` (Cloudflare) : vérifier chaque fiche dans un navigateur |
| **Deye** | En attente | Micro-onduleur SUN-M80G4-EU-Q0 (800 W, 2 MPPT, Wi-Fi, relais intégré), pages produit `deye.com/fr/product/sun-m60-80-100g4-eu-q0` (200 OK) ; kit de balcon avec stockage AE-FS2.0-2H2 (LFP 2 kWh, extensible à 10 kWh avec AE-F2.0, panneaux non inclus) sur `deyestore.com` (200 OK) | Lequel des sites est le programme Awin (deye.com ou deyestore.com). Prix et garantie : ils varient d'une page à l'autre (SUN-M80G4 de 102 à 151 € ; AE-FS2.0 de 595 à 845 €, une page « épuisé » ; garantie onduleur 10 ou 15 ans selon les pages). Livraison France |
| **Darty** | En attente | Stations électriques EcoFlow (ex. DELTA 3, fiche « vendu et expédié par Darty ») et page de test DELTA 3 sur darty.com | Le site renvoie 403 à `curl` : vérifier dans un navigateur. Distinguer « vendu par Darty » de la marketplace. Kits de balcon : rien trouvé pour l'instant |
| **Fnac** | En attente | Stations électriques Bluetti (AC2P, AC50P, AC70P avec panneau), EcoFlow (RIVER 2 Max, panneaux portables), catégorie « station énergie portable » | 403 à `curl`. Beaucoup d'offres marketplace (`/mp…`) : ne lier qu'une offre vendue par Fnac ou un vendeur identifié |
| **Cdiscount** | En attente | Catégorie « kit solaire » (dont kits 800 W plug-and-play avec batterie), EcoFlow DELTA 3 / DELTA 3 Plus / RIVER 3 | Majorité de vendeurs tiers : vérifier vendeur, prise française, certificat de découplage du micro-onduleur (voir garde-fou de `blog/micro-onduleur-solaire-fonctionnement`) |

Règles qui s'appliquent à tous les sujets : prix lus dans `src/data/products.ts` (ajouter le produit avec `verifiedOn`), ROI via `pricing.ts`, badge « Avis · Analyse », 2-3 CTA maximum, `rel="sponsored noopener"`, aucune critique d'une marque partenaire dans l'article (erreurs signalées en privé), pas de vécu inventé.

## Sujets (8)

### 1. Avis Deye AE-FS2.0 : batterie de balcon 2 kWh
- **Requête visée** : « deye ae-fs2.0 avis », « batterie balcon deye »
- **Angle** : la batterie de balcon la moins connue du comparatif ; prix/kWh face au Zendure SolarFlow 800 Plus et à l'EcoFlow STREAM Ultra, extension jusqu'à 10 kWh, panneaux non inclus, SAV en Allemagne (Sinzig, d'après deyestore.com).
- **Produits** : Deye AE-FS2.0-2H2, module AE-F2.0
- **Annonceur** : Deye
- **Page** : **nouvelle** `avis/deye-ae-fs2` (un mardi), puis ligne ajoutée dans `comparatif/meilleure-batterie-solaire-balcon-2026` et `comparatif/kit-solaire-batterie-2026`

### 2. Mise à jour du comparatif micro-onduleurs avec le Deye SUN-M80G4
- **Requête visée** : « meilleur micro-onduleur 800w », « deye sun-m80g4 avis »
- **Angle** : le Deye est déjà cité (Wi-Fi intégré, G4) ; ajouter une ligne au tableau face au Hoymiles HMS-800W-2T et à l'APsystems EZ1-M, avec prix du jour et garantie réellement affichée.
- **Produits** : Deye SUN-M80G4-EU-Q0
- **Annonceur** : Deye
- **Page** : **existante** `comparatif/meilleur-micro-onduleur-2026` (+ un lien dans `blog/micro-onduleur-solaire-fonctionnement`)

### 3. Station électrique pour les coupures de courant cet hiver
- **Requête visée** : « station électrique coupure de courant », « groupe électrogène silencieux appartement »
- **Angle** : déjà au pipeline (`station-electrique-coupure-courant`). Ce qu'un kit de balcon ne fait pas (pas de courant pendant une coupure) et ce qu'une station fait ; capacité utile pour frigo + box + éclairage, recharge par panneau.
- **Produits** : EcoFlow DELTA 3 / RIVER 3, Bluetti AC70P / AC180P, Jackery
- **Annonceurs** : Darty, Fnac, Cdiscount (et EcoFlow déjà actif)
- **Page** : **nouvelle** `blog/station-electrique-coupure-courant`

### 4. Rafraîchir le comparatif des batteries portables solaires
- **Requête visée** : « batterie portable solaire comparatif », « station électrique portable 2026 »
- **Angle** : la page est en noindex (hors sujet balcon, liens conservés). La mettre à jour avec les offres des enseignes (prix du jour, vendeur) ; la laisser en noindex sauf décision de Guillaume.
- **Produits** : EcoFlow RIVER 3, DELTA 3 Plus, Bluetti AC50P, AC2P
- **Annonceurs** : Fnac, Darty, Cdiscount
- **Page** : **existante** `blog/batteries-portables-solaires-comparatif`

### 5. Kit solaire balcon vs kit camping-car / van
- **Requête visée** : « kit solaire camping-car », « batterie lithium camping-car 12v »
- **Angle** : déjà au calendrier (`kit-solaire-balcon-vs-camping-car`). Deux usages, deux architectures : injection 230 V sur prise (balcon) contre 12 V avec batterie lithium, régulateur MPPT et convertisseur (van). C'est le seul endroit du site où une batterie 12 V Vatrer est réellement utile.
- **Produits** : Vatrer 12 V 100 Ah et 200 Ah LiFePO4 ; kits de balcon déjà analysés
- **Annonceur** : Vatrer (seul annonceur accepté de cette liste)
- **Page** : **nouvelle** `comparatif/kit-solaire-balcon-vs-camping-car`

### 6. Batterie LiFePO4 12 V : peut-on l'utiliser avec un panneau de balcon ?
- **Requête visée** : « batterie lithium 12v panneau solaire », « lifepo4 100ah panneau solaire »
- **Angle** : question fréquente de qui veut stocker sans acheter une batterie de balcon. Réponse honnête : possible en site isolé (abri, cabane, van) avec régulateur et convertisseur, **pas** en couplage au réseau sur prise ; comparer le coût au kWh avec une batterie de balcon tout-en-un.
- **Produits** : Vatrer 12 V 100 Ah, 200 Ah
- **Annonceur** : Vatrer
- **Page** : **nouvelle** `guide/batterie-lithium-12v-panneau-solaire`, liée depuis `guide/batterie-solaire-balcon-guide`

### 7. Kits solaires de balcon vendus chez Cdiscount, Darty et Fnac : ce qu'il faut vérifier
- **Requête visée** : « kit solaire balcon cdiscount », « kit solaire plug and play darty »
- **Angle** : prolonger `blog/kit-solaire-plug-and-play-arnaque` et `blog/mini-kits-solaires-amazon` : vendeur réel, prise, certificat de découplage, garantie, puissance réelle des panneaux. Mettre en avant seulement des offres vérifiées une par une.
- **Produits** : kits 800 W plug-and-play vendus par ces enseignes (à relever le jour de l'écriture)
- **Annonceurs** : Cdiscount, Darty, Fnac
- **Page** : **nouvelle** `guide/acheter-kit-solaire-grande-surface` (ou section dans `comparatif/kit-solaire-petit-budget` si peu d'offres sérieuses)

### 8. Black Friday et Noël : ajouter les enseignes
- **Requête visée** : « black friday kit solaire », « station électrique black friday »
- **Angle** : les articles du calendrier (`black-friday-kit-solaire-2026`, `idees-cadeaux-solaire-noel`) et `codes-promo` ; ajouter une offre par enseigne seulement si elle est datée (`endsAt`) et vérifiée.
- **Produits** : stations EcoFlow / Bluetti, kits
- **Annonceurs** : Darty, Fnac, Cdiscount
- **Page** : **existantes** (`codes-promo`) et **prévues au calendrier**

## Ordre conseillé

1. Sujet 5 (Vatrer accepté, sujet déjà au calendrier).
2. Sujets 1 et 2 dès l'acceptation de Deye (le comparatif micro-onduleurs et les batteries sont les pages qui rapportent des clics).
3. Sujets 3 et 8 selon les acceptations Darty / Fnac / Cdiscount, avant mi-décembre pour la saison.
4. Sujets 4, 6 et 7 ensuite.

## Sources consultées le 18/11/2026
- Vatrer : https://ui.awin.com/merchant-profile/119703 ; https://www.affilitizer.com/programs/vatrerpower.com ; https://vatrerpower.com/fr/products/vatrer-12v-100ah-lifepo4-lithium-battery-low-temp-cutoff-built-in-100a-bms
- Deye : https://deye.com/fr/product/sun-m60-80-100g4-eu-q0 ; https://www.deyestore.com/products/deye-balcony-power-plant-with-storage-ae-fs2-0-2h2
- Darty : https://www.darty.com/nav/achat/ref/MC352318362.html ; https://www.darty.com/darty-et-vous/maison/confort-de-la-maison/equipements-malins/presentation-et-test-de-la-station-electrique-portable-ecoflow-delta-3
- Fnac : https://www.fnac.com/bricolage/station-energie-portable/q ; https://www.fnac.com/EcoFlow/m606243/w-4
- Cdiscount : https://www.cdiscount.com/bricolage/r-kit+solaire.html ; https://www.cdiscount.com/bricolage/r-ecoflow+delta.html
