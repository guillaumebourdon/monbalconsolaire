import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL, calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, calculateTotalSavings25Years } from '@/lib/pricing';
import { PRODUCTS, SCHEMA_AVAILABILITY, priceLabel } from '@/data/products';

// Tous les chiffres viennent de products.ts (prix) et pricing.ts (calcul) : rien en dur.
const VAULT = PRODUCTS['sunology-vault'];
const PLAY = PRODUCTS['sunology-play'];
const MAX = PRODUCTS['sunology-play-max'];
const fr = (n: number) => n.toLocaleString('fr-FR');
const sim = (price: number, power: number, battery: boolean) => {
  const input = { kitPriceEur: price, kitPowerWc: power, hasBattery: battery };
  return {
    production: calculateProductionKwh(input),
    savings: Math.round(calculateFirstYearSavings(input)),
    roi: calculateROIYears(input),
    total25: calculateTotalSavings25Years(input),
  };
};
const playAlone = sim(PLAY.priceEur, PLAY.powerWc, false);
const playPlusVault = sim(PLAY.priceEur + VAULT.priceEur, PLAY.powerWc, true);
const VAULT_PRICE = priceLabel('sunology-vault');
const PLAY_PRICE = priceLabel('sunology-play');
const EUR_PER_KWH = Math.round(VAULT.priceEur / (VAULT.batteryKwh ?? 0.7));

export const metadata: Metadata = withCanonicalOg({
  title: 'Sunology VAULT avis 2026 : la batterie 700 Wh à 499 €',
  description: `Avis Sunology VAULT : batterie nomade 700 Wh, ${VAULT_PRICE}, IP65, 10 ans de garantie. Compatibilité PLAY/GO incertaine, ROI et comparatif.`,
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/sunology-vault',
  },
});

const faqData = [
  {
    question: 'Quel est le prix de la Sunology VAULT ?',
    answer: `${VAULT_PRICE} sur sunology.eu quand elle est achetée seule (prix relevé le 05/11/2026). Elle est aussi incluse de série dans le Sunology PLAY MAX (${priceLabel('sunology-play-max')}), qui combine une station 460 W et cette même batterie.`,
  },
  {
    question: 'Quelle est la capacité et l’autonomie de la VAULT ?',
    answer: `700 Wh (0,7 kWh) en lithium-ion, pour 3,7 kg. C’est environ 5 heures d’autonomie pour un talon de consommation de 140 W (frigo + box + veilles) : de quoi couvrir une soirée, pas une nuit complète. Au ${EUR_PER_KWH} €/kWh stocké, c’est cher comparé à une batterie de balcon sans panneaux comme le Zendure SolarFlow 800 Plus (281 €/kWh) ou la Sunology STOREY (632 €/kWh, 2,2 kWh).`,
  },
  {
    question: 'La VAULT est-elle compatible avec le PLAY, le PLAY2 ou le GO ?',
    answer: 'Officiellement, Sunology présente la VAULT comme conçue pour la station PLAY MAX, où elle est intégrée de série. La compatibilité avec un PLAY, un PLAY2 ou un GO déjà installés séparément n’est pas documentée clairement sur sunology.eu : aucune fiche ne confirme ni n’exclut l’association. Si cette compatibilité vous intéresse, demandez confirmation écrite au support Sunology avant d’acheter plutôt que de vous fier à des sources tierces.',
  },
  {
    question: 'Est-il rentable d’ajouter une VAULT à un Sunology PLAY déjà installé ?',
    answer: `Pas vraiment, à condition que la compatibilité soit confirmée. Avec notre méthodologie (Lyon, plein sud, PR 0,85, ${KWH_PRICE_LABEL}), un PLAY seul (${PLAY_PRICE}) se rentabilise en ${fr(playAlone.roi)} ans pour ${fr(playAlone.savings)} € d’économies la première année. En ajoutant la VAULT (${PLAY.priceEur + VAULT.priceEur} € au total), l’autoconsommation passe de 85 % à 95 %, mais le ROI s’allonge à ${fr(playPlusVault.roi)} ans : l’autoconsommation plus élevée ne compense pas le surcoût de ${fr(VAULT.priceEur)} €. La VAULT se justifie par le confort (stocker le soir, usage nomade), pas par le calcul financier.`,
  },
  {
    question: 'Quelle garantie pour la Sunology VAULT ?',
    answer: '10 ans ou 2 500 cycles à 100 % de charge et décharge, selon Sunology. C’est une chimie lithium-ion classique (pas du LFP), donc un nombre de cycles plus limité que les batteries LFP concurrentes (6 000 cycles pour le Jackery SolarVault 3 Pro, par exemple), mais la garantie 10 ans reste alignée sur le marché.',
  },
  {
    question: 'Peut-on utiliser la VAULT comme batterie nomade, sans kit solaire ?',
    answer: 'Oui, c’est l’un de ses arguments : amovible, IP65 (résistante aux intempéries), 3,7 kg, avec 4 ports de connexion. Sunology la présente aussi pour un usage camping ou pique-nique. Un chargeur secteur (environ 39 €) et un convertisseur AC 12V/230V (environ 129 €, sortie max 210 W) sont vendus séparément pour l’utiliser hors du solaire.',
  },
];

export default function SunologyVaultAvisPage() {
  return (
    <>
      <SchemaArticle title="Sunology VAULT avis 2026 : la batterie 700 Wh à 499 €" description="Avis indépendant de la batterie Sunology VAULT, vendue seule ou intégrée au PLAY MAX." url="https://monbalconsolaire.fr/avis/sunology-vault" datePublished="2026-11-10" dateModified="2026-11-10" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Sunology VAULT" brand="Sunology" description="Batterie nomade lithium-ion 700 Wh, IP65, amovible, conçue pour la station Sunology PLAY MAX." price={VAULT.priceEur} availability={SCHEMA_AVAILABILITY[VAULT.availability]} ratingValue={6} url="https://monbalconsolaire.fr/avis/sunology-vault" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology VAULT' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology VAULT' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Sunology VAULT avis : la batterie 700&nbsp;Wh vendue seule, vraiment utile&nbsp;?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">La VAULT est la batterie nomade de Sunology, int&eacute;gr&eacute;e de s&eacute;rie au PLAY MAX mais aussi vendue seule &agrave; {VAULT_PRICE}. Elle est cit&eacute;e sur des dizaines de pages du site sans avis d&eacute;di&eacute; : voici ce qu&apos;elle vaut, seule.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>10 novembre 2026</span><span>&middot;</span><span>7 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Sunology"
            name="VAULT"
            power="700 Wh"
            price={VAULT_PRICE}
            score="6/10"
            tagline="Batterie nomade lithium-ion 700 Wh, IP65, amovible. Vendue seule ou intégrée au PLAY MAX."
            affiliateUrl="https://sunology.eu/products/sunology-vault"
            affiliateLabel="Voir sur Sunology"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix relev&eacute; sur sunology.eu le 05/11/2026 (confirm&eacute; en interne via plusieurs pages du site) &middot; URL produit non revalid&eacute;e par curl ce jour : sunology.eu est inaccessible depuis cet environnement (blocage r&eacute;seau), v&eacute;rifiez le prix avant commande.</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation de la Sunology VAULT</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La VAULT est la batterie que Sunology a con&ccedil;ue pour son <Link href="/avis/sunology-play-max" className="text-green hover:underline">PLAY MAX</Link> : 700&nbsp;Wh en lithium-ion, log&eacute;e dans le ch&acirc;ssis de la station mais amovible. Elle se vend aussi s&eacute;par&eacute;ment, &agrave; {VAULT_PRICE}, pr&eacute;sent&eacute;e par Sunology comme une batterie &laquo;&nbsp;nomade&nbsp;&raquo; qui peut quitter le balcon pour du camping ou un pique-nique.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">C&apos;est une diff&eacute;rence structurelle avec les batteries fixes de la concurrence (Zendure SolarFlow, Beem Battery, EcoFlow STREAM) : la VAULT n&apos;est pas pens&eacute;e comme un onduleur-batterie qui reste branch&eacute; en permanence, mais comme un module l&eacute;ger (3,7&nbsp;kg) qu&apos;on retire et qu&apos;on recharge ailleurs si besoin.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '700 Wh', l: 'Capacité' },
                  { v: VAULT_PRICE, l: 'Prix seule' },
                  { v: '10 ans', l: 'Garantie' },
                  { v: 'IP65', l: 'Étanchéité' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-xs text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Capacité', '700 Wh (0,7 kWh), lithium-ion'],
                      ['Poids', '3,7 kg'],
                      ['Étanchéité', 'IP65 (pluie, poussière)'],
                      ['Garantie', '10 ans ou 2 500 cycles à 100 % de charge/décharge'],
                      ['Connectivité', '4 ports de connexion (amovible, usage nomade)'],
                      ['Compatibilité confirmée', 'Sunology PLAY MAX (intégrée de série)'],
                      ['Compatibilité non confirmée', 'PLAY, PLAY2, GO : non documentée par Sunology'],
                      ['Accessoires (en option)', 'Chargeur secteur (~39 €), convertisseur AC 12V/230V (~129 €, 210 W max)'],
                    ].map(([label, value], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3 font-semibold text-charcoal whitespace-nowrap">{label}</td>
                        <td className="py-2 px-3 text-charcoal-light">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Dimensions, temps de charge et puissance de charge/décharge précis non revérifiés directement sur sunology.eu dans cet environnement (accès bloqué) : nous ne les affichons pas pour éviter d&apos;avancer un chiffre non confirmé en premi&egrave;re source.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Vraiment amovible et nomade', d: 'Contrairement aux batteries fixes de la concurrence (Zendure SolarFlow, Beem Battery), la VAULT se retire facilement (3,7 kg) pour un usage en camping ou pique-nique, avec ses 4 ports de connexion.' },
                  { t: 'Étanchéité IP65', d: 'Elle peut rester sur un balcon exposé aux intempéries sans protection supplémentaire.' },
                  { t: 'Garantie 10 ans ou 2 500 cycles claire', d: 'Une garantie lisible et alignée sur le marché, même si la chimie lithium-ion (pas LFP) implique un nombre de cycles inférieur aux meilleures batteries concurrentes.' },
                  { t: 'Un vrai choix pour qui veut rester chez Sunology', d: 'Si vous avez déjà un PLAY MAX ou envisagez d’en acheter un, la VAULT est la seule option de la marque pour ce format de stockage nomade.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">{p.t}</h3>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunology VAULT" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/sunology-vault" label="Voir sur Sunology" variant="secondary" position="after-pros" price={VAULT_PRICE} />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Compatibilité floue hors PLAY MAX', d: 'Sunology ne documente pas clairement si la VAULT fonctionne avec un PLAY, un PLAY2 ou un GO déjà installés. C’est le point le plus bloquant pour qui voudrait ajouter du stockage à un kit existant : contactez le support avant d’acheter.' },
                  { t: `Prix élevé au kWh stocké (${EUR_PER_KWH} €/kWh)`, d: `À ${VAULT_PRICE} pour 700 Wh, c’est nettement plus cher au kWh qu’une batterie de balcon sans panneaux comme le Zendure SolarFlow 800 Plus (281 €/kWh) ou même la Sunology STOREY (632 €/kWh, 2,2 kWh).` },
                  { t: 'Autonomie limitée à une soirée', d: '700 Wh, c’est environ 5 heures sur un talon de consommation de 140 W : pas de quoi couvrir une nuit complète si vous voulez une vraie indépendance du réseau le soir et la nuit.' },
                  { t: 'Chimie lithium-ion, pas LFP', d: 'Les meilleures batteries concurrentes (Jackery SolarVault 3 Pro, Bluetti Balco 260) utilisent du LFP, plus stable thermiquement et offrant plus de cycles (6 000 contre 2 500 pour la VAULT).' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h3 className="font-bold text-sm mb-1">{p.t}</h3>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunology VAULT" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/sunology-vault" label="V&eacute;rifier le prix actuel" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">VAULT vs les autres batteries de balcon</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Batterie</th>
                      <th className="text-left py-2 px-3 font-bold">Capacité</th>
                      <th className="text-left py-2 px-3 font-bold">Prix seule</th>
                      <th className="text-left py-2 px-3 font-bold">€/kWh</th>
                      <th className="text-left py-2 px-3 font-bold">Chimie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Sunology VAULT', '0,7 kWh', VAULT_PRICE, `${EUR_PER_KWH} €`, 'Lithium-ion', true],
                      ['Zendure SolarFlow 800 Plus', '1,92 kWh', '539 €', '281 €', 'LFP', false],
                      ['EcoFlow STREAM Ultra', '1,92 kWh', priceLabel('ecoflow-stream-ultra'), '343 €', 'LFP', false],
                      ['Sunology STOREY', '2,2 kWh', '1 390 €', '632 €', 'LFP', false],
                      ['Jackery SolarVault 3 Pro', '2,52 kWh', priceLabel('jackery-solarvault-3-pro'), '285 €', 'LFP', false],
                    ].map(([name, cap, price, eurkwh, chem, highlight], i) => (
                      <tr key={i} className={highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3">{name as string}</td>
                        <td className="py-2 px-3">{cap as string}</td>
                        <td className="py-2 px-3">{price as string}</td>
                        <td className="py-2 px-3">{eurkwh as string}</td>
                        <td className="py-2 px-3">{chem as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Prix vérifiés le 05/11/2026 (05/06/2026 pour le Jackery, promotion en cours). €/kWh calculé sur le prix de la batterie seule, sans panneaux.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que cette batterie soit faite pour vous&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI solaire &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; : la VAULT allonge le ROI, pas l&apos;inverse</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec notre m&eacute;thodologie (Lyon, plein sud, PR 0,85, {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}), voici ce que donnerait l&apos;ajout d&apos;une VAULT &agrave; un <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY</Link> &mdash; <strong>en supposant la compatibilit&eacute; confirm&eacute;e</strong>, ce qui n&apos;est pas le cas aujourd&apos;hui&nbsp;:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: `${fr(playPlusVault.production)} kWh`, l: 'Production/an (inchangée)' },
                  { v: `${fr(playPlusVault.savings)} €`, l: 'Économies 1re année' },
                  { v: `${fr(playPlusVault.roi)} ans`, l: 'ROI estimé' },
                  { v: `${fr(playPlusVault.total25)} €`, l: 'Gains sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-xs text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">Le PLAY seul se rentabilise en {fr(playAlone.roi)}&nbsp;ans ({fr(playAlone.savings)}&nbsp;&euro; la premi&egrave;re ann&eacute;e). En ajoutant la VAULT ({fr(VAULT.priceEur)}&nbsp;&euro; de plus), l&apos;autoconsommation passe de 85&nbsp;% &agrave; 95&nbsp;%, mais le surco&ucirc;t n&apos;est pas rentabilis&eacute; par le gain d&apos;&eacute;conomies&nbsp;: le ROI s&apos;allonge &agrave; {fr(playPlusVault.roi)}&nbsp;ans. C&apos;est le m&ecirc;me constat que sur la page du <Link href="/avis/sunology-play-max" className="text-green hover:underline">PLAY MAX</Link>&nbsp;: la VAULT se justifie par le confort d&apos;usage (stocker pour le soir, batterie nomade), pas par le calcul financier pur.</p>
              <p className="text-charcoal-light leading-relaxed">Pour du stockage rentable, une batterie de balcon LFP comme le <Link href="/avis/zendure-solarflow" className="text-green hover:underline">Zendure SolarFlow 800 Plus</Link> (281&nbsp;&euro;/kWh) reste bien plus efficace au kWh stock&eacute;.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous n’avez pas de PLAY MAX et n’avez pas obtenu de confirmation écrite de Sunology sur la compatibilité avec votre station',
                  'Vous cherchez le meilleur prix au kWh stocké (le Zendure SolarFlow 800 Plus ou le Jackery SolarVault 3 Pro font mieux)',
                  'Vous voulez une autonomie sur toute la nuit (700 Wh ne suffisent pas)',
                  'Vous privilégiez une chimie LFP pour la longévité et la sécurité thermique',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La Sunology VAULT fait bien ce pour quoi elle a &eacute;t&eacute; con&ccedil;ue&nbsp;: &ecirc;tre la batterie amovible et nomade du <Link href="/avis/sunology-play-max" className="text-green hover:underline">PLAY MAX</Link>. IP65, 3,7&nbsp;kg, garantie 10&nbsp;ans&nbsp;: c&apos;est un produit soign&eacute; pour cet usage pr&eacute;cis.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Achet&eacute;e seule &agrave; {VAULT_PRICE}, en revanche, elle convainc moins&nbsp;: {EUR_PER_KWH}&nbsp;&euro;/kWh est cher face &agrave; la concurrence LFP, l&apos;autonomie reste limit&eacute;e &agrave; une soir&eacute;e, et surtout, Sunology ne confirme pas clairement sa compatibilit&eacute; avec un PLAY ou un GO d&eacute;j&agrave; install&eacute;s. Sans cette confirmation, l&apos;achat s&eacute;par&eacute; est un pari.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Notre conseil&nbsp;: si vous voulez du stockage Sunology, partez directement sur le PLAY MAX (compatibilit&eacute; garantie de s&eacute;rie). Si vous avez d&eacute;j&agrave; un kit Sunology et voulez ajouter du stockage, demandez une confirmation &eacute;crite au support avant de commander une VAULT seule &mdash; ou regardez une batterie de balcon ind&eacute;pendante comme le Zendure SolarFlow.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">6/10</span></strong></p>
              <a href="https://sunology.eu/products/sunology-vault" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir la Sunology VAULT &rarr;</a>
            </section>

            <AffiliateCTA productName="Sunology VAULT" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/sunology-vault" label="Voir l&#39;offre sur Sunology" variant="box" position="footer-box" price={VAULT_PRICE} />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
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
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-play-max" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY MAX</h3>
                  <p className="text-xs text-charcoal-light mt-1">La station 460&nbsp;W qui int&egrave;gre la VAULT de s&eacute;rie</p>
                </Link>
                <Link href="/avis/sunology-go" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology GO</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le kit compact sans stockage int&eacute;gr&eacute;</p>
                </Link>
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires avec batterie 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Tous les syst&egrave;mes avec stockage compar&eacute;s</p>
                </Link>
                <Link href="/avis/zendure-solarflow" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Zendure SolarFlow 800 Plus</h3>
                  <p className="text-xs text-charcoal-light mt-1">Une batterie de balcon LFP bien plus efficace au kWh</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI :</strong> ROI calcul&eacute; avec tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85&nbsp;% (95&nbsp;% avec batterie), Performance Ratio 0,85, Lyon sud. Sc&eacute;nario PLAY + VAULT&nbsp;: {fr(PLAY.priceEur + VAULT.priceEur)}&nbsp;&euro;, {fr(playPlusVault.savings)}&nbsp;&euro; la premi&egrave;re ann&eacute;e, ROI {fr(playPlusVault.roi)}&nbsp;ans, ~{fr(playPlusVault.total25)}&nbsp;&euro; sur 25&nbsp;ans &mdash; en supposant la compatibilit&eacute; confirm&eacute;e. Prix VAULT&nbsp;: {VAULT_PRICE}, relev&eacute; sur sunology.eu le 5 novembre 2026.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence&nbsp;:</strong> avis ind&eacute;pendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
