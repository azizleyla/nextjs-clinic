import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import type { Doctor } from "../types";
import { fetchAllDoctors } from "../api";

export async function DoctorsSectionWrapper({ locale = "az", limit = 4 }) {
  const { data } = await fetchAllDoctors(locale, limit).catch(() => ({
    data: [] as Doctor[],
    totalPages: 0,
    currentPage: 1,
    totalElements: 0,
  }));
  return <DoctorsSection doctors={data} />;
}

export default DoctorsSectionWrapper;
