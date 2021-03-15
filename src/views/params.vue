<template>
  <div class="params">
      <el-container>
         <el-breadcrumb>
           <el-breadcrumb-item  :to="{path:'/'}">首页</el-breadcrumb-item>
           <el-breadcrumb-item >商品管理</el-breadcrumb-item>
           <el-breadcrumb-item >参数列表</el-breadcrumb-item>
         </el-breadcrumb>
      </el-container>

        <el-card>
            <el-row style="padding-bottom:20px">
                  <el-alert
                    title="警告提示的文案"
                    type="warning">
                  </el-alert>
            </el-row>
            <el-row align="middle" type="flex">
              <el-col :span="4" >
                  请选择商品分类:
              </el-col>
              <el-col :span="6">
                    <el-cascader
                        clearable
                        :filterable='true'
                        v-model="values"
                        :options="list"
                        :props="caryProps"
                      @change="handleChange"
                     ></el-cascader>
              </el-col>
            </el-row>
            <el-row>
              <el-tabs v-model="activeName" @tab-click="handleClick"
                   
              >
              <el-tab-pane label="动态参数"   name="many">
                <el-button type="primary" :disabled="isdisabled" @click="addparams">添加参数</el-button>
                     <el-table
                   :data="carytable"
                   :hidden="false"
                   >
                      <el-table-column
                          type=expand
                      >
                      <template slot-scope="scope">
                          <el-tag v-show="scope.row.attr_vals!=''" v-for="(item,index) in scope.row.attr_vals" :key="index "
                                  closable
                                  disable-transitions
                                  @close="deltag(item,scope.row )
                                  
                                  "
                          >{{item}}</el-tag>
                              <el-input v-if="scope.row.addiput"
                                        clearable
                                        v-model="addTabInput"
                                        size="small"
                                        @keyup.enter.native="handleInputConfirm(scope.row)"
                                        @blur="InputBluur"
                                        style=”width:100px”
                                       
                              ></el-input>
                               <el-button v-else class="button-new-tag" size="small" @click="showInput(scope.row.attr_id)">+ New Tag</el-button>
                      </template>
                      <!-- <i class="el-icon-arrow-right"/> -->
                      </el-table-column>
                      <el-table-column 
                          type=index
                          label="#"
                      >
                      </el-table-column>
                      <el-table-column 
                          prop="attr_name"
                          label="参数名称"
                          min-width="280"
                      >
                      </el-table-column>
                      <el-table-column 
                          min-width="280"
                          label="操作"
                      >
                      <template slot-scope="scope">
                          <el-button size="mini" type="primary" icon="el-icon-edit" @click="Edit(scope.row)" ></el-button>
                          <el-button size="mini" type="danger" icon="el-icon-delete"  @click="Del(scope.row)"></el-button>
                      </template>
                      </el-table-column>
                  </el-table>
              </el-tab-pane>
              <el-tab-pane label="静态参数"   name="only">
                <el-button type="primary" :disabled="isdisabled" @click="addparams">静态属性</el-button>
                   <el-table
                   :data="carytable"
                   :hidden="false"
                   >
                      <el-table-column
                          type=expand
                      >
                             <template slot-scope="scope">
                          <el-tag v-show="scope.row.attr_vals!=''" v-for="(item,index) in scope.row.attr_vals" :key="index "
                                  closable
                                  disable-transitions
                                  @close="deltag(item,scope.row)"
                          >{{item}}</el-tag>
                              <el-input 
                                      v-if="scope.row.addiput"
                                        clearable
                                        v-model="addTabInput"
                                        size="small"
                                        @keyup.enter.native="handleInputConfirm(scope.row)"
                                        @blur="InputBluur"
                                       
                              ></el-input>
                               <el-button v-else class="button-new-tag" size="small" @click="showInput(scope.row.attr_id)">+ New Tag</el-button>
                      </template>
                      </el-table-column>
                      <el-table-column 
                          type=index
                          label="#"
                      >
                      </el-table-column>
                      <el-table-column 
                          prop="attr_name"
                          label="参数名称"
                          min-width="280"
                      >
                      </el-table-column>
                      <el-table-column 
                          min-width="280"
                          label="操作"
                      >
                      <template slot-scope="scope">
                          <el-button size="mini" type="primary" icon="el-icon-edit" @click="Edit(scope.row)"></el-button>
                          <el-button size="mini" type="danger" icon="el-icon-delete" @click="Del(scope.row)"></el-button>
                      </template>
                      </el-table-column>
                  </el-table>
              </el-tab-pane>
              </el-tabs>
            </el-row>
        </el-card>
        <el-dialog
            :title="'添加'+TitelText"
            :visible.sync="isaddparams"
            :before-close="handleClose"
            width="50%"
            center
        >
            <el-form ref="form" v-model="ruleForm" label-width="80px">
                <el-form-item :label="TitelText">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item >
                   <el-button>取消</el-button>
                  <el-button type="primary" @click="submitForm(ruleForm)">确定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog
            :title="'编辑'+TitelText"
            :visible.sync="iseditparams"
            :before-close="handleClose"
            width="50%"
            center
        >
            <el-form ref="form" v-model="ruleEditForm" label-width="80px">
                <el-form-item :label="TitelText">
                    <el-input v-model="ruleEditForm.name"></el-input>
                </el-form-item>
                <el-form-item >
                   <el-button>取消</el-button>
                  <el-button type="primary" @click="EditForm(ruleEditForm.name)">确定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
  </div>
</template>

<script>
import {GetCary,GetParmas,AddParmas,EditParmas,DelParmas,AddParmasitem} from '../../requery/params';
export default {
  name:'params',
  data(){
    return{
      values:[],
      list:[],
      carytable:[],
      isdisabled:true,
      isaddparams:false,
      iseditparams:false,
      
      addTabInput:'',
      ruleForm:{
        name:''
      },
      ruleEditForm:{
        name:'',
        id:''
      },
      caryProps:{
        expandTrigger:'hover',
        value:'cat_id',
        label:'cat_name',
        children:'children'
      },
      info:{
            pagenum:1,
            pagesize:5,
            type:''
        },
        activeName: 'many'
    }
  },
  computed:{
    TitelText(){
      if(this.activeName==="many"){
        return '动态参数'
      }else{
        return '静态参数'
      }
    }
  },
  
  methods:{
    async deltag(items,row){
      console.log("items",items )
     const a = row.attr_vals.indexOf(items)
     console.log(a )
     row.attr_vals.splice(a,1)
     console.log("items",row.attr_vals )
     console.log("items",row.attr_vals.join(',') )

     await AddParmasitem(row.cat_id,this.activeName,row.attr_name,row.attr_id,row.attr_vals.join(','))
    //  this.getcate()
    },
    //更新当前分类状态
    async  getcate(){
        const {data:Sdata} =await GetParmas(this.values[2],this.activeName)
         console.log("DATA",Sdata)
          if(Sdata.meta.status !=200){
                console.log('获取参数失败')
            }
            Sdata.data.forEach((e) => {
              //  e['attr_vals']= e['attr_vals'].replace(/,/g,"")
              //   e['attr_vals'] =e['attr_vals'].trim()
              e['attr_vals'] =e['attr_vals'].split(',')
              e.addiput=false
            });
            this.carytable=Sdata.data
            //  this.loading=false
      },
    // 级联器中选值改变
      async  handleChange(value){
          if(value.length!==3){
              this.values=[]
              return
          }
          this.isdisabled=false
          console.log("asda",this.values[2] )
          this.getcate()
          
        },
    // tab标签页变化时从新请求数据
      async handleClick(tab, event) {
            console.log(tab.name);
            this.getcate()
        },
      // 获取级联器中三级分类
      async getcatelist(){
            const{data:data} =await GetCary()
            console.log(data.data)
            this.list=data.data
      } ,
      //添加属性
      addparams(){
        this.isaddparams=true
      },
      // 关闭弹出框 
      handleClose() {
        this.$confirm('确认关闭？')
          .then(() => {
          console.log("确认关闭" )
          this.isaddparams=false
          this.iseditparams=false
          }).catch(()=>{
                console.log("关闭" )
          this.isaddparams=false
          this.iseditparams=false
          })
          
      },
      // 表单提交时间
     async submitForm(formName) {
         const res= await AddParmas(this.values[2],this.activeName,formName.name)
         this.isaddparams=false
         console.log(res )
         this.getcate()
         this.$forceUpdate()
      },
      // 编辑按钮事件
      Edit(a){
        console.log("Edit" )
        console.log(a)
        this.ruleEditForm.id=a.attr_id
         this.iseditparams=true
      },
       // 编辑提交静态/动态属性
   async  EditForm(name){
        const {data:Adata} =await EditParmas(this.values[2],this.activeName,name,this.ruleEditForm.id)
         console.log("DATA",Adata.data)
          if(Adata.meta.status !=200){
                console.log('编辑参数失败')
            }
            this.iseditparams=false
          this.getcate()
      },
      // 删除静态/动态属性
    async Del(row){
        console.log("del",row.attr_id)
         const {data:Adata} =await DelParmas(this.values[2],row.attr_id)
         console.log("DATA",Adata)
          if(Adata.meta.status !=200){
                console.log('获取参数失败')
            }
            this.iseditparams=false
              this.getcate() 
    },
    // 添加TAB標簽失去焦点
    InputBluur(){
      console.log("失去焦点" )
      this.addiput=false
      this.$forceUpdate()
    },
    // 添加TAB標簽
    showInput(id){
        console.log("添加" )
        this.carytable.forEach(item=>{
            if(item.attr_id==id){
              console.log(item)
                item.addiput=true
            }
        })
        this.$forceUpdate()
    },
    // 添加动态/静态的属性
   async handleInputConfirm(row){
       console.log("点击回车",this.addTabInput )
               this.carytable.forEach(item=>{
            if(item.attr_id==row.attr_id){
                item.addiput=false
            }
        })
        
        this.$forceUpdate()
        if(row.attr_vals[0]==''){
          row.attr_vals[0]=this.addTabInput

        }else{
          row.attr_vals.push(this.addTabInput)
        }
         
         this.addTabInput=''
        console.log("join",row.attr_vals.join(','))
     const data = await AddParmasitem(row.cat_id, this.activeName, row.attr_name, row.attr_id,row.attr_vals.join(',') )
     
    },
    

      },
created:function(){
  this.getcatelist()
}
}
</script>

<style>
.el-tab-pane{
  text-align: left;
}
.paramsadd{
  display: block;
  margin: 30px  auto;
 
}
  .el-tag + .el-tag {
    margin-left: 20px;
    min-width: 70px;
  }

  .button-new-tag{
    margin-left: 20px;
  }
  .el-input--small .el-input__inner{
    width: 100px;
  }
</style>