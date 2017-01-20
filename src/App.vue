<template>
<!-- 总体思路
	1.尽量此处只写页面布局的原生html元素
	2.数据和页面的分离
	3.组件分离 ————降低组件之间的耦合和组件最小化原则
	4.模块化原则 ————只是在某一组件内引用的不要全局用 同样全局用的不要多个组件重复用————可以用嵌套组件
	5.路由页面不直接定义组件，只引入组件和数据的加载
	6.在组件中最好不要写$(function(){})即页面加载完后运行的代码，否则该代码会在全局中运行，可用钩子
  7.vue-extends-method为全局自定义方法
  8.数据公开原则，其他私有原则————通过props计算得到的数据写在computed里尽量不要在data里暴露出来，凡是用到的局 域方法都应该定义在methods里然后借用this调用，也不要在data里暴露出来
  9.this————能获取全局Vue对象（将是最常用的对象），但也要注意如果当前的data里没有的属性（多级组件时其组件的da ta(数据)不是当前data里定义的时），不能直接取到
  10.尽量当前组件的事件当前绑定
  11.在多个组件生命周期时有重合时  注意Id的重复（尤其是有弹出窗口）*****弹出窗口目前没有做出动态的
  7.待补充                 	
-->
  <div id="app">
  
   <section id="container" class="">
   	<!--网站头组件 -->
    <head_tem></head_tem>
    <!--导航栏区域-->
    <aside>
    	<!-- 导航栏组件-->
    	<nav_tem :navData="navData"></nav_tem>
    </aside>
	<!--主页面 下阶段升级为路由区域 time=2017-01-06 12:29:33-->
	<section id="main-content">
		<section class="wrapper" style="padding-top:20px">
		 	<transition>
    			<router-view></router-view>
  			</transition>
		</section>
	</section>
	
    </section>
  </div>
</template>

<script>
import head_tem from './components/head'
import nav_tem from './components/nav'
// import daiban_tem from './components/daiban'
// import flowChart_tem from './components/flowChart'
// import wecome_tem from './components/wecome'
// import weather_tem from './components/weather'
import footer_tem from './components/footer'

//form
import address_tem from './components/address'
import stepTab_tem from './components/stepTab'
import navData from './json/nav'

export default {
  name: 'app',
  components: {
    head_tem,
    nav_tem,
    // daiban_tem,
    // flowChart_tem,
    // wecome_tem,
    // weather_tem,
    // form的组件
    address_tem,
    stepTab_tem,
    footer_tem
  },
  data() {
    return {
  		navData:navData,
  		ol:[
  			'客户管理',
  			'新增'
  		]
  	}
  }
}
</script>

<style scoped src="./assets/css/custom-styles.css">

</style>
