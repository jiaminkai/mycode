<template>

  <div>
    <el-card>
        <el-container>
            <el-button @click="button()" type="primary">添加用户</el-button>
        </el-container>
        <el-container >
            <el-table
            :data="this.rolselist"
            stripe
            border
            >
                <el-table-column
                    :width="40"
                    type="expand"
                >
                <i class="el-icon-arrow-right"></i>
                    <template slot-scope="props">
                        <el-row type="flex" align="middle" v-for="(item,index) in props.row.children" :key="index"> 
                            <el-col :span="5" >
                                <el-tag
                                    closable>
                                    {{item.authName}}
                                </el-tag>
                            </el-col>
                            <el-col :span="19" >
                                <el-row  v-for="(it, index) in item.children" :key="index">
                                    <el-col class="boxborder" :span="5">
                                        <el-tag type="success" closable>{{it.authName}}</el-tag>
                                    </el-col>
                                    <el-col  :span="19">
                                        <el-tag style="margin:10px" v-for="(t,index) in it.children " :key="index" type="warning" closable>{{t.authName}}</el-tag>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </template>
                </el-table-column>
                <el-table-column
                label="#"
                type="index"
                ></el-table-column>
                <el-table-column
                label="角色名称"
                prop="roleName"
                min-width="280px"
                ></el-table-column>
                <el-table-column
                label="角色描述"
                prop="roleDesc"
                min-width="280px"

                ></el-table-column>
                <el-table-column
                width="280px"
                >
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="checkWegith(scope.row)" icon="el-icon-edit">编辑</el-button>
                    <el-button size="mini" type="danger"  @click="deleteuser(scope.row.id)" icon="el-icon-delete">删除</el-button>
                    <el-button size="mini" type="warning" @click="fenpei(scope.row)" icon="el-icon-tools">分配权限</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-container>
    </el-card>
    <el-dialog
    @close="qingkongkey()"
  title="提示"
  :visible.sync="this.isfenpei"
  width="60%"
  modal
   :before-close="handleClose"
  center>
  <el-tree
  ref="trees"
  getCurrentKey
  :data="rolsetree"
  show-checkbox
  node-key="id"
  default-expand-all
  :default-checked-keys="defKey"
  :props="defaultProps">
</el-tree>
  <span slot="footer" class="dialog-footer">
    <el-button @click="isfenpei = false">取 消</el-button>
    <el-button @click="querytree()" type="primary">确 定</el-button>
  </span>
</el-dialog>
 <el-dialog
  title="添加角色"
  :visible.sync="this.isadduser"
  width="60%"
  modal
   :before-close="adduser"
  center>
    <el-form :model="this.addrolse">
        <el-form-item label="角色名称">
            <el-input v-model="addrolse.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
            <el-input v-model="addrolse.roleDesc"></el-input>

        </el-form-item>

    </el-form>
  <span slot="footer" class="dialog-footer"> 
    <el-button @click="isadduser = false">取 消</el-button>
    <el-button type="primary" @click="addrols()">确 定</el-button>
  </span>
</el-dialog>
 <el-dialog
  title="编辑角色"
  :visible.sync="this.ischeckuser"
  width="60%"
  modal
   :before-close="closecheck"
  center>
    <el-form :model="this.checkuser">
        <el-form-item label="角色名称">
            <el-input v-model="checkuser.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
            <el-input v-model="checkuser.roleDesc"></el-input>
        </el-form-item>

    </el-form>
  <span slot="footer" class="dialog-footer"> 
    <el-button @click="ischeckuser = false">取 消</el-button>
    <el-button type="primary" @click="putrols()">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import { AddRolsUser,AddRols,EditRols,DelRols,GetLife,GetRoles} from "../../requery/cary";
export default {
    name:'roles',
    data(){
        return{
            rolselist:[],
            isfenpei:false,
            isadduser:false,
            ischeckuser:false,
            rolsetree:[],
            defaultProps:{
                children:'children',
                label:'authName',
                id:'id'
            },
            defKey:[],
            addrolse:{
                roleName:'',
                roleDesc:''
            },
             checkuser:{
                roleName:'',
                roleDesc:''
            },
            rids:"",
            roleId:0
                

        }
    },
    methods:{

        deleteuser(id){
             this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          showClose:true,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
          .then(() => {
             DelRols(id);
             this.$message({
              type: 'info',
              message: '已删除',
              
            });
            this.getrolelsit()
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: '取消删除'
            })
          });
            
        },
        // 添加权限
       querytree(){
           this.isfenpei = false
          const key=[...this.$refs.trees.getCheckedKeys(),...this.$refs.trees.getHalfCheckedKeys()];
          this.rids=key.join(",")
          console.log("key", this.rids);
          
        AddRols(this.roleId,this.rids)
        this.getrolelsit()
        },

        // 关闭对话框时清空key值
        qingkongkey(){
            this.defKey=[]
            console.log("defKey", this.defKey)
        },
        // 添加用户
        async addrols(){
            this.isadduser = false;
            const {data:data} =await AddRolsUser(this.addrolse.roleName,this.addrolse.roleDesc)
            console.log("data",data )
            this.getrolelsit()
        },
        // 编辑用户
        checkWegith(row){
            this.roleId=row.id
            this.ischeckuser=true
            console.log("row", row)
            this.checkuser.roleName=row.roleName
            this.checkuser.roleDesc=row.roleDesc
            console.log(this.checkuser)
        },
        closecheck(){
            this.ischeckuser=false
        },
        // 编辑用户提交
      async putrols(){
           this.ischeckuser = false
           await EditRols(this.roleId,this.checkuser.roleName,this.checkuser.roleDesc)
                this.getrolelsit()
        },
        // 显示添加用户太画框
        button(){
            this.isadduser=true
            console.log("button",this.isadduser )
        },
        // 关闭谈话狂触发
        adduser(){
            this.isadduser=false
        },
        // 关闭用户添加谈话狂触发
        handleClose(){
            this.isfenpei=false
        },

       async  getrolelsit(){
          const {data:data} = await GetRoles();
        console.log(data)
        this.rolselist=data.data
        },
// 获取要分配权限的数据
      async  fenpei(role){
          console.log(role.id )
          this.roleId=role.id
            this.isfenpei=!this.isfenpei;
            const {data:data} = await GetLife()
            this.rolsetree=data.data
            console.log("key",this.getweigth(role,this.defKey))
            this.getweigth(role,this.defKey)
        },
        getweigth(node,arr){
            if(!node.children){
                return arr.push(node.id)
            }
            node.children.forEach(item=>{
                this.getweigth(item,arr)
            })
            console.log(this.defKey)
        }
    },

    created:function(){
        this.getrolelsit()
    }
}
</script>

<style>
.el-tag{
    margin: 20px 0;
}
</style>