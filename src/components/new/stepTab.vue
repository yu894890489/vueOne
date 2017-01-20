<template>
<!--待优化 -->
<div>
	<div class="stepy-tab Noprint">
	      <ul id="default-titles" class="stepy-titles clearfix">
	          <li id="default-title-0" class="current-step">
	              <div>查询</div>
	          </li>
	          <li id="default-title-1" class="">
	              <div>业务</div>
	          </li>
	          
	          <li id="default-title-2" class="">
	              <div>预览</div>
	          </li>
	      </ul>
	  </div>
		  <form class="form-horizontal" id="default">
		      <fieldset title="查询" class="step" id="default-step-0">
		      	<legend></legend>
		      	<query_tem :querys="queryData"><query_tem>
		      	
		     </fieldset>
		      <fieldset title="业务" class="step" id="default-step-1" >
		          <legend> </legend>
		     
		             		<div id="form2" class="col-lg-12">
		             			<form_temp :inputs="form1" :width="form1Width" :values="form1Value"></form_temp>
		             			
		             		</div>
		                      	<!--表格 div-->
		                   			 <div>
		   			 	 <div id="toolbar2" class="btn-group">
										            <button id="btn_add" type="button" class="btn btn-myBlue" v-on:click="addForm">
										                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
										            </button>
										            <button id="btn_edit" type="button" class="btn btn-myBlue">
										                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
										            </button>
										            <button id="btn_delete" type="button" class="btn btn-myBlue">
										                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
										            </button>
										         </div>
		   			 	<table_tem :idData="idData2" :columns="columns2" :tableData="tableData2" :toolbarId="toolbarId2"></table_tem>
		   			 </div>
		      </fieldset>
		     
		      <fieldset title="预览" class="step" id="default-step-2" >
		          <legend> </legend>
		          <preview_tem :inputs="pData"></preview_tem>
		       	  <!--表格 div-->
   			 	  <table id="tb3"></table>
		      </fieldset>
		      <input type="submit" onclick="window.print();" class="finish btn btn-danger Noprint" value="打印"/>
		  </form>
	<model_tem :save="save" :values="values2"></model_tem>
</div>
</template>

<script>
	import '../../assets/js/jquery.stepy.js'
	import table_tem from '../../components/new/table'
	import preview_tem from '../../components/new/preview'
	import model_tem from '../../components/new/modal'
	import form_temp from '../../components/new/form'
	import query_tem from '../../components/new/query'
	import tdata from '../../json/form'
	import pData from '../../json/preview'

	var mapForForm = {
		sysRefNo:'selId',
		custNm:'custNm',
		ccy:'ccy'
	}

	

	export default{
		name:'stepTab',
		components:{
			form_temp,
			model_tem,
			preview_tem,
			query_tem,
			table_tem
		},
		methods:{
			setFormValue:function(data){
				this.form1Value = data;
			},
			save:function(that){
					debugger
					this.tableData2.push(that.values2);
			},
			submit:function(){
				//这里获取打包的数据 用做提交
				var selectRows = $('#'+this.idData2).bootstrapTable('getSelections');
				var getAllData = this.tableData2;
				var formData = this.form1Value;
			}

		},
		mounted:function(){
			var that = this;
			$('#default').stepy({
              backLabel: '上一步',
              block: true,
              nextLabel: '下一步',
              titleClick: true,
              titleTarget: '.stepy-tab',
              next:function(i){
              	var data = $('#y').bootstrapTable('getSelections');
              	if(data.length<1&&i==2){
              		alert('要选择一个行数据！')
              		$('default').stepy('step', i-1);
              		flag = true;
              		return;
              	}
              	var obj = {'sysRefNo':'test2131','regNo':0,'regAmt':0};
				$.each(mapForForm,function(j,v){
					obj[v] = data[0][j];
				});
				that.setFormValue(obj);
              	if(i==2){
              		$('#default-next-1').html('提交');

              	}
              }
          });
		},
		data:function(){
			return {
				form1:tdata,
				form1Width:'3',
				form1Value:{sysRefNo:'test2131'},
				pData:pData,
				values2:{},//弹出窗口的form的Value
				queryData:[{
					name:'stateTaxLicno',
					label:'组织机构号',
					type:'text',
					value:''
					},
					{name:'custNm',
					label:'客户名称',
					type:'text',
					value:''
				}],
				idData2:'u',//业务表格数据
				tableData2:[],
				toolbarId2:'toolbar2',
				columns2:[ {
					field : 'ck',
					checkbox : true
				}, {
					field : 'buyerId',
					title : '间接客户编号',
				}, {
					field : 'buyerNm',
					title : '间接客户名称',
				}, {
					field : 'invNo',
					title : '应收账款凭证编号',
				}, {
					field : 'invCcy',
					title : '币别',
					width : '5.05%',
				}, {
					field : 'invAmt',
					title : '应收账款金额',
				}, {
					field : 'invBal',
					title : '应收账款净额',
				}, {
					field : 'invDt',
					title : '应收账款开立日期',
				}, {
					field : 'invValDt',
					title : '应收账款起算日',
				}, {
					field : 'invDueDt',
					title : '到期日',
				}, {
					field : 'acctPeriod',
					title : '账期',
					width : '5.54%',
				}, {
					field : 'sysRefNo',
					title : '流水号',
					visible : false
				}, {
					field : 'selId',
					title : '卖方编号',
					visible : false
				}
				, {
					field : 'theirRef',
					title : '关联登记主表流水号',
					visible : false
				}, {
					field : 'invSts',
					title : '发票状态',
					visible : false
				}, {
					field : 'dspFlag',
					title : '争议标识',
					visible : false
				}, {
					field : 'cbkAmt',
					title : '转让金额',
					visible : false
				} ],
				addForm:function(){
					$('#addModal').modal();
				}
				
			}
		}
	}
</script>
