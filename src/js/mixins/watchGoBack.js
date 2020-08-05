// import {watchBackBtn} from '@/assets/script/platform/weixin';
// import wx from "weixin-js-sdk";

export default {
  methods: {
    watchGoBack: function () {
      const platformType = localStorage.platformType;
      switch (platformType) {
        // 企业微信
        case 'wxwork':
          console.log('watch...');
          let timer = null;
          const exitIfNeeded = function(currentUrl) {
            return function() {
              console.log('返回，当前url:' + currentUrl);
              timer = null;
              const exitUrlsArr = [
                '/home',
                '/information/submit'
              ];
              const toBeExit = exitUrlsArr.some(url => currentUrl.indexOf(url) > -1);
              if (toBeExit) {
                wx.closeWindow();
                return false;
              }
              return true;
            }
          };
          /** 茂信点击一次返回会触发两次返回操作，原因未知。因此需要函数节流。 */
          wx.onHistoryBack(function () {
            if (timer) {
              return false; // 触发第二次返回时，阻止页面返回上一页
            }
            timer = setTimeout(exitIfNeeded(location.href), 50);
          });
          break;
        default:
          break;
      }
    }
  }
}
