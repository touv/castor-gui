<template>
  <menu></menu>
  <div class="container-fluid">
	<item></item>
	<array></array>
  </div>
</template>

<script>
import TablesList from './TablesList.vue'
import TablesItem from './TablesItem.vue'
import TablesTable from './TablesTable.vue'

export default {
  components: {
    'menu': TablesList,
    'item': TablesItem,
    'array': TablesTable
  }
}
</script>

<style>
body {
	padding-top: 55px;
	background-color: #ccc;
}

</style>
