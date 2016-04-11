<template>
<div id="tables-item" class="row">
	<form class="form-inline pull-xs-right">
		<vs-dropdown text="Download" size="md" variant="default" :arrow="arrow" :caret="true">
			  <ul class="dropdown-menu dropdown-menu-right">
				  <li><a class="dropdown-item" href="#">CSV</a></li>
				  <li><a class="dropdown-item" href="#">TSV</a></li>
				  <li><a class="dropdown-item" href="#">N-Quads</a></li>
				  <li><a class="dropdown-item" href="#">JSON-LD</a></li>
				  <li><a class="dropdown-item" href="#">RAW</a></li>
			  </ul>
		  </vs-dropdown>
	</form>

	<span>Current: {{ store.currentTable.value }} </span>
</div>
</vs-navbar>
</template>
<script>
import 'vuestrap/core'
import dropdown from 'vuestrap-base-components/src/components/dropdown'
import sharedStore from '../store.js'

export default {
	data () {
		return { 
			store : sharedStore
		}
	},
	methods: { },
	components: { 
	'vs-dropdown': dropdown
	}
}
</script>
<style>
#tables-item {
	padding-top : 4px;
	padding-left: 16px;
	padding-right: 16px;
}
</style>
