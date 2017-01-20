<template>
    <!--中1区域 header start-->
      <header class="header white-bg">
            <div class="sidebar-toggle-box">
                <div @click="but" class="icon-reorder tooltips"></div>
            </div>
            <!--logo start-->
            <a href="/home" class="logo"><img src="../assets/image/供应链金融.png"></a>
            <!--logo end-->
           <div class="top-nav " id="userName">
              <userTem></userTem
            </div>
        </header>
      <!--header end-->
</template>

<script> 
import  userTem from '../components/userName'
    function but(){
      var speed=250;
        if ($('#sidebar > div > ul').is(":visible") === true) {
            $('#main-content').animate({
                'margin-left': '0px'
            },speed);
            $('#sidebar').animate({
                'margin-left': '-180px'
            },speed);
            $('#sidebar > div > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').animate({
                'margin-left': '180px'
            },speed);
            $('#sidebar > div > ul').show();
            $('#sidebar').animate({
                'margin-left': '0'
            },speed);
            $("#container").removeClass("sidebar-closed");
        }
    
    }
export default {  
  name: 'head',
  components:{
    userTem
  },
  methods:{
    but:but
  }
  }  
  
</script> 