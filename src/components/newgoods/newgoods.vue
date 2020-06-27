<template>
    <div class="newgoods">
       <div>
           <div class="newgoods-list">
               <div class="newgoods-box" v-for="(item,index) in this.newgoods" :key="index">
                   <img :src="item.list_pic_url" alt="">
                   <div class="text1" v-text="item.name"></div>
                   <div class="text2" v-text="item.goods_brief"></div>
                   <div class="text3" v-html="'￥'+ item.retail_price"></div>

               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'newgoods',
    props:{
        newgoods:Array
    }
}
</script>
<style>
.newgoods{
    background: #fff;
}
.newgoods-list{
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow:scroll;
}
.newgoods-box{
    margin-left: 10px;
    display: flex;
    width: 120px;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    padding: 0 10px ;
    margin-bottom: 8px;
    border-right: 1px #ccc solid;
}
.newgoods-box div{
    width: 90%;
    margin: 0 auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

}
.newgoods-box img {
    width: 110px;
    height: 110px;
}


.text1{
    font-size: 12px;
    font-weight: 700;
       text-align: left;
}
.text2{
      font-size: 10px;
   text-align: left;
}
.text3{
    font-size: 10px;
   text-align: left;
   color: red;
}
</style>