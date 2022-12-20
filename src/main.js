import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import router from "@/router";
import Vant from "vant";
import "vant/lib/index.css";
import "swiper/css/swiper.css";
import "@/mock/mockServer";

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
