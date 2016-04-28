
import Vue from 'vue'
import VueResource from 'vue-resource'
import sharedStore from './store.js'
import infiniteScroll from 'vue-infinite-scroll'


import fontAwesome from 'font-awesome-webpack'

Vue.use(infiniteScroll)
Vue.use(VueResource)

Vue.filter('uri', function (input) {
    return String(input).replace(window.location.origin, '');
})

var vm = new Vue({
  el: '#el',
  data: {
    selected: 0,
    options: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'what' }
    ]
  }
})

import App from './components/App.vue'

new Vue({
  el: 'body',
  components: { App }
})
