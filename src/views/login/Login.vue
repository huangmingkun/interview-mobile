<template>
  <div class="login-container flex_center">
    <div class="login-main">
      <p class="login-title">
        登录
      </p>
     <!-- <mt-field label="用户名" v-model="userName1"></mt-field>-->
      <login-field label="用户名"
                   label-align="right"
                   placeholder="请输入用户名"
                   icon-name="username"
                   v-model="userName">
      </login-field>
      <login-field class="margin_top20"
                   label="密码"
                   label-align="right"
                   placeholder="请输入密码"
                   icon-name="password"
                   v-model="password">
      </login-field>
      <mt-button
        class="margin_auto login-btn"
        type="primary"
        @click="loginClick"
        size="large">登录
      </mt-button>
    </div>
  </div>
</template>

<script>
import LoginField from '../my-components/LoginField'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: '',
      userName1: ''
    }
  },
  watch: {
    userName (oldVal, newVal) {
      console.log(oldVal, newVal)
    },
    password (oldVal, newVal) {
      console.log(oldVal, newVal)
    },
    userName1 (oldVal, newVal) {
      console.log(oldVal, newVal)
    }
  },
  components: { LoginField },
  mounted () {
  },
  created () {
  },
  methods: {
    loginClick () {
      let that = this
      if (that.userName === '' || that.password === '') {
        that.$toast('账号或密码错误')
      } else {
        that.$router.push({
          path: '/home'
        })
      }
      console.log('登录')
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #b6c9d8;
    overflow: hidden;
    .login-main {
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      background-color: white;
      border-radius: 10px;
      .login-title {
        font-size: 30px;
        padding: 80px 10px;
      }
      .login-btn {
        margin-top: 80px;
        background-color: #7ea1bd;
        width: 80%;
      }
    }
  }

</style>
