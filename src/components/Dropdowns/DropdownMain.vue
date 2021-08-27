<template>
  <a-dropdown :trigger="['click']">
    <div
      class="ant-dropdown-link cursor-pointer"
      @click="(e) => e.preventDefault()"
    >
      <a-avatar :src="user.flag" />
      <span class="text-gray-primary ml-1">{{ user.full_name }}</span>
    </div>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <router-link
          to="profile"
          tag="div"
          href="http://www.alipay.com/"
          class="flex items-center "
        >
          <a-icon type="user" />
          <span class="ml-1 text-xs font-semibold">Profile</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="1">
        <router-link
          to="settings"
          tag="div"
          href="http://www.alipay.com/"
          class="flex items-center "
        >
          <a-icon type="setting" />
          <span class="ml-1 text-xs font-semibold">Settings</span>
        </router-link>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3">
        <router-link
          to="profile"
          tag="div"
          href="http://www.alipay.com/"
          class="flex items-center "
        >
          <a-icon type="logout" />
          <span class="ml-1 text-xs font-semibold">Logout</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DropdownMain",

  computed: {
    ...mapGetters({
      user: "me/getUser",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
