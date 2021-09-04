<template>
  <div class="flex flex-col ">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="flex justify-between items-end">
          <create-drawer
            ref="drawer"
            @resellerUser="resellerUser"
            @editResellerUser="editResellerUser"
            :groups="groups"
          />
          <tariffs-modal ref="tariff" @updateTariff="$emit('updateTariff')" />
          <div class="flex bg-white border border-gray-mid p-4 mb-4 rounded-md">
            <div class="">
              <search-bar @search="searchHandler" />
            </div>
            <div class="mx-2">
              <select-options @selectOption="selectOption" />
            </div>
            <div class="">
              <date-picker @dateFilter="dateFilter" />
            </div>
          </div>
          <button
            class="w-12 border border-gray-mid p-2 mb-4"
            @click="createDrawerHandler"
          >
            Add
          </button>
        </div>
        <div
          class="shadow overflow-hidden border-b border-gray-mid sm:rounded-lg"
        >
          <super-modal ref="supermodal" />
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-light border-b  border-gray-mid ">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Id
                </th>
                <th
                  scope="col"
                  class="px-6 py-3  text-xs text-center font-medium text-gray-primary uppercase tracking-wider"
                >
                  User name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Surname
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Birthday
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Tariff created date
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Whatsapp
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Viber
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Group Id
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <template v-if="loading">
                <div class="center-position">
                  <spinner />
                </div>
              </template>
              <template v-else-if="data.length && !loading">
                <tr
                  v-for="(item, key) in data"
                  :key="item.id"
                  class="border-b border-gray-mid text-center"
                  :class="{ 'bg-red-500 text-white': item.archive }"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center justify-center">
                      <div class="flex-shrink-0 flex items-center h-10 w-10">
                        <span class="font-bold flex items-center">#</span
                        >{{ item.id }}
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.username }}
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.surname }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.phone }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.email }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span>
                      {{ item.birthday }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.createdAt | dateFilter }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.whatsapp }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.viber }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.groupId }}
                  </td>

                  <!-- <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      @click="changeStatusHandler(item.online)"
                      class="px-2 inline-flex text-xs cursor-pointer leading-5 font-semibold rounded-full items-center "
                      :class="{
                        'bg-green-100 text-green-800': item.online,
                        'bg-red-600 text-white': !item.online,
                      }"
                    >
                      <a-icon type="lock" v-if="!item.status" />
                      <a-icon type="check" v-else class="text-green-500" />
                      {{ item.online ? "Activate" : "Block" }}
                    </span>
                  </td> -->
                  <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      <pop-over
                        @edit="edit(key)"
                        @remove="remove(item.id)"
                        @restore="restore(item.id)"
                        @tariff="tariff(item.id)"
                        @profile="profile(item.id)"
                        :isArchived="item.archive"
                      />
                    </a>
                  </td>
                </tr>
              </template>

              <template v-else>
                <a-empty class="center-position" />
              </template>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
        <!-- <div class="flex justify-end mt-4">
          <pagination :info="info" @page="paginationHandler" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ResellerUsersTable",

  components: {
    SearchBar: () => import("@/components/forms/SearchBar"),
    SelectOptions: () => import("@/components/Dropdowns/SelectOptions"),
    DatePicker: () => import("@/components/forms/DatePicker"),
    SuperModal: () => import("@/components/Modals/SuperModal"),
    Spinner: () => import("@/components/Commons/Spinner"),
    CreateDrawer: () => import("@/components/forms/CreateDrawer"),
    PopOver: () => import("@/components/Commons/PopOver"),
    TariffsModal: () => import("@/components/Modals/TariffsModal"),
  },

  props: {
    data: {
      type: Array,
      default: () => [],
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      items: [
        { id: 0, title: "id" },
        { id: 1, title: "fullname" },
        { id: 2, title: "phone number" },
        { id: 3, title: "email" },
        { id: 4, title: "country" },
        { id: 5, title: "status" },
        { id: 6, title: "action" },
      ],
    };
  },

  computed: {
    ...mapGetters({
      groups: "global/getGroups",
    }),
  },

  methods: {
    ...mapActions({
      getGroup: "global/GET_GROUPS",
    }),

    profile(id) {
      this.$router.push({ name: "profile", params: { id } });
    },

    tariff(id) {
      this.$refs.tariff.show(id);
    },

    restore(id) {
      this.$emit("restoreResellerUser", id);
    },

    editResellerUser(val) {
      this.$emit("editResellerUser", val);
    },

    resellerUser(val) {
      this.$emit("resellerUser", val);
    },

    createDrawerHandler() {
      this.getGroup();
      const data = {
        archive: false,
        balance: 0,
        image:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        username: "",
        surname: "",
        phone: "",
        viber: "",
        whatsapp: "",
        password: "",
        parental_code: "",
        groupId: "",
        document: [],
        birthday: null,
        autoRenewal: false,
      };
      this.$refs.drawer.show(data, "Add");
    },

    paginationHandler(page) {
      this.$emit("page", page);
    },

    dateFilter(from, to) {
      this.$emit("dateFilter", from, to);
    },

    selectLimit(val) {
      this.$emit("selectLimit", val);
    },

    selectOption(val) {
      this.$emit("select", val);
    },

    searchHandler(val) {
      this.$emit("search", val);
    },

    changeStatusHandler(id) {
      this.$emit("toggleStatus", id);
    },

    createHandler(data) {
      this.$emit("create", data);
    },

    edit(id) {
      this.$refs.drawer.show(this.data[id], "Edit");
    },

    editHandler(data) {
      console.log("tabele");
      this.$emit("edit", data);
    },

    remove(id) {
      this.$emit("remove", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.center-position {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
}
</style>
