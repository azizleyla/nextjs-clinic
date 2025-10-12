import { DoctorsSection } from "@/components";
import { apiClient } from "@/lib/apiClient";
import React from "react";

export async function DoctorsSectionWrapper() {
  const doctors = await apiClient.get("api/doctors");

  return <DoctorsSection doctors={doctors} />;
}

export default DoctorsSectionWrapper;
