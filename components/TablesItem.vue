<template>
<div id="tables-item" class="row">
	<form class="form-inline pull-xs-right">
		<vs-dropdown text="Download" size="md" variant="default" :arrow="arrow" :caret="true">
			  <ul class="dropdown-menu dropdown-menu-right">
				  <li><a class="dropdown-item" href="#">Completed</a></li>
				  <li><a class="dropdown-item" href="#">Pending</a></li>
			  </ul>
		  </vs-dropdown>
	</form>

	<h1>Current: {{ state.tables.current._wid }} </h1>
</div>
</vs-navbar>
</template>
<script>
import 'vuestrap/core'
import dropdown from 'vuestrap-base-components/src/components/dropdown'

export default {
	data () {
		return { }
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
