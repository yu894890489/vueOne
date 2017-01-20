<template>
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
    			<router-view></router-view>
		</section>
	</section>
	
    </section>
</template>

<script>
	import head_tem from '../../components/head'
import nav_tem from '../../components/nav'
// import daiban_tem from './components/daiban'
// import flowChart_tem from './components/flowChart'
// import wecome_tem from './components/wecome'
// import weather_tem from './components/weather'
import footer_tem from '../../components/footer'

//form
import address_tem from '../../components/address'
import stepTab_tem from '../../components/stepTab'
import navData from '../../json/nav'

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
<style scoped src="../../assets/css/custom-styles.css">

</style>