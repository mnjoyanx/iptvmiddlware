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
          console.log(response, "77");
          this.data =
            url == "/reseller/users"
              ? response.data.message
              : response.data.message.rows;
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
      console.log(url, data, "dcccuucurd");
      create(url, data)
        .then((res) => {
          console.log(res, "res", res.data.message);
          if (res.data.error) {
            this.$message.error(res.data.message);
          } else {
            this.$message.success(res.data.message.message);
          }
          this.get();
        })
        .catch((err) => {
          console.log("error", err);
        });
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

    restore(id) {
      axios
        .put("/reseller/users/restore", { id })
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
