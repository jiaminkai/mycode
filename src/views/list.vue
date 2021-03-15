<template>
 <el-container direction="vertical">

    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card >
        <el-input placeholder="请输入内容"  class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" style="margin-left:20px" @click="toaddgoods">添加商品</el-button>
        <el-table
        :data="goods.goods"
        border
            :v-loading="loading"
        >
            <el-table-column
                label="#"
                type="index"

            ></el-table-column>
            <el-table-column
                label="商品名称"
                prop="goods_name"
                min-width="450px"
            ></el-table-column>
            <el-table-column
                label="商品价格(元)"
                prop="goods_price"
                min-width="80px"
            ></el-table-column>
            <el-table-column
                label="商品重量"
                prop="goods_weight"
            ></el-table-column>
            <el-table-column
                label="创建时间"
                prop="upd_time"
            ></el-table-column>
            <el-table-column
                label="操作"
               min-width="150px"
            >
                <template>
                    <el-button type="primary" class="el-icon-edit" circle></el-button>
                    <el-button type="danger" class="el-icon-delete" circle ></el-button>

                </template>
            </el-table-column>
        </el-table>
           <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              
                :page-sizes="[5, 10, 20, 50 ]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
    </el-card>
 </el-container>

</template>

<script>

import { GetGood} from '../../requery/params'
export default {
    data(){
        return{
            loading:true,
            goods:[],
            query:"",
            pagenum:1,
            pagesize:10,
            total:0
        }
    },
    methods:{
      async  getgooods(){
            const {data:data} = await GetGood(this.pagesize,this.pagenum) 
            console.log(data.data)
            this.goods=data.data,
            this.total=data.data.total
            this.loading=false
        },
        handleCurrentChange(a){
            console.log(a )
            this.pagenum=a
            this.getgooods()
        },
        handleSizeChange(a){
            console.log(a )
            this.pagesize                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   =a

            this.getgooods()

        },
        toaddgoods(){
            this.$router.push('/goods/add')
        }
    },
    created:function(){
        this.getgooods()
    }
}
</script>

<style scoped>
.el-input{
    min-width: 500px;
    width: 500px;
    margin-bottom: 20px;
}
.el-breadcrumb{
    min-width: 400px;
}
.el-card{
    min-width: 950px;
    text-align: left;
    
}
.content{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.boxborder{
    border-bottom: 1px #f4f4f4  solid ;
}
</style>