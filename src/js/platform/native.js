

/**
 * 原生api封装
 * create by hxd 2019/01/23
 * */


// let dsBridge = require('dsbridge');

/**
 *  callHideBar 是否隐藏导航条
 *  @params isHide boolen true 隐藏 false显示
 * */
export function callHideBar (isHide) {
  /*dsBridge.call('hideWebViewTopBar', {
    'Hide WebView TopBar': isHide
  }, function (result) {
    console.log(result);
  });*/
}

/**
 *  callClose 是否关闭浏览器webview
 * */
export function closeNative () {
 /* dsBridge.call('closeWebView', function (result) {
    console.log(result);
  })*/
  uexWindow.evaluateScript('','0','goBack()');
}

/**
 * 获取uuid
 * */
export function callGetUUID () {
  dsBridge.call('getUUID', function (UUID) {
    alert(UUID);
    console.log(UUID);
  })
}

/**
 * callScan 扫码
 * */
export function callScan () {
  return new Promise(function (resolve, reject) {
    dsBridge.call('scan', function (QRCodeString) {
      alert(QRCodeString);
      console.log(QRCodeString);
      resolve (QRCodeString);
    })
  })

}

/**
 * 开始会议 网络会议
 * @params meetingNo string 会议meetingNo
 * @params password string 会议的password
 * @params userName string 用户的name
 * @params userId string 会议的userId
 * @params token string 会议的token
 * */
export function callStartMeeting (params) {
  let meetingParams = {
    "domain": params.domain,
    "key": params.key,
    "secret": params.secret,
    'meetingNo': params.meetingNo,
    'meetingPassword': params.meetingPassword,
    'userName': params.userName,
    'userId': params.userId,
    'token': params.token,
  };
  // window.alert('Start: ' + JSON.stringify(meetingParams));
  let type = 0;
  uexWindow.evaluateScript("",'0', "netWorkMeeting("+JSON.stringify(meetingParams)+","+type+")");
  /*return new Promise(function (resolve, reject) {
    // demo
    /!* let token = 'rUtQpR1mw2lA_gdOSuJ6D5GSJWj0jKj1WciPt5u1o_A.BgMsaEMvZE5NWXlpVDZOd1prV01nL0VHakwvdy91T2tFMDlzQ0xwbnBFODRqTT1AMjE3ZjY4ZDljMTdkZDQ5Njg3MWU0MmI0YjE5NjI3MGJhYTFkZjBkMTRjYmMxNGI0MjZkYzEzNDk1YTgyZWIwNgAMM0NCQXVvaVlTM3M9'
    let userID = '9Tue4Z5qS0izn5SUnK9p_w';
    let meetingID = '15606415055';
    let name = '开会人名称'; *!/
    let meetingParams = {
      'meetingID': params.meetingID,
      'name': params.name,
      'userID': params.userID,
      'token': params.token
    };
    dsBridge.call('startMeeting', meetingParams, function (result) {
      // result: MobileRTCMeetError SDK错误码
      console.log(result);
      resolve (result);
    })
  })*/
}

/**
 * 加入会议
 * @params meetingNo string 会议的meetingNo
 * @params userName string 用户的name
 * @params password string 会议的password
 * */
export function  callJoinMeeting (params) {
  let meetingParams = {
    "domain": params.domain,
    "key": params.key,
    "secret": params.secret,
    'meetingNo': params.meetingNo,
    'meetingPassword': params.meetingPassword,
    'userName': params.userName,
  };
  let type = 1;
  // window.alert('Join: ' + JSON.stringify(meetingParams));
  uexWindow.evaluateScript("",'0', "netWorkMeeting("+JSON.stringify(meetingParams)+","+type+")");
  /*return new Promise(function (resolve, reject) {
    // demo
    /!* let meetingID = '15606415055';
    let name = '参会人名称';
    let password = '12345'; *!/
    let meetingParams = {
      'meetingID': params.meetingID,
      'name': params.name,
      'password': params.password
    };
    dsBridge.call('joinMeeting', meetingParams, function (result) {
      // result: MobileRTCMeetError SDK错误码
      console.log(result);
      resolve (result);
    })
  });*/
}

/**
 * callShareText 分享文本
 * @params platformType	Number	// 1:微信聊天  2:微信朋友圈  3:微信收藏  27:钉钉
 * @params contentType	Number	// 0:文本  1:图片  2:网页
 * @params text	String	 // 文本
 * */
export function callShareText (params) {
  let paramsText = {
    'platformType': params.platformType,
    'contentType': params.contentType,
    'text': params.text
  };
  dsBridge.call('share', paramsText, function (result) {
    console.log(result);
  })
}

/**
 * callShareImage 分享图片
 * @params platformType	Number	// 1:微信聊天  2:微信朋友圈  3:微信收藏  27:钉钉
 * @params contentType	Number	// 0:文本  1:图片  2:网页
 * @params imageUrlShare	String	 // 分享图片
 * @params imageUrlThumb	String	 // 缩略图
 * */
export function callShareImage (platformType, contentType, imageUrlShare, imageUrlThumb) {
  let paramsImage = {
    'platformType': 1,
    'contentType': 1,
    'imageUrlShare': imageUrlShare,
    'imageUrlThumb': imageUrlThumb
  };
  dsBridge.call('share', paramsImage, function (result) {
   console.log(result);
  })
}

/**
 * callShareWeb 分享网站url
 * @params platformType	Number	// 1:微信聊天  2:微信朋友圈  3:微信收藏  27:钉钉
 * @params contentType	Number	// 0:文本  1:图片  2:网页
 * @params title	String	 // 标题
 * @params description	String	 // 描述
 * @params imageUrlThumb	String	 // 缩略图
 * @params webPageUrl	String	 // 链接
 * */
export function callShareWeb (platformType, contentType, title, description,imageUrlThumb, webPageUrl) {
  let paramsWebPage = {
    'platformType': 1,
    'contentType': 2,    // 0:文本  1:图片  2:网页
    'title': title,
    'description': description,
    'imageUrlThumb': imageUrlThumb,
    'webPageUrl': webPageUrl
  };
  dsBridge.call('share', paramsWebPage, function (result) {
    console.log(result);
  })
}

/**
 * callShare 分享
 * @params platformType	Number	// 1:微信聊天  2:微信朋友圈  3:微信收藏  27:钉钉
 * @params contentType	Number	// 0:文本  1:图片  2:网页
 * @params title	String	 // 标题
 * @params text	String	 // 文本
 * @params description	String	 // 描述
 * @params imageUrlShare	String	 // 分享图片
 * @params imageUrlThumb	String	 // 缩略图
 * @params webPageUrl	String	 // 链接
 * */
export function callShare (params) {
  let paramsbody = {
    'platformType': params.platformType,
    'contentType': params.contentType,    // 0:文本  1:图片  2:网页
    'title': params.title,
    'text': params.text,
    'description': params.description,
    'imageUrlShare': params.imageUrlShare,
    'imageUrlThumb': params.imageUrlThumb,
    'webPageUrl': params.webPageUrl
  };
  dsBridge.call('share', paramsbody, function (result) {
    console.log(result);
  })
}
/**
 * 浏览器以及原生 物理返回键 返回按钮监听
 * */
export  function watchGoBackNative () {
  // alert('返回');
    document.addEventListener('backbutton', function (e) {
      e.preventDefault();
    });
}
export default {callHideBar, closeNative, callGetUUID, callScan, callStartMeeting, callJoinMeeting, callShareText, callShareImage, callShareWeb, callShare, watchGoBackNative}
