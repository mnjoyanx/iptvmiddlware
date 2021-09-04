// import { getAll, update, create, remove } from "@/api/crud";
import axios from "@/api/axios";
import axs from "axios";

let oldParams;

axs.interceptors.request.use((config) => {
  console.log(config);
  oldParams = config.params;
  return config;
});

export const filters = (url) => ({
  methods: {
    searchHandler(val) {
      axios
        .get(url, {
          params: { ...oldParams, search: JSON.stringify({ full_name: val }) },
        })
        .then((res) => {
          this.isLoading = false;
          this.data = res.data.message.rows;
          this.info = {
            ...response.data.message.info,
            count: response.data.message.count,
          };
        });
    },

    selectType(val) {
      axios
        .get(url, {
          params: { ...oldParams, filter: JSON.stringify({ status: val }) },
        })
        .then((res) => {
          this.data = res.data.message.rows;
          this.info = {
            ...res.data.message.info,
            count: res.data.message.count,
          };
        });
    },

    selectLimitHandler(val) {
      console.log(this.info, "this info");
      axios
        .get(url, {
          params: { ...oldParams, limit: val },
        })
        .then((res) => {
          this.data = res.data.message.rows;
          this.info = {
            ...res.data.message.info,
            count: res.data.message.count,
          };
        })
        .catch((err) => {
          console.log(this.info, err, "33333333");
        });
    },

    filterDate(from, to) {
      axios
        .get(url, {
          params: {
            ...oldParams,
            between: JSON.stringify({ createdAt: { from, to } }),
          },
        })
        .then((res) => {
          this.data = res.data.message.rows;
          this.info = {
            ...res.data.message.info,
            count: res.data.message.count,
          };
        });
    },

    paginationHandler(page) {
      axios
        .get(url, {
          params: {
            ...oldParams,
            page: page,
          },
        })
        .then((res) => {
          this.data = res.data.message.rows;
          this.info = {
            ...res.data.message.info,
            count: res.data.message.count,
          };
        })
        .catch((err) => {});
    },

    sort(val) {
      axios
        .get(url, { params: { ...oldParams, sort: val } })
        .then((res) => {
          this.data = res.data.message.rows;
          this.info = {
            ...res.data.message.info,
            count: res.data.message.count,
          };
        })
        .catch((err) => {});
    },
  },
});
