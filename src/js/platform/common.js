/**
 *  common api 通用api
 * create by hxd 2019/01/23
 * */
import {closeNative, callGetUUID, callScan, callStartMeeting, callJoinMeeting, callShare, watchGoBackNative} from './native'
import {wxRegister, wxRegister1, getAuthCodeByWeixin, closeWeiXin, shareWeixin, initHomePageWeixin, callDefaultBrowserWeixin, copyContentWeixin, getNetworkTypeWeixin} from './weixin'

/**
 * registerPlatform 注册平台
 * */
export function registerPlatform () {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      let p = new Promise(function (resolve, reject) {
        wxRegister().then(res => {
          resolve(res)
        })
      })
      return p
    }
    default: {
    }
  }
}
/**
 * registerPlatform 注册平台
 * */
export function registerPlatform1 () {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      let p = new Promise(function (resolve, reject) {
        wxRegister1().then(res => {
          resolve(res)
        })
      })
      return p
    }
    default: {
    }
  }
}
/**
 * judgePlatform 判断平台
 * */
export function judgePlatform () {
  if (navigator.userAgent.indexOf('wxwork') !== -1) {
    return 'wxwork'
  } else {
    return 'native'
  }
}
/**
 * getAuthCode 获取code
 *  * @param  corpId [企业corpId]
 * */
export function getAuthCode (corpId) {
  switch (localStorage.platformType) {
    // 集成钉钉
    case 'wxwork': {
      return getAuthCodeByWeixin(corpId)
    }
    default: {
    }
  }
}

/**
 * 获取网络状态
 */
export function getNetworkType() {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      return getNetworkTypeWeixin();
    }
    default: {
    }
  }
}

/**
 * 复制
 * @params content  String  复制的内同
 * */
export function copyContent (content) {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork':
      // return getAuthCodeByWeixin(corpId);
      return copyContentWeixin(content)
      break;
  }
}
/**
 *  hideBarNative 是否隐藏导航条
 *  @params isHide boolen true 隐藏 false显示
 * */
export function setHeaderBar (isHide) {
  // switch (localStorage.platformType) {
  //   // 集成钉钉
  //   case 'DingTalk': {
  //     hideBarDingDing(isHide)
  //     break
  //   }
  //   default: {
  //     callHideBar(isHide)
  //   }
  // }
}
/**
 *  initHeaderView 初始化头部 （主要针对企业微信头部不能定制化隐藏显示）
 *  @params title 头部标题
 *  @params backEvent 返回按钮事件
 * */
export function initHeaderView (title, backEvent) {
  switch (localStorage.platformType) {
    // 企业微信
    case 'wxwork': {
      document.title = title
      watchGoback(backEvent)
    }
  }
}

/**
 *  closeNative 是否关闭浏览器webview
 * */
export function closeWebView () {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork':
      return closeWeiXin()
      break
    case 'native':
      return closeNative()
      break
    default: {
    }
  }
}

/**
 * 获取uuid
 * */
export function getUUID () {
  switch (localStorage.platformType) {
    // 原生
    default: {
      callGetUUID()
    }
  }
}

/**
 * 监听返回按钮事件
 * @params {fun} 回调函数
 * */
export function watchGoback () {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      // alert('返回')
      // window.wx.onHistoryBack(function(data){
      //   alert('back');
      //   return callback
      // })
      // watchBackBtn(fun);
      break
    }
    default: {
      watchGoBackNative()
      break
    }
  }
}

/**
 * scanNative 扫码
 * */
export function scanQRCode () {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': { // return scanWeixin();
    }
    default: {
      // 原生
      return callScan()
    }
  }
}

/**
 * 开始会议 网络会议
 * @params meetingID-string 会议meetingID
 * @params name-string 会议名称name
 * @params meetingNo-string 会议的numericId
 * @params meetingUrl-string 会议的joinUrl
 * @params userName -string 用户名称
 * @params token -string 网络会议token
 * @params userId -string 网络会议userId
 * */
export function startMeeting (params) {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      return callDefaultBrowserWeixin(params)
    }
    // 原生
    default: {
      return callStartMeeting(params)
    }
  }
}

/**
 * 加入会议
 * @params meetingID-string 会议的meetingID
 * @params name-string 会议的名称name
 * @params password-string 会议的password
 * @params meetingNo-string 会议的numericId
 * @params meetingUrl-string 会议的joinUrl
 * */
export function joinMeeting (params) {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      return callDefaultBrowserWeixin(params)
    }
    // 原生
    default: {
      return callJoinMeeting(params)
    }
  }
}

/**
 * share 分享网站url
 * @params platformType-Number// 1:微信聊天  2:微信朋友圈  3:微信收藏  27:钉钉
 * @params contentType(Number)// 0:文本  1:图片  2:网页
 * @params title(string)  // 标题
 * @params description(string)  // 描述
 * @params imageUrlThumb(string)  // 缩略图
 * @params webPageUrl(string) // 链接
 * */
export function share (platformType, contentType, title, text, description, imageUrlShare, imageUrlThumb, webPageUrl) {
  let params = {
    'platformType': platformType,
    'contentType': contentType, // 0:文本  1:图片  2:网页
    'title': title,
    'text': text,
    'description': description,
    'imageUrlShare': imageUrlShare,
    'imageUrlThumb': imageUrlThumb,
    'webPageUrl': webPageUrl
  };
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      return shareWeixin(params)
    }
    // 原生
    default: {
      return callShare(params)
    }
  }
}

export function initHomePage () {
  switch (localStorage.platformType) {
    // 集成企业微信
    case 'wxwork': {
      initHomePageWeixin()
      break
    }
    default: {
    }
  }
}
export default {
  registerPlatform,
  registerPlatform1,
  judgePlatform,
  getAuthCode,
  setHeaderBar,
  initHeaderView,
  watchGoback,
  closeWebView,
  getUUID,
  scanQRCode,
  startMeeting,
  joinMeeting,
  share,
  copyContent,
  getNetworkType
}
