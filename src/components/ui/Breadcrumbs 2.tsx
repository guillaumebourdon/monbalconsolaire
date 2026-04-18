import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'ariane" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm text-stone flex-wrap">
        <li>
          <Link href="/" className="hover:text-green transition-colors">Accueil</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-border">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-green transition-colors">{item.label}</Link>
            ) : (
              <span className="text-charcoal-light font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
