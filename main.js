
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueSimpleStore from './vue-simple-store.js'
import tablesStore from './stores/tables.js'

Vue.use( VueSimpleStore, {
  stores: [ tablesStore ]
})
Vue.use(VueResource)

import App from './components/App.vue'

new Vue({
  el: 'body',
  components: { App }
})
