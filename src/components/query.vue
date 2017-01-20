<template>
	<div>
			<div class="form-group">
	      		<div class="row">
	      			<div class="col-lg-3"></div>
	      			<div class="col-lg-4">
	              		<div class="input-group">
								      <input type="text" class="form-control" placeholder="Search something" id="searchInput">
								      <span class="input-group-btn">
								        <button class="btn btn-info" type="button" id="searchButton"><i class="icon-search"></i></button>
								      </span>
								    </div><!-- /input-group -->
					    </div>
					    <div class="col-lg-2">
					        <a id="searchMore" v-on:click="changeSearchStyle" class="MyA" style="display: block;margin-top: 6px;" ><span>更多筛选条件 </span><i class="icon-chevron-up"></i></a>
					    </div>
				    </div>
			    </div>       
					<div id="searchNoreDiv" v-show="false">
						<div class="form-group  col-lg-6">
						<label for="inputPassword3" class="col-sm-3 control-label">授信客户名称:</label>
				    <div class="col-sm-8">
				      <input type="input" class="form-control" id="inputPassword3">
				    </div>
					</div>
					<div class="form-group col-lg-6">
						<label for="inputPassword3" class="col-sm-3 control-label">客户编号:</label>
				    <div class="col-sm-8">
				      <input type="input" class="form-control" id="inputPassword3">
				    </div>
					</div>
					</div>
					<table id="ta"></table>
	</div>
</template>

<script>
	/**
       * 改变查询更多条件的样式
       */
     
	export default{
		name:'query',
		// props:{
		// 	querys:Array
		// },
		data(){
			// var flag = true;
			// if(!this.querys.length>1){
			// 	flag = false;
			// }
			return{
				// flag:flag,
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
		}
	}
</script>