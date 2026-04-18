import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Panneau solaire balcon : le guide complet pour débutants (2026)',
  description: 'Tout savoir sur le panneau solaire de balcon en 2026 : installation, réglementation, cout, rentabilité, droits des locataires. Guide complet et indépendant.',
};

const faqData = [
  { question: 'Peut-on installér un panneau solaire sur un balcon ?', answer: 'Oui. Les kits solaires plug-and-play se posent au sol ou contre la rambarde de votre balcon et se branchént sur une prise électrique standard. Aucun travaux, aucun outil, installation en quelques minutes.' },
  { question: 'Faut-il une autorisation pour un panneau solaire de balcon ?', answer: 'Pour un kit de moins de 3 kWc installé à moins de 1,80m de hauteur, aucune déclaration préalable de travaux n\'est nécessaire. Seule la déclaration CACSI aupres d\'Enedis est obligatoire (informative, gratuite, 2 minutes en ligne).' },
  { question: 'Combien produit un panneau solaire de balcon ?', answer: 'Un kit de 450W produit en moyenne 400 à 650 kWh par an selon la region et l\'orientation. Cela correspond à 80-130 euros d\'économies annuelles au tarif EDF actuel.' },
  { question: 'Un panneau solaire fonctionne-t-il par temps nuageux ?', answer: 'Oui, mais avec un rendement réduit (10-25% de la puissance maximale). Les panneaux solaires fonctionnent avec la lumiere, pas uniquement le soleil direct. La production annuelle tient compte des jours nuageux.' },
  { question: 'Que devient le surplus d\'électricité ?', answer: 'Pour les kits plug-and-play en autoconsommation, le surplus est automatiquement et gratuitement injecte sur le reseau. Vous ne payez rien, mais vous n\'etes pas remunere non plus pour ce surplus.' },
  { question: 'Faut-il une batterie avec un panneau solaire de balcon ?', answer: 'Non, une batterie n\'est pas indispensable. Sans batterie, vous consommez l\'électricité produite en temps réel (talon de consommation : frigo, box, veilles). Une batterie permet de stocker pour le soir mais coute cher (500-1400 euros supplémentaires).' },
];

export default function GuidePage() {
  return (
    <>
      <SchemaArticle title="Panneau solaire balcon : le guide complet pour débutants" description="Tout savoir sur le panneau solaire de balcon en 2026." url="https://monbalconsolaire.fr/guide/panneau-solaire-balcon-débutant" datePublished="2026-03-18" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: "Guides", href: "/guide" }, { label: "Guide débutants" }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide complet</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Panneau solaire balcon : le guide complet pour débutants</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Tout ce que vous devez savoir avant d&apos;installér un kit solaire sur votre balcon en 2026 : fonctionnement, prix, rentabilité, réglementation, et les erreurs à éviter.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>18 mars 2026</span><span>&middot;</span><span>15 min de lecture</span></div>
          </div>

          <div className="card-lg bg-amber-pale/30 border-amber/10 mb-10">
            <h2 className="font-bold text-lg mb-3">Ce que vous allez apprendre</h2>
            <ul className="space-y-2 text-sm text-charcoal-light">
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Comment fonctionne un kit solaire plug-and-play (en termes simples)</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Combien ca coute et combien ca rapporte réellement</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Ce que dit la loi : droits des locataires, copropriété, démarchés</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Comment choisir le bon kit pour votre situation</li>
              <li className="flex gap-2"><span className="text-green font-bold">&rarr;</span> Les 5 erreurs à éviter absolument</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment fonctionne un panneau solaire de balcon ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Un kit solaire plug-and-play, c&apos;est un panneau photovoltaique relie à un micro-onduleur, le tout se branchant sur une prise électrique classique 230V. Le panneau convertit la lumiere du soleil en électricité. Le micro-onduleur transforme cette électricité (courant continu) en courant alternatif compatible avec votre installation domestique.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Une fois branché, le courant produit par le panneau circule dans votre reseau domestique et alimente vos appareils en priorite : refrigerateur, box internet, appareils en veille, eclairage. C&apos;est ce qu&apos;on appelle le <strong>talon de consommation</strong> — l&apos;électricité que votre logement consomme en permanence, meme quand vous n&apos;y etes pas.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Concrêtement, votre compteur Linky voit moins d&apos;électricité arriver du reseau pendant la journee, car une partie est fournie par votre panneau. Votre facture EDF baisse d&apos;autant.</p>
              <div className="card bg-green-pale/30 border-green/10 my-6">
                <p className="text-sm text-green-dark"><strong>Le point cle :</strong> vous ne stockez pas l&apos;électricité (sauf avec une batterie en option). Vous la consommez au moment ou elle est produite. Les appareils qui tournent en journee (frigo, box, veilles) sont alimentes par votre panneau au lieu du reseau EDF.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Combien ca coute ? Et combien ca rapporte ?</h2>
              <h3 className="font-bold text-lg mb-3">Le cout d&apos;un kit solaire de balcon</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">En mars 2026, les kits solaires plug-and-play pour balcon coutent entre <span className="data-highlight">299 &euro;</span> (Beem Kit 300W) et <span className="data-highlight">690 &euro;</span> (Sunethic F500). Le milieu de gamme se situe autour de <span className="data-highlight">599 &euro;</span> avec le Sunology PLAY2 ou le Beem On.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">A cela, pas de couts caches : l&apos;hebergement est gratuit (votre balcon), l&apos;installation est gratuite (vous le faites vous-meme en quelques minutes), et la maintenance est quasi-inexistante (un coup de chiffon sur le panneau de temps en temps).</p>

              <h3 className="font-bold text-lg mb-3 mt-6">La rentabilité réelle</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec le tarif EDF à <span className="data-highlight">0,1940 &euro;/kWh</span> (fevrier 2026), voici ce que vous pouvez attendre :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white">
                    <th className="text-left p-3 rounded-tl-xl">Region</th><th className="text-center p-3">Production (450W)</th><th className="text-center p-3">Économies/an</th><th className="text-center p-3 rounded-tr-xl">ROI</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Marseille / PACA', '580-650 kWh', '112-126 \u20ac', '3-4 ans'],
                      ['Lyon / Rhone-Alpes', '480-550 kWh', '93-107 \u20ac', '4-5 ans'],
                      ['Nantes / Ouest', '420-500 kWh', '81-97 \u20ac', '4-5 ans'],
                      ['Paris / Ile-de-France', '400-480 kWh', '78-93 \u20ac', '5-6 ans'],
                      ['Lille / Nord', '360-430 kWh', '70-83 \u20ac', '5-7 ans'],
                    ].map(([r, p, e, roi], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{r}</td>
                        <td className="text-center p-3 font-mono text-sm text-green">{p}</td>
                        <td className="text-center p-3 font-mono text-sm text-amber-dark">{e}</td>
                        <td className="text-center p-3 font-mono text-sm">{roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">Source : données PVGIS (Commission europeenne), orientation sud, inclinaison 30 degres, tarif EDF 0,1940 &euro;/kWh. Les panneaux sont garantis 25 ans.</p>

              <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-8">
                <p className="font-semibold mb-2">Quelle rentabilité pour VOTRE balcon ?</p>
                <p className="text-sm text-charcoal-light mb-4">Entrez votre ville et votre exposition pour un résultat personnalise.</p>
                <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies &rarr;</Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que dit la loi en 2026</h2>
              <h3 className="font-bold text-lg mb-3">Pour les locataires</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">Bonne nouvelle : un kit solaire plug-and-play <strong>amovible</strong> (pose au sol ou accroche sans perçage) ne constitue pas une modification du logement. Vous n&apos;avez besoin ni de l&apos;accord du propriétaire ni de l&apos;autorisation de la copropriété, tant que le kit peut etre retire sans laisser de traces.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">En revanche, si vous percez le mur ou la rambarde pour fixer le panneau, cela devient une modification du logement et nécessite l&apos;accord du propriétaire.</p>

              <h3 className="font-bold text-lg mb-3 mt-6">Démarchés obligatoires</h3>
              <div className="space-y-3 my-4">
                {[
                  { title: 'Déclaration CACSI aupres d\'Enedis', desc: 'Obligatoire. Informative (pas d\'accord à obtenir). Se fait en ligne en 2 minutes sur le site Enedis. Gratuit.', status: 'Obligatoire' },
                  { title: 'Déclaration préalable de travaux en mairie', desc: 'Uniquement si le panneau est installé à plus de 1,80m de hauteur ou en zone classée (monuments historiques, etc.).', status: 'Selon cas' },
                  { title: 'Accord de la copropriété', desc: 'Uniquement si l\'installation modifié l\'aspect exterieur du batiment (fixation permanente en facade). Pas nécessaire pour un kit amovible.', status: 'Selon cas' },
                  { title: 'Attestation Consuel', desc: 'Non requise pour les kits plug-and-play pre-assembles en usine comme le Sunology PLAY2 (certification CE sur l\'ensemble du kit).', status: 'Non requis' },
                ].map((d, i) => (
                  <div key={i} className="card">
                    <div className="flex items-start justify-between gap-4">
                      <div><h4 className="font-bold text-sm mb-1">{d.title}</h4><p className="text-xs text-charcoal-light">{d.desc}</p></div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap ${d.status === 'Obligatoire' ? 'bg-amber-pale text-amber-dark' : d.status === 'Non requis' ? 'bg-green-lighter text-green' : 'bg-cream-dark text-stone'}`}>{d.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card bg-amber-pale/30 border-amber/10 my-6">
                <p className="text-sm text-amber-dark"><strong>Attention — Norme NF C 15-100 (sept. 2025) :</strong> La mise à jour de la norme limite la puissance à 900W par circuit de prise. Avec un seul kit de 450W, vous etes largement dans les clous. Si vous envisagez 2 kits ou plus, renseignez-vous sur les évolutions reglementaires en cours (période transitoire jusqu&apos;au 31 mai 2026).</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment choisir le bon kit</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le choix depend de 4 critères principaux :</p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card"><h4 className="font-bold text-sm mb-2 text-green">1. Votre espace disponible</h4><p className="text-xs text-charcoal-light">Un seul grand panneau (Sunology PLAY2 : 1,76 x 1,13m) ou 4 petits panneaux (Beem Kit : ~80cm chacun) ? Mesurez votre balcon avant de choisir.</p></div>
                <div className="card"><h4 className="font-bold text-sm mb-2 text-green">2. Votre budget</h4><p className="text-xs text-charcoal-light">De 299&euro; (Beem Kit 300W) à 690&euro; (Sunethic F500). Tous sont rentables en 3-6 ans, mais le budget initial varie du simple au double.</p></div>
                <div className="card"><h4 className="font-bold text-sm mb-2 text-green">3. Votre orientation</h4><p className="text-xs text-charcoal-light">Sud = 100% du potentiel. Est/Ouest = 80%. Nord = 45%. Si votre balcon est plein nord, un kit solaire n&apos;est probablement pas rentable.</p></div>
                <div className="card"><h4 className="font-bold text-sm mb-2 text-green">4. Locataire ou propriétaire</h4><p className="text-xs text-charcoal-light">Locataire ? Privilegiez un kit 100% amovible (Sunology PLAY2 avec ballasts, ou Beem On). Propriétaire ? Vous pouvez fixer au mur pour optimiser l&apos;angle.</p></div>
              </div>
              <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green font-semibold text-sm hover:underline">&rarr; Voir notre comparatif complet des kits solaires 2026</Link>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 erreurs à éviter</h2>
              <div className="space-y-4 my-6">
                {[
                  { title: 'Acheter un kit trop puissant pour son balcon', desc: 'Un panneau en partie à l\'ombre produit beaucoup moins. Mieux vaut un petit kit bien expose qu\'un grand kit partiellement ombre.' },
                  { title: 'Ignorer l\'orientation', desc: 'Un balcon plein nord produit 55% de moins qu\'un balcon plein sud. Verifiez votre orientation avant d\'investir.' },
                  { title: 'Oublier la déclaration Enedis', desc: 'Meme si c\'est une formalite, la déclaration CACSI est obligatoire. Faites-la dans le mois suivant l\'installation.' },
                  { title: 'Utiliser une multiprise', desc: 'Ne branchéz jamais votre kit sur une multiprise ou une rallonge non adaptée. Utilisez une prise murale dédiée avec terre, protegee par un différentiel 30mA.' },
                  { title: 'Surestimér ses économies', desc: 'Un kit de 450W ne couvre pas toute votre consommation. Il efface le talon de consommation (frigo, box, veilles) mais pas le chauffage ou le chauffe-eau électrique.' },
                ].map((e, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">Erreur n&deg;{i+1} : {e.title}</h4>
                    <p className="text-xs text-charcoal-light">{e.desc}</p>
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
              <p className="font-semibold text-lg mb-2">Pret à passer au solaire ?</p>
              <p className="text-sm text-charcoal-light mb-4">Decouvrez en 30 secondes combien vous pouvez économiser avec un kit solaire sur votre balcon.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes économies &rarr;</Link>
            </div>
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif des meilleurs kits 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comment installer un kit</h4>
                  <p className="text-xs text-charcoal-light mt-1">Guide d'installation pas à pas</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien ça rapporte ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le calcul détaillé de rentabilité</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Sources :</strong> PVGIS (Commission europeenne), EDF tarifs réglementés (fevrier 2026), Enedis, ADEME, sites fabricants (Sunology, Beem, Sunethic). Ce guide est indépendant — <Link href="/a-propos" className="text-green hover:underline">en savoir plus sur notre méthode</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
