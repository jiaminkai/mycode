<template>
<div class="orders">
  <el-breadcrumb>
           <el-breadcrumb-item  :to="{path:'/'}">首页</el-breadcrumb-item>
           <el-breadcrumb-item >訂單管理</el-breadcrumb-item>
           <el-breadcrumb-item >訂單列表</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
        <el-row>
            <el-col :span="12">
            <el-input v-model="orderInfo.query" placeholder="請輸入内容！" @change="search" clearable @clear="clearable">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-table
                     :data="carylist"
                     border
                     stripe

                >
                <el-table-column 
                    type="index"
                    label="#"
                    min-width="80px"
                    ></el-table-column>
                <el-table-column
                    label="訂單編號"
                    prop="order_number"
                    min-width="300px"
                ></el-table-column>
                <el-table-column
                    min-width="110px"
                    label="訂單價格"
                    prop="order_price"
                ></el-table-column>
                <el-table-column
                    label="是否付款"
                    min-width="120px"
                    >
                   
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.pay_status" type="danger">未付款</el-tag>
                        <el-tag v-else type="success">已付款</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                min-width="100px"
                label="是否发货"
                >
                    
                    <template slot-scope="scope">
                        {{scope.row.is_send }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="下单时间"
                    prop="update_time"
                    min-width="150px"
                    ></el-table-column>
                <el-table-column
                    label="操作"
                    min-width="220px"
                    >
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="order_edit(scope.row)"> 编辑</el-button>
                        <el-button type="success" icon="el-icon-location-information" size="mini" @click="position(scope.row)">定位</el-button>
                        <el-button type="Warning" icon="el-icon-box" size="mini" @click="wuliu(scope.row)">物流</el-button>

                    </template>
                    </el-table-column>
            </el-table>
        </el-row>
        <el-row>
             <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[3, 5, 10, 20]"
                :page-size="this.orderInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="this.total">
            </el-pagination>
        </el-row>
    
  </el-card>
  <el-dialog
    title="修改订单"
    :visible.sync="editdialog"
     width="50%"
    :before-close="handleClose"
    >
        <el-form :model="editfrom"
         :ref="editfrom" 
         
         label-position="top">
            <el-form-item
                label="订单 ID"
                prop="id"
            >
                <el-input type="text" disabled v-model="editfrom.id"></el-input>
            </el-form-item>
            <el-form-item
                label="订单是否发货"
                prop="is_send"
            >
                <el-input type="text"  v-model="editfrom.is_send"></el-input>
            </el-form-item>
            <el-form-item
                label="订单支付"
                prop="order_pay"
            ></el-form-item>
                <el-input type="text"  v-model="editfrom.order_pay"></el-input>

            <el-form-item
                
                label="订单价格 "
                prop="order_price"
            ></el-form-item>
                 <el-input type="text"  v-model="editfrom.order_price"></el-input>
            <el-form-item
                label="订单数量 "
                prop="order_number"
            ></el-form-item>
                 <el-input type="text"  v-model="editfrom.order_number"></el-input>
            <el-form-item
                label="支付状态"
                prop="pay_status"
            >
                 <el-input type="text"  v-model="editfrom.pay_statu"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button>取消</el-button>
                <el-button type="primary" @click="EditGoods">确定</el-button>

            </el-form-item>
        </el-form>
  </el-dialog>
  <el-dialog
     title="修改地址"
    :visible.sync="positions"
    width="50%"
    :before-close="ClosePostiton"
  >
        <el-form v-model="positionfrom" :ref="positionfrom" 
                 label-width="160px"
                 label-position="left"
                 >
            <el-form-item label="省市区/县">
                <template>
                     <v-distpicker class="distpicker" @selected="onSelected"></v-distpicker>
                </template>
            </el-form-item>
            <el-form-item
                label="详细地址"
                prop="positionfrom.addres"
                >
                <el-input v-model="positionfrom.addres"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="mini">取消</el-button>
                <el-button type="primary" @click="editaddres">确定</el-button>
            </el-form-item>
        </el-form>
  </el-dialog>
  <el-dialog
   :visible.sync="iswuliu"
    width="50%"
    title="物流信息"
    >
        <el-timeline :reverse="reverse">
            <el-timeline-item
            v-for="(activity, index) in wuliudata"
            :key="index"
            :timestamp="activity.time">
            {{activity.context}}
            </el-timeline-item>
        </el-timeline>
  </el-dialog>
</div>

</template>

<script>
import {GetOrder,PutOrder,GetWuLiu} from '../../requery/orders';
import VDistpicker from 'v-distpicker'
export default {
    name:'orders',
    data(){
        return{
            carylist:[],
            reverse:true,
            total:1,
            userid:0,
            iswuliu:false,
            editdialog:false,
            positions:false,
            adders:[],
            wuliudata:[
      {
        "time": "2018-05-10 09:39:00",
        "ftime": "2018-05-10 09:39:00",
        "context": "已签收,感谢使用顺丰,期待再次为您服务",
        "location": ""
      },
      {
        "time": "2018-05-10 08:23:00",
        "ftime": "2018-05-10 08:23:00",
        "context": "[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件",
        "location": ""
      },
      {
        "time": "2018-05-10 07:32:00",
        "ftime": "2018-05-10 07:32:00",
        "context": "快件到达 [北京海淀育新小区营业点]",
        "location": ""
      },
      {
        "time": "2018-05-10 02:03:00",
        "ftime": "2018-05-10 02:03:00",
        "context": "快件在[北京顺义集散中心]已装车,准备发往 [北京海淀育新小区营业点]",
        "location": ""
      },
      {
        "time": "2018-05-09 23:05:00",
        "ftime": "2018-05-09 23:05:00",
        "context": "快件到达 [北京顺义集散中心]",
        "location": ""
      },
      {
        "time": "2018-05-09 21:21:00",
        "ftime": "2018-05-09 21:21:00",
        "context": "快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]",
        "location": ""
      },
      {
        "time": "2018-05-09 13:07:00",
        "ftime": "2018-05-09 13:07:00",
        "context": "顺丰速运 已收取快件",
        "location": ""
      },
      {
        "time": "2018-05-09 12:25:03",
        "ftime": "2018-05-09 12:25:03",
        "context": "卖家发货",
        "location": ""
      },
      {
        "time": "2018-05-09 12:22:24",
        "ftime": "2018-05-09 12:22:24",
        "context": "您的订单将由HLA（北京海淀区清河中街店）门店安排发货。",
        "location": ""
      },
      {
        "time": "2018-05-08 21:36:04",
        "ftime": "2018-05-08 21:36:04",
        "context": "商品已经下单",
        "location": ""
      }
    ],
            positionfrom:{
                addres:''
            },
            editfrom:{
                id:'',
                'is_send':'',
                'order_pay':'',
                'order_price' :'',
                'order_number':'',
                'pay_statu':''
            },
            orderInfo:{
                query:'',
                pagenum:1,
                pagesize:5   
            }
        }
    },
    computed:{
        fukuan(scope){
            return scope=='是'

        }
    },
    components:{
        VDistpicker 
    },
    methods:{
        wuliu(row){
           
            this.iswuliu =true
             console.log(this.iswuliu  )
        },

        editaddres(){
            console.log("确定" )
        },
        // 城市选择
        onSelected(data) {
        console.log(data.province , ' | ' , data.city ,' | ' , data.area)
        console.log("addres",data)
        const addres = data.province.value+data.city.value+data.area.value
        this.positionfrom.addres=addres
        },
        //定位修改
        position(row){
            console.log("定位",row )
            this.positions=true

        },
        ClosePostiton(){
            this.positions=false
        },
        // 编辑订单信息提交
       async EditGoods(){
            const {data:data} = await PutOrder(this.editfrom['id'],this.editfrom)
            console.log(data )
            this.editdialog=false
        },  

    'order_edit'(row){
        console.log(row['user_id'] )
        this.userid =row['user_id']
        this.editdialog=true
        this.editfrom['id']=row['order_id']
        this.editfrom['is_send']=row['is_send']
        this.editfrom['order_pay']=row['order_pay']
        this.editfrom['order_price']=row['order_price']
        this.editfrom['order_number']=row['order_number']
        this.editfrom['pay_statu']=row['pay_status']

    },  
    handleClose(){
        this.editdialog=false
    },
    // 获取订单数据
     async carty(){
         const{data:data} =await GetOrder(this.orderInfo)
         console.log(data.data)
         this.carylist=data.data.goods
         this.total=data.data.total
       },
    //    控制显示一些显示多少条数据
       handleSizeChange(val){
           console.log("显示多少条数据",val)
           this.orderInfo.pagesize=val
           this.carty()
       },
    //    控制当前页
       handleCurrentChange(val){
           console.log("当前第几页",val )
           this.orderInfo.pagenum=val
           this.carty()

       },
    //    清空搜索项
        clearable(){
            this.orderInfo.query=''
            this.carty()
        },
        search(){
            this.carty()
        }

    },

    created(){
        this.carty()
    }

}
</script>

<style scoped>

.el-dialog{
    min-width: 600px;
}
.distpicker{
    margin: left;
}
.el-timeline-item{
    text-align: left;
}
.el-button{
   min-width: 60px;
}

</style>