<template>
  <div>
    <a-row :gutter="24" type="flex">
      <!-- Authors Table Column -->
      <a-col :span="24" class="mb-24">
        <!-- Authors Table Card -->
        <ResellerUsersTable
          :data="data"
          :loading="isLoading"
          :tariffs="tariffs"
          @resellerUser="createResellerUser"
          @editResellerUser="editResellerUser"
          @remove="removeResellerUser"
          @restoreResellerUser="restoreResellerUser"
          @updateTariff="updateTariff"
        ></ResellerUsersTable>
        <!-- / Authors Table Card -->
      </a-col>
      <!-- / Authors Table Column -->
    </a-row>
  </div>
</template>

<script>
import { crud } from "@/mixins/crud";
import { mapActions } from "vuex";
export default {
  name: "ResellerUsers",

  mixins: [crud("/reseller/users")],

  data() {
    return {
      tariffs: [],
    };
  },

  components: {
    ResellerUsersTable: () =>
      import("@/components/tables/ResellerUsersTable.vue"),
  },

  methods: {
    ...mapActions({
      getTariffs: "global/GET_TARIFF",
    }),

    updateTariff() {
      this.get();
    },

    restoreResellerUser(id) {
      this.restore(id);
    },

    removeResellerUser(id) {
      this.deleteOne("reseller/users", id);
    },

    editResellerUser(val) {
      this.edit("reseller/users", val);
    },

    createResellerUser(val) {
      this.add("/reseller/users", val);
    },
  },

  mounted() {
    this.get();
    this.getTariffs();
  },
};
</script>

<style lang="scss" scoped></style>
