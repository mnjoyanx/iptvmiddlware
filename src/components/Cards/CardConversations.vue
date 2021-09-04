<template>
  <!-- Conversations Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Sub Users</h6>
    </template>
    <a-list
      class="conversations-list"
      item-layout="horizontal"
      :split="false"
      :data-source="userInfo.sub_users"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-button slot="actions" type="link">
          REPLY
        </a-button>
        <a-list-item-meta :title="item.name" :description="item.comment">
          <a-avatar slot="avatar" :size="48" shape="square" :src="item.image" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
  <!-- / Conversations Card -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      userInfo: "userInfo/getUserInfo",
    }),
  },
};
</script>
