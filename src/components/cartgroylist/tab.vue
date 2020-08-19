<template>
    <div class="cartgroyGoods">
        <div class="cartgroyGoods-item" 
             v-for="(item,index) in this.groylist" 
             :key="index" 
             @click="todetails(item.id)">
            <img :src="item.list_pic_url" alt="">
            <!-- <div v-html="item.goods_brief"></div> -->
            <div class="cartgroyGoods-title" v-html="item.name"></div>
        </div>
    </div>
</template>
<style scoped>
.cartgroyGoods{
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
   background: #EAEAEA;
   border-top: solid #EAEAEA 2px;
   justify-content: space-between;
   box-sizing: border-box;
   z-index: 9999999;
   position: relative;
}
.cartgroyGoods-item{
    width: 49.99%;
    height: auto;
    background: #fff;
    border-bottom: #EAEAEA solid 2px;
   
    box-sizing: border-box;
}
.cartgroyGoods-item:nth-child(2n-1){
 border-right: #EAEAEA solid 3px;
}
.cartgroyGoods-item img{
    width: 100%;
    padding: 0 15px;
}
.cartgroyGoods-title{
    color: #333;
    font-size: 12px;
    overflow: hidden;
    white-space: pre-wrap;
    text-align: center;
}
</style>
<script>
export default {
    name:'groylistTab',
    props:
        {groylist:Array},
    methods:{
        todetails(id){
            this.$router.push(`/details`+id)
        
        }
    }
    
    
}
</script>