<template>
  <div id="app">
    
    <router-view></router-view>
    <tab-list>
      <tab-item  link="/main">
        <img slot="item-icon" src="./assets/img/ic_menu_choice_nor.png" alt="">
        <img slot="item-icon-active" src="./assets/img/ic_menu_choice_pressed.png"  alt="">
        <span slot="item-text">首页</span>
      </tab-item>
      <tab-item link="/special">
        <img slot="item-icon" src="./assets/img/ic_menu_topic_nor.png" alt="">
        <img slot="item-icon-active" src="./assets/img/ic_menu_topic_pressed.png"  alt="">
        <span slot="item-text">专题</span>
      </tab-item>
      <tab-item link="/categroy">
        <img slot="item-icon" src="./assets/img/ic_menu_sort_nor.png" alt="">
        <img slot="item-icon-active" src="./assets/img/ic_menu_sort_pressed.png"  alt="">
        <span slot="item-text">分类</span>
      </tab-item>
      <tab-item link="/cart">
        <img slot="item-icon" src="./assets/img/ic_menu_shoping_nor.png" alt="">
        <img slot="item-icon-active" src="./assets/img/ic_menu_shoping_pressed.png"  alt="">      
        <span slot="item-text">购物车</span>
      </tab-item>
      <tab-item link="/my">
        <img slot="item-icon" src="./assets/img/ic_menu_me_nor.png" alt="">
        <img slot="item-icon-active" src="./assets/img/ic_menu_me_pressed.png"  alt="">
        <span slot="item-text">我的</span>
      </tab-item>
    </tab-list>
    <!-- <banter :list="banner" v-if="fale" />
    <channel :channellist="channel" v-if="fale"/>
    <brand :brandlist="brandList"/>
    <newgoods :newgoods="newGoods"/> 
    <newgoods :newgoods="hotGoods"/>  -->
  </div>
</template>

<style>
html{
  height: 100%;
  width: 100%;
}
body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #EAEAEA;
  height: 100%;
  width: 100%;
  /* padding-bottom: 49px; */
  /* overflow: scroll; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
<script >
import TabList from './components/tablist/tablist.vue'
import TabItem from './components/tabitem/tabitem.vue'


export default {
  name:'app',

  components:{
    TabList,
    TabItem 
  },
  methods:{

  },
  
      
}
      

</script>