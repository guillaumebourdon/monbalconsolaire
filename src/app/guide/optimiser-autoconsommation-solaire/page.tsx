import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';
import { AffiliateCTA } from '@/components/ui/AffiliateCTA';

export const metadata: Metadata = {
  title: 'Comment optimiser son autoconsommation solaire au quotidien',
  description: 'Guide pratique pour maximiser l\u2019autoconsommation de votre kit solaire de balcon : d\u00e9calage des usages, prise connect\u00e9e, talon, heures creuses. De 40 % \u00e0 85 %.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/guide/optimiser-autoconsommation-solaire',
  },
};

const faqData = [
  {
    question: 'C\u2019est quoi le taux d\u2019autoconsommation ?',
    answer: 'C\u2019est le pourcentage de votre production solaire que vous consommez r\u00e9ellement au lieu de l\u2019injecter gratuitement sur le r\u00e9seau. \u00c0 40 %, vous perdez 60 % de votre production. \u00c0 85 %, vous valorisez presque tout. Plus ce taux est \u00e9lev\u00e9, plus votre kit est rentable.',
  },
  {
    question: 'Quel est le taux d\u2019autoconsommation moyen sans effort ?',
    answer: 'Sans aucune adaptation, un foyer actif en journ\u00e9e autoconsomme environ 40-50 % de sa production. Le reste est inject\u00e9 gratuitement sur le r\u00e9seau. Avec des gestes simples (d\u00e9calage d\u2019appareils), on monte \u00e0 70-85 %. Avec une batterie, 85-95 %.',
  },
  {
    question: 'Faut-il une batterie pour bien autoconsommer ?',
    answer: 'Non, c\u2019est le dernier recours. D\u00e9caler le lave-linge et le lave-vaisselle en journ\u00e9e est gratuit et fait passer de 40 % \u00e0 70 %. La batterie (Zendure SolarFlow 488 \u20ac, Sunology VAULT 580 \u20ac) fait passer de 70 % \u00e0 90 %+ mais co\u00fbte cher. Rentabilisez d\u2019abord les gestes gratuits.',
  },
  {
    question: 'Comment savoir ce que j\u2019autoconsomme ?',
    answer: 'Deux m\u00e9thodes : (1) L\u2019app de votre kit (Sunology STREAM, Beem App) montre la production. (2) Une prise connect\u00e9e Tapo P110 (15 \u20ac) mesure les watts en temps r\u00e9el. Si le Linky montre 0 W d\u2019injection, c\u2019est que vous autoconsommez 100 % \u2014 bonne nouvelle.',
  },
  {
    question: 'Le ballon d\u2019eau chaude peut-il absorber le surplus ?',
    answer: 'Oui, c\u2019est m\u00eame le meilleur \u00ab absorbeur \u00bb de surplus. Un cumulus \u00e9lectrique consomme 1 500-2 000 W pendant 2-3h. Si vous le programmez aux heures de production solaire (11h-14h), il absorbe tout le surplus au lieu de chauffer en heures creuses. Gain potentiel : +15-25 % d\u2019autoconsommation.',
  },
  {
    question: 'Est-ce qu\u2019on peut programmer ses appareils facilement ?',
    answer: 'La plupart des lave-linge et lave-vaisselle r\u00e9cents ont un mode \u00ab d\u00e9part diff\u00e9r\u00e9 \u00bb. Sinon, une prise programmable (5-10 \u20ac) fait le travail. Pour le ballon d\u2019eau chaude, un contacteur horaire sur le tableau \u00e9lectrique (20 \u20ac, intervention simple) permet de choisir les heures de chauffe.',
  },
];

const astuces = [
  {
    num: '1',
    titre: 'D\u00e9caler le lave-linge en journ\u00e9e',
    gain: '+10-15 %',
    cout: 'Gratuit',
    detail: 'Un cycle de lave-linge consomme 500-2 000 W pendant 1-2h. En le lan\u00e7ant entre 11h et 14h (pic de production solaire), vous absorbez ce surplus au lieu de le perdre. Utilisez le mode \u00ab d\u00e9part diff\u00e9r\u00e9 \u00bb si vous n\u2019\u00eates pas l\u00e0.',
  },
  {
    num: '2',
    titre: 'D\u00e9caler le lave-vaisselle',
    gain: '+5-10 %',
    cout: 'Gratuit',
    detail: 'M\u00eame logique. Un cycle consomme 1 200-1 800 W. Lancez-le apr\u00e8s le d\u00e9jeuner (13h) au lieu du soir. Si vous avez les deux (lave-linge + lave-vaisselle), ne les lancez pas en m\u00eame temps \u2014 votre kit 450 W ne peut pas couvrir les deux.',
  },
  {
    num: '3',
    titre: 'Programmer le ballon d\u2019eau chaude en journ\u00e9e',
    gain: '+15-25 %',
    cout: '0-20 \u20ac',
    detail: 'Le cumulus \u00e9lectrique est le plus gros consommateur r\u00e9gulier du foyer (1 500-2 000 W, 2-3h par jour). Par d\u00e9faut il chauffe la nuit (heures creuses). Reprogrammez-le pour chauffer de 11h \u00e0 14h : il absorbe tout le surplus solaire. N\u00e9cessite un contacteur horaire sur le tableau (20 \u20ac, 30 min d\u2019installation).',
  },
  {
    num: '4',
    titre: 'Cuisiner \u00e0 l\u2019\u00e9lectricit\u00e9 le midi',
    gain: '+3-5 %',
    cout: 'Gratuit',
    detail: 'Si vous \u00eates chez vous le midi, cuisinez \u00e0 ce moment-l\u00e0 plut\u00f4t que le soir. Plaques \u00e0 induction, four, bouilloire \u2014 tout ce qui consomme du courant est \u00ab gratuit \u00bb quand le panneau produit. Le soir, le panneau ne produit plus.',
  },
  {
    num: '5',
    titre: 'Installer une prise connect\u00e9e pour mesurer',
    gain: 'Indirect',
    cout: '15 \u20ac',
    detail: 'Une Tapo P110 (15 \u20ac) branch\u00e9e entre le kit et la prise murale vous montre en temps r\u00e9el combien vous produisez. L\u2019app garde l\u2019historique jour/mois/ann\u00e9e. Sans mesure, vous ne savez pas si vos efforts fonctionnent.',
    lien: { href: '/blog/prises-connectees-suivi-solaire', label: 'Voir notre comparatif prises connect\u00e9es' },
  },
  {
    num: '6',
    titre: 'Charger les appareils portables en journ\u00e9e',
    gain: '+2-3 %',
    cout: 'Gratuit',
    detail: 'T\u00e9l\u00e9phone, tablette, ordinateur portable, aspirateur robot, tondeuse \u00e9lectrique \u2014 branchez-les pendant les heures de production au lieu du soir. Chaque petit appareil absorbe du surplus.',
  },
  {
    num: '7',
    titre: 'Conna\u00eetre son talon de consommation',
    gain: 'Indirect',
    cout: 'Gratuit',
    detail: 'Votre talon (frigo + box + veilles = 150-300 W en permanence) est automatiquement couvert par le panneau pendant la journ\u00e9e. Si votre talon est \u00e9lev\u00e9 (> 200 W), votre autoconsommation de base est d\u00e9j\u00e0 bonne sans rien faire.',
    lien: { href: '/blog/talon-consommation-solaire', label: 'Comment mesurer votre talon' },
  },
  {
    num: '8',
    titre: 'Ajouter une batterie (dernier recours)',
    gain: '+20-30 %',
    cout: '488-900 \u20ac',
    detail: 'Si vous avez d\u00e9j\u00e0 optimis\u00e9 les gestes gratuits et que votre taux plafonne \u00e0 70 %, une batterie fait passer \u00e0 85-95 %. Le Zendure SolarFlow (488 \u20ac, 1,92 kWh) est le plus abordable. Mais ne commencez pas par l\u00e0 \u2014 rentabilisez d\u2019abord les gestes gratuits.',
    lien: { href: '/avis/zendure-solarflow', label: 'Voir le Zendure SolarFlow' },
  },
];

export default function OptimiserAutoconsommationPage() {
  return (
    <>
      <SchemaArticle
        title="Comment optimiser son autoconsommation solaire au quotidien"
        description="Guide pratique pour maximiser l\u2019autoconsommation de votre kit solaire."
        url="https://monbalconsolaire.fr/guide/optimiser-autoconsommation-solaire"
        datePublished="2026-05-25"
      />
      <SchemaFAQ questions={faqData} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guide' }, { label: 'Optimiser autoconsommation' }]} />

          <div className="mb-10">
            <div className="badge-green mb-4 inline-block">Guide pratique</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Comment optimiser son autoconsommation solaire au quotidien
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Votre kit solaire produit de l&apos;&eacute;lectricit&eacute;, mais <strong>combien en utilisez-vous vraiment ?</strong> Sans adaptation, un foyer autoconsomme seulement 40-50 % de sa production. Le reste part gratuitement sur le r&eacute;seau. Voici <strong>8 astuces</strong> class&eacute;es par impact pour passer de 40 % &agrave; 85 % &mdash; dont 6 sont enti&egrave;rement gratuites.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>25 mai 2026</span>
              <span>&middot;</span>
              <span>10 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <div className="font-mono font-bold text-amber-dark text-2xl">40-50 %</div>
                <div className="text-xs text-stone mt-1">Sans effort</div>
              </div>
              <div>
                <div className="font-mono font-bold text-green text-2xl">70-85 %</div>
                <div className="text-xs text-stone mt-1">Avec gestes gratuits</div>
              </div>
              <div>
                <div className="font-mono font-bold text-green text-2xl">85-95 %</div>
                <div className="text-xs text-stone mt-1">Avec batterie</div>
              </div>
            </div>
            <p className="text-sm text-charcoal-light text-center">Chaque point d&apos;autoconsommation gagn&eacute; = plus d&apos;&eacute;conomies sur votre facture EDF.</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi l&apos;autoconsommation est la cl&eacute; de la rentabilit&eacute;</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Votre kit solaire ne vous fait &eacute;conomiser de l&apos;argent que sur les kWh que <strong>vous consommez vous-m&ecirc;me</strong>. Chaque kWh inject&eacute; gratuitement sur le r&eacute;seau (pas de contrat d&apos;injection r&eacute;mun&eacute;r&eacute; en plug-and-play) est une perte s&egrave;che.
              </p>
              <div className="card-lg bg-cream/40">
                <h4 className="font-bold text-sm mb-3">Exemple concret (Sunology PLAY 2, Lyon sud)</h4>
                <ul className="text-sm text-charcoal-light space-y-2">
                  <li>&bull; Production : <strong>459 kWh/an</strong></li>
                  <li>&bull; &Agrave; 40 % d&apos;autoconsommation : 184 kWh valoris&eacute;s = <strong>36 &euro;/an</strong></li>
                  <li>&bull; &Agrave; 70 % : 321 kWh = <strong>62 &euro;/an</strong> (+72 %)</li>
                  <li>&bull; &Agrave; 85 % : 390 kWh = <strong>76 &euro;/an</strong> (+111 %)</li>
                </ul>
                <p className="text-xs text-stone mt-3">Le m&ecirc;me kit, la m&ecirc;me production, mais <strong>2x plus d&apos;&eacute;conomies</strong> juste en changeant vos habitudes.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Les 8 astuces (par ordre d&apos;impact)</h2>
              <div className="space-y-6">
                {astuces.map((a) => (
                  <div key={a.num} className="card-lg border-l-4 border-l-green">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{a.num}</div>
                        <h3 className="font-bold text-base">{a.titre}</h3>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-xs font-mono font-semibold text-green bg-green-pale px-2 py-1 rounded-md">{a.gain}</span>
                        <span className="text-xs font-mono text-stone bg-cream px-2 py-1 rounded-md">{a.cout}</span>
                      </div>
                    </div>
                    <div className="pl-11">
                      <p className="text-sm text-charcoal-light leading-relaxed">{a.detail}</p>
                      {a.lien && (
                        <Link href={a.lien.href} className="text-green text-sm font-semibold hover:underline inline-flex items-center gap-1 mt-2">
                          {a.lien.label} &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Le planning type d&apos;une journ&eacute;e optimis&eacute;e</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-green/20 bg-cream/50">
                      <th className="p-3 text-left font-bold">Heure</th>
                      <th className="p-3 text-left font-bold">Production</th>
                      <th className="p-3 text-left font-bold">Quoi lancer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['7h-9h', 'Faible (50-150 W)', 'Talon couvert (frigo, box). Charger t\u00e9l\u00e9phone.'],
                      ['9h-11h', 'Moyenne (200-300 W)', 'Lancer le lave-linge (d\u00e9part diff\u00e9r\u00e9 si absent).'],
                      ['11h-14h', '\u2600\ufe0f Pic (300-400 W)', 'Ballon d\u2019eau chaude + lave-vaisselle + cuisine. Maximum de surplus \u00e0 absorber.'],
                      ['14h-17h', 'Moyenne (200-300 W)', 'Aspirateur robot, recharge appareils portables.'],
                      ['17h-20h', 'Faible (50-150 W)', 'Fin de production. Cuisson du soir = r\u00e9seau EDF.'],
                      ['20h+', 'Z\u00e9ro', 'Batterie si vous en avez. Sinon, r\u00e9seau.'],
                    ].map(([h, prod, quoi], i) => (
                      <tr key={i} className={`border-b border-border-light ${i === 2 ? 'bg-green-pale/20 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                        <td className="p-3 font-mono text-xs">{h}</td>
                        <td className="p-3 text-xs">{prod}</td>
                        <td className="p-3 text-xs">{quoi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone mt-3">
                Kit 450 Wc, orientation sud, journ&eacute;e ensoleill&eacute;e. Par temps couvert, r&eacute;duisez les usages simultan&eacute;s.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Batterie : quand est-ce que &ccedil;a vaut le coup ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card border-l-4 border-l-green">
                  <h4 className="font-bold text-sm mb-2 text-green">Batterie justifi&eacute;e si :</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>{'\u2713'} Vous &ecirc;tes absent toute la journ&eacute;e en semaine</li>
                    <li>{'\u2713'} Votre autoconsommation plafonne &agrave; 50-60 % malgr&eacute; les gestes</li>
                    <li>{'\u2713'} Vous avez un talon de nuit &eacute;lev&eacute; (&gt; 200 W)</li>
                    <li>{'\u2713'} Vous &ecirc;tes en tarif HP/HC (optimisation automatique)</li>
                  </ul>
                </div>
                <div className="card border-l-4 border-l-amber bg-amber-pale/10">
                  <h4 className="font-bold text-sm mb-2 text-amber-dark">Batterie pas n&eacute;cessaire si :</h4>
                  <ul className="text-xs text-charcoal-light space-y-1.5">
                    <li>{'\u2717'} Vous &ecirc;tes chez vous la journ&eacute;e (t&eacute;l&eacute;travail, retraite)</li>
                    <li>{'\u2717'} Vous atteignez d&eacute;j&agrave; 70-80 % avec les gestes gratuits</li>
                    <li>{'\u2717'} Votre budget est serr&eacute; (&lt; 600 &euro;)</li>
                    <li>{'\u2717'} Votre kit fait &lt; 400 Wc (pas assez de surplus &agrave; stocker)</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center mt-10">
              <p className="font-semibold text-lg mb-2">Calculez votre &eacute;conomie r&eacute;elle</p>
              <p className="text-sm text-charcoal-light mb-4">
                Notre calculateur int&egrave;gre votre taux d&apos;autoconsommation selon votre profil de pr&eacute;sence.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer mes &eacute;conomies &rarr;
              </Link>
            </div>

            <div className="my-8">
              <AffiliateCTA productName="Sunology PLAY 2" merchantName="Sunology" affiliateUrl="https://sunology.eu/products/play2-kit-solaire" label="Voir le Sunology PLAY 2" variant="box" position="article_bottom" price="599 \u20ac" />
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation : le calculer et l&apos;effacer</h4>
                  <p className="text-xs text-charcoal-light mt-1">Mesurez votre consommation permanente avec le Linky</p>
                </Link>
                <Link href="/blog/autoconsommation-solaire-comment-ca-marche" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Autoconsommation solaire : comment &ccedil;a marche</h4>
                  <p className="text-xs text-charcoal-light mt-1">Le principe technique du talon, du surplus et de l&apos;injection</p>
                </Link>
                <Link href="/blog/prises-connectees-suivi-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Meilleures prises connect&eacute;es pour suivi solaire</h4>
                  <p className="text-xs text-charcoal-light mt-1">Tapo P110, Shelly : mesurez votre production en temps r&eacute;el</p>
                </Link>
                <Link href="/blog/panneau-solaire-produit-moins-que-prevu" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Mon panneau produit moins que pr&eacute;vu : que faire ?</h4>
                  <p className="text-xs text-charcoal-light mt-1">Diagnostic si votre autoconsommation semble anormale</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">{'\u25BC'}</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-border-light">
              <p className="text-xs text-stone leading-relaxed">
                <strong>M&eacute;thodologie :</strong> donn&eacute;es PVGIS, retours utilisateurs forum-photovoltaique.fr, tarif EDF 0,1940 &euro;/kWh (mai 2026). <Link href="/methodologie" className="text-green hover:underline">Notre m&eacute;thodologie</Link>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
