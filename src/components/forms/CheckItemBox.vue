<template>
  <a-checkbox @change="onChange">
    {{ label }}
  </a-checkbox>
</template>

<script>
export default {
  name: "CheckItemBox",

  props: {
    label: {
      type: String,
      default: () => "Check",
    },
  },

  methods: {
    onChange(e) {
      this.$emit("check");
    },
  },
};
</script>

<style lang="scss" scoped></style>
