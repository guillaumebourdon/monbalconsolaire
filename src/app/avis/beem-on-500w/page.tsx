import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Beem On 500W avis : prix Leroy Merlin, points négatifs',
  description: 'Beem On 500W : 429 € chez Beem, Leroy Merlin, Boulanger. Précommande Beem (expédition déc. 2026), avis négatifs, SAV, ROI 4,8 ans analysés.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/beem-on-500w',
  },
});

const faqData = [
  { question: 'Le Beem On 500W est-il moins cher chez Leroy Merlin ?', answer: 'Non. Au 12 octobre 2026, le prix est identique partout : 429 € sur beemenergy.fr, 429 € chez Leroy Merlin (fiche « Kit panneau solaire plug&play maison 500Wc BEEM », réf. 96375487, prix relevé via la fiche indexée) et 429 € chez Boulanger (réf. 1219705, mais indisponible en livraison comme en retrait ce jour-là). L\'intérêt de Leroy Merlin n\'est pas le prix mais le SAV : la garantie légale de conformité (2 ans) est due par le vendeur, donc par l\'enseigne, quel que soit l\'avenir de Beem Energy. Castorama ne référence pas de kit Beem à cette date.' },
  { question: 'Quels sont les avis négatifs sur Beem Energy ?', answer: 'Les points négatifs qui reviennent sont surtout liés à l\'entreprise, pas au panneau : délai de livraison (le Beem On 500W est en précommande avec expédition à partir de décembre 2026 sur le site Beem au 12/10/2026), SAV à surveiller depuis la procédure de sauvegarde ouverte par le tribunal de Nantes fin novembre 2025, et des remarques ponctuelles sur le suivi client (sur ÀmonAvis, un avis d\'octobre 2025 se plaint d\'une prise de rendez-vous confuse, un autre conseille d\'insister sur la garantie dès l\'achat). Côté produit : la Beembox obligatoire pour le suivi, la taille du panneau (1,95 m) et l\'absence de batterie abordable. Nous n\'avons pas pu consulter Trustpilot (accès bloqué) : nous ne citons donc pas de note.' },
  { question: 'Quel est le délai de livraison du Beem On 500W ?', answer: 'Sur beemenergy.fr, la fiche affiche « Précommande - Expédition à partir de décembre 2026 » (vérifié le 12 octobre 2026), alors que le bas de page mentionne toujours une « expédition gratuite en 48h ». Chez Boulanger, le produit est indisponible. Chez Leroy Merlin, nous n\'avons pas pu vérifier le stock en ligne. Si vous voulez produire avant l\'hiver, vérifiez la disponibilité avant de payer.' },
  { question: 'Le Beem On 500 Wc est-il le meilleur rapport qualité-prix en 2026 ?', answer: 'Oui. À 0,86€/Wc (429€ pour 500 Wc), c\'est le meilleur ratio €/Wc du marché premium en France. Le Sunology PLAY (ex-PLAY 2) est à 1,20€/Wc (599€ pour 500 Wc). Le ROI est d\'environ 4,8 ans contre 6,5 à 7,4 ans pour la concurrence (Sunology PLAY 6,5 ans, Sunethic F500 7,4 ans).' },
  { question: 'Quelle différence entre le Beem On 500 Wc et l\'ancien 460 Wc ?', answer: 'Le nouveau modèle gagne 40 Wc de puissance (500 vs 460 Wc) tout en baissant de 170€ (429€ vs 599€). Le ratio €/Wc passe de 1,30€ à 0,86€. Les dimensions sont quasi identiques (1 950 x 1 134 mm vs 1 890 x 1 130 mm). Le micro-onduleur passe à 550 W de sortie.' },
  { question: 'Combien produit le Beem On 500 Wc par an ?', answer: 'Entre ~430 et ~640 kWh/an en exposition sud selon la région (de Lille à Marseille). En région lyonnaise, exposition sud, comptez ~510 kWh/an soit environ 84€ d\'économies annuelles. ROI de 4,8 ans et ~3 190€ d\'économies sur 25 ans (+3,3%/an d\'inflation CRE).' },
  { question: 'Beem On 500 Wc vs Sunology PLAY (ex-PLAY 2) : lequel choisir ?', answer: 'À puissance égale (500 Wc), le Beem On 500 Wc est 170€ moins cher que le Sunology PLAY (429€ vs 599€). Sunology garde l\'avantage sur la technologie Back Contact (24,5% de rendement annoncé, panneau 15 cm plus court), le WiFi natif sans boîtier, et l\'écosystème batterie VAULT. Si le budget est votre priorité : Beem. Si vous voulez l\'écosystème le plus complet : Sunology.' },
  { question: 'Peut-on connecter plusieurs Beem On 500 Wc ensemble ?', answer: 'Oui. Beem vend le Beem On DUO (2 stations, 1 000 Wc) à 858 € et le Beem On MAX en 4 stations (1 716 €) ou 6 stations (2 574 €). Pour agrandir une installation existante, l\'Extension (sans Beembox) est à 429 €, que ce soit pour compléter un 500W ou un ancien 460W (prix relevés le 12/10/2026).' },
];

export default function BeemOn500WcAvisPage() {
  return (
    <>
      <SchemaArticle title="Beem On 500 Wc avis : le nouveau rapport qualité-prix du marché" description="Avis détaillé sur le Beem On 500 Wc en 2026." url="https://monbalconsolaire.fr/avis/beem-on-500w" datePublished="2026-06-15" dateModified="2026-10-12" />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct name="Beem On 500 Wc" brand="Beem Energy" description="Kit solaire plug-and-play 500 Wc bifacial TOPCon avec micro-onduleur 550W et suivi via app Beem." price={429} ratingValue={8.5} ratingCount={1} url="https://monbalconsolaire.fr/avis/beem-on-500w" />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 500 Wc' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Beem On 500 Wc' }]} />
          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Beem On 500W avis : prix chez Leroy Merlin et Beem, points n&eacute;gatifs et verdict</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">429&nbsp;&euro; pour 500&nbsp;Wc bifacial TOPCon, soit 0,86&nbsp;&euro;/Wc&nbsp;: le Beem On reste le kit premium le moins cher au watt en France. M&ecirc;me prix chez Beem, Leroy Merlin et Boulanger, mais deux r&eacute;serves &agrave; conna&icirc;tre avant d&apos;acheter&nbsp;: la pr&eacute;commande (exp&eacute;dition &agrave; partir de d&eacute;cembre 2026 chez Beem) et la proc&eacute;dure de sauvegarde de Beem Energy.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone"><span>15 juin 2026 &middot; Mis &agrave; jour le 12 octobre 2026</span><span>&middot;</span><span>10 min de lecture</span></div>
          </div>

          <ProductHero
            brand="Beem Energy"
            name="Beem On 500 Wc"
            power="500 Wc"
            price="429 €"
            score="8.5/10"
            tagline="Le meilleur rapport qualité/prix du marché. ROI en 4,8 ans."
            affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge"
            affiliateLabel="Voir sur le site du fabricant"
            accentColor="amber"
            image="/images/produits/beem-on-500-1.webp"
            imageAlt="Beem On 500 Wc - panneau solaire bifacial TOPCon avec micro-onduleur"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 12/10/2026 sur beemenergy.fr &middot; Peut varier selon les promos. Statut affich&eacute; : &laquo;&nbsp;Pr&eacute;commande - Exp&eacute;dition &agrave; partir de d&eacute;cembre 2026&nbsp;&raquo;.</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pr&eacute;sentation du Beem On 500 Wc</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Beem Energy, startup nantaise et leader fran&ccedil;ais du solaire plug-and-play, renouvelle son mod&egrave;le phare. Le Beem On passe de 460 &agrave; 500&nbsp;Wc tout en baissant de 170&nbsp;&euro; (429&nbsp;&euro; vs 599&nbsp;&euro;). Le ratio &euro;/Wc tombe &agrave; 0,86&nbsp;&euro;, un record sur le segment premium.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Le kit reste fid&egrave;le &agrave; la formule : un panneau bifacial TOPCon, un micro-onduleur int&eacute;gr&eacute;, une Beembox pour le suivi via app, et une installation en 5 minutes chrono. Branchez sur une prise, l&apos;app d&eacute;tecte la production, c&apos;est parti.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '500 Wc', l: 'Puissance' },
                  { v: '429 €', l: 'Prix' },
                  { v: '25 ans', l: 'Garantie' },
                  { v: '0,86 €', l: 'Prix par Wc' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-cream rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-amber-dark">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Fiche technique</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Puissance', '500 Wc bifacial (+5% face arrière)'],
                      ['Technologie', 'Monocristallin TOPCon, 120 demi-cellules'],
                      ['Micro-onduleur', '550 W sortie, rendement 96%, MPPT 99,8%'],
                      ['Dimensions', '1 950 x 1 134 x 30 mm'],
                      ['Poids', '27,6 kg'],
                      ['Garantie', '25 ans système'],
                      ['Certifications', 'CE, EN 61215, EN 61730'],
                      ['Suivi', 'Beembox + app Beem (inclus)'],
                      ['Installation', 'Sol, mur, garde-corps — 5 min'],
                      ['Extensible', 'Jusqu\'à 4 stations (2 000 Wc)'],
                    ].map(([label, value], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3 font-semibold text-charcoal whitespace-nowrap">{label}</td>
                        <td className="py-2 px-3 text-charcoal-light">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime</h2>
              <div className="space-y-3">
                {[
                  { t: 'Le prix le plus bas du segment premium : 0,86€/Wc', d: 'À 429€ pour 500 Wc, le Beem On pulvérise la concurrence. Le Sunology PLAY est à 1,20€/Wc (599€ pour 500 Wc), le Sunethic F500 à 1,38€/Wc (690€). C\'est 28 à 38% moins cher par watt.' },
                  { t: 'ROI record de 4,8 ans', d: 'Grâce au prix agressif, le retour sur investissement tombe sous les 5 ans (Lyon, sud). C\'est le kit le plus vite rentabilisé du marché premium. Sur 25 ans : ~3 190€ d\'économies.' },
                  { t: 'Paiement en 10x sans frais', d: 'Soit ~43€/mois pendant 10 mois. C\'est plus accessible que jamais. Dès le premier mois, le kit produit plus que la mensualité.' },
                  { t: 'Option Beem ZEN', d: 'Pour 49€ de plus, Beem gère les démarches administratives : déclaration CACSI Enedis, convention d\'autoconsommation. Utile si l\'administratif vous freine (sinon, notre guide de la déclaration CACSI explique comment le faire vous-même gratuitement).' },
                  { t: 'App Beem et suivi temps réel', d: 'La Beembox (incluse) connecte le kit à l\'app Beem : production en direct, historique, économies cumulées, conseils personnalisés. L\'interface est claire et bien conçue.' },
                  { t: 'Référencé chez Leroy Merlin et Boulanger', d: 'En plus du site Beem, le kit est référencé chez Leroy Merlin et Boulanger, au même prix (429 €). Acheter en enseigne fait de celle-ci votre interlocuteur pour la garantie légale de conformité (2 ans), un vrai plus vu la situation de Beem. Attention : chez Boulanger il était indisponible au 12/10/2026.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Vérifier le stock" variant="secondary" position="after-pros" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&apos;on aime moins</h2>
              <div className="space-y-3">
                {[
                  { t: 'Beembox obligatoire pour le suivi', d: 'Contrairement au Sunology PLAY2 dont le micro-onduleur embarque le WiFi, le Beem On nécessite un boîtier Beembox branché sur votre box internet. C\'est inclus dans le kit, mais c\'est un appareil supplémentaire à brancher et à maintenir.' },
                  { t: 'Panneau imposant : 1,95 m de haut', d: 'Avec ses 1 950 x 1 134 mm, c\'est le plus grand panneau mono du marché (le Sunology PLAY 500 Wc fait 1 800 x 1 134 mm). Sur un petit balcon, ça peut poser problème.' },
                  { t: 'Pas de solution batterie abordable', d: 'Beem propose la Beem Battery mais à partir de 6 190€ le kit complet. C\'est 14x le prix du panneau seul. Sunology a le PLAY MAX à 699€ (station + batterie VAULT 700 Wh), bien plus accessible. Si le stockage vous intéresse, regardez plutôt Sunology ou Zendure.' },
                  { t: 'SAV et délai de livraison à surveiller', d: 'Le tribunal de commerce de Nantes a placé Beem Energy en procédure de sauvegarde le 26 novembre 2025, après une chute de 42% du marché résidentiel du solaire (étude Enedis), avec un an pour redresser la barre (échéance autour de novembre 2026). Nous n\'avons trouvé aucune annonce de liquidation ni de plan de sauvegarde arrêté (recherche du 12 octobre 2026), mais la fiche produit affiche « Précommande - Expédition à partir de décembre 2026 », soit environ deux mois d\'attente, alors que le bas de la même page promet toujours une « expédition gratuite en 48h ». La garantie 25 ans ne vaut que si l\'entreprise est toujours là pour l\'honorer.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Vérifier le délai livraison" variant="secondary" position="after-cons" />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">O&ugrave; acheter le Beem On 500W&nbsp;? Beem, Leroy Merlin, Boulanger&hellip;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Bonne nouvelle pour les comparateurs&nbsp;: le prix est le m&ecirc;me partout. Ce qui change, c&apos;est la disponibilit&eacute; et surtout <strong>qui vous doit le SAV</strong>. Relev&eacute; du 12 octobre 2026&nbsp;:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Revendeur</th>
                      <th className="text-left py-2 px-3 font-bold">Prix TTC</th>
                      <th className="text-left py-2 px-3 font-bold">Disponibilit&eacute;</th>
                      <th className="text-left py-2 px-3 font-bold">&Agrave; savoir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Beem Energy (beemenergy.fr)', '429 €', 'Précommande, expédition à partir de décembre 2026', 'Paiement 4x/10x sans frais, option Beem ZEN (49 €), DUO à 858 €'],
                      ['Leroy Merlin (réf. 96375487)', '429 €*', 'Non vérifiable en ligne', 'Vendu par Leroy Merlin : l\'enseigne porte la garantie légale de conformité'],
                      ['Boulanger (réf. 1219705)', '429 €', 'Indisponible (livraison et retrait)', 'Vendu et expédié par Boulanger, garantie légale 2 ans'],
                      ['Castorama', '—', 'Non référencé', 'Aucun kit Beem trouvé sur castorama.fr'],
                    ].map(([shop, price, stock, note], i) => (
                      <tr key={i} className={i === 0 ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3">{shop}</td>
                        <td className="py-2 px-3 font-mono">{price}</td>
                        <td className="py-2 px-3">{stock}</td>
                        <td className="py-2 px-3 text-xs">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">* Leroy Merlin bloque la consultation automatis&eacute;e de ses fiches&nbsp;: prix relev&eacute; sur la fiche index&eacute;e (le 500&nbsp;Wc &laquo;&nbsp;Extension&nbsp;&raquo;, r&eacute;f. 96375488, y est aussi &agrave; 429&nbsp;&euro;). Le stock en magasin n&apos;a pas pu &ecirc;tre v&eacute;rifi&eacute;.</p>
              <h3 className="text-lg font-bold mt-6 mb-3">Beem On 500W chez Leroy Merlin&nbsp;: le bon plan&nbsp;?</h3>
              <p className="text-charcoal-light leading-relaxed mb-4">Pas pour le prix, identique. Mais pour la s&eacute;curit&eacute;&nbsp;: la <strong>garantie l&eacute;gale de conformit&eacute; (2 ans) est due par le vendeur</strong>. Si vous achetez chez Leroy Merlin ou Boulanger, c&apos;est l&apos;enseigne qui doit r&eacute;parer, remplacer ou rembourser un kit d&eacute;fectueux pendant 2 ans, m&ecirc;me si Beem Energy ne sortait pas de sa proc&eacute;dure de sauvegarde. Au-del&agrave;, la garantie commerciale de 25 ans reste celle du fabricant, quel que soit le revendeur.</p>
              <div className="space-y-3">
                {[
                  { t: 'Acheter chez Leroy Merlin ou Boulanger si…', d: 'vous voulez un interlocuteur solide pour les 2 premières années, un éventuel retour en magasin, et que le produit est en stock près de chez vous. Vérifiez sur la fiche qu\'il s\'agit bien du kit « principal » (avec Beembox) et non de l\'« Extension », vendue au même prix mais sans boîtier de suivi.' },
                  { t: 'Acheter sur le site Beem si…', d: 'vous voulez payer en 4x ou 10x sans frais, ajouter Beem ZEN, ou prendre directement un DUO (858 €) ou un MAX. Contrepartie : la précommande, avec une expédition annoncée à partir de décembre 2026.' },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex text-sm">Voir sur beemenergy.fr &rarr;</a>
                <a href="https://www.boulanger.com/ref/1219705" target="_blank" rel="sponsored noopener" className="btn-secondary inline-flex text-sm">Voir chez Boulanger &rarr;</a>
              </div>
              <p className="text-xs text-stone mt-3 italic">Dans tous les cas, achat en ligne = 14 jours de r&eacute;tractation (Code de la consommation). Avant de commander, passez par notre <Link href="/guide/checklist-avant-achat-kit-solaire" className="text-green hover:underline">checklist avant achat</Link>. L&apos;ancien Beem On 460&nbsp;W est encore list&eacute; chez certains revendeurs&nbsp;: v&eacute;rifiez la puissance sur la fiche.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Avis n&eacute;gatifs sur Beem Energy&nbsp;: ce qui revient vraiment</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">On a cherch&eacute; les critiques r&eacute;currentes plut&ocirc;t que les anecdotes. Elles visent davantage l&apos;entreprise que le panneau lui-m&ecirc;me&nbsp;:</p>
              <ul className="space-y-2 text-sm text-charcoal-light mb-4">
                <li><strong>Le d&eacute;lai de livraison.</strong> Pr&eacute;commande avec exp&eacute;dition &agrave; partir de d&eacute;cembre 2026 sur le site Beem, produit indisponible chez Boulanger. C&apos;est le point le plus concret aujourd&apos;hui.</li>
                <li><strong>La p&eacute;rennit&eacute; du SAV.</strong> Proc&eacute;dure de sauvegarde ouverte fin novembre 2025 &agrave; Nantes, avec environ un an pour pr&eacute;senter un plan. Une garantie de 25 ans engage une entreprise qui doit exister dans 25 ans.</li>
                <li><strong>Le suivi client.</strong> Sur &Agrave;monAvis (48 avis, 94&nbsp;% de recommandation), les critiques portent sur des d&eacute;tails de prise de rendez-vous et sur la n&eacute;cessit&eacute; d&apos;insister aupr&egrave;s du SAV pour faire jouer la garantie. Volume faible&nbsp;: &agrave; prendre comme un signal, pas comme une tendance.</li>
                <li><strong>Le produit.</strong> Beembox obligatoire pour le suivi, panneau de 1,95&nbsp;m difficile &agrave; caser sur un petit balcon, pas de batterie abordable dans la gamme.</li>
              </ul>
              <p className="text-charcoal-light leading-relaxed">Nous n&apos;avons pas pu consulter la page Trustpilot de Beem (acc&egrave;s bloqu&eacute;)&nbsp;: nous ne citons donc pas de note globale. Pour d&eacute;m&ecirc;ler les vraies arnaques des simples d&eacute;ceptions, voir notre analyse <Link href="/blog/kit-solaire-plug-and-play-arnaque" className="text-green hover:underline">kit solaire plug and play&nbsp;: arnaque ou pas&nbsp;?</Link></p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Beem On 500 Wc vs la concurrence</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-2 px-3 font-bold">Kit</th>
                      <th className="text-left py-2 px-3 font-bold">Puissance</th>
                      <th className="text-left py-2 px-3 font-bold">Prix</th>
                      <th className="text-left py-2 px-3 font-bold">&euro;/Wc</th>
                      <th className="text-left py-2 px-3 font-bold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Beem On 500 Wc', '500 Wc', '429 €', '0,86 €', '8.5/10', true],
                      ['Sunology PLAY (ex-PLAY 2)', '500 Wc', '599 €', '1,20 €', '8.5/10', false],
                      ['Sunethic F500', '500 Wc', '690 €', '1,38 €', '7.5/10', false],
                      ['EcoFlow PowerStream (arr\u00eat\u00e9)', '400 Wc', '599 €', '1,50 €', '8/10', false],
                      ['Beem Kit 300W (rupture)', '300 Wc', '199 €', '0,66 €', '7.5/10', false],
                      ['Beem On 460W (extension seule)', '460 Wc', '429 €', '0,93 €', '8/10', false],
                    ].map(([name, power, price, ratio, score, highlight], i) => (
                      <tr key={i} className={highlight ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}>
                        <td className="py-2 px-3">{name as string}</td>
                        <td className="py-2 px-3">{power as string}</td>
                        <td className="py-2 px-3">{price as string}</td>
                        <td className="py-2 px-3">{ratio as string}</td>
                        <td className="py-2 px-3">{score as string}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-2 italic">Prix Beem v&eacute;rifi&eacute;s le 12/10/2026, autres prix relev&eacute;s en juin 2026. Peuvent varier selon les promotions.</p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que ce kit soit fait pour vous ?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec le Beem On 500 Wc &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Rentabilit&eacute; et production</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Avec 500&nbsp;Wc et un prix de 429&nbsp;&euro;, le Beem On offre le meilleur retour sur investissement du march&eacute; premium. Voici les chiffres (m&eacute;thodologie standard : Lyon, sud, PR 0,85, autoconsommation 85%).</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '510 kWh', l: 'Production/an' },
                  { v: '84 €', l: 'Économies/an' },
                  { v: '4,8 ans', l: 'ROI' },
                  { v: '3 190 €', l: 'Gains sur 25 ans' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-green-pale/30 rounded-brand-lg">
                    <div className="font-mono font-medium text-xl text-green">{s.v}</div>
                    <div className="text-[11px] text-stone mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">En r&eacute;gion m&eacute;diterran&eacute;enne (Marseille, Montpellier), la production grimpe &agrave; ~640&nbsp;kWh/an, soit environ 105&nbsp;&euro;/an d&apos;&eacute;conomies et un ROI de 3,9&nbsp;ans. Dans le Nord, comptez ~435&nbsp;kWh/an, ~72&nbsp;&euro;/an et un ROI de 5,6&nbsp;ans. Pour votre adresse et votre orientation exactes, passez par le <Link href="/calculateur" className="text-green hover:underline">calculateur</Link>.</p>
              <p className="text-charcoal-light leading-relaxed">En comparaison, l&apos;ancien <Link href="/avis/beem-on-460w" className="text-green hover:underline">Beem On 460W</Link>, vendu &agrave; l&apos;&eacute;poque 599&nbsp;&euro; en station autonome, avait un ROI de 7,0 ans. Le gain est spectaculaire : +40&nbsp;Wc de puissance ET &minus;170&nbsp;&euro; sur le prix. Le 460W n&apos;est d&apos;ailleurs plus vendu comme station de d&eacute;part : Beem ne le propose plus qu&apos;en extension (429&nbsp;&euro; au 12/10/2026, sans Beembox) pour agrandir une installation existante. Pour un petit budget, le <Link href="/avis/beem-kit-300w" className="text-green hover:underline">Beem Kit 300W</Link> reste l&apos;entr&eacute;e de gamme de la marque.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Votre balcon fait moins de 2 m de haut (panneau de 1,95 m)',
                  'Vous voulez une solution avec batterie abordable (regardez Sunology PLAY MAX)',
                  'Vous êtes inquiet sur le SAV long terme (procédure de sauvegarde en cours)',
                  'Vous êtes absent toute la journée sans possibilité de décaler vos usages',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="text-amber-dark font-bold">&#10007;</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Notre verdict</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Le Beem On 500 Wc est le kit solaire le plus rentable du march&eacute; fran&ccedil;ais en 2026. &Agrave; 429&nbsp;&euro; pour 500&nbsp;Wc, le ratio de 0,86&nbsp;&euro;/Wc est imbattable. Le ROI de 4,8 ans pulv&eacute;rise la concurrence.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Il perd face au <Link href="/avis/sunology-play-2" className="text-green hover:underline">Sunology PLAY2</Link> sur le WiFi natif (pas de bo&icirc;tier suppl&eacute;mentaire), l&apos;&eacute;cosyst&egrave;me batterie et la technologie Back Contact (panneau plus compact). Mais &agrave; 170&nbsp;&euro; de moins pour la m&ecirc;me puissance (429&nbsp;&euro; vs 599&nbsp;&euro;), c&apos;est difficile de ne pas recommander le Beem On. Le d&eacute;tail crit&egrave;re par crit&egrave;re est dans notre <Link href="/comparatif/sunology-play2-vs-beem-on-500w" className="text-green hover:underline">comparatif PLAY vs Beem On 500W</Link>.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Les deux vrais b&eacute;mols&nbsp;: la situation financi&egrave;re de Beem Energy (proc&eacute;dure de sauvegarde) et la pr&eacute;commande jusqu&apos;en d&eacute;cembre 2026. La garantie 25 ans ne vaut que si l&apos;entreprise est l&agrave; pour l&apos;honorer&nbsp;: si le produit est en stock chez Leroy Merlin pr&egrave;s de chez vous, l&apos;achat en enseigne s&eacute;curise au moins les 2 premi&egrave;res ann&eacute;es.</p>
              <p className="text-charcoal-light leading-relaxed"><strong>Note finale : <span className="text-amber-dark text-xl font-extrabold">8.5/10</span></strong></p>
              <a href="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" target="_blank" rel="sponsored noopener" className="btn-affiliate inline-flex mt-4">Voir le Beem On 500 Wc &rarr;</a>
            </section>

            <AffiliateCTA productName="Beem On 500 Wc" merchantName="Beem Energy" affiliateUrl="https://beemenergy.fr/products/kit-solaire-plug-and-play-beem-on-solo-500w-sans-rallonge" label="Voir l'offre actuelle sur Beem" variant="box" position="footer-box" price="429 €" />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/comparatif/zendure-vs-sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Zendure vs Sunology vs Beem : le match 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet des 3 syst&egrave;mes &mdash; avec le tableau prix/Wc mis &agrave; jour juin 2026</p>
                </Link>
                <Link href="/avis/sunology-play-2" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Sunology PLAY 2</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le concurrent direct &agrave; 599&nbsp;&euro; (500 Wc)</p>
                </Link>
                <Link href="/comparatif/sunology-play2-vs-beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">PLAY 2 vs Beem On 500 Wc : le match juillet 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">12 crit&egrave;res, ROI compar&eacute; &mdash; le comparatif le plus r&eacute;cent</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis : le guide</h4>
                  <p className="text-xs text-charcoal-light mt-1">La d&eacute;marche que Beem ZEN facture 49&nbsp;&euro;, &agrave; faire vous-m&ecirc;me gratuitement</p>
                </Link>
                <Link href="/comparatif/sunology-vs-beem" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Sunology vs Beem</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le match des deux leaders sur 12 crit&egrave;res</p>
                </Link>
                <Link href="/avis/anker-solix-rs40p" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Anker SOLIX RS40P</h4>
                  <p className="text-xs text-charcoal-light mt-1">910 Wc IBC N-type &agrave; 799&nbsp;&euro; &mdash; le challenger haut de gamme</p>
                </Link>
                <Link href="/comparatif/300w-vs-400w-vs-500w-puissance" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">300W vs 400W vs 500W</h4>
                  <p className="text-xs text-charcoal-light mt-1">Quelle puissance choisir pour votre balcon</p>
                </Link>
                <Link href="/guide/panneau-solaire-balcon-debutant" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Guide complet d&eacute;butants (mis &agrave; jour ao&ucirc;t 2026)</h4>
                  <p className="text-xs text-charcoal-light mt-1">Fonctionnement, prix, r&egrave;glementation, choix du kit &mdash; tout ce qu&apos;il faut savoir avant d&apos;acheter</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>M&eacute;thodologie ROI :</strong> ROI calcul&eacute; avec tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3%/an (CRE), autoconsommation 85%, Performance Ratio 0,85, Lyon sud. &Eacute;conomies : 84&nbsp;&euro;/an, ROI 4,8&nbsp;ans, ~3&nbsp;190&nbsp;&euro; sur 25&nbsp;ans.</p>
              <p className="text-xs text-stone leading-relaxed"><strong>Transparence :</strong> avis ind&eacute;pendant. Les liens vers Beem Energy sont des liens affili&eacute;s. <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
