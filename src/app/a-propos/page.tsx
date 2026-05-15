import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '\u00c0 propos de MonBalconSolaire \u2014 Guillaume Bourdon, \u00e9diteur ind\u00e9pendant',
  description: '\u00c9dit\u00e9 par Guillaume Bourdon (Beeleven SASU). Guide ind\u00e9pendant des kits solaires balcon en France. Notre m\u00e9thode, nos sources, notre transparence.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/a-propos',
  },
};

export default function AProposPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          &Agrave; propos de MonBalconSolaire
        </h1>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <p className="text-lg">
            MonBalconSolaire est n&eacute; d&apos;un constat simple : quand on cherche un kit solaire pour son balcon, on tombe soit sur des revendeurs qui poussent leurs produits, soit sur des comparateurs g&eacute;n&eacute;ralistes qui ne comprennent pas les contraintes sp&eacute;cifiques d&apos;un balcon en appartement.
          </p>

          <div className="card-lg bg-green-pale/30 border-green/10">
            <h2 className="font-bold text-xl text-charcoal mb-3">Notre mission</h2>
            <p>
              Aider les locataires et propri&eacute;taires d&apos;appartement &agrave; prendre la meilleure d&eacute;cision solaire, avec des donn&eacute;es fiables, une <Link href="/methodologie" className="text-green hover:underline font-semibold">m&eacute;thodologie publique</Link> et un outil interactif unique : notre <Link href="/calculateur" className="text-green hover:underline font-semibold">calculateur de rentabilit&eacute;</Link>.
            </p>
          </div>

          <section>
            <h2 className="font-bold text-2xl text-charcoal mb-3">Qui &eacute;dite ce site</h2>
            <p className="mb-4">
              MonBalconSolaire est &eacute;dit&eacute; par <strong>Guillaume Bourdon</strong>, fondateur de <strong>Beeleven SASU</strong> (Paris).
            </p>
            <p className="mb-4">
              Avant de cr&eacute;er ce site, j&apos;ai pass&eacute; 9 ans dans le marketing &agrave; la performance chez CCM Performance, o&ugrave; j&apos;ai g&eacute;r&eacute; des campagnes de g&eacute;n&eacute;ration de leads pour des annonceurs B2B et B2C. Cette exp&eacute;rience m&apos;a appris une chose : la plupart des comparateurs en ligne sont biais&eacute;s par les commissions qu&apos;ils touchent, et personne ne le dit clairement.
            </p>
            <p>
              J&apos;ai cr&eacute;&eacute; MonBalconSolaire pour faire l&apos;inverse : un guide qui assume ses hypoth&egrave;ses de calcul, qui publie sa m&eacute;thodologie, et qui dit la v&eacute;rit&eacute; sur la rentabilit&eacute; m&ecirc;me quand cette v&eacute;rit&eacute; est nuanc&eacute;e.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl text-charcoal mb-3">Comment nous choisissons les kits analys&eacute;s</h2>
            <p className="mb-4">Nous ne couvrons pas tous les kits du march&eacute;. Nous s&eacute;lectionnons ceux qui r&eacute;pondent &agrave; au moins 3 des 5 crit&egrave;res suivants :</p>
            <ul className="list-none space-y-2 pl-0">
              {[
                'Disponibilit\u00e9 r\u00e9elle en France (stock, SAV, garantie applicable)',
                'Plus de 100 avis utilisateurs publics v\u00e9rifiables (Trustpilot, Amazon, Google)',
                'Certification CE compl\u00e8te (panneau + onduleur + structure)',
                'Garantie produit \u2265 10 ans, garantie performance panneaux \u2265 25 ans',
                'Transparence du constructeur sur les specs techniques',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green font-bold mt-0.5">&rarr;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              Un kit qui nous rapporte une commission plus &eacute;lev&eacute;e n&apos;est jamais class&eacute; &laquo; Meilleur choix &raquo; pour cette raison. Le classement est bas&eacute; sur l&apos;ad&eacute;quation au profil utilisateur, pas sur la commission.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-2xl text-charcoal mb-3">Comment nous gagnons de l&apos;argent</h2>
            <p className="mb-4">
              En toute transparence : certains liens sur ce site sont des liens d&apos;affiliation. Si vous achetez un kit via l&apos;un de ces liens, nous recevons une petite commission de la part du fabricant. Votre prix reste exactement le m&ecirc;me.
            </p>
            <p className="mb-4">
              Notre contenu &eacute;ditorial n&apos;est jamais influenc&eacute; par ces partenariats. Si un kit n&apos;est pas adapt&eacute; &agrave; votre situation, nous vous le dirons &mdash; m&ecirc;me si c&apos;est le kit qui nous rapporte le plus de commission.
            </p>
            <div className="card bg-cream/50">
              <p className="text-sm font-semibold text-charcoal mb-2">Combien nous touchons exactement ?</p>
              <p className="text-sm">
                Les commissions varient entre 3% et 8% du prix de vente selon les marques, soit typiquement 20 &agrave; 50 &euro; par kit vendu. C&apos;est notre seule source de revenu pour ce site. Aucun fabricant ne nous paie pour figurer dans les comparatifs ou &ecirc;tre mieux not&eacute;.
              </p>
            </div>
            <div className="card bg-cream/50 mt-3">
              <p className="text-sm font-semibold text-charcoal mb-2">Un kit peut-il &ecirc;tre bien not&eacute; sans partenariat ?</p>
              <p className="text-sm">
                Oui. &Agrave; l&apos;inverse, certains kits avec lesquels nous avons un partenariat sont not&eacute;s moyennement (par exemple le Sunology PLAY MAX, dont le ROI de 11,7 ans ne justifie pas une recommandation tous publics) parce que leur rentabilit&eacute; ne le justifie pas.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-2xl text-charcoal mb-3">Nos sources de donn&eacute;es</h2>
            <p className="mb-4">Toutes les donn&eacute;es utilis&eacute;es dans notre calculateur et nos articles proviennent de sources publiques et v&eacute;rifiables :</p>
            <ul className="list-none space-y-2 pl-0">
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>PVGIS</strong> (Commission europ&eacute;enne) pour les donn&eacute;es d&apos;ensoleillement par d&eacute;partement</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>CRE</strong> (Commission de R&eacute;gulation de l&apos;&Eacute;nergie) pour les tarifs r&eacute;glement&eacute;s et l&apos;historique du prix du kWh</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>Sites fabricants</strong> (Sunology, Beem, Sunethic, Zendure, EcoFlow, DualSun) pour les specs et prix</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>Enedis</strong> pour les donn&eacute;es r&eacute;glementaires et la d&eacute;claration CACSI</span></li>
            </ul>
            <p className="mt-4">
              <Link href="/methodologie" className="text-green hover:underline font-semibold">Voir notre m&eacute;thodologie compl&egrave;te &rarr;</Link>
            </p>
          </section>

          <div className="card-lg text-center bg-gradient-to-br from-amber-pale/50 to-green-pale/30 border-amber/10 mt-4">
            <p className="text-charcoal font-semibold mb-4">Une question ? Un retour ?</p>
            <p className="text-stone text-sm mb-4">Nous lisons tous les messages et r&eacute;pondons dans les 48h.</p>
            <a href="mailto:contact@monbalconsolaire.fr" className="btn-primary inline-flex">Nous contacter</a>
          </div>

          <div className="border-t border-border-light pt-6 mt-4 text-sm text-stone">
            <p>&mdash; Guillaume Bourdon</p>
            <p>&Eacute;diteur de MonBalconSolaire</p>
            <p>Beeleven SASU &middot; contact@monbalconsolaire.fr</p>
          </div>
        </div>
      </div>
    </section>
  );
}
