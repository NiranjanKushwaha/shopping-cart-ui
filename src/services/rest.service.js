import axios from 'axios';
const axiosInstance = axios.create({
    maxBodyLength: 1024 * 1024 * 8,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const restApiService = {
    get: async (url, optionalHeaders) => {
        try {

            const response = await axiosInstance.get(url, {
                headers: {
                    ...axiosInstance.defaults.headers,
                    ...optionalHeaders,
                },
            });
            return response;
        } catch (error) {
            return Promise.reject(error.response.data);
        }
    },

    post: async (url, payload, optionalHeaders) => {
        try {

            const response = await axiosInstance.post(url, payload, {
                headers: {
                    ...axiosInstance.defaults.headers,
                    ...optionalHeaders,
                },
            });
            return response;
        } catch (error) {
            return Promise.reject(error.response.data);
        }
    },

    put: async (url, payload, optionalHeaders) => {
        try {

            const response = await axiosInstance.put(url, payload, {
                headers: {
                    ...axiosInstance.defaults.headers,
                    ...optionalHeaders,
                },
            });
            return response;
        } catch (error) {
            return Promise.reject(error.response.data);
        }
    },

    patch: async (url, payload, optionalHeaders) => {
        try {

            const response = await axiosInstance.patch(url, payload, {
                headers: {
                    ...axiosInstance.defaults.headers,
                    ...optionalHeaders,
                },
            });
            return response;
        } catch (error) {
            return Promise.reject(error.response.data);
        }
    },

    delete: async (url, optionalHeaders) => {
        try {

            const response = await axiosInstance.delete(url, {
                headers: {
                    ...axiosInstance.defaults.headers,
                    ...optionalHeaders,
                },
            });
            return response;
        } catch (error) {
            return Promise.reject(error.response.data);
        }
    },

    getBaseUrl() {
        return process.env.REACT_APP_BASE_URL;
    },
};
