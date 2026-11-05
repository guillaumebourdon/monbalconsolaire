import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { ProductThumb } from '@/components/ui/ProductThumb';
import { withCanonicalOg } from '@/lib/metadata';
import {
  KWH_PRICE_EUR,
  KWH_PRICE_LABEL,
  KWH_PRICE_SINCE,
  KWH_PRICE_SOURCE_URL,
  KWH_INFLATION_LABEL,
  PANEL_DEGRADATION_LABEL,
  PANEL_DEGRADATION_RATE,
  AUTOCONSO_STANDARD,
  calculateProductionKwh,
  calculateFirstYearSavings,
  calculateROIYears,
  calculateTotalSavings25Years,
} from '@/lib/pricing';
import { PRODUCTS, priceLabel } from '@/data/products';

// Exemple : Sunology PLAY à Lyon, plein sud (méthode du site). Tous les chiffres sont calculés.
const KIT = PRODUCTS['sunology-play'];
const EX = { kitPriceEur: KIT.priceEur, kitPowerWc: KIT.powerWc };
const production = calculateProductionKwh(EX);
const savings1 = calculateFirstYearSavings(EX);
const fr = (n: number) => n.toLocaleString('fr-FR');
const round10 = (n: number) => Math.round(n / 10) * 10;

/** Scénario à inflation fixe (dégradation des panneaux incluse) : ROI et cumul 25 ans. */
function scenario(inflation: number) {
  let cumul = 0;
  let roi: number | null = null;
  for (let y = 1; y <= 25; y++) {
    const yearSavings = savings1 * Math.pow(1 + inflation, y - 1) * Math.pow(1 - PANEL_DEGRADATION_RATE, y - 1);
    if (roi === null && cumul + yearSavings >= KIT.priceEur) roi = Math.round((y - 1 + (KIT.priceEur - cumul) / yearSavings) * 10) / 10;
    cumul += yearSavings;
  }
  return { roi: roi ?? 25, total25: Math.round(cumul) };
}
const flat = scenario(0);
const high = scenario(0.05);
const standardRoi = calculateROIYears(EX);
const standardTotal = calculateTotalSavings25Years(EX);
const savings2030High = Math.round(savings1 * Math.pow(1.05, 4) * Math.pow(1 - PANEL_DEGRADATION_RATE, 4));

// Tarif Bleu Base 6 kVA TTC (historique vérifié) : 1er février 2026 puis 1er août 2026
const KWH_FEB_2026 = 0.194;
const kwhChangePct = Math.round(((KWH_PRICE_EUR - KWH_FEB_2026) / KWH_FEB_2026) * 1000) / 10;

export const metadata: Metadata = withCanonicalOg({
  title: 'Prix de l\'électricité 2026 : ce que ça change pour le solaire',
  description: 'Prix du kWh en 2026 (tarif réglementé au 1er août), ce qui a fait monter la facture et l\'effet sur la rentabilité d\'un kit solaire de balcon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/prix-electricite-2026-solaire',
  },
});

const faqData = [
  { question: 'Quel est le prix du kWh en 2026 ?', answer: `Le tarif réglementé EDF (Tarif Bleu, option Base, 6 kVA) est de ${KWH_PRICE_LABEL} TTC depuis le ${KWH_PRICE_SINCE}. Il était de 0,1940 €/kWh au 1er février 2026 (tarif historique), soit +${fr(kwhChangePct)} % sur le prix du kWh. En moyenne, les tarifs bleus résidentiels ont augmenté de 2,51 % TTC au 1er août 2026 (délibération CRE n° 2026-147).` },
  { question: 'Le prix de l\'électricité va-t-il augmenter en 2026-2027 ?', answer: `Personne ne peut le garantir. La hausse du 1er août 2026 vient surtout du tarif d'utilisation des réseaux (TURPE) et du nouveau mécanisme de capacité, qui finance la disponibilité des centrales depuis la fin de l'ARENH le 31 décembre 2025 (CRE). Nos calculs supposent ${KWH_INFLATION_LABEL}, la moyenne passée du tarif réglementé, pas une prévision.` },
  { question: 'Combien le solaire fait-il économiser face aux hausses ?', answer: `Chaque hausse du tarif augmente d'autant la valeur des kWh que vous produisez et consommez. Un ${KIT.name} (${KIT.powerWc} W, ${priceLabel('sunology-play')}) économise environ ${Math.round(savings1)} € la première année à Lyon, plein sud. Avec une hausse de 5 %/an, ce serait environ ${savings2030High} € en 2030.` },
];

export default function PrixElectricitePage() {
  return (
    <>
      <SchemaArticle title="Prix de l'électricité 2026 : ce que ça change pour le solaire" description="Prix du kWh en 2026 (tarif réglementé au 1er août), ce qui a fait monter la facture et l'effet sur la rentabilité d'un kit solaire de balcon." url="https://monbalconsolaire.fr/blog/prix-electricite-2026-solaire" datePublished="2026-03-30" dateModified="2026-11-05" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Prix de l\'électricité 2026' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Prix de l\'électricité 2026' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Prix de l&apos;électricité 2026 : ce que ça change pour le solaire de balcon</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le tarif réglementé a augmenté au 1<sup>er</sup> août 2026. Ce qui explique cette hausse, et ce qu&apos;elle change pour la rentabilité d&apos;un kit solaire de balcon, chiffres à l&apos;appui.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>30 mars 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span><span>&middot;</span><span>7 min de lecture</span></div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le prix du kWh en 2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Depuis le {KWH_PRICE_SINCE}, le tarif réglementé EDF (Tarif Bleu) s&apos;établit à <span className="data-highlight">{KWH_PRICE_LABEL} TTC</span> en option Base, 6 kVA. Les deux mouvements de l&apos;année&nbsp;:</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[400px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Date d&apos;effet</th><th className="text-center p-3">Prix du kWh Base 6 kVA TTC</th><th className="text-center p-3 rounded-tr-xl">Variation du kWh</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['1er février 2026', '0,1940 €', '—'], // historique
                      [`${KWH_PRICE_SINCE}`, KWH_PRICE_LABEL.replace('/kWh', ''), `+${fr(kwhChangePct)} %`],
                    ].map(([y, t, v], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{y}</td>
                        <td className="text-center p-3 font-mono">{t}</td>
                        <td className="text-center p-3 font-mono text-sm">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Source&nbsp;: <a href={KWH_PRICE_SOURCE_URL} target="_blank" rel="noopener noreferrer" className="text-green underline">grille EDF &laquo;&nbsp;Tarif Bleu&nbsp;&raquo; applicable au 1<sup>er</sup> ao&ucirc;t 2026</a> (consult&eacute;e le 5 novembre 2026). L&apos;abonnement 6 kVA passe &agrave; 15,86&nbsp;&euro; TTC par mois.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi le tarif a augment&eacute; au 1<sup>er</sup> ao&ucirc;t 2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La CRE a propos&eacute; une hausse moyenne de 2,51&nbsp;% TTC des tarifs bleus r&eacute;sidentiels (d&eacute;lib&eacute;ration n&deg;&nbsp;2026-147 du 15 juillet 2026). Elle l&apos;explique par&nbsp;:</p>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mb-4 pl-5">
                <li>&bull; la hausse du tarif d&apos;utilisation des r&eacute;seaux (TURPE), environ +1,14&nbsp;% TTC sur la facture&nbsp;;</li>
                <li>&bull; le nouveau m&eacute;canisme de capacit&eacute;, qui r&eacute;mun&egrave;re la disponibilit&eacute; des centrales et des effacements, et qui p&egrave;se d&eacute;sormais sur tous les volumes depuis la fin de l&apos;ARENH le 31 d&eacute;cembre 2025&nbsp;: environ +1,73&nbsp;% TTC&nbsp;;</li>
                <li>&bull; en sens inverse, la baisse des co&ucirc;ts des certificats d&apos;&eacute;conomies d&apos;&eacute;nergie et des co&ucirc;ts commerciaux (&minus;0,32&nbsp;% TTC) et une l&eacute;g&egrave;re baisse de l&apos;accise sur l&apos;&eacute;lectricit&eacute; (de 30,85 &agrave; 30,62&nbsp;&euro;/MWh).</li>
              </ul>
              <div className="card bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light"><strong>Et ensuite&nbsp;?</strong> Personne ne conna&icirc;t le tarif de 2030. Nos calculs supposent {KWH_INFLATION_LABEL}, la moyenne pass&eacute;e du tarif r&eacute;glement&eacute; (voir notre <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link>), et nous montrons ci-dessous ce que donnent un tarif fig&eacute; et une hausse plus forte.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Impact sur la rentabilité du solaire de balcon</h2>
              <div className="flex items-start gap-3 mb-4">
                <ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY" href="/avis/sunology-play-2" size="md" />
                <p className="text-charcoal-light leading-relaxed">Chaque hausse du kWh augmente la valeur de ce que votre panneau produit. Voici trois sc&eacute;narios pour un {KIT.name} ({KIT.powerWc}&nbsp;W, {priceLabel('sunology-play')}, {fr(production)} kWh/an en r&eacute;gion lyonnaise plein sud, {Math.round(AUTOCONSO_STANDARD * 100)}&nbsp;% autoconsomm&eacute;s, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}), en partant du tarif actuel&nbsp;:</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { label: 'Tarif figé', hyp: 'aucune hausse', roi: `${fr(flat.roi)} ans`, total25: `~${fr(round10(flat.total25))} €` },
                  { label: 'Hypothèse du site', hyp: `+${KWH_INFLATION_LABEL}`, roi: `${fr(standardRoi)} ans`, total25: `~${fr(round10(standardTotal))} €` },
                  { label: 'Hausse forte', hyp: '+5 % par an', roi: `${fr(high.roi)} ans`, total25: `~${fr(round10(high.total25))} €` },
                ].map((s, i) => (
                  <div key={i} className="card text-center">
                    <div className="text-xs text-stone font-semibold mb-2">{s.label}</div>
                    <div className="font-mono text-lg font-medium text-amber-dark mb-1">{s.hyp}</div>
                    <div className="text-sm text-charcoal-light">1<sup>re</sup> année : <span className="font-semibold text-green">{Math.round(savings1)} €</span></div>
                    <div className="text-sm text-charcoal-light">ROI : {s.roi}</div>
                    <div className="text-xs text-stone mt-2">Sur 25 ans : {s.total25}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed"><strong>Le constat :</strong> ce kit acheté {priceLabel('sunology-play')} rapporterait entre {fr(round10(flat.total25))}&nbsp;&euro; (tarif fig&eacute;) et {fr(round10(high.total25))}&nbsp;&euro; (hausse de 5&nbsp;%/an) d&apos;&eacute;conomies sur 25 ans, {fr(round10(standardTotal))}&nbsp;&euro; avec notre hypoth&egrave;se standard. M&ecirc;me sans aucune hausse, il est rembours&eacute; en {fr(flat.roi)}&nbsp;ans dans ce cas favorable (Lyon, plein sud, foyer pr&eacute;sent).</p>
              <p className="text-sm text-charcoal-light mt-2">
                → Lire aussi : <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="text-green font-semibold hover:underline">Combien rapporte un panneau solaire de balcon ? Calcul réel par ville</Link>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le solaire comme protection anti-inflation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Un panneau solaire fonctionne comme une assurance contre les hausses de prix de l&apos;électricité. Chaque kWh que vous produisez vous-même est un kWh que vous n&apos;achetez pas à EDF — quel que soit le tarif futur.</p>
              <p className="text-charcoal-light leading-relaxed">C&apos;est la raison pour laquelle de plus en plus de Français s&apos;équipent : le solaire n&apos;est plus un geste écologique symbolique, c&apos;est un investissement chiffrable, &agrave; condition d&apos;avoir une bonne exposition et de consommer en journ&eacute;e. Pour commencer sans trop investir, consultez notre <Link href="/comparatif/kit-solaire-petit-budget" className="text-green font-semibold hover:underline">sélection de kits solaires petit budget</Link>.</p>
            </section>

            <div className="card-lg bg-gradient-to-br from-amber-pale/50 via-white to-green-pale/30 border-amber/10 text-center">
              <p className="font-semibold text-lg mb-2">Combien pouvez-vous économiser ?</p>
              <p className="text-sm text-charcoal-light mb-4">Calculez vos économies avec le tarif actuel — et imaginez ce que ça donnera quand le tarif augmentera.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies →</Link>
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
            <div className="my-8">
              <AffiliateCTA
                productName="Sunology PLAY"
                merchantName="Sunology"
                affiliateUrl="https://sunology.eu/products/play-kit-solaire-plug-play"
                label="Profiter du solaire maintenant"
                variant="box"
                position="article_bottom"
              />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Combien ça rapporte ?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le calcul détaillé de rentabilité</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation expliquée</h3>
                  <p className="text-xs text-charcoal-light mt-1">Talon, surplus, injection</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
                <Link href="/blog/aides-subventions-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Aides et subventions panneau solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">MaPrimeR&eacute;nov&apos;, TVA, prime autoconsommation&nbsp;: ce qui s&apos;applique vraiment aux kits balcon</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> CRE, délibération n° 2026-147 du 15 juillet 2026 portant proposition des tarifs réglementés de vente d&apos;électricité ; grille EDF Tarif Bleu applicable au 1<sup>er</sup> août 2026 (consultées le 5 novembre 2026). Calculs : méthode du site (PR 0,85, Lyon 1 200 kWh/kWc, {Math.round(AUTOCONSO_STANDARD * 100)} % d&apos;autoconsommation, dégradation {PANEL_DEGRADATION_LABEL}). <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
