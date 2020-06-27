<template>
    
        <div class="special" ref="special">
            <div class="info" v-for="(item,index) in this.topicList" :key="index" @click="todetails(item.id)">
                <img :src="item.scene_pic_url" alt="">
                <div class="info-text" v-html="item.title"></div>
                <div class="info-text2" v-html="item.subtitle"></div>
                <div class="info-price" v-html="item.price_info +'元起'"></div>
            </div>
        </div>
    
</template>
<style >
/* .box{
    height: 100%;
    overflow: scroll;
} */
.special{
    background: #EAEAEA;
   height: 100%;
}
.info{
    background: #fff;
    margin-bottom: 8px;
    text-align: center;
}
.info img{
    width:100%;
    height: 177px;

}
.info-text2{
    font-size: 12px;
    color: #ccc;
}
</style>
<script >
import Vue from 'vue'
import axios from 'axios'
export default {
    name:'special',
    data(){
        return{
            topicList: [],
            page: 1,
            total: ""
        }
    },
    methods:{
        todetails(id){
            console.log(id);
                  this.$router.push({
        path: `/details/${id}`
      })
    
        },
 Dropdown(e){
        var scrollTop = parseInt(Math.ceil(e.target.documentElement.scrollTop))
        var scrollHeight =parseInt(e.target.documentElement.scrollHeight) 
        var clientHeight = parseInt(e.target.documentElement.clientHeight) 
        // console.log(scrollTop)
        // console.log(scrollHeight)
        // console.log(clientHeight)
        // console.log(scrollHeight *this.page)
        // console.log(this.page)
        // console.log(scrollTop+clientHeight)
        if(scrollHeight ==scrollTop+clientHeight){
              this.page++;
            this.netx();
            console.log('daole')
        }

        },
         netx(){
             axios.get('api/topic/listaction',{
                params: {
                        page:this.page
                    }
            }
            ).then((res) => {
                this.topicList=this.topicList.concat(res.data.data)
                console.log(res.data.data)                
            })
        }

    },
    mounted:function(){
    window.addEventListener('scroll',this.Dropdown)},
    created:function(){
            axios.get('api/topic/listaction',{
                params: {
                        page:1
                    }
            }
            ).then((response) => {
                console.log(response.data)
                this.topicList=response.data.data
})
        }
}
</script>