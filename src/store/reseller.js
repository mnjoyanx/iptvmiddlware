import { getAll } from "@/api/crud";

export default {
  state: {
    resllerUsers: [],
    isLoading: false,
    error: null,
  },
  mutations: {
    SET_RESELLERUSERS_START(state, payload) {
      state.isLoading = true;
      state.error = null;
    },

    SET_RESELLERUSERS_SUCCESS(state, payload) {
      state.isLoading = false;
      state.resllerUsers = payload;
    },

    SET_RESELLERUSERS_FAILURE(state, payload) {
      state.isLoading = false;
      state.error = payload;
    },
  },
  actions: {
    GET_RESELLERUSERS({ commit }) {
      commit("SET_RESELLERUSERS_START");
      return new Promise((resolve, reject) => {
        getAll("/reseller/users")
          .then((response) => {
            if (!response.data.error) {
              commit("SET_RESELLERUSERS_SUCCESS", response.data);
            } else {
              commit("SET_RESELLERUSERS_FAILURE", response.data.message);
            }
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },

    getResellerUsers(state) {
      return state.resllerUsers;
    },
  },
  namespaced: true,
};
