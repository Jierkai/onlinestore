<template>
  <div>
    <HeaderNav :bg-color="bgColor">
      <template #left>
        <span style="padding: 4px"><van-icon name="wap-nav" size="25"/></span>
      </template>
      <template #mid>
        <van-search background="rgba(255,255,255,0)" disabled placeholder="请输入搜索关键词" shape="round">
        </van-search>
      </template>
      <template #right>
        <span style="padding: 4px"><van-icon name="chat-o" size="25"/></span>
      </template>
    </HeaderNav>
    <HomeSwiper></HomeSwiper>
    <van-row @click="$router.push({name:'allgoods'})">
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
    <div>
      <img src="./image/haoHuoQiang.a976e93f.gif" style="width: 100%">
    </div>
    <GoodsList></GoodsList>
  </div>
</template>

<script>
import HomeSwiper from "@/components/HomeSwiper/HomeSwiper.vue";
import {actives} from "@/api";
import QuickBuy from "@/components/QuickBuy/QuickBuy.vue";
import FunList from "@/components/FunList/FunList.vue";
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";
import GoodsList from "@/components/GoodsList/GoodsList.vue";

export default {
  name: "HomeViews",
  components: {GoodsList, HeaderNav, FunList, QuickBuy, HomeSwiper},
  data() {
    return {
      activeImgList: [],
      bgColor: 'rgba(255,255,255,0)'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.changeOpacity)
  },
  methods: {
    changeOpacity(e) {
      const scrollTop =
          e.target.body.scrollTop || e.target.documentElement.scrollTop
      let opacity = scrollTop / 90
      this.bgColor = `rgba(255,255,255,${opacity > 1 ? 1 : opacity})`
    }
  },
  async created() {
    let res = await actives()
    this.activeImgList = [...res.data.data.list]
  }
}
</script>

<style scoped>

</style>