import DoctorsList from "./DoctorsList";
import { apiClient } from "@/core/api/apiClient";
import type { Doctor } from "@/features/doctors/types";

export default async function DoctorsPageContent() {
  const doctors = (await apiClient.get("/api/doctors")) as Doctor[] | undefined;
  return <DoctorsList doctors={doctors ?? []} />;
}
