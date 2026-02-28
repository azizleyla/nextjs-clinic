import type { NormalizedError } from "./types";
import { ApiError } from "./types";

/**
 * Normalize any thrown value to a consistent shape.
 * Used by API client and Error Boundary so we always have message + optional code.
 */
export function normalizeError(error: unknown): NormalizedError {
  if (error instanceof ApiError) {
    return { message: error.message, code: error.code };
  }
  if (error instanceof Error) {
    const digest = "digest" in error ? String((error as Error & { digest?: string }).digest) : undefined;
    return { message: error.message, digest };
  }
  if (typeof error === "object" && error !== null && "message" in error && typeof (error as { message: unknown }).message === "string") {
    const code = "status" in error ? Number((error as { status: unknown }).status) : undefined;
    return { message: (error as { message: string }).message, code };
  }
  return { message: "Gözlənilməz xəta baş verdi" };
}
