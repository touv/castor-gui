import Vue from 'vue'

import VueSimpleStore from './vue-simple-store.js'
import tablesStore from './stores/tables.js'


// Install it!
Vue.use( VueSimpleStore, {
  stores: [ tablesStore ]
})


import App from './components/App'

const CastorGUI = new Vue({
  el: 'body',
  components: {
    App
  }
})

export default CastorGUI
