import 'vuestrap/core'
import card from 'vuestrap-base-components/src/components/card'
import {nav, navItem} from 'vuestrap-base-components/src/components/nav'
import navbar from 'vuestrap-base-components/src/components/navbar'
import jumbotron from 'vuestrap-base-components/src/components/jumbotron'
import modal from 'vuestrap-base-components/src/components/modal'

import style from './root.scss'
import template from './root.html'

export default {
  template: template,
  components: {
    'vs-modal': modal,
    'vs-nav': nav,
    'vs-nav-item': navItem,
    'vs-navbar': navbar,
    'vs-jumbotron': jumbotron,
    'vs-card': card
  }
}
