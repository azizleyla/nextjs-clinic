import { apiClient } from "@/core/api/apiClient";

export type Department = {
  id: number;
  title?: Record<string, string> | string;
};

export type Branch = {
  id: number;
  short_name?: string;
  name?: string;
  address?: string;
  phone?: string[];
};

export const fetchDepartments = async () => {
  return await apiClient.get<Department[]>("/api/departments");
};

export const fetchBranches = async () => {
  return await apiClient.get<Branch[]>("/api/branches");
};

