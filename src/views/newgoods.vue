<template>
    <div class="newgoods">
        <div class="newgoods-banner">
            <img src="http://yanxuan.nosdn.127.net/8976116db321744084774643a933c5ce.png" alt="">
        </div>
        <div class="newgoods-nav">
            <div class="newgoods-nav-item">综合</div>
            <div class="newgoods-nav-item">价格<span class="iconfont">&#xe627;</span></div>
            <div class="newgoods-nav-item">分类</div>
        </div>
        <div class="newgoods-goods">
            
        </div>
    </div>
</template>

<script>
import { get } from "../../utils/index.js";
export default {
    data(){
        return{
            isHot:"",
            isNew:"",
            order:""
        }
    },
    created:function(){
           if(this.$route.query.name=='new'||this.$route.query.name=='hot'){
                if(this.$route.query.name=='new'){
                    return this.isNew=1
                }else if(this.$route.query.name=='hot'){
                    return this.isHot=1
                }
            }
       
        
    },
    mounted:function(){
         get("/goods/goodsList",{isHot: this.isHot, isNew: this.isNew, order: this.order})
                .then((res)=>{
                console.log(res)
         
                     })
    }
}
</script>
<style  scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_4w13k9mxbur.eot');
  src: url('//at.alicdn.com/t/font_1723175_4w13k9mxbur.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_4w13k9mxbur.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_4w13k9mxbur.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_4w13k9mxbur.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_4w13k9mxbur.svg#iconfont') format('svg');
}
.iconfont{
     font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: #dbdbdb;
}
.newgoods-banner{
    width: 100%;
}
.newgoods-banner img{
    width: 100%;
}
.newgoods-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.newgoods-nav-item{
    flex: 1;
    height: 30px;
    font-size: 10px;
    line-height: 30px;
}
.newgoods-nav-item span{
font-size: 10px;
}
</style>