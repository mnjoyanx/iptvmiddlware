<template>
  <a-select default-value="Active" style="width: 120px" @change="handleChange">
    <a-select-option value="1">
      Active
    </a-select-option>
    <a-select-option value="0">
      Block
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: "SelectOptions",

  methods: {
    handleChange(value) {
      this.$emit("selectOption", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
