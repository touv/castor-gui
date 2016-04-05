<template>
<vs-navbar fixed="top" type="dark" variant="inverse" full>
  <a class="navbar-brand" href="#">Navbar</a>
  <vs-nav type="navbar" class="pull-xs-left" >
	<li v-for="table in tables" class="nav-item" v-bind:class="{ 'active' : table.isSelected }">
	  <a href="#" class="nav-link" v-on:click="doChoose(table)">{{ table.title }}</a>
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

export default {
	ready () {
		let self = this;
		let url = 'http://localhost:3000/index/*?alt=raw';
		self.$http.get(url).then(function (response) {
			if (Array.isArray(response.data)) {
				response.data.forEach(function(i, index) {
					response.data[index].isSelected = false
				})
				response.data[0].isSelected = true
				self.$set('tables', response.data)
				this.$action('tables:select_one', response.data[0])
			}
		}, console.error);
	},
	data () {
		return {
			tables : []
		}
	},
	methods: {
		doChoose (table) {
			var self = this;
			self.tables.forEach(function(i, index) {
				self.tables[index].isSelected = i._wid === table._wid ? true: false
			})
			this.$action('tables:select_one', table)
		}
    },
	components: {
		'vs-nav': nav,
		'vs-nav-item': navItem,
		'vs-navbar': navbar
	 }
}
</script>
