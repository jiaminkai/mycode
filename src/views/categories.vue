<template>
  <div class="categories">
      <el-container>
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品分类</el-breadcrumb-item>
         </el-breadcrumb>
      </el-container>
      <el-container>
          <el-card
          >
              <tree-table
                        v-loading="loading"
                        element-loading-text="拼命加载中"

                        :data="catelist"
                        :columns="columns"
                        :selection-type="false"
                        :expand-type="false"
                        show-index
                        index-text="#"
                        border
                    >
                     <template v-slot:isok="scope">
                    <i
                        class="el-icon-success"
                        style="color: lightgreen"
                        v-if="scope.row.cat_deleted === false"
                    ></i>
                    <i class="el-icon-error" style="color: red" v-else></i
        ></template>
                    </tree-table>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[1, 3, 5, 10]"
                    :page-size="this.info.pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="this.total">
                </el-pagination>
          </el-card>
      </el-container>
  </div>
</template>

<script>
// import func from 'vue-temp/vue-editor-bridge'
import { GetCatelist } from "../../requery/params";

export default {
data(){
    return{
        catelist:[],
        loading:true,
        columns: [
        {
          label: '分类名称',
          prop: 'cat_name'
        },
        {
          label: '是否有效',
          // 表示将当前列定义为模板列
          type: 'template',
          // 表示当前这一列的模板名称
          template: 'isok'
        }
      ],
        info:{
            pagenum:1,
            pagesize:5,
            type:''
            
        },
        total:0
    }
},
methods:{
    handleSizeChange(val){
        this.info.pagesize=val;
        this.getcatelist()
    },
    handleCurrentChange(val){
        this.info.pagenum=val
        this.getcatelist()

    },
   async getcatelist(){
       
       const {data:data}= await GetCatelist(this.info);
       console.log("adra",data.data );
       this.loading=false
       this.catelist=data.data.result
        this.total=data.data.total;
        this.info.pagenum=data.data.pagenum;
        this.info.pagesize=data.data.pagesize

    }
},
created:function(){
    this.getcatelist()
}
}
</script>

<style scoped>
.el-card{
    width: 100%;
}
.el-pagination{
    text-align: left;
}
</style>