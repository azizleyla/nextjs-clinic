import config from './config';

export const apiClient = {
    baseUrl: config.apiBaseUrl,

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;

        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        };

        return fetch(url, { ...defaultOptions, ...options });
    },

    // Convenience methods
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

export default apiClient;