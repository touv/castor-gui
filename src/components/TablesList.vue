<template>
<nav class="navbar navbar-default navbar-static-top  navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">CASTOR</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
		<li v-for="table in store.allTables" class="" v-bind:class="{ 'active' : table.isSelected }">
			<a href="#">
				<startable v-bind:table="table"></startable>
				<span v-on:click="choose(table)">{{ table.value}}</span>
			</a>
		</li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
			<a style="padding:10px" href="#" v-on:click="create(table)"> <icon name="plus-square-o" scale="2" label="Add"></icon> </a>
		</li>
	</ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
import sharedStore from './store.js'
import MQS from 'mongodb-querystring'
import startable from './StarTable.vue'


export default {
	ready () {
		let self = this;
		self.reload();
	},
	data () {
		return {
			store: sharedStore
		}
	},
	methods: {
		reload(done) {
			let self = this;
			let qry = {
				"alt" : "min",
				"$query" : { },
				"$limit" : 1,
				"$orderby" : {
					"_rootSince" : -1
				}
			}
			let url = self.store.serverHost
			.concat('/index/*?')
			.concat(MQS.stringify(qry, {}));

			self.$http.get(url).then(function (response) {
				let rootTable = response.data[0]._id
				let url = self.store.serverHost.concat('/index/*?alt=min');
				self.$http.get(url).then(function (response) {
					console.log('reloaded : root(', rootTable, ') size(', response.data.length, ')');

					if (Array.isArray(response.data)) {
						response.data.forEach(function(i, index) {
							response.data[index].isSelected = false
							response.data[index].isRoot = response.data[index]._id === rootTable
						})
						response.data[0].isSelected = true
						self.store.allTables = response.data
						self.store.currentTable = response.data[0]
						if (typeof done === 'function') {
							done();
						}
					}
				}, console.error);
			}, console.error);
		},
		choose(table) {
			let self = this;
			self.store.allTables.forEach(function(i, index) {
				self.store.allTables[index].isSelected = i._id === table._id ? true: false
			})
			self.store.currentTable = table
		},
		drop(table) {
			let self = this;
			alert('Drop table #'+table.id)
		},
		create(table) {
			let self = this;
			// http://127.0.0.1:3000/-/echo/t1.table?a=1&b=2
			let queryData = {
				title: 'Table #' + (self.store.allTables.length + 1)
			};
			let url = self.store.serverHost + '/index/';
			let formData = {
				'url' : self.store.serverHost + '/-/echo/t' + String(this.store.allTables.length + 1) + '.table?' + MQS.stringify(queryData)
			}
			console.log('post', url, formData)
			self.$http.post(url, formData).then(function (response) {
				self.reload();
			}, console.error)
		}
    },
	components: {
		startable
	},
	events: {
		'stared': function (ta) {
			const self = this
			self.reload(function() {
				self.choose(ta);
			});
		}
	},

}
</script>
