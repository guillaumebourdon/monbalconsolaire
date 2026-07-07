import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Meilleures prises connect\u00e9es pour suivi solaire 2026',
  description: 'Comparatif des meilleures prises connect\u00e9es pour mesurer la production de votre kit solaire de balcon : Tapo P110, Shelly Plug S, Meross, GreenSun. Prix, fonctions, verdict.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/prises-connectees-suivi-solaire',
  },
};

const faqData = [
  {
    question: 'Pourquoi utiliser une prise connect\u00e9e avec un kit solaire ?',
    answer: 'Pour mesurer exactement combien produit votre kit en temps r\u00e9el (en watts) et sur la dur\u00e9e (kWh/jour, mois, ann\u00e9e). L\'app de votre kit (Sunology STREAM, Beem App) le fait d\u00e9j\u00e0 partiellement, mais une prise connect\u00e9e est plus pr\u00e9cise, ind\u00e9pendante du fabricant, et permet de comparer avec votre consommation r\u00e9elle.',
  },
  {
    question: 'O\u00f9 brancher la prise connect\u00e9e ?',
    answer: 'Entre la prise murale et le c\u00e2ble de votre kit solaire. La prise mesure tout ce qui passe : quand votre panneau produit, vous voyez les watts inject\u00e9s. Quand il ne produit pas (nuit), la prise affiche 0 W. C\'est la m\u00e9thode la plus simple pour v\u00e9rifier que votre kit fonctionne correctement.',
  },
  {
    question: 'La prise connect\u00e9e mesure-t-elle la production OU la consommation ?',
    answer: 'Les deux, selon ce que vous branchez dessus. Branch\u00e9e entre le kit solaire et la prise murale, elle mesure la production. Branch\u00e9e sur un appareil (frigo, box), elle mesure la consommation. Certaines prises comme la Tapo P410M d\u00e9tectent m\u00eame le sens du courant automatiquement.',
  },
  {
    question: 'Faut-il une prise ext\u00e9rieure IP44 ?',
    answer: 'Seulement si votre prise murale de balcon est expos\u00e9e aux intemp\u00e9ries. Si le branchement est sous un auvent ou \u00e0 l\'int\u00e9rieur (c\u00e2ble qui passe par la fen\u00eatre), une prise standard suffit. Pour une terrasse sans abri, prenez une prise IP44 (Shelly Outdoor, Tapo P410M).',
  },
  {
    question: 'La prise connect\u00e9e consomme-t-elle de l\'\u00e9lectricit\u00e9 ?',
    answer: 'Oui, mais tr\u00e8s peu : 0,5 \u00e0 1,5 W en veille (WiFi actif). Sur un an, \u00e7a repr\u00e9sente 4 \u00e0 13 kWh, soit 0,80 \u00e0 2,50 \u20ac. N\u00e9gligeable compar\u00e9 aux 400-900 kWh que produit votre kit.',
  },
];

const prises = [
  {
    nom: 'TP-Link Tapo P110',
    prix: '~15 \u20ac',
    puissanceMax: '3 680 W (16A)',
    connectivite: 'WiFi 2,4 GHz',
    app: 'Tapo (iOS/Android)',
    ip: 'Int\u00e9rieur',
    compatible: 'Alexa, Google Home, Siri',
    verdict: 'Meilleur rapport qualit\u00e9-prix',
    note: '9/10',
    detail: 'La r\u00e9f\u00e9rence. 15 \u20ac, suivi kWh en temps r\u00e9el, historique jour/semaine/mois/ann\u00e9e, export des donn\u00e9es. L\'app Tapo est excellente. C\'est la prise la plus utilis\u00e9e par la communaut\u00e9 solaire de balcon.',
  },
  {
    nom: 'Shelly Plus Plug S',
    prix: '~18 \u20ac',
    puissanceMax: '2 500 W (10A)',
    connectivite: 'WiFi + Bluetooth',
    app: 'Shelly (iOS/Android)',
    ip: 'Int\u00e9rieur',
    compatible: 'Alexa, Google Home, Home Assistant',
    verdict: 'La plus geek / domotique',
    note: '8.5/10',
    detail: 'Compatible Home Assistant et MQTT, parfaite pour les amateurs de domotique. Mesure pr\u00e9cise \u00e0 0,1 W pr\u00e8s. Limit\u00e9e \u00e0 10A (2 500 W) mais largement suffisant pour un kit solaire (800 W max). API ouverte.',
  },
  {
    nom: 'Tapo P410M (ext\u00e9rieur)',
    prix: '~25 \u20ac',
    puissanceMax: '3 680 W (16A)',
    connectivite: 'WiFi + Matter',
    app: 'Tapo',
    ip: 'IP44 (ext\u00e9rieur)',
    compatible: 'Alexa, Google Home, Apple Home (Matter)',
    verdict: 'La meilleure pour terrasse/balcon expos\u00e9',
    note: '9/10',
    detail: 'Version ext\u00e9rieure de la Tapo P110. IP44 (r\u00e9siste aux \u00e9claboussures), d\u00e9tecte le sens du courant (production vs consommation). Protocole Matter pour compatibilit\u00e9 universelle. Id\u00e9ale si votre prise de balcon est expos\u00e9e.',
  },
  {
    nom: 'Meross MSS310',
    prix: '~16 \u20ac',
    puissanceMax: '3 680 W (16A)',
    connectivite: 'WiFi 2,4 GHz',
    app: 'Meross (iOS/Android)',
    ip: 'Int\u00e9rieur',
    compatible: 'Alexa, Google Home, Apple Home',
    verdict: 'Alternative solide',
    note: '8/10',
    detail: 'App claire avec graphiques de production/consommation intuitifs. Compatible Apple HomeKit nativement. L\u00e9g\u00e8rement moins pr\u00e9cise que la Tapo P110 sur les tr\u00e8s faibles puissances (< 5 W).',
  },
  {
    nom: 'GreenSun Smart Plug',
    prix: '~20 \u20ac',
    puissanceMax: '3 680 W (16A)',
    connectivite: 'WiFi 2,4 GHz',
    app: 'Smart Life / Tuya',
    ip: 'Int\u00e9rieur',
    compatible: 'Alexa, Google Home',
    verdict: 'Con\u00e7ue pour le solaire',
    note: '7.5/10',
    detail: 'La seule prise commercialis\u00e9e sp\u00e9cifiquement pour le suivi solaire de balcon. D\u00e9tecte production vs consommation. App Tuya/Smart Life correcte mais moins raffin\u00e9e que Tapo. Int\u00e9ressante pour le positionnement, mais la Tapo P110 reste meilleure techniquement.',
  },
];

export default function PrisesConnecteesPage() {
  return (
    <>
      <SchemaArticle
        title="Meilleures prises connect\u00e9es pour suivi solaire 2026"
        description="Comparatif des prises connect\u00e9es pour mesurer la production solaire de balcon."
        url="https://monbalconsolaire.fr/blog/prises-connectees-suivi-solaire"
        datePublished="2026-05-20"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Prises connect\u00e9es suivi solaire' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Prises connect\u00e9es suivi solaire' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">S&eacute;lection 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Meilleures prises connect&eacute;es pour suivi solaire 2026
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre kit solaire produit-il vraiment ce qu&apos;il promet ? Une prise connect&eacute;e &agrave; <strong>15-25 &euro;</strong> vous donne la r&eacute;ponse en temps r&eacute;el : watts produits, kWh cumul&eacute;s, historique complet. Voici les 5 meilleures pour le suivi solaire de balcon.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>20 mai 2026</span>
              <span>&middot;</span>
              <span>8 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Notre top 3 en bref</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong className="text-green">{'\u2713'} Tapo P110 (15 &euro;)</strong> &mdash; Le meilleur rapport qualit&eacute;-prix. Suivi kWh complet, app excellente. Le choix par d&eacute;faut.</li>
              <li><strong className="text-green">{'\u2713'} Tapo P410M (25 &euro;)</strong> &mdash; Version ext&eacute;rieure IP44 + Matter. Pour les balcons/terrasses expos&eacute;s.</li>
              <li><strong className="text-green">{'\u2713'} Shelly Plus Plug S (18 &euro;)</strong> &mdash; Pour les fans de domotique. Compatible Home Assistant, API ouverte.</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi une prise connect&eacute;e pour le solaire ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les apps fournies avec les kits (Sunology STREAM, Beem App, MyDualSun) donnent d&eacute;j&agrave; des donn&eacute;es de production. Mais une prise connect&eacute;e apporte <strong>3 avantages suppl&eacute;mentaires</strong> :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Mesure ind&eacute;pendante et v&eacute;rifiable</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">L&apos;app du fabricant peut surestimer la production (c&apos;est dans leur int&eacute;r&ecirc;t commercial). La prise mesure les watts r&eacute;els qui passent dans le c&acirc;ble. Z&eacute;ro biais.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Diagnostic des probl&egrave;mes</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si votre production chute, la prise le montre imm&eacute;diatement : 0 W en plein soleil = micro-onduleur en panne. 50 W au lieu de 300 W = ombre ou salissure. <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green hover:underline">Guide diagnostic complet</Link>.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Historique long terme</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Les apps Tapo et Shelly conservent un historique illimit&eacute;. Apr&egrave;s 1 an, vous avez la production r&eacute;elle mois par mois, comparable aux pr&eacute;visions PVGIS. Preuve concr&egrave;te de rentabilit&eacute;.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comparatif des 5 meilleures prises</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Prise</th>
                      <th className="text-center p-2.5 font-semibold">Prix</th>
                      <th className="text-center p-2.5 font-semibold">Puissance max</th>
                      <th className="text-center p-2.5 font-semibold">IP</th>
                      <th className="text-center p-2.5 font-semibold">Note</th>
                      <th className="text-center p-2.5 rounded-tr-xl font-semibold">Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prises.map((p, i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 0 ? 'bg-green-pale/20 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">{p.nom}</td>
                        <td className="text-center p-2.5 font-mono">{p.prix}</td>
                        <td className="text-center p-2.5 font-mono">{p.puissanceMax}</td>
                        <td className="text-center p-2.5">{p.ip}</td>
                        <td className="text-center p-2.5 font-mono text-green">{p.note}</td>
                        <td className="text-center p-2.5 text-amber-dark">{p.verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {prises.map((p, i) => (
              <section key={i}>
                <h2 className="text-2xl font-extrabold mb-4">{i + 1}. {p.nom}</h2>
                <div className="card-lg">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${i === 0 ? 'bg-green text-white' : 'bg-amber-pale text-amber-dark'}`}>{p.verdict}</span>
                      <div className="mt-2 font-mono font-bold text-green text-xl">{p.note}</div>
                    </div>
                    <div className="font-mono font-bold text-lg">{p.prix}</div>
                  </div>
                  <p className="text-sm text-charcoal-light leading-relaxed mb-4">{p.detail}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                    <div className="bg-cream rounded-brand p-2"><span className="text-stone">Puissance max</span><br /><strong>{p.puissanceMax}</strong></div>
                    <div className="bg-cream rounded-brand p-2"><span className="text-stone">Connectivit&eacute;</span><br /><strong>{p.connectivite}</strong></div>
                    <div className="bg-cream rounded-brand p-2"><span className="text-stone">App</span><br /><strong>{p.app}</strong></div>
                    <div className="bg-cream rounded-brand p-2"><span className="text-stone">Protection</span><br /><strong>{p.ip}</strong></div>
                    <div className="bg-cream rounded-brand p-2 col-span-2"><span className="text-stone">Compatible</span><br /><strong>{p.compatible}</strong></div>
                  </div>
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation par profil</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Vous voulez juste mesurer votre production</h4>
                  <p className="text-xs text-charcoal-light">Prenez la <strong>Tapo P110</strong> &agrave; 15 &euro;. C&apos;est la plus populaire de la communaut&eacute; solaire, l&apos;app est excellente, et c&apos;est le meilleur rapport qualit&eacute;-prix du march&eacute;.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Votre prise de balcon est expos&eacute;e</h4>
                  <p className="text-xs text-charcoal-light">Prenez la <strong>Tapo P410M</strong> &agrave; 25 &euro;. IP44, r&eacute;siste aux &eacute;claboussures et au gel. Compatible Matter pour l&apos;&eacute;cosyst&egrave;me Apple Home.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">Vous &ecirc;tes fan de domotique</h4>
                  <p className="text-xs text-charcoal-light">Prenez la <strong>Shelly Plus Plug S</strong> &agrave; 18 &euro;. Compatible Home Assistant, MQTT, API ouverte. Pr&eacute;cision &agrave; 0,1 W. Le choix des geeks.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment lire les donn&eacute;es de votre prise</h2>
              <div className="card-lg bg-cream/40">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>200-380 W &agrave; midi par beau temps</strong> (kit 450 Wc) = production normale, tout va bien</li>
                  <li>&bull; <strong>50-150 W par temps couvert</strong> = normal, le panneau produit d&egrave;s qu&apos;il fait jour</li>
                  <li>&bull; <strong>0 W en plein soleil</strong> = probl&egrave;me : micro-onduleur arr&ecirc;t&eacute;, disjoncteur saut&eacute;, ou c&acirc;ble d&eacute;branch&eacute;</li>
                  <li>&bull; <strong>Production totale 1-2 kWh/jour en &eacute;t&eacute;</strong> (kit 450 Wc, sud) = dans la norme</li>
                  <li>&bull; <strong>Production totale 0,3-0,6 kWh/jour en hiver</strong> = normal pour d&eacute;cembre-janvier</li>
                </ul>
              </div>
              <p className="text-xs text-stone mt-3">
                Si vos chiffres sont nettement inf&eacute;rieurs, consultez notre <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="text-green hover:underline">guide de diagnostic en 7 points</Link>.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien devrait produire votre kit ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Comparez vos mesures de prise connect&eacute;e avec la production th&eacute;orique de votre d&eacute;partement.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production th&eacute;orique &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/accessoires-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">8 accessoires indispensables pour votre kit solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Prise connect&eacute;e, rallonge, parafoudre, support</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic en 7 points avec une prise connect&eacute;e</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation : le calculer et l&apos;effacer</h4>
                  <p className="text-xs text-charcoal-light mt-1">Utilisez votre prise pour mesurer votre talon</p>
                </Link>
                <Link href="/blog/consommation-veille-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Consommation en veille du kit solaire : mesure et impact ROI</h4>
                  <p className="text-xs text-charcoal-light mt-1">La prise connect&eacute;e pour mesurer la veille nocturne du micro-onduleur et du hub</p>
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
                <strong>M&eacute;thodologie :</strong> prix constat&eacute;s Amazon/fabricants (mai 2026), retours utilisateurs forum-photovoltaique.fr, Clubic, Les Alexiens. Article ind&eacute;pendant.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
