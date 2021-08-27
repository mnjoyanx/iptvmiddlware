<template>
  <a-range-picker @change="onChange">
    <template slot="dateRender" slot-scope="current">
      <div class="ant-calendar-date" :style="getCurrentStyle(current)">
        {{ current.date() }}
      </div>
    </template>
  </a-range-picker>
</template>

<script>
import moment from "moment";
export default {
  name: "DatePicker",

  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      monthFormat: "YYYY/MM",
    };
  },

  methods: {
    moment,
    onChange(dates, dateStrings) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);

      this.$emit("dateFilter", dateStrings[0], dateStrings[1]);
    },

    getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = "1px solid #1890ff";
        style.borderRadius = "50%";
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped></style>
