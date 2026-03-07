import { apiClient } from "@/core/api/apiClient";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import type { Doctor } from "../types";

type DoctorsApiResponse = { data: Doctor[] };

export async function DoctorsSectionWrapper() {
  let doctors: Doctor[] = [];
  try {
    const res = (await apiClient.get("/api/doctors?page=1&per_page=12")) as
      | DoctorsApiResponse
      | undefined;
    doctors = res?.data ?? [];
  } catch {
    doctors = [];
  }
  return <DoctorsSection doctors={doctors} />;
}

export default DoctorsSectionWrapper;
