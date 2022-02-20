<template>
  <!--清除浮动-->
  <div class="clear-float-container">
    <ul class="clear-fix">
      <li>卡片1</li>
      <li>卡片2</li>
      <li>卡片3</li>
      <li>卡片4</li>
      <li>卡片5</li>
      <li>卡片6</li>
    </ul>
    <!--清除浮动方式二：隔墙法，在需要清除浮动的下方添加一个空标签，然后在空标签添加clear: both属性（影响：增加额外无意义的标签，可读性和可维护性不好）-->
<!--    <div class="clear-float"></div>-->
    <p>需要清除浮动</p>
  </div>
</template>

<script>
export default {
  name: 'CleanFloat',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
// 清除浮动方式四（双伪元素清除浮动）：在需要清除浮动的父类添加clear-fix类即可----start
.clear-fix:before, .clear-fix:after {
  content: '';
  display: table;
}
.clear-fix:after {
  clear: both;
}
.clear-fix {
  *zoom: 1 // 兼容ie
}
// 清除浮动方式四（双伪元素清除浮动）：在需要清除浮动的父类添加clear-fix类即可----end
.clear-float-container {
  >ul {
    list-style: none;
    width: 336px;
    margin: 0 auto;
    //overflow: hidden; // 清除浮动方式一：在需要清除浮动的父类添加overflow: hidden（但这会直接隐藏子标签溢出部分的内容）
    li {
      float: left;
      margin-right: 12px;
      margin-bottom: 12px;
      padding: 10px;
      width: 100px;
      background-color: #9a6e3a;
    }
  }
  .clear-both:after { // 清除浮动方式三（隔墙法升级版）：在需要清除浮动的父类添加after伪元素，同时添加以下样式（不需要添加额外标签）
    content: '';
    display: block; // 需要将行内元素转换为块级元素
    clear: both;
  }
  .clear-float {
    clear: both;
  }
}
</style>
