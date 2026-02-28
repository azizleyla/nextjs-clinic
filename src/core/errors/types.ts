/**
 * Normalized error shape for UI and logging.
 * API and client errors are converted to this so we handle them in one way.
 */
export type NormalizedError = {
  message: string;
  code?: number;
  digest?: string;
};

/**
 * Thrown by apiClient when API returns non-OK.
 * Components can check `error instanceof ApiError` and use error.message for UI.
 */
export class ApiError extends Error {
  code: number;
  constructor(message: string, code: number = 0) {
    super(message);
    this.name = "ApiError";
    this.code = code;
  }
}
