<template>
    <div class="topiclist">
        <div class="topiclist-right">
            <div>专题精选</div>
            <img src="../../assets/img/right.png" alt="">
        </div>
       <div class="ul">
           <div class="topiclist-list">
               <div class="topiclist-box" v-for="(item,index) in this.topiclist" :key="index" @click="todetails(item.content)" > 
                   <img :src="item.scene_pic_url" alt="">
                   <div class="text-title">
                   
                   <p class="topiclist-text1" v-html="item.title"></p>
                   <p class="topiclist-text3" v-html=" item.price_info +'元起'"></p>
                   </div>
                   <div class="topiclist-text2" v-text="item.subtitle"></div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'topiclist',
     data(){
      return{
          res:''
      }
        
        },
    props:{
        topiclist:Array
    },
    
  
    methods:{
        todetails(res){
            this.$router.push({
                path:'/details',
                query:{
res:res
                }
                
            })
            
        }
    }
}
</script>
<style  >
.topiclist{
    background: #fff;
    margin-top: 10px;
}
.topiclist-right{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    background: #fff;
}
.topiclist-right img {
    width: 15px;
    height: 15px;
    margin-left: 10px;
}
.topiclist-list{
    display: flex;
    background: #fff;
    flex-direction: row;
    width: 100%;
    overflow:scroll;
    padding-bottom: 30px;
   padding-right: 30px;
}

.topiclist-box{
    margin-left: 10px;
    display: inline-block;
    width: 245px;
    height: 140px;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
}
.topiclist-box div{
    width: 245px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

}
.topiclist-box img {
    width: 100%;
    height: 120px;
border-radius: 10px;
}

.text-title{
    display: flex;
    width: 100%;
    line-height: 24px;
    justify-content: space-between;
}
.topiclist-text1{
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    margin: 0;
    height: 24px;
}
.topiclist-text2{
      font-size: 10px;
   text-align: left;
 

}
.topiclist-text3{
    font-size: 10px;
   text-align: right;
   color: red;
      margin: 0;
    height: 24px;
}
</style>