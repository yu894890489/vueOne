<template>
	<!-- 些处的模版有待扩展重构-->
      	<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		  <div class="panel panel-default">
		    <div class="panel-heading" role="tab" id="headingOne">
		      <h4 class="panel-title">
		        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		          	国内单笔流程图
		        </a>
		      </h4>
		    </div>
		    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
		      <div class="panel-body">
		      	<div class="wrapper">
					<ul class="timeLine">
						<li>
							<h5 class="time"><a href="form_wizard.html?name1=guo&name2=dengji&name3=login&id=b11">
								<button  class="btn btn-radius btn-info" ><i class="icon-pencil" style="font-size: 25px;"></i></button><br/>登记</a></h5>
						</li>
						<li>
							<h5 class="time"><a href="form_wizard.html?name1=guo&name2=zhuan&name3=login&id=b21">
								<button class="btn btn-radius btn-info" >
									<i class="icon-mail-forward" style="font-size: 25px;"></i></button><br/>转让</a></h5>
							
						</li>
						<li>
							<h5 class="time"><a href="form_wizard.html?name1=guo&name2=rong&name3=login&id=b31">
								<button class="btn btn-radius btn-info" ><i class="icon-cny" style="font-size: 25px;"></i></button><br/>融资</a></h5>
							
						</li>
						<li>
							<h5 class="time"><a href="form_wizard.html?name1=guo&name2=pay&name3=login&id=b41">
								<button class="btn btn-radius btn-info" ><i class="icon-credit-card" style="font-size: 25px;"></i></button><br/>付款</a></h5>
							
						</li>
					</ul>
			    </div>
		      </div>
		    </div>
		  </div>
	    </div>
</template>
<script>
	export default{
		name:'flowChart'
	}
</script>
<style scoped src="../assets/css/styleByTimeline.css">
	
</style>

