<template>
  <div class="ul-list">
    <div class="mcu-header">
      <ul class="common-form-ul font-size16">
        <li>MCU</li>
        <li>主MCU</li>
        <li>级联MCU</li>
      </ul>
    </div>
    <div class="mcu-body">
      <ul class="common-form-ul">
        <li>mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21</li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
      </ul>
      <ul class="common-form-ul">
        <li>mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21</li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
      </ul>
      <ul class="common-form-ul">
        <li>mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21</li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
      </ul>
      <ul class="common-form-ul">
        <li>mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21</li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
      </ul>
      <ul class="common-form-ul">
        <li>mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21</li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
      </ul>
      <ul class="common-form-ul">
        <li>mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21mcu21</li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
        <li>
          <label class="checkbox">
            <input type="checkbox" checked="">
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UlList'
}
</script>

<style scoped>
  .common-form-ul {
    display: flex;
    text-align: center;
    padding: 6px;
  }
  .common-form-ul li {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mcu-body {
    max-height: 200px;
    overflow: scroll;
  }
  .common-form-ul li:first-child {
    flex: 2;
    text-align: left;
    padding-left: 10px;
  }
  .font-size16 {
    font-size: 16px;
  }
  .checkbox {
    padding: 0;
  }
</style>
