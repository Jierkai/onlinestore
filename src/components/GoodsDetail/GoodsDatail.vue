<template>
  <div>

  </div>
</template>

<script>
import {goodsdetail} from "@/api";

export default {
  name: "GoodsDatail",
  props: {
    goodsId: {
      type: [String, Number],
      require: true
    }
  },
  async created() {

    let res = await goodsdetail(this.goodsId)
    console.log(res)
  }
}
</script>

<style scoped>

</style>