import axios from 'axios'

export default {
    state: {
        isSubmitting: false,
        isRegistered: false,
        user: null,
        error: null,
    },
    mutations: {
        SET_REGISTER_START(state) {
            this.isSubmitting = true;
            this.error = null;
            state.isRegistered = false;
        },

        SET_REGISTER_SUCCESS(state, payload) {
            state.isSubmitting = false;
            state.isRegistered = true;
            state.user = payload;
        },


        SET_REGISTER_ERROR(state, payload) {
            state.isSubmitting = false;
            state.error = payload;
        }
    },
    actions: {
        REGISTER_ACTION({ commit }, payload) {
            commit('SET_REGISTER_START');
            return new Promise((resolve, reject) => {
                axios.post('/reseller', payload)
                    .then(response => {
                        commit('SET_REGISTER_SUCCESS', response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        commit('SET_REGISTER_ERROR', error.response.data);
                        reject(error);
                    });
            });
        }
    },
    getters: {},
    namespaced: true
}