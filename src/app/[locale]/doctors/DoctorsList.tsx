"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsBuildingFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { Button, DoctorItem } from "@/components";
import { apiClient } from "@/core/api/apiClient";
import { useDebounce } from "@/utils/hooks/useDebounce";
import useLoadMore from "@/utils/hooks/useLoadMore";
import { createSelectOptions } from "@/utils";
import Loading from "../../loading";
import type { Doctor } from "@/features/doctors/types";
import { useLocale } from "next-intl";

const Select = dynamic(() => import("react-select"), { ssr: false });

type SelectOption = { value: number | null; label: string };

type Department = { id: number; title?: Record<string, string> | string };
type Branch = { id: number; short_name?: string };

type DoctorsListProps = {
  doctors: Doctor[];
};

const INITIAL_PAGE_SIZE = 4;
const LOAD_MORE_STEP = 2;

const DEFAULT_DEP: SelectOption = { value: null, label: "Şöbələr" };
const DEFAULT_BRANCH: SelectOption = { value: null, label: "Filiallar" };

export default function DoctorsList({ doctors }: DoctorsListProps) {
  const [allDoctors, setAllDoctors] = useState<Doctor[]>(doctors ?? []);
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

  const { visibleCount, handleLoadMore, reset } = useLoadMore(
    INITIAL_PAGE_SIZE,
    LOAD_MORE_STEP,
  );

  useEffect(() => {
    async function fetchFilters() {
      try {
        const [deps, brs] = await Promise.all([
          apiClient.get<Department[]>("/api/departments"),
          apiClient.get<Branch[]>("/api/branches"),
        ]);
        setDepartments(deps ?? []);
        setBranches(brs ?? []);
      } catch {
        // filters optional
      } finally {
        setFiltersLoading(false);
      }
    }
    fetchFilters();
  }, []);

  const locale = useLocale();

  const fetchDoctors = useCallback(async () => {
    const isFirst = isInitialFetch.current;
    if (isFirst) isInitialFetch.current = false;
    else setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedDep?.value != null)
        params.set("department_id", String(selectedDep.value));
      if (selectedBranch?.value != null)
        params.set("branch_id", String(selectedBranch.value));
      if (debouncedSearch) params.set("name", debouncedSearch);
      const res = await apiClient.get<Doctor[]>(
        `/api/doctors?${params.toString()}`,
      );
      setAllDoctors(res ?? []);
    } catch {
      setAllDoctors([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedDep?.value, selectedBranch?.value, debouncedSearch]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  useEffect(() => {
    reset();
  }, [selectedDep?.value, selectedBranch?.value, debouncedSearch, reset]);

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

  const showLoadMore = allDoctors.length > visibleCount && !isLoading;

  const selectStyles = {
    control: (base: Record<string, unknown>) => ({
      ...base,
      minHeight: 40,
      height: 40,
      borderRadius: 6,
      borderColor: "#dee2e6",
    }),
  };

  return (
    <div className="container">
      <div className="pt-7 lg:pt-10 ml-auto mr-auto gap-5 rounded-md -mt-16 bg-white pb-8 flex flex-col md:flex-row px-6 lg:px-16 justify-between shadow-custom-gray">
        <div className="w-full flex-none md:w-1/3">
          <form
            className="w-full lg:w-10/12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex gap-4 items-center">
              <FaUserDoctor className="text-4xl flex-shrink-0 text-primary" />
              <div className="flex flex-col w-full">
                <label className="text-secondary mb-1">Axtar</label>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full placeholder:text-[#212529] focus:outline-none font-semibold border-b border-[#ccd9f2] pb-3"
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
                <IoSearch className="text-secondary text-md" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex-none w-full md:w-1/3 min-h-[76px] flex flex-col justify-end">
          <div className="w-full lg:w-10/12 relative flex gap-4 items-center">
            <BsBuildingFill
              className="text-4xl text-primary flex-shrink-0"
              aria-hidden
            />
            <div className="flex w-full flex-col">
              <label className="text-[#344c5d] mb-1">Şöbə</label>
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
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-none w-full md:w-1/3 min-h-[76px] flex flex-col justify-end">
          <div className="w-full lg:w-10/12 relative flex gap-4 items-center">
            <BsBuildingFill
              className="text-4xl text-primary flex-shrink-0"
              aria-hidden
            />
            <div className="flex w-full flex-col">
              <label className="text-[#344c5d] mb-1">Filiallar</label>
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
        ) : (
          <div className="grid grid-cols-1 sm-custom:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDoctors.slice(0, visibleCount).map((doctor, index) => (
              <DoctorItem key={doctor.id} doctor={doctor} index={index} />
            ))}
          </div>
        )}

        {showLoadMore && (
          <div className="flex justify-center my-5">
            <Button
              label="Daha çox"
              variant="outline_primary"
              onClick={handleLoadMore}
            />
          </div>
        )}
      </section>
    </div>
  );
}
