<template>
  <div id="app">
    <p>
      <router-view class="view" keep-alive transiton transiton-mode="out-in"></router-view>
      <router-link to="/list">Go to list</router-link>  
      <router-link to="/content">Go to content</router-link>  
    </p>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
html,body{
  margin:0;
  padding:0;
}
</style>
