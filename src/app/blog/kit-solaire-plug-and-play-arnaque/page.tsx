import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Kit solaire plug-and-play : arnaque ou bon investissement ? (2026)',
  description: 'Les kits solaires plug-and-play sont-ils une arnaque ou un vrai investissement ? Analyse honnête des chiffres, des promesses, des pièges et du ROI réel en 2026.',
};

const faqData = [
  { question: 'Un kit solaire plug-and-play est-il vraiment rentable ?', answer: 'Oui, mais pas partout. Au sud d\'une ligne Lyon-Bordeaux, un kit 450W exposé plein sud atteint la rentabilité en 4-5 ans. Au nord et à l\'ouest, il faut plutôt compter 6-8 ans. Sur une garantie de 25 ans, le bénéfice net reste largement positif dans 95% des cas.' },
  { question: 'Pourquoi certaines personnes disent que c\'est une arnaque ?', answer: 'Trois raisons principales. D\'abord, quelques fabricants (pas les leaders) surestiment la production avec des chiffres théoriques impossibles. Ensuite, des acheteurs mal conseillés installent leur kit à l\'ombre ou mal orienté et ne produisent rien. Enfin, certains attendent "l\'indépendance énergétique" alors qu\'un kit 450W ne couvre que 5-10% de la conso moyenne.' },
  { question: 'Y a-t-il des vraies arnaques sur le marché ?', answer: 'Oui, sur AliExpress et sur certaines annonces Leboncoin. Panneaux d\'occasion vendus neufs, puissances exagérées, micro-onduleurs non conformes CE. Les kits vendus par Sunology, Beem, Sunethic, DualSun et EcoFlow respectent les normes françaises. En cas de doute, exigez les certifications NF/CE.' },
  { question: 'Combien de temps met-on pour rentabiliser son kit ?', answer: 'Entre 3 et 8 ans selon : la puissance du kit, votre exposition, votre ville, le prix payé. Un Beem Kit 300W à 299€ installé plein sud à Marseille rentabilise en moins de 3 ans. Un Sunology PLAY 2 à 599€ à Lille exposé est se rentabilise en 6-7 ans.' },
  { question: 'Que se passe-t-il si je déménage avant la fin du retour sur investissement ?', answer: 'Vous pouvez emporter votre kit : c\'est un gros avantage du plug-and-play vs une installation classique. Démontage en 15 minutes. Vous pouvez aussi le revendre d\'occasion : le marché secondaire est actif (-40% à -50% du prix neuf selon l\'âge et l\'état).' },
  { question: 'Ai-je vraiment besoin d\'un professionnel pour installer ?', answer: 'Non. C\'est tout l\'intérêt du plug-and-play : installation en 15-60 minutes, pas d\'électricien, pas de déclaration fiscale, juste un CACSI gratuit à envoyer à Enedis. Certains fabricants tentent de vous vendre une "installation pro" à 200€ — inutile.' },
];

const idees_recues = [
  { titre: 'Idée reçue n°1 : Les puissances annoncées sont fausses', reponse: 'Vrai ET faux. Les 450W "crête" d\'un panneau, c\'est la puissance maximale théorique dans des conditions idéales (soleil à 1000 W/m², 25°C, orientation parfaite). En vrai, un panneau 450W produit plutôt 300-400W en crête réelle. Mais cela est normalisé par des tests standardisés (STC) et tous les fabricants sérieux jouent le jeu.' },
  { titre: 'Idée reçue n°2 : Les micro-onduleurs grillent vite', reponse: 'Faux. Les micro-onduleurs Enphase, Deye, TSUN utilisés par les fabricants sérieux sont garantis 12 à 25 ans. Le taux de panne réel est inférieur à 0,5% par an. Le vrai risque vient des surtensions EDF et de la foudre : un parafoudre à 30€ règle le problème.' },
  { titre: 'Idée reçue n°3 : La production chute de moitié au bout de 5 ans', reponse: 'Faux. La dégradation réelle des panneaux silicium est de 0,5% par an, soit -12,5% au bout de 25 ans. Après 5 ans, votre panneau produit encore 97,5% de sa capacité d\'origine. Les fabricants sérieux garantissent 80-85% de performance à 25 ans.' },
  { titre: 'Idée reçue n°4 : Ça ne produit rien en hiver', reponse: 'Faux, mais nuancé. La production hivernale est de 20-30% de la production estivale, mais reste réelle. Un kit 450W produit 8-15 kWh par mois en janvier selon la région, ce qui compense quand même une partie de votre consommation hivernale (plus élevée qu\'en été).' },
  { titre: 'Idée reçue n°5 : Il faut une batterie sinon ça ne sert à rien', reponse: 'Faux. Sans batterie, l\'électricité produite est consommée en temps réel par vos appareils (frigo, box, veilles = "talon de consommation"). L\'autoconsommation directe représente 40-70% de la production. Une batterie améliore le ratio mais coûte 500-1400€, ce qui allonge le ROI.' },
];

const cas_arnaque = [
  { type: 'Kits AliExpress ou Temu', desc: 'Panneaux bas de gamme, micro-onduleurs non conformes CE, pas de SAV. Rentabilité théorique mais casse fréquente.', risque: 'Très élevé' },
  { type: 'Panneaux d\'occasion Leboncoin "neufs"', desc: 'Panneaux ayant 3-5 ans vendus comme neufs. Performance dégradée, garantie expirée, traçabilité impossible.', risque: 'Élevé' },
  { type: 'Démarchage téléphonique "subvention État"', desc: 'Aucune aide État pour le plug-and-play sous 3kWc en 2026. Toute offre "subventionnée" par téléphone est suspecte.', risque: 'Très élevé' },
  { type: 'Installeurs "plug-and-play à 1500€"', desc: 'Surfacturation de kits à 400-600€ au prix d\'une installation pro. Aucune valeur ajoutée technique.', risque: 'Élevé' },
  { type: 'Kits "800W plug-and-play"', desc: 'Au delà de 800W en injection, la conformité Enedis devient compliquée. Beaucoup de vendeurs ignorent le cadre légal.', risque: 'Moyen' },
];

const criteres_fiable = [
  { critere: 'Marque identifiée', detail: 'Sunology, Beem, Sunethic, DualSun, EcoFlow, Zendure, Anker : tous ont pignon sur rue et SAV en France.' },
  { critere: 'Garantie minimale 10 ans panneau + 5 ans micro-onduleur', detail: 'Les fabricants sérieux garantissent 20-25 ans sur les panneaux et 12-25 ans sur le micro-onduleur.' },
  { critere: 'Certifications CE + normes NF', detail: 'Certification CE obligatoire pour vendre en France. Normes NF C 15-100 pour la conformité électrique.' },
  { critere: 'Support client francophone', detail: 'Email, téléphone ou chat français. Fuyez les marques qui ne répondent qu\'en anglais ou en chinois.' },
  { critere: 'Avis clients indépendants', detail: 'Trustpilot, Google Reviews, forums photovoltaïques. Méfiez-vous des notes parfaites avec 50 avis récents.' },
  { critere: 'Conformité CACSI Enedis', detail: 'Le fabricant fournit le formulaire pré-rempli ou au moins un guide clair pour la déclaration gratuite.' },
];

export default function ArnaqueInvestissementPage() {
  return (
    <>
      <SchemaArticle title="Kit solaire plug-and-play : arnaque ou bon investissement ?" description="Analyse honnête du marché des kits solaires plug-and-play en 2026 : arnaques, vrais risques, ROI réel, critères de choix." url="https://monbalconsolaire.fr/blog/kit-solaire-plug-and-play-arnaque" datePublished="2026-04-19" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Arnaque ou investissement ?' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Kit solaire plug-and-play : arnaque ou bon investissement ?</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Les kits solaires de balcon font beaucoup parler, y compris en mal. Fausses promesses, sous-performance, revente douteuse : les critiques sont réelles. Mais s&apos;agit-il d&apos;une arnaque ou d&apos;un véritable investissement ? Analyse honnête, chiffres en main.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>19 avril 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">Non, le kit solaire plug-and-play n&apos;est <strong>pas une arnaque</strong> : les fabricants sérieux (Sunology, Beem, Sunethic, DualSun) vendent des produits conformes, garantis et rentables. <strong>Oui, il existe des arnaques</strong> sur AliExpress, Temu, Leboncoin et via le démarchage téléphonique. Un kit bien choisi, bien installé, atteint la rentabilité en 3 à 8 ans selon la région et produit ensuite de l&apos;électricité gratuite pendant 17 à 22 ans supplémentaires.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi cette question revient tout le temps ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le mot-clé « kit solaire arnaque » est tapé plusieurs centaines de fois par mois sur Google. Cette méfiance vient de trois sources distinctes, qu&apos;il faut bien distinguer.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">D&apos;abord, <strong>le mauvais souvenir collectif de l&apos;arnaque photovoltaïque des années 2010</strong>. Des milliers de foyers ont été démarchés avec des crédits à 10 000€ pour des installations surfacturées. Le plug-and-play n&apos;a rien à voir : prix fixe, pas de crédit, pas de démarchage.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Ensuite, <strong>des attentes irréalistes</strong>. Beaucoup imaginent que 600€ d&apos;investissement suffit à être autonome en électricité. C&apos;est faux : un kit 450W couvre 5 à 15% de la consommation moyenne d&apos;un ménage. C&apos;est déjà très bien, mais il faut le savoir.</p>
              <p className="text-charcoal-light leading-relaxed">Enfin, <strong>des vraies arnaques</strong> existent, notamment sur les plateformes étrangères et via le démarchage. Elles donnent une mauvaise image à tout le marché.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 idées reçues à démêler</h2>
              <div className="space-y-4">
                {idees_recues.map((idea, i) => (
                  <div key={i} className="card-lg border-l-4 border-l-amber">
                    <h3 className="font-bold text-base mb-2">{idea.titre}</h3>
                    <p className="text-sm text-charcoal-light leading-relaxed">{idea.reponse}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 vraies arnaques à éviter</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Il existe bel et bien des arnaques sur le marché du solaire de balcon. Voici les cinq pièges les plus courants en 2026 :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Type d&apos;arnaque</th><th className="text-left p-3">Description</th><th className="text-center p-3 rounded-tr-xl">Niveau de risque</th></tr></thead>
                  <tbody>
                    {cas_arnaque.map((cas, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{cas.type}</td>
                        <td className="p-3 text-xs">{cas.desc}</td>
                        <td className="text-center p-3">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-md ${cas.risque.includes('Très') ? 'bg-amber-pale text-amber-dark' : cas.risque === 'Élevé' ? 'bg-amber-pale/60 text-amber-dark' : 'bg-cream-dark text-stone'}`}>{cas.risque}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 6 critères d&apos;un kit fiable</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Pour éviter les mauvaises surprises, vérifiez ces six critères avant d&apos;acheter :</p>
              <div className="space-y-3">
                {criteres_fiable.map((c, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">✓ {c.critere}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le vrai calcul de rentabilité (sans blabla)</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Prenons un exemple concret pour couper court aux débats. Un ménage moyen en région lyonnaise qui achète un kit Sunology PLAY 2 (599€, 450W) :</p>
              <div className="card-lg bg-cream/40 mb-4">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Production annuelle</strong> : environ 500 kWh (orientation sud, Lyon)</li>
                  <li>&bull; <strong>Autoconsommation réelle</strong> : 60% soit 300 kWh directement économisés</li>
                  <li>&bull; <strong>Économies annuelles</strong> : 300 kWh &times; 0,1940 &euro;/kWh = <strong>58 &euro;/an</strong></li>
                  <li>&bull; <strong>ROI simple</strong> : 599 &euro; / 58 &euro; = <strong>10,3 ans</strong></li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">&laquo; Alors c&apos;est une arnaque, le ROI est catastrophique ! &raquo; pense peut-être un lecteur. Pas si vite. Ce calcul ignore deux réalités.</p>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>Réalité n°1 : le prix de l&apos;électricité augmente.</strong> Sur les 10 dernières années, le tarif EDF a augmenté de 4-5% par an. Avec cette tendance, les économies réelles passent à 85-100&euro;/an dès la 5ème année, et le ROI tombe à 7-8 ans au lieu de 10.</p>
              <p className="text-charcoal-light leading-relaxed mb-4"><strong>Réalité n°2 : la durée de vie.</strong> Le kit est garanti 25 ans. Après le ROI atteint, chaque année produit entre 70 et 150&euro; d&apos;économies pures. Sur la durée totale, le gain net est de <strong>1 500 à 2 500&euro;</strong>. Ce n&apos;est pas révolutionnaire, mais ce n&apos;est clairement pas une arnaque.</p>
              <p className="text-charcoal-light leading-relaxed">Pour un calcul précis selon votre département et votre exposition, utilisez notre calculateur.</p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre situation est-elle rentable ?</p>
              <p className="text-sm text-charcoal-light mb-4">Département, orientation, puissance du kit : calculez votre ROI exact en 30 secondes.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer ma rentabilité &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Alors, faut-il acheter ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">La réponse dépend de votre profil. Voici trois cas de figure :</p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">✅ Oui, clairement</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Vous êtes propriétaire (ou locataire avec accord), votre balcon est exposé sud, sud-est ou sud-ouest, et vous restez au moins 5 ans au même endroit. Le kit 450W est votre meilleur choix.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">⚠️ Oui, mais avec précaution</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Votre balcon est est/ouest ou partiellement ombragé, ou vous habitez dans le quart nord de la France. Choisissez un kit plus petit (300W) pour limiter le risque, ou attendez d&apos;être sûr de votre situation.</p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/20">
                  <h4 className="font-bold text-sm mb-1">❌ Non, pas encore</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Votre balcon est plein nord ou totalement à l&apos;ombre, ou vous cherchez l&apos;autonomie énergétique complète. Un kit 450W ne couvrira pas 10% de votre consommation. Investissez ailleurs (isolation, pompe à chaleur).</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleurs kits solaires 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le comparatif complet des modèles fiables</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien ça rapporte ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le calcul détaillé par ville avec chiffres réels</p>
                </Link>
                <Link href="/guide/reglementation-panneau-solaire-balcon-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Réglementation 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">NF C 15-100, CACSI, 900W — tout ce qui est légal</p>
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
              <p className="text-xs text-stone leading-relaxed"><strong>Méthodologie :</strong> données fabricants 2026, tarifs EDF régulés, PVGIS pour l&apos;irradiation solaire. Analyse indépendante, sans rémunération des fabricants cités. <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
