import { getOne } from "@/api/crud";

export default {
  state: {
    isLoading: false,
    isLoggedIn: false,
    user: {},
    error: null,
  },
  mutations: {
    SET_USER_START(state) {
      state.isLoading = true;
      state.error = null;
      state.isLoggedIn = false;
    },

    SET_USER_SUCCESS(state, payload) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload;
      state.error = null;
    },

    SET_USER_FAILURE(state) {
      state.isLoading = false;
      state.error = "Error";
    },
  },
  actions: {
    GET_USER({ commit }) {
      commit("SET_USER_START");
      return new Promise((resolve, reject) => {
        getOne("/reseller/me")
          .then((response) => {
            console.log(response.data, "data me");
            commit("SET_USER_SUCCESS", response.data.message);
            resolve(response);
          })
          .catch(() => {
            //   commit('SET_USER_FAILURE');
            reject();
          });
      });
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },

    isLoading(state) {
      return state.isLoading;
    },

    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  namespaced: true,
};
