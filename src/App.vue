<template>
  <div id="app">
    <transition name="fade">
      <router-view>
<!--        <router-view>-->
<!--        </router-view>-->
      </router-view>
    </transition>
    <menu-list></menu-list>
  </div>
</template>

<script>
import MenuList from './components/MenuList'
export default {
  name: 'App',
  components: {MenuList},
  created: function () {
    // // 在页面加载时读取sessionStorage里的状态信息
    // sessionStorage.getItem('interviewMsg') && this.$store.replaceState(Object.assign({}, JSON.parse(sessionStorage.getItem('interviewMsg'))))
    // sessionStorage.removeItem('interviewMsg')
    // // 在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener('beforeunload', () => {
    //   sessionStorage.setItem('interviewMsg', JSON.stringify(this.$store.state))
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
/*进度条样式*/
#nprogress .bar {
  background-color: #1dff94;
  height: 2px ;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
