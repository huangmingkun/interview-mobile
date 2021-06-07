<template>
  <div class="demo">
    <!--过度动画，列表的插入和移除-->
    <div id="list-complete-demo">
      <button v-on:click="shuffle">Shuffle</button>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
        <span v-for="item in items"  v-bind:key="item"  class="list-complete-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <!--vue结合Velocity的例子-->
    <div class="velocity">
      <button @click="show = !show">
        Toggle
      </button>
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
      >
        <p class="velocity-p" v-if="show">Demo</p>
      </transition>
    </div>
    <!--input框搜索例子-->
    <div class="select-value">
      <input v-model="query">
      <transition-group
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter1"
        v-on:enter="enter1"
        v-on:leave="leave1"
      >
        <li
          v-for="(item, index) in computedList"
          v-bind:key="item.msg"
          v-bind:data-index="index"
        >{{ item.msg }}</li>
      </transition-group>
    </div>
    <button v-bind:class="{'button-class': isButton}" @click="buttonClick()">点击我</button>
    <section class="cck_container">
      <div id="cck_carousel">
        <figure>小程序</figure>
        <figure>MongoDB</figure>
        <figure>Python</figure>
        <figure>Webpack</figure>
        <figure>CSS3</figure>
        <figure>React</figure>
        <figure>Vue/Nuxt</figure>
        <figure>ES6/ES7</figure>
        <figure>Node/Koa</figure>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'animation',
  data () {
    return {
      show: true,
      isButton: false,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Bruce Lee1' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  methods: {
    // 过度动画，列表的插入和移除
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    },
    // vue结合Velocity的例子
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    },
    // input框搜索例子
    beforeEnter1: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter1: function (el, done) {
      let delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave1: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    },
    buttonClick () {
      this.isButton = !this.isButton;
    }
  },
  computed: {
    // input框搜索例子--input框的值改变时，会触发computed计算属性
    computedList: function () {
      let vm = this
      return this.list.filter(function (item) {
        // console.log(item.msg.toLowerCase().indexOf(vm.query.toLowerCase()))
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<style scoped>
  /*过度动画，列表的插入和移除*/
  #list-complete-demo {
    /*position: absolute;*/
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(-30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
  /*vue结合Velocity的例子*/
  .velocity-p {
    width: 50px;
    padding: 0;
    margin: 0;
    padding-top: 20px;
  }
  .velocity {
    text-align: left;
    width: 100%;
    padding: 30px;
  }
  .button-class {
    background-color: #1de0e9;
  }
  .cck_container {
    width: 90px;
    height: 60px;
    position: relative;
    margin: 20px auto 20px;
    border: 0 solid #ccc;
    perspective: 800px;
  }
  #cck_carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
    transform: translateZ(-120px);
    transform-style: preserve-3d;
    animation: scroll 10s infinite;
    animation-timing-function: linear;
  }
  #cck_carousel:hover {
    animation-play-state: paused !important;
  }
  @keyframes scroll {
    0% {
      transform: translateZ(-120px) rotateY(0deg);
    }
    100% {
      transform: translateZ(-120px) rotateY(360deg);
    }
  }
  #cck_carousel figure {
    display: block;
    position: absolute;
    width: 66px;
    height: 36px;
    left: 10px;
    top: 10px;
    border: 2px solid black;
    line-height: 36px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin: 0;
  }
  figure {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }
  #cck_carousel figure:nth-child(1) {
    transform: rotateY(0deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(1) {
    background: hsla(0, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(2) {
    transform: rotateY(40deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(2) {
    background: hsla(40, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(3) {
    transform: rotateY(80deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(3) {
    background: hsla(80, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(4) {
    transform: rotateY(120deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(4) {
    background: hsla(120, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(5) {
    transform: rotateY(160deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(5) {
    background: hsla(160, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(6) {
    transform: rotateY(200deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(6) {
    background: hsla(200, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(7) {
    transform: rotateY(240deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(7) {
    background: hsla(240, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(8) {
    transform: rotateY(280deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(8) {
    background: hsla(280, 100%, 50%, 0.8);
  }
  #cck_carousel figure:nth-child(9) {
    transform: rotateY(320deg) translateZ(120px);
  }
  #cck_carousel figure:nth-child(9) {
    background: hsla(320, 100%, 50%, 0.8);
  }
</style>
