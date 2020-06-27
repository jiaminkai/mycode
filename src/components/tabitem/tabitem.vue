<template>
    <div class="tab-item" @click="to">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="textcolor"><slot name="item-text"></slot></div>
    </div>
</template>

<script >


export default {
    name:'TabItem',
    data(){
         return { }
    },
    props:{
    link:String
    },
  
    methods:{
        to(){
            console.log(this.link)
           this.$router.replace(this.link)
        }
    },
      computed:{
        isActive(){
           return this.$route.path.indexOf(this.link) !== -1    
        },
        textcolor(){
           return this.isActive?'active':''    

        }
     
    },
}
</script>
<style  scoped>
.tab-item{
    height: 49px;
    display:flex;
    flex-direction :column;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
.tab-item img{
  height: 24px;
  width: 24px;
  margin-top: 6px;
}
.active{
    color: red;
}

</style>