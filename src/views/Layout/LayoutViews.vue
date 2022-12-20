<template>
  <div class="layout-view">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item :to="{name:'home'}" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item :to="{name:'cart'}" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item :to="{name:'user'}" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutViews"
}
</script>

<style scoped>
.layout-view {
  padding-bottom: 50px;
  background: #eeeeee;
}
</style>