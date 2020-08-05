<template>
  <div class="menu-list">
    <mt-button @click="menuClick()">菜单</mt-button>
    <my-popub-list
      :popup-visible="popupMenuVisible"
      :menu-lists="menuLists"
      :position="position"
      :isCancelBtnShow="true"
      :popop-title="'路由名称'"
      @select-content="selectContent">
    </my-popub-list>
  </div>
</template>

<script>
import MyPopubList from '../views/my-components/MyPopubList'
import routerStatic from '../router/routesStatic'
export default {
  name: 'MenuList',
  data () {
    return {
      popupMenuVisible: false,
      position: 'bottom'
    }
  },
  computed: {
    menuLists () {
      let menuList = []
      menuList = routerStatic.filter((item) => {
        return item.path !== '/'
      })
      return menuList
    }
  },
  components: {
    MyPopubList
  },
  methods: {
    // 菜单打开按钮
    menuClick () {
      let that = this
      that.popupMenuVisible = !that.popupMenuVisible
    },
    // popup选择内容后监听子组件的方法
    selectContent (params) {
      let that = this
      console.log('参数', params)
      that.popupMenuVisible = !that.popupMenuVisible
      if (params && params.path && params.path !== that.$route.path) {
        console.log('跳转到', params.path)
        that.$router.push({
          path: params.path
        })
      }
    }
  }
}
</script>

<style scoped>
.menu-list {
  position: fixed;
  z-index: 999;
  bottom: 20px;
  right: 50px;
}
</style>
