import Vue from 'vue';
import axios from 'axios';
import store from '../store';

export const apiClient = axios.create({
    baseURL: '/api',
    withCredentials: true // required to handle the CSRF token
});

/*
 * Add a request interceptor
 @param config
*/
apiClient.interceptors.request.use(
    function (config) {
        const token = window.localStorage.getItem('token');

        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error.response);
    }
);

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
    response => {
        if (response?.data?.message) {
            Vue.toasted.success(response.data.message);
        }

        return response;
    },
    function (error) {
        if (error?.response?.data?.message) {
            Vue.toasted.error(error.response.data.message);
        } else {
            Vue.toasted.error('Something went wrong, try again later');
        }

        if (error.response.status === 401) {
            store.dispatch('auth/logout');
        }

        return Promise.reject(error.response);
    }
);
