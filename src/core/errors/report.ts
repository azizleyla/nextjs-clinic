import { normalizeError } from "./normalize";


export function reportError(error: unknown, context?: Record<string, unknown>): void {
  const normalized = normalizeError(error);

  if (process.env.NODE_ENV === "development") {
    console.error("[reportError]", normalized.message, normalized.code, context ?? "");
  }

}
