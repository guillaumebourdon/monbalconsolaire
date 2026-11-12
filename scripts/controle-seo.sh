#!/bin/bash
# Contrôle HTTP / canonical / robots / sitemap / redirections après le chantier du 12/11/2026.
# Usage : bash scripts/controle-seo.sh https://monbalconsolaire.fr   (ou http://localhost:3000)
BASE="${1:-http://localhost:3000}"
UA="Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"

page() {
  local path="$1"
  local html code
  code=$(curl -s -o /tmp/mbs-controle.html -w "%{http_code}" -A "$UA" "$BASE$path")
  html=$(cat /tmp/mbs-controle.html)
  local canon robots
  canon=$(echo "$html" | grep -o '<link rel="canonical" href="[^"]*"' | sed 's/.*href="//;s/"$//')
  robots=$(echo "$html" | grep -o '<meta name="robots" content="[^"]*"' | sed 's/.*content="//;s/"$//')
  printf "%-62s %s  robots=%-16s canonical=%s\n" "$path" "$code" "${robots:-(absent)}" "$canon"
}

redir() {
  local path="$1"
  echo "$path $(curl -s -o /dev/null -A "$UA" -w '%{http_code} -> %{redirect_url}' "$BASE$path")"
}

echo "== Pages régionales"
for r in auvergne-rhone-alpes bourgogne-franche-comte bretagne centre-val-de-loire corse grand-est hauts-de-france ile-de-france normandie nouvelle-aquitaine occitanie pays-de-la-loire provence-alpes-cote-d-azur; do
  page "/solaire-balcon/region/$r"
done
echo "== Départements (pilotes, Côtes-d'Armor, témoins en noindex)"
for d in haute-garonne herault nord cotes-d-armor paris rhone bouches-du-rhone gironde; do page "/solaire-balcon/$d"; done
echo "== Hubs et articles modifiés"
for p in /solaire-balcon /etude/rentabilite-kit-solaire-balcon-departement /guide/orientation-panneau-solaire-balcon /guide/declaration-cacsi-enedis-panneau-solaire /guide/reglementation-panneau-solaire-balcon-2026 /blog/lampes-solaires-balcon-2026 /blog/batteries-portables-solaires-comparatif /blog/mini-kits-solaires-amazon /methodologie /calculateur; do page "$p"; done
echo "== Redirections"
for p in /blog/panneau-solaire-est-ouest /blog/panneau-solaire-balcon-nord /blog/panneau-solaire-ombre-optimiser-production; do redir "$p"; done
echo "== Sitemap"
curl -s -A "$UA" "$BASE/sitemap.xml" -o /tmp/mbs-sitemap.xml
echo "URL dans le sitemap : $(grep -c '<loc>' /tmp/mbs-sitemap.xml)"
echo "Pages régionales : $(grep -c '/solaire-balcon/region/' /tmp/mbs-sitemap.xml)"
for u in haute-garonne herault nord cotes-d-armor; do grep -q "/solaire-balcon/$u</loc>" /tmp/mbs-sitemap.xml && echo "présent : /solaire-balcon/$u"; done
for u in panneau-solaire-est-ouest panneau-solaire-balcon-nord panneau-solaire-ombre-optimiser-production lampes-solaires-balcon-2026 batteries-portables-solaires-comparatif mini-kits-solaires-amazon; do grep -q "/blog/$u</loc>" /tmp/mbs-sitemap.xml && echo "ERREUR, encore présent : /blog/$u"; done
echo "Répartition des lastmod :"
grep -o '<lastmod>[^<]*' /tmp/mbs-sitemap.xml | cut -c10-19 | sort | uniq -c | sort -rn | head -8
