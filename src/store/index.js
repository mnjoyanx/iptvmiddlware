import Vue from "vue";
import Vuex from "vuex";
import register from "./auth/register";
import login from "./auth/login";
import reseller from "@/store/reseller";
import subReseller from "@/store/subReseller";
import me from "@/store/me";
import global from "@/store/global";
import userInfo from "@/store/userInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    register,
    login,
    reseller,
    subReseller,
    me,
    global,
    userInfo,
  },
});
