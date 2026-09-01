import { apiClient, type BackendListResponse } from "@/core/api/apiClient";
import type { Doctor } from "@/features/doctors/types";

export type DoctorsQueryParams = {
  page: number;
  department_id?: string | null;
  branch_id?: string | null;
  name?: string;
  limit?: number;
};

export type DoctorsListResult = {
  data: Doctor[];
  totalPages: number;
  currentPage: number;
  totalElements: number;
};

const DOCTORS_PER_PAGE = 6;

export const fetchDoctors = async ({
  page,
  department_id,
  branch_id,
  name,
  limit = DOCTORS_PER_PAGE,
}: DoctorsQueryParams): Promise<DoctorsListResult> => {
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("limit", String(limit));
  if (department_id) params.set("department_id", String(department_id));
  if (branch_id) params.set("branch_id", String(branch_id));
  if (name) params.set("name", name);

  const res = await apiClient.get<BackendListResponse<Doctor>>(
    `/doctors?${params.toString()}`,
  );

  return {
    data: res.data ?? [],
    totalPages: res.totalPages ?? 1,
    currentPage: res.currentPage ?? page,
    totalElements: res.totalElements ?? 0,
  };
};
