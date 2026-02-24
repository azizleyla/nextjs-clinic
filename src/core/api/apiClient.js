
const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_API_BASE_URL;


export const apiClient = {
  baseUrl: API_BASE_URL,

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    console.log(url, 'url')

    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const res = await fetch(url, { ...defaultOptions, ...options });
    console.log(res)
    // JSON olaraq qaytarır
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  },

  get: (endpoint, options) =>
    apiClient.request(endpoint, { ...options, method: 'GET' }),

  post: (endpoint, data, options) =>
    apiClient.request(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),

  put: (endpoint, data, options) =>
    apiClient.request(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),

  delete: (endpoint, options) =>
    apiClient.request(endpoint, { ...options, method: 'DELETE' }),
};
