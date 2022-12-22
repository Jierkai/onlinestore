<template>
  <div class="goods-detail">
    <!--    顶部-->
    <HeaderNav :style="{opacity}" bg-color="#D81E06">
      <template #mid>
        <van-nav-bar
            :border="false"
            left-arrow
            style="background: transparent"
            @click-left="$router.go(-1)"
        >
          <template #left>
            <van-icon color="white" name="arrow-left" size="25"/>
          </template>
          <template #title>
            <span class="detail-title">商品详情</span>
          </template>
        </van-nav-bar>
      </template>
    </HeaderNav>
    <span class="back-btn">
        <van-icon color="white" name="arrow-left" size="20"/>
    </span>
    <!--    /顶部-->
    <!--    轮播图-->
    <van-swipe class="my-swipe" height="380" @change="onChange">

      <van-swipe-item v-for="(item,index) in goodsInfo.swiperImgs" :key="index">
        <van-image
            :src="item"
            height="100%"
            width="100%"
        />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator"><span>{{ current + 1 }}</span> / 4</div>
      </template>
    </van-swipe>
    <!--    /轮播图-->
    <!--    下面的详细信息-->
    <div :style="{top : top + 'px'}" class="detail-content">
      <div class="goods-info">
        <p class="goods-price"> ￥{{ goodsInfo.price }}</p>
        <p class="goods-name">
          <i v-if="goodsInfo.isDirect" class="icon" style="background-color: #ee0a24;">直营</i>
          <i v-if="!goodsInfo.isHave" class="icon" style="background-color: rgba(144,144,144,0.99);">缺货</i>
          {{ goodsInfo.name }}</p>
      </div>
      <div class="goods-store-info">
        <div>
          <span>已选</span>
          <span class="choose-info">{{ goodsInfo.name }}</span>
        </div>
        <ul class="detail-content-list">
          <li>
            <img :src="require('@/assets/support.4f37cf65.svg')" alt="">
            <span>可配送海外</span>
          </li>
          <li>
            <img :src="require('@/assets/support.4f37cf65.svg')" alt="">
            <span>京东发货&售后</span>
          </li>
          <li>
            <img :src="require('@/assets/support.4f37cf65.svg')" alt="">
            <span>京准达</span>
          </li>
          <li>
            <img :src="require('@/assets/support.4f37cf65.svg')" alt="">
            <span>211限时达</span>
          </li>

          <li>
            <img :src="require('@/assets/support.4f37cf65.svg')" alt="">
            <span>可自提</span>
          </li>
          <li>
            <img :src="require('@/assets/support.4f37cf65.svg')" alt="">
            <span>不可使用优惠券</span>
          </li>
        </ul>
      </div>
      <div class="detail-img-list">
        <van-image
            v-for="(item,index) in goodsInfo.detailImgs" :key="index"
            :src="item"
            width="100%"
        />
      </div>
    </div>
    <!--    /下面的详细信息-->
    <van-goods-action>
      <van-goods-action-icon/>
      <van-goods-action-icon/>
      <van-goods-action-icon/>
      <van-goods-action-icon/>
      <van-goods-action-button text="加入购物车" type="warning" @click="toCart"/>
      <van-goods-action-button text="立即购买" type="danger"/>
    </van-goods-action>
  </div>
</template>

<script>
import {mapState} from "vuex";
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";

export default {
  name: "GoodsDatail",
  components: {HeaderNav},
  computed: {
    ...mapState({
      goodsInfo: state => state.goodsInfo
    })
  },
  props: {
    goodsId: {
      type: [String, Number],
      require: true
    }
  },
  data() {
    return {
      current: 0,
      opacity: 0,
      top: 400,
      isDirect: false,
      isHave: false
    };
  },
  watch: {
    goodsId: {
      immediate: true,
      async handler(newVal) {
        this.$store.dispatch('getGoodsInfo', newVal)
      }
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    scrollFn() {
      const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop
      this.opacity = scrollTop / 200
      this.top = Math.floor(400 - scrollTop)
    },
    toCart() {
      this.$store.commit('ADDGOODS', this.goodsInfo)
      this.$router.push({name: 'cart'})
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollFn)
  },
}
</script>

<style scoped>
.goods-detail {

}

.detail-title {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.icon {
  padding: 0 5px;
  margin: 0 2px;
  border-radius: 3px;
  color: white;
}

.back-btn {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 38px;
  left: 16px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  z-index: 1;
  background-color: black;

}

.custom-indicator {
  position: absolute;
  right: 0;
  bottom: 50px;
  padding: 2px 15px;
  font-size: 16px;
  border-radius: 20px 0 0 20px;
  color: white;
  background: rgba(0, 0, 0, 0.3);
}

.custom-indicator span {
  font-weight: bold;
  font-size: 20px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.detail-content {
  width: 100%;
  position: absolute;
  background: #e5e5e5;
  box-shadow: 2px 0 5px 3px rgba(203, 203, 203, 0.99);
}

.goods-info {
  margin-bottom: 15px;
  background-color: #fff;
}

.goods-price {
  font-size: 25px;
  color: #ee0a24;
  padding: 0 5px;
}

.goods-name {
  padding: 0 5px 15px 5px;
}

.choose-info {
  padding-right: 40px;
  font-size: 18px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: black;

}

.goods-store-info {
  padding: 10px 10px 0 10px;
  color: rgba(197, 197, 197, 0.99);
  background-color: #fff;
  margin-bottom: 10px;
}

.goods-store-info div:first-child {
  display: flex;
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
  line-height: 50px;
}

.goods-store-info div:first-child span:first-child {
  flex: 1;
  white-space: nowrap;
  padding-right: 10px;
}

.detail-content-list {
  display: flex;
  padding: 18px 0;
  flex-wrap: wrap;
  font-size: 14px;
}

.detail-content-list li {
  padding-right: 10px;
  margin-bottom: 10px;
}

.detail-content-list img {
  width: 13px;
  margin-right: 5px;
}
</style>