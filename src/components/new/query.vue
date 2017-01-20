<template>
	<div>
			<div class="form-group">
	      		<div class="row">
	      			<div class="col-lg-3"></div>
	      			<div v-bind:class="{'col-lg-4':!flag,'col-lg-6':flag}">
	              		<div class="input-group">
								      <input type="text" class="form-control" placeholder="Search something" id="searchInput" v-model="searchInput" v-on:change="searchAll">
								      <span class="input-group-btn">
								        <button class="btn btn-info" type="button" id="searchButton" v-on:click="searchAll"><i class="icon-search"></i></button>
								      </span>
					    </div><!-- /input-group -->
					    </div>
					    <div v-if="flag" class="col-lg-2">
					        <a id="searchMore" v-on:click="changeSearchStyle" class="MyA" style="display: block;margin-top: 6px;"><span>更多筛选条件 </span><i class="icon-chevron-up"></i></a>
					    </div>
				    </div>
			    </div>       
					<div id="searchNoreDiv" v-if="flag" v-show="false">
						<div class="form-group  col-lg-6" v-for="cell in querys">
							<label v-bind:for="cell.name" class="col-sm-3 control-label">{{cell.label}}:</label>
					    <div class="col-sm-8">
					      <input :type="cell.type" class="form-control" :id="cell.name" :name="cell.name" :value="cell.value">
					    </div>
						</div>
					</div>
					<table_tem :idData="idData" :columns="columns" :tableData="tableData"></table_tem>
	</div>
</template>

<script>
	/**
       * 改变查询更多条件的样式
       */
     import table_tem from '../../components/new/table'

     var columns = [{
		     			checkbox: true,
		                field:'ck'
    					},
						{
							field:'stateTaxLicno',
							title:'组织机构号'},
						{
							title:'客户名称',
							field:'custNm'
						},
						{
							field:'sysRefNo',
							visible:false

						},
						{
							field:'ccy',
							visible:false
						}
						];
	export default{
		name:'query',
		props:{
			querys:Array
		},
		components:{
			table_tem
		},
		methods:{
	      searchAll:function(e){
	      	debugger
	      	alert('等待开发')
	      	//$("#"+this.idData).bootstrapTable('getData');
	      	//$("#"+this.idData).bootstrapTable('onSearch',e);
	      },
	      setThis:function(key,data){//解决在ajax时指向Vue实例的this丢失问题，些方法可有效实现数据的异步加载
	      	this[key] = data;
	      }
		},
		data(){
			var flag = true;
			if(!this.querys.length>1){
				flag = false;
			};
			return{
				flag:flag,
				idData:"y",
				columns:columns,
				tableData:[],
				tableDataSearch:[],
				searchInput:"",
				changeSearchStyle: function(){
			      	var i = $('#searchMore').children('i');
			          	if(i.hasClass('icon-chevron-up')){
			          		i.removeClass('icon-chevron-up');
			          		i.addClass('icon-chevron-down');
			          		$('#searchMore').children('span').html('精选筛选条件 ');
			          		$('#searchNoreDiv').show();
			          	}else{
			          		i.removeClass('icon-chevron-down');
			          		i.addClass('icon-chevron-up');
			          		$('#searchMore').children('span').html('更多筛选条件 ');
			          		$('#searchNoreDiv').hide();
			          	}
			      }
				}
		},
		watch:{
			tableData:{
				handler:function(o,v){
					$('#'+this.idData).bootstrapTable('load',o);
				},
				deep:true
			},
			querys:{
				handler:function(){
					var that = this;
					var obj = {};
					$.each(that.querys,function(i,v){
						if(v.value!="")obj[v.name] = v.value;
					});
					$('#'+that.idData).bootstrapTable('filterBy',obj);
				},
				deep:true
			}
		},
		mounted:function(){
			var tableData = [];
			var that = this;
			$.ajax({
				url:"http://localhost:8081/SCFAdmin/yu/ajax?_dc="+new Date().getTime(),
				data:{
					queryId:'Q_A_3',
					custTp:'1',
					cacheType:'non'
				},
				type:"post",
				success:function(data){
						$.each(JSON.parse(data).rows,function(i,v){
							var obj = {};
							obj['stateTaxLicno'] = v.stateTaxLicno;
							obj['custNm'] = v.custNm;
							obj['sysRefNo'] = v.sysRefNo;
							obj['ccy'] = 'CCY';
							tableData.push(obj);
						});
						that.setThis('tableData',tableData);
				},
				error:function(data){
					console.log(data)
				}

			});
			//this.tableData = tableData;
		}
	}
</script>