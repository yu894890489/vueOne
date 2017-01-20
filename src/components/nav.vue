<template>
	<nav id="sidebar" class="navbar-default navbar-side" role="navigation">
	            <div class="sidebar-collapse">
	                <ul class="nav" id="main-menu">
	
	                    <li>
	                        <a class="" href="/SCFAdmin/home"><i class="icon-home fa fa-dashboard" style="font-size:18px"></i> 首页</a>
	                    </li>
	                    <li v-for="key in navData">
	                    	<a v-bind:href="key.url" :id="key.id"><i :class="key.icon" class=" fa fa-desktop"></i> {{key.name}}<span class="fa arrow icon-left"></span></a>
	                    		<ul v-if="key.children != undefined" class="nav nav-second-level">
	                    			<li v-for="ke in key.children">
	                    				 <a v-bind:href="ke.url" :id="ke.id"><i  :class="ke.icon"></i>{{ke.name}}<span v-if="ke.children!=undefined" class="fa arrow icon-left"></span></a>
                            	 <ul v-if="ke.children!=undefined" class="nav nav-third-level">
                            	 	<li v-for="k in ke.children">
                            	 		<a v-bind:href="k.url" :id="k.id"><i></i>{{k.name}}</a>
                            	 	</li>	
                            	 </ul>
                            </li>
	                    		</ul>
	                    </li>
	                    
	                </ul>
	
	            </div>
	
	        </nav>
</template>

<script>
	import '../assets/js/jquery.metisMenu.js'
	import '../assets/js/jquery.nicescroll.js'
	import '../assets/js/custom-scripts.js'
	import '../assets/js/common-scripts.js'

	export default{
		name:'nav',
		props: {
		  	navData:Array
		  }
	}

</script>
<style scoped src="../assets/css/font-awesome.css">
</style>
<style scoped src="../assets/css/font-awesome2.css"></style>

<style scoped src="../assets/css/custom-styles.css">
</style>

