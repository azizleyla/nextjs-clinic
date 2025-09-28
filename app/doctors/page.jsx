import Banner from "@/components/ui/components/banner";
import React from "react";
import DoctorsList from "./DoctorsList";
import { doctors } from "@/constants/doctors";

async function getDoctors() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch doctors");
  return res.json();
}

export default async function DoctorsPage() {
  //   const doctors = await getDoctors();

  return (
    <div>
      <Banner title="Həkimlərimiz" />
      <DoctorsList doctors={doctors} />
    </div>
  );
}
