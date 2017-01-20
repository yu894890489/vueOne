<template>
	<div>
	<div class="panel-body col-sm-6">
              <div v-for="cell in formLeft" class="form-group">
			              <label :for="cell.name" class="control-label" :class="labelWidth">{{cell.label}}</label>
			              <div :class="inputWidth">
			                  <input :type="cell.type" class="form-control" :id="cell.name" :name="cell.name" :value="cell.default">
			              </div>
		          </div>
          </div>
			  	<!--form表单1-->
			  	<div class="panel-body col-sm-6">
              <div v-for="cell in formRight" class="form-group">
			              <label :for="cell.name" :class="labelWidth" class="control-label">{{cell.label}}</label>
			              <div :class="inputWidth">
			                  <input :type="cell.type" class="form-control" :id="cell.name" :name="cell.name" :value="cell.default">
			              </div>
		          </div>
          </div>
  </div>
</template>

<script>
export default{
	name:'form',
	props:{
	 	inputs: Array,
	    width:String
	  },
	  data:function() {
	  	var half = this.inputs.length/2+(this.inputs.length%2!=0?1:0);
	  	return {
	  		formLeft : this.inputs.slice(0,half),
	  		formRight : this.inputs.slice(half,this.inputs.length),
	  		labelWidth: 'col-lg-'+this.width,
	  		inputWidth: 'col-lg-'+(12-parseInt(this.width))
	  	}
	  }
}
</script>