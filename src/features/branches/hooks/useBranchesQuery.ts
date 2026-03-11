import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "@/services/departmentService";

export const useBranchesQuery = () => {
  return useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });
};

