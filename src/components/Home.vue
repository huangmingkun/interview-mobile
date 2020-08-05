<template>
  <div class="container">
    <div class="header">
      <mt-header fixed title="Home">
        <span slot="left">
        <mt-button @click.native= "$router.go(-1)"><i style="color: white" class="iconfont icon-fanhui"></i></mt-button>
      </span>
      </mt-header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
