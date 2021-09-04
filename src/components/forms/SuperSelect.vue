<template>
  <div>
    <a-select
      :default-value="selected"
      style="width: 300px"
      @change="handleChange"
    >
      <a-select-option
        :value="tariff.id"
        v-for="tariff in tariffs"
        :key="tariff.id"
      >
        {{ tariff.name }} (${{ tariff.price }}) {{ tariff.scheduling_time }}
        {{ tariff.scheduling_type }}
      </a-select-option>
    </a-select>
    <div>
      <a-checkbox @change="onChange" class="mt-2">
        Auto Renewal
      </a-checkbox>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "SuperSelect",

  props: {
    userId: {
      type: Number,
      default: () => null,
    },
  },

  data() {
    return {
      checked: false,
    };
  },

  computed: {
    ...mapGetters({
      tariffs: "global/getTariff",
    }),

    selected() {
      const tarif = this.tariffs.find((tariff) => {
        console.log(tariff.id, this.userId, "skkkkkkk");
        return tariff.id === this.userId;
      });

      if (!tarif) {
        return "Choose your tariff";
      } else {
        return tarif.name;
      }
    },
  },

  methods: {
    ...mapMutations({
      setTariffData: "global/SET_TARIFF_DATA",
    }),
    onChange(val) {
      this.checked = val.target.checked;
    },

    handleChange(value) {
      this.setTariffData({
        user_id: this.userId,
        tariff_id: value,
        auto_renewal: this.checked,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
