import { DoctorsSection } from "@/src/components";
import { apiClient } from "@/src/lib/apiClient";
import { doctors } from "@/src/utils/constants/doctors";
import React, { Suspense } from "react";

export async function DoctorsSectionWrapper() {
  const data = await apiClient.get("/api/doctors");

  return <DoctorsSection doctors={data} />;
}

export default DoctorsSectionWrapper;
