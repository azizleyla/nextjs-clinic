import React from "react";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { fetchDepartments } from "@/services/departmentService";
import DepartmentList from "./DepartmentList";

type DepartmensProps = {
  isLoadMore?: boolean;
};

export default async function Departments({
  isLoadMore = false,
}: DepartmensProps) {
  const departments = await fetchDepartments().catch(() => []);

  return (
    <section>
      <div className="container">
        <SectionTitle title="Şöbələr" />
        <DepartmentList isLoadMore={isLoadMore} departments={departments} />
      </div>
    </section>
  );
}
