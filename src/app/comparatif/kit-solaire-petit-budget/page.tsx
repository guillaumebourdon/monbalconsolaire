import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Meilleur kit solaire petit budget 2026 : moins de 400€',
  description: 'Quel kit solaire de balcon acheter pour moins de 400€ en 2026 ? Comparatif des options les plus abordables : Beem Kit 300W, kits Amazon, alternatives.',
};

const faqData = [
  { question: 'Quel est le kit solaire le moins cher en 2026 ?', answer: 'Le Beem Kit 300W à 299€ est le kit de marque le moins cher avec une garantie de 25 ans. On trouve des kits sans marque sur Amazon entre 150 et 250€, mais la qualité et le SAV sont incertains.' },
  { question: 'Un kit à 299€ est-il vraiment rentable ?', answer: 'Oui. À 299€ avec une production de 350 kWh/an (région lyonnaise), le ROI est atteint en 2,5 à 3 ans. Sur 25 ans de garantie, les économies totales dépassent 1 500€.' },
  { question: 'Faut-il éviter les kits solaires pas chers sur Amazon ?', answer: 'Pas forcément, mais soyez vigilant : vérifiez la garantie, la certification CE, et la présence d\'un micro-onduleur de qualité. Les kits sans marque ont souvent un SAV inexistant et des performances en dessous des specs annoncées.' },
];

export default function PetitBudgetPage() {
  return (
    <>
      <SchemaArticle title="Meilleur kit solaire petit budget 2026 : moins de 400€" description="Comparatif des kits solaires les plus abordables en 2026." url="https://monbalconsolaire.fr/comparatif/kit-solaire-petit-budget" datePublished="2026-03-25" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Petit budget' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Petit budget</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Meilleur kit solaire petit budget : moins de 400€</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Vous voulez tester le solaire de balcon sans vous ruiner ? Voici les meilleures options à moins de 400€ en 2026.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>25 mars 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
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
                    <div><div className="badge-green mb-2">Notre choix n°1</div><h3 className="font-bold text-xl">Beem Kit 300W</h3><p className="text-sm text-stone">par Beem Energy — 4 panneaux modulaires — Garantie 25 ans</p></div>
                    <div className="text-right"><div className="font-mono text-2xl font-bold text-green">299 €</div><div className="text-xs text-stone">1,00 €/Wc</div></div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-charcoal-light">
                    <p>Le Beem Kit 300W est le meilleur kit de marque sous 400€. Ses 4 petits panneaux monocristallins (75W chacun) s&apos;adaptent aux espaces restreints et aux configurations inhabituelles. Le ratio de 1,00 €/Wc est le meilleur du marché toutes catégories.</p>
                    <p>La production annuelle est d&apos;environ 350 kWh en région lyonnaise (orientation sud), soit ~68€ d&apos;économies/an. Le retour sur investissement est atteint en seulement 2,5 à 3 ans.</p>
                  </div>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points forts</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Meilleur ratio €/Wc du marché (1,00€)</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> 4 panneaux = flexibilité d&apos;installation (mur, sol, angle)</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> Marque française avec SAV, garantie 25 ans</li>
                    <li className="flex gap-2"><span className="text-green font-bold">+</span> ROI le plus rapide : 2,5-3 ans</li>
                  </ul>
                  <h4 className="font-bold text-sm mt-4 mb-2">Points faibles</h4>
                  <ul className="space-y-1 text-sm text-charcoal-light">
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Installation plus longue (~1h vs 1-5 min pour les mono-panneaux)</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> 300 Wc = production limitée (ne couvre qu&apos;une partie du talon)</li>
                    <li className="flex gap-2"><span className="text-red-500 font-bold">-</span> Esthétiquement moins élégant que les solutions mono-panneau</li>
                  </ul>
                </div>

                <div className="card-lg">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div><div className="badge-amber mb-2">Alternative Amazon</div><h3 className="font-bold text-xl">Kits génériques 300-400W</h3><p className="text-sm text-stone">Marques diverses — Amazon — Garantie variable</p></div>
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
              <p className="text-charcoal-light leading-relaxed mb-4">Le <strong>Beem Kit 300W à 299€</strong> est notre recommandation claire pour les petits budgets. Le prix est imbattable pour un kit de marque française avec garantie 25 ans et SAV. Les kits Amazon peuvent sembler moins chers, mais le risque de mauvaise qualité et l&apos;absence de SAV ne valent pas les 50-100€ d&apos;économie.</p>
              <p className="text-charcoal-light leading-relaxed">Si vous pouvez étendre votre budget à 599€, le <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">Sunology PLAY2 ou le Beem On</Link> offrent une puissance 50% supérieure et une installation beaucoup plus simple.</p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Combien pouvez-vous économiser avec un kit à 299€ ?</p>
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
                <Link href="/avis/beem-kit-300w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem Kit 300W</h4>
                  <p className="text-xs text-charcoal-light mt-1">La meilleure option petit budget</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W</h4>
                  <p className="text-xs text-charcoal-light mt-1">Quelle puissance choisir</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h4>
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
