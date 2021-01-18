<template>
  <div>VueX练习</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
  name: 'Vuex',
  data () {
    return {}
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    // mapState、mapGetters辅助函数
    ...mapState({
      vuexLoginData: 'loginData',
      vuexCount: 'count'
    }),
    ...mapGetters({
      doneTodo: 'doneTodos',
      doneTodosCount: 'doneTodosCount',
      queryById: 'getTodoById'
    })
  },
  mounted () {
    const that = this
    // 提交单个属性
    let sex = 'w'
    // {sex} --- 对象解构
    that.addLoginDataMsg({sex})
    // 提交多个属性--对象形式
    // let sex = {
    //   name: 'hmk',
    //   age: 18
    // }
    // that.addLoginDataMsg(sex)
    /**
     * -------vuex
     * **/
    // --------------------------vuex---state
    // console.log('vuex--loginData', that.vuexLoginData)
    // --------------------------vuex---getters
    // console.log('vuex-getters', that.doneTodo)
    // console.log('vuex-getters-params', that.doneTodosCount)
    // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
    // console.log('vuex-getters-queryByParams', that.queryById(1))
    // --------------------------vuex--mutations--mapMutations
    // that.vuexIncrement({
    //   amount: 11
    // })
    // console.log('after mutations---vuexCount', that.vuexCount)
    // --------------------------vuex--mutations--mapActions
    that.vuexActionIncrement()
    // console.log('after actions---vuexCount', that.vuexCount)
  },
  methods: {
    ...mapMutations({
      addLoginDataMsg: 'addLoginDataMsg'
    }),
    ...mapActions({
      vuexActionIncrement: 'actionIncrement'
    })
  }
}
</script>

<style scoped>

</style>
