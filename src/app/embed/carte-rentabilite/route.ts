import { FRANCE_DEPARTEMENTS_PATHS, FRANCE_MAP_VIEWBOX } from '@/data/france-departements-paths';
import { RENTABILITE_DEPARTEMENTS, REFERENCE_KIT, ROI_BINS, roiColor } from '@/lib/rentabilite-departements';

export const dynamic = 'force-static';

const ETUDE_URL = 'https://monbalconsolaire.fr/etude/rentabilite-kit-solaire-balcon-departement';
const UPDATED_LABEL = 'octobre 2026';

/**
 * Carte de rentabilité intégrable (iframe) pour les sites partenaires :
 * coopératives, collectivités, blogs. Page autonome, sans header/footer ni
 * cookies, servie en HTML statique. Le lien de citation est placé à côté de
 * l'iframe sur le site hôte (voir le code d'intégration sur la page de l'étude).
 */
export function GET() {
  const byCode = new Map(RENTABILITE_DEPARTEMENTS.map((r) => [r.code, r]));
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const yrs = (n: number) => String(n).replace('.', ',');

  const paths = FRANCE_DEPARTEMENTS_PATHS.map((p) => {
    const r = byCode.get(p.code)!;
    return `<path d="${p.d}" data-code="${p.code}" fill="${roiColor(r.roiYears)}"><title>${esc(r.name)} (${p.code}) : ${yrs(r.roiYears)} ans</title></path>`;
  }).join('');

  const legend = ROI_BINS.map((b) => `<li><span style="background:${b.color}"></span>${esc(b.label)}</li>`).join('');

  const options = [...RENTABILITE_DEPARTEMENTS]
    .sort((a, b) => a.code.localeCompare(b.code))
    .map((r) => `<option value="${r.code}">${r.code} · ${esc(r.name)}</option>`)
    .join('');

  const data = JSON.stringify(
    Object.fromEntries(
      RENTABILITE_DEPARTEMENTS.map((r) => [r.code, [r.name, r.productionKwh, r.savingsYear1, yrs(r.roiYears), r.rank]]),
    ),
  );

  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Rentabilité d’un kit solaire de balcon par département — MonBalconSolaire</title>
<link rel="canonical" href="${ETUDE_URL}">
<style>
*{box-sizing:border-box}
body{margin:0;padding:12px;font:14px/1.45 "Plus Jakarta Sans",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#2C2C28;background:#FBF8F1}
h1{font-size:16px;margin:0 0 4px}
.sub{margin:0 0 10px;color:#6B6B63;font-size:12px}
.wrap{display:grid;grid-template-columns:1fr 150px;gap:12px;align-items:start}
@media (max-width:520px){.wrap{grid-template-columns:1fr}}
svg{width:100%;height:auto;display:block}
path{stroke:#FBF8F1;stroke-width:1.2;stroke-linejoin:round;cursor:pointer}
path.on{stroke:#2C2C28;stroke-width:3}
select{width:100%;max-width:280px;margin:0 0 8px;padding:6px 8px;border:1px solid #E5E0D4;border-radius:8px;background:#fff;font:inherit;font-size:13px}
ul{list-style:none;margin:0;padding:0;font-size:12px}
li{display:flex;align-items:center;gap:6px;margin:0 0 5px}
li span{display:inline-block;width:16px;height:12px;border-radius:2px;border:1px solid #E5E0D4}
#info{margin-top:8px;min-height:2.8em;padding:8px 10px;border-radius:8px;background:#F3EEE2;font-size:13px}
#info strong{color:#2C2C28}
footer{margin-top:8px;font-size:11px;color:#6B6B63}
a{color:#3D7A4A;font-weight:600}
</style>
</head>
<body>
<h1>En combien d’années un kit solaire de balcon est-il rentabilisé ?</h1>
<p class="sub">Kit ${REFERENCE_KIT.powerWc} Wc à ${REFERENCE_KIT.priceEur} €, orienté sud, 96 départements (${UPDATED_LABEL})</p>
<label for="d" style="position:absolute;left:-9999px">Choisir un département</label>
<select id="d"><option value="">Choisir un département…</option>${options}</select>
<div class="wrap">
<svg viewBox="${FRANCE_MAP_VIEWBOX}" role="img" aria-label="Carte de France du nombre d’années de retour sur investissement d’un kit solaire de balcon par département">${paths}</svg>
<div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#6B6B63;margin-bottom:6px">Retour sur investissement</div><ul>${legend}</ul></div>
</div>
<div id="info">Survolez ou touchez un département pour afficher ses chiffres.</div>
<footer>Source : <a href="${ETUDE_URL}" target="_blank" rel="noopener">MonBalconSolaire.fr</a> · données CC BY 4.0 · production PVGIS (Commission européenne)</footer>
<script>
(function(){
var D=${data},info=document.getElementById('info'),sel=document.getElementById('d'),on=null;
function show(c){var r=D[c];if(!r)return;if(on)on.classList.remove('on');on=document.querySelector('path[data-code="'+c+'"]');if(on){on.classList.add('on');on.parentNode.appendChild(on);}
info.innerHTML='<strong>'+r[0]+' ('+c+')</strong> · '+r[1].toLocaleString('fr-FR')+' kWh/an · '+r[2]+' €/an · <strong>rentabilisé en '+r[3]+' ans</strong> · '+r[4]+'<sup>e</sup>/96';sel.value=c;}
document.querySelector('svg').addEventListener('pointerover',function(e){var c=e.target.getAttribute&&e.target.getAttribute('data-code');if(c)show(c);});
document.querySelector('svg').addEventListener('click',function(e){var c=e.target.getAttribute&&e.target.getAttribute('data-code');if(c)show(c);});
sel.addEventListener('change',function(){if(sel.value)show(sel.value);});
})();
</script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'Content-Security-Policy': 'frame-ancestors *',
    },
  });
}
