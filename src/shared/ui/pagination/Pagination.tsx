"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "@/core/i18n/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  ariaLabel?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  ariaLabel = "Pagination",
}: PaginationProps) {
  // Backend meta bəzən `undefined`/string gələ bilər — number-ə çevirib
  // qoruyuruq, əks halda `showPages` boş qalır (oxlar görünür, rəqəm yox).
  const totalNum = Number(totalPages);
  const safeTotal =
    Number.isFinite(totalNum) && totalNum >= 1 ? Math.floor(totalNum) : 0;

  if (safeTotal < 1) return null;

  const currentNum = Number(currentPage);
  const page = Number.isFinite(currentNum)
    ? Math.min(Math.max(1, Math.floor(currentNum)), safeTotal)
    : 1;

  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < safeTotal ? page + 1 : null;

  const getPageUrl = (p: number) =>
    p === 1 ? basePath : `${basePath}?page=${p}`;

  const showPages = (() => {
    const delta = 1;
    const range: number[] = [];
    const lo = Math.max(1, page - delta);
    const hi = Math.min(safeTotal, page + delta);
    for (let i = lo; i <= hi; i++) range.push(i);
    return range;
  })();

  return (
    <nav
      className="flex flex-wrap justify-center items-center gap-2 mt-8"
      aria-label={ariaLabel}
    >
      {prevPage !== null ? (
        <Link
          href={getPageUrl(prevPage)}
          className="w-10 h-10 rounded-full border border-sand text-forest bg-paper hover:bg-forest hover:text-cream hover:border-forest transition inline-flex items-center justify-center"
          aria-label="Əvvəlki"
        >
          <FaChevronLeft className="w-3.5 h-3.5" aria-hidden />
        </Link>
      ) : (
        <span
          className="w-10 h-10 rounded-full border border-sand text-secondary/30 cursor-not-allowed inline-flex items-center justify-center"
          aria-disabled="true"
          aria-label="Əvvəlki"
        >
          <FaChevronLeft className="w-3.5 h-3.5" aria-hidden />
        </span>
      )}

      <div className="flex gap-2">
        {showPages.map((p) =>
          p === page ? (
            <span
              key={p}
              className="w-10 h-10 rounded-full bg-forest text-white font-bold inline-flex items-center justify-center shadow-lg shadow-forest/20"
              aria-current="page"
            >
              {p}
            </span>
          ) : (
            <Link
              key={p}
              href={getPageUrl(p)}
              className="w-10 h-10 rounded-full border border-sand text-ink bg-paper hover:bg-forest hover:text-white hover:border-forest transition inline-flex items-center justify-center font-semibold"
            >
              {p}
            </Link>
          )
        )}
      </div>

      {nextPage !== null ? (
        <Link
          href={getPageUrl(nextPage)}
          className="w-10 h-10 rounded-full border border-sand text-forest bg-paper hover:bg-forest hover:text-cream hover:border-forest transition inline-flex items-center justify-center"
          aria-label="Növbəti"
        >
          <FaChevronRight className="w-3.5 h-3.5" aria-hidden />
        </Link>
      ) : (
        <span
          className="w-10 h-10 rounded-full border border-sand text-secondary/30 cursor-not-allowed inline-flex items-center justify-center"
          aria-disabled="true"
          aria-label="Növbəti"
        >
          <FaChevronRight className="w-4 h-4" aria-hidden />
        </span>
      )}
    </nav>
  );
}
