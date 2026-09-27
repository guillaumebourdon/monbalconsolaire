import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EmailCapture } from '@/components/ui/EmailCapture';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

// Regénérée toutes les 6 h : les offres datées basculent seules en « Terminée ».
export const revalidate = 21600;

const VERIFIED = '27/09/2026';
const SUNOLOGY_PLAY_URL = 'https://sunology.eu/products/play-kit-solaire-plug-play';
const SUNOLOGY_PROMO_END = '2026-09-30';

// Date du jour à Paris au format YYYY-MM-DD (comparable lexicographiquement)
function todayParis(): string {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date());
}

function isOver(endsAt?: string): boolean {
  return !!endsAt && todayParis() > endsAt;
}

export function generateMetadata(): Metadata {
  const promo = !isOver(SUNOLOGY_PROMO_END);
  return {
    title: 'Code promo Sunology, Beem, Sunethic : offres vérifiées 2026',
    description: promo
      ? 'Code promo Sunology : -12% sur tout jusqu’au 30/09 et parrainage -7%. Offres Beem, Sunethic, EcoFlow, Zendure vérifiées sur les sites officiels.'
      : 'Code promo Sunology : parrainage S-Club -7% et opérations saisonnières. Offres Beem, Sunethic, EcoFlow, Zendure vérifiées sur les sites officiels.',
    alternates: {
      canonical: 'https://monbalconsolaire.fr/codes-promo',
    },
  };
}

const faqData = (sunologyPromo: boolean) => [
  {
    question: 'Existe-t-il un code réduction Sunology ?',
    answer:
      `Sunology ne publie pas de code promo public permanent. Deux leviers officiels existent : les opérations saisonnières affichées directement sur le site (${sunologyPromo ? 'par exemple -12% sur tout jusqu’au 30 septembre 2026, appliqué automatiquement' : 'comme le -12% sur tout de septembre 2026, appliqué automatiquement'}) et le parrainage S-Club, qui donne 7% de remise sur la première commande. Les codes du type SUN_PRENOM que l’on voit sur les sites de coupons sont des codes de parrainage de particuliers.`,
  },
  {
    question: 'Comment fonctionne le parrainage Sunology ?',
    answer:
      'Le programme S-Club de Sunology offre 7% de remise sur la première commande du filleul. Le parrain reçoit 3% du montant acheté par son filleul en Sunopoints, convertibles en carte cadeau ou en remise Sunology. Il suffit de choisir un parrain membre de la communauté Sunology au moment de la commande.',
  },
  {
    question: 'Le code SUN_RJHOMESOLAR (ou un autre code SUN_) est-il valable ?',
    answer:
      'Les codes au format SUN_XXX sont des codes de parrainage personnels de clients Sunology. Ils donnent en principe la remise filleul officielle (7%) et rémunèrent la personne qui les diffuse. Les sites annonçant -10% ou -15% ne sont pas confirmés par Sunology : vérifiez toujours le montant réel au panier avant de payer.',
  },
  {
    question: 'Y a-t-il un code promo Sunology pour le Black Friday ?',
    answer:
      'Sunology fait chaque année une opération Black Friday, sans code : les remises s’affichent directement sur le site. En 2025, la marque annonçait jusqu’à 640 € de réduction, jusqu’au 3 décembre (source : Selectra). La remise parrainage n’est généralement pas cumulable avec ces opérations.',
  },
  {
    question: 'Existe-t-il un code promo Beem Energy pour les kits plug-and-play ?',
    answer:
      'Nous n’avons pas trouvé de code officiel Beem pour les kits balcon au 27/09/2026. Le parrainage officiel Beem (250 € pour le filleul et le parrain) concerne uniquement les projets Beem Roof et Beem Battery, pas les kits plug-and-play. Les codes PART-XXX diffusés par des sites partenaires ne sont pas vérifiables publiquement.',
  },
  {
    question: 'Existe-t-il un code promo Sunethic ?',
    answer:
      'Sunethic ne publie pas de code public officiel. En septembre 2026, la marque affichait sur son site des remises de 50 à 150 € sur les kits à panneaux SunPower (jusqu’au 21/09, terminée), la livraison offerte et le dossier mairie offert sur les kits 6 panneaux.',
  },
];

type Offer = {
  label: string;
  detail: string;
  status: 'active' | 'expired' | 'none';
  endsAt?: string; // YYYY-MM-DD : au-delà, l'offre s'affiche « Terminée »
  source: string;
  sourceUrl: string;
};

function OfferCard({ o: raw }: { o: Offer }) {
  const o: Offer = raw.status === 'active' && isOver(raw.endsAt) ? { ...raw, status: 'expired' } : raw;
  const statusLabel = o.status === 'active' ? 'Active' : o.status === 'expired' ? 'Terminée' : 'Pas de code';
  const statusClass =
    o.status === 'active'
      ? 'bg-green-pale text-green'
      : o.status === 'expired'
      ? 'bg-cream text-stone'
      : 'bg-amber-pale text-amber-dark';
  return (
    <div className={`card ${o.status === 'active' ? 'border-l-4 border-l-green' : 'border-l-4 border-l-amber'}`}>
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span className="font-bold text-sm">{o.label}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusClass}`}>{statusLabel}</span>
      </div>
      <p className="text-sm text-charcoal-light leading-relaxed">{o.detail}</p>
      <p className="text-xs text-stone mt-2">
        V&eacute;rifi&eacute; le {VERIFIED} &middot; Source :{' '}
        <a href={o.sourceUrl} target="_blank" rel="noopener" className="text-green hover:underline">
          {o.source}
        </a>
      </p>
    </div>
  );
}

const sunologyOffers: Offer[] = [
  {
    label: 'La rentrée Sunology : -12% sur tout',
    detail:
      'Remise appliquée automatiquement, sans code, jusqu’au 30 septembre 2026. Le PLAY passe de 599 € à 527 €. Expédition premium gratuite, paiement en 12x sans frais.',
    status: 'active',
    endsAt: SUNOLOGY_PROMO_END,
    source: 'sunology.eu (fiche PLAY)',
    sourceUrl: SUNOLOGY_PLAY_URL,
  },
  {
    label: 'Parrainage S-Club : -7% sur la 1re commande',
    detail:
      'Le filleul obtient 7% de remise sur sa première commande en choisissant un parrain membre de la communauté Sunology. Le parrain touche 3% du montant en Sunopoints. Utile hors période de promo : vérifiez au panier si la remise se cumule avec l’opération en cours.',
    status: 'active',
    source: 'sunology.eu (page parrainage)',
    sourceUrl: 'https://sunology.eu/pages/parrainage',
  },
];

const otherBrands: { id: string; brand: string; intro: string; offers: Offer[]; cta?: { url: string; product: string; merchant: string } }[] = [
  {
    id: 'sunethic',
    brand: 'Sunethic',
    intro:
      'Pas de code promo public officiel chez Sunethic. Les remises passent par des opérations affichées sur la page d’accueil. Les codes type « WELCOME » ou codes d’influenceurs relayés par les sites de coupons ne sont pas confirmés par la marque.',
    offers: [
      {
        label: 'Remises 50 à 150 € sur les kits SunPower',
        detail: 'Opération affichée sur le site jusqu’au 21/09/2026 : terminée à la date de vérification.',
        status: 'expired',
        source: 'sunethic.fr',
        sourceUrl: 'https://sunethic.fr/',
      },
      {
        label: 'Livraison offerte + dossier mairie offert',
        detail:
          'Livraison offerte en 15 jours sur les stations et kits. Dossier mairie offert (valeur annoncée 190 €) à partir des kits 6 panneaux, donc pas sur un kit balcon 1 panneau.',
        status: 'active',
        source: 'sunethic.fr',
        sourceUrl: 'https://sunethic.fr/',
      },
    ],
    cta: { url: 'https://sunethic.fr/produits', product: 'Sunethic F500', merchant: 'Sunethic' },
  },
  {
    id: 'beem',
    brand: 'Beem Energy',
    intro:
      'Aucun code officiel pour les kits plug-and-play au 27/09/2026. Les promotions en cours visent les batteries et les projets toiture. Rappel : Beem Energy est en procédure de sauvegarde depuis novembre 2025 (SAV maintenu).',
    offers: [
      {
        label: 'Jusqu’à -25% sur les projets avec Beem Battery',
        detail: 'Ne concerne pas les kits balcon seuls. Le Beem Kit reste affiché à partir de 299 € et le Beem On 460W à partir de 429 €.',
        status: 'active',
        source: 'beemenergy.fr',
        sourceUrl: 'https://beemenergy.fr/',
      },
      {
        label: 'Parrainage Beem : 250 € filleul / 250 € parrain',
        detail: 'Réservé aux projets Beem Roof et Beem Battery (le filleul cite le nom du parrain au premier appel). Non applicable aux kits plug-and-play.',
        status: 'none',
        source: 'beemenergy.fr (page parrainage)',
        sourceUrl: 'https://beemenergy.fr/pages/ne-perdez-pas-de-temps-pour-parrainer-vos-proches',
      },
    ],
    cta: { url: 'https://beemenergy.fr/products/kit-beem', product: 'Beem Kit 300W', merchant: 'Beem Energy' },
  },
  {
    id: 'ecoflow',
    brand: 'EcoFlow',
    intro: 'Pas de code public officiel. EcoFlow fonctionne par grosses opérations saisonnières affichées sur le site, avec des points EcoCredits pour les membres.',
    offers: [
      {
        label: 'Autumn Sale gamme STREAM : jusqu’à -57%',
        detail: 'Du 14 septembre au 7 octobre 2026. Le PowerStream n’est plus vendu sur la boutique officielle : EcoFlow y propose désormais la gamme STREAM.',
        status: 'active',
        endsAt: '2026-10-07',
        source: 'fr.ecoflow.com',
        sourceUrl: 'https://fr.ecoflow.com/',
      },
    ],
    cta: { url: 'https://fr.ecoflow.com/products/stream-ultra-pro', product: 'EcoFlow STREAM Ultra', merchant: 'EcoFlow' },
  },
  {
    id: 'zendure',
    brand: 'Zendure',
    intro: 'Pas de code public officiel. Les baisses de prix sont directement affichées, avec une garantie de prix de 30 jours.',
    offers: [
      {
        label: 'Autumn Deals : jusqu’à -43%',
        detail: 'Exemples affichés : SolarFlow 2400 AC+ à 839 € (au lieu de 1 279 €), SolarFlow 1600 AC+ à 959 € (au lieu de 1 678 €). Date de fin non indiquée.',
        status: 'active',
        source: 'zendure.fr',
        sourceUrl: 'https://zendure.fr/',
      },
    ],
    cta: { url: 'https://zendure.fr/products/solarflow-mix-series', product: 'Zendure SolarFlow', merchant: 'Zendure' },
  },
];

export default function CodesPromoPage() {
  const sunologyPromo = !isOver(SUNOLOGY_PROMO_END);
  return (
    <section className="section-padding">
      <SchemaFAQ questions={faqData(sunologyPromo)} />
      <div className="container-brand max-w-3xl">
        <Breadcrumbs items={[{ label: 'Codes promo' }]} />

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Code promo Sunology, Beem, Sunethic, EcoFlow, Zendure &middot; Offres v&eacute;rifi&eacute;es le {VERIFIED}
        </h1>
        <p className="text-charcoal-light text-lg mb-4">
          Uniquement des offres v&eacute;rifi&eacute;es sur les sites officiels, avec leur date de v&eacute;rification. Quand une marque n&apos;a pas de code, on le dit, et on indique la meilleure fa&ccedil;on l&eacute;gale de payer moins cher.
        </p>
        <div className="card bg-cream/50 text-sm text-charcoal-light leading-relaxed mb-8">
          <strong className="text-charcoal">En bref ({VERIFIED}) :</strong> {sunologyPromo ? <>Sunology fait -12% sur tout jusqu&apos;au 30/09 (sans code) et propose -7% via son parrainage S-Club.</> : <>L&apos;op&eacute;ration Sunology -12% est termin&eacute;e (30/09) ; reste le parrainage S-Club &agrave; -7%.</>} Beem, Sunethic, EcoFlow et Zendure n&apos;ont pas de code public officiel : leurs remises sont affich&eacute;es directement sur leur site.
        </div>

        <nav className="flex flex-wrap gap-2 text-sm mb-10" aria-label="Sommaire">
          <a href="#sunology" className="badge-green">Sunology</a>
          <a href="#sunethic" className="badge-amber">Sunethic</a>
          <a href="#beem" className="badge-amber">Beem</a>
          <a href="#ecoflow" className="badge-amber">EcoFlow</a>
          <a href="#zendure" className="badge-amber">Zendure</a>
          <a href="#faq" className="badge-amber">FAQ</a>
        </nav>

        <div className="space-y-12">
          {/* SUNOLOGY */}
          <section id="sunology" className="scroll-mt-24">
            <h2 className="text-2xl font-extrabold mb-4">Code promo Sunology</h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Sunology ne diffuse pas de code promo public permanent. Les r&eacute;ductions officielles passent par deux canaux : les op&eacute;rations saisonni&egrave;res (appliqu&eacute;es automatiquement sur le site) et le parrainage S-Club. Voici ce qui est actif au {VERIFIED}.
            </p>
            <div className="space-y-3 mb-6">
              {sunologyOffers.map((o) => (
                <OfferCard key={o.label} o={o} />
              ))}
            </div>

            <div className="card-lg bg-amber-pale/30 border-amber/10 text-sm text-charcoal-light leading-relaxed mb-6">
              <h3 className="font-bold text-charcoal mb-2">Et les codes &laquo; SUN_RJHOMESOLAR &raquo;, &laquo; SUN26 &raquo;&hellip; ?</h3>
              <p>
                Les codes au format <span className="font-mono">SUN_PRENOM</span> (dont SUN_RJHOMESOLAR) sont des codes de <strong>parrainage personnels</strong> de clients Sunology : ils donnent la remise filleul officielle (7%) et r&eacute;mun&egrave;rent la personne qui les publie. Les sites de coupons qui annoncent -10% ou -15% (SUN26, etc.) ne sont confirm&eacute;s nulle part par Sunology. Nous ne les listons pas. R&egrave;gle simple : si la remise n&apos;appara&icirc;t pas au panier, elle n&apos;existe pas.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-3">Code promo Sunology PLAY (ex-PLAY 2)</h3>
            <p className="text-charcoal-light leading-relaxed mb-4">
              {sunologyPromo ? (
                <>Le PLAY (500 Wc, successeur du PLAY 2 de 450/460 Wc) est affich&eacute; &agrave; <strong>527 &euro; au lieu de 599 &euro;</strong> jusqu&apos;au 30 septembre 2026 gr&acirc;ce &agrave; l&apos;op&eacute;ration -12%.</>
              ) : (
                <>Le PLAY (500 Wc, successeur du PLAY 2 de 450/460 Wc) est affich&eacute; &agrave; <strong>599 &euro;</strong> ; l&apos;op&eacute;ration -12% s&apos;est termin&eacute;e le 30 septembre 2026.</>
              )}{' '}Il n&apos;existe pas de code sp&eacute;cifique au PLAY. Hors promotion, le parrainage (-7%) le ram&egrave;ne &agrave; environ 557 &euro;. Notre analyse compl&egrave;te :{' '}
              <Link href="/avis/sunology-play-2" className="text-green font-semibold hover:underline">avis Sunology PLAY (ex-PLAY 2)</Link>.
            </p>
            <AffiliateCTA productName="Sunology PLAY" merchantName="Sunology" affiliateUrl={SUNOLOGY_PLAY_URL} label={sunologyPromo ? 'Voir le PLAY 500 W à -12% sur Sunology' : 'Voir le prix du PLAY 500 W sur Sunology'} variant="secondary" position="codes_promo_sunology" price={sunologyPromo ? '527 €' : '599 €'} />

            <h3 className="text-xl font-bold mt-8 mb-3">Sunology et le Black Friday</h3>
            <p className="text-charcoal-light leading-relaxed">
              Sunology ne donne pas de code Black Friday : les remises s&apos;affichent directement. En 2025, la marque annon&ccedil;ait jusqu&apos;&agrave; 640 &euro; de r&eacute;duction jusqu&apos;au 3 d&eacute;cembre (
              <a href="https://selectra.info/energie/actualites/renovation-energetique/energie-moins-chere-sunology-propose-reduction-de-640-euros-pour-black-friday" target="_blank" rel="noopener" className="text-green hover:underline">source Selectra</a>
              ). Si vous n&apos;&ecirc;tes pas press&eacute;, fin novembre reste la p&eacute;riode la plus probable pour la meilleure remise de l&apos;ann&eacute;e. Nous mettrons cette page &agrave; jour d&egrave;s l&apos;annonce 2026.
            </p>
          </section>

          {/* OTHER BRANDS */}
          {otherBrands.map((b) => (
            <section key={b.id} id={b.id} className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold mb-4">Code promo {b.brand}</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">{b.intro}</p>
              <div className="space-y-3 mb-4">
                {b.offers.map((o) => (
                  <OfferCard key={o.label} o={o} />
                ))}
              </div>
              {b.cta && (
                <AffiliateCTA productName={b.cta.product} merchantName={b.cta.merchant} affiliateUrl={b.cta.url} label={`Voir les prix ${b.brand}`} variant="inline" position={`codes_promo_${b.id}`} />
              )}
            </section>
          ))}

          {/* Legit tips */}
          <section className="reveal">
            <h2 className="text-2xl font-extrabold mb-4">Payer moins cher sans code promo</h2>
            <ul className="space-y-3 text-sm text-charcoal-light leading-relaxed">
              <li className="card border-l-4 border-l-green"><strong className="text-charcoal">Viser les temps forts :</strong> soldes d&apos;hiver et d&apos;&eacute;t&eacute;, French Days, rentr&eacute;e et surtout Black Friday. Les marques de kits balcon y concentrent leurs plus grosses remises.</li>
              <li className="card border-l-4 border-l-green"><strong className="text-charcoal">Utiliser le parrainage :</strong> si un proche a d&eacute;j&agrave; un kit Sunology, passez par lui (-7% pour vous, 3% pour lui) plut&ocirc;t que par un code trouv&eacute; sur un site de coupons.</li>
              <li className="card border-l-4 border-l-green"><strong className="text-charcoal">Comparer avec les grandes surfaces de bricolage :</strong> certains kits sont aussi vendus en GSB (Leroy Merlin, Castorama) ou sur Amazon, parfois &agrave; un prix diff&eacute;rent du site de la marque.</li>
              <li className="card border-l-4 border-l-green"><strong className="text-charcoal">Choisir la bonne taille :</strong> un kit surdimensionn&eacute; co&ucirc;te plus cher qu&apos;il ne rapporte. Faites d&apos;abord le calcul avec notre <Link href="/calculateur" className="text-green font-semibold hover:underline">calculateur</Link> et consultez les <Link href="/blog/aides-subventions-panneau-solaire-balcon-2026" className="text-green font-semibold hover:underline">aides disponibles en 2026</Link>.</li>
            </ul>
          </section>

          {/* Email capture */}
          <div className="card-lg bg-gradient-to-br from-amber-pale/40 via-white to-green-pale/20 border-amber/10 reveal">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">&#127873;</span>
              <div>
                <h2 className="font-bold text-base mb-1">Alerte bons plans (Black Friday inclus)</h2>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  Recevez un email quand une nouvelle offre v&eacute;rifi&eacute;e appara&icirc;t chez Sunology, Beem, Sunethic, EcoFlow ou Zendure. Nous n&apos;avons pas encore de code exclusif n&eacute;goci&eacute; : vous serez pr&eacute;venu&middot;e d&egrave;s qu&apos;il y en a un.
                </p>
              </div>
            </div>
            <EmailCapture
              endpoint="/api/email/subscribe-promo"
              source="codes_promo"
              buttonLabel="Je m'inscris"
              successMessage="Inscription confirm&eacute;e ! V&eacute;rifiez votre bo&icirc;te email."
            />
          </div>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24">
            <h2 className="text-2xl font-extrabold mb-4">Questions fr&eacute;quentes</h2>
            <div className="space-y-3">
              {faqData(sunologyPromo).map((f, i) => (
                <details key={i} className="card group" open={i === 0}>
                  <summary className="font-bold text-sm cursor-pointer list-none">{f.question}</summary>
                  <p className="text-sm text-charcoal-light leading-relaxed mt-3">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-2xl font-extrabold mb-4">&Agrave; lire avant d&apos;acheter</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/avis/sunology-play-2" className="card border-l-4 border-l-green hover:shadow-md transition-shadow text-sm font-semibold">Avis Sunology PLAY 2</Link>
              <Link href="/avis/sunethic-f500" className="card border-l-4 border-l-green hover:shadow-md transition-shadow text-sm font-semibold">Avis Sunethic F500</Link>
              <Link href="/comparatif/sunology-vs-beem" className="card border-l-4 border-l-green hover:shadow-md transition-shadow text-sm font-semibold">Comparatif Sunology vs Beem</Link>
              <Link href="/quel-kit-choisir" className="card border-l-4 border-l-green hover:shadow-md transition-shadow text-sm font-semibold">Quel kit solaire choisir ?</Link>
            </div>
          </section>

          <section className="card-lg bg-cream/50 space-y-4 text-sm text-charcoal-light leading-relaxed">
            <div>
              <h3 className="font-bold text-charcoal mb-1">Notre m&eacute;thode</h3>
              <p>Chaque offre est relev&eacute;e sur le site officiel de la marque (ou une source de presse dat&eacute;e) et affich&eacute;e avec sa date de v&eacute;rification. On ne recopie pas les codes des agr&eacute;gateurs de coupons, souvent expir&eacute;s ou invent&eacute;s.</p>
            </div>
            <div>
              <h3 className="font-bold text-charcoal mb-1">Transparence affiliation</h3>
              <p>Certains liens sont affili&eacute;s : si vous achetez via ces liens, nous pouvons toucher une commission, sans surco&ucirc;t pour vous. Cette page n&apos;est pas un classement payant.</p>
            </div>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-border-light">
          <p className="text-xs text-stone">
            Offres v&eacute;rifi&eacute;es le 27 septembre 2026 &middot; <Link href="/a-propos" className="text-green hover:underline">&Agrave; propos</Link> &middot; <Link href="/methodologie" className="text-green hover:underline">M&eacute;thodologie</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
