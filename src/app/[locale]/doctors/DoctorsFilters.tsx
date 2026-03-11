import dynamic from "next/dynamic";
import { FaBuilding } from "react-icons/fa";
import { FaUserDoctor, FaMagnifyingGlass } from "react-icons/fa6";
import { useTheme } from "next-themes";
import type { Department, Branch } from "@/services/departmentService";

const Select = dynamic(() => import("react-select"), { ssr: false });

type DoctorFiltersProps = {
  filters: {
    page: number;
    departmentId: string | null;
    branchId: string | null;
    searchQuery: string;
  };
  setFilter: (name: string, value: unknown) => void;
  departments: Department[];
  branches: Branch[];
};

export const DoctorFilters = ({
  filters,
  setFilter,
  departments,
  branches,
}: DoctorFiltersProps) => {
  const { resolvedTheme, theme } = useTheme();
  const isDark = (resolvedTheme ?? theme) === "dark";

  const selectStyles = {
    control: (base: Record<string, unknown>) => ({
      ...base,
      minHeight: 40,
      height: 40,
      borderRadius: 6,
      borderColor: isDark ? "#3f3f46" : "#dee2e6",
      backgroundColor: isDark ? "#09090b" : "#ffffff",
      boxShadow: "none",
    }),
    menu: (base: Record<string, unknown>) => ({
      ...base,
      backgroundColor: isDark ? "#09090b" : "#ffffff",
      zIndex: 30,
    }),
    menuPortal: (base: Record<string, unknown>) => ({
      ...base,
      zIndex: 50,
    }),
  };

  const departmentOptions = [
    { value: null, label: "Şöbələr" },
    ...departments.map((d) => ({
      value: d.id,
      label:
        typeof d.title === "object"
          ? d.title["az"] ?? Object.values(d.title)[0]
          : d.title ?? "",
    })),
  ];

  const branchOptions = [
    { value: null, label: "Filiallar" },
    ...branches.map((b) => ({
      value: b.id,
      label: b.short_name ?? b.name ?? "",
    })),
  ];

  const selectedDepartment =
    departmentOptions.find(
      (opt) => String(opt.value) === String(filters.departmentId),
    ) ?? departmentOptions[0];

  const selectedBranch =
    branchOptions.find(
      (opt) => String(opt.value) === String(filters.branchId),
    ) ?? branchOptions[0];

  return (
    <div className="pt-7 lg:pt-10 gap-5 rounded-xl -mt-16 bg-white dark:bg-zinc-900/80 pb-8 flex flex-col md:flex-row px-6 lg:px-16 justify-between border border-slate-200/80 dark:border-zinc-800/80 backdrop-blur-sm">
      <div className="w-full md:w-1/3">
        <div className="relative flex gap-4 items-center border-b border-[#ccd9f2] dark:border-zinc-700 pb-3">
          <FaUserDoctor className="text-4xl text-primary" />
          <div className="flex flex-col w-full">
            <label className="text-xs text-secondary dark:text-zinc-400">
              Axtar
            </label>
            <input
              value={filters.searchQuery}
              onChange={(e) => setFilter("name", e.target.value)}
              className="bg-transparent focus:outline-none font-semibold text-secondary dark:text-zinc-100"
              placeholder="Həkim adı"
            />
          </div>
          <FaMagnifyingGlass className="absolute right-0 bottom-3 text-secondary" />
        </div>
      </div>

      <div className="w-full md:w-1/3 flex gap-4 items-center">
        <FaBuilding className="text-4xl text-primary" />
        <div className="flex flex-col w-full">
          <label className="text-xs text-secondary dark:text-zinc-400">
            Şöbə
          </label>
          {departments.length === 0 ? (
            <div className="h-10 w-full rounded-md border border-[#dee2e6] bg-[#f8f9fa] dark:bg-zinc-900 animate-pulse" />
          ) : (
            <Select
              options={departmentOptions}
              value={selectedDepartment}
              onChange={(v: any) => setFilter("department_id", v?.value ?? null)}
              styles={selectStyles}
              menuPortalTarget={
                typeof document !== "undefined" ? document.body : undefined
              }
              menuShouldScrollIntoView={false}
            />
          )}
        </div>
      </div>

      <div className="w-full md:w-1/3 flex gap-4 items-center">
        <FaBuilding className="text-4xl text-primary" />
        <div className="flex flex-col w-full">
          <label className="text-xs text-secondary dark:text-zinc-400">
            Filial
          </label>
          {branches.length === 0 ? (
            <div className="h-10 w-full rounded-md border border-[#dee2e6] bg-[#f8f9fa] dark:bg-zinc-900 animate-pulse" />
          ) : (
            <Select
              options={branchOptions}
              value={selectedBranch}
              onChange={(v: any) => setFilter("branch_id", v?.value ?? null)}
              styles={selectStyles}
              menuPortalTarget={
                typeof document !== "undefined" ? document.body : undefined
              }
              menuShouldScrollIntoView={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};