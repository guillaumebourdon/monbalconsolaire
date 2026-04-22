import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Lampes solaires extérieures pour balcon : 10 modèles sélectionnés (2026)',
  description: 'Comparatif des meilleures lampes solaires extérieures pour balcon en 2026 : guirlandes, appliques, projecteurs, lanternes. Sélection honnête et critères de choix.',
};

const faqData = [
  {
    question: 'Les lampes solaires fonctionnent-elles vraiment sur un balcon ?',
    answer: 'Oui, à condition que le panneau solaire reçoive au moins 4-5 heures de soleil direct par jour. Sur un balcon sud, sud-est ou sud-ouest, même petit, elles se rechargent sans problème. Sur un balcon nord ou très ombragé, l\'autonomie sera réduite de moitié, surtout en hiver.',
  },
  {
    question: 'Combien de temps une lampe solaire éclaire-t-elle après une journée ensoleillée ?',
    answer: 'Cela dépend de la capacité de la batterie et des LED. Les modèles d\'entrée de gamme (600-1200 mAh) offrent 4-6 heures, suffisantes pour une soirée complète. Les modèles haut de gamme (2000-4000 mAh) tiennent 8-12 heures, voire toute la nuit en mode faible.',
  },
  {
    question: 'Sont-elles étanches à la pluie ?',
    answer: 'Les modèles certifiés IP44 résistent aux projections d\'eau (pluie oblique). IP65 protège contre les jets d\'eau directs. IP67 permet même une immersion temporaire. Pour un balcon exposé, visez IP44 minimum. Méfiez-vous des lampes non certifiées, souvent vendues sous 15 €.',
  },
  {
    question: 'Quelle différence entre lampe solaire et guirlande solaire ?',
    answer: 'La lampe solaire est autonome et lumineuse (applique, projecteur, lanterne). La guirlande solaire est décorative, avec des LED faibles mais nombreuses, idéale pour l\'ambiance. Pour éclairer un coin repas, prenez une applique ou un projecteur. Pour décorer, une guirlande 10-20 m.',
  },
  {
    question: 'Y a-t-il des lampes solaires avec détecteur de mouvement ?',
    answer: 'Oui, beaucoup de modèles en proposent, surtout les projecteurs. Le détecteur de mouvement (PIR) allume la lampe à pleine puissance pendant 15-30 secondes quand quelqu\'un passe. Idéal pour la sécurité et l\'économie d\'énergie : la lampe reste en mode faible ou éteinte le reste du temps.',
  },
  {
    question: 'Combien coûte une bonne lampe solaire en 2026 ?',
    answer: 'Comptez 15-30 € pour une lampe solaire basique de qualité (applique, lanterne). 30-60 € pour un projecteur avec détecteur. 20-50 € pour une guirlande solaire 5-10 m. Au-delà de 80 €, vous entrez dans les lampes design (Fermob, Lexon) qui vendent aussi l\'esthétique.',
  },
];

const lampes = [
  {
    num: 1,
    nom: 'Lanterne solaire Fatboy Transloetje',
    marque: 'Fatboy',
    categorie: 'Lanterne design',
    prix: '59-79 €',
    autonomie: '8-10h',
    luminosite: '100 lumens',
    ip: 'IP44',
    note: '8,5/10',
    verdict: 'Le choix déco haut de gamme. Portable, rechargeable USB ou solaire, design hollandais.',
  },
  {
    num: 2,
    nom: 'Guirlande LED solaire 20 m',
    marque: 'Lunartec / Philips',
    categorie: 'Guirlande décorative',
    prix: '25-40 €',
    autonomie: '6-8h',
    luminosite: '50 lumens',
    ip: 'IP44',
    note: '8/10',
    verdict: '200 LED blanches chaudes sur 20 mètres. Ambiance parfaite pour les soirées. 8 modes différents.',
  },
  {
    num: 3,
    nom: 'Projecteur solaire 60 LED avec détecteur',
    marque: 'Litom / Mpow',
    categorie: 'Projecteur sécurité',
    prix: '30-45 €',
    autonomie: '10-12h (mode bas)',
    luminosite: '800 lumens',
    ip: 'IP65',
    note: '8/10',
    verdict: 'Puissant et efficace. Détecteur PIR à 8m, allumage instantané. Idéal pour l\'entrée d\'un balcon ou un coin repas.',
  },
  {
    num: 4,
    nom: 'Applique solaire LED Ring',
    marque: 'Philips MyGarden',
    categorie: 'Applique murale',
    prix: '45-65 €',
    autonomie: '8h',
    luminosite: '200 lumens',
    ip: 'IP44',
    note: '8/10',
    verdict: 'Discret et efficace. Se fixe au mur via vis ou adhésif puissant. Design minimaliste.',
  },
  {
    num: 5,
    nom: 'Lampe solaire Cobra à piquer',
    marque: 'Générique qualité',
    categorie: 'Lampe à poser',
    prix: '20-30 € (lot de 4)',
    autonomie: '6-8h',
    luminosite: '30 lumens',
    ip: 'IP44',
    note: '7,5/10',
    verdict: 'Pas besoin de fixation. À poser sur le rebord ou dans une jardinière. Pratique et démontable.',
  },
  {
    num: 6,
    nom: 'Lampe solaire Lexon Mina',
    marque: 'Lexon',
    categorie: 'Lampe portable design',
    prix: '70-90 €',
    autonomie: '8h',
    luminosite: '70 lumens',
    ip: 'IP44',
    note: '8/10',
    verdict: 'Lampe design française, rechargeable USB aussi. Magnétique, se fixe sur surfaces métalliques. Premium.',
  },
  {
    num: 7,
    nom: 'Guirlande Edison solaire 10 ampoules',
    marque: 'Brightown',
    categorie: 'Guirlande vintage',
    prix: '30-40 €',
    autonomie: '6h',
    luminosite: '80 lumens',
    ip: 'IP44',
    note: '7,5/10',
    verdict: 'Grosses ampoules style Edison, ambiance guinguette. Attention : moins durable qu\'une guirlande LED classique.',
  },
  {
    num: 8,
    nom: 'Projecteur solaire 2-en-1 avec batterie USB',
    marque: 'Hybride BougeRV',
    categorie: 'Projecteur polyvalent',
    prix: '40-55 €',
    autonomie: '10h + powerbank',
    luminosite: '500 lumens',
    ip: 'IP65',
    note: '7,5/10',
    verdict: 'Innovation : la batterie se détache pour servir de powerbank USB. Pratique mais complexifie l\'utilisation.',
  },
  {
    num: 9,
    nom: 'Lanterne solaire Lumena Pro',
    marque: 'Lumena',
    categorie: 'Lanterne outdoor pro',
    prix: '60-80 €',
    autonomie: '12h (mode bas)',
    luminosite: '1000 lumens max',
    ip: 'IP67',
    note: '8/10',
    verdict: 'Très puissante, étanche immersion. Surdimensionnée pour un balcon mais excellente en randonnée/camping.',
  },
  {
    num: 10,
    nom: 'Lampe solaire Fermob Balad',
    marque: 'Fermob',
    categorie: 'Lampe nomade haute gamme',
    prix: '130-180 €',
    autonomie: '5-7h',
    luminosite: '80 lumens',
    ip: 'IP44',
    note: '8,5/10',
    verdict: 'La référence absolue du design extérieur français. Coûteuse mais intemporelle. Garantie 5 ans.',
  },
];

const profils = [
  {
    titre: 'Budget serré, effet déco rapide',
    reco: 'Guirlande LED solaire 20 m (25-40 €) + lot de 4 lampes à piquer (20-30 €)',
    total: 'Budget total : 45-70 €',
    explication: 'Pour illuminer un balcon et créer une ambiance chaleureuse sans se ruiner. La combinaison guirlande + petites lampes au sol couvre la majorité des besoins.',
  },
  {
    titre: 'Balcon coin repas (besoin d\'éclairage fonctionnel)',
    reco: 'Applique solaire Philips MyGarden ou projecteur Litom 60 LED',
    total: 'Budget : 30-65 €',
    explication: 'Pour manger dehors le soir ou lire, il faut au moins 200-500 lumens. Une applique au-dessus de la table ou un projecteur orienté vers le bas fait le job.',
  },
  {
    titre: 'Recherche du premium, esthétique prime',
    reco: 'Fermob Balad (130-180 €) + guirlande design Philips (40 €)',
    total: 'Budget : 170-220 €',
    explication: 'Pour ceux qui veulent du beau, du durable et du "made in France" ou premium. Investissement amorti sur 5-10 ans.',
  },
  {
    titre: 'Sécurité avant tout',
    reco: 'Projecteur solaire 60 LED avec détecteur (30-45 €)',
    total: 'Budget : 30-45 €',
    explication: 'Allumage automatique au mouvement, idéal pour un balcon en rez-de-chaussée ou visible depuis la rue. Effet dissuasif.',
  },
];

const criteres = [
  { critere: 'Indice de protection (IP)', detail: 'IP44 minimum pour un balcon exposé (pluie). IP65 recommandé en zone venteuse ou orageuse. IP67 pour immersion temporaire (rarement nécessaire).' },
  { critere: 'Capacité de batterie (mAh)', detail: '800-1500 mAh pour un usage décoratif (guirlandes). 2000-4000 mAh pour un éclairage fonctionnel. Plus la capacité est élevée, plus l\'autonomie l\'est.' },
  { critere: 'Luminosité (lumens)', detail: '30-80 lumens pour l\'ambiance. 150-300 lumens pour lire ou manger. 500+ lumens pour éclairer tout le balcon ou dissuader.' },
  { critere: 'Température de couleur', detail: 'Blanc chaud (2700-3000 K) pour une ambiance cosy. Blanc neutre (4000 K) pour éclairer fonctionnellement. Blanc froid (6000 K+) à éviter sur un balcon résidentiel (trop clinique).' },
  { critere: 'Durée de vie des LED', detail: '25 000 à 50 000 heures pour les LED de qualité, soit 8 à 15 ans d\'usage quotidien. Évitez les lampes sans mention de durée de vie : souvent des LED bas de gamme qui grillent en 1-2 ans.' },
  { critere: 'Mode d\'allumage', detail: 'Capteur crépusculaire (allumage automatique au coucher du soleil) : pratique. Détecteur PIR (mouvement) : économique. Télécommande : gadget utile pour moduler les modes.' },
];

export default function LampesSolairesPage() {
  return (
    <>
      <SchemaArticle
        title="Lampes solaires extérieures pour balcon : 10 modèles sélectionnés"
        description="Comparatif des meilleures lampes solaires pour balcon en 2026."
        url="https://monbalconsolaire.fr/blog/lampes-solaires-balcon-2026"
        datePublished="2026-04-22"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Accessoires', href: '/accessoires' }, { label: 'Lampes solaires extérieures' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Sélection 2026</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Lampes solaires extérieures pour balcon : 10 modèles sélectionnés (2026)
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Guirlande, applique, projecteur, lanterne : le choix des lampes solaires est vaste mais la qualité très inégale. Voici 10 modèles qui tiennent vraiment leurs promesses en 2026, du budget serré au premium design.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>22 avril 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En résumé</h2>
            <p className="text-charcoal-light text-sm leading-relaxed">
              Pour une <strong>ambiance décorative</strong>, une guirlande LED solaire 20 m (25-40 €) est imbattable. Pour un <strong>éclairage fonctionnel</strong> (coin repas, lecture), une applique Philips MyGarden ou un projecteur Litom suffit (30-65 €). Pour le <strong>premium design</strong>, la Fermob Balad reste la référence mais coûte 130-180 €. Évitez les lampes sans indice IP et les modèles sous 15 € : qualité généralement mauvaise, durée de vie &lt; 1 an.
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi des lampes solaires sur un balcon ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un balcon sans éclairage, c&apos;est un balcon inutilisable dès 20h en hiver. Deux solutions classiques s&apos;offrent à vous : tirer une rallonge depuis l&apos;intérieur (souvent peu pratique, parfois dangereux), ou opter pour des lampes solaires (zéro câble, zéro consommation, installation immédiate).
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Les avantages des lampes solaires sont évidents :
              </p>
              <ul className="text-charcoal-light leading-relaxed space-y-2 mb-4 pl-5">
                <li>&bull; <strong>Pas d&apos;installation électrique</strong> : pas de tranchée, pas d&apos;électricien, pas d&apos;autorisation</li>
                <li>&bull; <strong>Zéro consommation électrique</strong> : gratuit après l&apos;achat</li>
                <li>&bull; <strong>Démontables en 5 minutes</strong> : parfait en location</li>
                <li>&bull; <strong>Résistantes aux intempéries</strong> (avec bonne certification IP)</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed">
                Mais attention : toutes les lampes solaires ne se valent pas. Le marché est saturé de modèles chinois bas de gamme à 10-15 € qui grillent après 3 mois. L&apos;investissement intelligent se fait entre 25 et 60 € selon l&apos;usage.
              </p>
            </section>

            {/* Tableau comparatif */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau comparatif rapide</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Modèle</th>
                      <th className="text-center p-3">Catégorie</th>
                      <th className="text-center p-3">Luminosité</th>
                      <th className="text-center p-3">Autonomie</th>
                      <th className="text-center p-3">Prix</th>
                      <th className="text-center p-3 rounded-tr-xl">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lampes.map((l, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-xs">{l.nom}</td>
                        <td className="text-center p-3 text-xs">{l.categorie}</td>
                        <td className="text-center p-3 font-mono text-xs">{l.luminosite}</td>
                        <td className="text-center p-3 font-mono text-xs">{l.autonomie}</td>
                        <td className="text-center p-3 font-mono text-xs">{l.prix}</td>
                        <td className="text-center p-3">
                          <span className="text-xs font-bold text-green">{l.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Les 10 lampes en détail */}
            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 10 lampes solaires sélectionnées</h2>
              <div className="space-y-5">
                {lampes.map((l) => (
                  <div key={l.num} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-lg bg-amber text-white flex items-center justify-center font-bold text-sm">{l.num}</span>
                          <h3 className="font-bold text-base">{l.nom}</h3>
                        </div>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">
                          {l.marque} &middot; {l.categorie}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-green text-lg">{l.prix}</div>
                        <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">
                          Note : {l.note}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                      <div className="bg-cream/60 rounded-lg p-2 text-center">
                        <div className="text-[9px] text-stone uppercase tracking-wider">Luminosité</div>
                        <div className="font-mono font-semibold text-charcoal mt-1">{l.luminosite}</div>
                      </div>
                      <div className="bg-cream/60 rounded-lg p-2 text-center">
                        <div className="text-[9px] text-stone uppercase tracking-wider">Autonomie</div>
                        <div className="font-mono font-semibold text-charcoal mt-1">{l.autonomie}</div>
                      </div>
                      <div className="bg-cream/60 rounded-lg p-2 text-center">
                        <div className="text-[9px] text-stone uppercase tracking-wider">Étanchéité</div>
                        <div className="font-mono font-semibold text-charcoal mt-1">{l.ip}</div>
                      </div>
                    </div>

                    <div className="bg-green-pale/30 rounded-lg p-3">
                      <p className="text-xs font-semibold text-green mb-1">💡 Notre verdict</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{l.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Profils */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel setup selon votre profil ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Plutôt que d&apos;acheter une seule lampe &laquo; générique &raquo;, combinez selon votre usage principal. Voici 4 configurations types :
              </p>
              <div className="space-y-3">
                {profils.map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.titre}</h4>
                    <p className="text-xs text-amber font-semibold mb-1">→ {p.reco}</p>
                    <p className="text-xs text-stone italic mb-2">{p.total}</p>
                    <p className="text-xs text-charcoal-light leading-relaxed">{p.explication}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Critères de choix */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 6 critères à vérifier avant d&apos;acheter</h2>
              <div className="space-y-3">
                {criteres.map((c, i) => (
                  <div key={i} className="card">
                    <h4 className="font-bold text-sm mb-1">{i + 1}. {c.critere}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{c.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Erreurs à éviter */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 3 erreurs à éviter</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ Acheter des lampes sans indice IP affiché</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Une lampe non certifiée IP44 en extérieur grille dès la première pluie oblique. Exigez IP44 minimum, toujours indiqué clairement sur la fiche produit.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ Choisir du blanc froid pour l&apos;ambiance</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Le blanc froid (6000K+) donne un aspect &laquo; hôpital &raquo; très désagréable pour un balcon. Privilégiez le blanc chaud (2700-3000K) ou neutre (4000K) pour une ambiance agréable.
                  </p>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-1 text-amber-dark">❌ Croire que &quot;plus de lumens = mieux&quot;</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    Un projecteur 1000 lumens sur un balcon de 4 m², c&apos;est éblouissant pour vous et dérangeant pour les voisins. Calibrez : 80-200 lumens pour l&apos;ambiance, 300-500 lumens pour l&apos;éclairage fonctionnel.
                  </p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Au-delà des lampes, pensez au kit solaire</p>
              <p className="text-sm text-charcoal-light mb-4">
                Une guirlande solaire consomme quelques watts. Un vrai kit solaire plug-and-play couvre 5 à 15 % de votre facture EDF. Calculez votre potentiel en 30 secondes.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mon potentiel →
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles liés</h2>
              <div className="space-y-3">
                <Link href="/blog/accessoires-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">8 accessoires indispensables</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les équipements pour optimiser votre installation solaire</p>
                </Link>
                <Link href="/blog/mini-kits-solaires-amazon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mini kits solaires Amazon &lt; 300 €</h4>
                  <p className="text-xs text-charcoal-light mt-1">Nos 5 sélections pour tester le solaire à petit budget</p>
                </Link>
                <Link href="/blog/batteries-portables-solaires-comparatif" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Batteries portables solaires : comparatif 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">EcoFlow, Bluetti, Jackery : 6 modèles pour backup et nomade</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Note :</strong> prix constatés en avril 2026 (Amazon, sites fabricants, magasins spécialisés). Peuvent varier selon les promotions. Les liens affiliés seront ajoutés une fois nos inscriptions partenaires validées.{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre méthode</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
