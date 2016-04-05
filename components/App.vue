<template>
  <menu></menu>
  <div class="container-fluid">
	<item></item>
  </div>
</template>

<script>
import TablesList from './TablesList.vue'
import TablesItem from './TablesItem.vue'

export default {
  components: {
    'menu': TablesList,
    'item': TablesItem
  }
}
</script>

<style>
body {
	padding-top: 55px;
	background-color: #ccc;
}

</style>
