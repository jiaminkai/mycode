<template>
  <div class="cart">
    <!-- oQmbb4sNZdxaUQZ0sfYgvtOP2S7c   -->
   <div class="top">
     <div class="hongdian">30天无忧退货</div>
     <div class="hongdian">48小时快速退款</div>
     <div class="hongdian">满88元免邮费</div>
   </div>
   <div class="cart-box" v-for="(item,index) in this.cartList" :key="index" @click="delect(item.id,index)" @touchstart="startMove" @touchmove="deleteGoods" @touchend="endMove">
     <input type="radio" class="checkbox" @:click="change"/>
     <div class="goods">
       <div class="cart-goods-img">
         <img :src="item.list_pic_url" alt=""/>
       </div>
       <div class="goods-text">
         <div class="name" v-text="item.goods_name"></div>
         <div class="prace" v-html="'￥'+item.retail_price"></div>
       </div>
     </div>
     <div class="num" v-html="'X'+item.number" ></div>
     <div @click="delGoods(item.id,index)" class="delete" :style="item.textStyle1">
          <div>
            删除
          </div>
        </div>
   </div>
   <div class="cart-tab">
     <div class="quanxuan" v-html="'全选'+this.cartList.isCheckedNumber">
       

     </div>
     <div class="jiesuan">
           
     </div>
   </div>
  </div>
</template>
<style scoped>
.cart{
  overflow: hidden;
}

.top{
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: space-around;
  padding: 10px 0;
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
.cart-box{
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: relative;
  /* margin-left: -50px; */

}
.checkbox{
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.goods{
  flex: 1;
  display: flex;
  flex-direction: row;
}
.cart-goods-img{
  width: 60px;
  height: 60px;
  background: #ccc;
}
.cart-goods-img img{
 width: 60px;
  height: 60px;
}

.goods-text{
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
 justify-content: center;
}
.num{
  font-size: 14px;
  margin-right: 15px;
}
.delete{
  width: 50px;
  height: 100%;
  line-height: 5;
  position: absolute;
  right: 0;
  font-size: 16px;
  margin-right: -50px;
  background: #fff;
}
.cart-tab{
  background: #000;
}
.quanxuan{
  color: #fff;
}
</style>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name:'cart',
  data(){
    return{
      openId:'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
      cartList:[]
    }
  },
  methods:{
    // 开始位置
    startMove(){},
    // 结束位置
    endMove(){},
    // 删除商品
    deleteGoods(){},
    change(){

    },
    delect(id){
      console.log('删除')
      axios.delete('api/cart/deleteAction',{
        id:id
      }).then(res=>{
        console.log(res)
      })
    }
  },
  computed:{
    isCheckedNumber(){
      
    }
  },
  created :function(){
    // 获取购物车数据
    axios.get('api/cart/cartList',{
      params:{
        openId:this.openId
      }
    }).then(res=>{
      console.log(res.data.data)
    this.cartList= res.data.data
    })
  }
  
}
</script>
