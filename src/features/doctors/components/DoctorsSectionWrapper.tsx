import { apiClient } from "@/core/api/apiClient";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import type { Doctor } from "../types";

type DoctorsApiResponse = { data: Doctor[] };

export async function DoctorsSectionWrapper() {
  const res = (await apiClient.get("/api/doctors?page=1&per_page=12")) as
    | DoctorsApiResponse
    | undefined;

  return <DoctorsSection doctors={res?.data ?? []} />;
}

export default DoctorsSectionWrapper;
