import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Panneau solaire balcon : que couvre votre assurance ?',
  description: 'Votre kit solaire de balcon est-il couvert par votre assurance habitation ? Gr\u00eale, vol, chute, responsabilit\u00e9 civile. Ce qu\u2019il faut d\u00e9clarer et ce qui est garanti.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/panneau-solaire-assurance-balcon',
  },
};

const faqData = [
  {
    question: 'Faut-il d\u00e9clarer son kit solaire \u00e0 l\u2019assurance ?',
    answer: 'Oui, fortement recommand\u00e9. M\u00eame si un kit plug-and-play est un bien mobilier (amovible), le d\u00e9clarer \u00e0 votre assureur \u00e9vite tout litige en cas de sinistre. Un simple email avec photo du kit suffit. La plupart des assureurs ne modifient pas votre prime pour un kit \u00e0 moins de 1 000 \u20ac.',
  },
  {
    question: 'L\u2019assurance habitation couvre-t-elle la gr\u00eale sur le panneau ?',
    answer: 'Oui, la garantie \u00ab temp\u00eate, gr\u00eale, neige \u00bb de votre multirisque habitation couvre les d\u00e9g\u00e2ts caus\u00e9s par les intemp\u00e9ries sur vos biens mobiliers, y compris un kit solaire de balcon. Conservez la facture d\u2019achat pour prouver la valeur.',
  },
  {
    question: 'Que se passe-t-il si le panneau tombe et blesse quelqu\u2019un ?',
    answer: 'Votre responsabilit\u00e9 civile (incluse dans l\u2019assurance habitation) couvre les dommages caus\u00e9s \u00e0 des tiers. Si votre panneau tombe du balcon et blesse un pi\u00e9ton ou endommage un v\u00e9hicule, votre RC prend en charge les frais. Condition : le kit doit \u00eatre correctement lest\u00e9 et install\u00e9.',
  },
  {
    question: 'Le kit est-il couvert contre le vol ?',
    answer: 'En g\u00e9n\u00e9ral oui, au titre des biens mobiliers situ\u00e9s en ext\u00e9rieur (jardin, balcon, terrasse). V\u00e9rifiez les conditions de votre contrat : certains assureurs limitent la couverture des biens ext\u00e9rieurs \u00e0 un plafond (souvent 1 000-2 000 \u20ac). Un kit \u00e0 599 \u20ac est en dessous.',
  },
  {
    question: 'Combien co\u00fbte l\u2019assurance suppl\u00e9mentaire ?',
    answer: 'Pour un kit plug-and-play \u00e0 moins de 1 000 \u20ac, la plupart des assureurs ne facturent aucun surco\u00fbt. Le kit est consid\u00e9r\u00e9 comme un bien mobilier couvert par votre contrat existant. Pour des installations plus importantes (> 3 kWc, sur toiture), comptez 40-150 \u20ac/an de surprime.',
  },
  {
    question: 'La d\u00e9claration CACSI Enedis est-elle li\u00e9e \u00e0 l\u2019assurance ?',
    answer: 'Pas directement, mais les deux sont compl\u00e9mentaires. La CACSI d\u00e9clare votre installation \u00e0 Enedis (obligatoire). La d\u00e9claration \u00e0 l\u2019assureur prot\u00e8ge contre les sinistres. Sans CACSI, un assureur pointilleux pourrait contester en arguant que l\u2019installation n\u2019est pas conforme.',
  },
];

export default function AssuranceBalconPage() {
  return (
    <>
      <SchemaArticle
        title="Panneau solaire balcon : que couvre votre assurance ?"
        description="Guide assurance pour les kits solaires de balcon."
        url="https://monbalconsolaire.fr/guide/panneau-solaire-assurance-balcon"
        datePublished="2026-06-03"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Assurance panneau solaire' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Panneau solaire balcon : que couvre votre assurance ?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre kit solaire est dehors 365 jours par an. Gr&ecirc;le, temp&ecirc;te, vol, chute sur un pi&eacute;ton&hellip; <strong>votre assurance habitation couvre-t-elle tout ?</strong> Ce qu&apos;il faut d&eacute;clarer, ce qui est garanti, et les pi&egrave;ges &agrave; &eacute;viter.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>3 juin 2026</span>
              <span>&middot;</span>
              <span>8 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Gr&ecirc;le, temp&ecirc;te, neige :</strong> couvert par votre multirisque habitation {'\u2713'}</li>
              <li>&bull; <strong>Vol :</strong> couvert (biens mobiliers ext&eacute;rieurs), v&eacute;rifiez le plafond {'\u2713'}</li>
              <li>&bull; <strong>Responsabilit&eacute; civile :</strong> couvert si le panneau cause des d&eacute;g&acirc;ts &agrave; un tiers {'\u2713'}</li>
              <li>&bull; <strong>D&eacute;claration :</strong> un email &agrave; votre assureur avec photo suffit</li>
              <li>&bull; <strong>Surco&ucirc;t :</strong> 0 &euro; pour un kit &lt; 1 000 &euro; dans la plupart des cas</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Kit plug-and-play = bien mobilier</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire plug-and-play (Sunology, Beem, Zendure, etc.) est <strong>amovible</strong> : il n&apos;est pas fix&eacute; de mani&egrave;re permanente au b&acirc;timent. Juridiquement, c&apos;est un <strong>bien mobilier</strong>, au m&ecirc;me titre qu&apos;un barbecue, un meuble de jardin ou un v&eacute;lo sur le balcon.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Cons&eacute;quence : votre <strong>assurance multirisque habitation</strong> (MRH) le couvre automatiquement au titre des biens mobiliers. Pas besoin d&apos;une assurance sp&eacute;cifique &laquo; panneau solaire &raquo;.
              </p>
              <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                <h4 className="font-bold text-sm mb-1 text-amber-dark">Attention : installation fix&eacute;e = diff&eacute;rent</h4>
                <p className="text-xs text-charcoal-light leading-relaxed">Si vous percez le mur, le garde-corps ou la toiture pour fixer les panneaux, ils deviennent un <strong>bien immobilier</strong>. La couverture change, et une d&eacute;claration formelle &agrave; l&apos;assureur est obligatoire. Les kits plug-and-play pos&eacute;s au sol ou en appui (sans per&ccedil;age) restent mobiliers.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que couvre votre assurance habitation</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Risque</th>
                      <th className="p-3 text-center font-bold">Couvert ?</th>
                      <th className="p-3 text-left font-bold">D&eacute;tails</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Gr\u00eale et temp\u00eate', '\u2713 Oui', 'Garantie \u00ab temp\u00eate, gr\u00eale, neige \u00bb de la MRH. Couvre r\u00e9paration ou remplacement.'],
                      ['Catastrophe naturelle', '\u2713 Oui', 'Arr\u00eat\u00e9 interministri\u00e9riel n\u00e9cessaire. Franchise l\u00e9gale de 380 \u20ac.'],
                      ['Incendie / explosion', '\u2713 Oui', 'Garantie de base de toute MRH.'],
                      ['Vol', '\u2713 Oui*', 'Couvert au titre des biens ext\u00e9rieurs. *V\u00e9rifier le plafond (souvent 1 000-2 000 \u20ac).'],
                      ['Vandalisme', '\u2713 Oui*', 'Selon les conditions du contrat. *Parfois exclus pour les biens ext\u00e9rieurs.'],
                      ['Chute du panneau (d\u00e9g\u00e2ts tiers)', '\u2713 Oui', 'Responsabilit\u00e9 civile : couvre les blessures et d\u00e9g\u00e2ts mat\u00e9riels caus\u00e9s \u00e0 un tiers.'],
                      ['Chute du panneau (d\u00e9g\u00e2ts propres)', '\u2713 Oui', 'Garantie \u00ab dommages aux biens \u00bb de la MRH.'],
                      ['Panne du micro-onduleur', '\u2717 Non', 'C\u2019est la garantie constructeur (25 ans chez Sunology/Beem), pas l\u2019assurance.'],
                      ['Usure / d\u00e9gradation normale', '\u2717 Non', 'Pas un sinistre. D\u00e9gradation de performance = garantie constructeur.'],
                    ].map(([risque, couvert, details], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{risque}</td>
                        <td className={`p-3 text-center font-semibold ${couvert.includes('\u2713') ? 'text-green' : 'text-amber-dark'}`}>{couvert}</td>
                        <td className="p-3 text-xs text-charcoal-light">{details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment d&eacute;clarer votre kit &agrave; l&apos;assureur</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La d&eacute;claration est <strong>fortement recommand&eacute;e</strong> m&ecirc;me si elle n&apos;est pas toujours obligatoire pour un bien de moins de 1 000 &euro;. Voici comment faire :
              </p>
              <div className="space-y-4">
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Envoyez un email &agrave; votre assureur</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">Objet : &laquo; D&eacute;claration installation kit solaire plug-and-play sur balcon &raquo;. Joignez une photo du kit install&eacute; et la facture d&apos;achat.</p>
                    </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Pr&eacute;cisez les informations cl&eacute;s</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">Marque et mod&egrave;le du kit, puissance (ex : 450 Wc), prix d&apos;achat, date d&apos;installation, mode de fixation (pos&eacute; au sol / appui garde-corps, sans per&ccedil;age).</p>
                    </div>
                  </div>
                </div>
                <div className="card border-l-4 border-l-green">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">Conservez la confirmation</h4>
                      <p className="text-xs text-charcoal-light leading-relaxed">L&apos;assureur r&eacute;pondra g&eacute;n&eacute;ralement en confirmant la prise en compte, sans modification de prime. Gardez cet &eacute;change en cas de sinistre.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-lg bg-cream/40 mt-6">
                <h4 className="font-bold text-sm mb-3">Mod&egrave;le d&apos;email &agrave; copier</h4>
                <div className="text-xs text-charcoal-light leading-relaxed bg-white p-4 rounded-brand border border-border-light font-mono">
                  <p>Objet : D&eacute;claration kit solaire plug-and-play sur balcon</p>
                  <br />
                  <p>Madame, Monsieur,</p>
                  <br />
                  <p>Je vous informe de l&apos;installation d&apos;un kit solaire plug-and-play sur le balcon de mon logement assur&eacute; sous le contrat n&deg; [VOTRE NUM&Eacute;RO].</p>
                  <br />
                  <p>D&eacute;tails de l&apos;installation :</p>
                  <p>- Kit : [Sunology PLAY 2 / Beem On 460W / autre]</p>
                  <p>- Puissance : [450 Wc]</p>
                  <p>- Prix d&apos;achat : [599 &euro;]</p>
                  <p>- Mode de fixation : pos&eacute; au sol avec ballasts, sans per&ccedil;age</p>
                  <p>- Date d&apos;installation : [date]</p>
                  <br />
                  <p>Vous trouverez en pi&egrave;ce jointe la facture d&apos;achat et une photo de l&apos;installation.</p>
                  <br />
                  <p>Merci de confirmer la prise en compte de cette d&eacute;claration.</p>
                  <br />
                  <p>Cordialement,<br />[Votre nom]</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le cas de la responsabilit&eacute; civile</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est le risque le plus s&eacute;rieux : votre panneau tombe du 5e &eacute;tage et blesse un passant, ou endommage la voiture gar&eacute;e en dessous.
              </p>
              <div className="card-lg bg-amber-pale/20 border-amber/10">
                <h4 className="font-bold text-sm mb-3 text-amber-dark">Ce qui vous prot&egrave;ge</h4>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Responsabilit&eacute; civile</strong> de votre assurance habitation (incluse dans tout contrat MRH)</li>
                  <li>&bull; <strong>Condition :</strong> le kit doit &ecirc;tre <strong>correctement lest&eacute;</strong> (ballasts remplis d&apos;eau ou de sable, 15-24 kg par c&ocirc;t&eacute;)</li>
                  <li>&bull; Si vous n&apos;avez pas lest&eacute; et que le panneau s&apos;envole, l&apos;assureur peut invoquer la <strong>n&eacute;gligence</strong> et r&eacute;duire ou refuser l&apos;indemnisation</li>
                </ul>
              </div>
              <div className="card border-l-4 border-l-green mt-4">
                <h4 className="font-bold text-sm mb-1 text-green">Notre conseil</h4>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  Lestez <strong>toujours</strong> votre kit conform&eacute;ment aux instructions du fabricant. Prenez une photo du lestage. En cas de sinistre, cette photo prouve que vous avez respect&eacute; les consignes d&apos;installation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Locataire vs propri&eacute;taire : quelle diff&eacute;rence ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base text-green mb-2">Locataire</h3>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>{'\u2713'} Votre assurance locataire couvre le kit (bien mobilier)</li>
                    <li>{'\u2713'} RC incluse dans votre contrat</li>
                    <li>{'\u2713'} Pas besoin de pr&eacute;venir le propri&eacute;taire (kit amovible) mais recommand&eacute;</li>
                    <li>{'\u2713'} En cas de d&eacute;m&eacute;nagement, vous emportez le kit</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base text-amber-dark mb-2">Propri&eacute;taire</h3>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>{'\u2713'} Assurance propri&eacute;taire couvre le kit</li>
                    <li>{'\u2713'} RC incluse</li>
                    <li>{'\u26a0'} En copropri&eacute;t&eacute; : v&eacute;rifiez le r&egrave;glement</li>
                    <li>{'\u26a0'} Si fix&eacute; au b&acirc;timent : d&eacute;claration obligatoire</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-charcoal-light mt-4">
                Pour plus de d&eacute;tails sur les droits des locataires : <Link href="/guide/panneau-solaire-balcon-locataire" className="text-green hover:underline font-semibold">Guide locataire complet</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Checklist assurance</h2>
              <div className="card-lg bg-cream/40">
                <ul className="text-sm text-charcoal-light space-y-3">
                  {[
                    'D\u00e9clarer le kit \u00e0 votre assureur (email + photo + facture)',
                    'V\u00e9rifier que votre contrat couvre les biens ext\u00e9rieurs (balcon/terrasse)',
                    'V\u00e9rifier le plafond d\u2019indemnisation des biens ext\u00e9rieurs',
                    'Conserver la facture d\u2019achat du kit (preuve de valeur)',
                    'Lester correctement le kit et photographier l\u2019installation',
                    'Faire la d\u00e9claration CACSI Enedis (conformit\u00e9 r\u00e9seau)',
                    'En copropri\u00e9t\u00e9 : v\u00e9rifier le r\u00e8glement ou pr\u00e9venir le syndic',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-green/10 text-green flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Votre kit est-il rentable m&ecirc;me avec l&apos;assurance ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Spoiler : oui, car l&apos;assurance ne co&ucirc;te rien de plus pour un kit &lt; 1 000 &euro;.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma rentabilit&eacute; &rarr;
              </Link>
            </div>

            <div className="my-8">
              <AffiliateCTA productName="Sunology PLAY 2" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/play2-kit-solaire" label="Voir le Sunology PLAY 2" variant="box" position="article_bottom" price="599 \u20ac" />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/guide/panneau-solaire-balcon-locataire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire balcon locataire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Droits, r&egrave;gles et astuces pour les locataires</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis : guide pas &agrave; pas</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;autre d&eacute;claration obligatoire (gratuite, 25 min)</p>
                </Link>
                <Link href="/blog/kit-solaire-pluie-grele" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kit solaire : que faire quand il pleut ou gr&ecirc;le ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">R&eacute;sistance, norme IEC 61215, production sous la pluie</p>
                </Link>
                <Link href="/guide/panneau-solaire-copropriete" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire en copropri&eacute;t&eacute;</h4>
                  <p className="text-xs text-charcoal-light mt-1">R&egrave;gles, votes AG, mod&egrave;le de courrier syndic</p>
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
                <strong>Sources :</strong> Cr&eacute;dit Agricole, Generali, MAIF, Macif, Quelle&Eacute;nergie (mai 2026). Les garanties varient selon les contrats. V&eacute;rifiez toujours les conditions de votre assureur. <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
