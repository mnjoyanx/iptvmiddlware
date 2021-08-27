<template>
  <div>
    <a-row :gutter="24" type="flex">
      <!-- Authors Table Column -->
      <a-col :span="24" class="mb-24">
        <!-- Authors Table Card -->
        <ResellerUsersTable
          :data="data"
          :loading="isLoading"
        ></ResellerUsersTable>
        <!-- / Authors Table Card -->
      </a-col>
      <!-- / Authors Table Column -->
    </a-row>
  </div>
</template>

<script>
import { crud } from "@/mixins/crud";

export default {
  name: "ResellerUsers",

  mixins: [crud("/reseller/users")],

  components: {
    ResellerUsersTable: () =>
      import("@/components/tables/ResellerUsersTable.vue"),
  },

  mounted() {
    this.get();
  },
};
</script>

<style lang="scss" scoped></style>
