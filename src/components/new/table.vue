<template>
	<table :id="idData"></table>
</template>
<script>
	import '../../assets/js/bootstrap-table.js';
	import '../../assets/js/bootstrap-table-zh-CN'
	import '../../assets/js/vue-extends-method.js'
	export default{
		name:'table',
		props:{
			idData:String,//必填
			toolbarId:String,
			columns:Array,//必填
			tableData:Array,
			option:Object
		},
		mounted:function(){
			this.$createTable(this);
		},
		watch:{
			tableData:{
				handler:function(o,v){
					$('#'+this.idData).bootstrapTable('load',o);
				},
				deep:true
			}
		}
	}
	// debugger
	// this.$nextTick(this.$createTable(this))
</script>

<style scoped src="../../assets/css/bootstrap-table.css">
	/* the same color with .active */
.fixed-table-container tbody .selected td {
    background-color: #d9edf7 !important;
}
</style>