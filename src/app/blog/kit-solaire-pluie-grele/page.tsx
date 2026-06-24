import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Kit solaire balcon : que faire quand il pleut ou gr\u00eale ?',
  description: 'Votre panneau solaire de balcon risque-t-il quelque chose sous la pluie, la gr\u00eale ou la neige ? Production par temps couvert, r\u00e9sistance, assurance. R\u00e9ponses concr\u00e8tes.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/kit-solaire-pluie-grele',
  },
};

const faqData = [
  {
    question: 'Un panneau solaire fonctionne-t-il sous la pluie ?',
    answer: 'Oui, mais il produit beaucoup moins. Par temps de pluie continue, un panneau produit 5 à 15 % de sa puissance cr\u00eate (soit 20-70 W pour un 450 Wc). C\'est suffisant pour alimenter une box internet ou quelques veilles, mais pas plus. La bonne nouvelle : la pluie nettoie le panneau et am\u00e9liore la production d\u00e8s le retour du soleil.',
  },
  {
    question: 'La gr\u00eale peut-elle casser un panneau solaire ?',
    answer: 'C\'est tr\u00e8s rare. Tous les panneaux vendus en France sont certifi\u00e9s IEC 61215, ce qui inclut un test de r\u00e9sistance \u00e0 la gr\u00eale : des billes de glace de 25 mm (taille d\'une bille) projet\u00e9es \u00e0 83 km/h. Les panneaux modernes en verre tremp\u00e9 r\u00e9sistent aux gr\u00ealons courants. Seule une gr\u00eale exceptionnelle (gr\u00ealons > 4 cm) peut causer des micro-fissures.',
  },
  {
    question: 'Faut-il rentrer son panneau quand il gr\u00eale ?',
    answer: 'Non. Les kits plug-and-play sont con\u00e7us pour rester dehors en permanence (IP65 \u00e0 IP68). Les rentrer \u00e0 chaque al\u00e9a m\u00e9t\u00e9o serait contre-productif : risque de casse lors de la manipulation, usure des connecteurs, et perte de production les jours o\u00f9 la m\u00e9t\u00e9o s\'am\u00e9liore dans l\'apr\u00e8s-midi.',
  },
  {
    question: 'La neige emp\u00eache-t-elle la production ?',
    answer: 'Oui, tant qu\'elle couvre le panneau. Une couche de neige opaque bloque totalement la lumi\u00e8re. Mais la neige fond g\u00e9n\u00e9ralement vite sur un panneau inclin\u00e9 (la surface sombre se r\u00e9chauffe au moindre rayon). Ne grattez jamais la neige avec un outil rigide \u2014 utilisez un balai souple ou laissez fondre naturellement.',
  },
  {
    question: 'Mon panneau est-il couvert par mon assurance habitation ?',
    answer: 'En g\u00e9n\u00e9ral oui, au titre des biens mobiliers (le kit est amovible). V\u00e9rifiez votre contrat d\'assurance habitation : la plupart couvrent les d\u00e9g\u00e2ts de gr\u00eale, temp\u00eate et intempéries sur les biens situ\u00e9s sur le balcon ou la terrasse. D\u00e9clarez l\'existence du kit \u00e0 votre assureur pour \u00eatre tranquille.',
  },
  {
    question: 'Combien produit un panneau par temps couvert ?',
    answer: 'Par temps couvert sans pluie (ciel gris uniforme), un panneau produit 15 à 30 % de sa puissance cr\u00eate. Un 450 Wc produit donc 70-135 W en continu. C\'est suffisant pour couvrir le talon de consommation (frigo, box, veilles). La production n\'est jamais z\u00e9ro tant qu\'il fait jour.',
  },
];

export default function KitSolairePluieGrelePage() {
  return (
    <>
      <SchemaArticle
        title="Kit solaire balcon : que faire quand il pleut ou gr\u00eale ?"
        description="Production sous la pluie, r\u00e9sistance \u00e0 la gr\u00eale, neige, assurance."
        url="https://monbalconsolaire.fr/blog/kit-solaire-pluie-grele"
        datePublished="2026-05-18"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Pluie et gr\u00eale' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Pluie et gr\u00eale' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire balcon : que faire quand il pleut ou gr&ecirc;le ?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre kit solaire reste dehors 365 jours par an. Pluie, gr&ecirc;le, neige, vent : est-ce que &ccedil;a risque quelque chose ? Combien produit-il par mauvais temps ? Faut-il le rentrer ? R&eacute;ponses concr&egrave;tes et chiffr&eacute;es.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>18 mai 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Pluie :</strong> le panneau produit 5-15 % de sa puissance. Il ne risque rien (IP65-IP68).</li>
              <li>&bull; <strong>Ciel couvert :</strong> 15-30 % de production. Le talon de consommation est couvert.</li>
              <li>&bull; <strong>Gr&ecirc;le :</strong> certifi&eacute; pour r&eacute;sister aux gr&ecirc;lons de 25 mm &agrave; 83 km/h (IEC 61215).</li>
              <li>&bull; <strong>Neige :</strong> production bloqu&eacute;e tant que le panneau est couvert. Fond vite sur surface inclin&eacute;e.</li>
              <li>&bull; <strong>Faut-il le rentrer ?</strong> Non. Jamais.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production sous la pluie : les vrais chiffres</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Contrairement &agrave; ce qu&apos;on pense, un panneau solaire produit de l&apos;&eacute;lectricit&eacute; d&egrave;s qu&apos;il fait jour, m&ecirc;me sous la pluie. C&apos;est la <strong>lumi&egrave;re</strong> qui compte, pas le soleil direct. Voici les chiffres r&eacute;els :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Conditions m&eacute;t&eacute;o</th>
                      <th className="p-3 text-right font-bold">% de puissance cr&ecirc;te</th>
                      <th className="p-3 text-right font-bold">Production (450 Wc)</th>
                      <th className="p-3 text-right font-bold">Couverture</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Plein soleil', '70-85 %', '315-380 W', 'Tout le foyer'],
                      ['Soleil voil\u00e9 / nuages fins', '40-60 %', '180-270 W', 'Talon + \u00e9lectrom\u00e9nager'],
                      ['Ciel couvert (gris uniforme)', '15-30 %', '70-135 W', 'Talon de consommation'],
                      ['Pluie continue', '5-15 %', '20-70 W', 'Box internet + veilles'],
                      ['Forte pluie / orage', '2-8 %', '10-35 W', 'Quasi nul'],
                      ['Neige sur le panneau', '0 %', '0 W', 'Rien'],
                    ].map(([cond, pct, prod, couv], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{cond}</td>
                        <td className="p-3 text-right font-mono">{pct}</td>
                        <td className="p-3 text-right font-mono text-green">{prod}</td>
                        <td className="p-3 text-right text-xs text-charcoal-light">{couv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Valeurs pour un panneau 450 Wc (Sunology PLAY 2, Beem On). La puissance cr&ecirc;te (Wc) correspond aux conditions de test standard (1000 W/m&sup2;, 25&deg;C). En conditions r&eacute;elles, 70-85 % est d&eacute;j&agrave; excellent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le bon c&ocirc;t&eacute; de la pluie</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La pluie a un avantage que personne ne mentionne : elle <strong>nettoie le panneau gratuitement</strong>. La poussi&egrave;re, le pollen, les fientes d&apos;oiseaux et la pollution qui s&apos;accumulent sur la vitre r&eacute;duisent la production de 5 &agrave; 15 %. Une bonne averse remet les compteurs &agrave; z&eacute;ro.
              </p>
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm mb-1 text-green">L&apos;effet rebond post-pluie</h4>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  Apr&egrave;s une journ&eacute;e de pluie, si le lendemain est ensoleill&eacute;, votre panneau produit souvent <strong>mieux que d&apos;habitude</strong> : la vitre est propre, l&apos;air est clair (moins de particules en suspension), et l&apos;humidit&eacute; r&eacute;siduelle peut l&eacute;g&egrave;rement am&eacute;liorer la conductivit&eacute; thermique. C&apos;est mesurable : +3 &agrave; 8 % de production le jour suivant une pluie.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">R&eacute;sistance &agrave; la gr&ecirc;le : ce que dit la norme</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Tous les panneaux vendus en France doivent &ecirc;tre certifi&eacute;s <strong>IEC 61215</strong>. Cette norme inclut un test de r&eacute;sistance &agrave; la gr&ecirc;le :
              </p>
              <div className="grid md:grid-cols-3 gap-3 my-6">
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-2xl">25 mm</div>
                  <div className="text-xs text-stone mt-1">Diam&egrave;tre des gr&ecirc;lons de test</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-2xl">83 km/h</div>
                  <div className="text-xs text-stone mt-1">Vitesse d&apos;impact</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-2xl">11 impacts</div>
                  <div className="text-xs text-stone mt-1">Sur diff&eacute;rentes zones du panneau</div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                En pratique, les panneaux modernes utilisent du <strong>verre tremp&eacute; de 3,2 mm</strong> (Sunology PLAY 2, Beem On, Sunethic F500) qui r&eacute;siste aux gr&ecirc;lons standard. Les panneaux bi-verre (DualSun PREASY) sont encore plus r&eacute;sistants.
              </p>
              <div className="card-lg bg-amber-pale/20 border-amber/10">
                <h4 className="font-bold text-sm mb-2 text-amber-dark">Quand faut-il s&apos;inqui&eacute;ter ?</h4>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Uniquement en cas de <strong>gr&ecirc;le exceptionnelle</strong> (gr&ecirc;lons &gt; 4 cm, soit la taille d&apos;une balle de golf). Ce type d&apos;&eacute;v&eacute;nement est rare (quelques fois par d&eacute;cennie selon les r&eacute;gions) et endommage aussi les voitures, les velux et les toitures. Dans ce cas, votre <strong>assurance habitation</strong> couvre les d&eacute;g&acirc;ts (voir section assurance ci-dessous).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Neige : que faire ?</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Panneau inclin&eacute; (30-35&deg;)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">La neige glisse naturellement sur un panneau inclin&eacute;. La surface lisse et sombre se r&eacute;chauffe au moindre rayon de soleil, acc&eacute;l&eacute;rant la fonte. En g&eacute;n&eacute;ral, le panneau se d&eacute;gage en quelques heures.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Panneau vertical (garde-corps)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si votre kit est fix&eacute; verticalement sur un garde-corps (Sunology CITY, Beem On), la neige ne s&apos;accumule quasiment pas. C&apos;est un avantage inattendu de la fixation verticale en r&eacute;gion neigeuse.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Ne jamais gratter avec un outil rigide</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Pas de spatule, pas de raclette, pas de b&acirc;ton. Utilisez un balai &agrave; poils souples ou simplement de l&apos;eau ti&egrave;de. Le verre tremp&eacute; est r&eacute;sistant aux impacts mais peut se micro-fissurer sous une pression ponctuelle.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Vent et temp&ecirc;te : les pr&eacute;cautions</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les kits plug-and-play sont con&ccedil;us pour r&eacute;sister au vent. Le Sunology PLAY 2 est certifi&eacute; pour des vents jusqu&apos;&agrave; <strong>150 km/h</strong> avec ballasts remplis. Mais quelques r&egrave;gles s&apos;imposent :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Toujours lester correctement</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Remplissez les ballasts d&apos;eau ou de sable (15-24 kg par c&ocirc;t&eacute;). Un panneau non lest&eacute; est une voile : m&ecirc;me un vent de 60 km/h peut le renverser. <Link href="/blog/accessoires-kit-solaire-balcon" className="text-green hover:underline">Voir les accessoires de fixation</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Terrasse en hauteur = plus de vent</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si votre terrasse est au 5e &eacute;tage ou plus, doublez le lestage. Le vent est 30-50 % plus fort en hauteur qu&apos;au sol. Sur un balcon prot&eacute;g&eacute; par un garde-corps plein, le risque est moindre.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Assurance : &ecirc;tes-vous couvert ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                En r&egrave;gle g&eacute;n&eacute;rale, <strong>oui</strong>. Un kit solaire plug-and-play est un bien mobilier (amovible), couvert par votre assurance habitation au m&ecirc;me titre qu&apos;un meuble de jardin ou un barbecue.
              </p>
              <div className="card-lg bg-cream/40">
                <h4 className="font-bold text-sm mb-3">Ce que couvre g&eacute;n&eacute;ralement votre assurance habitation :</h4>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Gr&ecirc;le et temp&ecirc;te :</strong> d&eacute;g&acirc;ts au panneau caus&eacute;s par les intemp&eacute;ries (garantie catastrophes naturelles)</li>
                  <li>&bull; <strong>Vol :</strong> si le kit est vol&eacute; sur votre balcon (selon conditions du contrat)</li>
                  <li>&bull; <strong>Responsabilit&eacute; civile :</strong> si un panneau tombe et blesse quelqu&apos;un ou endommage un v&eacute;hicule</li>
                </ul>
              </div>
              <div className="card border-l-4 border-l-amber mt-4">
                <h4 className="font-bold text-sm mb-1 text-amber-dark">Notre conseil</h4>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  D&eacute;clarez l&apos;existence du kit &agrave; votre assureur (un simple email suffit). Ce n&apos;est pas obligatoire pour les biens de moins de 1 000 &euro;, mais &ccedil;a &eacute;vite toute contestation en cas de sinistre. Conservez aussi la facture d&apos;achat pour prouver la valeur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Impact r&eacute;el sur la rentabilit&eacute; annuelle</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La pluie et les nuages sont d&eacute;j&agrave; <strong>int&eacute;gr&eacute;s dans les donn&eacute;es PVGIS</strong> qu&apos;on utilise pour nos calculs de production. Le productible de 1 200 kWh/kWc/an &agrave; Lyon ou 1 050 kWh &agrave; Paris tient compte de la m&eacute;t&eacute;o r&eacute;elle (jours de pluie, couverture nuageuse, ensoleillement moyen sur 20 ans).
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Autrement dit : les ROI affich&eacute;s sur nos fiches et dans notre <Link href="/calculateur" className="text-green hover:underline font-semibold">calculateur</Link> int&egrave;grent d&eacute;j&agrave; la pluie. Vous n&apos;avez pas &agrave; faire de &laquo; correction m&eacute;t&eacute;o &raquo; suppl&eacute;mentaire.
              </p>
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm mb-1 text-green">Le seul risque r&eacute;el : une ann&eacute;e exceptionnellement mauvaise</h4>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  Les donn&eacute;es PVGIS sont des moyennes sur 20 ans. Une ann&eacute;e particuli&egrave;rement maussade peut r&eacute;duire la production de 10-15 % par rapport &agrave; la moyenne. Mais l&apos;ann&eacute;e suivante sera probablement meilleure. Sur 25 ans de garantie, ces variations se lissent.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Votre balcon est-il rentable malgr&eacute; la m&eacute;t&eacute;o ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur int&egrave;gre les donn&eacute;es m&eacute;t&eacute;o r&eacute;elles de votre d&eacute;partement.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production r&eacute;elle &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/panneau-solaire-hiver-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en hiver : combien &ccedil;a produit ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Donn&eacute;es de production mois par mois pour 3 villes</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic en 7 points et solutions</p>
                </Link>
                <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire et ombre : optimiser la production</h4>
                  <p className="text-xs text-charcoal-light mt-1">Ombre partielle, arbre, mur voisin</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comment installer un kit solaire : pas &agrave; pas</h4>
                  <p className="text-xs text-charcoal-light mt-1">Lestage, fixation, c&acirc;blage</p>
                </Link>
                <Link href="/guide/panneau-solaire-assurance-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Que couvre votre assurance ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Gr&ecirc;le, vol, chute, RC : tout ce qui est garanti</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
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
                <strong>M&eacute;thodologie :</strong> donn&eacute;es PVGIS (Commission europ&eacute;enne), norme IEC 61215, fiches techniques constructeurs, retours utilisateurs forum-photovoltaique.fr (mai 2026). <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
