import React, { Suspense } from "react";
import DoctorsList from "./DoctorsList";
import { Banner } from "@/components";
import { apiClient } from "@/core/api/apiClient";
import CardSkeleton from "@/shared/ui/skeleton/CardSkeleton";

export default async function DoctorsPageContent() {
  const doctors = await apiClient.get("/api/doctors");
  return <DoctorsList doctors={doctors} />;
}
