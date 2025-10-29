import { DoctorsSection } from "@/components";
import { apiClient } from "@/lib/apiClient";
import { doctors } from "@/utils/constants/doctors";
import React, { Suspense } from "react";

export async function DoctorsSectionWrapper() {
  const data = await apiClient.get("/api/doctors");

  return <DoctorsSection doctors={data} />;
}

export default DoctorsSectionWrapper;
