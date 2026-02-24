"use client";
import { Button } from "@/components";
import { Link } from "@/core/i18n/navigation";
import useLoadMore from "@/utils/hooks/useLoadMore";
import { generateSlug } from "@/utils/slug";
import { useLocale } from "next-intl";
import { FaUserDoctor } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { PiBrain, PiHeartbeat, PiHospitalLight } from "react-icons/pi";

const iconsMap = {
  PiHeartbeat,
  PiHospitalLight,
  IoEyeOutline,
  PiBrain,
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
  departments: Department[];
  isLoadMore?: boolean;
};

const DepartmentList = ({
  departments,
  isLoadMore,
}: DepartmentListProps) => {
  const { visibleCount, handleLoadMore } = useLoadMore(4, 4);

  const locale = useLocale();

  return (
    <div>
      <div className="grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
        {departments.slice(0, visibleCount).map((department, index) => {
          const Icon = iconsMap[department.icon_name];
          return (
            <Link
              href={`/departments/${generateSlug(department?.title[locale])}/${
                department.id
              }`}
              key={department.id}
              className="flex md:hover:-translate-y-2 transition-all duration-300 shadow-custom-gray py-5 px-3 gap-3 flex-col items-center text-center cursor-pointer"
            >
              <Icon className="text-primary" fontSize="50px" />
              <h3 className="font-medium text-md">
                {department?.title[locale] || department?.title["az"]}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {department?.desc}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center my-5">
        {isLoadMore && departments.length > visibleCount && (
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
            label="Bütün şöbələr"
          />
        )}
      </div>
    </div>
  );
};

export default DepartmentList;
