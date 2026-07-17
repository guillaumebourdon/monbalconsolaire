import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaProduct, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ProductHero } from '@/components/ui/ProductHero';

export const metadata: Metadata = {
  title: 'Anker SOLIX RS40P avis 2026 : kit balcon 910 Wc, vaut-il 799 €&nbsp;?',
  description: 'Avis complet Anker SOLIX RS40P : 2x455 W IBC N-type, onduleur 600 W WiFi (800 W), 799 €. Specs, ROI, comparatif Beem On 500W. Anker débarque sur le marché français.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/avis/anker-solix-rs40p',
  },
};

const faqData = [
  {
    question: 'L’Anker SOLIX RS40P vaut-il ses 799 € ?',
    answer: 'Oui, à condition d’avoir la place pour 2 grands panneaux. À 0,88 €/Wc (sur la puissance effective 800 W onduleur), le RS40P reste moins rentable que le Beem On 500W (0,86 €/Wc à 429 €). Mais la marque Anker rassure, la garantie 15 ans panneaux + 12 ans onduleur est solide, et la technologie IBC N-type est parmi les meilleures du segment.',
  },
  {
    question: 'Quelle est la différence entre 910 Wc installés et 800 W de production ?',
    answer: 'Les deux panneaux de 455 Wc produisent ensemble jusqu’à 910 W sous plein soleil. Mais le micro-onduleur est limité à 600 W par défaut (800 W après mise à jour firmware automatique). Les watts au-delà du plafond sont écrêtés : c’est ce qu’on appelle le « clipping ». En pratique, vous perdez environ 5 à 8 % de la production annuelle.',
  },
  {
    question: 'Le RS40P est-il compatible avec la batterie Anker SOLIX Solarbank ?',
    answer: 'Oui. L’Anker SOLIX RS40P est conçu pour s’associer à la Solarbank 2 (E1600 Pro, 1,6 kWh LFP). La Solarbank 2 se connecte directement entre les panneaux et l’onduleur. Avec batterie, l’autoconsommation passe de 85 % à 95 %, et le ROI gagne environ 1 an.',
  },
  {
    question: 'Combien produit l’Anker SOLIX RS40P par an ?',
    answer: 'En région lyonnaise, exposition sud : environ 870 kWh par an en conditions réelles (800 W onduleur, PR 0,85, autoconsommation 85 %). Les économies représentent ~135 €/an au tarif de 0,1940 €/kWh. Le ROI est atteint en 5,9 ans.',
  },
  {
    question: 'Quelle garantie pour l’Anker SOLIX RS40P ?',
    answer: 'Garantie produit 15 ans sur les panneaux (performance >80 % garantie sur 30 ans). Garantie 12 ans sur le micro-onduleur. C’est en dessous de Beem ou Sunology (25 ans sur les panneaux), mais Anker est une marque mondiale avec un SAV bien établi.',
  },
  {
    question: 'Quel est le vrai concurrent de l’Anker SOLIX RS40P en France ?',
    answer: 'Le concurrent direct est le Beem On 500 Wc (à 429 €) : moins de puissance brute (500 Wc vs 910 Wc), mais meilleur rapport qualité/prix (0,86 €/Wc vs 0,88€/Wc) et garantie 25 ans. Pour ceux qui veulent absolument Anker et la puissance IBC N-type, le RS40P s’impose. Sinon, le Beem On 500W reste le roi du rapport qualité/prix.',
  },
];

export default function AnkerSolixRS40PAvisPage() {
  return (
    <>
      <SchemaArticle
        title="Anker SOLIX RS40P avis : kit balcon 910 Wc, vaut-il 799 € ?"
        description="Avis complet sur l&apos;Anker SOLIX RS40P : panneaux IBC N-type 2x455 W, onduleur WiFi 600/800 W, garantie 15 ans. Test indépendant MonBalconSolaire."
        url="https://monbalconsolaire.fr/avis/anker-solix-rs40p"
        datePublished="2026-07-17"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaProduct
        name="Anker SOLIX RS40P"
        brand="Anker"
        description="Kit solaire balcon 2x455 W IBC N-type, micro-onduleur WiFi 600/800 W. Technologie premium, marque mondiale. Compatible Solarbank 2."
        price={799}
        ratingValue={7.5}
        ratingCount={1}
        url="https://monbalconsolaire.fr/avis/anker-solix-rs40p"
      />
      <SchemaBreadcrumb items={[{ label: 'Avis', href: '/avis' }, { label: 'Anker SOLIX RS40P' }]} />

      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Avis', href: '/avis' }, { label: 'Anker SOLIX RS40P' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Avis et test</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Anker SOLIX RS40P avis 2026 : le kit balcon 910&nbsp;Wc d&rsquo;une marque mondiale
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Anker &mdash; la marque de charge et batteries connue du grand public &mdash; s&rsquo;attaque au march&eacute; du kit solaire balcon en France. Son RS40P embarque deux panneaux IBC N-type de 455&nbsp;Wc et un onduleur WiFi upgradable &agrave; 800&nbsp;W. Prix&nbsp;: 799&nbsp;&euro;. Est-ce que la marque justifie la prime par rapport au <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500&nbsp;Wc &agrave; 429&nbsp;&euro;</Link>&nbsp;? R&eacute;ponse.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>17 juillet 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <ProductHero
            brand="Anker SOLIX"
            name="RS40P"
            power="910 Wc (2&times;455 W)"
            price="799 €"
            score="7.5/10"
            tagline="La puissance IBC N-type d&rsquo;une grande marque. Cher, mais rassuring."
            affiliateUrl="https://www.amazon.fr/dp/B0CB86F4LD"
            affiliateLabel="Voir sur Amazon.fr"
            accentColor="green"
          />
          <p className="text-xs text-stone mt-2 italic">Prix v&eacute;rifi&eacute; le 17/07/2026 &middot; Peut varier selon les promos</p>

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi Anker entre sur le march&eacute; fran&ccedil;ais</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Anker est l&rsquo;une des marques mondiales d&rsquo;accessoires &eacute;lectroniques les plus reconnues&nbsp;: chargeurs, batteries portables, c&acirc;bles. Sa division SOLIX cible le stockage d&rsquo;&eacute;nergie et les kits solaires depuis 2023. Le RS40P est son kit balcon phare, disponible en France via Amazon et les enseignes sp&eacute;cialis&eacute;es.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&rsquo;angle est clair&nbsp;: cibler les acheteurs qui connaissent d&eacute;j&agrave; Anker, font confiance &agrave; la marque et ne veulent pas prendre de risque sur un kit &laquo;&nbsp;sans marque&nbsp;&raquo; ou sur des acteurs fran&ccedil;ais moins connus &agrave; l&rsquo;international. La technologie IBC N-type (la m&ecirc;me que sur les panneaux haut de gamme r&eacute;sidentiels) est un vrai argument technique.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                {[
                  { v: '910 Wc', l: 'Puissance brute' },
                  { v: '800 W', l: 'Onduleur (MAJ)' },
                  { v: '22,7 %', l: 'Rendement IBC' },
                  { v: '15 ans', l: 'Garantie panneaux' },
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
              <div className="overflow-x-auto -mx-5 md:mx-0 my-4">
                <table className="w-full text-sm border-collapse min-w-[420px]">
                  <tbody>
                    {[
                      ['Puissance panneaux', '2 × 455 Wc = 910 Wc'],
                      ['Technologie cellules', 'IBC N-type (monocristallin)'],
                      ['Rendement', '22,7 %'],
                      ['Onduleur', 'MI60 WiFi — 600 W (800 W après MAJ firmware)'],
                      ['Connexion', 'Prise EU mise à la terre (Schuko)'],
                      ['Monitoring', 'App Anker SOLIX (iOS & Android)'],
                      ['Garantie panneaux', '15 ans produit / 30 ans performance (>80 %)'],
                      ['Garantie onduleur', '12 ans'],
                      ['Certifications', 'TÜV Rheinland, CE, VDE'],
                      ['Compatibilité batterie', 'Anker SOLIX Solarbank 2 (E1600 Pro)'],
                      ['Fixation', 'Kit sans support ou avec support inclinable'],
                      ['Prix kit sans support', '799 €'],
                      ['Prix kit avec support', '849 €'],
                    ].map(([k, v], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold text-charcoal">{k}</td>
                        <td className="p-3 font-mono text-sm text-charcoal-light">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&rsquo;on aime</h2>
              <div className="space-y-3">
                {[
                  {
                    t: 'La technologie IBC N-type',
                    d: 'Les cellules IBC (Interdigitated Back Contact) ont les contacts électriques au dos du panneau, ce qui élimine l’ombrage des grilles en face avant. Résultat : 22,7 % de rendement, soit le haut de gamme du segment balcon. Les performances dégradent moins vite sous hautes températures qu’un panneau PERC standard.',
                  },
                  {
                    t: 'La marque Anker et son écosystème',
                    d: 'Anker est présent dans 100 + pays, avec un SAV reconnu et des pièces disponibles. L’app SOLIX est complète : monitoring en temps réel, historique de production, économies estimées. La compatibilité native avec la Solarbank 2 permet d’ajouter le stockage sans changer d’écosystème.',
                  },
                  {
                    t: '910 Wc de panneaux sur 2 dalles',
                    d: 'Deux panneaux de 455 Wc, c’est 25 % de plus que la plupart des kits du marché (350–500 Wc). Même avec un onduleur plafonné à 800 W, la sur-capacité panneaux compense les mauvaises orientations et réduit l’impact des journaux gris.',
                  },
                  {
                    t: 'Garantie solide (15 + 12 ans)',
                    d: 'La garantie produit de 15 ans sur les panneaux et 12 ans sur l’onduleur est inférieure à ce que proposent Beem ou Sunology (25 ans), mais alignée avec les standards des grandes marques mondiales. La garantie de performance à 30 ans (>80 %) rassure sur la durée.',
                  },
                  {
                    t: 'Installation plug-and-play en 30 minutes',
                    d: 'Deux panneaux à accrocher, des câbles MC4 à connecter, une prise Schuko à brancher. Pas besoin d’électricien. Le support inclinable (en option) offre 5 angles de 0° à 45° pour optimiser l’exposition.',
                  },
                  {
                    t: 'Mise à jour 800 W automatique',
                    d: 'L’onduleur est livré en mode 600 W (légal partout) mais se met automatiquement à jour à 800 W via WiFi une fois connecté à Internet. Compatible avec la nouvelle réglementation française (décret 2024). Aucune manipulation nécessaire.',
                  },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-green">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Anker SOLIX RS40P"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/dp/B0CB86F4LD"
              label="Voir l&rsquo;offre Anker SOLIX RS40P sur Amazon"
              variant="secondary"
              position="after-pros"
              price="799 €"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qu&rsquo;on aime moins</h2>
              <div className="space-y-3">
                {[
                  {
                    t: 'Le prix : 799 € pour 800 W effectifs',
                    d: 'À 0,88 €/Wc (sur la puissance effective), l’Anker RS40P est 2,3× plus cher que le Beem On 500 Wc (à 429 €, 0,86 €/Wc). Le ROI à Lyon s’allonge à 5,9 ans contre 5,1 ans pour le Beem On 500 Wc. La marque se paie.',
                  },
                  {
                    t: 'Clipping de l’onduleur (perte 5-8 %)',
                    d: 'Avec 910 Wc de panneaux et un onduleur plafonné à 800 W, les pics de production de midi (quand l’ensoleillement est maximal) sont écrêtés. On perd 5 à 8 % de production annuelle. Le sous-dimensionnement de l’onduleur est une limite réelle, même si la sur-capacité panneaux compense partiellement sur les journaux nuageux.',
                  },
                  {
                    t: 'Garantie panneaux inférieure aux marques françaises',
                    d: 'Beem et Sunology offrent 25 ans de garantie produit sur leurs panneaux. L’Anker se limite à 15 ans produit (30 ans performance). En cas de problème entre 15 et 25 ans, vous êtes seul. Sur un investissement de 25 ans, c’est un vrai point d’attention.',
                  },
                  {
                    t: 'Deux grands panneaux rigides : logistique exigeante',
                    d: 'Chaque panneau pèse environ 22 kg et mesure plus d’un mètre. La livraison est volumineuse, l’installation sur un balcon étroit nécessite deux personnes. Pas idéal pour les balcons Haussmann ou les espaces contraints.',
                  },
                  {
                    t: 'Pas de SAV français dédié',
                    d: 'Le support Anker fonctionne en anglais principalement. Contrairement à Beem (Nantes) ou Sunology (Paris), il n’y a pas d’interlocuteur français dédié. Pour les questions techniques en français, on passe par Amazon ou le support international.',
                  },
                ].map((p, i) => (
                  <div key={i} className="card border-l-4 border-l-amber">
                    <h4 className="font-bold text-sm mb-1">{p.t}</h4>
                    <p className="text-xs text-charcoal-light">{p.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <AffiliateCTA
              productName="Anker SOLIX RS40P"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/dp/B0CB86F4LD"
              label="Comparer les prix sur Amazon"
              variant="secondary"
              position="after-cons"
            />

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Anker SOLIX RS40P vs la concurrence</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-3 rounded-tl-xl">Crit&egrave;re</th>
                      <th className="text-center p-3 bg-green-dark">Anker RS40P</th>
                      <th className="text-center p-3">Beem On 500&nbsp;Wc</th>
                      <th className="text-center p-3 rounded-tr-xl">Sunology PLAY 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Prix', '799 €', '429 €', '599 €'],
                      ['Puissance panneaux', '910 Wc', '500 Wc', '450 Wc'],
                      ['Onduleur max', '800 W (MAJ)', '600 W', '600 W'],
                      ['€/Wc effectif', '0,88 €', '0,86 €', '1,33 €'],
                      ['Technologie', 'IBC N-type', 'TOPCon bifacial', 'TOPCon'],
                      ['Garantie panneaux', '15 ans', '25 ans', '25 ans'],
                      ['ROI (Lyon)', '5,9 ans', '5,1 ans', '7,1 ans'],
                      ['Batterie compatible', 'Solarbank 2', 'Beem Box', 'VAULT 700 Wh'],
                      ['SAV France', 'Non (international)', 'Oui (Nantes)', 'Oui (Paris)'],
                    ].map(([c, anker, beem, sun], i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-semibold">{c}</td>
                        <td className="text-center p-3 font-semibold bg-green-pale/30">{anker}</td>
                        <td className="text-center p-3">{beem}</td>
                        <td className="text-center p-3">{sun}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-charcoal-light leading-relaxed text-sm">
                Verdict&nbsp;: si le budget n&rsquo;est pas une contrainte et que vous voulez la technologie IBC N-type avec la marque Anker, le RS40P est un excellent choix. Si vous optimisez le ROI, le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500 Wc</Link> est imbattable à 429&nbsp;€. Pour aller plus loin&nbsp;: <Link href="/comparatif/meilleur-kit-solaire-2026" className="text-green hover:underline">voir notre comparatif complet &rarr;</Link>
              </p>
            </section>

            <div className="card-lg bg-cream/50 border-border text-center my-8">
              <p className="text-sm font-semibold mb-1">Pas s&ucirc;r que l&rsquo;Anker RS40P soit fait pour vous&nbsp;?</p>
              <p className="text-xs text-charcoal-light mb-3">Calculez votre ROI personnalis&eacute; selon votre d&eacute;partement et votre exposition.</p>
              <Link href="/calculateur" className="btn-secondary text-sm inline-flex">
                Calculer mon ROI avec l&rsquo;Anker SOLIX RS40P &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Production r&eacute;elle et rentabilit&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Calculs bas&eacute;s sur 800 W effectifs (onduleur apr&egrave;s MAJ), PR 0,85, autoconsommation 85 %, tarif 0,1940 &euro;/kWh&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-amber text-white">
                      <th className="text-left p-3 rounded-tl-xl">R&eacute;gion</th>
                      <th className="text-center p-3">Production/an</th>
                      <th className="text-center p-3">&Eacute;conomies/an</th>
                      <th className="text-center p-3 rounded-tr-xl">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Marseille / PACA', '1 010 kWh', '167 €', '4,8 ans'],
                      ['Lyon / Rhône-Alpes', '870 kWh', '144 €', '5,5 ans'],
                      ['Nantes / Ouest', '840 kWh', '139 €', '5,7 ans'],
                      ['Paris / Île-de-France', '790 kWh', '130 €', '6,1 ans'],
                      ['Lille / Nord', '710 kWh', '117 €', '6,8 ans'],
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
              <p className="text-xs text-stone">
                ROI calcul&eacute; avec tarif 0,1940&nbsp;&euro;/kWh, inflation 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;%, Performance Ratio 0,85, orientation sud.
              </p>
              <p className="text-xs text-stone mt-1">
                Sur 25&nbsp;ans&nbsp;: <strong>~&nbsp;4&nbsp;200&nbsp;&euro;</strong> d&rsquo;&eacute;conomies cumul&eacute;es nettes (apr&egrave;s investissement de 799&nbsp;&euro;) au tarif actuel + inflation 3,3&nbsp;%/an.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; &eacute;viter si&hellip;</h2>
              <div className="space-y-2">
                {[
                  'Votre balcon est étroit ou difficile d’accès (2 panneaux de 22 kg chacun)',
                  'Vous voulez un SAV français dédié (préférez Beem ou Sunology)',
                  'Votre priorité est le ROI le plus rapide (Beem On 500 Wc est meilleur à 429 €)',
                  'Vous cherchez 25 ans de garantie produit (Anker ne garantit que 15 ans)',
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
              <p className="text-charcoal-light leading-relaxed mb-4">
                L&rsquo;Anker SOLIX RS40P est un kit bien construit, avec la technologie la plus pointue du segment (IBC N-type 22,7&nbsp;%). La marque Anker rassure sur la durabilit&eacute; et l&rsquo;&eacute;cosyst&egrave;me (Solarbank 2). Si vous &ecirc;tes d&eacute;j&agrave; dans l&rsquo;univers Anker ou si vous valorisez la marque mondiale, c&rsquo;est un excellent choix.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Mais soyons honnêtes&nbsp;: à 799&nbsp;€ pour 800&nbsp;W effectifs, le RS40P coûte 86&nbsp;% de plus que le <Link href="/avis/beem-on-500w" className="text-green hover:underline">Beem On 500&nbsp;Wc</Link> (à 429&nbsp;€) pour un ROI seulement 0,8 an moins bon. Vous payez essentiellement la marque, la technologie IBC et les 110&nbsp;Wc supplémentaires de capacité panneaux (partiellement &eacute;crêtés). Pour ceux qui cherchent le meilleur rapport qualité-prix, regardez aussi notre <Link href="/comparatif/kit-solaire-petit-budget" className="text-green hover:underline">comparatif kits petit budget</Link>.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                <strong>Note finale&nbsp;: <span className="text-amber-dark text-xl font-extrabold">7.5/10</span></strong> &mdash; Technologie premium, marque fiable. Cher mais justifi&eacute; pour qui veut Anker.
              </p>
              <a
                href="https://www.amazon.fr/dp/B0CB86F4LD"
                target="_blank"
                rel="sponsored noopener"
                className="btn-affiliate inline-flex mt-4"
              >
                Voir l&rsquo;Anker SOLIX RS40P sur Amazon &rarr;
              </a>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold mb-2">Combien pouvez-vous &eacute;conomiser avec 800 W sur votre balcon&nbsp;?</p>
              <Link href="/calculateur" className="btn-primary inline-flex mt-2">Calculer mes &eacute;conomies &rarr;</Link>
            </div>

            <AffiliateCTA
              productName="Anker SOLIX RS40P"
              merchantName="Amazon"
              affiliateUrl="https://www.amazon.fr/dp/B0CB86F4LD"
              label="Voir l&rsquo;offre actuelle sur Amazon"
              variant="box"
              position="footer-box"
              price="799 €"
            />

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

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/avis/beem-on-500w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem On 500 Wc</h4>
                  <p className="text-xs text-charcoal-light mt-1">429 &euro; pour 500 Wc bifacial TOPCon &mdash; le concurrent direct et plus rentable</p>
                </Link>
                <Link href="/avis/beem-kit-300w" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Avis Beem Kit 300W</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le kit le moins cher du march&eacute; &mdash; 299 &euro;, ROI en 5,5 ans</p>
                </Link>
                <Link href="/comparatif/kit-solaire-petit-budget" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Comparatif kits solaires petit budget</h4>
                  <p className="text-xs text-charcoal-light mt-1">Les meilleurs choix sous 500 &euro;</p>
                </Link>
                <Link href="/comparatif/meilleur-kit-solaire-2026" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleur kit solaire balcon 2026</h4>
                  <p className="text-xs text-charcoal-light mt-1">Comparatif complet tous budgets</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie&nbsp;:</strong> calculs ROI bas&eacute;s sur 0,1940&nbsp;&euro;/kWh (tarif r&eacute;glement&eacute; EDF 2026), inflation 3,3&nbsp;%/an (CRE), autoconsommation 85&nbsp;% (sans batterie), Performance Ratio 0,85, r&eacute;f&eacute;rence Lyon exposition sud. <strong>Transparence&nbsp;:</strong> article ind&eacute;pendant avec liens affili&eacute;s Amazon (commission sans surco&ucirc;t pour vous). <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
            </div>

          </div>
        </div>
      </article>
    </>
  );
}
