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
