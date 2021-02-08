import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common' // 引入common模块
import test from './modules/test' // 引入common模块
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    common: common,
    test: test
  }
})
