import { apiClient } from "@/core/api/apiClient";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import type { Doctor } from "../types";

export async function DoctorsSectionWrapper() {
  const data = (await apiClient.get("/api/doctors")) as Doctor[] | undefined;

  return <DoctorsSection doctors={data ?? []} />;
}

export default DoctorsSectionWrapper;
