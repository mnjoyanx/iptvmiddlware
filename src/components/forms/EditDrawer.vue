<template>
  <div>
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
                <a-form-item label="Name">
                  <a-input
                    v-decorator="[
                      'name',
                      {
                        rules: [
                          { required: true, message: 'Please enter user name' },
                        ],
                      },
                    ]"
                    placeholder="Please enter user name"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Username">
                  <a-input
                    v-decorator="[
                      'username',
                      {
                        rules: [
                          { required: true, message: 'please enter username' },
                        ],
                      },
                    ]"
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
                    v-decorator="[
                      'surname',
                      {
                        rules: [
                          { required: true, message: 'Please enter surname' },
                        ],
                      },
                    ]"
                    placeholder="Please enter surname"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Email">
                  <a-input
                    v-decorator="[
                      'email',
                      {
                        rules: [
                          { required: true, message: 'Please enter email' },
                        ],
                      },
                    ]"
                    placeholder="Please enter email"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Birthday">
                  <a-date-picker
                    v-decorator="[
                      'birthday',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Please choose the birthday',
                          },
                        ],
                      },
                    ]"
                    style="width: 100%"
                    :get-popup-container="(trigger) => trigger.parentNode"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Password">
                  <a-input
                    v-decorator="[
                      'password',
                      {
                        rules: [
                          { required: true, message: 'Please enter password' },
                        ],
                      },
                    ]"
                    placeholder="Please enter password"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Phone">
                  <a-input
                    v-decorator="[
                      'phone',
                      {
                        rules: [
                          { required: true, message: 'Please enter phone' },
                        ],
                      },
                    ]"
                    placeholder="Please enter phone"
                  />
                </a-form-item>
              </a-col>

              <a-col :span="12">
                <a-form-item label="Viber">
                  <a-input
                    v-decorator="[
                      'viber',
                      {
                        rules: [
                          { required: true, message: 'Please enter viber' },
                        ],
                      },
                    ]"
                    placeholder="Please enter viber"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-form-item label="Whatsapp">
                  <a-input
                    v-decorator="[
                      'whatsapp',
                      {
                        rules: [
                          { required: true, message: 'Please enter whatsapp' },
                        ],
                      },
                    ]"
                    placeholder="Please enter whatsapp"
                  />
                </a-form-item>
              </a-col>

              <a-col :span="12">
                <a-form-item label="Parental code">
                  <a-input
                    v-decorator="[
                      'code',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Please enter parental code',
                          },
                        ],
                      },
                    ]"
                    placeholder="Please enter parental code"
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
                    v-decorator="[
                      'groupId',
                      {
                        rules: [
                          { required: true, message: 'Please select group' },
                        ],
                      },
                    ]"
                    placeholder="Please select group"
                  >
                    <a-select-option :value="group.id">
                      {{ group.name }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :span="12">
                <a-form-item label="Image">
                  <a-upload
                    name="image"
                    :multiple="false"
                    :customRequest="handleChange"
                  >
                    <a-button>
                      <a-icon type="upload" /> Click to Upload
                    </a-button>
                  </a-upload>
                </a-form-item>
              </a-col>
            </a-row>

            <a-row :gutter="16">
              <a-col :span="16">
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
          };
        },
        methods: {
          check(val) {
            this.fd.append("autoRenewal", val);
          },

          uploadImage(e) {
            this.imageUrl = e.target.files[0];
          },

          handleChange(e) {
            this.imageUrl = e.file;
          },

          submitForm() {
            this.form.validateFields((err, values) => {
              if (!err) {
                console.log("Received values of form: ", values);
              }

              this.fd = new FormData();

              for (let key in values) {
                this.fd.append(key, values[key]);
              }

              console.log(this.imageUrl, "url");
              this.fd.append("image", this.imageUrl);
              this.$emit("resellerUser", this.fd);
            });
            this.visible = false;
          },
          show() {
            this.visible = true;
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
  </div>
</template>

<script>
export default {
  name: "EditDrawer",
};
</script>

<style lang="scss" scoped></style>
