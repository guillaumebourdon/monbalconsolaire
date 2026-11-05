import type { Metadata } from 'next';
import { withCanonicalOg } from '@/lib/metadata';

export const metadata: Metadata = withCanonicalOg({
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de MonBalconSolaire (Beeleven SASU) : données collectées, sous-traitants, durées de conservation et vos droits.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/politique-confidentialite',
  },
});

export default function PolitiqueConfidentialitePage() {
  const subprocessors: [string, string, string, string][] = [
    ['Vercel Inc.', 'H\u00e9bergement du site, ex\u00e9cution des formulaires, mesure d\u2019audience sans cookie (Web Analytics) et mesure de performance (Speed Insights)', 'Donn\u00e9es techniques de connexion (adresse IP trait\u00e9e pour servir les pages), pages vues agr\u00e9g\u00e9es', '\u00c9tats-Unis'],
    ['Upstash, Inc.', 'Stockage de votre adresse email et du profil envoy\u00e9 avec le rapport', 'Email, source de l\u2019inscription, profil du calculateur, date, statut de d\u00e9sinscription', 'Donn\u00e9es h\u00e9berg\u00e9es en Irlande (AWS eu-west-1) ; soci\u00e9t\u00e9 am\u00e9ricaine'],
    ['Brevo (Sendinblue SAS)', 'Envoi des emails (rapport, guide PDF, alertes bons plans)', 'Email, contenu du message', 'France / Union europ\u00e9enne'],
    ['Google (Google Analytics 4)', 'Mesure d\u2019audience avec cookies, uniquement si vous acceptez', 'Identifiant de cookie, pages vues, appareil, provenance', '\u00c9tats-Unis possible'],
  ];

  return (
    <section className="section-padding">
      <div className="container-brand max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight mb-8">Politique de confidentialit&eacute;</h1>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Introduction</h2>
            <p>
              Cette page d&eacute;crit les donn&eacute;es personnelles que Beeleven SASU (&laquo;&nbsp;nous&nbsp;&raquo;), &eacute;diteur de MonBalconSolaire (monbalconsolaire.fr), collecte, pourquoi, o&ugrave; elles sont stock&eacute;es et combien de temps. Elle s&apos;applique dans le cadre du R&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es (RGPD) et de la loi Informatique et Libert&eacute;s.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Responsable du traitement</h2>
            <div className="card">
              <p><strong>Beeleven SASU</strong></p>
              <p>7 rue Curial, 75019 Paris &mdash; RCS Paris 102 307 345</p>
              <p>Repr&eacute;sent&eacute;e par Guillaume Bourdon</p>
              <p>Contact : contact@monbalconsolaire.fr</p>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Donn&eacute;es collect&eacute;es</h2>
            <div className="card mt-3 space-y-3">
              <div>
                <h3 className="font-semibold text-charcoal">Calculateur</h3>
                <p className="text-sm">Vos r&eacute;ponses (d&eacute;partement, orientation, largeur du balcon, pr&eacute;sence en journ&eacute;e, budget) sont trait&eacute;es dans votre navigateur&nbsp;: le calcul ne les envoie pas &agrave; nos serveurs. Elles apparaissent dans l&apos;adresse de la page de r&eacute;sultats pour que vous puissiez la partager.</p>
                <p className="text-sm mt-2"><strong>Exception&nbsp;: l&apos;envoi du rapport par email.</strong> Si vous demandez le rapport, nous recevons votre adresse email, votre profil (d&eacute;partement, orientation, largeur, pr&eacute;sence, budget) et les kits recommand&eacute;s. L&apos;email et le profil sont enregistr&eacute;s dans notre base (Upstash) et le rapport vous est envoy&eacute; par Brevo. Base l&eacute;gale&nbsp;: votre demande (ex&eacute;cution de mesures prises &agrave; votre demande) et votre consentement pour les emails suivants.</p>
              </div>
              <div className="border-t border-border-light pt-3">
                <h3 className="font-semibold text-charcoal">Guide PDF et alertes bons plans</h3>
                <p className="text-sm">Adresse email uniquement, si vous la saisissez. Elle est enregistr&eacute;e dans la m&ecirc;me base (Upstash) avec la source de l&apos;inscription, et les emails sont envoy&eacute;s par Brevo. Base l&eacute;gale&nbsp;: consentement.</p>
              </div>
              <div className="border-t border-border-light pt-3">
                <h3 className="font-semibold text-charcoal">Mesure d&apos;audience sans cookie (Vercel)</h3>
                <p className="text-sm">Vercel Web Analytics compte les pages vues sans cookie&nbsp;: le visiteur est reconnu par une empreinte calcul&eacute;e &agrave; partir de la requ&ecirc;te, effac&eacute;e apr&egrave;s 24&nbsp;heures, et seules des statistiques agr&eacute;g&eacute;es sont conserv&eacute;es (page, provenance, pays, type d&apos;appareil, navigateur). Vercel Speed Insights mesure la vitesse d&apos;affichage des pages. Base l&eacute;gale&nbsp;: int&eacute;r&ecirc;t l&eacute;gitime (statistiques de fr&eacute;quentation et bon fonctionnement du site).</p>
              </div>
              <div className="border-t border-border-light pt-3">
                <h3 className="font-semibold text-charcoal">Google Analytics 4 (avec cookies, sur consentement)</h3>
                <p className="text-sm">Si vous cliquez sur &laquo;&nbsp;Accepter&nbsp;&raquo; dans le bandeau, Google Analytics d&eacute;pose des cookies de mesure d&apos;audience et collecte les pages vues, la provenance, l&apos;appareil et les clics sur les liens marchands. Ces donn&eacute;es ne sont pas anonymes&nbsp;: elles sont rattach&eacute;es &agrave; un identifiant de cookie. Si vous refusez, Google Analytics n&apos;est pas charg&eacute;. Base l&eacute;gale&nbsp;: consentement.</p>
              </div>
              <div className="border-t border-border-light pt-3">
                <h3 className="font-semibold text-charcoal">Journaux techniques</h3>
                <p className="text-sm">Pour limiter les abus, les formulaires email comptent temporairement le nombre de demandes par adresse IP, en m&eacute;moire, pendant 10&nbsp;minutes. Ces donn&eacute;es ne sont pas enregistr&eacute;es dans notre base.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Finalit&eacute;s</h2>
            <ul className="list-none space-y-2 mt-3 pl-0">
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span>Vous envoyer ce que vous avez demand&eacute; (rapport du calculateur, guide PDF, alertes bons plans).</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span>Mesurer la fr&eacute;quentation du site pour am&eacute;liorer les contenus.</span></li>
            </ul>
            <p className="mt-3">Nous ne vendons ni ne louons vos donn&eacute;es personnelles.</p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Sous-traitants et destinataires</h2>
            <div className="overflow-x-auto -mx-5 md:mx-0">
              <table className="w-full text-sm border-collapse">
                <caption className="sr-only">Prestataires qui traitent des donn&eacute;es pour le compte de MonBalconSolaire</caption>
                <thead>
                  <tr className="border-b-2 border-green/20 bg-cream/50">
                    <th scope="col" className="p-3 text-left font-bold">Prestataire</th>
                    <th scope="col" className="p-3 text-left font-bold">R&ocirc;le</th>
                    <th scope="col" className="p-3 text-left font-bold">Donn&eacute;es</th>
                    <th scope="col" className="p-3 text-left font-bold">Pays</th>
                  </tr>
                </thead>
                <tbody>
                  {subprocessors.map(([name, role, data, country]) => (
                    <tr key={name} className="border-b border-border-light">
                      <td className="p-3 font-semibold text-charcoal">{name}</td>
                      <td className="p-3 text-xs">{role}</td>
                      <td className="p-3 text-xs">{data}</td>
                      <td className="p-3 text-xs">{country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Transferts hors de l&apos;Union europ&eacute;enne</h2>
            <p>
              Vercel, Upstash et Google sont des soci&eacute;t&eacute;s am&eacute;ricaines&nbsp;: des donn&eacute;es peuvent donc &ecirc;tre trait&eacute;es aux &Eacute;tats-Unis. Ces transferts sont encadr&eacute;s par les clauses contractuelles types de la Commission europ&eacute;enne et/ou par le Data Privacy Framework UE&ndash;&Eacute;tats-Unis lorsque le prestataire y adh&egrave;re. Vous pouvez nous demander plus d&apos;informations sur ces garanties &agrave; contact@monbalconsolaire.fr.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Cookies et stockage local</h2>
            <p>
              Sans votre accord, aucun cookie de mesure d&apos;audience n&apos;est d&eacute;pos&eacute;. Votre choix (accepter ou refuser) est m&eacute;moris&eacute; dans le stockage local de votre navigateur. Pour le modifier, effacez les donn&eacute;es du site dans votre navigateur&nbsp;: le bandeau r&eacute;appara&icirc;t &agrave; la visite suivante. Aucun cookie publicitaire n&apos;est utilis&eacute; par le site.
            </p>
            <p className="mt-2">
              Quand vous cliquez sur un lien marchand (Amazon, ou un lien Awin vers Zendure, EcoFlow ou ALLPOWERS par exemple), le site du marchand ou la plateforme d&apos;affiliation peut d&eacute;poser ses propres cookies de suivi. Ils rel&egrave;vent de leurs politiques de confidentialit&eacute;.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Dur&eacute;es de conservation</h2>
            <ul className="list-none space-y-2 mt-3 pl-0">
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>Email et profil du calculateur&nbsp;:</strong> 3&nbsp;ans apr&egrave;s votre derni&egrave;re demande, puis suppression automatique.</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>Apr&egrave;s une d&eacute;sinscription&nbsp;:</strong> votre adresse et votre profil sont effac&eacute;s imm&eacute;diatement. Nous ne gardons qu&apos;une empreinte anonyme de l&apos;adresse (elle ne permet pas de la retrouver) pour ne plus vous &eacute;crire.</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>Google Analytics&nbsp;:</strong> 14&nbsp;mois maximum pour les donn&eacute;es d&eacute;taill&eacute;es (dur&eacute;e maximale propos&eacute;e par Google pour une propri&eacute;t&eacute; standard).</span></li>
              <li className="flex items-start gap-2"><span className="text-green font-bold mt-0.5">&rarr;</span><span><strong>Vercel Web Analytics&nbsp;:</strong> l&apos;empreinte de visite est effac&eacute;e apr&egrave;s 24&nbsp;heures&nbsp;; seules des statistiques agr&eacute;g&eacute;es restent.</span></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">Vos droits</h2>
            <p>Vous disposez des droits d&apos;acc&egrave;s, de rectification, d&apos;effacement, d&apos;opposition, de limitation et de portabilit&eacute;, ainsi que du droit de retirer votre consentement &agrave; tout moment (lien de d&eacute;sinscription pr&eacute;sent dans chaque email).</p>
            <p className="mt-3">Pour les exercer&nbsp;: contact@monbalconsolaire.fr. Vous pouvez aussi adresser une r&eacute;clamation &agrave; la CNIL (cnil.fr).</p>
          </div>

          <div>
            <h2 className="font-bold text-xl text-charcoal mb-3">S&eacute;curit&eacute;</h2>
            <p>Le site est servi en HTTPS. Les acc&egrave;s &agrave; la base de donn&eacute;es et au service d&apos;envoi d&apos;emails sont prot&eacute;g&eacute;s par des cl&eacute;s priv&eacute;es stock&eacute;es chez l&apos;h&eacute;bergeur, jamais dans les pages du site.</p>
          </div>

          <p className="text-sm text-stone pt-4">Derni&egrave;re mise &agrave; jour : 5 novembre 2026</p>
        </div>
      </div>
    </section>
  );
}
