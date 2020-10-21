import * as API from './API.js';

export default {
    all () {
        return API.apiClient.get('/admin/users');
    },

    get (userId) {
        return API.apiClient.get(`/admin/users/${userId}`);
    },

    update (userId, payload) {
        return API.apiClient.put(`/admin/users/${userId}`, payload);
    }
};
