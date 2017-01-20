<template>
	<div>
		<daiban_tem :daibanData="daibanData"></daiban_tem>
		<!-- 页面布局-->
		<div class="row">
			<div class="col-lg-8">
				<!-- 流程组件-->
				<flowChart_tem></flowChart_tem>
			</div>
			<div class="col-lg-4">
				<wecome_tem></wecome_tem>
				<weather_tem></weather_tem>
			</div>
		</div>

		<footer_tem></footer_tem>
	</div>
	
</template>
<script>
import daiban_tem from '../components/daiban'
import flowChart_tem from '../components/flowChart'
import wecome_tem from '../components/wecome'
import weather_tem from '../components/weather'
import footer_tem from '../components/footer'


//document.cookie = "JSESSIONID=463FCCF811976B9402DBF5E4597B5D2D";
//"sysFuncId":"F_S_login","reqPageType":"login","userId":"y","password":"c81e728d9d4c2f636f067f89cc14862c","code":"x","userGrade":"1"
//
//var obj = {"sysFuncId":"F_S_login","reqPageType":"login","userId":"y","password":"c81e728d9d4c2f636f067f89cc14862c","code":"x","userGrade":"1"};
// var obj2 =  {queryId:'Q_S_MENU_0001'};

// ajaxtest(obj2,'login');
function ajaxtest(datas,str){
	$.ajax({
	url:"http://localhost:8081/SCFAdmin/"+str+"?_dc="+new Date().getTime(),
	data:datas,
	type:"post",
	success:function(data){
		debugger
		console.log(data)
	},
	error:function(data){
		debugger
		console.log(data)
	}

})
}


var daibanData = [{
	url:"#",
	class:'MyBlue',
	color:'text-myBlue',
	icon:'icon-edit',
	num:'22',
	name:'待办任务'
},{
	url:"#",
	class:'red',
	color:'text-red',
	icon:'icon-map-marker',
	num:'140',
	name:'查询在途'
},{
	url:"#",
	class:'yellow',
	color:'text-yellow',
	icon:'icon-envelope-alt',
	num:'345',
	name:'未读通知'
},{
	url:"#",
	class:'blue',
	color:'text-blue',
	icon:'icon-bell',
	num:'34,500',
	name:'预警通知'
}];
export default{
	name:'home',
	components:{
		daiban_tem,
		flowChart_tem,
		wecome_tem,
		weather_tem,
		footer_tem

	},
	data(){
		return {
			daibanData:daibanData
		}
	}
}
</script>