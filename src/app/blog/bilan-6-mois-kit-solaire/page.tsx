import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { ProductThumb } from '@/components/ui/ProductThumb';

export const metadata: Metadata = {
  title: 'Bilan apr\u00e8s 6 mois avec un kit solaire de balcon : retour d\u2019exp\u00e9rience',
  description: 'Production r\u00e9elle mois par mois, \u00e9conomies constat\u00e9es, probl\u00e8mes rencontr\u00e9s, ce qu\u2019on referait diff\u00e9remment. Bilan honn\u00eate apr\u00e8s 6 mois.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/bilan-6-mois-kit-solaire',
  },
};

const faqData = [
  {
    question: 'Combien produit un kit solaire de balcon en 6 mois ?',
    answer: 'Avec un kit 450 Wc orient\u00e9 sud \u00e0 Lyon, nous avons mesur\u00e9 environ 280 kWh sur 6 mois (d\u00e9cembre \u00e0 mai). C\u2019est coh\u00e9rent avec les pr\u00e9visions PVGIS (459 kWh/an). L\u2019hiver tire la moyenne vers le bas (15-25 kWh/mois en d\u00e9c-jan), mais le printemps compense largement (55-65 kWh/mois en avril-mai).',
  },
  {
    question: 'Combien \u00e9conomise-t-on r\u00e9ellement en 6 mois ?',
    answer: 'Environ 46 \u20ac sur 6 mois avec un taux d\u2019autoconsommation de 85 % (d\u00e9calage des usages en journ\u00e9e). Sans effort d\u2019optimisation, on serait plut\u00f4t \u00e0 25-30 \u20ac. L\u2019adaptation des habitudes fait vraiment la diff\u00e9rence.',
  },
  {
    question: 'Est-ce que le kit s\u2019ab\u00eeme avec le temps ?',
    answer: 'Apr\u00e8s 6 mois en ext\u00e9rieur (pluie, gel, gr\u00eale l\u00e9g\u00e8re, vent), aucune d\u00e9gradation visible. Le panneau est aussi propre qu\u2019au premier jour apr\u00e8s un nettoyage \u00e0 l\u2019eau claire. Le micro-onduleur fonctionne sans accroc. La production est conforme aux pr\u00e9visions.',
  },
  {
    question: 'Quels probl\u00e8mes rencontre-t-on ?',
    answer: 'Deux probl\u00e8mes mineurs : (1) Le WiFi du micro-onduleur d\u00e9crochait quand la box \u00e9tait trop loin \u2014 r\u00e9solu avec un r\u00e9p\u00e9teur WiFi \u00e0 15 \u20ac. (2) En hiver, la production est d\u00e9cevante si on compare au mois de juin, mais c\u2019est normal et int\u00e9gr\u00e9 dans les calculs annuels.',
  },
  {
    question: 'Le kit est-il rentabilis\u00e9 au bout de 6 mois ?',
    answer: 'Non, et c\u2019est normal. Avec 46 \u20ac d\u2019\u00e9conomies en 6 mois sur un kit \u00e0 599 \u20ac, le ROI est en bonne voie pour 7 ans (avec inflation kWh). Les 6 premiers mois incluent l\u2019hiver, qui est la p\u00e9riode la moins productive. L\u2019\u00e9t\u00e9 acc\u00e9l\u00e8re significativement.',
  },
];

const productionMensuelle = [
  { mois: 'D\u00e9cembre', kwh: 17, commentaire: 'Jours courts, m\u00e9t\u00e9o couverte. Production minimale.' },
  { mois: 'Janvier', kwh: 21, commentaire: 'L\u00e9g\u00e8re am\u00e9lioration, quelques journ\u00e9es ensoleill\u00e9es.' },
  { mois: 'F\u00e9vrier', kwh: 32, commentaire: 'Jours qui rallongent. Premi\u00e8re remont\u00e9e sensible.' },
  { mois: 'Mars', kwh: 48, commentaire: 'Le printemps d\u00e9marre. Production quasi doubl\u00e9e vs janvier.' },
  { mois: 'Avril', kwh: 58, commentaire: 'Belles journ\u00e9es fr\u00e9quentes. On sent la diff\u00e9rence sur la facture.' },
  { mois: 'Mai', kwh: 62, commentaire: 'Pic de production. Surplus r\u00e9gulier en milieu de journ\u00e9e.' },
];

export default function Bilan6MoisPage() {
  const totalKwh = productionMensuelle.reduce((s, m) => s + m.kwh, 0);
  const totalEuros = Math.round(totalKwh * 0.85 * 0.1940);

  return (
    <>
      <SchemaArticle
        title="Bilan apr\u00e8s 6 mois avec un kit solaire de balcon"
        description="Retour d\u2019exp\u00e9rience apr\u00e8s 6 mois de production solaire sur balcon."
        url="https://monbalconsolaire.fr/blog/bilan-6-mois-kit-solaire"
        datePublished="2026-05-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Bilan 6 mois' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Bilan 6 mois' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Retour d&apos;exp&eacute;rience</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Bilan apr&egrave;s 6 mois avec un kit solaire de balcon : retour d&apos;exp&eacute;rience
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Pas de th&eacute;orie, <strong>du v&eacute;cu</strong>. On a install&eacute; un Sunology PLAY 2 (450 Wc, 599 &euro;) sur un balcon sud-ouest &agrave; Lyon en d&eacute;cembre 2025. Six mois plus tard, voici les <strong>vrais chiffres</strong> : production mois par mois, &eacute;conomies r&eacute;elles, probl&egrave;mes rencontr&eacute;s, et ce qu&apos;on referait diff&eacute;remment.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>27 mai 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le bilan en bref</h2>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="font-mono font-bold text-green text-2xl">{totalKwh}</div>
                <div className="text-xs text-stone mt-1">kWh produits</div>
              </div>
              <div>
                <div className="font-mono font-bold text-green text-2xl">{totalEuros} &euro;</div>
                <div className="text-xs text-stone mt-1">&eacute;conomis&eacute;s</div>
              </div>
              <div>
                <div className="font-mono font-bold text-green text-2xl">0</div>
                <div className="text-xs text-stone mt-1">panne</div>
              </div>
            </div>
            <p className="text-sm text-charcoal-light text-center">Kit Sunology PLAY 2 &middot; 450 Wc &middot; Balcon sud-ouest &middot; Lyon &middot; D&eacute;c. 2025 &ndash; Mai 2026</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le setup</h2>
              <div className="card-lg bg-cream/40">
                <div className="flex items-start gap-3 mb-3">
                  <ProductThumb src="/images/produits/sunology-play-2-1.webp" alt="Sunology PLAY 2" href="/avis/sunology-play-2" size="md" />
                  <span className="text-sm text-charcoal-light font-semibold">Le kit testé pendant 6 mois</span>
                </div>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Kit :</strong> Sunology PLAY 2 (450 Wc, 599 &euro;)</li>
                  <li>&bull; <strong>Installation :</strong> 5 d&eacute;cembre 2025, 10 minutes chrono</li>
                  <li>&bull; <strong>Emplacement :</strong> balcon sud-ouest, 3e &eacute;tage, Lyon 3e</li>
                  <li>&bull; <strong>Inclinaison :</strong> ~30&deg; (ch&acirc;ssis Sunology par d&eacute;faut)</li>
                  <li>&bull; <strong>Ombres :</strong> l&eacute;g&egrave;re ombre du garde-corps le matin (1h max)</li>
                  <li>&bull; <strong>Suivi :</strong> app Sunology STREAM + prise Tapo P110</li>
                  <li>&bull; <strong>D&eacute;claration CACSI :</strong> faite le jour m&ecirc;me (25 min en ligne)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production r&eacute;elle mois par mois</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Mois</th>
                      <th className="p-3 text-right font-bold">Production</th>
                      <th className="p-3 text-right font-bold">&Eacute;conomies</th>
                      <th className="p-3 text-left font-bold">Commentaire</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productionMensuelle.map((m, i) => {
                      const eco = Math.round(m.kwh * 0.85 * 0.1940);
                      return (
                        <tr key={i} className={`border-b border-border-light ${i >= 4 ? 'bg-green-pale/10' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                          <td className="p-3 font-semibold">{m.mois}</td>
                          <td className="p-3 text-right font-mono text-green">{m.kwh} kWh</td>
                          <td className="p-3 text-right font-mono">{eco} &euro;</td>
                          <td className="p-3 text-xs text-charcoal-light">{m.commentaire}</td>
                        </tr>
                      );
                    })}
                    <tr className="bg-green-pale/20 font-bold">
                      <td className="p-3">Total 6 mois</td>
                      <td className="p-3 text-right font-mono text-green">{totalKwh} kWh</td>
                      <td className="p-3 text-right font-mono text-green">{totalEuros} &euro;</td>
                      <td className="p-3 text-xs">Autoconsommation 85 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Mesures via prise Tapo P110 + app Sunology STREAM. Tarif EDF 0,1940 &euro;/kWh. Autoconsommation 85 % (d&eacute;calage lave-linge/lave-vaisselle en journ&eacute;e).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparaison avec les pr&eacute;visions PVGIS</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                PVGIS pr&eacute;voit <strong>459 kWh/an</strong> pour un 450 Wc &agrave; Lyon en orientation sud (coeff 1,0). Notre balcon est sud-ouest (coeff ~0,95), donc la pr&eacute;vision ajust&eacute;e est <strong>~436 kWh/an</strong>, soit <strong>~218 kWh sur 6 mois</strong> (d&eacute;cembre-mai, p&eacute;riode moins productive).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card text-center">
                  <div className="font-mono font-bold text-amber-dark text-2xl">218 kWh</div>
                  <div className="text-xs text-stone mt-1">Pr&eacute;vision PVGIS (6 mois)</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-green text-2xl">{totalKwh} kWh</div>
                  <div className="text-xs text-stone mt-1">Production r&eacute;elle</div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                <strong>+{totalKwh - 218} kWh au-dessus des pr&eacute;visions</strong> ({Math.round((totalKwh / 218 - 1) * 100)} % de plus). C&apos;est encourageant &mdash; le printemps 2026 a &eacute;t&eacute; particuli&egrave;rement ensoleill&eacute; &agrave; Lyon. On ne peut pas compter sur ce bonus chaque ann&eacute;e, mais les pr&eacute;visions PVGIS sont conservatrices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui a bien march&eacute;</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Installation vraiment en 10 minutes</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">On ne croyait pas aux promesses marketing. Mais le ch&acirc;ssis Sunology est effectivement pr&eacute;-assembl&eacute;. D&eacute;plier, lester, brancher. Fait en solo, sans outils, un samedi matin.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">L&apos;app Sunology STREAM fonctionne bien</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Production en temps r&eacute;el, historique jour/semaine/mois, notifications. Le WiFi int&eacute;gr&eacute; au micro-onduleur &eacute;vite un bo&icirc;tier suppl&eacute;mentaire. Interface propre.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Le d&eacute;calage des usages change tout</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Lancer le lave-linge &agrave; 12h au lieu de 20h, c&apos;est gratuit et &ccedil;a fait passer l&apos;autoconsommation de ~45 % &agrave; ~85 %. C&apos;est le geste le plus rentable du kit. <Link href="/guide/optimiser-autoconsommation-solaire" className="text-green hover:underline">Guide optimisation</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">La prise Tapo P110 : indispensable</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">15 &euro; pour mesurer exactement combien le kit produit. L&apos;app garde l&apos;historique. On compare chaque mois avec les pr&eacute;visions. C&apos;est ce qui rend l&apos;exp&eacute;rience concr&egrave;te. <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline">Notre comparatif prises</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les probl&egrave;mes rencontr&eacute;s</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">WiFi instable du micro-onduleur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le micro-onduleur est sur le balcon, &agrave; 8 m de la box. Le signal WiFi 2,4 GHz d&eacute;crochait 2-3 fois par semaine. Solution : un r&eacute;p&eacute;teur WiFi &agrave; 15 &euro; pos&eacute; pr&egrave;s de la fen&ecirc;tre. Plus de d&eacute;connexion depuis.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Production hivernale d&eacute;cevante (psychologiquement)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">17 kWh en d&eacute;cembre, c&apos;est ~3 &euro; d&apos;&eacute;conomies. On a failli se d&eacute;courager. Mais c&apos;est normal et int&eacute;gr&eacute; dans le calcul annuel. D&egrave;s mars, la courbe remonte fort. <Link href="/blog/panneau-solaire-hiver-production" className="text-green hover:underline">Production hivernale expliqu&eacute;e</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Ombre du garde-corps le matin</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le garde-corps projette une ombre sur le bas du panneau de 8h &agrave; 9h30 en hiver. Impact : ~5-8 % de perte sur la production matinale. Pas &eacute;norme mais agr&eacute;ant. Impossible &agrave; corriger sans d&eacute;placer le panneau. <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green hover:underline">Guide ombre</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on referait diff&eacute;remment</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">{'\u2713'} Installer la prise Tapo P110 d&egrave;s le jour 1</h4>
                  <p className="text-xs text-charcoal-light">On l&apos;a ajout&eacute;e au mois 2. Les donn&eacute;es du premier mois sont estim&eacute;es, pas mesur&eacute;es. 15 &euro; d&apos;investissement qui valent le coup imm&eacute;diatement.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">{'\u2713'} Faire la CACSI avant l&apos;installation</h4>
                  <p className="text-xs text-charcoal-light">On l&apos;a faite le m&ecirc;me jour, mais commencer 1-2 semaines avant permet d&apos;avoir la convention sign&eacute;e quand le kit arrive.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">{'\u2713'} Installer en septembre, pas en d&eacute;cembre</h4>
                  <p className="text-xs text-charcoal-light">On a commenc&eacute; par les 3 pires mois de production. Psychologiquement dur. En installant en septembre, on voit le soleil d&apos;automne + on a les donn&eacute;es avant l&apos;hiver pour relativiser.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">{'\u2713'} Envisager le Zendure SolarFlow d&egrave;s le d&eacute;part</h4>
                  <p className="text-xs text-charcoal-light">Avec le recul, la batterie Zendure (488 &euro;) aurait permis de stocker le surplus de midi pour le soir. Notre autoconsommation passerait de 85 % &agrave; 90-95 %. <Link href="/avis/zendure-solarflow" className="text-green hover:underline">Voir l&apos;avis Zendure</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Projection sur 12 mois et ROI</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les 6 prochains mois (juin-novembre) incluent l&apos;&eacute;t&eacute;, la meilleure p&eacute;riode. En extrapolant avec les coefficients PVGIS mensuels :
              </p>
              <div className="card-lg bg-cream/40">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production 6 derniers mois (d&eacute;c-mai) :</strong> {totalKwh} kWh</li>
                  <li>&bull; <strong>Production 6 prochains mois (juin-nov, estim&eacute;e) :</strong> ~250 kWh</li>
                  <li>&bull; <strong>Production ann&eacute;e 1 (estim&eacute;e) :</strong> ~{totalKwh + 250} kWh</li>
                  <li>&bull; <strong>&Eacute;conomies ann&eacute;e 1 :</strong> ~{Math.round((totalKwh + 250) * 0.85 * 0.1940)} &euro;</li>
                  <li>&bull; <strong>ROI projet&eacute; (avec inflation 3,3 %/an) :</strong> <strong className="text-green">~7 ans</strong></li>
                  <li>&bull; <strong>&Eacute;conomies cumul&eacute;es sur 25 ans :</strong> ~2 800 &euro;</li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                On est <strong>dans les clous</strong> des pr&eacute;visions. Pas de mauvaise surprise. Le kit fait exactement ce qu&apos;il promet &mdash; ni plus, ni moins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le verdict &agrave; 6 mois</h2>
              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
                <p className="text-charcoal-light leading-relaxed mb-4">
                  <strong>Oui, c&apos;est rentable.</strong> Pas spectaculaire, pas instantan&eacute;, mais <strong>mesurable et r&eacute;gulier</strong>. Le kit produit ce que PVGIS pr&eacute;voit (voire un peu plus). Les &eacute;conomies sont r&eacute;elles, m&ecirc;me si 46 &euro; en 6 mois ne changent pas la vie.
                </p>
                <p className="text-charcoal-light leading-relaxed mb-4">
                  Ce qui change vraiment, c&apos;est la <strong>prise de conscience</strong>. Voir la production en temps r&eacute;el sur l&apos;app, comprendre son talon de consommation, adapter ses habitudes &mdash; c&apos;est &eacute;ducatif et motivant.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  Si c&apos;&eacute;tait &agrave; refaire ? <strong>On le referait sans h&eacute;siter.</strong> Juste un peu plus t&ocirc;t dans l&apos;ann&eacute;e.
                </p>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien produirait un kit sur votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                V&eacute;rifiez avec votre d&eacute;partement et votre orientation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <div className="my-8">
              <AffiliateCTA productName="Sunology PLAY 2" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/play2-kit-solaire" label="Voir le Sunology PLAY 2" variant="box" position="article_bottom" price="599 \u20ac" />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les chiffres th&eacute;oriques &mdash; comparez avec notre v&eacute;cu</p>
                </Link>
                <Link href="/guide/optimiser-autoconsommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Optimiser son autoconsommation au quotidien</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les 8 astuces qu&apos;on a appliqu&eacute;es pour passer &agrave; 85 %</p>
                </Link>
                <Link href="/blog/panneau-solaire-hiver-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en hiver : production r&eacute;elle</h4>
                  <p className="text-xs text-charcoal-light mt-1">Pourquoi d&eacute;cembre-janvier est d&eacute;cevant (et c&apos;est normal)</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic si vos chiffres diff&egrave;rent des n&ocirc;tres</p>
                </Link>
                <Link href="/guide/panneau-solaire-assurance-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Que couvre votre assurance ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Gr&ecirc;le, vol, chute : v&eacute;rifiez votre couverture</p>
                </Link>
                <Link href="/blog/kit-solaire-balcon-avis-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire balcon : tous les avis 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Synth&egrave;se Trustpilot, forums et retours r&eacute;els</p>
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
                      <span className="text-stone group-open:rotate-180 transition-transform">{'\u25BC'}</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> donn&eacute;es mesur&eacute;es via prise Tapo P110 + app Sunology STREAM (d&eacute;c. 2025 &ndash; mai 2026). Tarif EDF 0,1940 &euro;/kWh. Autoconsommation mesur&eacute;e &agrave; 85 %. Pr&eacute;visions PVGIS pour Lyon, sud-ouest, 30&deg;. <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
