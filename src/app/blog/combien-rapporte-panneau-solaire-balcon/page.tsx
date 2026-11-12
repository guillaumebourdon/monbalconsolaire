import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { ProductThumb } from '@/components/ui/ProductThumb';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_EUR, KWH_PRICE_LABEL, KWH_PRICE_SHORT, KWH_INFLATION_RATE, PANEL_DEGRADATION_RATE, calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, calculateTotalSavings25Years } from '@/lib/pricing';
import { productibleDepartement } from '@/lib/rentabilite-departements';
import { PRODUCTS, priceLabel } from '@/data/products';

export const metadata: Metadata = withCanonicalOg({
  title: 'Combien rapporte un panneau solaire de balcon ? Calcul réel (2026)',
  description: 'Combien rapporte réellement un panneau solaire de balcon en 2026 ? Exemples chiffres par ville (Paris, Lyon, Marseille, Lille, Nantes). Calcul transparent.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/combien-rapporte-panneau-solaire-balcon',
  },
});



// Chiffres calculés avec pricing.ts (méthode du site) et products.ts (prix/puissance vérifiés le 05/11/2026).
const fr = (n: number) => n.toLocaleString('fr-FR');
const PLAY = PRODUCTS['sunology-play'];
const GO = PRODUCTS['sunology-go'];
// Productible du département de la ville (PVGIS 5.3 à la préfecture, recalé sur la référence Lyon).
const CITIES = [
  { city: 'Marseille', region: "Provence-Alpes-Côte d'Azur", irr: productibleDepartement('13') },
  { city: 'Toulouse', region: 'Occitanie', irr: productibleDepartement('31') },
  { city: 'Lyon', region: 'Auvergne-Rhône-Alpes', irr: productibleDepartement('69') },
  { city: 'Nantes', region: 'Pays de la Loire', irr: productibleDepartement('44') },
  { city: 'Paris', region: 'Île-de-France', irr: productibleDepartement('75') },
  { city: 'Strasbourg', region: 'Grand Est', irr: productibleDepartement('67') },
  { city: 'Lille', region: 'Hauts-de-France', irr: productibleDepartement('59') },
];
function sim(kit: { priceEur: number; powerWc: number }, irr: number) {
  const input = { kitPriceEur: kit.priceEur, kitPowerWc: kit.powerWc, productibleKwhPerKwc: irr };
  return {
    prod: calculateProductionKwh(input),
    eco: Math.round(calculateFirstYearSavings(input)),
    roi: calculateROIYears(input),
    tot25: Math.round(calculateTotalSavings25Years(input) / 10) * 10,
  };
}
const cityData = CITIES.map((c) => {
  const big = sim(PLAY, c.irr);
  const small = sim(GO, c.irr);
  return {
    ...c,
    irrLabel: `${fr(c.irr)} kWh/kWc`,
    prodBig: `${fr(big.prod)} kWh`, ecoBig: `${big.eco} \u20ac`, roiBig: `${fr(big.roi)} ans`,
    prodSmall: `${fr(small.prod)} kWh`, ecoSmall: `${small.eco} \u20ac`, roiSmall: `${fr(small.roi)} ans`,
    big, small,
  };
});
const city = (name: string) => cityData.find((c) => c.city === name)!;
const MRS = city('Marseille');
const PAR = city('Paris');
const LIL = city('Lille');
const LYO = city('Lyon');

// Scénarios de prix sur 25 ans (kit PLAY, Lyon sud, 85 % autoconsommés, dégradation 0,5 %/an)
const eco1Lyon = calculateFirstYearSavings({ kitPriceEur: PLAY.priceEur, kitPowerWc: PLAY.powerWc });
const cumul = (rate: number) => Math.round(Array.from({ length: 25 }, (_, y) => eco1Lyon * Math.pow(1 + rate, y) * Math.pow(1 - PANEL_DEGRADATION_RATE, y)).reduce((s, v) => s + v, 0) / 10) * 10;
const tarif2036 = (rate: number) => (Math.round(KWH_PRICE_EUR * Math.pow(1 + rate, 10) * 100) / 100).toLocaleString('fr-FR');

const faqData = [
  { question: 'Combien rapporte un panneau solaire de balcon par an ?', answer: `Avec un kit comme le Sunology PLAY (${PLAY.powerWc} W, ${priceLabel('sunology-play')}) et le tarif réglementé à ${KWH_PRICE_LABEL}, comptez environ ${LIL.big.eco} à ${MRS.big.eco} euros d'économies la première année en exposition sud selon votre région (85 % d'autoconsommation). Cela correspond à une production de ${LIL.big.prod} à ${MRS.big.prod} kWh par an.` },
  { question: 'Est-ce que ça vaut le coup à Paris ?', answer: `Oui. Le Sunology PLAY (${PLAY.powerWc} W) produit environ ${PAR.big.prod} kWh/an à Paris (exposition sud), soit ~${PAR.big.eco} euros d'économies la première année. Le ROI est atteint en ~${fr(PAR.big.roi)} ans (inflation de 3,3 %/an, dégradation des panneaux de 0,5 %/an) pour une garantie de 25 ans. C'est moins rentable qu'à Marseille, mais ça reste un bon investissement.` },
  { question: 'Le prix de l\'électricité va-t-il encore augmenter ?', answer: `Personne ne peut le garantir. Entre 2012 et 2026, le tarif réglementé option Base est passé d'environ 0,126 € à ${KWH_PRICE_SHORT} le kWh, soit +3,3 % par an en moyenne : c'est l'hypothèse que nous retenons. Chaque hausse du tarif améliore la rentabilité de votre panneau, chaque baisse la réduit.` },
  { question: 'Faut-il une batterie pour etre rentable ?', answer: 'Non. Sans batterie, vous consommez l\'électricité en temps réel (talon de consommation). C\'est déjà rentable. Une batterie augmente l\'autoconsommation mais coute 500-1400 euros supplémentaires, ce qui allonge le temps de retour sur investissement.' },
];

export default function CombienRapportePage() {
  return (
    <>
      <SchemaArticle title="Combien rapporte un panneau solaire de balcon ? Calcul réel" description="Calcul réel de la rentabilité d'un panneau solaire de balcon par ville." url="https://monbalconsolaire.fr/blog/combien-rapporte-panneau-solaire-balcon" datePublished="2026-03-21" dateModified="2026-11-12" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Combien rapporte un panneau solaire" }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Combien rapporte un panneau solaire" }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Analyse chiffrée</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Combien rapporte un panneau solaire de balcon ? Calcul réel</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Pas de promesses marketing, pas d&apos;estimations floues. Voici les chiffres réels de production et d&apos;économies pour 7 villes françaises, bases sur les données officielles PVGIS et le tarif EDF 2026.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>21 mars 2026 &middot; Mis &agrave; jour le 12 novembre 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">La formule de calcul</h2>
            <div className="bg-white rounded-brand p-4 font-mono text-sm text-charcoal text-center mb-3">
              <strong>Production (kWh/an)</strong> = Puissance (kWc) &times; Irradiation (kWh/kWc/an) &times; 0,85
            </div>
            <div className="bg-white rounded-brand p-4 font-mono text-sm text-charcoal text-center mb-3">
              <strong>Économies (&euro;/an)</strong> = Production (kWh) &times; 85 % autoconsomm&eacute;s &times; Tarif r&eacute;glement&eacute; ({KWH_PRICE_LABEL})
            </div>
            <p className="text-xs text-stone">Le coefficient 0,85 intègre les pertes réelles : câblage, température, ombrage partiel, poussière, vieillissement. L&apos;irradiation provient de PVGIS (Commission européenne). Le tarif EDF est celui en vigueur au 1er février 2026 (option base, 6 kVA).</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production et économies par ville</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Voici les estimations pour les 7 principales zones climatiques de France, avec deux kits de r&eacute;f&eacute;rence disponibles&nbsp;: le Sunology PLAY ({PLAY.powerWc}&nbsp;W, {priceLabel('sunology-play')}) et le Sunology GO ({GO.powerWc}&nbsp;W, {priceLabel('sunology-go')}), prix v&eacute;rifi&eacute;s le 5 novembre 2026. Toutes les estimations supposent une orientation plein sud et une inclinaison optimale de 30-35 degres. Pour comprendre pourquoi l&apos;orientation change tout, consultez notre <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green font-semibold hover:underline">guide complet sur l&apos;orientation</Link>.</p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[700px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Ville</th>
                    <th className="text-center p-3">Irradiation</th>
                    <th className="text-center p-3">Prod. PLAY</th>
                    <th className="text-center p-3">&Eacute;co. PLAY</th>
                    <th className="text-center p-3">ROI PLAY</th>
                    <th className="text-center p-3">Prod. GO</th>
                    <th className="text-center p-3">&Eacute;co. GO</th>
                    <th className="text-center p-3 rounded-tr-xl">ROI GO</th>
                  </tr></thead>
                  <tbody>
                    {cityData.map((c, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3"><span className="font-semibold">{c.city}</span><br/><span className="text-xs text-stone">{c.region}</span></td>
                        <td className="text-center p-3 font-mono text-xs">{c.irrLabel}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{c.prodBig}</td>
                        <td className="text-center p-3 font-mono text-sm font-medium text-amber-dark">{c.ecoBig}</td>
                        <td className="text-center p-3 font-mono text-sm">{c.roiBig}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{c.prodSmall}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{c.ecoSmall}</td>
                        <td className="text-center p-3 font-mono text-sm">{c.roiSmall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Source : donn&eacute;es PVGIS (Commission europ&eacute;enne). Tarif r&eacute;glement&eacute; {KWH_PRICE_LABEL}. Coefficient de pertes : 0,85. Autoconsommation 85 %, inflation 3,3 %/an, d&eacute;gradation des panneaux 0,5 %/an. Le Beem Kit 300W (199&nbsp;&euro;), qui figurait ici, est en rupture chez Beem au 5 novembre 2026.</p>
              <p className="text-sm text-charcoal-light mt-2">
                → Retrouvez ces kits dans notre <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green font-semibold hover:underline">comparatif des meilleurs kits solaires 2026</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que ces chiffres signifient concrêtement</h2>
              <div className="space-y-4 my-6">
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                  <ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY" href="/avis/sunology-play-2" size="sm" />
                  <div>
                  <h3 className="font-bold text-sm mb-1">&Agrave; Marseille avec un Sunology PLAY ({PLAY.powerWc}&nbsp;W)</h3>
                  <p className="text-xs text-charcoal-light">Vous produisez {fr(MRS.big.prod)} kWh/an, soit l&apos;equivalent de la consommation d&apos;un refrigerateur + une box internet + tous vos appareils en veille pendant un an. &Eacute;conomies&nbsp;: ~{MRS.big.eco}&nbsp;&euro; la premi&egrave;re ann&eacute;e. Le kit est rembours&eacute; en {fr(MRS.big.roi)} ans (inflation 3,3&nbsp;%/an, d&eacute;gradation 0,5&nbsp;%/an). Sur 25 ans, vous &eacute;conomisez environ {fr(MRS.big.tot25)}&nbsp;&euro;.</p>
                </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <div className="flex items-start gap-3">
                                    <div>
                  <h3 className="font-bold text-sm mb-1">&Agrave; Paris avec un Sunology GO ({GO.powerWc}&nbsp;W)</h3>
                  <p className="text-xs text-charcoal-light">Vous produisez {fr(PAR.small.prod)} kWh/an. C&apos;est moins, mais &agrave; {priceLabel('sunology-go')} le kit, le retour sur investissement est atteint en {fr(PAR.small.roi)} ans. Sur 25 ans, vous &eacute;conomisez environ {fr(PAR.small.tot25)}&nbsp;&euro;.</p>
                </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1">&Agrave; Lille avec un Sunology PLAY ({PLAY.powerWc}&nbsp;W)</h3>
                  <p className="text-xs text-charcoal-light">Meme dans la region la moins ensoleillee de France, les chiffres restent positifs : {fr(LIL.big.prod)} kWh/an, ~{LIL.big.eco}&nbsp;&euro; d&apos;&eacute;conomies la premi&egrave;re ann&eacute;e, ROI en {fr(LIL.big.roi)} ans. Sur 25 ans&nbsp;: environ {fr(LIL.big.tot25)}&nbsp;&euro; d&apos;&eacute;conomies. Le solaire est rentable partout en France.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;impact des hausses de prix de l&apos;électricité</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Les chiffres ci-dessus sont calcul&eacute;s avec le tarif actuel de {KWH_PRICE_LABEL}. Entre 2012 et 2026, le tarif r&eacute;glement&eacute; Base est pass&eacute; d&apos;environ 0,126&nbsp;&euro; &agrave; {KWH_PRICE_SHORT} le kWh (+58&nbsp;%), soit +3,3&nbsp;% par an en moyenne. Selon l&apos;&eacute;volution future&nbsp;:</p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { scenario: 'Tarif stable', tarif: KWH_PRICE_SHORT, eco25: `~${fr(cumul(0))} \u20ac`, desc: 'Hypoth\u00e8se basse' },
                  { scenario: '+3,3 %/an', tarif: `~${tarif2036(KWH_INFLATION_RATE)} \u20ac en 2036`, eco25: `~${fr(cumul(KWH_INFLATION_RATE))} \u20ac`, desc: 'Notre hypoth\u00e8se standard (moyenne 2012-2026)' },
                  { scenario: '+5 %/an', tarif: `~${tarif2036(0.05)} \u20ac en 2036`, eco25: `~${fr(cumul(0.05))} \u20ac`, desc: 'Hypoth\u00e8se haute' },
                ].map((s, i) => (
                  <div key={i} className="card text-center">
                    <div className="text-xs text-stone font-semibold mb-2">{s.scenario}</div>
                    <div className="font-mono text-xl font-medium text-green mb-1">{s.eco25}</div>
                    <div className="text-xs text-stone">&eacute;conomies sur 25 ans (PLAY, Lyon)</div>
                    <div className="text-xs text-stone mt-2">{s.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed"><strong>Le point cle :</strong> un panneau solaire est un investissement qui se bonifie avec le temps. Plus l&apos;électricité augmente, plus votre panneau vous fait économiser. C&apos;est une protection naturelle contre l&apos;inflation énergétique.</p>
              <p className="text-sm text-charcoal-light mt-2">
                → Lire aussi : <Link href="/blog/prix-electricite-2026-solaire" className="text-green font-semibold hover:underline">Prix de l&apos;électricité 2026 : pourquoi le solaire devient incontournable</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les facteurs qui changent le résultat</h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { t: 'Orientation', impact: 'Fort', d: 'Sud = 100%. Sud-est/ouest = 93%. Est/Ouest = 80%. Nord = 45%. Un balcon nord divise la production par 2.' },
                  { t: 'Ombrage', impact: 'Fort', d: 'Un arbre, un immeuble voisin, un auvent qui projette de l\'ombre sur le panneau réduit drastiquement la production. Meme une ombre partielle à un impact important.' },
                  { t: 'Inclinaison', impact: 'Moyen', d: 'L\'optimal est 30-35 degres en France. Un panneau à plat (0 degres) perd ~15%. Un panneau vertical (90 degres, contre un mur) perd ~30%.' },
                  { t: 'Region', impact: 'Moyen', d: 'L\'ecart entre Marseille et Lille est d\'environ 50% de production. Mais le solaire reste rentable partout en France.' },
                ].map((f, i) => (
                  <div key={i} className="card">
                    <div className="flex items-center gap-2 mb-2"><h3 className="font-bold text-sm">{f.t}</h3><span className={`text-xs font-bold px-2 py-0.5 rounded ${f.impact === 'Fort' ? 'bg-amber-pale text-amber-dark' : 'bg-cream-dark text-stone'}`}>Impact {f.impact}</span></div>
                    <p className="text-xs text-charcoal-light">{f.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-amber-pale/50 via-white to-green-pale/30 border-amber/10 text-center mt-8">
              <p className="font-semibold text-lg mb-2">Ces chiffres sont des moyennes. Et VOTRE balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur utilise les données PVGIS exactes pour votre region et votre orientation.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer MES économies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions frequentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <div className="my-8">
              <AffiliateCTA
                productName="Sunology PLAY"
                merchantName="Sunology"
                affiliateUrl="https://sunology.eu/products/play-kit-solaire-plug-play"
                label="Voir le Sunology PLAY"
                variant="box"
                position="article_bottom"
              />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/etude/rentabilite-kit-solaire-balcon-departement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Carte&nbsp;: la rentabilit&eacute; d&apos;un kit solaire par d&eacute;partement</h3>
                  <p className="text-xs text-charcoal-light mt-1">Production, &eacute;conomies et ann&eacute;es de ROI d&apos;un kit 500&nbsp;Wc dans les 96 d&eacute;partements</p>
                </Link>
                <Link href="/comparatif/kit-solaire-balcon-vs-toiture" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Balcon vs toiture&nbsp;: quelle diff&eacute;rence de rentabilit&eacute;&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">ROI 4–7 ans pour le balcon, 7–12 ans pour la toiture&nbsp;: le comparatif complet avec les chiffres r&eacute;els</p>
                </Link>
                <Link href="/blog/aides-subventions-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Aides et subventions panneau solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">MaPrimeR&eacute;nov&apos;, TVA r&eacute;duite, prime autoconsommation&nbsp;: ce qui s&apos;applique vraiment aux kits balcon</p>
                </Link>
                <Link href="/blog/prix-electricite-2026-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Prix de l'électricité 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Pourquoi le solaire devient incontournable</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide débutants</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le guide complet pour démarrer</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu</h3>
                  <p className="text-xs text-charcoal-light mt-1">Checklist de diagnostic et solutions par ordre de co&ucirc;t</p>
                </Link>
                <Link href="/blog/panneau-solaire-balcon-voiture-electrique" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon et voiture &eacute;lectrique&nbsp;: peut-on recharger&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;&eacute;quivalent kilom&eacute;trique r&eacute;el d&apos;un kit, chiffr&eacute; via pricing.ts</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W : quelle puissance choisir ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Impact de la puissance sur le ROI et les &eacute;conomies annuelles</p>
                </Link>
                <Link href="/blog/bilan-6-mois-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Bilan sur 6 mois : ce que produit un kit solaire balcon</h3>
                  <p className="text-xs text-charcoal-light mt-1">Production mois par mois simul&eacute;e et retours d&apos;utilisateurs</p>
                </Link>
                <Link href="/blog/kit-solaire-balcon-avis-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon : avis et retours 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Synth&egrave;se des avis Trustpilot, forums et utilisateurs</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Methodologie :</strong> productions calculees a partir des données PVGIS (Commission europeenne), orientation sud, inclinaison 30 degres, coefficient de pertes 0,85, autoconsommation 85 %, inflation 3,3 %/an (ROI et cumul 25 ans), d&eacute;gradation des panneaux 0,5 %/an. Tarif {KWH_PRICE_LABEL} TTC (option Base 6 kVA, en vigueur depuis le 1<sup>er</sup> ao&ucirc;t 2026). Ce contenu est indépendant — <Link href="/a-propos" className="text-green hover:underline">en savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
