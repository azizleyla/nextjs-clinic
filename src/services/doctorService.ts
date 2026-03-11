import { apiClient } from "@/core/api/apiClient";

export const fetchDoctors = async ({ page, department_id, branch_id, name }: any) => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("per_page", "6");
    if (department_id) params.set("department_id", String(department_id));
    if (branch_id) params.set("branch_id", String(branch_id));
    if (name) params.set("name", name);
    console.log(params.toString(),'params')
  
    return await apiClient.get<any>(`/api/doctors?${params.toString()}`);
  };