
import Vue from 'vue'
import VueResource from 'vue-resource'
import sharedStore from './store.js'
import infiniteScroll from 'vue-infinite-scroll';

Vue.use(infiniteScroll)
Vue.use(VueResource)

Vue.filter('uri', function (input) {
    return String(input).replace(window.location.origin, '');
})

import App from './components/App.vue'

new Vue({
  el: 'body',
  components: { App }
})
