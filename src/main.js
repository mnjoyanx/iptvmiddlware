import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import DefaultLayout from "./layouts/Default.vue";
import DashboardLayout from "./layouts/Dashboard.vue";
import DashboardRTLLayout from "./layouts/DashboardRTL.vue";
import router from "./router";
import "../public/stylesheets/app.css";
import { removeUnderscores, dateFilter, capitalize } from "./filters";
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

// store
import store from "./store";

import "./scss/app.scss";

Vue.use(Antd);

Vue.config.productionTip = false;

// filters
Vue.filter("removeUnderscores", removeUnderscores);
Vue.filter("dateFilter", dateFilter);
Vue.filter("capitalize", capitalize);

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
