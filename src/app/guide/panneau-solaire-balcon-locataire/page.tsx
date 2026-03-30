import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Panneau solaire balcon locataire : droits, regles et astuces (2026)',
  description: 'Vous etes locataire et vous voulez un panneau solaire sur votre balcon ? Droits, réglementation copropriété, démarchés, et kits adaptés. Guide complet 2026.',
};

const faqData = [
  { question: 'Ai-je le droit d\'installér un panneau solaire sur mon balcon en tant que locataire ?', answer: 'Oui, à condition que l\'installation soit amovible (pas de perçage, pas de modification du batiment). Un kit pose au sol ou en appui sur la rambarde sans fixation permanente ne nécessite pas l\'accord du propriétaire.' },
  { question: 'Faut-il prévenir mon propriétaire ?', answer: 'Legalement non, si l\'installation est amovible. Par courtoisie et pour éviter tout malentendu, un simple message informatif est recommandé. Certains propriétaires apprecient meme l\'initiative (ca valorise le logement).' },
  { question: 'Et la copropriété ?', answer: 'Si votre kit est pose au sol sur votre balcon sans modifiér l\'aspect du batiment, la copropriété n\'a pas son mot à dire. Si vous fixez le panneau en facade ou sur la rambarde de maniere visible et permanente, il faut obtenir l\'accord de l\'assemblee générale des copropriétaires.' },
  { question: 'Que se passe-t-il si le syndic refuse ?', answer: 'Le syndic ne peut refuser une installation amovible qui ne modifié pas les parties communes. Si le refus concerne une fixation en facade, vous pouvez proposer un kit au sol (Sunology PLAY2 avec ballasts) qui ne nécessite aucune autorisation.' },
  { question: 'Puis-je emporter mon panneau en demenageant ?', answer: 'Oui, c\'est l\'un des grands avantages des kits plug-and-play. Il suffit de debranchér, vider les ballasts, et emmener le kit dans votre nouveau logement. Pensez à refaire la déclaration CACSI aupres d\'Enedis pour la nouvelle adresse.' },
];

export default function LocatairePage() {
  return (
    <>
      <SchemaArticle title="Panneau solaire balcon locataire : droits, regles et astuces" description="Guide complet pour les locataires souhaitant installér un panneau solaire sur leur balcon." url="https://monbalconsolaire.vercel.app/guide/panneau-solaire-balcon-locataire" datePublished="2026-03-30" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: "Guides", href: "/guide" }, { label: "Locataires" }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide locataire</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Panneau solaire balcon locataire : droits, regles et astuces</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Vous etes locataire et vous voulez reduire votre facture d&apos;électricité avec un panneau solaire ? Bonne nouvelle : c&apos;est possible, legal et simple. Voici tout ce qu&apos;il faut savoir.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>30 mars 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel à retenir</h2>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li className="flex gap-2"><span className="text-green font-bold">&check;</span> Oui, un locataire peut installér un kit solaire plug-and-play sur son balcon</li>
              <li className="flex gap-2"><span className="text-green font-bold">&check;</span> Aucune autorisation du propriétaire si l&apos;installation est amovible</li>
              <li className="flex gap-2"><span className="text-green font-bold">&check;</span> Aucune autorisation de la copropriété si ca ne modifié pas l&apos;aspect du batiment</li>
              <li className="flex gap-2"><span className="text-green font-bold">&check;</span> Seule obligation : déclaration CACSI aupres d&apos;Enedis (2 min en ligne)</li>
              <li className="flex gap-2"><span className="text-green font-bold">&check;</span> Le kit est transportable : vous l&apos;emmenez en demenageant</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Locataire et panneau solaire : ce que dit la loi</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le principe juridique est simple : un locataire à le droit de jouir de son logement comme il l&apos;entend, à condition de ne pas le dégrader et de le restituer en bon etat. Un kit solaire plug-and-play <strong>amovible</strong> — c&apos;est-a-dire pose au sol sur le balcon sans perçage, sans fixation permanente, et retirable sans laisser de traces — ne constitue pas une modification du logement.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">C&apos;est exactement comme poser un barbecue, une jardiniere ou un meuble sur votre balcon : vous n&apos;avez pas besoin de l&apos;accord du propriétaire.</p>

              <div className="card bg-amber-pale/30 border-amber/10 my-6">
                <p className="text-sm text-amber-dark"><strong>Attention :</strong> si vous percez le mur ou la rambarde pour fixer le panneau, cela devient une modification du logement. Vous aurez besoin de l&apos;accord ecrit du propriétaire ET potentiellement de la copropriété. Privilegiez les kits avec ballasts (lestage au sol) pour éviter ce probleme.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Copropriété : quand faut-il demander ?</h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2 text-green">Pas besoin d&apos;autorisation</h4>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&rarr; Kit pose au sol sur le balcon</li>
                    <li>&rarr; Kit en appui contre la rambarde (sans fixation)</li>
                    <li>&rarr; Kit non visible depuis la rue</li>
                    <li>&rarr; Kit amovible sans modification</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2 text-amber-dark">Autorisation nécessaire</h4>
                  <ul className="text-xs text-charcoal-light space-y-1">
                    <li>&rarr; Fixation permanente en facade</li>
                    <li>&rarr; Percage du mur ou de la rambarde</li>
                    <li>&rarr; Installation visible depuis la rue qui modifié l&apos;aspect</li>
                    <li>&rarr; Installation en zone classée (monuments historiques)</li>
                  </ul>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">En cas de doute, la regle est simple : si vous pouvez tout retirer en 5 minutes sans laisser de traces, vous n&apos;avez pas besoin d&apos;autorisation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les kits les plus adaptés aux locataires</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le critère n&deg;1 pour un locataire : l&apos;amovibilite. Voici les kits les mieux adaptés :</p>
              <div className="space-y-4 my-6">
                <div className="card-lg border-green/15 bg-green-pale/10">
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <div><div className="badge-green mb-1 text-[10px]">Recommandé locataires</div><h4 className="font-bold">Sunology PLAY2</h4><p className="text-xs text-stone">Ballasts inclus, aucun perçage, 100% amovible, 1 min d&apos;installation</p></div>
                    <span className="font-mono font-bold text-green text-lg">599&euro;</span>
                  </div>
                </div>
                <div className="card-lg">
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <div><div className="badge-amber mb-1 text-[10px]">Petit budget</div><h4 className="font-bold">Beem Kit 300W</h4><p className="text-xs text-stone">4 petits panneaux, s&apos;adaptént aux espaces étroits, amovibles</p></div>
                    <span className="font-mono font-bold text-amber-dark text-lg">299&euro;</span>
                  </div>
                </div>
                <div className="card-lg">
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <div><div className="badge-green mb-1 text-[10px]">Balcon étroit</div><h4 className="font-bold">Sunology CITY</h4><p className="text-xs text-stone">Specifiquement concu pour les garde-corps de balcon, design discret</p></div>
                    <span className="font-mono font-bold text-green text-lg">~499&euro;</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Astuces pour maximiser la production en appartement</h2>
              <div className="space-y-3">
                {[
                  { t: 'Optimisez l\'orientation', d: 'Meme sur un balcon, vous avez souvent une marge de manoeuvre. Tournez le panneau au maximum vers le sud. Chaque degre compte.' },
                  { t: 'Ajustez l\'inclinaison par saison', d: 'Le Sunology PLAY2 permet 3 inclinaisons (27, 35, 42 degres). Inclinez plus en hiver (42) et moins en ete (27) pour suivre la course du soleil.' },
                  { t: 'Surface réfléchissante derriere', d: 'Si votre panneau est bifacial, posez-le devant un mur clair ou un sol clair. Le gain peut atteindre 5-15% de production supplémentaire.' },
                  { t: 'Consommez pendant la journee', d: 'Sans batterie, vous consommez en temps réel. Programmez votre machine à laver, lave-vaisselle et chauffe-eau aux heures de soleil (10h-16h).' },
                  { t: 'Nettoyez régulièrement', d: 'Un panneau poussiereux perd 5-10% de rendement. Un coup de chiffon humide tous les 2-3 mois suffit.' },
                ].map((a, i) => (
                  <div key={i} className="card">
                    <h4 className="font-bold text-sm mb-1">{a.t}</h4>
                    <p className="text-xs text-charcoal-light">{a.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions frequentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-8">
              <p className="font-semibold text-lg mb-2">Combien pouvez-vous économiser ?</p>
              <p className="text-sm text-charcoal-light mb-4">Meme en appartement, votre balcon à du potentiel. Testez en 30 secondes.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
