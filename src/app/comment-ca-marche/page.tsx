import Link from 'next/link';
import type { Metadata } from 'next';
import { withCanonicalOg } from '@/lib/metadata';
import { calculateProductionKwh, calculateFirstYearSavings, calculateROIYears, calculateTotalSavings25Years } from '@/lib/pricing';
import { productibleSite } from '@/lib/rentabilite-departements';
import { DEPARTMENTS } from '@/data/departments';
import { PRODUCTS, priceLabel } from '@/data/products';

// Ordres de grandeur calculés au build (pricing.ts + products.ts) : Sunology PLAY plein sud, de Lille à Marseille.
const PLAY = PRODUCTS['sunology-play'];
const GO = PRODUCTS['sunology-go'];
const prod = (code: string) => productibleSite(DEPARTMENTS.find((d) => d.code === code)!.irradiation);
const playIn = (code: string) => ({ kitPriceEur: PLAY.priceEur, kitPowerWc: PLAY.powerWc, productibleKwhPerKwc: prod(code) });
const fr = (n: number) => n.toLocaleString('fr-FR');
const PROD_MIN = calculateProductionKwh(playIn('59'));
const PROD_MAX = calculateProductionKwh(playIn('13'));
const SAV_MIN = Math.round(calculateFirstYearSavings(playIn('59')));
const SAV_MAX = Math.round(calculateFirstYearSavings(playIn('13')));
const ROI_MIN = calculateROIYears(playIn('13'));
const ROI_MAX = calculateROIYears(playIn('59'));
const TOTAL_MIN = Math.floor(calculateTotalSavings25Years(playIn('59')) / 100) * 100;
const GO_ROI = calculateROIYears({ kitPriceEur: GO.priceEur, kitPowerWc: GO.powerWc });

export const metadata: Metadata = withCanonicalOg({
  title: 'Comment ça marche : le solaire de balcon expliqué simplement',
  description: 'Branchez, produisez, économisez : le fonctionnement d\'un kit solaire plug-and-play expliqué en 3 étapes, sans jargon.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comment-ca-marche',
  },
});

export default function CommentCaMarchePage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-16">
          <div className="badge-green mb-4 inline-block">Le solaire de balcon</div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">Comment &ccedil;a marche ?</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">Un kit solaire plug-and-play se branche sur une prise, produit de l&apos;&eacute;lectricit&eacute;, et r&eacute;duit votre facture. Pas de travaux, pas d&apos;&eacute;lectricien, et une seule d&eacute;marche&nbsp;: la d&eacute;claration gratuite &agrave; Enedis avant de le brancher.</p>
        </div>

        <div className="space-y-8 mb-16">
          {[
            { step: '1', title: 'Branchez', desc: 'Le kit arrive pr\u00eat \u00e0 l\u2019emploi. Posez le panneau sur votre balcon (au sol, contre le mur ou sur le garde-corps) puis, une fois la d\u00e9claration faite aupr\u00e8s d\u2019Enedis (CACSI ou cession gratuite du surplus, en ligne), branchez le c\u00e2ble sur une prise standard. Installation : 1 \u00e0 5 minutes.', detail: 'Le micro-onduleur int\u00e9gr\u00e9 transforme le courant continu du panneau en courant alternatif 230V \u2014 le m\u00eame que celui de vos prises.' },
            { step: '2', title: 'Produisez', desc: 'D\u00e8s que le soleil brille, votre panneau produit de l\u2019\u00e9lectricit\u00e9. Elle circule dans votre r\u00e9seau domestique et alimente vos appareils en priorit\u00e9 : frigo, box internet, appareils en veille.', detail: `Un Sunology PLAY (${PLAY.powerWc} W) plein sud produit environ ${fr(PROD_MIN)} \u00e0 ${fr(PROD_MAX)} kWh par an selon votre r\u00e9gion (de Lille \u00e0 Marseille). C\u2019est automatique et transparent.` },
            { step: '3', title: '\u00c9conomisez', desc: `Chaque kWh produit par votre panneau est un kWh que vous n\u2019achetez pas \u00e0 EDF. Votre compteur tourne moins, votre facture baisse. Avec un kit de ce type plein sud : ${SAV_MIN} \u00e0 ${SAV_MAX} \u20ac d\u2019\u00e9conomies la premi\u00e8re ann\u00e9e.`, detail: `Le retour sur investissement est atteint en ${fr(ROI_MIN)} \u00e0 ${fr(ROI_MAX)} ans selon la r\u00e9gion. Le panneau est garanti 25 ans. Sur cette dur\u00e9e, vous \u00e9conomisez plus de ${fr(TOTAL_MIN)} \u20ac (inflation 3,3 %/an et d\u00e9gradation des panneaux 0,5 %/an comprises).` },
          ].map((s) => (
            <div key={s.step} className="card-lg flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-green text-white flex items-center justify-center font-extrabold text-2xl flex-shrink-0">{s.step}</div>
              <div>
                <h2 className="font-extrabold text-2xl mb-2">{s.title}</h2>
                <p className="text-charcoal-light leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm text-stone leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card-lg bg-amber-pale/30 border-amber/10 mb-12">
          <h2 className="font-extrabold text-xl mb-4">Et la nuit ? Et quand il pleut ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-sm text-amber-dark mb-1">La nuit</h3>
              <p className="text-sm text-charcoal-light">Le panneau ne produit pas. Votre logement bascule automatiquement sur le r&eacute;seau EDF. Aucune coupure, c&apos;est transparent.</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-amber-dark mb-1">Temps couvert / pluie</h3>
              <p className="text-sm text-charcoal-light">Le panneau produit moins (10-25% de sa capacit&eacute;), mais il produit quand m&ecirc;me. La diff&eacute;rence est compl&eacute;t&eacute;e par EDF.</p>
            </div>
          </div>
        </div>

        <div className="card-lg bg-green-pale/30 border-green/10 mb-12">
          <h2 className="font-extrabold text-xl mb-4">C&apos;est pour qui ?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { who: 'Locataires', why: 'Le kit est amovible. Vous l\u2019emportez en cas de d\u00e9m\u00e9nagement. Aucune modification du logement.' },
              { who: 'Propri\u00e9taires d\u2019appartement', why: 'Pas besoin de toit. Un balcon, une terrasse ou un rebord de fen\u00eatre suffit.' },
              { who: 'Petits budgets', why: `Des kits complets d\u00e8s ${priceLabel('sunology-go')} (Sunology GO, ${GO.powerWc} W), rentabilis\u00e9 en ${fr(GO_ROI)} ans environ \u00e0 Lyon plein sud. Z\u00e9ro maintenance.` },
            ].map((p, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-sm text-green mb-2">{p.who}</h3>
                <p className="text-xs text-charcoal-light leading-relaxed">{p.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mb-12">
          <p className="font-extrabold text-xl mb-2">Combien pouvez-vous &eacute;conomiser ?</p>
          <p className="text-sm text-charcoal-light mb-4">Notre calculateur estime votre production et vos &eacute;conomies en 30 secondes.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-stone mb-4">Vous savez d&eacute;j&agrave; comment &ccedil;a marche ?</p>
          <Link href="/quel-kit-choisir" className="text-green font-semibold hover:underline">Comparez les meilleurs kits 2026 &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
