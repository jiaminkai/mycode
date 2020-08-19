<template>
<div class="brand" >
    <div class="pinpai" @click="to"> 品牌制造商直供 </div>
    <div class="brand-list">
        <div class="brand-box" v-for="(item,index) in this.brandlist" :key="index" @click="tobrnadderails(item.id)">
            <div class="brand-item">
                <div v-text="item.name"></div>
                <div v-text="item.floor_price"></div>
            </div>
            <img :src="item.new_pic_url" alt="">
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"brand",
    props:{
        brandlist:Array
    },
    methods:{
        tobrnadderails(id){
            console.log(id)
      this.$router.push({path:"/branddetails",query:{id}})
        },
        to(){
         this.$router.push("/brandlist")   
        }
    }
};
// console.log(this)
</script>
<style >
.brand{
    margin-top: 6px;
  background: #fff;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  
}
.brand-list{
    width: 100%;
    padding-right: 4px;
    box-sizing: border-box;
}
.brand-box{
    width: 49%;
    height: 108px;
    display: inline-block;
    position: relative;
    padding-left:6px;
    margin-bottom:6px ;
    box-sizing: border-box;
    
}
.brand-item{
float: left;
 position: absolute;
 top: 0;
 left: 6px;
text-align: left;
}
.brand div img{
    width: 100%;
    height: 100%;
    
}
.pinpai{
 padding: 15px 0;
}
</style>