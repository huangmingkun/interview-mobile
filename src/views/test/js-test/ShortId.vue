<template>
  <div class="text_center">
    <ul>
      <li
        v-for="(item, index) in persons"
        :key="personsKeys[index]"
      >{{ personsKeys[index] }} --  {{index}}  --  {{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import shortId from 'shortid'
export default {
  name: 'ShortId',
  data () {
    return {
      persons: [
        {name: 'hmk', age: 18},
        {name: 'ldk', age: 16},
        {name: 'eid', age: 17},
        {name: 'lie', age: 19},
        {name: 'amy', age: 20}
      ]
    }
  },
  computed: {
    // 通过shortId插件生成唯一的id
    personsKeys () {
      console.log(shortId.generate())
      let personKeys = this.persons.map(() => shortId.generate())
      console.log('personKeys', personKeys)
      return personKeys
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
