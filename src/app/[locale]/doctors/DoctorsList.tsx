 "use client";

import { DoctorItem, Pagination } from "@/components";
import Loading from "../../loading";
import { useFilters } from "@/utils/hooks/useFilters";
import { useDebounce } from "@/utils/hooks/useDebounce";
import { useDoctorsQuery } from "@/features/doctors/hooks/useDoctorsQuery";
import { useDepartmentsQuery } from "@/features/departments/hooks/useDepartmentsQuery";
import { useBranchesQuery } from "@/features/branches/hooks/useBranchesQuery";
import { DoctorFilters } from "./DoctorsFilters";

export default function DoctorsList() {
  const { filters, setFilter } = useFilters();
  const debouncedSearch = useDebounce(filters.searchQuery, 400);

  const queryParams = {
    page: filters.page,
    department_id: filters.departmentId,
    branch_id: filters.branchId,
    name: debouncedSearch,
  };

  const { data, isLoading } = useDoctorsQuery(queryParams);
  const { data: departments = [], isLoading: depsLoading } = useDepartmentsQuery();
  const { data: branches = [], isLoading: branchesLoading } = useBranchesQuery();

  const filtersLoading = depsLoading || branchesLoading;
  const doctors = data?.data ?? [];
  const totalPages = data?.total_pages ?? 1;
  const safePage = Math.max(1, Math.min(filters.page, totalPages || 1));

  return (
    <div className="container">
      <DoctorFilters
        filters={filters}
        setFilter={setFilter}
        departments={departments}
        branches={branches}
        filtersLoading={filtersLoading}
      />

      <section>
        {isLoading ? (
          <Loading />
        ) : doctors.length === 0 ? (
          <p className="text-center text-secondary dark:text-zinc-400 py-10">
            Axtarışa uyğun həkim tapılmadı.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm-custom:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <DoctorItem key={doctor.id} doctor={doctor} index={index} />
              ))}
            </div>
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              basePath="/doctors"
              ariaLabel="Həkim səhifələri"
            />
          </>
        )}
      </section>
    </div>
  );
}

