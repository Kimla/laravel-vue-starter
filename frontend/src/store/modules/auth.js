import router from '@/router';
import AuthService from '@/services/AuthService';

export const namespaced = true;

export const state = {
    user: null,
    token: window.localStorage.getItem('token'),
    loading: false,
    error: null
};

export const mutations = {
    SET_USER (state, user) {
        state.user = user;
    },

    CLEAR_USER () {
        window.localStorage.clear();
        router.push('/login');
    },

    SET_TOKEN (state, token) {
        state.token = token;
        window.localStorage.setItem('token', token);
    },

    SET_LOADING (state, loading) {
        state.loading = loading;
    },

    SET_MESSAGE (state, message) {
        state.message = message;
    },

    SET_ERROR (state, error) {
        state.error = error;
    }
};

export const actions = {
    login ({ state, commit }, payload) {
        if (state.loading) {
            return;
        }

        commit('SET_LOADING', true);

        return AuthService.login(payload)
            .then(response => {
                commit('SET_TOKEN', response.data.token);
                commit('SET_USER', response.data.user);
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },

    logout ({ commit }) {
        return AuthService.logout()
            .then(() => {
                commit('CLEAR_USER');
            })
            .catch(() => {
                commit('CLEAR_USER');
            });
    },

    register ({ commit }, payload) {
        if (state.loading) {
            return;
        }

        commit('SET_LOADING', true);

        return AuthService.register(payload)
            .then(response => {
                commit('SET_TOKEN', response.data.token);
                commit('SET_USER', response.data.user);
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },

    forgotPassword ({ state, commit }, payload) {
        if (state.loading) {
            return;
        }

        commit('SET_LOADING', true);

        return AuthService.forgotPassword(payload)
            .then(() => {
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    },

    resetPassword ({ state, commit }, payload) {
        if (state.loading) {
            return;
        }

        commit('SET_LOADING', true);

        return AuthService.resetPassword(payload)
            .then(() => {
                router.push('/login');
                commit('SET_LOADING', false);
            })
            .catch(error => {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.data ? error.data.message : error);
            });
    }
};

export const getters = {
    authUser: state => {
        return state.user;
    },

    error: state => {
        return state.error;
    },

    loading: state => {
        return state.loading;
    },

    loggedIn: state => {
        return !!state.token;
    }
};
