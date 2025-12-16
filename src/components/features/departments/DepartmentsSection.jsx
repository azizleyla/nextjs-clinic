import React, { Suspense } from "react";
import SectionTitle from "@/src/components/shared/title/SectionTitle";
import { apiClient } from "@/src/lib/apiClient";
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
