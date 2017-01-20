<template>
	<!--这里将来要做slot增强其扩展性-->
<!--新增的弹出-->
<div class="modal fade"  id="modal2QueryCust" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" onscroll="true" style="display: none;">
  <div class="modal-dialog" style="width: 70%;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" style="margin-right: 5px;" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title" id="myModalLabel"><span style="font-size: 14px;display: block;margin-bottom: 7px;margin-left: 50%">新增</span></h4>
      </div>
      <div class="modal-body col-lg-12">
           	<table_tem :idData="idData" :columns="columns" :tableData="tableData"></table_tem>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default1" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-info" id="save" @click="saved">保存</button>
      </div>
    </div>
  </div>
</div>

</template>
<script>
	import table_tem from '../../components/new/table'
	var columns = [{
		     			checkbox: true,
		                field:'ck'
    					},
						{
							field:'sysRefNo',
							title:'间接客户编号'},
						{
							title:'间接客户名称',
							field:'custNm'
						},
						{
							field:'ccy',
							visible:false
						}
						];

	export default{
		name:'modal2QueryCust',
		components:{
			table_tem
		},
		props:{
			save:Function//父组件重写的弹出窗口的保存方法
		},
		computed:{
		},
		methods:{
			saved:function(){
				debugger
				this.save(this);
				$('#modal2QueryCust').modal('hide');
			},
			setThis:function(key,data){
				this[key] = data;
			}
		},
		watcher:{

		},
		data(){
			return{
				idData:'custTable',
				columns:columns,
				tableData:[]

			}
		},
    mounted:function(){
    	 var that = this;
      $('#button').on('click',function(){
        $('#modal2QueryCust').modal();
          $.ajax({
            url:"http://localhost:8081/SCFAdmin/yu/ajax?_dc="+new Date().getTime(),
            data:{
              queryId:'Q_A_3',
              custTp:'2',
              cacheType:'non'
            },
            type:"post",
            async:false,
            success:function(data){
                var tableData = [];
                $.each(JSON.parse(data).rows,function(i,v){
                  var obj = {};
                  //obj['stateTaxLicno'] = v.stateTaxLicno;
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
      });
    }
	}
</script>