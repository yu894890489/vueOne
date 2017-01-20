<template>
	<div>
		<div class="col-lg-6">
		<div class="form-group" v-for=" cell in cellsLeft">
		      <label class="col-lg-3 control-label">{{cell.name}}：</label>
		      <div class="col-lg-9">
		          <p class="form-control-static">{{cell.value}}</p>
		      </div>
	  	</div>
		</div>
		<div class="col-lg-6">
			<div class="form-group" v-for=" cell in cellsRight">
		      <label class="col-lg-3 control-label">{{cell.name}}：</label>
		      <div class="col-lg-9">
		          <p class="form-control-static">{{cell.value}}</p>
		      </div>
		  	</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'preview',
		props: {
			    inputs: Array
				  },
		  data:function(){
		  	var half = this.inputs.length/2+(this.inputs.length%2!=0?1:0);
		  	console.log(half)
		  	return{
		  		cellsLeft:this.inputs.slice(0,half),
		  		cellsRight:this.inputs.slice(half,this.inputs.length)
		  	}
		  }
	}
</script>