import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';
import { withCanonicalOg } from '@/lib/metadata';
import { calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, calculateTotalSavings25Years, KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';
import { PRODUCTS, priceLabel, type ProductId } from '@/data/products';

// Chiffres calculés au build (Lyon, plein sud, méthodologie du site) — prix de src/data/products.ts.
const fr = (n: number) => n.toLocaleString('fr-FR');
function sim(id: ProductId, priceOverride?: number) {
  const p = PRODUCTS[id];
  const input = { kitPriceEur: priceOverride ?? p.priceEur, kitPowerWc: p.powerWc };
  return {
    production: calculateProductionKwh(input),
    savings: Math.round(calculateFirstYearSavings(input)),
    roi: fr(calculateROIYears(input)),
    total25: fr(Math.round(calculateTotalSavings25Years(input) / 10) * 10),
    eurWc: fr(Math.round((input.kitPriceEur / p.powerWc) * 100) / 100),
  };
}
const GO = PRODUCTS['sunology-go'];
const BEEM300 = PRODUCTS['beem-kit-300w'];
const BEEM500 = PRODUCTS['beem-on-500w'];
const PLAY = PRODUCTS['sunology-play'];
const go = sim('sunology-go');
const beem300 = sim('beem-kit-300w');
const beem500 = sim('beem-on-500w');

export const metadata: Metadata = withCanonicalOg({
  title: 'Meilleur kit solaire petit budget 2026 : moins de 400€',
  description: 'Quel kit solaire de balcon acheter pour moins de 400 € en 2026 ? Options disponibles (Sunology GO), Beem Kit 300W en rupture, kits Amazon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/kit-solaire-petit-budget',
  },
});

const faqData = [
  { question: 'Quel est le kit solaire de marque le moins cher en 2026 ?', answer: `Sur le papier, le ${BEEM300.name} à ${BEEM300.priceEur} € est le kit de marque le moins cher, mais il est en rupture de stock chez Beem (aucune variante disponible, vérifié le 5 novembre 2026). Parmi les kits disponibles, le ${GO.name} à ${GO.priceEur} € (${GO.powerWc} W) est le moins cher que nous ayons analysé. On trouve des kits sans marque sur Amazon entre 150 et 250 €, mais la qualité et le SAV sont incertains.` },
  { question: 'Un kit à moins de 400 € est-il vraiment rentable ?', answer: `Oui, à condition de consommer ce qu'il produit. Le ${GO.name} (${GO.priceEur} €, ${GO.powerWc} W) produit environ ${go.production} kWh/an en région lyonnaise plein sud, soit ${go.savings} € d'économies la première année au tarif de ${KWH_PRICE_LABEL} : retour sur investissement en ${go.roi} ans (inflation ${KWH_INFLATION_LABEL}, dégradation ${PANEL_DEGRADATION_LABEL}).` },
  { question: 'Faut-il éviter les kits solaires pas chers sur Amazon ?', answer: 'Pas forcément, mais soyez vigilant : vérifiez la garantie, la certification CE, et la présence d\'un micro-onduleur de qualité. Les kits sans marque ont souvent un SAV inexistant et des performances en dessous des specs annoncées.' },
];

export default function PetitBudgetPage() {
  return (
    <>
      <SchemaArticle title="Meilleur kit solaire petit budget 2026 : moins de 400€" description="Comparatif des kits solaires les plus abordables en 2026." url="https://monbalconsolaire.fr/comparatif/kit-solaire-petit-budget" datePublished="2026-03-25" dateModified="2026-11-05" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Petit budget' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Petit budget' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Petit budget</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Meilleur kit solaire petit budget : moins de 400€</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Vous voulez tester le solaire de balcon sans vous ruiner ? Voici les meilleures options à moins de 400€ en 2026.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>25 mars 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span><span>&middot;</span><span>8 min de lecture</span></div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
            <span className="text-stone text-sm mt-0.5">&#x2139;</span>
            <p className="text-xs text-stone leading-relaxed">
              <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
            </p>
          </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le marché du solaire à petit prix en 2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le solaire de balcon n&apos;est plus réservé aux budgets de 600€+. En 2026, il est possible de démarrer l&apos;autoconsommation pour moins de 300€ avec un kit de marque, ou même autour de 150-200€ avec des kits génériques sur Amazon. Mais attention : le prix bas ne doit pas se faire au détriment de la sécurité et de la durabilité.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le critère clé à surveiller n&apos;est pas le prix brut, mais le <strong>ratio €/Wc</strong> (euros par watt-crête). Un bon kit à petit budget devrait se situer sous 1,20 €/Wc.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre sélection à moins de 400€</h2>
              <div className="space-y-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-green mb-2">Notre choix disponible</div><h3 className="font-bold text-xl">{GO.name}</h3><p className="text-sm text-stone">par Sunology &middot; {GO.powerWc} W &middot; garde-corps, sol ou mur</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-green">{priceLabel('sunology-go')}</div><div className="text-xs text-stone">{go.eurWc} &euro;/Wc</div></div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-charcoal-light">
                    <p>Le {GO.name} est le kit de marque le moins cher actuellement disponible parmi ceux que nous avons analys&eacute;s&nbsp;: un panneau de {GO.powerWc}&nbsp;W avec micro-onduleur, pens&eacute; pour les garde-corps et les petits espaces. Son ratio &euro;/Wc est moins bon que celui des kits 500&nbsp;W, c&apos;est le prix de la compacit&eacute;.</p>
                    <p>Production estim&eacute;e&nbsp;: environ {go.production}&nbsp;kWh/an en r&eacute;gion lyonnaise plein sud, soit {go.savings}&nbsp;&euro; d&apos;&eacute;conomies la premi&egrave;re ann&eacute;e. Retour sur investissement en {go.roi}&nbsp;ans.</p>
                    <p className="text-xs text-stone">Prix v&eacute;rifi&eacute; le 5 novembre 2026. &Agrave; cette date, la fiche du GO sur sunology.eu renvoyait vers l&apos;accueil du site&nbsp;: d&eacute;tails dans notre <Link href="/avis/sunology-go" className="text-green hover:underline">avis complet</Link>.</p>
                  </div>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-amber mb-2">Juste au-dessus du budget</div><h3 className="font-bold text-xl">{BEEM500.name}</h3><p className="text-sm text-stone">par Beem Energy &middot; {BEEM500.powerWc} Wc</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-green">{priceLabel('beem-on-500w')}</div><div className="text-xs text-stone">{beem500.eurWc} &euro;/Wc</div></div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-charcoal-light">
                    <p>Pour {BEEM500.priceEur - GO.priceEur}&nbsp;&euro; de plus, le {BEEM500.name} produit pr&egrave;s de deux fois plus (environ {beem500.production}&nbsp;kWh/an &agrave; Lyon plein sud, {beem500.savings}&nbsp;&euro; d&apos;&eacute;conomies la premi&egrave;re ann&eacute;e, ROI {beem500.roi}&nbsp;ans). Il demande en revanche un balcon d&apos;au moins 1&nbsp;m de large.</p>
                  </div>
                  <div className="card bg-amber-pale/30 border-amber/10 mt-3">
                    <p className="text-sm text-amber-dark"><strong>En pr&eacute;commande</strong> chez Beem&nbsp;: {BEEM500.availabilityNote} (v&eacute;rifi&eacute; le 5 novembre 2026). Voir notre <Link href="/avis/beem-on-500w" className="text-green hover:underline">avis complet</Link>.</p>
                  </div>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4"><ProductThumb src="/images/produits/beem-kit-300-1.webp" alt="Beem Kit 300W" href="/avis/beem-kit-300w" size="lg" /><div><div className="badge-amber mb-2">En rupture de stock</div><h3 className="font-bold text-xl">{BEEM300.name}</h3><p className="text-sm text-stone">par Beem Energy &middot; 4 panneaux modulaires</p></div></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-stone">{priceLabel('beem-kit-300w')}</div><div className="text-xs text-stone">{beem300.eurWc} &euro;/Wc</div></div>
                  </div>
                  <div className="card bg-amber-pale/30 border-amber/10 mt-3">
                    <p className="text-sm text-amber-dark"><strong>Indisponible&nbsp;:</strong> aucune variante du Beem Kit n&apos;est en stock sur beemenergy.fr (v&eacute;rifi&eacute; le 5 novembre 2026, sans date de r&eacute;assort). Nous ne le recommandons donc pas &agrave; l&apos;achat aujourd&apos;hui.</p>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-charcoal-light">
                    <p>Sur le papier, c&apos;&eacute;tait le meilleur ratio &euro;/Wc des kits de marque&nbsp;: 4 petits panneaux de 75&nbsp;W qui s&apos;adaptent aux espaces restreints, environ {beem300.production}&nbsp;kWh/an &agrave; Lyon plein sud ({beem300.savings}&nbsp;&euro; la premi&egrave;re ann&eacute;e, ROI {beem300.roi}&nbsp;ans au prix de {BEEM300.priceEur}&nbsp;&euro;). Installation plus longue (~1&nbsp;h) que les kits mono-panneau. D&eacute;tails dans notre <Link href="/avis/beem-kit-300w" className="text-green hover:underline">avis complet</Link>.</p>
                  </div>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-amber mb-2">Alternative Amazon</div><h3 className="font-bold text-xl">Kits génériques 300-400W</h3><p className="text-sm text-stone">Marques diverses · Amazon · Garantie variable</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-amber-dark">150-250 €</div><div className="text-xs text-stone">~0,50-0,80 €/Wc</div></div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-charcoal-light">
                    <p>On trouve sur Amazon des kits solaires plug-and-play entre 150 et 250€ pour des puissances de 300 à 400W. Le ratio €/Wc est séduisant mais les risques sont plus élevés.</p>
                  </div>
                  <div className="card bg-amber-pale/30 border-amber/10 mt-4">
                    <p className="text-sm text-amber-dark"><strong>Nos réserves :</strong> SAV souvent inexistant, micro-onduleurs de qualité variable, garantie difficile à faire valoir, performances réelles parfois 20-30% en dessous des specs annoncées, et pas de certification CE sur l&apos;ensemble du kit.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict petit budget</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Aujourd&apos;hui, sous 400&nbsp;&euro;, notre recommandation est le <strong>{GO.name} &agrave; {priceLabel('sunology-go')}</strong>&nbsp;: c&apos;est le seul kit de marque disponible dans cette gamme parmi ceux que nous avons analys&eacute;s. Le {BEEM300.name} ({BEEM300.priceEur}&nbsp;&euro;) serait plus rentable, mais il est en rupture. Les kits Amazon peuvent sembler moins chers, mais le risque de mauvaise qualit&eacute; et l&apos;absence de SAV ne valent pas les quelques dizaines d&apos;euros d&apos;&eacute;cart.</p>
              <p className="text-charcoal-light leading-relaxed">Si vous pouvez &eacute;tendre votre budget, le <Link href="/avis/beem-on-500w" className="text-green hover:underline">{BEEM500.name} ({priceLabel('beem-on-500w')}, en pr&eacute;commande)</Link> ou le <Link href="/avis/sunology-play-2" className="text-green hover:underline">{PLAY.name} {PLAY.powerWc}&nbsp;W ({priceLabel('sunology-play')})</Link> produisent pr&egrave;s de deux fois plus qu&apos;un kit de 270&nbsp;W et ont un meilleur ratio &euro;/Wc.</p>
              <p className="text-xs text-stone mt-3">Calculs&nbsp;: Lyon, plein sud, 1&nbsp;200&nbsp;kWh/kWc, PR 0,85, autoconsommation 85&nbsp;%, tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL}. <Link href="/methodologie" className="text-green hover:underline">M&eacute;thodologie</Link>.</p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Combien pouvez-vous économiser avec un petit kit ?</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes économies →</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-go" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology GO</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le kit compact disponible sous 400&nbsp;&euro;</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W</h3>
                  <p className="text-xs text-charcoal-light mt-1">Quelle puissance choisir</p>
                </Link>
                <Link href="/avis/anker-solix-rs40p" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Anker SOLIX RS40P</h3>
                  <p className="text-xs text-charcoal-light mt-1">2 &times; 455&nbsp;W IBC &mdash; plus vendu sur la boutique Anker France (05/11/2026)</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> comparatif indépendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
