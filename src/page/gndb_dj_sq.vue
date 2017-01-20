<template>
	 <div class="row">
              <div class="col-lg-12">
                  <section class="panel">
					<address_tem :ol="ol"></address_tem>
					<div class="panel-body">
						<stepTab_tem></stepTab_tem>	
					</div>
                  </section>
              </div>
  	</div>

</template>

<script>
	import address_tem from  '../components/address'
	import stepTab_tem from '../components/new/stepTab'

	 function openNav(){
      	var id = getParam('id');
      	for (var i = 0;i<id.length;i++) {
      		var newId = id.substring(0,i+1);
      		if(i==id.length-1){
      			$('#'+newId).addClass('cuHover');
      		}else{
      			//$('#'+newId).parent('li').addClass('active');
      			$('#'+newId).parent('li').toggleClass('active').children('ul').slideToggle().toggleClass('metis-close').toggleClass('metis-open');
      		}
      	}
      }
	
var objData ={
	'cust':'客户管理',
	'add':'新增',
	'edit':'修改',
	'del':'删除',
	'guo':'国内单笔保理',
	'dengji':'登记',
	'login':'申请',
	'again':'复核',
	'road':'在途',
	'deal':'处理',
	'zhuan':'转让',
	'rong':'融资',
	'pay':'付款'
}


/**
 * 在路由完全完成后这个方法就没用了
 * 获取url的参数
 * @param {Object} paramName
 */
function getParam(paramName) {
    var paramValue = "";
    var isFound = false;
    if (window.location.search.indexOf("?") == 0 && window.location.search.indexOf("=") > 1) {
        var arrSource = unescape(window.location.search).substring(1, window.location.search.length).split("&");
        var i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    $.each(objData, function(i,v) {
    	if(i==paramValue){
    		paramValue = v;
    	}
    });
    return paramValue;
}
var olData = [];
	$(function(){
		olData.push(getParam('name1'));
		olData.push(getParam('name2'));
		if(getParam('name3')!=""){
			olData.push(getParam('name3'));
		}
		openNav();
	});



	export default{
		name:'yewu',
		components:{
			address_tem,
			stepTab_tem
		},
		data(){
			return{
				ol:olData
			}
		}
	}
</script>
<style scoped src="../assets/css/custom-styles.css">

</style>