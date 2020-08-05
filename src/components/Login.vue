<template>
  <div class="container">
    <div class="footer">
      <mt-button class="login-button" type="primary"
                 @click="confirmLogin">登录</mt-button>
      <!--<button>登录</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    confirmLogin () {
      let that = this;
      that.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;
  box-sizing: border-box;
  border-top: 2px solid #eeee;
  .login-button {
    width: 80%;
  }
}
</style>
