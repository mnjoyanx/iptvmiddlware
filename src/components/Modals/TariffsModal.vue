<template>
  <a-modal v-model="visible" title="Tariffs" @ok="handleOk">
    <super-select :userId="tariffId" />
  </a-modal>
</template>

<script>
import axios from "@/api/axios";
import { mapGetters } from "vuex";

export default {
  name: "TariffsModal",

  components: {
    SuperSelect: () => import("@/components/forms/SuperSelect"),
  },

  computed: {
    ...mapGetters({
      tariffData: "global/getTariffData",
    }),
  },

  data() {
    return {
      visible: false,
      tariffId: "",
    };
  },

  methods: {
    handleOk() {
      this.visible = false;
      axios
        .post("/reseller/users/tariff", this.tariffData)
        .then((res) => {
          console.log(res, "tarif dataaaaaa");
          this.$emit("updateTariff");
          if (!res.data.error) {
            this.$message.success(res.data.message.message);
          } else {
            this.$message.error(res.data.message.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    show(tariff) {
      this.visible = true;
      this.tariffId = tariff;
    },

    close() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
