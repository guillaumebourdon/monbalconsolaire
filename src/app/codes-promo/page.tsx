import Link from 'next/link';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EmailCapture } from '@/components/ui/EmailCapture';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Codes promo kits solaires 2026 : Sunology, Beem, Zendure',
  description: 'Tous les codes promo et bons plans actifs pour acheter votre kit solaire balcon. Mis \u00e0 jour chaque semaine. Inscrivez-vous pour les codes exclusifs.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/codes-promo',
  },
};

const promos = [
  { brand: 'Sunology', kit: 'PLAY 2', deal: 'Livraison offerte', reduction: '-20 \u20ac', code: 'Automatique', valable: 'Permanent', url: 'https://sunology.eu/products/play2-kit-solaire', merchantName: 'Sunology' },
  { brand: 'Beem', kit: 'Kit 300W', deal: 'Prix le plus bas du march\u00e9', reduction: '299 \u20ac', code: '\u2014', valable: 'Permanent', url: 'https://beemenergy.fr/products/kit-beem', merchantName: 'Beem Energy' },
  { brand: 'Beem', kit: 'On 460W', deal: 'Paiement en 10x sans frais', reduction: '~60 \u20ac/mois', code: 'Automatique', valable: 'Permanent', url: 'https://beemenergy.fr/products/beem-kit-solaire-plug-play', merchantName: 'Beem Energy' },
  { brand: 'Sunethic', kit: 'F500', deal: 'Made in France, livraison incluse', reduction: '\u2014', code: '\u2014', valable: 'Permanent', url: 'https://sunethic.fr/produits', merchantName: 'Sunethic' },
];

export default function CodesPromoPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-3xl">
        <Breadcrumbs items={[{ label: 'Codes promo' }]} />

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Codes promo et bons plans solaire balcon &middot; Mai 2026
        </h1>
        <p className="text-charcoal-light text-lg mb-8">
          Tous les codes promo actifs des marques de kits solaires, v&eacute;rifi&eacute;s chaque semaine.
        </p>

        {/* Email capture — top of page */}
        <div className="card-lg bg-gradient-to-br from-amber-pale/40 via-white to-green-pale/20 border-amber/10 mb-10 reveal">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">&#127873;</span>
            <div>
              <h2 className="font-bold text-base mb-1">Codes exclusifs MonBalconSolaire</h2>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Nous n&eacute;gocions des codes promo exclusifs avec les marques. Inscrivez-vous pour &ecirc;tre pr&eacute;venu&middot;e d&egrave;s qu&apos;on en a un, et recevez la liste mise &agrave; jour des bons plans.
              </p>
            </div>
          </div>
          <EmailCapture
            endpoint="/api/email/subscribe-promo"
            source="codes_promo"
            buttonLabel="Je m'inscris"
            successMessage="Inscription confirm&eacute;e ! V&eacute;rifiez votre bo&icirc;te email."
          />
        </div>

        {/* Current deals table */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-extrabold mb-4 reveal">Bons plans actuels</h2>
            <div className="space-y-3 reveal">
              {promos.map((p, i) => (
                <div key={i} className="card flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">{p.brand}</span>
                      <span className="text-xs text-stone">{p.kit}</span>
                    </div>
                    <p className="text-sm text-charcoal-light">{p.deal}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-stone">
                      {p.code !== '\u2014' && <span className="font-mono bg-amber-pale text-amber-dark px-2 py-0.5 rounded">{p.code}</span>}
                      <span>Valable : {p.valable}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <AffiliateCTA productName={`${p.brand} ${p.kit}`} merchantName={p.merchantName} affiliateUrl={p.url} label="Voir l'offre" variant="inline" position="codes_promo" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="reveal">
            <h2 className="text-2xl font-extrabold mb-4">Comment &ccedil;a marche ?</h2>
            <div className="card-lg bg-cream/50 space-y-4 text-sm text-charcoal-light leading-relaxed">
              <div>
                <h4 className="font-bold text-charcoal mb-1">Pourquoi cette page existe ?</h4>
                <p>Parce qu&apos;on cherche tous &agrave; payer le bon prix. On surveille chaque semaine les offres des marques et on met &agrave; jour cette page dans les 48h.</p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">Comment on gagne de l&apos;argent ?</h4>
                <p>Quand vous achetez via nos liens, on touche une commission de 3 &agrave; 8%. Votre prix reste identique. Cette page n&apos;est PAS un classement payant &mdash; on liste tout ce qu&apos;on trouve.</p>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-1">Sur les codes exclusifs</h4>
                <p>&Agrave; ce jour, nous n&apos;avons pas encore n&eacute;goci&eacute; de code exclusif. Nous d&eacute;marrons les discussions au S2 2026. Inscrivez-vous pour &ecirc;tre pr&eacute;venu&middot;e d&egrave;s qu&apos;on a notre premier code MBS-XXX.</p>
              </div>
            </div>
          </section>

          <div className="text-center reveal">
            <p className="text-sm text-charcoal-light mb-4">Pas encore d&eacute;cid&eacute; ? Calculez d&apos;abord votre rentabilit&eacute;.</p>
            <Link href="/calculateur" className="btn-primary inline-flex">
              Calculer mes &eacute;conomies &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-light">
          <p className="text-xs text-stone">
            Mis &agrave; jour le 18 mai 2026 &middot; Prochaine mise &agrave; jour : 25 mai 2026 &middot; <Link href="/a-propos" className="text-green hover:underline">&Agrave; propos</Link> &middot; <Link href="/methodologie" className="text-green hover:underline">M&eacute;thodologie</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
