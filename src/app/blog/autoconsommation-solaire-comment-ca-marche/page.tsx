import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Autoconsommation solaire : comment ca marche concretement ? (2026)',
  description: 'L\'autoconsommation solaire expliquee simplement : comment votre panneau alimente vos appareils, le role du compteur Linky, et ce qui se passe la nuit.',
};

const faqData = [
  { question: 'L\'autoconsommation solaire, c\'est quoi ?', answer: 'C\'est le fait de consommer directement l\'electricite que vous produisez avec votre panneau solaire. Au lieu d\'acheter 100% de votre electricite a EDF, vous en produisez une partie vous-meme. Votre facture baisse d\'autant.' },
  { question: 'Que se passe-t-il la nuit ou par temps couvert ?', answer: 'Votre panneau ne produit pas (ou tres peu). Votre logement bascule automatiquement sur le reseau EDF. Vous ne remarquez aucune difference — tout est transparent.' },
  { question: 'Que devient le surplus d\'electricite ?', answer: 'Avec un kit plug-and-play en autoconsommation, le surplus est automatiquement et gratuitement injecte sur le reseau. Vous ne payez rien mais vous n\'etes pas remunere non plus. Pour valoriser le surplus, il faut une batterie.' },
  { question: 'Faut-il un compteur Linky ?', answer: 'Pour un kit plug-and-play en autoconsommation sans injection (CACSI), le compteur Linky n\'est pas obligatoire mais il est utile pour suivre votre consommation. La plupart des foyers en sont deja equipes.' },
  { question: 'C\'est quoi le talon de consommation ?', answer: 'C\'est la quantite minimale d\'electricite que votre logement consomme en permanence : frigo, box internet, veilles, chargeurs, VMC. En general entre 100 et 300W. C\'est ce que votre panneau solaire efface en premier.' },
];

export default function AutoconsommationPage() {
  return (
    <>
      <SchemaArticle title="Autoconsommation solaire : comment ca marche concretement ?" description="L'autoconsommation solaire expliquee simplement." url="https://monbalconsolaire.vercel.app/blog/autoconsommation-solaire-comment-ca-marche" datePublished="2026-04-03" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Autoconsommation solaire' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Comprendre</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Autoconsommation solaire : comment &ccedil;a marche concr&egrave;tement ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Vous branchez un panneau solaire sur une prise et votre facture baisse. Mais comment l&apos;&eacute;lectricit&eacute; sait-elle o&ugrave; aller ? Explication simple, sans jargon technique.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>3 avril 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En 30 secondes</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Votre panneau produit de l&apos;&eacute;lectricit&eacute; &rarr; elle circule dans vos prises &rarr; vos appareils l&apos;utilisent en priorit&eacute; &rarr; votre compteur EDF tourne moins &rarr; votre facture baisse. La nuit, vous repassez sur le r&eacute;seau EDF normalement. C&apos;est tout.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le principe en 3 &eacute;tapes</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Le panneau produit de l\'\u00e9lectricit\u00e9', desc: 'Les cellules photovolta\u00efques captent la lumi\u00e8re du soleil et la transforment en courant continu. Le micro-onduleur (int\u00e9gr\u00e9 au kit) le convertit en courant alternatif 230V \u2014 le m\u00eame que celui de vos prises.' },
                  { step: '2', title: 'Vos appareils consomment en priorit\u00e9', desc: 'L\'\u00e9lectricit\u00e9 produite circule dans votre r\u00e9seau domestique et alimente vos appareils les plus proches : frigo, box internet, appareils en veille, \u00e9clairage. C\'est automatique, instantan\u00e9, et transparent.' },
                  { step: '3', title: 'Le compteur tourne moins', desc: 'Chaque kWh produit par votre panneau est un kWh que vous n\'achetez pas \u00e0 EDF. Votre compteur Linky voit moins d\'\u00e9lectricit\u00e9 arriver du r\u00e9seau. Votre facture baisse d\'autant.' },
                ].map((s) => (
                  <div key={s.step} className="card-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-green text-white flex items-center justify-center font-extrabold">{s.step}</div>
                      <h3 className="font-bold text-lg">{s.title}</h3>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le talon de consommation : la cl&eacute; de tout</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Votre logement consomme de l&apos;&eacute;lectricit&eacute; en permanence, m&ecirc;me quand vous dormez ou que vous n&apos;&ecirc;tes pas l&agrave;. C&apos;est le <strong>talon de consommation</strong> : la somme de tous les appareils qui tournent 24h/24.</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[400px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Appareil</th><th className="text-center p-3">Puissance</th><th className="text-center p-3 rounded-tr-xl">24h/24 ?</th></tr></thead>
                  <tbody>
                    {[['R\u00e9frig\u00e9rateur / cong\u00e9lateur', '30-80 W', 'Oui'], ['Box internet + d\u00e9codeur TV', '15-30 W', 'Oui'], ['Appareils en veille (TV, micro-ondes, etc.)', '20-50 W', 'Oui'], ['VMC (ventilation)', '15-30 W', 'Oui'], ['Chargeurs branch\u00e9s (t\u00e9l\u00e9phone, laptop)', '5-15 W', 'Souvent'], ['Total talon typique', '100-200 W', '\u2014']].map(([a, p, h], i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 5 ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3">{a}</td><td className="text-center p-3 font-mono">{p}</td><td className="text-center p-3">{h}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">Un kit solaire de 450W produit en moyenne 200-350W en journ&eacute;e (selon l&apos;ensoleillement). C&apos;est pile la bonne puissance pour <strong>effacer le talon de consommation</strong> &mdash; c&apos;est-&agrave;-dire que votre frigo, votre box et vos veilles sont aliment&eacute;s par le soleil au lieu du r&eacute;seau EDF.</p>
              <div className="card bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-amber-dark"><strong>C&apos;est pour &ccedil;a qu&apos;un kit de 450W suffit.</strong> Vous n&apos;avez pas besoin de couvrir toute votre consommation &mdash; juste le talon. Et le talon, c&apos;est l&apos;&eacute;lectricit&eacute; que vous consommez de toute fa&ccedil;on, que vous soyez l&agrave; ou pas.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui se passe la nuit et par temps couvert</h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">La nuit</h4>
                  <p className="text-xs text-charcoal-light">Votre panneau ne produit pas. Votre logement bascule automatiquement et instantan&eacute;ment sur le r&eacute;seau EDF. Vous ne remarquez rien &mdash; pas de coupure, pas de basculement visible. C&apos;est 100% transparent.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-2">Par temps couvert</h4>
                  <p className="text-xs text-charcoal-light">Votre panneau produit moins (10-25% de sa capacit&eacute; maximale), mais il produit quand m&ecirc;me. La diff&eacute;rence est compl&eacute;t&eacute;e par le r&eacute;seau EDF. Tout est automatique.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">En plein soleil</h4>
                  <p className="text-xs text-charcoal-light">Votre panneau produit &agrave; pleine puissance. Vos appareils sont aliment&eacute;s par le soleil. Si la production d&eacute;passe votre consommation, le surplus est inject&eacute; gratuitement sur le r&eacute;seau.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2">Avec une batterie</h4>
                  <p className="text-xs text-charcoal-light">Le surplus est stock&eacute; dans la batterie au lieu d&apos;&ecirc;tre inject&eacute;. Vous le consommez le soir. <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">Voir notre comparatif batteries &rarr;</Link></p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le surplus : ce que vous &laquo; perdez &raquo;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec un kit plug-and-play en autoconsommation (convention CACSI), le surplus d&apos;&eacute;lectricit&eacute; est inject&eacute; gratuitement sur le r&eacute;seau. Vous ne le facturez pas &agrave; EDF et vous n&apos;&ecirc;tes pas r&eacute;mun&eacute;r&eacute; pour cette injection.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">En pratique, avec un kit de 450W et un talon de consommation de 150W, vous autoconsommez environ 30 &agrave; 50% de votre production. Le reste part sur le r&eacute;seau. C&apos;est &laquo; perdu &raquo; financi&egrave;rement, mais pas &eacute;cologiquement &mdash; vos voisins consomment votre &eacute;lectricit&eacute; verte.</p>
              <div className="card bg-green-pale/30 border-green/10">
                <p className="text-sm text-green-dark"><strong>Comment r&eacute;duire le surplus ?</strong> Programmez vos appareils &eacute;nergivores (machine &agrave; laver, lave-vaisselle, chauffe-eau) entre 10h et 16h, quand votre panneau produit le plus. Ou ajoutez une <Link href="/comparatif/kit-solaire-batterie-2026" className="text-green hover:underline">batterie de stockage</Link>.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Combien &ccedil;a fait &eacute;conomiser concr&egrave;tement ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec un kit de 450W en r&eacute;gion lyonnaise, orientation sud :</p>
              <div className="grid grid-cols-3 gap-4 my-6">
                {[{ v: '498 kWh', l: 'produits par an' }, { v: '~200 kWh', l: 'autoconsomm\u00e9s (40%)' }, { v: '~97 \u20ac', l: '\u00e9conomis\u00e9s par an' }].map((s, i) => (
                  <div key={i} className="card text-center"><div className="font-mono font-medium text-xl text-green">{s.v}</div><div className="text-[11px] text-stone mt-1">{s.l}</div></div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed">Pour un kit &agrave; 599&euro;, le retour sur investissement est atteint en 4-5 ans. Le panneau est garanti 25 ans. Sur sa dur&eacute;e de vie, vous &eacute;conomisez plus de 2 400&euro;.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Autoconsommation avec un kit plug-and-play vs une installation toiture</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th><th className="text-center p-3">Kit plug-and-play</th><th className="text-center p-3 rounded-tr-xl">Installation toiture</th></tr></thead>
                  <tbody>
                    {[['Prix', '299-690 \u20ac', '8 000-15 000 \u20ac'], ['Installation', 'Vous-m\u00eame, 1-60 min', 'Installateur RGE, 1-2 jours'], ['Puissance', '300-500 Wc', '3 000-9 000 Wc'], ['Couverture conso', '10-25%', '50-80%'], ['Revente surplus', 'Non (gratuit sur r\u00e9seau)', 'Oui (EDF OA, 0,13\u20ac/kWh)'], ['Aides de l\'\u00c9tat', 'Non', 'Oui (prime autoconso)'], ['Locataire ?', 'Oui', 'Non'], ['Amovible ?', 'Oui', 'Non']].map(([c, pp, t], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}><td className="p-3 font-semibold">{c}</td><td className="text-center p-3">{pp}</td><td className="text-center p-3">{t}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">Le kit plug-and-play ne remplace pas une installation toiture &mdash; il la compl&egrave;te ou la remplace quand elle n&apos;est pas possible (appartement, locataire, budget limit&eacute;). Pour la plupart des locataires et propri&eacute;taires d&apos;appartement, c&apos;est la seule option viable.</p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Combien pouvez-vous autoconsommer ?</p>
              <p className="text-sm text-charcoal-light mb-4">Notre calculateur estime votre production et vos &eacute;conomies en 30 secondes.</p>
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
            <div className="mt-10 pt-8 border-t border-border-light"><p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> Enedis, PVGIS, EDF tarifs 2026. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p></div>
          </div>
        </div>
      </article>
    </>
  );
}
