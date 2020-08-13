<template>
  <div>
    <!--update方式进行父子组件通信-->
    <text-document
      v-bind:title="doc.title"
      v-on:update:title="doc.title = $event"
    ></text-document>
    <!--简写形式-->
    <!--v-bind:title.sync方式不能使用字符串拼接（表达式）-->
    <text-document
      v-bind:title.sync="doc.title"
    ></text-document>
    <!--对象形式传递子组件-->
    <text-document
      v-bind.sync="doc"
    ></text-document>
  </div>
</template>

<script>
import TextDocument from './TextDocument'
export default {
  name: 'Prop',
  data () {
    return {
      doc: {
        title: '旧标题',
        content: '开局就乱杀'
      }
    }
  },
  components: { TextDocument },
  watch: {
    'doc.title': function (oldVal, newVal) {
      console.log(oldVal, newVal)
    },
    'doc.content': function (oldVal, newVal) {
      console.log(oldVal, newVal)
    }
  }
}
</script>

<style scoped>

</style>
