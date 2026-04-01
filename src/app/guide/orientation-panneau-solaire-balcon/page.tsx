import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Quelle orientation pour un panneau solaire de balcon ? (Guide 2026)',
  description: 'Sud, est, ouest, nord : quel impact sur la production de votre panneau solaire de balcon ? Coefficients réels, astuces d\'optimisation, et cas concrets.',
};

const faqData = [
  { question: 'Quelle est la meilleure orientation pour un panneau solaire ?', answer: 'Plein sud est l\'orientation idéale en France métropolitaine : elle capte le maximum de soleil tout au long de la journée. C\'est 100% du potentiel de production.' },
  { question: 'Un panneau solaire orienté est ou ouest est-il rentable ?', answer: 'Oui. Un panneau orienté est ou ouest produit environ 80% d\'un panneau plein sud. C\'est moins optimal mais toujours rentable : le ROI passe de ~4 ans (sud) à ~5 ans (est/ouest) pour un kit à 599€.' },
  { question: 'Un panneau solaire orienté nord vaut-il le coup ?', answer: 'Difficilement. Un balcon plein nord ne reçoit que 45% de l\'ensoleillement d\'un balcon sud. La production est très réduite et le ROI peut dépasser 8-10 ans. Ce n\'est généralement pas recommandé.' },
  { question: 'Quelle inclinaison choisir pour son panneau ?', answer: 'En France, l\'inclinaison optimale est de 30-35° par rapport à l\'horizontale. En été, un angle plus faible (27°) est meilleur. En hiver, un angle plus élevé (40-42°) compense la hauteur réduite du soleil.' },
  { question: 'Mon balcon est partiellement ombragé, que faire ?', answer: 'L\'ombrage est plus pénalisant que l\'orientation. Même une ombre partielle peut réduire la production de 20-50%. Identifiez les heures sans ombre (souvent 10h-14h) et positionnez le panneau dans la zone la mieux exposée.' },
];

export default function OrientationPage() {
  return (
    <>
      <SchemaArticle title="Quelle orientation pour un panneau solaire de balcon ?" description="Impact de l'orientation sur la production solaire de balcon." url="https://monbalconsolaire.vercel.app/guide/orientation-panneau-solaire-balcon" datePublished="2026-03-29" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Orientation' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Quelle orientation pour un panneau solaire de balcon ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Sud, sud-est, est, ouest, nord : votre orientation change tout. Voici l&apos;impact réel sur la production, les économies et la rentabilité de votre kit solaire.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>29 mars 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Le résumé en 10 secondes</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Sud = 100% du potentiel. Sud-est/sud-ouest = 93%. Est/ouest = 80%. Nord = 45%. Un kit solaire est rentable dans toutes les orientations sauf nord. L&apos;ombrage est plus pénalisant que l&apos;orientation.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;impact de l&apos;orientation : les chiffres</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">L&apos;orientation de votre balcon détermine combien d&apos;heures de soleil direct votre panneau reçoit chaque jour. En France, le soleil se lève à l&apos;est, culmine au sud à midi, et se couche à l&apos;ouest. Un balcon orienté sud reçoit donc le soleil pendant la plus grande partie de la journée.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Voici les coefficients réels par orientation, basés sur les données PVGIS (Commission européenne) pour la France métropolitaine :</p>

              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Orientation</th>
                    <th className="text-center p-3">Coefficient</th>
                    <th className="text-center p-3">Production (450W, Lyon)</th>
                    <th className="text-center p-3">Économies/an</th>
                    <th className="text-center p-3 rounded-tr-xl">ROI (kit 599€)</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Sud', '100%', '498 kWh', '97 €', '4,3 ans', true],
                      ['Sud-Est', '93%', '463 kWh', '90 €', '4,6 ans', false],
                      ['Sud-Ouest', '93%', '463 kWh', '90 €', '4,6 ans', false],
                      ['Est', '80%', '398 kWh', '77 €', '5,4 ans', false],
                      ['Ouest', '80%', '398 kWh', '77 €', '5,4 ans', false],
                      ['Nord', '45%', '224 kWh', '43 €', '9,6 ans', false],
                    ].map(([o, c, p, e, r, best], i) => (
                      <tr key={i} className={`border-b border-border-light ${best ? 'bg-green-pale/30' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{o} {best && <span className="badge-green ml-2 text-[10px]">Optimal</span>}</td>
                        <td className="text-center p-3 font-mono text-sm font-medium">{c}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{p}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{e}</td>
                        <td className="text-center p-3 font-mono text-sm">{r}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Données PVGIS, inclinaison 35°, tarif EDF 0,1940€/kWh, coefficient de pertes 0,85.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Orientation par orientation : notre analyse</h2>
              <div className="space-y-6">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h3 className="font-bold text-lg text-green mb-2">Sud — L&apos;orientation idéale (100%)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">C&apos;est le jackpot. Votre panneau reçoit le soleil de 9h à 17h en été, avec un pic à midi. La production est maximale et le ROI le plus rapide. Si votre balcon est plein sud, n&apos;hésitez pas une seconde.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Astuce :</strong> en exposition sud, une inclinaison de 30-35° est optimale toute l&apos;année. Vous pouvez laisser le panneau fixe sans ajuster par saison.</p>
                </div>

                <div className="card-lg">
                  <h3 className="font-bold text-lg mb-2">Sud-Est / Sud-Ouest — Excellent (93%)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Seulement 7% de moins que le plein sud. La différence est quasi-imperceptible sur la facture (~7€/an de moins). C&apos;est une excellente orientation pour le solaire.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Particularité sud-est :</strong> la production est concentrée le matin (7h-14h). Idéal si vos appareils énergivores tournent le matin.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-1"><strong>Particularité sud-ouest :</strong> la production est concentrée l&apos;après-midi (11h-18h). Idéal si vous êtes chez vous en fin de journée.</p>
                </div>

                <div className="card-lg">
                  <h3 className="font-bold text-lg mb-2">Est / Ouest — Correct (80%)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">20% de moins que le sud, mais toujours rentable. Le ROI passe de ~4,3 ans à ~5,4 ans pour un kit à 599€. Sur 25 ans de garantie, vous économisez quand même plus de 1 900€.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Conseil :</strong> en exposition est ou ouest, le <Link href="/comparatif/kit-solaire-petit-budget" className="text-green hover:underline">Beem Kit 300W à 299€</Link> est un choix malin : le ROI est atteint en ~4 ans (au lieu de 5,4 pour un kit à 599€), ce qui réduit le risque.</p>
                </div>

                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-lg text-amber-dark mb-2">Nord — Déconseillé (45%)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Un balcon plein nord ne reçoit quasiment jamais de soleil direct. La production est réduite de plus de moitié et le ROI dépasse 9 ans. Sauf si vous avez un très grand balcon avec une zone partiellement exposée, le solaire n&apos;est pas recommandé en exposition nord.</p>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-2"><strong>Alternative :</strong> si vous avez accès à un mur latéral orienté est ou ouest, un kit avec fixation murale (option disponible sur le Sunology PLAY2) peut transformer une situation nord en situation est/ouest.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">L&apos;ombrage : plus important que l&apos;orientation</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Un panneau orienté sud mais partiellement ombragé produit souvent moins qu&apos;un panneau orienté est/ouest sans ombre. L&apos;ombrage est le facteur n°1 de perte de production en environnement urbain (immeubles voisins, arbres, auvents, garde-corps).</p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                {[
                  { t: 'Ombre permanente sur une partie du panneau', impact: '-20 à -50%', desc: 'Un immeuble ou un mur qui projette une ombre fixe sur une partie du panneau. Effet dévastateur car les cellules en série sont toutes affectées.' },
                  { t: 'Ombre temporaire (quelques heures)', impact: '-5 à -15%', desc: 'Un arbre ou un auvent qui crée une ombre pendant 1-2h par jour. Impact modéré si les heures ensoleillées restent suffisantes (10h-14h).' },
                  { t: 'Ombre du garde-corps', impact: '-5 à -10%', desc: 'Le garde-corps du balcon peut projeter une ombre sur le bas du panneau. Inclinez le panneau et éloignez-le du garde-corps si possible.' },
                  { t: 'Réflexion d\'un mur clair', impact: '+5 à +15%', desc: 'Un mur blanc ou clair derrière un panneau bifacial (Sunology PLAY2, Beem On) peut augmenter la production grâce à la lumière réfléchie.' },
                ].map((f, i) => (
                  <div key={i} className="card">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-sm">{f.t}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${f.impact.startsWith('+') ? 'bg-green-lighter text-green' : 'bg-amber-pale text-amber-dark'}`}>{f.impact}</span>
                    </div>
                    <p className="text-xs text-charcoal-light">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment déterminer l&apos;orientation de votre balcon</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Trois méthodes simples pour connaître l&apos;orientation de votre balcon :</p>
              <div className="space-y-3">
                {[
                  { t: 'La boussole du smartphone', d: 'Ouvrez l\'app Boussole sur iPhone ou une app boussole sur Android. Placez-vous face à votre balcon et notez la direction. Si l\'aiguille pointe vers 180° (sud), votre balcon est plein sud.' },
                  { t: 'Google Maps', d: 'Trouvez votre adresse sur Google Maps en vue satellite. Le nord est toujours en haut de l\'écran. Identifiez de quel côté se trouve votre balcon par rapport au bâtiment.' },
                  { t: 'L\'observation du soleil', d: 'Si votre balcon est ensoleillé entre 11h et 15h, il est orienté sud ou sud-est/sud-ouest. Si le soleil arrive le matin (avant 11h) et disparaît l\'après-midi, c\'est une orientation est. L\'inverse = ouest.' },
                ].map((m, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{i+1}. {m.t}</h4>
                    <p className="text-xs text-charcoal-light">{m.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Testez votre orientation en 30 secondes</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur prend en compte votre ville ET votre orientation pour une estimation personnalisée.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies →</Link>
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
              <p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> données PVGIS (Commission européenne), tarif EDF février 2026. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
