import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 123,
  loginData: {name: 'hmk', password: '12345', sex: 'm'},
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false }
  ]
}

const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

const mutations = {
  increment (state, payload) {
    state.count += payload.amount
  },
  addLoginDataMsg (state, payload) {
    console.log('payload', payload)
    state.loginData = {...state.loginData, ...payload}
    console.log('loginData', state.loginData)
  }
}

const actions = {
  // 常规写法
  // actionIncrement (context) {
  //   console.log('context', context)
  //   context.commit('increment', {amount: 1})
  // }
  // Es2015 参数结构简化代码写法
  actionIncrement ({ dispatch, commit, state, getters }) {
    // console.log('commit', commit)
    commit('increment', {amount: state.count})
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
