<template>
  <div class="rigister-view">
    <HeaderNav>
      <template #mid>
        <van-nav-bar @click-left="$router.go(-1)">
          <template #title>
            <span class="rigister-title">注册</span>
          </template>
          <template #left>
            <van-icon color="c4c4c4" name="arrow-left" size="30"/>
          </template>
        </van-nav-bar>
      </template>
    </HeaderNav>
    <div class="rigister-input">
      <input v-model="uname" placeholder="用户名" type="text">
    </div>
    <div class="rigister-input">
      <input v-model="password" placeholder="密码" type="password">
    </div>
    <div class="rigister-input">
      <input v-model="rePassword" placeholder="确认密码" type="password">
    </div>
    <div class="commit-btn">
      <van-button color="#d82008" round size="large" type="info" @click="check">登录</van-button>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/HeaderNav.vue";

export default {
  name: "RegisterView",
  data() {
    return {
      uname: '',
      password: '',
      rePassword: ''
    }
  },
  components: {HeaderNav},
  methods: {
    check() {
      if (!this.uname) {
        alert('完善用户名')
      } else if (this.password !== this.rePassword) {
        alert('完善密码')
      }
    }
  }
}
</script>

<style scoped>
.rigister-title {
  font-size: 20px;
}

.rigister-view {
  padding-top: 76px;
}

.rigister-input {
  padding: 0 5px;
}

.rigister-input input {
  width: 100%;
  height: 54px;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}

.commit-btn {
  margin: 140px 15px 0 15px;

}

</style>