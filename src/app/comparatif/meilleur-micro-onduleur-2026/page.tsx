import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

const PAGE_TITLE = 'Meilleur micro-onduleur 2026 : Hoymiles vs APsystems';
const PAGE_DESCRIPTION =
  'Micro-onduleur solaire 2026 : Hoymiles HMS-800W-2T (119€), APsystems EZ1-M, Enphase IQ8P, Deye comparés. Prix, MPPT, garantie, lequel choisir.';
const PAGE_URL = 'https://monbalconsolaire.fr/comparatif/meilleur-micro-onduleur-2026';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
};

const faqData = [
  {
    question: 'Quel est le meilleur micro-onduleur pour un kit solaire balcon en 2026 ?',
    answer:
      'Pour un montage DIY à 2 panneaux, le Hoymiles HMS-800W-2T reste la référence : 2 MPPT indépendants, Wi-Fi intégré sans boîtier DTU, environ 119 € sur Amazon (notre avis complet). L\'APsystems EZ1-M (Wi-Fi + Bluetooth, 12 ans de garantie, ~189 €) est l\'alternative si vous voulez un monitoring local sans compte cloud. L\'Enphase IQ8P se distingue par sa garantie de 25 ans, mais à raison d\'un onduleur par panneau, la facture double vite.',
  },
  {
    question: 'Combien coûte un micro-onduleur solaire ?',
    answer:
      'De 100 à 200 € environ pour un modèle à 2 entrées (800 VA) : le Hoymiles HMS-800W-2T se trouve à partir de ~119 € sur Amazon et jusqu\'à ~170 € chez certains revendeurs spécialisés, l\'APsystems EZ1-M autour de 189 €. Les modèles mono-entrée Enphase IQ8P se vendent à l\'unité, environ 150 à 180 € selon le revendeur, soit 300 à 360 € pour 2 panneaux puisqu\'il en faut un par panneau.',
  },
  {
    question: 'Hoymiles ou APsystems : lequel choisir ?',
    answer:
      'Le Hoymiles HMS-800W-2T est moins cher et c\'est le micro-onduleur le plus utilisé dans les montages DIY en Europe : 2 MPPT, Wi-Fi intégré, 96,7 % de rendement (pic CEC). L\'APsystems EZ1-M coûte generalement plus cher mais ajoute le Bluetooth (lecture locale sans cloud) et 12 ans de garantie constructeur contre 10 chez Hoymiles. Les deux acceptent les mêmes panneaux à connecteurs MC4 standard. Vérifiez la disponibilité en stock au moment de l\'achat : certains revendeurs français annoncent l\'EZ1-M en fin de commercialisation.',
  },
  {
    question: 'Pourquoi choisir un Enphase plutôt qu\'un Hoymiles ou un APsystems ?',
    answer:
      'Uniquement pour la garantie : 25 ans chez Enphase (IQ8P) contre 10-12 ans chez Hoymiles et APsystems. En contrepartie, l\'IQ8P ne gère qu\'un seul panneau (il en faut deux pour un kit à 2 panneaux, donc la facture double) et une passerelle IQ Gateway payante est nécessaire pour activer le suivi et faire valoir la garantie. Pour un kit balcon classique à 2 panneaux, le surcoût dépasse rarement ce que la garantie supplémentaire rapporte réellement.',
  },
  {
    question: 'Le Deye SUN-M80G4 est-il un bon choix ?',
    answer:
      'Sur le papier, oui : 800 W, 2 MPPT, Wi-Fi intégré, IP67, dans la même catégorie que le Hoymiles et l\'APsystems. Dans les faits, nous n\'avons pas trouvé de revendeur français affichant un prix TTC fiable et daté au moment de la rédaction (octobre 2026) — les prix observés viennent de revendeurs allemands ou britanniques. Si vous le trouvez chez un revendeur français, exigez le certificat de conformité NF EN 50549-1 avant d\'acheter, comme pour tout micro-onduleur.',
  },
  {
    question: 'Faut-il un micro-onduleur par panneau ou un modèle à 2 entrées ?',
    answer:
      'Pour 2 panneaux de 300 à 500 Wc chacun, un modèle à 2 MPPT comme le Hoymiles HMS-800W-2T ou l\'APsystems EZ1-M revient moins cher qu\'un modèle mono-entrée doublé (comme l\'Enphase IQ8P), pour un résultat équivalent : chaque MPPT suit son panneau indépendamment, donc l\'ombrage d\'un panneau ne pénalise pas l\'autre dans les deux cas. Le détail du câblage est expliqué dans notre guide multi-panneaux série ou parallèle.',
  },
];

type Row = {
  nom: string;
  prix: string;
  puissance: string;
  mppt: string;
  com: string;
  garantie: string;
  verdict: string;
  href?: string;
  highlight?: boolean;
};

const rows: Row[] = [
  {
    nom: 'Hoymiles HMS-800W-2T',
    prix: '~119 € (Amazon)',
    puissance: '800 VA',
    mppt: '2',
    com: 'Wi-Fi intégré',
    garantie: '10 ans',
    verdict: 'Le choix par défaut pour un kit DIY',
    href: '/avis/hoymiles-hms-800w',
    highlight: true,
  },
  {
    nom: 'APsystems EZ1-M',
    prix: '~189 €',
    puissance: '799 VA',
    mppt: '2',
    com: 'Wi-Fi + Bluetooth',
    garantie: '12 ans',
    verdict: 'Monitoring local sans cloud',
  },
  {
    nom: 'APsystems EZ1-H',
    prix: '~199 €',
    puissance: '960 VA (bridable)',
    mppt: '2',
    com: 'Wi-Fi + Bluetooth',
    garantie: '12 ans',
    verdict: 'Panneaux de plus de 500 Wc',
  },
  {
    nom: 'Enphase IQ8P',
    prix: '~150-180 € / unité',
    puissance: '480 VA (1 panneau)',
    mppt: '1',
    com: 'CPL vers IQ Gateway',
    garantie: '25 ans*',
    verdict: 'Garantie longue, budget doublé',
  },
  {
    nom: 'Deye SUN-M80G4-EU-Q0',
    prix: 'Non vérifié en France',
    puissance: '800 W',
    mppt: '2',
    com: 'Wi-Fi intégré',
    garantie: '10-15 ans**',
    verdict: 'Alternative, disponibilité FR à confirmer',
  },
];

export default function MeilleurMicroOnduleurPage() {
  return (
    <>
      <SchemaArticle
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        datePublished="2026-10-16"
        dateModified="2026-10-16"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Meilleur micro-onduleur 2026' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'Meilleur micro-onduleur 2026' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Meilleur micro-onduleur solaire 2026&nbsp;: Hoymiles, APsystems, Enphase, Deye
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Vous montez votre propre kit solaire de balcon et devez choisir le micro-onduleur&nbsp;? Contrairement aux kits cl&eacute;-en-main (Sunology, Beem), un montage DIY vous laisse le choix de l&apos;onduleur &mdash; et donc du prix, de la garantie et du monitoring. Nous comparons les 5&nbsp;r&eacute;f&eacute;rences les plus vendues en France&nbsp;: lequel acheter selon votre budget et vos panneaux.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>Publi&eacute; le 16 octobre 2026</span>
              <span>&middot;</span>
              <span>11 min de lecture</span>
            </div>

            <div className="card bg-cream/50 border-border-light mt-6 py-3 px-5 flex items-start gap-3">
              <span className="text-stone text-sm mt-0.5">&#x2139;</span>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence&nbsp;:</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la compatibilit&eacute;, le monitoring et la garantie. <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</Link>
              </p>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Pour 2 panneaux, le <strong>Hoymiles HMS-800W-2T</strong> (~119&nbsp;&euro; sur Amazon) reste le meilleur rapport prix/fonctionnalit&eacute;s&nbsp;: 2&nbsp;MPPT ind&eacute;pendants, Wi-Fi int&eacute;gr&eacute;, 10&nbsp;ans de garantie. L&apos;<strong>APsystems&nbsp;EZ1-M</strong> (~189&nbsp;&euro;) ajoute le Bluetooth et 2&nbsp;ans de garantie suppl&eacute;mentaires. L&apos;<strong>Enphase&nbsp;IQ8P</strong> vise la dur&eacute;e (25&nbsp;ans) mais double la facture sur un kit &agrave; 2&nbsp;panneaux. Le <strong>Deye SUN-M80G4</strong> est une alternative th&eacute;orique dont nous n&apos;avons pas trouv&eacute; de prix fran&ccedil;ais fiable &agrave; ce jour.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau comparatif</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-green text-white">
                      {['Modèle', 'Prix', 'Puissance', 'MPPT', 'Monitoring', 'Garantie'].map((h, i) => (
                        <th key={i} className={`p-3 ${i === 0 ? 'text-left rounded-tl-xl' : 'text-center'} ${i === 5 ? 'rounded-tr-xl' : ''}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={r.nom} className={`border-b border-border-light ${r.highlight ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">
                          {r.href ? (<Link href={r.href} className="text-green hover:underline">{r.nom}</Link>) : r.nom}
                          {r.highlight && <span className="badge-green ml-2 text-[10px]">Choix n&deg;1</span>}
                          <div className="text-xs text-stone font-normal mt-0.5">{r.verdict}</div>
                        </td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{r.prix}</td>
                        <td className="text-center p-3 font-mono text-sm">{r.puissance}</td>
                        <td className="text-center p-3 font-mono text-sm">{r.mppt}</td>
                        <td className="text-center p-3 text-xs text-charcoal-light">{r.com}</td>
                        <td className="text-center p-3 text-xs">{r.garantie}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone leading-relaxed">
                Prix constat&eacute;s chez des revendeurs fran&ccedil;ais et europ&eacute;ens en octobre 2026 (Wattuneed, 123Elec, HelloWatt)&nbsp;: tr&egrave;s variables selon les promotions et les stocks. * Garantie Enphase 25&nbsp;ans conditionn&eacute;e &agrave; une passerelle IQ&nbsp;Gateway connect&eacute;e &agrave; Internet (vendue en plus). ** Garantie Deye annonc&eacute;e entre 10 et 15&nbsp;ans selon le revendeur&nbsp;; prix non v&eacute;rifi&eacute; chez un revendeur fran&ccedil;ais &agrave; la date de r&eacute;daction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Hoymiles HMS-800W-2T&nbsp;: notre choix n&deg;1</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est le micro-onduleur le plus utilis&eacute; dans les montages DIY en Europe, et celui que nous recommandons par d&eacute;faut pour un kit &agrave; 2&nbsp;panneaux. 2&nbsp;MPPT ind&eacute;pendants (une ombre sur un panneau ne p&eacute;nalise pas l&apos;autre), Wi-Fi int&eacute;gr&eacute; sans bo&icirc;tier DTU s&eacute;par&eacute;, plage MPPT 16-60&nbsp;V, 96,7&nbsp;% de rendement (pic CEC). Compatible avec la quasi-totalit&eacute; des panneaux &agrave; connecteurs MC4 standard, de 300 &agrave; 700&nbsp;Wc selon le mod&egrave;le.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Sur Amazon, il se trouve &agrave; partir de <strong>119&nbsp;&euro;</strong> (lien v&eacute;rifi&eacute;, prix constat&eacute; sur la fiche produit que nous suivons depuis ao&ucirc;t 2026)&nbsp;; certains revendeurs sp&eacute;cialis&eacute;s l&apos;affichent plus cher (jusqu&apos;&agrave; ~170&nbsp;&euro; chez Wattuneed en octobre 2026). Comparez le prix TTC livr&eacute; avant d&apos;acheter.
              </p>
              <AffiliateCTA
                productName="Hoymiles HMS-800W-2T"
                merchantName="Amazon"
                affiliateUrl="https://www.amazon.fr/dp/B0CJGL65DS?tag=monbalconsola-21"
                label="Voir le Hoymiles HMS-800W-2T sur Amazon"
                variant="secondary"
                position="after-hoymiles"
              />
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">
                D&eacute;tail complet des caract&eacute;ristiques, compatibilit&eacute; et retour sur investissement&nbsp;: <Link href="/avis/hoymiles-hms-800w" className="text-green hover:underline">notre avis Hoymiles HMS-800W-2T</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">APsystems EZ1-M et EZ1-H&nbsp;: Bluetooth et plus de garantie</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&apos;APsystems EZ1-M se distingue par sa double connectivit&eacute;&nbsp;: Wi-Fi <em>et</em> Bluetooth, ce qui permet de lire la production en local depuis l&apos;application sans passer par un compte cloud. Garantie constructeur de 12&nbsp;ans, contre 10&nbsp;ans chez Hoymiles. C&apos;est la famille d&apos;onduleurs embarqu&eacute;e dans les kits Beem On et Sunethic F500.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Chez un revendeur fran&ccedil;ais (123Elec), l&apos;EZ1-M &eacute;tait affich&eacute; &agrave; environ <strong>189&nbsp;&euro;</strong> en octobre 2026, mais la fiche le signalait en fin de commercialisation&nbsp;: v&eacute;rifiez la disponibilit&eacute; en stock avant d&apos;acheter, ou pr&eacute;f&eacute;rez la variante <strong>EZ1-H</strong> (960&nbsp;VA, bridable depuis l&apos;application, ~199&nbsp;&euro;) si vos panneaux d&eacute;passent 500&nbsp;Wc chacun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Enphase IQ8P&nbsp;: la garantie 25&nbsp;ans, au prix du doublement</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&apos;argument d&apos;Enphase, c&apos;est la dur&eacute;e&nbsp;: 25&nbsp;ans de garantie contre 10-12&nbsp;ans chez Hoymiles et APsystems, et une r&eacute;putation de fiabilit&eacute; construite sur le march&eacute; am&eacute;ricain. Le revers&nbsp;: l&apos;IQ8P ne g&egrave;re qu&apos;un seul panneau (475-480&nbsp;VA, jusqu&apos;&agrave; 670&nbsp;Wc), il en faut donc deux pour un kit &agrave; 2&nbsp;panneaux &mdash; soit environ <strong>300 &agrave; 360&nbsp;&euro;</strong> au lieu de ~119 &agrave; 189&nbsp;&euro; pour un seul Hoymiles ou APsystems. Ajoutez une passerelle IQ&nbsp;Gateway (payante) n&eacute;cessaire pour activer le suivi ET faire valoir la garantie.
              </p>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong className="text-amber-dark">Notre avis&nbsp;:</strong> l&apos;IQ8P est pens&eacute; pour les installateurs professionnels sur toiture, pas pour le plug-and-play de balcon. Sur un kit &agrave; 2&nbsp;panneaux, le surco&ucirc;t d&eacute;passe rarement ce que les 13-15&nbsp;ann&eacute;es de garantie suppl&eacute;mentaires rapportent r&eacute;ellement &mdash; un micro-onduleur bien refroidi, sans pi&egrave;ce mobile, dure d&eacute;j&agrave; facilement 15 &agrave; 20&nbsp;ans en pratique.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Deye SUN-M80G4&nbsp;: une alternative encore mal distribu&eacute;e en France</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Sur le papier, le Deye SUN-M80G4-EU-Q0 coche les m&ecirc;mes cases que le Hoymiles et l&apos;APsystems&nbsp;: 800&nbsp;W, 2&nbsp;MPPT, Wi-Fi int&eacute;gr&eacute;, IP67, rendement europ&eacute;en annonc&eacute; autour de 96&nbsp;%. Nous n&apos;avons toutefois trouv&eacute; aucun revendeur fran&ccedil;ais affichant un prix TTC fiable et dat&eacute; en octobre 2026&nbsp;: les tarifs rep&eacute;r&eacute;s (environ 130 &agrave; 160&nbsp;&euro;) viennent de revendeurs allemands ou britanniques, non transposables tels quels (TVA, frais de port).
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Rappel utile&nbsp;: en 2023, un mod&egrave;le Deye ant&eacute;rieur (SUN600G3) avait perdu son autorisation en Allemagne faute du relais de couplage exig&eacute; par la norme VDE-AR-N&nbsp;4105. Si vous trouvez un Deye chez un revendeur fran&ccedil;ais, exigez syst&eacute;matiquement le certificat NF&nbsp;EN&nbsp;50549-1 (la norme de r&eacute;f&eacute;rence depuis janvier 2025) avant d&apos;acheter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Est-ce que &ccedil;a change vraiment la production&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Non, ou presque. Avec notre m&eacute;thodologie standard (2&nbsp;&times;&nbsp;400&nbsp;Wc, Lyon, exposition sud, PR&nbsp;0,85, tarif 0,1940&nbsp;&euro;/kWh), un kit DIY de 800&nbsp;Wc produit environ <strong>816&nbsp;kWh/an</strong>, pour des &eacute;conomies de premi&egrave;re ann&eacute;e d&apos;environ <strong>135&nbsp;&euro;</strong> (autoconsommation 85&nbsp;%). Le rendement des onduleurs compar&eacute;s ici va de 96 &agrave; 97,5&nbsp;%&nbsp;: un &eacute;cart qui repr&eacute;sente moins de 5&nbsp;kWh/an, soit moins d&apos;1&nbsp;&euro;/an. En comptant Hoymiles (119&nbsp;&euro;) et deux panneaux de 400&nbsp;Wc (~800&nbsp;&euro; au total), le retour sur investissement est d&apos;environ <strong>6,6&nbsp;ans</strong> (avec inflation du tarif EDF &agrave; 3,3&nbsp;%/an, m&eacute;thodologie CRE). Ce qui fait vraiment la diff&eacute;rence entre deux onduleurs, c&apos;est le prix d&apos;achat et la garantie &mdash; pas le rendement.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { v: '816 kWh', l: 'Production annuelle (800 Wc, Lyon sud)' },
                  { v: '135 €', l: 'Économies 1ère année (autoconso 85 %)' },
                  { v: '< 1 €/an', l: 'Écart de rendement entre modèles' },
                  { v: '6,6 ans', l: 'ROI avec Hoymiles + 2 panneaux 400 Wc' },
                ].map((s) => (
                  <div key={s.l} className="card text-center bg-green-pale/30">
                    <div className="font-mono font-bold text-lg text-green">{s.v}</div>
                    <div className="text-xs text-stone mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Verdict&nbsp;: quel micro-onduleur choisir&nbsp;?</h2>
              <div className="space-y-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-green mb-1">Le choix par d&eacute;faut &rarr; Hoymiles HMS-800W-2T (~119&nbsp;&euro;)</h3>
                  <p className="text-sm text-charcoal-light">Le meilleur rapport prix/fonctionnalit&eacute;s pour un kit DIY &agrave; 2&nbsp;panneaux. Wi-Fi int&eacute;gr&eacute;, 2&nbsp;MPPT, 10&nbsp;ans de garantie.</p>
                </div>
                <div className="card-lg border-green/20 bg-green-pale/10">
                  <h3 className="font-bold text-green mb-1">Pour le monitoring local &rarr; APsystems EZ1-M (~189&nbsp;&euro;)</h3>
                  <p className="text-sm text-charcoal-light">Bluetooth pour lire la production sans compte cloud, 12&nbsp;ans de garantie. V&eacute;rifiez le stock chez votre revendeur.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h3 className="font-bold text-amber-dark mb-1">Pour la dur&eacute;e maximale &rarr; Enphase IQ8P (25&nbsp;ans)</h3>
                  <p className="text-sm text-charcoal-light">Seulement si le budget n&apos;est pas la priorit&eacute;&nbsp;: comptez le double d&apos;unit&eacute;s pour 2&nbsp;panneaux, plus la passerelle IQ&nbsp;Gateway.</p>
                </div>
                <div className="card-lg">
                  <h3 className="font-bold mb-1">Panneaux de plus de 500&nbsp;Wc chacun &rarr; APsystems EZ1-H (960&nbsp;VA)</h3>
                  <p className="text-sm text-charcoal-light">Bridable depuis l&apos;application, accepte de plus gros modules sans &eacute;cr&ecirc;tage excessif.</p>
                </div>
              </div>
              <div className="mt-6">
                <AffiliateCTA
                  productName="Hoymiles HMS-800W-2T"
                  merchantName="Amazon"
                  affiliateUrl="https://www.amazon.fr/dp/B0CJGL65DS?tag=monbalconsola-21"
                  label="Voir le prix actuel sur Amazon"
                  variant="box"
                  position="footer-box"
                  price="~119 €"
                />
              </div>
            </section>

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
                <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Micro-onduleur solaire&nbsp;: fonctionnement, choix et comparatif 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">Comment &ccedil;a marche, dimensionnement, normes et pannes courantes</p>
                </Link>
                <Link href="/avis/hoymiles-hms-800w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Hoymiles HMS-800W-2T&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Analyse d&eacute;taill&eacute;e, compatibilit&eacute; et ROI du micro-onduleur DIY le plus vendu</p>
                </Link>
                <Link href="/blog/multi-panneaux-serie-parallele" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Multi-panneaux&nbsp;: s&eacute;rie ou parall&egrave;le&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">C&acirc;blage, MPPT et limites de tension pour un montage DIY</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Installer son kit solaire balcon&nbsp;: le guide complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">&Eacute;tapes, s&eacute;curit&eacute; et d&eacute;claration CACSI</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> fiches techniques Hoymiles, APsystems, Enphase, Deye&nbsp;; prix relev&eacute;s chez des revendeurs fran&ccedil;ais et europ&eacute;ens en octobre 2026 (Wattuneed, 123Elec, HelloWatt, Offgridtec). Produits analys&eacute;s sur fiches techniques, pas test&eacute;s physiquement. Calculs de production et de ROI selon notre <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link> (tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an, PR&nbsp;0,85, Lyon, sud).
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
