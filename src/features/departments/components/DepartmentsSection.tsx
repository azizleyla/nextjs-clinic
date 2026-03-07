import React, { Suspense } from "react";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { apiClient } from "@/core/api/apiClient";
import DepartmentList from "./DepartmentList";

type DepartmensProps = {
  isLoadMore?: boolean;
};

export default async function Departments({ isLoadMore = false }:DepartmensProps) {
  let departments: Awaited<ReturnType<typeof apiClient.get>> = [];
  try {
    departments = await apiClient.get("/api/departments");
  } catch {
    departments = [];
  }
  const list = Array.isArray(departments) ? departments : [];

  return (
    <section>
      <div className="container">
        <SectionTitle title="Şöbələr" />
        <DepartmentList
          isLoadMore={isLoadMore}
          departments={list}
        />
      </div>
    </section>
  );
}
