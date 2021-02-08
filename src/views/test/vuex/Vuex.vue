<template>
  <div>VueX练习</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Vuex',
  data () {
    return {}
  },
  computed: {
    /**
     * mapState对象形式（别名） + 开启了命名空间（namespaced: true）
     * 需要带上模块名称才可以访问对应模块的state，例如下面的'common'模块名称
     * **/
    ...mapState('common', {
      vuexLoginData: 'loginData',
      vuexCount: 'count'
    }),
    /**
     * mapGetters对象形式（别名） + 开启了命名空间（namespaced: true）
     * 需要带上模块名称才可以访问getters，例如下面的'common'模块名称
     * **/
    // 方式一（简洁），引入多个模块的getters时，则需要写多个mapGetters
    ...mapGetters('common', {
      doneTodos: 'doneTodos',
      doneTodosCount: 'doneTodosCount',
      gettersTest: 'gettersTest',
      queryById: 'getTodoById'
    })
    // 方式二（繁琐）
    // ...mapGetters({
    //   doneTodos: 'common/doneTodos'
    // })
    /**
     * mapGetters数组形式 + 开启了命名空间（namespaced: true）
     * 需要带上模块名称才可以访问getters，例如下面的'common'模块名称
     * **/
    // ...mapGetters('common', [
    //   'doneTodos'
    // ])
  },
  mounted () {
    const that = this
    /**
     * 开启了命名空间（namespaced: true）
     * 需要带上模块名称才可以访问getters，例如下面的'common/doneTodos'
     * **/
    // console.log('that.$store.getters[\'common/doneTodos\']', that.$store.getters['common/doneTodos'])
    console.log('that.doneTodos', that.doneTodos)
    // 提交单个属性
    // let sex = 'w'
    // {sex} --- 对象解构
    // that.addLoginDataMsg({sex})
    // 提交多个属性--对象形式
    // let sex = {
    //   name: 'hmk',
    //   age: 18
    // }
    // that.addLoginDataMsg(sex)
    /**
     * -------vuex
     * **/
    // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
    // console.log('vuex-getters-queryByParams', that.queryById(1))
    // --------------------------vuex--mutations--mapMutations
    // that.vuexIncrement({
    //   amount: 11
    // })
    // console.log('after mutations---vuexCount', that.vuexCount)
    // --------------------------vuex--mutations--mapActions
    // that.increment({amount: 1})
    // console.log('after actions---vuexCount', that.vuexCount)
    // console.log('getters--模块间通信', that.gettersTest)
    console.log('actionTest---模块间通信')
    that.actionTest({abc: 123})
  },
  methods: {
    ...mapMutations('common', {
      increment: 'increment'
    }),
    ...mapActions('common', {
      vuexActionIncrement: 'actionIncrement',
      actionTest: 'actionTest'
    })
  }
}
</script>

<style scoped>

</style>
