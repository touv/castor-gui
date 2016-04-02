
import Vue from 'vue'
import VueSimpleStore from './vue-simple-store.js'
import tablesStore from './stores/tables.js'

Vue.use( VueSimpleStore, {
  stores: [ tablesStore ]
})

import App from './components/App.vue'

new Vue({
  el: 'body',
  components: { App }
})
