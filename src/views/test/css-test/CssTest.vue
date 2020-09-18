<template>
  <div>
    <ul class="nav">
      <li class="nav-li">GitHub</li>
      <li class="drow-down nav-li " @mouseenter="mouseHover('fruit')" @mouseleave="mouserOut()">水果
        <ul class="home-menu" v-if="hoverShow === 'fruit'">
          <li class="home-menu-li">芒果</li>
          <li class="home-menu-li">猕猴桃</li>
          <li class="home-menu-li">哈密瓜</li>
        </ul>
      </li>
      <li class="nav-li">GitHub</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CssTest',
  data () {
    return {
      hoverShow: ''
    }
  },
  methods: {
    mouseHover (type) {
      this.hoverShow = type
    },
    mouserOut () {
      this.hoverShow = ''
    }
  }
}
</script>

<style scoped lang="less">
  .nav {
    width: 100%;
    height: 40px;
    display: flex;
    list-style: none;
    background-color: #d4e2df;
      .nav-li {
        flex: 1;
        height: 40px;
        line-height: 40px;
        border-left: 1px solid white;
        color: #7d7d7d;
      }
      .nav-li:hover {
        background-color: #a2cab5;
      }
      .nav-li:nth-child(1) {
        border: none;
      }
      .drow-down {
        position: relative;
        .home-menu {
          list-style: none;
          background-color: #beccc5;
          position: absolute;
          top: 40px;
          .home-menu-li {
            padding: 8px 10px;
          }
          .home-menu-li:hover {
            background-color: #a2c7b4;
          }
        }
      }
  }
</style>
