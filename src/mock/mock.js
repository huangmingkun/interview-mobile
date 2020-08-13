import Mock from 'mockjs'

export default {
  mockData () {
    // const BASE_PATH = process.env.BASE_URL.endsWith('/')
    //   ? process.env.BASE_URL.substr(0, process.env.BASE_URL.length - 1)
    //   : process.env.BASE_URL
    // console.log('BASE_PATH', process.env.NODE_ENV)
    Mock.mock('http://localhost:8090/api/user/login', {
      'status': 200,
      'token': 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj',
      'result': {
        'id': '1',
        'name': 'hmk',
        'roles': ['admin']
      }
    })
  }
}
