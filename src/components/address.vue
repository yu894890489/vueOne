<template>
	<header class="panel-heading Noprint">
		<ol class="breadcrumb">
		  <li style="color: #667FA0;">{{ol[0]}}</li>
		  <li v-if="ol.length==3" style="color: #667FA0;">{{ol[1]}}</li>
		  <li  class="active">{{ol.length==3?ol[2]:ol[1]}}</li>
		</ol>
	</header>
</template>

<script>

export default{
	name:'address',
	props:{
		ol:Array
	}
}

</script>

<style scoped src="../assets/css/custom-styles.css"></style>