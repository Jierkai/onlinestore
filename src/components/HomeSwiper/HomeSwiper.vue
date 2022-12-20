<template>
  <div>
    <van-swipe :autoplay="3000" class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="item in  imgList" :key="item.id">
        <van-image
            :src="item.icon"
            height="100%"
            width="100%"
        />
      </van-swipe-item>
    </van-swipe>

  </div>

</template>

<script>
import {swiper} from "@/api";

export default {
  name: "HomeSwiper",
  data() {
    return {
      imgList: []
    }
  },
  async created() {
    let res = await swiper()
    console.log(res)
    this.imgList = [...res.data.data.list]
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 240px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>