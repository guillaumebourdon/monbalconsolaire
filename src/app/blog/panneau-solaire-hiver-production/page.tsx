import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Panneau solaire en hiver : combien ça produit vraiment ? (2026)',
  description: 'Un panneau solaire de balcon produit-il en hiver ? Données réelles de production hivernale par région, conseils pour optimiser, et impact sur la rentabilité.',
};

const faqData = [
  { question: 'Un panneau solaire fonctionne-t-il en hiver ?', answer: 'Oui. Un panneau solaire produit de l\'électricité dès qu\'il reçoit de la lumière, même diffuse (ciel nuageux). En hiver, la production est réduite (20-40% de la production estivale) mais elle n\'est jamais nulle.' },
  { question: 'La neige abîme-t-elle un panneau solaire ?', answer: 'Non. Les panneaux solaires sont conçus pour résister aux intempéries (certifiés pour 550 kg/m² de charge neige). Une fine couche de neige fond rapidement grâce à la chaleur résiduelle du panneau. Une épaisse couche bloque la production temporairement mais ne cause aucun dommage.' },
  { question: 'Faut-il changer l\'inclinaison en hiver ?', answer: 'C\'est recommandé si votre kit le permet. En hiver, le soleil est plus bas sur l\'horizon : une inclinaison de 40-42° est optimale (contre 27-30° en été). Les kits comme le Sunology PLAY2 proposent 3 angles ajustables.' },
];

export default function HiverProductionPage() {
  return (
    <>
      <SchemaArticle title="Panneau solaire en hiver : combien ça produit vraiment ?" description="Données réelles de production solaire hivernale par région." url="https://monbalconsolaire.fr/blog/panneau-solaire-hiver-production" datePublished="2026-03-31" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Solaire en hiver' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Données réelles</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Panneau solaire en hiver : combien ça produit vraiment ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">La question que tout le monde se pose : est-ce que ça vaut le coup quand il fait gris ? Spoiler : oui, et voici les chiffres.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>31 mars 2026</span><span>&middot;</span><span>7 min de lecture</span></div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La production mois par mois</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Un kit solaire de 450W ne produit pas la même chose en janvier et en juillet. Voici la répartition mensuelle typique basée sur les données PVGIS pour trois villes représentatives :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Mois</th><th className="text-center p-3">Marseille</th><th className="text-center p-3">Lyon</th><th className="text-center p-3 rounded-tr-xl">Lille</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Janvier', '32 kWh', '22 kWh', '14 kWh'],
                      ['Février', '38 kWh', '30 kWh', '20 kWh'],
                      ['Mars', '55 kWh', '45 kWh', '32 kWh'],
                      ['Avril', '62 kWh', '52 kWh', '40 kWh'],
                      ['Mai', '72 kWh', '60 kWh', '48 kWh'],
                      ['Juin', '80 kWh', '68 kWh', '52 kWh'],
                      ['Juillet', '85 kWh', '72 kWh', '54 kWh'],
                      ['Août', '78 kWh', '65 kWh', '48 kWh'],
                      ['Septembre', '60 kWh', '50 kWh', '38 kWh'],
                      ['Octobre', '45 kWh', '35 kWh', '25 kWh'],
                      ['Novembre', '30 kWh', '22 kWh', '15 kWh'],
                      ['Décembre', '25 kWh', '18 kWh', '12 kWh'],
                    ].map(([m, ma, ly, li], i) => {
                      const isWinter = i <= 1 || i >= 10;
                      return (
                        <tr key={i} className={`border-b border-border-light ${isWinter ? 'bg-blue-50' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                          <td className="p-3 font-semibold">{m} {isWinter && <span className="text-xs text-stone">(hiver)</span>}</td>
                          <td className="text-center p-3 font-mono text-sm text-green">{ma}</td>
                          <td className="text-center p-3 font-mono text-sm">{ly}</td>
                          <td className="text-center p-3 font-mono text-sm">{li}</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-green-pale/30 font-bold">
                      <td className="p-3">Total annuel</td>
                      <td className="text-center p-3 font-mono text-green">662 kWh</td>
                      <td className="text-center p-3 font-mono">539 kWh</td>
                      <td className="text-center p-3 font-mono">398 kWh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Estimations pour un kit 450W, orientation sud, inclinaison 35°, coefficient de pertes 0,85. Source : PVGIS.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Hiver vs été : le ratio réel</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">En moyenne, la production hivernale (novembre à février) représente environ <span className="data-highlight">20 à 30%</span> de la production estivale (mai à août). Concrètement :</p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  { city: 'Marseille', summer: '315 kWh', winter: '125 kWh', ratio: '40%' },
                  { city: 'Lyon', summer: '265 kWh', winter: '92 kWh', ratio: '35%' },
                  { city: 'Lille', summer: '202 kWh', winter: '61 kWh', ratio: '30%' },
                ].map((c, i) => (
                  <div key={i} className="card text-center">
                    <div className="font-bold text-sm mb-2">{c.city}</div>
                    <div className="text-xs text-stone mb-1">Été : <span className="font-mono text-green">{c.summer}</span></div>
                    <div className="text-xs text-stone mb-1">Hiver : <span className="font-mono text-amber-dark">{c.winter}</span></div>
                    <div className="text-xs text-stone">Ratio hiver/été : <span className="font-bold">{c.ratio}</span></div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed">C&apos;est logique : en hiver, les jours sont plus courts et le soleil est plus bas. Mais la production n&apos;est jamais nulle — même par temps couvert, un panneau produit 10 à 25% de sa capacité maximale grâce à la lumière diffuse.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">3 astuces pour optimiser la production hivernale</h2>
              <div className="space-y-3">
                {[
                  { t: 'Augmentez l\'inclinaison', d: 'En hiver, le soleil est plus bas sur l\'horizon. Passez à 40-42° d\'inclinaison (au lieu de 27-30° en été). Le Sunology PLAY2 propose 3 angles ajustables pour ça.' },
                  { t: 'Nettoyez régulièrement', d: 'En automne/hiver, les feuilles mortes, la pluie et la poussière s\'accumulent plus vite. Un panneau sale perd 5-10% de rendement. Un coup de chiffon humide toutes les 2-3 semaines.' },
                  { t: 'Consommez au bon moment', d: 'En hiver, le pic de production est entre 11h et 14h (contre 10h-16h en été). Programmez vos appareils énergivores (machine à laver, lave-vaisselle) sur ce créneau.' },
                ].map((a, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{a.t}</h4>
                    <p className="text-xs text-charcoal-light">{a.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Faut-il s&apos;inquiéter de la production hivernale ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>Non.</strong> La rentabilité d&apos;un panneau solaire se calcule sur l&apos;année complète, pas sur un mois. La production estivale compense largement la baisse hivernale. C&apos;est d&apos;ailleurs comme ça que les données PVGIS et les fabricants calculent le ROI : sur la production annuelle totale.</p>
              <p className="text-charcoal-light leading-relaxed">Et paradoxalement, c&apos;est en hiver que chaque kWh produit a le plus de valeur : c&apos;est la saison où votre consommation est la plus élevée (chauffage d&apos;appoint, éclairage plus long) et où le prix de l&apos;électricité pèse le plus sur votre facture.</p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Calculez votre production annuelle (été + hiver compris)</p>
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
              <p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> données PVGIS (Commission européenne), retours utilisateurs Trustpilot. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
