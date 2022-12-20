<template>
  <div>
    <HeaderNav>
      <template #left>
        <van-icon name="wap-nav" size="25"/>
      </template>
      <template #mid>
        <van-search background="rgba(255,255,255,0)" disabled placeholder="请输入搜索关键词" shape="round">
        </van-search>
      </template>
      <template #right>
        <van-icon name="chat-o" size="25"/>
      </template>

    </HeaderNav>
    <HomeSwiper></HomeSwiper>
    <van-row>
      <van-col v-for="item in activeImgList" :key="item.id" span="8">
        <van-image
            :src="item.icon"
            height="100%"
            width="100%"
        />
      </van-col>
    </van-row>
    <FunList></FunList>
    <QuickBuy></QuickBuy>
  </div>
</template>

<script>
import HomeSwiper from "@/components/HomeSwiper/HomeSwiper.vue";
import {actives} from "@/api";
import QuickBuy from "@/components/QuickBuy/QuickBuy.vue";
import FunList from "@/components/FunList/FunList.vue";
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";

export default {
  name: "HomeViews",
  components: {HeaderNav, FunList, QuickBuy, HomeSwiper},
  data() {
    return {
      opacity: '0',
      activeImgList: []
    }
  },
  async created() {
    let res = await actives()
    console.log(res)
    this.activeImgList = [...res.data.data.list]
  }
}
</script>

<style scoped>

</style>