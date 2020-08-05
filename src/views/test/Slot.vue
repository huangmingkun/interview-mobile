<template>
  <div>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <!--allProps是子组件的数据-->
      <template v-slot:default="allProps">
        {{$log(1111,allProps)}}
        <!--allProps.defaultContents.editContent为更新子组件的数据-->
        {{allProps.defaultContents.editContent}}
      </template>
      <!--作用域插槽-->
      <!--#是v-slot的缩写-->
      <!--<template v-slot:footer="footerProps">-->
      <template #footer="footerProps">
        {{$log(22222222,footerProps)}}
        <p>{{footerProps.user.name}}</p>
      </template>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from './BaseLayout'// 局部引用组件
export default {
  name: 'Solt',
  components: {
    'base-layout': baseLayout
  },
  created () {
  }
}
</script>

<style scoped>

</style>
