<template>
  <a-select default-value="10" style="width: 120px" @change="handleChange">
    <a-select-option value="10">
      10
    </a-select-option>
    <a-select-option value="20">
      20
    </a-select-option>
    <a-select-option value="50">
      50
    </a-select-option>
    <a-select-option value="100">
      100
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: "SelectLimit",

  methods: {
    handleChange(value) {
      this.$emit("selectLimit", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
