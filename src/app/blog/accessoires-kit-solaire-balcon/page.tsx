import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: '5 accessoires indispensables pour votre kit solaire de balcon (2026)',
  description: 'Wattmetre, rallonge etanche, prise connectee, support reglable, protege-surtension : les accessoires qui ameliorent votre installation solaire de balcon.',
};

const faqData = [
  { question: 'Faut-il acheter des accessoires avec son kit solaire ?', answer: 'Non, les kits sont complets et fonctionnels tels quels. Mais certains accessoires ameliorent le suivi (wattmetre, prise connectee) ou la securite (protege-surtension). Ce sont des plus, pas des obligations.' },
  { question: 'Quel est l\'accessoire le plus utile ?', answer: 'La prise connectee avec suivi de consommation (type TP-Link Tapo P110, ~15 euros). Elle vous montre en temps reel combien votre panneau produit. C\'est motivant et ca aide a optimiser.' },
  { question: 'Les rallonges standard fonctionnent-elles ?', answer: 'Oui, mais si votre panneau est en exterieur et la prise a l\'interieur, prenez une rallonge etanche IP44 minimum. L\'eau + electricite = danger. Comptez 15-25 euros pour une rallonge etanche de 5m.' },
];

export default function AccessoiresPage() {
  return (
    <>
      <SchemaArticle title="5 accessoires indispensables pour votre kit solaire de balcon" description="Les accessoires qui ameliorent votre kit solaire de balcon." url="https://monbalconsolaire.fr/blog/accessoires-kit-solaire-balcon" datePublished="2026-04-04" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Accessoires' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Equipement</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">5 accessoires indispensables pour votre kit solaire de balcon</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Votre kit solaire fonctionne tout seul. Mais ces 5 accessoires &agrave; petit prix am&eacute;liorent le suivi, la s&eacute;curit&eacute; et la production. Budget total : moins de 80&euro;.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>4 avril 2026</span><span>&middot;</span><span>6 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Les 5 accessoires : prise connect&eacute;e (15&euro;), rallonge &eacute;tanche (20&euro;), prot&egrave;ge-surtension (15&euro;), support r&eacute;glable (20-30&euro;), wattm&egrave;tre (10&euro;). Aucun n&apos;est obligatoire mais tous am&eacute;liorent l&apos;exp&eacute;rience.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 5 accessoires</h2>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Prise connect\u00e9e avec suivi de consommation', price: '~15 \u20ac', why: 'L\'accessoire le plus utile. Une prise Wi-Fi comme la TP-Link Tapo P110 se branche entre votre panneau et la prise murale. Elle mesure en temps r\u00e9el combien votre panneau produit (en W) et combien il a produit sur la journ\u00e9e/semaine/mois (en kWh). Vous suivez tout depuis l\'app sur votre t\u00e9l\u00e9phone.', tip: 'Certains kits (Beem, Sunology) incluent d\u00e9j\u00e0 un suivi via leur app. V\u00e9rifiez avant d\'acheter.' },
                  { num: '2', title: 'Rallonge \u00e9tanche (IP44 minimum)', price: '~20 \u20ac', why: 'Si votre prise ext\u00e9rieure est loin du panneau, ou si vous devez passer par une fen\u00eatre, une rallonge \u00e9tanche est indispensable. Prenez au minimum une norme IP44 (prot\u00e9g\u00e9e contre les projections d\'eau). Longueur recommand\u00e9e : 3 \u00e0 5 m\u00e8tres.', tip: 'Ne jamais utiliser une rallonge int\u00e9rieure standard en ext\u00e9rieur. Le risque \u00e9lectrique est r\u00e9el.' },
                  { num: '3', title: 'Prot\u00e8ge-surtension / parafoudre', price: '~15 \u20ac', why: 'Un multiprise parafoudre prot\u00e8ge votre micro-onduleur en cas d\'orage ou de surtension sur le r\u00e9seau. Ce n\'est pas obligatoire mais pour 15\u20ac, \u00e7a peut sauver un \u00e9quipement \u00e0 600\u20ac. Prenez un mod\u00e8le avec t\u00e9moin lumineux de protection active.', tip: 'Choisissez un mod\u00e8le avec au moins 1 000 joules de protection.' },
                  { num: '4', title: 'Support r\u00e9glable en inclinaison', price: '~20-30 \u20ac', why: 'La plupart des kits incluent un support basique. Mais un support avec inclinaison r\u00e9glable (15-35\u00b0) permet d\'optimiser l\'angle selon la saison. En \u00e9t\u00e9, un angle plus faible (20-25\u00b0) est optimal. En hiver, un angle plus \u00e9lev\u00e9 (35-40\u00b0) compense la hauteur r\u00e9duite du soleil.', tip: 'Les supports NuaSol et Zelsius sur Amazon sont bien not\u00e9s et compatibles avec la plupart des panneaux.' },
                  { num: '5', title: 'Wattm\u00e8tre simple', price: '~10 \u20ac', why: 'Plus basique qu\'une prise connect\u00e9e : un wattm\u00e8tre se branche sur la prise et affiche la puissance instantan\u00e9e (en W) et la consommation cumul\u00e9e (en kWh) sur un petit \u00e9cran. Pas besoin de Wi-Fi ni d\'app. Id\u00e9al pour les technophobes.', tip: 'Le mod\u00e8le le plus vendu sur Amazon co\u00fbte environ 10\u20ac. Simple, fiable, sans app.' },
                ].map((a) => (
                  <div key={a.num} className="card-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-green text-white flex items-center justify-center font-extrabold">{a.num}</div>
                      <div><h3 className="font-bold text-lg">{a.title}</h3><span className="text-sm font-mono text-amber-dark">{a.price}</span></div>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-2">{a.why}</p>
                    <div className="bg-cream/50 rounded-xl p-3"><p className="text-xs text-stone"><strong>Conseil :</strong> {a.tip}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">R&eacute;capitulatif des co&ucirc;ts</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Accessoire</th><th className="text-center p-3">Prix</th><th className="text-center p-3 rounded-tr-xl">Indispensable ?</th></tr></thead>
                  <tbody>
                    {[['Prise connect\u00e9e (TP-Link Tapo P110)', '~15 \u20ac', '\u2b50 Tr\u00e8s recommand\u00e9'], ['Rallonge \u00e9tanche IP44 (5m)', '~20 \u20ac', 'Si prise loin'], ['Prot\u00e8ge-surtension', '~15 \u20ac', 'Recommand\u00e9'], ['Support r\u00e9glable', '~25 \u20ac', 'Optionnel'], ['Wattm\u00e8tre', '~10 \u20ac', 'Si pas de prise connect\u00e9e'], ['Total', '~85 \u20ac', '\u2014']].map(([a, p, i], idx) => (
                      <tr key={idx} className={`border-b border-border-light ${idx === 5 ? 'bg-green-pale/30 font-semibold' : idx % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3">{a}</td><td className="text-center p-3 font-mono">{p}</td><td className="text-center p-3">{i}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;il ne faut PAS acheter</h2>
              <div className="space-y-3">
                {[
                  { t: 'Une batterie \u00ab pas ch\u00e8re \u00bb sur Amazon', d: 'Les batteries noname \u00e0 100-200\u20ac n\'ont pas les certifications de s\u00e9curit\u00e9 n\u00e9cessaires. Le risque d\'incendie est r\u00e9el. Si vous voulez une batterie, prenez une marque reconnue (Sunology VAULT, EcoFlow).' },
                  { t: 'Un onduleur s\u00e9par\u00e9', d: 'Les kits plug-and-play int\u00e8grent d\u00e9j\u00e0 un micro-onduleur. Ajouter un onduleur suppl\u00e9mentaire est inutile et peut \u00eatre dangereux.' },
                  { t: 'Des panneaux suppl\u00e9mentaires non compatibles', d: 'Ne branchez pas un panneau d\'une autre marque sur le micro-onduleur de votre kit. Les sp\u00e9cifications doivent correspondre.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-red-400"><h4 className="font-bold text-sm mb-1">{p.t}</h4><p className="text-xs text-charcoal-light">{p.d}</p></div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">D&apos;abord, choisissez votre kit</p>
              <p className="text-sm text-charcoal-light mb-4">Calculez vos &eacute;conomies et trouvez le kit adapt&eacute; &agrave; votre balcon.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}><summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary><p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p></details>
                ))}
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light"><p className="text-xs text-stone leading-relaxed"><strong>Note :</strong> les prix sont indicatifs (Amazon, avril 2026). <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p></div>
          </div>
        </div>
      </article>
    </>
  );
}
