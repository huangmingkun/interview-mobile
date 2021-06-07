<template>
  <div id="backImg1">
    <!--<div id="backImg" :class="[{'cal-backgound-size-width': !calBgImage },{'cal-backgound-size-height' : calBgImage }]">-->
    <div id="backImg" :class="calBgImage ? 'cal-backgound-size-height' : 'cal-backgound-size-width'">
      <div  id="attendenceChart" style="width: 100%;height: inherit;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttendanceCharts',
  data () {
    return {
      toatl1: [360, 352, 371, 374, 490, 380, 380, 392, 371, 384, 490, 370, 350],
      isAllAttend: false,
      calBgImage: ''
    }
  },
  methods: {
    // 会议报表饼图
    chart () {
      let that = this
      // 基于准备好的dom，初始化echarts实例
      let chartView = that.$echarts.init(document.getElementById('attendenceChart'))
      chartView.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        renderAsImage: '../assets/data_bg_s.png',
        // legend: {
        //   padding: [200, 0, 0, 0],
        //   selectedMode: false, // 取消图例上的点击事件
        //   // data: ['已到人数', '未到人数']
        //   data: ['已到人数'],
        //   textStyle: {
        //     color: 'white'
        //   }
        // },
        grid: {
          left: '3%',
          right: '11%',
          bottom: '3%',
          top: '33%',
          containLabel: true
        },
        xAxis: {
          name: '总人数',
          nameTextStyle: {
            color: 'white',
            padding: [0, 0, 0, -10],
            fontFamily: '#Arial',
            fontSize: 12
          },
          splitLine: {lineStyle: {type: 'dashed'}},
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#d0d0d0', // 左边线的颜色
              width: '1' // 坐标线的宽度
            }
          },
          axisLabel: {
            // rotate: 45, // 刻度旋转45度角
            textStyle: {
              color: '#fff5ff' // 坐标值得具体的颜色
            }
          },
          axisTick: [{
            show: false
          }] // y轴坐标轴刻度隐藏
        },
        yAxis: {
          name: '部门',
          nameTextStyle: {
            color: 'white',
            fontFamily: '#Arial',
            padding: [0, 0, -10, 0],
            fontSize: 13
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#d0d0d0', // 左边线的颜色
              width: '1' // 坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: '#f9f9ff' // 坐标值得具体的颜色
            }
          },
          axisTick: [{
            show: false
          }], // y轴坐标轴刻度隐藏
          type: 'category',
          // data: ['研发部(70%)', '研发部(70%)', '研发部(70%)', '研发部(70%)', '研发部(70%)', '研发部(70%)','研发部(70%)', '研发部(70%)', '研发部(70%)', '研发部(70%)', '研发部(70%)', '研发部(70%)', '研发部(70%)']
          data: ['研发部', '研发部', '研发部', '研发部', '研发部', '研发部', '研发部', '研发部', '研发部', '研发部', '研发部', '研发部', '研发部']
        },
        series: [
          {
            name: '已到人数',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: function (param) {
                  let aaa = ''
                  for (let i in that.toatl1) {
                    console.log(i)
                    aaa = ((param.value / that.toatl1[param.dataIndex]).toFixed(2)) * 100 + '%'
                  }
                  // console.log(param)
                  return aaa
                }
              }
            },
            data: [360, 302, 301, 334, 390, 330, 320, 302, 301, 334, 390, 330, 320],
            barWidth: 20,
            itemStyle: { // 柱子样式
              emphasis: {
                barBorderRadius: that.isAllAttend ? [0, 10, 10, 0] : 0
              },
              normal: {
                barBorderRadius: that.isAllAttend ? [0, 10, 10, 0] : 0,
                color: '#2de88a', // 柱状图颜色
                label: {
                  show: true, // 显示文本
                  position: 'top', // 数据值位置
                  formatter: '{c}',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            }
          },
          {
            name: '未到人数',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true, // 是否显示标签。
                position: 'right', // 标签的位置。// 绝对的像素值[10, 10],// 相对的百分比['50%', '50%'].'top','left','right','bottom','inside','insideLeft','insideRight','insideTop','insideBottom','insideTopLeft','insideBottomLeft','insideTopRight','insideBottomRight'
                // offset: [30, 40], // 是否对文字进行偏移。默认不偏移。例如：[30, 40] 表示文字在横向上偏移 30，纵向上偏移 40。
                // formatter: '{c}' // 标签内容格式器。模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
                formatter: function (param) {
                  let aaa = ''
                  for (let i in that.toatl1) {
                    console.log(i)
                    aaa = that.toatl1[param.dataIndex]
                  }
                  return aaa
                }
              }
            },
            data: [0, 132, 101, 134, 90, 230, 120, 132, 101, 134, 90, 230, 210],
            itemStyle: { // 柱子样式
              emphasis: {
                barBorderRadius: [0, 10, 10, 0]
              },
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: '#E2F5EC', // 柱状图颜色
                label: {
                  show: true, // 显示文本
                  // position: 'top', // 数据值位置
                  // formatter: '{c}',
                  textStyle: {
                    color: 'white'
                  }
                }
              }
            }
          }
        ]
      })
      window.addEventListener('resize', function () {
        chartView.resize()
      })
    },
    // 自适应屏幕
    adaptiveScreen () {
      // 原生获取屏幕高度
      var orderHight = document.documentElement.clientHeight
      var orderWidth = document.documentElement.clientWidth
      console.log(orderHight)
      console.log(orderWidth)
      document.getElementById('backImg').style.height = orderHight + 'px'
      document.getElementById('backImg').style.weidth = orderWidth + 'px'
    }
  },
  mounted () {
    let that = this
    that.adaptiveScreen()
    this.calBgImage = (document.body.clientWidth / document.body.clientHeight) > 750 / 1334
    console.log(this.calBgImage)
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    window.onresize = function temp () {
      that.adaptiveScreen()
      that.calBgImage = (document.body.clientWidth / document.body.clientHeight) > 750 / 1334
      console.log(that.calBgImage)
    }
    setTimeout(() => {
      that.chart()
    }, 0)
  }
}
</script>

<style scoped>
  /*#backImg{*/
    /*background: url("../assets/data_bg_s.png");*/
  /*}*/
  .cal-backgound-size-width {
    background: url('../../../assets/img/data_bg_s.png') no-repeat;
    background-size: 100% auto;
  }
  .cal-backgound-size-height {
    background: url('../../../assets/img/data_bg_s.png') no-repeat;
    background-size: 100% auto;
  }
</style>
