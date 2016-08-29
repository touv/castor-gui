<template>
<span v-on:click="starer(table)">
	<icon v-if="table.isRoot" name="star"></icon>
	<icon v-else name="star-o"></icon>
</span>
</template>
<script>
import sharedStore from './store.js'

export default {
    props: [
		'table'
	],
	data () {
		return {
			store: sharedStore
		}
	},
	methods: {
		starer(table) {
			let self = this;
			let url = self.store.serverHost + '/index/' + self.table._id;
			let formData = {
				"$set" :  {
					_rootSince: new Date(Date.now())
				}
			}
			console.log('post', url, formData)
			self.$http.post(url, formData).then(function (response) {
					self.$dispatch('stared', self.table);

			}, console.error);
		}
    }
}
</script>
<style>
</style>

