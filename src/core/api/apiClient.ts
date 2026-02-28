import { ApiError, reportError } from "@/core/errors";

const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_API_BASE_URL;

type RequestOptions = RequestInit & {
  headers?: HeadersInit;
};

async function getErrorMessage(res: Response): Promise<string> {
  const text = await res.text();
  try {
    const body = JSON.parse(text) as { message?: string; error?: string };
    return (body.message ?? body.error ?? text) || `HTTP ${res.status}`;
  } catch {
    return text || `HTTP ${res.status}`;
  }
}

export const apiClient = {
  baseUrl: API_BASE_URL as string,

  async request<T = unknown>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

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
