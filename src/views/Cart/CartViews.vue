<template>
  <div class="cart-view">
    <HeaderNav bg-color="rgb(255,255,255)">
      <template #mid>
        <span class="cart-title">购物车</span>
      </template>
    </HeaderNav>
    <div
        v-for="(item,index) in cartList"
        :key="index"
        class="cart-item"
    >
      <div class="cart-choose">
        <van-checkbox v-model="item.isChoose"></van-checkbox>
      </div>
      <div class="cart-card">
        <van-card
            style="padding-left: 0; background: white;font-size: 16px;"
        >
          <template #title>
            <span class="item-title">
              <i v-if="item.goodsInfo.isDirect" class="icon" style="background-color: #ee0a24;">直营</i>
              <i v-if="!item.goodsInfo.isHave" class="icon" style="background-color: rgba(144,144,144,0.99);">缺货</i>
              {{ item.goodsInfo.name }}
            </span>
          </template>
          <template #price>
            <span class="goods-price"> ￥{{ item.goodsInfo.price }}</span>
          </template>
          <template #thumb>
            <van-image
                :src="item.goodsInfo.img"
                height="100"
                width="100"
            />
          </template>
          <template #num>
            <button class="cart-btn" @click="item.num > 1 && item.num--">-</button>
            <span class="item-num">{{ item.num }}</span>
            <button class="cart-btn" @click="item.num ++">+</button>
          </template>
        </van-card>
      </div>

    </div>
    <van-submit-bar :price="allPrice" button-text="提交订单" style="bottom: 50px">
      <van-checkbox v-model="isAllChoose">全选</van-checkbox>
    </van-submit-bar>

  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";
import {mapState} from "vuex";

export default {
  name: "CartViews",
  data() {
    return {
      checked: true,
    }
  },
  components: {HeaderNav},
  computed: {
    ...mapState({
      cartList: state => state.cartList
    }),
    allPrice() {
      return this.cartList.reduce((sum, i) => {
        if (i.isChoose) {
          console.log(sum + (i.goodsInfo.price * i.num))
          return (sum + (i.goodsInfo.price * i.num)) * 100
        } else {
          return sum
        }
      }, 0)
    },
    isAllChoose: {
      get() {
        return this.cartList.every(i => i.isChoose === true)
      },
      set(newVal) {
        this.cartList.forEach(i => i.isChoose = newVal)
      }
    }
  },
}
</script>

<style scoped>
.cart-view {
  padding-top: 75px;
  background-color: #fff;

}

.cart-title {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(238, 238, 238, 0.99);
}

.cart-item {
  display: flex;
}

.item-title {
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.cart-choose {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
}

.icon {
  padding: 0 5px;
  margin: 0 2px;
  border-radius: 3px;
  color: white;
}

.goods-price {
  font-size: 20px;
  color: #ee0a24;
  padding: 0 5px;
}

.item-num {
  display: inline-block;
  width: 20px;
  text-align: center;
  color: black;
  background-color: rgb(196, 194, 194);
}

.cart-btn {
  background-color: #fff;
}
</style>