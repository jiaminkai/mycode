<template>
<div class="login">
    <el-card>
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</div>

 
</template>

<script>
import {Login} from '../../requery/login';
export default {
    data(){
        return{
         ruleForm: {
          username: '',
          password: '',
        },
        login:{},
        
        rules:{
            name:[
                { required: true, message: '请输入活动名称',trigger:'blur' },
                 { min: 3, max: 8, message: '长度在 3 到 5 个字符' }
            ],
            pass:[
               { required: true, message: '请输入密码',trigger:'blur'  },
               {min:3,max:8,message:'aaaa'}
            ]
        }

        }
    },
    methods:{
       async submitForm(){
           const {data:res} =await Login(this.ruleForm)
            this.login=res.data

            sessionStorage.setItem('token',this.login.token)
           console.log("跳转" )
           this.$router.push('/Home')
        }
    },

}
</script>

<style scoped>
body{
  background: #2b4b6b;
  height: 100%;
  overflow: hidden;
}
.el-card{
    padding-top: 100px;
}
.logo{
    height: 130px;
    width: 130px;
    border-radius: 50%;
    border: 10px #ccc solid;
    background: #fff;
   position: absolute;
    left: 50%;
    top: -10px;
    transform: translate(-50%,-50%);
    z-index: 111;
}
.logo img{
 width: 100%;
    height: 100%;
     border-radius: 50%;
    position: absolute;
    
    transform: translateX(-50%);
}
.login{
  width: 500px;
  height: 350px;
 
    position: absolute;
    left: 50%;
    top: 50%;
transform: translate(-50%,-50%);
}
</style>