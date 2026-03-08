import React from "react";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { supabase } from "@/core/db/supabaseClient";
import DepartmentList from "./DepartmentList";

type DepartmensProps = {
  isLoadMore?: boolean;
};

export default async function Departments({ isLoadMore = false }: DepartmensProps) {
  let list: unknown[] = [];
  try {
    const { data, error } = await supabase.from("departments").select("*");
    if (!error) list = data ?? [];
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
