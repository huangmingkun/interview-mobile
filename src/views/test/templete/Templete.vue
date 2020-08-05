<template>
  <div class="container"></div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import encryptionMd5 from '@/js/mixins/encryption-md5'

export default {
  name: 'Templete',
  data () {
    const lang = localStorage.getItem('user-language') || 'zh-cn'
    return {
      tableEditShow: false, // 是否显示table字段编辑框
      firstName: 'hmk',
      lang: lang
    }
  },
  components: {
    ThemePicker
  },
  mixins: [encryptionMd5],
  filters: {
    addNumber (value, param) {
      let turnValue = value + param
      return turnValue
    }
  },
  directives: {
    // 自定义指令
    localFocus: {
      inserted: function (el, binding, vNode) {
        el.getElementsByTagName('input')[0].focus()
      }
    }
  },
  props: {
    tableLabel: {
      type: Array
    }
  },
  computed: {
    // computed写法一
    checkLists: function () {
      let that = this
      let value = []
      that.tableLabel.forEach((item) => {
        value.push(item.label)
      })
      return value
    },
    // computed写法二
    checkedLength (count) {
      return count++
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    // mapState、mapGetters辅助函数
    ...mapState({
      vuexCount: 'count'
    }),
    ...mapGetters({
      doneTodo: 'doneTodos'
    })
  },
  watch: {
    'tableLabel': {
      // 深度监听子组件数组
      handler: function (newValue, oldValue) {
        // console.log('子组件改变tableLabel的值', newValue)
      },
      deep: true
    },
    // 普通属性监听
    firstName: function (oldValue, newValue) {
      console.log(oldValue, newValue)
    }
  },
  methods: {
    editMethod () {
      let that = this
      that.tableEditShow = true
    },
    // mapMutations、mapActions辅助函数
    ...mapMutations({
      vuexIncrement: 'increment'
    }),
    ...mapActions({
      vuexActionIncrement: 'actionIncrement'
    })
  },
  created () {
    // dom还没开始渲染
  },
  mounted () {
    // dom未完全渲染完成
  }
}
</script>

<style scoped>
  @media (max-width: 768px) {
  }
</style>
