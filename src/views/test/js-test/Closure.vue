<template>
  <div>
    <p id="help">Helpful notes will appear here</p>
    <p>E-mail: <input type="text" id="email" name="email"></p>
    <p>Name: <input type="text" id="name" name="name"></p>
    <p>Age: <input type="text" id="age" name="age"></p>
  </div>
</template>

<script>
export default {
  name: 'Closure',
  created () {
  },
  mounted () {
    function showHelp (help) {
      document.getElementById('help').innerHTML = help
    }

    function setupHelp () {
      var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
      ]

      for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i]
        document.getElementById(item.id).onfocus = function () {
          showHelp(item.help)
        }
      }
    }

    /**
     * 运行这段代码后，您会发现它没有达到想要的效果。无论焦点在哪个input上，显示的都是关于年龄的信息。
     * 原因是赋值给 onfocus 的是闭包。这些闭包是由他们的函数定义和在 setupHelp 作用域中捕获的环境所组成的。
     * 这三个闭包在循环中被创建，但他们共享了同一个词法作用域，在这个作用域中存在一个变量item。
     * 这是因为变量item使用var进行声明，由于变量提升，所以具有函数作用域。
     * 当onfocus的回调执行时，item.help的值被决定。由于循环在事件触发之前早已执行完毕，变量对象item（被三个闭包所共享）已经指向了helpText的最后一项。
     */
    setupHelp()
  }
}
</script>

<style scoped>

</style>
