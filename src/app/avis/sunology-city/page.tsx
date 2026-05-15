import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Sunology CITY avis 2026 : le kit pensé pour les balcons étroits',
  description: 'Avis complet sur le Sunology CITY : test, prix, production réelle, fixation garde-corps. Le kit solaire spécialisé balcon est-il vraiment adapté à votre situation ?',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/sunology-city',
  },
};

const faqData = [
  {
    question: 'Le Sunology CITY est-il vraiment différent du PLAY 2 ?',
    answer: 'Oui, sur deux points clés. Le CITY est conçu pour s\'accrocher au garde-corps (panneau vertical), alors que le PLAY 2 se pose au sol avec ballasts. Le CITY est aussi plus compact (1 m² environ contre 2,2 m² pour le PLAY 2). En contrepartie, sa puissance est plus faible : 400 W vs 450 W.',
  },
  {
    question: 'Combien produit le Sunology CITY en conditions réelles ?',
    answer: 'Comptez 380-450 kWh/an en exposition sud, 280-340 kWh/an en exposition est ou ouest. C\'est 15-20% de moins qu\'un PLAY 2, à cause de la position verticale qui n\'est pas optimale pour la captation solaire (mais qui est adaptée à la configuration garde-corps).',
  },
  {
    question: 'Le CITY peut-il s\'installer sur tous les types de garde-corps ?',
    answer: 'Le CITY est conçu pour les garde-corps standards (rambardes métalliques, balustrades). Il s\'accroche avec un système de fixation breveté Sunology, sans perçage. Sur les garde-corps en verre ou les balcons à muret plein, l\'installation devient plus compliquée et nécessite des accessoires supplémentaires.',
  },
  {
    question: 'Quelle est la durée de vie du CITY ?',
    answer: 'La garantie Sunology est de 25 ans sur le panneau (avec 80% de performance garantie), 12 ans sur le micro-onduleur Enphase IQ7. La durée de vie réelle dépasse largement ces durées : les panneaux silicium modernes fonctionnent 30-35 ans avec une dégradation de 0,5% par an.',
  },
  {
    question: 'Faut-il un permis pour installer un CITY sur un garde-corps ?',
    answer: 'Pas de permis nécessaire pour une installation plug-and-play. En revanche, en copropriété, l\'accord du syndic peut être demandé puisque le panneau est visible depuis l\'extérieur (impact esthétique sur la façade). Demandez d\'abord à votre conseil syndical.',
  },
  {
    question: 'Pourquoi choisir un CITY plutôt qu\'un kit Beem ?',
    answer: 'Le CITY est plus performant en garde-corps grâce à son système de fixation dédié (les Beem sont conçus pour pose au sol). Mais à puissance équivalente, Beem est moins cher (Beem Kit 400W à 399 € vs Sunology CITY à 549 €). Le choix dépend donc de votre balcon : si vous avez la place pour un kit posé au sol, Beem reste plus économique.',
  },
];

const points_forts = [
  {
    titre: 'Conçu spécifiquement pour balcons étroits',
    detail: 'Le CITY est le seul kit du marché pensé d\'origine pour la fixation verticale sur garde-corps. Pas besoin de bricoler un support : le système est livré complet.',
  },
  {
    titre: 'Installation sans perçage',
    detail: 'Le système de fixation Sunology s\'accroche au garde-corps avec des serres-joints en aluminium. Démontable en 15 minutes si vous déménagez. Idéal en location.',
  },
  {
    titre: 'Esthétique soignée',
    detail: 'Cadre noir, panneau monochrome, lignes épurées. Le CITY a été pensé pour s\'intégrer visuellement à un balcon urbain, contrairement aux kits "techniques" plus visibles.',
  },
  {
    titre: 'Micro-onduleur Enphase IQ7',
    detail: 'L\'un des micro-onduleurs les plus fiables du marché. Garantie 12 ans, optimisation panneau par panneau, monitoring via app Enphase.',
  },
  {
    titre: 'SAV français réactif',
    detail: 'Sunology est implanté à Lille avec un SAV français. Délai de réponse moyen 24-48h, échange du matériel défaillant sous garantie en 5-10 jours.',
  },
];

const points_faibles = [
  {
    titre: 'Production inférieure au PLAY 2',
    detail: 'La position verticale capte moins bien le soleil que la position inclinée à 30-40°. La perte est de 15-20% à puissance équivalente. C\'est le compromis assumé.',
  },
  {
    titre: 'Prix au kWc plus élevé',
    detail: 'Le CITY coûte 549 € pour 400 W, soit 1,37 €/Wc. Un PLAY 2 est à 1,33 €/Wc, un Beem Kit à 1,00 €/Wc. Vous payez la spécialisation balcon étroit.',
  },
  {
    titre: 'Pas de batterie compatible directement',
    detail: 'Contrairement au PLAY MAX (kit + batterie VAULT intégrée), le CITY ne propose pas de stockage natif. Si vous voulez stocker l\'excédent, il faut investir séparément (Sunology VAULT additionnel).',
  },
  {
    titre: 'Limité à un seul panneau par fixation',
    detail: 'Un système CITY = un panneau 400 W. Pour aller plus loin (800 W, 1 200 W), il faut empiler les fixations sur plusieurs sections de garde-corps. Pas pratique sur un petit balcon.',
  },
];

const cas_acheter = [
  {
    profil: 'Vous habitez en ville avec un balcon étroit (< 2 m²)',
    explication: 'Le CITY est fait pour ça. Aucun autre kit du marché n\'est aussi bien adapté à un balcon urbain compact où la pose au sol est impossible.',
  },
  {
    profil: 'Vous êtes locataire et craignez les traces',
    explication: 'Le système sans perçage est idéal pour la location. Démontage en 15 minutes, aucune trace sur le mur ou le sol. Le propriétaire ne peut rien vous reprocher.',
  },
  {
    profil: 'Votre garde-corps est exposé sud à sud-ouest',
    explication: 'L\'exposition est cruciale pour un panneau vertical. Sud direct ou sud-ouest jusqu\'à 17h-18h : production optimale. Au-delà, la rentabilité chute vite.',
  },
];

const cas_pas_acheter = [
  {
    profil: 'Vous avez un balcon spacieux (> 3 m²)',
    explication: 'Avec de la place au sol, le PLAY 2 est plus rentable : 450 W à 599 € vs 400 W à 549 €, plus de production grâce à l\'inclinaison optimale. Différence de 150 €/an d\'économies sur 25 ans.',
  },
  {
    profil: 'Vous êtes orienté est, ouest ou nord',
    explication: 'En exposition non sud, un panneau vertical est encore moins productif qu\'un panneau incliné. Si vous êtes plein est ou ouest, optez plutôt pour un Beem Kit posé au sol.',
  },
  {
    profil: 'Vous voulez stocker l\'excédent',
    explication: 'Si la batterie vous intéresse, le PLAY MAX (1 179 €) est mieux pensé : kit + VAULT 700 Wh intégrée. Plus économique que CITY + VAULT séparée.',
  },
];

export default function SunologyCityPage() {
  return (
    <>
      <SchemaArticle
        title="Sunology CITY avis : le kit pensé pour les balcons étroits"
        description="Avis complet sur le Sunology CITY en 2026."
        url="https://monbalconsolaire.fr/avis/sunology-city"
        datePublished="2026-04-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Sunology CITY" brand="Sunology" description="Kit solaire 400 W conçu pour fixation sur garde-corps de balcon étroit, sans perçage, avec micro-onduleur Enphase IQ7." price={549} ratingValue={7.5} url="https://monbalconsolaire.fr/avis/sunology-city" />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Sunology CITY' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Sunology CITY avis : le kit pensé pour les balcons étroits (2026)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le CITY est le seul kit solaire plug-and-play du marché conçu spécifiquement pour s&apos;accrocher au garde-corps d&apos;un balcon urbain. Test complet : prix, production réelle, installation, et les vrais cas où il vaut le coup.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>27 avril 2026 &middot; Mis &agrave; jour le 15 mai 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <ProductHero
            brand="Sunology"
            name="CITY"
            power="400 W"
            price="549 €"
            score="7,5/10"
            tagline="Le kit pensé pour s'accrocher au garde-corps des balcons urbains."
            affiliateUrl="https://sunology.eu/products/city-kit-solaire-balcon"
            affiliateLabel="Voir le CITY sur Sunology"
            accentColor="amber"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 15/05/2026 &middot; Peut varier selon les promos</p>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre avis en résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le Sunology CITY (549 €, 400 W) est <strong>le seul vrai choix</strong> pour un balcon étroit où la pose au sol est impossible. Son système de fixation breveté sans perçage et son design soigné en font un produit unique. <strong>Mais</strong> à puissance et exposition équivalentes, un Sunology PLAY 2 ou un Beem Kit posé au sol sera plus rentable de 15-20%. Le CITY est <strong>spécialisé</strong> : si votre balcon le permet, allez ailleurs.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi un kit spécialisé balcon étroit ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La grande majorité des kits solaires plug-and-play du marché — Sunology PLAY 2, Beem On 460W, Sunethic F500 — sont conçus pour être <strong>posés au sol</strong>, sur un support inclinable avec ballasts de lestage. Cette configuration est optimale techniquement (inclinaison 30-40°, captation maximale du soleil) mais nécessite au moins 2 m² de surface plane disponible.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Or, en zone urbaine dense (Paris, Lyon, Marseille, Lille...), de nombreux balcons font moins de 2 m² au sol et sont entièrement occupés par du mobilier (table, chaises, plantes). Pour ces logements, la seule surface disponible est le <strong>garde-corps lui-même</strong> : la rambarde verticale.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Sunology a créé le CITY exactement pour ce cas. C&apos;est un panneau 400 W avec un système de fixation breveté qui s&apos;accroche au garde-corps standard sans aucun perçage. Le panneau est positionné <strong>verticalement</strong>, ce qui réduit légèrement la production (-15% vs un panneau incliné), mais permet de poser le solaire là où c&apos;était jusqu&apos;ici impossible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold w-2/5">Puissance</td>
                      <td className="p-3 font-mono">400 Wc</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Dimensions panneau</td>
                      <td className="p-3 font-mono">177 &times; 100 cm</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Poids total (avec fixation)</td>
                      <td className="p-3 font-mono">22 kg</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Type de cellules</td>
                      <td className="p-3">Monocristallin (n-type TOPCon)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Micro-onduleur</td>
                      <td className="p-3">Enphase IQ7+ (intégré)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Connexion</td>
                      <td className="p-3">Prise standard 220V (plug-and-play)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Système de fixation</td>
                      <td className="p-3">Brevet Sunology · serres-joints aluminium</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Garantie panneau</td>
                      <td className="p-3">25 ans (80% de performance)</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Garantie micro-onduleur</td>
                      <td className="p-3">12 ans</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Prix de vente</td>
                      <td className="p-3 font-mono font-bold text-green">549 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production réelle par exposition</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La production d&apos;un panneau vertical varie fortement selon l&apos;exposition et la latitude. Voici les chiffres réalistes basés sur les données PVGIS et les retours utilisateurs :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Ville</th>
                      <th className="text-center p-3">Sud</th>
                      <th className="text-center p-3">Sud-est / Sud-ouest</th>
                      <th className="text-center p-3 rounded-tr-xl">Est / Ouest</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Marseille</td>
                      <td className="text-center p-3 font-mono">450 kWh/an</td>
                      <td className="text-center p-3 font-mono">410 kWh/an</td>
                      <td className="text-center p-3 font-mono">340 kWh/an</td>
                    </tr>
                    <tr className="border-b border-border-light bg-cream/50">
                      <td className="p-3 font-semibold">Lyon</td>
                      <td className="text-center p-3 font-mono">410 kWh/an</td>
                      <td className="text-center p-3 font-mono">370 kWh/an</td>
                      <td className="text-center p-3 font-mono">300 kWh/an</td>
                    </tr>
                    <tr className="border-b border-border-light bg-white">
                      <td className="p-3 font-semibold">Paris</td>
                      <td className="text-center p-3 font-mono">380 kWh/an</td>
                      <td className="text-center p-3 font-mono">340 kWh/an</td>
                      <td className="text-center p-3 font-mono">280 kWh/an</td>
                    </tr>
                    <tr className="bg-cream/50">
                      <td className="p-3 font-semibold">Lille</td>
                      <td className="text-center p-3 font-mono">350 kWh/an</td>
                      <td className="text-center p-3 font-mono">310 kWh/an</td>
                      <td className="text-center p-3 font-mono">250 kWh/an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                À titre de comparaison, un Sunology PLAY 2 (450 W posé au sol incliné à 35°) produit environ <strong>15-20% de plus</strong> dans les mêmes conditions. C&apos;est le coût caché de la spécialisation balcon étroit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 points forts du CITY</h2>
              <div className="space-y-3">
                {points_forts.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1 text-green">✓ {p.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 points faibles à connaître</h2>
              <div className="space-y-3">
                {points_faibles.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">⚠️ {p.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Votre garde-corps n\'est pas droit ou fait + de 12 cm',
                  'Vous voulez du stockage',
                  'Exposition nord',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le calcul de rentabilité</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Prenons un cas type : Paris, balcon étroit exposé sud-ouest, kit Sunology CITY à 549 €.
              </p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production annuelle</strong> : 408 kWh/an (400 Wc, Lyon sud, PR 0,85)</li>
                  <li>&bull; <strong>Autoconsommation</strong> : 85%</li>
                  <li>&bull; <strong>kWh économisés</strong> : 347 kWh/an</li>
                  <li>&bull; <strong>Économies annuelles</strong> : <strong>68 &euro;/an</strong></li>
                  <li>&bull; <strong>ROI</strong> : <strong>7,3 ans</strong> (+3,3%/an d&apos;inflation CRE)</li>
                  <li>&bull; <strong>Économies sur 25 ans</strong> : <strong>2 583 &euro;</strong></li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Avec l&apos;inflation tarifaire de 3,3%/an (CRE), le ROI est atteint en <strong>7,3 ans</strong>. Le CITY est garanti 25 ans. Une fois le ROI atteint, chaque année produit des économies pures. Sur la durée totale, le gain net est de <strong>2 583 &euro;</strong>. C&apos;est moins rentable qu&apos;un PLAY 2, mais ça reste très positif.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui c&apos;est le bon choix</h2>
              <div className="space-y-3">
                {cas_acheter.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1 text-green">✅ {c.profil}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour qui ce n&apos;est pas le bon choix</h2>
              <div className="space-y-3">
                {cas_pas_acheter.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ {c.profil}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Le CITY est-il fait pour votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Calculez votre production exacte selon votre département, exposition et type de fixation. Vous saurez en 30 secondes si le CITY est rentable chez vous.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le kit posé au sol de Sunology, plus rentable mais plus encombrant</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleurs kits solaires 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet des kits du marché : Sunology, Beem, Sunethic, DualSun</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide locataire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le CITY sans perçage est idéal en location, voici ce qu&apos;il faut savoir</p>
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
                      <span className="text-stone group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Méthodologie :</strong> ROI calculé avec tarif 0,1940 &euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85% (95% avec batterie), Performance Ratio 0,85, Lyon sud. Données PVGIS, fiches techniques fabricant Sunology, retours utilisateurs Trustpilot et forums spécialisés (avril 2026). Article rédigé sans rémunération de Sunology.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
