<template>
    <div style="position: relative;margin-left: 100px"
         @mouseenter="isCycleShow=true"
         @mouseleave="isCycleShow=false"
         class="text_left">
      悬浮指示框练习
      <div v-show="isCycleShow" class="cycle-hover">
        <i class="solid-triangle"></i>
        <i class="hollow-triangle"></i>
        <p>会议周期：2020-08-18 ~ 2020-9-18</p>
        <p class="margin-left-70">（每天、共10场）</p>
        <p>预订时间：11:00 ~ 12:00</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HoverText',
  data () {
    return {
      isCycleShow: false
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
  .cycle-hover {
    position: absolute;
    top: 53px;
    left: -20px;
    width: 300px;
    background-color: white;
    padding: 10px;
    border: 1px solid #d6cfcfee;
    border-radius: 10px;
    z-index: 9999;
    .margin-left-70 {
      margin-left: 70px;
    }
    .solid-triangle {
      position: relative;
      left: 20px;
      top: -42px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid #dcdcdcee;
      z-index: 3;
    }
    .hollow-triangle {
      position: relative;
      left: 0;
      top: -40px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid white;
      z-index: 3;
    }
  }
</style>
