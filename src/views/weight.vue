<template>
 <div class="weight">
     <el-card>
         <el-table
         :data="WeightList"
         border
         >
        <el-table-column
        label="#"
        type="index"
        ></el-table-column>
        <el-table-column
        label="权限名称"
        prop="authName"
        ></el-table-column>
       <el-table-column
        label="路径"
        prop="path"
        ></el-table-column>
        <el-table-column
        label="权限等级"
      
        >
            <template slot-scope="scope">
               <el-button v-if="scope.row.level==0" type="primary" plain>一级</el-button>
               <el-button v-if="scope.row.level==1" type="success" plain>二级</el-button>
               <el-button v-if  ="scope.row.level==2" type="warning" plain>三级</el-button>


               
            </template>
        </el-table-column>
         </el-table>
     </el-card>
 </div>
</template>

<script>
import {GetMone} from '../../requery/weight';
export default {
    name:'weight',
    data(){
        return{
            WeightList:[]
        }
    },
    methods:{
       async getWeight(){
            const {data:data} = await GetMone('rights/list')
            console.log(data )
            this.WeightList=data.data
        }
    },
    created:function(){
        this.getWeight()
    }
}
</script>

<style>

</style>