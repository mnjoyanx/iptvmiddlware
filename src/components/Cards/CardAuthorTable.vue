<template>
  <div class="flex flex-col ">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="flex justify-between items-end">
          <div class="flex bg-white border border-gray-mid p-4 mb-4 rounded-md">
            <div class="">
              <search-bar @search="searchHandler" />
            </div>
            <div class="mx-2">
              <select-options @selectOption="selectOption" />
            </div>
            <div class="mr-2">
              <select-limit @selectLimit="selectLimit" />
            </div>
            <div class="">
              <date-picker @dateFilter="dateFilter" />
            </div>
          </div>
          <button
            class="w-12 border border-gray-mid p-3 rounded-md  mb-4"
            @click="add"
          >
            Add
          </button>
        </div>
        <div
          class="shadow overflow-hidden border-b border-gray-mid sm:rounded-lg"
        >
          <super-modal
            ref="supermodal"
            @edit="editHandler"
            @create="createHandler"
          />
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-light border-b  border-gray-mid ">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3  text-xs text-center font-medium text-gray-primary uppercase tracking-wider"
                  v-for="item in items"
                  :key="item.id"
                >
                  <span
                    @click="sortHandler(item)"
                    class="cursor-pointer select-none"
                  >
                    {{ item.title | removeUnderscores }}
                  </span>
                  <span
                    v-if="
                      isSorted &&
                        sortType === `${item.title},asc` &&
                        item.id == defaultId
                    "
                  >
                    <a-icon type="sort-ascending" />
                  </span>
                  <span>
                    <a-icon
                      type="sort-descending"
                      v-if="
                        isSorted &&
                          sortType === `${item.title},desc` &&
                          item.id == defaultId
                      "
                    />
                  </span>
                </th>

                <!-- <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Fullname
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
                  Country
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  status
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-center text-xs font-medium text-gray-primary uppercase tracking-wider"
                >
                  Action
                </th> -->
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
                    {{ item.full_name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.phone }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ item.email }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 "
                  >
                    <div class="flex items-center justify-center">
                      <span>
                        {{ item.country_name }}
                      </span>
                      <img :src="item.flag" alt="flag" class="ml-1 w-6 h-6" />
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      @click="changeStatusHandler(item.id)"
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
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      <pop-over @edit="edit(key)" @remove="remove(item.id)" />
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
        <div class="flex justify-end mt-4">
          <pagination :info="info" @page="paginationHandler" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    popOver: () => import("../../components/Commons/PopOver"),
    SuperModal: () => import("../../components/Modals/SuperModal"),
    SearchBar: () => import("@/components/forms/SearchBar"),
    SelectOptions: () => import("@/components/Dropdowns/SelectOptions"),
    SelectLimit: () => import("@/components/Dropdowns/SelectLimit"),
    DatePicker: () => import("@/components/forms/DatePicker"),
    Spinner: () => import("@/components/Commons/Spinner"),
    Pagination: () => import("@/components/Commons/Pagination"),
  },

  props: {
    data: {
      type: Array,
      default: () => [],
    },

    info: {
      type: Object,
      default: () => {},
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
        { id: 1, title: "full_name" },
        { id: 2, title: "phone" },
        { id: 3, title: "email" },
        { id: 4, title: "country" },
        { id: 5, title: "status" },
        { id: 6, title: "action" },
      ],

      sortType: "id,asc",
      isSorted: false,
      defaultId: 0,
    };
  },

  methods: {
    sortHandler(item) {
      this.defaultId = item.id;
      const sortName = item.title;
      item.title.replaceAll(" ", "");
      console.log(item.title, "replace");

      if (this.sortType === `${sortName},asc`) {
        console.log("iffff");
        this.isSorted = !this.isSorted;
        this.sortType = `${sortName},${this.isSorted ? "desc" : "asc"}`;
        this.$emit("sort", this.sortType);
      } else if (this.sortType !== `${sortName},desc`) {
        this.isSorted = true;
        this.sortType = `${sortName},desc`;
        this.$emit("sort", this.sortType);
      } else {
        this.isSorted = true;
        this.sortType = `${sortName},asc`;
        this.$emit("sort", this.sortType);
      }
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

    add() {
      const data = {
        full_name: "",
        phone: "",
        email: "",
        password: "",
      };
      this.$refs.supermodal.show(data, "Add");
    },

    edit(id) {
      this.$refs.supermodal.show(this.data[id], "Edit");
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

<style lang="scss">
.hello {
  display: flex;
}

.center-position {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 50px;
}
</style>
