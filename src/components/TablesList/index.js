import 'vuestrap/core'
import {nav, navItem} from 'vuestrap-base-components/src/components/nav'
import navbar from 'vuestrap-base-components/src/components/navbar'


import template from './TablesList.html'

export default {
  template : template,
	components: {
		'vs-nav': nav,
		'vs-nav-item': navItem,
		'vs-navbar': navbar
	 }
}
