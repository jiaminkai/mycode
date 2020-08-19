<template>
  <!-- 顶部导航 -->
  <div class="cartgroylist" >
      <div class="cartgroylist-tab" >
        <ul class="cartgroy-ul">
          <div class="cartgroy-tab-item" 
               v-for="(item,index) in this.navData" 
               :key="index" v-html="item.name" 
               :class="id==index?'nav-active':''"
               @click="changenav(id=index,item.id)">
          </div>
        </ul>    
      </div>
      <!-- 顶部导航结束 -->
      <div class="cartgroylist-title">
          <div class="title-name" v-html="this.currentNav.name"></div>
          <div class="title-jianjie" v-html="this.currentNav.front_name"></div>
      </div>

      <groylist-tab  :groylist="goodsNav"/>
  </div>

</template>
<style scoped>
.cartgroylist{
  width: 100%;
  height: 100%;
}
.cartgroylist-tab{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.cartgroy-ul{
  margin: 0;
  padding: 0  ;
  width: auto;
  list-style: none;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: scroll;
  background-color: #fff;
 
}
.cartgroy-ul::-webkit-scrollbar{
  width: 0;
  height: 0;
  background-color: #fff;
}
.cartgroy-tab-item{
  display: inline-block;
  /* margin: 8px 0; */
  padding: 8px ;
 
}
.nav-active{
  border-bottom: 1px solid;
  color: #ab2b2b;
}
.cartgroylist-title{
  width: 100%;
  height: 50px;
  background-color: #fff;
  margin-top: 8px;
}
</style>
<script>
import axios from 'axios';
import groylistTab from '../components/cartgroylist/tab.vue'
import { get } from "../../utils/index.js";
export default {
  name:'cartgroylist',
  data(){
      return{
        id:0,
        currentNav:[],
        navData:[],
        categoryId:0,
        goodsNav:[]
      }
    },
    components:{
      groylistTab
    },
    methods:{
      // 导航栏切换
      changenav(id,Id){
        console.log(id)
        this.categoryId=Id
        this.getgoods();
        this.$router.push('/cartgroylist')
      },
      // 获取导航信息
      getgoodsNav(){
           axios.get("api/category/categoryNav",{params:{
             id:this.categoryId
           }}).then((res)=>{
        this.navData=res.data.navData
        this.currentNav=res.data.currentNav
        console.log(res.data)
      })
      },
      // 当前选项的商品
      getgoods(){
         axios.get("api/goods/goodsList",{params:{categoryId:this.categoryId}}).then((res)=>{
        console.log(res.data)
        this.goodsNav=res.data.data
          })
    

      }
    },
    created(){
      // 将穿过来的参数赋值
      console.log(this.$route.query.cartid)
      console.log(this.$route.query.id)
      this.id= parseInt(this.$route.query.id) 
      this.categoryId=this.$route.query.cartid
      this.getgoodsNav()
      this.getgoods()
    }
    }
</script>