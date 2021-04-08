<template>
  <div>
    <mt-popup
      class="popup-container"
      v-model="popupVisible"
      :closeOnClickModal="false"
      :position="position">
      <!--<h2 class="popup-title text_ellipsis" v-if="popopTitle">{{popopTitle}}</h2>-->
      <div class="flex_start">
        <p class="popup-title text_ellipsis" v-if="popopTitle">{{popopTitle}}</p>
        <mt-field placeholder="请输入路由名称" v-model="searchName" @keyup.native="searchRouter()"></mt-field>
<!--        <input v-model="searchName" @keyup="searchRouter()"/>-->
      </div>
      <div :class="{'margin-bottom60': isCancelBtnShow}"
        class="main-content">
        <p class="popup-content text_ellipsis"
           :class="{'border-bottm': (index!==menuLists.length - 1) || isCancelBtnShow,'selected': $route.path === item.path}"
           v-for="(item, index) in activeMenuLists"
           :key="index"
           @click="contentSelected(item)">
          {{item.name}}</p>
      </div>
      <div class="popup-action">
        <mt-button
          class="cancel-btn"
          v-if="isCancelBtnShow"
          @click="cancelPopop"
          type="primary">
          取消</mt-button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'MyPopubList',
  data () {
    return {
      searchName: '',
      activeMenuLists: []
    }
  },
  props: {
    // 是否显示popup
    popupVisible: {
      type: Boolean,
      required: true
    },
    // popup标题
    popopTitle: {
      type: String,
      required: false,
      default: ''
    },
    // 菜单数据源
    menuLists: {
      type: Array,
      required: false
    },
    // popup位置
    position: {
      type: String,
      required: false,
      default: 'bottom'
    },
    // 是否显示取消按钮
    isCancelBtnShow: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    const that = this
    that.activeMenuLists = that.menuLists
    that.searchRouter = that.$lodash.debounce(that.searchRouter, 300)
  },
  methods: {
    // 选择内容后触发父组件的方法
    contentSelected (itemParams) {
      let that = this
      that.$emit('select-content', itemParams)
    },
    cancelPopop () {
      let that = this
      that.$emit('select-content')
    },
    searchRouter () {
      const that = this
      if (!that.searchName) {
        that.activeMenuLists = that.menuLists
        return
      }
      that.activeMenuLists = that.menuLists.filter(function (item) {
        console.log('item.name', item.name)
        return item.name.toLocaleLowerCase().indexOf(that.searchName.toLocaleLowerCase()) > -1
      })
    }
  }
}
</script>

<style scoped lang="less">
  .mint-popup {
    width: 100%;
    max-height: 600px;
    overflow: hidden;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .margin-bottom60 {
    margin-bottom: 60px;
  }
  .popup-container {
    width: 100%;
    .popup-title {
      padding: 15px;
      border-bottom: 1px dashed #ece5e5;
      color: #419ee4;
      background-color: #f6fbff;
    }
    .main-content {
      height: 250px;
      overflow: scroll;
      .popup-content {
        font-size: 1rem;
        width: 100%;
        padding: .6rem 0;
      }
    }
    .border-bottm {
      border-bottom: 1px solid #ece5e5;
    }
    .selected {
      background-color: #9cd5de;
    }
    .popup-action {
      width: 100%;
      height: 60px;
      line-height: 60px;
      position: fixed;
      z-index: 999;
      bottom: 0;
      left: 0;
      right: 0;
      /*background-color: white;*/
      /*border-top: 1px solid #eeee;*/
      .cancel-btn {
        width: 80%;
        margin: auto;
      }
    }
  }
</style>
