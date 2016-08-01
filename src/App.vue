<template>
  <menu></menu>
  <div class="container-fluid">
	<item></item>
	<array v-ref:items></array>
  </div>
</template>

<script>
import TablesList from './components/TablesList.vue'
import TablesItem from './components/TablesItem.vue'
import TablesTable from './components/TablesTable.vue'

export default {
	events: {
		'refresh': function () {
			this.$refs.items.load()
		}
	},
	components: {
		'menu': TablesList,
		'item': TablesItem,
		'array': TablesTable
	}
}
</script>

<style>
body h1 {
	color: red;
	background-color: #ccc;
}
</style>
