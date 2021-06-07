<template>
  <div></div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
function demo () {
  // 单例模式
  var Singleton = function(name){
    this.name = name;
    this.instance = null;
  };
  Singleton.prototype.getName = function(){
    return this.name;
  };
  // 获取实例对象
  Singleton.getInstance = function(name) {
    if(!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  };
  // 测试单例模式的实例
  var a = Singleton.getInstance("aa");
  var b = Singleton.getInstance("bb");

  console.log(a === b) // true
}

// eslint-disable-next-line no-unused-vars
function instanceDemo () {
  (function () {
    // 管理单例的逻辑代码，如果没有数据则创建，有数据则返回
    var getSingle = function(fn){ //参数为创建对象的方法
      var result;
      return function(){ //判断是Null或赋值
        return result || (result = fn.apply(this,arguments));
      };
    };
    // 创建登录窗口方法
    var createLoginLayer = function(){
      var div = document.createElement('div');
      div.innerHTML = '我是登录浮窗';
      div.style.display = 'none';
      document.body.appendChild(div);
      return div;
    };
    // 单例方法
    var createSingleLoginLayer = getSingle(createLoginLayer);

    // 使用惰性单例，进行创建
    document.getElementById('loginBtn').onclick = function(){
      var loginLayer = createSingleLoginLayer();
      loginLayer.style.display = 'block';
    };
  })()
}
export default {
  name: 'designSingleModal'
}
</script>

<style scoped>

</style>
