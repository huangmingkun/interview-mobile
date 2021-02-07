<template>
  <div></div>
</template>

<script>
function demo () {
  var salesOffices = {};                           // 定义售楼处
  salesOffices.clientList = [];                    // 缓存列表，存放订阅者的回调函数
  salesOffices.listen = function( fn ){            // 增加订阅者
    this.clientList.push( fn );                  // 订阅的消息添加进缓存列表
  };
  salesOffices.trigger = function(){               // 发布消息
    for( var i = 0, fn; fn = this.clientList[ i++ ]; ){
      fn.apply( this, arguments );             // arguments 是发布消息时带上的参数
    }
  };
  //调用
  salesOffices.listen( function( price, squareMeter ){//订阅消息
    console.log( '价格= ' + price );
    console.log( 'squareMeter= ' + squareMeter );
  });
  salesOffices.trigger( 2000000, 88 );                // 输出：200 万，88 平方米
}

function instanceDemo () {
  var ObserverEvent = (function () {
    var clientList = [], listen, trigger, remove;
    listen = function (key, fn) {
      if (!clientList[key]) {
        clientList[key] = [];
      }
      clientList[key].push(fn);
    };
    trigger = function () {
      var key = Array.prototype.shift.call(arguments), fns = clientList[key];
      if (!fns || fns.length === 0) {
        return false;
      }
      for (var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
      }
    };
    remove = function (key, fn) {
      var fns = clientList[key];
      if (!fns) {
        return false;
      }
      if (!fn) {
        fns && (fns.length = 0);
      } else {
        for (var l = fns.length - 1; l >= 0; l--) {
          var _fn = fns[l];
          if (_fn === fn) {
            fns.splice(l, 1);
          }
        }
      }
    };
    return {
      listen:listen,
      trigger:trigger,
      remove:remove
    }
  })();
  ObserverEvent.listen('squareMeter88', fn1 = function (price) {
    console.log('价格=' + price);
  });
  ObserverEvent.listen('squareMeter100', function (price) {
    console.log('价格=' + price);
  });
  ObserverEvent.trigger('squareMeter88', 200000);

  //刷新模块信息
  var header = (function () {
    ObserverEvent.listen('loginSucc', function (data) {
      header.setAvatar(data.avatar);
    });
    return {
      setAvatar: function (data) {
        console.log(data + "设置header成功");
      }
    }
  })();
  var nav = (function () {
    ObserverEvent.listen('loginSucc', function (data) {
      nav.setAvatar(data.avatar)
    });
    return {
      setAvatar: function (data) {
        console.log(data + '设置nav成功');
      }
    }
  })();
  var data = {};
  data.avatar = "参数";
  ObserverEvent.trigger('loginSucc', data);
}
export default {
  name: 'DesignWatchModal'
}
</script>

<style scoped>

</style>
