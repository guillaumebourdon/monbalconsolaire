import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

export const metadata: Metadata = {
  title: '8 accessoires indispensables pour votre kit solaire de balcon (2026)',
  description: 'Wattmetre, rallonge etanche, prise connectee, support, protege-surtension : les accessoires Amazon pour optimiser votre installation solaire de balcon.',
};

const faqData = [
  { question: 'Faut-il acheter des accessoires avec son kit solaire ?', answer: 'Non, les kits sont complets et fonctionnels des l\'achat. Mais certains accessoires ameliorent le suivi (prise connectee, wattmetre), la securite (parafoudre, rallonge etanche) ou la production (support inclinable). Ce sont des plus, pas des obligations.' },
  { question: 'Quel est l\'accessoire le plus utile ?', answer: 'La prise connectee avec suivi de consommation (type TP-Link Tapo P110, ~15EUR). Elle affiche en temps reel combien votre panneau produit et vous permet d\'automatiser vos gros consommateurs aux heures de production max.' },
  { question: 'Les rallonges standard fonctionnent-elles ?', answer: 'Oui, mais si votre panneau est en exterieur et la prise a l\'interieur, prenez une rallonge etanche IP44 minimum. Eau et electricite ne font pas bon menage. Comptez 15-25EUR pour une rallonge etanche de 5m.' },
  { question: 'Un parafoudre est-il vraiment utile ?', answer: 'Oui, surtout en region a orages frequents (Sud-Est, Massif central). Un micro-onduleur grille par la foudre c\'est 150EUR minimum a remplacer. Un parafoudre a 15-25EUR protege l\'installation. Investissement largement rentabilise.' },
  { question: 'Comment suivre ma production solaire sans investir ?', answer: 'La plupart des kits Sunology et Beem incluent une application gratuite avec suivi via le micro-onduleur Wi-Fi. Pour aller plus loin, une prise connectee Tapo permet un suivi encore plus fin. Inutile d\'investir dans du materiel pro.' },
  { question: 'Faut-il nettoyer regulierement son panneau ?', answer: 'La pluie fait generalement le travail. En zones poussiereuses ou si pollution saisonniere (pollen), un nettoyage tous les 3-6 mois avec un chiffon microfibre et de l\'eau claire suffit. Evitez les jets haute pression qui peuvent endommager les joints.' },
];

const accessoires = [
  { num: 1, nom: 'Prise connectee Tapo P110', type: 'Suivi consommation', prix: '15-20 EUR', priorite: 'essentiel', description: 'La prise connectee la plus vendue en 2026. Elle mesure en temps reel la consommation ou production branchee dessus. Application mobile gratuite, historique sur 12 mois, automatisations.', usage: 'Branchez-la entre votre kit solaire et la prise murale. L\'application Tapo affiche la production en temps reel. Vous pouvez programmer vos appareils (lave-linge) pour tourner aux heures de pic solaire.', critere: 'Version P110 (pas P100) : celle qui mesure la conso. Compatible Wi-Fi 2,4 GHz uniquement.' },
  { num: 2, nom: 'Rallonge etanche IP44 5m', type: 'Cablage exterieur', prix: '15-25 EUR', priorite: 'essentiel', description: 'Rallonge electrique certifiee etanche, pour les installations ou la prise murale est a l\'interieur et le panneau a l\'exterieur (cas le plus frequent en balcon).', usage: 'Reliez votre kit solaire a la prise interieure en traversant la fenetre ou la porte-fenetre. La certification IP44 protege contre les projections d\'eau.', critere: 'Longueur 3 a 10m selon configuration. Jamais IP23 ou IP20 (pas etanches). Evitez les rallonges a plusieurs prises.' },
  { num: 3, nom: 'Parafoudre type Hager', type: 'Protection electrique', prix: '25-45 EUR', priorite: 'recommande', description: 'Protection contre les surtensions causees par la foudre ou les coupures EDF. Essentiel dans les regions orageuses pour proteger votre micro-onduleur qui coute 150-300EUR.', usage: 'Installe sur le tableau electrique ou via une prise parafoudre. Une surtension grille votre micro-onduleur en une fraction de seconde.', critere: 'Type 2 pour residentiel classique. Indication du niveau de protection (kA). Verifiez les normes NF EN 61643.' },
  { num: 4, nom: 'Support inclinable aluminium', type: 'Fixation au sol', prix: '30-60 EUR', priorite: 'recommande', description: 'Structure legere en aluminium qui maintient le panneau incline a l\'angle optimal (25-40 degres selon latitude). Indispensable si votre kit n\'inclut pas de support.', usage: 'Assemblage en 10 minutes avec cle Allen. Le panneau se fixe dessus avec les brides fournies. Inclinaison reglable selon saison.', critere: 'Aluminium anodise (pas acier, rouille). Compatible avec les dimensions de votre panneau. Ballasts de lestage recommandes contre le vent.' },
  { num: 5, nom: 'Wattmetre filaire simple', type: 'Mesure sans Wi-Fi', prix: '10-15 EUR', priorite: 'optionnel', description: 'Alternative simple a la prise connectee, sans Wi-Fi ni application. Se branche entre la prise et le kit, affiche la puissance en watts sur un ecran LCD.', usage: 'Pour ceux qui ne veulent pas installer d\'application mobile ou qui n\'ont pas de Wi-Fi sur leur balcon. Affichage instantane : watts, kWh cumules.', critere: 'Capacite minimum 2000W. Precision +/- 3% suffisante. Marques Perel, Brennenstuhl sont fiables.' },
  { num: 6, nom: 'Kit de nettoyage panneau', type: 'Entretien', prix: '15-25 EUR', priorite: 'optionnel', description: 'Brosse douce, raclette en microfibre et produit nettoyant neutre. Pour entretenir la surface du panneau tous les 3-6 mois en zones poussiereuses.', usage: 'Nettoyage a l\'eau tiede avec chiffon microfibre. Jamais d\'eau calcaire ou de produits abrasifs. La pluie suffit en general.', critere: 'Manche telescopique utile pour panneau installe en hauteur. Eviter les produits vitres agressifs.' },
  { num: 7, nom: 'Coffret de protection electrique', type: 'Securite pro', prix: '40-80 EUR', priorite: 'optionnel', description: 'Boitier etanche contenant disjoncteur et sectionneur dedies au circuit solaire. Permet de couper facilement l\'alimentation pour maintenance ou intervention.', usage: 'Installation intermediaire entre le micro-onduleur et la prise. Securise les interventions et isole votre kit en cas de panne.', critere: 'Calibre disjoncteur 16A. Etancheite IP65. Pour installations ou le kit est difficile a debrancher.' },
  { num: 8, nom: 'Traceur GPS pour panneau', type: 'Anti-vol', prix: '30-50 EUR', priorite: 'optionnel', description: 'Tracker GPS cache dans le chassis du panneau. Dissuasif et localisable via application si vol. Utile en zones urbaines ou rez-de-chaussee.', usage: 'Collage avec adhesif double face a l\'interieur du chassis. Alerte par SMS ou notification en cas de deplacement non programme.', critere: 'Autonomie minimale 6 mois. Abonnement SIM (quelques EUR/mois) ou version eSIM incluse.' },
];

export default function AccessoiresPage() {
  return (
    <>
      <SchemaArticle title="8 accessoires indispensables pour votre kit solaire de balcon" description="Les accessoires Amazon pour optimiser votre kit solaire de balcon : suivi, securite, nettoyage." url="https://monbalconsolaire.fr/blog/accessoires-kit-solaire-balcon" datePublished="2026-04-04" />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Accessoires', href: '/accessoires' }, { label: '8 accessoires indispensables' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">&Eacute;quipement</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">8 accessoires indispensables pour votre kit solaire de balcon</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Votre kit solaire fonctionne tout seul. Mais ces 8 accessoires &agrave; petit prix am&eacute;liorent le suivi, la s&eacute;curit&eacute; et la production. Budget total : 150 &agrave; 250 &euro; selon le niveau choisi.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>Mis &agrave; jour le 19 avril 2026</span><span>&middot;</span><span>8 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En r&eacute;sum&eacute;</h2>
            <p className="text-charcoal-light text-sm leading-relaxed"><strong>3 essentiels</strong> : prise connect&eacute;e Tapo P110 (15&euro;), rallonge &eacute;tanche IP44 (20&euro;), parafoudre (30&euro;). <strong>3 recommand&eacute;s</strong> : support inclinable, wattm&egrave;tre filaire, kit nettoyage. <strong>2 optionnels</strong> : coffret de protection, traceur GPS. Aucun n&apos;est obligatoire mais chacun am&eacute;liore un aspect de votre installation.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Tableau comparatif rapide</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Vue d&apos;ensemble des 8 accessoires, class&eacute;s par priorit&eacute; et budget :</p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead><tr className="bg-green text-white"><th className="text-left p-3 rounded-tl-xl">Accessoire</th><th className="text-center p-3">Usage</th><th className="text-center p-3">Prix</th><th className="text-center p-3 rounded-tr-xl">Priorit&eacute;</th></tr></thead>
                  <tbody>
                    {accessoires.map((a, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{a.nom}</td>
                        <td className="text-center p-3 text-xs">{a.type}</td>
                        <td className="text-center p-3 font-mono">{a.prix}</td>
                        <td className="text-center p-3">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-md ${a.priorite === 'essentiel' ? 'bg-green-pale text-green' : a.priorite === 'recommande' ? 'bg-amber-pale text-amber-dark' : 'bg-cream-dark text-stone'}`}>
                            {a.priorite === 'essentiel' ? '\u2b50 Essentiel' : a.priorite === 'recommande' ? '\ud83d\udc4d Recommand\u00e9' : '\ud83d\udca1 Optionnel'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 8 accessoires en d&eacute;tail</h2>
              <div className="space-y-6">
                {accessoires.map((a) => (
                  <div key={a.num} className="card-lg border-l-4 border-l-amber">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-lg bg-amber text-white flex items-center justify-center font-bold text-sm">{a.num}</span>
                          <h3 className="font-bold text-lg">{a.nom}</h3>
                        </div>
                        <p className="text-xs text-stone uppercase tracking-wider font-semibold">{a.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-green text-lg">{a.prix}</div>
                        <div className="text-[10px] text-stone font-medium uppercase tracking-wider mt-0.5">Prix moyen</div>
                      </div>
                    </div>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-3">{a.description}</p>
                    <div className="bg-cream/60 rounded-lg p-3 mb-3">
                      <p className="text-xs font-semibold text-charcoal mb-1">\ud83d\udca1 Comment l&apos;utiliser</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{a.usage}</p>
                    </div>
                    <div className="bg-green-pale/30 rounded-lg p-3">
                      <p className="text-xs font-semibold text-green mb-1">\u2713 Crit&egrave;re de choix</p>
                      <p className="text-xs text-charcoal-light leading-relaxed">{a.critere}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Quel budget pr&eacute;voir selon votre profil ?</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-1">Budget minimal (~65&euro;)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Prise connect&eacute;e Tapo (15&euro;) + rallonge &eacute;tanche (20&euro;) + parafoudre basique (30&euro;). Le strict n&eacute;cessaire pour suivre et s&eacute;curiser.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Budget confort (~150&euro;)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Ajoutez un support inclinable (50&euro;) + kit de nettoyage (20&euro;) + wattm&egrave;tre de secours (15&euro;). Le setup optimis&eacute; pour maximiser la production.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h4 className="font-bold text-sm mb-1">Budget complet (~250&euro;)</h4>
                  <p className="text-xs text-charcoal-light leading-relaxed">Avec coffret de protection &eacute;lectrique (60&euro;) et traceur GPS (40&euro;). Installation premium, s&eacute;curit&eacute; et suivi maximal.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les 3 erreurs &agrave; &eacute;viter</h2>
              <div className="space-y-3">
                {[
                  { erreur: 'Acheter une rallonge int\u00e9rieure pour usage ext\u00e9rieur', detail: 'Une rallonge IP20 (int\u00e9rieure) en ext\u00e9rieur = risque d\'\u00e9lectrocution et court-circuit. Toujours v\u00e9rifier l\'indice IP : IP44 minimum pour usage ext\u00e9rieur.' },
                  { erreur: 'N\u00e9gliger le parafoudre en zone orageuse', detail: 'Un micro-onduleur co\u00fbte 150-300\u20ac. Un parafoudre co\u00fbte 30\u20ac. Le calcul est vite fait, surtout dans le Sud-Est ou le Massif central.' },
                  { erreur: 'Empiler les prises connect\u00e9es sur une multiprise', detail: 'Les prises connect\u00e9es g\u00e8rent 15A max chacune. Si vous connectez plusieurs kits solaires + appareils, pr\u00e9voyez des prises d\u00e9di\u00e9es ou un coffret.' },
                ].map((e, i) => (
                  <div key={i} className="card border-l-4 border-l-amber bg-amber-pale/10">
                    <h4 className="font-bold text-sm mb-1 text-amber-dark">\u274c {e.erreur}</h4>
                    <p className="text-xs text-charcoal-light leading-relaxed">{e.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pour aller plus loin</h2>
              <div className="space-y-3">
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comment installer un kit solaire sur un balcon</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le guide d&apos;installation pas &agrave; pas, &eacute;tape par &eacute;tape.</p>
                </Link>
                <Link href="/guide/orientation-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Quelle orientation pour votre panneau solaire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">L&apos;impact r&eacute;el de l&apos;orientation et de l&apos;inclinaison sur votre production.</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire : comment &ccedil;a marche concr&egrave;tement</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe technique expliqu&eacute; simplement : talon, surplus, injection.</p>
                </Link>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Votre balcon est-il adapt&eacute; au solaire ?</p>
              <p className="text-sm text-charcoal-light mb-4">Calculez votre production potentielle avant d&apos;investir dans des accessoires.</p>
              <Link href="/calculateur" className="btn-primary inline-flex">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">\u25bc</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed"><strong>Note :</strong> les prix sont indicatifs (moyennes Amazon, avril 2026) et peuvent varier. Cet article sera mis &agrave; jour r&eacute;guli&egrave;rement. <Link href="/a-propos" className="text-green hover:underline">En savoir plus sur notre m&eacute;thode</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
