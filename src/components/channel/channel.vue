<template>
    <div class="channer-tab">
        <div class="item"  v-for="(item,index) in this.channellist" :key="index" @click="tocartgroylist(index,item.id)">  
            <img  :src="item.icon_url" alt="">
            <div v-text="item.name"></div>
        </div>
    </div>
</template>
<style  scoped>
.channer-tab{
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    background: #fff;
}
.item{
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
}
.item img {
    width: 24px;
    height: 24px;
}
.item div {
    width: 100%;
    font-size: 12px;
}
</style>

</style>
<script>
// import cartgroylist from "../../views/cartgroylist.vue";
export default {
    name:"channel",
    props:{
        channellist:Array
    },
    components:{
        // cartgroylist
    },
    methods:{
        tocartgroylist(id,cartid){
             this.$router.push({path:`/cartgroylist`,query:{cartid,id}})
            console.log(id)
            console.log(cartid)

        }
    }
}
</script>