import { supabase } from "@/core/db/supabaseClient";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import type { Doctor } from "../types";

const HOME_DOCTORS_LIMIT = 12;

export async function DoctorsSectionWrapper() {
  let doctors: Doctor[] = [];
  try {
    const { data, error } = await supabase
      .from("doctors")
      .select("*")
      .limit(HOME_DOCTORS_LIMIT);
    if (!error) doctors = (data as Doctor[]) ?? [];
  } catch {
    doctors = [];
  }
  return <DoctorsSection doctors={doctors} />;
}

export default DoctorsSectionWrapper;
