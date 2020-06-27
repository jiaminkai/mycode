<template>
<!--左边接口 /category/indexaction 向右边传送参数ID-->
<!-- 右边接口 category/currentaction 参数id:1005000 -->
  <div class="categroy">
    <div class="right">
      <div class="categroy-tab" :class="{tabisactive:index == num}"  v-for="(item,index) in this.left" :key="index" v-html="item.name" @click="toleft(item.id,index)" ></div>
    </div>
    <div class="left" >
        <img class="categroy-swiper"  :src="this.right.banner_url"/>
        <div class="_span">
          <div>——</div>
          <div v-html="this.right.name"></div>
          <div>——</div>
        </div>
        <div class="left-list" >
          <div class="left-item" v-for="(item,index) in this.right.subList" :key="index">
              <img :src="item.wap_banner_url" alt="">
              <div v-html="item.name"></div>
          </div>
        </div>
      
    </div>
  </div>
</template>
<style>
.categroy{
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 100%;
}
.right{
  width: 30%;
}
.categroy-tab{
  width: 100%;
  height: 38px;
  line-height: 38px;
}
.left{
    width: 70%;

}
.left img{
  width: 100%;
  height: 90px;
}
._span{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  font-size: 14px;
}
.left-list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.left-item{
  width: 33.333%;
float: left;
font-size: 14px;
}
.left-item img{
  width: 61px;
  height: 61px;
}
.tabisactive{
  color: #ab2b2b;
  border-left: 3px solid #ab2b2b;
  font-size: 18px;

}
</style>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name:'categroy',
  data(){
    return{
      right:{},
      left:[],
      num:0
    }
  },
  computed:{
    tabs:function(){
      index==this.num?'tabisactive':''
    }
  },
  methods:{
    toleft(id,index){
      this.num=index
      console.log(this.num)
      axios.get(
      'api/category/currentaction?id='+id
    ).then((res)=>{
      // console.log(res.data.data.currentOne)
      this.right=res.data.data.currentOne
    })
    console.log(this.right)
  },
    toto(){
         axios.get(
      'api/category/indexaction '
    ).then((res)=>{
      console.log(res.data.categoryList)
      this.left=res.data.categoryList
    })
    }

    },
  
  created:function(){
    axios.all([this.toleft(1005000,0),this.toto()
    ]) .then(axios.spread(function(allTask, allCity){
        console.log('所有请求完成')
        console.log('请求1结果',allTask)
        console.log('请求2结果',allCity)

    }));
    

  },
}
</script>
