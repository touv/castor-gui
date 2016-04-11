<template>
<div id="tables-item" class="row">
	<table class="table table-bordered" data-resizable-columns-id="table-html">
		<thead>
			<tr>
				<th data-resizable-column-id="column-index"></th>
				<th data-resizable-column-id="column-uri">URI</th>
				<th v-for="(name, field) in store.currentTable.columns" data-resizable-column-id="column-{{name}}">
					<span>{{ field }}</span>
					<a href="" class="action-editcolumn pull-right" data-toggle="modal" data-target="#modal-editcolumn" role="button" data-column='{{ name }}' ><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>
					</th>
				<th data-resizable-column-id="column-buttons"></th>
			</tr>
		</thead>
		<tbody id="items-tbody">
			<tr v-for="item in items">
				<td>
				  #{{ $index }}
				</td>
				<td>
				  <a href="{{ item['@id'] }}/">{{ item['@id'] | uri }}</a>
				</td>
				<td v-for="(name, field) in columns">
				<span>{{ name }}</span>
				<span>{{ field}}</span>
				<span>{{ item[name] }}</span>
				</td>
				<td>
				  <a style="margin: 2px" title="CSV file" href="./[[ item._content.jsonld|get('_wid') ]]/*?alt=csv"><span class="fa fa-table"></span></a>
				  <a style="margin: 2px" title="N-Quads file" href="./[[ item._content.jsonld|get('_wid') ]]/*?alt=nq"><span class="fa fa-bars"></span></a>
				  <a style="margin: 2px" title="JSON LD file" href="./[[ item._content.jsonld|get('_wid') ]]/*?alt=json"><span class="fa fa-file-o"></span></a>
				  <a style="margin: 2px" title="RAW file" href="./[[ item._content.jsonld|get('_wid') ]]/*?alt=raw"><span class="fa fa-file-code-o"></span></a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
</template>
<script>
import 'vuestrap/core'
import sharedStore from '../store.js'


export default {
	ready () {
		let self = this;
		this.$watch('store.currentTable', function (newVal, oldVal) {
				let url1 = 'http://localhost:3000/index/' + self.store.currentTable._id + '/$_columns';
				self.$http.get(url1).then(function (response) {
					if (Array.isArray(response.data)) {
						self.$set('columns', response.data[0].value)
					}
				}, console.error);

				let url2 = 'http://localhost:3000/' + self.store.currentTable._id + '/*';
				console.log('refresh', url2);
        self.$http.get(url2).then(function (response) {
					if (Array.isArray(response.data)) {
					}
        }, console.error);
		})
	},
	data () {
		return {
			items : [],
      columns : {},
			store : sharedStore
		}
	},
	components: {
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
