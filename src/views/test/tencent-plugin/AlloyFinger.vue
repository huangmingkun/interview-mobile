<template>
<!--  <div class="img-container display_flex_center">-->
  <div class="imgBox">
    <img id="alloy-finger" src="../../../assets/img/test/classRoom.jpg"/>
  </div>
</template>

<script>
import AlloyFinger from 'alloyfinger'
export default {
  name: 'AlloyFinger',
  created () {
  },
  mounted () {
    let that = this
    var doubleTapImg = document.getElementById('alloy-finger')
    // Transform(doubleTapImg)
    that.$nextTick(vm => {
      var af = new AlloyFinger(doubleTapImg, {
        doubleTap: function () {
          console.log(1111111)
          console.log(22222222, doubleTapImg)
          if(doubleTapImg.scaleX === 1) {
            new To(doubleTapImg, "scaleX", 2, 500, ease);
            new To(doubleTapImg, "scaleY", 2, 500, ease);
          }else if(doubleTapImg.scaleX === 2){
            new To(doubleTapImg, "scaleX", 1, 500, ease);
            new To(doubleTapImg, "scaleY", 1, 500, ease);
          }
        },
      })
      console.log('alloyFinger插件实例', af)
    })
  }
}
</script>

<style scoped lang="less">
  /*.img-container {*/
  /*  width: 100%;*/
  /*  height: 200px;*/
  /*  .img-class {*/
  /*    width: 200px;*/
  /*  }*/
  /*}*/
  .img-class {
    width: 160px;
  }
  .imgBox{
    margin-bottom: 10px;
    border-bottom: 1px solid #333333;
  }
</style>
