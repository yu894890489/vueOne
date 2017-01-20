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
	</div>
	
</template>
<script>
import daiban_tem from '../components/daiban'
import flowChart_tem from '../components/flowChart'
import wecome_tem from '../components/wecome'
import weather_tem from '../components/weather'

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
	name:'test',
	components:{
		daiban_tem,
		flowChart_tem,
		wecome_tem,
		weather_tem

	},
	data(){
		return {
			daibanData:daibanData
		}
	}
}
</script>