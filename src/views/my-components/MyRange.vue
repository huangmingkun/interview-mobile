<template>
  <div class="range-container">
    <div class="range-main">
      <div class="tips flex_start">
        <div class="left-tip bg-left-tip left-move"
             id="left-tip"
             :class="{'active-toggle': isLeftToggleMoving}">
          {{leftTip}}
        </div>
        <div class="right-tip bg-right-tip"
             id="right-tip"
             :class="{'active-toggle': isRightToggleMoving}">
          {{leftTip}}
        </div>
      </div>
      <div class="main-shaft"
           id="main-shaft">
        <div class="active-shaft"></div>
      </div>
      <div class="toggles flex_start">
        <div class="left-toggle bg-left left-move"
             id="left-toggle"
             @touchstart.stop.prevent="leftTextTouchStart"
             @touchmove.stop.prevent="leftTextTouchMove"
             @touchend.stop.prevent="leftTextTouchEnd">
          <div class="triangle"></div>
          <div class="rectangle"></div>
        </div>
        <div class="right-toggle bg-right"
             id="right-toggle"
             @touchstart.stop.prevent="rightTextTouchStart"
             @touchmove.stop.prevent="rightTextTouchMove"
             @touchend.stop.prevent="rightTextTouchEnd">
          <div class="triangle"></div>
          <div class="rectangle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'MyRange',
  data () {
    return {
      shaftTotalWidth: 0, // 轴的总宽度
      isLeftToggleMoving: false, // 左tip是否在移动
      isRightToggleMoving: false, // 右tip是否在移动
      leftTip: '不限',
      rightTip: '不限'
    }
  },
  created () {
    const that = this
    // 为左tip和右tip添加防抖操作---防止滑动时候触发多次方法
    // that.leftTextTouchMove = debounce(that.leftTextTouchMove, 50)
    // that.rightTextTouchMove = debounce(that.rightTextTouchMove, 50)
  },
  mounted () {
    const that = this
    // 获取轴的总宽度
    that.shaftTotalWidth = document.getElementById('main-shaft').clientWidth
  },
  methods: {
    // -------------------------左滑块事件
    leftTextTouchStart () {
      console.log(11111)
      const that = this
      // 左tip添加移动时的标记
      that.isLeftToggleMoving = true
    },
    leftTextTouchMove (e) {
      const clientLeftX = e.changedTouches[0].clientX
      // 左滑块可移动的宽度 = 【0，（总轴宽度 - 右滑块已移动的宽度）】
      document.getElementById('left-tip').style.left = clientLeftX - 5 - 10 + 'px'
      document.getElementById('left-toggle').style.left = clientLeftX - 10 + 'px'
      // console.log('左tip移动回调', e)
      // console.log('左tip移动回调', e.changedTouches[0].clientX)
      // let leftDom = document.getElementsByClassName('left-move')
      // for (let i in leftDom) {
      //   console.log(leftDom[i])
      //   leftDom[i].style.left = e.changedTouches[0].clientX + 'px'
      // }
    },
    leftTextTouchEnd () {
      const that = this
      // 左tip移动结束更新标记
      that.isLeftToggleMoving = false
      console.log(3333)
    },
    // -------------------------右滑块事件
    rightTextTouchStart () {
      const that = this
      // 右tip添加移动时的标记
      that.isRightToggleMoving = true
    },
    rightTextTouchMove (e) {
      const that = this
      const clientRightX = that.shaftTotalWidth - e.changedTouches[0].clientX
      console.log('clientRightX', clientRightX)
      // 右滑块可移动的宽度 = 总轴宽度 - 左滑块已移动的宽度
      // 取值范围 【0，总轴宽度】
      if (clientRightX >= 0 && clientRightX <= that.shaftTotalWidth) {
        document.getElementById('right-tip').style.right = clientRightX + 18 + 'px'
        document.getElementById('right-toggle').style.right = clientRightX + 25 + 'px'
      }
    },
    rightTextTouchEnd () {
      const that = this
      // 右tip移动结束更新标记
      that.isRightToggleMoving = false
    }
  }
}
</script>

<style scoped lang="less">
  .range-container {
    width: 100%;
    height: 80px;
    background-color: #eee;
    padding: 3px 10px;
    .tips {
      position: relative;
      width: auto;
      height: 20px;
      .left-tip, .right-tip {
        font-size: 12px;
        color: white;
        padding: 2px;
      }
      .left-tip {
        position: absolute;
        left: 0;
        top: 0;
      }
      .right-tip {
        position: absolute;
        right: 0;
        top: 0;
      }
      .bg-left-tip, .bg-right-tip {
        background-color: #4caf50;
      }
      .bg-active-tip {
        background-color: #afa734;
      }
    }
    .main-shaft {
      position: relative;
      width: auto;
      height: 6px;
      margin: 5px 10px;
      background-color: #b5b5b5;
      .active-shaft {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        background-color: #63a35c;
        width: auto;
        height: 6px;
      }
    }
    .toggles {
      position: relative;
      width: auto;
      height: 20px;
      .left-toggle, .right-toggle {
        height: 24px;
        width: 12px;
      }
      .left-toggle {
        position: absolute;
        left: 6px;
        top: 0;
      }
      .right-toggle {
        position: absolute;
        right: 6px;
        top: 0;
      }
      .bg-left {
        /*background-color: red;*/
      }
      .bg-right {
        /*background-color: blue;*/
      }
      .triangle {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 12px solid #4caf50;
      }
      .rectangle {
        height: 12px;
        width: 6px;
        margin: auto;
        background-color: #4caf50;
      }
    }
    .active-toggle {
      background-color: #9a6e3a !important;
    }
  }
</style>
