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
  if (totalPages < 1) return null;

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const getPageUrl = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  const showPages = (() => {
    const delta = 1;
    const range: number[] = [];
    const lo = Math.max(1, currentPage - delta);
    const hi = Math.min(totalPages, currentPage + delta);
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
          className="p-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition inline-flex items-center justify-center"
          aria-label="Əvvəlki"
        >
          <FaChevronLeft className="w-4 h-4" aria-hidden />
        </Link>
      ) : (
        <span
          className="p-2 rounded border border-gray-300 text-gray-400 cursor-not-allowed inline-flex items-center justify-center"
          aria-disabled="true"
          aria-label="Əvvəlki"
        >
          <FaChevronLeft className="w-4 h-4" aria-hidden />
        </span>
      )}

      <div className="flex gap-2">
        {showPages.map((p) =>
          p === currentPage ? (
            <span
              key={p}
              className="px-3 py-2 rounded border-2 border-primary bg-primary text-white font-medium"
              aria-current="page"
            >
              {p}
            </span>
          ) : (
            <Link
              key={p}
              href={getPageUrl(p)}
              className="px-3 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              {p}
            </Link>
          )
        )}
      </div>

      {nextPage !== null ? (
        <Link
          href={getPageUrl(nextPage)}
          className="p-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition inline-flex items-center justify-center"
          aria-label="Növbəti"
        >
          <FaChevronRight className="w-4 h-4" aria-hidden />
        </Link>
      ) : (
        <span
          className="p-2 rounded border border-gray-300 text-gray-400 cursor-not-allowed inline-flex items-center justify-center"
          aria-disabled="true"
          aria-label="Növbəti"
        >
          <FaChevronRight className="w-4 h-4" aria-hidden />
        </span>
      )}
    </nav>
  );
}
