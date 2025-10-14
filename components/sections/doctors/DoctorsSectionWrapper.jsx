import { DoctorsSection } from "@/components";
import { apiClient } from "@/lib/apiClient";
import { supabase } from "@/lib/supabaseClient";
import { doctors } from "@/utils/constants/doctors";
import React from "react";

export async function DoctorsSectionWrapper() {
  const { data: doctors } = await supabase.from("doctors").select("*");

  return <DoctorsSection doctors={doctors} />;
}

export default DoctorsSectionWrapper;
