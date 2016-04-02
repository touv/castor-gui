<template>
<!-- navbar component -->
wwww
 <p>Current: {{ state.tables.current }} </p>
<vs-navbar fixed="top" variant="default">
  <a class="navbar-brand" href="#">Navbar</a>
  <vs-nav type="navbar" :vertical="false" class="pull-left">
    <vs-nav-item href="#" active>Home</vs-nav-item>
    <vs-nav-item href="#" active>Test</vs-nav-item>
  </vs-nav>
</vs-navbar>
qqqq
</template>
<script>
import 'vuestrap/core'
import {nav, navItem} from 'vuestrap-base-components/src/components/nav'
import navbar from 'vuestrap-base-components/src/components/navbar'

export default {
	components: {
		'vs-nav': nav,
		'vs-nav-item': navItem,
		'vs-navbar': navbar
	 }
}
</script>
