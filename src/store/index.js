import Vue from "vue";
import vuex from "vuex";
import { goods, goodsdetail } from "@/api";

Vue.use(vuex);

export default new vuex.Store({
  state: {
    goodsList: [],
    goodsInfo: {},
    cartList: [],
  },
  actions: {
    async getGoodsList(commit) {
      let res = await goods();
      commit.commit("GETGOODSLIST", res.data.data.list);
    },
    async getGoodsInfo(commit, goodsId) {
      let res = await goodsdetail(goodsId);
      commit.commit("GETGOODSINFO", res.data.data.goodsData);
    },
  },
  mutations: {
    GETGOODSLIST(commit, data) {
      commit.goodsList = [...data];
    },
    GETGOODSINFO(state, data) {
      state.goodsInfo = { ...data };
    },
    ADDGOODS(state, data) {
      const cartList = state.cartList;
      let index = 0;
      const isIncludes = cartList.every((i) => {
        index++;
        return i.goodsInfo.id !== data.id;
      });
      console.log(isIncludes);
      if (isIncludes) {
        cartList.push({ goodsInfo: data, num: 1, isChoose: false });
      } else {
        cartList[index].num++;
      }
    },
  },
  getters: {},
});
