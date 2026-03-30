import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Beem On 460W avis 2026 : test complet et retour d\'expérience',
  description: 'Avis détaillé sur le Beem On 460W en 2026 : prix, installation, production réelle, avantages et inconvénients. Le concurrent du Sunology PLAY2 vaut-il le coup ?',
};

const faqData = [
  { question: 'Le Beem On 460W est-il un bon kit solaire ?', answer: 'Oui. Avec 460 Wc pour 599€, c\'est le meilleur ratio €/Wc en mono-panneau (1,30€). La qualité est au rendez-vous (4,7/5 Trustpilot) et la garantie de 25 ans est standard.' },
  { question: 'Beem On vs Sunology PLAY2 : lequel choisir ?', answer: 'Les deux sont excellents au même prix (599€). Sunology gagne sur l\'installation (1 min vs 5 min) et le WiFi natif. Beem gagne sur le paiement en 10x et l\'option Beem ZEN (démarches Enedis).' },
  { question: 'Combien produit le Beem On 460W ?', answer: 'Entre 420 et 630 kWh/an selon la région et l\'orientation. En région lyonnaise, exposition sud, comptez ~530 kWh/an soit environ 103€ d\'économies annuelles.' },
];

export default function BeemOnAvisPage() {
  return (
    <>
      <SchemaArticle title="Beem On 460W avis : test complet et retour d'expérience" description="Avis détaillé sur le Beem On 460W en 2026." url="https://monbalconsolaire.vercel.app/avis/beem-on-460w" datePublished="2026-03-30" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 460W' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Beem On 460W avis : test complet et retour d&apos;expérience (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le Beem On est le concurrent direct du Sunology PLAY2. Même prix, 10 Wc de plus, mais est-il vraiment meilleur ? Notre analyse complète.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>30 mars 2026</span><span>&middot;</span><span>9 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/20 border-amber/15 mb-10">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div><div className="badge-amber mb-2">Notre verdict</div><h3 className="font-bold text-xl">Beem On 460W</h3><p className="text-sm text-stone">Excellent rapport qualité/prix, le meilleur concurrent du Sunology PLAY2.</p></div>
              <div className="text-right"><div className="font-mono text-3xl font-bold text-amber-dark">8<span className="text-lg text-stone">/10</span></div></div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Présentation du Beem On</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Beem Energy est une startup nantaise (comme Sunology) spécialisée dans les kits solaires plug-and-play. Le Beem On 460W est leur modèle phare : un panneau unique bifacial TOPCon de 460 Wc, équipé d&apos;un micro-onduleur APSystems et d&apos;une Beembox pour le suivi via app mobile.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '460 Wc', l: 'Puissance' },
                  { v: '599 €', l: 'Prix' },
                  { v: '25 ans', l: 'Garantie' },
                  { v: '4,7/5', l: 'Trustpilot' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Meilleur ratio €/Wc en mono-panneau', d: 'À 1,30€/Wc (599€ pour 460W), le Beem On offre le meilleur rapport puissance/prix du segment mono-panneau. Sunology est à 1,33€/Wc.' },
                  { t: 'Paiement en 10x sans frais', d: 'Beem propose le paiement fractionné jusqu\'à 10x sans frais. Ça fait ~60€/mois pendant 10 mois. Gros avantage pour ceux qui ne veulent pas sortir 599€ d\'un coup.' },
                  { t: 'Option Beem ZEN', d: 'Pour 49€ de plus, Beem s\'occupe de toutes les démarches administratives : déclaration CACSI Enedis, convention d\'autoconsommation. Pratique pour les non-initiés.' },
                  { t: 'App Beem bien conçue', d: 'L\'application Beem (via Beembox) offre un suivi en temps réel, l\'historique de production, les économies estimées, et des conseils pour optimiser votre consommation.' },
                  { t: 'Gamme complète', d: 'Si le Beem On vous plaît, vous pouvez compléter avec un Beem Kit 300W (299€) ou évoluer vers une Beem Battery pour le stockage.' },
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
                  { t: 'Panneau plus grand que le Sunology', d: 'Le Beem On mesure 189 x 113 cm contre 176 x 113 cm pour le PLAY2. C\'est 13 cm de plus en longueur, ce qui peut être un problème sur les petits balcons.' },
                  { t: 'Nécessite la Beembox pour le suivi', d: 'Contrairement au Sunology PLAY2 dont le micro-onduleur est WiFi natif, le Beem On nécessite un boîtier Beembox branché sur votre box internet. C\'est inclus, mais c\'est un appareil de plus à gérer.' },
                  { t: 'Batterie Beem très chère', d: 'L\'option stockage existe (Beem Battery) mais à partir de 6 190€ pour le kit complet. C\'est 5x le prix du kit seul. L\'option VAULT de Sunology (1 179€ kit + batterie) est bien plus accessible.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le Beem On 460W est un excellent kit solaire plug-and-play. À 599€, il offre le meilleur ratio €/Wc en mono-panneau et le paiement en 10x est un vrai avantage. L&apos;option Beem ZEN simplifie les démarches pour les moins à l&apos;aise avec l&apos;administratif.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Il perd face au <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY2</Link> sur l&apos;installation (5 min vs 1 min), l&apos;encombrement (13 cm plus long), et le WiFi natif. Mais ces différences sont mineures — les deux kits sont d&apos;excellents choix.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8/10</span></strong></p>
              <div className="btn-affiliate inline-flex mt-4">Voir le Beem On sur beemenergy.fr →</div>
            </section>

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
