import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroVisual } from '@/components/HeroVisual';
import { siteStats } from '@/lib/stats';

export const metadata: Metadata = {
  title: 'MonBalconSolaire — Calculez vos économies solaires en 30 secondes',
  description:
    'Le guide indépendant des kits solaires pour balcon. Comparez Sunology, Beem, Sunethic. Calculez vos économies réelles avec notre simulateur gratuit.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-pale/60 via-cream to-green-pale/40 pointer-events-none" />
        <div className="container-brand relative py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="badge-green mb-6">Guide indépendant 2026</div>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.08] mb-6">
                Produisez votre électricité
                <br />
                <span className="text-green">depuis votre balcon</span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-8 max-w-xl">
                Comparez les meilleurs kits solaires plug-and-play, calculez vos économies réelles et passez au solaire sans travaux — même en appartement, même locataire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/calculateur" className="btn-primary text-base py-4 px-8">
                  Calculer mes économies →
                </Link>
                <Link href="/comparatif" className="btn-secondary text-base py-4 px-8">
                  Voir le comparatif 2026
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-stone">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  100% gratuit
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  Indépendant
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green" />
                  Sans inscription
                </span>
              </div>
            </div>

            {/* Right: visual */}
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '0,1940€', label: 'Prix du kWh EDF en 2026', suffix: '/kWh' },
              { value: '429-699€', label: 'Prix d\'un kit solaire balcon', suffix: '' },
              { value: '3-5 ans', label: 'Retour sur investissement', suffix: '' },
              { value: '25 ans', label: 'Garantie des panneaux', suffix: '' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-brand-lg bg-cream">
                <div className="font-mono font-medium text-amber-dark text-xl md:text-2xl mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-stone font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding">
        <div className="container-brand">
          <div className="text-center mb-14">
            <span className="badge-amber mb-4 inline-block">Comment ça marché</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Le solaire de balcon en 3 étapes
            </h2>
            <p className="text-charcoal-light max-w-lg mx-auto">
              Pas besoin d&apos;être électricien. Un kit solaire plug-and-play s&apos;installé en quelques minutes, sans travaux.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Calculez votre potentiel',
                desc: 'Entrez votre ville et l\'orientation de votre balcon. Notre calculateur estimé vos économies en 30 secondes.',
                color: 'bg-amber-pale text-amber-dark',
              },
              {
                step: '2',
                title: 'Comparez les kits',
                desc: 'Sunology, Beem ou Sunethic ? Nos comparatifs neutres et sourcés vous aident à choisir le kit adapté à votre situation.',
                color: 'bg-green-lighter text-green',
              },
              {
                step: '3',
                title: 'Branchez et économisez',
                desc: 'Posez le kit sur votre balcon, branchéz-le sur une prise, et commencez à produire votre électricité. C\'est tout.',
                color: 'bg-amber-pale text-amber-dark',
              },
            ].map((item, i) => (
              <div key={i} className="card-lg text-center group hover:shadow-brand-lg transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-lg font-extrabold mx-auto mb-5`}>
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="text-center mb-14">
            <span className="badge-green mb-4 inline-block">Comparatif 2026</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Les kits solaires de balcon les plus populaires
            </h2>
            <p className="text-charcoal-light max-w-lg mx-auto">
              Comparaison indépendante des meilleurs kits plug-and-play disponibles en France.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: '☀ Meilleur choix',
                name: 'Sunology PLAY2',
                brand: 'Sunology',
                power: '450 Wc',
                price: '599€',
                kwh: '565',
                roi: '3.6',
                slug: '/avis/sunology-play-2',
              },
              {
                badge: 'Meilleur prix',
                name: 'Beem Kit 300W',
                brand: 'Beem Energy',
                power: '300 Wc',
                price: '299€',
                kwh: '380',
                roi: '2.5',
                slug: '/avis/beem-kit-300w',
              },
              {
                badge: 'Made in France',
                name: 'Sunethic F500',
                brand: 'Sunethic',
                power: '500 Wc',
                price: '690€',
                kwh: '600',
                roi: '4.2',
                slug: '/avis/sunethic-f500',
              },
            ].map((kit, i) => (
              <div key={i} className="card-lg group hover:shadow-brand-lg transition-all duration-300">
                <div className="badge-green mb-4">{kit.badge}</div>
                <h3 className="font-bold text-xl mb-1">{kit.name}</h3>
                <p className="text-sm text-stone mb-5">{kit.brand} — {kit.power} bifacial</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center p-3 bg-cream rounded-brand">
                    <div className="font-mono font-medium text-green text-lg">{kit.price}</div>
                    <div className="text-[11px] text-stone font-medium mt-0.5">Prix</div>
                  </div>
                  <div className="text-center p-3 bg-cream rounded-brand">
                    <div className="font-mono font-medium text-green text-lg">{kit.kwh}</div>
                    <div className="text-[11px] text-stone font-medium mt-0.5">kWh/an</div>
                  </div>
                  <div className="text-center p-3 bg-cream rounded-brand">
                    <div className="font-mono font-medium text-green text-lg">{kit.roi}</div>
                    <div className="text-[11px] text-stone font-medium mt-0.5">ans ROI</div>
                  </div>
                </div>
                <Link href={kit.slug} className="btn-affiliate w-full justify-center">
                  Voir l&apos;avis complet →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/quel-kit-choisir" className="btn-secondary">
              Voir le comparatif complet →
            </Link>
          </div>
        </div>
      </section>

      {/* PREUVE SOCIALE */}
      <section className="section-padding bg-white">
        <div className="container-brand max-w-5xl">
          <div className="text-center mb-12">
            <div className="badge-green mb-4 inline-block">Ils ont calculé</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Des retours concrets de la communauté
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Ce que disent les utilisateurs de kits solaires plug-and-play en France.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card-lg bg-cream/40">
              <div className="flex gap-1 mb-3 text-amber text-sm">★★★★★</div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4 italic">
                &laquo; Installé en 10 minutes sur mon balcon à Lyon. Ma consommation a baissé de 15% dès le premier mois. Franchement, je regrette de ne pas l&apos;avoir fait plus tôt. &raquo;
              </p>
              <div className="text-xs text-stone">
                <strong className="text-charcoal">Thomas L.</strong> — Lyon, Sunology PLAY2
              </div>
            </div>

            <div className="card-lg bg-cream/40">
              <div className="flex gap-1 mb-3 text-amber text-sm">★★★★★</div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4 italic">
                &laquo; J&apos;étais sceptique, je l&apos;avoue. Mais après 4 mois, je vois clairement l&apos;impact sur ma facture EDF. Le plus dur a été de convaincre ma copro, pas l&apos;installation. &raquo;
              </p>
              <div className="text-xs text-stone">
                <strong className="text-charcoal">Sophie M.</strong> — Bordeaux, Beem On 460W
              </div>
            </div>

            <div className="card-lg bg-cream/40">
              <div className="flex gap-1 mb-3 text-amber text-sm">★★★★☆</div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4 italic">
                &laquo; Le calculateur m&apos;a aidé à comprendre que mon balcon nord ne serait pas rentable. Gain de temps énorme avant d&apos;investir 600€ pour rien. &raquo;
              </p>
              <div className="text-xs text-stone">
                <strong className="text-charcoal">Marc D.</strong> — Paris 19e, projet annulé
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-stone pt-8 border-t border-border-light">
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-green">{siteStats.calculsEffectues}</div>
              <div className="text-xs mt-1">calculs effectués</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-green">{siteStats.articlesPublies}</div>
              <div className="text-xs mt-1">guides publiés</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-green">{siteStats.kitsTestes}</div>
              <div className="text-xs mt-1">kits testés</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-green">{siteStats.departementsCouverts}</div>
              <div className="text-xs mt-1">départements couverts</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA CALCULATOR */}
      <section className="section-padding">
        <div className="container-brand">
          <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/40 border-green/10 text-center py-14">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Votre balcon est-il rentable pour le solaire ?
            </h2>
            <p className="text-charcoal-light max-w-md mx-auto mb-8 text-lg">
              Répondez à 4 questions simples et découvrez combien vous pouvez économiser chaque année.
            </p>
            <Link href="/calculateur" className="btn-primary text-base py-4 px-10 shadow-green">
              ☀ Calculer mes économies gratuitement →
            </Link>
            <p className="text-xs text-stone mt-4">Gratuit, sans inscription, résultat en 30 secondes.</p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 bg-white border-t border-border-light">
        <div className="container-brand">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-stone">
            <span>✓ Guide 100% indépendant</span>
            <span className="hidden md:inline text-border">|</span>
            <span>✓ Données sourcées (PVGIS, EDF)</span>
            <span className="hidden md:inline text-border">|</span>
            <span>✓ Aucun produit vendu</span>
            <span className="hidden md:inline text-border">|</span>
            <span>✓ Comparatifs neutres et transparents</span>
          </div>
        </div>
      </section>
    </>
  );
}
