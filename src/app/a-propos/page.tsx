import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'MonBalconSolaire est un guide indépendant des kits solaires pour balcon en France. Découvrez notre méthode, nos valeurs et notre engagement de transparence.',
};

export default function AProposPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          À propos de MonBalconSolaire
        </h1>

        <div className="prose-brand space-y-6 text-charcoal-light leading-relaxed">
          <p className="text-lg">
            MonBalconSolaire est né d'un constat simple : quand on cherche un kit solaire pour son balcon, on tombe soit sur des revendeurs qui poussent leurs produits, soit sur des comparateurs généralistes qui ne comprennent pas les contraintes spécifiques d'un balcon en appartement.
          </p>

          <div className="card-lg bg-green-pale/30 border-green/10">
            <h2 className="font-bold text-xl text-charcoal mb-3">Notre mission</h2>
            <p>
              Aider les locataires et propriétaires d'appartement à prendre la meilleure décision solaire, avec des données fiables et un outil interactif unique : notre calculateur de rentabilité.
            </p>
          </div>

          <h2 className="font-bold text-2xl text-charcoal pt-4">Ce que nous sommes</h2>
          <p>
            Un guide indépendant. Nous ne vendons aucun produit. Nous ne sommes ni fabricant, ni revendeur, ni installateur. Notre rôle est de vous informer et de vous orienter avec des données sourcées et des comparatifs neutres.
          </p>

          <h2 className="font-bold text-2xl text-charcoal pt-4">Comment nous gagnons de l&apos;argent</h2>
          <p>
            En toute transparence : certains liens sur ce site sont des liens d'affiliation. Si vous achetez un kit via l'un de ces liens, nous recevons une petite commission de la part du fabricant. Votre prix reste exactement le même. C'est ce qui nous permet de maintenir ce site gratuit et indépendant.
          </p>
          <p>
            Notre contenu éditorial n'est jamais influencé par ces partenariats. Si un kit n'est pas adapté à votre situation, nous vous le dirons — même si c'est le kit qui nous rapporte le plus de commission.
          </p>

          <h2 className="font-bold text-2xl text-charcoal pt-4">Nos sources de données</h2>
          <p>
            Toutes les données utilisées dans notre calculateur et nos articles proviennent de sources publiques et vérifiables :
          </p>
          <ul className="list-none space-y-2 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-green font-bold mt-0.5">→</span>
              <span><strong>PVGIS</strong> (Commission européenne) pour les données d&apos;ensoleillement par ville</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green font-bold mt-0.5">→</span>
              <span><strong>Tarifs réglementés EDF</strong> pour le prix du kWh (mis à jour à chaque révision)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green font-bold mt-0.5">→</span>
              <span><strong>Sites fabricants</strong> (Sunology, Beem, Sunethic) pour les specs techniques et prix</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green font-bold mt-0.5">→</span>
              <span><strong>Enedis</strong> et <strong>CRE</strong> pour les données réglementaires</span>
            </li>
          </ul>

          <h2 className="font-bold text-2xl text-charcoal pt-4">Qui sommes-nous</h2>
          <p>
            MonBalconSolaire est édité par Beeleven SASU, société de services numériques basée à Paris. Le site est développé et maintenu par Guillaume Bourdon.
          </p>

          <div className="card-lg text-center bg-gradient-to-br from-amber-pale/50 to-green-pale/30 border-amber/10 mt-8">
            <p className="text-charcoal font-semibold mb-4">Une question ? Un retour ?</p>
            <p className="text-stone text-sm mb-4">Nous lisons tous les messages et répondons dans les 48h.</p>
            <a href="mailto:contact@monbalconsolaire.fr" className="btn-primary inline-flex">Nous contacter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
