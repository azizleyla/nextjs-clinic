import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import DoctorsList from "./DoctorsList";
import { fetchDoctors } from "@/services/doctorService";
import { fetchBranches, fetchDepartments } from "@/services/departmentService";

type DoctorsSearchParams = {
  page?: string;
  name?: string;
  department_id?: string;
  branch_id?: string;
};

export default async function DoctorsPageContent({
  searchParams,
}: {
  searchParams: Promise<DoctorsSearchParams>;
}) {
  const queryClient = new QueryClient();
  const params = await searchParams; // URL-dəki filtrləri serverdə oxuyuruq

  const filters = {
    page: Number(params.page) || 1,
    department_id: params.department_id ?? null,
    branch_id: params.branch_id ?? null,
    name: params.name || "",
  };

  // Bütün vacib sorğuları serverdə paralel başladırıq
  await Promise.all([
    queryClient.prefetchQuery({
      // useDoctorsQuery ilə eyni queryKey forması, əks halda client-side hydration baş tutmur
      queryKey: ["doctors", filters.page, filters.department_id, filters.branch_id, filters.name],
      queryFn: () => fetchDoctors(filters),
    }),
    queryClient.prefetchQuery({ queryKey: ["departments"], queryFn: fetchDepartments }),
    queryClient.prefetchQuery({ queryKey: ["branches"], queryFn: fetchBranches }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DoctorsList />
    </HydrationBoundary>
  );
}