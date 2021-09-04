import axios from "@/api/axios";

export default {
  state: {
    userInfo: {},
    isLoading: false,
  },
  mutations: {
    SET_USERINFO_START(state) {
      state.isLoading = true;
    },

    SET_USERINFO_SUCCESS(state, userInfo) {
      state.userInfo = userInfo;
      console.log(state.userInfo, "inos");
      state.isLoading = false;
    },

    SET_USERINFO_FAILURE(state) {
      state.isLoading = false;
    },
  },

  actions: {
    GET_USER_INFO({ commit }, id) {
      commit("SET_USERINFO_START");
      return new Promise((resolve, reject) => {
        axios
          .get(`/reseller/users/info/${id}`)
          .then((response) => {
            console.clear();
            console.log(response.data);
            commit("SET_USERINFO_SUCCESS", response.data.message);
            resolve(response);
          })
          .catch((error) => {
            commit("SET_USERINFO_FAILURE");
            reject(error);
          });
      });
    },
  },

  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },

    isLoading(state) {
      return state.isLoading;
    },
  },
  namespaced: true,
};
