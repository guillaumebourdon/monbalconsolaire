import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { ACHATS_GROUPES } from '@/data/achats-groupes';
import { calculateROIYears, calculateFirstYearSavings, calculateProductionKwh, PERFORMANCE_RATIO } from '@/lib/pricing';
import { productibleSite } from '@/lib/rentabilite-departements';
import { DEPARTMENTS } from '@/data/departments';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Achat groupé de kits solaires : comment ça marche en 2026',
  description: 'Achat groupé de kits solaires de balcon : qui l\'organise, les étapes, ce qui est inclus, les prix constatés et la rentabilité.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/achat-groupe-kit-solaire',
  },
});

const kerwatt = ACHATS_GROUPES.find(a => a.slug === 'kerwatt')!;
const cotesDArmor = DEPARTMENTS.find(d => d.code === kerwatt.codeDepartement)!;
const productible22 = productibleSite(cotesDArmor.irradiation);
const kit22 = (prix: number) => ({ kitPriceEur: prix, kitPowerWc: kerwatt.puissanceDernierKitWc, productibleKwhPerKwc: productible22 });
const production22 = Math.round(calculateProductionKwh(kit22(kerwatt.prixConstates.max)));
const economies22 = Math.round(calculateFirstYearSavings(kit22(kerwatt.prixConstates.max)));
const roiMin22 = calculateROIYears(kit22(kerwatt.prixConstates.min));
const roiMax22 = calculateROIYears(kit22(kerwatt.prixConstates.max));
// Production réelle constatée par Kerwatt (déjà nette des pertes) : on la convertit pour pricing.ts,
// qui applique le ratio de performance à un productible brut.
const prodTerrain = kerwatt.productibleTerrain!;
const kitTerrain = (prix: number) => ({ kitPriceEur: prix, kitPowerWc: kerwatt.puissanceDernierKitWc, productibleKwhPerKwc: prodTerrain.interieur / PERFORMANCE_RATIO });
const productionTerrain = Math.round(calculateProductionKwh(kitTerrain(kerwatt.prixConstates.max)));
const roiTerrainMin = calculateROIYears(kitTerrain(kerwatt.prixConstates.min));
const roiTerrainMax = calculateROIYears(kitTerrain(kerwatt.prixConstates.max));
const fr = (n: number) => n.toLocaleString('fr-FR');

const faqData = [
  {
    question: 'Qu\'est-ce qu\'un achat groupé de kits solaires ?',
    answer: 'C\'est une commande commune de kits solaires plug-and-play, organisée par un collectif (association, coopérative citoyenne d\'énergie, commune) pour les habitants d\'un territoire. Les participants s\'inscrivent, la commande part quand assez de personnes sont réunies, et la livraison se fait en général lors d\'une réunion ou d\'un atelier, avec des conseils pour l\'installation et les démarches.',
  },
  {
    question: 'Un achat groupé est-il moins cher qu\'un kit acheté en ligne ?',
    answer: `Pas forcément. Les prix constatés lors des achats groupés de Kerwatt, dans les Côtes-d'Armor, allaient de ${kerwatt.prixConstates.min} à ${kerwatt.prixConstates.max} € selon les opérations. On trouve des kits moins chers en ligne. L'intérêt de l'achat groupé est ailleurs : un kit choisi et testé par le collectif, des explications pour la pose et la déclaration, et un interlocuteur local si quelque chose ne fonctionne pas.`,
  },
  {
    question: 'Combien de temps faut-il attendre son kit ?',
    answer: 'Cela dépend du nombre d\'inscrits. La commande n\'est passée que lorsque le lot est complet (30 kits chez Kerwatt), puis il faut compter le délai de livraison du fournisseur et la date de l\'atelier. Si vous êtes pressé, l\'achat en ligne est plus rapide.',
  },
  {
    question: 'Faut-il quand même déclarer son kit à Enedis après un achat groupé ?',
    answer: 'Oui. La convention d\'autoconsommation sans injection (CACSI) est obligatoire et gratuite pour tout kit, quelle que soit la façon dont il a été acheté. Les organisateurs d\'achats groupés en parlent souvent pendant la réunion, mais c\'est à chaque participant de faire la démarche pour son logement.',
  },
  {
    question: 'Comment trouver un achat groupé près de chez moi ?',
    answer: 'Renseignez-vous auprès de votre mairie ou de votre intercommunalité, de l\'espace conseil France Rénov\' ou de l\'agence locale de l\'énergie, et des collectifs citoyens d\'énergie de votre région. Nous présentons sur ce site les achats groupés dont l\'organisateur nous a transmis les informations.',
  },
  {
    question: 'Je fais partie d\'un collectif qui organise un achat groupé : pouvez-vous le présenter ?',
    answer: 'Oui, gratuitement. Écrivez-nous avec le déroulé de l\'opération, ce qui est inclus dans le kit, l\'ordre de prix et la façon de s\'inscrire. Nous vous envoyons le texte pour relecture avant la mise en ligne.',
  },
];

export default function AchatGroupePage() {
  return (
    <>
      <SchemaArticle
        title="Achat groupé de kits solaires : comment ça marche"
        description="Qui organise un achat groupé de kits solaires, les étapes, ce qui est inclus, les prix constatés et la rentabilité, avec l'exemple de Kerwatt dans les Côtes-d'Armor."
        url="https://monbalconsolaire.fr/guide/achat-groupe-kit-solaire"
        datePublished="2026-11-02"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Achat groupé' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Tout savoir', href: '/tout-savoir' }, { label: 'Achat groupé' }]} />
          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">Achat group&eacute; de kits solaires : comment &ccedil;a marche</h1>
            <p className="text-lg text-charcoal-light leading-relaxed">Plut&ocirc;t que d&apos;acheter un kit seul en ligne, vous pouvez passer par une commande group&eacute;e organis&eacute;e pr&egrave;s de chez vous. Qui les organise, comment elles se d&eacute;roulent, ce qu&apos;elles co&ucirc;tent et ce qu&apos;elles apportent vraiment, avec l&apos;exemple concret de Kerwatt, dans les C&ocirc;tes-d&apos;Armor.</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone flex-wrap"><span>Publi&eacute; le 2 novembre 2026</span><span>&middot;</span><span>7 min de lecture</span></div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">En bref</h2>
            <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
              <li><strong className="text-charcoal">Qui organise :</strong> des associations, des coop&eacute;ratives citoyennes d&apos;&eacute;nergie et des communes, pour les habitants de leur territoire.</li>
              <li><strong className="text-charcoal">Comment :</strong> r&eacute;union d&apos;information, inscriptions, commande quand le lot est complet, livraison lors d&apos;un atelier.</li>
              <li><strong className="text-charcoal">Le prix :</strong> pas toujours le plus bas du march&eacute;. L&apos;int&eacute;r&ecirc;t, c&apos;est l&apos;accompagnement et un interlocuteur local.</li>
              <li><strong className="text-charcoal">Apr&egrave;s :</strong> la d&eacute;claration &agrave; Enedis reste &agrave; faire par chaque participant.</li>
            </ul>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Qui organise les achats group&eacute;s ?</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Un achat group&eacute; de kits solaires est port&eacute; par un collectif local : une association, une coop&eacute;rative citoyenne d&apos;&eacute;nergie (comme les Centrales Villageoises), une commune ou une intercommunalit&eacute;. Le collectif choisit un kit, n&eacute;gocie avec un fournisseur, r&eacute;unit les participants et organise la livraison.</p>
              <p className="text-charcoal-light leading-relaxed">Les collectivit&eacute;s jouent souvent un r&ocirc;le discret mais d&eacute;cisif : elles relaient l&apos;appel &agrave; candidatures et pr&ecirc;tent une salle pour la r&eacute;union et la livraison.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les &eacute;tapes d&apos;un achat group&eacute;, avec l&apos;exemple de {kerwatt.nom}</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">La soci&eacute;t&eacute; r&eacute;gionale {kerwatt.nom}, bas&eacute;e &agrave; {kerwatt.ville}, organise des achats group&eacute;s de kits plug-and-play en Bretagne, et notamment dans {kerwatt.zone}. Elle en a d&eacute;j&agrave; vendu {kerwatt.kitsVendus}. Leurs op&eacute;rations suivent toujours le m&ecirc;me d&eacute;roul&eacute; :</p>
              <ol className="space-y-3">
                {kerwatt.deroule.map((etape, i) => (
                  <li key={i} className="card border-l-4 border-l-green flex gap-4 items-start">
                    <span className="font-mono font-extrabold text-green text-lg leading-none">{i + 1}</span>
                    <span className="text-sm text-charcoal-light leading-relaxed">{etape}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">L&apos;atelier de livraison fait la diff&eacute;rence : chaque kit est v&eacute;rifi&eacute; avant de partir, et les questions sur la pose se r&eacute;glent sur place plut&ocirc;t que seul devant une notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce qui est inclus et ce que &ccedil;a co&ucirc;te</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Chez {kerwatt.nom}, le kit comprend {kerwatt.contenuKit}. Du fait d&apos;une &eacute;volution constante des produits dans le photovolta&iuml;que, le mat&eacute;riel change d&apos;une op&eacute;ration &agrave; l&apos;autre : les premiers kits faisaient 400 Wc, les derniers {kerwatt.puissanceDernierKitWc} Wc.</p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="rounded-brand-xl border border-green/15 bg-gradient-to-br from-green-pale/40 via-white to-white p-5 text-center shadow-brand">
                  <div className="text-[10px] text-stone font-semibold uppercase tracking-widest">Prix constat&eacute;s</div>
                  <div className="font-mono font-extrabold text-2xl text-green my-2">{kerwatt.prixConstates.min}&ndash;{kerwatt.prixConstates.max} &euro;</div>
                  <div className="text-xs text-charcoal-light">selon les op&eacute;rations</div>
                </div>
                <div className="rounded-brand-xl border border-amber/15 bg-gradient-to-br from-amber-pale/40 via-white to-white p-5 text-center shadow-brand">
                  <div className="text-[10px] text-stone font-semibold uppercase tracking-widest">Kits vendus</div>
                  <div className="font-mono font-extrabold text-2xl text-amber-dark my-2">~300</div>
                  <div className="text-xs text-charcoal-light">par {kerwatt.nom}</div>
                </div>
              </div>
              <p className="text-charcoal-light leading-relaxed">Soyons honn&ecirc;tes : on trouve des kits moins chers en ligne. Un achat group&eacute; ne se choisit pas pour gagner quelques euros, mais pour &ecirc;tre accompagn&eacute;.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Est-ce rentable ? L&apos;exemple des C&ocirc;tes-d&apos;Armor</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">Dans les C&ocirc;tes-d&apos;Armor, un kit de {kerwatt.puissanceDernierKitWc} Wc orient&eacute; plein sud et sans ombre produit environ <strong>{fr(production22)} kWh par an</strong>, soit environ <strong>{economies22} &euro; d&apos;&eacute;conomies la premi&egrave;re ann&eacute;e</strong>. C&apos;est notre estimation prudente (donn&eacute;es PVGIS) : il se rembourse en <strong>{fr(roiMax22)} ans</strong> &agrave; {kerwatt.prixConstates.max} &euro;, et en <strong>{fr(roiMin22)} ans</strong> &agrave; {kerwatt.prixConstates.min} &euro;.</p>
              <p className="text-charcoal-light leading-relaxed mb-4">Les retours de terrain de {kerwatt.nom} sont plus optimistes&nbsp;: sur ses kits comme sur des centrales plus grandes, la production r&eacute;elle tourne autour de {fr(prodTerrain.cote)} kWh par kWc et par an sur la c&ocirc;te, et de {fr(prodTerrain.interieur)} kWh par kWc &agrave; l&apos;int&eacute;rieur des terres, soit environ <strong>{fr(productionTerrain)} kWh par an</strong> pour un panneau de {kerwatt.puissanceDernierKitWc} Wc bien orient&eacute;. Sur cette base, le kit se rembourse en <strong>{fr(roiTerrainMax)} ans</strong> &agrave; {kerwatt.prixConstates.max} &euro;, et en <strong>{fr(roiTerrainMin)} ans</strong> &agrave; {kerwatt.prixConstates.min} &euro;.</p>
              <p className="text-sm text-charcoal-light leading-relaxed">Le prix du kit compte presque autant que l&apos;ensoleillement : voir notre <Link href="/etude/rentabilite-kit-solaire-balcon-departement" className="text-green hover:underline">&eacute;tude de rentabilit&eacute; dans les 96 d&eacute;partements</Link>, ou chiffrez votre cas avec le <Link href="/calculateur" className="text-green hover:underline">calculateur</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les avantages et les limites</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-lg border-l-4 border-l-green">
                  <h3 className="font-bold text-base mb-3">Ce que l&apos;achat group&eacute; apporte</h3>
                  <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
                    <li>Un kit choisi par le collectif, pas par un algorithme de vente.</li>
                    <li>Une r&eacute;union pour comprendre avant d&apos;acheter.</li>
                    <li>Un kit test&eacute; &agrave; la livraison.</li>
                    <li>Un interlocuteur local en cas de probl&egrave;me.</li>
                  </ul>
                </div>
                <div className="card-lg border-l-4 border-l-amber">
                  <h3 className="font-bold text-base mb-3">Les limites</h3>
                  <ul className="space-y-2 text-sm text-charcoal-light leading-relaxed">
                    <li>Il faut attendre que le lot soit complet.</li>
                    <li>Un seul mod&egrave;le de kit par op&eacute;ration, en g&eacute;n&eacute;ral.</li>
                    <li>Pas toujours le prix le plus bas.</li>
                    <li>Les op&eacute;rations d&eacute;pendent de b&eacute;n&eacute;voles et d&apos;une salle disponible.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Apr&egrave;s la livraison : la d&eacute;claration &agrave; Enedis</h2>
              <p className="text-charcoal-light leading-relaxed">Une fois le kit branch&eacute;, chaque participant doit d&eacute;clarer son installation &agrave; Enedis (convention d&apos;autoconsommation sans injection, ou CACSI). C&apos;est gratuit, obligatoire, et c&apos;est le document que l&apos;assureur peut demander en cas de sinistre. Notre <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">guide pas &agrave; pas de la d&eacute;claration CACSI</Link> d&eacute;taille la proc&eacute;dure en 7 &eacute;tapes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Participer au prochain achat group&eacute; de {kerwatt.nom}</h2>
              <div className="card-lg bg-green-pale/20 border-green/10">
                <p className="text-sm text-charcoal-light leading-relaxed mb-3">Une dizaine de personnes se sont d&eacute;j&agrave; manifest&eacute;es pour le prochain achat group&eacute;. Il sera lanc&eacute; quand 30 candidatures seront r&eacute;unies.</p>
                {kerwatt.rechercheSalle && <p className="text-sm text-charcoal-light leading-relaxed mb-3">{kerwatt.nom} cherche aussi {kerwatt.rechercheSalle}. Vous repr&eacute;sentez une commune ou une association&nbsp;? &Eacute;crivez &agrave; la m&ecirc;me adresse.</p>}
                <p className="text-sm font-semibold">
                  Pour vous faire conna&icirc;tre&nbsp;: {kerwatt.inscription.href
                    ? <a href={kerwatt.inscription.href} className="text-green hover:underline">{kerwatt.inscription.label}</a>
                    : kerwatt.inscription.label}
                </p>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mt-4">Vous habitez les C&ocirc;tes-d&apos;Armor ? Voir aussi notre page <Link href="/solaire-balcon/cotes-d-armor" className="text-green hover:underline">kit solaire de balcon dans les C&ocirc;tes-d&apos;Armor</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}><summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4">{faq.question}<span className="text-stone group-open:rotate-180 transition-transform">&#9660;</span></summary><p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p></details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/guide/checklist-avant-achat-kit-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Premier kit solaire : la checklist avant d&apos;acheter</h3>
                  <p className="text-xs text-charcoal-light mt-1">Orientation, prise, bail, copropri&eacute;t&eacute;, budget</p>
                </Link>
                <Link href="/guide/installer-kit-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Installer un kit solaire balcon pas &agrave; pas</h3>
                  <p className="text-xs text-charcoal-light mt-1">Fixation, branchement, mise en service</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis pas &agrave; pas</h3>
                  <p className="text-xs text-charcoal-light mt-1">La d&eacute;marche obligatoire apr&egrave;s l&apos;installation</p>
                </Link>
                <Link href="/etude/rentabilite-kit-solaire-balcon-departement" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h3 className="font-bold text-sm group-hover:text-green transition-colors">Rentabilit&eacute; d&apos;un kit dans les 96 d&eacute;partements</h3>
                  <p className="text-xs text-charcoal-light mt-1">Carte, classement et donn&eacute;es ouvertes</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />
            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed mb-2"><strong>Sources :</strong> informations transmises par {kerwatt.nom} (d&eacute;roul&eacute; des op&eacute;rations, contenu des kits, prix constat&eacute;s, nombre de kits vendus), relues par {kerwatt.nom} avant publication. Production r&eacute;elle constat&eacute;e : retours de terrain de {kerwatt.nom}. Estimation prudente : PVGIS (Commission europ&eacute;enne), tarif r&eacute;glement&eacute; EDF Base 0,1940 &euro;/kWh, hausse de 3,3 % par an, 85 % d&apos;autoconsommation, m&eacute;thode d&eacute;taill&eacute;e dans <Link href="/a-propos" className="text-green hover:underline">notre m&eacute;thodologie</Link>.</p>
              <p className="text-xs text-stone leading-relaxed">Cet article ne contient aucun lien affili&eacute; et aucune contrepartie financi&egrave;re n&apos;a &eacute;t&eacute; &eacute;chang&eacute;e avec {kerwatt.nom}.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
