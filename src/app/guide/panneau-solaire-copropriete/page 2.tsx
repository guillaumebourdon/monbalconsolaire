import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Panneau solaire en copropriete : regles, votes et astuces (2026)',
  description: 'Installer un kit solaire sur votre balcon en copropriete : reglement, assemblee generale, syndic, droits du coproprietaire et du locataire.',
};

const faqData = [
  { question: 'Faut-il l\'accord de la copropriete pour un kit solaire de balcon ?', answer: 'Ca depend de la visibilite. Si le panneau est pose au sol sur votre balcon prive et non visible depuis l\'exterieur, aucune autorisation n\'est requise. S\'il modifie l\'aspect de la facade (fixation en hauteur, visible depuis la rue), le syndic peut demander un vote en AG.' },
  { question: 'Le syndic peut-il interdire les panneaux solaires ?', answer: 'Le syndic ne peut pas interdire unilateralement. Seule l\'assemblee generale peut voter une interdiction, et uniquement si l\'installation modifie les parties communes ou l\'aspect exterieur de l\'immeuble. Un kit pose au sol sur un balcon prive ne modifie rien.' },
  { question: 'Comment presenter le projet en assemblee generale ?', answer: 'Demandez au syndic d\'inscrire le sujet a l\'ordre du jour de la prochaine AG. Preparez un dossier court : photo du kit, dimensions, poids, mode de fixation (sans percage), benefices (ecologique, economique), et le fait que c\'est amovible.' },
  { question: 'Un locataire peut-il installer un kit solaire en copropriete ?', answer: 'Oui. Le locataire a le droit d\'utiliser son balcon prive. Un kit plug-and-play ne necessite aucune modification du logement (pas de percage, pas de cablage). Il se branche sur une prise et se debranche en 1 minute.' },
  { question: 'Et si le reglement de copropriete interdit les installations sur les balcons ?', answer: 'Certains reglements interdisent les antennes paraboliques ou les climatiseurs sur les balcons. Les kits solaires ne sont generalement pas mentionnes. Si le reglement est ambigu, proposez une modification en AG — la transition energetique est un argument fort.' },
];

export default function CoproprietePage() {
  return (
    <>
      <SchemaArticle title="Panneau solaire en copropriete : regles, votes et astuces" description="Installer un kit solaire sur votre balcon en copropriete." url="https://monbalconsolaire.fr/guide/panneau-solaire-copropriete" datePublished="2026-04-17" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Copropri\u00e9t\u00e9' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Panneau solaire en copropri&eacute;t&eacute; : r&egrave;gles, votes et astuces</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Vous vivez en copropri&eacute;t&eacute; et vous voulez installer un kit solaire sur votre balcon ? Voici ce que dit la loi, ce que peut (ou ne peut pas) faire votre syndic, et comment pr&eacute;senter le projet.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>17 avril 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Un kit solaire pos&eacute; au sol sur votre balcon priv&eacute; ne n&eacute;cessite aucune autorisation de la copropri&eacute;t&eacute;. Seules les installations qui modifient l&apos;aspect ext&eacute;rieur de l&apos;immeuble (fixation en fa&ccedil;ade, visible depuis la rue) peuvent n&eacute;cessiter un vote en assembl&eacute;e g&eacute;n&eacute;rale.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 3 cas de figure en copropri&eacute;t&eacute;</h2>
              <div className="space-y-4">
                {[
                  { cas: 'Panneau au sol sur balcon priv\u00e9 (non visible)', verdict: 'Aucune autorisation', color: 'green', detail: 'Le balcon est une partie privative. Vous y posez ce que vous voulez tant que \u00e7a ne d\u00e9passe pas du garde-corps et que ce n\'est pas visible depuis la rue. Un kit Sunology PLAY2 pos\u00e9 au sol derri\u00e8re le garde-corps entre dans cette cat\u00e9gorie.' },
                  { cas: 'Panneau fix\u00e9 au garde-corps (visible de l\'ext\u00e9rieur)', verdict: 'Information au syndic recommand\u00e9e', color: 'amber', detail: 'Le garde-corps fait souvent partie des parties communes. Si votre panneau est visible depuis la rue, le syndic peut consid\u00e9rer que \u00e7a modifie l\'aspect de la fa\u00e7ade. Informez le syndic par courrier et proposez une pr\u00e9sentation en AG si n\u00e9cessaire.' },
                  { cas: 'Panneau fix\u00e9 en fa\u00e7ade ou sur un mur ext\u00e9rieur', verdict: 'Vote en assembl\u00e9e g\u00e9n\u00e9rale requis', color: 'amber', detail: 'Les murs ext\u00e9rieurs sont des parties communes. Toute modification n\u00e9cessite un vote \u00e0 la majorit\u00e9 de l\'article 25 de la loi du 10 juillet 1965 (majorit\u00e9 de tous les copropri\u00e9taires, pr\u00e9sents ou non).' },
                ].map((c, i) => (
                  <div key={i} className={`card-lg border-l-4 ${c.color === 'green' ? 'border-l-green bg-green-pale/10' : 'border-l-amber bg-amber-pale/10'}`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <h3 className="font-bold text-sm">{c.cas}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-lg whitespace-nowrap ${c.color === 'green' ? 'bg-green-pale text-green' : 'bg-amber-pale text-amber-dark'}`}>{c.verdict}</span>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment convaincre votre copropri&eacute;t&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Si votre installation n&eacute;cessite un vote en AG, voici comment maximiser vos chances :</p>
              <div className="space-y-3">
                {[
                  { title: 'Pr\u00e9parez un dossier visuel', desc: 'Photo du kit install\u00e9 (prenez-la sur le site du fabricant), dimensions exactes, poids (12-18 kg). Montrez que c\'est discret et \u00e9l\u00e9gant.' },
                  { title: 'Insistez sur le caract\u00e8re amovible', desc: 'Un kit plug-and-play se d\u00e9branche en 1 minute. Pas de per\u00e7age, pas de c\u00e2blage, pas de modification du b\u00e2timent. C\'est r\u00e9versible \u00e0 100%.' },
                  { title: 'Jouez la carte \u00e9cologique', desc: 'La transition \u00e9nerg\u00e9tique est un sujet porteur. Un kit solaire de balcon, c\'\u00e9vite ~200 kg de CO2 par an. L\'immeuble participe concr\u00e8tement \u00e0 l\'effort collectif.' },
                  { title: 'Proposez un projet collectif', desc: 'Si plusieurs copropri\u00e9taires sont int\u00e9ress\u00e9s, proposez un achat group\u00e9 pour n\u00e9gocier un tarif. Sunology et Beem proposent des remises sur les commandes multiples.' },
                  { title: 'Citez le pr\u00e9c\u00e9dent allemand', desc: 'En Allemagne, des centaines de milliers de "Balkonkraftwerk" sont install\u00e9s en copropri\u00e9t\u00e9. C\'est devenu la norme. La France suit le m\u00eame chemin.' },
                ].map((a, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{a.title}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{a.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que dit la loi</h2>
              <div className="card-lg bg-cream/80 border-border">
                <div className="space-y-4 text-sm text-charcoal-light leading-relaxed">
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Loi du 10 juillet 1965 (copropri&eacute;t&eacute;)</h4>
                    <p>Les parties privatives sont &agrave; l&apos;usage exclusif du copropri&eacute;taire. Le balcon est une partie privative (sauf le garde-corps qui peut &ecirc;tre commun selon le r&egrave;glement).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Article 25 — majorit&eacute; absolue</h4>
                    <p>Les travaux affectant les parties communes ou l&apos;aspect ext&eacute;rieur de l&apos;immeuble n&eacute;cessitent un vote &agrave; la majorit&eacute; absolue de tous les copropri&eacute;taires.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Code de l&apos;&eacute;nergie — art. D315-10</h4>
                    <p>Les installations de production d&apos;&eacute;lectricit&eacute; de moins de 3 kWc b&eacute;n&eacute;ficient d&apos;un r&eacute;gime simplifi&eacute; : d&eacute;claration CACSI sur Enedis Connect, pas de raccordement sp&eacute;cifique.</p>
                  </div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">Pour tous les d&eacute;tails sur la r&eacute;glementation : <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="text-green hover:underline">voir notre guide r&eacute;glementation 2026 &rarr;</Link></p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les kits les plus discrets pour la copropri&eacute;t&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Si la discrection est votre priorit&eacute;, voici les kits les plus adapt&eacute;s :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Kit</th><th className="text-center p-3">Dimensions</th><th className="text-center p-3">Poids</th><th className="text-center p-3 rounded-tr-xl">Discrection</th></tr></thead>
                  <tbody>
                    {[
                      ['Sunology PLAY2', '175 x 104 cm', '~20 kg', '\u2b50\u2b50\u2b50 Tr\u00e8s discret au sol'],
                      ['Beem On 460W', '180 x 105 cm', '~22 kg', '\u2b50\u2b50\u2b50 Similaire'],
                      ['Beem Kit 300W', '4 x (82 x 69 cm)', '~16 kg total', '\u2b50\u2b50 Modulaire mais 4 panneaux'],
                      ['Sunology CITY', '4 panneaux fins', '~15 kg total', '\u2b50\u2b50\u2b50\u2b50 Con\u00e7u pour balcons urbains'],
                    ].map(([k, d, p, disc], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3 font-semibold">{k}</td><td className="text-center p-3">{d}</td><td className="text-center p-3">{p}</td><td className="text-center p-3 text-xs">{disc}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">Pour comparer tous les kits en d&eacute;tail : <Link href="/quel-kit-choisir" className="text-green hover:underline">voir notre comparatif &rarr;</Link></p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Mod&egrave;le de courrier au syndic</h2>
              <div className="card-lg bg-cream/80 border-border">
                <p className="text-xs text-stone mb-3 font-semibold uppercase tracking-wider">Exemple de courrier &agrave; adapter</p>
                <div className="text-sm text-charcoal-light leading-relaxed space-y-2">
                  <p>Madame, Monsieur le Syndic,</p>
                  <p>Je souhaite vous informer de mon projet d&apos;installation d&apos;un kit solaire plug-and-play sur mon balcon (lot n&deg;XX). Il s&apos;agit d&apos;un panneau photovolta&iuml;que de 450W pos&eacute; au sol, sans per&ccedil;age ni modification du b&acirc;timent, branch&eacute; sur une prise standard.</p>
                  <p>Le kit est enti&egrave;rement amovible et peut &ecirc;tre retir&eacute; en quelques minutes. Il ne modifie pas l&apos;aspect ext&eacute;rieur de l&apos;immeuble (non visible depuis la rue). La d&eacute;claration r&eacute;glementaire aupr&egrave;s d&apos;Enedis (CACSI) sera effectu&eacute;e.</p>
                  <p>Je reste &agrave; votre disposition pour tout compl&eacute;ment d&apos;information.</p>
                  <p>Cordialement,</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre balcon est-il adapt&eacute; au solaire ?</p>
              <p className="text-sm text-charcoal-light mb-4">Calculez vos &eacute;conomies selon votre ville et votre orientation.</p>
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
            <div className="mt-10 pt-8 border-t border-border-light"><p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> Loi du 10 juillet 1965, Code de l&apos;&eacute;nergie, AFNOR NF C 15-100. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p></div>
          </div>
        </div>
      </article>
    </>
  );
}
