import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Réglementation panneau solaire balcon : faut-il déclarer ?',
  description: 'Réglementation des panneaux solaires de balcon en 2026 : déclaration CACSI Enedis, norme NF C 15-100, repère 900 W, copropriété. Ce que dit la loi.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/reglementation-panneau-solaire-balcon-2026',
  },
});

const faqData = [
  { question: 'Faut-il une autorisation pour installer un kit solaire sur son balcon ?', answer: 'Non, pas d\'autorisation de travaux si le panneau est pose au sol ou fixe au mur a moins d\'1m80 de haut. En revanche, si vous le fixez en toiture (toit plat par exemple), une declaration prealable en mairie est necessaire.' },
  { question: 'Quelle est la puissance maximale autorisee en plug-and-play ?', answer: 'Aucun texte ne fixe de plafond chiffré pour un kit branché sur prise. La NF C 15-100 applicable depuis le 1er septembre 2025 ne donne pas de limite en watts : son point 551.7.2 indique qu\'un générateur ne doit pas être raccordé à un circuit terminal par une prise ou une fiche. Les 900 W souvent cités sont une recommandation (UFC-Que Choisir, fabricants) pour une prise 16 A protégée par un différentiel 30 mA, pas une limite de la norme. Au-delà, un circuit dédié posé par un électricien est recommandé.' },
  { question: 'Faut-il déclarer son kit solaire à Enedis ?', answer: 'Oui, une déclaration sur Enedis-Connect est obligatoire et gratuite. Deux voies : la Convention d\'autoconsommation sans injection (CACSI) si votre kit est réglé en zéro injection (réglage de l\'onduleur, compteur de pilotage ou batterie), ou la cession gratuite du surplus à Enedis (Code de l\'énergie, article L315-5, installations de 3 kW maximum) si votre kit renvoie son surplus sur le réseau, cas de la plupart des kits simples.' },
  { question: 'Mon syndic peut-il refuser l\'installation ?', answer: 'Le syndic peut demander que le projet soit presente en assemblee generale si l\'installation modifie l\'aspect de la facade. Cependant, un kit pose au sol sur un balcon prive, non visible depuis l\'exterieur, ne devrait pas poser de probleme.' },
  { question: 'Les kits plug-and-play sont-ils toujours autorises en 2026 ?', answer: 'Ils restent vendus et aucun texte ne les interdit explicitement, mais leur situation est floue. La NF C 15-100 (point 551.7.2, en vigueur depuis le 1er septembre 2025) interdit de raccorder un générateur à un circuit terminal par une prise. Elle vise les installations fixes ; les kits, équipements mobiles, sont selon Enerplan « théoriquement non concernés ». La filière (Enerplan, SER) demande une clarification, voire une dérogation réglementaire. Les réponses du gouvernement aux questions écrites n° 6574 et n° 10336 (JO du 26 mai 2026) rappellent les risques d\'électrisation et d\'échauffement sans trancher ni accorder cette dérogation.' },
  { question: 'Que risque-t-on si on n\'a pas fait la déclaration CACSI ?', answer: 'Enedis ne vient pas contrôler les balcons. Le risque réel se matérialise surtout en cas de sinistre électrique : un assureur peut invoquer l\'absence de convention pour réduire ou refuser une indemnisation. Faire la déclaration (CACSI ou cession du surplus, gratuite, en ligne sur Enedis-Connect) élimine ce risque et ne nécessite aucune intervention sur site.' },
];

export default function ReglementationPage() {
  return (
    <>
      <SchemaArticle title="Réglementation panneau solaire balcon : faut-il déclarer ?" description="Réglementation des panneaux solaires de balcon en 2026 : déclaration CACSI Enedis, norme NF C 15-100, repère 900 W, copropriété. Ce que dit la loi." url="https://monbalconsolaire.fr/guide/reglementation-panneau-solaire-balcon-2026" datePublished="2026-04-14" dateModified="2026-11-12" />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'R\u00e9glementation 2026' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'R\u00e9glementation 2026' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide juridique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Panneau solaire balcon 2026 : faut-il le d&eacute;clarer&nbsp;?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Norme NF C 15-100, d&eacute;claration Enedis CACSI, copropri&eacute;t&eacute;, rep&egrave;re des 900 W : tout ce que dit la loi sur les kits solaires plug-and-play en France.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>14 avril 2026</span><span>&middot;</span><span><strong>Mis &agrave; jour le 12 novembre 2026</strong></span><span>&middot;</span><span>9 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;&nbsp;: oui, il faut d&eacute;clarer</h2>
            <p className="text-charcoal-light text-sm leading-relaxed"><strong>Oui, une d&eacute;claration auprès d&apos;Enedis est obligatoire</strong> (gratuite, en ligne sur Enedis-Connect)&nbsp;: la CACSI si votre kit n&apos;injecte rien, la cession gratuite du surplus s&apos;il en renvoie. Les kits solaires plug-and-play restent vendus et utilis&eacute;s en France en 2026, sans interdiction explicite, mais dans une zone grise normative (NF C 15-100, point 551.7.2). Pas d&apos;autorisation de travaux requise (sauf toiture). La norme ne fixe pas de plafond en watts&nbsp;; 900 W par prise est une recommandation courante, pas une limite l&eacute;gale. En copropri&eacute;t&eacute;, informer le syndic est recommand&eacute; si le panneau est visible.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">La norme NF C 15-100 : ce qui change en 2025-2026</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La norme NF C 15-100 encadre la s&eacute;curit&eacute; des installations &eacute;lectriques en France. La version applicable depuis le 1<sup>er</sup> septembre 2025 contient une r&egrave;gle qui concerne directement le branchement sur prise :</p>
              <div className="card-lg border-l-4 border-l-amber mb-4">
                <p className="text-sm text-charcoal-light"><strong>Point 551.7.2 :</strong> &laquo; un g&eacute;n&eacute;rateur d&apos;&eacute;nergie &eacute;lectrique ne doit pas &ecirc;tre connect&eacute; &agrave; un circuit terminal par le moyen d&apos;un socle de prise ou d&apos;une fiche &raquo;. La norme vise les installations fixes ; les kits plug-and-play, &eacute;quipements mobiles, sont dans une zone grise (&laquo; th&eacute;oriquement non concern&eacute;s &raquo; selon Enerplan). La fili&egrave;re (Enerplan, SER) demande depuis fin 2024 une clarification, voire une d&eacute;rogation r&eacute;glementaire. &Agrave; date (octobre 2026), deux questions &eacute;crites &agrave; l&apos;Assembl&eacute;e nationale (n&deg; 6574 et n&deg; 10336) ont re&ccedil;u une r&eacute;ponse minist&eacute;rielle le 26 mai 2026 rappelant les risques d&apos;&eacute;lectrisation et d&apos;&eacute;chauffement, sans trancher ni accorder cette d&eacute;rogation : le flou normatif persiste.</p>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">La norme ne fixe <strong>aucun plafond en watts</strong>. Le chiffre de 900&nbsp;W souvent cit&eacute; est une <strong>recommandation</strong> (UFC-Que Choisir, notices des fabricants) pour une prise 16&nbsp;A prot&eacute;g&eacute;e par un diff&eacute;rentiel 30&nbsp;mA, pas une limite l&eacute;gale. Au-del&agrave;, un circuit d&eacute;di&eacute; pos&eacute; par un &eacute;lectricien est recommand&eacute;. Les kits les plus populaires (Sunology PLAY2 &agrave; 450&nbsp;W, Beem On &agrave; 460&nbsp;W) sont en dessous de ce rep&egrave;re.</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[400px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Configuration</th><th className="text-center p-3">Puissance</th><th className="text-center p-3 rounded-tr-xl">Rep&egrave;re 900 W</th></tr></thead>
                  <tbody>
                    {[['1 kit Sunology PLAY (ex-PLAY 2)', '500W', '\u2705 En dessous'], ['1 kit Beem On 460W', '460W', '\u2705 En dessous'], ['2 kits Beem Kit 300W', '600W', '\u2705 En dessous'], ['1 PLAY + 1 Beem Kit', '800W', '\u2705 En dessous'], ['2 kits Beem On 460W', '920W', '\u26a0\ufe0f Circuit d\u00e9di\u00e9 recommand\u00e9']].map(([c, p, ok], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3 font-semibold">{c}</td><td className="text-center p-3 font-mono">{p}</td><td className="text-center p-3">{ok}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">D&eacute;claration Enedis : faut-il d&eacute;clarer, et sous quelle forme&nbsp;?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Vous ne revendez rien, mais la d&eacute;claration reste obligatoire et gratuite. Deux voies&nbsp;: la <strong>Convention d&apos;Autoconsommation Sans Injection (CACSI)</strong>, engagement &agrave; ne pas injecter, si votre kit est r&eacute;gl&eacute; en z&eacute;ro injection (r&eacute;glage de l&apos;onduleur, compteur de pilotage ou batterie&nbsp;; le dispositif anti-injection est facultatif selon Enedis)&nbsp;; ou la <strong>cession gratuite du surplus &agrave; Enedis</strong> (Code de l&apos;&eacute;nergie, article L315-5, installations de 3&nbsp;kW maximum selon l&apos;article D315-10) si votre kit renvoie son surplus, cas de la plupart des kits simples. Le d&eacute;tail est dans notre <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline font-semibold">guide de la d&eacute;claration</Link>.</p>
              <div className="space-y-3">
                {[
                  { cas: 'Kit réglé en zéro injection, ou kit avec batterie qui absorbe le surplus', voie: 'Déclaration obligatoire : CACSI (convention d\'autoconsommation sans injection).' },
                  { cas: 'Kit simple qui renvoie son surplus sur le réseau (cas le plus courant)', voie: 'Déclaration obligatoire : cession gratuite du surplus à Enedis (article L315-5 du Code de l\'énergie).' },
                  { cas: 'Vous voulez vendre votre surplus', voie: 'Hors plug-and-play : il faut un contrat d\'obligation d\'achat et, en pratique, une installation posée par un professionnel (voir plus bas).' },
                ].map((c) => (
                  <div key={c.cas} className="card border-l-4 border-l-green">
                    <h3 className="font-bold text-sm mb-1">{c.cas}</h3>
                    <p className="text-xs text-charcoal-light">{c.voie}</p>
                  </div>
                ))}
              </div>
              <div className="card-lg border-l-4 border-l-green mt-4">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Comment d&eacute;clarer&nbsp;?</strong> Le formulaire Enedis-Connect, les pi&egrave;ces &agrave; fournir, le Consuel (et le cas de la batterie) et le moment o&ugrave; vous pouvez brancher le kit sont d&eacute;taill&eacute;s pas &agrave; pas dans notre{' '}
                  <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline font-semibold">guide de la d&eacute;claration CACSI &rarr;</Link>
                </p>
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
                  <h3 className="font-bold text-green mb-2">Panneau non visible de l&apos;ext&eacute;rieur</h3>
                  <p className="text-sm text-charcoal-light">Pos&eacute; au sol sur votre balcon, derri&egrave;re le garde-corps, pas visible depuis la rue. Aucune autorisation de la copropri&eacute;t&eacute; n&eacute;cessaire. Informer le syndic reste recommand&eacute; par courtoisie.</p>
                </div>
                <div className="card-lg border-amber/20 bg-amber-pale/20">
                  <h3 className="font-bold text-amber-dark mb-2">Panneau visible (fa&ccedil;ade, garde-corps ext&eacute;rieur)</h3>
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
                  { situation: 'Installation au sol > 3 kWc (ou > 1,80 m de haut)', auth: 'Déclaration préalable', detail: 'Art. R421-2 et R421-9 du code de l’urbanisme. Rare pour du plug-and-play (les kits font 300-900 W).' },
                ].map((s, i) => (
                  <div key={i} className="card">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div><h3 className="font-bold text-sm mb-1">{s.situation}</h3><p className="text-xs text-charcoal-light">{s.detail}</p></div>
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
                  'D\u00e9clarer le kit \u00e0 Enedis : CACSI ou cession gratuite du surplus (preuve de conformit\u00e9)',
                ].map((r, i) => (
                  <div key={i} className="card border-l-4 border-l-green"><p className="text-xs text-charcoal-light">{r}</p></div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Revente du surplus : possible en plug-and-play ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Non. Avec un kit plug-and-play, soit vous n&apos;injectez rien (CACSI, r&eacute;glage z&eacute;ro injection), soit votre surplus est c&eacute;d&eacute; gratuitement &agrave; Enedis (article L315-5 du Code de l&apos;&eacute;nergie). Vous ne pouvez pas le revendre &agrave; EDF OA. Pour la revente, il faudrait une installation professionnelle par un artisan RGE, ce qui n&apos;est pas le cas des kits plug-and-play. <Link href="/blog/revendre-surplus-solaire-balcon" className="text-green hover:underline font-semibold">D&eacute;tail complet&nbsp;: pourquoi on ne peut pas revendre, et pourquoi ce n&apos;est de toute fa&ccedil;on pas rentable &rarr;</Link></p>
              <p className="text-charcoal-light leading-relaxed">En pratique, ce n&apos;est pas un probl&egrave;me : le talon de consommation absorbe une grande partie de la production. Pour maximiser, <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="text-green hover:underline">programmez vos appareils en journ&eacute;e</Link> ou <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">ajoutez une batterie</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">TVA et prime &agrave; l&apos;autoconsommation : ce qui s&apos;applique &agrave; un kit</h2>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>TVA.</strong> Depuis le 1<sup>er</sup> octobre 2025 (article 278-0 bis P du CGI), le taux de 5,5&nbsp;% vise la livraison <strong>et</strong> l&apos;installation, dans un logement, d&apos;un &eacute;quipement photovolta&iuml;que de 9&nbsp;kWc au plus qui respecte les crit&egrave;res de l&apos;arr&ecirc;t&eacute; du 8&nbsp;septembre 2025 (bilan carbone des modules inf&eacute;rieur &agrave; 530&nbsp;kgCO<sub>2</sub>eq/kWc, limites de teneur en argent, plomb et cadmium), avec un syst&egrave;me de gestion de l&apos;&eacute;nergie pilotant au moins deux usages, pos&eacute; par un professionnel qualifi&eacute;. Le taux de 10&nbsp;% ne s&apos;applique plus depuis le 1<sup>er</sup> janvier 2026 (sauf devis sign&eacute; avec acompte avant cette date). Un kit achet&eacute; seul, sans pose&nbsp;: 20&nbsp;% dans la plupart des cas&nbsp;; le BOFiP admet 5,5&nbsp;% si l&apos;&eacute;quipement remplit toutes les conditions techniques, ce que peu de kits de balcon font. Une batterie est &agrave; 20&nbsp;%, et si elle est vendue dans la m&ecirc;me prestation que les panneaux, tout le lot passe &agrave; 20&nbsp;%.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Prime &agrave; l&apos;autoconsommation.</strong> L&apos;arr&ecirc;t&eacute; du 1<sup>er</sup> juin 2026 (JO du 4 juin 2026) l&apos;a supprim&eacute;e pour les installations de 0 &agrave; 100&nbsp;kWc dont la demande compl&egrave;te de raccordement est d&eacute;pos&eacute;e &agrave; partir du 5 juin 2026 (les demandes ant&eacute;rieures gardent l&apos;ancien r&eacute;gime). Un kit plug-and-play branch&eacute; sur une prise n&apos;y a de toute fa&ccedil;on jamais &eacute;t&eacute; &eacute;ligible&nbsp;: sa production est destin&eacute;e &agrave; l&apos;autoconsommation, sans contrat d&apos;achat. <Link href="/blog/aides-subventions-panneau-solaire-balcon-2026" className="text-green hover:underline font-semibold">Toutes les aides en d&eacute;tail &rarr;</Link></p>
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
            <div className="my-8">
              <AffiliateCTA
                productName="Sunology PLAY"
                merchantName="Sunology"
                affiliateUrl="https://sunology.eu/products/play-kit-solaire-plug-play"
                label="Voir un kit conforme"
                variant="box"
                position="article_bottom"
              />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/prise-exterieure-etanche-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Prise ext&eacute;rieure &eacute;tanche et rallonge pour kit solaire</h3>
                  <p className="text-xs text-charcoal-light mt-1">IP44, IP66, diff&eacute;rentiel 30&nbsp;mA&nbsp;: les r&egrave;gles de branchement en s&eacute;curit&eacute;</p>
                </Link>
                <Link href="/blog/panneau-solaire-location-meublee-airbnb" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire en location meubl&eacute;e et Airbnb</h3>
                  <p className="text-xs text-charcoal-light mt-1">Autorisations r&eacute;elles selon votre situation, CACSI et ROI chiffr&eacute;</p>
                </Link>
                <Link href="/blog/aides-subventions-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Aides et subventions panneau solaire balcon 2026</h3>
                  <p className="text-xs text-charcoal-light mt-1">MaPrimeR&eacute;nov&apos;, TVA, prime autoconsommation supprim&eacute;e&nbsp;: la r&eacute;ponse honn&ecirc;te</p>
                </Link>
                <Link href="/guide/checklist-avant-achat-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Checklist avant d&apos;acheter : 15 points &agrave; v&eacute;rifier</h3>
                  <p className="text-xs text-charcoal-light mt-1">R&eacute;glementation, CACSI, copropri&eacute;t&eacute;, assurance — la liste compl&egrave;te avant de commander</p>
                </Link>
                <Link href="/blog/combien-panneaux-solaires-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Combien de panneaux sur un balcon&nbsp;? R&egrave;gles et limites</h3>
                  <p className="text-xs text-charcoal-light mt-1">Tableau par puissance, s&eacute;rie vs parall&egrave;le, configurations l&eacute;gales</p>
                </Link>
                <Link href="/guide/panneau-solaire-copropriete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Solaire en copropriété</h3>
                  <p className="text-xs text-charcoal-light mt-1">Règles, votes, modèle de courrier</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide locataires</h3>
                  <p className="text-xs text-charcoal-light mt-1">Vos droits en tant que locataire</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Guide débutants</h3>
                  <p className="text-xs text-charcoal-light mt-1">Le guide complet pour démarrer</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light"><p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> Norme NF C 15-100 (AFNOR, version applicable au 1<sup>er</sup> septembre 2025, point 551.7.2) ; r&eacute;ponses minist&eacute;rielles aux questions &eacute;crites n&deg; 6574 et n&deg; 10336 (A. nationale, JO du 26 mai 2026) ; UFC-Que Choisir, &laquo; Kits solaires : les kits plug &amp; play sont-ils concern&eacute;s par l&apos;actualisation de la norme &eacute;lectrique ? &raquo; (mai 2025) ; ADEME, guide kit photovolta&iuml;que plug &amp; play (avril 2023) ; Code de l&apos;&eacute;nergie art. L315-5 (cession gratuite du surplus) et D315-10 (seuil de 3 kW)&nbsp;; Enedis, &laquo;&nbsp;Autoconsommer la totalit&eacute; de l&apos;&eacute;nergie produite par vos panneaux&nbsp;&raquo; (dispositif anti-injection ou r&eacute;glage z&eacute;ro injection, dispense de Consuel NF EN 50549-1-4, consult&eacute; le 5 novembre 2026)&nbsp;; <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053562844" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">article 278-0 bis P du CGI</a> et <a href="https://bofip.impots.gouv.fr/bofip/14817-PGP.html/identifiant=BOI-TVA-LIQ-30-20-97-20260610" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">BOFiP BOI-TVA-LIQ-30-20-97-20260610</a> (TVA)&nbsp;; <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054190669" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">arr&ecirc;t&eacute; du 1<sup>er</sup> juin 2026</a> (JO du 4 juin 2026, prime &agrave; l&apos;autoconsommation et tarif d&apos;achat du surplus)&nbsp;; <a href="https://www.photovoltaique.info/fr/realiser-une-installation/choix-du-materiel/batteries-stockage-virtuel-et-autres-accesoires/les-kits-solaires-plug-and-play/" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">photovoltaique.info, kits plug-and-play</a>. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p></div>
          </div>
        </div>
      </article>
    </>
  );
}
