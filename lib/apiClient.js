import config from "./config";

export const apiClient = {
  baseUrl: config.apiBaseUrl,

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
