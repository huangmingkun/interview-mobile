<template>
  <div class="field-container">
    <label
      class="label-class padding-auto"
      v-if="label">
      {{label}}</label>
    <div class="field-main flex_start padding-auto">
      <i class="iconfont icon-common"
         :class="'icon-'+iconName"
          v-if="iconName"></i>
      <input
        class="login-field"
        :placeholder="placeholder"
        :value="currentValue"
        @input="handleInput">
    </div>
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
      currentValue: this.value
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
    value: {},
    iconName: {
      type: String,
      required: false,
      default: ''
    }
    // value: {
    //   type: String,
    //   required: false,
    //   default: ''
    // }
  },
  created () {
    console.log('this.value', this.value)
  },
  methods: {
    handleInput (evt) {
      this.currentValue = evt.target.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },

    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped lang="less">
  .field-container {
    width: 100%;
    padding: 0 10px;
    .padding-auto {
      margin: 0 40px;
    }
    .icon-common {
      height: 33px;
      line-height: 33px;
    }
    .label-class {
      width: 100%;
      text-align: left;
      display: block;
      padding: 10px 0;
    }
    .field-main {
      border-bottom: 2px solid #e6e6e6;
      .login-field {
        width: calc(100% - 16px);
        border: none;
        outline: none;
        padding: 8px 10px;
        color: #888;
      }
    }
  }
</style>
