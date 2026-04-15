import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Prix de l\'électricité 2026 : pourquoi le solaire devient incontournable',
  description: 'Analyse de l\'évolution du prix de l\'électricité en France en 2026 et impact sur la rentabilité du solaire de balcon. Données, projections, calculs.',
};

const faqData = [
  { question: 'Quel est le prix du kWh en 2026 ?', answer: 'Le tarif réglementé EDF est de 0,1940€/kWh TTC en option base 6 kVA depuis le 1er février 2026. C\'est une baisse de 0,6% par rapport à août 2025, mais le tarif reste 55% plus élevé qu\'en 2012.' },
  { question: 'Le prix de l\'électricité va-t-il augmenter en 2026-2027 ?', answer: 'Très probablement. La fin du dispositif ARENH en janvier 2026 modifie le mécanisme de fixation des prix. Les analystes prévoient une hausse de 3 à 5% par an en moyenne sur les prochaines années.' },
  { question: 'Combien le solaire fait-il économiser face aux hausses ?', answer: 'Chaque hausse de 1% du tarif EDF augmente automatiquement les économies de votre panneau. Un kit à 599€ qui économise 100€/an en 2026 pourrait économiser 130-160€/an en 2030 si le tarif augmente de 5%/an.' },
];

export default function PrixElectricitePage() {
  return (
    <>
      <SchemaArticle title="Prix de l'électricité 2026 : pourquoi le solaire devient incontournable" description="Analyse de l'évolution du prix de l'électricité en France." url="https://monbalconsolaire.fr/blog/prix-electricite-2026-solaire" datePublished="2026-03-30" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Prix de l\'électricité 2026' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Prix de l&apos;électricité 2026 : pourquoi le solaire de balcon devient incontournable</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le prix de l&apos;électricité a augmenté de 55% en 14 ans. Et la fin de l&apos;ARENH change la donne. Analyse chiffrée de ce que ça signifie pour votre facture — et pourquoi un kit solaire est devenu un investissement évident.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>30 mars 2026</span><span>&middot;</span><span>7 min de lecture</span></div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;évolution du prix du kWh en France</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">En février 2026, le tarif réglementé EDF s&apos;établit à <span className="data-highlight">0,1940 €/kWh TTC</span> en option base (6 kVA). Ce tarif a légèrement baissé de 0,6% par rapport à août 2025, grâce à une baisse des coûts d&apos;approvisionnement sur les marchés de gros.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Mais cette baisse ponctuelle masque la tendance de fond :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[400px]">
                  <thead><tr className="bg-amber text-white">
                    <th className="text-left p-3 rounded-tl-xl">Année</th><th className="text-center p-3">Tarif TTC</th><th className="text-center p-3">Variation</th><th className="text-center p-3 rounded-tr-xl">Cumul depuis 2012</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['2012', '0,1250 €', '—', '—'],
                      ['2015', '0,1467 €', '+5,7%', '+17%'],
                      ['2018', '0,1541 €', '+1,7%', '+23%'],
                      ['2020', '0,1582 €', '+2,4%', '+27%'],
                      ['2023', '0,2276 €', '+10%', '+82%'],
                      ['2024', '0,2516 €', '+8,6%', '+101%'],
                      ['2025 (août)', '0,1952 €', '-14,4%*', '+56%'],
                      ['2026 (fév.)', '0,1940 €', '-0,6%', '+55%'],
                    ].map(([y, t, v, c], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{y}</td>
                        <td className="text-center p-3 font-mono">{t}</td>
                        <td className="text-center p-3 font-mono text-sm">{v}</td>
                        <td className="text-center p-3 font-mono text-sm">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">* La baisse de 2025 s&apos;explique par la fin du bouclier tarifaire et la normalisation des prix de gros post-crise énergétique 2022-2023. Source : CRE, EDF.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">La fin de l&apos;ARENH : ce qui change en 2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">L&apos;ARENH (Accès Régulé à l&apos;Électricité Nucléaire Historique) obligeait EDF à vendre une partie de sa production nucléaire à ses concurrents à un prix fixe de 42€/MWh. Ce mécanisme a expiré le 31 décembre 2025.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Son remplacement par un nouveau mécanisme de régulation est en cours de finalisation, mais la plupart des analystes s&apos;accordent sur un point : le prix plancher de l&apos;électricité en France va structurellement augmenter dans les années à venir, en raison des investissements massifs nécessaires dans le parc nucléaire (Grand Carénage, nouveaux EPR) et les réseaux.</p>
              <div className="card bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-amber-dark"><strong>Projection CRE :</strong> le tarif réglementé pourrait atteindre 0,22 à 0,25 €/kWh d&apos;ici 2030 selon les scénarios, soit une hausse de 13 à 29% par rapport à aujourd&apos;hui.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Impact sur la rentabilité du solaire de balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Chaque centime d&apos;augmentation du kWh améliore automatiquement la rentabilité de votre panneau solaire. Voici l&apos;impact sur un kit Sunology PLAY2 (599€, 520 kWh/an en région lyonnaise) :</p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { tarif: '0,1940 €', label: 'Tarif actuel (2026)', eco: '101 €/an', roi: '4,1 ans', total25: '~2 520 €' },
                  { tarif: '0,2200 €', label: 'Projection basse (2030)', eco: '114 €/an', roi: '3,6 ans', total25: '~3 400 €' },
                  { tarif: '0,2500 €', label: 'Projection haute (2030)', eco: '130 €/an', roi: '3,2 ans', total25: '~4 500 €' },
                ].map((s, i) => (
                  <div key={i} className="card text-center">
                    <div className="text-xs text-stone font-semibold mb-2">{s.label}</div>
                    <div className="font-mono text-lg font-medium text-amber-dark mb-1">{s.tarif}/kWh</div>
                    <div className="text-sm text-charcoal-light">Éco : <span className="font-semibold text-green">{s.eco}</span></div>
                    <div className="text-sm text-charcoal-light">ROI : {s.roi}</div>
                    <div className="text-xs text-stone mt-2">Sur 25 ans : {s.total25}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed"><strong>Le constat :</strong> un kit solaire de balcon acheté aujourd&apos;hui à 599€ pourrait générer entre 2 500€ et 4 500€ d&apos;économies sur sa durée de vie, selon l&apos;évolution des tarifs. C&apos;est un investissement qui se bonifie avec le temps.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le solaire comme protection anti-inflation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Un panneau solaire fonctionne comme une assurance contre les hausses de prix de l&apos;électricité. Chaque kWh que vous produisez vous-même est un kWh que vous n&apos;achetez pas à EDF — quel que soit le tarif futur.</p>
              <p className="text-charcoal-light leading-relaxed">C&apos;est la raison pour laquelle de plus en plus de Français s&apos;équipent : le solaire n&apos;est plus un geste écologique symbolique, c&apos;est un investissement financier rationnel avec un retour mesurable et garanti.</p>
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

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> CRE, EDF tarifs réglementés, rapport annuel Cour des comptes 2025. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
