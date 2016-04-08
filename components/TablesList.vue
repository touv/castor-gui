<template>
<vs-navbar fixed="top" type="dark" variant="inverse" full>
  <a class="navbar-brand" href="#">Navbar</a>
  <vs-nav type="navbar" class="pull-xs-left" >
	<li v-for="table in store.allTables" class="nav-item" v-bind:class="{ 'active' : table.isSelected }">
	  <a href="#" class="nav-link" v-on:click="doChoose(table)">{{ table.label }}</a>
	</li>
  </vs-nav>
  <form class="form-inline navbar-form pull-xs-right">
    <button class="btn btn-success-outline" type="submit">ADD</button>
  </form>
</vs-navbar>
</template>
<script>
import 'vuestrap/core'
import {nav, navItem} from 'vuestrap-base-components/src/components/nav'
import navbar from 'vuestrap-base-components/src/components/navbar'
import sharedStore from '../store.js'

export default {
	ready () {
		let self = this;
		let url = 'http://localhost:3000/index/*?alt=dry';
		self.$http.get(url).then(function (response) {
			if (Array.isArray(response.data)) {
				response.data.forEach(function(i, index) {
					response.data[index].isSelected = false
				})
				response.data[0].isSelected = true
				self.$set('store.allTables', response.data)
			}
		}, console.error);
	},
	data () {
		return {
			store: sharedStore
		}
	},
	methods: {
		doChoose (table) {
			var self = this;
			self.store.allTables.forEach(function(i, index) {
				self.store.allTables[index].isSelected = i.id === table.id ? true: false
			})
			self.$set('store.currentTable', table)
		}
    },
	components: {
		'vs-nav': nav,
		'vs-nav-item': navItem,
		'vs-navbar': navbar
	 }
}
</script>
