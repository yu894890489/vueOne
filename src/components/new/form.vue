<template>
	<div>
	<div class="panel-body col-sm-6">
              <div v-for="cell in formLeft" class="form-group">
			              <label :for="cell.name" class="control-label" :class="labelWidth">{{cell.label}}</label>
			              <div  :class="['input-group', inputWidth]">
			                  <input :type="cell.type" class="form-control" :id="cell.name" :name="cell.name" :value="values[cell.name]" v-on:change="change">
			                  <span class="input-group-btn" v-if="cell.button!=undefined">
						        <button class="btn btn-info" type="button" :id="cell.button.id">{{cell.button.text}}</button>
						      </span>
			              </div>
		          </div>
          </div>
			  	<!--form表单1-->
			  	<div class="panel-body col-sm-6">
              <div v-for="cell in formRight" class="form-group">
			              <label :for="cell.name" :class="labelWidth" class="control-label">{{cell.label}}</label>
			              <div :class="['input-group', inputWidth]">
			                  <input :type="cell.type" class="form-control" :id="cell.name" :name="cell.name" :value="values[cell.name]" v-on:change="change">
			                  <span class="input-group-btn" v-if="cell.button!=undefined">
						        	<button class="btn btn-info" type="button" :id="cell.button.id">{{cell.button.text}}</button>
						      </span>
			              </div>
		          </div>
          </div>
          <input v-for="cell in arrHide" type="hidden" :name="cell.name" :id="cell.name" :value="values[cell.name]" v-on:change="change">
  </div>
</template>

<script>
import Vue from 'vue'

export default{
	name:'form',
	props:{
	 	inputs: Array,
	    width:String,
	    values:Object
	  },
	  watch:{
	  	values:{
	  		handler:function(v){
	  			debugger
	  		},
	  		deep:true
	  	}
	  },
	  methods:{
	  	change:function(e){
	  		debugger
	  		Vue.set(this.values,e.target.name,e.target.value);//增加响应
	  	},
	  	getFormData:function(){//将所有的input分成3部分，左半边，右边和隐藏域
	  		var arrHide = [];
		  	var arrshow = [];
		  	$.each(this.inputs,function(i,v){
		  		if(v.type=="hidden"){
		  			arrHide.push(v);
		  		}else{
		  			arrshow.push(v);
		  		}
		  	});
		  	var half = (arrshow.length)/2+((arrshow.length)%2!=0?1:0);
		  	return [arrshow.slice(0,half),arrshow.slice(half,arrshow.length),arrHide];
	  	},
	  	getOne:function(i){
	  		return this.getFormData()[i];
	  	},
	  	test:function(){
	  		console.log('adasd')
	  	}
	  },
	  data:function() {
	  	return {
	  	}
	  },
	  computed:{
	  	formLeft : function(){
	  		return this.getOne(0);
	  	},
	  	formRight :function(){
	  		return this.getOne(1);
	  	},
	  	arrHide : function(){
	  		return this.getOne(2);
	  	},
	  	labelWidth: function(){
	  		return 'col-lg-'+this.width;
	  	},
	  	inputWidth:function(){
	  		return  'col-lg-'+(12-parseInt(this.width));
	  	}
	  }

}
</script>