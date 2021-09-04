<template>
  <div class="absolute">
    <a-drawer
      title="Create a new reseller user"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Image">
              <img :src="inpValues.image" alt="image" class="w-20 h-20" />
              <a-upload
                name="image"
                :multiple="false"
                :customRequest="handleChange"
              >
                <a-button class="mt-2">
                  <a-icon type="upload" /> Click to Upload
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Name">
              <a-input
                v-model="inpValues.name"
                placeholder="Please enter user name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Username">
              <a-input
                v-model="inpValues.username"
                style="width: 100%"
                placeholder="Please enter username"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Surname">
              <a-input
                v-model="inpValues.surname"
                placeholder="Please enter surname"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Birthday">
              <a-date-picker
                v-model="inpValues.birthday"
                style="width: 100%"
                :get-popup-container="(trigger) => trigger.parentNode"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Email">
              <a-input
                v-model="inpValues.email"
                placeholder="Please enter email"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <!-- 
            <a-form-item label="Password">
              <a-input
                v-model="inpValues.password"
                placeholder="Please enter password"
              />
            </a-form-item> -->
            <a-form-item label="Viber">
              <a-input
                v-model="inpValues.viber"
                placeholder="Please enter viber"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Phone">
              <a-input
                v-model="inpValues.phone"
                placeholder="Please enter phone"
              />
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <!-- <a-form-item label="Viber">
              <a-input
                v-model="inpValues.viber"
                placeholder="Please enter viber"
              />
            </a-form-item> -->
            <a-form-item label="Parental code">
              <a-input
                v-model="inpValues.parental_code"
                placeholder="Please enter parental code"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Whatsapp">
              <a-input
                v-model="inpValues.whatsapp"
                placeholder="Please enter whatsapp"
              />
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-form-item label="Password">
              <a-input
                v-model="inpValues.password"
                placeholder="Please enter password"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Group">
              <a-select
                v-for="group in groups"
                :key="group.id"
                placeholder="Please select group"
                v-model="inpValues.groupId"
                @chnage="changeGroupHandler"
              >
                <a-select-option :value="group.id">
                  {{ group.name }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Documents">
              <a-upload-dragger
                name="document"
                class="upload-document"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              >
                <p class="ant-upload-drag-icon">
                  <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </a-upload-dragger>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item>
              <check-item-box label="Auto Renewal" @check="check" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="submitForm">
          Submit
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: "DrawerDemo",

  props: {
    groups: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    CheckItemBox: () => import("./CheckItemBox.vue"),
  },

  data() {
    return {
      form: this.$form.createForm(this),
      loading: false,
      imageUrl: "",
      visible: false,
      fd: null,
      type: "",

      inpValues: {},
    };
  },
  methods: {
    changeGroupHandler(e) {
      console.log(e, "event");
    },

    check(val) {
      this.fd.append("autoRenewal", val);
    },

    uploadImage(e) {
      this.imageUrl = e.target.files[0];
      // this.$set(this.inpValues, "image", e.target.files[0]);
      console.log(this.inpValues.image, 95);
    },

    handleChange(e) {
      this.imageUrl = e.file;
      //   this.$set(this.inpValues, "image", e.file);
      this.inpValues.image = URL.createObjectURL(e.file);
    },

    submitForm() {
      this.fd = new FormData();

      for (let key in this.inpValues) {
        this.fd.append(key, this.inpValues[key]);
      }

      this.fd.append("image", this.imageUrl);
      console.log(this.inpValues, "this.fd");

      if (this.type === "Edit") {
        this.$emit("editResellerUser", this.fd);
      }
      if (this.type === "Add") {
        this.$emit("resellerUser", this.fd);
      }
      this.visible = false;
    },

    show(val, type) {
      if (type === "Edit") {
        delete val.archive;
        delete val.balance;
        delete val.channel;
        delete val.createdAt;
        delete val.expire_tariff;
        delete val.isLiveWatching;
        delete val.last_online;
        delete val.last_payment_date;
        delete val.online;
        delete val.payment_code;
        delete val.playlistOnly;
        delete val.register_date;
        delete val.reseller;
        delete val.reseller_id;
        delete val.skinId;
        delete val.status;
        delete val.sub_users;
        delete val.tariff;
        delete val.tariffId;
        delete val.upd_tariff;
        delete val.updatedAt;
        delete val.watchingChannelId;
      }
      this.visible = true;
      this.type = type;
      this.inpValues = JSON.parse(JSON.stringify(val));
      console.log(this.inpValues, "8999855522");
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.upload-document {
  height: 100px !important;
}
</style>
