<template>
 <div class="container-fluid bg-dark">
    <div class="containers position-relative" style="height: 40px; line-height: 40px;">
            <div id="nav" class="nav h-100 position-absolute" style="top: 0; left: 0;">
                <ul class="list-inline h-100">
                <li class="float-left" v-for="item in this.list"><a class="w-100 text-decoration-none text-light" href="">{{item}}</a><span class="pl-2 pr-2">|</span></li>
                    <li id="downapp" class="float-left"><a class="w-100 text-decoration-none text-light" href="">下载app</a>
                        <div id="app" class="bg-white text-center   border position-absolute " style=" z-index: 999999;width: 100px; right: -20px;;" >
                        <img src="img/mi-logo.png" style="width: 50px; height: 50px; background: #ff6700;" alt=""><br>
                        <span>小米商城app</span>
                    </div></li>
                </ul>
            </div>
            <div class="cart position-absolute row" style="top: 0; right: 0;">
                <div class="login float-right " >
                    <a href="" class="textcoloc text-decoration-none">登陆<span class="pl-2 pr-2"></span>|</a>
                    <a href="" class="textcoloc text-decoration-none">注册<span class="pl-2 pr-2"></span>|</a>
                    <a href="" class="textcoloc text-decoration-none">消息通知<span class="pl-2 pr-2"></span></a>
                </div>
                <div id="cart-box" class="d-flex flex-column text-right ">  
                   <a href="" class="textcoloc text-decoration-none">
                       <i class="iconfont ">&#xe603;</i>
                       我的购物车
                       <span>(5)</span>
                   </a>
                   <div class="d-none d bg-white position-absolute shadow" style="width: 360px; height: 100px; top: 40px; right: 0;">
                        <span class="text-center textcoloc">购物车中还没有商品，快去添加吧！</span>
                   </div>
                </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import '../assets/css/bootstrap.min.css'
 export default {
   name:'Head',
   data(){
     return {
       list:[
       "小米商城",
       "MIUI",
       "IoT",
       "云服务",
       "金融",
       "有品",
       "小爱开放平台",
       "企业团购",
       "资质证照","协议规则",]
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cart-box:hover{
  
  background-color: #ffffff;
  color: tomato;
  }
  #cart-box:hover>.d{
  display: block!important;
  background-color: #ffffff;
  text-align: center;
  line-height: 100px;
  z-index: 999;
  }
  .containers{
      width: 1200px;
      margin: 0 auto;
  
  }
    #app{
      display: none;
    
  
  }
</style>
