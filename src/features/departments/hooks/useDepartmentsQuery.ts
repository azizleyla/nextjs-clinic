import { useQuery } from "@tanstack/react-query";
import { fetchDepartments } from "@/services/departmentService";

export const useDepartmentsQuery = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: fetchDepartments,
  });
};

