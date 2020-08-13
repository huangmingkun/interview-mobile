<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :defaultContents="defaultContents">{{defaultContents.newContent}}</slot>
    </main>
    <footer>
      <slot name="footer" :user="footerMsg">
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  data () {
    return {
      defaultContents: {
        newContent: '新增内容',
        editContent: '修改内容'
      },
      footerMsg: {
        name: 'hmk',
        age: '18'
      }
    }
  }
}
</script>

<style scoped>

</style>
