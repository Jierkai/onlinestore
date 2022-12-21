<template>
  <div class="user-views">
    <HeaderNav bg-color="rgba(255,255,255,1)">
      <template #mid>
        <span style="text-align: center">个人中心</span>
      </template>
    </HeaderNav>
    <van-cell-group>
      <van-cell :to="{name:'login'}" center title="登录/注册">
        <template #icon>
          <van-image
              :src="require('./image/下载.png')"
              height="50"
              width="50"
          />
        </template>
      </van-cell>
      <van-cell is-link title="全部订单"/>
      <van-cell is-link title="我的预约"/>
      <van-cell is-link title="应用推荐"/>
      <van-cell is-link title="用户福利"/>
    </van-cell-group>
  </div>
</template>

<script>

import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";

export default {
  name: "UserViews",
  components: {HeaderNav}
}
</script>

<style scoped>
.user-views {
  padding-top: 60px;
}
</style>