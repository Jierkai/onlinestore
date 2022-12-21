<template>
  <div class="all-goods-container">
    <HeaderNav>
      <template #mid>
        <van-nav-bar
            title="商品列表"
            @click-left="$router.go(-1)"
        >
          <template #left>
            <van-icon color="rgba(0,0,0,1)" name="arrow-left"/>
          </template>
        </van-nav-bar>
      </template>
    </HeaderNav>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1"/>
      <van-dropdown-item title="销量">
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";

export default {
  name: "AllGoodsList",
  data() {
    return {
      value1: 0,
      option1: [
        {text: '全部商品', value: 0},
        {text: '新款商品', value: 1},
        {text: '活动商品', value: 2},
      ]
    };
  },
  created() {
    this.$refs.item.toggle(false)
  },
  components: {HeaderNav}
}
</script>

<style scoped>
.all-goods-container {
  padding-top: 76px;
}
</style>