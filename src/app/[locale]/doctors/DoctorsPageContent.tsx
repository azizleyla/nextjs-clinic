import DoctorsList from "./DoctorsList";
import { apiClient } from "@/core/api/apiClient";
import type { Doctor } from "@/features/doctors/types";

type DoctorsApiResponse = {
  data: Doctor[];
  total: number;
  total_pages: number;
  current_page: number;
  per_page: number;
};

const PER_PAGE = 6;

type DoctorsPageContentProps = {
  searchParams?: { page?: string };
};

export default async function DoctorsPageContent({
  searchParams,
}: DoctorsPageContentProps) {
  const page = Math.max(1, parseInt(searchParams?.page || "1", 10) || 1);
  let doctors: Doctor[] = [];

  const data = (await apiClient.get(
    `/api/doctors?page=${page}&per_page=${PER_PAGE}`,
  )) as DoctorsApiResponse | undefined;

  doctors = data?.data ?? [];

  return <DoctorsList doctors={doctors} />;
}
