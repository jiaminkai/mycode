<template>
  <div>
        <el-breadcrumb>
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品添加</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card >
            <el-alert
                title="添加商品信息"
                type="info"
                center
                :closable='false'
                show-icon>
            </el-alert>
            <el-steps :active="steps-0"  align-center finish-status="success">
                <el-step title="基本信息" ></el-step>
                <el-step title="商品参数" ></el-step>
                <el-step title="商品属性" ></el-step>
                <el-step title="商品图片" ></el-step>
                <el-step title="商品内容" ></el-step>
                <el-step title="完成" ></el-step>
            </el-steps>
               <el-form
                            
                             :hide-required-asterisk='false'
                             label-position='top'
                             :model="addGoods"
                             ref="addGoods"
                             :rules="rulesaddGoods"
                             >
                    <el-tabs 
                            :tab-position="tabPosition" 
                            style="height: auto;"
                            v-model="steps"
                            :before-leave="beforetab"
                            @tab-click="tabChange"
                             >
                        <el-tab-pane label="基本信息" name="0">
                            <el-form-item   label="商品名称" prop="goods_name">
                                <el-input v-model="addGoods.goods_name"></el-input>
                            </el-form-item>
                            <el-form-item   label="商品价格" prop="goods_price">
                                <el-input  v-model="addGoods.goods_price"></el-input>
                            </el-form-item>
                            <el-form-item   label="商品重量" prop="goods_weigth">
                                <el-input v-model="addGoods.goods_weigth"></el-input>
                            </el-form-item>
                            <el-form-item   label="商品数量" prop="goods_number">
                                <el-input v-model="addGoods.goods_number"></el-input>
                            </el-form-item>
                            <el-form-item   label="商品分类" >
                                  <el-cascader
                                        v-model="addGoods.goods_cat"
                                        :options="carylist"
                                        :props="options"
                                        @change="handleChange"></el-cascader>
                            </el-form-item>
                        </el-tab-pane>
                        <el-tab-pane label="商品参数" name="1" >
                                <el-form-item   
                                v-for="(item) in this.many_vals" :key="item.attr_id"  :label="item.attr_name"                  
                                >
                                <el-checkbox-group v-model="item.attr_vals">
                                         <el-checkbox  border v-for="(n,index) in item.attr_vals" :key="index" :label="n"></el-checkbox>
                                </el-checkbox-group>
                                </el-form-item>
                        </el-tab-pane>
                        <el-tab-pane label="商品属性" name="2">
                            <el-form-item   
                                v-for="(item) in this.only_vals" :key="item.attr_id"  :label="item.attr_name"                  
                                >
                                <el-input v-model="item.attr_vals" ></el-input>
                            </el-form-item>
                        </el-tab-pane>
                        <el-tab-pane label="商品图片" name="3">
                            <el-upload
                                action="http://119.23.53.78:8888/api/private/v1/upload"
                                list-type="picture-card"
                                :on-preview="onPreview"
                                :on-remove="onRemove"
                                :on-success="onSuccess"
                                :headers="headersObj"
                                show-file-list
                                
                                >
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible" width="80%">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </el-tab-pane>
                        <el-tab-pane label="商品内容" name="4">
                            <quill-editor  v-model="addGoods.goods_introduce" class="editor" ></quill-editor>
                            <el-button type="primary" @click="Addgoods" class="el-buttons">添加商品</el-button>
                        </el-tab-pane>
                        <el-tab-pane disabled  label="完成" name="5">
                            <el-alert
                                title="创建成功"
                                type="success"
                                effect="dark">
                            </el-alert>
                            <el-button class="succes" type="success" size="medium" @click="backgoods">完成</el-button>
                        </el-tab-pane>
                    </el-tabs>

                </el-form>

        </el-card>
        
  
  </div>

</template>

<script>
import { GetCary,PostGoods } from "../../requery/cary";
import { GetParmas } from "../../requery/params";
export default {
    data(){
        return{
            steps:  0,
            tabPosition:'left',
            tongyi:'a',
            'many_vals':[],
            'only_vals':[],
            dialogImageUrl: '',
              headersObj:{
                Authorization:window.sessionStorage.getItem('token')
            },
            dialogVisible: false,
            disabled: false,
            addGoods:{
                'goods_name':'',
                'goods_price':0,
                'goods_weigth':0,
                'goods_number':0,
                'goods_introduce':'',
                'goods_cat':[],
                 "attrs":[],
                pics:[]
            },
            options :{
        expandTrigger:'hover',
        value:'cat_id',
        label:'cat_name',
        children:'children'
      },
            
            
            carylist:[],
            rulesaddGoods:{
                'goods_name':[
                    {required:true,message:'請輸入商品名稱',trigger:'blur'}
                ],
                'goods_price':[
                    {required:true,message:'請輸入商品價格',trigger:'blur'}

                ],
                'goods_weigth':[
                    {required:true,message:'請輸入商品總量',trigger:'blur'}

                ],
                'goods_number':[
                    {required:true,message:'請輸入商品數量',trigger:'blur'}

                ]

            }

        }
    },
    computed:{
        courrId(){
            if(this.addGoods.goods_cat.length==3){
                return this.addGoods.goods_cat[2]
            }

            return []
        }
    },
    methods:{
        backgoods(){
            this.$router.back(-1)
        },
        // 提交商品
     async   Addgoods(){
            console.log(this.addGoods )
         await   this.$refs.addGoods.validate((boolean, object)=>{
                console.log("校验结果：",boolean )
                if(boolean){
                    console.log("校验成功" )
                    const str =this.addGoods.goods_cat.join(',')
                    this.addGoods.goods_cat.toString
                    this.addGoods['goods_cat']=str
                    const newmany =[]
                         
                    this['many_vals'].forEach(item=>{
                        console.log("动态",item['attr_vals'].join(','))
                        const newinfo ={'attr_id':item.attr_id,'attr_value':item['attr_vals'].join(',')}
                        newmany.push(newinfo)
                    })
                    this['only_vals'].forEach(item=>{
                        const newsinfo ={'attr_id':item.attr_id,'attr_value':item['attr_vals'] }
                        newmany.push(newsinfo)
                    })
                    this.addGoods['attrs']=newmany  
                    console.log(this.addGoods)  
                    PostGoods(this.addGoods).then(res=>{
                        console.log(res )
                        if(res.status==200){
                            this.$message.success("创建成功")
                            this.steps='5'
                        }
                    })
                    
                    // console.log("aaa",data.data)

                    // if()

                }else{
                    console.log(object)
                    this.$message.error("有必填项为填写")
                }
            })
        },
        // 圖片預測
        onPreview(file){
            console.log(file )
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        // 圖片移除
        onRemove(remov){    
            console.log( remov.response.data.tmp_path)
            const index =this.addGoods.pics.filter(item=>{
               return item.pic !==remov.response.data.tmp_path
            })
            
            console.log(  index)
            this.addGoods.pics=index
        },
        // 图片上传成功
        onSuccess(res){
            console.log(res.data)
            const picinfo = {'pic':res.data.tmp_path}
            this.addGoods.pics.push(picinfo)
        },
        // 获取分类数据
        async   getcarylist(){
            const {data:res} = await GetCary()
            this.carylist=res.data
             console.log(res.data )
        },
        // 只能选择第三联级
        handleChange(){
           if(this.addGoods.goods_cat.length!==3){
               this.addGoods['goods_cat']=[]
           }
        },
        // 标签校验没有满足不能离开当前tab
        beforetab(activeName, oldActiveName){
            // console.log(activeName, oldActiveName )
            console.log("ccc",typeof(this.addGoods.goods_cat))
            if(oldActiveName=='0'){
                if(typeof(this.addGoods.goods_cat) != 'object'){
                  this.addGoods['goods_cat'] =  this.addGoods.goods_cat.split(',')
                }
            }

            if(oldActiveName=='0'&&this.addGoods.goods_cat.length!==3){
                

                this.$message.error("請选择商品分类")
                return false
            }

            if(oldActiveName=='0'&&this.addGoods.goods_number==0){
                this.$message.error("请填写商品数量")
                this.tongyi='a'
                return false
            }
            if(oldActiveName=='0'&&this.addGoods.goods_name==''){
                this.$message.error("请填写商品名称")
                return false
            }
            if(oldActiveName=='0'&&this.addGoods.goods_price==0){
                this.$message.error("请填写商品价格")
                return false
            }
            if(oldActiveName=='0'&&this.addGoods.goods_weigth==0){
                this.$message.error("请填写商品重量")
                return false
            }
        },
    // 获取动态和静态的数据
       async tabChange(){
           console.log("steps",this.steps )
            if(this.steps=='1'){
                const{data:data} = await GetParmas(this.courrId,'many')
                if(data.meta.status==200){
                console.log(data.data)
                data.data.forEach(item => {
                   item['attr_vals']= item['attr_vals'].length===0?[]:item['attr_vals'].replace(/,/g,' ').split(' ')
                });
                this['many_vals']=data.data
                }
            }

            if(this.steps=='2'){
                const{data:data} = await GetParmas(this.courrId,'only')
                if(data.meta.status==200){

                    console.log("静态",data.data)
                    this['only_vals']=data.data
                }

                
            }
        }
        
    },
    created(){
        this.getcarylist()
    }
}
</script>

<style>
.el-card{
    min-width: 600px;
}
.el-breadcrumb{
    min-width: 600px;
}
.el-steps{
    margin: 20px 0 30px 0;
}
.el-checkbox{
    margin: 4px  !important;
}
.ql-editor{
min-height: 300px;

}
.el-from{
    height: auto;
}
.el-buttons{
    margin:10px !important;
}
.succes{
    margin: 150px auto !important;
}
</style>