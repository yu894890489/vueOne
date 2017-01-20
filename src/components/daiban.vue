<template>
	<div class="row state-overview">
                  <div class="col-lg-3 col-sm-6" v-for="cell in daibanData">
                      <a :href="cell.url">
	                      <section class="panel">
	                          <div class="symbol" :class="cell.class">
	                              <i :class="cell.icon"></i>
	                          </div>
	                          <div class="value">
	                              <h1 :class="cell.color">{{cell.num}}</h1>
	                              <p>{{cell.name}}</p>
	                          </div>
	                      </section>
                      </a>
                  </div>
                 
    </div>
</template>

<script>
import '../assets/css/bootstrap.min.css'
import '../assets/css/bootstrap-reset.css'
import '../assets/css/style.css'
import '../assets/css/base.css'
import '../assets/css/font-awesome2.css'
import '../assets/js/bootstrap.min.js'
	export default{
		name:'daiban',
		props:{
			daibanData:Array
		}
	}
</script>

<style scoped></style>