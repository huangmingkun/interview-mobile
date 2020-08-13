<template>
  <div>
    <p>{{title}}</p>
    <p v-if="content">{{content}}</p>
    <mt-button @click="change('title')">改变标题</mt-button>
    <mt-button v-if="content" @click="change('content')">改变内容</mt-button>
  </div>
</template>

<script>
export default {
  name: 'TextDocument',
  props: {
    title: {
      type: String,
      required: false,
      default: '标题'
    },
    content: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    change (type) {
      let that = this
      switch (type) {
        case 'title':
          that.$emit('update:title', '新标题')
          break
        case 'content':
          that.$emit('update:content', '看新的电影')
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
