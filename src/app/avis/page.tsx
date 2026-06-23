import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avis kits solaires balcon 2026 — Tests indépendants et notes',
  description: 'Avis détaillés et tests indépendants des kits solaires plug-and-play : Sunology PLAY2, Beem On, Sunethic F500, Beem Kit 300W. Notes, specs et verdict honnête.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis',
  },
};

const reviews = [
  { slug: 'jackery-solarvault-3-pro', title: 'Jackery SolarVault 3 Pro : stockage 3 kWh LFP \u00e0 839 \u20ac', excerpt: 'Batterie LFP 2,52 kWh + onduleur + 4 MPPT, gestion IA et anti-incendie. 839\u00a0\u20ac en promo, sans panneaux.', badge: 'Nouveau', score: '8/10', price: '839 \u20ac' },
  { slug: 'bluetti-balco-260', title: 'Bluetti Balco 260 : le tout-en-un onduleur + batterie', excerpt: 'Onduleur SiC + batterie LFP 2,56 kWh + 4 MPPT dans un seul bo\u00eetier IP65. 849\u00a0\u20ac sans panneaux.', badge: 'Stockage tout-en-un', score: '7/10', price: '849 \u20ac' },
  { slug: 'beem-on-500w', title: 'Beem On 500 Wc : le nouveau rapport qualit\u00e9-prix du march\u00e9', excerpt: '429 \u20ac pour 500 Wc bifacial TOPCon, soit 0,86 \u20ac/Wc. Le kit le plus rentable du march\u00e9 fran\u00e7ais en 2026.', badge: 'Qualit\u00e9/prix', score: '8.5/10', price: '429 \u20ac' },
  { slug: 'ikea-solstrale-balcon', title: 'IKEA Solstr\u00e5le : le kit solaire IKEA pour balcon', excerpt: 'IKEA lance un kit plug-and-play \u00e0 449 \u20ac avec EcoFlow. Analyse compl\u00e8te, mais pas encore disponible en France.', badge: 'Analyse', score: '\u2014', price: '449 \u20ac (DE)' },
  { slug: 'dualsun-preasy', title: 'DualSun PREASY : le nouveau challenger Made in France', excerpt: 'Panneau pliable 420 Wc, assembl\u00e9 en France, design aspect bois. Beau mais cher face \u00e0 la concurrence.', badge: 'Nouveau', score: '6.5/10', price: '870 \u20ac' },
  { slug: 'zendure-solarflow', title: 'Zendure SolarFlow : 840 W pour 488 \u20ac, trop beau ?', excerpt: 'Batterie 1,92 kWh + onduleur 800 W int\u00e9gr\u00e9s pour moins de 500 \u20ac. Le meilleur rapport qualit\u00e9-prix du march\u00e9.', badge: 'Qualit\u00e9/prix', score: '8.5/10', price: '488 \u20ac' },
  { slug: 'sunology-play-2', title: 'Sunology PLAY 2 : avis et test complet', excerpt: 'Le kit solaire le plus vendu en France (100 000+ foyers). 450 Wc, 599 \u20ac, installation en 1 minute.', badge: 'Choix n\u00b01', score: '8.5/10', price: '599 \u20ac' },
  { slug: 'beem-on-460w', title: 'Beem On 460W : avis et test complet', excerpt: 'Le concurrent direct du Sunology PLAY2. 460 Wc, 599 \u20ac, meilleur ratio \u20ac/Wc en mono-panneau.', badge: 'Qualit\u00e9/prix', score: '8/10', price: '599 \u20ac' },
  { slug: 'ecoflow-powerstream', title: 'EcoFlow PowerStream : test complet et verdict', excerpt: 'Le micro-onduleur intelligent : panneaux + batterie + r\u00e9seau pilot\u00e9s par app. Le plus modulaire du march\u00e9.', badge: 'Syst\u00e8me modulaire', score: '8/10', price: '599 \u20ac' },
  { slug: 'sunethic-f500', title: 'Sunethic F500 : avis du kit Made in France', excerpt: 'Le kit le plus puissant (500 Wc) et le seul fabriqu\u00e9 en France. 690 \u20ac.', badge: 'Made in France', score: '7.5/10', price: '690 \u20ac' },
  { slug: 'sunology-city', title: 'Sunology CITY : le kit pour balcons \u00e9troits', excerpt: 'Le kit pens\u00e9 pour les balcons \u00e9troits : fixation garde-corps sans per\u00e7age. 549 \u20ac.', badge: 'Balcon \u00e9troit', score: '7.5/10', price: '549 \u20ac' },
  { slug: 'beem-kit-300w', title: 'Beem Kit 300W : avis du kit petit budget', excerpt: 'Le kit le moins cher du march\u00e9 fran\u00e7ais. 4 panneaux modulaires, 299 \u20ac, ROI en 3,6 ans.', badge: 'Petit budget', score: '7.5/10', price: '299 \u20ac' },
  { slug: 'sunology-play-max', title: 'Sunology PLAY MAX : kit + batterie, \u00e7a vaut le coup ?', excerpt: 'Le bundle PLAY2 + batterie VAULT 700 Wh pour 1 179 \u20ac. Stockez le solaire pour le soir.', badge: 'Kit + batterie', score: '7/10', price: '1 179 \u20ac' },
];

export default function AvisIndexPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="badge-amber mb-4 inline-block">Avis et tests</div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Avis et tests de kits solaires</h1>
        <p className="text-charcoal-light text-lg mb-10 max-w-2xl">Des avis detailles, sources et honnetes sur les kits solaires plug-and-play les plus populaires en France.</p>
        <div className="space-y-6">
          {reviews.map((r) => (
            <Link key={r.slug} href={`/avis/${r.slug}`} className="card-lg block hover:shadow-brand-lg transition-shadow duration-300 group">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="badge-green mb-2">{r.badge}</div>
                  <h2 className="font-bold text-xl group-hover:text-green transition-colors">{r.title}</h2>
                  <p className="text-sm text-charcoal-light mt-2 max-w-lg">{r.excerpt}</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-bold text-green">{r.score}</div>
                  <div className="text-sm text-stone font-mono">{r.price}</div>
                </div>
              </div>
              <span className="text-green font-semibold text-sm mt-4 inline-block">Lire l&apos;avis complet &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
