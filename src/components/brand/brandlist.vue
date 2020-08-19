<template>
    <div class="brand" ref="brand">
       <div class="brand-list" 
            v-for="(item,index) in this.listData" 
            :key="index"
            @click="tobranddetails(item.id)">
           <img :src="item.app_list_pic_url" alt="">
           <div class="info">
               <div class="info-title" v-html="item.name"></div>
               <div class="info-fg">|</div>
               <div class="info-price" v-html="item.floor_price"></div>
           </div>
       </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {get} from "../../../utils/index.js"
export default {
    name:"brandlist",
    data(){
        return {
            listData: [],
            page: 1,
            total: ""
        }
    },
    methods:{
      async  getdata(){
            const data= await get("/brand/listaction",{page: this.page})
                 console.log(this.page)
                this.total=data.total
                if(this.page==1){
                     this.listData=data.data
                }else{
                     this.listData=[...this.listData,...data.data]

                }
           
        },
        Downbottom(e){
        //HTML向上滚动了距离
            var scrollTop = parseInt(Math.ceil(e.target.documentElement.scrollTop))
            //子元素 的高度
            var scrollHeight =parseInt(e.target.documentElement.scrollHeight) 
                //html的高度
            var clientHeight = parseInt(e.target.documentElement.clientHeight) 
            if(this.page<this.total){
                if(scrollHeight==clientHeight+scrollTop){
                    console.log('加载下一页')
                    this.page++
                    this.getdata()
                }else{
                    console.log("m")
                }
            }else{
                console.log('没有更多了')                   
            }
        },
        tobranddetails(id){
            this.$router.push({path:'/branddetails',query:{id}})
        }
    },
    
   mounted:function(){
    window.addEventListener('scroll',this.Downbottom)
    },
    created(){
        this.getdata()
        // console.log(this.$route)
    }
}
</script>
<style scoped>
.brand{
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    z-index: 9999999999;
}
.brand-list{
    width: 100%;
    height: 180px;
    position: relative;
    margin-bottom: 2px;
}
.brand-list img{
    width: 100%;
    height: 100%;
    
}
.info{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    margin: auto;
    display: flex;
    flex-direction: row;
    text-align: center;
    background: none;
}
.info-title{
    color: #fff;
    font-size: 18px;
    
}
.info-fg{
    color: #fff;

    font-size: 18px;
    padding: 0 5px;
}
.info-price{
    color: #fff;

    font-size: 18px;
}
</style>