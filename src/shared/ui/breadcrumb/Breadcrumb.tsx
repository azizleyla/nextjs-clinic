import { Link } from "@/core/i18n/navigation";
import { FaChevronRight } from "react-icons/fa";

export type Crumb = {
  label: string;
  /** Son element (cari səhifə) üçün href verilmir. */
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
  className?: string;
};

/**
 * Naviqasiya izi: Əsas / Bölmə / Cari səhifə.
 * Sonuncu element həmişə cari səhifədir (link deyil, `aria-current="page"`).
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const crumbs = items.filter((c) => c.label?.trim());
  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {crumbs.map((item, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-primary_bold transition-colors hover:text-forest"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={
                    isLast
                      ? "max-w-[60vw] truncate font-medium text-ink dark:text-zinc-200 md:max-w-md"
                      : "text-primary_bold"
                  }
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <FaChevronRight
                  className="text-[9px] text-secondary/40"
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
