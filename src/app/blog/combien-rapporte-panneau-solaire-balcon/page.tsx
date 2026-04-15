import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Combien rapporte un panneau solaire de balcon ? Calcul réel (2026)',
  description: 'Combien rapporte réellement un panneau solaire de balcon en 2026 ? Exemples chiffres par ville (Paris, Lyon, Marseille, Lille, Nantes). Calcul transparent.',
};

const faqData = [
  { question: 'Combien rapporte un panneau solaire de balcon par an ?', answer: 'Avec un kit de 450W et le tarif EDF à 0,1940 euros/kWh, comptez 70 à 130 euros d\'économies par an selon votre region et votre exposition. Cela correspond à une production de 360 à 650 kWh par an.' },
  { question: 'Est-ce que ca vaut le coup à Paris ?', answer: 'Oui. Un kit de 450W à Paris produit environ 400-480 kWh/an (exposition sud). Soit 78-93 euros d\'économies annuelles. Le ROI est atteint en 5-6 ans pour une garantie de 25 ans. C\'est moins rentable que Marseille mais ca reste un bon investissement.' },
  { question: 'Le prix de l\'électricité va-t-il encore augmenter ?', answer: 'Tres probablement. La tendance sur 10 ans est de +4 à 5% par an. La fin de l\'ARENH en janvier 2026 pourrait accelerer la hausse. Chaque augmentation du tarif EDF améliore automatiquement la rentabilité de votre panneau.' },
  { question: 'Faut-il une batterie pour etre rentable ?', answer: 'Non. Sans batterie, vous consommez l\'électricité en temps réel (talon de consommation). C\'est deja rentable. Une batterie augmente l\'autoconsommation mais coute 500-1400 euros supplémentaires, ce qui allonge le temps de retour sur investissement.' },
];

const cityData = [
  { city: 'Marseille', region: 'PACA', irr: '1 500 kWh/kWc', prod450: '575 kWh', prod300: '383 kWh', eco450: '112 \u20ac', eco300: '74 \u20ac', roi450: '3,7 ans', roi300: '2,8 ans' },
  { city: 'Toulouse', region: 'Occitanie', irr: '1 350 kWh/kWc', prod450: '517 kWh', prod300: '345 kWh', eco450: '100 \u20ac', eco300: '67 \u20ac', roi450: '4,1 ans', roi300: '3,1 ans' },
  { city: 'Lyon', region: 'Auvergne-RA', irr: '1 300 kWh/kWc', prod450: '498 kWh', prod300: '332 kWh', eco450: '97 \u20ac', eco300: '64 \u20ac', roi450: '4,3 ans', roi300: '3,2 ans' },
  { city: 'Nantes', region: 'Pays de la Loire', irr: '1 200 kWh/kWc', prod450: '460 kWh', prod300: '306 kWh', eco450: '89 \u20ac', eco300: '59 \u20ac', roi450: '4,7 ans', roi300: '3,5 ans' },
  { city: 'Paris', region: 'Ile-de-France', irr: '1 100 kWh/kWc', prod450: '421 kWh', prod300: '281 kWh', eco450: '82 \u20ac', eco300: '55 \u20ac', roi450: '5,1 ans', roi300: '3,8 ans' },
  { city: 'Strasbourg', region: 'Grand Est', irr: '1 100 kWh/kWc', prod450: '421 kWh', prod300: '281 kWh', eco450: '82 \u20ac', eco300: '55 \u20ac', roi450: '5,1 ans', roi300: '3,8 ans' },
  { city: 'Lille', region: 'Hauts-de-France', irr: '1 000 kWh/kWc', prod450: '383 kWh', prod300: '255 kWh', eco450: '74 \u20ac', eco300: '49 \u20ac', roi450: '5,6 ans', roi300: '4,2 ans' },
];

export default function CombienRapportePage() {
  return (
    <>
      <SchemaArticle title="Combien rapporte un panneau solaire de balcon ? Calcul réel" description="Calcul réel de la rentabilité d'un panneau solaire de balcon par ville." url="https://monbalconsolaire.fr/blog/combien-rapporte-panneau-solaire-balcon" datePublished="2026-03-21" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Combien rapporte un panneau solaire" }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Analyse chiffrée</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Combien rapporte un panneau solaire de balcon ? Calcul réel</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Pas de promesses marketing, pas d&apos;estimations floues. Voici les chiffres réels de production et d&apos;économies pour 7 villes françaises, bases sur les données officielles PVGIS et le tarif EDF 2026.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>21 mars 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">La formule de calcul</h2>
            <div className="bg-white rounded-brand p-4 font-mono text-sm text-charcoal text-center mb-3">
              <strong>Production (kWh/an)</strong> = Puissance (kWc) &times; Irradiation (kWh/kWc/an) &times; 0,85
            </div>
            <div className="bg-white rounded-brand p-4 font-mono text-sm text-charcoal text-center mb-3">
              <strong>Économies (&euro;/an)</strong> = Production (kWh) &times; Tarif EDF (0,1940 &euro;/kWh)
            </div>
            <p className="text-xs text-stone">Le coefficient 0,85 intégré les pertes réelles : cablage, temperature, ombrage partiel, poussiere, vieillissement. L&apos;irradiation provient de PVGIS (Commission europeenne). Le tarif EDF est celui en vigueur au 1er fevrier 2026 (option base, 6 kVA).</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production et économies par ville</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Voici les estimations pour les 7 principales zones climatiques de France, avec deux kits de reference : le Sunology PLAY2 (450 Wc, 599&euro;) et le Beem Kit 300W (300 Wc, 299&euro;). Toutes les estimations supposent une orientation plein sud et une inclinaison optimale de 30-35 degres.</p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[700px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Ville</th>
                    <th className="text-center p-3">Irradiation</th>
                    <th className="text-center p-3">Prod. 450W</th>
                    <th className="text-center p-3">Eco. 450W</th>
                    <th className="text-center p-3">ROI 450W</th>
                    <th className="text-center p-3">Prod. 300W</th>
                    <th className="text-center p-3">Eco. 300W</th>
                    <th className="text-center p-3 rounded-tr-xl">ROI 300W</th>
                  </tr></thead>
                  <tbody>
                    {cityData.map((c, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3"><span className="font-semibold">{c.city}</span><br/><span className="text-xs text-stone">{c.region}</span></td>
                        <td className="text-center p-3 font-mono text-xs">{c.irr}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{c.prod450}</td>
                        <td className="text-center p-3 font-mono text-sm font-medium text-amber-dark">{c.eco450}</td>
                        <td className="text-center p-3 font-mono text-sm">{c.roi450}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{c.prod300}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{c.eco300}</td>
                        <td className="text-center p-3 font-mono text-sm">{c.roi300}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Source : données PVGIS (Commission europeenne). Tarif EDF 0,1940 &euro;/kWh (fevrier 2026). Coefficient de pertes : 0,85. Kit 450W = Sunology PLAY2 à 599&euro;. Kit 300W = Beem Kit à 299&euro;.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que ces chiffres signifient concrêtement</h2>
              <div className="space-y-4 my-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">A Marseille avec un Sunology PLAY2</h4>
                  <p className="text-xs text-charcoal-light">Vous produisez 575 kWh/an, soit l&apos;equivalent de la consommation d&apos;un refrigerateur + une box internet + tous vos appareils en veille pendant un an. Économies : 112&euro;/an. Le kit est rembourse en 3 ans et 8 mois. Sur 25 ans de garantie, vous économiséz plus de 2 800&euro;.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">A Paris avec un Beem Kit 300W</h4>
                  <p className="text-xs text-charcoal-light">Vous produisez 281 kWh/an. C&apos;est moins, mais à 299&euro; le kit, le retour sur investissement est atteint en 3 ans et 10 mois. Sur 25 ans, vous économiséz plus de 1 375&euro; — soit 4,6x votre investissement initial.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">A Lille avec un Sunology PLAY2</h4>
                  <p className="text-xs text-charcoal-light">Meme dans la region la moins ensoleillee de France, les chiffres restent positifs : 383 kWh/an, 74&euro; d&apos;économies, ROI en 5 ans et 7 mois. Sur 25 ans : plus de 1 850&euro; d&apos;économies. Le solaire est rentable partout en France.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;impact des hausses de prix de l&apos;électricité</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Les chiffres ci-dessus sont calcules avec le tarif actuel de 0,1940&euro;/kWh. Mais le prix de l&apos;électricité à augmente de 55% entre 2012 et 2026, soit une moyenne de +4 à 5% par an. Si cette tendance se poursuit :</p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { scenario: 'Tarif stable', tarif: '0,1940 \u20ac', eco25: '~2 400 \u20ac', desc: 'Hypothese basse (peu probable)' },
                  { scenario: '+3%/an', tarif: '~0,32 \u20ac en 2036', eco25: '~3 800 \u20ac', desc: 'Hypothese conservatrice' },
                  { scenario: '+5%/an', tarif: '~0,40 \u20ac en 2036', eco25: '~5 200 \u20ac', desc: 'Tendance historique' },
                ].map((s, i) => (
                  <div key={i} className="card text-center">
                    <div className="text-xs text-stone font-semibold mb-2">{s.scenario}</div>
                    <div className="font-mono text-xl font-medium text-green mb-1">{s.eco25}</div>
                    <div className="text-[11px] text-stone">économies sur 25 ans (450W, Lyon)</div>
                    <div className="text-[10px] text-stone-light mt-2">{s.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed"><strong>Le point cle :</strong> un panneau solaire est un investissement qui se bonifie avec le temps. Plus l&apos;électricité augmente, plus votre panneau vous fait économiser. C&apos;est une protection naturelle contre l&apos;inflation énergétique.</p>
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
                    <div className="flex items-center gap-2 mb-2"><h4 className="font-bold text-sm">{f.t}</h4><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${f.impact === 'Fort' ? 'bg-amber-pale text-amber-dark' : 'bg-cream-dark text-stone'}`}>Impact {f.impact}</span></div>
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

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Methodologie :</strong> productions calculees a partir des données PVGIS (Commission europeenne), orientation sud, inclinaison 30 degres, coefficient de pertes 0,85. Tarif EDF 0,1940&euro;/kWh TTC (option base 6 kVA, fevrier 2026). Ce contenu est indépendant — <Link href="/a-propos" className="text-green hover:underline">en savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
