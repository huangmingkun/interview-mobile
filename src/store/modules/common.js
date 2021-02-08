const common = {
  namespaced: true,
  state: () => ({
    count: 123,
    loginData: {name: 'hmk', password: '12345', sex: 'm'},
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  }),
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    gettersTest: (state, getters, rootState) => {
      // console.log('-----------88888', state, getters, rootState)
      return rootState.test.loginData1
    }
  },
  mutations: {
    increment (state, payload) {
      // console.log('payload载荷', payload)
      state.count += payload.amount
    },
    addLoginDataMsg (state, payload) {
      state.loginData = {...state.loginData, ...payload}
    }
  },
  actions: {
    // 常规写法
    // actionIncrement (context) {
    //   console.log('context', context)
    //   context.commit('increment', {amount: 1})
    // }
    // Es2015 参数结构简化代码写法
    actionIncrement ({ dispatch, commit, state, getters }) {
      // console.log('commit', commit)
      commit('increment', {amount: state.count})
    },
    actionTest (context, payload) {
      // 设置namespaced: true后,访问当前模块的getters时，不需要加模块前缀名称，如下：
      console.log(context.getters.doneTodos)
      // 设置namespaced: true后,访问其它模块的getters时，需要加模块前缀名称，如下：
      console.log(context.rootGetters['test/gettersFromTest'])
      // 载荷--对象形式
      console.log(payload)
    }
  }
}

export default common

/**
 * namespaced: true
 * 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
 * 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。例如：
 * **/

// const store = new Vuex.Store({
//   modules: {
//     account: {
//       namespaced: true,
//
//       // 模块内容（module assets）
//       state: () => ({ ... }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
//       getters: {
//         isAdmin () { ... } // -> getters['account/isAdmin']
//       },
//       actions: {
//         login () { ... } // -> dispatch('account/login')
//       },
//       mutations: {
//         login () { ... } // -> commit('account/login')
//       },
//
//       // 嵌套模块
//       modules: {
//         // 继承父模块的命名空间
//         myPage: {
//           state: () => ({ ... }),
//           getters: {
//             profile () { ... } // -> getters['account/profile']
//           }
//         },
//
//         // 进一步嵌套命名空间
//         posts: {
//           namespaced: true,
//
//           state: () => ({ ... }),
//           getters: {
//             popular () { ... } // -> getters['account/posts/popular']
//           }
//         }
//       }
//     }
//   }
// })
