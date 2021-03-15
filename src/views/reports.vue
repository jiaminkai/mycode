<template>
<div class="cont">
  <div class="font">
      <p>这个西红柿死了吗<br>
        可是它的颜色<br>
        还像鲜花一样奔放</p>
                     <p>这个西红柿死了吗<br>
                    可是它的颜色<br>
                    </p>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
    html,body{
        height: 100%;
        overflow: hidden;
    }
    .cont{
        perspective: 1px;
        
        overflow-y: scroll;
        overflow: auto;
       
    }
    .font{
        transform-style: preserve-3d; 
        height: 300vh;
        background-color: rgba(255, 69, 31, 0.5);
        position: relative;  
         perspective: 1px;
         transform-style: preserve-3d;
    }
    p:nth-child(1){
        position: absolute;
        top: 30%;
        left: 20%;
        transform: translateZ(-1px) scale(2);
    }
    p:nth-child(2){
        position: absolute;
        top: 30%;
        left: 80%;
    
        transform: translateZ(-16px) scale(28) ;
    }
</style>