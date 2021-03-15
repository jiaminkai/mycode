<template>
 <el-container>
   <!-- 头部 -->
      <el-header ></el-header>
      <el-container>
       <!-- 侧边 -->
          <el-aside :width="isactive?'66px':'200px'">
            <!-- 导航栏 -->
            <el-button @click="a()" type="Primary" class="button"> 切换</el-button>
            <el-menu background-color="#606266 "  :router="true" default-active="users" active-text-color="#409EFF"   :collapse-transition="false" :collapse="isactive" unique-opened  >
                <!-- 一级菜单 -->
              <el-submenu :index="'/'+item.path" v-for="item in this.listData" :key="item.path" >
                <!-- 一级菜单 文字 图标 -->
                  <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>{{item.authName}}</span>
                  </template>
                <!-- 二级菜单 -->
                  <el-menu-item v-for="(items,indexs) in item.children" :key="indexs" :index="items.path" >
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{items.authName}}</span>
                  </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <!-- 主体内容 -->
          <el-main>
            <router-view>

            </router-view>
          </el-main>
      </el-container>

 </el-container>
 
 
</template>
<style lang="css">
body{
  height: auto;
}
.el-container{
  width: 100%;
}
.el-header{
  background: #303133;
}
.el-aside{
  overflow: hidden !important;
}
.el-submenu{
  text-align: left;
  width: 100%;
}
.el-menu-item{
  width: 100%;
}
.button{
  width: 100%;
}
.el-breadcrumb{
  padding: 20px;
  margin-top: 15px;
}
.l-table{
  width: 70%;
}
.el-main{
  width: 100%;
}
</style>
<script>
import {Mone} from '../../requery/requert';
export default {
  components:{
    
  },
    data(){
      return{
        isactive:false,
        listData:[
        ],
        tableDta:[
          {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
        ],
        sdata:[],
        token:""
      }
    },
      

   
    methods:{
      a(){
        this.isactive=! this.isactive
      },

    },
 

  async created(){
        console.log("this.$store.state.token",this.$store.state.token)
        const {data:mont} =await Mone("menus")
        this.listData =mont.data;
   

   }
}
</script>
