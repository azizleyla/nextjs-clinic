import React, { Suspense } from "react";
import DoctorsList from "./DoctorsList";
import { Banner } from "@/components";
import { apiClient } from "@/lib/apiClient";
import CardSkeleton from "@/components/ui/shared/CardSkeleton";

export default async function DoctorsPageContent() {
  const doctors = await apiClient.get("/api/doctors");
  return <DoctorsList doctors={doctors} />;
}
