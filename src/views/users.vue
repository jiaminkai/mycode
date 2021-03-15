<template>

   <el-card class="box-card" >
                <el-container>
                  <el-row :gutter="10">
                    <el-col :span="18" :gutter="20">
                    <el-input placeholder="请输入内容" @change="changeinput(inputchange)"  v-model="inputchange" class="input-with-select">
                       <el-button slot="append" icon="el-icon-search" ></el-button>
                    </el-input>
                  </el-col>
                  <el-col :span="3">
                        <el-button type="primary" @click="centerDialogVisible = true">添加内容</el-button>
                        <el-dialog
                          title="提示"
                          :visible.sync="centerDialogVisible"
                          width="30%"
                          center>
                          <el-form :model="adduser" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
                              <el-form-item label="用户名称" prop="username">
                                  <el-input type="text" v-model="adduser.username" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="用户密码" prop="password">
                                  <el-input type="password" v-model="adduser.password" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="邮箱" prop="email">
                                  <el-input v-model="adduser.email"></el-input>
                                </el-form-item>
                                <el-form-item label="手机号" prop="mobile">
                                  <el-input v-model.number="adduser.mobile"></el-input>
                                </el-form-item>
                                <el-form-item>
                                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                              </el-form>
                        </el-dialog>
                  </el-col>
                  </el-row>
                </el-container>
                <!-- 面包屑 -->
                <el-container>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                      <el-breadcrumb-item>一级菜单</el-breadcrumb-item>
                      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-container>
                <!-- 表格 -->
                <el-container >
                      <el-table
                          v-loading="loading"
                        :data="users"
                        border
                        style="width: auto"
                        stripe>
                         <el-table-column
                         label="#"
                          type="index">
                          </el-table-column>
                          <el-table-column
                          
                            prop="id"
                            label="id"
                            width="150">
                          </el-table-column>
                          <el-table-column
                            prop="username"
                            label="姓名"
                            width="150">
                          </el-table-column>
                          <el-table-column
                            prop="create_time"
                            label="手机号"
                            width="150">
                          </el-table-column>
                          <el-table-column
                            prop="email"
                            label="电子邮箱"
                            width="150">
                          </el-table-column>
                          <el-table-column
                            prop="role_name"
                            label="权限"
                            width="150">
                        
                          </el-table-column>
                        <el-table-column  
                            label="操作"
                            width="280"
                            class="zsg">
                            <template scope="scope">
                                <el-button type="danger" @click="detele(scope.row.id)" >删除</el-button>
                                <el-button type="warning" @click="changeuser(scope.row.id)">编辑</el-button>
                          
                            </template>
                          </el-table-column>
                      </el-table>
                </el-container>
                <!-- 分页 -->
                <el-container>  
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="this.pageInfo.pagenum"
                        :page-sizes="[1, 2, 5, 10]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="this.total">
                    </el-pagination>
                </el-container>
                <el-dialog title="更改  " :visible.sync="isputbutton">
                  <el-form :model="form">
                    <el-form-item label="邮箱" label-width="250px">
                      <el-input v-model="form.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" label-width="250px">
                      <el-input v-model="form.mobile" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
                  </div>
                </el-dialog>
                <!-- <el-button @click="adds"> 增加</el-button> -->
            </el-card>
  
</template>

<script>

import {GetUser,SechUser,AddUser,UpUser,DelUser} from '../../requery/home';
export default {
  name:'user',
    data(){
        return{
           loading:false,
         pageInfo:{
          query :'',
          pagenum:1,
          pagesize:1,
        },
        inputchange:'',
        total:0,
        users:[],
        isputbutton:false,
        centerDialogVisible:false,
        visible:false,
        adduser:{
          username:"",
          password:"",
          email:"",
          mobile:""
        },
        form:{
          email:'',
          mobile:'',
          id:''
        }
        }
    },
methods:{

//     size-change	pageSize 改变时会触发	每页条数
// current-change	currentPage 改变时会触发	当前页
// prev-click	用户点击上一页按钮改变当前页后触发	当前页
// // next-click	用户点击下一页按钮改变当前页后触发
   async changeinput(value){
      console.log("aaa", value)
      if(value!=''){
          const {data:data}= await SechUser(value)
          console.log("返回数据",data.data)
          if(data.data==null){
            alert("没有对应的数据")
          }else{
          this.users=[];
          this.users.push(data.data);
          this.total=1; 
          }
      }else{
        this.getdata();
      }

    },
   async getdata(){
       this.loading=true;
       const {data:data} = await GetUser(this.pageInfo)
           this.users=data.data.users;
            this.total=data.data.total
        console.log("data",data)
       this.loading=false;
    },
   async detele(id){

      console.log(id)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         DelUser('users/'+id+'')
          this.getdata()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
       
    },
    changeuser(id){
      console.log(id )
      this.form.id=id
  this.isputbutton=!this.isputbutton;
    },
    dialogFormVisible(){
      this.isputbutton=false
       UpUser("users/"+this.form.id,{email:this.form.email,mobile:this.form.mobile})
    },
   async submitForm(){
     console.log(this.adduser )
      const add =await AddUser(this.adduser)
      console.log(add)
     this.centerDialogVisible=false

    },
    resetForm(){
     this.adduser.username="",
     this.adduser.password="",
     this.adduser.email="",
     this.adduser.mobile=""
    },
    // 每页条数变化
    handleSizeChange(a){
        console.log( "每页多少条",a)
        this.pageInfo.pagesize=a
        this.getdata()
    },
    handleCurrentChange(a){
         console.log("当前页", a)
         this.pageInfo.pagenum=a
         this.getdata()
    },
    
    },
created(){
    this.getdata()
}
}
</script>

<style scoped>

.zsg{
    display: flex;
    justify-content: center;
}
.box-card{
    width: auto;
    flex: none;

}

</style>