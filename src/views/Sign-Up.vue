<template>
  <div>
    <!-- Sign Up Image And Headings -->
    <div
      class="sign-up-header"
      style="background-image: url('images/bg-signup.jpg')"
    >
      <div class="content">
        <h1 class="mb-5">Sign Up</h1>
        <p class="text-lg">
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </div>
    </div>
    <!-- / Sign Up Image And Headings -->

    <!-- Sign Up Form -->
    <a-card
      :bordered="false"
      class="card-signup header-solid h-full"
      :bodyStyle="{ paddingTop: 0 }"
    >
      <template #title>
        <h5 class="font-semibold text-center">Register With</h5>
      </template>
      <div class="sign-up-gateways">
        <a-button>
          <img src="images/logos/logos-facebook.svg" alt="" />
        </a-button>
        <a-button>
          <img src="images/logos/logo-apple.svg" alt="" />
        </a-button>
        <a-button>
          <img src="images/logos/Google__G__Logo.svg.png" alt="" />
        </a-button>
      </div>
      <p class="text-center my-25 font-semibold text-muted">Or</p>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'full_name',
              {
                rules: [
                  { required: true, message: 'Please input your Full Name!' },
                ],
              },
            ]"
            placeholder="Full Name"
          >
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Phone Number!',
                  },
                ],
              },
            ]"
            style="width: 100%"
          >
            <a-select
              slot="addonBefore"
              v-decorator="['prefix', { initialValue: '+374' }]"
              style="width: 70px"
            >
              <a-select-option value="+374">
                +374
              </a-select-option>
              <a-select-option value="87">
                +87
              </a-select-option>
            </a-select>
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: 'Please input your email!' },
                ],
              },
            ]"
            placeholder="Email"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-5">
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            I agree the
            <a href="#" class="font-bold text-dark">Terms and Conditions</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
          >
            SIGN UP
          </a-button>
        </a-form-item>
      </a-form>
      <p class="font-semibold text-muted text-center">
        Already have an account?
        <router-link to="/sign-in" class="font-bold text-dark"
          >Sign In</router-link
        >
      </p>
    </a-card>
    <!-- / Sign Up Form -->
  </div>
</template>

<script>
import axios from "@/api/axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  beforeCreate() {
    console.log("before");
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    ...mapActions({
      signUp: "register/REGISTER_ACTION",
    }),
    // Handles input validation after submission.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.signUp(values).then((res) => {
            if (!res.error) {
              this.$message.success("Successfully Registered");
              this.$router.push({ name: "login" });
            } else {
              this.$message.success(res.message);
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss"></style>
