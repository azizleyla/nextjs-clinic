"use client";
import { Button } from "@/components";
import { Link } from "@/core/i18n/navigation";
import useLoadMore from "@/utils/hooks/useLoadMore";
import { generateSlug } from "@/utils/slug";
import { useLocale } from "next-intl";
import { FaArrowRight } from "react-icons/fa";
import { getDepartmentIcon } from "@/features/departments/constants/icons";
import {
  pickLocalizedText,
  type Department,
} from "@/services/departmentService";

type DepartmentListProps = {
  departments: Department[];
  isLoadMore?: boolean;
};

const DepartmentList = ({ departments, isLoadMore }: DepartmentListProps) => {
  const { visibleCount, handleLoadMore } = useLoadMore(4, 4);

  const locale = useLocale();
  const list = Array.isArray(departments) ? departments : [];
  const hasItems = list.length > 0;

  return (
    <div>
      {!hasItems && (
        <p className="text-secondary text-center py-8">
          Şöbələr siyahısı hazırda göstərilə bilmir.
        </p>
      )}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.slice(0, visibleCount).map((department) => {
          const Icon = getDepartmentIcon(department.icon_name);
          const title = pickLocalizedText(department.title, locale);
          return (
            <Link
              href={`/departments/${generateSlug(title)}/${department.id}`}
              key={department.id}
              className="group flex flex-col items-start text-left gap-3 rounded-3xl border border-sand dark:border-zinc-800 bg-paper dark:bg-zinc-900/60 px-6 py-6 md:px-7 md:py-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/25 hover:shadow-xl hover:shadow-forest/10"
            >
              <div className="inline-flex items-center justify-center rounded-2xl bg-forest/10 text-forest w-14 h-14 mb-1 transition-colors group-hover:bg-clay/15 group-hover:text-clay">
                <Icon className="text-2xl" aria-hidden />
              </div>
              <h3 className="font-heading font-semibold text-lg md:text-xl text-ink dark:text-white">
                {title}
              </h3>
              <p className="text-primary_bold dark:text-zinc-300 text-sm leading-relaxed line-clamp-3">
                {pickLocalizedText(department.desc, locale)}

              </p>
              <span className="flex items-center gap-2 text-sm font-semibold text-forest mt-1">
                Ətraflı
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center my-5">
        {isLoadMore && list.length > visibleCount && (
          <Button
            onClick={handleLoadMore}
            variant="outline_primary"
            label="Daha çox"
          />
        )}
        {!isLoadMore && (
          <Button
            href="/departments"
            variant="outline_primary"
            size="sm"
            label="Bütün şöbələr"
          />
        )}
      </div>
    </div>
  );
};

export default DepartmentList;
