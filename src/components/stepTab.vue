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
		      	<query_tem><query_tem>
		     </fieldset>
		      <fieldset title="业务" class="step" id="default-step-1" >
		          <legend> </legend>
		     
		             		<div id="form2" class="col-lg-12">
		             			<form_temp :inputs="form1" :width="form1Width"></form_temp>
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
		   			 	<table id="tb_departments"></table>
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
	<model_tem></model_tem>
</div>
</template>

<script>
	import '../assets/js/jquery.stepy.js'
	import '../assets/js/bootstrap-table.js';
	import '../assets/js/bootstrap-table-zh-CN'
	import   '../assets/js/index'
	import preview_tem from '../components/preview'
	import model_tem from '../components/modal'
	import form_temp from '../components/form'
	import query_tem from '../components/query'
	import tdata from '../json/form'
	import pData from '../json/preview'

	$(function(){
		// $('#searchNoreDiv').hide();
		// $('#default').stepy({
  //             backLabel: '上一步',
  //             block: true,
  //             nextLabel: '下一步',
  //             titleClick: true,
  //             titleTarget: '.stepy-tab',
  //             next:function(i){
  //             	if(i==2){
  //             		$('#default-next-1').html('提交')
  //             	}
  //             }
  //         });
		// // $('#searchMore').on('click',function(){
  // //         	changeSearchStyle()
  // //         });
  //         $('#searchButton').on('click',function(){
  //         	searchButton();
  //         });
          
	});
	 
	 function searchButton(){
     	if($('#searchInput').val()==""){
     		
     	}
     	$.each($('#ta').bootstrapTable('getOptions').columns[0], function(i,v) {
     			var obj = {};
     			obj[v.field] = $('#searchInput').val();
     			$('#ta').bootstrapTable('filterBy',obj);
     	});
     
     }
	
	export default{
		name:'stepTab',
		components:{
			form_temp,
			model_tem,
			preview_tem,
			query_tem
		},
		data(){
			return {
				form1:tdata,
				form1Width:'3',
				pData:pData,
				addForm:function(){
					$('#addModal').modal();
				}
			}
		}
	}
</script>
<style scoped src="../assets/css/bootstrap-table.css">
	
</style>