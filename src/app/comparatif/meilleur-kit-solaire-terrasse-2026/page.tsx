import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Meilleur kit solaire pour terrasse 2026 : comparatif complet',
  description: 'Quel kit solaire plug-and-play choisir pour une terrasse ? Comparatif 2026 : Sunology, Beem, Zendure, EcoFlow. Pose au sol, multi-panneaux, rentabilité.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/comparatif/meilleur-kit-solaire-terrasse-2026',
  },
};

const faqData = [
  {
    question: 'Quelle est la différence entre un kit solaire pour terrasse et pour balcon ?',
    answer: 'Sur un balcon, l\'espace est limité (1-2 panneaux max, souvent en appui sur le garde-corps). Sur une terrasse, vous avez plus de surface, vous pouvez poser au sol avec l\'inclinaison optimale (30-35°), installer 2 à 4 panneaux, et ajouter du stockage. La terrasse offre généralement un meilleur potentiel solaire grâce à moins d\'ombres portées et une orientation optimisable.',
  },
  {
    question: 'Combien de panneaux solaires peut-on installer sur une terrasse ?',
    answer: 'L\'ADEME et l\'AFNOR recommandent un maximum de 3 kWc en plug-and-play sans autorisation, soit environ 6 à 7 panneaux de 450 W. En pratique, 2 panneaux (800-900 Wc) sont le sweet spot pour une terrasse standard : production suffisante, budget maîtrisé, et pas de démarches supplémentaires au-delà de la CACSI.',
  },
  {
    question: 'Faut-il un permis pour installer des panneaux sur une terrasse ?',
    answer: 'Non, tant que les panneaux sont posés au sol (pas surélevés de plus de 1,80 m) et que la puissance reste sous 3 kWc. Vous devez simplement faire la déclaration CACSI auprès d\'Enedis (gratuit, 25 minutes en ligne). En copropriété, vérifiez le règlement pour les parties communes.',
  },
  {
    question: 'Quel est le meilleur kit solaire pour une terrasse en 2026 ?',
    answer: 'Pour une terrasse, le setup Zendure SolarFlow + 2 panneaux 420 W (~900 €) offre le meilleur rapport qualité-prix : 840 W de puissance, batterie 1,92 kWh intégrée, et un ROI de ~7 ans. Si vous voulez la simplicité absolue, 2 Sunology PLAY 2 (1 198 €) sont aussi un excellent choix : 900 Wc, installation en 2 minutes, zéro configuration.',
  },
  {
    question: 'La pose au sol est-elle aussi efficace que la fixation murale ?',
    answer: 'Souvent plus efficace. Au sol, vous pouvez incliner le panneau à l\'angle optimal (30-35°) et l\'orienter librement vers le sud. Sur un mur ou un garde-corps, l\'angle et l\'orientation sont imposés par la structure. Seul inconvénient du sol : plus de risque de salissure (poussière, feuilles) et de prise au vent.',
  },
];

const setups = [
  {
    titre: 'Setup compact : 1 panneau (450-500 Wc)',
    budget: '429-690 €',
    surface: '~2 m²',
    production: '400-570 kWh/an',
    ideal: 'Petite terrasse, premier achat, budget limité',
    kits: [
      { name: 'Beem On 500 Wc', power: '500 Wc', price: '429 €', roi: '4,8 ans', avantage: 'Meilleur prix (0,86 €/Wc), paiement 10x', slug: '/avis/beem-on-500w' },
      { name: 'Sunology PLAY 2', power: '450 Wc', price: '599 €', roi: '6,0 ans', avantage: 'Installation 1 min, WiFi natif', slug: '/avis/sunology-play-2' },
      { name: 'Sunethic F500', power: '500 Wc', price: '690 €', roi: '6,2 ans', avantage: 'Made in France, bifacial', slug: '/avis/sunethic-f500' },
    ],
  },
  {
    titre: 'Setup optimal : 2 panneaux (800-900 Wc)',
    budget: '900-1 200 €',
    surface: '~4 m²',
    production: '800-1 100 kWh/an',
    ideal: 'Terrasse standard, meilleur rapport production/investissement',
    kits: [
      { name: 'Zendure SolarFlow + 2\u00d7420 W', power: '840 Wc + batterie', price: '~900 €', roi: '6,6 ans', avantage: 'Batterie 1,92 kWh, autoconsommation 80 %', slug: '/avis/zendure-solarflow' },
      { name: '2\u00d7 Sunology PLAY 2', power: '900 Wc', price: '1 198 €', roi: '7,4 ans', avantage: 'Simplicité absolue, 2 prises, zéro config', slug: '/avis/sunology-play-2' },
      { name: '2\u00d7 Beem On 500 Wc', power: '1 000 Wc', price: '858 €', roi: '5,1 ans', avantage: 'Meilleur ratio \u20ac/Wc du march\u00e9 (0,86 \u20ac/Wc)', slug: '/avis/beem-on-500w' },
    ],
  },
  {
    titre: 'Setup maximum : stockage + multi-panneaux',
    budget: '1 500-2 100 €',
    surface: '~6 m²',
    production: '800-1 100 kWh/an + stockage nuit',
    ideal: 'Grande terrasse, autoconsommation maximale, gros talon de consommation',
    kits: [
      { name: 'EcoFlow PowerStream + 2\u00d7400 W + DELTA 2', power: '800 Wc + 1 kWh', price: '~1 800 €', roi: '13,6 ans', avantage: 'Backup coupure réseau, batterie portable', slug: '/avis/ecoflow-powerstream' },
      { name: 'Zendure SolarFlow + 2\u00d7420 W + AB2000', power: '840 Wc + 3,84 kWh', price: '~1 500 €', roi: '9,3 ans', avantage: 'Stockage doublé, couvre la nuit entière', slug: '/avis/zendure-solarflow' },
    ],
  },
];

export default function MeilleurKitTerrasse2026Page() {
  return (
    <>
      <SchemaArticle
        title="Meilleur kit solaire pour terrasse 2026 : comparatif complet"
        description="Comparatif des meilleurs kits solaires plug-and-play pour terrasse en 2026."
        url="https://monbalconsolaire.fr/comparatif/meilleur-kit-solaire-terrasse-2026"
        datePublished="2026-05-13"
        dateModified="2026-06-20"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kit solaire terrasse 2026' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Kit solaire terrasse 2026' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Meilleur kit solaire pour terrasse 2026 : comparatif complet
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Une terrasse, c&apos;est l&apos;endroit <strong>idéal</strong> pour le solaire plug-and-play : plus d&apos;espace qu&apos;un balcon, possibilité de poser au sol avec l&apos;inclinaison optimale, et souvent moins d&apos;ombres. Voici les meilleurs setups selon votre surface, votre budget et vos objectifs.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>13 mai 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>

          <div className="card bg-cream/50 border-border-light mb-6 py-3 px-5 flex items-start gap-3">
            <span className="text-stone text-sm mt-0.5">&#x2139;</span>
            <p className="text-xs text-stone leading-relaxed">
              <strong>Transparence :</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la puissance, la facilit&eacute; d&apos;installation, la garantie et l&apos;ad&eacute;quation au profil. Aucun fabricant ne nous paie pour &ecirc;tre mieux not&eacute;. <a href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</a>
            </p>
          </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Terrasse vs balcon : pourquoi c&apos;est mieux</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-green text-xs uppercase tracking-wider mb-2">Avantages terrasse</h4>
                <ul className="text-charcoal-light space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-green font-bold">+</span> Plus de surface (2-4 panneaux)</li>
                  <li className="flex items-start gap-2"><span className="text-green font-bold">+</span> Pose au sol, inclinaison libre (30-35°)</li>
                  <li className="flex items-start gap-2"><span className="text-green font-bold">+</span> Orientation optimisable (plein sud)</li>
                  <li className="flex items-start gap-2"><span className="text-green font-bold">+</span> Moins d&apos;ombres portées</li>
                  <li className="flex items-start gap-2"><span className="text-green font-bold">+</span> Place pour une batterie</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-amber-dark text-xs uppercase tracking-wider mb-2">Points d&apos;attention</h4>
                <ul className="text-charcoal-light space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-amber-dark font-bold">!</span> Lestage obligatoire (vent)</li>
                  <li className="flex items-start gap-2"><span className="text-amber-dark font-bold">!</span> Plus de salissure (sol)</li>
                  <li className="flex items-start gap-2"><span className="text-amber-dark font-bold">!</span> Câble plus long vers la prise</li>
                  <li className="flex items-start gap-2"><span className="text-amber-dark font-bold">!</span> Copropriété : vérifier le r&egrave;glement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {setups.map((setup, si) => (
              <section key={si}>
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <h2 className="text-2xl font-extrabold">{setup.titre}</h2>
                  <span className="font-mono font-bold text-green text-lg">{setup.budget}</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="rounded-brand-lg border border-border bg-cream/50 p-3 text-center">
                    <div className="text-xs text-stone uppercase tracking-wider font-semibold">Surface</div>
                    <div className="font-mono font-bold text-charcoal mt-1">{setup.surface}</div>
                  </div>
                  <div className="rounded-brand-lg border border-border bg-cream/50 p-3 text-center">
                    <div className="text-xs text-stone uppercase tracking-wider font-semibold">Production</div>
                    <div className="font-mono font-bold text-green mt-1 text-sm">{setup.production}</div>
                  </div>
                  <div className="rounded-brand-lg border border-border bg-cream/50 p-3 text-center">
                    <div className="text-xs text-stone uppercase tracking-wider font-semibold">Id&eacute;al pour</div>
                    <div className="text-xs text-charcoal-light mt-1">{setup.ideal}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {setup.kits.map((kit, ki) => (
                    <Link key={ki} href={kit.slug} className={`card block hover:shadow-brand-lg transition-all group ${ki === 0 ? 'border-l-4 border-l-green' : ''}`}>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="font-bold text-sm group-hover:text-green transition-colors">{kit.name}</h3>
                          <p className="text-xs text-stone mt-0.5">{kit.power} &middot; {kit.avantage}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-mono font-bold text-green">{kit.price}</div>
                          <div className="text-xs text-stone">ROI {kit.roi}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Conseils d&apos;installation sur terrasse</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Orientation et inclinaison</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;avantage de la terrasse : vous pouvez orienter le panneau plein sud et l&apos;incliner à 30-35°, l&apos;angle optimal en France. C&apos;est 10-15 % de production en plus par rapport à un panneau posé à plat. <Link href="/guide/orientation-panneau-solaire-balcon" className="text-green hover:underline font-semibold">Guide orientation</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Lestage et fixation</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Sur terrasse, le vent est plus expos&eacute; qu&apos;en balcon (pas de garde-corps protecteur). Lestez avec les ballasts fournis (eau ou sable, 15-24 kg par côté). Sur une terrasse en hauteur, doublez le lestage.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Câblage</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">La plupart des kits incluent 5-10 m de câble. Si votre prise est plus loin, utilisez une rallonge ext&eacute;rieure IP44 (étanche). Ne faites pas passer le câble sous une porte ou fen&ecirc;tre qui l&apos;&eacute;craserait. <Link href="/blog/accessoires-kit-solaire-balcon" className="text-green hover:underline font-semibold">Voir les accessoires</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Nettoyage</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Au sol, les panneaux se salissent plus vite (poussi&egrave;re, feuilles, pollen). Pr&eacute;voyez un nettoyage tous les 2-3 mois à l&apos;eau claire. <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green hover:underline font-semibold">Diagnostic si production basse</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul de rentabilité (setup 2 panneaux, Lyon)</h2>
              <div className="card-lg bg-cream/40">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Setup</strong> : Zendure SolarFlow + 2 panneaux 420 W = <strong>~900 €</strong></li>
                  <li>&bull; <strong>Production</strong> : 840 W × 1 300 kWh/kWc × 0,85 = <strong>929 kWh/an</strong></li>
                  <li>&bull; <strong>Autoconsommation (avec batterie)</strong> : 80 % = <strong>743 kWh valorisés</strong></li>
                  <li>&bull; <strong>Économies</strong> : 743 × 0,1940 € = <strong>144 €/an</strong></li>
                  <li>&bull; <strong>ROI</strong> : 900 / 144 = <strong className="text-green">6,3 ans</strong></li>
                  <li>&bull; <strong>Sur 25 ans</strong> : <strong className="text-green">3 600 € d&apos;économies cumulées</strong> (sans hausse EDF)</li>
                </ul>
              </div>
              <p className="text-xs text-stone mt-3">
                Avec la hausse du tarif EDF (+4-5 %/an en tendance), les économies r&eacute;elles passent à 170+ €/an d&egrave;s la 3&egrave;me année. <Link href="/calculateur" className="text-green hover:underline">Calculez pour votre département</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Si vous avez une terrasse, <strong>ne vous limitez pas à un seul panneau</strong>. L&apos;espace est votre atout principal. Le setup <Link href="/avis/zendure-solarflow" className="text-green hover:underline font-semibold">Zendure SolarFlow + 2 panneaux 420 W</Link> (~900 €) offre le meilleur compromis : 840 W de puissance, batterie intégrée pour le soir, ROI de 7 ans.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Si le budget est serr&eacute;, le <Link href="/avis/beem-on-500w" className="text-green hover:underline font-semibold">Beem On 500 Wc &agrave; 429 &euro;</Link> offre le meilleur rapport qualit&eacute;-prix du march&eacute; (0,86 &euro;/Wc, ROI ~4,8 ans). Si la simplicit&eacute; prime, <Link href="/avis/sunology-play-2" className="text-green hover:underline font-semibold">2 Sunology PLAY 2</Link> se posent et se branchent en 2 minutes.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  Et si vous voulez maximiser l&apos;autonomie avec un backup réseau, le <Link href="/avis/ecoflow-powerstream" className="text-green hover:underline font-semibold">EcoFlow PowerStream + DELTA 2</Link> est le seul système qui fonctionne en cas de coupure de courant.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien produit votre terrasse ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Calculez la production et la rentabilité pour votre département et votre orientation exacte.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes économies &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire 2026 : comparatif complet</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif g&eacute;n&eacute;ral de tous les kits du march&eacute;</p>
                </Link>
                <Link href="/comparatif/zendure-vs-sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Zendure vs Sunology vs Beem : le match 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Stockage vs simplicit&eacute; vs flexibilit&eacute;</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comment installer un kit solaire : pas à pas</h4>
                  <p className="text-xs text-charcoal-light mt-1">Guide d&apos;installation d&eacute;taill&eacute;, applicable aussi sur terrasse</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic en 7 points si votre production est d&eacute;cevante</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> donn&eacute;es PVGIS, fiches techniques constructeurs, tarif EDF base juin 2026 : 0,1940 €/kWh. Production calcul&eacute;e pour Lyon, orientation sud, inclinaison 30°, coefficient 0,85.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
