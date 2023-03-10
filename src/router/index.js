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
    component: () => import("@/views/Login/LoginView.vue"),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("@/views/Register/RegisterView.vue"),
  },
  {
    name: "allgoods",
    path: "/allgoods",
    component: () => import("@/views/AllGoodsList/AllGoodsList.vue"),
  },
  {
    name: "goodsdetail",
    path: "/goodsdetail/:goodsId",
    props: true,
    component: () => import("@/components/GoodsDetail/GoodsDatail.vue"),
  },
  {
    name: "settlement",
    path: "/settlement/:goodsId",
    props: true,
    component: () => import("@/components/Settlement/SettlementPage.vue"),
  },
];

export default new VueRouter({
  routes,
});
