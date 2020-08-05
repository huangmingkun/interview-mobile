/**
 *  微信api封装
 * create by hxd 2019/01/24
 * */
// import wx from 'weixin-js-sdk'
// import store from '../../../store/index';
import $ from 'jquery'
import router from '../../router'
import {Toast, MessageBox} from 'mint-ui'
import axios from 'axios'

/**
 * [wxRegister 微信Api初始化]
 * @param  appid
 * @param  appsecret
 * @param  {Function} callback [ready回调函数]
 */
export function wxRegister () {
  let p = new Promise(function (resolve, reject) {
    // console.log('window.location.href.split(\'#\')[0]',window.location.href.split('#')[0]);
    let params = {
      url: encodeURIComponent(window.location.href.split('#')[0]),
      appid: localStorage.appid,
      secret: localStorage.serect
    }
    console.log('企业微信认证请求后台参数',params);
    /** 无法通过 store.api.getWeixinConfig 获取到接口路径 */
    axios.post('/api/signature', params).then(res => {
      console.log('企业微信认证请求后台',res);
      if (res.data.message === 'OK') {
        let params = {
          // beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
          debug: false, // 开启调试模式
          appId: localStorage.appid, // 必填，公众号的唯一标识APP_ID
          timestamp: parseInt(res.data.data.timestamp), // 必填，生成签名的时间戳
          nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.data.signature, // 必填，签名，见附录1
          jsApiList: [ // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            'onMenuShareTimeline', // 微信朋友圈
            'onMenuShareAppMessage', // 微信朋友
            'onMenuShareQQ', // qq
            'onMenuShareQZone', // qq空间
            'onMenuShareWeibo', // 微博
            'closeWindow', // 关闭窗口
            'scanQRCode', // 扫码
            'onHistoryBack', // 监听返回事件
            'openDefaultBrowser' // 打开默认浏览器
          ]
        };
        console.log('签名参数：',params);
        // console.log(params);
        wx.config(params);
        wx.ready((res) => {
          console.log('注册结果：', res);
          resolve(res);
          // return res;
        });
        wx.error(function (res) {
          console.log('错误信息：' + JSON.stringify(res));
        });
      } else {
        console.log(res.message)
      }
      // resolve(res);
    }).catch(error => {
      console.log(error);
    })
  });
  return p;
}

/**
 * [wxRegister 微信Api初始化]
 * @param  appid
 * @param  appsecret
 * @param  {Function} callback [ready回调函数]
 */
export function wxRegister1 () {
  let p = new Promise(function (resolve, reject) {
    // console.log('window.location.href.split(\'#\')[0]',window.location.href.split('#')[0]);
    let params = {
      url: window.location.href.split('#')[0]
    }
    // console.log('企业微信认证请求后台参数',params);
    /** 无法通过 store.api.getWeixinConfig 获取到接口路径 */
    axios.post('/api/signature', params).then(res => {
      // console.log('企业微信认证请求后台',res);
      if (res.data.message === 'OK') {
        let params = {
          // beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
          debug: false, // 开启调试模式
          // appId: localStorage.appid, // 必填，公众号的唯一标识APP_ID
          appId: res.data.data.corpId, // 必填，公众号的唯一标识APP_ID
          timestamp: parseInt(res.data.data.timestamp), // 必填，生成签名的时间戳
          nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.data.signature, // 必填，签名，见附录1
          jsApiList: [ // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            'onMenuShareTimeline', // 微信朋友圈
            'onMenuShareAppMessage', // 微信朋友
            'onMenuShareQQ', // qq
            'onMenuShareQZone', // qq空间
            'onMenuShareWeibo', // 微博
            'closeWindow', // 关闭窗口
            'scanQRCode', // 扫码
            'setClipboardData', // 剪贴板
            'onHistoryBack', // 监听返回事件
            'openDefaultBrowser' // 打开默认浏览器
          ]
        };
        // console.log('签名参数：',params);
        // console.log(params);
        wx.config(params);
        wx.ready((res) => {
          console.log('注册结果：', res);
          resolve(res);
          // return res;
        });
        wx.error(function (res) {
          console.log('错误信息：' + JSON.stringify(res));
        });
      } else {
        console.log(res.message)
      }
      // resolve(res);
    }).catch(error => {
      console.log(error);
    })
  });
  return p;
}

/**
 * getAuthCodeByWeixin 获取code
 *  * @param  corpId [企业corpId]
 * */
export function getAuthCodeByWeixin (corpId) {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        resolve(res);
        if (res.code) {
          /*  //发起网络请求
           wx.request({
             url: 'https://test.com/onLogin',
             data: {
               code: res.code
             }
           }) */
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  });
}

/**
 * 监听返回事件
 * @params（function} callback 回调函数
 * */
export function watchBackBtn (callback) {
  window.wx.onHistoryBack(function (data) {
    return callback();
  });
}

/**
 * closeWeiXin 是否关闭浏览器
 * */
export function closeWeiXin () {
  wx.closeWindow();
}

/**
 *  scanWeixin 扫码
 * @param type 为qrCode(二维码)、barCode(条形码)、all(全部)。默认all，如果有qrCode、barCode扫描不出来，请修改type为all
 * */
export function scanWeixin () {
  return new Promise(function (resolve, reject) {
    wx.scanQRCode({
      desc: 'scanQRCode desc',
      needResult: 1, // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
      scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        console.log('api-success',res);
        // 回调
        resolve(res);
      },
      cancel: function (res) {
        console.log('api-cancel',res);
        console.log('取消接口');
        // 回调
        reject(res);
      },
      error: function (res) {
        reject(res);
        if (res.errMsg.indexOf('function_not_exist') > 0) {
          alert('版本过低请升级')
        }
      }
    })
  });
}

/**
 * shareWeixin 分享
 * @params link  String  url地址
 * @params title  String  分享标题
 * @params desc  String  分享内容
 * @params imgUrl  String  分享图片的URL地址
 * */
export function shareWeixin (params) {
  return new Promise(function (resolve, reject) {
    let paramsBody = {
      title: params.title,
      desc: params.description,
      link: params.webPageUrl,
      imgUrl: params.imageUrlShare,
      success: function (res) {
        // 用户确认分享后执行的回调函数
        Toast('分享成功');
        document.getElementById('share-modal-view').style.display = 'none';
        resolve(res);
      },
      cancel: function (error) {
        // 用户取消分享后执行的回调函数
        Toast('分享取消');
        document.getElementById('share-modal-view').style.display = 'none';
        reject(error)
      }
    };
    console.log(paramsBody);
    // 2.1 监听“分享到朋友”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareAppMessage(paramsBody);

    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareTimeline(paramsBody);

    // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareQQ(paramsBody);

    // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareWeibo(paramsBody);
  });
}

/**
 * 企业微信页面初始化
 * */
export function initHomePageWeixin () {
  document.title = '我的会议';
  $('.mint-header').remove();
 /* $('.content').css('top', 0);
  $('.content').css('height', '100%');*/
}

/**
 * 唤起默认浏览器 （网络会议加入、开始）
 * 只能通过浏览器的方式 传入 会议的url
 * 安卓端需要提示用户复制会议号
 * ios端直接url传会议号即可
 * 假如当前用户是主持人 需要提示用户复制主持人码 进入会议后粘贴可以设置为主持人
 * */
export function callDefaultBrowserWeixin (params) {
  const url = '/api/joinMeeting/joinUmeeting?meetingNumber=' + params.meetingNo;
  location.href = url;
  // wx.invoke('openDefaultBrowser', {
  //   'url': url, // 在默认浏览器打开redirect_uri，并附加code参数；也可以直接指定要打开的url，此时不会附带上code参数。
  // }, function(res){
  //   if(res.err_msg != "openDefaultBrowser:ok"){
  //     // 错误处理
  //     wx.closeWindow();
  //     window.close();
  //   }
  // });
}

/**
 *  剪贴板
 *  **/
export function copyContentWeixin (content) {
  console.log('内容',content);
  wx.setClipboardData({
    data: content, // 设置的
    success: function(res) {
      console.log('success-res',res);
      console.log(res.errMsg);
      Toast('已复制');
    },
    complete: function (res) {
      console.log('complete-res',res);
    }
  })
}
/**
 *  隐藏右上角菜单接口
 *  **/
export function hideRightOptionMenu() {
  wx.hideOptionMenu();
  // wx.hideAllNonBaseMenuItem();
  // wx.hideMenuItems({
  //   menuList: ['menuItem:refresh'] // 要隐藏的菜单项
  // });
}
export function getNetworkTypeWeixin() {
  wx.getNetworkType({
    success: function (res) {
      let networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
      console.log(networkType);
      if (networkType !== 'wifi') {
        MessageBox.confirm('您即将使用流量浏览界面，会消耗您大量费用，确定要继续浏览吗？', '提示').then(action => {
        }).catch(err => {
          router.go(-1);
        })
      }
    }
  });
}
export default {wxRegister,wxRegister1, getAuthCodeByWeixin, closeWeiXin, watchBackBtn, scanWeixin, shareWeixin, initHomePageWeixin, callDefaultBrowserWeixin, copyContentWeixin, hideRightOptionMenu, getNetworkTypeWeixin}
