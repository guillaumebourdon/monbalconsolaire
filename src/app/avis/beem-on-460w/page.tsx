import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';
import { priceLabel } from '@/data/products';

export const metadata: Metadata = withCanonicalOg({
  title: 'Beem On 460W avis : arrêté, quel successeur ?',
  description: 'Beem On 460W : panneau bifacial TOPCon 460 Wc, plus au catalogue Beem en novembre 2026. Ce qu\'il valait et son successeur, le Beem On 500 Wc.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/beem-on-460w',
  },
});

const faqData = [
  { question: 'Peut-on encore acheter le Beem On 460W comme premier kit ?', answer: 'Non. En octobre 2026, Beem ne le vendait déjà plus qu\'en extension (429 €, sans Beembox). Au 5 novembre 2026, il n\'est plus du tout au catalogue : son ancienne fiche renvoie vers le Beem On 500 Wc. Pour un premier achat, voir notre avis du Beem On 500 Wc (429 €, en précommande, expédition à partir de décembre 2026).' },
  { question: 'Le Beem On 460W reste-t-il un bon kit solaire ?', answer: 'Sur le plan technique, oui : panneau bifacial TOPCon de 460 Wc, 4,7/5 sur Trustpilot, garantie 25 ans. Mais il n\'est plus vendu : retiré comme station autonome, puis du catalogue Beem (vérifié le 5 novembre 2026). Son successeur est le Beem On 500 Wc.' },
  { question: 'Beem On 460W vs Sunology PLAY2 : lequel choisir ?', answer: 'Cette comparaison n\'est plus pertinente pour un premier achat : le 460W n\'est plus vendu. Pour comparer un premier kit, voir Beem On 500 Wc (429 €) contre Sunology PLAY (599 €).' },
  { question: 'Combien produit le Beem On 460W ?', answer: 'Entre 420 et 630 kWh/an selon la région et l\'orientation. En région lyonnaise, exposition sud, comptez ~469 kWh/an soit environ 80 € d\'économies la première année et environ 2 830 € sur 25 ans (inflation 3,3 %/an, dégradation des panneaux 0,5 %/an). Le produit n\'étant plus vendu, nous ne calculons plus de retour sur investissement.' },
];

export default function BeemOnAvisPage() {
  return (
    <>
      <SchemaArticle title="Beem On 460W avis : analyse complète et verdict" description="Avis détaillé sur le Beem On 460W, retiré du catalogue Beem, et son successeur." url="https://monbalconsolaire.fr/avis/beem-on-460w" datePublished="2026-03-26" dateModified="2026-11-05" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Beem On 460W" brand="Beem Energy" description="Panneau solaire bifacial TOPCon 460 Wc avec micro-onduleur APSystems, retiré du catalogue Beem (successeur : Beem On 500 Wc)." price={429} availability="Discontinued" ratingValue={8} url="https://monbalconsolaire.fr/avis/beem-on-460w" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 460W' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 460W' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis &middot; Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Beem On 460W avis : analyse compl&egrave;te et verdict (2026)</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le Beem On 460W a été le concurrent direct du Sunology PLAY2. Beem l&apos;a d&apos;abord retir&eacute; de la vente comme station autonome, puis du catalogue&nbsp;: au 5 novembre 2026, son ancienne fiche renvoie vers le Beem On 500&nbsp;Wc. Ce qu&apos;il valait, et son successeur.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>26 mars 2026 &middot; Mis &agrave; jour le 5 novembre 2026</span><span>&middot;</span><span>9 min de lecture</span></div>
          </div>

          <div className="card-lg border-amber/30 bg-amber-pale/20 mb-6">
            <h3 className="font-bold text-amber-dark mb-2">&Agrave; savoir avant de lire cet avis</h3>
            <p className="text-sm text-charcoal-light leading-relaxed">Au 5 novembre 2026, le Beem On 460W <strong>n&apos;est plus au catalogue</strong> de beemenergy.fr&nbsp;: son ancienne fiche (vendue en extension &agrave; 429&euro; en octobre) renvoie d&eacute;sormais vers le Beem On 500&nbsp;Wc. Pour un premier achat, voir notre avis du <Link href="/avis/beem-on-500w" className="text-green hover:underline font-semibold">Beem On 500 Wc (429€)</Link>, qui l&apos;a remplac&eacute; dans le catalogue.</p>
          </div>

          <ProductHero
            brand="Beem Energy"
            name="Beem On 460W (arrêté)"
            power="460 Wc"
            price="Arrêté"
            score="8/10"
            tagline="Un bon panneau, mais plus au catalogue Beem : son successeur est le Beem On 500 Wc."
            affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge"
            affiliateLabel="Voir le successeur : Beem On 500 Wc"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Dernier prix constat&eacute; le 08/10/2026 (429&nbsp;&euro; en extension) &middot; Plus au catalogue Beem au 05/11/2026</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Présentation du Beem On 460W</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Beem Energy est une startup nantaise (comme Sunology) spécialisée dans les kits solaires plug-and-play. Le Beem On 460W a été leur modèle phare en 2026 : un panneau unique bifacial TOPCon de 460 Wc, équipé d&apos;un micro-onduleur APSystems. Depuis le lancement du <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (429€, 500 Wc), le 460W a d&apos;abord disparu comme station de départ (vendu seulement en extension), puis du catalogue en novembre 2026.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '460 Wc', l: 'Puissance' },
                  { v: 'Arrêté', l: 'Statut (05/11/2026)' },
                  { v: '25 ans', l: 'Garantie' },
                  { v: '4,7/5', l: 'Trustpilot' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-xs text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Une extension simple à ajouter', d: 'Vendu 429 € pour 460 Wc (0,93 €/Wc) en extension jusqu\'en octobre 2026, il permettait d\'agrandir une installation Beem. Pour agrandir aujourd\'hui, c\'est le 500 Wc qu\'il faut regarder.' },
                  { t: 'Paiement en 10x sans frais', d: 'Beem propose le paiement fractionné jusqu\'à 10x sans frais sur ses produits, extension comprise.' },
                  { t: 'Option Beem ZEN', d: 'Pour 49€ de plus, Beem s\'occupe de toutes les démarches administratives : déclaration CACSI Enedis, convention d\'autoconsommation. Pratique pour les non-initiés.' },
                  { t: 'Compatible avec l\'écosystème Beem', d: 'L\'extension se connecte à une Beembox déjà installée : suivi en temps réel, historique de production et économies cumulées sur une seule app pour toutes vos stations.' },
                  { t: 'Technique solide', d: 'Panneau bifacial TOPCon, micro-onduleur APSystems, garantie 25 ans et 4,7/5 sur Trustpilot : la qualité du produit n\'a pas changé, seul son positionnement commercial a évolué.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">{p.t}</h3>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Voir le successeur : Beem On 500 Wc" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Plus disponible comme premier achat', d: 'C\'est le changement majeur : impossible d\'acheter un Beem On 460W « complet » (avec Beembox) comme station de départ. Il faut déjà posséder une Beembox Beem pour en profiter.' },
                  { t: 'Panneau plus grand que le Sunology', d: 'Le Beem On mesure 189 x 113 cm contre 180 x 113 cm pour le Sunology PLAY 500 Wc actuel. Sur un petit balcon, ça peut poser problème.' },
                  { t: 'Batterie Beem très chère', d: `L'option stockage existe (Beem Battery) mais à partir de 6 190€ pour le kit complet. Le PLAY MAX de Sunology (${priceLabel('sunology-play-max')} station + batterie VAULT) est bien plus accessible.` },
                  { t: 'SAV et pérennité de l\'entreprise à surveiller', d: 'Le tribunal de commerce de Nantes a placé Beem Energy en procédure de sauvegarde le 26 novembre 2025, après une chute de 42% du marché résidentiel du solaire (étude Enedis), avec un an pour redresser la barre (échéance autour de novembre 2026). Aucune liquidation n\'est annoncée à ce jour (vérifié le 8 octobre 2026), mais la garantie 25 ans ne vaut que si l\'entreprise est toujours là pour l\'honorer.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h3 className="font-bold text-sm mb-1">{p.t}</h3>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center my-6"><Link href="/avis/beem-on-500w" className="btn-secondary text-sm inline-flex">Lire l&apos;avis du successeur : Beem On 500 Wc &rarr;</Link></div>

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
              <p className="text-charcoal-light leading-relaxed mb-4">Le Beem On 460W reste techniquement un bon panneau solaire : bifacial TOPCon, garantie 25 ans, 4,7/5 sur Trustpilot. Mais il n&apos;est plus vendu&nbsp;: Beem Energy l&apos;a retir&eacute; de son catalogue (v&eacute;rifi&eacute; le 5 novembre 2026).</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Pour un premier achat, ce n&apos;est donc plus l&apos;option à considérer : regardez plutôt le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> (429€, en pr&eacute;commande, qui l&apos;a remplac&eacute;) ou le <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY</Link> (599€, 515&nbsp;W).</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8/10</span></strong> — pour le produit ; à réserver aux propriétaires d&apos;une installation Beem existante.</p>
              <a href="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le successeur : Beem On 500 Wc &rarr;</a>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Voir le successeur : Beem On 500 Wc" variant="box" position="footer-box" price="429 €" />

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
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h3>
                  <p className="text-xs text-charcoal-light mt-1">La station de départ actuelle, qui remplace le 460W</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le leader du marché français</p>
                </Link>
                <Link href="/comparatif/sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le match des deux leaders</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W</h3>
                  <p className="text-xs text-charcoal-light mt-1">Quelle puissance choisir</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>Méthodologie ROI :</strong> Calcul avec tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}, autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. &Eacute;conomies : 80 &euro; la premi&egrave;re ann&eacute;e, ~2 830 &euro; sur 25 ans. Statut v&eacute;rifi&eacute; sur beemenergy.fr le 5 novembre 2026 (produit retir&eacute; du catalogue).</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis indépendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
