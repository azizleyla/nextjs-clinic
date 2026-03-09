"use client";
import React from "react";
import { Button } from "@/components";
import { Link } from "@/core/i18n/navigation";
import useLoadMore from "@/utils/hooks/useLoadMore";
import { generateSlug } from "@/utils/slug";
import { useLocale } from "next-intl";
import { FaEye } from "react-icons/fa";
import { FaUserDoctor, FaBrain, FaHeartPulse, FaHospital } from "react-icons/fa6";

const iconsMap: Record<string, React.ComponentType<{ className?: string; fontSize?: string }>> = {
  PiHeartbeat: FaHeartPulse,
  PiHospitalLight: FaHospital,
  IoEyeOutline: FaEye,
  PiBrain: FaBrain,
  FaUserDoctor,
};

type DepartmentTitle = Record<string, string>;

type Department = {
  id: number;
  title: DepartmentTitle;
  desc?: string;
  icon_name: string;
};

type DepartmentListProps = {
  departments: any
  isLoadMore?: boolean;
};

const DepartmentList = ({
  departments,
  isLoadMore,
}: DepartmentListProps) => {
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
        {list.slice(0, visibleCount).map((department, index) => {
          const Icon = iconsMap[department.icon_name];
          return (
            <Link
              href={`/departments/${generateSlug(department?.title[locale])}/${department.id}`}
              key={department.id}
              className="flex flex-col items-start text-left gap-3 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-5 py-5 md:px-6 md:py-6 transition-all duration-300 hover:border-primary/60 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary w-12 h-12 mb-1">
                <Icon className="text-xl" />
              </div>
              <h3 className="font-semibold text-base md:text-lg text-secondary dark:text-white">
                {department?.title[locale] || department?.title["az"]}
              </h3>
              <p className="text-secondary/90 dark:text-zinc-300 text-sm leading-relaxed line-clamp-3">
                {department?.desc}
              </p>
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
