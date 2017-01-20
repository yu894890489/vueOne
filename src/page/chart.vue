<template>
	<!--按App.vue中的原则5优化-->
	<div id="mapDiv" >
      		<div  style="height: 50%;width: 100%;margin-top: 4px;"class="row">
      			<div class="col-lg-12"><div id="map" class="col-lg-6"></div></div>
      			<div class="col-lg-12"><div id="mapLine" class="col-lg-6"></div></div>
      			<div id="map1"  class="col-lg-6" style="height: 100%;padding-right:0px;margin-right:20px;float: left;"></div>
      			<div id="map2" class="col-lg-6" style="height: 100%;float: left;"></div>
      		</div>
    			<div style="height: 50%;width: 100%;" class="col-lg-6">
    				<div><table id="tb_departments"></table></div>
    				<div id="map3" style="height: 100%;width: 50%;float: left;"></div>
    				<div id="map4" style="height: 100%;width: 50%;float: right;"></div>
    			</div>
     		</div>
</template>

<script>
	import echarts from 'echarts';
	import json from '../json/table'
	import  '../assets/js/index'
	// debugger
	// getTable("tb_departments",'toolbar',json);
	//import bootstrapTable from 'bootstrap-table'
		$(function(){
			$('#mapDiv').height($('#sidebar').height());
			var worldMapContainer = document.getElementById('map1');
			if(worldMapContainer == undefined){
				return;
			}
			//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
			var resizeWorldMapContainer = function () {
			    worldMapContainer.style.width = $('#map').width()+'px';
			    var height = $('#mapDiv').height()/2>200?$('#mapDiv').height()/2:200;
			    worldMapContainer.style.height = height+'px';
			};
			//设置容器高宽
			resizeWorldMapContainer();
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(worldMapContainer);
			
			var option = {
						backgroundColor:'#fff',
				    title : {
				        text: '曲线图'
				        //subtext: '纯属虚构'
				    },
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['融资','登记','转让'],
				        height: worldMapContainer.style.height,
				        width: worldMapContainer.style.width,
				        x:'center'
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: false},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : ['周一','周二','周三','周四','周五','周六','周日']
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'融资',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[10, 12, 21, 54, 260, 830, 710]
				        },
				        {
				            name:'登记',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[30, 182, 434, 791, 390, 30, 10]
				        },
				        {
				            name:'转让',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[1320, 1132, 601, 234, 120, 90, 20]
				        }
				    ]
				};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
			
			//用于使chart自适应高度和宽度
		
  			var worldMapContainer2 = document.getElementById('map2');
			//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
  			var resizeWorldMapContainer2 = function () {
			    worldMapContainer2.style.width = $('#mapLine').width()+'px';
			    var height = $('#mapDiv').height()/2>200?$('#mapDiv').height()/2:200;
			    worldMapContainer2.style.height = height+'px';
			};
			//设置容器高宽
			resizeWorldMapContainer2();
			// 基于准备好的dom，初始化echarts实例
			var c = echarts.init(worldMapContainer2);
  	var options = {
  			backgroundColor:'#fff',
		    title : {
		        text: '饼图',
		//      subtext: '纯属虚构',
		        x:'left'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        y:'bottom',
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
		        height: worldMapContainer2.style.height,
		        width: worldMapContainer2.style.width
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: false},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        x: '25%',
		                        width: '50%',
		                        funnelAlign: 'left',
		                        max: 1548
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    series : [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
		        }
		    ]
		};
// 使用刚指定的配置项和数据显示图表。
			c.setOption(options);
			
			//用于使chart自适应高度和宽度
			window.onresize = function () {
				$('#mapDiv').height($('#sidebar').height());
				debugger
			    //重置容器高宽
			    resizeWorldMapContainer2();
			    c.resize();
			     resizeWorldMapContainer();
			    myChart.resize();
			};

		})
		

	export default{
		name:'chart',

	}

</script>