import { getQueryStringArgs } from '@/js/common/utils';
import { registerPlatform1 } from '@/js/platform/common';
import wxConfig from '@/js/platform/weixin.conf';
const watchBack = (function () {
  let vm; // 调用 watchBack() 的组件
  let isRun = false; // 控制只注册、监听一次
  let timer; // 定时器
  let currUrl; // 当前页面 url
  return function(_vm) {
    vm = _vm;
    if (isRun) {
      return Promise.resolve();
    }
    isRun = true;
    console.log('=== 注册 ===');
    return registerPlatform1().then(() => {
      console.log("watch for qrcode...");
      /** 茂信点击一次返回会触发两次返回操作，原因未知。因此需要函数节流。 */
      wx.onHistoryBack(function() {
        // alert('onHistoryBack');
        if (timer) {
          return false; // 触发第二次返回时，阻止页面返回上一页
        }
        /**
         * 当前 url 和 vm(组件) 要立即获取，
         * 否则在延迟执行监听函数的时候，
         * 这两个变量可能会变成跳转后页面的值。
         * */
        currUrl = location.href;
        timer = setTimeout(back.bind(vm), 50);
        return false; // 阻止默认事件
      });
    });
  };
  // 回退方法
  function back() {
    timer = null;
    const that = this;
    console.log("返回，当前url:" + currUrl);
    console.log("返回，当前页面:", that.$options && that.$options.name);
    // alert("当前页面:" + (that.$options && that.$options.name));
    const urlMap = {
      home: closeWindow,
      submit: closeWindow,
      scan: closeWindow,
      meetingLink: closeWindow,
      meetingDetail: meetingDetailBack,
      joinMeeting: joinMeetingBack
    };
    let backFn;
    Object.keys(urlMap).forEach(key => {
      if (currUrl.indexOf(key) > -1) {
        backFn = urlMap[key];
      }
    });
    return backFn && backFn.call(that);
  }
  // 通知详情退出
  function closeWindow() {
    wx.closeWindow();
    return false;
  }
  // 会议详情退出
  function meetingDetailBack() {
    const that = this;
    const isShare = sessionStorage.getItem('isShare');
    if (isShare) {
      wx.closeWindow();
    } else {
      console.log("返回meetingLink页面");
      window.location.href = currUrl.replace(/meetingDetail/, "meetingLink");
    }
    return false;
  }
  // 加入会议退出
  function joinMeetingBack() {
    const that = this;
    that.toMeetingDetail();
    return false;
  }
})();
export default {
  methods: {
    watchGoBackForQrCode() {
      const platformType = localStorage.platformType;
      switch (platformType) {
        // 企业微信
        case "wxwork":
          return watchBack(this);
        default:
          break;
      }
    },
    // 修正企业微信中的#号在查询字符串后面的情况：
    // 'http://jmmeet.systec.com.cn/www/?code=code&state=state#/meetingLink/'
    specialReload () {
      const url = location.href;
      const reg = /(\?[^\?#]+)#/;
      let newUrl, queryStr;
      if (reg.test(url)) {
        queryStr = RegExp.$1;
        newUrl = url.replace(reg, "#") + queryStr;
        location.href = newUrl;
        return true;
      }
      return false;
    },
    // 封装 $router.push 方法
    routerPush(path) {
      // alert('push => ' + path);
      const query = getQueryStringArgs();
      delete query.targetPage;
      this.$router.push({
        path,
        query
      });
    },
    isAuthorized() {
      return !!sessionStorage.getItem('login');
    },
    // 请求微信接口获取 code ，然后登录
    authorize(targetPage, state, code) {
      sessionStorage.setItem('targetPage', targetPage);
      if (!code) {
        console.log('=== 重新获取code ===');
        const url = wxConfig.baseUrl + "/www/#/qrLogin/";
        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
        'appid=' + wxConfig.appid +
        '&redirect_uri=' + encodeURIComponent(url) +
        '&response_type=code' +
        '&scope=snsapi_userinfo' +
        '&agentid=' + wxConfig.agentid +
        '&state=' + state +
        '#wechat_redirect';
        return;
      }
      // code 可用，则直接跳转至登录页
      this.$router.push({
        path: "/qrLogin",
        query: {
          code: code,
          state: state
        }
      });
    }
  }
};
