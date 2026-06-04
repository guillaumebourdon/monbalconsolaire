import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: 'Entretien et nettoyage d\'un panneau solaire de balcon : le guide complet',
  description: 'Comment nettoyer un panneau solaire de balcon ? Fréquence, produits, erreurs à éviter, impact sur la production. Guide pratique avec checklist saisonnière.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/blog/entretien-nettoyage-panneau-solaire-balcon',
  },
};

const faqData = [
  {
    question: 'À quelle fréquence faut-il nettoyer un panneau solaire de balcon ?',
    answer: '2 à 4 fois par an suffisent dans la plupart des cas. En ville, 2 nettoyages (printemps + automne) couvrent l\'essentiel. Près d\'arbres ou en zone industrielle, passez à 4 nettoyages. Après une tempête de sable ou un épisode de pollen intense, un nettoyage ponctuel est recommandé.',
  },
  {
    question: 'Peut-on utiliser un Kärcher sur un panneau solaire ?',
    answer: 'Non, jamais. La pression (80-150 bars) peut endommager le joint d\'étanchéité entre la vitre et le cadre aluminium, fissurer les micro-soudures des cellules, et provoquer des infiltrations d\'eau. Un simple jet d\'eau au tuyau d\'arrosage (2-5 bars) suffit largement.',
  },
  {
    question: 'Quel produit utiliser pour nettoyer un panneau solaire ?',
    answer: 'De l\'eau claire dans 90 % des cas. Si nécessaire, une goutte de liquide vaisselle neutre (pas de Javel, pas de vinaigre, pas de produit à vitres). Les produits abrasifs rayent le revêtement anti-reflet et réduisent la production de façon permanente.',
  },
  {
    question: 'Un panneau sale perd-il vraiment en production ?',
    answer: 'Oui, de 5 à 20 % selon le type de salissure. La poussière urbaine coûte 5-8 % de production. Le pollen au printemps peut atteindre 10-15 %. Les fientes d\'oiseaux, si elles couvrent une cellule entière, peuvent réduire la production de 20-30 % à cause du fonctionnement en série des cellules.',
  },
  {
    question: 'Faut-il nettoyer son panneau en hiver ?',
    answer: 'Généralement non. La pluie et la neige fondante nettoient naturellement le panneau en hiver. La production est déjà basse (jours courts), donc le gain d\'un nettoyage est marginal. Exception : si des feuilles mortes collent à la surface en novembre-décembre, retirez-les.',
  },
  {
    question: 'Un panneau solaire de balcon nécessite-t-il un entretien technique ?',
    answer: 'Très peu. Vérifiez les connexions électriques (câble, prise) 1 à 2 fois par an : pas de fissure, pas de jaunissement, pas de jeu. Contrôlez les fixations (châssis, lests) après les tempêtes. Le micro-onduleur et le panneau lui-même n\'ont aucune pièce d\'usure — pas de maintenance nécessaire.',
  },
];

const salissures = [
  { type: 'Poussière urbaine', impact: '5-8 %', frequence: 'Constant', solution: 'Eau claire + chiffon doux. 2 nettoyages/an.' },
  { type: 'Pollen', impact: '10-15 %', frequence: 'Mars-juin', solution: 'Eau tiède + chiffon microfibre. Nettoyer dès que la couche jaune est visible.' },
  { type: 'Fientes d\'oiseaux', impact: '20-30 %', frequence: 'Variable', solution: 'Eau tiède pour ramollir (10 min), puis éponge douce. Ne pas gratter.' },
  { type: 'Feuilles mortes', impact: '15-40 %', frequence: 'Oct-déc', solution: 'Retirer à la main. Vérifier que rien ne reste coincé sous le cadre.' },
  { type: 'Pollution grasse (suie)', impact: '8-12 %', frequence: 'Zones urbaines', solution: 'Eau + goutte de liquide vaisselle neutre. Rincer abondamment.' },
  { type: 'Calcaire (eau dure)', impact: '3-5 %', frequence: 'Après nettoyage', solution: 'Utiliser de l\'eau déminéralisée ou rincer tôt le matin (rosée).' },
];

const erreurs = [
  {
    titre: 'Utiliser un Kärcher ou un nettoyeur haute pression',
    risque: 'Endommage les joints, fissure les cellules, annule la garantie',
    alternative: 'Jet d\'eau au tuyau d\'arrosage (2-5 bars max)',
  },
  {
    titre: 'Nettoyer en plein soleil à midi',
    risque: 'Choc thermique (eau froide sur verre chaud = micro-fissures), évaporation rapide qui laisse des traces de calcaire',
    alternative: 'Nettoyer tôt le matin ou en fin de journée',
  },
  {
    titre: 'Utiliser des produits abrasifs ou acides',
    risque: 'Raye le revêtement anti-reflet, perte de production permanente de 3-5 %',
    alternative: 'Eau claire ou liquide vaisselle neutre uniquement',
  },
  {
    titre: 'Gratter les fientes séchées',
    risque: 'Rayures profondes sur la vitre du panneau',
    alternative: 'Tremper 10 minutes à l\'eau tiède, puis éponge douce',
  },
  {
    titre: 'Monter sur le panneau pour le nettoyer',
    risque: 'Poids concentré = micro-fissures invisibles dans les cellules (hotspots)',
    alternative: 'Toujours nettoyer depuis le côté, sans appuyer sur la surface',
  },
];

const checklistSaisonniere = [
  {
    saison: 'Printemps (mars-avril)',
    taches: [
      'Nettoyer le panneau (pollen, poussière hivernale)',
      'Vérifier les fixations après les tempêtes d\'hiver',
      'Contrôler les connexions électriques (câble, prise)',
      'Vérifier que l\'app de suivi fonctionne bien',
    ],
  },
  {
    saison: 'Été (juin-juillet)',
    taches: [
      'Vérifier l\'absence de salissure (fientes, poussière)',
      'Contrôler que la ventilation arrière n\'est pas obstruée',
      'Comparer la production à PVGIS — c\'est le meilleur mois pour valider',
    ],
  },
  {
    saison: 'Automne (septembre-octobre)',
    taches: [
      'Grand nettoyage : poussière d\'été, feuilles mortes',
      'Resserrer les fixations si nécessaire',
      'Vérifier les lests (poids suffisant pour les vents d\'hiver)',
      'Inspecter le câble : pas de fissure, pas de morsure (rongeurs en terrasse)',
    ],
  },
  {
    saison: 'Hiver (décembre)',
    taches: [
      'Retirer les feuilles mortes collées',
      'Pas de nettoyage nécessaire (la pluie suffit)',
      'Vérifier que la neige ne s\'accumule pas (incliner le panneau aide)',
    ],
  },
];

export default function EntretienNettoyagePage() {
  return (
    <>
      <SchemaArticle
        title="Entretien et nettoyage d'un panneau solaire de balcon"
        description="Comment nettoyer et entretenir un panneau solaire de balcon : fréquence, méthode, erreurs à éviter."
        url="https://monbalconsolaire.fr/blog/entretien-nettoyage-panneau-solaire-balcon"
        datePublished="2026-06-04"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Entretien et nettoyage' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Entretien et nettoyage d&apos;un panneau solaire de balcon : le guide complet
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Un panneau solaire de balcon demande <strong>tr&egrave;s peu d&apos;entretien</strong> &mdash; mais le peu qu&apos;il faut faire compte. Un panneau sale perd <strong>5 &agrave; 20 % de production</strong>. Voici comment le nettoyer correctement, &agrave; quelle fr&eacute;quence, et les erreurs qui co&ucirc;tent cher.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>4 juin 2026</span>
              <span>&middot;</span>
              <span>9 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel en 30 secondes</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li>&bull; <strong>Fr&eacute;quence :</strong> 2 &agrave; 4 nettoyages par an (printemps + automne minimum)</li>
              <li>&bull; <strong>Mat&eacute;riel :</strong> eau claire + chiffon microfibre ou &eacute;ponge douce</li>
              <li>&bull; <strong>Quand :</strong> t&ocirc;t le matin ou en fin de journ&eacute;e (jamais en plein soleil)</li>
              <li>&bull; <strong>Interdit :</strong> K&auml;rcher, produits abrasifs, vinaigre, grattoir</li>
              <li>&bull; <strong>Gain :</strong> +5 &agrave; 15 % de production r&eacute;cup&eacute;r&eacute;e apr&egrave;s nettoyage</li>
              <li>&bull; <strong>Entretien technique :</strong> v&eacute;rifier fixations + c&acirc;bles 2 fois/an</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi nettoyer son panneau solaire ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un panneau solaire fonctionne en captant la lumi&egrave;re &agrave; travers sa vitre de protection. Tout ce qui se d&eacute;pose sur cette vitre &mdash; poussi&egrave;re, pollen, fientes, pollution &mdash; <strong>r&eacute;duit la quantit&eacute; de lumi&egrave;re</strong> qui atteint les cellules photovolta&iuml;ques.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                La perte est progressive et souvent invisible &agrave; l&apos;&oelig;il nu. Vous ne verrez pas la diff&eacute;rence sur le panneau, mais votre <Link href="/blog/prises-connectees-suivi-solaire" className="text-green hover:underline font-semibold">prise connect&eacute;e de suivi</Link> la mesurera.
              </p>
              <div className="card-lg bg-amber-pale/30 border-amber/10">
                <p className="text-sm text-charcoal-light leading-relaxed">
                  <strong>Le pi&egrave;ge des fientes d&apos;oiseaux :</strong> une fiente sur une seule cellule peut r&eacute;duire la production de 20-30 % (pas seulement la cellule concern&eacute;e). C&apos;est le m&ecirc;me ph&eacute;nom&egrave;ne que l&apos;<Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green hover:underline">ombre partielle</Link> : les cellules en s&eacute;rie font que le maillon faible p&eacute;nalise toute la cha&icirc;ne.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Impact de chaque type de salissure</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Salissure</th>
                      <th className="p-3 text-right font-bold">Perte</th>
                      <th className="p-3 text-left font-bold">P&eacute;riode</th>
                      <th className="p-3 text-left font-bold">Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salissures.map((s, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{s.type}</td>
                        <td className="p-3 text-right font-mono text-amber-dark">{s.impact}</td>
                        <td className="p-3 text-xs text-charcoal-light">{s.frequence}</td>
                        <td className="p-3 text-xs text-charcoal-light">{s.solution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone">
                Pertes mesur&eacute;es sur panneaux monocristallins 400-500 Wc. Source : &eacute;tudes NREL et retours terrain forum-photovoltaique.fr.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Comment nettoyer : la m&eacute;thode en 5 &eacute;tapes</h2>
              <div className="space-y-4">
                {[
                  { num: '1', titre: 'Choisir le bon moment', detail: 'Tôt le matin (avant 9h) ou en fin de journée (après 18h). Le panneau est froid, la rosée ramollit les dépôts, et il n\'y a pas de risque de choc thermique.' },
                  { num: '2', titre: 'Rincer à l\'eau claire', detail: 'Un simple jet d\'eau au tuyau d\'arrosage enlève 80 % des salissures. Pas de Kärcher. Pression max : 5 bars. De l\'eau du robinet convient, mais l\'eau déminéralisée évite les traces de calcaire.' },
                  { num: '3', titre: 'Frotter doucement si nécessaire', detail: 'Pour les dépôts tenaces (fientes, pollen collé), utilisez un chiffon microfibre ou une éponge douce avec de l\'eau tiède. Une goutte de liquide vaisselle neutre si besoin. Mouvements circulaires, sans appuyer.' },
                  { num: '4', titre: 'Rincer et laisser sécher', detail: 'Un dernier jet d\'eau pour éliminer les résidus de savon. Le panneau sèche naturellement. Ne pas essuyer avec un chiffon sec (risque de micro-rayures).' },
                  { num: '5', titre: 'Vérifier la production', detail: 'Comparez la production du jour suivant avec les jours précédents (même météo). Un gain de 5-15 % après nettoyage confirme que le panneau était sale. Notez la date pour planifier le prochain nettoyage.' },
                ].map((step) => (
                  <div key={step.num} className="card-lg border-l-4 border-l-green">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{step.num}</div>
                      <h3 className="font-bold text-base">{step.titre}</h3>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed pl-11">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 5 erreurs qui co&ucirc;tent cher</h2>
              <div className="space-y-4">
                {erreurs.map((e, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-2 text-amber-dark">{e.titre}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed mb-2"><strong>Risque :</strong> {e.risque}</p>
                    <div className="bg-green-pale/30 rounded-brand p-2">
                      <p className="text-xs text-charcoal-light leading-relaxed"><strong className="text-green">Faire plut&ocirc;t :</strong> {e.alternative}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Checklist d&apos;entretien saisonnier</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Voici le calendrier d&apos;entretien id&eacute;al pour un panneau solaire de balcon. <strong>10 minutes par saison</strong> suffisent &agrave; maintenir une production optimale.
              </p>
              <div className="space-y-4">
                {checklistSaisonniere.map((s, i) => (
                  <div key={i} className="card-lg">
                    <h3 className="font-bold text-base mb-3">{s.saison}</h3>
                    <ul className="text-sm text-charcoal-light space-y-2">
                      {s.taches.map((t, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-md bg-green/10 text-green flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{'\u2713'}</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Entretien technique : ce qu&apos;il faut v&eacute;rifier</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Au-del&agrave; du nettoyage, quelques v&eacute;rifications techniques rapides prolongent la dur&eacute;e de vie de votre installation :
              </p>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">C&acirc;ble et connecteur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">V&eacute;rifiez que le c&acirc;ble entre le panneau et la prise n&apos;est pas fissur&eacute;, jauni ou mord&ucirc;. En terrasse, les rongeurs peuvent s&apos;y attaquer. Prot&eacute;gez le c&acirc;ble avec une gaine si n&eacute;cessaire.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Fixations et lests</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Resserrez les vis du ch&acirc;ssis 2 fois par an. V&eacute;rifiez que les lests sont toujours en place et suffisants (15-20 kg recommand&eacute;s). Apr&egrave;s une temp&ecirc;te, contr&ocirc;lez imm&eacute;diatement.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Micro-onduleur</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Aucun entretien n&eacute;cessaire. V&eacute;rifiez simplement que le voyant LED est allum&eacute; (vert = OK). Si le WiFi d&eacute;croche, rapprochez un r&eacute;p&eacute;teur. Le micro-onduleur est garanti 25 ans chez la plupart des fabricants.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1 text-green">Prise &eacute;lectrique ext&eacute;rieure</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Assurez-vous que la prise est bien &eacute;tanche (norme IP44 minimum). Si vous utilisez une rallonge, v&eacute;rifiez qu&apos;elle est pr&eacute;vue pour l&apos;ext&eacute;rieur. <Link href="/blog/accessoires-kit-solaire-balcon" className="text-green hover:underline">Voir nos recommandations d&apos;accessoires</Link>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Cas particuliers</h2>
              <div className="space-y-3">
                <div className="card-lg bg-cream/40">
                  <h3 className="font-bold text-base mb-2">Panneau vertical (fix&eacute; au garde-corps)</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Bonne nouvelle : un panneau vertical se salit beaucoup moins qu&apos;un panneau inclin&eacute;. La pluie le rince naturellement et la poussi&egrave;re glisse. Un nettoyage par an suffit g&eacute;n&eacute;ralement. Attention tout de m&ecirc;me aux fientes si des oiseaux se perchent au-dessus.</p>
                </div>
                <div className="card-lg bg-cream/40">
                  <h3 className="font-bold text-base mb-2">Panneau sous un arbre</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Le pire sc&eacute;nario pour la salissure : pollen au printemps, r&eacute;sine en &eacute;t&eacute;, feuilles en automne. Pr&eacute;voyez 4 nettoyages par an minimum. Si la r&eacute;sine colle, utilisez de l&apos;eau ti&egrave;de (40&deg;C) et un chiffon microfibre &mdash; ne grattez jamais. Envisagez de <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="text-green hover:underline">d&eacute;placer le panneau</Link> si possible.</p>
                </div>
                <div className="card-lg bg-cream/40">
                  <h3 className="font-bold text-base mb-2">Zone bord de mer</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">Le sel marin se d&eacute;pose sur la vitre et cr&eacute;e un voile opaque. Rincez &agrave; l&apos;eau douce apr&egrave;s les p&eacute;riodes de vent marin. V&eacute;rifiez aussi les parties m&eacute;talliques (cadre alu, vis) pour d&eacute;tecter d&apos;&eacute;ventuels d&eacute;buts de corrosion.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Co&ucirc;t de l&apos;entretien : quasi nul</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                C&apos;est l&apos;un des grands avantages du solaire de balcon : l&apos;entretien ne co&ucirc;te pratiquement rien.
              </p>
              <div className="card-lg bg-cream/40">
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; <strong>Eau :</strong> ~5 litres par nettoyage, soit quelques centimes</li>
                  <li>&bull; <strong>Chiffon microfibre :</strong> 3-5 &euro; (r&eacute;utilisable des ann&eacute;es)</li>
                  <li>&bull; <strong>Eau d&eacute;min&eacute;ralis&eacute;e (optionnel) :</strong> 2 &euro; les 5 litres</li>
                  <li>&bull; <strong>Temps :</strong> 5-10 minutes par nettoyage</li>
                  <li>&bull; <strong>Total annuel :</strong> <strong className="text-green">moins de 5 &euro;</strong> et ~30 minutes</li>
                </ul>
              </div>
              <p className="text-charcoal-light leading-relaxed mt-4 text-sm">
                En comparaison, le gain de production r&eacute;cup&eacute;r&eacute; par le nettoyage repr&eacute;sente <strong>5 &agrave; 15 &euro;/an</strong> d&apos;&eacute;conomies suppl&eacute;mentaires. Le retour sur investissement du nettoyage est &hellip; imm&eacute;diat.
              </p>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Combien produirait un panneau propre sur votre balcon ?</p>
              <p className="text-sm text-charcoal-light mb-4">
                Estimez votre production optimale selon votre d&eacute;partement et orientation.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic en 7 points &mdash; la salissure est la cause n&deg;3</p>
                </Link>
                <Link href="/blog/panneau-solaire-ombre-optimiser-production" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Panneau solaire et ombre : comment optimiser la production</h4>
                  <p className="text-xs text-charcoal-light mt-1">M&ecirc;me effet que la salissure &mdash; une cellule bloqu&eacute;e p&eacute;nalise tout</p>
                </Link>
                <Link href="/blog/accessoires-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">8 accessoires indispensables pour votre kit solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Rallonge &eacute;tanche, prise connect&eacute;e, protection surtension</p>
                </Link>
                <Link href="/blog/bilan-6-mois-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Bilan apr&egrave;s 6 mois avec un kit solaire de balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Retour d&apos;exp&eacute;rience : 0 entretien technique en 6 mois</p>
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
                      <span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>Sources :</strong> NREL (National Renewable Energy Laboratory), retours terrain forum-photovoltaique.fr et Reddit r/solaire, fiches constructeurs Sunology/Beem/EcoFlow. Tarif EDF base juin 2026 : 0,1940 &euro;/kWh.{' '}
                <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
