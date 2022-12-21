import Vue from "vue";
import vuex from "vuex";
import { goods } from "@/api";

Vue.use(vuex);

export default new vuex.Store({
  state: {
    goodsList: [],
  },
  actions: {
    async getGoodsList(commit) {
      let res = await goods();
      commit.commit("GETGOODSLIST", res.data.data.list);
    },
  },
  mutations: {
    GETGOODSLIST(commit, data) {
      commit.goodsList = [...data];
    },
  },
  getters: {},
});
