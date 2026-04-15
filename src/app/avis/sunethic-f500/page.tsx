import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Sunethic F500 avis 2026 : test du kit solaire Made in France',
  description: 'Avis complet sur le Sunethic F500 : le kit solaire de balcon fabriqué en France. 500 Wc, 690€. Production, qualité, rentabilité. Notre verdict.',
};

const faqData = [
  { question: 'Le Sunethic F500 est-il vraiment fabriqué en France ?', answer: 'Oui. Les panneaux Sunethic sont fabriqués et assemblés en France, ce qui réduit l\'empreinte carbone du transport et soutient l\'industrie locale. C\'est le principal argument de la marque.' },
  { question: 'Le Sunethic F500 est-il plus cher que la concurrence ?', answer: 'Oui. À 690€ pour 500 Wc (1,38€/Wc), il est plus cher que le Sunology PLAY2 (1,33€/Wc) et le Beem On (1,30€/Wc). Le surcoût est lié à la fabrication française.' },
  { question: 'Sunethic F500 vs Sunology PLAY2 : lequel choisir ?', answer: 'Le Sunethic produit plus (500W vs 450W) mais coûte plus cher (690€ vs 599€). Le ROI est légèrement plus long (4,2 ans vs 3,6 ans). Choisissez Sunethic si le Made in France est important pour vous, Sunology sinon.' },
];

export default function SunethicAvisPage() {
  return (
    <>
      <SchemaArticle title="Sunethic F500 avis : test du kit solaire Made in France" description="Avis complet sur le Sunethic F500." url="https://monbalconsolaire.fr/avis/sunethic-f500" datePublished="2026-03-27" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunethic F500' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Sunethic F500 avis : test du kit solaire Made in France (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le Sunethic F500 est le kit le plus puissant et le seul 100% Made in France de ce comparatif. Mais son prix de 690€ est-il justifié ? Notre analyse.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>27 mars 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/20 border-green/15 mb-10">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div><div className="badge-green mb-2">Made in France</div><h3 className="font-bold text-xl">Sunethic F500</h3><p className="text-sm text-stone">Le choix éthique et puissant. Meilleure note Trustpilot du marché.</p></div>
              <div className="text-right"><div className="font-mono text-3xl font-bold text-green">7.5<span className="text-lg text-stone">/10</span></div></div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Présentation du Sunethic F500</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Sunethic est une entreprise française qui se distingue par son engagement Made in France : les panneaux sont fabriqués et assemblés en France. Le F500 est leur modèle phare : 500 Wc de puissance, ce qui en fait le kit plug-and-play le plus puissant de notre comparatif.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec une note de 4,8/5 sur Trustpilot (1 000+ avis), c&apos;est aussi la marque la mieux notée du marché, signe d&apos;une qualité produit et d&apos;un SAV irréprochables.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '500 Wc', l: 'Puissance' },
                  { v: '690 €', l: 'Prix' },
                  { v: '25 ans', l: 'Garantie' },
                  { v: '4,8/5', l: 'Trustpilot' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'La puissance la plus élevée du marché', d: 'Avec 500 Wc, le F500 produit environ 570 kWh/an en région lyonnaise (orientation sud). C\'est 50 kWh de plus que le Sunology PLAY2 et 40 kWh de plus que le Beem On.' },
                  { t: 'Vraiment Made in France', d: 'Ce n\'est pas du marketing : les panneaux sont fabriqués et assemblés en France. L\'empreinte carbone du produit est significativement réduite par rapport aux kits dont les panneaux viennent de Chine.' },
                  { t: 'Meilleure note client du marché', d: '4,8/5 sur Trustpilot avec 1 000+ avis. Les utilisateurs saluent la qualité de fabrication, le SAV réactif, et les performances conformes aux promesses.' },
                  { t: 'Engagement éthique', d: 'Sunethic communique de manière transparente sur sa chaîne de production. C\'est un choix qui va au-delà de la simple rentabilité : c\'est un choix de valeurs.' },
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
                  { t: 'Le prix le plus élevé du comparatif', d: 'À 690€, le F500 coûte 91€ de plus que le Sunology PLAY2 ou le Beem On. Le ratio €/Wc (1,38€) est correct mais pas le meilleur. Ce surcoût allonge le temps de retour sur investissement (4,2 ans vs 3,5-3,6 ans).' },
                  { t: 'Pas de batterie dans la gamme', d: 'Contrairement à Sunology (VAULT, STOREY) et Beem (Beem Battery), Sunethic ne propose pas de solution de stockage. Si vous voulez stocker l\'énergie pour le soir, ce n\'est pas ici.' },
                  { t: 'Moins de notoriété', d: 'Sunethic est moins connu que Sunology (100 000+ foyers) ou Beem. Moins de contenu, moins de retours d\'expérience en ligne. Mais la note Trustpilot parle d\'elle-même.' },
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
              <p className="text-charcoal-light leading-relaxed mb-4">Le Sunethic F500 est un excellent kit solaire, avec la meilleure puissance et la meilleure satisfaction client du marché. Son positionnement Made in France est authentique et séduisant pour ceux qui veulent consommer responsable.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Mais le surcoût de 91€ par rapport au <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY2</Link> ou au <Link href="/avis/beem-on-460w" className="text-green hover:underline">Beem On</Link> est difficile à justifier sur le seul plan financier. Le F500 produit 50 kWh de plus par an (~10€ d&apos;économies supplémentaires), ce qui ne compense pas les 91€ de surcoût avant 9 ans.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-green text-xl font-extrabold">7.5/10</span></strong> — Un kit premium pour ceux qui privilégient le Made in France et la puissance maximale.</p>
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
