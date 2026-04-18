import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Panneau solaire balcon : reglementation 2026 complete',
  description: 'Norme NF C 15-100, declaration Enedis CACSI, copropriete, limite 900W : tout ce que dit la loi sur les kits solaires plug-and-play en 2026.',
};

const faqData = [
  { question: 'Faut-il une autorisation pour installer un kit solaire sur son balcon ?', answer: 'Non, pas d\'autorisation de travaux si le panneau est pose au sol ou fixe au mur a moins d\'1m80 de haut. En revanche, si vous le fixez en toiture (toit plat par exemple), une declaration prealable en mairie est necessaire.' },
  { question: 'Quelle est la puissance maximale autorisee en plug-and-play ?', answer: 'La norme NF C 15-100 mise a jour en septembre 2025 limite a 900W par circuit de prise murale. Au-dela, il faut une ligne dediee depuis le tableau electrique. La puissance totale des panneaux doit rester sous 3 kWc.' },
  { question: 'Faut-il declarer son kit solaire a Enedis ?', answer: 'Oui. Meme en autoconsommation totale sans injection, vous devez signer une Convention d\'Autoconsommation Sans Injection (CACSI) sur le portail Enedis Connect. C\'est gratuit et se fait en ligne en 10 minutes.' },
  { question: 'Mon syndic peut-il refuser l\'installation ?', answer: 'Le syndic peut demander que le projet soit presente en assemblee generale si l\'installation modifie l\'aspect de la facade. Cependant, un kit pose au sol sur un balcon prive, non visible depuis l\'exterieur, ne devrait pas poser de probleme.' },
  { question: 'Les kits plug-and-play sont-ils toujours autorises en 2026 ?', answer: 'Oui. L\'AFNOR devait clarifier la norme NF C 15-100 apres aout 2025 mais les kits plug-and-play restent autorises. La limite de 900W par circuit est la principale contrainte technique.' },
];

export default function ReglementationPage() {
  return (
    <>
      <SchemaArticle title="Panneau solaire balcon : reglementation 2026 complete" description="Tout ce que dit la loi sur les kits solaires plug-and-play en 2026." url="https://monbalconsolaire.fr/guide/reglementation-panneau-solaire-balcon-2026" datePublished="2026-04-14" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'R\u00e9glementation 2026' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide juridique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Panneau solaire balcon : r&eacute;glementation 2026 compl&egrave;te</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Norme NF C 15-100, d&eacute;claration Enedis CACSI, copropri&eacute;t&eacute;, limite 900W : tout ce que dit la loi sur les kits solaires plug-and-play en France.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>14 avril 2026</span><span>&middot;</span><span>9 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Les kits solaires plug-and-play sont l&eacute;gaux en France en 2026. Pas d&apos;autorisation de travaux requise (sauf toiture). Limite de 900W par circuit. D&eacute;claration CACSI obligatoire sur Enedis Connect (gratuite, 10 min). En copropri&eacute;t&eacute;, informer le syndic est recommand&eacute;.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La norme NF C 15-100 : ce qui change en 2025-2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La norme NF C 15-100 encadre la s&eacute;curit&eacute; des installations &eacute;lectriques en France. Sa mise &agrave; jour de septembre 2025 a introduit une limite claire pour les kits plug-and-play :</p>
              <div className="card-lg border-l-4 border-l-amber mb-4">
                <p className="text-sm text-charcoal-light"><strong>Limite de 900W</strong> par circuit de prise murale pour une connexion s&eacute;curis&eacute;e sur une prise standard 16A. Au-del&agrave;, il faut pr&eacute;voir une ligne d&eacute;di&eacute;e depuis le tableau &eacute;lectrique.</p>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">En pratique, cela signifie que vous pouvez brancher un ou deux kits solaires (total &lt; 900W) sur un m&ecirc;me circuit de prises sans aucune modification &eacute;lectrique. Les kits les plus populaires (Sunology PLAY2 &agrave; 450W, Beem On &agrave; 460W) sont largement en dessous de cette limite.</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[400px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Configuration</th><th className="text-center p-3">Puissance</th><th className="text-center p-3 rounded-tr-xl">Conforme ?</th></tr></thead>
                  <tbody>
                    {[['1 kit Sunology PLAY2', '450W', '\u2705 Oui'], ['1 kit Beem On 460W', '460W', '\u2705 Oui'], ['2 kits Beem Kit 300W', '600W', '\u2705 Oui'], ['1 PLAY2 + 1 Beem Kit', '750W', '\u2705 Oui'], ['2 kits Beem On 460W', '920W', '\u26a0\ufe0f Ligne d\u00e9di\u00e9e requise']].map(([c, p, ok], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3 font-semibold">{c}</td><td className="text-center p-3 font-mono">{p}</td><td className="text-center p-3">{ok}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">D&eacute;claration Enedis : la CACSI</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">M&ecirc;me en autoconsommation totale (vous ne revendez rien), vous devez signer une <strong>Convention d&apos;Autoconsommation Sans Injection (CACSI)</strong> avec Enedis. C&apos;est obligatoire, gratuit, et se fait en ligne.</p>
              <div className="space-y-3">
                {[
                  { step: '1', title: 'Rendez-vous sur Enedis Connect', desc: 'connect-racco.enedis.fr \u2014 Cr\u00e9ez un compte ou connectez-vous.' },
                  { step: '2', title: 'S\u00e9lectionnez "Autoconsommation sans injection"', desc: 'Choisissez cette option dans le formulaire de demande de raccordement.' },
                  { step: '3', title: 'Remplissez les informations', desc: 'Adresse, puissance du kit (en kWc), type d\'installation (plug-and-play).' },
                  { step: '4', title: 'Validez la convention', desc: 'Enedis vous envoie la CACSI \u00e0 signer \u00e9lectroniquement. D\u00e9lai : 15 jours max.' },
                  { step: '5', title: 'Mise en service', desc: 'Vous pouvez brancher votre kit d\u00e8s que la convention est sign\u00e9e (ou apr\u00e8s 15 jours sans r\u00e9ponse).' },
                ].map((s) => (
                  <div key={s.step} className="card border-l-4 border-l-green">
                    <div className="flex items-center gap-3 mb-1"><div className="w-7 h-7 rounded-lg bg-green text-white flex items-center justify-center font-bold text-xs">{s.step}</div><h4 className="font-bold text-sm">{s.title}</h4></div>
                    <p className="text-xs text-charcoal-light ml-10">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="card bg-amber-pale/30 border-amber/10 mt-4">
                <p className="text-sm text-amber-dark"><strong>Important :</strong> si vous ne faites pas la d&eacute;claration CACSI, vous &ecirc;tes techniquement en infraction. Enedis ne vient pas contr&ocirc;ler, mais en cas de probl&egrave;me (&eacute;lectrique ou assurance), l&apos;absence de d&eacute;claration peut poser souci.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Copropri&eacute;t&eacute; : ce qu&apos;il faut savoir</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Si vous vivez en copropri&eacute;t&eacute;, les r&egrave;gles d&eacute;pendent de la visibilit&eacute; de votre installation :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-green/20 bg-green-pale/20">
                  <h4 className="font-bold text-green mb-2">Panneau non visible de l&apos;ext&eacute;rieur</h4>
                  <p className="text-sm text-charcoal-light">Pos&eacute; au sol sur votre balcon, derri&egrave;re le garde-corps, pas visible depuis la rue. Aucune autorisation de la copropri&eacute;t&eacute; n&eacute;cessaire. Informer le syndic reste recommand&eacute; par courtoisie.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h4 className="font-bold text-amber-dark mb-2">Panneau visible (fa&ccedil;ade, garde-corps ext&eacute;rieur)</h4>
                  <p className="text-sm text-charcoal-light">Modifie l&apos;aspect ext&eacute;rieur de l&apos;immeuble. Le syndic peut demander un vote en assembl&eacute;e g&eacute;n&eacute;rale. Pr&eacute;sentez votre projet avec les b&eacute;n&eacute;fices (pas de d&eacute;g&acirc;ts, amovible, &eacute;cologique).</p>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4">Pour plus de d&eacute;tails sur vos droits en tant que locataire : <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline">voir notre guide locataire &rarr;</Link></p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Autorisation de travaux : quand est-ce n&eacute;cessaire ?</h2>
              <div className="space-y-3">
                {[
                  { situation: 'Panneau au sol (balcon, terrasse, jardin)', auth: 'Aucune', detail: 'Pas de modification du b\u00e2timent.' },
                  { situation: 'Panneau fix\u00e9 au mur < 1m80', auth: 'Aucune', detail: 'Pas de d\u00e9claration pr\u00e9alable.' },
                  { situation: 'Panneau fix\u00e9 au mur > 1m80 ou en fa\u00e7ade', auth: 'D\u00e9claration pr\u00e9alable en mairie', detail: 'Modifie l\'aspect ext\u00e9rieur.' },
                  { situation: 'Panneau en toiture (toit plat)', auth: 'D\u00e9claration pr\u00e9alable en mairie', detail: 'M\u00eame si c\'est un kit plug-and-play.' },
                  { situation: 'Puissance > 3 kWc', auth: 'Permis de construire', detail: 'Rare pour du plug-and-play (les kits font 300-500W).' },
                ].map((s, i) => (
                  <div key={i} className="card">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div><h4 className="font-bold text-sm mb-1">{s.situation}</h4><p className="text-xs text-charcoal-light">{s.detail}</p></div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-lg whitespace-nowrap ${s.auth === 'Aucune' ? 'bg-green-pale text-green' : 'bg-amber-pale text-amber-dark'}`}>{s.auth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Assurance et responsabilit&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Les kits plug-and-play ne sont g&eacute;n&eacute;ralement pas exclus des polices d&apos;assurance habitation. Cependant, il est recommand&eacute; de :</p>
              <div className="space-y-2">
                {[
                  'Informer votre assureur de l\'installation (simple email ou appel)',
                  'V\u00e9rifier que votre contrat couvre les "appareils \u00e9lectriques branch\u00e9s"',
                  'Conserver la facture d\'achat et le certificat de conformit\u00e9 du micro-onduleur',
                  'Signer la CACSI avec Enedis (preuve de conformit\u00e9)',
                ].map((r, i) => (
                  <div key={i} className="card border-l-4 border-l-green"><p className="text-xs text-charcoal-light">{r}</p></div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Revente du surplus : possible en plug-and-play ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Non. Avec un kit plug-and-play en autoconsommation (CACSI), le surplus est inject&eacute; gratuitement sur le r&eacute;seau. Vous ne pouvez pas le revendre &agrave; EDF OA. Pour la revente, il faudrait une installation professionnelle par un artisan RGE, ce qui n&apos;est pas le cas des kits plug-and-play.</p>
              <p className="text-charcoal-light leading-relaxed">En pratique, ce n&apos;est pas un probl&egrave;me : le talon de consommation absorbe une grande partie de la production. Pour maximiser, <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="text-green hover:underline">programmez vos appareils en journ&eacute;e</Link> ou <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">ajoutez une batterie</Link>.</p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre balcon est-il adapt&eacute; au solaire ?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur prend en compte votre ville et votre orientation.</p>
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
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/guide/panneau-solaire-copropriete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Solaire en copropriété</h4>
                  <p className="text-xs text-charcoal-light mt-1">Règles, votes, modèle de courrier</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide locataires</h4>
                  <p className="text-xs text-charcoal-light mt-1">Vos droits en tant que locataire</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide débutants</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le guide complet pour démarrer</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light"><p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> Norme NF C 15-100 (AFNOR), Code de l&apos;&eacute;nergie art. D315-10, Enedis Connect. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p></div>
          </div>
        </div>
      </article>
    </>
  );
}
