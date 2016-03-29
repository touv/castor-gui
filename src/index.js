//import 'babel-polyfill'
import Vue from 'vue'
//import App from './components/App.vue'
import App from './components/root'
import store from './store.js'

const CastorGUI = new Vue({
  el: 'body',
  store,
  components: { App }
})

export default CastorGUI
