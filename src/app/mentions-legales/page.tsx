import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site MonBalconSolaire, édité par Beeleven SASU.',
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight mb-8">Mentions légales</h1>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Éditeur du site</h2>
            <p>Le site MonBalconSolaire (monbalconsolaire.fr) est édité par :</p>
            <div className="card mt-3">
              <p><strong>Raison sociale :</strong> Beeleven SASU</p>
              <p><strong>Forme juridique :</strong> Société par actions simplifiée unipersonnelle</p>
              <p><strong>Siège social :</strong> Paris, France</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>Numéro TVA :</strong> [À compléter]</p>
              <p><strong>Directeur de la publication :</strong> Guillaume Bourdon</p>
              <p><strong>Contact :</strong> contact@monbalconsolaire.fr</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <div className="card mt-3">
              <p><strong>Vercel Inc.</strong></p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p>Site web : vercel.com</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, mise en page) est la propriété exclusive de Beeleven SASU, sauf mention contraire explicite. Toute reproduction, représentation, modification ou exploitation de tout ou partie du site sans autorisation écrite préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Liens d&apos;affiliation</h2>
            <p>
              MonBalconSolaire participe à des programmes d'affiliation, notamment le programme partenaire Sunology (partner.sunology.eu) et le programme Amazon Partenaires. Cela signifie que nous pouvons recevoir une commission si vous effectuez un achat après avoir cliqué sur un lien affilié présent sur notre site.
            </p>
            <p className="mt-2">
              Cette commission ne modifie en aucun cas le prix que vous payez. Notre contenu éditorial est indépendant de ces partenariats commerciaux. Les produits recommandés le sont sur la base de critères objectifs (rapport qualité-prix, performances, avis utilisateurs).
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Données personnelles</h2>
            <p>
              Pour en savoir plus sur la collecte et le traitement de vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-green hover:underline">politique de confidentialité</a>.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Limitation de responsabilité</h2>
            <p>
              Les informations fournies sur ce site le sont à titre indicatif. MonBalconSolaire s'efforce de fournir des données exactes et à jour, mais ne peut garantir l'exhaustivité ou l'exactitude de toutes les informations publiées. Les estimations du calculateur de rentabilité sont basées sur des données moyennes et peuvent varier selon les conditions réelles d'installation (ombrage, inclinaison, météo locale).
            </p>
            <p className="mt-2">
              MonBalconSolaire ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation des informations ou outils proposés sur le site. L'utilisateur est seul responsable de ses décisions d'achat.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Droit applicable</h2>
            <p>
              Le présent site est soumis au droit français. En cas de litige, les tribunaux de Paris seront seuls compétents.
            </p>
          </div>

          <p className="text-sm text-stone pt-4">Dernière mise à jour : mars 2026</p>
        </div>
      </div>
    </section>
  );
}
