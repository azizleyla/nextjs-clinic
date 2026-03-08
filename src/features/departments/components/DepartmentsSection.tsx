import React from "react";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { apiClient } from "@/core/api/apiClient";
import DepartmentList from "./DepartmentList";

type DepartmensProps = {
  isLoadMore?: boolean;
};

export default async function Departments({ isLoadMore = false }: DepartmensProps) {
  let list: unknown[] = [];
  try {
    const departments = await apiClient.get("/api/departments");
    list = Array.isArray(departments) ? departments : [];
  } catch {
    list = [];
  }
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
