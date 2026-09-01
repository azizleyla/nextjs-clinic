import { apiClient, type BackendListResponse } from "@/core/api/apiClient";
import type { HeroSlide } from "./types";

/**
 * Yalnız aktiv hero slaydları, display order (order_index) üzrə sıralanmış.
 * Backend artıq order_index ilə sıralayır; client tərəfdə də müdafiə üçün sort edirik.
 */
export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  const res = await apiClient.get<BackendListResponse<HeroSlide>>(
    "/hero-slides?is_active=true",
  );

  const slides = res.data ?? [];
  return [...slides].sort(
    (a, b) => (a.order_index ?? 0) - (b.order_index ?? 0),
  );
}
