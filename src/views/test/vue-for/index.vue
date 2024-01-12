<template>
  <div>
    <button @click="clickHandler">删除</button>
    <template>
<!--      <div v-for="(item, index) in list" :key="index" >{{item.name}}</div>-->
      <select>
        <option v-for="(item, index) in selectList" :key="index" :selected="item.selected">{{ item.name }}</option>
      </select>
    </template>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'Person1'
        },
        {
          id: 2,
          name: 'Person2'
        },
        {
          id: 3,
          name: 'Person3'
        },
        {
          id: 4,
          name: 'Person4'
        }
      ],
      selectList: [
        {
          id: 1,
          selected: false,
          name: 'Person1'
        },
        {
          id: 2,
          selected: false,
          name: 'Person2'
        },
        {
          id: 3,
          selected: true,
          name: 'Person3'
        },
        {
          id: 4,
          selected: false,
          name: 'Person4'
        }
      ]
    }
  },
  methods: {
    clickHandler () {
      this.list.splice(1, 1)
      this.selectList.splice(1, 1)
    }
  }
}
</script>

<style scoped>

</style>
