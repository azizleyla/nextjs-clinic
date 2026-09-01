import { apiClient, type BackendListResponse } from "@/core/api/apiClient";

/** Lokalizə olunmuş mətn: ya {az,en,ru} obyekti, ya da düz string (köhnə data). */
export type LocalizedText = Record<string, string> | string;

export type Department = {
  id: number;
  title: LocalizedText;
  desc?: LocalizedText | null;
  content?: LocalizedText | null;
  icon_name?: string | null;
  img_url?: string | null;
};

export type Branch = {
  id: number;
  short_name?: string;
  name?: string;
  address?: string;
  phone?: string[];
};

/**
 * Lokalizə olunmuş mətni seç.
 * - `title` json sütunudur → {az,en,ru} obyekti.
 * - `desc`/`content` text sütunlarıdır → adətən düz string, lakin köhnə qeydlərdə
 *   səhvən `{"az":"..."}` JSON string saxlanmış ola bilər; onu da açırıq.
 */
export const pickLocalizedText = (
  value: LocalizedText | null | undefined,
  locale: string,
): string => {
  if (value == null) return "";
  if (typeof value === "object") {
    return value[locale] || value["az"] || "";
  }
  const str = String(value).trim();
  if (str.startsWith("{") && str.endsWith("}")) {
    try {
      const parsed = JSON.parse(str);
      if (parsed && typeof parsed === "object") {
        return parsed[locale] || parsed["az"] || "";
      }
    } catch {
      /* düz mətn idi */
    }
  }
  return String(value);
};

export const fetchDepartments = async (): Promise<Department[]> => {
  const res = await apiClient.get<BackendListResponse<Department>>(
    "/departments",
  );
  return res.data ?? [];
};

export const fetchBranches = async (): Promise<Branch[]> => {
  const res = await apiClient.get<BackendListResponse<Branch>>("/branches");
  return res.data ?? [];
};

