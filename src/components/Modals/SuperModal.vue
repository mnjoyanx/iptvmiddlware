<template>
  <div>
    <a-modal v-model="visible" editText="Edit" :title="type" @ok="handleOk">
      <form action="">
        <div class="flex flex-col">
          <div v-for="item in formFields" :key="item.id">
            <div
              class="mb-2"
              v-if="
                item !== 'createdAt' &&
                  item !== 'updatedAt' &&
                  item !== 'id' &&
                  item !== 'parent_id'
              "
            >
              <label :for="item" class="flex flex-col"
                >{{ item | capitalize | removeUnderscores }}

                <input
                  type="text"
                  :id="item"
                  :value="values[item]"
                  @change="changeValueHandler"
                  class="outline-none p-1 border border-gray-mid focus:border-blue-primary"
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "SuperModal",

  data() {
    return {
      visible: false,
      editable: {},
      values: "",
      type: "",
    };
  },

  computed: {
    formFields() {
      return Object.keys(this.editable);
    },
  },

  methods: {
    changeValueHandler(e) {
      this.editable[e.target.id] = e.target.value;
    },

    handleOk() {
      if (this.type === "Edit") {
        this.$emit("edit", this.editable);
      } else {
        this.$emit("create", this.editable);
      }
      this.hide();
    },

    show(data, type) {
      this.visible = true;
      this.type = type;
      this.editable = JSON.parse(JSON.stringify(data));
      if (type === "Edit") {
        this.values = this.editable;
      } else {
        this.values = "";
      }
    },

    hide() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
