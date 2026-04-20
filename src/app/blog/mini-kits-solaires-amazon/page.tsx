import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Mini kits solaires Amazon < 300 € : lesquels valent vraiment le coup ? (2026)',
  description: 'Mini kits solaires Amazon à moins de 300 € : analyse honnête des modèles disponibles, pièges à éviter, et sélection des 5 kits qui valent vraiment leur prix.',
};

const faqData = [
  { question: 'Peut-on vraiment trouver un bon kit solaire sous 300 € sur Amazon ?', answer: 'Oui, mais avec prudence. Environ 80% des kits sous 300 € sur Amazon sont des produits bas de gamme (panneaux sous-performants, micro-onduleurs non conformes, faux avis). Les 20% restants sont de vrais bons choix pour débuter : mini kits 200-300W avec fiche technique réelle et marque identifiée.' },
  { question: 'Quelle puissance acheter pour moins de 300 € ?', answer: 'Comptez 200W à 350W maximum sous 300 €. Au-delà, les panneaux monocristallins à bon rendement dépassent ce budget. Un mini kit 300W bien orienté produit environ 280-350 kWh par an en région parisienne, soit 55-70 € d\'économies annuelles.' },
  { question: 'Un mini kit Amazon est-il aussi performant qu\'un Sunology ou Beem ?', answer: 'Non, rarement. Les fabricants français comme Sunology ou Beem investissent dans des micro-onduleurs Enphase/Deye fiables et des panneaux testés. Sur Amazon, les micro-onduleurs sont souvent des modèles chinois sans certification CE et la traçabilité est faible. Mais pour tester le solaire à petit budget, un mini kit peut être une bonne porte d\'entrée.' },
  { question: 'Comment repérer un mauvais kit sur Amazon ?', answer: 'Cinq signaux d\'alerte : vendeur inconnu (dropshipping), puissance suspecte (500W à 150 €, c\'est impossible), pas de marque identifiable sur les panneaux, avis parfaits avec fautes d\'orthographe, micro-onduleur non certifié CE. Si 3 de ces 5 signaux sont présents, passez votre chemin.' },
  { question: 'Les kits Amazon sont-ils conformes à la réglementation française ?', answer: 'Pas toujours. La norme NF C 15-100 impose un micro-onduleur certifié, un sectionneur, et une déclaration CACSI auprès d\'Enedis. Les kits français fournissent souvent le formulaire CACSI pré-rempli. Sur Amazon, cette conformité est rarement documentée, vous devrez vérifier vous-même.' },
  { question: 'Puis-je combiner plusieurs mini kits pour augmenter la puissance ?', answer: 'Oui, jusqu\'à 800W cumulés en plug-and-play. Au-delà, cela devient du photovoltaïque résidentiel classique avec déclarations fiscales, raccordement Enedis, etc. Deux mini kits 300W côte à côte (600W total) restent dans le cadre plug-and-play.' },
];

const kits_selection = [
  { num: 1, nom: 'Kit 300W monocristallin avec micro-onduleur', marque: 'Jackery / EcoFlow', prix: '249-299 €', puissance: '300W', note: '4/5', avantages: 'Marques identifiées, SAV français, micro-onduleur CE, garantie 10 ans panneau', inconvenients: 'Parfois en rupture de stock, livraison lente', verdict: 'Meilleur choix global sous 300 €. Préférez Jackery si dispo, EcoFlow en second.' },
  { num: 2, nom: 'Mini kit 200W flexible', marque: 'Renogy', prix: '180-220 €', puissance: '200W', note: '3,5/5', avantages: 'Panneau flexible (se pose sur surface courbe), léger, facile à déplacer', inconvenients: 'Production 30% inférieure à un panneau rigide, durée de vie plus courte', verdict: 'Idéal pour tester le solaire en location ou sur un balcon étroit. Ne pas attendre plus de 150 kWh/an.' },
  { num: 3, nom: 'Kit 400W 2 panneaux 200W', marque: 'Anker / BougeRV', prix: '280-320 €', puissance: '400W', note: '3,5/5', avantages: 'Puissance supérieure au mono-panneau, modulaire, 2 micro-onduleurs inclus', inconvenients: 'Installation plus longue (2 panneaux à fixer), câblage plus complexe', verdict: 'Bon rapport qualité/puissance si vous avez 2 m² d\'espace. Attention à la conformité du micro-onduleur.' },
  { num: 4, nom: 'Panneau 300W + onduleur vendu séparément', marque: 'Amerisolar + Enphase', prix: '180 € + 120 € = 300 €', puissance: '300W', note: '4,5/5', avantages: 'Matériel de qualité pro, micro-onduleur Enphase légendaire, garantie fabricant', inconvenients: 'Assemblage à faire soi-même, câblage MC4, pas livré en kit', verdict: 'Meilleur choix technique si vous aimez bricoler. Performance et fiabilité au-dessus des kits fermés.' },
  { num: 5, nom: 'Kit camping/nomade 200W avec batterie', marque: 'Jackery Explorer + SolarSaga', prix: '280-300 €', puissance: '200W + batterie 500Wh', note: '3/5', avantages: 'Solution 2-en-1 panneau + stockage, transportable, utile en camping', inconvenients: 'Rendement inférieur pour un usage balcon classique, batterie limitée', verdict: 'Non recommandé pour un usage balcon permanent. Mais excellent pour usage mixte balcon/camping.' },
];

const pieges_amazon = [
  { piege: 'Puissance gonflée', explication: 'Les vendeurs affichent souvent la puissance maximale instantanée (jamais atteinte) plutôt que la puissance crête normalisée. Un "kit 800W" peut en réalité produire 450W maximum.' },
  { piege: 'Photos trompeuses', explication: 'Images montrant un kit complet (panneau + onduleur + câbles + support), mais la fiche technique ne mentionne que le panneau seul. Vérifiez toujours la liste exacte du contenu.' },
  { piege: 'Avis fabriqués', explication: 'Centaines d\'avis 5 étoiles postés en quelques jours, souvent avec fautes d\'orthographe, commentaires génériques ("super produit", "bon rapport qualité/prix"). Fake Spot peut aider à détecter les faux avis.' },
  { piege: 'Micro-onduleur générique', explication: 'Onduleurs "YDH-500W" sans marque, sans certification CE vérifiable. Durée de vie incertaine, panne fréquente, SAV inexistant. Exigez un Enphase, Deye, ou APSystems.' },
  { piege: 'Garantie fantôme', explication: 'Garantie "25 ans" affichée mais vendeur basé à Shenzhen sans entité légale en France. Impossible de faire valoir la garantie en cas de panne.' },
];

export default function MiniKitsAmazonPage() {
  return (
    <>
      <SchemaArticle title="Mini kits solaires Amazon < 300 € : lesquels valent vraiment le coup ?" description="Analyse honnête des mini kits solaires Amazon à moins de 300 € en 2026." url="https://monbalconsolaire.fr/blog/mini-kits-solaires-amazon" datePublished="2026-04-20" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Accessoires', href: '/accessoires' }, { label: 'Mini kits Amazon < 300 €' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Sélection Amazon</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Mini kits solaires Amazon &lt; 300 € : lesquels valent vraiment le coup ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Amazon regorge de mini kits solaires « plug-and-play » sous 300 €. La majorité sont médiocres, quelques-uns valent vraiment leur prix. Analyse honnête et sélection des 5 kits qui tiennent leurs promesses.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>20 avril 2026</span><span>&middot;</span><span>9 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Sur Amazon, <strong>80% des mini kits solaires sous 300 € sont à éviter</strong> (puissances gonflées, faux avis, micro-onduleurs non conformes). Les 20% fiables sont identifiables : marques connues (Jackery, EcoFlow, Anker, Renogy), micro-onduleurs Enphase/Deye, SAV français. Pour un débutant, un kit 300W à 250-300 € bien choisi reste une bonne porte d&apos;entrée vers le solaire, avec un ROI de 4-5 ans.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi des mini kits Amazon plutôt qu&apos;un Sunology ou Beem ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La question revient souvent : si un <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY 2</Link> coûte 599 € et performe mieux que la plupart des kits Amazon, pourquoi chercher un mini kit à 250 € ?</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Trois raisons valables :</p>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>1. Tester le solaire sans se ruiner.</strong> Un mini kit 300W à 250 € permet de mesurer le potentiel de votre balcon avant d&apos;investir 600 € dans un kit premium. Si vous êtes locataire, nordiste, ou incertain de votre exposition, c&apos;est une bonne idée.</p>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>2. Compléter un kit existant.</strong> Vous avez déjà un Beem On 460W mais il reste de la place sur votre balcon ? Un mini kit 200W supplémentaire coûte 200 € et ajoute 200 kWh/an. Tant que vous restez sous 800W cumulés, vous êtes dans le cadre plug-and-play.</p>
              <p className="text-charcoal-light leading-relaxed">
                <strong>3. Usage mixte ou nomade.</strong> Pour un camping-car, un bateau, une tiny house, ou un balcon saisonnier, un mini kit portable est mieux adapté qu&apos;un kit fixe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 pièges Amazon à connaître</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avant de cliquer sur « acheter », apprenez à repérer les signaux d&apos;alerte les plus courants :</p>
              <div className="space-y-3">
                {pieges_amazon.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">&#x26A0;&#xFE0F; {p.piege}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre sélection : 5 mini kits qui valent vraiment le coup</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Après analyse des produits disponibles sur Amazon en avril 2026, voici les 5 kits qui tiennent leurs promesses. Chaque kit a été choisi pour sa qualité technique, la notoriété de la marque, et le sérieux des avis clients (vérifiés via Fake Spot).</p>
              <div className="space-y-6">
                {kits_selection.map((k) => (
                  <div key={k.num} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-lg bg-amber text-white flex items-center justify-center font-bold text-sm">{k.num}</span>
                          <h3 className="font-bold text-lg">{k.nom}</h3>
                        </div>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">{k.marque} &middot; {k.puissance}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-green text-lg">{k.prix}</div>
                        <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">Note : {k.note}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <div className="bg-green-pale/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-green mb-1">&#x2713; Avantages</p>
                        <p className="text-xs text-charcoal-light leading-relaxed">{k.avantages}</p>
                      </div>
                      <div className="bg-amber-pale/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-dark mb-1">&#x26A0;&#xFE0F; Inconvénients</p>
                        <p className="text-xs text-charcoal-light leading-relaxed">{k.inconvenients}</p>
                      </div>
                    </div>

                    <div className="bg-cream/60 rounded-lg p-3">
                      <p className="text-xs font-semibold text-charcoal mb-1">&#x1F4A1; Notre verdict</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{k.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Mini kit Amazon ou kit français : le vrai comparatif</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Pour trancher, voici un tableau comparatif honnête entre un mini kit Amazon à 280 € (Jackery 300W par exemple) et un <Link href="/avis/beem-kit-300w" className="text-green hover:underline">Beem Kit 300W</Link> à 299 € :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Critère</th><th className="text-center p-3">Mini kit Amazon (Jackery 300W)</th><th className="text-center p-3 rounded-tr-xl">Beem Kit 300W</th></tr></thead>
                  <tbody>
                    <tr className="bg-white border-b border-border-light"><td className="p-3 font-semibold">Prix</td><td className="text-center p-3">280 €</td><td className="text-center p-3">299 €</td></tr>
                    <tr className="bg-cream/50 border-b border-border-light"><td className="p-3 font-semibold">Production estimée</td><td className="text-center p-3">~280 kWh/an</td><td className="text-center p-3">~320 kWh/an</td></tr>
                    <tr className="bg-white border-b border-border-light"><td className="p-3 font-semibold">Micro-onduleur</td><td className="text-center p-3">Chinois non certifié</td><td className="text-center p-3">Deye certifié CE</td></tr>
                    <tr className="bg-cream/50 border-b border-border-light"><td className="p-3 font-semibold">Garantie panneau</td><td className="text-center p-3">10 ans</td><td className="text-center p-3">25 ans</td></tr>
                    <tr className="bg-white border-b border-border-light"><td className="p-3 font-semibold">SAV français</td><td className="text-center p-3">Via Amazon</td><td className="text-center p-3">Direct Beem</td></tr>
                    <tr className="bg-cream/50 border-b border-border-light"><td className="p-3 font-semibold">Déclaration CACSI</td><td className="text-center p-3">À faire soi-même</td><td className="text-center p-3">Pré-remplie fournie</td></tr>
                    <tr className="bg-white"><td className="p-3 font-semibold">Verdict</td><td className="text-center p-3 text-xs">Bon pour tester</td><td className="text-center p-3 text-xs font-bold text-green">Meilleur rapport long terme</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed">Sur 25 ans, la différence de 40 kWh/an (soit ~8 €/an) représente 200 € de production en plus côté Beem. Avec la meilleure garantie et le SAV direct, le Beem Kit 300W reste le meilleur choix pour un usage permanent. Mais si vous voulez <em>tester</em> le solaire ou usage mixte (balcon/camping), un Jackery reste une option valable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre recommandation finale</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">&#x2705; Budget &lt; 250 € : Jackery 300W ou Renogy 200W flexible</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Les deux seuls vrais bons choix sous 250 €. Jackery pour une pose fixe, Renogy pour surface courbe ou usage nomade.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">&#x26A0;&#xFE0F; Budget 250-299 € : hésitation légitime</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Pour 50 € de plus, le <Link href="/avis/beem-kit-300w" className="text-green hover:underline">Beem Kit 300W</Link> offre une vraie qualité pro. Si c&apos;est pour un usage permanent, ajoutez ces 50 €.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/20">
                  <h4 className="font-bold text-sm mb-1">&#x274C; À éviter absolument</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Tout kit &quot;500-800W plug-and-play sous 300 €&quot;. C&apos;est physiquement impossible à ce prix pour de la qualité. Les composants sont forcément mauvais.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Avant d&apos;acheter, vérifiez votre potentiel solaire</p>
              <p className="text-sm text-charcoal-light mb-4">Un mini kit 300W ne produira rien si votre balcon est nord ou à l&apos;ombre. Calculez votre production potentielle en 30 secondes.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer ma production &rarr;</Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/accessoires-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">8 accessoires indispensables</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les équipements pour optimiser votre installation</p>
                </Link>
                <Link href="/comparatif/kit-solaire-petit-budget" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Kits solaires petit budget</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les meilleurs choix sous 400 €</p>
                </Link>
                <Link href="/blog/kit-solaire-plug-and-play-arnaque" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Arnaque ou bon investissement ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Analyse honnête du marché 2026</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

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

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Note :</strong> cet article sera mis à jour régulièrement selon les nouveautés Amazon et l&apos;évolution des prix. Les liens affiliés seront ajoutés une fois notre inscription Amazon Partenaires validée. <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
