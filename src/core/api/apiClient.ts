import { ApiError, reportError } from "@/core/errors";

async function getApiBaseUrl(): Promise<string> {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  if (typeof window !== "undefined") return ""; // browser: same-origin
  try {
    const { headers } = await import("next/headers");
    const h = await headers();
    const host = h.get("x-forwarded-host") || h.get("host");
    if (host) return `https://${host}`;
  } catch {
    // ignore
  }
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : (process.env.NEXT_PUBLIC_API_BASE_URL || "");
}

type RequestOptions = RequestInit & {
  headers?: HeadersInit;
};

const MAX_MESSAGE_LENGTH = 200;
const LOOKS_LIKE_HTML = /^\s*<(!DOCTYPE|html|[\w-]+)/i;

async function getErrorMessage(res: Response): Promise<string> {
  const text = await res.text();
  try {
    const body = JSON.parse(text) as { message?: string; error?: string };
    const msg = body.message ?? body.error ?? text;
    return sanitizeMessage(msg, res.status);
  } catch {
    return sanitizeMessage(text, res.status);
  }
}

function sanitizeMessage(raw: string, status: number): string {
  if (!raw || typeof raw !== "string") return `HTTP ${status}`;
  const trimmed = raw.trim();
  if (LOOKS_LIKE_HTML.test(trimmed) || trimmed.length > MAX_MESSAGE_LENGTH) {
    return status === 404 ? "Məlumat tapılmadı" : `HTTP ${status}`;
  }
  return trimmed;
}

export const apiClient = {
  async request<T = unknown>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const baseUrl = await getApiBaseUrl();
    const url = `${baseUrl}${endpoint}`;

    const defaultOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string>),
      },
    };

    try {
      const res = await fetch(url, { ...defaultOptions, ...options });

      if (!res.ok) {
        const message = await getErrorMessage(res);
        const err = new ApiError(message, res.status);
        reportError(err, { endpoint, status: res.status });
        throw err;
      }

      return res.json() as Promise<T>;
    } catch (e) {
      if (e instanceof ApiError) throw e;
      reportError(e, { endpoint });
      throw e;
    }
  },

  get<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T> {
    return apiClient.request<T>(endpoint, { ...options, method: "GET" });
  },

  post<T = unknown>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return apiClient.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  put<T = unknown>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return apiClient.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  delete<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T> {
    return apiClient.request<T>(endpoint, { ...options, method: "DELETE" });
  },
};
