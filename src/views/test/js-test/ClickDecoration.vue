<template>
  <div>
    <div @click="alertClick('冒泡1')">
      <!--capture--可以让点击事件优先执行；阻止冒泡的事件也可以捕捉生效-->
      <div @click.capture="alertClick('冒泡2')">
        <!--prevent--阻止事件的默认行为，eg：禁用a标签的href跳转-->
        <!--stop--阻止事件向上冒泡-->
        <a href="http://www.baidu.com" @click.prevent.stop="alertClick('冒泡3')">冒泡3</a>
      </div>
    </div>
    <div class="margin_top20"
         @click="alertClick('冒泡1')">
      <!--self--需要点击自身才会触发事件-->
      <div @click.self="alertClick('冒泡2')">
        <!--prevent--阻止事件的默认行为，eg：禁用a标签的href跳转-->
        <a href="http://www.baidu.com" @click.prevent.stop="alertClick('冒泡3-1')">冒泡3-1</a>
        <a href="http://www.baidu.com" @click.prevent="alertClick('冒泡3-2', {a:1}, 2, 3)">冒泡3-2</a>
      </div>
    </div>

    <!--此时点击a标签会依次弹出2，1，跳转。点击div标签会依次弹出3，2，1，跳转。这发生了事件冒泡。-->
    <div class="margin_top20">
      <div @click="alertClick(1)">
        <a href="http://www.baidu.com" @click="alertClick(2)">a标签
          <div @click="alertClick(3)">div标签</div>
        </a>
      </div>
    </div>

    <!--此时点击a标签会依次弹出2，1。点击div标签会依次弹出3，1。此时各位看官已经发现，a标签不仅没有冒泡，也没有跳转，这就是官网说的会阻止所有的点击。-->
    <div class="margin_top20"
         @click="alertClick(1)">
      <a href="http://www.baidu.com" @click.prevent.self="alertClick(2)">a标签
        <div @click="alertClick(3)">div标签</div>
      </a>
    </div>

    <!--点击div标签会依次弹出3，1，跳转。此时a标签没有响应弹框，但是发生了跳转，这就是官网说的只会阻止对元素自身的点击。-->
    <div class="margin_top20"
         @click="alertClick(1)">
      <a href="http://www.baidu.com" @click.self.prevent="alertClick(2)">a标签
        <div @click="alertClick(3)">div标签</div>
      </a>
    </div>

   <!--给vue组件绑定事件时候，必须加上native，不然不会生效（监听根元素的原生事件，使用.native修饰符）-->
   <!--等同于在自组件中：-->
   <!--子组件内部处理click事件然后向外发送click事件：$emit("click".fn)-->
    <mt-button class="margin_top20" @click.native="alertClick('native事件')">native事件</mt-button>
  </div>
</template>

<script>
export default {
  name: 'ClickDecoration',
  methods: {
    alertClick (arg, ...args) {
      console.log(args)
      alert(arg)
    }
  }
}
</script>

<style scoped>

</style>
