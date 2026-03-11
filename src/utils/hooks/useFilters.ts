import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const departmentId = searchParams.get("department_id");
  const branchId = searchParams.get("branch_id");
  const searchQuery = searchParams.get("name") || "";

  const setFilter = useCallback((name: string, value: any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "null") params.set(name, String(value));
    else params.delete(name);

    if (name !== "page") params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [pathname, router, searchParams]);

  return { filters: { page, departmentId, branchId, searchQuery }, setFilter };
};