import { apiClient } from "@/core/api/apiClient";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";

export async function DoctorsSectionWrapper() {
  const data = await apiClient.get("/api/doctors");

  return <DoctorsSection doctors={data} />;
}

export default DoctorsSectionWrapper;
