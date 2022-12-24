<template>
  <div class="settlement-page">
    <HeaderNav bg-color="rgb(255,255,255)">
      <template #mid>
        <van-nav-bar
            title="立即购买"
            @click-left="$router.go(-1)"
        >
          <template #left>
            <van-icon color="black" name="arrow-left" size="25"/>
          </template>
        </van-nav-bar>
      </template>
    </HeaderNav>
    <van-card
        :thumb="goodsInfo.img"
        :title="goodsInfo.name"
    >
      <template #price>
        <span class="price">￥{{ goodsInfo.price }}</span>
      </template>
    </van-card>
    <van-radio-group v-model="radio" style="margin-top: 10px">
      <van-cell-group>
        <van-cell label="数亿用户都在用，安全可托付" title="支付宝支付">
          <template #icon>
            <div class="pay-image">
              <van-image
                  :src="require('@/components/Settlement/image/alipay.608c5312.svg')"
                  height="30"
                  width="30"
              />
            </div>

          </template>
          <template #right-icon>
            <van-radio name="1"/>
          </template>
        </van-cell>
        <van-cell label="亿万用户选择，更快更安全" title="微信支付">
          <template #icon>
            <div class="pay-image">
              <van-image
                  :src="require('@/components/Settlement/image/weichat.0980c80b.png')"
                  height="30"
                  width="30"
              />
            </div>
          </template>
          <template #right-icon>
            <van-radio name="2"/>
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="submit-btn">
      <van-button color="#ee0a24" round size="large" type="info">立即购买</van-button>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";
import {mapState} from "vuex";

export default {
  name: "SettlementPage",
  components: {HeaderNav},
  data() {
    return {
      radio: '1'
    }
  },
  computed: {
    ...mapState({
      goodsInfo: state => state.goodsInfo
    })
  }
}
</script>

<style scoped>
.settlement-page {
  padding-top: 76px;
  background-color: rgb(238, 238, 238);
}

.price {
  color: #ee0a24;
  font-size: 20px;
}

.pay-image {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.submit-btn {
  margin-top: 130px;
  margin-bottom: 50px;
  padding: 0 10px;
}
</style>