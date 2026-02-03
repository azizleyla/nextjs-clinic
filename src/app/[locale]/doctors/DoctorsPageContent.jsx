import React, { Suspense } from "react";
import DoctorsList from "./DoctorsList";
import { Banner } from "@/src/components";
import { apiClient } from "@/src/lib/apiClient";
import CardSkeleton from "@/src/components/shared/skeleton/CardSkeleton";

export default async function DoctorsPageContent() {
  const doctors = await apiClient.get("/api/doctors");
  return <DoctorsList doctors={doctors} />;
}
