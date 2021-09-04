<template>
  <div>
    <a-row :gutter="24" type="flex">
      <!-- Authors Table Column -->
      <a-col :span="24" class="mb-24">
        <!-- Authors Table Card -->
        <CardAuthorTable
          :data="data"
          :info="info"
          :loading="isLoading"
          @edit="editItem"
          @create="create"
          @remove="remove"
          @toggleStatus="changeStatusHandler"
          @search="search"
          @select="select"
          @selectLimit="selectLimit"
          @dateFilter="dateFilter"
          @page="page"
          @sort="sortHandler"
        ></CardAuthorTable>
        <!-- / Authors Table Card -->
      </a-col>
      <!-- / Authors Table Column -->
    </a-row>
  </div>
</template>

<script>
import { crud } from "@/mixins/crud";
import { filters } from "@/mixins/filters";

export default {
  name: "SubResellers",

  mixins: [crud("reseller/sub"), filters("reseller/sub")],

  components: {
    CardAuthorTable: () => import("@/components/Cards/CardAuthorTable.vue"),
  },

  methods: {
    sortHandler(val) {
      this.sort(val);
    },

    page(page) {
      this.paginationHandler(page);
    },

    dateFilter(from, to) {
      this.filterDate(from, to);
    },

    select(val) {
      this.selectType(val);
    },

    selectLimit(val) {
      console.log("okkkkkk");
      this.selectLimitHandler(val);
    },

    search(val) {
      this.searchHandler(val);
    },

    create(data) {
      this.add("/reseller/sub", data);
    },

    editItem(data) {
      this.edit("/reseller", data);
    },
    remove(id) {
      this.deleteOne("/reseller", id);
    },

    changeStatusHandler(id) {
      this.changeStatus("/reseller/activate", id);
    },
  },

  mounted() {
    this.get();
  },
};
</script>

<style lang="scss" scoped></style>
