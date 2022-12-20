<template>
  <van-grid :border="false" :column-num="5" :icon-size="35">
    <van-grid-item v-for="item in list" :key="item.id" :icon="item.imgUrl" :text="item.title">
    </van-grid-item>
  </van-grid>
</template>

<script>
import {fnlist} from "@/api";

export default {
  name: "FunList",
  data() {
    return {
      list: []
    }
  },
  async created() {
    let res = await fnlist()
    console.log(res)
    this.list = [...res.data.data]
  }
}
</script>

<style scoped>

</style>