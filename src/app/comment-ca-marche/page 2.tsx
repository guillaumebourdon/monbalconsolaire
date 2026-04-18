import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comment ca marche : le solaire de balcon explique simplement',
  description: 'Branchez, produisez, economisez. Le fonctionnement d un kit solaire plug-and-play explique en 3 etapes, sans jargon.',
};

export default function CommentCaMarchePage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-4xl">
        <div className="text-center mb-16">
          <div className="badge-green mb-4 inline-block">Le solaire de balcon</div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">Comment &ccedil;a marche ?</h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">Un kit solaire plug-and-play se branche sur une prise, produit de l&apos;&eacute;lectricit&eacute;, et r&eacute;duit votre facture. Pas de travaux, pas d&apos;&eacute;lectricien, pas de paperasse compliqu&eacute;e.</p>
        </div>

        <div className="space-y-8 mb-16">
          {[
            { step: '1', title: 'Branchez', desc: 'Le kit arrive pr\u00eat \u00e0 l\u2019emploi. Posez le panneau sur votre balcon (au sol, contre le mur ou sur le garde-corps) et branchez le c\u00e2ble sur une prise standard. Installation : 1 \u00e0 5 minutes.', detail: 'Le micro-onduleur int\u00e9gr\u00e9 transforme le courant continu du panneau en courant alternatif 230V \u2014 le m\u00eame que celui de vos prises.' },
            { step: '2', title: 'Produisez', desc: 'D\u00e8s que le soleil brille, votre panneau produit de l\u2019\u00e9lectricit\u00e9. Elle circule dans votre r\u00e9seau domestique et alimente vos appareils en priorit\u00e9 : frigo, box internet, appareils en veille.', detail: 'Un kit de 450W produit en moyenne 400 \u00e0 550 kWh par an selon votre r\u00e9gion et votre orientation. C\u2019est automatique et transparent.' },
            { step: '3', title: '\u00c9conomisez', desc: 'Chaque kWh produit par votre panneau est un kWh que vous n\u2019achetez pas \u00e0 EDF. Votre compteur tourne moins, votre facture baisse. En moyenne : 80 \u00e0 120\u20ac d\u2019\u00e9conomies par an.', detail: 'Le retour sur investissement est atteint en 3 \u00e0 5 ans. Le panneau est garanti 25 ans. Sur sa dur\u00e9e de vie, vous \u00e9conomisez plus de 2 000\u20ac.' },
          ].map((s) => (
            <div key={s.step} className="card-lg flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-green text-white flex items-center justify-center font-extrabold text-2xl flex-shrink-0">{s.step}</div>
              <div>
                <h2 className="font-extrabold text-2xl mb-2">{s.title}</h2>
                <p className="text-charcoal-light leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm text-stone leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card-lg bg-amber-pale/30 border-amber/10 mb-12">
          <h2 className="font-extrabold text-xl mb-4">Et la nuit ? Et quand il pleut ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-sm text-amber-dark mb-1">La nuit</h3>
              <p className="text-sm text-charcoal-light">Le panneau ne produit pas. Votre logement bascule automatiquement sur le r&eacute;seau EDF. Aucune coupure, c&apos;est transparent.</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-amber-dark mb-1">Temps couvert / pluie</h3>
              <p className="text-sm text-charcoal-light">Le panneau produit moins (10-25% de sa capacit&eacute;), mais il produit quand m&ecirc;me. La diff&eacute;rence est compl&eacute;t&eacute;e par EDF.</p>
            </div>
          </div>
        </div>

        <div className="card-lg bg-green-pale/30 border-green/10 mb-12">
          <h2 className="font-extrabold text-xl mb-4">C&apos;est pour qui ?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { who: 'Locataires', why: 'Le kit est amovible. Vous l\u2019emportez en cas de d\u00e9m\u00e9nagement. Aucune modification du logement.' },
              { who: 'Propri\u00e9taires d\u2019appartement', why: 'Pas besoin de toit. Un balcon, une terrasse ou un rebord de fen\u00eatre suffit.' },
              { who: 'Petits budgets', why: 'Des kits d\u00e8s 299\u20ac. Rentabilis\u00e9s en 2,5 \u00e0 5 ans. Z\u00e9ro maintenance.' },
            ].map((p, i) => (
              <div key={i} className="card">
                <h3 className="font-bold text-sm text-green mb-2">{p.who}</h3>
                <p className="text-xs text-charcoal-light leading-relaxed">{p.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mb-12">
          <p className="font-extrabold text-xl mb-2">Combien pouvez-vous &eacute;conomiser ?</p>
          <p className="text-sm text-charcoal-light mb-4">Notre calculateur estime votre production et vos &eacute;conomies en 30 secondes.</p>
          <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-stone mb-4">Vous savez d&eacute;j&agrave; comment &ccedil;a marche ?</p>
          <Link href="/quel-kit-choisir" className="text-green font-semibold hover:underline">Comparez les meilleurs kits 2026 &rarr;</Link>
        </div>
      </div>
    </section>
  );
}
