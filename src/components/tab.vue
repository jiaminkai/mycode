<template>
 <div class="container-fluid bg-dark">
    <div class="container-fluid shadow-lg position-relative ">
    <div class="containers d-flex    align-items-center">
            <div class="d-flex  align-items-center " style="height: 120px;width: 850px;">
                <ul id="pic"  class="nav d-flex align-items-center">
                    <li class="nav-item mr-4"><a href=""><img src="img/logo.jpg" alt="" style="height: 55px;width: 55px;"></a></li>
                    <li  class="nav-item"  >
<!-- 全部商品分类 -->
                        <div id="box" style="width: auto; height: auto;">
                            <a id="nav-block" class=" active d-block " style="font-size: 18px; padding: 26px  12px; color: black;" href="" class="w-100">全部商品分类</a>
<!-- 隐藏的分类导航条 -->
                            <div id="nav-hide" class=" position-absolute " style="top: 93px; z-index: 9999; left: 412px; width: 234px; height: 460px; border: brown 1px solid;">
                                <ul class="list-unstyled d-flex flex-column w-100" style="padding: 20px 0;">
<!-- 隐藏分类的子菜单 -->
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;">
                                        <a href="" class="d-block w-100   a d-flex  justify-content-between"><span>手机 电话卡</span><span class="iconfont pr-4">&#xe607;</span></a>
                                    </li> 
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block    w-100 a d-flex flex-row justify-content-between"><span>电视 盒子</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>笔记本 显示器 平板</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>家电 插线板</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>出行 穿戴</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>智能 路由器</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>电源 配件</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>健康 儿童</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>耳机 音箱</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                    <li class="list-inline-item  pl-4 w-100" style="height: 43px; line-height: 43px ;"><a href="" class="d-block   w-100 a  d-flex flex-row justify-content-between"><span>生活 箱包</span><span class="iconfont pr-4">&#xe607;</span></a></li>
                                </ul>
<!-- 隐藏分类的子菜单的分类菜单 -->                  

                                <div id="nav-hide-item" class=" position-absolute bg-white shadow-lg" style="top: 0;left: 234px;width: 966px;height: 460px;">
                               
                                </div>
                            </div>
                        </div>
                    </li>
<!-- 小米手机 -->
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2 nav-item-hied d-block " style="font-size: 18px; color: black;" href="" class="w-100">小米手机</a>
                        <div id="hide-nav" class="container-fluid hide  bg-white  shadow position-absolute" style="top: 125px; left: 0; height: 200px;margin-top: -30px; z-index: 100000;">
                            <div class="containers bg-white border-top border-bottom " style="height: 200px;">
                                <ul  class="list-unstyled h-100 d-flex nav-ul flex-row ">           
                                </ul>
                            </div>
                        </div>
                    </li>
                    
<!-- Redmi 红米 -->
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2 nav-item-hied d-block " style="font-size: 18px; color: black;" href="" class="w-100">Redmi 红米</a>
                        <div id="hide-nav" class="container-fluid hide  bg-white  shadow position-absolute" style="top: 125px; left: 0; height: 200px;margin-top: -30px; z-index: 100000;">
                            <div class="containers bg-white border-top border-bottom " style="height: 200px;">
                                <ul  class="list-unstyled h-100 d-flex nav-ul flex-row ">           
                                </ul>
                            </div>
                        </div>
                    </li>
<!-- 电视   -->
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2 nav-item-hied d-block " style="font-size: 18px; color: black;" href="" class="w-100">电视</a>
                        <div id="hide-nav" class="container-fluid hide  bg-white  shadow position-absolute" style="top: 125px; left: 0; height: 200px;margin-top: -30px; z-index: 100000;">
                            <div class="containers bg-white border-top border-bottom " style="height: 200px;">
                                <ul  class="list-unstyled  h-100 d-flex nav-ul flex-row ">           
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2 nav-item-hied d-block " style="font-size: 18px; color: black;" href="" class="w-100">笔记本</a>
                        <div id="hide-nav" class="container-fluid hide  bg-white  shadow position-absolute" style="top: 125px; left: 0; height: 200px;margin-top: -30px; z-index: 100000;">
                            <div class="containers bg-white border-top border-bottom " style="height: 200px;">
                                <ul  class="list-unstyled h-100 d-flex nav-ul flex-row ">           
                                </ul>
                            </div>
                        </div>
                    </li>
  <!-- 家电                     -->
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2 nav-item-hied d-block " style="font-size: 18px; color: black;" href="" class="w-100">家电</a>
                        <div id="hide-nav" class="container-fluid hide  bg-white  shadow position-absolute" style="top: 125px; left: 0; height: 200px;margin-top: -30px; z-index: 100000;">
                            <div class="containers bg-white border-top border-bottom " style="height: 200px;">
                                <ul  class="list-unstyled h-100 d-flex nav-ul flex-row ">           
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2 nav-item-hied d-block " style="font-size: 18px; color: black;" href="" class="w-100">路由器</a>
                        <div id="hide-nav" class="container-fluid hide  bg-white  shadow position-absolute" style="top: 125px; left: 0; height: 200px;margin-top: -30px; z-index: 100000;">
                            <div class="containers bg-white border-top border-bottom " style="height: 200px;">
                                <ul  class="list-unstyled h-100 d-flex nav-ul flex-row ">           
                                </ul>
                            </div>
                        </div>
                    </li>
 <!-- 智能硬件                    -->
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2 nav-item-hied d-block " style="font-size: 18px; color: black;" href="" class="w-100">智能硬件</a>
                        <div id="hide-nav" class="container-fluid hide  bg-white  shadow position-absolute" style="top: 125px; left: 0; height: 200px;margin-top: -30px; z-index: 100000;">
                            <div class="containers bg-white border-top border-bottom " style="height: 200px;">
                                <ul  class="list-unstyled h-100 d-flex nav-ul flex-row ">           
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2  d-block " style="font-size: 18px; color: black;" href="" class="w-100">服务</a></li>
                    <li class="nav-item"><a  class=" pt-4 pb-4 pl-2 pr-2  d-block " style="font-size: 18px; color: black;" href="" class="w-100">社区</a></li>
                </ul>
            </div>
            
            <div class="input-group position-relative" style="flex: 1;right: 0;">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append " >
                  <span class="input-group-text iconfont" id="basic-addon2" >&#xe662;</span>
                </div>
              </div>
              
    </div>
</div>

<!-- 头部end -->
</div>
</template>

<script lang="ts">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
