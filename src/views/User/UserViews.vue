<template>
  <div class="user-views">
    <HeaderNav>
      <template #mid>
        <h4 style="text-align: center">个人中心</h4>
      </template>
    </HeaderNav>
    <van-cell-group>
      <van-cell center title="登录/注册">
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
  padding-top: 54px;
}
</style>