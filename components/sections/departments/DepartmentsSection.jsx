import React from "react";
import SectionTitle from "@/components/ui/shared/title/SectionTitle";
import Link from "next/link";
import { apiClient } from "@/lib/apiClient";
import { PiBrain, PiHeartbeat, PiHospitalLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { supabase } from "@/lib/supabaseClient";

const iconsMap = {
  PiHeartbeat,
  PiHospitalLight,
  IoEyeOutline,
  PiBrain,
  FaUserDoctor,
};

export default async function Departments() {
  const departments = await apiClient.get("/api/departments");

  return (
    <section>
      <div className="container">
        <SectionTitle title="Xidmətlərimiz" />
        <div className="grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((department, index) => {
            const Icon = iconsMap[department.icon_name];
            return (
              <Link
                href={`/services/${department.id}`}
                key={department.id}
                className="flex md:hover:-translate-y-2 transition-all duration-300 shadow-custom-gray py-5 px-3 gap-3 flex-col items-center text-center cursor-pointer"
              >
                <Icon className="text-primary" fontSize="50px" />
                <h3 className="font-medium text-md">
                  {department?.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {department?.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
