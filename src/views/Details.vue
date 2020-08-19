<template>
  <div class="details">
    <banter :list="gallery"/>
    <div class="top">
      <div class="hongdian">30天无忧退货</div>
      <div class="hongdian">48小时快速退款</div>
      <div class="hongdian">满88元免邮费</div>
    </div>
    <div class="title">
      <div class="name" v-html="this.info.name"></div>
      <div class="goods_brief" v-html="this.info.goods_brief"></div>
      <div class="retail_price" v-html="'￥'+this.info.retail_price"></div>
    </div>
    <div class="spec" @click="addgart">
      <div class="spec-title" >请选择规格数量</div>
      <img src="../assets/img/right.png" alt="">
    </div>
    <div id="goods_desc" v-html="this.info.goods_desc"></div>
    <!-- 问题 -->
    <div class="problem-box">
      <div class="line">
      <div class="line-borde"></div>
      <div class="line-title">常见问题</div>
      <div class="line-borde"></div>
      </div>
      <div class="problem">
        <div class="problem-item" v-for="(item,index) in this.issue" :key="index">
          <div class="problem-title" v-html="item.question"></div>
          <div class="peoblem-huida" v-html="item.answer"></div>
        </div>
      </div>
    </div>

 
    <div class="line">
        <div class="line-borde"></div>
        <div class="line-title">大家都喜欢</div>
        <div class="line-borde"></div>
    </div>
    <!-- 推荐产品 -->
    <div class="tuijain">
       <div class="tuijiangoods" v-for="(item,index) in this.productList"  :key="index" @click="todetails(item.id)">
        <img :src="item.list_pic_url" alt="">
        <div class="tuijiangoods-text" v-html="item.name"></div>
        <div class="tuijiangoods-price" v-html="'￥'+item.retail_price"></div>
      </div>
    </div>
    <!-- end推荐产品 -->

    <!-- 蒙图层 -->
    <div class="hidediv" v-if="this.showpop" @click="downup"></div>
    <!-- end蒙图层 -->

    <!-- 购物车操作栏 -->
    <div class="gart-tab" >
      <!-- 隐藏起来的选择规格 -->
      <transition name="fade">
      <div class="gart-hide"  v-if="this.showpop">
          <div class="gart-hide-img">
            <img :src="this.info.primary_pic_url" alt="">
            <div class="gart-hide-price">
              <div class="downup" @click.stop="downup">X</div>
              <div class="hide-price">
                <div class="hide-price-text" v-html="'价格￥'+this.info.retail_price"></div>
                <div class="hide-price-num">请选择数量</div>
              </div>
            </div>
          </div>
          <div class="goods-number-title">数量</div>
          <div class="goods-number">
            <div class="" @click="del">-</div>
            <input v-model="number"/>
            <div class="" @click="add">+</div>
          </div>
      </div>
      </transition>
      <!-- end隐藏起来的选择规格 -->

      <div id="details-tab">
        <div class="gart-sc gart-item" @click="shochang">
            <div v-if="!collected" class="iconfont">&#xe60b;</div>
            <div v-else class="iconfont icon2" >&#xe62c;</div>
        </div>
        <div class="iconfont gart-item iconfont-gart" @click="tocart">&#xe600;
          <div class="allnumber" v-html="this.allnumber"></div> 
        </div>
        <div class="gart-gomai gart-item">立即购买</div>
        <div class="gart-button gart-item" @click="addgart">加入购物车</div>
      </div>
    </div>
<!-- end购物车操作栏 -->
  </div>
</template>

<script>

import axios from 'axios'
import {getStorageOpenid,get} from '../../utils/index'
import banter from '../components/banter/banter.vue'
import newcategory from'../components/newCategoryList/newCategoryList.vue'
export default {
  name: 'Details',
  data(){
    return{
      id:0,
      openId:'',
      gallery:[],
      attribute:[],
      allnumber:0,
      info:[],
      issue:[],
      productList:[],
      addshow:false,
      collected:'',
      number:0,
      showpop:false,
      
    }
  },
 
  watch:{
    id(){
      this.getopenid()
      console.log("gengxin")
    }
  },
  components: {
      banter,
      newcategory
  },
  methods:{
    // 增加商品数量
        add(){
          this.number++
          console.log(this.number)
        },
        // 减少商品数量
        del(){
          if(this.number<=1){
            this.number=0
          }else{
          this.number--
          }
        },
        // 收藏商品
        shochang(){
          this.collected=!this.collected
          axios.post('api/collect/addcollect',{
            openId:this.openId,
            goodsId:this.id
          })
        },
        // 跳转购物车
        tocart(){
            axios.get('api/cart/cartList',{
            params:{
              openId:this.openId
            }
            }).then(res=>{
            console.log(res.data.data)
            this.cartList= res.data.data
            })
          this.$router.push("/cart")
        },
        // 添加商品
        addgart(){         
          if(this.showpop){
            // console.log(this.showpop)
            if(this.number==0){
              console.log('请输入数量')
            }else{ axios.post('/api/cart/addCart',{
                openId: this.openId,
                goodsId: this.id,
                number: this.number
            }) }
          }else{
            this.showpop=true;
          }
        },
        // 关闭隐藏栏
        downup(){
            this.showpop=false;
            console.log("1")
          
        },
        todetails(id){
           this.id=id
           console.log(this.id)
                this.$router.push("/details"+id)
                this.$router.go(0)

   
        },
        // 获取详情商品数据
        getopenid(){
        this.openId=getStorageOpenid()  
        this.id=this.$route.params.id
        axios.get('api/goods/detailaction',{
          params:{
            id:this.id,
            openId:this.openId
          }
        }).then((res)=>{
          console.log('aa',res.data.info)
          this.gallery=res.data.gallery;
          this.attribute=res.data.attribute;
          this.allnumber=res.data.allnumber;
          this.info=res.data.info;
          this.issue=res.data.issue;
          this.productList=res.data.productList;
          this.collected=res.data.collected;
      
        })
    },


  },
  created:function(){
this.getopenid()
}
}

</script>
<style  scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_2i73k3pu4sz.eot');
  src: url('//at.alicdn.com/t/font_1723175_2i73k3pu4sz.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_2i73k3pu4sz.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_2i73k3pu4sz.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_2i73k3pu4sz.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_2i73k3pu4sz.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.details{
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 999999;
  background: #EAEAEA;
}
.top{
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: space-around;
  padding: 10px 0;
  background: #EAEAEA;
}
.hongdian{
  display: flex;
  flex-direction: row;
}
.hongdian::before{
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  margin: auto;
  border-radius: 50%;
  border: sienna solid 1px;
}
.banter{
  height: 320px;
}
.title{
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  padding-bottom: 50px;
  background: #fff;
}
.name{
  font-size: 18px;
  font-weight: 300;
  color: #000;
}
.goods_brief{
  font-size: 12px;
  color: #ccc;
}
.retail_price{
  color: crimson;
  font-size: 16px;
}
.spec{
  display: flex;
  flex-direction: row;
  background: #fff;
  align-content: center;
  justify-content: space-between;
  padding: 10px 10px;
  border-top:solid 1px #EAEAEA 
}
.spec img{
  height: 20px;
  width: 20px;
  display: block;
}
#goods_desc{
  width: 100%;
  height: auto;
  overflow: hidden;
  background: #fff;
}
#goods_desc:nth-child(n) {
  width: 100%;
}
#goods_desc >>>img{
  width: 100%;
  
}
.line{
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.line-borde{
  width: 60px;
  height: 1px;
  background: #ccc;
}
.tuijain{
  width: 100%;
  clear: left;
   border-left: 4px solid #EAEAEA;
   border-right: 4px solid #EAEAEA;

   float: left;
   background: #EAEAEA;
  margin: 0 auto;
  box-sizing: border-box;
}
.tuijiangoods{
  width: 50%;
  float: left;
  background: #fff;
}

.tuijiangoods:nth-child(2n+1){
  border-right: solid #EAEAEA 2px;
  border-bottom: solid #EAEAEA 4px;
}
.tuijiangoods:nth-child(2n){
  border-left: solid #EAEAEA 2px;
  border-bottom: solid #EAEAEA 4px;
}
.tuijiangoods img{
  width: 100%;
  padding: 0 10px;
}
.tuijiangoods-text{
  text-align: left;
  font-size: 12px;
  width: 98%;
  line-height: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.tuijiangoods-price{
  font-size: 14px;
  text-align: left;
  color:crimson;
}
.gart-tab{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
#details-tab{
  width: 100%;
  height: 43px;
  background: #fff;
  display: flex;
  flex-direction: row;
  }
  .gart-item{
    height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 12px;
  }
  .allnumber{
    width: 12px;
    height: 12px;
    background: red;
    font-size: 8px;
    margin-top: -20px;
    margin-left: -6px;
    border-radius: 50%;
  }
.icon2{
  color: crimson;
}
.gart-button{
  background: crimson;
  color: #fff;
}
.gart-sc ,.iconfont-gart{
  flex: 1;
}
.gart-gomai ,.gart-button{
  flex: 1.3;
}
.iconfont-gart{
  font-size: 25px;
  border-left: 1px solid #EAEAEA;
  border-right: 1px solid #EAEAEA;

}
.problem{
  text-align: left;
  font-size: 12px;
   margin: 10px;
}
.problem-title{
  font-weight: 600;
  display: flex;
  align-items: center;
 line-height: 2.5;

}
.problem-title::before{
  content: "";
  display: block;
  margin-right: 5px;
  width: 5px;
  height: 5px;
  background: lightcoral;
  
}
.peoblem-huida{
  width: 100%;
  color: #ccc;
 
}
.gart-hide{
  width: 100%;
  height: 150px;
  background: #fff;

}
.hidediv{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.gart-hide-img{
  display: flex;
  flex-direction: row;
}
.gart-hide-price{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.downup{
  text-align: right;
  margin-right: 10px;
}
.gart-hide-img img{
width: 70px;
height: 70px;
margin: 0 10px;
}
.hide-price{
  text-align: left;
}
.hide-price-text{
  font-size: 12px;
  color: crimson;

}
.hide-price-num{
  font-size: 12px;
  color: 000;
}
.goods-number{
  display: flex;
  flex-direction: row;
  margin-left: 10px;

}
.goods-number div{
  width: 40px;
  height: 30px;
  border: #ccc 1px solid;
}
.goods-number input{
  width: 60px;
  height: 30px;

  text-align: center;
  font-size: 14px;
}
.goods-number-title{
  text-align: left;
  margin: 10px ;
  font-size: 12px;
}
.fade-enter-active, .fade-leave-active {
 transition:all 1s linear;
}
.fade-enter, .fade-leave-to  {
  transform: translateY(100%);
}

</style>
