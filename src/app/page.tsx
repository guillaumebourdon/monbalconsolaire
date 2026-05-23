import Link from 'next/link';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { siteStats } from '@/lib/stats';

const HeroVisual = dynamic(() => import('@/components/HeroVisual').then(m => m.HeroVisual), {
  ssr: false,
  loading: () => (
    <div className="aspect-square bg-white rounded-brand-xl border border-border shadow-brand p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-10 bg-cream-dark/40 rounded-xl w-24 mx-auto" />
        <div className="h-3 bg-cream-dark/30 rounded-full w-full" />
        <div className="h-3 bg-cream-dark/30 rounded-full w-3/4" />
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="h-14 bg-cream-dark/20 rounded-brand" />
          <div className="h-14 bg-cream-dark/20 rounded-brand" />
          <div className="h-14 bg-cream-dark/20 rounded-brand" />
        </div>
        <div className="flex gap-1 mt-2">{Array.from({length:12}).map((_,i) => <div key={i} className="flex-1 bg-cream-dark/20 rounded-sm" style={{height: `${20 + Math.sin(i*0.8)*15}px`}} />)}</div>
        <div className="h-12 bg-cream-dark/20 rounded-brand mt-2" />
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'MonBalconSolaire — Calculez vos économies solaires en 30 secondes',
  description:
    'Le guide indépendant des kits solaires pour balcon. Comparez Sunology, Zendure, Beem, EcoFlow, Sunethic. Calculez vos économies réelles avec notre simulateur gratuit.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-pale/20 via-cream to-amber-pale/10 pointer-events-none hero-gradient" />
        {/* Floating ambient orbs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-amber/5 blur-3xl float float-delay-1 pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-48 h-48 rounded-full bg-green/5 blur-3xl float-slow float-delay-2 pointer-events-none" />
        <div className="container-brand relative py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="badge-green mb-6 reveal-blur">Guide ind&eacute;pendant 2026</div>
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.08] mb-6 reveal" style={{ transitionDelay: '80ms' }}>
                Produisez votre &eacute;lectricit&eacute;
                <br />
                <span className="text-shimmer">depuis votre balcon</span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-8 max-w-xl reveal" style={{ transitionDelay: '160ms' }}>
                Comparez les meilleurs kits solaires plug-and-play, calculez vos économies réelles et passez au solaire sans travaux — même en appartement, même locataire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 reveal" style={{ transitionDelay: '240ms' }}>
                <Link href="/calculateur" className="btn-primary text-base py-4 px-8">
                  Calculer mes économies →
                </Link>
                <Link href="/comparatif" className="btn-secondary text-base py-4 px-8">
                  Voir le comparatif 2026
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-stone reveal" style={{ transitionDelay: '320ms' }}>
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
            <div className="hidden lg:block float-slow">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-group">
            {[
              { value: '80-130\u20ac/an', label: 'd\'\u00e9conomies selon votre r\u00e9gion' },
              { value: '25 ans', label: 'Garantie des panneaux' },
              { value: '299-900\u20ac', label: 'Prix d\'un kit solaire balcon' },
              { value: '5-8 ans', label: 'Selon le kit et votre exposition' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-brand-lg bg-cream reveal">
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
      <div className="container-brand"><hr className="border-border-light" /></div>
      <section className="section-padding">
        <div className="container-brand">
          <div className="text-center mb-14">
            <span className="badge-amber mb-4 inline-block">Comment ça marche</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Le solaire de balcon en 3 étapes
            </h2>
            <p className="text-charcoal-light max-w-lg mx-auto">
              Pas besoin d&apos;être électricien. Un kit solaire plug-and-play s&apos;installe en quelques minutes, sans travaux.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 reveal-group">
            {[
              {
                step: '1',
                title: 'Calculez votre potentiel',
                desc: 'Entrez votre ville et l\'orientation de votre balcon. Notre calculateur estime vos \u00e9conomies en 30 secondes.',
                color: 'bg-amber-pale text-amber-dark',
                icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>',
              },
              {
                step: '2',
                title: 'Comparez les kits',
                desc: 'Sunology, Beem ou Sunethic ? Nos comparatifs neutres et sourc\u00e9s vous aident \u00e0 choisir le kit adapt\u00e9.',
                color: 'bg-green-lighter text-green',
                icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M21 3l-7 7"/><path d="M3 3l7 7"/><path d="M16 21h5v-5"/><path d="M8 21H3v-5"/><path d="M21 21l-7-7"/><path d="M3 21l7-7"/></svg>',
              },
              {
                step: '3',
                title: 'Branchez et \u00e9conomisez',
                desc: 'Posez le kit sur votre balcon, branchez-le sur une prise, et commencez \u00e0 produire votre \u00e9lectricit\u00e9. C\'est tout.',
                color: 'bg-amber-pale text-amber-dark',
                icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>',
              },
            ].map((item, i) => (
              <div key={i} className="card-lg text-center group hover:shadow-brand-lg transition-shadow duration-300 reveal">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-5`}>
                  <span className="font-extrabold text-lg">{item.step}</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 reveal-group">
            {[
              {
                badge: 'Meilleur choix',
                name: 'Sunology PLAY2',
                brand: 'Sunology',
                power: '450 Wc',
                price: '599\u20ac',
                roi: '4,6 ans',
                slug: '/avis/sunology-play-2',
              },
              {
                badge: 'Meilleur stockage',
                name: 'Zendure SolarFlow',
                brand: 'Zendure',
                power: '840 W + batterie',
                price: '900\u20ac',
                roi: '5,1 ans',
                slug: '/avis/zendure-solarflow',
              },
              {
                badge: 'Petit budget',
                name: 'Beem Kit 300W',
                brand: 'Beem Energy',
                power: '300 Wc',
                price: '299\u20ac',
                roi: '3,4 ans',
                slug: '/avis/beem-kit-300w',
              },
              {
                badge: 'Modulaire',
                name: 'Beem On 460W',
                brand: 'Beem Energy',
                power: '460 Wc',
                price: '599\u20ac',
                roi: '4,5 ans',
                slug: '/avis/beem-on-460w',
              },
            ].map((kit, i) => (
              <Link key={i} href={kit.slug} className="card-lg group hover:shadow-brand-lg transition-all duration-300 reveal">
                <div className="badge-green mb-3 text-[10px]">{kit.badge}</div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-green transition-colors">{kit.name}</h3>
                <p className="text-xs text-stone mb-4">{kit.brand} &mdash; {kit.power}</p>
                <div className="flex items-baseline justify-between mb-4">
                  <div className="font-mono font-bold text-green text-xl">{kit.price}</div>
                  <div className="text-xs text-stone">ROI {kit.roi}</div>
                </div>
                <span className="btn-affiliate w-full justify-center text-xs">
                  Voir l&apos;avis &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/quel-kit-choisir" className="btn-secondary">
              Voir le comparatif complet →
            </Link>
          </div>
        </div>
      </section>

      {/* CAS TYPES */}
      <section className="section-padding bg-white">
        <div className="container-brand max-w-5xl">
          <div className="text-center mb-12">
            <div className="badge-green mb-4 inline-block">Simulations</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Cas types &mdash; exemples de simulation
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Trois profils r&eacute;els simul&eacute;s avec notre calculateur. Les r&eacute;sultats varient selon la r&eacute;gion, l&apos;orientation et le kit choisi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 reveal-group">
            <div className="card-lg reveal">
              <div className="text-[10px] font-bold uppercase tracking-wider text-green mb-3">Profil type &mdash; Lyon, balcon sud</div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                Appartement T3, actif en journ&eacute;e. Sunology PLAY 2 (450 Wc, 599 &euro;). Production estim&eacute;e : <strong>497 kWh/an</strong>. &Eacute;conomies : <strong>97 &euro;/an</strong>.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-green">ROI 6,2 ans</span>
                <span className="badge-green text-[9px]">&#10003; Rentable</span>
              </div>
            </div>

            <div className="card-lg reveal">
              <div className="text-[10px] font-bold uppercase tracking-wider text-green mb-3">Profil type &mdash; Marseille, terrasse sud</div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                Maison, t&eacute;l&eacute;travail. Zendure SolarFlow + 2 &times; 420 W (900 &euro;). Production : <strong>1 083 kWh/an</strong>. Avec batterie (80 % autocons.) : <strong>168 &euro;/an</strong>.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-green">ROI 5,4 ans</span>
                <span className="badge-green text-[9px]">&#10003; Rentable</span>
              </div>
            </div>

            <div className="card-lg reveal">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-dark mb-3">Profil type &mdash; Lille, balcon nord-est</div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                Appartement T2, balcon nord-est. Beem Kit 300W (299 &euro;). Production estim&eacute;e : <strong>208 kWh/an</strong>. &Eacute;conomies : <strong>40 &euro;/an</strong>.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-dark">ROI 7,5 ans</span>
                <span className="badge-amber text-[9px]">&#9888; Marginal</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-stone text-center mb-8">
            Simulations bas&eacute;es sur les donn&eacute;es PVGIS et le tarif r&eacute;glement&eacute; EDF en vigueur (0,1940 &euro;/kWh). R&eacute;sultats indicatifs, variant selon votre situation r&eacute;elle.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-stone pt-8 border-t border-border-light">
            <div className="text-center number-pop">
              <div className="font-mono text-2xl font-bold text-green">{siteStats.articlesPublies}</div>
              <div className="text-xs mt-1">guides publi&eacute;s</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border"></div>
            <div className="text-center number-pop" style={{ animationDelay: '0.15s' }}>
              <div className="font-mono text-2xl font-bold text-green">{siteStats.kitsAnalyses}</div>
              <div className="text-xs mt-1">kits analys&eacute;s</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border"></div>
            <div className="text-center number-pop" style={{ animationDelay: '0.3s' }}>
              <div className="font-mono text-2xl font-bold text-green">{siteStats.departementsCouverts}</div>
              <div className="text-xs mt-1">d&eacute;partements couverts</div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="section-padding bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber/5 blur-3xl float pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green/5 blur-3xl float-slow float-delay-2 pointer-events-none" />
        <div className="container-brand max-w-5xl relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="reveal-left">
              <div className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-amber text-charcoal mb-4">
                Guide gratuit
              </div>
              <h2 className="font-extrabold text-3xl md:text-4xl mb-4 leading-tight">
                7 erreurs à <span className="text-amber italic">éviter</span><br />
                avant d&apos;acheter un kit solaire
              </h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-6">
                Les pièges que personne ne vous dit. 12 pages, 15 minutes de lecture, indispensable avant d&apos;investir 300 à 800 €.
              </p>
              <Link
                href="/guide-gratuit"
                className="inline-flex items-center gap-2 bg-amber text-charcoal font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-brand hover:bg-amber-bright transition-colors"
              >
                📄 Télécharger le guide
              </Link>
              <p className="text-xs text-cream/50 mt-3">
                Téléchargement immédiat · Pas besoin d&apos;email · PDF 120 Ko
              </p>
            </div>

            {/* Preview PDF */}
            <div className="md:justify-self-end reveal-right float-slow">
              <Link
                href="/guide-gratuit"
                className="block relative bg-cream rounded-brand shadow-2xl aspect-[1/1.414] w-full max-w-[280px] mx-auto p-6 overflow-hidden transform hover:rotate-0 rotate-2 transition-transform duration-300"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-60">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="sunHome" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#E8961A" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#E8961A" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="100" fill="url(#sunHome)"/>
                    <circle cx="100" cy="100" r="45" fill="none" stroke="#E8961A" strokeWidth="0.5" opacity="0.6"/>
                    <circle cx="100" cy="100" r="35" fill="#E8961A" opacity="0.15"/>
                  </svg>
                </div>

                <div className="relative z-10 border-b border-charcoal pb-2 flex justify-between items-start text-charcoal">
                  <span className="font-serif font-bold text-[9px]">Monbalconsolaire<span className="text-amber font-black">.</span>fr</span>
                  <span className="text-[7px] tracking-widest uppercase text-stone">N° 01/2026</span>
                </div>

                <div className="relative z-10 mt-10">
                  <div className="text-[8px] tracking-widest uppercase text-green-dark font-semibold mb-2">— L&apos;essentiel</div>
                  <h3 className="font-serif font-bold text-xl leading-tight text-charcoal">
                    Sept <span className="italic text-green">erreurs</span><br />
                    à éviter<br />
                    avant d&apos;acheter<br />
                    un kit solaire
                  </h3>
                </div>

                <div className="absolute bottom-6 left-6 right-6 border-t border-charcoal pt-3 flex items-end">
                  <div className="flex gap-3">
                    <div>
                      <div className="font-serif font-bold text-base text-charcoal leading-none">07</div>
                      <div className="text-[6px] tracking-widest uppercase text-stone mt-0.5">Erreurs</div>
                    </div>
                    <div>
                      <div className="font-serif font-bold text-base text-charcoal leading-none">15&apos;</div>
                      <div className="text-[6px] tracking-widest uppercase text-stone mt-0.5">Lecture</div>
                    </div>
                  </div>
                  <div className="ml-auto font-serif italic text-amber font-bold text-xs">Gratuit.</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT HUBS */}
      <div className="container-brand"><hr className="border-border-light" /></div>
      <section className="section-padding">
        <div className="container-brand">
          <div className="text-center mb-14">
            <span className="badge-green mb-4 inline-block">Ressources</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Explorez nos guides et analyses
            </h2>
            <p className="text-charcoal-light max-w-lg mx-auto">
              Tout ce qu&apos;il faut savoir avant de passer au solaire de balcon : guides pratiques, analyses chiffrées, réglementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-group">
            <Link href="/tout-savoir" className="card-lg card-glow group hover:shadow-brand-lg transition-all duration-300 reveal">
              <div className="w-10 h-10 rounded-brand bg-green-pale flex items-center justify-center mb-3 group-hover:bg-green/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D7A4A" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-green transition-colors">Tout savoir</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">Guides pratiques, analyses chiffr&eacute;es et r&eacute;glementation en un seul endroit.</p>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Explorer &rarr;</span>
            </Link>
            <Link href="/guide" className="card-lg card-glow group hover:shadow-brand-lg transition-all duration-300 reveal">
              <div className="w-10 h-10 rounded-brand bg-green-pale flex items-center justify-center mb-3 group-hover:bg-green/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D7A4A" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-green transition-colors">Guides pratiques</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">Installation, orientation, r&eacute;glementation, copropri&eacute;t&eacute;, d&eacute;claration Enedis.</p>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Lire les guides &rarr;</span>
            </Link>
            <Link href="/blog" className="card-lg card-glow group hover:shadow-brand-lg transition-all duration-300 reveal">
              <div className="w-10 h-10 rounded-brand bg-amber-pale flex items-center justify-center mb-3 group-hover:bg-amber/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C47D0E" strokeWidth="2" strokeLinecap="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-green transition-colors">Blog &amp; analyses</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">Rentabilit&eacute;, prix de l&apos;&eacute;lectricit&eacute;, production hivernale, autoconsommation.</p>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Lire les articles &rarr;</span>
            </Link>
            <Link href="/accessoires" className="card-lg card-glow group hover:shadow-brand-lg transition-all duration-300 reveal">
              <div className="w-10 h-10 rounded-brand bg-green-pale flex items-center justify-center mb-3 group-hover:bg-green/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D7A4A" strokeWidth="2" strokeLinecap="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-green transition-colors">Accessoires</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">Prises connect&eacute;es, batteries portables, lampes solaires et mini kits Amazon.</p>
              <span className="text-green font-semibold text-sm mt-3 inline-block">Voir les accessoires &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DERNIERS ARTICLES */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="text-center mb-10">
            <span className="badge-amber mb-4 inline-block">Nouveaut&eacute;s</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Derniers articles publi&eacute;s
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 reveal-group">
            <Link href="/blog/prises-connectees-suivi-solaire" className="card-lg card-glow group hover:shadow-brand-lg transition-all">
              <div className="badge-amber mb-3 text-[10px]">S&eacute;lection 2026</div>
              <h3 className="font-bold text-base mb-2 group-hover:text-green transition-colors">Meilleures prises connect&eacute;es pour suivi solaire</h3>
              <p className="text-xs text-charcoal-light leading-relaxed">Tapo P110, Shelly, Meross : mesurer votre production.</p>
              <div className="text-xs text-stone mt-3">20 mai 2026 &middot; 8 min</div>
            </Link>
            <Link href="/blog/kit-solaire-pluie-grele" className="card-lg card-glow group hover:shadow-brand-lg transition-all">
              <div className="badge-amber mb-3 text-[10px]">Guide pratique</div>
              <h3 className="font-bold text-base mb-2 group-hover:text-green transition-colors">Kit solaire : que faire quand il pleut ou gr&ecirc;le ?</h3>
              <p className="text-xs text-charcoal-light leading-relaxed">Production, r&eacute;sistance, assurance. R&eacute;ponses concr&egrave;tes.</p>
              <div className="text-xs text-stone mt-3">18 mai 2026 &middot; 9 min</div>
            </Link>
            <Link href="/comparatif/meilleur-kit-solaire-terrasse-2026" className="card-lg card-glow group hover:shadow-brand-lg transition-all">
              <div className="badge-green mb-3 text-[10px]">Comparatif</div>
              <h3 className="font-bold text-base mb-2 group-hover:text-green transition-colors">Meilleur kit solaire pour terrasse 2026</h3>
              <p className="text-xs text-charcoal-light leading-relaxed">Pose au sol, multi-panneaux, 3 setups par budget.</p>
              <div className="text-xs text-stone mt-3">13 mai 2026 &middot; 10 min</div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-secondary">
              Tous les articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA CALCULATOR */}
      <section className="section-padding">
        <div className="container-brand">
          <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/40 border-green/10 text-center py-14 reveal-scale">
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
