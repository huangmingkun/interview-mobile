<template>
  <div class="my-input">
    <label>{{ label }}</label>
    <input
      v-bind="$attrs"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    type: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
