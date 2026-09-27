import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Sunology PLAY MAX avis 2026 : kit solaire + batterie, ça vaut le coup ?',
  description: 'Avis Sunology PLAY MAX (PLAYMax) : station 450 Wc + batterie VAULT 700 Wh, désormais 699 €. Production, stockage, ROI 7,4 ans. Faut-il la batterie ?',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/sunology-play-max',
  },
};

const faqData = [
  { question: 'Le Sunology PLAY MAX vaut-il 699 € ?', answer: 'Oui pour la plupart des profils qui consomment le soir. Au 27 septembre 2026, Sunology le vend 699 € (contre 1 179 € auparavant), soit seulement 100 € de plus que le Sunology PLAY seul (500 Wc, 599 €). Avec notre méthodologie, le PLAY MAX se rentabilise en 7,4 ans (85 €/an, 3 209 € sur 25 ans) contre 6,5 ans pour le PLAY seul (84 €/an, 3 190 € sur 25 ans). L\'écart de ROI est devenu faible.' },
  { question: 'Quelle est la capacité de la batterie VAULT ?', answer: 'La VAULT a une capacité de 700 Wh (0,7 kWh), en cellules lithium-ion, pour 3,7 kg. Ça représente environ 5 heures d\'autonomie pour un talon de consommation de 140 W (frigo + box + veilles). Ce n\'est pas assez pour une nuit complète mais ça couvre la soirée. Sunology la garantit 10 ans ou 2 500 cycles.' },
  { question: 'Peut-on ajouter la batterie VAULT après avoir acheté le PLAY ?', answer: 'La VAULT se vend seule 499 € sur sunology.eu. Sunology la présente comme conçue pour être couplée à la station PLAYMax ; la compatibilité avec un PLAY déjà installé n\'est pas clairement documentée, vérifiez auprès du fabricant. En tout état de cause, PLAY + VAULT séparés (599 € + 499 € = 1 098 €) coûtent bien plus cher que le PLAY MAX à 699 €.' },
  { question: 'PLAY MAX vs PLAY + STOREY : quelle différence ?', answer: 'Le PLAY MAX inclut la batterie amovible VAULT (700 Wh). Le PLAY + STOREY (1 390 € la batterie seule) offre une batterie fixe de 2,2 kWh, soit 3x plus de capacité, pour un budget total près de trois fois supérieur. Le STOREY est pour ceux qui veulent une vraie autonomie le soir et la nuit.' },
];

export default function PlayMaxAvisPage() {
  return (
    <>
      <SchemaArticle title="Sunology PLAY MAX avis : kit + batterie, ça vaut le coup ?" description="Avis complet sur le Sunology PLAY MAX avec batterie VAULT." url="https://monbalconsolaire.fr/avis/sunology-play-max" datePublished="2026-04-02" dateModified="2026-09-27" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Sunology PLAY MAX" brand="Sunology" description="Station solaire 450 Wc avec batterie VAULT 700 Wh intégrée pour stocker le surplus et consommer le soir." price={699} ratingValue={8} ratingCount={1} url="https://monbalconsolaire.fr/avis/sunology-play-max" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology PLAY MAX' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology PLAY MAX' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Sunology PLAY MAX avis : kit solaire + batterie, ça vaut le coup ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Le PLAY MAX (vendu sous le nom &laquo;&nbsp;PLAYMax&nbsp;&raquo;), c&apos;est une station solaire Sunology de 450 Wc avec une batterie VAULT de 700 Wh int&eacute;gr&eacute;e. Son prix est pass&eacute; de 1 179&nbsp;&euro; &agrave; 699&nbsp;&euro;, soit 100&nbsp;&euro; de plus que le <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY</Link> sans batterie. La promesse : stocker le solaire pour le soir. Analyse honnête.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>2 avril 2026 &middot; Mis &agrave; jour le 27 septembre 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Sunology"
            name="PLAY MAX"
            trackingName="PLAYMax"
            power="450 Wc + 700 Wh"
            price="699 €"
            score="8/10"
            tagline="Kit solaire avec batterie intégrée. Pour ceux qui consomment le soir."
            affiliateUrl="https://sunology.eu/products/playmax-station-solaire-batterie"
            affiliateLabel="Voir sur le site du fabricant"
            accentColor="amber"
            image="/images/produits/sunology-play-max-1.webp"
            imageAlt="Sunology PLAY MAX - kit solaire avec batterie VAULT 700 Wh"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 27/09/2026 sur sunology.eu (prix de vente des versions) &middot; Peut varier selon les promos</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le concept PLAY MAX</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le Sunology PLAY MAX est une station solaire (panneau bifacial TOPCon de 108 cellules, micro-onduleur 450 W, ch&acirc;ssis aluminium) dans laquelle vient se loger la batterie VAULT (700 Wh), pour <span className="data-highlight">699 €</span>. Sunology propose plusieurs versions du panneau (425, 450 ou 460 Wc selon le stock), mais l&apos;onduleur plafonne la sortie &agrave; 450 W : c&apos;est la valeur que nous retenons. L&apos;idée est simple : au lieu de perdre le surplus d&apos;électricité injecté gratuitement sur le réseau en journée, la VAULT le stocke pour que vous le consommiez le soir.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">La VAULT est une batterie lithium-ion de 700 Wh pour 3,7 kg, certifi&eacute;e IP65. Int&eacute;gr&eacute;e &agrave; la station, elle est aussi amovible et peut servir de batterie nomade (camping, pique-nique) avec ses 4 ports de connexion. Sunology la garantit 10 ans ou 2 500 cycles.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '450 Wc', l: 'Station PLAYMax' },
                  { v: '700 Wh', l: 'Batterie VAULT' },
                  { v: '699 €', l: 'Prix station + batterie' },
                  { v: '~5h', l: 'Autonomie soir' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-amber-pale/30 border-amber/10 border-l-4 border-l-amber mb-6">
              <div className="flex items-start gap-3">
                <span className="text-xl">&#9888;&#65039;</span>
                <div>
                  <h3 className="font-bold text-sm text-amber-dark mb-2">Ce qui a chang&eacute; : prix divis&eacute; par 1,7</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    &Agrave; 1 179 &euro;, le PLAY MAX se rentabilisait en 11,7 ans et nous le d&eacute;conseillions pour la rentabilit&eacute; pure. &Agrave; 699 &euro;, le ROI tombe &agrave; 7,4 ans : la batterie ne co&ucirc;te plus que 100 &euro; de plus que le PLAY seul. Pour le pur ROI, le Sunology PLAY (500&nbsp;Wc&nbsp;: 6,5 ans) ou le Zendure SolarFlow (5,3 ans) restent devant, mais l&apos;&eacute;cart est devenu faible. Attention : au 27/09/2026, la page produit Sunology affiche encore 1 179 &euro; dans son bandeau alors que toutes les versions sont vendues 699 &euro;. V&eacute;rifiez le prix au moment de payer.
                  </p>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul honnête : avec vs sans batterie</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">C&apos;est la question centrale. On compare le PLAY seul (500 Wc, 599€) au PLAY MAX (699€, station 450 Wc) avec notre méthodologie, région lyonnaise :</p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2">PLAY seul (500 Wc, 599&euro;)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Autoconsommation : <span className="font-mono font-medium">85%</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-green">84 &euro;</span></p>
                    <p>ROI : <span className="font-mono font-medium">6,5 ans</span></p>
                    <p>Économies sur 25 ans : <span className="font-mono font-medium text-green">3 190 &euro;</span></p>
                  </div>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">PLAY MAX (699&euro;)</h4>
                  <div className="space-y-2 text-sm text-charcoal-light">
                    <p>Autoconsommation : <span className="font-mono font-medium">95%</span></p>
                    <p>Économies/an : <span className="font-mono font-medium text-amber-dark">85 &euro;</span></p>
                    <p>ROI : <span className="font-mono font-medium">7,4 ans</span> (+3,3%/an d&apos;inflation CRE)</p>
                    <p>Économies sur 25 ans : <span className="font-mono font-medium text-amber-dark">3 209 &euro;</span></p>
                  </div>
                </div>
              </div>
              <div className="card bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-amber-dark"><strong>Le point clé :</strong> avec 50 Wc de moins que le PLAY, le PLAY MAX produit moins (459 vs 510 kWh/an), mais la batterie compense en faisant passer l&apos;autoconsommation de 85&nbsp;% &agrave; 95&nbsp;%. R&eacute;sultat : des &eacute;conomies quasi identiques (85 vs 84 &euro;/an). &Agrave; 699 &euro;, le ROI du PLAY MAX est de <span className="font-mono font-bold">7,4 ans</span> (+3,3%/an d&apos;inflation CRE), contre 6,5 ans pour le PLAY seul : 100 &euro; de plus pour une batterie de 700 Wh et une autonomie le soir.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Le kit + batterie complet le plus accessible', d: 'À 699€ panneau et batterie compris, c\'est la solution de stockage complète la moins chère que nous ayons analysée. La batterie ne coûte que 100€ de plus que le PLAY seul, alors que la VAULT vendue seule coûte 499€.' },
                  { t: 'La VAULT est amovible', d: 'Contrairement aux batteries fixes (STOREY, Beem Battery), la VAULT se retire de la station : 3,7 kg, IP65, 4 ports de connexion. Vous pouvez l\'emmener en camping, en pique-nique, ou l\'utiliser comme batterie de secours.' },
                  { t: 'Garantie batterie claire', d: 'Sunology garantit la VAULT 10 ans ou 2 500 cycles à 100 % de charge et décharge, et le châssis de la station 25 ans.' },
                  { t: 'Installation identique au PLAY', d: 'La station s\'installe au sol ou au mur en quelques minutes et se branche sur une simple prise. La batterie est intégrée à la station : pas de câblage supplémentaire.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Sunology PLAYMax" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/playmax-station-solaire-batterie" label="Voir le PLAY MAX en stock" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Capacité limitée (700 Wh)', d: 'La VAULT offre ~5 heures d\'autonomie pour un talon de consommation de 140W. Ce n\'est pas suffisant pour couvrir une nuit complète (10-12h). Si vous voulez une vraie autonomie le soir et la nuit, il faut la STOREY (2,2 kWh, 1 390€).' },
                  { t: 'Onduleur plafonné à 450 W', d: 'Le PLAY seul monte à 500 Wc. Avec 450 W en sortie, le PLAY MAX produit ~10 % de moins (459 vs 510 kWh/an à Lyon) : la batterie ne fait que compenser ce déficit en économies.' },
                  { t: 'Chimie lithium-ion, pas LFP', d: 'Sunology parle de cellules Li-Ion, sans préciser LFP. Les concurrents (Zendure, Jackery, Bluetti) annoncent du LFP, réputé plus durable. La garantie de 10 ans / 2 500 cycles reste correcte, mais la batterie pourrait devoir être remplacée avant le panneau.' },
                  { t: 'Affichage du prix incohérent', d: 'Au 27/09/2026, le bandeau de la page produit Sunology affiche toujours 1 179 € alors que toutes les versions sont vendues 699 €. Tant que Sunology n\'a pas clarifié, vérifiez le montant final avant de payer.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas sûr que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalisé selon votre département et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le Sunology PLAY MAX →
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Consommation surtout en journée (télétravail)',
                  'Besoin d\'autonomie sur toute la nuit (700 Wh ne suffisent pas)',
                  'ROI le plus court absolu recherché (le PLAY seul fait 6,5 ans)',
                  'Exposition est/ouest',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
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
                    <li>→ Vous acceptez ~1 an de ROI en plus pour de l&apos;autonomie le soir</li>
                    <li>→ Vous voulez le kit + batterie complet le moins cher</li>
                  </ul>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">Le PLAY seul suffit si :</h4>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>→ Vous êtes chez vous la journée (télétravail)</li>
                    <li>→ Vous voulez le ROI le plus rapide possible</li>
                    <li>→ Votre talon de consommation est élevé (frigo + box + PC)</li>
                    <li>→ Vous préférez économiser 100€</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le PLAY MAX est un produit bien pensé pour ceux qui veulent maximiser leur autoconsommation et/ou qui ont besoin d&apos;une batterie nomade. &Agrave; 699&euro;, c&apos;est le kit + batterie complet le plus accessible que nous ayons analysé.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">La baisse de prix change notre conclusion. &Agrave; 1 179&euro;, la batterie co&ucirc;tait 580&euro; de plus que le <Link href="/avis/sunology-play-2" className="text-green hover:underline">PLAY seul à 599€</Link> pour un ROI de 11,7 ans. &Agrave; 699&euro;, l&apos;écart n&apos;est plus que de 100&euro; et le ROI tombe à 7,4 ans (contre 6,5 ans pour le PLAY). Si vous &ecirc;tes absent la journée, le PLAY MAX devient le choix logique chez Sunology. Si vous &ecirc;tes chez vous en journée, le PLAY seul reste un peu plus rentable.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8/10</span></strong> (7/10 avant la baisse de prix) — Le rapport prix/stockage est désormais très bon. Il manque le point restant pour la capacité limitée (700 Wh), la chimie Li-Ion non LFP et l&apos;onduleur plafonné à 450 W.</p>
              <a href="https://sunology.eu/products/playmax-station-solaire-batterie" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le PLAY MAX &rarr;</a>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Avec ou sans batterie, combien pouvez-vous économiser ?</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes économies →</Link>
            </div>

            <AffiliateCTA productName="Sunology PLAYMax" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/playmax-station-solaire-batterie" label="Voir l'offre actuelle sur Sunology" variant="box" position="footer-box" price="699 €" />

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
                <Link href="/comparatif/kit-solaire-batterie-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits avec batterie 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Pour ceux qui consomment le soir</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le leader du marché français</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation expliquée</h4>
                  <p className="text-xs text-charcoal-light mt-1">Talon, surplus, injection</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>Méthodologie ROI :</strong> ROI calculé avec tarif 0,1940 &euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud, station 450 Wc &agrave; 699 &euro;. &Eacute;conomies : 85 &euro;/an, ROI 7,4 ans, 3 209 &euro; sur 25 ans. Prix : sunology.eu, relev&eacute; le 27/09/2026.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis indépendant. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
