<template>
  <div id="app">
      <router-view class="view" keep-alive transiton transiton-mode="out-in"></router-view>
      <!-- <router-link to="/list">Go to list</router-link>  
      <router-link to="/content">Go to content</router-link>   -->
  </div>
</template>
<script>
export default {
  data:function(){
     return{
        title:"this is a todo list"
     }
  }
}
</script>

<style>
html,body,p,ul,ol{
  margin:0;
  padding:0;
}
</style>
