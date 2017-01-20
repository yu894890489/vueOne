<template>
	<!--该组件的应该进一步优化 2017-01-06 14:24:21 auth:yu-->
	 <aside class="post-highlight info v-align">
      <div class="panel-body">
      	<div class="myStyle">
        </div>
      	<h4>
      		<p class="text-white"><span>juck，</span>欢迎进入供链金融系统</p>
      		<p class="text-white">上一次登陆时间：<span>2016-12-22  16：02</span></p>
      	</h4>
      </div>
  	</aside>
</template>
<script>
	export default{
		name:'wecome'
	}
</script>
<style scoped>
  .myStyle{
    background-image: url('../assets/img/avatar1.jpg');
    height: 100px;
    background-repeat: no-repeat;
    margin-left:40%;
  }
</style>