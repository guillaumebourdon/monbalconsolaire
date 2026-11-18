import type { BuyLink } from '@/lib/affiliate';

type Row = { item: BuyLink; note?: string };

/**
 * Encadré « Où l'acheter » : 1 à 3 produits cités dans la page, avec leur lien marchand.
 * La mention de transparence est intégrée à l'encadré.
 */
export function OuAcheter({ rows, title = 'Où l’acheter', intro, position = 'ou-acheter' }: { rows: Row[]; title?: string; intro?: string; position?: string }) {
  return (
    <aside className="card-lg bg-green-pale/30 border-green/10 my-10">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      {intro && <p className="text-sm text-charcoal-light leading-relaxed mb-3">{intro}</p>}
      <ul className="space-y-3">
        {rows.map(({ item, note }) => (
          <li key={item.url} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-sm">
              <strong>{item.product}</strong>
              {note && <span className="text-charcoal-light"> &middot; {note}</span>}
            </span>
            <a
              href={item.url}
              target="_blank"
              rel="sponsored noopener"
              data-product={item.product}
              data-merchant={item.merchant}
              data-position={position}
              className="btn-affiliate text-sm whitespace-nowrap self-start sm:self-auto"
            >
              Voir le prix chez {item.merchant} &rarr;
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[10px] text-stone mt-3">
        Liens commerciaux : si vous achetez via ces liens, nous percevons une commission sans surco&ucirc;t pour vous. Prix susceptibles de varier.
      </p>
    </aside>
  );
}
