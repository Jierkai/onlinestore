<template>
  <div class="goods-container">
    <ul class="goods-list">
      <li
          v-for="item in goodsList"
          :key="item.id"
          class="goods-item"
          @click="$router.push({  name:'goodsdetail',params:{goodsId:item.id} })">
        <van-image
            :src="item.img"
            width="100%"
        />
        <span :class="{'goods-info-color':!item.isHave}" class="goods-info info-overflow">
          <i v-if="item.isDirect" class="icon" style="background-color: #ee0a24;">直营</i>
          <i v-if="!item.isHave" class="icon" style="background-color: rgba(144,144,144,0.99);">缺货</i>
          {{ item.name }}
        </span>
        <div class="price-volume">
          <span class="goods-price">￥{{ item.price }}</span>
          <span class="goods-volume">销量：{{ item.volume }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "GoodsList",
  data() {
    return {
      type: 1
    }
  },
  computed: {
    ...mapState({
      goodsList: state => state.goodsList
    })
  },
  created() {
    this.$store.dispatch('getGoodsList')
  }
}
</script>

<style scoped>
.goods-container {
  padding-top: 15px;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.goods-item {
  width: 45%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 7px;
  padding: 8px;
  border-radius: 5px;
}

.icon {
  padding: 0 5px;
  margin: 0 2px;
  border-radius: 3px;
  color: white;
}

.info-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.goods-info {
  font-size: 14px;
  line-height: 20px;
  height: 40px;
  padding: 2px;
}

.goods-info-color {
  color: #5d5d5d;
}

.price-volume {
  display: flex;
  justify-content: space-between;
}

.goods-price {
  font-size: 18px;
  color: #ee0a24;
}

.goods-volume {
  color: #6e6e6e;
}
</style>