webpackJsonp([10],{"0zx1":function(e,t){},"47or":function(e,t){},N0fC:function(e,t,n){"use strict";var r=[{path:"/",name:"CommonUse",component:function(){return n.e(0).then(n.bind(null,"yQhT"))}},{path:"/home",name:"Home",component:function(){return n.e(8).then(n.bind(null,"lO7g"))}},{path:"/router",name:"router",component:function(){return n.e(7).then(n.bind(null,"RWkE"))},children:[{path:"children",component:function(){return n.e(6).then(n.bind(null,"MKGA"))}}],beforeEnter:function(e,t,n){n()}},{path:"/debounceOrThrottle",name:"DebounceOrThrottle",component:function(){return n.e(3).then(n.bind(null,"gL/L"))}},{path:"/ulList",name:"ulList",component:function(){return n.e(5).then(n.bind(null,"kEeb"))}},{path:"/alloyFinger",name:"alloyFinger",component:function(){return n.e(1).then(n.bind(null,"fHhe"))}},{path:"/scrollTop",name:"scrollTop",component:function(){return n.e(4).then(n.bind(null,"SFPu"))}},{path:"/slot",name:"Slot",component:function(){return n.e(2).then(n.bind(null,"aucd"))}}];t.a=r},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("fZjL"),o=n.n(r),a=n("7+uW"),u=n("mvHQ"),s=n.n(u),i=n("woOf"),c=n.n(i),p={name:"MyPopubList",data:function(){return{}},props:{popupVisible:{type:Boolean,required:!0},menuLists:{type:Array,required:!1},position:{type:String,required:!1,default:"bottom"},isCancelBtnShow:{type:Boolean,required:!1,default:!1}},computed:{},created:function(){},methods:{closePopup:function(e){this.$emit("select-content",e)},cancelPopop:function(){this.$emit("select-content")}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mt-popup",{staticClass:"popup-container",attrs:{closeOnClickModal:!1,position:e.position},model:{value:e.popupVisible,callback:function(t){e.popupVisible=t},expression:"popupVisible"}},[e._l(e.menuLists,function(t,r){return n("p",{key:r,staticClass:"popup-content",class:{"border-bottm":r!==e.menuLists.length-1||e.isCancelBtnShow,selected:e.$route.path===t.path},on:{click:function(n){return e.closePopup(t)}}},[e._v("\n      "+e._s(t.name))])}),e._v(" "),e.isCancelBtnShow?n("mt-button",{staticClass:"cancel-btn",attrs:{type:"primary"},on:{click:e.cancelPopop}},[e._v("\n      取消")]):e._e()],2)],1)},staticRenderFns:[]};var f=n("VU/8")(p,l,!1,function(e){n("0zx1")},"data-v-106d89f8",null).exports,d=n("N0fC"),g={name:"MenuList",data:function(){return{popupMenuVisible:!1,position:"bottom"}},computed:{menuLists:function(){return d.a}},components:{MyPopubList:f},methods:{menuClick:function(){this.popupMenuVisible=!this.popupMenuVisible},selectContent:function(e){this.popupMenuVisible=!this.popupMenuVisible,e&&e.path&&this.$router.push({path:e.path})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-list"},[n("mt-button",{on:{click:function(t){return e.menuClick()}}},[e._v("菜单")]),e._v(" "),n("my-popub-list",{attrs:{"popup-visible":e.popupMenuVisible,"menu-lists":e.menuLists,position:e.position,isCancelBtnShow:!0},on:{"select-content":e.selectContent}})],1)},staticRenderFns:[]};var h={name:"App",components:{MenuList:n("VU/8")(g,m,!1,function(e){n("eH9R")},"data-v-88e3d20a",null).exports},created:function(){var e=this;sessionStorage.getItem("interviewMsg")&&this.$store.replaceState(c()({},JSON.parse(sessionStorage.getItem("interviewMsg")))),sessionStorage.removeItem("interviewMsg"),window.addEventListener("beforeunload",function(){sessionStorage.setItem("interviewMsg",s()(e.$store.state))})}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade"}},[t("router-view",[t("router-view")],1)],1),this._v(" "),t("menu-list")],1)},staticRenderFns:[]};var b=n("VU/8")(h,v,!1,function(e){n("47or")},null,null).exports,M=n("YaEn"),w=n("//Fk"),k=n.n(w),S=n("mtWM"),y=n.n(S);y.a.defaults.timeout=5e3,y.a.defaults.baseURL="http://127.0.0.1:2020",y.a.interceptors.request.use(function(e){e.headers["Content-Type"]="application/json;charset=utf-8";var t=localStorage.portalToken;return t&&(e.headers.Authorization="Bearer "+t),e},function(e){return k.a.reject(e)}),y.a.interceptors.response.use(function(e){return e.data&&401===e.data.responseStatus&&(localStorage.removeItem("portalToken"),localStorage.removeItem("permissions"),M.a.push("/")),e},function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="错误请求";break;case 401:e.message="未授权，请重新登录",localStorage.removeItem("portalToken"),localStorage.removeItem("permissions"),M.a.push("/");break;case 403:e.message="拒绝访问";break;case 404:e.message="请求错误,未找到该资源";break;case 405:e.message="请求方法未允许";break;case 408:e.message="请求超时";break;case 500:e.message="微服务故障, 请稍后再试";break;case 501:e.message="网络未实现";break;case 502:e.message="网络错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网络超时";break;case 505:e.message="http版本不支持该请求";break;default:e.message="连接错误"}return k.a.resolve(e.response)});var T={portalLogin:function(e){return y.a.get("/mobileLogin",e)},getProfile:function(){return y.a.get("/v2/users/profile").then(function(e){return e.data})},editorPassword:function(e){return y.a.put("/v2/users/password",e).then(function(e){return e.data})},editorPicture:function(){return y.a.put("/v2/users/upload").then(function(e){return e.data})},editorPersonalMsg:function(e,t){return y.a.put("/v2/users/"+e,t).then(function(e){return e.data})},getAssistantsAccountS:function(e){return y.a.get("/v2/users/assistants",{params:e}).then(function(e){return e.data})},postAssistantsAccountS:function(e){return y.a.post("/v2/users/assistants",e).then(function(e){return e.data})},getMeetings:function(e){return y.a.get("/v2/meetings/scheduled",{params:e}).then(function(e){return e.data})},addNewMeeting:function(e){return y.a.post("/v2/meetings",e).then(function(e){return e.data})},editorMeeting:function(e,t){return y.a.put("/v2/meetings/"+e,t).then(function(e){return e.data})},deleteMeeting:function(e){return y.a.delete("/v2/meetings/"+e).then(function(e){return e.data})},finishedMeeting:function(e){return y.a.post("/v2/meetings/"+e+"/end").then(function(e){return e.data})},getWebinarData:function(e){return y.a.get("/v2/webinars/scheduled",{params:e}).then(function(e){return e.data})},deleteWebinar:function(e){return y.a.delete("/v2/webinars/"+e).then(function(e){return e.data})},addNewWebinars:function(e){return y.a.post("/v2/webinars",e).then(function(e){return e.data})},editorNewWebinars:function(e,t){return y.a.put("/v2/webinars/"+e,t).then(function(e){return e.data})},getHistoryMeetings:function(e){return y.a.get("/v2/meetings",{params:e}).then(function(e){return e.data})},participantsList:function(e,t){return y.a.get("/v2/meetings/"+e+"/participants",{params:t}).then(function(e){return e.data})},getHistoryWebinar:function(e){return y.a.get("/v2/webinars",{params:e}).then(function(e){return e.data})},getAccountSDatas:function(e){return y.a.get("/v2/users",{params:e}).then(function(e){return e.data})},deleteAccount:function(e){return y.a.delete("/v2/users/"+e).then(function(e){return e.data})},addNewAccount:function(e){return y.a.post("/v2/users",e).then(function(e){return e.data})},editorUsersAccount:function(e,t){return y.a.put("/v2/users/"+e,t).then(function(e){return e.data})},activeOrDisabledTenant:function(e,t){return y.a.put("v2/users/ "+e,t).then(function(e){return e.data})},getMeetingAccount:function(e){return y.a.get("/v2/reports/meetings/users",{params:e}).then(function(e){return e.data})},getTotalMeetings:function(e){return y.a.get("/v2/reports/meetings/summary",{params:e}).then(function(e){return e.data})},detailReportExport:function(e){return y.a.get("/v2/reports/meetings/details/export",{params:e}).then(function(e){return e.data})},getTrendMeetingReport:function(e){return y.a.get("/v2/reports/meetings/trends",{params:e}).then(function(e){return e.data})},getConcurrencyReport:function(e){return y.a.get("/v2/reports/meetings/concurrency",{params:e}).then(function(e){return e.data})},getWebinarAccountReport:function(e){return y.a.get("/v2/reports/webinars/users",{params:e}).then(function(e){return e.data})},getWebinarTotalReport:function(e){return y.a.get("/v2/reports/webinars/summary",{params:e}).then(function(e){return e.data})},webinarReportExport:function(e){return y.a.get("/v2/reports/webinars/details/export",{params:e}).then(function(e){return e.data})},getWebinarTrendReport:function(e){return y.a.get("/v2/reports/webinars/trends",{params:e}).then(function(e){return e.data})},getCRCReport:function(e){return y.a.get("/v2/reports/crc",{params:e}).then(function(e){return e.data})},getPSTNReport:function(e){return y.a.get("/v2/reports/pstn",{params:e}).then(function(e){return e.data})}},C=n("NYxO");a.default.use(C.a);var H=new C.a.Store({state:{count:123,loginData:{name:"hmk",password:"12345"},todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},getters:{doneTodos:function(e){return e.todos.filter(function(e){return e.done})},doneTodosCount:function(e,t){return t.doneTodos.length},getTodoById:function(e){return function(t){return e.todos.find(function(e){return e.id===t})}}},mutations:{increment:function(e,t){e.count+=t.amount}},actions:{actionIncrement:function(e){e.dispatch;var t=e.commit,n=e.state;e.getters,t("increment",{amount:n.count})}}}),D=n("Au9i"),L=n.n(D),R=(n("d8/S"),n("muQq"),n("erWL"),n("qeJi")),A=n("M4fF"),_=n.n(A);a.default.prototype.$log=window.console.log,a.default.prototype.$lodash=_.a,a.default.use(L.a),a.default.prototype.$ApiService=T,a.default.config.productionTip=!1,o()(R.a).forEach(function(e){a.default.filter(e,R.a[e])}),new a.default({el:"#app",router:M.a,store:H,components:{App:b},template:"<App/>"})},UVIz:function(e,t){},YaEn:function(e,t,n){"use strict";var r=n("7+uW"),o=n("/ocq"),a=n("Y81h"),u=n.n(a),s=(n("UVIz"),n("N0fC")),i=["/error/403","/error/404","/error/500","/login","/router","/register"];r.default.use(o.a),u.a.configure({easing:"ease",speed:500,showSpinner:!1});var c=new o.a({routes:s.a});t.a=c;c.beforeEach(function(e,t,n){u.a.start(),i.indexOf(e.fullPath),n()}),c.beforeResolve(function(e,t,n){n()}),c.afterEach(function(e,t){u.a.done()})},"d8/S":function(e,t){},eH9R:function(e,t){},erWL:function(e,t){},muQq:function(e,t){},qeJi:function(e,t,n){"use strict";t.b=function(){var e=null,t=null,n={},r=[],o=null,a=null,u=null,s=0,i=0;(e=location.search.length>0?location.search.substring(1):"")||(t=location.href.split("?")[1],e=t||"");for(r=e.length?e.split("&"):[],s=0,i=r.length;s<i;s++)o=r[s].split("="),a=decodeURIComponent(o[0]),u=decodeURIComponent(o[1]),a.length&&(n[a]=u);return n};var r={timeFormatToHHmm:function(e){var t=new Date(e);return(t.getHours()>9?t.getHours():"0"+t.getHours())+":"+(t.getMinutes()>9?t.getMinutes():"0"+t.getMinutes())},timestampToTime:function(e){var t=new Date(e),n=t.getFullYear()+"-",r=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=t.getDate()<10?"0"+t.getDate():t.getDate(),a=t.getDay();switch(a){case 1:a="星期一";break;case 2:a="星期二";break;case 3:a="星期三";break;case 4:a="星期四";break;case 5:a="星期五";break;case 6:a="星期六";break;case 0:a="星期日"}if(t.getMonth()!==(new Date).getMonth())return a+"("+n+r+o+")";switch(Number(o)-(new Date).getDate()){case 0:return"今天("+n+r+o+")";case 1:return"明天("+n+r+o+")";default:return a+"("+n+r+o+")"}},timestampToTime1:function(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+(t.getDate()<10?"0"+t.getDate():t.getDate())+" "+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())},timeFormat:function(e){return e.getFullYear()+"-"+((e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-")+((e.getDate()<10?"0"+e.getDate():e.getDate())+" ")+((e.getHours()<10?"0"+e.getHours():e.getHours())+":")+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())},minuteToHHmm:function(e){return(e/60<10?"0"+e/60:e/60)+":"+(60*e-e/60*60<10?"0"+(60*e-e/60*60):60*e-e/60*60)},ellipsis:function(e,t){return e?e.length>t?e.slice(0,t)+"...":e:""}};t.a=r}},["NHnr"]);
//# sourceMappingURL=app.6e75fd0fce27c8997c15.js.map