import React, { Suspense } from "react";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { apiClient } from "@/core/api/apiClient";
import DepartmentList from "./DepartmentList";

export default async function Departments({ isLoadMore = false }) {
  const departments = await apiClient.get("/api/departments");

  return (
    <section>
      <div className="container">
        <SectionTitle title="Şöbələr" />
        <DepartmentList
          isLoadMore={isLoadMore}
          departments={departments}
        />
      </div>
    </section>
  );
}
