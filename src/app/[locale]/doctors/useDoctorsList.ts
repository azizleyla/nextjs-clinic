"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { apiClient } from "@/core/api/apiClient";
import { reportError } from "@/core/errors";
import { createSelectOptions } from "@/utils";
import { useLocale } from "next-intl";
import type { Doctor } from "@/features/doctors/types";
import { useDoctorFilters } from "./useDoctorFilters";

export type SelectOption = { value: number | null; label: string };

type Department = { id: number; title?: Record<string, string> | string };
type Branch = { id: number; short_name?: string };

type DoctorsApiResponse = {
  data: Doctor[];
  total: number;
  total_pages: number;
  current_page: number;
  per_page: number;
};

type UseDoctorsListArgs = {
  doctors: Doctor[];
};

const PER_PAGE = 6;

export const DEFAULT_DEP: SelectOption = { value: null, label: "Şöbələr" };
export const DEFAULT_BRANCH: SelectOption = { value: null, label: "Filiallar" };

export function useDoctorsList({ doctors }: UseDoctorsListArgs) {
  const [allDoctors, setAllDoctors] = useState<Doctor[]>(doctors ?? []);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [filtersLoading, setFiltersLoading] = useState(true);
  const isInitialFetch = useRef(true);
  const locale = useLocale();

  const { filters, setFilter } = useDoctorFilters();
  const { page, departmentId, branchId, searchQuery } = filters;
  const currentPage = Math.max(1, page || 1);

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

  const fetchDoctors = useCallback(async () => {
    const isFirst = isInitialFetch.current;
    if (isFirst) isInitialFetch.current = false;
    else setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(currentPage));
      params.set("per_page", String(PER_PAGE));
      if (departmentId) params.set("department_id", String(departmentId));
      if (branchId) params.set("branch_id", String(branchId));
      if (searchQuery) params.set("name", searchQuery);
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
  }, [departmentId, branchId, searchQuery, currentPage]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

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

  const selectedDep: SelectOption =
    departmentsOptions.find((opt) => String(opt.value) === String(departmentId)) ||
    DEFAULT_DEP;

  const selectedBranch: SelectOption =
    branchesOptions.find((opt) => String(opt.value) === String(branchId)) ||
    DEFAULT_BRANCH;

  const handleDepChange = (v: SelectOption | null) =>
    setFilter("department_id", v?.value ?? null);
  const handleBranchChange = (v: SelectOption | null) =>
    setFilter("branch_id", v?.value ?? null);

  return {
    // data
    doctorsToShow,
    totalPages,
    safePage,
    isPageOutOfRange,
    isLoading,
    filtersLoading,
    searchQuery,
    selectedDep,
    selectedBranch,
    departmentsOptions,
    branchesOptions,
    handleDepChange,
    handleBranchChange,
    filters,
    setFilter,
    departments,
    branches,
  };
}

