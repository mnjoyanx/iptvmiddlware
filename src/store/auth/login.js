import axios from "@/api/axios";

export default {
  state: {
    isSubmitting: false,
    isLoggedIn: false,
    error: null,
  },
  mutations: {
    SET_LOGIN_START(state) {
      this.isSubmitting = true;
      this.error = false;
      state.isLoggedIn = false;
    },

    SET_LOGIN_SUCCESS(state, payload) {
      state.isSubmitting = false;
      state.isLoggedIn = true;
    },

    SET_LOGIN_ERROR(state) {
      state.isSubmitting = false;
      state.error = true;
    },
  },
  actions: {
    LOGIN_ACTION({ commit }, payload) {
      commit("SET_LOGIN_START");
      return new Promise((resolve, reject) => {
        axios
          .post("/reseller/login", payload)
          .then((response) => {
            if (!response.data.error) {
              commit("SET_LOGIN_SUCCESS", response.data);
              localStorage.setItem("accessToken", response.data.message);
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
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  namespaced: true,
};
