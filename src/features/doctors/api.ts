import { apiClient, type BackendListResponse } from "@/core/api/apiClient";
import type { Doctor } from "./types";

export async function fetchAllDoctors(
  locale: string,
  limit?: number,
  page?: number,
) {
  const params = new URLSearchParams();
  params.set("status", "active,on_leave");
  if (page) params.set("page", String(page));
  if (limit) params.set("limit", String(limit));

  const url = `/doctors?${params.toString()}`;
  const res = await apiClient.get<BackendListResponse<Doctor>>(url);

  const { totalPages, currentPage, totalElements } = res;

  return {
    data: res.data,
    totalPages,
    currentPage,
    totalElements,
  };
}
