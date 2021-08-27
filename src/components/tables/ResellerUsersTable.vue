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
            <div class="">
              <date-picker @dateFilter="dateFilter" />
            </div>
          </div>
          <button class="w-12 border border-gray-mid p-2 mb-4">
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
                  class="px-6 py-3  text-xs text-center font-medium text-gray-primary uppercase tracking-wider"
                >
                  Id
                </th>
                <th
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
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center justify-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <span class="font-bold">#</span>{{ item.id }}
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
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center justify-center"
                  >
                    <span>
                      {{ item.country_name }}
                    </span>
                    <img :src="item.flag" alt="flag" class="ml-1 w-6 h-6" />
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResellerUsersTable",

  components: {
    SearchBar: () => import("@/components/forms/SearchBar"),
    SelectOptions: () => import("@/components/Dropdowns/SelectOptions"),
    DatePicker: () => import("@/components/forms/DatePicker"),
    SuperModal: () => import("@/components/Modals/SuperModal"),
    Spinner: () => import("@/components/Commons/Spinner"),
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
