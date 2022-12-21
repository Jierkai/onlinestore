<template>
  <div class="quick-buy-view">
    <van-row>
      <van-col span="6">
        <span class="quick-text">京东秒杀</span>
      </van-col>
      <van-col span="18">
        <div class="count-down">
          <div class="count-down-left">16点场</div>
          <div class="count-down-right">
            <van-count-down v-if="time>0" :time="time"/>
            <span v-else style="color: #ee0a24">活动已结束</span>
          </div>
        </div>
      </van-col>
    </van-row>
    <div class="quick-list">
      <div v-for="item in quickGoodList" :key="item.id" class="list-item">
        <van-image
            :src="item.icon"
            width="100%"
        />
        <p class="new-price">￥{{ item.price }}</p>
        <p class="old-price">￥{{ item.oldPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {quick} from "@/api";

export default {
  name: "QuickBuy",
  data() {
    return {
      quickGoodList: []
    }
  },
  computed: {
    time() {
      // 获取当前日期的时间戳
      const timeStr = new Date(`${new Date().toLocaleDateString()} 16:00:00`).getTime()
      return timeStr - +new Date()
    }
  },
  async created() {
    let res = await quick()
    this.quickGoodList = [...res.data.data.list]
  }
}
</script>

<style lang="less" scoped>
.quick-buy-view {
  margin: 10px;
  padding: 10px;
  background: white;
  border-radius: 5px;

}

.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}

.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}

.quick-text {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.count-down {
  display: flex;
}

.count-down-left {
  padding: 2px;
  background: #d81e06;
  color: white;
  border-radius: 3px 0 0 3px;
}

.count-down-right {
  display: flex;
  padding: 0 5px;
  align-items: center;
  border: 1px solid #d81e06;
  border-radius: 0 3px 3px 0;
}

.quick-list {
  margin-top: 5px;
  display: flex;
  overflow-x: scroll;
}

.list-item {
  text-align: center;
  width: 90px;
  flex-shrink: 0;
  padding: 0 5px;
}

.new-price {
  color: #ee0a24;
}

.old-price {
  color: #999999;
  text-decoration: line-through;
}
</style>