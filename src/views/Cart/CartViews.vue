<template>
  <div class="cart-view">
    <HeaderNav bg-color="rgb(255,255,255)">
      <template #mid>
        <span class="cart-title">购物车</span>
      </template>
    </HeaderNav>
    <van-card
        v-for="(item,index) in cartList" :key="index"
        :price="item.goodsInfo.price"
        :thumb="item.goodsInfo.img"
        :title="item.goodsInfo.name"
        style="background: white;font-size: 16px"
    />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";
import {mapState} from "vuex";

export default {
  name: "CartViews",
  components: {HeaderNav},
  computed: {
    ...mapState({
      cartList: state => state.cartList
    })
  }
}
</script>

<style scoped>
.cart-view {
  padding-top: 65px;
}

.cart-title {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(238, 238, 238, 0.99);
}
</style>