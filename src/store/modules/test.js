const test = {
  namespaced: true,
  state: () => ({
    loginData1: {name: 'test-modules', password: '12345', sex: 'm'}
  }),
  getters: {
    gettersFromTest: state => {
      return state.loginData1
    }
  },
  mutations: {
  },
  actions: {
  }
}

export default test
