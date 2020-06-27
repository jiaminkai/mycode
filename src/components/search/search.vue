<template>
    <div class="search">
        <input class="input" type="text" value="搜索">
        <img src="../../assets/img/search.png" alt="">
    </div>
</template>
<style scoped>
.search{
    width: 100%;
    position: relative;
    background: #fff;
    padding: 5px 0;
}
.input{
    width: 88%;
    margin :0 auto;
    height :23px;
    padding-left: 20px;
    color: #ccc;
}
.search img {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 30px;
    top: 7px;
}
</style>

<script>
export default {
    name:'Serch'
}
</script>