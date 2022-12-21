<template>
  <div class="login-view">
    <HeaderNav>
      <template #mid>
        <van-nav-bar @click-left="$router.go(-1)">
          <template #title>
            <span class="login-title">登录</span>
          </template>
          <template #left>
            <van-icon color="rgba(0,0,0,1)" name="arrow-left" size="30"/>
          </template>
        </van-nav-bar>
      </template>
    </HeaderNav>
    <div class="login-input">
      <input placeholder="用户名" type="text">
    </div>
    <div class="login-input">
      <input placeholder="密码" type="password">
    </div>
    <div class="commit-btn">
      <van-button color="#d82008" round size="large" type="info">登录</van-button>
    </div>
    <span class="to-register" @click="$router.push({name:'register'})">注册新用户</span>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";

export default {
  name: "LoginView",
  data() {
    return {
      text: '',
      password: ''
    }
  },
  components: {HeaderNav}
}
</script>

<style lang="less" scoped>
.login-title {
  font-size: 20px;
}

.login-view {
  padding-top: 76px;
}

.login-input {
  padding: 0 5px;
}

.login-input input {
  width: 100%;
  height: 54px;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}

.commit-btn {
  margin: 140px 15px 0 15px;

}

.to-register {
  margin-top: 10px;
  margin-right: 10px;
  float: right;
  color: #868686;
}
</style>