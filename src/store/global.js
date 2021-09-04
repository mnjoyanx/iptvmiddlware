import axios from "@/api/axios";

export default {
  state: {
    isLoading: false,
    group: [],
    tariff: [],
    tariffData: {},
  },

  mutations: {
    SET_GROUPS_START(state) {
      state.isLoading = true;
    },

    SET_GROUPS_SUCCESS(state, group) {
      state.group = group;
    },

    SET_GROUPS_FAILURE(state) {
      state.isLoading = false;
    },

    SET_TARIFF_START(state) {
      state.isLoading = true;
    },

    SET_TARIFF_SUCCESS(state, tariff) {
      state.tariff = tariff;
    },

    SET_TARIFF_FAILURE(state) {
      state.isLoading = false;
    },

    SET_TARIFF_DATA(state, tariffData) {
      state.tariffData = tariffData;
    },
  },

  actions: {
    GET_GROUPS({ commit }) {
      commit("SET_GROUPS_START", true);
      return new Promise((resolve, reject) => {
        axios
          .get("/reseller/users/groups")
          .then((response) => {
            console.log(response, "gloval");
            commit("SET_GROUPS_SUCCESS", response.data.message);
            resolve(response);
          })
          .catch((error) => {
            commit("SET_GROUPS_FAILURE");
            reject(error);
          });
      });
    },

    GET_TARIFF({ commit }) {
      commit("SET_TARIFF_START", true);
      return new Promise((resolve, reject) => {
        axios
          .get("/reseller/tariff")
          .then((response) => {
            commit("SET_TARIFF_SUCCESS", response.data.message);
            resolve(response);
          })
          .catch((error) => {
            commit("SET_TARIFF_FAILURE");
            reject(error);
          });
      });
    },
  },

  getters: {
    getGroups(state) {
      return state.group;
    },

    getTariff(state) {
      return state.tariff;
    },

    getTariffData(state) {
      return state.tariffData;
    },
  },

  namespaced: true,
};
