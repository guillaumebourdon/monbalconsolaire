import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Beem On 460W avis : désormais vendu en extension (369€)',
  description: 'Beem On 460W : panneau bifacial TOPCon 460 Wc, 4,7/5 Trustpilot. Depuis octobre 2026, il n\'est plus vendu comme station de départ mais en extension à 369€. Notre avis mis à jour.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/beem-on-460w',
  },
};

const faqData = [
  { question: 'Peut-on encore acheter le Beem On 460W comme premier kit ?', answer: 'Non. Depuis notre vérification du 8 octobre 2026, Beem Energy ne vend plus le 460W comme station de départ (avec Beembox) : il n\'apparaît sur beemenergy.fr qu\'en « extension » à 369€, sans Beembox, pensée pour agrandir une installation Beem existante. Pour un premier achat, voir notre avis du Beem On 500 Wc (429€).' },
  { question: 'Le Beem On 460W reste-t-il un bon kit solaire ?', answer: 'Sur le plan technique, oui : panneau bifacial TOPCon de 460 Wc, 4,7/5 sur Trustpilot, garantie 25 ans. Mais son usage a changé : ce n\'est plus une station autonome, seulement un module d\'extension pour qui possède déjà une Beembox.' },
  { question: 'Beem On 460W vs Sunology PLAY2 : lequel choisir ?', answer: 'Cette comparaison n\'est plus pertinente pour un premier achat : le 460W n\'est plus vendu en station autonome. Pour comparer un premier kit au même tarif, voir Beem On 500 Wc (429€) vs Sunology PLAY2 (599€).' },
  { question: 'Combien produit le Beem On 460W ?', answer: 'Entre 420 et 630 kWh/an selon la région et l\'orientation. En région lyonnaise, exposition sud, comptez ~469 kWh/an soit environ 77€ d\'économies annuelles. Au tarif actuel de l\'extension (369€), le ROI tombe à 4,5 ans ; les économies cumulées sur 25 ans restent de 2 933€ (+3,3%/an d\'inflation CRE) — ce montant ne dépend que de la production, pas du prix d\'achat.' },
];

export default function BeemOnAvisPage() {
  return (
    <>
      <SchemaArticle title="Beem On 460W avis : analyse complète et verdict" description="Avis détaillé sur le Beem On 460W, aujourd'hui vendu en extension." url="https://monbalconsolaire.fr/avis/beem-on-460w" datePublished="2026-03-26" dateModified="2026-10-08" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Beem On 460W (extension)" brand="Beem Energy" description="Panneau solaire bifacial TOPCon 460 Wc avec micro-onduleur APSystems, vendu en extension (sans Beembox) pour agrandir une installation Beem existante." price={369} ratingValue={8} ratingCount={1} url="https://monbalconsolaire.fr/avis/beem-on-460w" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 460W' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 460W' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Beem On 460W avis : analyse compl&egrave;te et verdict (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le Beem On 460W a été le concurrent direct du Sunology PLAY2. Depuis, Beem l&apos;a retiré de la vente comme station autonome : il n&apos;est plus proposé qu&apos;en extension à 369€. Notre analyse, mise à jour.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>26 mars 2026 &middot; Mis &agrave; jour le 8 octobre 2026</span><span>&middot;</span><span>9 min de lecture</span></div>
          </div>

          <div className="card-lg border-amber/30 bg-amber-pale/20 mb-6">
            <h3 className="font-bold text-amber-dark mb-2">&Agrave; savoir avant de lire cet avis</h3>
            <p className="text-sm text-charcoal-light leading-relaxed">Au 8 octobre 2026, le Beem On 460W n&apos;est plus en vente comme station de d&eacute;part (avec Beembox) sur beemenergy.fr. Il n&apos;appara&icirc;t plus que sous forme d&apos;<strong>extension &agrave; 369&euro;</strong> (sans Beembox), destin&eacute;e &agrave; agrandir une installation Beem existante. Pour un premier achat, voir notre avis du <Link href="/avis/beem-on-500w" className="text-green hover:underline font-semibold">Beem On 500 Wc (429€)</Link>, qui l&apos;a remplac&eacute; dans le catalogue.</p>
          </div>

          <ProductHero
            brand="Beem Energy"
            name="Beem On 460W (extension)"
            power="460 Wc"
            price="369 €"
            score="8/10"
            tagline="Toujours un bon panneau — mais plus vendu qu'en extension, pour agrandir une installation Beem existante."
            affiliateUrl="https://beemenergy.fr/products/beem-on-460w-extension"
            affiliateLabel="Voir l'extension sur le site du fabricant"
            accentColor="amber"
            image="/images/produits/beem-on-460-2.webp"
            imageAlt="Beem On 460W - panneau solaire bifacial TOPCon"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 08/10/2026 (tarif extension) &middot; Peut varier selon les promos</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Présentation du Beem On 460W</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Beem Energy est une startup nantaise (comme Sunology) spécialisée dans les kits solaires plug-and-play. Le Beem On 460W a été leur modèle phare en 2026 : un panneau unique bifacial TOPCon de 460 Wc, équipé d&apos;un micro-onduleur APSystems. Depuis le lancement du <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (429€, 500 Wc), le 460W a disparu du catalogue comme station de départ et n&apos;est plus vendu qu&apos;en extension, sans Beembox, pour les propriétaires d&apos;une installation Beem existante.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '460 Wc', l: 'Puissance' },
                  { v: '369 €', l: 'Prix (extension)' },
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
                  { t: 'Un bon rapport €/Wc en extension', d: 'À 369€ pour 460 Wc (0,80€/Wc), le tarif extension reste compétitif pour agrandir une installation Beem déjà en place.' },
                  { t: 'Paiement en 10x sans frais', d: 'Beem propose le paiement fractionné jusqu\'à 10x sans frais sur ses produits, extension comprise.' },
                  { t: 'Option Beem ZEN', d: 'Pour 49€ de plus, Beem s\'occupe de toutes les démarches administratives : déclaration CACSI Enedis, convention d\'autoconsommation. Pratique pour les non-initiés.' },
                  { t: 'Compatible avec l\'écosystème Beem', d: 'L\'extension se connecte à une Beembox déjà installée : suivi en temps réel, historique de production et économies cumulées sur une seule app pour toutes vos stations.' },
                  { t: 'Technique solide', d: 'Panneau bifacial TOPCon, micro-onduleur APSystems, garantie 25 ans et 4,7/5 sur Trustpilot : la qualité du produit n\'a pas changé, seul son positionnement commercial a évolué.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem On 460W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/beem-on-460w-extension" label="Vérifier le stock de l'extension" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Plus disponible comme premier achat', d: 'C\'est le changement majeur : impossible d\'acheter un Beem On 460W « complet » (avec Beembox) comme station de départ. Il faut déjà posséder une Beembox Beem pour en profiter.' },
                  { t: 'Panneau plus grand que le Sunology', d: 'Le Beem On mesure 189 x 113 cm contre 180 x 113 cm pour le Sunology PLAY 500 Wc actuel. Sur un petit balcon, ça peut poser problème.' },
                  { t: 'Batterie Beem très chère', d: 'L\'option stockage existe (Beem Battery) mais à partir de 6 190€ pour le kit complet. Le PLAY MAX de Sunology (699€ station + batterie VAULT) est bien plus accessible.' },
                  { t: 'SAV et pérennité de l\'entreprise à surveiller', d: 'Le tribunal de commerce de Nantes a placé Beem Energy en procédure de sauvegarde le 26 novembre 2025, après une chute de 42% du marché résidentiel du solaire (étude Enedis), avec un an pour redresser la barre (échéance autour de novembre 2026). Aucune liquidation n\'est annoncée à ce jour (vérifié le 8 octobre 2026), mais la garantie 25 ans ne vaut que si l\'entreprise est toujours là pour l\'honorer.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem On 460W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/beem-on-460w-extension" label="Vérifier le délai de livraison" variant="secondary" position="after-cons" />

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Vous n&apos;avez pas encore de kit Beem ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalisé avec le Beem On 500 Wc, la station de départ actuelle.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec un kit Beem →
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Vous n\'avez pas déjà une station Beem avec Beembox (c\'est votre premier kit solaire)',
                  'Pas de garde-corps droit de 1,40 m+',
                  'Vents forts réguliers',
                  'Absent toute la journée sans décalage possible',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le Beem On 460W reste techniquement un bon panneau solaire : bifacial TOPCon, garantie 25 ans, 4,7/5 sur Trustpilot. Mais son rôle a changé : Beem Energy ne le vend plus comme station de départ, seulement comme extension à 369€ pour les clients qui possèdent déjà une Beembox.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Pour un premier achat, ce n&apos;est donc plus l&apos;option à considérer : regardez plutôt le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (429€, qui l&apos;a remplacé) ou le <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY2</Link> (599€).</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8/10</span></strong> — pour le produit ; à réserver aux propriétaires d&apos;une installation Beem existante.</p>
              <a href="https://beemenergy.fr/products/beem-on-460w-extension" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir l&apos;extension Beem On 460W &rarr;</a>
            </section>

            <AffiliateCTA productName="Beem On 460W" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/beem-on-460w-extension" label="Voir l'offre actuelle sur Beem" variant="box" position="footer-box" price="369 €" />

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
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">La station de départ actuelle, qui remplace le 460W</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le leader du marché français</p>
                </Link>
                <Link href="/comparatif/sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le match des deux leaders</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W</h4>
                  <p className="text-xs text-charcoal-light mt-1">Quelle puissance choisir</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>Méthodologie ROI :</strong> ROI calculé avec tarif 0,1940 &euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. &Eacute;conomies : 77 &euro;/an, ROI 4,5 ans au tarif extension (369&euro;), 2 933 &euro; sur 25 ans.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis indépendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
