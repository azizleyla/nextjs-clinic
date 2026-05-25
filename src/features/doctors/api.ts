import { apiClient } from "@/core/api/apiClient";

export async function fetchAllDoctors(
  locale: string,
  limit?: number,
  page?: number,
) {
  const params = new URLSearchParams();

  if (page) params.append("page", String(page));
  if (limit) params.append("limit", String(limit));

  const url = `/doctors?status=active,on_leave${params.toString() ? `?${params}` : ""}`;
  console.log(url, "url");
  const res = await apiClient.get(url, {
    backend: true,
  });

  const { totalPages, currentPage, totalElements } = res;

  return {
    data: res?.data,
    totalPages,
    currentPage,
    totalElements,
  };
}
