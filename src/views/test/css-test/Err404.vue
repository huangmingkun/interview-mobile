<template>
  <div class="container">
    <div class="content">
      <div class="content-inline number-outside">
        <p class="number-size number-layout">4</p>
        <p class="number-size number-layout">0</p>
        <p class="number-size number-layout">4</p>
      </div>
      <hr>
      <div class="tip-404">
        <p class="tip-msg">你访问的页面不存在</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Err404'
}
</script>

<style scoped>
  body {
    background-color: #467089;
  }
  p, body {
    margin: 0;
    padding: 0;
  }
  .content-inline {
    display: inline-flex;
    height: 100px;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: min-content;
    height: min-content;
  }
  .number-outside {
    height: 80%;
  }
  .number-size {
    font-size: 150px;
  }
  .number-layout {
    padding: 20px;
    color: #f0f0d2;
    font-family: fantasy;
  }
  .tip-404 {
    height: 20%;
    text-align: center;
  }
  .tip-msg {
    color: #b0a9a9
  }
</style>
