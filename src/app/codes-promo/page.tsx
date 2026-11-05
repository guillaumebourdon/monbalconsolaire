import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EmailCapture } from '@/components/ui/EmailCapture';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';
import { withCanonicalOg } from '@/lib/metadata';
import { ecoflowUrl, zendureUrl } from '@/lib/affiliate';

// Regénérée toutes les 6 h : les offres datées basculent seules en « Terminée ».
export const revalidate = 21600;

const VERIFIED = '05/11/2026';
const SUNOLOGY_PLAY_URL = 'https://sunology.eu/products/play-kit-solaire-plug-play';
const SUNOLOGY_PROMO_END = '2026-10-31';
const SUNOLOGY_BLACKFRIDAY_CODE = 'BLACKSUN';
const SUNOLOGY_BLACKFRIDAY_END = '2026-12-04';
const ZENDURE_CODE = 'AF5E24';
const ZENDURE_CODE_END = '2027-01-04';

// Date du jour à Paris au format YYYY-MM-DD (comparable lexicographiquement)
function todayParis(): string {
  return new Intl.DateTimeFormat('fr-CA', { timeZone: 'Europe/Paris' }).format(new Date());
}

function isOver(endsAt?: string): boolean {
  return !!endsAt && todayParis() > endsAt;
}

export function generateMetadata(): Metadata {
  const blackFriday = !isOver(SUNOLOGY_BLACKFRIDAY_END);
  return withCanonicalOg({
    title: blackFriday
      ? 'Code promo Sunology : -100 € avec BLACKSUN (Black Friday)'
      : 'Code promo Sunology 2026 : parrainage -7 %, offres vérifiées',
    description: blackFriday
      ? 'Sunology : code BLACKSUN, jusqu’à -640 € jusqu’au 4/12 (Black Friday). Zendure -8 % avec AF5E24. Beem, EcoFlow, Sunethic vérifiés le 05/11.'
      : 'Pas de code Sunology public : parrainage S-Club -7 %, codes SUN_ décryptés. Zendure : code AF5E24, -8 % en plus jusqu’au 04/01. Beem, EcoFlow vérifiés.',
    alternates: {
      canonical: 'https://monbalconsolaire.fr/codes-promo',
    },
  });
}

const faqData = (sunologyBlackFriday: boolean) => [
  {
    question: 'Existe-t-il un code réduction Sunology ?',
    answer:
      `Sunology ne publie pas de code promo permanent, mais ${sunologyBlackFriday ? `une opération Black Friday est en cours : le code ${SUNOLOGY_BLACKFRIDAY_CODE} fait baisser le prix, avec une remise qui augmente selon la quantité achetée` : 'des opérations saisonnières (comme le Black Friday) sont affichées directement sur le site'}. Le parrainage S-Club donne 7% de remise sur la première commande, en plus. Les codes du type SUN_PRENOM que l’on voit sur les sites de coupons sont des codes de parrainage de particuliers.`,
  },
  {
    question: 'Comment fonctionne le parrainage Sunology ?',
    answer:
      'Le programme S-Club de Sunology offre 7% de remise sur la première commande du filleul. Le parrain reçoit 3% du montant acheté par son filleul en Sunopoints, convertibles en carte cadeau ou en remise Sunology. Il suffit de choisir un parrain membre de la communauté Sunology au moment de la commande.',
  },
  {
    question: 'Les codes Sunology au format SUN_ trouvés en ligne sont-ils valables ?',
    answer:
      'Les codes au format SUN_XXX sont des codes de parrainage personnels de clients Sunology. Ils donnent en principe la remise filleul officielle (7%) et rémunèrent la personne qui les diffuse. Les sites annonçant -10% ou -15% ne sont pas confirmés par Sunology : vérifiez toujours le montant réel au panier avant de payer.',
  },
  {
    question: 'Y a-t-il un code promo Sunology pour le Black Friday ?',
    answer:
      `Oui, en 2026 : l'opération "Black Sun Weeks" (du 4 novembre au 4 décembre) donne jusqu'à 640 € de remise avec le code ${SUNOLOGY_BLACKFRIDAY_CODE}, avec un rabais qui augmente selon la quantité achetée (ex. le PLAY passe de 599 € à 499 € pour un panneau). -14 % sur le service d'installation HOME. La remise parrainage n'est généralement pas cumulable avec cette opération : vérifiez le montant au panier.`,
  },
  {
    question: 'Existe-t-il un code promo Beem Energy pour les kits plug-and-play ?',
    answer:
      'Nous n’avons pas trouvé de code officiel Beem pour les kits balcon au 05/11/2026 (pas d’annonce Black Friday repérée à cette date). Le parrainage officiel Beem (250 € pour le filleul et le parrain) concerne uniquement les projets Beem Roof et Beem Battery, pas les kits plug-and-play. Les codes PART-XXX diffusés par des sites partenaires ne sont pas vérifiables publiquement.',
  },
  {
    question: 'Existe-t-il un code promo Zendure ?',
    answer:
      'Oui : du 2 novembre 2026 au 4 janvier 2027, le code AF5E24 donne 8 % de remise en plus des prix déjà baissés sur zendure.fr. Il fonctionne sur les SolarFlow MIX, SolarFlow 2400 AC, SolarFlow 1600 AC+, les batteries AB2000 et AB3000 et les accessoires, mais pas sur les SolarFlow 2400 AC+ et 2400 Pro.',
  },
  {
    question: 'Existe-t-il un code promo Sunethic ?',
    answer:
      'Sunethic ne publie pas de code public officiel. Au 05/11/2026, la marque met toujours en avant des prix bas sur ses kits à panneaux français Voltec Solar et des promotions sur les batteries plug-and-play Anker et Zendure, sans montant de remise chiffré ni opération Black Friday spécifique. La livraison est offerte, et le dossier mairie à partir des kits 6 panneaux.',
  },
];

type Offer = {
  label: string;
  detail: string;
  status: 'active' | 'expired' | 'none';
  verified?: string; // date de vérification propre à l'offre (sinon VERIFIED)
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
        V&eacute;rifi&eacute; le {o.verified ?? VERIFIED} &middot; Source :{' '}
        <a href={o.sourceUrl} target="_blank" rel="noopener" className="text-green hover:underline">
          {o.source}
        </a>
      </p>
    </div>
  );
}

const sunologyOffers: Offer[] = [
  {
    label: `Black Sun Weeks : code ${SUNOLOGY_BLACKFRIDAY_CODE}, jusqu’à -640 €`,
    detail:
      'Du 4 novembre au 4 décembre 2026 (les pages officielles hésitent entre le 3 et le 4 décembre pour la fin) : le code fait passer le PLAY de 599 € à 499 € et le PLAY Max de 1 179 € à 1 079 € pour un panneau, avec une remise qui augmente selon la quantité achetée (jusqu’à -640 € en multi-panneaux). -14 % sur le service d’installation HOME. Vérifiez le montant exact au panier.',
    status: 'active',
    endsAt: SUNOLOGY_BLACKFRIDAY_END,
    verified: '05/11/2026',
    source: 'black-friday.sunology.eu',
    sourceUrl: 'https://black-friday.sunology.eu/',
  },
  {
    label: 'Bonus Anti-Augmentation : -11 % à -13 % (terminé)',
    detail:
      'Opération d’octobre 2026, sans code : -11 % dès le premier euro, et jusqu’à -13 % quand le panier augmentait. Remplacée depuis le 4 novembre par l’opération Black Sun Weeks ci-dessus.',
    status: 'active',
    endsAt: SUNOLOGY_PROMO_END,
    source: 'sunology.eu (bandeau du site)',
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
        label: 'Prix bas sur les kits Voltec Solar et les batteries Anker / Zendure',
        detail: 'Mis en avant sur la page d’accueil au 05/11/2026, sans montant de remise chiffré ni code. Pas d’opération Black Friday spécifique repérée à cette date.',
        verified: '05/11/2026',
        status: 'active',
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
      'Aucun code officiel pour les kits plug-and-play au 05/11/2026, et pas d’opération Black Friday repérée à cette date (l’an dernier, Beem proposait un « Bright Friday » à -15 % sur toute la gamme). Les promotions en cours visent les batteries et les projets toiture. Rappel : Beem Energy est en procédure de sauvegarde depuis novembre 2025 (SAV maintenu).',
    offers: [
      {
        label: 'Prime Beem : jusqu’à 1 000 € de remise',
        detail: 'Affichée sur le site pour les projets toiture (Beem Roof) et batterie, avec la borne de recharge offerte pour un projet toiture + batterie. Ne concerne pas les kits balcon seuls. Le panier accepte un code promo, mais Beem n’en publie aucun pour les kits.',
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
    intro: 'Pas de code public officiel. EcoFlow fonctionne par grosses opérations saisonnières affichées sur le site, avec des points EcoCredits pour les membres. Au 05/11/2026, aucune opération Black Friday 2026 n’est encore confirmée pour la France : nous mettrons cette page à jour dès l’annonce.',
    offers: [
      {
        label: 'Opération d’automne : jusqu’à -40 % (terminée)',
        detail: 'Du 10 au 18 octobre 2026, avec des offres flash jusqu’à -57 % sur la gamme STREAM. Le PowerStream n’est plus vendu sur la boutique officielle : EcoFlow y propose désormais la gamme STREAM.',
        status: 'active',
        endsAt: '2026-10-18',
        source: 'fr.ecoflow.com',
        sourceUrl: 'https://fr.ecoflow.com/',
      },
      {
        label: 'Parrainage EcoFlow : -10 % pour le filleul',
        detail: 'Un membre de la communauté EcoFlow peut inviter un ami, qui reçoit 10 % de réduction (le parrain touche 5 % de commission).',
        status: 'active',
        source: 'fr.ecoflow.com',
        sourceUrl: 'https://fr.ecoflow.com/',
      },
    ],
    cta: { url: ecoflowUrl('https://fr.ecoflow.com/products/stream-ultra-pro'), product: 'EcoFlow STREAM Ultra', merchant: 'EcoFlow' },
  },
  {
    id: 'zendure',
    brand: 'Zendure',
    intro: 'Zendure diffuse un code officiel de -8 % pour le Black Friday et les fêtes, cumulable avec les baisses de prix affichées sur le site. Les autres remises sont affichées directement, avec une garantie de prix de 30 jours.',
    offers: [
      {
        label: `Code ${ZENDURE_CODE} : -8 % en plus des remises du site`,
        detail: `Valable du 2 novembre 2026 au 4 janvier 2027 sur zendure.fr. Produits concernés : SolarFlow MIX 3000 et 4000, SolarFlow 2400 AC, SolarFlow 1600 AC+, batteries AB2000 et AB3000, et tous les accessoires. Exclus : SolarFlow 2400 AC+ et SolarFlow 2400 Pro. Code transmis par Zendure à ses partenaires : vérifiez que la remise apparaît bien au panier avant de payer.`,
        status: 'active',
        endsAt: ZENDURE_CODE_END,
        verified: '03/11/2026',
        source: 'Zendure (programme partenaires)',
        sourceUrl: 'https://zendure.fr/pages/black-friday',
      },
      {
        label: 'Baisses de prix affichées',
        detail: 'Remises affichées directement sur les fiches produits, par exemple -560 € sur le SolarFlow 2400 Pro au 17/10/2026. Livraison offerte. Date de fin non indiquée.',
        status: 'active',
        source: 'zendure.fr',
        sourceUrl: 'https://zendure.fr/',
      },
    ],
    cta: { url: zendureUrl('https://zendure.fr/pages/black-friday'), product: 'Zendure SolarFlow', merchant: 'Zendure' },
  },
];

export default function CodesPromoPage() {
  const sunologyBlackFriday = !isOver(SUNOLOGY_BLACKFRIDAY_END);
  return (
    <section className="section-padding">
      <SchemaFAQ questions={faqData(sunologyBlackFriday)} />
      <div className="container-brand max-w-3xl">
        <Breadcrumbs items={[{ label: 'Codes promo' }]} />

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Code promo Sunology, Beem, Sunethic, EcoFlow, Zendure &middot; Offres v&eacute;rifi&eacute;es le {VERIFIED}
        </h1>
        <p className="text-charcoal-light text-lg mb-4">
          Uniquement des offres v&eacute;rifi&eacute;es sur les sites officiels, avec leur date de v&eacute;rification. Quand une marque n&apos;a pas de code, on le dit, et on indique la meilleure fa&ccedil;on l&eacute;gale de payer moins cher.
        </p>
        <div className="card bg-cream/50 text-sm text-charcoal-light leading-relaxed mb-8">
          <strong className="text-charcoal">En bref ({VERIFIED}) :</strong> {sunologyBlackFriday ? <>Sunology lance sa <strong>Black Sun Weeks</strong> : code <strong>{SUNOLOGY_BLACKFRIDAY_CODE}</strong>, jusqu&apos;&agrave; -640 &euro;, du 4 novembre au 4 d&eacute;cembre, en plus du parrainage S-Club &agrave; -7 %.</> : <>Reste le parrainage S-Club Sunology &agrave; -7 % (pas d&apos;op&eacute;ration en cours).</>} {!isOver(ZENDURE_CODE_END) && <>Zendure donne <strong>-8 % de plus avec le code {ZENDURE_CODE}</strong>, jusqu&apos;au 4 janvier 2027 (hors SolarFlow 2400 AC+ et 2400 Pro). </>}Beem, Sunethic et EcoFlow n&apos;ont pas encore annonc&eacute; de code Black Friday officiel : leurs remises restent affich&eacute;es directement sur leur site.
        </div>

        <nav className="flex flex-wrap gap-2 text-sm mb-10" aria-label="Sommaire">
          <a href="#sunology" className="badge-green">Sunology</a>
          <a href="#sunethic" className="badge-amber">Sunethic</a>
          <a href="#beem" className="badge-amber">Beem</a>
          <a href="#ecoflow" className="badge-amber">EcoFlow</a>
          <a href="#zendure" className="badge-green">Zendure</a>
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
              <h3 className="font-bold text-charcoal mb-2">Et les codes &laquo; SUN_&hellip; &raquo; ou &laquo; SUN26 &raquo; trouv&eacute;s en ligne ?</h3>
              <p>
                Les codes au format <span className="font-mono">SUN_PRENOM</span> sont des codes de <strong>parrainage personnels</strong> de clients Sunology : ils donnent la remise filleul officielle (7%) et r&eacute;mun&egrave;rent la personne qui les publie. Les sites de coupons qui annoncent -10% ou -15% (SUN26, etc.) ne sont confirm&eacute;s nulle part par Sunology. Nous ne les listons pas. R&egrave;gle simple : si la remise n&apos;appara&icirc;t pas au panier, elle n&apos;existe pas.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-3">Code promo Sunology PLAY (ex-PLAY 2)</h3>
            <p className="text-charcoal-light leading-relaxed mb-4">
              {sunologyBlackFriday ? (
                <>Le PLAY (515 W, successeur du PLAY 2 de 450/460 Wc) co&ucirc;te 599 &euro;, soit <strong>499 &euro;</strong> avec le code {SUNOLOGY_BLACKFRIDAY_CODE} (Black Sun Weeks) jusqu&apos;au 4 d&eacute;cembre 2026.</>
              ) : (
                <>Le PLAY (515 W, successeur du PLAY 2 de 450/460 Wc) est affich&eacute; &agrave; <strong>599 &euro;</strong>.</>
              )}{' '}Hors promotion, le parrainage (-7%) le ram&egrave;ne &agrave; environ 557 &euro;, mais ne se cumule g&eacute;n&eacute;ralement pas avec le code Black Friday. Notre analyse compl&egrave;te :{' '}
              <Link href="/avis/sunology-play-2" className="text-green font-semibold hover:underline">avis Sunology PLAY (ex-PLAY 2)</Link>.
            </p>
            <AffiliateCTA productName="Sunology PLAY" merchantName="Sunology" affiliateUrl={SUNOLOGY_PLAY_URL} label={sunologyBlackFriday ? 'Voir le PLAY 500 W avec le code BLACKSUN sur Sunology' : 'Voir le prix du PLAY 500 W sur Sunology'} variant="secondary" position="codes_promo_sunology" price={sunologyBlackFriday ? '499 €' : '599 €'} />

            <h3 className="text-xl font-bold mt-8 mb-3">Sunology et le Black Friday</h3>
            <p className="text-charcoal-light leading-relaxed">
              Pour 2026, Sunology lance son op&eacute;ration &laquo; Black Sun Weeks &raquo; du 4 novembre au 4 d&eacute;cembre : le code <span className="font-mono">{SUNOLOGY_BLACKFRIDAY_CODE}</span> fait baisser le prix, avec une remise qui augmente selon la quantit&eacute; achet&eacute;e (jusqu&apos;&agrave; -640 &euro; en multi-panneaux), et -14 % sur le service d&apos;installation HOME. En 2025, la marque annon&ccedil;ait d&eacute;j&agrave; jusqu&apos;&agrave; 640 &euro; de r&eacute;duction jusqu&apos;au 3 d&eacute;cembre (
              <a href="https://selectra.info/energie/actualites/renovation-energetique/energie-moins-chere-sunology-propose-reduction-de-640-euros-pour-black-friday" target="_blank" rel="noopener" className="text-green hover:underline">source Selectra</a>
              ). V&eacute;rifiez toujours le montant au panier : les pages officielles ne s&apos;accordent pas toutes sur la date de fin exacte (3 ou 4 d&eacute;cembre).
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
              {faqData(sunologyBlackFriday).map((f, i) => (
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
            Offres v&eacute;rifi&eacute;es le 5 novembre 2026 &middot; <Link href="/a-propos" className="text-green hover:underline">&Agrave; propos</Link> &middot; <Link href="/methodologie" className="text-green hover:underline">M&eacute;thodologie</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
