<template>
    <div class="newcategory">
        <div class="newcategory-box" v-for="items in this.newcategory" :key="items.id">
            <div class="newcategory-title" v-html="items.name+'好物'"></div>
            <div class="goods-list" :a="items.name+'好物'">
                <div class="goods" v-for=" (k,index) in items.goodsList " :key="index" @click="todetails(k.id)">
                    <img :src="k.list_pic_url" alt="">
                    <div class="goods-text" v-html="k.name"></div>
                    <div class="goods-text2" v-html="'￥'+k.retail_price"></div>
                </div>
            </div>
        <div class="cleat"></div>

            <img class="goods-img" src="../../assets/img/right.png" alt="">
        </div>
        <div class="cleat"></div>
    </div>
</template>
<style >
.newcategory{
/* margin: 5px 0 49px 0; */
background: #EAEAEA;

}
.newcategory-box{
   
    background: #EAEAEA;
    position: relative;
}

.newcategory-title{
    font-size: 14px;
    color: #0c0c0c;
    padding: 10px 0;
    
}
.goods{
    width: 48%;
    float: left;
    background: #fff;
    margin-left: 4px;
    margin-bottom: 4px;
    
}
.goods img{
    width: 128px;
    height: 128px;
}
.goods-img{
    position: absolute;
    top: 630px;
    right: 70px;
}
.goods-list{
    background: #fff;
    clear: left;
    height: auto;
}
.goods-text{
    width: 90%;
    padding-left: 10px;
    font-size: 12px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods-text2{
    padding-left: 10px;
    font-size: 14px;
    color: orangered;
    text-align: left;

}
.cleat{
    clear: both;
}
.goods-list::after{
content: attr(a) ;
display: flex;
width: 48%;
height: 166.4px;
background:#fff;
float: left;
justify-content: center;
margin-left: 4px;
padding-top:30px ;
}

</style>
<script>
export default {
    name:'newCategoryList',
    props:{
        newcategory:Array
    },
    methods:{
        todetails(id){
  console.log("111")
  console.log(this.$router._data)
  console.log(this.$route)
  this.$router.push('/details'+id)
}
    }

}
</script>