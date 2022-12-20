import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/layout/home",
  },
  {
    path: "/layout",
    component: () => import("@/views/Layout/LayoutViews.vue"),
    children: [
      {
        name: "home",
        path: "home",
        component: () => import("@/views/Home/HomeViews.vue"),
      },
      {
        name: "cart",
        path: "cart",
        component: () => import("@/views/Cart/CartViews.vue"),
      },
      {
        name: "user",
        path: "user",
        component: () => import("@/views/User/UserViews.vue"),
      },
    ],
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/LoginView/LoginView.vue"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/RegisterView/RegisterView.vue"),
  },
];

export default new VueRouter({
  routes,
});
