import Link from 'next/link';
import type { Metadata } from 'next';
import { SchemaArticle, SchemaFAQ, SchemaBreadcrumb } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { NewsletterBanner } from '@/components/ui/NewsletterBanner';

const PAGE_URL = 'https://monbalconsolaire.fr/blog/panneau-solaire-balcon-voiture-electrique';

export const metadata: Metadata = {
  title: 'Kit solaire balcon et voiture électrique : peut-on recharger ?',
  description:
    'Un kit solaire de 300 à 1600 W peut-il recharger une voiture électrique ? Puissances, chiffres réels (pricing.ts) et ce que ça change vraiment sur la facture de recharge.',
  alternates: { canonical: PAGE_URL },
};

const faqData = [
  {
    question: 'Un kit solaire de balcon peut-il recharger directement une voiture électrique ?',
    answer:
      'Non, pas directement. Un kit plug-and-play (micro-onduleur de 300 à 1600 W) injecte sa production dans le circuit électrique du logement, au même titre qu\'un appareil domestique. Il ne peut pas alimenter une borne de recharge (wallbox), qui a besoin d\'un circuit dédié de 7,4 kW minimum — soit 5 à 25 fois la puissance d\'un kit de balcon.',
  },
  {
    question: 'Pourquoi un kit de balcon ne peut-il pas atteindre la puissance d\'une wallbox ?',
    answer:
      'La wallbox standard en monophasé tire 230 V × 32 A, soit 7,4 kW. Même un kit de balcon haut de gamme (1 600 W, deux panneaux + micro-onduleurs) plafonne à 1,6 kW en plein soleil, et la réglementation française recommande de ne pas dépasser 900 W par circuit de prise. L\'écart de puissance est trop important : brancher les deux en même temps revient simplement à tirer un peu moins sur le réseau, pas à charger "au solaire".',
  },
  {
    question: 'Alors à quoi sert un kit solaire si on a une voiture électrique ?',
    answer:
      'À réduire la facture globale du foyer par autoconsommation, exactement comme pour n\'importe quel autre usage (chauffe-eau, électroménager, veille). Si une partie de la recharge tombe pendant les heures de production solaire (télétravail, recharge de jour le week-end), la production du kit couvre une fraction de cette recharge au lieu d\'un autre usage — l\'économie se fait sur la facture totale, pas sur un kWh "dédié voiture".',
  },
  {
    question: 'Combien de kilomètres un kit solaire de balcon représente-t-il par an ?',
    answer:
      'À titre indicatif, un kit de 600 Wc produit environ 612 kWh par an à Lyon plein sud (pricing.ts). Avec une consommation réelle moyenne de 17 kWh/100 km, cela représente l\'équivalent théorique de 3 600 km par an si 100 % de cette production se substituait à de la recharge réseau — ce qui n\'arrive jamais en pratique, la production solaire et les besoins de recharge ne coïncidant qu\'une partie du temps.',
  },
  {
    question: 'Existe-t-il des solutions solaires qui rechargent vraiment une voiture électrique ?',
    answer:
      'Oui, mais ce sont des installations différentes : un système photovoltaïque de toiture de plusieurs kWc avec onduleur hybride et gestion de charge intelligente (routeur solaire), couplé à une wallbox pilotée. Ce type d\'installation, dimensionnée en kVA et raccordée en triphasé, dépasse largement le cadre d\'un kit plug-and-play de balcon et nécessite une installation par un professionnel RGE/IRVE.',
  },
  {
    question: 'Le talon de consommation d\'une recharge de nuit annule-t-il l\'intérêt du solaire ?',
    answer:
      'Non, les deux sont simplement indépendants. La recharge de nuit (heures creuses, tarif réduit) ne bénéficie d\'aucune production solaire puisqu\'il fait nuit. Le kit continue en revanche à couvrir le talon de consommation diurne habituel (frigo, box, veilles) comme s\'il n\'y avait pas de voiture électrique. Les deux postes de consommation ne sont pas liés techniquement, seulement sur la facture globale.',
  },
];

const bareme = [
  { usage: 'Prise domestique (mode 2)', puissance: '2,3 kW', vitesse: '≈ 10-12 km/h', circuit: 'Prise 16 A dédiée recommandée' },
  { usage: 'Wallbox monophasée', puissance: '7,4 kW', vitesse: '≈ 30-40 km/h', circuit: 'Circuit dédié, disjoncteur 32 A' },
  { usage: 'Wallbox triphasée', puissance: '11-22 kW', vitesse: '≈ 50-100 km/h', circuit: 'Raccordement triphasé Enedis' },
  { usage: 'Kit solaire balcon (référence)', puissance: '0,3-1,6 kW', vitesse: '≈ 1,5-8 km/h en plein soleil', circuit: 'Prise standard, 900 W/circuit recommandé' },
];

const equivalences = [
  { kit: '300 Wc', annuel: '306 kWh/an', km: '≈ 1 800 km/an' },
  { kit: '500 Wc', annuel: '510 kWh/an', km: '≈ 3 000 km/an' },
  { kit: '600 Wc', annuel: '612 kWh/an', km: '≈ 3 600 km/an' },
  { kit: '800 Wc', annuel: '816 kWh/an', km: '≈ 4 800 km/an' },
  { kit: '1600 Wc', annuel: '1 632 kWh/an', km: '≈ 9 600 km/an' },
];

export default function VoitureElectriquePage() {
  return (
    <>
      <SchemaArticle
        title="Kit solaire balcon et voiture électrique : peut-on recharger ?"
        description="Un kit plug-and-play ne peut pas alimenter une wallbox, mais il réduit la facture globale du foyer. Chiffres réels de production et d'équivalence kilométrique via pricing.ts."
        url={PAGE_URL}
        datePublished="2026-10-02"
      />
      <SchemaFAQ questions={faqData} />
      <SchemaBreadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Kit solaire et voiture électrique' }]} />
      <article className="section-padding">
        <div className="container-brand max-w-3xl">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Kit solaire et voiture électrique' }]} />

          <div className="mb-10">
            <div className="badge-amber mb-4 inline-block">Analyse</div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Kit solaire de balcon et voiture &eacute;lectrique&nbsp;: peut-on vraiment recharger avec&nbsp;?
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Question fr&eacute;quente d&egrave;s qu&apos;on poss&egrave;de les deux&nbsp;: la production d&apos;un kit solaire de balcon peut-elle recharger une voiture &eacute;lectrique&nbsp;? La r&eacute;ponse courte est non, pas directement &mdash; mais ce n&apos;est pas la bonne question &agrave; se poser. Explications chiffr&eacute;es, sans mythe ni survente.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-stone">
              <span>2 octobre 2026</span>
              <span>&middot;</span>
              <span>8 min de lecture</span>
            </div>
          </div>

          <div className="card-lg bg-green-pale/30 border-green/10 mb-10">
            <h2 className="font-bold text-lg mb-3">L&apos;essentiel</h2>
            <ul className="text-sm text-charcoal-light space-y-2">
              <li><strong className="text-amber-dark">{'⚠'} Non&nbsp;:</strong> un kit de balcon (300 &agrave; 1 600&nbsp;W) ne peut pas alimenter une borne de recharge, qui demande 7,4&nbsp;kW minimum.</li>
              <li><strong className="text-green">{'✓'} Oui&nbsp;:</strong> il r&eacute;duit la facture globale du foyer par autoconsommation, comme pour tout autre usage domestique.</li>
              <li><strong className="text-green">{'✓'} Ordre de grandeur&nbsp;:</strong> un kit de 600&nbsp;Wc produit environ 612&nbsp;kWh/an &agrave; Lyon plein sud, soit l&apos;&eacute;quivalent th&eacute;orique de 3&nbsp;600&nbsp;km de recharge (non cumulable en pratique avec la recharge r&eacute;elle).</li>
            </ul>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Pourquoi la puissance ne correspond pas</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Un kit solaire de balcon fonctionne en injection directe&nbsp;: son micro-onduleur pousse sa production dans le circuit &eacute;lectrique du logement, exactement comme un appareil &eacute;lectrom&eacute;nager br&eacute;ch&eacute; sur une prise. En France, la recommandation est de ne pas d&eacute;passer 900&nbsp;W par circuit de prise (il n&apos;existe pas de limite l&eacute;gale de puissance, contrairement &agrave; la r&egrave;gle allemande de 800&nbsp;W souvent confondue &agrave; tort avec une r&egrave;gle fran&ccedil;aise). Une borne de recharge domestique (wallbox), elle, tire 7,4&nbsp;kW sur un circuit d&eacute;di&eacute; en monophas&eacute; &mdash; soit 8 &agrave; 25 fois plus qu&apos;un kit de balcon selon sa puissance.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Brancher les deux ne fait pas &laquo;&nbsp;fusionner&nbsp;&raquo; les puissances&nbsp;: le kit continue de produire ses quelques centaines de watts, inject&eacute;s dans le logement, tandis que la wallbox tire ses 7,4&nbsp;kW du r&eacute;seau ind&eacute;pendamment. Le compteur Linky voit juste un peu moins de soutirage pendant les heures o&ugrave; les deux co&iuml;ncident.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Les puissances en pr&eacute;sence</h2>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Usage</th>
                      <th className="text-left p-2.5 font-semibold">Puissance</th>
                      <th className="text-left p-2.5 font-semibold">Vitesse de charge</th>
                      <th className="text-left p-2.5 rounded-tr-xl font-semibold">Circuit n&eacute;cessaire</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bareme.map((b, i) => (
                      <tr key={i} className={`border-b border-border-light ${b.usage.includes('balcon') ? 'bg-green-pale/30 font-semibold' : i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5">{b.usage}</td>
                        <td className="p-2.5 font-mono">{b.puissance}</td>
                        <td className="p-2.5">{b.vitesse}</td>
                        <td className="p-2.5">{b.circuit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                &laquo;&nbsp;Vitesse de charge&nbsp;&raquo; estim&eacute;e &agrave; partir d&apos;une consommation moyenne r&eacute;elle de 17&nbsp;kWh/100&nbsp;km (ADEME, usage mixte). Le kit de balcon est indiqu&eacute; en plein soleil, sa production r&eacute;elle moyenn&eacute;e sur la journ&eacute;e est bien plus faible (voir plus bas).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que repr&eacute;sente vraiment la production d&apos;un kit, en kilom&egrave;tres</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Pour donner un ordre de grandeur honn&ecirc;te, voici la production annuelle moyenne de diff&eacute;rentes puissances de kit (r&eacute;f&eacute;rence Lyon, plein sud, performance ratio 0,85 &mdash; calcul via <code className="text-xs bg-cream px-1 py-0.5 rounded">pricing.ts</code>), convertie en &eacute;quivalent kilom&eacute;trique &agrave; 17&nbsp;kWh/100&nbsp;km&nbsp;:
              </p>
              <div className="overflow-x-auto -mx-5 md:mx-0 my-6">
                <table className="w-full text-xs border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-green text-white">
                      <th className="text-left p-2.5 rounded-tl-xl font-semibold">Puissance du kit</th>
                      <th className="text-left p-2.5 font-semibold">Production annuelle</th>
                      <th className="text-left p-2.5 rounded-tr-xl font-semibold">&Eacute;quivalent km/an (th&eacute;orique)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equivalences.map((e, i) => (
                      <tr key={i} className={`border-b border-border-light ${i % 2 === 0 ? 'bg-cream/50' : ''}`}>
                        <td className="p-2.5 font-semibold">{e.kit}</td>
                        <td className="p-2.5 font-mono">{e.annuel}</td>
                        <td className="p-2.5 text-green font-semibold">{e.km}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">
                &laquo;&nbsp;Th&eacute;orique&nbsp;&raquo; est le mot important&nbsp;: cette &eacute;quivalence suppose que 100&nbsp;% de la production du kit se substitue &agrave; de la recharge r&eacute;seau, ce qui ne se produit jamais en r&eacute;alit&eacute;. Un conducteur moyen roulant 12 000 &agrave; 13 000&nbsp;km/an, m&ecirc;me un kit de 1 600&nbsp;Wc (deux panneaux) ne couvre qu&apos;une fraction de ce besoin, et seulement sur les kWh effectivement autoconsomm&eacute;s au moment pr&eacute;cis de la recharge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Ce que le kit solaire change vraiment sur la facture</h2>
              <div className="space-y-3">
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Recharge de jour (t&eacute;l&eacute;travail, week-end)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Si le v&eacute;hicule charge pendant les heures de production solaire, la production du kit r&eacute;duit d&apos;autant le soutirage r&eacute;seau total du logement &agrave; cet instant &mdash; recharge comprise. L&apos;&eacute;conomie se lit sur la facture globale, pas sur un compteur d&eacute;di&eacute; &laquo;&nbsp;voiture&nbsp;&raquo;.</p>
                </div>
                <div className="card border-l-4 border-l-amber">
                  <h3 className="font-bold text-sm mb-1 text-amber-dark">Recharge de nuit (heures creuses)</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Aucun b&eacute;n&eacute;fice solaire direct, logiquement&nbsp;: pas de production la nuit. Le kit continue en parall&egrave;le &agrave; couvrir le talon de consommation diurne habituel, ind&eacute;pendamment de la voiture.</p>
                </div>
                <div className="card border-l-4 border-l-green">
                  <h3 className="font-bold text-sm mb-1 text-green">Maximiser le recoupement</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">Programmer la recharge (via l&apos;appli du v&eacute;hicule ou de la wallbox) pour qu&apos;elle d&eacute;marre en milieu de journ&eacute;e plut&ocirc;t qu&apos;en pleine nuit augmente la part de production solaire effectivement autoconsomm&eacute;e &mdash; sans jamais couvrir la totalit&eacute; d&apos;une recharge compl&egrave;te avec un seul kit de balcon.</p>
                </div>
              </div>
            </section>

            <div className="card-lg bg-gradient-to-br from-green-pale via-white to-amber-pale/30 border-green/10 text-center">
              <p className="font-semibold text-lg mb-2">Combien produirait un kit sur votre balcon&nbsp;?</p>
              <p className="text-sm text-charcoal-light mb-4">
                D&eacute;partement, orientation, budget&nbsp;: le calculateur estime votre production r&eacute;elle et votre rentabilit&eacute; avant tout achat.
              </p>
              <Link href="/calculateur" className="btn-primary inline-flex">
                Calculer ma production &rarr;
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Si vous voulez vraiment recharger au solaire</h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Recharger significativement une voiture &eacute;lectrique au solaire suppose une installation d&apos;une autre &eacute;chelle&nbsp;: plusieurs kWc en toiture, onduleur hybride, et souvent un routeur solaire qui pilote la wallbox pour consommer le surplus en priorit&eacute; (plut&ocirc;t que de l&apos;injecter sur le r&eacute;seau). Ce type de syst&egrave;me se raccorde g&eacute;n&eacute;ralement en triphas&eacute;, se dimensionne en kVA et n&eacute;cessite une installation par un professionnel RGE/IRVE &mdash; une d&eacute;marche totalement diff&eacute;rente d&apos;un kit plug-and-play de balcon, avec un budget et une d&eacute;marche administrative sans comparaison.
              </p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Pour les d&eacute;marches propres au kit de balcon (d&eacute;claration, raccordement)&nbsp;: <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="text-green hover:underline">d&eacute;claration CACSI Enedis</Link>. Pour comprendre ce que le Linky mesure r&eacute;ellement&nbsp;: <Link href="/blog/linky-panneau-solaire-injection" className="text-green hover:underline">Linky et panneau solaire</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">&Agrave; retenir</h2>
              <ul className="text-sm text-charcoal-light space-y-2">
                <li><span className="text-amber-dark font-bold">&#10007;</span> Un kit de balcon ne remplace jamais une wallbox&nbsp;: l&apos;&eacute;cart de puissance est trop important.</li>
                <li><span className="text-amber-dark font-bold">&#10007;</span> Ne comptez pas sur le kit pour &laquo;&nbsp;financer&nbsp;&raquo; sp&eacute;cifiquement la recharge&nbsp;: l&apos;&eacute;conomie se fait sur la facture globale.</li>
                <li><span className="text-green font-bold">{'✓'}</span> Programmer la recharge en journ&eacute;e augmente la part autoconsomm&eacute;e, sans magie ni surco&ucirc;t.</li>
                <li><span className="text-green font-bold">{'✓'}</span> Le kit continue de r&eacute;duire votre talon de consommation habituel, voiture &eacute;lectrique ou pas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-6">Questions fr&eacute;quentes</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="card group" open={i === 0}>
                    <summary className="font-semibold text-sm cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-stone group-open:rotate-180 transition-transform">{'▼'}</span>
                    </summary>
                    <p className="text-sm text-charcoal-light mt-3 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold mb-4">Articles li&eacute;s</h2>
              <div className="space-y-3">
                <Link href="/blog/linky-panneau-solaire-injection" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Linky et panneau solaire&nbsp;: injection, index, surplus</h4>
                  <p className="text-xs text-charcoal-light mt-1">Ce que le compteur voit vraiment</p>
                </Link>
                <Link href="/blog/talon-consommation-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Talon de consommation&nbsp;: la base du dimensionnement</h4>
                  <p className="text-xs text-charcoal-light mt-1">Pourquoi dimensionner sur la veille, pas sur les pics</p>
                </Link>
                <Link href="/blog/combien-rapporte-panneau-solaire-balcon" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">Combien rapporte un panneau solaire de balcon&nbsp;?</h4>
                  <p className="text-xs text-charcoal-light mt-1">&Eacute;conomies r&eacute;elles chiffr&eacute;es</p>
                </Link>
                <Link href="/guide/declaration-cacsi-enedis-panneau-solaire" className="card block hover:shadow-brand-lg transition-all group border-l-4 border-l-green">
                  <h4 className="font-bold text-sm group-hover:text-green transition-colors">D&eacute;claration CACSI Enedis</h4>
                  <p className="text-xs text-charcoal-light mt-1">La d&eacute;marche obligatoire en 10 minutes</p>
                </Link>
              </div>
            </section>

            <NewsletterBanner />

            <footer className="mt-10 pt-8 border-t border-border-light text-xs text-stone leading-relaxed space-y-2">
              <p>
                <strong>M&eacute;thodologie&nbsp;:</strong> production solaire calcul&eacute;e via <code className="text-[10px] bg-cream px-1 rounded">src/lib/pricing.ts</code> (r&eacute;f&eacute;rence Lyon plein sud, performance ratio 0,85, productible PVGIS 1 200&nbsp;kWh/kWc). Consommation moyenne r&eacute;elle d&apos;un v&eacute;hicule &eacute;lectrique&nbsp;: 17&nbsp;kWh/100&nbsp;km (fourchette ADEME 12-20&nbsp;kWh/100&nbsp;km selon mod&egrave;le et usage, 2026). Puissances de wallbox sourc&eacute;es sur les limites r&eacute;glementaires fran&ccedil;aises (230&nbsp;V &times; 32&nbsp;A monophas&eacute;).{' '}
                <Link href="/a-propos" className="text-green hover:underline">En savoir plus</Link>.
              </p>
              <p>
                <strong>Transparence&nbsp;:</strong> cet article ne contient aucun lien affili&eacute;&nbsp;: aucun produit n&apos;est recommand&eacute; ici, il s&apos;agit d&apos;une analyse technique.
              </p>
            </footer>
          </div>
        </div>
      </article>
    </>
  );
}
