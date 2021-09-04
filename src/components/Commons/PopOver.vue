<template>
  <a-popover title="Actions" class="action-popover" placement="bottom">
    <template slot="content">
      <p class="flex items-center cursor-pointer" @click="edit">
        <a-icon type="edit" class="text-blue mr-1" /> Edit
      </p>
      <p class="flex items-center cursor-pointer" @click="remove">
        <a-icon type="delete" class="text-red-500 mr-1" v-if="!isArchived" />
        <a-icon type="reload" class="text-green-500 mr-1" v-else />
        {{ resellerUserStatus }}
      </p>
      <p class="flex items-center cursor-pointer" @click="tariff">
        <a-icon type="euro" class="text-yellow-500 mr-1" /> Add Tarif
      </p>
      <p class="flex items-center cursor-pointer" @click="profile">
        <a-icon type="user" class="text-blue-primary mr-1" /> Profile
      </p>
    </template>
    <span class="text-xl">...</span>
  </a-popover>
</template>

<script>
export default {
  name: "PopOver",

  props: {
    isArchived: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    resellerUserStatus() {
      return this.isArchived ? "Restore" : "Delete";
    },
  },

  methods: {
    profile() {
      this.$emit("profile");
    },

    tariff() {
      this.$emit("tariff");
    },

    edit() {
      this.$emit("edit");
    },

    remove() {
      if (this.isArchived) {
        this.$emit("restore");
      } else {
        this.$emit("remove");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
