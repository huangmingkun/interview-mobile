<template>
  <div></div>
</template>

<script>
export default {
  name: 'design-decorate',
  created () {
    console.log('ary-prototype', Array.prototype)
    let ArrayPro = Array.prototype
    let myMethods = ['push', 'shift', 'pop']
    let coypArray = Object.create(ArrayPro)
    console.log('obj-create', coypArray)
    myMethods.forEach((method) => {
      coypArray[method] = function () {
        let _old = ArrayPro[method]
        _old.apply(this, arguments)
        console.log('my-self')
      }
    })
    let testArry = [1, 2, 3]
  }
}
</script>

<style scoped>

</style>
