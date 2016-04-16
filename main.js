
import Vue from 'vue'
import VueResource from 'vue-resource'
import sharedStore from './store.js'
import infiniteScroll from 'vue-infinite-scroll';
import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

import ResizableColumns from 'jquery-resizable-columns'

Vue.use(infiniteScroll)
Vue.use(VueResource)

Vue.filter('uri', function (input) {
    return String(input).replace(window.location.origin, '');
})

Vue.directive('resizable-columns', {
  twoWay: true,
  priority: 1000,
  bind: function () {
    var self = this
    $(this.el).resizableColumns();
  },
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
