var Filter = {
  // 时间戳转时间格式HH:MM
  timeFormatToHHmm: function (value) {
    let meet_time_time = new Date(value)
    let hours = meet_time_time.getHours() > 9 ? meet_time_time.getHours() : '0' + meet_time_time.getHours()
    let minutes = meet_time_time.getMinutes() > 9 ? meet_time_time.getMinutes() : '0' + meet_time_time.getMinutes()
    return hours + ':' + minutes
  },
  // 时间戳转时间格式
  timestampToTime: function (timestamp) {
    let date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let days = date.getDay()
    switch (days) {
      case 1:
        days = '星期一'
        break
      case 2:
        days = '星期二'
        break
      case 3:
        days = '星期三'
        break
      case 4:
        days = '星期四'
        break
      case 5:
        days = '星期五'
        break
      case 6:
        days = '星期六'
        break
      case 0:
        days = '星期日'
        break
    }
    if (date.getMonth() === new Date().getMonth()) {
      switch (Number(D) - new Date().getDate()) {
        case 0:
          return '今天(' + Y + M + D + ')'
          break
        case 1:
          return '明天(' + Y + M + D + ')'
          break
        default:
          return days + '(' + Y + M + D + ')'
      }
    } else {
      return days + '(' + Y + M + D + ')'
    }
  },
  // 时间戳转时间格式
  timestampToTime1: function (timestamp) {
    let date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let H = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let F = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    return Y + M + D + ' ' + H + F
  },
  // 时间格式化 Y + M + D + H + F
  timeFormat: function (date) {
    let Y = date.getFullYear() + '-'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    let H = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    let F = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    //  let S = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + H + F
  },
  // 分钟转换成hh:mm格式
  minuteToHHmm: function (minute) {
    let hh = minute / 60 < 10 ? '0' + minute / 60 : minute / 60
    let mm = (minute * 60 - (minute / 60) * 60) < 10 ? '0' + (minute * 60 - (minute / 60) * 60) : (minute * 60 - (minute / 60) * 60)
    return hh + ':' + mm
  },
  ellipsis: function (value, length) {
    if (!value) return ''
    if (value.length > length) {
      return value.slice(0, length) + '...'
    }
    return value;
  }
};
export default Filter;

export function checkEmail (str) {
  let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$') // 正则表达式
  return !(str === '' || !reg.test(str))
}

export function FormatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

export function ellipsis (value, length) {
  if (!value) return ''
  if (value.length > length) {
    return value.slice(0, length) + '...'
  }
  return value
}

export function Compare (property) {
  return function (a, b) {
    let value1 = a[property]
    let value2 = b[property]
    return value1 - value2
  }
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

export function addClass (obj, cls) {
  let objclass = obj.className
  let blank = (objclass !== '') ? ' ' : ''
  let added = objclass + blank + cls
  obj.className = added
}

export function removeClass (obj, cls) {
  let objclass = ' ' + obj.className + ' '
  objclass = objclass.replace(/(\s+)/gi, ' ')
  let removed = objclass.replace(' ' + cls + ' ', ' ')
  removed = removed.replace(/(^\s+)|(\s+$)/g, '')
  obj.className = removed
}

export function hasClassname (obj, cls) {
  let objclass = obj.className
  let objclasslst = objclass.split(/\s+/)
  let x = 0
  for (x in objclasslst) {
    if (objclasslst[x] === cls) {
      return true
    }
  }
  return false
}

export function timestampToTime (timestamp) {
  let date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let H = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let F = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  return Y + M + D + ' ' + H + F
}

// 对象和数组互相转换
export function convertObjectById (obj, keyName) {
  let i, len, k, res
  keyName = keyName || 'id'
  // obj 为数组
  if (obj instanceof Array) {
    res = {}
    for (i = 0, len = obj.length; i < len; i++) {
      if (!obj[i]) {
        continue
      }
      k = obj[i][keyName]
      if (k) {
        res[k] = obj[i]
      }
    }
    return res;
  }
  // obj 为对象
  if (obj instanceof Object) {
    res = []
    for (k in obj) {
      res.push(obj[k]);
    }
    return res;
  }
  throw new Error('传入的参数必须为数组或对象！');
}

// 根据指定键名返回其对应值的字符串
export function getIds (obj, keyName, separator) {
  let i, len, key, item, value, res = [];
  keyName = keyName || 'id';
  separator = separator || ',';
  // obj 为数组
  if (obj instanceof Array) {
    for (i = 0, len = obj.length; i < len; i++) {
      item = obj[i];
      if (item.hasOwnProperty(keyName)) {
        res.push(item[keyName]);
      }
    }
    return res.join(separator);
  }
  // obj 为对象
  if (obj instanceof Object) {
    for (key in obj) {
      value = obj[key];
      if (value.hasOwnProperty(keyName)) {
        res.push(value[keyName]);
      }
    }
    return res.join(separator);
  }
}

// 使用分钟梯度向后修正时间
export function fixTime(date, minutesGradient) {
  if (!minutesGradient) {
    return date;
  }
  let minutes = date.getMinutes();
  const divideRes = minutes / minutesGradient;
  minutes = (Math.floor(divideRes) + 1) * minutesGradient;
  date.setMinutes(minutes);
  return date;
}

// 前面自动补零(内部函数)
export function prefixInt(num, len) {
  // substr()会把第一个负参数加上字符串长度，即取尾部len位
  return ('0000' + num).substr(-len);
}

// 会议时长自动转换
export function calcDuration(value) {
  let strArr, hours, minutes;
  // 字符串 '01:00'
  if (typeof value === 'string') {
    strArr = value.split(':');
    return (Number(strArr[0]) * 60 + Number(strArr[1])) * 60 * 1000;
  }
  // 毫秒数 3600000(60*60*1000)
  if (typeof value === 'number') {
    value = Math.ceil(value / (60 * 1000));
    hours = Math.floor(value / 60);
    minutes = Math.ceil(value % 60);
    return prefixInt(hours, 2) + ':' + prefixInt(minutes, 2);
  }
}

// 获取url中的query参数，返回一个对象
export function getQueryStringArgs(){
  let qs = null,
      tempStr = null,
      args = {},
      items = [],
      item = null,
      name = null,
      value = null,
      i = 0,
      len = 0;
  // 取得查询字符串并去掉开头的问号
  qs = (location.search.length > 0 ? location.search.substring(1) : "");
  if (!qs) {
    // 防止查询字符串前有#
    // http://testmeet01.chinajinmao.cn/www/#/meetingLink/?code=code&state=state
    tempStr = location.href.split('?')[1];
    qs = tempStr || '';
  }
  items = qs.length ? qs.split('&') : [];
  for (i = 0, len = items.length; i < len; i++) {
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}
