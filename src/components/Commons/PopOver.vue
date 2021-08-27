<template>
  <a-popover title="Actions" class="action-popover" placement="bottom">
    <template slot="content">
      <p class="flex items-center cursor-pointer" @click="edit">
        <a-icon type="edit" class="text-blue mr-1" /> Edit
      </p>
      <p class="flex items-center cursor-pointer" @click="remove">
        <a-icon type="delete" class="text-red-500 mr-1" />
        Delete
      </p>
    </template>
    <span class="text-xl">...</span>
  </a-popover>
</template>

<script>
export default {
  name: "PopOver",

  methods: {
    edit() {
      this.$emit("edit");
    },

    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style lang="scss" scoped></style>
