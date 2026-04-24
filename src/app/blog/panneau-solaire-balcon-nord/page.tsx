import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Panneau solaire balcon nord : est-ce rentable en 2026 ?',
  description: 'Balcon plein nord : un panneau solaire peut-il être rentable ? Analyse honnête avec chiffres de production réels, coefficients PVGIS, et alternatives.',
};

const faqData = [
  {
    question: 'Un panneau solaire sur balcon nord produit-il vraiment de l\'électricité ?',
    answer: 'Oui, mais 40 à 60 % moins qu\'un balcon plein sud selon la latitude. Un kit 450W qui produirait 500 kWh/an au sud produira 200 à 280 kWh/an au nord. La production n\'est pas nulle — le panneau capte la lumière diffuse du ciel, même sans soleil direct — mais elle est divisée par 2 à 3.',
  },
  {
    question: 'Quelle production attendre d\'un kit 450W sur balcon nord ?',
    answer: 'Tout dépend de votre région. Dans le Sud (Marseille, Nice), comptez 280-320 kWh/an. En région parisienne, 200-240 kWh/an. Dans le Nord (Lille, Strasbourg), 160-200 kWh/an. C\'est entre 30 et 60 € d\'économies annuelles, contre 80-130 € au sud. Le retour sur investissement passe de 5-8 ans à 12-18 ans.',
  },
  {
    question: 'Y a-t-il des cas où un balcon nord devient intéressant ?',
    answer: 'Trois cas précis. Premièrement, si le prix au kWc est très bas (Beem Kit 300W à 299€ par exemple) : même avec 40% de production en moins, l\'investissement reste rentable sur 25 ans. Deuxièmement, si vous avez une consommation en journée importante (télétravail, climatisation été, piscine). Troisièmement, si votre balcon nord est en hauteur sans obstruction : la lumière diffuse est plus forte qu\'on ne croit.',
  },
  {
    question: 'L\'inclinaison peut-elle compenser l\'orientation nord ?',
    answer: 'Très partiellement. Un panneau incliné à 40-60° vers le haut (presque vertical) capte un peu plus de lumière diffuse qu\'un panneau à plat. Le gain est de 5 à 10% maximum. Ce n\'est pas suffisant pour compenser l\'orientation nord. L\'inclinaison optimise quand il y a du soleil direct, pas quand il n\'y en a pas.',
  },
  {
    question: 'Un panneau bifacial améliore-t-il la production au nord ?',
    answer: 'Oui, légèrement. Un panneau bifacial (Sunethic F500 par exemple) capte la lumière sur ses deux faces : la face avant reçoit la lumière diffuse du nord, la face arrière peut capter la réflexion d\'un sol clair ou d\'un mur blanc. Le gain réel est de 5 à 15% sur un balcon nord, soit 10 à 30 kWh/an supplémentaires. Utile mais pas déterminant.',
  },
  {
    question: 'Quelle alternative si mon balcon est plein nord ?',
    answer: 'Trois options plus rentables que le solaire balcon nord. Option 1 : louer un panneau en centrale solaire citoyenne (rendement garanti, 3-5% par an). Option 2 : investir dans l\'isolation ou une pompe à chaleur (ROI 4-8 ans). Option 3 : un simple kit 200W petit budget pour l\'expérience, sans attendre de rentabilité. Rarement une bonne idée de mettre 600€+ sur un plein nord.',
  },
];

const cas_reels = [
  {
    ville: 'Marseille',
    latitude: '43°N',
    kit: 'Sunology PLAY 2 (450W)',
    prod_sud: '510 kWh/an',
    prod_nord: '310 kWh/an',
    reduction: '-40%',
    economie_sud: '99 €/an',
    economie_nord: '60 €/an',
    roi_sud: '6 ans',
    roi_nord: '10 ans',
    verdict: 'Acceptable. Le fort ensoleillement du Sud compense en partie l\'orientation nord.',
  },
  {
    ville: 'Lyon',
    latitude: '46°N',
    kit: 'Sunology PLAY 2 (450W)',
    prod_sud: '460 kWh/an',
    prod_nord: '230 kWh/an',
    reduction: '-50%',
    economie_sud: '89 €/an',
    economie_nord: '45 €/an',
    roi_sud: '7 ans',
    roi_nord: '13 ans',
    verdict: 'Limite. Réservé aux acheteurs convaincus qui mettent un kit petit budget.',
  },
  {
    ville: 'Paris',
    latitude: '49°N',
    kit: 'Sunology PLAY 2 (450W)',
    prod_sud: '420 kWh/an',
    prod_nord: '210 kWh/an',
    reduction: '-50%',
    economie_sud: '81 €/an',
    economie_nord: '41 €/an',
    roi_sud: '7 ans',
    roi_nord: '15 ans',
    verdict: 'Limite. Préférer un kit 300W à petit prix (Beem Kit) pour limiter le risque.',
  },
  {
    ville: 'Lille',
    latitude: '51°N',
    kit: 'Sunology PLAY 2 (450W)',
    prod_sud: '380 kWh/an',
    prod_nord: '170 kWh/an',
    reduction: '-55%',
    economie_sud: '74 €/an',
    economie_nord: '33 €/an',
    roi_sud: '8 ans',
    roi_nord: '18 ans',
    verdict: 'Déconseillé. Investissez plutôt dans l\'isolation ou une pompe à chaleur.',
  },
];

const alternatives = [
  {
    titre: 'Kit 300W petit budget type Beem',
    prix: '299 €',
    production_nord_paris: '140 kWh/an',
    economie: '27 €/an',
    roi: '11 ans',
    verdict: 'Le seul choix qui reste intéressant en plein nord. Risque minimal (moins de 300€), retour acceptable sur 25 ans.',
  },
  {
    titre: 'Mini kit Amazon Renogy 200W flexible',
    prix: '199 €',
    production_nord_paris: '90 kWh/an',
    economie: '17 €/an',
    roi: '12 ans',
    verdict: 'Option "test" pour moins de 200€. Panneau transportable, vous pourrez l\'emporter ailleurs si vous déménagez.',
  },
  {
    titre: 'Centrale solaire citoyenne (part)',
    prix: '500-1000 €',
    production_nord_paris: 'N/A (rendement fixe)',
    economie: '25-50 €/an (rendement 4-5%)',
    roi: 'Rendement constant 20 ans',
    verdict: 'Vous possédez une part d\'une centrale solaire en toiture idéalement orientée, quelque part en France. Rendement garanti, aucun risque d\'exposition.',
  },
  {
    titre: 'Ne rien installer, investir ailleurs',
    prix: '600 €',
    production_nord_paris: '0 kWh/an',
    economie: '80-120 €/an (isolation fenêtres)',
    roi: '5-8 ans',
    verdict: 'Pour un appartement mal isolé, 600€ dans du double vitrage ou de l\'isolation comble est 2x plus rentable qu\'un kit solaire en plein nord.',
  },
];

export default function BalconNordPage() {
  return (
    <>
      <SchemaArticle
        title="Panneau solaire balcon nord : est-ce rentable en 2026 ?"
        description="Analyse chiffrée de la rentabilité d'un panneau solaire sur balcon plein nord."
        url="https://monbalconsolaire.fr/blog/panneau-solaire-balcon-nord"
        datePublished="2026-04-24"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Panneau solaire balcon nord' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Analyse rentabilité</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Panneau solaire balcon nord : est-ce rentable en 2026 ?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre balcon est orienté plein nord et vous vous demandez si installer un kit solaire a un sens. La réponse est nuancée : parfois oui, souvent non. Voici l&apos;analyse chiffrée par ville, les alternatives, et les seuls cas où ça reste intéressant.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>24 avril 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Un balcon plein nord produit <strong>40 à 60 % moins</strong> qu&apos;un balcon plein sud selon votre région. En pratique, un kit 450 W coûtant 600 € met <strong>12 à 18 ans</strong> à être rentabilisé contre 5-8 ans au sud. Dans le Sud, ça reste acceptable avec un kit petit budget. En région parisienne ou au nord, mieux vaut investir dans un kit 300 W à moins de 300 €, ou envisager des alternatives comme une centrale solaire citoyenne ou de l&apos;isolation.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi le nord pose problème (mais pas autant qu\&apos;on croit)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Il y a deux idées reçues à démêler quand on parle de balcon nord. La première, c&apos;est de croire qu&apos;un panneau orienté nord ne produit <strong>rien du tout</strong>. Faux. Même sans soleil direct, un panneau capte la lumière diffuse du ciel (environ 30-40 % de la production d&apos;un panneau sud en conditions similaires).
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La deuxième, c&apos;est l&apos;inverse : croire que la différence est minime. Faux aussi. Entre un plein sud et un plein nord, la production est divisée par 2 à 2,5 selon les conditions. Sur 25 ans, ça représente 4 000 à 5 000 kWh en moins, soit 800 à 1000 € d&apos;économies perdues.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                L&apos;explication physique est simple. Un panneau solaire capte 2 types de lumière :
              </p>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mt-3 pl-5">
                <li>&bull; <strong>Le rayonnement direct</strong> (soleil qui frappe directement le panneau) : représente 60-80 % de la production annuelle au sud, 10-20 % au nord.</li>
                <li>&bull; <strong>Le rayonnement diffus</strong> (lumière réfléchie par le ciel, les nuages, les surfaces) : représente 20-40 % de la production au sud, 80-90 % au nord.</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed mt-3">
                Au nord, le panneau ne reçoit jamais de soleil direct : il se contente de la lumière diffuse, qui est présente toute la journée mais 3-4 fois moins intense. D&apos;où la perte de production.
              </p>
            </section>

            {/* Comparatif par ville */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production réelle par ville : sud vs nord</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Voici les chiffres concrets pour un kit Sunology PLAY 2 (450 W, 599 €) selon votre localisation, basés sur les données PVGIS officielles :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Ville</th>
                      <th className="text-center p-3">Prod. Sud</th>
                      <th className="text-center p-3">Prod. Nord</th>
                      <th className="text-center p-3">Perte</th>
                      <th className="text-center p-3">ROI Sud</th>
                      <th className="text-center p-3 rounded-tr-xl">ROI Nord</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cas_reels.map((c, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c.ville}</td>
                        <td className="text-center p-3 font-mono text-xs">{c.prod_sud}</td>
                        <td className="text-center p-3 font-mono text-xs">{c.prod_nord}</td>
                        <td className="text-center p-3 font-mono text-xs text-amber font-bold">{c.reduction}</td>
                        <td className="text-center p-3 font-mono text-xs">{c.roi_sud}</td>
                        <td className="text-center p-3 font-mono text-xs text-amber-dark font-bold">{c.roi_nord}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-charcoal-light leading-relaxed mb-4">
                Les 4 cas en détail :
              </p>

              <div className="space-y-4">
                {cas_reels.map((c, i) => (
                  <div key={i} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div>
                        <h3 className="font-bold text-base">{c.ville}</h3>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">Latitude {c.latitude}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-amber text-lg">{c.reduction}</div>
                        <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">
                          Perte Nord vs Sud
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                      <div className="bg-green-pale/30 rounded-lg p-2">
                        <div className="text-[10px] text-green-dark uppercase tracking-wider font-semibold">Au Sud</div>
                        <div className="font-mono text-sm font-bold text-charcoal">{c.prod_sud}</div>
                        <div className="text-[10px] text-stone">{c.economie_sud} · ROI {c.roi_sud}</div>
                      </div>
                      <div className="bg-amber-pale/30 rounded-lg p-2">
                        <div className="text-[10px] text-amber-dark uppercase tracking-wider font-semibold">Au Nord</div>
                        <div className="font-mono text-sm font-bold text-charcoal">{c.prod_nord}</div>
                        <div className="text-[10px] text-stone">{c.economie_nord} · ROI {c.roi_nord}</div>
                      </div>
                    </div>

                    <div className="bg-cream/60 rounded-lg p-3">
                      <p className="text-xs font-semibold text-charcoal mb-1">💡 Verdict</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{c.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cas où ça vaut le coup */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 3 cas où le balcon nord reste intéressant</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Le cas général (kit 600€ sur balcon nord à Paris) n&apos;est pas rentable. Mais il existe trois profils où l&apos;investissement reste pertinent :
              </p>

              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">✅ Cas 1 : Kit petit budget dans le Sud</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Dans le Sud (PACA, Occitanie, Corse), même orienté nord, un kit 300 W à 299 € (Beem Kit par exemple) produit ~200 kWh/an, soit 40 €/an d&apos;économies. ROI de 7-8 ans. Acceptable, surtout si le kit est évolutif (ajout batterie plus tard).
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">✅ Cas 2 : Consommation forte en journée</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si vous êtes en télétravail, que vous chargez un véhicule électrique, ou que vous avez une climatisation l&apos;été, votre &quot;talon de consommation&quot; est plus élevé. L&apos;autoconsommation directe monte à 70-80 % (vs 40-50 % en usage classique). Les kWh produits sont tous valorisés.
                  </p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">✅ Cas 3 : Balcon nord en hauteur sans obstruction</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Un balcon nord au 15ème étage sans immeuble en face reçoit beaucoup plus de lumière diffuse qu&apos;un balcon nord au 2ème étage encaissé entre deux immeubles. La différence peut aller jusqu&apos;à +25 % de production. Dans ce cas, un kit 450 W devient plus défendable.
                  </p>
                </div>
              </div>
            </section>

            {/* Cas où ça ne vaut pas le coup */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les cas où il faut renoncer</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ Balcon nord avec obstruction</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si un immeuble vous fait face, qu&apos;un arbre bloque la lumière, ou que vous êtes en bas d&apos;une cour intérieure : la production chute à 100-150 kWh/an maximum. À ce niveau, le ROI dépasse 20 ans, c&apos;est au-delà de la durée de vie garantie du kit.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ Nord France + kit premium</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Acheter un Sunology PLAY MAX à 1 200€ (kit + batterie) pour un balcon nord à Lille ou Strasbourg : ROI de 20+ ans. Le coût du stockage s&apos;amortit sur des kWh qui ne seront jamais produits en masse. Mieux vaut un kit 300 W basique à 299 €.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ Appartement mal isolé</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Si votre logement est classé E, F ou G au DPE, 600 € dans du solaire n&apos;ont aucun sens. Ces 600 € en isolation (fenêtres, combles, VMC) vous feront économiser 2-3x plus d&apos;énergie que le kit. Le solaire vient après l&apos;isolation, pas avant.
                  </p>
                </div>
              </div>
            </section>

            {/* Alternatives */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 4 alternatives pour un balcon nord</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous êtes dans un cas où le solaire n&apos;est pas optimal, voici les options plus rentables :
              </p>
              <div className="space-y-3">
                {alternatives.map((a, i) => (
                  <div key={i} className="card-lg border-l-4 border-l-green">
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <h4 className="font-bold text-sm">{a.titre}</h4>
                      <span className="font-mono font-bold text-green text-base">{a.prix}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-2 text-xs text-charcoal-light">
                      <div>
                        <span className="text-stone text-[10px] uppercase tracking-wider">Production</span>
                        <div className="font-mono font-semibold">{a.production_nord_paris}</div>
                      </div>
                      <div>
                        <span className="text-stone text-[10px] uppercase tracking-wider">Économies</span>
                        <div className="font-mono font-semibold">{a.economie}</div>
                      </div>
                      <div>
                        <span className="text-stone text-[10px] uppercase tracking-wider">ROI</span>
                        <div className="font-mono font-semibold">{a.roi}</div>
                      </div>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">{a.verdict}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Méthode pour trancher */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La méthode pour trancher en 2 minutes</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous hésitez, voici un arbre de décision simple basé sur votre situation :
              </p>
              <div className="card-lg bg-cream/50">
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold mb-2">1. Dans quelle région êtes-vous ?</p>
                    <ul className="text-xs text-charcoal-light space-y-1 pl-4">
                      <li>&bull; <strong>Sud (Occitanie, PACA, Corse)</strong> → passez au point 2</li>
                      <li>&bull; <strong>Centre/Nord (toute autre région)</strong> → point 3</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2">2. Quel est votre budget max ?</p>
                    <ul className="text-xs text-charcoal-light space-y-1 pl-4">
                      <li>&bull; <strong>Moins de 300 €</strong> → Beem Kit 300W, acceptable</li>
                      <li>&bull; <strong>300-600 €</strong> → kit 300-400W, acceptable si vous avez une forte conso journée</li>
                      <li>&bull; <strong>Plus de 600 €</strong> → passer à autre chose (isolation, centrale citoyenne)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2">3. Obstruction visuelle du ciel ?</p>
                    <ul className="text-xs text-charcoal-light space-y-1 pl-4">
                      <li>&bull; <strong>Aucune (vue dégagée)</strong> → un kit 300W petit budget peut se tenter</li>
                      <li>&bull; <strong>Immeuble/arbre en face</strong> → renoncer, investir en isolation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Calculez votre cas précis</p>
              <p className="text-sm text-charcoal-light mb-4">
                Département, orientation, puissance du kit : notre calculateur estime votre production exacte en 30 secondes, basé sur les données PVGIS officielles.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation choisir ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;impact réel de l&apos;orientation et de l&apos;inclinaison sur la production</p>
                </Link>
                <Link href="/comparatif/kit-solaire-petit-budget" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits solaires petit budget</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les meilleurs choix sous 400 € pour limiter le risque</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien ça rapporte ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le calcul détaillé par ville avec chiffres réels</p>
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
                <strong>Sources :</strong> données PVGIS (Joint Research Centre), tarifs EDF régulés, fiches techniques fabricants 2026.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
