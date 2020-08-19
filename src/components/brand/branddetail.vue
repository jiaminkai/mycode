<template>
   <div class="branddetail">
       <div class="branddetail-img" >
           <img src="http://yanxuan.nosdn.127.net/1541445967645114dd75f6b0edc4762d.png" alt="">
           <div class="title" v-html="this.list.name"></div>
       </div>
       <div class="brand-desc" v-html="this.list.simple_desc">
       </div>
       <div class="sortlist" v-if="this.sortlist_show">
            <div class="sortlist-item" v-for="(item,index) in this.goodslist" :key="index">
                <img class="sortlist-item-img" :src="item.list_pic_url" alt="">
                <div class="sortlist-item-name" v-html="item.name"></div>
                <div class="sortlist-item-price" v-html="'￥'+item.retail_price"></div>
            </div>
       </div>
       <div class="none" v-else>
           数据库占时没有数据。。。。
       </div>
       
   </div>
</template>
<style scoped>
.branddetail{
    width: 100%;
    height: 100%;
    
    background: #EAEAEA;
    position: relative;
    z-index: 99999999;
}
.branddetail-img{
    width: 100%;  
    position: relative;

     
}
.branddetail-img img{
    width: 100%;
    height: 123px;
}
.sortlist{
    width: 100%;
      /* flex-wrap: 2; */
      height: auto;
      display: flex;
      flex-wrap: wrap;
        margin-top: 10px;
    background: #fff;
}
.sortlist-item{
    width: 49.999%;
    height: auto;
    background: #fff;
    border-right: solid #EAEAEA 2px;
    border-bottom: solid #EAEAEA 2px;
    padding: 8px 0;
}
.sortlist-item:nth-child(2n){
    border-right: none;
    border-left:solid #EAEAEA 1px ;

}

.sortlist-item-img{
    width: 128px;
    padding: 0 12px;
}
.sortlist-item-name{
    font-size: 12px;
    width: 100%;
    padding: 10px 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
}
.sortlist-item-price{
 font-size: 12px;
 color: red;   
}
.title{
position: absolute;
top: 50%;
left: 50%;
transform:translate(-50%,-50%);
font-size: 16px;
border-bottom: 3px #fff solid;
color: #fff;
}
.brand-desc{
    width: 100%;
    height: auto;
    background: #fff;
    font-size: 12px;
    padding: 16px 14px;
    display: flex;
    text-align: center;
    max-lines: 2;
}
.none{

        color: #fff;
    margin-top:90px;
}

</style>
<script>
import { get } from "../../../utils/index.js";
export default {
    name:'branddetails',
    data(){
        return{
           id:0,
           list:[],
           goodslist:[],
           sortlist_show:0

        }
    },
    methods:{
      
    },
    created(){
        console.log(this.$route.query.id)
         this.id=this.$route.query.id
         get("/brand/detailaction",{id:this.id}).then((res)=>{
             this.list=res.data,
             this.goodslist=res.goodsList
             this.sortlist_show=res.goodsList.length
            //  console.log(res.goodsList.length)

         })
        
       

    }
}
</script>