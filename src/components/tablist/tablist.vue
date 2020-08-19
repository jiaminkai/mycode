<template>
  <div class="tab-list">
    <slot></slot>
  </div>
</template>

<style  >

.tab-list{
    width: 100%;
    
    display: flex;
    flex-direction: row;
    background-color: #f6f6f6;
    position: fixed;
 
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    z-index: 99999;
}
</style>
<script lang="ts">
import TabItem from '../tabitem/tabitem.vue'
  export default {
    name: "TabList",
    components: {
      
      TabItem
    }
  }
</script>
