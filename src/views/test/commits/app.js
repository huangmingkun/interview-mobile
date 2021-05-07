/* global Vue */
var apiURL = 'https://api.github.com/repos/huangmingkun/interview-project/commits?per_page=5&sha='
// var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

/**
 * Actual demo
 */

new Vue({

  el: '#demo',

  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var self = this
      if (navigator.userAgent.indexOf('PhantomJS') > -1) {
        console.log(6666666);
        // use mocks in e2e to avoid dependency on network / authentication
        setTimeout(function () {
          self.commits = window.MOCKS[self.currentBranch]
        }, 0)
      } else {
        console.log(55555555);
        var xhr = new XMLHttpRequest()
        xhr.open('GET', apiURL + self.currentBranch)
        xhr.onload = function () {
          console.log('xhr.responseText', xhr.responseText);
          self.commits = JSON.parse(xhr.responseText)
          console.log(111, self.commits[0].html_url)
        }
        xhr.send()
      }
    }
  }
})
