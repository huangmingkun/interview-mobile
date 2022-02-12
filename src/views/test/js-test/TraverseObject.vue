<template>
  <div class="traverse-object">
    <div>对象遍历方法</div>
  </div>
</template>

<script>
export default {
  name: 'TraverseObject',
  data () {
    return {
      testObj: {
        name: 'hmk',
        age: 18,
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.traverse-array {
  > div {
    text-align: center;
  }
}
</style>
