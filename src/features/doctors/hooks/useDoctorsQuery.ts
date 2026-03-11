import { fetchDoctors } from "@/services/doctorService";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

type DoctorsFilters = {
  page: number;
  department_id?: string | null;
  branch_id?: string | null;
  name?: string;
};

export const useDoctorsQuery = (filters: DoctorsFilters) => {
  const { page, department_id, branch_id, name } = filters;

  return useQuery({
    queryKey: ["doctors", page, department_id ?? null, branch_id ?? null, name ?? ""],
    queryFn: () => fetchDoctors(filters),
    placeholderData: keepPreviousData,
  });
};