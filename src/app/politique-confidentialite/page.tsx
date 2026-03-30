import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site MonBalconSolaire. Informations sur la collecte et le traitement des données personnelles.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight mb-8">Politique de confidentialité</h1>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Introduction</h2>
            <p>
              La présente politique de confidentialité décrit comment Beélevén SASU (« nous », « notre ») collecte, utilise et protège les informations personnelles des visiteurs du site MonBalconSolaire (monbalconsolaire.fr). Nous nous engageons à respecter votre vie privée conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Responsable du traitement</h2>
            <div className="card">
              <p><strong>Beélevén SASU</strong></p>
              <p>Représenté par Guillaume Bourdon</p>
              <p>Contact : contact@monbalconsolaire.fr</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <div className="card mt-3 space-y-3">
              <div>
                <p className="font-semibold text-charcoal">Données du calculateur</p>
                <p className="text-sm">Région, orientation du balcon, consommation mensuelle. Ces données sont traitées localement dans votre navigateur et ne sont pas envoyées à nos serveurs. Aucune donnée personnelle n&apos;est collectée par le calculateur.</p>
              </div>
              <div className="border-t border-border-light pt-3">
                <p className="font-semibold text-charcoal">Données d&apos;inscription newsletter (optionnel)</p>
                <p className="text-sm">Adresse email uniquement, si vous choisissez de vous inscrire. Base légale : consentement explicite.</p>
              </div>
              <div className="border-t border-border-light pt-3">
                <p className="font-semibold text-charcoal">Données de navigation (analytics)</p>
                <p className="text-sm">Pages visitées, durée de visite, source du trafic. Collectées via Vercel Analytics de manière anonymisée, sans cookies de pistage. Aucune donnée personnelle identifiable n&apos;est collectée.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Finalités du traitement</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="list-none space-y-2 mt-3 pl-0">
              <li className="flex items-start gap-2">
                <span className="text-green font-bold mt-0.5">→</span>
                <span>Améliorer le contenu et l&apos;expérience utilisateur du site (analytics anonymisés)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green font-bold mt-0.5">→</span>
                <span>Envoyer la newsletter si vous y êtes inscrit (avec votre consentement)</span>
              </li>
            </ul>
            <p className="mt-3">Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers à des fins commerciales.</p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Cookies</h2>
            <p>
              MonBalconSolaire utilise Vercel Analytics, un outil de mesure d'audience respectueux de la vie privée qui ne dépose aucun cookie de pistage. Aucun cookie publicitaire n'est utilisé sur ce site.
            </p>
            <p className="mt-2">
              Les liens d'affiliation (Sunology, Amazon) peuvent déposer des cookies de suivi lorsque vous cliquez dessus. Ces cookies sont gérés par les sites tiers concernés et sont soumis à leurs propres politiques de confidentialité.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-none space-y-2 mt-3 pl-0">
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">→</span><span><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">→</span><span><strong>Droit de rectification :</strong> corriger des données inexactes</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">→</span><span><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">→</span><span><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">→</span><span><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">→</span><span><strong>Droit de retrait du consentement :</strong> vous désinscrire de la newsletter à tout moment</span></li>
            </ul>
            <p className="mt-3">Pour exercer ces droits, contactez-nous à : contact@monbalconsolaire.fr</p>
            <p className="mt-2">Vous pouvez également adresser une réclamation à la CNIL : cnil.fr</p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Conservation des données</h2>
            <p>Les adresses email des abonnés à la newsletter sont conservées tant que l&apos;abonnement est actif. Elles sont supprimées dans les 30 jours suivant la désinscription. Les données analytics anonymisées sont conservées 26 mois maximum.</p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Sécurité</h2>
            <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute modification, divulgation ou destruction. Le site utilise le protocole HTTPS pour sécuriser toutes les communications.</p>
          </div>

          <p className="text-sm text-stone pt-4">Dernière mise à jour : mars 2026</p>
        </div>
      </div>
    </section>
  );
}
