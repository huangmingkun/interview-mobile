<template>
  <div>
    <div class="picker-lists">
      <mt-button class="picker-btn" @click="pickerOpen('dateTime')">点击弹出DateTime Picker</mt-button>
      <mt-button class="picker-btn" @click="pickerOpen('date')">点击弹出Date Picker</mt-button>
      <mt-button class="picker-btn" @click="pickerOpen('time')">点击弹出Time Picker</mt-button>
      <mt-picker
        :slots="slots"
        :itemHeight="40"
        :showToolbar="true"
        :visibleItemCount="2"
        @change="onValuesChange">
        时间选择
      </mt-picker>
    </div>
  <!--:startDate="startDate"设置日期的最小可选值-->
  <!--:endDate="endDate"设置日期的最大可选值-->
  <!--:startHour="startHour"设置小时的最小可选值-->
  <!--:endHour="endHour"设置小时的最大可选值-->
    <mt-datetime-picker
      ref="dateDateTimePicker"
      type="dateTime"
      cancelText="取消"
      confirmText="确定"
      :closeOnClickModal="true"
      :visibleItemCount="7"
      v-model="pickerDateTimeValue">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="datePicker"
      type="date"
      cancelText="取消"
      confirmText="确定"
      :closeOnClickModal="true"
      :visibleItemCount="7"
      v-model="pickerDateValue">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="timePicker"
      type="time"
      cancelText="取消"
      confirmText="确定"
      :closeOnClickModal="false"
      :visibleItemCount="7"
      v-model="pickerTimeValue">
    </mt-datetime-picker>
  </div>
</template>

<script>
export default {
  name: 'DateTime',
  data () {
    return {
      pickerDateTimeValue: new Date(),
      pickerDateValue: new Date(),
      pickerTimeValue: '12:30',
      startDate: new Date(),
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true, // 是否为分隔符标记
          content: '-', // 分隔符
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    pickerOpen (type) {
      let that = this
      switch (type) {
        case 'dateTime':
          that.$refs.dateDateTimePicker.open()
          break
        case 'date':
          that.$refs.datePicker.open()
          break
        case 'time':
          that.$refs.timePicker.open()
          break
      }
    },
    onValuesChange (picker, values) {
      console.log('values', values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    }
  }
}
</script>

<style scoped lang="less">
  .picker-lists {
    height: 100%;
    width: 100%;
    margin: auto;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .picker-btn {
      width: 80%;
      margin: .8rem auto;
    }
  }
</style>
