<template>
  <div>
    <h1>
      Event Loop事件循环
    </h1>
  </div>
</template>

<script>
export default {
  name: 'EventLoop1',
  data () {
    return {}
  },
  created () {

    // 依次打印顺序：2、4、5、6、8、10、7、3、9、1、

    setTimeout( ()=> {
      console.log(1)
    }, 20)
    console.log(2)
    setTimeout( ()=> {
      console.log(3)
    }, 10)
    console.log(4)
    console.time('AA')
    for (let i = 0; i < 20000; i ++) {
       if ( i === 19000 ) {
         console.log(5)
       }
    }
    console.timeEnd('AA')
    console.log(6)
    setTimeout( () => {
      console.log(7)
    }, 8)
    console.log(8)
    setTimeout( () => {
      console.log(9)
    }, 15)
    console.log(10)
  }
}
</script>

<style scoped>

</style>
