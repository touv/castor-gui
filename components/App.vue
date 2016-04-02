<template>
  <div class="app">
  <tables-list></tables-list>
  </div>
</template>

<script>
import TablesList from './TablesList.vue'

export default {
  components: {
    'tables-list': TablesList
  }
}
</script>

<style>
body {
	padding: 5em 2em;
	background-color: red;
}

footer .container {
	border-top: 1px solid #ccc;
	padding-top: 1em;
}
</style>
