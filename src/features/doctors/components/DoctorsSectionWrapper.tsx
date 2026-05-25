import { apiClient } from "@/core/api/apiClient";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import type { Doctor } from "../types";
import { fetchAllDoctors } from "../api";

type DoctorsApiResponse = { data: Doctor[] };

export async function DoctorsSectionWrapper({ locale = "az", limit = 4 }) {
  const doctors =
    (await fetchAllDoctors(locale, limit).catch(() => []));
  return <DoctorsSection doctors={doctors?.data} />;
}

export default DoctorsSectionWrapper;
