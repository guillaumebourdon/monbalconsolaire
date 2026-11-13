import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { withCanonicalOg } from '@/lib/metadata';
import { KWH_PRICE_LABEL, KWH_INFLATION_LABEL, PANEL_DEGRADATION_LABEL } from '@/lib/pricing';

const PAGE_TITLE = 'APsystems EZ1-M vs Hoymiles HMS-800W-2T : le duel';
const PAGE_DESCRIPTION =
  'APsystems EZ1-M vs Hoymiles HMS-800W-2T : prix, rendement, garantie, WiFi/Bluetooth. Le duel des micro-onduleurs les plus vendus pour un kit DIY balcon.';
const PAGE_URL = 'https://monbalconsolaire.fr/comparatif/apsystems-ez1-vs-hoymiles-hms-800w';

export const metadata: Metadata = withCanonicalOg({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
});

const faqData = [
  {
    question: 'APsystems EZ1-M ou Hoymiles HMS-800W-2T : lequel choisir ?',
    answer:
      'Le Hoymiles HMS-800W-2T reste notre choix par défaut : moins cher (environ 170 € chez Wattuneed, vérifié le 5 novembre 2026, contre environ 189 € pour l\'EZ1-M), WiFi intégré, 2 MPPT indépendants, rendement de 96,7 %. L\'APsystems EZ1-M se justifie si vous voulez lire la production en local via Bluetooth sans dépendre d\'un compte cloud, et profiter de 2 ans de garantie supplémentaires (12 ans contre 10). Les deux acceptent les mêmes panneaux à connecteurs MC4 standard.',
  },
  {
    question: 'Combien coûte l\'APsystems EZ1-M et le Hoymiles HMS-800W-2T ?',
    answer:
      'Le Hoymiles HMS-800W-2T est affiché à 169,40 € chez Wattuneed (vérifié le 5 novembre 2026). L\'APsystems EZ1-M se trouve autour de 188-189 € chez les revendeurs spécialisés (La Centrale Eco, 123Elec) : certains le signalent en fin de commercialisation, d\'autres en stock, vérifiez la disponibilité avant d\'acheter. Soit un écart d\'environ 20 € en faveur du Hoymiles.',
  },
  {
    question: 'Où acheter ces deux micro-onduleurs en France ?',
    answer:
      'Le Hoymiles HMS-800W-2T se trouve chez des revendeurs solaires spécialisés (Wattuneed, Offgridtec) et via des liens de recherche Amazon.fr, qui référence régulièrement des packs. L\'APsystems EZ1-M est distribué par des revendeurs comme La Centrale Eco ou 123Elec ; nous n\'avons trouvé aucune fiche Amazon.fr fiable au moment de la rédaction, contrairement au Hoymiles. Dans les deux cas, comparez le prix TTC livré avant d\'acheter : les tarifs varient selon le revendeur et les promotions.',
  },
  {
    question: 'Quelle est la différence de rendement entre les deux ?',
    answer:
      'Très faible : 96,7 % de rendement maximal pour le Hoymiles HMS-800W-2T, un chiffre identique annoncé pour l\'APsystems EZ1-M sur sa fiche technique officielle (certains revendeurs citent jusqu\'à 97,3 %, à vérifier selon la version). Sur une année de production, l\'écart représente moins de 5 kWh, soit moins d\'1 € d\'économies. Ce n\'est pas un critère de choix entre les deux.',
  },
  {
    question: 'WiFi ou Bluetooth : quelle différence pour le suivi de production ?',
    answer:
      'Le Hoymiles intègre uniquement le WiFi : il se connecte à votre box domestique et remonte les données sur l\'app S-Miles Cloud, consultable à distance. L\'APsystems EZ1-M ajoute le Bluetooth : vous pouvez lire la production en local depuis l\'app EMA, à proximité de l\'onduleur, sans connexion internet ni compte cloud. Pratique en cas de coupure WiFi, mais moins utile pour un suivi à distance au quotidien.',
  },
  {
    question: 'Faut-il un modèle différent pour des panneaux de plus de 500 Wc chacun ?',
    answer:
      'Oui, dans les deux gammes. Le Hoymiles HMS-800W-2T et l\'APsystems EZ1-M acceptent des panneaux jusqu\'à environ 670-730 Wc chacun sans écrêtage excessif, mais si vous visez des modules encore plus puissants, APsystems propose l\'EZ1-H (960 VA, bridable depuis l\'application, environ 199 €) et Hoymiles des références à plus forte puissance de sortie. Vérifiez la puissance crête de vos panneaux avant de choisir.',
  },
];

type Row = { c: string; a: string; h: string };

const rows: Row[] = [
  { c: 'Prix', a: '~189 € (La Centrale Eco / 123Elec)', h: '~170 € (Wattuneed, 05/11/2026)' },
  { c: 'Puissance AC max', a: '799 VA', h: '800 VA' },
  { c: 'Entrées DC / MPPT', a: '2 indépendants', h: '2 indépendants' },
  { c: 'Plage de tension DC', a: '16 – 60 V (MPPT 28-45 V)', h: '16 – 60 V (démarrage 22 V, max 65 V)' },
  { c: 'Panneaux compatibles', a: '300 – 730 Wc (recommandé)', h: '200 – 670 Wc' },
  { c: 'Rendement max', a: '96,7 %', h: '96,7 %' },
  { c: 'Communication', a: 'WiFi + Bluetooth', h: 'WiFi intégré (sans DTU)' },
  { c: 'Application', a: 'EMA App', h: 'S-Miles Cloud' },
  { c: 'Indice de protection', a: 'IP67', h: 'IP67' },
  { c: 'Dimensions', a: '263 × 218 × 36,5 mm', h: '261 × 180 × 35 mm' },
  { c: 'Poids', a: '~2,8 kg', h: '~3,2 kg' },
  { c: 'Garantie', a: '12 ans', h: '10 ans (extension 25 ans payante)' },
  { c: 'Vente Amazon.fr', a: 'Non trouvée', h: 'Oui (lien de recherche taggé)' },
];

export default function ApsystemsVsHoymilesPage() {
  return (
    <>
      <SchemaArticle
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
        datePublished="2026-11-13"
        dateModified="2026-11-13"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'APsystems EZ1-M vs Hoymiles HMS-800W-2T' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Comparatifs', href: '/comparatif' }, { label: 'APsystems EZ1-M vs Hoymiles HMS-800W-2T' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comparatif 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              APsystems EZ1-M vs Hoymiles HMS-800W-2T&nbsp;: le duel des micro-onduleurs DIY
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Si vous montez votre propre kit solaire balcon plut&ocirc;t que d&rsquo;acheter un kit cl&eacute;-en-main, ce sont les deux r&eacute;f&eacute;rences les plus cit&eacute;es&nbsp;: l&rsquo;APsystems&nbsp;EZ1-M et le Hoymiles&nbsp;HMS-800W-2T. M&ecirc;me cat&eacute;gorie, m&ecirc;me puissance, 2&nbsp;MPPT ind&eacute;pendants dans les deux cas &mdash; mais des diff&eacute;rences de prix, de connectivit&eacute; et de garantie qui comptent au moment de choisir.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>Publi&eacute; le 13 novembre 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>

            <div className="card bg-cream/50 border-border-light mt-6 py-3 px-5 flex items-start gap-3">
              <span className="text-stone text-sm mt-0.5">&#x2139;</span>
              <p className="text-xs text-stone leading-relaxed">
                <strong>Transparence&nbsp;:</strong> certains liens de cette page sont affili&eacute;s. Notre classement est bas&eacute; sur le prix, la compatibilit&eacute;, le monitoring et la garantie. <Link href="/methodologie" className="text-green hover:underline">Voir notre m&eacute;thodologie &rarr;</Link>
              </p>
            </div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le verdict rapide</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Le <strong>Hoymiles HMS-800W-2T</strong> (~170&nbsp;&euro;) reste le choix par d&eacute;faut&nbsp;: moins cher, WiFi int&eacute;gr&eacute;, communaut&eacute; DIY massive en Europe. L&rsquo;<strong>APsystems EZ1-M</strong> (~189&nbsp;&euro;) se justifie si vous voulez lire votre production en local via Bluetooth sans compte cloud, et profiter de 2&nbsp;ans de garantie suppl&eacute;mentaires (12&nbsp;ans contre 10). Sur la production r&eacute;elle, l&rsquo;&eacute;cart entre les deux est n&eacute;gligeable.
            </p>
          </div>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le match en un tableau</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-center p-3">APsystems EZ1-M</th>
                      <th className="text-center p-3 rounded-tr-xl bg-green-dark">Hoymiles HMS-800W-2T &#9733;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={r.c} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{r.c}</td>
                        <td className="text-center p-3 text-charcoal-light">{r.a}</td>
                        <td className="text-center p-3 font-semibold text-green bg-green-pale/30">{r.h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-4 leading-relaxed">
                Prix constat&eacute;s le 13 novembre 2026&nbsp;: Hoymiles chez Wattuneed (169,40&nbsp;&euro;, v&eacute;rifi&eacute; le 5 novembre 2026, revu le jour de publication &mdash; aucune variation trouv&eacute;e), APsystems chez La Centrale Eco (188,40&nbsp;&euro;, en stock) et 123Elec (189,00&nbsp;&euro;, fiche signal&eacute;e en fin de commercialisation&nbsp;: v&eacute;rifiez la disponibilit&eacute; avant d&apos;acheter). egress r&eacute;seau vers Wattuneed, La Centrale Eco et 123Elec bloqu&eacute; depuis cet environnement&nbsp;: donn&eacute;es recoup&eacute;es par recherche web, pas de nouvelle fiche officielle consult&eacute;e en direct ce jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">O&ugrave; le Hoymiles HMS-800W-2T gagne</h2>
              <div className="space-y-3">
                {[
                  { t: 'Prix plus bas : ~170 &euro; contre ~189 &euro;', d: 'Environ 20 &euro; de moins pour des caract&eacute;ristiques quasi identiques (800 VA, 2 MPPT, IP67). Sur un budget DIY serr&eacute;, c&rsquo;est l&rsquo;argument principal.' },
                  { t: 'Vente confirm&eacute;e sur Amazon.fr', d: 'Le Hoymiles HMS-800W-2T est r&eacute;f&eacute;renc&eacute; via des liens de recherche Amazon.fr. Nous n&rsquo;avons trouv&eacute; aucune fiche Amazon.fr fiable pour l&rsquo;APsystems EZ1-M au moment de la r&eacute;daction : il faut passer par un revendeur solaire sp&eacute;cialis&eacute;.' },
                  { t: 'Communaut&eacute; DIY europ&eacute;enne plus large', d: 'Hoymiles est la marque de r&eacute;f&eacute;rence des &laquo;&nbsp;balkonkraftwerk&nbsp;&raquo; allemandes, march&eacute; le plus mature d&rsquo;Europe. Des milliers de montages document&eacute;s sur les forums, plus facile de trouver une r&eacute;ponse en cas de probl&egrave;me.' },
                  { t: 'Panneau 2 mm plus large mais plus compact en longueur', d: '261 &times; 180&nbsp;mm contre 263 &times; 218&nbsp;mm pour l&rsquo;APsystems&nbsp;: le Hoymiles occupe une empreinte au sol plus r&eacute;duite derri&egrave;re le panneau.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: p.t }} />
                    <p className="text-xs text-charcoal-light" dangerouslySetInnerHTML={{ __html: p.d }} />
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Hoymiles HMS-800W-2T"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/s?k=Hoymiles+HMS-800W-2T&tag=monbalconsola-21"
              label="Voir le Hoymiles HMS-800W-2T sur Amazon"
              variant="secondary"
              position="after-hoymiles-wins"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">O&ugrave; l&rsquo;APsystems EZ1-M gagne</h2>
              <div className="space-y-3">
                {[
                  { t: 'Bluetooth en plus du WiFi', d: 'Seul avantage technique r&eacute;el de l&rsquo;EZ1-M&nbsp;: vous pouvez lire la production en local via l&rsquo;app EMA, &agrave; proximit&eacute; de l&rsquo;onduleur, sans d&eacute;pendre d&rsquo;une connexion internet ni d&rsquo;un compte cloud. Pratique si votre WiFi domestique est capricieux ou si vous pr&eacute;f&eacute;rez ne pas cr&eacute;er de compte en ligne.' },
                  { t: '12 ans de garantie contre 10', d: '2&nbsp;ans de garantie constructeur suppl&eacute;mentaires. Dans les faits, les deux onduleurs sont &agrave; convection naturelle, sans pi&egrave;ce mobile, et durent g&eacute;n&eacute;ralement 15 &agrave; 20&nbsp;ans &mdash; mais la garantie papier est un argument commercial en faveur d&rsquo;APsystems.' },
                  { t: 'Gamme EZ1-H pour les gros panneaux', d: 'Si vos panneaux d&eacute;passent 500&nbsp;Wc chacun, APsystems propose l&rsquo;EZ1-H (960&nbsp;VA, bridable depuis l&rsquo;application, environ 199&nbsp;&euro;), une option que Hoymiles ne propose pas dans une variante aussi proche en prix.' },
                  { t: 'Pr&eacute;sent dans des kits de marque', d: 'L&rsquo;architecture APsystems EZ1 &eacute;quipe d&eacute;j&agrave; certains kits plug-and-play vendus en France (Beem On, Sunethic F500)&nbsp;: si vous poss&eacute;dez d&eacute;j&agrave; un de ces kits, l&rsquo;application et le fonctionnement vous seront familiers.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h3 className="font-bold text-sm mb-1" dangerouslySetInnerHTML={{ __html: p.t }} />
                    <p className="text-xs text-charcoal-light" dangerouslySetInnerHTML={{ __html: p.d }} />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-green mb-2">Choisissez Hoymiles HMS-800W-2T si&nbsp;:</h3>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>&rarr; Le prix est votre priorit&eacute; (~170&nbsp;&euro; contre ~189&nbsp;&euro;)</li>
                    <li>&rarr; Vous voulez acheter sur Amazon.fr</li>
                    <li>&rarr; Vous suivez des forums DIY europ&eacute;ens pour le support</li>
                    <li>&rarr; Le suivi &agrave; distance via WiFi vous suffit</li>
                  </ul>
                  <a href="https://www.amazon.fr/s?k=Hoymiles+HMS-800W-2T&tag=monbalconsola-21" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4 text-xs">Voir le Hoymiles HMS-800W-2T &rarr;</a>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h3 className="font-bold text-amber-dark mb-2">Choisissez APsystems EZ1-M si&nbsp;:</h3>
                  <ul className="text-sm text-charcoal-light space-y-1">
                    <li>&rarr; Vous voulez un suivi local en Bluetooth, sans cloud</li>
                    <li>&rarr; 2 ans de garantie suppl&eacute;mentaires comptent pour vous</li>
                    <li>&rarr; Vos panneaux d&eacute;passent 500&nbsp;Wc (variante EZ1-H)</li>
                    <li>&rarr; Vous poss&eacute;dez d&eacute;j&agrave; un kit Beem ou Sunethic &eacute;quip&eacute; en APsystems</li>
                  </ul>
                  <p className="text-xs text-stone mt-4">Disponible chez des revendeurs solaires sp&eacute;cialis&eacute;s (La Centrale Eco, 123Elec) &mdash; v&eacute;rifiez le stock avant d&rsquo;acheter.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Quel est le ROI d&rsquo;un kit DIY avec ces micro-onduleurs&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur compare le DIY aux kits cl&eacute;-en-main pour votre d&eacute;partement et votre orientation.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Est-ce que le choix de l&rsquo;onduleur change la rentabilit&eacute;&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Tr&egrave;s peu. Avec notre m&eacute;thodologie standard (2&nbsp;&times;&nbsp;400&nbsp;Wc, Lyon, exposition sud, Performance Ratio 0,85, tarif {KWH_PRICE_LABEL}), un kit DIY de 800&nbsp;Wc produit environ <strong>816&nbsp;kWh/an</strong>, soit <strong>694&nbsp;kWh</strong> autoconsomm&eacute;s (85&nbsp;%) et environ <strong>139&nbsp;&euro;</strong> d&rsquo;&eacute;conomies la premi&egrave;re ann&eacute;e &mdash; identique avec l&rsquo;un ou l&rsquo;autre onduleur, puisque les deux affichent le m&ecirc;me rendement de 96,7&nbsp;%. Ce qui change, c&rsquo;est le ticket d&rsquo;entr&eacute;e&nbsp;: avec 2&nbsp;panneaux 400&nbsp;Wc et des c&acirc;bles (~241&nbsp;&euro; dans notre estimation), l&rsquo;investissement total est d&rsquo;environ <strong>410&nbsp;&euro;</strong> avec le Hoymiles (ROI&nbsp;2,9&nbsp;ans) contre environ <strong>430&nbsp;&euro;</strong> avec l&rsquo;APsystems EZ1-M (ROI&nbsp;3,0&nbsp;ans) &mdash; un &eacute;cart de 0,1&nbsp;an, calcul&eacute; via notre m&eacute;thodologie ({KWH_INFLATION_LABEL} d&rsquo;inflation, d&eacute;gradation des panneaux {PANEL_DEGRADATION_LABEL}).
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { v: '816 kWh', l: 'Production/an (800 Wc, Lyon sud)' },
                  { v: '139 €', l: 'Économies année 1 (autoconso 85 %)' },
                  { v: '2,9 ans', l: 'ROI avec Hoymiles (~410 €)' },
                  { v: '3,0 ans', l: 'ROI avec APsystems EZ1-M (~430 €)' },
                ].map((s) => (
                  <div key={s.l} className="card text-center bg-green-pale/30">
                    <div className="font-mono font-bold text-lg text-green">{s.v}</div>
                    <div className="text-xs text-stone mt-1">{s.l}</div>
                  </div>
                ))}
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

            <AffiliateCTA
              productName="Hoymiles HMS-800W-2T"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/s?k=Hoymiles+HMS-800W-2T&tag=monbalconsola-21"
              label="Voir le prix actuel sur Amazon"
              variant="box"
              position="footer-box"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/hoymiles-hms-800w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Hoymiles HMS-800W-2T&nbsp;: avis complet</h3>
                  <p className="text-xs text-charcoal-light mt-1">Fiche technique, points forts et limites, ROI d&eacute;taill&eacute;</p>
                </Link>
                <Link href="/comparatif/meilleur-micro-onduleur-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur micro-onduleur 2026&nbsp;: Hoymiles, APsystems, Enphase, Deye</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet des 5&nbsp;r&eacute;f&eacute;rences du march&eacute;</p>
                </Link>
                <Link href="/blog/micro-onduleur-solaire-fonctionnement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Micro-onduleur solaire&nbsp;: fonctionnement, choix et comparatif</h3>
                  <p className="text-xs text-charcoal-light mt-1">Comment &ccedil;a marche, dimensionnement, normes et pannes courantes</p>
                </Link>
                <Link href="/blog/multi-panneaux-serie-parallele" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Multi-panneaux&nbsp;: s&eacute;rie ou parall&egrave;le&nbsp;?</h3>
                  <p className="text-xs text-charcoal-light mt-1">C&acirc;blage, MPPT et limites de tension pour un montage DIY</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources&nbsp;:</strong> fiches techniques officielles APsystems (datasheet EZ1-M/EZ1-H, r&eacute;vision EMEA) et Hoymiles&nbsp;; prix relev&eacute;s chez Wattuneed, La Centrale Eco et 123Elec via recherche web le 13&nbsp;novembre 2026 (acc&egrave;s direct aux fiches marchandes bloqu&eacute; depuis cet environnement). Produits analys&eacute;s sur fiches techniques, pas test&eacute;s physiquement. Calculs de production et de ROI selon notre <Link href="/methodologie" className="text-green hover:underline">m&eacute;thodologie</Link> (tarif {KWH_PRICE_LABEL}, inflation {KWH_INFLATION_LABEL}, d&eacute;gradation {PANEL_DEGRADATION_LABEL}, Performance Ratio 0,85, Lyon, sud).
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
