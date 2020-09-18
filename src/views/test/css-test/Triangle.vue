<template>
  <div>
    <div class="container">
      <i class="up-triangle"></i>
    </div>
    <div class="container1">
      <i class="bottom-right-triangle"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tringle'
}
</script>

<style scoped lang="less">
  .container {
    width: 250px;
    height: 250px;
    background-color: #eee;
    margin-top: 50px;
    .up-triangle {
      width: 0;
      height: 0;
      border-bottom: 200px solid goldenrod;
      border-left: 100px solid #1c00cf08;
      border-right: 100px solid #1155cc0a;
    }
  }
  .container1 {
    width: 150px;
    height: 150px;
    background-color: #eee;
    margin-top: 50px;
    .bottom-right-triangle {
      width: 0;
      height: 0;
      border-bottom: 100px solid goldenrod;
      border-left: 100px solid #1c00cf08;
    }
  }
</style>
