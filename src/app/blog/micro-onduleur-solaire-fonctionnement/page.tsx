import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Micro-onduleur solaire : comment ça marche et lequel choisir ?',
  description: 'Fonctionnement du micro-onduleur, comparatif Hoymiles vs APsystems vs Enphase, quel modèle dans chaque kit balcon, critères de choix et prix en 2026.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/micro-onduleur-solaire-fonctionnement',
  },
};

const faqData = [
  {
    question: 'C\'est quoi un micro-onduleur solaire ?',
    answer: 'Un micro-onduleur est un petit boîtier fixé à l\'arrière du panneau solaire qui convertit le courant continu (DC) produit par le panneau en courant alternatif (AC) 230V — le même que celui de vos prises. Dans un kit de balcon, il est intégré au kit et permet de brancher le panneau directement sur une prise classique.',
  },
  {
    question: 'Quelle est la différence entre un micro-onduleur et un onduleur string ?',
    answer: 'Un micro-onduleur est dédié à un ou deux panneaux : chaque panneau est indépendant. Un onduleur string centralise la conversion pour tous les panneaux reliés en série. Pour un balcon, seul le micro-onduleur est adapté (pas besoin de local technique, basse tension, installation plug-and-play).',
  },
  {
    question: 'Quel micro-onduleur est dans le Sunology PLAY 2 ?',
    answer: 'Le Sunology PLAY 2 utilise un micro-onduleur TSUN TSOL-MX450 (450W, rendement 97,1%, WiFi intégré, garanti 25 ans via Sunology). C\'est un modèle mono-panneau avec suivi via l\'app Sunology STREAM.',
  },
  {
    question: 'Un micro-onduleur fait-il du bruit ?',
    answer: 'Non. Un micro-onduleur est totalement silencieux (0 dB). Il n\'a aucune pièce mobile, pas de ventilateur. Contrairement aux onduleurs string qui peuvent émettre un léger bourdonnement, le micro-onduleur ne produit aucun bruit audible. Aucun risque de gêne pour vous ou vos voisins.',
  },
  {
    question: 'Combien coûte un micro-onduleur seul ?',
    answer: 'Entre 110 et 370 € selon le modèle. Les mono-panneau (Hoymiles HMS-400, Enphase IQ8+) coûtent 110-170 €. Les duo-panneaux (Hoymiles HMS-800, APsystems EZ1-H) coûtent 196-199 €. Les hybrides avec batterie (EcoFlow PowerStream) montent à 369 €. Dans un kit balcon, le micro-onduleur est inclus dans le prix.',
  },
  {
    question: 'Faut-il changer son micro-onduleur au bout de quelques années ?',
    answer: 'Non. Les micro-onduleurs sont garantis 12 à 25 ans selon les marques (Enphase : 25 ans, Hoymiles : 12 extensible à 25, APsystems : 12 extensible à 20). Le taux de panne est inférieur à 0,5 % par an. C\'est le composant le plus fiable du kit après le panneau lui-même.',
  },
];

const microOnduleurs = [
  {
    nom: 'Hoymiles HMS-800-2T',
    puissance: '800 VA',
    entrees: '2 MPPT',
    rendement: '96,7 %',
    wifi: 'Non (gateway ~60 €)',
    garantie: '12 ans (ext. 25)',
    prix: '~196 €',
    utilise: 'DualSun PREASY (version 400W)',
    point_fort: 'Le plus répandu, fiable, pièces détachées faciles',
    point_faible: 'Pas de WiFi intégré (il faut acheter une gateway S-Miles)',
  },
  {
    nom: 'APsystems EZ1-H',
    puissance: '960 VA (bridable 800W)',
    entrees: '2 MPPT',
    rendement: '97,3 %',
    wifi: 'WiFi + Bluetooth intégrés',
    garantie: '12 ans (ext. 20)',
    prix: '~199 €',
    utilise: 'Beem On 500, Sunethic F500',
    point_fort: 'Meilleur rendement, WiFi + Bluetooth intégrés, app EMA complète',
    point_faible: 'Garantie de base 12 ans (vs 25 chez Enphase)',
  },
  {
    nom: 'Enphase IQ8+',
    puissance: '300 VA (par panneau)',
    entrees: '1 MPPT',
    rendement: '97,0 %',
    wifi: 'Non (Envoy Gateway)',
    garantie: '25 ans',
    prix: '~151 €/unité',
    utilise: 'Rarement en kits balcon (surtout pro/toiture)',
    point_fort: 'Garantie 25 ans, taux de panne < 0,5 %/an, monitoring Enlighten excellent',
    point_faible: 'Conçu pour installateurs pro, nécessite gateway Envoy (~200 €)',
  },
  {
    nom: 'TSUN TSOL-MX450',
    puissance: '450W',
    entrees: '1 MPPT',
    rendement: '97,1 %',
    wifi: 'WiFi intégré',
    garantie: '25 ans (via Sunology)',
    prix: 'Inclus dans le kit',
    utilise: 'Sunology PLAY 2',
    point_fort: 'WiFi intégré, bon rendement, garanti 25 ans par Sunology',
    point_faible: 'Marque peu connue en Europe, SAV direct limité',
  },
  {
    nom: 'EcoFlow PowerStream',
    puissance: '800W hybride',
    entrees: '2 MPPT',
    rendement: '~96 %',
    wifi: 'WiFi intégré',
    garantie: '5 ans',
    prix: '~369 €',
    utilise: 'EcoFlow (écosystème propriétaire)',
    point_fort: 'Hybride : injecte + charge batterie EcoFlow simultanément, app Eco-AI',
    point_faible: 'Garantie courte (5 ans), prix élevé, écosystème fermé EcoFlow',
  },
];

const kitsParOnduleur = [
  { kit: 'Sunology PLAY 2', onduleur: 'TSUN TSOL-MX450', puissanceMO: '450W', garantieMO: '25 ans', wifi: 'Oui', app: 'Sunology STREAM' },
  { kit: 'Beem On 500', onduleur: 'APsystems EZ1', puissanceMO: '480W', garantieMO: '12 ans', wifi: 'Oui', app: 'Beem App' },
  { kit: 'Sunethic F500', onduleur: 'APsystems EZ1-H', puissanceMO: '960 VA', garantieMO: '12 ans', wifi: 'Oui', app: 'EMA (APsystems)' },
  { kit: 'DualSun PREASY', onduleur: 'Hoymiles HMS-400', puissanceMO: '400W', garantieMO: '25 ans', wifi: 'Non', app: 'S-Miles Cloud' },
  { kit: 'EcoFlow PowerStream', onduleur: 'EcoFlow Stream', puissanceMO: '800W', garantieMO: '5 ans', wifi: 'Oui', app: 'EcoFlow App' },
  { kit: 'Zendure SolarFlow', onduleur: 'Zendure SolarFlow 800', puissanceMO: '800W', garantieMO: '10 ans', wifi: 'Oui', app: 'Zendure App' },
];

export default function MicroOnduleurPage() {
  return (
    <>
      <SchemaArticle
        title="Micro-onduleur solaire : comment ça marche et lequel choisir ?"
        description="Fonctionnement, comparatif et guide de choix des micro-onduleurs pour kit solaire de balcon."
        url="https://monbalconsolaire.fr/blog/micro-onduleur-solaire-fonctionnement"
        datePublished="2026-06-06"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Micro-onduleur solaire' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Micro-onduleur solaire' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Guide technique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Micro-onduleur solaire : comment &ccedil;a marche et lequel choisir ?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Le micro-onduleur est le <strong>cerveau de votre kit solaire</strong>. C&apos;est lui qui convertit l&apos;&eacute;lectricit&eacute; produite par le panneau en courant compatible avec vos prises. Tous les kits de balcon en int&egrave;grent un, mais ils ne se valent pas tous. Voici comment &ccedil;a marche, ce qui les diff&eacute;rencie, et lequel est dans votre kit.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>6 juin 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>R&ocirc;le :</strong> convertit le courant continu (DC) du panneau en courant alternatif (AC) 230V pour vos prises</li>
              <li>&bull; <strong>Bruit :</strong> z&eacute;ro &mdash; aucune pi&egrave;ce mobile, totalement silencieux</li>
              <li>&bull; <strong>Entretien :</strong> aucun &mdash; garanti 12 &agrave; 25 ans, taux de panne &lt; 0,5 %/an</li>
              <li>&bull; <strong>Les leaders :</strong> Hoymiles, APsystems, Enphase, TSUN &mdash; tous IP67 (100 % &eacute;tanche)</li>
              <li>&bull; <strong>Prix seul :</strong> 110-370 &euro; (inclus dans les kits balcon)</li>
              <li>&bull; <strong>Crit&egrave;re n&deg;1 :</strong> le WiFi int&eacute;gr&eacute; (sinon il faut acheter une gateway &agrave; 50-80 &euro;)</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment fonctionne un micro-onduleur ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un panneau solaire produit du <strong>courant continu (DC)</strong> &agrave; basse tension (~30-40V). Or vos appareils et votre r&eacute;seau domestique fonctionnent en <strong>courant alternatif (AC) 230V</strong>. Le micro-onduleur fait la conversion entre les deux.
              </p>
              <div className="space-y-4">
                {[
                  { num: '1', titre: 'Le panneau capte la lumière', detail: 'Les cellules photovoltaïques transforment la lumière du soleil en courant continu (DC). La tension varie selon l\'ensoleillement : ~30-40V par beau temps.' },
                  { num: '2', titre: 'Le micro-onduleur convertit DC → AC', detail: 'Le boîtier (fixé à l\'arrière du panneau ou au bout du câble) transforme le courant continu en courant alternatif 230V 50Hz — identique à celui de votre réseau EDF.' },
                  { num: '3', titre: 'L\'électricité est injectée via la prise', detail: 'Le courant AC sort par le câble du kit et entre dans votre réseau domestique via une prise classique. Vos appareils consomment cette électricité en priorité avant celle du réseau.' },
                  { num: '4', titre: 'Le MPPT optimise en temps réel', detail: 'Le tracker MPPT (Maximum Power Point Tracking) intégré au micro-onduleur ajuste en permanence la tension et le courant pour extraire le maximum de watts du panneau, même par temps nuageux.' },
                ].map((step) => (
                  <div key={step.num} className="card-lg border-l-4 border-l-green">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{step.num}</div>
                      <h3 className="font-bold text-base">{step.titre}</h3>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed pl-11">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Micro-onduleur vs onduleur string : quelle diff&eacute;rence ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les grandes installations de toiture utilisent souvent un onduleur string (centralis&eacute;). Pour un balcon, c&apos;est toujours un micro-onduleur. Voici pourquoi :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Crit&egrave;re</th>
                      <th className="p-3 text-center font-bold">Micro-onduleur</th>
                      <th className="p-3 text-center font-bold">Onduleur string</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Emplacement', 'Derrière chaque panneau', 'Dans un local technique'],
                      ['Panneaux indépendants', 'Oui — une ombre sur un panneau n\'affecte pas les autres', 'Non — un panneau faible pénalise toute la chaîne'],
                      ['Tension DC', 'Basse (~30-40V) = sécurité', 'Haute (~400-600V) = risque'],
                      ['Monitoring', 'Panneau par panneau', 'Global uniquement'],
                      ['Garantie', '12-25 ans', '10-12 ans'],
                      ['Prix par watt', '15-25 % plus cher', 'Moins cher à grande échelle'],
                      ['Installation balcon', 'Plug-and-play, 10 min', 'Impossible sans électricien'],
                    ].map(([critere, micro, string], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{critere}</td>
                        <td className="p-3 text-center text-sm text-charcoal-light">{micro}</td>
                        <td className="p-3 text-center text-sm text-charcoal-light">{string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light">
                <strong>Pour un balcon, il n&apos;y a pas de d&eacute;bat :</strong> le micro-onduleur est la seule option viable (basse tension, pas de local technique, plug-and-play). L&apos;avantage de l&apos;ind&eacute;pendance des panneaux est un bonus &mdash; chaque panneau produit &agrave; son maximum sans &ecirc;tre p&eacute;nalis&eacute; par un voisin &agrave; l&apos;<Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green hover:underline">ombre</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel micro-onduleur dans chaque kit ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Quand vous achetez un kit solaire de balcon, le micro-onduleur est inclus. Mais tous les fabricants ne choisissent pas le m&ecirc;me. Voici ce qu&apos;il y a sous le capot :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Kit</th>
                      <th className="p-3 text-left font-bold">Micro-onduleur</th>
                      <th className="p-3 text-right font-bold">Puissance</th>
                      <th className="p-3 text-right font-bold">Garantie</th>
                      <th className="p-3 text-center font-bold">WiFi</th>
                      <th className="p-3 text-left font-bold">App</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kitsParOnduleur.map((k, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{k.kit}</td>
                        <td className="p-3 text-charcoal-light">{k.onduleur}</td>
                        <td className="p-3 text-right font-mono text-green">{k.puissanceMO}</td>
                        <td className="p-3 text-right">{k.garantieMO}</td>
                        <td className="p-3 text-center">{k.wifi === 'Oui' ? '\u2705' : '\u274C'}</td>
                        <td className="p-3 text-xs text-charcoal-light">{k.app}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Donn&eacute;es v&eacute;rifi&eacute;es juin 2026. Le Beem On est pass&eacute; &agrave; 500 Wc en 2026 mais garde l&apos;APsystems EZ1.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparatif des micro-onduleurs</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous achetez un kit, le micro-onduleur est impos&eacute;. Mais si vous assemblez votre propre installation ou souhaitez upgrader, voici le comparatif des 5 mod&egrave;les dominants :
              </p>
              <div className="space-y-4">
                {microOnduleurs.map((mo, i) => (
                  <div key={i} className={`card-lg border-l-4 ${i === 1 ? 'border-l-green bg-green-pale/10' : 'border-l-border-light'}`}>
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div>
                        <h3 className="font-bold text-base">{mo.nom}</h3>
                        <span className="text-xs text-stone">Utilis&eacute; dans : {mo.utilise}</span>
                      </div>
                      <span className="text-sm font-mono font-semibold text-green bg-green-pale px-2 py-1 rounded-md">{mo.prix}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      <div className="text-center">
                        <div className="font-mono font-bold text-sm">{mo.puissance}</div>
                        <div className="text-xs text-stone">Puissance</div>
                      </div>
                      <div className="text-center">
                        <div className="font-mono font-bold text-sm">{mo.rendement}</div>
                        <div className="text-xs text-stone">Rendement EU</div>
                      </div>
                      <div className="text-center">
                        <div className="font-mono font-bold text-sm">{mo.entrees}</div>
                        <div className="text-xs text-stone">Entr&eacute;es</div>
                      </div>
                      <div className="text-center">
                        <div className="font-mono font-bold text-sm">{mo.garantie}</div>
                        <div className="text-xs text-stone">Garantie</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 text-xs">
                      <div className="bg-green-pale/30 rounded-brand p-2">
                        <strong className="text-green">+</strong> {mo.point_fort}
                      </div>
                      <div className="bg-amber-pale/30 rounded-brand p-2">
                        <strong className="text-amber-dark">&minus;</strong> {mo.point_faible}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Best pick */}
              <div className="card-lg bg-green-pale/20 border-green/10 mt-6">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong className="text-green">Notre avis :</strong> pour un kit balcon plug-and-play, l&apos;<strong>APsystems EZ1-H</strong> est le meilleur micro-onduleur du march&eacute; en 2026 (meilleur rendement, WiFi + Bluetooth int&eacute;gr&eacute;s, app compl&egrave;te). C&apos;est celui qu&apos;utilisent <Link href="/avis/beem-on-460w" className="text-green hover:underline">Beem</Link> et <Link href="/avis/sunethic-f500" className="text-green hover:underline">Sunethic</Link>. Le TSUN du <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY 2</Link> est aussi tr&egrave;s bon (rendement 97,1 %, WiFi, garanti 25 ans).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 crit&egrave;res de choix</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">1. WiFi int&eacute;gr&eacute; ou pas ?</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">C&apos;est LE crit&egrave;re diff&eacute;renciant. Sans WiFi int&eacute;gr&eacute; (ex : Hoymiles HMS), il faut acheter une gateway &agrave; 50-80 &euro; pour suivre la production. Avec WiFi int&eacute;gr&eacute; (APsystems EZ1-H, TSUN), vous branchez et c&apos;est parti.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">2. Rendement europ&eacute;en</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Visez &gt; 96,5 %. La diff&eacute;rence entre 96,7 % (Hoymiles) et 97,3 % (APsystems) repr&eacute;sente ~5-10 &euro;/an de production suppl&eacute;mentaire. C&apos;est modeste, mais sur 25 ans &ccedil;a compte.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">3. Garantie</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Minimum 12 ans. Id&eacute;alement 25 ans (Enphase, TSUN via Sunology). Un micro-onduleur &agrave; 10 ans de garantie (Deye) est un signal d&apos;alerte &mdash; pas r&eacute;dhibitoire, mais moins rassurant.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">4. Puissance compatible</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Le micro-onduleur doit supporter la puissance du panneau (+/- 20 %). Un panneau de 450 Wc n&eacute;cessite un micro-onduleur de 400-500W minimum. Un micro-onduleur sous-dimensionn&eacute; bride la production.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">5. Certification VFR-2019</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Obligatoire pour injecter sur le r&eacute;seau fran&ccedil;ais. Tous les mod&egrave;les cit&eacute;s ici sont conformes. M&eacute;fiez-vous des micro-onduleurs g&eacute;n&eacute;riques sur Amazon/AliExpress sans cette certification &mdash; ils ne sont pas l&eacute;gaux en France.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Prix d&apos;un micro-onduleur seul</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Dans un kit balcon, le micro-onduleur est inclus. Mais si vous voulez ajouter un deuxi&egrave;me panneau ou remplacer un onduleur en panne, voici les prix :
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Mod&egrave;le</th>
                      <th className="p-3 text-right font-bold">Prix TTC</th>
                      <th className="p-3 text-right font-bold">Panneaux</th>
                      <th className="p-3 text-left font-bold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Hoymiles HMS-400-1T', '~130 €', '1', 'Mono-panneau, fiable, pas de WiFi'],
                      ['Hoymiles HMS-800-2T', '~196 €', '2', 'Duo, le plus vendu, + gateway ~60 €'],
                      ['APsystems EZ1-H', '~199 €', '2', 'Duo, WiFi + BT intégrés, meilleur rendement'],
                      ['Enphase IQ8+', '~151 €', '1', 'Mono, 25 ans garantie, orienté pro'],
                      ['Deye SUN-M80G4', '~140 €', '2', 'Duo, pas cher, garantie 10 ans seulement'],
                      ['EcoFlow PowerStream', '~369 €', '2', 'Hybride batterie, écosystème fermé EcoFlow'],
                    ].map(([modele, prix, panneaux, note], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{modele}</td>
                        <td className="p-3 text-right font-mono text-green">{prix}</td>
                        <td className="p-3 text-right">{panneaux}</td>
                        <td className="p-3 text-xs text-charcoal-light">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Prix constat&eacute;s en juin 2026 sur les sites fabricants et revendeurs (Solaris Store, Amazon, MonKitSolaire). Hors frais de livraison.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le cas des micro-onduleurs hybrides</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Depuis 2025, une nouvelle cat&eacute;gorie est apparue : les <strong>micro-onduleurs hybrides</strong>. Ils font la m&ecirc;me conversion DC &rarr; AC, mais peuvent aussi <strong>charger une batterie</strong> avec le surplus de production.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg">
                  <h3 className="font-bold text-base mb-2">EcoFlow PowerStream</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">Injecte sur le r&eacute;seau ET charge une batterie EcoFlow (Delta, River) simultan&eacute;ment. L&apos;app Eco-AI d&eacute;cide automatiquement quoi faire du surplus.</p>
                  <p className="text-xs text-stone"><Link href="/avis/ecoflow-powerstream" className="text-green hover:underline">Lire notre avis complet &rarr;</Link></p>
                </div>
                <div className="card-lg">
                  <h3 className="font-bold text-base mb-2">Zendure SolarFlow</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">Syst&egrave;me bidirectionnel : stocke le surplus en journ&eacute;e et le restitue le soir. Nouveau mod&egrave;le SolarFlow Mix lanc&eacute; en avril 2026.</p>
                  <p className="text-xs text-stone"><Link href="/avis/zendure-solarflow" className="text-green hover:underline">Lire notre avis complet &rarr;</Link></p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                Ces syst&egrave;mes hybrides co&ucirc;tent plus cher mais permettent de passer l&apos;autoconsommation de ~45 % &agrave; ~85-95 %. Pertinent si votre <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline">talon de consommation</Link> est inf&eacute;rieur &agrave; la production du panneau aux heures de pointe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">R&eacute;glementation : ce que dit la norme</h2>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Puissance max :</strong> 800W AC par point de livraison pour une installation sans &eacute;lectricien (seuil relev&eacute; de 600W en mai 2024)</li>
                  <li>&bull; <strong>Certification :</strong> le micro-onduleur doit &ecirc;tre certifi&eacute; <strong>VFR-2019</strong> (ou EN 50549-1) pour le r&eacute;seau fran&ccedil;ais</li>
                  <li>&bull; <strong>NF C 15-100 v2024 :</strong> s&apos;applique aux installations fixes. Les kits balcon d&eacute;montables restent dans un flou juridique, mais la p&eacute;riode transitoire CONSUEL se termine le <strong>29 juin 2026</strong></li>
                  <li>&bull; <strong>D&eacute;claration Enedis :</strong> obligatoire quelle que soit la puissance &mdash; <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">guide CACSI pas &agrave; pas</Link></li>
                  <li>&bull; <strong>Protection :</strong> un parafoudre/parasurtenseur (&agrave; partir de 30 &euro;) est fortement recommand&eacute; &mdash; <Link href="/blog/accessoires-kit-solaire-balcon" className="text-green hover:underline">voir nos recommandations</Link></li>
                </ul>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien produirait un kit sur votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Le micro-onduleur fait son travail &mdash; v&eacute;rifiez le potentiel de votre emplacement.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Cause n&deg;5 : micro-onduleur brid&eacute; ou en panne</p>
                </Link>
                <Link href="/blog/prises-connectees-suivi-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleures prises connect&eacute;es pour suivi solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Compl&eacute;mentaire au monitoring du micro-onduleur</p>
                </Link>
                <Link href="/blog/kit-solaire-plug-and-play-arnaque" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire plug-and-play : arnaque ou investissement ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les micro-onduleurs non certifi&eacute;s CE &mdash; le vrai risque</p>
                </Link>
                <Link href="/blog/entretien-nettoyage-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Entretien et nettoyage d&apos;un panneau solaire de balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le micro-onduleur ne demande aucun entretien</p>
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
                <strong>Sources :</strong> fiches techniques Hoymiles, APsystems, Enphase, TSUN, EcoFlow, Zendure. Prix constat&eacute;s juin 2026 (Solaris Store, MonKitSolaire, Amazon). Normes NF C 15-100 v2024, VFR-2019. Retours utilisateurs forum-photovoltaique.fr.{' '}
                <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
