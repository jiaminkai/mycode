<template>
  <div class="my">
    <div class="icon-box">
        <img :src="this.avator" class="icon" alt="">
        <div class="userbox">
          <div class="user"></div>
          <div class="weixinuser"></div>
        </div>
    </div>
    <div class="my-list">
        <div class="my-item" v-for="(item,index) in this.listData" :key="index">
          <div class="iconfont" v-html="item.icon"></div>
          <div class="my-text" v-html="item.title"></div>
        </div>
    </div>
  </div>
</template>

<style >
@font-face {
  font-family: 'iconfont';  /* project id 1723175 */
  src: url('//at.alicdn.com/t/font_1723175_5i17r0rggkn.eot');
  src: url('//at.alicdn.com/t/font_1723175_5i17r0rggkn.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1723175_5i17r0rggkn.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1723175_5i17r0rggkn.woff') format('woff'),
  url('//at.alicdn.com/t/font_1723175_5i17r0rggkn.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1723175_5i17r0rggkn.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.my{
  display: block;
  flex-direction: column;
}
.icon-box{
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(245, 242, 242);
}
.icon{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ccc;
  border: #ccc 3px solid;
}

.my-list{
  width: 100%;
  height: auto;
  background: #fff;
  float: left;
}
.my-item{
  width: 33.333%;
  float: left;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  border-right: solid 1px #ccc;
  background: #fff;
  border-bottom: solid 1px #ccc;
}
.my-item:nth-child(3n){
    border-right: solid 0px #ccc;
}
</style>
<script>
import router from '../router'
export default {
  name:'my',
  data(){
    return{
        avator: "http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png",
         listData: [{
            title: "我的订单",
            icon: "&#xe608;",
            url: ""
          },
          {
            title: "优惠券",
            icon: "&#xe609;",
            url: ""
          },
          {
            title: "我的足迹",
            icon: "&#xe625;",
            url: ""
          },
          {
            title: "我的收藏",
            icon: "&#xe60b;",
            url: "/pages/collectlist/main"
          },
          {
            title: "地址管理",
            icon: "&#xe605;",
            url: "/pages/address/main"
          },
          {
            title: "联系客服",
            icon: "&#xe91b;",
            url: ""
          },
          {
            title: "帮助中心",
            icon: "&#xe619;",
            url: ""
          },
          {
            title: "意见反馈",
            icon: "&#xe63d;",
            url: "/pages/feedback/main"
          }
        ]
    }
  }
}
</script>