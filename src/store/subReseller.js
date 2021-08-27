import { getAll } from "@/api/crud";

export default {
  state: {
    subReselers: [],
    isLoading: false,
    error: null,
  },

  mutations: {
    SET_SUBRESELLERS_START(state, payload) {
      state.isLoading = true;
      state.error = null;
    },

    SET_SUBRESELLERS_SUCCESS(state, payload) {
      state.isLoading = false;
      console.log(payload, "oay");
      state.subReselers = payload;
    },

    SET_SUBRESELLERS_FAILURE(state, payload) {
      state.isLoading = false;
      state.error = payload;
    },
  },
  actions: {
    GET_SUB_RESELLERS({ commit }) {
      commit("SET_SUBRESELLERS_START");
      return new Promise((resolve, reject) => {
        getAll("/reseller/sub")
          .then((response) => {
            if (!response.data.error) {
              commit("SET_SUBRESELLERS_SUCCESS", response.data.message.rows);
            } else {
              commit("SET_SUBRESELLERS_FAILURE", response.data.message);
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

    getSubResellers(state) {
      console.log(state.subReselers);
      return state.subReselers;
    },
  },
  namespaced: true,
};
