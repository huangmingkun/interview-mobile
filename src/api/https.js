import axios from 'axios'
import router from '../router/index'
// import Nprogress from 'nprogress' // 引入Nprogress进度条
// var qs = require('qs');
axios.defaults.timeout = 10000
// axios.defaults.baseURL = 'http://127.0.0.1:2020' // node+express服务器地址
axios.defaults.baseURL = 'http://localhost:8090' // 本地java服务器地址
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // Nprogress进度条开始
    // Nprogress.start()
    // 查询储存在本地的token值
    // 这边可根据自己的需求设置headers，我司采用basic基本认证
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    let authToken = localStorage.portalToken;
    if (authToken) {
      config.headers.Authorization = 'Bearer' + ' ' + authToken
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
);
// http response 拦截器
axios.interceptors.response.use(response => {
  // Nprogress进度条结束
  // Nprogress.done()
  if (response.data) {
    if (response.data.responseStatus === 401) {
      console.log('response' + 401);
      localStorage.removeItem('portalToken');
      localStorage.removeItem('permissions');
      router.push('/');
    }
  }
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求';
        break;
      case 401:
        err.message = '未授权，请重新登录';
        localStorage.removeItem('portalToken');
        localStorage.removeItem('permissions');
        router.push('/');
        break;
      case 403:
        err.message = '拒绝访问';
        break;
      case 404:
        err.message = '请求错误,未找到该资源';
        break;
      case 405:
        err.message = '请求方法未允许';
        break;
      case 408:
        err.message = '请求超时';
        break;
      case 500:
        err.message = '微服务故障, 请稍后再试';
        break;
      case 501:
        err.message = '网络未实现';
        break;
      case 502:
        err.message = '网络错误';
        break;
      case 503:
        err.message = '服务不可用';
        break;
      case 504:
        err.message = '网络超时';
        break;
      case 505:
        err.message = 'http版本不支持该请求';
        break;
      default:
        err.message = `连接错误`
    }
  } else {
    // err.message = "连接到服务器失败"
    // parent.location.href ='/';
  }
  console.log(err.message);
  return Promise.resolve(err.response)
});

const ApiService = {
  // 登录
  portalLogin: (params) => {
    return axios.get('/mobileLogin', params)
  },
  // 个人信息/权限
  getProfile: () => {
    return axios.get('/v2/users/profile').then(res => res.data);
  },
  // 修改个人中心的密码
  editorPassword: (params) => {
    return axios.put('/v2/users/password', params).then(res => res.data);
  },
  // 修改个人中心的图片
  editorPicture: () => {
    return axios.put('/v2/users/upload').then(res => res.data);
  },
  // 修改个人中心的个人基本信息
  editorPersonalMsg: (userId, params) => {
    return axios.put('/v2/users/' + userId, params).then(res => res.data);
  },
  // 助理添加--获取数据
  getAssistantsAccountS: (params) => {
    return axios.get('/v2/users/assistants', {params: params}).then(res => res.data);
  },
  // 助理添加--提交数据
  postAssistantsAccountS: (params) => {
    return axios.post('/v2/users/assistants', params).then(res => res.data);
  },
  // 我的会议--表格数据获取
  getMeetings: (params) => {
    return axios.get('/v2/meetings/scheduled', {params: params}).then(res => res.data);
  },
  // 我的会议--新增我的会议
  addNewMeeting: (params) => {
    return axios.post('/v2/meetings', params).then(res => res.data);
  },
  // 我的会议--编辑我的会议
  editorMeeting: (meetingId, params) => {
    return axios.put('/v2/meetings/' + meetingId, params).then(res => res.data);
  },
  // 我的会议--删除会议
  deleteMeeting: (meetingId) => {
    return axios.delete('/v2/meetings/' + meetingId + '').then(res => res.data);
  },
  // 我的会议--结束会议
  finishedMeeting: (meetingId) => {
    return axios.post('/v2/meetings/' + meetingId + '/end').then(res => res.data);
  },
  // 网络研讨会获取数据
  getWebinarData: (params) => {
    return axios.get('/v2/webinars/scheduled', {params: params}).then(res => res.data);
  },
  // 删除网络研讨会
  deleteWebinar: (webinarId) => {
    return axios.delete('/v2/webinars/' + webinarId + '').then(res => res.data);
  },
  // 新增网络研讨会
  addNewWebinars: (params) => {
    return axios.post('/v2/webinars', params).then(res => res.data);
  },
  // 修改网络研讨会
  editorNewWebinars: (webinarMeetingId, params) => {
    return axios.put('/v2/webinars/' + webinarMeetingId, params).then(res => res.data);
  },
  // 历史会议--会议
  getHistoryMeetings: (params) => {
    return axios.get('/v2/meetings', {params: params}).then(res => res.data);
  },
  // 历史会议--会议--查看明细
  participantsList: (meetingId, params) => {
    return axios.get('/v2/meetings/' + meetingId + '/participants', {params: params}).then(res => res.data);
  },
  // 历史会议--网络研讨会
  getHistoryWebinar: (params) => {
    return axios.get('/v2/webinars', {params: params}).then(res => res.data);
  },
  // 账号管理--获取数据
  getAccountSDatas: (params) => {
    return axios.get('/v2/users', {params: params}).then(res => res.data);
  },
  // 账号管理--删除账号
  deleteAccount: (userId) => {
    return axios.delete('/v2/users/' + userId + '').then(res => res.data);
  },
  // 账号管理--创建账号
  addNewAccount: (params) => {
    return axios.post('/v2/users', params).then(res => res.data);
  },
  // 修改用户账号(租户)
  editorUsersAccount: (userId, params) => {
    return axios.put('/v2/users/' + userId, params).then(res => res.data);
  },
  // 修改租户（激活/禁用）
  activeOrDisabledTenant: (userId, params) => {
    return axios.put('v2/users/ ' + userId + '', params).then(res => res.data);
  },
  // 统计报表--会议账号分布
  getMeetingAccount: (params) => {
    return axios.get('/v2/reports/meetings/users', {params: params}).then(res => res.data);
  },
  // 统计报表--会议总览
  getTotalMeetings: (params) => {
    return axios.get('/v2/reports/meetings/summary', {params: params}).then(res => res.data);
  },
  // 统计报表--会议明细报表导出(租户)
  detailReportExport: (params) => {
    return axios.get('/v2/reports/meetings/details/export', {params: params}).then(res => res.data);
  },
  // 统计报表--会议趋势报表(个人|公共)(租户)
  getTrendMeetingReport: (params) => {
    return axios.get('/v2/reports/meetings/trends', {params: params}).then(res => res.data);
  },
  // 统计报表--会议并发报表（公共）（租户）
  getConcurrencyReport: (params) => {
    return axios.get('/v2/reports/meetings/concurrency', {params: params}).then(res => res.data);
  },
  // 统计报表--网络研讨会账号报表(租户)
  getWebinarAccountReport: (params) => {
    return axios.get('/v2/reports/webinars/users', {params: params}).then(res => res.data);
  },
  // 统计报表--网络研讨会汇总报表(租户)
  getWebinarTotalReport: (params) => {
    return axios.get('/v2/reports/webinars/summary', {params: params}).then(res => res.data);
  },
  // 统计报表--网络研讨会明细报表导出(租户)
  webinarReportExport: (params) => {
    return axios.get('/v2/reports/webinars/details/export', {params: params}).then(res => res.data);
  },
  // 统计报表--网络研讨会趋势报表(租户)
  getWebinarTrendReport: (params) => {
    return axios.get('/v2/reports/webinars/trends', {params: params}).then(res => res.data);
  },
  // 统计报表--CRC报表(租户)
  getCRCReport: (params) => {
    return axios.get('/v2/reports/crc', {params: params}).then(res => res.data);
  },
  // 统计报表--PSTN报表(租户)
  getPSTNReport: (params) => {
    return axios.get('/v2/reports/pstn', {params: params}).then(res => res.data);
  }
};
export default ApiService
