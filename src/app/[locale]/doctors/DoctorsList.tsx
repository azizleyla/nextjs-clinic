"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter, usePathname, notFound } from "next/navigation";
import { FaBuilding } from "react-icons/fa";
import { FaUserDoctor, FaMagnifyingGlass } from "react-icons/fa6";
import { DoctorItem, Pagination } from "@/components";
import { apiClient } from "@/core/api/apiClient";
import { reportError } from "@/core/errors";
import { useDebounce } from "@/utils/hooks/useDebounce";
import { createSelectOptions } from "@/utils";
import Loading from "../../loading";
import type { Doctor } from "@/features/doctors/types";
import { useLocale } from "next-intl";

const Select = dynamic(() => import("react-select"), { ssr: false });

type SelectOption = { value: number | null; label: string };

type Department = { id: number; title?: Record<string, string> | string };
type Branch = { id: number; short_name?: string };

type DoctorsApiResponse = {
  data: Doctor[];
  total: number;
  total_pages: number;
  current_page: number;
  per_page: number;
};

type DoctorsListProps = {
  doctors: Doctor[];
};

const PER_PAGE = 6;

const DEFAULT_DEP: SelectOption = { value: null, label: "Şöbələr" };
const DEFAULT_BRANCH: SelectOption = { value: null, label: "Filiallar" };

export default function DoctorsList({ doctors }: DoctorsListProps) {
  const [allDoctors, setAllDoctors] = useState<Doctor[]>(doctors ?? []);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDep, setSelectedDep] =
    useState<SelectOption>(DEFAULT_DEP);
  const [selectedBranch, setSelectedBranch] =
    useState<SelectOption>(DEFAULT_BRANCH);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const isInitialFetch = useRef(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pageParam = searchParams.get("page");
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const safePage = Math.min(currentPage, totalPages || 1);
  const isPageOutOfRange =
    currentPage > totalPages || currentPage < 1 || Number.isNaN(currentPage);
  const doctorsToShow = allDoctors ?? [];

  useEffect(() => {
    async function fetchFilters() {
      try {
        const [deps, brs] = await Promise.all([
          apiClient.get<Department[]>("/api/departments"),
          apiClient.get<Branch[]>("/api/branches"),
        ]);
        setDepartments(deps ?? []);
        setBranches(brs ?? []);
      } catch (err) {
        reportError(err, { context: "DoctorsList.fetchFilters" });
      } finally {
        setFiltersLoading(false);
      }
    }
    fetchFilters();
  }, []);

  const locale = useLocale();

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const fetchDoctors = useCallback(async () => {
    const isFirst = isInitialFetch.current;
    if (isFirst) isInitialFetch.current = false;
    else setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(currentPage));
      params.set("per_page", String(PER_PAGE));
      if (selectedDep?.value != null)
        params.set("department_id", String(selectedDep.value));
      if (selectedBranch?.value != null)
        params.set("branch_id", String(selectedBranch.value));
      if (debouncedSearch) params.set("name", debouncedSearch);
      const res = await apiClient.get<DoctorsApiResponse>(
        `/api/doctors?${params.toString()}`,
      );
      setAllDoctors(res.data ?? []);
      setTotalPages(res.total_pages ?? 1);
    } catch (err) {
      reportError(err, { context: "DoctorsList.fetchDoctors" });
      setAllDoctors([]);
      setTotalPages(1);
    } finally {
      setIsLoading(false);
    }
  }, [selectedDep?.value, selectedBranch?.value, debouncedSearch, currentPage]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    router.replace(`${pathname}?page=1`);
  }, [selectedDep?.value, selectedBranch?.value, debouncedSearch, pathname, router]);

  const branchesOptions = createSelectOptions(
    branches,
    DEFAULT_BRANCH.label,
    "short_name",
  ) as SelectOption[];

  const departmentsOptions = createSelectOptions(
    departments,
    DEFAULT_DEP.label,
    "title",
    locale,
  ) as SelectOption[];

  const handleDepChange = (v: SelectOption | null) =>
    setSelectedDep(v ?? DEFAULT_DEP);
  const handleBranchChange = (v: SelectOption | null) =>
    setSelectedBranch(v ?? DEFAULT_BRANCH);

  const selectStyles = {
    control: (base: Record<string, unknown>) => ({
      ...base,
      minHeight: 40,
      height: 40,
      borderRadius: 6,
      borderColor: isDark ? "#3f3f46" : "#dee2e6",
      backgroundColor: isDark ? "#09090b" : "#ffffff",
      boxShadow: "none",
      zIndex: 20,
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
    singleValue: (base: Record<string, unknown>) => ({
      ...base,
      color: isDark ? "#e5e5e5" : "#111827",
    }),
    placeholder: (base: Record<string, unknown>) => ({
      ...base,
      color: isDark ? "#9ca3af" : "#6b7280",
    }),
    option: (
      base: Record<string, unknown>,
      state: { isFocused: boolean; isSelected: boolean },
    ) => ({
      ...base,
      backgroundColor: state.isSelected
        ? isDark
          ? "#1d4ed8"
          : "#e0edff"
        : state.isFocused
          ? isDark
            ? "#18181b"
            : "#f3f4ff"
          : isDark
            ? "#09090b"
            : "#ffffff",
      color: isDark ? "#e5e5e5" : "#111827",
    }),
  };

  return (
    <div className="container">
      <div className="pt-7 lg:pt-10 ml-auto mr-auto gap-5 rounded-xl -mt-16 bg-white dark:bg-zinc-900/80 pb-8 flex flex-col md:flex-row px-6 lg:px-16 justify-between border border-slate-200/80 dark:border-zinc-800/80 backdrop-blur-sm">
        <div className="w-full flex-none md:w-1/3">
          <form
            className="w-full lg:w-10/12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex gap-4 items-center">
              <FaUserDoctor className="text-4xl flex-shrink-0 text-primary" aria-hidden />
              <div className="flex flex-col w-full">
                <label className="text-secondary dark:text-zinc-300 mb-1">
                  Axtar
                </label>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent placeholder:text-[#212529] dark:placeholder:text-zinc-500 focus:outline-none font-semibold border-b border-[#ccd9f2] dark:border-zinc-700 text-secondary dark:text-zinc-100 pb-3"
                  placeholder="Həkim adı"
                  type="search"
                  aria-label="Həkim adı ilə axtar"
                />
              </div>
              <button
                type="submit"
                className="absolute bottom-3 right-0"
                aria-label="Axtar"
              >
                <FaMagnifyingGlass className="text-secondary text-md" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex-none w-full md:w-1/3 min-h-[76px] flex flex-col justify-end">
          <div className="w-full lg:w-10/12 relative flex gap-4 items-center">
            <FaBuilding
              className="text-4xl text-primary flex-shrink-0"
              aria-hidden
            />
            <div className="flex w-full flex-col">
              <label className="text-[#344c5d] dark:text-zinc-300 mb-1">
                Şöbə
              </label>
              <div className="h-10 w-full">
                {filtersLoading ? (
                  <div
                    className="h-full w-full rounded-md border border-[#dee2e6] bg-[#f8f9fa] animate-pulse"
                    aria-hidden
                  />
                ) : (
                  <Select
                    placeholder="Seçin"
                    options={departmentsOptions}
                    value={selectedDep}
                    onChange={handleDepChange}
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
        </div>

        <div className="flex-none w-full md:w-1/3 min-h-[76px] flex flex-col justify-end">
          <div className="w-full lg:w-10/12 relative flex gap-4 items-center">
            <FaBuilding
              className="text-4xl text-primary flex-shrink-0"
              aria-hidden
            />
            <div className="flex w-full flex-col">
              <label className="text-[#344c5d] dark:text-zinc-300 mb-1">
                Filiallar
              </label>
              <div className="h-10 w-full">
                {filtersLoading ? (
                  <div
                    className="h-full w-full rounded-md border border-[#dee2e6] bg-[#f8f9fa] animate-pulse"
                    aria-hidden
                  />
                ) : (
                  <Select
                    placeholder="Seçin"
                    options={branchesOptions}
                    value={selectedBranch}
                    onChange={handleBranchChange}
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
        </div>
      </div>

      <section>
        {isLoading ? (
          <Loading />
        ) : isPageOutOfRange ? (
          notFound()
        ) : (
          <>
            <div className="grid grid-cols-1 sm-custom:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctorsToShow.map((doctor, index) => (
                <DoctorItem key={doctor.id} doctor={doctor} index={index} />
              ))}
            </div>
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              basePath="/doctors"
              ariaLabel="Həkim səhifələri"
            />
          </>
        )}
      </section>
    </div>
  );
}
