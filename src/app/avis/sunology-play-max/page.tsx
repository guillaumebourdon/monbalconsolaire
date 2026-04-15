import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Sunology PLAY MAX avis 2026 : kit solaire + batterie, ça vaut le coup ?',
  description: 'Avis complet sur le Sunology PLAY MAX : kit 450W + batterie VAULT 700 Wh pour 1 179€. Production, stockage, rentabilité. Faut-il prendre la batterie ?',
};

const faqData = [
  { question: 'Le Sunology PLAY MAX vaut-il 1 179€ ?', answer: 'Ça dépend de votre profil. Si vous êtes souvent absent la journée et consommez principalement le soir, la batterie VAULT augmente votre autoconsommation de 40% à ~70%. Sinon, le PLAY2 seul à 599€ est un meilleur investissement avec un ROI plus rapide.' },
  { question: 'Quelle est la capacité de la batterie VAULT ?', answer: 'La VAULT a une capacité de 700 Wh (0,7 kWh). Ça représente environ 5 heures d\'autonomie pour un talon de consommation de 140W (frigo + box + veilles). Ce n\'est pas assez pour une nuit complète mais ça couvre la soirée.' },
  { question: 'Peut-on ajouter la batterie VAULT après avoir acheté le PLAY2 ?', answer: 'Oui. La VAULT se vend séparément (~580€) et est compatible avec le PLAY2. Mais le bundle PLAY MAX (1 179€) est plus avantageux que l\'achat séparé (599€ + 580€ = 1 179€ — même prix mais livraison unique).' },
  { question: 'PLAY MAX vs PLAY2 + STOREY : quelle différence ?', answer: 'Le PLAY MAX inclut la batterie nomade VAULT (700 Wh, portable). Le PLAY2 + STOREY (1 390€ la batterie seule) offre une batterie fixe de 2,2 kWh, soit 3x plus de capacité. Le STOREY est pour ceux qui veulent une vraie autonomie le soir et la nuit.' },
];

export default function PlayMaxAvisPage() {
  return (
    <>
      <SchemaArticle title="Sunology PLAY MAX avis : kit + batterie, ça vaut le coup ?" description="Avis complet sur le Sunology PLAY MAX avec batterie VAULT." url="https://monbalconsolaire.fr/avis/sunology-play-max" datePublished="2026-04-02" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology PLAY MAX' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Sunology PLAY MAX avis : kit solaire + batterie, ça vaut le coup ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le PLAY MAX, c&apos;est le <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY2</Link> avec une batterie VAULT de 700 Wh pour 1 179€. La promesse : stocker le solaire pour le soir. Analyse honnête.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>2 avril 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/20 border-amber/15 mb-10">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div><div className="badge-amber mb-2">Notre verdict</div><h3 className="font-bold text-xl">Sunology PLAY MAX</h3><p className="text-sm text-stone">Intéressant si vous consommez le soir. Sinon, le PLAY2 seul suffit.</p></div>
              <div className="text-right"><div className="font-mono text-3xl font-bold text-amber-dark">7<span className="text-lg text-stone">/10</span></div></div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le concept PLAY MAX</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le Sunology PLAY MAX est un bundle qui combine le <Link href="/avis/sunology-play-2" className="text-green hover:underline">PLAY2</Link> (450 Wc) avec la batterie nomade VAULT (700 Wh) pour <span className="data-highlight">1 179 €</span>. L&apos;idée est simple : au lieu de perdre le surplus d&apos;électricité injecté gratuitement sur le réseau en journée, la VAULT le stocke pour que vous le consommiez le soir.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">La VAULT est une batterie LFP (lithium fer phosphate) compacte et portable. Elle se branche sur une prise et se charge depuis le panneau via le réseau domestique. Elle peut aussi servir de batterie nomade (camping, pique-nique) avec ses 4 ports de sortie (2 USB-A, 1 USB-C, 1 prise AC 230V).</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '450 Wc', l: 'Panneau PLAY2' },
                  { v: '700 Wh', l: 'Batterie VAULT' },
                  { v: '1 179 €', l: 'Prix bundle' },
                  { v: '~5h', l: 'Autonomie soir' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul honnête : avec vs sans batterie</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">C&apos;est la question centrale. On compare le PLAY2 seul (599€) au PLAY MAX (1 179€) en conditions réelles, région lyonnaise :</p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2">PLAY2 seul (599€)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Autoconsommation : <span className="font-mono font-medium">~40%</span></p>
                    <p>Production valorisée : <span className="font-mono font-medium">~200 kWh</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-green">~97€</span></p>
                    <p>ROI : <span className="font-mono font-medium">4,3 ans</span></p>
                    <p>Économies sur 25 ans : <span className="font-mono font-medium text-green">~2 425€</span></p>
                  </div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">PLAY MAX (1 179€)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Autoconsommation : <span className="font-mono font-medium">~70%</span></p>
                    <p>Production valorisée : <span className="font-mono font-medium">~350 kWh</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-amber-dark">~135€</span></p>
                    <p>ROI : <span className="font-mono font-medium">6,1 ans</span></p>
                    <p>Économies sur 25 ans : <span className="font-mono font-medium text-amber-dark">~3 375€</span></p>
                  </div>
                </div>
              </div>
              <div className="card bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-amber-dark"><strong>Le point clé :</strong> la batterie VAULT (580€) génère un gain supplémentaire de ~38€/an. Le ROI de la batterie seule est donc de <span className="font-mono font-bold">~15 ans</span>. C&apos;est rentable sur la durée de vie (25 ans), mais le PLAY2 seul a un bien meilleur ROI (4,3 ans vs 6,1 ans).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Le bundle le moins cher du marché', d: 'À 1 179€, c\'est la solution kit + batterie la plus accessible. La Beem Battery coûte plus de 5 500€ seule. L\'EcoFlow PowerStream + batterie démarre à ~1 800€ sans panneau.' },
                  { t: 'La VAULT est portable', d: 'Contrairement aux batteries fixes (STOREY, Beem Battery), la VAULT est compacte (24x24x24 cm, 9,8 kg) et portable. Vous pouvez l\'emmener en camping, pique-nique, ou l\'utiliser comme batterie de secours.' },
                  { t: '4 ports de sortie', d: '2 USB-A, 1 USB-C (100W), 1 prise AC 230V (500W). Vous pouvez charger un laptop, un téléphone, et alimenter un petit appareil simultanément.' },
                  { t: 'Installation identique au PLAY2', d: 'Le panneau s\'installe en 1 minute. La VAULT se branche sur une prise. Pas de câblage supplémentaire entre le panneau et la batterie — ça passe par le réseau domestique.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Capacité limitée (700 Wh)', d: 'La VAULT offre ~5 heures d\'autonomie pour un talon de consommation de 140W. Ce n\'est pas suffisant pour couvrir une nuit complète (10-12h). Si vous voulez une vraie autonomie le soir et la nuit, il faut la STOREY (2,2 kWh, 1 390€).' },
                  { t: 'Pas de gestion intelligente', d: 'La VAULT ne communique pas avec le panneau. Elle se charge quand elle est branchée et se décharge quand vous l\'utilisez. Pas de pilotage automatique charge/décharge comme l\'EcoFlow PowerStream.' },
                  { t: 'Le ROI de la batterie est long', d: '~15 ans pour rentabiliser les 580€ de la batterie seule. Le PLAY2 sans batterie se rentabilise en 4,3 ans. Le gain financier de la batterie est modeste (38€/an).' },
                  { t: 'Durée de vie de la batterie', d: 'Sunology annonce 3 000+ cycles pour la VAULT (LFP). À 1 cycle par jour, ça fait ~8 ans. Le panneau est garanti 25 ans mais la batterie pourrait nécessiter un remplacement avant.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui est le PLAY MAX ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2">Le PLAY MAX est pour vous si :</h4>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>→ Vous travaillez la journée (consommation le soir)</li>
                    <li>→ Vous voulez aussi une batterie nomade</li>
                    <li>→ Vous acceptez un ROI plus long pour plus d&apos;autonomie</li>
                    <li>→ Vous voulez le bundle le moins cher du marché</li>
                  </ul>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">Le PLAY2 seul suffit si :</h4>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>→ Vous êtes chez vous la journée (télétravail)</li>
                    <li>→ Vous voulez le ROI le plus rapide possible</li>
                    <li>→ Votre talon de consommation est élevé (frigo + box + PC)</li>
                    <li>→ Vous préférez économiser 580€</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le PLAY MAX est un produit bien pensé pour ceux qui veulent maximiser leur autoconsommation et/ou qui ont besoin d&apos;une batterie nomade. Le bundle à 1 179€ est le plus accessible du marché pour un kit + batterie.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Mais soyons honnêtes : pour la majorité des utilisateurs, le <Link href="/avis/sunology-play-2" className="text-green hover:underline">PLAY2 seul à 599€</Link> reste le meilleur investissement. Le ROI est 2x plus rapide et le talon de consommation absorbe déjà une bonne partie de la production en journée. La batterie est un &quot;nice to have&quot;, pas un &quot;must have&quot;.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">7/10</span></strong> — Bon produit, mais le PLAY2 seul est un meilleur investissement pour la plupart.</p>
              <div className="btn-affiliate inline-flex mt-4">Voir le Sunology PLAY MAX sur sunology.eu →</div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Avec ou sans batterie, combien pouvez-vous économiser ?</p>
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

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis indépendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
