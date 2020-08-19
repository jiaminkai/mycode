<template>
  <div class="main">
    <search/>
  
    <banter  :list="banner" v-if="fale"   />
    <channel :channellist="channel" v-if="fale" />
    <brand :brandlist="brandList" />
     <div class="new" @click="tonewgoods('new')">
            <div class="newtext1"  >新品首发</div>
            <div class="newtext2">查看全部</div>
      </div>
    <newgoods :newgoods="newGoods"/>
     <div class="new1" @click="tonewgoods('hot')">
            <div class="newtext3">人气推荐 · 好物精选</div>
            <div class="newtext4">查看全部</div>
     </div> 
    <newgoods :newgoods="hotGoods"/> 
    <topiclist :topiclist='topicList'/>
    <newcategory :newcategory='newCategoryList'/>
  </div>
</template>
<style>
@media all and (min-width:900px){
 
  #app{
  
width: 320px;
height: 568px;
margin: 0 auto;
overflow: scroll;

  }
  .tab-list{
    width:320px;
      margin: 0 auto;
  }


}

.main{
   padding-bottom: 55px;
   background: #EAEAEA;
   clear: left;
}
.new,.new1{
    height: 90px;
    margin: 6px 0;
    background:#d8e4f0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.new1{
    background:#ffffcc ;

}
.newtext1,.newtext3{
color: #8c9bae;
font-size: 16px;    
}
.newtext3{
  color: #ffcccc;
}
.newtext2 ,.newtext4{
width: 90px;
height: 25px;
line-height: 25px;
margin: 8px auto 0 auto;
font-size: 11px;
background: #d8f4f0;
border: 1px #d8f4f0 solid ;
border-radius: 3px;
}
.newtext4{
  background: #ffff66;
border: 1px #ffff66 solid ;
border-radius: 3px;
}
</style>
<script>
import channel from '../components/channel/channel.vue'
import search from '../components/search/search.vue'
import brand from '../components/brand/brand.vue'
import banter from '../components/banter/banter.vue'
import newgoods from '../components/newgoods/newgoods.vue'
import topiclist from '../components/topiclist/topiclist.vue'
import newcategory from '../components/newCategoryList/newCategoryList.vue'
import Vue from 'vue'
import axios from 'axios'
export default {
    name:'mian',
      data : function(){
        return{
          fale:false,
          banner:[],
          channel:[],
          newGoods:[],
          hotGoods:[],
          topicList:[],
          newCategoryList:[],
          brandList:[]
        }
    
  },
  methods:{
   tonewgoods(name){
    
      this.$router.push({path:"/newgoods",query:{name}})
   }
  },
   components:{
    search,
    banter,
    channel,
    brand,
    newgoods,
    topiclist,
    newcategory,
  },
  created:function(){
    
    axios({
      url:'api/index/index'
    }).then(res=>{
        console.log(res)
      this._data.banner=res.data.banner
      this._data.channel=res.data.channel
      this._data.newGoods=res.data.newGoods
      this._data.hotGoods=res.data.hotGoods
      this._data.topicList=res.data.topicList
      this._data.brandList=res.data.brandList
      this._data.newCategoryList=res.data.newCategoryList
      this._data.fale=true


    })
      }
}

</script>