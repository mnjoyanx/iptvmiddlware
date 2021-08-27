<template>
  <a-pagination
    :total="info.count"
    :page-size="info.limit"
    :default-current="1"
  />
</template>

<script>
export default {
  name: "Pagination",

  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    onChange(pageNumber) {
      this.$emit("page", pageNumber);
    },
  },

  mounted() {
    console.log(this.info, "infoooooo");
  },

  updated() {
    console.log(this.info, "infooooodddddo");
  },
};
</script>

<style lang="scss" scoped></style>
