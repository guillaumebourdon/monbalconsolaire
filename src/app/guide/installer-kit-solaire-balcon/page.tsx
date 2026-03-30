import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Comment installer un kit solaire sur un balcon : guide pas à pas (2026)',
  description: 'Guide d\'installation complet pour poser un kit solaire plug-and-play sur votre balcon. Étapes, erreurs à éviter, sécurité, branchement électrique.',
};

const faqData = [
  { question: 'Faut-il un électricien pour installer un kit solaire de balcon ?', answer: 'Non. Les kits plug-and-play sont conçus pour être installés par n\'importe qui. Vous branchez sur une prise standard 230V avec terre. Aucune compétence technique n\'est requise.' },
  { question: 'Sur quelle prise brancher mon panneau solaire ?', answer: 'Utilisez une prise murale avec terre, protégée par un disjoncteur différentiel 30mA. Ne jamais utiliser une multiprise, une rallonge non adaptée, ou une prise sans terre.' },
  { question: 'Peut-on installer un panneau solaire sur un mur ?', answer: 'Oui. La plupart des kits (Sunology PLAY2, Beem On) proposent un kit de fixation murale en option. L\'installation murale est même recommandée quand l\'espace au sol est limité.' },
];

export default function InstallerKitPage() {
  return (
    <>
      <SchemaArticle title="Comment installer un kit solaire sur un balcon : guide pas à pas" description="Guide d'installation complet pour kit solaire de balcon." url="https://monbalconsolaire.vercel.app/guide/installer-kit-solaire-balcon" datePublished="2026-03-30" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Installation pas à pas' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Comment installer un kit solaire sur un balcon : guide pas à pas</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">De l&apos;ouverture du carton au premier kWh produit : toutes les étapes pour installer votre kit solaire plug-and-play sans erreur.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>30 mars 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Ce dont vous avez besoin</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-charcoal-light">
              <div>
                <p className="font-semibold text-charcoal mb-1">Inclus dans le kit :</p>
                <ul className="space-y-1">
                  <li>→ Panneau solaire</li>
                  <li>→ Micro-onduleur</li>
                  <li>→ Câble + prise</li>
                  <li>→ Support/châssis</li>
                  <li>→ Ballasts (lestage)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-charcoal mb-1">Vous fournissez :</p>
                <ul className="space-y-1">
                  <li>→ Une prise murale avec terre</li>
                  <li>→ De l&apos;eau ou du sable (ballasts)</li>
                  <li>→ Votre smartphone (app de suivi)</li>
                  <li>→ 5-15 minutes de votre temps</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 6 étapes d&apos;installation</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Choisissez l\'emplacement', duration: '2 min', desc: 'Identifiez l\'endroit de votre balcon qui reçoit le plus de soleil. Idéalement, orientez le panneau vers le sud (ou sud-est/sud-ouest). Évitez les zones ombragées par un auvent, un mur ou un arbre. Assurez-vous que le sol est plat et stable.', tip: 'Testez en observant votre balcon entre 10h et 16h : où est le soleil le plus longtemps ?' },
                  { step: 2, title: 'Déballez et dépliez le support', duration: '1-3 min', desc: 'Sortez le panneau de son carton. Pour un Sunology PLAY2 : le châssis est pré-assemblé, vous n\'avez qu\'à déplier les pieds. Pour un Beem On : assemblez les montants du support selon la notice (tournevis parfois nécessaire).', tip: 'Gardez le carton d\'origine. Si vous êtes locataire, vous en aurez besoin pour le déménagement.' },
                  { step: 3, title: 'Réglez l\'inclinaison', duration: '1 min', desc: 'La plupart des kits proposent 2 à 3 angles d\'inclinaison (27°, 35°, 42°). En France métropolitaine, l\'angle optimal varie selon la saison : 27-30° en été, 35° au printemps/automne, 40-42° en hiver. En cas de doute, 35° est un bon compromis toute l\'année.', tip: 'Si vous ne comptez pas changer l\'angle régulièrement, choisissez 35° et oubliez-le.' },
                  { step: 4, title: 'Lestez le panneau', duration: '3-5 min', desc: 'Remplissez les ballasts d\'eau ou de sable pour ancrer le panneau au sol. Les ballasts du Sunology PLAY2 font 10 litres chacun (20 kg au total). Cette étape est essentielle : elle permet au panneau de résister aux vents jusqu\'à 150 km/h.', tip: 'Le sable est plus lourd que l\'eau à volume égal et ne gèle pas en hiver. Si possible, préférez le sable.' },
                  { step: 5, title: 'Branchez la prise', duration: '30 sec', desc: 'Connectez le câble du micro-onduleur à une prise murale 230V avec terre. Le panneau commence immédiatement à produire de l\'électricité. C\'est aussi simple que brancher un appareil électroménager.', tip: null },
                  { step: 6, title: 'Configurez l\'app de suivi', duration: '2-5 min', desc: 'Téléchargez l\'application du fabricant (Sunology STREAM ou Beem App). Connectez le micro-onduleur à votre WiFi via Bluetooth. Vous verrez votre production en temps réel dès les premières minutes.', tip: 'Placez-vous près du panneau lors de l\'appairage Bluetooth pour une connexion optimale.' },
                ].map((s) => (
                  <div key={s.step} className="card-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-green text-white flex items-center justify-center font-extrabold">{s.step}</div>
                      <div>
                        <h3 className="font-bold text-lg">{s.title}</h3>
                        <span className="text-xs text-stone font-mono">{s.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed">{s.desc}</p>
                    {s.tip && (
                      <div className="mt-3 p-3 bg-amber-pale/30 rounded-brand text-xs text-amber-dark">
                        <strong>Astuce :</strong> {s.tip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les erreurs de sécurité à éviter</h2>
              <div className="space-y-3">
                {[
                  { t: 'Ne jamais utiliser une multiprise', d: 'Les kits solaires doivent être branchés directement sur une prise murale avec terre. Une multiprise peut surchauffer et créer un risque d\'incendie.' },
                  { t: 'Vérifiez votre disjoncteur différentiel', d: 'Votre circuit doit être protégé par un différentiel 30mA. C\'est le cas dans la majorité des logements aux normes, mais vérifiez votre tableau électrique en cas de doute.' },
                  { t: 'Ne dépassez pas 900W par circuit', d: 'La norme NF C 15-100 (mise à jour sept. 2025) limite la puissance à 900W par circuit de prise. Un seul kit (450-500W) est largement dans les clous. Pour 2 kits, vérifiez qu\'ils sont sur des circuits différents.' },
                  { t: 'Ne manipulez jamais le micro-onduleur sous tension', d: 'Si vous devez intervenir sur le micro-onduleur, débranchez d\'abord la prise, puis attendez 5 minutes. Le micro-onduleur contient des condensateurs qui restent chargés quelques minutes.' },
                ].map((e, i) => (
                  <div key={i} className="card border-l-4 border-l-red-400">
                    <h4 className="font-bold text-sm mb-1">{e.t}</h4>
                    <p className="text-xs text-charcoal-light">{e.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Après l&apos;installation : la déclaration Enedis</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Dans le mois suivant l&apos;installation, vous devez faire une déclaration CACSI (Convention d&apos;Autoconsommation Sans Injection) auprès d&apos;Enedis. C&apos;est gratuit, purement informatif (pas d&apos;accord à obtenir), et ça prend 2 minutes en ligne sur le site d&apos;Enedis.</p>
              <p className="text-charcoal-light leading-relaxed">Si vous avez choisi l&apos;option Beem ZEN (49€), Beem s&apos;occupe de cette démarche pour vous.</p>
              <p className="text-charcoal-light leading-relaxed mt-4">Pour plus de détails sur la réglementation : <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline">notre guide des droits des locataires →</Link></p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Prêt à installer ? Vérifiez d&apos;abord le potentiel de votre balcon.</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes économies →</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> notices d&apos;installation Sunology et Beem, norme NF C 15-100. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
