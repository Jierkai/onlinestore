import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home/HomeViews.vue"),
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("@/views/Cart/CartViews.vue"),
  },
  {
    name: "user",
    path: "/user",
    component: () => import("@/views/User/UserViews.vue"),
  },
];

export default new VueRouter({
  routes,
});
