import Link from 'next/link';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'M\u00e9thodologie de calcul ROI solaire balcon : sources et hypoth\u00e8ses',
  description: 'Comment nous calculons le ROI d\'un kit solaire balcon. Sources PVGIS, CRE, inflation kWh 3,3%/an. Toutes nos hypoth\u00e8ses sont publiques et auditables.',
  alternates: {
    canonical: 'https://monbalconsolaire.fr/methodologie',
  },
};

export default function MethodologiePage() {
  return (
    <section className="section-padding">
      <div className="container-brand max-w-3xl">
        <Breadcrumbs items={[{ label: 'M\u00e9thodologie' }]} />

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          M&eacute;thodologie : comment nous calculons production, &eacute;conomies et rentabilit&eacute;
        </h1>
        <p className="text-lg text-charcoal-light leading-relaxed mb-10">
          Toutes nos hypoth&egrave;ses, sources et formules sont publiques et auditables.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-extrabold mb-4">Notre principe</h2>
            <div className="card-lg bg-green-pale/30 border-green/10">
              <p className="text-sm text-charcoal-light leading-relaxed">
                Nous ne vendons aucun kit solaire. Nos calculs reposent sur des sources publiques (PVGIS, CRE, fiches constructeurs) et un sc&eacute;nario d&apos;utilisation optimale d&apos;un foyer qui exploite intelligemment son kit. Toutes nos hypoth&egrave;ses sont list&eacute;es ci-dessous et modifiables dans notre <Link href="/calculateur" className="text-green hover:underline font-semibold">calculateur</Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4">Sources de donn&eacute;es</h2>
            <div className="space-y-3">
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm mb-1">PVGIS (Commission Europ&eacute;enne)</h4>
                <p className="text-xs text-charcoal-light">Irradiation solaire par d&eacute;partement, base de toutes nos estimations de production.</p>
              </div>
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm mb-1">Commission de R&eacute;gulation de l&apos;&Eacute;nergie (CRE)</h4>
                <p className="text-xs text-charcoal-light">Tarifs r&eacute;glement&eacute;s et historique du prix du kWh depuis 2012.</p>
              </div>
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm mb-1">Fiches techniques constructeurs</h4>
                <p className="text-xs text-charcoal-light">Sunology, Beem, Sunethic, Zendure, EcoFlow, DualSun : puissance, rendement, garantie.</p>
              </div>
              <div className="card border-l-4 border-l-green">
                <h4 className="font-bold text-sm mb-1">Retours utilisateurs publics</h4>
                <p className="text-xs text-charcoal-light">Trustpilot, Amazon, forum-photovoltaique.fr, Reddit pour les donn&eacute;es de production r&eacute;elle.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4">Hypoth&egrave;ses de calcul</h2>
            <div className="overflow-x-auto -mx-5 md:mx-0">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-green/20 bg-cream/50">
                    <th className="p-3 text-left font-bold">Param&egrave;tre</th>
                    <th className="p-3 text-left font-bold">Valeur</th>
                    <th className="p-3 text-left font-bold">Source / justification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix du kWh', '0,1940 \u20ac/kWh TTC', 'Tarif r\u00e9glement\u00e9 EDF, option Base, 6 kVA, mai 2026 (CRE)'],
                    ['Inflation kWh', '3,3% par an', 'Moyenne historique CRE 2012-2026. Le tarif est pass\u00e9 de 0,1263 \u20ac en 2012 \u00e0 0,1940 \u20ac en 2026.'],
                    ['Performance Ratio', '0,85', 'Pertes syst\u00e8me : onduleur 4% + c\u00e2blage 2% + temp\u00e9rature 5% + salissure 3%. Valeur haute PVGIS (0,75-0,85).'],
                    ['Autoconsommation (sans batterie)', '85%', 'Foyer attentif qui d\u00e9cale ses usages diurnes. Sans adaptation : 40-60%.'],
                    ['Autoconsommation (avec batterie)', '95%', 'La batterie stocke l\u2019exc\u00e9dent diurne pour le soir. Pertes de cycle int\u00e9gr\u00e9es.'],
                    ['Productible r\u00e9f\u00e9rence', '1 200 kWh/kWc/an', 'Lyon, m\u00e9diane fran\u00e7aise. Marseille : 1 450. Paris : 1 050. Lille : 1 000.'],
                    ['Orientation r\u00e9f\u00e9rence', 'Sud (coef 1,0)', 'SE/SO : 0,95 \u2022 E/O : 0,80 \u2022 NE/NO : 0,65 \u2022 N : 0,50'],
                    ['Dur\u00e9e d\u2019analyse', '25 ans', 'Garantie de production des panneaux constructeurs'],
                  ].map(([param, val, source], i) => (
                    <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                      <td className="p-3 font-semibold">{param}</td>
                      <td className="p-3 font-mono text-xs">{val}</td>
                      <td className="p-3 text-xs text-charcoal-light">{source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4">Notre formule</h2>
            <div className="card-lg bg-cream/50 font-mono text-sm space-y-2">
              <p>Production annuelle (kWh) = Puissance(kWc) &times; Productible PVGIS &times; Performance Ratio &times; Coef Orientation</p>
              <p>&Eacute;conomie ann&eacute;e N (&euro;) = Production &times; Taux autoconso &times; Prix kWh &times; (1 + 3,3%)^(N-1)</p>
              <p>ROI (ann&eacute;es) = Premi&egrave;re ann&eacute;e o&ugrave; le cumul des &eacute;conomies d&eacute;passe le prix du kit</p>
            </div>
            <div className="card-lg mt-4">
              <h4 className="font-bold text-sm mb-3">Exemple : Sunology PLAY 2 (450 Wc, 599 &euro;) &agrave; Lyon, sud</h4>
              <ul className="text-sm text-charcoal-light space-y-1.5">
                <li>&bull; Production = 0,45 &times; 1 200 &times; 0,85 &times; 1,0 = <strong>459 kWh/an</strong></li>
                <li>&bull; &Eacute;conomie ann&eacute;e 1 = 459 &times; 0,85 &times; 0,1940 = <strong>76 &euro;</strong></li>
                <li>&bull; &Eacute;conomie ann&eacute;e 5 (avec inflation 3,3%) = 76 &times; 1,138 = <strong>87 &euro;</strong></li>
                <li>&bull; Cumul ann&eacute;e 7 = 610 &euro; &rarr; <strong>ROI atteint &agrave; 7,1 ans</strong></li>
                <li>&bull; Total &eacute;conomis&eacute; sur 25 ans = <strong>~2 870 &euro;</strong></li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4">Pourquoi le sc&eacute;nario &laquo; optimal honn&ecirc;te &raquo;</h2>
            <div className="card-lg bg-amber-pale/20 border-amber/10">
              <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                Un kit solaire balcon n&apos;a de sens financier que si vous l&apos;utilisez intelligemment. Nous partons du principe qu&apos;un foyer qui investit 300 &agrave; 1 500 &euro; va naturellement adapter ses habitudes : d&eacute;caler le lave-linge en journ&eacute;e, choisir la meilleure orientation disponible, entretenir ses panneaux.
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed mb-3">
                Si votre situation est moins favorable (orientation est-ouest, foyer absent en journ&eacute;e), notre <Link href="/calculateur" className="text-green hover:underline font-semibold">calculateur</Link> vous permet d&apos;ajuster tous ces param&egrave;tres. Le ROI peut &ecirc;tre 30 &agrave; 80 % plus long.
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Nous pr&eacute;f&eacute;rons cette approche &agrave; l&apos;inverse : afficher des ROI moyens nationaux d&eacute;courageants qui ne correspondent &agrave; la situation r&eacute;elle de personne.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4">Ce que nos calculs ne prennent PAS en compte</h2>
            <div className="space-y-2">
              {[
                'Ombres locales (immeuble voisin, arbre, garde-corps opaque)',
                'Volatilit\u00e9 future du prix du kWh (l\u2019inflation 3,3% est une moyenne, pas une garantie)',
                'Variations selon le contrat (HP/HC, Tempo, fournisseur alternatif)',
                'D\u00e9gradation des panneaux (estim\u00e9e \u00e0 0,5%/an, n\u00e9glig\u00e9e car compens\u00e9e par l\u2019inflation kWh)',
                'Vente du surplus \u00e0 EDF OA (les kits plug-and-play n\u2019ont g\u00e9n\u00e9ralement pas de contrat d\u2019injection r\u00e9mun\u00e9r\u00e9)',
                'Co\u00fbts de remplacement \u00e9ventuels (onduleur apr\u00e8s 12-15 ans, batterie apr\u00e8s 8-10 ans)',
                'Valeur de revente du kit en cas de d\u00e9m\u00e9nagement',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-charcoal-light">
                  <span className="text-amber-dark font-bold mt-0.5">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold mb-4">Historique des mises &agrave; jour</h2>
            <div className="card">
              <ul className="text-sm text-charcoal-light space-y-2">
                <li>&bull; <strong>Mai 2026 :</strong> Int&eacute;gration de l&apos;inflation kWh historique (3,3%/an) dans le calcul du ROI. Distinction Performance Ratio (0,85) / autoconsommation (85%/95%).</li>
                <li>&bull; <strong>F&eacute;vrier 2026 :</strong> Prix du kWh initial &agrave; 0,1940 &euro; (TRV).</li>
              </ul>
            </div>
          </section>

          <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10">
            <h3 className="font-bold text-base mb-2">Une erreur ? Une hypoth&egrave;se &agrave; challenger ?</h3>
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              Notre m&eacute;thodologie est ouverte &agrave; la critique constructive. Nous corrigeons sous 48h et publions les modifications dans cette page.
            </p>
            <a href="mailto:contact@monbalconsolaire.fr" className="btn-primary text-sm inline-flex">
              Nous contacter &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
