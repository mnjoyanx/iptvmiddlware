import { getAll, update, create, remove } from "@/api/crud";
import axios from "@/api/axios";

export const crud = (url) => ({
  data() {
    return {
      data: [],
      info: {
        isLastPage: true,
        limit: 10,
        page: 1,
        pageCount: 0,
        pages: [],
        count: 0,
      },
      isLoading: false,
    };
  },

  methods: {
    get() {
      this.isLoading = true;
      getAll(url, { pagination: 1, page: 1, limit: 10, sort: "id,desc" })
        .then((response) => {
          this.data = response.data.message.rows;
          this.info = {
            ...response.data.message.info,
            count: response.data.message.count,
          };
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },

    add(url, data) {
      create(url, data)
        .then(() => {
          this.get();
        })
        .catch(() => {});
    },

    edit(url, data) {
      update(url, data)
        .then(() => {
          this.get();
        })
        .catch(() => {
          // this.isLoading = false;
        });
    },

    deleteOne(url, data) {
      console.log(url, data, "delte");
      remove(url, data)
        .then(() => {
          this.get();
        })
        .catch(() => {});
    },

    changeStatus(url, id) {
      console.log(id, "uidd");
      return axios
        .post(url, { id })
        .then(() => {
          this.get();
        })
        .catch(() => {});
    },
  },
});
