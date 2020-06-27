<template>
    <div class="banter" >
        <ul >
            
            <li  v-for="(item,index) in list" :key="index" v-show="index===num"  >
                <img :src="item.image_url" alt="" mode='widthfix'>
            </li>
           
        </ul>
          <div class="xiaoqiu">
              <ol>
                  <li v-for="(n,index) in list" :key="index" class="box" @click.stop="change(index)" :class="index==n.id?'active':''"></li>
              </ol>
          </div>
    </div>
  
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.banter{
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}
.banter ul {
    list-style: none;
    width: 400%;
    height: 160px;
    
}
.banter ul li{
    display:block;
    float: left;
    width: 25%;
    height: 160px;
    background: orange;
}
.banter ul li img{
    display:block;
    float: left;
    width: 100%;
    height: 160px;
   
}
.xiaoqiu{
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%,-50%);

}
.xiaoqiu ul{
 list-style: none;
 float: left;

}
.xiaoqiu ol{
    list-style: none;
    
}
.box{
    float: left;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    margin-left: 6px;
}
.active{
    background: #000;

}


</style>
<script>

export default {
    name:'Banter',
    props:{
        list:Array
    },
    data(){
        return {
            time:'',
            num :0
        }
    },
    methods:{
            play(){
                this.time=setInterval(()=>{
                    this.num++;
                    if(this.num>=4){
                        this.num=0
                    }
                },2000)
            },
          
            change(index){
        console.log(index)
        console.log(this.num)
        this.num=index
            }
    },
    created:function(){
        this.play()
    },
    computed:{
   
    }
};

</script>