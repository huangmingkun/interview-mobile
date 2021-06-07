<template>
  <div>
    <h1>浮动布局</h1>

    <div class="box">Float</div>

    <p>
      把一个元素“浮动”(float)起来，会改变该元素本身和在正常布局流（normal flow）中跟随它的其他元素的行为。
      这一元素会浮动到左侧或右侧，并且从正常布局流(normal flow)中移除，这时候其他的周围内容就会在这个被设置浮动(float)的元素周围环绕。
    </p>
  </div>
</template>

<script>
export default {
  name: 'CssLayoutFloat'
}
</script>

<style scoped lang="less">
  .box {
    float: left;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    margin-right: 30px;
    background-color: #d7f1d4;
  }
</style>
