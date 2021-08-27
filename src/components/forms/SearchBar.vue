<template>
  <a-input-search
    class="header-search"
    :class="searchLoading ? 'loading' : ''"
    placeholder="Type here…"
    @input="onSearch"
    :loading="searchLoading"
  >
  </a-input-search>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      searchLoading: false,
    };
  },

  methods: {
    onSearch(event) {
      this.$emit("search", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
