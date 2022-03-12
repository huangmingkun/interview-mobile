<template>
  <div class="box-container">

    <!--子div固定宽高  方法一:绝对定位+负margin-->
<!--    <div class="father-box-fixed1">-->
<!--      <div class="child-box">绝对定位+负margin</div>-->
<!--    </div>-->

    <!--子div固定宽高  方法二：绝对定位+transform(也可适用于不固定宽度的)-->
<!--    <div class="father-box-fixed2">-->
<!--      <div class="child-box">绝对定位+transform(也可适用于不固定宽度的)</div>-->
<!--    </div>-->

    <!--子div固定宽高  方法三:绝对定位+margin：auto-->
<!--    <div class="father-box-fixed3">-->
<!--      <div class="child-box">绝对定位+margin：auto</div>-->
<!--    </div>-->

    <!-- 子div固定宽高  方法一：设置table-cell来实现居中 -->
<!--    <div class="father-box-fixed4">-->
<!--      <div class="child-box">-->
<!--        <h1>123</h1>-->
<!--        <h1>123</h1>-->
<!--        <h1>123</h1>-->
<!--      </div>-->
<!--    </div>-->

    <!-- 子div不固定宽高  方法二：flex布局 -->
    <div class="father-box-auto1">
      <div class="child-box">
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'VHCenter',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.box-container {
  height: 100%;
  .child-box {
    padding: 10px;
  }
  // 子div固定宽高--方法一: 绝对定位+负margin
  .father-box-fixed1 {
    position: relative;
    height: 100%;
    .child-box {
      position: absolute;
      width: 200px;
      height: 200px;
      top: calc(50% - 100px);
      left: calc(50% - 100px);
      background-color: #7db87d;
    }
  }

  // 子div固定宽高--方法二：绝对定位+transform(也可适用于不固定宽度的)
  .father-box-fixed2 {
    position: relative;
    height: 100%;
    .child-box {
      position: absolute;
      width: 200px;
      height: 200px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #7db87d;
    }
  }

  // 子div固定宽高--方法三:绝对定位+margin：auto
  .father-box-fixed3 {
    position: relative;
    height: 100%;
    .child-box {
      position: absolute;
      width: 200px;
      height: 200px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background-color: #7db87d;
    }
  }

  // 子div固定宽高--方法四：设置table-cell来实现居中
  .father-box-fixed4 {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    border: 1px solid transparent;
    height: 200px;
    width: 200px;
    background-color: wheat;
    .child-box {
      display: table;
      width: 100px;
      margin: auto;
      padding: 20px;
      background-color: #a4ba8f;
    }
  }

  // 子div不固定宽高--方法一：flex布局
  .father-box-auto1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .child-box {
      color: #6e6b6b;
      background-color: #a4ba8f;
      padding: 20px;
    }
  }
}
</style>
