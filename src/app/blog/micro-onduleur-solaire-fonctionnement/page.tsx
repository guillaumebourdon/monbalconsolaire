import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductThumb } from '@/components/ui/ProductThumb';

const PAGE_TITLE = 'Micro-onduleur solaire : fonctionnement et comparatif 2026';
const PAGE_DESCRIPTION =
  'Micro-onduleur solaire : définition, fonctionnement, comparatif Hoymiles, APsystems, Enphase, Deye, EcoFlow, dimensionnement, normes et pannes.';
const PAGE_URL = 'https://monbalconsolaire.fr/blog/micro-onduleur-solaire-fonctionnement';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
};

const faqData = [
  {
    question: 'C\'est quoi un micro-onduleur solaire ?',
    answer:
      'Un micro-onduleur est un petit boîtier étanche, fixé derrière un ou deux panneaux solaires, qui convertit le courant continu (DC, 20 à 60 V) produit par le panneau en courant alternatif 230 V / 50 Hz synchronisé sur le réseau. Il intègre un suivi MPPT et se coupe automatiquement en cas de coupure réseau. C\'est lui qui permet de brancher un kit solaire de balcon sur une prise.',
  },
  {
    question: 'Quel micro-onduleur choisir pour un kit balcon ?',
    answer:
      'Pour 2 panneaux, un modèle 800 VA à 2 MPPT avec Wi-Fi intégré : Hoymiles HMS-800W-2T (le moins cher, ~100-130 €) ou APsystems EZ1-M (Wi-Fi + Bluetooth, 12 ans de garantie). Pour 1 panneau, un modèle 400-480 VA (Hoymiles HMS-400W-1T, ou Enphase IQ8P si vous voulez 25 ans de garantie). Pour stocker le surplus, un système hybride type EcoFlow PowerStream ou Zendure SolarFlow.',
  },
  {
    question: 'Quel micro-onduleur pour un panneau de 400 W ?',
    answer:
      'Un micro-onduleur mono-entrée de 350 à 450 VA suffit : un ratio panneau/onduleur de 1,0 à 1,25 est normal, car un panneau atteint rarement sa puissance crête, encore moins posé verticalement sur un garde-corps. Vérifiez surtout la compatibilité électrique : tension de circuit ouvert (Voc) du panneau inférieure à la tension DC max de l\'onduleur (souvent 60 V) et courant du panneau dans la plage d\'entrée.',
  },
  {
    question: 'Un micro-onduleur peut-il fonctionner hors réseau ?',
    answer:
      'Non. Un micro-onduleur « réseau » (grid-tie) se cale sur la tension et la fréquence du réseau. Sans réseau, sa protection de découplage (anti-îlotage) le coupe : il ne produit rien pendant une coupure de courant. Pour un usage autonome, il faut une station ou batterie avec sortie AC hors réseau, ou un régulateur MPPT + batterie + onduleur autonome.',
  },
  {
    question: 'Hoymiles ou EcoFlow : lequel choisir ?',
    answer:
      'Ce ne sont pas les mêmes produits. Le Hoymiles HMS-800W-2T est un micro-onduleur réseau simple (~100-130 €) : il injecte ce que produisent les panneaux, point. L\'EcoFlow PowerStream est un micro-onduleur hybride qui peut piloter une station EcoFlow et restituer l\'énergie le soir, mais il n\'est plus vendu par EcoFlow France (septembre 2026), remplacé au catalogue par la gamme STREAM. Sans batterie, le Hoymiles est plus rentable ; avec une station EcoFlow déjà possédée, un PowerStream d\'occasion peut encore avoir du sens.',
  },
  {
    question: 'Quelle norme doit respecter un micro-onduleur en France ?',
    answer:
      'Il doit disposer d\'une protection de découplage certifiée. Jusqu\'au 31 décembre 2024, Enedis s\'appuyait sur la DIN VDE 0126-1-1 (réglage VFR2019). Pour les demandes de raccordement déposées depuis le 1er janvier 2025, Enedis demande une attestation de conformité à la NF EN 50549-1, la norme qui décline en basse tension le code de réseau européen RfG (règlement UE 2016/631). Ce règlement vise les unités de production à partir de 0,8 kW (type A) ; photovoltaique.info indique que le certificat est exigé pour les installations de plus de 800 W. Sous ce seuil, la protection de découplage reste nécessaire : dans tous les cas, demandez le certificat NF EN 50549-1 au vendeur et déclarez l\'installation à Enedis (CACSI).',
  },
];

type Model = {
  nom: string;
  type: string;
  puissance: string;
  mppt: string;
  rendement: string;
  com: string;
  garantie: string;
  prix: string;
  pourQui: string;
  href?: string;
};

const models: Model[] = [
  {
    nom: 'Hoymiles HMS-800W-2T',
    type: 'Réseau',
    puissance: '800 VA',
    mppt: '2',
    rendement: '96,7 % (pic CEC)',
    com: 'Wi-Fi intégré',
    garantie: '10-12 ans*',
    prix: '~100-130 €',
    pourQui: 'Kit DIY 2 panneaux au meilleur prix',
    href: '/avis/hoymiles-hms-800w',
  },
  {
    nom: 'APsystems EZ1-M',
    type: 'Réseau',
    puissance: '799 VA',
    mppt: '2',
    rendement: '97,3 % (max)',
    com: 'Wi-Fi + Bluetooth',
    garantie: '12 ans',
    prix: '~200-300 €',
    pourQui: 'Monitoring local sans cloud (Bluetooth)',
  },
  {
    nom: 'APsystems EZ1-H',
    type: 'Réseau',
    puissance: '960 VA (bridable)',
    mppt: '2',
    rendement: '97,3 % (max)',
    com: 'Wi-Fi + Bluetooth',
    garantie: '12 ans',
    prix: '~199 €',
    pourQui: 'Gros panneaux (400-760 Wc conseillés)',
  },
  {
    nom: 'Deye SUN-M80G4-EU-Q0',
    type: 'Réseau',
    puissance: '800 W',
    mppt: '2',
    rendement: '96 % (européen)',
    com: 'Wi-Fi intégré',
    garantie: '10-15 ans*',
    prix: 'Non vérifié',
    pourQui: 'Alternative à Hoymiles',
  },
  {
    nom: 'Enphase IQ8P',
    type: 'Réseau',
    puissance: '475-480 VA',
    mppt: '1',
    rendement: '97,3 % (max)',
    com: 'CPL vers IQ Gateway',
    garantie: '25 ans**',
    prix: '~199 €/unité',
    pourQui: 'Installation durable, 1 onduleur par panneau',
  },
  {
    nom: 'TSUN TSOL-MX450',
    type: 'Réseau',
    puissance: '450 W',
    mppt: '1',
    rendement: '97,1 %',
    com: 'Wi-Fi intégré',
    garantie: '25 ans (via Sunology)',
    prix: 'Inclus kit',
    pourQui: 'Livré dans le Sunology PLAY2 (450/460 W) ; le PLAY 500 W actuel embarque un micro-onduleur MX500 de 500 W',
    href: '/avis/sunology-play-2',
  },
  {
    nom: 'EcoFlow PowerStream',
    type: 'Hybride',
    puissance: '600 ou 800 W',
    mppt: '2 (2 × 400 W)',
    rendement: 'Non communiqué',
    com: 'Wi-Fi intégré',
    garantie: '10 ans (EcoFlow)',
    prix: 'Arrêté (sept. 2026)',
    pourQui: 'Propriétaires d’une station EcoFlow',
    href: '/avis/ecoflow-powerstream',
  },
];

const kitsParOnduleur = [
  { kit: 'Sunology PLAY (ex-PLAY 2)', href: '/avis/sunology-play-2', onduleur: 'MX500 (PLAY2 : TSUN TSOL-MX450)', puissanceMO: '500 W (PLAY2 : 450 W)', app: 'Sunology STREAM' },
  { kit: 'Beem On 500', href: '/avis/beem-on-500w', onduleur: 'APsystems EZ1', puissanceMO: '480 W', app: 'Beem App' },
  { kit: 'Sunethic F500', href: '/avis/sunethic-f500', onduleur: 'APsystems EZ1-H', puissanceMO: '960 VA', app: 'EMA / AP EasyPower' },
  { kit: 'DualSun PREASY', href: '/avis/dualsun-preasy', onduleur: 'Hoymiles HMS-400', puissanceMO: '400 W', app: 'S-Miles Cloud' },
  { kit: 'EcoFlow PowerStream', href: '/avis/ecoflow-powerstream', onduleur: 'EcoFlow PowerStream', puissanceMO: '600/800 W', app: 'EcoFlow App' },
  { kit: 'Zendure SolarFlow', href: '/avis/zendure-solarflow', onduleur: 'Zendure (intégré)', puissanceMO: '800 W', app: 'Zendure App' },
];

export default function MicroOnduleurPage() {
  return (
    <>
      <SchemaArticle
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        datePublished="2026-06-06"
        dateModified="2026-09-27"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Micro-onduleur solaire' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Micro-onduleur solaire' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Guide technique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Micro-onduleur solaire&nbsp;: fonctionnement, choix et comparatif 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Tous les kits solaires de balcon reposent sur un micro-onduleur. C&apos;est lui qui rend le branchement sur prise possible, qui d&eacute;cide de ce que vous r&eacute;cup&eacute;rez r&eacute;ellement de vos panneaux et qui coupe l&apos;injection en cas de panne r&eacute;seau. Voici comment il fonctionne, comment le dimensionner, et quel mod&egrave;le choisir parmi les 7 r&eacute;f&eacute;rences les plus courantes en France.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone flex-wrap">
              <span>Publi&eacute; le 6 juin 2026</span>
              <span>&middot;</span>
              <span>Mis &agrave; jour le 27 septembre 2026</span>
              <span>&middot;</span>
              <span>14 min de lecture</span>
            </div>
          </div>

          {/* Définition — format extrait optimisé */}
          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Qu&apos;est-ce qu&apos;un micro-onduleur solaire&nbsp;?</h2>
            <p className="text-charcoal-light leading-relaxed">
              Un <strong>micro-onduleur solaire</strong> est un petit onduleur &eacute;tanche install&eacute; derri&egrave;re un ou deux panneaux photovolta&iuml;ques. Il convertit le courant continu (20 &agrave; 60&nbsp;V) du panneau en courant alternatif 230&nbsp;V / 50&nbsp;Hz synchronis&eacute; sur le r&eacute;seau, optimise la production de chaque panneau (MPPT) et se coupe automatiquement si le r&eacute;seau dispara&icirc;t.
            </p>
          </div>

          <div className="card-lg mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Pour 2 panneaux&nbsp;:</strong> un 800&nbsp;VA &agrave; 2 MPPT avec Wi-Fi int&eacute;gr&eacute; (Hoymiles HMS-800W-2T, APsystems EZ1-M, Deye SUN-M80G4)</li>
              <li>&bull; <strong>Prix seul&nbsp;:</strong> d&apos;environ 100&nbsp;&euro; (Hoymiles) &agrave; ~370&nbsp;&euro; (EcoFlow PowerStream hybride, d&eacute;sormais arr&ecirc;t&eacute;)</li>
              <li>&bull; <strong>Rendement&nbsp;:</strong> 96 &agrave; 97,5&nbsp;% chez tous les grands &mdash; l&apos;&eacute;cart vaut moins de 1&nbsp;&euro;/an, ce n&apos;est pas un crit&egrave;re</li>
              <li>&bull; <strong>Vrais crit&egrave;res&nbsp;:</strong> nombre d&apos;entr&eacute;es MPPT, compatibilit&eacute; tension/courant du panneau, monitoring, garantie, certificat de d&eacute;couplage</li>
              <li>&bull; <strong>Hors r&eacute;seau&nbsp;:</strong> impossible &mdash; un micro-onduleur r&eacute;seau s&apos;arr&ecirc;te pendant une coupure</li>
            </ul>
          </div>

          <div className="space-y-12">
            {/* Fonctionnement */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment fonctionne un micro-onduleur&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un panneau solaire produit du <strong>courant continu (DC)</strong> dont la tension varie avec la lumi&egrave;re et la temp&eacute;rature (typiquement 30-45&nbsp;V en fonctionnement pour un panneau de 400-500&nbsp;Wc). Votre logement fonctionne en <strong>courant alternatif (AC) 230&nbsp;V</strong>. Le micro-onduleur fait le pont, en quatre &eacute;tapes&nbsp;:
              </p>
              <div className="space-y-4">
                {[
                  { num: '1', titre: 'Le MPPT cherche le point de puissance maximale', detail: 'Le tracker MPPT (Maximum Power Point Tracking) fait varier en permanence la tension de travail du panneau pour en tirer le maximum de watts. Avec 2 MPPT, chaque panneau est suivi séparément : une ombre sur l\'un ne pénalise pas l\'autre.' },
                  { num: '2', titre: 'Conversion DC → AC', detail: 'Un étage électronique découpe le courant continu et le remet en forme sinusoïdale 230 V / 50 Hz. Les pertes de cette conversion (environ 3 à 4 %) sont ce que mesure le rendement.' },
                  { num: '3', titre: 'Synchronisation et injection', detail: 'L\'onduleur se cale sur la phase du réseau et injecte son courant via le câble AC et la prise. Vos appareils en marche consomment cette électricité en priorité ; le surplus part sur le réseau Enedis.' },
                  { num: '4', titre: 'Surveillance du réseau (découplage)', detail: 'Il mesure en continu tension et fréquence. Si le réseau sort des tolérances ou disparaît (coupure, prise débranchée), il cesse d\'injecter automatiquement. C\'est la protection anti-îlotage.' },
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
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">
                Autres points pratiques&nbsp;: aucune pi&egrave;ce mobile, donc <strong>silencieux</strong> et sans entretien&nbsp;; bo&icirc;tier g&eacute;n&eacute;ralement <strong>IP67</strong>&nbsp;; plage MPPT typique de 16 &agrave; 60&nbsp;V avec un d&eacute;marrage autour de 20-22&nbsp;V&nbsp;; consommation nocturne de quelques dixi&egrave;mes de watt (<Link href="/blog/consommation-veille-kit-solaire" className="text-green hover:underline">chiffres d&eacute;taill&eacute;s par kit</Link>).
              </p>
            </section>

            {/* Micro vs central vs optimiseur */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Micro-onduleur, onduleur central ou optimiseur&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Trois architectures existent en photovolta&iuml;que r&eacute;sidentiel. Pour un balcon, le choix est vite fait, mais la comparaison aide &agrave; comprendre ce que vous achetez.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Crit&egrave;re</th>
                      <th className="p-3 text-center font-bold bg-green-pale/30">Micro-onduleur</th>
                      <th className="p-3 text-center font-bold">Onduleur central (string)</th>
                      <th className="p-3 text-center font-bold">Optimiseurs + onduleur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Principe', 'Conversion DC→AC derrière chaque panneau', 'Panneaux en série, une conversion centrale', 'Boîtier DC/DC par panneau + onduleur central'],
                      ['Tension DC', 'Basse (< 60 V)', 'Élevée (plusieurs centaines de V)', 'Élevée côté onduleur'],
                      ['Ombrage partiel', 'Géré panneau par panneau', 'Toute la chaîne pénalisée', 'Géré panneau par panneau'],
                      ['Monitoring', 'Par panneau ou par paire', 'Global', 'Par panneau'],
                      ['Point unique de panne', 'Non', 'Oui', 'Oui (onduleur)'],
                      ['Pertinent pour', 'Balcon, 1 à 4 panneaux, toiture complexe', 'Toiture de plusieurs kWc sans ombre', 'Toiture partiellement ombragée'],
                      ['Branchement sur prise', 'Oui', 'Non', 'Non'],
                    ].map(([critere, micro, central, optim], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{critere}</td>
                        <td className="p-3 text-center text-sm text-charcoal bg-green-pale/30">{micro}</td>
                        <td className="p-3 text-center text-sm text-charcoal-light">{central}</td>
                        <td className="p-3 text-center text-sm text-charcoal-light">{optim}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                <strong>Pour un balcon, il n&apos;y a pas de d&eacute;bat&nbsp;:</strong> seul le micro-onduleur (ou un syst&egrave;me hybride qui en int&egrave;gre un) se branche sur une prise, travaille en basse tension DC et g&egrave;re un garde-corps o&ugrave; un panneau est &agrave; l&apos;<Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green hover:underline">ombre</Link> une partie de la journ&eacute;e. Le c&acirc;blage de plusieurs panneaux sur un m&ecirc;me onduleur est d&eacute;taill&eacute; dans notre guide <Link href="/blog/multi-panneaux-serie-parallele" className="text-green hover:underline">s&eacute;rie ou parall&egrave;le</Link>. Les panneaux &laquo;&nbsp;AC&nbsp;&raquo; (module photovolta&iuml;que &agrave; micro-onduleur int&eacute;gr&eacute;) reposent sur le m&ecirc;me principe, l&apos;onduleur &eacute;tant simplement pr&eacute;-mont&eacute; en usine.
              </p>
            </section>

            {/* Dimensionnement */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Dimensionner son micro-onduleur par rapport au panneau</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Erreur fr&eacute;quente&nbsp;: croire qu&apos;un panneau de 500&nbsp;Wc exige un onduleur de 500&nbsp;W. Un panneau n&apos;atteint sa puissance cr&ecirc;te que dans les conditions de laboratoire (1&nbsp;000&nbsp;W/m&sup2;, cellules &agrave; 25&nbsp;&deg;C). Sur un balcon, avec un panneau vertical ou peu inclin&eacute; et des cellules chaudes, il n&apos;y arrive quasiment jamais.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="card text-center">
                  <div className="font-mono font-bold text-2xl text-green">1,0 &ndash; 1,3</div>
                  <div className="text-xs text-stone mt-1">Ratio Wc panneaux / VA onduleur courant</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-2xl text-green">60-65 V</div>
                  <div className="text-xs text-stone mt-1">Tension DC max &agrave; ne jamais d&eacute;passer (Voc par grand froid)</div>
                </div>
                <div className="card text-center">
                  <div className="font-mono font-bold text-2xl text-green">13-16 A</div>
                  <div className="text-xs text-stone mt-1">Courant d&apos;entr&eacute;e max typique par MPPT</div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">L&apos;&eacute;cr&ecirc;tage (clipping)&nbsp;: une perte souvent limit&eacute;e</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Quand les panneaux produisent plus que la puissance AC de l&apos;onduleur, celui-ci plafonne&nbsp;: c&apos;est l&apos;&eacute;cr&ecirc;tage. Avec 2 &times; 500&nbsp;Wc sur un 800&nbsp;VA (ratio 1,25), le plafond n&apos;est atteint qu&apos;aux heures de plein soleil des beaux jours, avec des panneaux bien inclin&eacute;s. Le reste du temps &mdash; matin, soir, hiver, ciel voil&eacute; &mdash; les watts suppl&eacute;mentaires sont r&eacute;cup&eacute;r&eacute;s. C&apos;est pourquoi surdimensionner les panneaux de 20 &agrave; 30&nbsp;% est une pratique courante, encore plus pertinente en pose verticale. Nous ne publions pas de chiffre de perte annuelle&nbsp;: elle d&eacute;pend trop de l&apos;orientation, de l&apos;inclinaison et du climat.
              </p>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong className="text-amber-dark">&Agrave; v&eacute;rifier absolument&nbsp;:</strong> la tension de circuit ouvert (Voc) d&apos;un panneau augmente par grand froid. Un panneau &agrave; 49&nbsp;V de Voc &agrave; 25&nbsp;&deg;C peut d&eacute;passer 53&nbsp;V &agrave; &minus;10&nbsp;&deg;C. Gardez une marge sous la tension DC max de l&apos;onduleur (60&nbsp;V pour l&apos;APsystems EZ1-M, 65&nbsp;V pour le Hoymiles HMS-800). Voir aussi&nbsp;: <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="text-green hover:underline">300, 400 ou 500&nbsp;W&nbsp;: quelle puissance choisir</Link>.
                </p>
              </div>
            </section>

            {/* Comparatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparatif 2026&nbsp;: 7 micro-onduleurs vendus en France</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Donn&eacute;es issues des fiches techniques constructeurs et des revendeurs fran&ccedil;ais, relev&eacute;es en septembre 2026. Les rendements ne sont pas tous exprim&eacute;s de la m&ecirc;me fa&ccedil;on (maximal, europ&eacute;en ou CEC)&nbsp;: nous indiquons lequel.
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Mod&egrave;le</th>
                      <th className="p-3 text-right font-bold">Puissance AC</th>
                      <th className="p-3 text-center font-bold">MPPT</th>
                      <th className="p-3 text-right font-bold">Rendement</th>
                      <th className="p-3 text-left font-bold">Monitoring</th>
                      <th className="p-3 text-right font-bold">Garantie</th>
                      <th className="p-3 text-right font-bold">Prix TTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.map((m, i) => (
                      <tr key={m.nom} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">
                          {m.href ? (
                            <Link href={m.href} className="text-green hover:underline">{m.nom}</Link>
                          ) : (
                            m.nom
                          )}
                          <div className="text-xs text-stone font-normal">{m.type} &middot; {m.pourQui}</div>
                        </td>
                        <td className="p-3 text-right font-mono">{m.puissance}</td>
                        <td className="p-3 text-center font-mono">{m.mppt}</td>
                        <td className="p-3 text-right font-mono text-xs">{m.rendement}</td>
                        <td className="p-3 text-xs text-charcoal-light">{m.com}</td>
                        <td className="p-3 text-right text-xs">{m.garantie}</td>
                        <td className="p-3 text-right font-mono text-green">{m.prix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone leading-relaxed">
                * Garanties divergentes selon les sources&nbsp;: Hoymiles annonce 12 ans de s&eacute;rie (extensible &agrave; 25 ans) sur sa gamme, mais certains revendeurs affichent 10 ans pour le HMS-800W-2T&nbsp;; Deye est annonc&eacute; entre 10 et 15 ans selon les revendeurs&nbsp;; l&apos;EcoFlow PowerStream est garanti 10 ans par EcoFlow (page produit officielle), les 2 ans affich&eacute;s par certains revendeurs correspondant &agrave; la garantie l&eacute;gale&nbsp;; il n&apos;est toutefois plus vendu par EcoFlow France depuis 2026 (remplac&eacute; au catalogue par la gamme STREAM). ** Garantie Enphase 25 ans conditionn&eacute;e &agrave; une passerelle IQ Gateway connect&eacute;e &agrave; Internet (vendue en plus). Prix constat&eacute;s chez des revendeurs fran&ccedil;ais, tr&egrave;s variables selon les promotions&nbsp;: le HMS-800W-2T a par exemple &eacute;t&eacute; vu &agrave; 99&nbsp;&euro; en promotion. Prix du Deye non v&eacute;rifi&eacute; &agrave; la date de mise &agrave; jour.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">Hoymiles HMS-800W-2T</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">La r&eacute;f&eacute;rence des montages DIY&nbsp;: 2 MPPT ind&eacute;pendants, Wi-Fi int&eacute;gr&eacute; (c&apos;est le &laquo;&nbsp;W&nbsp;&raquo; du nom &mdash; la version HMS-800-2T sans W passe par une passerelle DTU), plage MPPT 16-60&nbsp;V, 65&nbsp;V DC max. Le moins cher des 800&nbsp;VA de marque. <Link href="/avis/hoymiles-hms-800w" className="text-green hover:underline">Notre avis complet</Link>.</p>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">APsystems EZ1-M / EZ1-H</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Wi-Fi <em>et</em> Bluetooth&nbsp;: vous pouvez lire la production en local sans passer par le cloud. Garantie 12 ans. L&apos;EZ1-H (960&nbsp;VA) accepte de plus gros panneaux et se bride depuis l&apos;application. C&apos;est la famille d&apos;onduleurs des kits Beem et Sunethic.</p>
                </div>
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-2">Enphase IQ8P</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Le haut de gamme&nbsp;: 25 ans de garantie et r&eacute;putation de fiabilit&eacute;. Mais un seul panneau par onduleur et une passerelle IQ Gateway n&eacute;cessaire pour le suivi et la garantie&nbsp;: pour 2 panneaux, la facture double. Con&ccedil;u pour les installateurs, pas pour le plug-and-play.</p>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-2">Deye SUN-M80G4</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">800&nbsp;W, 2 MPPT (2 &times; 13&nbsp;A), Wi-Fi, IP67, rendement europ&eacute;en annonc&eacute; de 96&nbsp;%. Rappel utile&nbsp;: en 2023, l&apos;ancien Deye SUN600G3 avait perdu son autorisation en Allemagne faute du relais de couplage exig&eacute; par la VDE-AR-N 4105 (Deye avait alors fourni un bo&icirc;tier relais). Exigez la g&eacute;n&eacute;ration G4 et son certificat.</p>
                </div>
              </div>
            </section>

            {/* Kits */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel micro-onduleur dans chaque kit balcon&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Si vous achetez un kit complet, l&apos;onduleur est impos&eacute;. Voici ce qu&apos;il y a sous le capot des principaux kits vendus en France&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Kit</th>
                      <th className="p-3 text-left font-bold">Micro-onduleur</th>
                      <th className="p-3 text-right font-bold">Puissance</th>
                      <th className="p-3 text-left font-bold">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kitsParOnduleur.map((k, i) => (
                      <tr key={k.kit} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold"><Link href={k.href} className="text-green hover:underline">{k.kit}</Link></td>
                        <td className="p-3 text-charcoal-light">{k.onduleur}</td>
                        <td className="p-3 text-right font-mono">{k.puissanceMO}</td>
                        <td className="p-3 text-xs text-charcoal-light">{k.app}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Choisir */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel micro-onduleur choisir&nbsp;? Le guide de d&eacute;cision</h2>
              <div className="space-y-3">
                {[
                  { cas: 'Vous avez 1 panneau de 300 à 500 Wc', reco: 'Un mono-entrée 400-480 VA : Hoymiles HMS-400W-1T pour le prix, Enphase IQ8P si la garantie 25 ans compte plus que le coût.' },
                  { cas: 'Vous avez 2 panneaux (cas le plus courant)', reco: 'Un 800 VA à 2 MPPT avec Wi-Fi intégré. Hoymiles HMS-800W-2T si le prix prime, APsystems EZ1-M si vous voulez le Bluetooth local et 12 ans de garantie.' },
                  { cas: 'Vos panneaux font plus de 500 Wc chacun', reco: 'APsystems EZ1-H (960 VA, bridable) ou un 800 VA avec écrêtage assumé. Vérifiez la tension Voc et le courant d’entrée.' },
                  { cas: 'Vous voulez stocker le surplus', reco: 'Un système avec batterie (Zendure SolarFlow, EcoFlow STREAM ; le PowerStream n’est plus vendu). Plus cher : utile surtout si votre consommation de journée est faible.' },
                  { cas: 'Vous voulez le moins cher possible', reco: 'Hoymiles HMS-800W-2T. Évitez les onduleurs sans marque des places de marché : certificat de découplage invérifiable, parfois pas de relais.' },
                  { cas: 'Vous voulez du courant pendant une coupure', reco: 'Aucun micro-onduleur réseau ne le permet. Il faut une station avec sortie AC autonome (voir plus bas).' },
                ].map((item) => (
                  <div key={item.cas} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1 text-green">{item.cas}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">{item.reco}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <AffiliateCTA
                  productName="Hoymiles HMS-800W-2T"
                  merchantName="Amazon"
                  affiliateUrl="https://www.amazon.fr/dp/B0CJGL65DS?tag=monbalconsolai-21"
                  label="Voir le Hoymiles HMS-800W-2T sur Amazon"
                  variant="secondary"
                  position="after-decision-guide"
                />
              </div>
              <h3 className="font-bold text-lg mt-8 mb-2">Wi-Fi, passerelle ou CPL&nbsp;: comment suivre sa production</h3>
              <ul className="text-sm text-charcoal-light space-y-2 leading-relaxed">
                <li>&bull; <strong>Wi-Fi int&eacute;gr&eacute;</strong> (Hoymiles HMS-W, APsystems EZ1, Deye G4, TSUN, EcoFlow)&nbsp;: l&apos;onduleur se connecte directement &agrave; votre box. Rien &agrave; acheter, mais il faut que le Wi-Fi porte jusqu&apos;au balcon.</li>
                <li>&bull; <strong>Passerelle radio (DTU)</strong>&nbsp;: les Hoymiles sans &laquo;&nbsp;W&nbsp;&raquo; communiquent par radio vers un bo&icirc;tier DTU branch&eacute; &agrave; l&apos;int&eacute;rieur. Co&ucirc;t suppl&eacute;mentaire, mais souvent meilleure port&eacute;e.</li>
                <li>&bull; <strong>Courant porteur (CPL)</strong>&nbsp;: Enphase transmet les donn&eacute;es par les c&acirc;bles &eacute;lectriques jusqu&apos;&agrave; l&apos;IQ Gateway.</li>
                <li>&bull; <strong>Bluetooth</strong> (APsystems EZ1)&nbsp;: lecture locale sur t&eacute;l&eacute;phone, sans compte cloud.</li>
                <li>&bull; <strong>Alternative universelle</strong>&nbsp;: une <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline">prise connect&eacute;e avec mesure</Link> entre l&apos;onduleur et la prise murale.</li>
              </ul>
            </section>

            {/* Hybrides */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Micro-onduleurs hybrides&nbsp;: injecter et stocker</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un micro-onduleur hybride fait la m&ecirc;me conversion, mais peut aussi <strong>diriger le surplus vers une batterie</strong> et le restituer le soir. Notre m&eacute;thodologie retient 85&nbsp;% d&apos;autoconsommation sans batterie et 95&nbsp;% avec, pour un kit dimensionn&eacute; selon votre <Link href="/blog/talon-consommation-solaire" className="text-green hover:underline">talon de consommation</Link>. Dix points d&apos;autoconsommation en plus justifient rarement plusieurs centaines d&apos;euros de batterie sur un kit de 800&nbsp;W.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <ProductThumb src="/images/produits/ecoflow-powerstream-2.webp" alt="EcoFlow PowerStream" href="/avis/ecoflow-powerstream" size="sm" />
                    <h3 className="font-bold text-base">EcoFlow PowerStream</h3>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">Deux entr&eacute;es PV de 400&nbsp;W, sortie 600 ou 800&nbsp;W selon la version, port pour station EcoFlow. Pertinent surtout si vous poss&eacute;dez d&eacute;j&agrave; une station. <strong>Plus vendu par EcoFlow France (constat du 27/09/2026)</strong>&nbsp;: la marque propose d&eacute;sormais le micro-onduleur STREAM.</p>
                  <p className="text-xs text-stone"><Link href="/avis/ecoflow-powerstream" className="text-green hover:underline">Lire notre avis complet &rarr;</Link></p>
                </div>
                <div className="card-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <ProductThumb src="/images/produits/zendure-solarflow-front.webp" alt="Zendure SolarFlow" href="/avis/zendure-solarflow" size="sm" />
                    <h3 className="font-bold text-base">Zendure SolarFlow</h3>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-2">Batterie et onduleur r&eacute;unis&nbsp;: stocke le surplus en journ&eacute;e et le restitue le soir.</p>
                  <p className="text-xs text-stone"><Link href="/avis/zendure-solarflow" className="text-green hover:underline">Lire notre avis complet &rarr;</Link></p>
                </div>
              </div>
            </section>

            {/* Hors réseau */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Micro-onduleur hors r&eacute;seau&nbsp;: pourquoi &ccedil;a ne marche pas</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un micro-onduleur &laquo;&nbsp;r&eacute;seau&nbsp;&raquo; (grid-tie) ne fabrique pas sa propre r&eacute;f&eacute;rence de tension&nbsp;: il se <strong>synchronise</strong> sur le 230&nbsp;V / 50&nbsp;Hz du r&eacute;seau. Sans r&eacute;seau, il n&apos;a rien sur quoi se caler, et sa <strong>protection de d&eacute;couplage (anti-&icirc;lotage)</strong> lui interdit d&apos;injecter.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Ce n&apos;est pas un d&eacute;faut, c&apos;est une s&eacute;curit&eacute;&nbsp;: pendant une coupure, un technicien doit pouvoir intervenir sur une ligne hors tension, et la fiche m&acirc;le de votre kit ne doit pas rester sous tension quand vous la d&eacute;branchez.
              </p>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <h3 className="font-bold text-base mb-2">Si vous voulez vraiment de l&apos;autonomie</h3>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Station &eacute;lectrique avec entr&eacute;e solaire&nbsp;:</strong> les panneaux chargent la batterie via son r&eacute;gulateur MPPT, vous branchez vos appareils sur ses prises. Aucun micro-onduleur r&eacute;seau dans la boucle. <Link href="/blog/batteries-portables-solaires-comparatif" className="text-green hover:underline">Notre comparatif des batteries portables</Link>.</li>
                  <li>&bull; <strong>Kit site isol&eacute;&nbsp;:</strong> r&eacute;gulateur MPPT + batterie + onduleur autonome (off-grid). Une installation &agrave; part enti&egrave;re, hors du cadre plug-and-play.</li>
                  <li>&bull; <strong>Syst&egrave;mes hybrides&nbsp;:</strong> certains proposent une prise de secours, mais c&apos;est alors la batterie qui l&apos;alimente, pas l&apos;onduleur r&eacute;seau. V&eacute;rifiez la fiche produit, fonction par fonction.</li>
                </ul>
              </div>
            </section>

            {/* Normes */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Installation, s&eacute;curit&eacute; et normes</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Certificat de d&eacute;couplage</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Jusqu&apos;au 31 d&eacute;cembre 2024, Enedis s&apos;appuyait sur la DIN VDE 0126-1-1 avec le r&eacute;glage fran&ccedil;ais VFR2019. Pour les demandes de raccordement d&eacute;pos&eacute;es depuis le 1<sup>er</sup> janvier 2025, la r&eacute;f&eacute;rence est la <strong>NF EN 50549-1</strong>, d&eacute;clinaison basse tension du code de r&eacute;seau europ&eacute;en RfG (r&egrave;glement UE 2016/631), qui s&apos;applique aux unit&eacute;s de production &agrave; partir de 0,8&nbsp;kW (type&nbsp;A). Selon photovoltaique.info, le certificat de conformit&eacute; est exig&eacute; pour les installations de plus de 800&nbsp;W&nbsp;; un kit &agrave; 800&nbsp;VA est donc &agrave; la limite, et un kit plus petit doit tout de m&ecirc;me disposer d&apos;une protection de d&eacute;couplage. Les fiches Hoymiles citent par exemple EN 50549-1:2019 et la norme allemande VDE-AR-N 4105:2018. Demandez le certificat au vendeur avant l&apos;achat.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">D&apos;o&ugrave; vient la limite de 800&nbsp;W&nbsp;?</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Surtout d&apos;Allemagne, qui a relev&eacute; en 2024 le plafond de ses installations de balcon simplifi&eacute;es de 600 &agrave; 800&nbsp;VA c&ocirc;t&eacute; onduleur. C&apos;est pourquoi la plupart des micro-onduleurs pour balcon sont calibr&eacute;s &agrave; 800&nbsp;VA. Les r&egrave;gles fran&ccedil;aises applicables au branchement sur prise sont d&eacute;taill&eacute;es dans notre <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">guide r&eacute;glementation 2026</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">D&eacute;claration Enedis</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">M&ecirc;me pour un seul panneau, l&apos;installation se d&eacute;clare via une convention d&apos;autoconsommation sans injection (CACSI), gratuite. <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">Guide CACSI pas &agrave; pas</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Bonnes pratiques d&apos;installation</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Onduleur fix&eacute; &agrave; l&apos;abri, derri&egrave;re le panneau, jamais enferm&eacute; en plein soleil&nbsp;; connecteurs MC4 enfonc&eacute;s jusqu&apos;au clic&nbsp;; pas de multiprise ni de rallonge enroul&eacute;e&nbsp;; prise reli&eacute;e &agrave; la terre et prot&eacute;g&eacute;e par un diff&eacute;rentiel 30&nbsp;mA. D&eacute;tails dans notre <Link href="/guide/installer-kit-solaire-balcon" className="text-green hover:underline">guide d&apos;installation</Link>.</p>
                </div>
              </div>
            </section>

            {/* Pannes */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pannes courantes et diagnostic</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Sympt&ocirc;me</th>
                      <th className="p-3 text-left font-bold">Cause probable</th>
                      <th className="p-3 text-left font-bold">Que faire</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Production nulle, voyant éteint', 'Pas de tension DC : connecteur MC4 mal enfoncé, câble abîmé, panneau totalement à l’ombre', 'Vérifier les connexions DC, mesurer la tension du panneau au multimètre'],
                      ['Production nulle, voyant rouge', 'Réseau non détecté ou hors tolérances', 'Tester une autre prise, vérifier disjoncteur et différentiel, consulter le code défaut dans l’app'],
                      ['Coupures répétées en milieu de journée', 'Tension réseau trop élevée localement (fréquent en bout de ligne)', 'Relever la tension à la prise ; si le problème persiste, le signaler à Enedis'],
                      ['Production plafonnée tous les midis', 'Écrêtage normal, ou limite de puissance réglée dans l’application', 'Vérifier le bridage configuré dans l’app'],
                      ['Plus de données dans l’app', 'Wi-Fi trop faible au balcon, réseau 5 GHz seul, mot de passe changé', 'Rapprocher le point d’accès, activer le 2,4 GHz, reconfigurer'],
                      ['Une entrée produit bien moins que l’autre', 'Ombre, salissure ou panneau défectueux', 'Inverser les deux panneaux : si l’écart suit le panneau, c’est le panneau'],
                    ].map(([symptome, cause, action]) => (
                      <tr key={symptome} className="border-b border-border-light bg-white even:bg-cream/50">
                        <td className="p-3 font-semibold">{symptome}</td>
                        <td className="p-3 text-xs text-charcoal-light">{cause}</td>
                        <td className="p-3 text-xs text-charcoal-light">{action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light">
                Pour un diagnostic complet (orientation, ombrage, param&eacute;trage)&nbsp;: <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green hover:underline">mon panneau produit moins que pr&eacute;vu</Link>.
              </p>
            </section>

            {/* Rendement : l'écart réel */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le rendement compte-t-il vraiment&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les marques mettent en avant un demi-point de rendement. Chiffrons-le avec notre m&eacute;thodologie standard (2 &times; 400&nbsp;Wc, Lyon, exposition sud, PR 0,85, tarif 0,1940&nbsp;&euro;/kWh)&nbsp;:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { v: '~680 kWh', l: 'Production annuelle' },
                  { v: '0,6 pt', l: 'Écart 96,7 % vs 97,3 %' },
                  { v: '~4 kWh', l: 'Production en plus par an' },
                  { v: '< 1 €/an', l: 'Gain sur la facture' },
                ].map((s) => (
                  <div key={s.l} className="card text-center bg-green-pale/30">
                    <div className="font-mono font-bold text-lg text-green">{s.v}</div>
                    <div className="text-xs text-stone mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">
                Conclusion&nbsp;: choisissez sur la compatibilit&eacute; avec vos panneaux, le monitoring, la garantie et le prix. &Agrave; ce niveau d&apos;&eacute;cart, le rendement est un argument marketing.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Combien produirait un kit sur votre balcon&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Le micro-onduleur ne fait pas la production&nbsp;: l&apos;orientation et votre d&eacute;partement, si.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={faq.question} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/hoymiles-hms-800w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Hoymiles HMS-800W-2T&nbsp;: avis complet du micro-onduleur DIY</h3>
                  <p className="text-xs text-charcoal-light mt-1">Analyse ind&eacute;pendante, specs et ROI d&apos;un kit DIY avec le HMS-800W-2T</p>
                </Link>
                <Link href="/blog/multi-panneaux-serie-parallele" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Multi-panneaux&nbsp;: s&eacute;rie ou parall&egrave;le&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Double MPPT, c&acirc;bles MC4, limites de tension&nbsp;: le guide de c&acirc;blage</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">R&eacute;glementation panneau solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, CACSI, copropri&eacute;t&eacute;&nbsp;: ce que dit la loi</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu&nbsp;: que faire&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">Onduleur brid&eacute;, ombrage, orientation&nbsp;: le diagnostic complet</p>
                </Link>
                <Link href="/blog/consommation-veille-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Consommation en veille d&apos;un kit solaire</h3>
                  <p className="text-xs text-charcoal-light mt-1">Ce que consomment micro-onduleur et passerelle la nuit</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> fiches techniques Hoymiles, APsystems, Enphase, Deye, TSUN, EcoFlow&nbsp;; prix relev&eacute;s en septembre 2026 chez des revendeurs fran&ccedil;ais (Solaris Store, My Discount Solar, revendeurs Enphase)&nbsp;; photovoltaique.info (protection de d&eacute;couplage, NF EN 50549-1)&nbsp;; pv magazine Deutschland (affaire des relais Deye, 2023). Produits analys&eacute;s sur fiches techniques et retours d&apos;utilisateurs, pas test&eacute;s physiquement. Production calcul&eacute;e selon notre <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link> (tarif 0,1940&nbsp;&euro;/kWh, PR 0,85, Lyon, sud).
              </p>
              <p className="text-xs text-stone leading-relaxed mt-2">
                <strong>Transparence&nbsp;:</strong> certains liens de cette page sont des liens affili&eacute;s. Si vous achetez via ces liens, nous percevons une commission sans surco&ucirc;t pour vous. Cela n&apos;influence pas nos analyses.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
