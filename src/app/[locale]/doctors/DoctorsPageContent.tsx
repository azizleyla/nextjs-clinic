// app/doctors/page.tsx (Server Component)
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import DoctorsList from "./DoctorsList";
import { fetchDoctors } from "@/services/doctorService";
import { fetchBranches, fetchDepartments } from "@/services/departmentService";

export default async function Page({ searchParams }: { searchParams: any }) {
  const queryClient = new QueryClient();
  const params = await searchParams; // URL-dəki filtrləri serverdə oxuyuruq

  // Bütün vacib sorğuları serverdə paralel başladırıq
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["doctors", { 
        page: Number(params.page) || 1, 
        name: params.name || "", 
        department_id: params.department_id || null, 
        branch_id: params.branch_id || null 
      }],
      queryFn: () => fetchDoctors(params),
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