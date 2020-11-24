<template>
  <div>
    <ul style="list-style: none" class="font_size15 event-loop-step">
      <li>一.event-loop start</li>
      <li>二.microTasks 队列开始清空（执行）</li>
      <li>三.检查 Tasks 是否清空，有则跳到 4，无则跳到 6</li>
      <li>四.从 Tasks 队列抽取一个任务，执行</li>
      <li>五.检查 microTasks 是否清空,若有则跳到 2,无则跳到 3</li>
      <li>六.结束 event-loop</li>
    </ul>
    <p class="color_blue margin_top20">也就是说，microTasks 队列在一次事件循环里面不止检查一次，我们做个实验</p>
  </div>
</template>

<script>
// 添加三个 Task
// Task 1
setTimeout(function () {
  console.log(4)
}, 0)

// Task 2
setTimeout(function () {
  console.log(6)
  // 添加 microTask
  promise.then(function () {
    console.log(8)
  })
}, 100)

// Task 3
setTimeout(function () {
  console.log(7)
}, 0)

var promise = new Promise(function executor (resolve) {
  console.log(1)
  for (var i = 0; i < 10000; i++) {
    i === 9999 && resolve()
  }
  console.log(2)
}).then(function () {
  console.log(5)
})
console.log(3)
export default {
  name: 'EventLoop'
}
</script>

<style scoped>
  .event-loop-step li {
    padding: 3px 0;
  }
</style>
