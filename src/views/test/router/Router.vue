<template>
    <div>
      <router-link :to="url"><h2>路由</h2></router-link>
      <div class="text_left font_size15">
        1.导航被触发。
        </br>
        2.在失活的组件里调用 beforeRouteLeave 守卫。
        </br>
        3.调用全局的 beforeEach 守卫。
        </br>
        4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
        </br>
        5.在路由配置里调用 beforeEnter。
        </br>
        6.解析异步路由组件。
        </br>
        7.在被激活的组件里调用 beforeRouteEnter。
        </br>
        8.调用全局的 beforeResolve 守卫 (2.5+)。
        </br>
        9.导航被确认。
        </br>
        10.调用全局的 afterEach 钩子。
        </br>
        11.触发 DOM 更新。
        </br>
        12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
      </div>
    </div>
</template>

<script>
export default {
  name: 'Router',
  data () {
    return {
      url: '/scrollTop'
    }
  },
  methods: {},
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('步骤' + 333333)
    next()
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建

    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。
    // 不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
    console.log('步骤' + 55555555)
    setTimeout(function () {
      next(vm => {
        console.log('步骤' + 88888888)
        // 通过 `vm` 访问组件实例
      })
    }, 100)
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('步骤' + 11111111)
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
