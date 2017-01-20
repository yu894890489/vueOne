<template>
	 <ul class="nav pull-right top-menu">
                    <li class="dropdown">
                        <a  id="nameA" class="dropdown-toggle" href="#" data-toggle="dropdown">
                            <span class="username">小明</span>
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu extended logout" role="menu">
                            <div class="log-arrow-up"></div>
                            <li><a href="login.html"><i class="icon-key"></i> Log Out</a></li>
                        </ul>
                    </li>
                </ul>
</template>

<script>

	export default {  
	  name: 'userName',
	  data () {  
	    return {  
	     
	    }  
	  }  
	}  
</script>