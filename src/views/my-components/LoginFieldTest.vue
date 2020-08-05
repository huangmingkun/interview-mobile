<template>
  <div class="field-container flex_center">
    <label
      class="label-class"
      :style="{textAlign : labelAlign}"
      v-if="label">
      {{label}}</label>
    <input
      class="login-field"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput">
  </div>
</template>
<script>
/**
 * label：标签的显隐（可选）；有字符串值则显示标签
 * labelAlign：标签的对齐方式（可选）；可选的值right，left，center
 * placeholder：提示语（可选）
**/
export default {
  name: 'LoginField',
  data () {
    return {
    }
  },
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    labelAlign: {
      type: String,
      required: false,
      default: 'right',
      validator (val) {
        return ['right', 'left', 'center'].indexOf(val) > -1
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    value: {}
  },
  created () {
    console.log('this.value', this.value)
  },
  methods: {
    handleInput (evt) {
      this.$emit('input', evt.target.value)
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="less">
  .field-container {
    width: 100%;
    padding: 0 10px;
    .label-class {
      width: 70px;
      height: 35px;
      line-height: 35px;
      margin-right: 10px;
    }
    .login-field {
      width: calc(100% - 70px);
      max-width: 500px;
      border: none;
      outline:none;
      border-bottom: 2px solid #e6e6e6;
      padding: 8px 10px;
      color: #888;
    }
  }
</style>
